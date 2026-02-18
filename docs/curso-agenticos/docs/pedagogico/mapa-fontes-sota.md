# Mapa de Fontes SOTA (State of the Art)

> **Propósito:** Documentar as fontes de conhecimento de ponta que fundamentam este curso.
> **Filosofia:** Ensinar o que há de mais avançado, não versões simplificadas.
> **Fonte Dinâmica:** `docs/resources/` (atualizado continuamente)
> **Última atualização:** Janeiro 2026

---

## Fonte Principal: docs/resources/

O repositório de fontes está em `docs/resources/` e contém:

```
docs/resources/
├── README.md                         # Índice dinâmico (consultar primeiro)
├── transcricoes-ai-engineer/         # 150+ transcrições AI Engineer Summit
│   └── _INDEX.md                     # Índice de vídeos processados
└── transcricoes-natebjones/          # 32+ análises executivas
```

**Para fontes atualizadas, consulte:** `docs/resources/README.md`

---

## Visão Geral das Fontes

Este curso é construído sobre **quatro pilares de conhecimento**:

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PIRÂMIDE DE CONHECIMENTO                             │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│                         ┌─────────────┐                                 │
│                         │  ANTHROPIC  │  ◄── Fonte primária             │
│                         │   OFICIAL   │      (documentação, engenheiros)│
│                         └──────┬──────┘                                 │
│                                │                                        │
│                    ┌───────────┴───────────┐                            │
│                    │    AI ENGINEER        │  ◄── 77+ transcrições      │
│                    │      SUMMIT           │      (practitioners)       │
│                    └───────────┬───────────┘                            │
│                                │                                        │
│            ┌───────────────────┼───────────────────┐                    │
│            │      PESQUISA     │    PRODUÇÃO       │                    │
│            │    ACADÊMICA      │    EMPRESARIAL    │                    │
│            │  (pre-prints,     │  (cases reais,    │                    │
│            │   papers)         │   métricas)       │                    │
│            └───────────────────┴───────────────────┘                    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 1. Fontes Primárias: Anthropic

### Documentação Oficial

| Recurso | URL | Conteúdo |
|---------|-----|----------|
| Claude Code Docs | docs.anthropic.com/claude-code | Arquitetura, comandos, configuração |
| Agent Best Practices | anthropic.com/engineering | Padrões de design de agentes |
| Claude Agent SDK | docs.anthropic.com/agent-sdk | SDK para construção de agentes |
| MCP Specification | modelcontextprotocol.io | Protocolo de conexão com ferramentas |

### Engenheiros da Anthropic Citados

| Nome | Cargo | Contribuição ao Curso |
|------|-------|----------------------|
| **Barry Zhang** | Staff Engineer | Arquitetura de Skills, Progressive Disclosure |
| **Mahesh Murag** | Engineer | Hierarquia de contextos, CLAUDE.md |
| **Dex Horthy** | HumanLayer | 12 Factor Agents, RPI Pattern |
| **Katelyn Lesse** | Engineer | Extended Thinking, Context Editing |
| **Thariq Shihipar** | Engineer | Agent SDK, Hooks, Workflows |

### Citações-Chave da Anthropic

> *"Skills are just folders. That's it. A folder with a SKILL.md file."*
> — Barry Zhang

> *"The harness doesn't make Claude smarter. Claude IS smart. The harness just removes friction."*
> — Barry Zhang

> *"Metadata visible, details loaded on demand."*
> — Barry Zhang (Progressive Disclosure)

---

## 2. AI Engineer Summit 2024-2025

### Estatísticas do Mapeamento

- **Total de transcrições analisadas:** 77+
- **Eventos:** AI Engineer World's Fair, AIE CODE Summit 2025
- **Empresas representadas:** 50+
- **Conceitos extraídos:** 200+

### Categorias de Conhecimento

#### 2.1 Claude Code e Arquitetura Anthropic

| Palestrante | Empresa | Transcrição | Conceitos |
|-------------|---------|-------------|-----------|
| Jared Zoneraich | PromptLayer | How Claude Code Works | While loop, tools, CLAUDE.md |
| Boris Cherny | Anthropic | Claude Code Evolution | UX unopinionated, Plan Mode |
| Barry Zhang | Anthropic | Don't Build Agents, Build Skills | Skills como pastas |

**Aulas impactadas:** 2, 3, 4

#### 2.2 MCP (Model Context Protocol)

| Palestrante | Empresa | Transcrição | Conceitos |
|-------------|---------|-------------|-----------|
| John Welsh | Anthropic | Remote MCPs | MCP Gateway, JSON RPC |
| Samuel Colvin | Pydantic | MCP is All You Need | FastMCP, Sampling |
| Jeremiah Lowin | Prefect | Your MCP Server is Bad | 50 tools max, outcomes not operations |

**Aulas impactadas:** 3, 4, 5

#### 2.3 Arquitetura e Patterns

| Palestrante | Empresa | Transcrição | Conceitos |
|-------------|---------|-------------|-----------|
| Dex Horthy | HumanLayer | 12 Factor Agents | Micro-agents, control flow |
| Dex Horthy | HumanLayer | No Vibes Allowed | RPI, smart/dumb zone |
| Cornelia Davis | Temporal | Durable Agents | Workflows, durability |
| Robert Brennan | AllHands | Parallel Agents | 90% automation goal |

**Aulas impactadas:** 3

#### 2.4 Filosofia e Cultura

| Palestrante | Empresa | Transcrição | Conceitos |
|-------------|---------|-------------|-----------|
| Kitze | Sizzy | Vibe Coding to Vibe Engineering | Seniores vs juniores |
| swyx | AI Engineer | No More Slop | Qualidade, taste |
| Joel Becker | METR | Agent Hype vs Reality | Paradoxo 19% mais lentos |
| Steve Yegge | Sourcegraph | 2026: Year IDE Died | Metáfora do mergulhador |

**Aulas impactadas:** 0, 1, 5

#### 2.5 Casos de Produção

| Palestrante | Empresa | Transcrição | Conceitos |
|-------------|---------|-------------|-----------|
| Lisa Orr | Zapier | Support Team Ship Code | Scout Agent pattern |
| Mark Myshatyn | Los Alamos | Government Agents | Explainability, governance |
| Asaf Bord | Northwestern Mutual | GenBI Fortune 100 | Crawl-walk-run |

**Aulas impactadas:** 4, 5

---

## 3. Vozes de Autoridade Externa

### Andrej Karpathy

**Credenciais:** Ex-diretor de IA da Tesla, co-fundador da OpenAI

**Contribuições ao curso:**
- Metáfora da "ferramenta alienígena sem manual"
- Conceito de "terremoto magnitude 9"
- Lista canônica de conceitos a dominar

**Citação fundamental:**

> *"There is a new programmable layer of abstraction to dominate (beyond the usual layers below) involving agents, sub-agents, their prompts, contexts, memory, modes, permissions, tools, plugins, skills, hooks, MCP, LSP, slash commands, workflows, IDE integrations."*

**Uso no curso:** Abertura da Aula 0, justificativa do currículo

### Simon Willison

**Credenciais:** Criador do Django, pesquisador de LLMs

**Contribuições ao curso:**
- Validação de que "agentes finalmente funcionam"
- Perspectiva histórica sobre evolução de LLMs

**Citação:**

> *"Agents finally work. [...] They can complete multi-hour tasks reliably."*

**Uso no curso:** Contextualização histórica

### Jake Nations (Netflix)

**Credenciais:** Engenheiro Netflix, practitioner de agentes

**Contribuições ao curso:**
- Padrão Research-Plan-Implement
- Context compression strategies

**Citação fundamental:**

> *"The hard part was never typing the code. It was knowing what to type in the first place."*

**Uso no curso:** Filosofia do curso, Aula 4

---

## 4. Pesquisa Acadêmica e Estudos

### METR Study 2024

**Fonte:** Avaliação de produtividade com ferramentas de IA

**Achado principal:** Especialistas foram 19% mais lentos com IA

**Implicação para o curso:** Justifica necessidade de método, não apenas ferramenta

### Capgemini 2024

**Fonte:** Pesquisa global sobre adoção de agentes

**Achados:**
- 79% das organizações implementando agentes
- Crescimento de 315% no setor jurídico
- ROI projetado de 171% em 3 anos

**Uso no curso:** Contextualização de urgência

### Gartner Predictions

**Fonte:** Previsões de mercado

**Achado:** 40% das aplicações corporativas terão IA agêntica até 2027

**Uso no curso:** Justificativa de relevância

---

## 5. Frameworks e Padrões Documentados

### 12 Factor Agents (Dex Horthy)

| Fator | Descrição | Aplicação no Curso |
|-------|-----------|-------------------|
| 1 | Prompts são código | Versionamento de prompts |
| 2 | Context is King | Gerenciamento de contexto |
| 3 | Own your prompts | Controle sobre configurações |
| 4 | Tools simples | Uma coisa bem |
| 5 | Outcomes, not operations | Design de ferramentas |
| 6 | Unified observability | Monitoramento |
| 7-12 | (demais fatores) | Avançado |

### 3 Pillars of Autonomy (Michele Catasta)

| Pilar | Descrição | Onde Ensinado |
|-------|-----------|---------------|
| **Capability** | O que o agente sabe fazer | Aula 2A |
| **Verification** | Como garantir que fez certo | Aula 3 |
| **Context** | Informações necessárias | Aula 2B, 7 |

### RPI Pattern (Research-Plan-Implement)

```
┌──────────┐     ┌──────────┐     ┌──────────┐
│ RESEARCH │────▶│   PLAN   │────▶│IMPLEMENT │
│          │     │          │     │          │
│ Entender │     │ Estruturar│    │ Executar │
│ contexto │     │ abordagem │    │ solução  │
└──────────┘     └──────────┘     └──────────┘
     │                │                │
     ▼                ▼                ▼
  [GATE]           [GATE]          [OUTPUT]
```

**Onde ensinado:** Aulas 3, 4, 9

---

## 6. Validação Cruzada de Fontes

### Princípio de Triangulação

Cada conceito importante do curso é validado por **pelo menos duas fontes independentes**:

| Conceito | Fonte 1 | Fonte 2 | Fonte 3 |
|----------|---------|---------|---------|
| Skills como pastas | Barry Zhang (Anthropic) | Docs oficiais | Jared Zoneraich |
| RPI Pattern | Dex Horthy | Jake Nations | Al Harris |
| 50 tools max | Jeremiah Lowin | Docs Anthropic | Práticas de produção |
| Vibe Engineering | Kitze | Dex Horthy | Barry Zhang |
| Progressive Disclosure | Barry Zhang | Docs oficiais | Dan Shipper |

### Hierarquia de Confiança

1. **Máxima:** Documentação oficial Anthropic
2. **Alta:** Engenheiros Anthropic em palestras
3. **Alta:** Practitioners com casos de produção
4. **Média:** Pesquisas acadêmicas peer-reviewed
5. **Referência:** Vozes de autoridade (Karpathy, Willison)

---

## 7. Atualização Contínua

### Compromisso de Atualização

Este curso se compromete a:

1. **Monitorar** novos releases da Anthropic
2. **Incorporar** insights de novos eventos AI Engineer
3. **Validar** conceitos contra práticas de produção emergentes
4. **Versionar** atualizações com changelog

### Fontes de Monitoramento

- Anthropic Engineering Blog
- AI Engineer Newsletter
- Claude Code Release Notes
- MCP Specification Updates

---

## Anexo: Índice de Citações por Aula

### Aula 0
- Karpathy (terremoto, ferramenta alienígena)
- Willison (agentes funcionam)
- Kitze (vibe coding vs engineering)
- METR Study (paradoxo 19%)

### Aula 1
- Boris Cherny (model exponential)
- Lisa Orr (Scout Agent)
- Steve Yegge (IDE died)

### Aula 2
- Jared Zoneraich (while loop)
- Barry Zhang (skills, progressive disclosure)
- Katelyn Lesse (extended thinking)

### Aula 3
- Dex Horthy (12 factors, RPI)
- Cornelia Davis (workflows)
- Robert Brennan (90% automation)
- Michele Catasta (3 pillars)

### Aula 4
- Al Harris (spec-driven)
- SallyAnn DeLucia (prompt learning loop)
- Barry Zhang (skill anatomy)

### Aula 5
- Lisa Orr (Scout Agent)
- Mark Myshatyn (explainability)
- Asaf Bord (crawl-walk-run)

### Aulas 6-9 (Módulo 2)
- Barry Zhang (regras explícitas)
- Dex Horthy (context is king)
- Jeremiah Lowin (outcomes not operations)

---

*Documento de referência para o Curso de Sistemas Agênticos*
*Conhecimento de ponta, não vulgarização*
