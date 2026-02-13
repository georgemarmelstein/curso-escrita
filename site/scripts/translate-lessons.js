#!/usr/bin/env node
/**
 * Script de traducao de licoes do caderno de exercicios.
 * Prepara o conteudo para traducao via LLM e salva os resultados.
 *
 * Uso:
 *   node translate-lessons.js --lang=en [--lesson=0.1] [--batch=5]
 *
 * Opcoes:
 *   --lang     Idioma alvo (en ou es)
 *   --lesson   Traduzir apenas uma licao especifica
 *   --batch    Numero de licoes por lote (padrao: 5)
 *   --dry-run  Apenas mostrar o que seria feito
 */

const fs = require('fs');
const path = require('path');

const LANG_CONFIG = {
    en: {
        code: 'en-US',
        name: 'English',
        instructions: `Translate from Brazilian Portuguese to English.
Keep technical terms in their original form when commonly used in English (e.g., LLM, API, RAG).
Maintain HTML formatting exactly as provided.
For Brazilian legal references (e.g., "CNJ", "STF"), keep the abbreviation and add a brief explanation in parentheses on first use.
For idiomatic expressions, adapt to natural English equivalents.`
    },
    es: {
        code: 'es-ES',
        name: 'Spanish',
        instructions: `Translate from Brazilian Portuguese to Spanish (Spain/Latin America neutral).
Keep technical terms in their original form when commonly used in Spanish (e.g., LLM, API, RAG).
Maintain HTML formatting exactly as provided.
For Brazilian legal references (e.g., "CNJ", "STF"), keep the abbreviation and add a brief explanation in parentheses on first use.
Adapt cultural references to be understandable for Spanish speakers.`
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
        throw new Error(`Arquivo fonte nao encontrado: ${ptPath}\nExecute primeiro: node extract-lessons.js`);
    }
    return JSON.parse(fs.readFileSync(ptPath, 'utf-8'));
}

function loadTargetContent(lang) {
    const targetPath = path.join(__dirname, '..', 'i18n', 'caderno', `${lang}.json`);
    if (fs.existsSync(targetPath)) {
        return JSON.parse(fs.readFileSync(targetPath, 'utf-8'));
    }
    return null;
}

function createTranslationPrompt(lesson, targetLang) {
    const config = LANG_CONFIG[targetLang];

    return `# Translation Task

## Instructions
${config.instructions}

## Source Lesson (Portuguese)

**Lesson ${lesson.number}: ${lesson.title}**

**Module:** ${lesson.module}

**Objective:** ${lesson.objective}

**Content:**
${lesson.content}

${lesson.exercise ? `**Exercise:**
Title: ${lesson.exercise.title}
Prompt: ${lesson.exercise.prompt}
${lesson.exercise.checklist ? `Checklist:\n${lesson.exercise.checklist.map(item => `- ${item}`).join('\n')}` : ''}
${lesson.exercise.example ? `Example: ${lesson.exercise.example}` : ''}` : ''}

${lesson.tip ? `**Tip:** ${lesson.tip}` : ''}

${lesson.warning ? `**Warning:** ${lesson.warning}` : ''}

## Output Format

Return ONLY a valid JSON object with this exact structure:
{
  "number": "${lesson.number}",
  "module": "[translated module name]",
  "title": "[translated title]",
  "objective": "[translated objective]",
  "content": "[translated HTML content - keep all HTML tags]",
  "exercise": {
    "title": "[translated exercise title]",
    "prompt": "[translated prompt]",
    "checklist": ["[translated item 1]", "[translated item 2]", ...],
    "example": "[translated example if present]"
  },
  "tip": "[translated tip if present]",
  "warning": "[translated warning if present]"
}`;
}

function saveTranslationPrompts(lessons, targetLang, batchSize = 5) {
    const outputDir = path.join(__dirname, '..', 'i18n', 'caderno', 'prompts', targetLang);
    fs.mkdirSync(outputDir, { recursive: true });

    const lessonIds = Object.keys(lessons);
    const batches = [];

    for (let i = 0; i < lessonIds.length; i += batchSize) {
        batches.push(lessonIds.slice(i, i + batchSize));
    }

    console.log(`[INICIO] Gerando prompts para ${targetLang} (${batches.length} lotes)`);

    batches.forEach((batch, batchIdx) => {
        const batchPrompts = batch.map(id => {
            const lesson = lessons[id];
            return createTranslationPrompt(lesson, targetLang);
        }).join('\n\n---\n\n');

        const filename = `batch-${String(batchIdx + 1).padStart(2, '0')}.txt`;
        const filepath = path.join(outputDir, filename);
        fs.writeFileSync(filepath, batchPrompts, 'utf-8');
        console.log(`[OK] ${filename}: licoes ${batch.join(', ')}`);
    });

    // Create index file
    const indexContent = {
        targetLang,
        totalLessons: lessonIds.length,
        totalBatches: batches.length,
        batchSize,
        batches: batches.map((batch, idx) => ({
            file: `batch-${String(idx + 1).padStart(2, '0')}.txt`,
            lessons: batch
        })),
        instructions: `
Para traduzir:
1. Abra cada arquivo batch-XX.txt
2. Cole no Claude/ChatGPT e solicite a traducao
3. Copie o JSON resultante para responses/batch-XX.json
4. Execute: node translate-lessons.js --lang=${targetLang} --merge`
    };

    fs.writeFileSync(
        path.join(outputDir, 'index.json'),
        JSON.stringify(indexContent, null, 2),
        'utf-8'
    );

    // Create responses directory
    fs.mkdirSync(path.join(outputDir, 'responses'), { recursive: true });

    console.log(`[FIM] Prompts salvos em ${outputDir}`);
    console.log(`[INFO] Siga as instrucoes em index.json para completar a traducao`);
}

function mergeTranslations(targetLang) {
    const responsesDir = path.join(__dirname, '..', 'i18n', 'caderno', 'prompts', targetLang, 'responses');
    const targetPath = path.join(__dirname, '..', 'i18n', 'caderno', `${targetLang}.json`);

    if (!fs.existsSync(responsesDir)) {
        throw new Error(`Diretorio de respostas nao encontrado: ${responsesDir}`);
    }

    // Load existing target or create new
    let target = loadTargetContent(targetLang) || {
        meta: {
            lang: LANG_CONFIG[targetLang].code,
            title: targetLang === 'en' ? 'AI Training Applied to Law' : 'Formacion en IA Aplicada al Derecho',
            subtitle: targetLang === 'en' ? 'Exercise Notebook' : 'Cuaderno de Ejercicios',
            author: 'George Marmelstein',
            version: '1.0.0'
        },
        ui: {},
        modules: {},
        lessons: {}
    };

    const responseFiles = fs.readdirSync(responsesDir).filter(f => f.endsWith('.json'));

    if (responseFiles.length === 0) {
        console.log('[AVISO] Nenhuma resposta encontrada em', responsesDir);
        return;
    }

    console.log(`[INICIO] Mesclando ${responseFiles.length} arquivos de resposta`);

    let merged = 0;
    responseFiles.forEach(file => {
        try {
            const content = fs.readFileSync(path.join(responsesDir, file), 'utf-8');
            // Parse JSON - handle both single object and array of objects
            const lessons = JSON.parse(content);
            const lessonArray = Array.isArray(lessons) ? lessons : [lessons];

            lessonArray.forEach(lesson => {
                if (lesson.number) {
                    target.lessons[lesson.number] = lesson;
                    merged++;
                }
            });
            console.log(`[OK] ${file}: ${lessonArray.length} licoes`);
        } catch (e) {
            console.error(`[ERRO] ${file}: ${e.message}`);
        }
    });

    // Save merged file
    fs.writeFileSync(targetPath, JSON.stringify(target, null, 2), 'utf-8');
    const fileSize = (fs.statSync(targetPath).size / 1024).toFixed(1);
    console.log(`[FIM] ${targetPath} (${fileSize} KB, ${merged} licoes)`);
}

function translateSingleLesson(lessonId, targetLang) {
    const source = loadSourceContent();
    const lesson = source.lessons[lessonId];

    if (!lesson) {
        throw new Error(`Licao nao encontrada: ${lessonId}`);
    }

    const prompt = createTranslationPrompt(lesson, targetLang);
    const outputPath = path.join(__dirname, '..', 'i18n', 'caderno', 'prompts', targetLang, `single-${lessonId}.txt`);

    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, prompt, 'utf-8');

    console.log(`[OK] Prompt para licao ${lessonId} salvo em ${outputPath}`);
}

function main() {
    const args = parseArgs();

    if (!args.lang || !['en', 'es'].includes(args.lang)) {
        console.error('Uso: node translate-lessons.js --lang=en|es [--lesson=X.X] [--batch=N] [--merge]');
        process.exit(1);
    }

    const targetLang = args.lang;

    try {
        if (args.merge) {
            // Merge responses into target JSON
            mergeTranslations(targetLang);
        } else if (args.lesson) {
            // Translate single lesson
            translateSingleLesson(args.lesson, targetLang);
        } else {
            // Generate all translation prompts
            const source = loadSourceContent();
            const batchSize = parseInt(args.batch) || 5;
            saveTranslationPrompts(source.lessons, targetLang, batchSize);
        }
    } catch (e) {
        console.error(`[ERRO] ${e.message}`);
        process.exit(1);
    }
}

main();
