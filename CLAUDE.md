# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projeto

**Caderno de Exercícios** — plataforma web interativa para formação em IA no Direito, com duas trilhas de aprendizado:

| Trilha | Curso | Aulas | Prefixo |
|--------|-------|-------|---------|
| **Fundamentos** | Formação em IA no Direito | 44 | `0.1`, `1.1`, `2.1`... |
| **Avançada** | Sistemas Agênticos no Direito | 14 | `A0`, `A1`, `A2`... |

A trilha Avançada pressupõe conhecimento da trilha Fundamentos.

**Autor:** George Marmelstein
**Público-alvo:** Magistrados e profissionais do Direito
**Idioma do conteúdo:** Português brasileiro
**Idioma do código:** Inglês

## Comandos de Desenvolvimento

```bash
# Servidor local (Python)
cd site && python -m http.server 8080

# Servidor local (Node.js)
npx serve site -p 8080

# Acesso
http://127.0.0.1:8080/index.html

# Tradução de aulas (gera prompts para LLM)
node site/scripts/translate-lessons.js --lang=en --batch=5
node site/scripts/translate-lessons.js --lang=es --lesson=1.3
```

## Arquitetura do Caderno

### Fluxo de Produção de Conteúdo

```
FONTES                    CONSOLIDAÇÃO              PRODUTO FINAL
───────────────────────   ──────────────────────   ─────────────────
docs/modulo*-slides/   ─┐
docs/transcricoes/     ─┼──► docs/curso/*.md ─────► site/index.html
docs/prompt-juridico/  ─┘    (fonte de verdade)     (Caderno PWA)
```

### Estrutura de Diretórios

```
curso-escrita/
├── site/                           # CADERNO DE EXERCÍCIOS (PWA)
│   ├── index.html                 # Aplicação principal (SPA com lessons inline)
│   ├── css/caderno.css            # Estilos consolidados
│   ├── service-worker.js          # Cache offline (incrementar CACHE_NAME)
│   ├── manifest.json              # Configuração PWA
│   ├── data/lessons-index.json    # Índice de aulas (metadados)
│   ├── i18n/                      # Internacionalização
│   │   ├── caderno/{pt,en,es}.json  # Traduções das aulas
│   │   └── {pt,en,es}.json          # UI strings
│   ├── casos/                     # Banco de casos jurídicos (8 casos)
│   ├── demos/                     # Demonstrações interativas
│   ├── scripts/                   # Scripts de build/tradução
│   └── assets/                    # Imagens, ícones, vídeos
│
├── docs/
│   ├── curso/                     # TRILHA FUNDAMENTOS (fonte de verdade)
│   │   ├── README.md              # Índice geral (44 aulas)
│   │   ├── modulo0/               # Preparação (5 aulas: 0.1-0.5)
│   │   ├── modulo1/               # Fundamentos LLMs (13 aulas: 1.1-1.13)
│   │   ├── modulo2/               # Engenharia de Prompt (14 aulas: 2.1-2.14)
│   │   └── modulo3/               # Aplicações Avançadas (12 aulas: 3.1-3.12)
│   ├── curso-agenticos/           # TRILHA AVANÇADA (fonte de verdade)
│   │   ├── README.md              # Índice (14 aulas: A0-A10)
│   │   ├── content/               # Roteiros, slides, imagens por aula
│   │   └── docs/                  # Pedagógico, planos, glossários
│   ├── modulo*-slides/            # Material didático (PowerPoint, PDFs)
│   ├── transcricoes/              # Transcrições das videoaulas
│   └── prompt-juridico/           # Prompts jurídicos prontos
│
└── .claude/
    ├── agents/                    # Agentes especializados
    ├── commands/                  # Comandos de produção
    │   ├── gerar-slides.md        # Gera slides a partir de roteiros
    │   └── revisar-slides.md      # Revisa qualidade dos slides
    └── skills/                    # Skills de produção
        ├── slides-web/            # Converte slides para web
        └── revisor-slides/        # Revisão estruturada de slides
```

### Caderno de Exercícios (index.html)

**Arquitetura:** Single-page application com conteúdo inline no objeto `lessons`.

**Design Pattern:** Exercise-first — exercícios práticos como protagonista, teoria colapsável.

**Componentes:**
- HTML: Estrutura + sidebar + modais (glossário, busca, atalhos)
- CSS: Estilos V3.1 inline + `caderno.css` externo
- JavaScript: Objeto `lessons` com todas as aulas como template literals

### Estrutura de uma Aula no index.html

```javascript
"1.1": {
    number: "1.1",
    module: "Módulo 1 — Fundamentos",
    title: "LLMs como Máquinas de Criação",
    objective: "Entender que LLMs não reproduzem — eles transformam e criam.",
    learningObjectives: ["item 1", "item 2"],  // Array com <strong> permitido
    whyItMatters: "Relevância prática...",
    content: `<html da teoria>`,               // Template literal - escapar backticks
    exercise: {
        title: "Título do Exercício",
        icon: "emoji",
        description: "O que o aluno vai fazer...",
        steps: [
            { title: "Passo 1", items: ["ação 1", "ação 2"] }
        ],
        checklist: ["item verificação 1", "item verificação 2"]
    },
    tip: "Dica prática",
    warning: "Armadilha comum"
}
```

### Seções Especiais

**Banco de Prompts (P.1 a P.7):** Prompts jurídicos prontos para uso.
- Estrutura diferente: usa `promptContent` em vez de `content`
- Card visual com código copiável

**Banco de Casos (CASOS):** 8 casos jurídicos em `site/casos/`.
- Cada caso: petição inicial, contestação, réplica, laudos (sem sentença)
- Usados nos exercícios práticos

## Módulos do Curso

### Trilha Fundamentos — Formação em IA no Direito

| Módulo | Aulas | Tema | Foco |
|--------|-------|------|------|
| 0 | 0.1-0.5 (5) | Preparação | Conta, privacidade, interface, memória |
| 1 | 1.1-1.13 (13) | Fundamentos | Transformers, tokens, contexto, alucinações |
| 2 | 2.1-2.14 (14) | Engenharia de Prompt | POEMA, Markdown, XML, técnicas estruturadas |
| 3 | 3.1-3.12 (12) | Aplicações Avançadas | SUPER FIRAC, análise probatória, agentes |

### Trilha Avançada — Sistemas Agênticos no Direito

| Aula | Tema | Foco |
|------|------|------|
| A0 | Introdução | O que são sistemas agênticos |
| A1-A2 | Arquitetura | Agentes, ferramentas, tool use |
| A3-A4 | Orquestração | Padrões, memória, contexto |
| A5-A6 | Prática | Loops, feedback, casos jurídicos |
| A7-A8 | Qualidade | Segurança, guardrails, avaliação |
| A9-A10 | Produção | Deploy, projeto final |

## Ferramentas de Produção

### Agentes

| Agente | Uso |
|--------|-----|
| `estruturador-modulo-curso` | Reorganiza material em estrutura para o site |
| `criador-aula` | Cria ficha de exercício completa (exercise-first) |

### Commands

| Command | Uso |
|---------|-----|
| `/gerar-slides` | Gera slides a partir de roteiro de aula |
| `/revisar-slides` | Revisa qualidade e consistência dos slides |

### Skills

| Skill | Uso |
|-------|-----|
| `slides-web` | Converte slides PowerPoint para formato web |
| `revisor-slides` | Revisão estruturada com checklist de qualidade |

## PWA e Offline

- `service-worker.js`: Estratégia stale-while-revalidate
- `CACHE_NAME`: Incrementar versão (atual: `caderno-ia-v7`) após mudanças significativas
- Assets pré-cacheados: HTML, CSS, imagens, casos, demos

## Identidade Visual

```css
--accent-blue: #194A68;      /* Azul principal */
--accent-gold: #BE9C6D;      /* Dourado/Ouro */
--text-primary: #3A3A3A;     /* Cinza texto */
--bg-card: #FDFCFA;          /* Background cards */
--bg-light: #FFF4E4;         /* Background creme */
```

**Tipografia:** Crimson Pro (display), Source Sans 3 (corpo), JetBrains Mono (código)

## Convenções

- Documentação: português com acentuação correta
- Nomes de arquivos: kebab-case
- Código JS: inglês (variáveis, funções)
- Template literals: escapar backticks internos com `\``
- Commits: português

## Cuidados Especiais

1. **Template literals:** HTML dentro de `content: \`...\`` deve escapar backticks
2. **Cache do navegador:** Usar `?v=N` para forçar reload em desenvolvimento
3. **Service Worker:** Incrementar `CACHE_NAME` após mudanças
4. **Tradução:** Aulas traduzidas em `site/i18n/caderno/{en,es}.json`
5. **Contexto regulatório:** Res. 615/2025 CJF e Res. 332/2020 CNJ para aulas sobre privacidade

## Formato Padrão de Aulas em docs/curso/

```markdown
# [Número] [Nome da Aula]

## Objetivos
O que o aluno saberá fazer ao final.

## Por que Importa
Relevância prática para profissionais do Direito.

## Base Conceitual
Conceitos-chave, explicações didáticas, analogias.

## Exercício Prático
Atividade hands-on para fixação.

## Dicas e Armadilhas
O que fazer (e evitar) na prática.

## Recursos
Links, papers, material complementar.

## Conexão
Link para a próxima aula.
```

## Atalhos de Teclado (no Caderno)

| Tecla | Ação |
|-------|------|
| `Ctrl+K` | Buscar |
| `J` | Próxima lição |
| `K` | Lição anterior |
| `B` | Toggle sidebar |
| `T` | Toggle tema |
| `G` | Glossário |
| `?` | Ajuda |
