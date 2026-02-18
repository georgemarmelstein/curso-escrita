# Pesquisa Consolidada - Aula 04: Anatomia de um Sistema Agêntico

**Data:** 2026-01-28
**Método:** 20 agentes exploradores em paralelo
**Base pesquisada:** 50+ arquivos de documentação do curso_claude

---

## 1. GAP CRÍTICO IDENTIFICADO: MCP

### Problema
O MCP (Model Context Protocol) estava sendo tratado como sub-item de "Tools" quando deveria ser um **componente independente** da arquitetura.

### Evidência
- No `PLANO-SLIDES-AULA-04.md`: MCP aparece apenas como "(MCP)" entre parênteses no slide 11
- No `roteiro-aula-04.md`: MCP mencionado apenas em "próximos passos" para Aula 05
- Na documentação base: MCP tem seção dedicada com 3 MCPs jurídicos próprios

### Recomendação
Elevar MCP a **7º componente** da arquitetura:
```
Orquestrador → Workers → Skills → Commands → Tools → MCP → Memory
```

---

## 2. DESCOBERTAS POR EXPLORADOR

### Explorer 1: MCP Fundamentals
**Definição:** "USB for AI" - protocolo padronizado para conectar agentes a ferramentas externas.

**Arquitetura:**
```
┌─────────────────────────────────────────────────────┐
│                    CLAUDE CODE                       │
│                   (MCP Client)                       │
├─────────────────────────────────────────────────────┤
│     MCP Protocol (JSON-RPC over stdio/HTTP)         │
├──────────┬──────────┬──────────┬───────────────────┤
│ Server 1 │ Server 2 │ Server 3 │ ... Server N      │
│ (BNP)    │ (CJF)    │ (JULIA)  │                   │
└──────────┴──────────┴──────────┴───────────────────┘
```

**MCPs Jurídicos Disponíveis:**
| MCP | Fonte | Funcionalidade |
|-----|-------|----------------|
| `bnp-api` | STF/STJ | Precedentes qualificados |
| `cjf-jurisprudencia` | CJF | Jurisprudência federal |
| `julia-trf5` | TRF5 | Sistema JULIA regional |

**Configuração:** `~/.claude/settings.json` na chave `mcpServers`

---

### Explorer 2: Orquestrador Patterns
**Definição:** O "maestro" que coordena todo o sistema.

**Responsabilidades:**
1. Interpretar requisições do usuário
2. Decidir quais workers/tools invocar
3. Manter estado da conversa
4. Sintetizar resultados

**Padrão Anthropic:**
> *"The orchestrator breaks down tasks, delegates them to specialized subagents, and synthesizes their results."*

**Analogia Jurídica:** Desembargador Relator que distribui tarefas para assessores especializados.

---

### Explorer 3: Skills Anatomy
**Definição:** Pasta com `SKILL.md` contendo expertise reutilizável.

**Estrutura Obrigatória:**
```
skill-name/
├── SKILL.md          # Instruções (OBRIGATÓRIO)
├── scripts/          # Automações opcionais
├── templates/        # Modelos opcionais
└── references/       # Material de referência
```

**Carregamento:** Automático por keywords ou manual via `/skill-name`

**Skills do Curso:**
- `slides-web`: Geração de apresentações Reveal.js
- `revisor-slides`: Revisão colaborativa visual
- `super-deep-research`: Pesquisa profunda estruturada

---

### Explorer 4: Commands Guide
**Definição:** Prompts salvos invocados com `/comando`.

**Localização:** `.claude/commands/`

**Diferença de Skills:**
| Aspecto | Skill | Command |
|---------|-------|---------|
| Carregamento | Automático | Explícito (`/`) |
| Escopo | Expertise completa | Tarefa específica |
| Estrutura | Pasta + SKILL.md | Arquivo .md único |

**Commands do Curso:**
- `/criar-aula`: Estrutura nova aula
- `/gerar-slides`: Roteiro → HTML
- `/revisar-slides`: Revisão colaborativa
- `/pesquisar-conceito`: Pesquisa em transcrições

---

### Explorer 5: Tools Catalog
**Ferramentas Nativas do Claude Code:**

| Categoria | Tools |
|-----------|-------|
| Arquivos | Read, Write, Edit, Glob, Grep |
| Sistema | Bash, LS |
| Web | WebFetch, WebSearch |
| Agentes | Task (subagents) |
| Interação | AskUserQuestion |
| Planejamento | TodoWrite, EnterPlanMode |

**Tool Use Pattern:**
```
Requisição → Seleção de Tool → Execução → Resultado → Síntese
```

---

### Explorer 6: Subagents Patterns
**Definição:** Agentes especializados invocados via Task tool.

**5 Tipos Nativos:**
1. `Bash` - Execução de comandos
2. `Explore` - Exploração de codebase
3. `Plan` - Planejamento arquitetural
4. `general-purpose` - Tarefas genéricas
5. `claude-code-guide` - Documentação Claude

**Restrição Crítica:**
> "Subagents cannot spawn their own subagents (max 1 level of depth)"

**Padrão de Uso:**
```javascript
Task({
  subagent_type: "Explore",
  prompt: "Encontre todos os arquivos que mencionam MCP",
  description: "Buscar referências MCP"
})
```

---

### Explorer 7: Anthropic's 5 Workflow Patterns
**Fonte:** Documentação oficial Anthropic

1. **Prompt Chaining**
   - Sequência linear de prompts
   - Output de um → Input do próximo
   - Uso: Pipelines simples

2. **Routing**
   - Classificação inicial direciona fluxo
   - Switch/case de prompts
   - Uso: Atendimento multicanal

3. **Parallelization**
   - Múltiplas execuções simultâneas
   - Agregação de resultados
   - Uso: Pesquisa distribuída

4. **Orchestrator-Workers**
   - Agente central coordena especializados
   - Decomposição dinâmica de tarefas
   - Uso: Sistemas complexos

5. **Evaluator-Optimizer**
   - Loop de geração + avaliação
   - Refinamento iterativo
   - Uso: Qualidade crítica

---

### Explorer 8: Architecture Canonical
**Arquitetura de 7 Componentes:**

```
┌─────────────────────────────────────────────────────────────┐
│                      SISTEMA AGÊNTICO                        │
├─────────────────────────────────────────────────────────────┤
│  1. ORQUESTRADOR                                             │
│     └── Interpreta, decide, coordena                         │
├─────────────────────────────────────────────────────────────┤
│  2. WORKERS (Subagents)                                      │
│     └── Explore, Plan, Bash, General, Guide                  │
├─────────────────────────────────────────────────────────────┤
│  3. SKILLS                                                   │
│     └── Expertise reutilizável (pasta + SKILL.md)            │
├─────────────────────────────────────────────────────────────┤
│  4. COMMANDS                                                 │
│     └── Atalhos invocáveis (/comando)                        │
├─────────────────────────────────────────────────────────────┤
│  5. TOOLS                                                    │
│     └── Ferramentas nativas (Read, Write, Bash...)           │
├─────────────────────────────────────────────────────────────┤
│  6. MCP (Model Context Protocol)                             │
│     └── Ponte para mundo externo (APIs, DBs, serviços)       │
├─────────────────────────────────────────────────────────────┤
│  7. MEMORY                                                   │
│     └── CLAUDE.md, settings.json, Estado em Arquivos         │
└─────────────────────────────────────────────────────────────┘
```

---

### Explorer 9: Superpowers System
**Conceito:** Skills avançados para workflows complexos.

**Exemplos Identificados:**
- `superpowers:using-git-worktrees` - Isolamento de branches
- `superpowers:writing-plans` - Planos detalhados
- `superpowers:code-reviewer` - Revisão automatizada

**Padrão de Invocação:**
```
/superpowers:skill-name
```

---

### Explorer 10: Pipelines Guide
**SuperJurista Pipeline (4 Fases):**

```
┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ 1. PREPARAÇÃO│───▶│ 2. EXTRAÇÃO  │───▶│ 3. PESQUISA  │───▶│ 4. ELABORAÇÃO│
│   (Setup)    │    │   (Parse)    │    │   (Search)   │    │   (Generate) │
└──────────────┘    └──────────────┘    └──────────────┘    └──────────────┘
     │                   │                   │                    │
     ▼                   ▼                   ▼                    ▼
  Contexto           Extrai dados        Consulta MCPs        Gera documento
  jurídico           do processo         jurídicos            final
```

**CLERK System:** Implementação prática do pipeline no curso.

---

### Explorer 11: CLAUDE.md Guide
**Propósito:** "Persistência de contexto entre sessões"

**Hierarquia de Leitura:**
1. `~/.claude/CLAUDE.md` - Global (usuário)
2. `projeto/CLAUDE.md` - Projeto específico
3. `projeto/.claude/CLAUDE.md` - Alternativo

**Conteúdo Recomendado:**
- Contexto do projeto
- Convenções de código
- Comandos frequentes
- Padrões arquiteturais

---

### Explorer 12: Best Practices
**Princípios Identificados:**

1. **MOSTRAR, não CONTAR**
   - Slides visualizam, professor narra

2. **State in Files**
   - Markdown como memória persistente
   - Arquivos como checkpoints

3. **Spec-Driven Development**
   - Especificação antes de código
   - Documento guia implementação

4. **Approvals Explícitos**
   - Nunca avançar sem confirmação
   - Checkpoints obrigatórios

5. **3 Propostas**
   - Sempre oferecer alternativas
   - Trade-offs explicados

---

### Explorer 13: Spec-Driven Development
**Definição:** "O documento vira o código"

**Fluxo:**
```
Requisitos → Especificação.md → Implementação → Validação
                    ↑                              │
                    └──────── Feedback ────────────┘
```

**Vantagens:**
- Clareza de escopo
- Documentação automática
- Validação objetiva

---

### Explorer 14: Multi-Agent Architecture
**Padrões de Comunicação:**

1. **Hub-and-Spoke**
   - Orquestrador central
   - Workers isolados
   - Comunicação via orquestrador

2. **Pipeline**
   - Sequência linear
   - Output → Input
   - Transformações encadeadas

3. **Mesh (não recomendado)**
   - Comunicação direta entre workers
   - Complexidade exponencial
   - Difícil debug

---

### Explorer 15: Course Structure
**Progressão Pedagógica:**

| Aula | Tema | Foco |
|------|------|------|
| 01 | Fundamentos | Conceitos básicos |
| 02 | Claude Code | Instalação e uso |
| 03 | Workflows | Padrões Anthropic |
| 04 | Anatomia | **7 Componentes** |
| 05 | Prática | Construção hands-on |

---

### Explorer 16: Glossary Terms
**Termos Críticos:**

| Termo | Definição |
|-------|-----------|
| **Agent Harness** | Framework que gerencia operação de agentes |
| **Claude Code** | Implementação Anthropic de harness via CLI |
| **MCP** | Model Context Protocol - padrão de conexão |
| **Skill** | Expertise reutilizável (pasta + SKILL.md) |
| **Command** | Prompt salvo invocável com `/` |
| **Tool** | Capacidade atômica do agente |
| **Subagent** | Worker especializado via Task |
| **Context Window** | Janela de memória de trabalho |

---

### Explorer 17: SuperJurista Flow
**Sistema Completo:**

```
┌─────────────────────────────────────────────────────────────┐
│                      SUPERJURISTA                            │
├─────────────────────────────────────────────────────────────┤
│  ENTRADA: Processo judicial (PDF/texto)                      │
├─────────────────────────────────────────────────────────────┤
│  FASE 1: Preparação                                          │
│  └── Carregar contexto, identificar tipo processual          │
├─────────────────────────────────────────────────────────────┤
│  FASE 2: Extração                                            │
│  └── Parser de peças, identificação de partes                │
├─────────────────────────────────────────────────────────────┤
│  FASE 3: Pesquisa (MCPs)                                     │
│  ├── BNP-API: Precedentes STF/STJ                            │
│  ├── CJF: Jurisprudência federal                             │
│  └── JULIA: Sistema TRF5                                     │
├─────────────────────────────────────────────────────────────┤
│  FASE 4: Elaboração                                          │
│  └── Geração de documento com fundamentação                  │
├─────────────────────────────────────────────────────────────┤
│  SAÍDA: Documento jurídico fundamentado                      │
└─────────────────────────────────────────────────────────────┘
```

---

### Explorer 18: Context Behavior
**Engenharia de Contexto:**

1. **Context Window**
   - ~200k tokens disponíveis
   - Degradação gradual em janelas longas
   - Priorizar informação recente

2. **State in Files**
   - Markdown como memória externa
   - Checkpoints salvos em disco
   - Recuperação entre sessões

3. **CLAUDE.md**
   - Contexto persistente
   - Carregado automaticamente
   - Hierarquia de escopo

---

### Explorer 19: Contradictions Report
**Inconsistências Identificadas:**

1. **Nomenclatura Task Tool vs Sub-agent Forking**
   - Alguns docs: "Task tool"
   - Outros docs: "Sub-agent forking"
   - **Recomendação:** Padronizar como "Task tool (subagents)"

2. **MCP como Tool vs Componente**
   - Plano atual: MCP como sub-item de Tools
   - Documentação: MCP como sistema independente
   - **Recomendação:** Elevar MCP a componente próprio

3. **Skills vs Commands**
   - Diferença nem sempre clara na documentação
   - **Recomendação:** Tabela comparativa explícita

---

### Explorer 20: Complete Guide
**Síntese Final:**

A Aula 04 deve apresentar a **Anatomia Completa** de um Sistema Agêntico com 7 componentes distintos, usando a metáfora da orquestra:

| Componente | Analogia Musical | Função |
|------------|------------------|--------|
| Orquestrador | Maestro | Coordena tudo |
| Workers | Músicos | Executam tarefas |
| Skills | Partituras | Conhecimento |
| Commands | Marcações | Atalhos |
| Tools | Instrumentos | Capacidades |
| MCP | Conexões | Mundo externo |
| Memory | Memória musical | Persistência |

---

## 3. PROPOSTA DE ATUALIZAÇÃO

### Novo Slide para MCP (Slide 12-A)

**Título:** "MCP: A Ponte para o Mundo Externo"

**Analogia:** Cabeamento e conexões da orquestra - permite que a música chegue ao público e que o feedback retorne aos músicos.

**Conteúdo Visual:**
```
┌─────────────────────────────────────────┐
│           CLAUDE CODE                    │
│         (MCP Client)                     │
└────────────┬────────────────────────────┘
             │ JSON-RPC
    ┌────────┼────────┬────────┐
    ▼        ▼        ▼        ▼
┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│ BNP  │ │ CJF  │ │JULIA │ │ ...  │
│ API  │ │      │ │ TRF5 │ │      │
└──────┘ └──────┘ └──────┘ └──────┘
   │        │        │        │
   ▼        ▼        ▼        ▼
[STF/STJ] [Federal] [TRF5]  [Ext.]
```

**Demonstração:** `demo-mcp-arquitetura.html` com animação mostrando fluxo de dados.

---

## 4. PRÓXIMOS PASSOS

1. [ ] Criar `demo-mcp-arquitetura.html` com visualização interativa
2. [ ] Atualizar `PLANO-SLIDES-AULA-04.md` incluindo MCP como 7º componente
3. [ ] Revisar roteiro para incluir bloco dedicado ao MCP
4. [ ] Criar analogia jurídica para MCP (ex: "Diário Oficial" - ponte entre judiciário e sociedade)

---

## 5. REFERÊNCIAS

- Documentação Claude Code: `curso_claude/docs/`
- MCPs Jurídicos: `curso_claude/docs/mcp/`
- Glossário: `docs/glossario-taxonomia-agentes.md`
- Anthropic Patterns: `docs/patterns/building-effective-agents.md`

---

*Relatório gerado por 20 agentes exploradores em paralelo*
*Consolidado em: 2026-01-28*
