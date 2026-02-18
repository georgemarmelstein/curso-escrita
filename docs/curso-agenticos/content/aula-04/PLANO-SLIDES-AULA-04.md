# Plano de Slides - Aula 04: Anatomia de um Sistema Agêntico

**Data:** 27 de janeiro de 2026
**Objetivo:** Criar slides visuais de alto impacto pedagógico para ensinar os componentes de um sistema agêntico
**Público:** Juristas (leigos em tecnologia)
**Duração estimada da aula:** 2-3 horas

---

## Filosofia da Aula

> **Na Aula 03, vimos os WORKFLOWS (como os componentes se conectam).**
> **Na Aula 04, vamos abrir a caixa e ver os COMPONENTES (o que são as peças).**

### Analogia Central: "A Orquestra"

| Componente Técnico | Analogia Musical | O que faz |
|-------------------|------------------|-----------|
| **Orquestrador** | Maestro | Coordena, decide quem toca quando |
| **Agentes/Workers** | Músicos | Executam tarefas específicas |
| **Skills** | Partituras | Expertise documentada, reutilizável |
| **Commands** | Sinais do maestro | Atalhos para instruções frequentes |
| **Tools** | Instrumentos | Capacidades específicas (ler, escrever, buscar) |
| **Memory/Context** | Ensaios anteriores | O que já foi feito/decidido |

---

## Estrutura Proposta: 15-18 Slides

### BLOCO 1: ABERTURA (3 slides)

---

#### Slide 01: CAPA
**Tipo:** Capa visual
**Título:** "Anatomia de um Sistema Agêntico"
**Subtítulo:** "As peças do quebra-cabeça"
**Visual:** Ilustração estilo "explosão de componentes" - um sistema agêntico desmontado mostrando suas partes
**Referência:** demo-capa-lego-float.html (estilo peças flutuantes)

**Elementos visuais:**
- Fundo escuro com partículas
- Componentes flutuando: Orquestrador (dourado), Workers (azul), Skills (verde), Tools (roxo)
- Linhas pontilhadas conectando sutilmente

---

#### Slide 02: CITAÇÃO DE ABERTURA
**Tipo:** Quote slide
**Citação:**
> "Skills are just folders. That's literally all they are."
> — Barry Zhang, Anthropic

**Visual:** Estilo demo-quote-karpathy-vibe.html
**Propósito:** Desmistificar - não é magia, são arquivos e pastas

---

#### Slide 03: RECAPITULAÇÃO - ONDE ESTAMOS
**Tipo:** Topificador visual
**Título:** "Da Orquestra ao Músico"

**Visual:** Timeline horizontal com 4 pontos:
```
Aula 01          Aula 02          Aula 03          Aula 04
   ●                ●                ●                ●
   │                │                │                │
   ▼                ▼                ▼                ▼
"O que é        "Como            "Como se         "Quais são
 um agente?"    acessar?"        conectam?"       as peças?"
```

**Destaque:** Aula 04 iluminada, outras em opacity baixa

---

### BLOCO 2: VISÃO GERAL DOS COMPONENTES (3 slides)

---

#### Slide 04: A ORQUESTRA COMPLETA
**Tipo:** Demo interativa principal (CRÍTICO)
**Referência:** Estilo demo-workflow-builder.html

**Visual:** Canvas interativo com todos os componentes:
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│         🎯                                                      │
│     ORQUESTRADOR ←──────────────────────┐                       │
│         │                               │                       │
│    ┌────┴────┬────────┐                 │                       │
│    ▼         ▼        ▼                 │                       │
│   🤖        🤖       🤖                 │                       │
│ Worker A  Worker B  Worker C            │                       │
│    │         │        │                 │                       │
│    └─────────┴────────┘                 │                       │
│              │                          │                       │
│         📦 TOOLS ◄──── 📚 SKILLS        │                       │
│    (ler, escrever,     (expertise)      │                       │
│     buscar...)                          │                       │
│              │                          │                       │
│         🧠 MEMORY ──────────────────────┘                       │
│    (contexto acumulado)                                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Interatividade:**
- Clicar em cada componente mostra painel de informações
- Animação de "fluxo de dados" entre componentes
- Hover destaca conexões

**Este é um dos 2 slides interativos principais**

---

#### Slide 05: ANALOGIA - A FIRMA DE ADVOCACIA
**Tipo:** Analogia visual para leigos
**Título:** "Se um sistema agêntico fosse um escritório..."

**Visual:** Split screen
```
┌─────────────────────┬─────────────────────┐
│   ESCRITÓRIO        │   SISTEMA AGÊNTICO  │
├─────────────────────┼─────────────────────┤
│ 👔 Sócio-gerente    │ 🎯 Orquestrador     │
│ 👨‍💼 Advogados       │ 🤖 Workers/Agentes  │
│ 📋 Modelos de peça  │ 📚 Skills           │
│ 📞 "Me liga"        │ ⚡ Commands         │
│ 🔧 Word, PJe, SAJ   │ 🔧 Tools            │
│ 📁 Arquivos antigos │ 🧠 Memory           │
└─────────────────────┴─────────────────────┘
```

**Animação:** Transição suave entre os dois lados

---

#### Slide 06: A HIERARQUIA DE DECISÃO
**Tipo:** Diagrama animado
**Título:** "Quem decide o quê?"

**Visual:** Pirâmide invertida
```
        ORQUESTRADOR
    "O que fazer? Para quem?"
              │
      ┌───────┴───────┐
      ▼               ▼
   WORKER A        WORKER B
  "Como fazer"    "Como fazer"
      │               │
      ▼               ▼
   SKILLS          SKILLS
  "Expertise"    "Expertise"
      │               │
      ▼               ▼
   TOOLS           TOOLS
  "Capacidade"   "Capacidade"
```

**Animação:** Desce nível por nível ao clicar

---

### BLOCO 3: COMPONENTE POR COMPONENTE (6 slides)

---

#### Slide 07: O ORQUESTRADOR
**Tipo:** Deep-dive em componente
**Título:** "O Maestro que não toca instrumento"

**Visual principal:** Orquestrador no centro com raios saindo
```
                    ┌─────────────┐
           ┌───────▶│ "Pesquise X"│
           │        └─────────────┘
    ┌──────┴──────┐
    │     🎯      │ ┌─────────────┐
    │ ORQUESTRADOR├─▶│ "Analise Y" │
    │             │ └─────────────┘
    └──────┬──────┘
           │        ┌─────────────┐
           └───────▶│ "Escreva Z" │
                    └─────────────┘
```

**Painel lateral:**
- **O que faz:** Decompõe tarefas, delega, coordena
- **Não faz:** Executar ele mesmo
- **Analogia:** Juiz que distribui processos para assessores

---

#### Slide 08: OS WORKERS/AGENTES
**Tipo:** Deep-dive em componente
**Título:** "Quem põe a mão na massa"

**Visual:** Grid de 3-4 workers com especialidades
```
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│     🔍      │  │     📝      │  │     ⚖️      │
│  Explorer   │  │   Writer    │  │  Reviewer   │
├─────────────┤  ├─────────────┤  ├─────────────┤
│ Pesquisa    │  │ Redige      │  │ Revisa      │
│ Encontra    │  │ Formata     │  │ Valida      │
│ Mapeia      │  │ Estrutura   │  │ Corrige     │
└─────────────┘  └─────────────┘  └─────────────┘
```

**Interatividade:** Clicar em cada worker mostra exemplos de tarefas

---

#### Slide 09: SKILLS - A EXPERTISE PERSISTENTE
**Tipo:** Deep-dive + demo mini interativa
**Título:** "O conhecimento que não se perde"

**Visual:** Estrutura de pastas com preview
```
.claude/skills/
├── 📁 relatorio-judicial/
│   └── SKILL.md  ◄──────────┐
├── 📁 analise-contrato/     │
│   └── SKILL.md             │
└── 📁 pesquisa-precedentes/ │
    └── SKILL.md             │
                             │
    ┌────────────────────────┘
    │  # Skill: Relatório Judicial
    │
    │  > Gera relatórios estruturados...
    │
    │  ## Quando Usar
    │  - Processo com mais de 20 páginas
    │  - Autos digitalizados via OCR
    │
    │  ## Regras
    │  1. SEMPRE manter neutralidade
    │  2. NUNCA inventar fatos
    └────────────────────────────────
```

**Mensagem-chave:** "Skill = Pasta + SKILL.md = Expertise documentada"

---

#### Slide 10: COMMANDS - OS ATALHOS
**Tipo:** Deep-dive prático
**Título:** "O botão de ação rápida"

**Visual:** Comparativo antes/depois
```
❌ ANTES (digitar toda vez):
┌─────────────────────────────────────────────────┐
│ "Analise este documento jurídico e crie um      │
│ resumo com fatos, argumentos e conclusões.      │
│ Use formato Markdown com seções numeradas.      │
│ Cite a página fonte de cada informação."        │
└─────────────────────────────────────────────────┘

✅ DEPOIS (um comando):
┌─────────────────────────────────────────────────┐
│ /resumir-juridico processo.pdf                  │
└─────────────────────────────────────────────────┘
```

**Visual secundário:** Anatomia de um command
```
.claude/commands/resumir-juridico.md
┌─────────────────────────────────────┐
│ # /resumir-juridico                 │
│                                     │
│ Cria resumo de documentos jurídicos │
│ ---                                 │
│ [Instruções completas aqui]         │
│                                     │
│ $ARGUMENTS                          │
└─────────────────────────────────────┘
```

---

#### Slide 11: TOOLS - AS CAPACIDADES
**Tipo:** Catálogo visual
**Título:** "O que o agente SABE fazer"

**Visual:** Grid de ícones de ferramentas
```
┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│   📖    │ │   ✏️    │ │   🔍    │ │   🌐    │
│  Read   │ │  Write  │ │  Grep   │ │  Web    │
│ (Ler)   │ │(Escrever)│ │(Buscar) │ │(Navegar)│
└─────────┘ └─────────┘ └─────────┘ └─────────┘

┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐
│   💻    │ │   🔌    │ │   📊    │ │   ❓    │
│  Bash   │ │  MCP    │ │ Notebook│ │  Ask    │
│(Terminal)│ │(Conexões)│ │(Jupyter)│ │(Perguntar)│
└─────────┘ └─────────┘ └─────────┘ └─────────┘
```

**Mensagem:** "Cada ferramenta = uma capacidade específica"

---

#### Slide 12: MEMORY/CONTEXT - A MEMÓRIA
**Tipo:** Diagrama de zonas
**Título:** "O que o agente lembra"
**Referência:** demo-context-zones.html

**Visual:** Círculos concêntricos de memória
```
        ┌─────────────────────────────────┐
        │     CLAUDE.md (projeto)         │
        │   ┌─────────────────────────┐   │
        │   │  Skills (carregadas)    │   │
        │   │   ┌─────────────────┐   │   │
        │   │   │  Conversa atual │   │   │
        │   │   │    (mensagens)  │   │   │
        │   │   └─────────────────┘   │   │
        │   └─────────────────────────┘   │
        └─────────────────────────────────┘

        Mais próximo do centro = mais relevante
```

---

### BLOCO 4: COMO TUDO SE CONECTA (2 slides)

---

#### Slide 13: COMPONENT BUILDER (INTERATIVO)
**Tipo:** Demo interativa principal #2 (CRÍTICO)
**Título:** "Monte seu sistema"
**Referência:** Baseado em demo-workflow-builder.html

**Funcionalidade:**
- Arrastar componentes para o canvas
- Conectar orquestrador → workers
- Associar skills a workers
- Ver animação de execução

**Cenário pré-configurado:** "Gerador de Relatório"
```
┌─────────────────────────────────────────────────────────────────┐
│  COMPONENTES          │  CANVAS                                 │
│  ─────────────        │                                         │
│  [🎯 Orquestrador]    │     ┌─────────────┐                     │
│  [🤖 Worker]          │     │     🎯      │                     │
│  [📚 Skill]           │     │ Orquestrador│                     │
│  [⚡ Command]         │     └──────┬──────┘                     │
│  [🔧 Tool]            │            │                            │
│                       │     ┌──────┴──────┐                     │
│  ▶ Ver Fluxo          │     ▼             ▼                     │
│                       │  ┌──────┐     ┌──────┐                  │
│                       │  │🔍    │     │📝    │                  │
│                       │  │Leitor│     │Redator│                  │
│                       │  └──┬───┘     └──┬───┘                  │
│                       │     │            │                      │
│                       │  [📚Skill]    [📚Skill]                 │
│                       │                                         │
└─────────────────────────────────────────────────────────────────┘
```

**Este é o segundo slide interativo principal**

---

#### Slide 14: COMMAND vs SKILL - QUANDO USAR QUAL?
**Tipo:** Decision tree interativo
**Título:** "A escolha certa para cada situação"
**Referência:** demo-decision-tree.html

**Visual:** Árvore de decisão clicável
```
                    ┌─────────────────────┐
                    │ A tarefa é simples? │
                    │   (< 50 linhas)     │
                    └──────────┬──────────┘
                               │
              ┌────────────────┴────────────────┐
              │                                 │
             SIM                               NÃO
              │                                 │
              ▼                                 ▼
       ┌─────────────┐                 ┌─────────────────┐
       │  COMMAND ⚡  │                 │ Precisa de      │
       │  (atalho)   │                 │ exemplos?       │
       └─────────────┘                 └────────┬────────┘
                                                │
                                   ┌────────────┴────────────┐
                                   │                         │
                                  SIM                       NÃO
                                   │                         │
                                   ▼                         ▼
                            ┌─────────────┐          ┌─────────────┐
                            │  SKILL 📚   │          │ É invocada  │
                            │ (expertise) │          │ explicitamente?│
                            └─────────────┘          └──────┬──────┘
                                                            │
                                               ┌────────────┴────────────┐
                                              SIM                       NÃO
                                               │                         │
                                        ┌──────┴──────┐           ┌──────┴──────┐
                                        │  COMMAND ⚡  │           │  SKILL 📚   │
                                        └─────────────┘           │ (auto-detecta)│
                                                                  └─────────────┘
```

**Interatividade:** Clicar nas opções anima o caminho

---

### BLOCO 5: FECHAMENTO (2 slides)

---

#### Slide 15: RESUMO VISUAL - TODOS OS COMPONENTES
**Tipo:** Síntese visual
**Título:** "O mapa completo"

**Visual:** Infográfico consolidado
```
┌─────────────────────────────────────────────────────────────────┐
│           ANATOMIA DE UM SISTEMA AGÊNTICO                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  🎯 ORQUESTRADOR        📚 SKILLS            ⚡ COMMANDS        │
│  ───────────────        ────────             ─────────          │
│  Coordena tudo          Expertise            Atalhos            │
│  Delega tarefas         Persistente          Rápidos            │
│  Não executa            Reutilizável         Invocáveis         │
│                                                                 │
│  🤖 WORKERS             🔧 TOOLS             🧠 MEMORY          │
│  ─────────              ──────               ────────           │
│  Executam               Capacidades          Contexto           │
│  Especializados         Específicas          Acumulado          │
│  Paralelos              (ler, escrever...)   (CLAUDE.md, etc)   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

#### Slide 16: CITAÇÃO DE FECHAMENTO
**Tipo:** Quote + próximos passos
**Citação:**
> "Se você acertar o spec, o código quase escreve a si mesmo."
> — Al Harris, Amazon Kiro

**Próxima aula:** "Na Aula 05, vamos CONSTRUIR - montando as peças na prática"

---

## Slides Interativos Prioritários

### 1. Slide 04: "A Orquestra Completa"
**Complexidade:** Alta
**Base:** demo-workflow-builder.html
**Funcionalidades:**
- Visualização de todos os componentes
- Clicar em cada um mostra informações
- Animação de fluxo de dados
- Painel de informações lateral

### 2. Slide 13: "Component Builder"
**Complexidade:** Muito Alta
**Base:** demo-workflow-builder.html
**Funcionalidades:**
- Arrastar componentes
- Conectar entre si
- Ver execução animada
- Cenários pré-configurados

---

## Cronograma de Produção

| Prioridade | Slide | Tipo | Esforço |
|------------|-------|------|---------|
| 1 | 04 - Orquestra Completa | Demo interativa | Alto |
| 2 | 13 - Component Builder | Demo interativa | Muito Alto |
| 3 | 01 - Capa | Visual | Médio |
| 4 | 09 - Skills | Deep-dive | Médio |
| 5 | 10 - Commands | Comparativo | Baixo |
| 6 | 14 - Decision Tree | Interativo | Médio |
| 7 | Demais slides | Visual/texto | Baixo |

---

## Referências de Padrões Visuais

| Tipo de Slide | Referência |
|---------------|------------|
| Capa | demo-capa-lego-float.html |
| Citação | demo-quote-karpathy-vibe.html |
| Diagrama fluxo | demo-workflow-builder.html |
| Decision tree | demo-decision-tree.html |
| Zonas de contexto | demo-context-zones.html |
| Timeline | demo-ciclo-desenvolvimento.html |

---

## Princípios de Design (IRON LAWS)

1. **MOSTRAR, não CONTAR** - Visualizar, não narrar
2. **Linguagem para leigos** - Analogias do dia-a-dia
3. **Interatividade** - Clicar, arrastar, ver acontecer
4. **Paleta SUPER** - Dourado, creme, escuro, verde
5. **Embed mode** - Todos os demos funcionam em iframe

---

*Plano criado para Aula 04 - Anatomia de um Sistema Agêntico*
*Curso de Sistemas Agênticos para Juristas*
