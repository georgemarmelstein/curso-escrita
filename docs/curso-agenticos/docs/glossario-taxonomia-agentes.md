# Glossário e Taxonomia de Sistemas Agênticos

> **Propósito**: Sistematização dos conceitos emergentes (2024-2025) do ecossistema Claude Code.
> **Contexto**: "Ferramenta alienígena sem manual" (Karpathy) - recursos em busca de sistematização.
> **Última atualização**: Janeiro 2026

---

## Sumário

1. [Visão Hierárquica](#visão-hierárquica)
2. [Definições Fundamentais](#definições-fundamentais)
3. [Componentes do Claude Code](#componentes-do-claude-code)
4. [Padrões Arquiteturais](#padrões-arquiteturais)
5. [Taxonomia Comparativa](#taxonomia-comparativa)
6. [Mapeamento para o Curso](#mapeamento-para-o-curso)

---

## Visão Hierárquica

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                        ECOSSISTEMA ANTHROPIC                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                       AGENT HARNESS                                 │   │
│   │   "Framework que gerencia como agentes de IA operam"                │   │
│   │   (gerenciamento de contexto, compactação, ferramentas)             │   │
│   │                                                                     │   │
│   │   ┌─────────────────────┐     ┌─────────────────────┐               │   │
│   │   │    CLAUDE CODE      │     │  CLAUDE AGENT SDK   │               │   │
│   │   │   (para PESSOAS)    │     │  (para PRODUTOS)    │               │   │
│   │   │                     │     │                     │               │   │
│   │   │  • Contexto rico    │     │  • Prompt fixo      │               │   │
│   │   │  • Interativo       │     │  • Programático     │               │   │
│   │   │  • Ferramentas      │     │  • API/SDK          │               │   │
│   │   │    on-the-fly       │     │  • Escala           │               │   │
│   │   └─────────────────────┘     └─────────────────────┘               │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                     MODEL CONTEXT PROTOCOL (MCP)                    │   │
│   │              Protocolo universal de conexão com ferramentas         │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Definições Fundamentais

### Agent Harness (Arnês do Agente)

> **Definição Oficial (Anthropic)**: "A framework that manages how AI agents operate, including context management and compaction."

**Em português**: Estrutura que gerencia como agentes de IA operam.

**O que faz**:
- Gerencia o contexto (o que o agente "sabe")
- Controla a compactação (resumir para caber na janela)
- Coordena ferramentas disponíveis
- Implementa o loop agêntico

**Analogia**: O harness está para o agente assim como o sistema operacional está para os programas. Ele não é a inteligência, mas a infraestrutura que permite a inteligência operar.

**Citação-chave** (Barry Zhang, AI Engineer):
> "The harness doesn't make Claude smarter. Claude IS smart. The harness just removes friction."

---

### Claude Code

> **Definição Oficial (Anthropic)**: "A powerful, general-purpose agent harness adept at coding, as well as other tasks."

**O que é**: Implementação do Anthropic de um Agent Harness, disponibilizado como CLI.

**Componentes internos**:
```
┌────────────────────────────────────────────────────────┐
│                     CLAUDE CODE                        │
├────────────────────────────────────────────────────────┤
│  LOOP AGÊNTICO (while True)                            │
│  ├── Recebe input do usuário                           │
│  ├── Processa com Claude (modelo)                      │
│  ├── Executa ferramentas (Tools)                       │
│  ├── Verifica resultado                                │
│  └── Repete ou retorna                                 │
├────────────────────────────────────────────────────────┤
│  FERRAMENTAS NATIVAS                                   │
│  ├── Bash (execução de comandos)                       │
│  ├── Read/Write/Edit (arquivos)                        │
│  ├── Glob/Grep (busca)                                 │
│  ├── WebSearch/WebFetch (internet)                     │
│  ├── Task Tool (subagentes)                            │
│  └── MCP Tools (via protocolo)                         │
├────────────────────────────────────────────────────────┤
│  CONFIGURAÇÃO                                          │
│  ├── CLAUDE.md (instruções persistentes)               │
│  ├── settings.json (permissões)                        │
│  ├── Skills (expertise reutilizável)                   │
│  └── Commands (prompts salvos)                         │
└────────────────────────────────────────────────────────┘
```

**Não confundir**: Claude Code NÃO é apenas uma interface de linha de comando. É um agente completo com:
- Loop de execução autônomo
- Auto-correção quando falha
- Criação de ferramentas on-the-fly
- Delegação para subagentes

---

### Claude Agent SDK

> **Definição Oficial (Anthropic)**: "Previously called Claude Code SDK, a toolkit for building custom AI agents."

**Diferença crucial**:

| Aspecto | Claude Code | Claude Agent SDK |
|---------|-------------|------------------|
| **Usuário** | Humanos (interativo) | Desenvolvedores (programático) |
| **Prompt** | Contexto rico, adaptativo | Fixo, definido no código |
| **Uso** | Terminal, conversacional | API, aplicações |
| **Escala** | Um usuário | Milhares de requests |
| **Criação de tools** | On-the-fly | Pré-definidas |

**Quando usar cada um**:
- **Claude Code**: Uso pessoal, exploração, máximo do LLM
- **Agent SDK**: Produtos, APIs, escala, previsibilidade

---

### Model Context Protocol (MCP)

> **Definição**: Protocolo aberto para conectar agentes de IA a ferramentas externas.

**Analogia**: USB para IA - padrão universal de conexão.

**Componentes**:
- **MCP Server**: Fornece ferramentas (ex: busca jurisprudência)
- **MCP Client**: Consome ferramentas (ex: Claude Code)
- **MCP Tools**: Funções expostas pelo servidor

**Exemplo prático**:
```
┌──────────────┐     MCP      ┌──────────────┐
│  Claude Code │◄────────────►│   BNP API    │
│   (client)   │              │   (server)   │
└──────────────┘              └──────────────┘
                                    │
                              buscar_precedentes()
                              gerar_relatorio()
```

---

## Componentes do Claude Code

### Task Tool

> **Definição Oficial**: "Mechanism to invoke subagents with isolated context windows."

**O que faz**: Cria um "prompt isolado" que executa em paralelo, com contexto próprio.

**IMPORTANTE - Esclarecimento conceitual**:

A Task Tool NÃO cria "agentes reais" no sentido clássico. Ela cria **prompts isolados** que:
- Recebem contexto específico
- Executam uma tarefa
- Retornam resultado
- São descartados

**Citação-chave** (Dex Horthy, AI Engineer):
> "Keep agent single-threaded. Parallelism OUTSIDE."

**Subagent Types disponíveis**:

| Tipo | Descrição | Ferramentas |
|------|-----------|-------------|
| `Explore` | Busca rápida em codebase (read-only) | Glob, Grep, Read |
| `Plan` | Pesquisa para planejamento | Todas exceto Edit/Write |
| `general-purpose` | Tarefas complexas multi-step | Todas |
| `Bash` | Execução de comandos | Bash |

**Uso correto**:
```
# Paralelização de tarefas independentes
Task(subagent_type="Explore", prompt="Encontre arquivos de teste")
Task(subagent_type="Explore", prompt="Encontre configurações")

# NÃO USE para:
# - Tarefas sequenciais (uma depende da outra)
# - Contexto que precisa ser mantido
```

---

### Skills

> **Definição Oficial (Anthropic)**: "Organized folders of instructions, scripts, and resources that agents can discover and load dynamically."

**Insight crítico** (Barry Zhang, AI Engineer):
> "Skills are just folders. That's it. A folder with a SKILL.md file."

**Estrutura**:
```
~/.claude/skills/
└── minha-skill/
    ├── SKILL.md          # Instruções (OBRIGATÓRIO)
    ├── exemplos/         # Opcional
    └── templates/        # Opcional
```

**Diferença de Commands**:

| Aspecto | Command | Skill |
|---------|---------|-------|
| **Invocação** | Explícita (`/comando`) | Automática por contexto |
| **Escopo** | Uma tarefa | Expertise reutilizável |
| **Localização** | `.claude/commands/` | `.claude/skills/` |
| **Parâmetros** | Sim (`$ARGUMENTS`) | Não |

**Quando usar Skill**:
- Expertise que se aplica a múltiplos contextos
- Metodologias reutilizáveis
- Conhecimento de domínio (ex: "pesquisa-precedentes")

**Quando usar Command**:
- Ação específica com parâmetros
- Atalho para tarefa comum
- Invocação explícita desejada

---

### Commands

> **Definição**: Prompts salvos invocados explicitamente com `/`.

**Estrutura**:
```markdown
---
description: Descrição curta para autocompletar
model: sonnet (opcional)
---

Prompt que será executado.

$ARGUMENTS será substituído pelos argumentos passados.
```

**Localização**:
- Projeto: `.claude/commands/`
- Global: `~/.claude/commands/`

---

### CLAUDE.md

> **Definição**: Arquivo de instruções persistentes carregado automaticamente.

**Hierarquia de precedência**:
```
1. ~/.claude/CLAUDE.md        (global - preferências pessoais)
2. ./CLAUDE.md                (projeto - regras do projeto)
3. ./subpasta/CLAUDE.md       (local - específico da pasta)
```

**Analogia jurídica**: Constituição > Lei Federal > Lei Estadual

**O que colocar**:
- Convenções do projeto
- Glossário de termos
- Fluxos de trabalho
- Regras de formatação
- NÃO colocar: dados sensíveis, prompts completos

---

### Tools (Ferramentas)

**Ferramentas nativas do Claude Code**:

| Ferramenta | Função | Exemplo |
|------------|--------|---------|
| `Bash` | Executa comandos shell | `git status` |
| `Read` | Lê arquivos | Ler código-fonte |
| `Write` | Cria arquivos | Criar novo arquivo |
| `Edit` | Edita arquivos | Modificar código |
| `Glob` | Busca por padrão | `**/*.py` |
| `Grep` | Busca em conteúdo | Encontrar função |
| `WebSearch` | Busca na internet | Pesquisar documentação |
| `WebFetch` | Baixa página web | Ler artigo |
| `Task` | Cria subagente | Paralelizar trabalho |
| `TodoWrite` | Gerencia tarefas | Tracking de progresso |

---

### Background Tasks

> **Definição**: Tarefas executadas em segundo plano sem bloquear a sessão.

**Uso**:
```
Task(run_in_background=True, prompt="Analise todos os arquivos...")
```

**Quando usar**:
- Tarefas demoradas (análise extensiva)
- Processamento em lote
- Não precisa do resultado imediatamente

**Verificar resultado**:
```
/tasks                    # Lista tarefas em background
TaskOutput(task_id="...")  # Obtém resultado
```

---

## Padrões Arquiteturais

### Workflow vs Agent

> **Distinção fundamental** (Anthropic Best Practices):

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           WORKFLOW                                      │
│         Fluxo DETERMINÍSTICO com etapas PREDEFINIDAS                    │
│                                                                         │
│   ┌─────┐    ┌─────┐    ┌─────┐    ┌─────┐                              │
│   │ LLM │───►│ LLM │───►│ LLM │───►│ LLM │                              │
│   │  1  │    │  2  │    │  3  │    │  4  │                              │
│   └─────┘    └─────┘    └─────┘    └─────┘                              │
│      │          │          │          │                                 │
│   prompt     prompt     prompt     prompt                               │
│   fixo 1     fixo 2     fixo 3     fixo 4                               │
│                                                                         │
│   ► Cada etapa conhecida de antemão                                     │
│   ► Fluxo previsível e testável                                         │
│   ► Sem decisões autônomas                                              │
└─────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                            AGENT                                        │
│         Loop AUTÔNOMO que decide próximas ações                         │
│                                                                         │
│                      ┌─────────────┐                                    │
│              ┌──────►│    MODEL    │◄──────┐                            │
│              │       │  (decide)   │       │                            │
│              │       └──────┬──────┘       │                            │
│              │              │              │                            │
│              │              ▼              │                            │
│         ┌────┴────┐   ┌─────────┐   ┌─────┴─────┐                       │
│         │ Tool A  │   │ Tool B  │   │  Tool C   │                       │
│         └─────────┘   └─────────┘   └───────────┘                       │
│                                                                         │
│   ► Modelo decide qual tool usar                                        │
│   ► Fluxo adaptativo e imprevisível                                     │
│   ► Autonomia para resolver problemas                                   │
└─────────────────────────────────────────────────────────────────────────┘
```

**Quando usar cada um**:

| Cenário | Usar Workflow | Usar Agent |
|---------|---------------|------------|
| Tarefa repetitiva, previsível | ✓ | |
| Resultado deve ser auditável | ✓ | |
| Tarefa exploratória | | ✓ |
| Precisa adaptar ao inesperado | | ✓ |
| Produção com escala | ✓ | |
| Uso pessoal/interativo | | ✓ |

---

### Orchestrator (Orquestrador)

> **Definição**: Coordenador central que determina sequência de execução.

**Padrões de orquestração**:

```
1. SEQUENCIAL (Pipeline)
   ┌─────┐    ┌─────┐    ┌─────┐
   │  A  │───►│  B  │───►│  C  │
   └─────┘    └─────┘    └─────┘

2. PARALELO (Fan-out)
              ┌─────┐
         ┌───►│  B  │───┐
   ┌─────┤    └─────┘   ├─────┐
   │  A  │    ┌─────┐   │  D  │
   └─────┼───►│  C  │───┼─────┘
         │    └─────┘   │
         └──────────────┘

3. ROUTER (Decisão)
              ┌─────┐
         ┌───►│  B  │
   ┌─────┤    └─────┘
   │  A  │    ┌─────┐
   │ ??? ├───►│  C  │
   └─────┤    └─────┘
         │    ┌─────┐
         └───►│  D  │
              └─────┘
```

---

### Pipeline (Cadeia de Prompts)

> **Definição**: Sequência linear de transformações onde saída de um é entrada do próximo.

**Padrão RPI** (Read → Process → Insert):
```
┌──────────┐     ┌───────────┐     ┌──────────┐
│   READ   │────►│  PROCESS  │────►│  INSERT  │
│ arquivo  │     │  com LLM  │     │ resultado│
└──────────┘     └───────────┘     └──────────┘
```

**Exemplo jurídico**:
```
processo.pdf → relatorio.md → analise.md → minuta.md → sentenca.md
```

---

### Agentic Loop (Loop Agêntico)

> **Definição Oficial (Anthropic)**: "Gather context → Take action → Verify work → Repeat"

**Implementação no Claude Code**:
```
while True:
    # 1. GATHER CONTEXT
    contexto = receber_input() + ler_CLAUDE_md() + carregar_skills()

    # 2. TAKE ACTION
    acao = modelo.decidir(contexto)
    resultado = executar(acao)

    # 3. VERIFY WORK
    if verificar(resultado):
        break  # Sucesso
    else:
        contexto += f"Erro: {resultado}. Tentando novamente..."
        # Volta para o início do loop
```

---

## Taxonomia Comparativa

### Níveis de Autonomia

```
┌────────────────────────────────────────────────────────────────────────┐
│                    ESPECTRO DE AUTONOMIA                               │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  ASSISTENTE          PROTOAGENTE           AGENTE                      │
│      │                    │                   │                        │
│      ▼                    ▼                   ▼                        │
│  ┌───────┐           ┌───────┐           ┌───────┐                     │
│  │ Chat  │           │Claude │           │Claude │                     │
│  │ Web   │           │ Code  │           │ Code  │                     │
│  │       │           │(semi) │           │(YOLO) │                     │
│  └───────┘           └───────┘           └───────┘                     │
│                                                                        │
│  • Responde          • Executa           • Decide                      │
│  • Não age           • Pede permissão    • Age sozinho                 │
│  • Uma troca         • Múltiplas         • Loop autônomo               │
│                        trocas                                          │
│                                                                        │
│  "O que é X?"        "Faça X"            "Resolva X"                   │
│                      (confirma cada      (sem supervisão)              │
│                       passo)                                           │
└────────────────────────────────────────────────────────────────────────┘
```

---

### Claude Code vs Agent SDK vs MCP

| Dimensão | Claude Code | Agent SDK | MCP |
|----------|-------------|-----------|-----|
| **Natureza** | Harness completo | SDK/Toolkit | Protocolo |
| **Usuário** | Humanos | Desenvolvedores | Qualquer |
| **Interface** | CLI/Terminal | API/Código | Standard |
| **Loop** | Embutido | Você implementa | N/A |
| **Ferramentas** | Nativas + MCP | Você define | Você expõe |
| **Contexto** | CLAUDE.md + conversa | Prompt fixo | N/A |

---

### Skill vs Command vs Prompt vs Tool

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    HIERARQUIA DE ABSTRAÇÃO                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   SKILL                                                                 │
│   "Expertise reutilizável"                                              │
│   └── Carregada automaticamente por contexto                            │
│       └── Pode conter múltiplos prompts e metodologias                  │
│                                                                         │
│   COMMAND                                                               │
│   "Atalho para tarefa"                                                  │
│   └── Invocado explicitamente com /                                     │
│       └── Um prompt com possíveis argumentos                            │
│                                                                         │
│   PROMPT                                                                │
│   "Instrução para o modelo"                                             │
│   └── Texto que direciona comportamento                                 │
│       └── Unidade básica de comunicação                                 │
│                                                                         │
│   TOOL                                                                  │
│   "Capacidade de ação"                                                  │
│   └── Função que o agente pode executar                                 │
│       └── Ex: Bash, Read, WebSearch                                     │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Mapeamento para o Curso

### Onde cada conceito é tratado

| Conceito | Aula | Profundidade |
|----------|------|--------------|
| Assistente vs Agente | Aula 0 | Introdução |
| Agent Harness | Aula 0 | Conceitual |
| Claude Code (visão geral) | Aula 1 | Demonstração |
| Instalação e configuração | Aula 2A | Prática |
| CLAUDE.md | Aula 2A | Prática |
| Skills e Commands | Aula 2B | Prática |
| Task Tool e Subagentes | Aula 2B | Prática |
| Workflow vs Agent | Aula 3 | Arquitetural |
| Orchestrator patterns | Aula 3 | Arquitetural |
| Pipeline | Aula 3 | Arquitetural |
| MCP | Aula 4 | Construção |
| Extended Thinking | Aula 4 | Avançado |
| Agent SDK | Aula 5 | Referência |

---

## Fontes e Referências

### Documentação Oficial Anthropic
- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)
- [Agent Best Practices](https://www.anthropic.com/engineering/building-effective-agents)
- [Claude Agent SDK](https://docs.anthropic.com/en/docs/claude-agent-sdk)

### AI Engineer Summit 2024-2025
- Barry Zhang (Anthropic) - "Claude Code Internals"
- Dex Horthy (Anthropic) - "Agent Architecture"
- Jared Zoneraich - "MCP Deep Dive"

### Citações-Chave

> "Skills are just folders. That's it." — Barry Zhang

> "Keep agent single-threaded. Parallelism OUTSIDE." — Dex Horthy

> "The harness doesn't make Claude smarter. Claude IS smart. The harness just removes friction." — Barry Zhang

> "A diferença não é de grau. É de natureza." — Manifesto Regência Cognitiva

---

*Documento criado para o Curso de Sistemas Agênticos*
*Última atualização: Janeiro 2026*
