# Avaliação Crítica da ESTRUTURA-PROPOSTA

**Data:** 2026-02-13
**Método:** Comparação com documentação oficial Anthropic (Claude Code, Agent SDK, Building Effective Agents)
**Status:** Completo

---

## Resumo Executivo

A ESTRUTURA-PROPOSTA apresenta uma base sólida, mas a análise identificou **12 lacunas significativas**, **6 imprecisões terminológicas**, **3 problemas de sequência pedagógica** e **15 pontos de melhoria**. As principais questões envolvem:

1. Ausência dos **5 Workflow Patterns oficiais da Anthropic**
2. Falta de cobertura de **Extended Thinking** e **Plan Mode**
3. Terminologia informal vs. oficial ("Modo YOLO")
4. Lacuna sobre **Claude Agent SDK** vs. CLI
5. Agent Teams ensinado antes de pré-requisitos

---

## 1. ERROS MATERIAIS

### 1.1 "Modo YOLO" — Terminologia Não Oficial

**Onde aparece:** Aula 2 ("Modo YOLO e permissões")

**Problema:** "YOLO" é gíria informal. A documentação oficial usa `bypassPermissions` como um dos 6 Permission Modes:

| Modo Oficial | Descrição |
|--------------|-----------|
| `default` | Pede aprovação na primeira use |
| `acceptEdits` | Auto-aceita edições |
| `plan` | Modo leitura, sem modificações |
| `delegate` | Coordenação apenas (agent teams) |
| `dontAsk` | Auto-nega exceto pré-aprovadas |
| `bypassPermissions` | Pula ALL checks (perigoso) |

**Correção:** Substituir "Modo YOLO" por "Permission Modes" e ensinar todos os 6.

---

### 1.2 "Escala de Autonomia L1-L5" — Origem Não Identificada

**Onde aparece:** Aula 1 ("Escala de autonomia L1-L5")

**Problema:** Esta escala não aparece na documentação oficial da Anthropic. O paper "Building Effective Agents" usa uma distinção binária:
- **Workflows:** Caminhos de código predefinidos
- **Agents:** LLM direciona dinamicamente seus próprios processos

**Verificar:** Se L1-L5 vem de outra fonte (academia, Karpathy, etc.), citar explicitamente. Caso contrário, alinhar com a terminologia Anthropic.

---

### 1.3 Agent Teams — Feature Experimental

**Onde aparece:** Aula 3.5 ("Agent Teams")

**Problema:** Agent Teams está **desabilitado por padrão** e marcado como **experimental** na documentação:

```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

**Risco:** Ensinar feature experimental como conteúdo principal pode frustrar alunos quando comportamento mudar ou feature for removida.

**Recomendação:**
- Marcar explicitamente como "Avançado/Experimental"
- Mover para final do curso (após consolidação)
- Ou: Focar em **Subagents** (estáveis) em vez de Agent Teams (experimental)

---

## 2. LACUNAS SIGNIFICATIVAS

### 2.1 Os 5 Workflow Patterns Oficiais da Anthropic

**CRÍTICO:** O paper "Building Effective Agents" define 5 patterns que são a base conceitual de toda arquitetura agêntica:

| Pattern | Descrição | Onde Deveria Aparecer |
|---------|-----------|----------------------|
| **Prompt Chaining** | Sequência de chamadas LLM onde cada uma processa saída anterior | Aula 3 ou 9 |
| **Routing** | Classifica input e direciona para tarefas especializadas | Aula 3 |
| **Parallelization** | Múltiplas instâncias LLM simultâneas (sectioning ou voting) | Aula 3.5 |
| **Orchestrator-Workers** | LLM central quebra tarefas e delega a workers | Aula 3.5 ou 9 |
| **Evaluator-Optimizer** | Um LLM gera, outro avalia criticamente em loop | Aula 9 |

**Impacto:** Sem estes patterns, o curso carece do framework conceitual oficial da Anthropic.

---

### 2.2 Extended Thinking — Feature Importante Ausente

**O que é:** Modo de raciocínio aprimorado onde Claude usa "budget de pensamento" antes de responder.

**Ativação:** `Alt+T` (Windows/Linux) ou `Option+T` (macOS)

**Por que importa:**
- Melhora qualidade em problemas complexos
- Diferencial competitivo (nem todas ferramentas têm)
- Opus 4.6 introduziu "adaptive thinking" com effort levels

**Onde incluir:** Aula 2 (configuração) ou Aula 6 (técnicas avançadas)

---

### 2.3 Plan Mode — Feature Importante Ausente

**O que é:** Modo que permite Claude analisar sem modificar (read-only).

**Ativação:** `Shift+Tab` para ciclar modos ou `claude --permission-mode plan`

**Por que importa:**
- Essencial para exploração segura
- Diferencia usuários iniciantes de avançados
- Previne erros em código de produção

**Onde incluir:** Aula 2 ou 3 (workflow de desenvolvimento)

---

### 2.4 Claude Agent SDK vs. CLI

**Lacuna:** O curso não diferencia:

| Aspecto | Claude Code CLI | Agent SDK |
|---------|-----------------|-----------|
| **Uso** | Desenvolvimento diário | Produção, CI/CD |
| **Interface** | Terminal interativo | Python/TypeScript |
| **Público** | Desenvolvedores | Equipes de produto |

**Impacto:** Juristas que queiram integrar em sistemas de produção não terão base.

**Onde incluir:** Aula 5 (aplicação real) ou Aula 10 (projeto final)

---

### 2.5 Code Intelligence e IDE Integrations

**Ausentes:**
- Integração VS Code (extensão oficial)
- Integração JetBrains (plugin oficial)
- Plugins de linguagem (pyright-lsp, typescript-lsp, etc.)
- Diagnostic sharing automático

**Onde incluir:** Aula 2 (configuração do ambiente)

---

### 2.6 Memory System Hierárquico

**Onde aparece:** Aula 7 menciona "CLAUDE.md avançado"

**Lacuna:** Não explica a hierarquia completa:

```
Precedência (maior vence):
1. Managed policy (enterprise)
2. .claude/CLAUDE.md ou ./CLAUDE.md (project)
3. .claude/rules/*.md (project rules com path filters)
4. ~/.claude/CLAUDE.md (user global)
5. ./CLAUDE.local.md (project local, gitignored)
6. ~/.claude/projects/<project>/memory/ (auto-saved)
```

**Impacto:** Alunos não saberão organizar configurações em equipes.

---

### 2.7 Agentes Nativos (Subagent Types) Incompletos

**Onde aparece:** Aula 3.5 menciona "Task Tool e tipos de agente"

**Lista Oficial Completa:**

| Subagent Type | Modelo | Ferramentas | Uso |
|---------------|--------|-------------|-----|
| **Explore** | Haiku | Read, Grep, Glob | Exploração rápida |
| **Plan** | Herda | Read, Grep, Glob | Coleta de contexto |
| **general-purpose** | Herda | Todas | Tarefas complexas |
| **Bash** | Herda | Bash | Execução de comandos |
| **statusline-setup** | Sonnet | Específicas | Config de UI |
| **claude-code-guide** | Haiku | Read-only | Documentação |

---

### 2.8 Ferramentas Nativas Completas

**Onde aparece:** Mencionado em várias aulas, mas não consolidado

**Lista Oficial:**

| Categoria | Ferramentas |
|-----------|-------------|
| **Leitura** | Read, Glob, Grep, WebSearch |
| **Escrita** | Write, Edit |
| **Execução** | Bash, TaskOutput |
| **Web** | WebFetch |
| **Orquestração** | Task, AskUserQuestion, ExitPlanMode |
| **MCP** | mcp__*__* (dinâmico) |

---

### 2.9 Hooks — Eventos Incompletos

**Onde aparece:** Aula 4.5 menciona "Eventos disponíveis"

**Lista Oficial (14 eventos):**

| Evento | Pode Bloquear | Uso |
|--------|---------------|-----|
| SessionStart | Não | Injetar contexto |
| SessionEnd | Não | Cleanup |
| PreCompact | Não | Salvar estado |
| UserPromptSubmit | Sim | Validar input |
| PreToolUse | Sim | Bloquear ferramentas |
| PostToolUse | Não | Auto-format, logging |
| PostToolUseFailure | Não | Tratamento de erros |
| PermissionRequest | Sim | Override permissões |
| Notification | Não | Alertas desktop |
| SubagentStart | Não | Monitoring |
| SubagentStop | Sim | Quality gates |
| Stop | Sim | Validação final |
| TeammateIdle | Sim | Coord. de teams |
| TaskCompleted | Sim | Quality check |

---

### 2.10 Plugins do Claude Code

**Ausente:** Sistema de plugins não mencionado

**O que são:** Extensões que adicionam funcionalidades (code intelligence, MCPs, etc.)

**Comandos:**
- `/plugin` — listar plugins
- `/plugin install <plugin>@<publisher>` — instalar
- `/plugin disable <plugin>` — desabilitar

**Plugins importantes:**
- `pyright-lsp` — Python type checking
- `typescript-lsp` — TypeScript intelligence
- `rust-analyzer-lsp` — Rust

---

### 2.11 MCP Specification Detalhada

**Onde aparece:** Aulas 5 e 8

**Lacuna:** Não explica a arquitetura MCP:

```
MCP Host (Claude Code)
  ├── MCP Client 1 ─── MCP Server A (Local, stdio)
  ├── MCP Client 2 ─── MCP Server B (Local, stdio)
  └── MCP Client 3 ─── MCP Server C (Remote, HTTP)
```

**Primitivos MCP:**
- **Tools:** Funções executáveis
- **Resources:** Fontes de dados
- **Prompts:** Templates reutilizáveis

---

### 2.12 Comandos Nativos Incompletos

**Onde aparece:** Aula 2 menciona "/help, /status, /cost"

**Lista Completa (25+ comandos):**

| Comando | Função |
|---------|--------|
| `/clear` | Limpa histórico |
| `/compact` | Compacta conversa |
| `/config` | Abre settings |
| `/context` | Visualiza uso de contexto |
| `/cost` | Estatísticas de tokens |
| `/debug` | Troubleshoot |
| `/doctor` | Verifica instalação |
| `/exit` | Sai do REPL |
| `/export` | Exporta conversa |
| `/help` | Ajuda |
| `/init` | Inicializa projeto |
| `/mcp` | Gerencia MCP servers |
| `/memory` | Edita CLAUDE.md |
| `/model` | Seleciona modelo |
| `/permissions` | Visualiza permissões |
| `/plan` | Entra em plan mode |
| `/resume` | Retoma sessão |
| `/stats` | Uso diário |
| `/tasks` | Lista bg tasks |
| `/theme` | Muda tema |
| `/vim` | Ativa modo vim |

---

## 3. PROBLEMAS DE SEQUÊNCIA PEDAGÓGICA

### 3.1 Agent Teams (3.5) Antes de Skills (4)

**Problema:** Para usar Agent Teams efetivamente, o aluno precisa:
1. Entender Skills (ensinado na Aula 4)
2. Entender Commands (ensinado na Aula 4)
3. Entender Task Tool e subagents (precede Teams)

**Correção:** Reordenar:
```
3 → Arquitetura de Agentes (patterns)
4 → Skills e Commands
4.5 → Hooks
5 → Subagentes e Task Tool
5.5 → Agent Teams (opcional/avançado)
6 → CLERK (aplicação)
```

---

### 3.2 MCP Fragmentado em Múltiplas Aulas

**Onde aparece:** Aulas 5, 8

**Problema:** MCP é ensinado em pedaços sem progressão clara.

**Correção:** Consolidar em uma aula dedicada:
- Aula X: "MCP — Conectando Claude ao Mundo"
  - O que é MCP
  - Arquitetura (host, client, server)
  - Primitivos (tools, resources, prompts)
  - Instalação de servers
  - Criação de servers (introdução)

---

### 3.3 CLAUDE.md Mencionado em Aulas 2 e 7

**Problema:** Introduzido na Aula 2, aprofundado na Aula 7 — gap muito grande.

**Correção:**
- Aula 2: Apenas `/init` e estrutura básica
- Aula 4 ou 5: CLAUDE.md intermediário
- Aula 7: Hierarquia completa e rules/

---

## 4. IMPRECISÕES TERMINOLÓGICAS

| Termo Usado | Termo Oficial | Onde Corrigir |
|-------------|---------------|---------------|
| "Modo YOLO" | `bypassPermissions` | Aula 2 |
| "Tipos de agente" | `subagent_type` | Aula 3.5 |
| "Task Tool" | `Task` (ferramenta) | Aula 3.5 |
| "Agent Teams" | Agent Teams (experimental) | Aula 3.5 - marcar como experimental |
| "Engenharia de Capacidades" | Tools + MCP | Aula 8 |
| "Pipeline vs Workflow" | 5 Workflow Patterns | Aula 3 |

---

## 5. PONTOS DE MELHORIA

### Estrutura Geral

1. **Adicionar glossário oficial** — Termos alinhados com documentação Anthropic
2. **Incluir cheatsheet de comandos** — Referência rápida para `/` commands
3. **Separar features estáveis de experimentais** — Agent Teams é experimental
4. **Incluir troubleshooting** — `/doctor`, `/debug`, logs

### Conteúdo Específico

5. **Aula 1:** Incluir definição oficial Anthropic de Workflow vs Agent
6. **Aula 2:** Adicionar Permission Modes, Extended Thinking, Plan Mode
7. **Aula 2:** Incluir IDE integrations (VS Code, JetBrains)
8. **Aula 3:** Usar os 5 Workflow Patterns como framework
9. **Aula 3.5:** Renomear para "Subagentes" e mover Agent Teams para aula avançada
10. **Aula 4:** Incluir plugins do Claude Code
11. **Aula 7:** Explicar hierarquia completa de memory files
12. **Aula 8:** Consolidar MCP em uma única aula estruturada
13. **Aula 10:** Mencionar Claude Agent SDK para produção

### Recursos Adicionais

14. **Incluir links para documentação oficial** — code.claude.com/docs
15. **Criar banco de exemplos** — Skills, Commands, Hooks prontos para uso

---

## 6. ESTRUTURA REVISADA PROPOSTA

```
MÓDULO 1: FUNDAMENTOS (8 aulas)
├── 0: Bem-Vindo ao Mundo Agêntico
├── 1: A Era dos Agentes
│   └── ADICIONAR: Definição oficial Anthropic (Workflow vs Agent)
├── 2: Desvendando o Claude Code
│   └── ADICIONAR: Permission Modes, Extended Thinking, IDE integrations
├── 3: Arquitetura de Agentes
│   └── ADICIONAR: 5 Workflow Patterns oficiais
├── 4: Skills, Commands e Plugins
│   └── MOVER hooks para depois
├── 5: Subagentes e Task Tool (antigo 3.5)
│   └── REMOVER Agent Teams ou marcar experimental
├── 6: Hooks — Automação Determinística (antigo 4.5)
│   └── INCLUIR: Lista completa de 14 eventos
└── 7: Sistema Jurídico Agêntico (CLERK) (antigo 5)

MÓDULO 2: ENGENHARIA AVANÇADA (6 aulas)
├── 8: Engenharia de Prompt (antigo 6)
├── 9: Prompts em Sistemas Agênticos (antigo 6B)
├── 10: Engenharia de Contexto (antigo 7)
│   └── INCLUIR: Hierarquia completa de memory
├── 11: MCP — Conectando Claude ao Mundo (antigo 8)
│   └── CONSOLIDAR: Arquitetura, primitivos, criação
├── 12: Engenharia de Workflows (antigo 9)
│   └── USAR: 5 patterns como framework
└── 13: Projeto Integrador (antigo 10)
    └── INCLUIR: Claude Agent SDK para produção

BÔNUS (OPCIONAL/EXPERIMENTAL)
└── B1: Agent Teams — Orquestração Multi-Agente
    └── MARCAR: Experimental, requer CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS
```

---

## 7. CHECKLIST DE VALIDAÇÃO

### Antes de Implementar

- [ ] Validar escala L1-L5 (citar fonte ou remover)
- [ ] Decidir: Agent Teams como conteúdo principal ou bônus?
- [ ] Confirmar sequência pedagógica revisada
- [ ] Alinhar terminologia com documentação oficial

### Durante Implementação

- [ ] Cada aula menciona comandos `/` relevantes
- [ ] Cada aula tem exercício prático
- [ ] Links para documentação oficial incluídos
- [ ] Features experimentais marcadas claramente

### Após Implementação

- [ ] Glossário revisado por precisão terminológica
- [ ] Cheatsheet de comandos validado
- [ ] Banco de exemplos testado e funcional

---

## 8. FONTES OFICIAIS CONSULTADAS

| Fonte | URL | Conteúdo |
|-------|-----|----------|
| Claude Code Docs | code.claude.com/docs | Referência completa |
| Building Effective Agents | anthropic.com/research/building-effective-agents | 5 Workflow Patterns |
| Agent SDK | platform.claude.com/docs/agent-sdk | SDK para produção |
| MCP Specification | modelcontextprotocol.io | Protocolo MCP |

---

*Avaliação concluída em 2026-02-13*
*Método: Pesquisa via claude-code-guide agent + documentação oficial*
