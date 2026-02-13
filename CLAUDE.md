# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projeto

**Caderno de Exercícios** — plataforma web interativa para o curso "Formação em IA Aplicada ao Direito". O Caderno é o **produto final** de todo o projeto: slides, transcrições, materiais e documentação existem para alimentar e enriquecer o Caderno.

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
│   ├── index.html                 # Aplicação principal (single-file)
│   ├── css/caderno.css            # Estilos consolidados
│   ├── service-worker.js          # Cache offline
│   ├── manifest.json              # Configuração PWA
│   ├── data/lessons-index.json    # Índice de aulas (metadados)
│   ├── i18n/                      # Internacionalização
│   │   ├── caderno/{pt,en,es}.json  # Traduções das aulas
│   │   └── {pt,en,es}.json          # UI strings
│   ├── casos/                     # Banco de casos jurídicos
│   ├── demos/                     # Demonstrações interativas
│   └── assets/                    # Imagens, ícones, vídeos
│
├── docs/
│   ├── curso/                     # FONTE DE VERDADE DO CONTEÚDO
│   │   ├── README.md              # Índice geral (44 aulas em 4 módulos)
│   │   ├── modulo0/               # Preparação (5 aulas)
│   │   ├── modulo1/               # Fundamentos LLMs (13 aulas)
│   │   ├── modulo2/               # Engenharia de Prompt (14 aulas)
│   │   └── modulo3/               # Aplicações Avançadas (12 aulas)
│   ├── modulo*-slides/            # Material didático (PowerPoint, PDFs)
│   └── transcricoes/              # Transcrições das videoaulas
```

### Caderno de Exercícios (index.html)

**Arquitetura:** Single-page application com conteúdo inline.

**Componentes:**
- HTML: Estrutura + sidebar + modais (glossário, busca, atalhos)
- CSS: Estilos V3.1 inline + `caderno.css` externo
- JavaScript: Objeto `lessons` com todas as aulas como template literals

**Design Pattern:** Exercise-first — exercícios práticos como protagonista, teoria colapsável.

### Estrutura de uma Aula

```javascript
"1.1": {
    number: "1.1",
    module: "Módulo 1 — Fundamentos",
    title: "LLMs como Máquinas de Criação",
    objective: "Entender que LLMs não reproduzem — eles transformam e criam.",
    learningObjectives: ["item 1", "item 2"],  // Array de strings com <strong> permitido
    whyItMatters: "Relevância prática...",
    content: `<html da teoria>`,               // Template literal - teoria colapsável
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

**Banco de Casos (CASOS):** Lista de casos jurídicos para exercícios.
- Arquivos em `site/casos/`
- Cada caso: petição inicial, contestação, réplica, laudos (sem sentença)

## Módulos do Curso

| Módulo | Aulas | Tema | Foco |
|--------|-------|------|------|
| 0 | 0.1-0.5 | Preparação | Conta, privacidade, interface |
| 1 | 1.1-1.17 | Fundamentos | Transformers, tokens, contexto, alucinações |
| 2 | 2.1-2.11 | Engenharia de Prompt | FIRAC+, técnicas estruturadas |
| 3 | 3.1-3.5 | Prática Avançada | Projects, Deep Research, metaprompts |

## PWA e Offline

- `service-worker.js`: Stale-while-revalidate
- `CACHE_NAME`: Incrementar versão após mudanças significativas
- Assets pré-cacheados: HTML, CSS, imagens, casos

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
