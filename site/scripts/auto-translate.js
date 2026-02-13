#!/usr/bin/env node
/**
 * Auto-translate lessons using Claude API.
 *
 * Requires: ANTHROPIC_API_KEY environment variable
 *
 * Uso:
 *   node auto-translate.js --lang=en [--lesson=0.1] [--all] [--delay=2000]
 *
 * Opcoes:
 *   --lang     Idioma alvo (en ou es)
 *   --lesson   Traduzir apenas uma licao especifica
 *   --all      Traduzir todas as licoes
 *   --delay    Delay entre requisicoes em ms (padrao: 2000)
 *   --dry-run  Mostrar o que seria feito sem chamar API
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const API_KEY = process.env.ANTHROPIC_API_KEY;
const MODEL = 'claude-sonnet-4-20250514';

const LANG_CONFIG = {
    en: {
        code: 'en-US',
        name: 'English',
        systemPrompt: `You are a professional translator specializing in legal and technical content.
Your task is to translate Brazilian Portuguese content to English.

Guidelines:
- Keep technical terms in their original form when commonly used in English (e.g., LLM, API, RAG, prompt)
- Maintain ALL HTML formatting exactly as provided - do not modify any HTML tags
- For Brazilian legal references (e.g., "CNJ", "STF", "BNDES"), keep the abbreviation and add a brief English explanation in parentheses on first use
- Adapt idiomatic expressions to natural English equivalents
- Preserve the professional, educational tone of the original
- Output ONLY valid JSON, no additional text or explanation`
    },
    es: {
        code: 'es-ES',
        name: 'Spanish',
        systemPrompt: `You are a professional translator specializing in legal and technical content.
Your task is to translate Brazilian Portuguese content to Spanish (neutral Latin American/Spain).

Guidelines:
- Keep technical terms in their original form when commonly used in Spanish (e.g., LLM, API, RAG, prompt)
- Maintain ALL HTML formatting exactly as provided - do not modify any HTML tags
- For Brazilian legal references (e.g., "CNJ", "STF", "BNDES"), keep the abbreviation and add a brief Spanish explanation in parentheses on first use
- Adapt cultural references to be understandable for Spanish speakers
- Preserve the professional, educational tone of the original
- Output ONLY valid JSON, no additional text or explanation`
    }
};

function parseArgs() {
    const args = {};
    process.argv.slice(2).forEach(arg => {
        if (arg.startsWith('--')) {
            const [key, value] = arg.slice(2).split('=');
            args[key] = value || true;
        }
    });
    return args;
}

function loadSourceContent() {
    const ptPath = path.join(__dirname, '..', 'i18n', 'caderno', 'pt.json');
    if (!fs.existsSync(ptPath)) {
        throw new Error('Arquivo fonte nao encontrado. Execute primeiro: node extract-lessons.js');
    }
    return JSON.parse(fs.readFileSync(ptPath, 'utf-8'));
}

function loadTargetContent(lang) {
    const targetPath = path.join(__dirname, '..', 'i18n', 'caderno', `${lang}.json`);
    if (fs.existsSync(targetPath)) {
        return JSON.parse(fs.readFileSync(targetPath, 'utf-8'));
    }
    return createEmptyTarget(lang);
}

function createEmptyTarget(lang) {
    const config = LANG_CONFIG[lang];
    return {
        meta: {
            lang: config.code,
            title: lang === 'en' ? 'AI Training Applied to Law' : 'Formacion en IA Aplicada al Derecho',
            subtitle: lang === 'en' ? 'Exercise Notebook' : 'Cuaderno de Ejercicios',
            author: 'George Marmelstein',
            version: '1.0.0'
        },
        ui: {
            sidebar_title: lang === 'en' ? 'AI Applied to Law' : 'IA Aplicada al Derecho',
            sidebar_subtitle: lang === 'en' ? 'Exercise Notebook' : 'Cuaderno de Ejercicios',
            theme_light: lang === 'en' ? 'Light mode' : 'Modo claro',
            theme_dark: lang === 'en' ? 'Dark mode' : 'Modo oscuro',
            prev_lesson: lang === 'en' ? 'Previous lesson' : 'Leccion anterior',
            next_lesson: lang === 'en' ? 'Next lesson' : 'Proxima leccion',
            exercise: lang === 'en' ? 'Exercise' : 'Ejercicio',
            tip: lang === 'en' ? 'Practical Tip' : 'Consejo Practico',
            warning: lang === 'en' ? 'Common Pitfall' : 'Error Comun',
            checklist: lang === 'en' ? 'Verification Checklist' : 'Lista de Verificacion',
            copy: lang === 'en' ? 'Copy' : 'Copiar',
            copied: lang === 'en' ? 'Copied!' : 'Copiado!',
            progress: lang === 'en' ? 'Progress' : 'Progreso',
            search_placeholder: lang === 'en' ? 'Search lessons...' : 'Buscar lecciones...',
            no_results: lang === 'en' ? 'No results' : 'Sin resultados'
        },
        modules: {
            modulo0: lang === 'en' ? 'Module 0 - Preparation' : 'Modulo 0 - Preparacion',
            modulo1: lang === 'en' ? 'Module 1 - Fundamentals' : 'Modulo 1 - Fundamentos',
            modulo2: lang === 'en' ? 'Module 2 - Prompt Engineering' : 'Modulo 2 - Ingenieria de Prompts',
            modulo3: lang === 'en' ? 'Module 3 - Advanced Techniques' : 'Modulo 3 - Tecnicas Avanzadas'
        },
        lessons: {}
    };
}

function saveTargetContent(lang, content) {
    const targetPath = path.join(__dirname, '..', 'i18n', 'caderno', `${lang}.json`);
    fs.writeFileSync(targetPath, JSON.stringify(content, null, 2), 'utf-8');
    const fileSize = (fs.statSync(targetPath).size / 1024).toFixed(1);
    console.log(`[SAVE] ${lang}.json (${fileSize} KB)`);
}

function createTranslationRequest(lesson, targetLang) {
    const config = LANG_CONFIG[targetLang];

    const userPrompt = `Translate this lesson to ${config.name}. Return ONLY a valid JSON object.

Source lesson (Portuguese):
${JSON.stringify(lesson, null, 2)}

Return the translated lesson as a JSON object with the same structure. Keep "number" unchanged.`;

    return {
        model: MODEL,
        max_tokens: 8000,
        messages: [
            { role: 'user', content: userPrompt }
        ],
        system: config.systemPrompt
    };
}

async function callClaudeAPI(requestBody) {
    return new Promise((resolve, reject) => {
        const postData = JSON.stringify(requestBody);

        const options = {
            hostname: 'api.anthropic.com',
            port: 443,
            path: '/v1/messages',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': API_KEY,
                'anthropic-version': '2023-06-01',
                'Content-Length': Buffer.byteLength(postData)
            }
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    const response = JSON.parse(data);
                    if (res.statusCode !== 200) {
                        reject(new Error(`API Error ${res.statusCode}: ${JSON.stringify(response)}`));
                        return;
                    }
                    resolve(response);
                } catch (e) {
                    reject(new Error(`Parse error: ${e.message}`));
                }
            });
        });

        req.on('error', reject);
        req.write(postData);
        req.end();
    });
}

function extractJSON(text) {
    // Try to find JSON object in the response
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
        throw new Error('No JSON object found in response');
    }
    return JSON.parse(jsonMatch[0]);
}

async function translateLesson(lesson, targetLang, dryRun = false) {
    if (dryRun) {
        console.log(`[DRY] Would translate ${lesson.number}: ${lesson.title}`);
        return null;
    }

    const request = createTranslationRequest(lesson, targetLang);

    try {
        const response = await callClaudeAPI(request);
        const content = response.content[0].text;
        const translated = extractJSON(content);

        // Validate
        if (!translated.number || translated.number !== lesson.number) {
            throw new Error('Invalid translation: number mismatch');
        }

        return translated;
    } catch (e) {
        console.error(`[ERRO] Licao ${lesson.number}: ${e.message}`);
        return null;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    const args = parseArgs();

    if (!args.lang || !['en', 'es'].includes(args.lang)) {
        console.error('Uso: node auto-translate.js --lang=en|es [--lesson=X.X] [--all]');
        console.error('Requer: ANTHROPIC_API_KEY no ambiente');
        process.exit(1);
    }

    if (!API_KEY && !args['dry-run']) {
        console.error('[ERRO] ANTHROPIC_API_KEY nao definida');
        console.error('Use: export ANTHROPIC_API_KEY="sk-..."');
        process.exit(1);
    }

    const targetLang = args.lang;
    const delay = parseInt(args.delay) || 2000;
    const dryRun = !!args['dry-run'];

    const source = loadSourceContent();
    const target = loadTargetContent(targetLang);

    const lessonIds = args.lesson
        ? [args.lesson]
        : args.all
            ? Object.keys(source.lessons)
            : Object.keys(source.lessons).filter(id => !target.lessons[id]);

    if (lessonIds.length === 0) {
        console.log('[INFO] Nenhuma licao para traduzir');
        return;
    }

    console.log(`[INICIO] Traduzindo ${lessonIds.length} licoes para ${targetLang}`);
    if (dryRun) console.log('[INFO] Modo dry-run - nenhuma API sera chamada');

    let translated = 0;
    let failed = 0;

    for (const id of lessonIds) {
        const lesson = source.lessons[id];
        if (!lesson) {
            console.log(`[SKIP] Licao ${id} nao encontrada`);
            continue;
        }

        console.log(`[...] ${id}: ${lesson.title}`);

        const result = await translateLesson(lesson, targetLang, dryRun);

        if (result) {
            target.lessons[id] = result;
            translated++;
            console.log(`[OK] ${id}: ${result.title}`);

            // Save after each successful translation
            if (!dryRun) {
                saveTargetContent(targetLang, target);
            }
        } else if (!dryRun) {
            failed++;
        }

        // Delay between API calls
        if (!dryRun && lessonIds.indexOf(id) < lessonIds.length - 1) {
            await sleep(delay);
        }
    }

    console.log(`[FIM] ${translated} traduzidas, ${failed} falharam`);
}

main().catch(e => {
    console.error('[FATAL]', e.message);
    process.exit(1);
});
