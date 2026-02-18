# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projeto

**Caderno de Exercicios - Sistemas Agenticos** — plataforma web interativa para o curso de Sistemas Agenticos para Juristas. Segue exatamente o mesmo padrao do Caderno de Exercicios do curso de Escrita com LLMs.

**Autor:** George Marmelstein
**Publico-alvo:** Juristas (magistrados, advogados, servidores)
**Idioma do conteudo:** Portugues brasileiro
**Idioma do codigo:** Ingles

## Comandos de Desenvolvimento

```bash
# Servidor local (Python)
cd site-caderno && python -m http.server 8080

# Servidor local (Node.js)
npx serve . -p 8080

# Acesso
http://127.0.0.1:8080/index.html
```

## Arquitetura

### Estrutura de Diretorios

```
site-caderno/
├── index.html           # SPA principal (lessons inline)
├── css/caderno.css      # Estilos consolidados
├── service-worker.js    # Cache offline (CACHE_NAME: agentes-caderno-v1)
├── manifest.json        # Configuracao PWA
└── assets/
    ├── icons/icon.svg   # Icone SVG (SA)
    └── img/             # Imagens das aulas
```

### Single-Page Application

**Arquitetura:** Todo o conteudo esta inline no objeto `lessons` do index.html.

**Design Pattern:** Exercise-first — exercicios praticos como protagonista, teoria colapsavel.

### Estrutura de uma Aula

```javascript
"0": {
    number: "0",
    module: "Modulo 1 - Fundamentos",
    title: "Bem-Vindo ao Mundo Agentico",
    objective: "Uma frase sobre o que o aluno fara.",
    learningObjectives: ["item 1", "item 2"],  // Array com <strong> permitido
    whyItMatters: "Relevancia pratica...",
    content: \`<html da teoria>\`,              // Template literal - escapar backticks
    exercise: {
        title: "Titulo do Exercicio",
        icon: "emoji",
        description: "O que o aluno vai fazer...",
        steps: [
            { title: "Passo 1", items: ["acao 1", "acao 2"] }
        ],
        checklist: ["item verificacao 1", "item verificacao 2"]
    },
    tip: "Dica pratica",
    warning: "Armadilha comum"
}
```

## Modulos do Curso

| Modulo | Aulas | Tema |
|--------|-------|------|
| 1 | 0-5 | Fundamentos de Sistemas Agenticos |
| 2 | 6-10 | Engenharia de Prompt Agentico |

### Aulas Implementadas

- 0: Bem-Vindo ao Mundo Agentico
- 1: A Era dos Agentes
- 2: Desvendando o Claude Code
- 3: Arquitetura de Agentes
- 3.5: Agent Teams
- 4: Construindo os Primeiros Agentes
- 4.5: Hooks - Automacao Deterministica
- 5: Sistema Juridico Agentico (CLERK)

### Aulas Pendentes (Modulo 2)

- 6: Engenharia de Prompt
- 6B: Engenharia de Prompt em Sistemas Agenticos
- 7: Engenharia de Contexto
- 8: Engenharia de Capacidades
- 9: Engenharia de Workflows
- 10: Engenharia de Conexoes

## Fonte de Conteudo

Os roteiros completos estao em `../content/aula-XX/roteiro-aula-XX.md`.

Para adicionar uma aula:
1. Leia o roteiro correspondente
2. Extraia: objetivo, learningObjectives, whyItMatters
3. Resuma o content (teoria colapsavel)
4. Estruture o exercise com steps e checklist
5. Adicione tip e warning
6. Insira no objeto `lessons` do index.html
7. Adicione a chave no array `lessonOrder`

## Identidade Visual

```css
--accent-blue: #194A68;      /* Azul principal */
--accent-gold: #BE9C6D;      /* Dourado/Ouro */
--bg-terminal: #0D1117;      /* Background terminal */
--text-terminal: #C9D1D9;    /* Texto terminal */
--text-terminal-green: #7EE787; /* Prompt verde */
```

**Tipografia:** Crimson Pro (display), Source Sans 3 (corpo), JetBrains Mono (codigo)

## PWA e Offline

- `service-worker.js`: Estrategia stale-while-revalidate
- `CACHE_NAME`: Incrementar versao apos mudancas significativas
- Assets pre-cacheados: HTML, CSS

## Convencoes

- Documentacao: portugues brasileiro
- Codigo JS: ingles (variaveis, funcoes)
- Template literals: escapar backticks internos com `\``
- Acentuacao: SEM acentos no conteudo das lessons (compatibilidade)

## Cuidados Especiais

1. **Template literals:** HTML dentro de `content: \`...\`` deve escapar backticks
2. **lessonOrder:** Sempre adicionar novas aulas no array
3. **Service Worker:** Incrementar `CACHE_NAME` apos mudancas
4. **Tema escuro:** Testar visual em ambos os temas

## Atalhos de Teclado

| Tecla | Acao |
|-------|------|
| `J` | Proxima licao |
| `K` | Licao anterior |
| `B` | Toggle sidebar |
| `T` | Toggle tema |
| `?` | Ajuda |
