/**
 * Extrai o objeto 'lessons' do caderno-v2.html e converte para JSON.
 * Uso: node extract-lessons.js
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

function extractLessons() {
    const siteDir = path.dirname(__dirname);
    const htmlPath = path.join(siteDir, 'caderno-v2.html');
    const outputDir = path.join(siteDir, 'i18n', 'caderno');

    // Criar diretório de saída
    fs.mkdirSync(outputDir, { recursive: true });

    console.log(`[INICIO] Extraindo de ${htmlPath}`);

    // Ler HTML
    const html = fs.readFileSync(htmlPath, 'utf-8');

    // Encontrar o objeto lessons
    const startMarker = 'const lessons = {';
    const startIdx = html.indexOf(startMarker);
    if (startIdx === -1) {
        throw new Error("Objeto 'lessons' não encontrado");
    }

    // Encontrar o final do objeto (contando chaves)
    let braceCount = 0;
    let inString = false;
    let inTemplate = false;
    let stringChar = '';
    let endIdx = startIdx + startMarker.length - 1;

    for (let i = startIdx + startMarker.length - 1; i < html.length; i++) {
        const char = html[i];
        const prevChar = html[i - 1];

        // Detectar strings
        if (!inTemplate && (char === '"' || char === "'") && prevChar !== '\\') {
            if (!inString) {
                inString = true;
                stringChar = char;
            } else if (char === stringChar) {
                inString = false;
            }
            continue;
        }

        // Detectar template literals
        if (char === '`' && prevChar !== '\\') {
            inTemplate = !inTemplate;
            continue;
        }

        // Contar chaves (fora de strings)
        if (!inString && !inTemplate) {
            if (char === '{') braceCount++;
            if (char === '}') {
                braceCount--;
                if (braceCount === 0) {
                    endIdx = i + 1;
                    break;
                }
            }
        }
    }

    const objectCode = html.substring(startIdx + startMarker.length - 1, endIdx);

    // Salvar para debug
    const debugPath = path.join(outputDir, 'debug.js');
    fs.writeFileSync(debugPath, `const lessons = ${objectCode};\nmodule.exports = lessons;`, 'utf-8');

    // Avaliar o código JavaScript usando Function
    let lessons;
    try {
        // Usar Function para criar um escopo limpo
        const evalFunc = new Function(`return ${objectCode}`);
        lessons = evalFunc();
    } catch (e) {
        console.error('[ERRO] Falha ao avaliar JavaScript:', e.message);
        console.log('[INFO] Debug salvo em', debugPath);
        throw e;
    }
    console.log(`[OK] ${Object.keys(lessons).length} lições extraídas`);

    // Criar estrutura de saída
    const output = {
        meta: {
            lang: "pt-BR",
            title: "Formação em IA Aplicada ao Direito",
            subtitle: "Caderno de Exercícios",
            author: "George Marmelstein",
            version: "1.0.0"
        },
        ui: {
            sidebar_title: "IA Aplicada ao Direito",
            sidebar_subtitle: "Caderno de Exercícios",
            theme_light: "Modo claro",
            theme_dark: "Modo escuro",
            prev_lesson: "Lição anterior",
            next_lesson: "Próxima lição",
            exercise: "Exercício",
            tip: "Dica Prática",
            warning: "Armadilha Comum",
            checklist: "Checklist de Verificação",
            copy: "Copiar",
            copied: "Copiado!",
            progress: "Progresso",
            search_placeholder: "Buscar lições...",
            no_results: "Nenhum resultado"
        },
        modules: {
            "modulo0": "Módulo 0 — Preparação",
            "modulo1": "Módulo 1 — Fundamentos",
            "modulo2": "Módulo 2 — Engenharia de Prompt",
            "modulo3": "Módulo 3 — Técnicas Avançadas"
        },
        lessons: lessons
    };

    // Salvar pt.json
    const ptPath = path.join(outputDir, 'pt.json');
    fs.writeFileSync(ptPath, JSON.stringify(output, null, 2), 'utf-8');
    const fileSize = (fs.statSync(ptPath).size / 1024).toFixed(1);
    console.log(`[OK] pt.json (${fileSize} KB)`);

    // Criar esqueletos para en.json e es.json
    for (const lang of ['en', 'es']) {
        const langPath = path.join(outputDir, `${lang}.json`);
        if (!fs.existsSync(langPath)) {
            const skeleton = {
                meta: {
                    lang: lang === 'en' ? "en-US" : "es-ES",
                    title: lang === 'en' ? "AI Training Applied to Law" : "Formación en IA Aplicada al Derecho",
                    subtitle: lang === 'en' ? "Exercise Notebook" : "Cuaderno de Ejercicios",
                    author: "George Marmelstein",
                    version: "1.0.0",
                    status: "pending_translation"
                },
                ui: {
                    sidebar_title: lang === 'en' ? "AI Applied to Law" : "IA Aplicada al Derecho",
                    sidebar_subtitle: lang === 'en' ? "Exercise Notebook" : "Cuaderno de Ejercicios",
                    theme_light: lang === 'en' ? "Light mode" : "Modo claro",
                    theme_dark: lang === 'en' ? "Dark mode" : "Modo oscuro",
                    prev_lesson: lang === 'en' ? "Previous lesson" : "Lección anterior",
                    next_lesson: lang === 'en' ? "Next lesson" : "Próxima lección",
                    exercise: lang === 'en' ? "Exercise" : "Ejercicio",
                    tip: lang === 'en' ? "Practical Tip" : "Consejo Práctico",
                    warning: lang === 'en' ? "Common Pitfall" : "Error Común",
                    checklist: lang === 'en' ? "Verification Checklist" : "Lista de Verificación",
                    copy: lang === 'en' ? "Copy" : "Copiar",
                    copied: lang === 'en' ? "Copied!" : "¡Copiado!",
                    progress: lang === 'en' ? "Progress" : "Progreso",
                    search_placeholder: lang === 'en' ? "Search lessons..." : "Buscar lecciones...",
                    no_results: lang === 'en' ? "No results" : "Sin resultados"
                },
                modules: {
                    "modulo0": lang === 'en' ? "Module 0 — Preparation" : "Módulo 0 — Preparación",
                    "modulo1": lang === 'en' ? "Module 1 — Fundamentals" : "Módulo 1 — Fundamentos",
                    "modulo2": lang === 'en' ? "Module 2 — Prompt Engineering" : "Módulo 2 — Ingeniería de Prompts",
                    "modulo3": lang === 'en' ? "Module 3 — Advanced Techniques" : "Módulo 3 — Técnicas Avanzadas"
                },
                lessons: {}  // Será preenchido pela tradução
            };
            fs.writeFileSync(langPath, JSON.stringify(skeleton, null, 2), 'utf-8');
            console.log(`[OK] ${lang}.json (esqueleto)`);
        }
    }

    console.log('[FIM] Extração concluída');
}

extractLessons();
