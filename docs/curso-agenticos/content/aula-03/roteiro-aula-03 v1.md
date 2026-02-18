# Aula 3: Arquitetura de Agentes

> **Duração estimada:** 3 horas
> **Pré-requisitos:** Aulas 0, 1, 2A e 2B
> **Objetivo:** Dominar os padrões arquiteturais para construir sistemas agênticos robustos

---

## Sumário

1. [Bloco 1: Workflow vs Agent](#bloco-1-workflow-vs-agent-30-min)
2. [Bloco 2: Padrões de Orquestração](#bloco-2-padrões-de-orquestração-35-min)
3. [Bloco 3: Pipelines e Encadeamento](#bloco-3-pipelines-e-encadeamento-30-min)
4. [Bloco 4: Paralelização e Fan-Out](#bloco-4-paralelização-e-fan-out-35-min)
5. [Bloco 5: Gerenciamento de Contexto](#bloco-5-gerenciamento-de-contexto-25-min)
6. [Bloco 6: Gates e Guardrails](#bloco-6-gates-e-guardrails-35-min)
7. [Bloco 7: Síntese e Projeto](#bloco-7-síntese-e-projeto-10-min)

---

## Bloco 1: Workflow vs Agent (30 min)

### 1.1 A Distinção Fundamental

> **Citação-chave (Anthropic Best Practices):**
> "Para a maioria das aplicações, o sistema agêntico de produção será uma combinação de workflows e agentes."

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
│   ► Sem decisões autônomas sobre próximo passo                          │
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
│   ► Autonomia para resolver problemas inesperados                       │
└─────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Quando Usar Cada Um

| Critério | Workflow | Agent |
|----------|----------|-------|
| **Tarefa** | Repetitiva, previsível | Exploratória, ambígua |
| **Determinismo** | Crítico (auditoria) | Aceitável variabilidade |
| **Custo** | Otimizado (tokens previsíveis) | Variável (exploração) |
| **Observabilidade** | Alta (cada etapa rastreável) | Média (decisões internas) |
| **Recuperação de erro** | Automática via workflow | Trial-and-error |
| **Uso típico** | Produção, escala | Exploração, uso pessoal |

### 1.3 Analogia Jurídica

```
WORKFLOW = Linha de produção de sentenças de BPC
├─ Etapa 1: Ler relatório (sempre igual)
├─ Etapa 2: Verificar requisitos (checklist fixo)
├─ Etapa 3: Aplicar precedente (Tema 1066)
├─ Etapa 4: Gerar dispositivo (template)
└─ Resultado: Sentença padronizada

AGENT = Juiz analisando caso complexo
├─ Decide: "Preciso de mais provas?"
├─ Decide: "Qual linha jurisprudencial seguir?"
├─ Decide: "Devo chamar perito?"
├─ Adapta: Muda estratégia conforme evidências
└─ Resultado: Sentença sob medida
```

> **Insight para juristas:** A maioria dos processos repetitivos (BPC, auxílio-doença padrão) é melhor resolvida com **workflows**. Casos complexos (hard cases) exigem **agentes**.

### 1.4 O Híbrido na Prática

> **Citação (Dex Horthy, AI Engineer):**
> "Most production agents weren't that agentic at all. They were mostly just software, but there were these core things that a lot of people were doing."

**Padrão emergente:** Workflows com "bolsões agênticos"

```
┌──────────────────────────────────────────────────────────────┐
│  WORKFLOW DETERMINÍSTICO                                     │
│                                                              │
│  ┌─────────┐     ┌─────────────────┐     ┌─────────┐        │
│  │ Etapa 1 │────►│ BOLSÃO AGÊNTICO │────►│ Etapa 3 │        │
│  │ (fixo)  │     │ (3-10 passos)   │     │ (fixo)  │        │
│  └─────────┘     │                 │     └─────────┘        │
│                  │ Agent decide:   │                        │
│                  │ - Qual tool?    │                        │
│                  │ - Quantas vezes?│                        │
│                  │ - Quando parar? │                        │
│                  └─────────────────┘                        │
└──────────────────────────────────────────────────────────────┘
```

---

## Bloco 2: Padrões de Orquestração (35 min)

### 2.1 O Que é um Orquestrador

> **Definição (Michele Catasta, Replit):**
> "The core loop as the orchestrator... The subtasks are not determined by the user but by the core loop, and the parallelism is decided on the fly."

**Orquestrador** = Coordenador central que:
- Decide **qual agente/tool** executar
- Determina **ordem** de execução
- Gerencia **estado** entre etapas
- Decide sobre **paralelização**

### 2.2 Padrões de Routing

#### Padrão A: Rule-Based Routing

```
┌──────────────────────────────────────────────────────────────┐
│  ROUTER BASEADO EM REGRAS                                    │
│                                                              │
│  Input do Usuário                                            │
│       │                                                      │
│       ▼                                                      │
│  ┌─────────────────────────────────────────┐                 │
│  │  DECISION LOGIC (regras predefinidas)   │                 │
│  │                                         │                 │
│  │  if "clima" in query → Weather Agent    │                 │
│  │  if "jurídico" in query → Legal Agent   │                 │
│  │  else → General Agent                   │                 │
│  └─────────────────────────────────────────┘                 │
│       │                                                      │
│       ├────────────────┬────────────────┐                    │
│       ▼                ▼                ▼                    │
│  ┌─────────┐     ┌─────────┐     ┌─────────┐                 │
│  │ Weather │     │  Legal  │     │ General │                 │
│  │  Agent  │     │  Agent  │     │  Agent  │                 │
│  └─────────┘     └─────────┘     └─────────┘                 │
└──────────────────────────────────────────────────────────────┘
```

**Vantagem:** Previsível, testável, barato
**Desvantagem:** Rígido, não adapta a casos novos

#### Padrão B: LLM-Decided Routing

```
┌──────────────────────────────────────────────────────────────┐
│  ROUTER DECIDIDO POR LLM                                     │
│                                                              │
│  Input do Usuário                                            │
│       │                                                      │
│       ▼                                                      │
│  ┌─────────────────────────────────────────┐                 │
│  │  LLM CLASSIFIER                         │                 │
│  │                                         │                 │
│  │  "Analise esta query e decida:          │                 │
│  │   - Se é sobre clima → 'weather'        │                 │
│  │   - Se é sobre direito → 'legal'        │                 │
│  │   - Se é ambíguo → 'general'"           │                 │
│  └─────────────────────────────────────────┘                 │
│       │                                                      │
│       ▼                                                      │
│  Agente selecionado dinamicamente                            │
└──────────────────────────────────────────────────────────────┘
```

**Vantagem:** Flexível, adapta a novos casos
**Desvantagem:** Custo extra (uma chamada LLM), menos previsível

#### Padrão C: Supervised Routing (Human-in-the-Loop)

```
┌──────────────────────────────────────────────────────────────┐
│  ROUTER COM SUPERVISÃO HUMANA                                │
│                                                              │
│  Input do Usuário                                            │
│       │                                                      │
│       ▼                                                      │
│  ┌─────────────────────────────────────────┐                 │
│  │  LLM propõe rota                        │                 │
│  │  "Sugiro usar o Legal Agent porque..."  │                 │
│  └─────────────────────────────────────────┘                 │
│       │                                                      │
│       ▼                                                      │
│  ┌─────────────────────────────────────────┐                 │
│  │  CHECKPOINT HUMANO                      │                 │
│  │  ✓ Aprovar    ✗ Rejeitar    ✎ Editar   │                 │
│  └─────────────────────────────────────────┘                 │
│       │                                                      │
│       ▼                                                      │
│  Agente aprovado executa                                     │
└──────────────────────────────────────────────────────────────┘
```

**Uso:** Decisões de alto risco, domínios críticos (jurídico, médico)

### 2.3 Padrões de Supervisão

#### Centralizado vs Distribuído

```
SUPERVISOR CENTRALIZADO                COORDENAÇÃO DISTRIBUÍDA
┌─────────────────────┐               ┌─────────────────────┐
│     SUPERVISOR      │               │   Agente A          │
│  ┌───┐ ┌───┐ ┌───┐  │               │   (autônomo)        │
│  │ A │ │ B │ │ C │  │               └─────────┬───────────┘
│  └───┘ └───┘ └───┘  │                         │
│                     │               ┌─────────▼───────────┐
│  • Decide tudo      │               │   Estado Compartilhado
│  • Single point     │               │   (arquivo/DB)      │
│  • Mais controle    │               └─────────┬───────────┘
└─────────────────────┘                         │
                                      ┌─────────▼───────────┐
                                      │   Agente B          │
                                      │   (autônomo)        │
                                      └─────────────────────┘
```

### 2.4 Exemplo: Orquestrador CLERK

> **Aplicação jurídica concreta:**

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    CLERK: ORQUESTRADOR JURÍDICO                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  MASTER ORCHESTRATOR (Claude Code)                                      │
│  ├─ Decisão: qual fase executar                                         │
│  ├─ Gestão de estado processual                                         │
│  └─ Escalação a juiz quando necessário                                  │
│                                                                         │
│  FASES (Workflows com bolsões agênticos):                               │
│  │                                                                      │
│  ├─ FASE 2: Relatório ──────────────────────────────────────────────┐   │
│  │  └─ Workflow: PDF → TXT → Refinamento Iterativo → Relatório.md  │   │
│  │                                                                  │   │
│  ├─ FASE 3: Pesquisa ───────────────────────────────────────────────┤   │
│  │  └─ BOLSÃO AGÊNTICO:                                            │   │
│  │     ├─ Agent decide: BNP primeiro? CJF? JULIA?                  │   │
│  │     ├─ Agent decide: quantas buscas?                            │   │
│  │     └─ Agent decide: quando parar?                              │   │
│  │                                                                  │   │
│  ├─ FASE 4: Elaboração ─────────────────────────────────────────────┤   │
│  │  └─ Workflow: Relatório + Análise → Fundamentação → Dispositivo │   │
│  │                                                                  │   │
│  └─ FASE 6: Revisão ────────────────────────────────────────────────┤   │
│     └─ PARALELO (Fan-out):                                          │   │
│        ├─ Subagente: Advogado do Diabo                             │   │
│        ├─ Subagente: Consistência Interna                          │   │
│        ├─ Subagente: Consistência Externa                          │   │
│        └─ Consolidador (Fan-in)                                     │   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Bloco 3: Pipelines e Encadeamento (30 min)

### 3.1 O Que é um Pipeline

> **Definição:** Sequência linear de transformações onde a saída de uma etapa é entrada da próxima.

```
┌──────────┐     ┌───────────┐     ┌──────────┐     ┌──────────┐
│  INPUT   │────►│  ETAPA 1  │────►│  ETAPA 2 │────►│  OUTPUT  │
│          │     │           │     │          │     │          │
└──────────┘     └───────────┘     └──────────┘     └──────────┘
                      │                 │
                 prompt fixo       prompt fixo
```

### 3.2 Padrões de Pipeline Identificados

#### Padrão A: Linear Determinístico

```
PIPELINE JURÍDICO (CLERK):
┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐
│Processo │───►│Relatório│───►│ Análise │───►│ Minuta  │
│  (PDF)  │    │  (.md)  │    │  (.md)  │    │  (.md)  │
└─────────┘    └─────────┘    └─────────┘    └─────────┘
     │              │              │              │
  [entrada]   [transformação] [transformação] [saída]
```

**Características:**
- Cada etapa tem prompt fixo
- Output de N alimenta input de N+1
- Determinístico (mesma entrada = mesmo resultado)
- Ideal para tarefas repetitivas

#### Padrão B: Iterativo com Feedback

> **Citação (SallyAnn DeLucia, Arize):**
> "The human instructions of why it failed... That text is really really valuable."

```
┌──────────────────────────────────────────────────────────────┐
│  PIPELINE COM LOOP DE FEEDBACK                               │
│                                                              │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐                   │
│  │ Geração │───►│  Eval   │───►│ Feedback│                   │
│  └─────────┘    └────┬────┘    └────┬────┘                   │
│       ▲              │              │                        │
│       │              ▼              │                        │
│       │    ┌─────────────────┐      │                        │
│       │    │ Score < threshold│      │                        │
│       │    └────────┬────────┘      │                        │
│       │             │               │                        │
│       └─────────────┴───────────────┘                        │
│              (retry com feedback)                            │
└──────────────────────────────────────────────────────────────┘
```

**Uso:** Quando precisa melhorar qualidade iterativamente

#### Padrão C: Spec-Driven

> **Citação (Al Harris, Amazon Kiro):**
> "If you get the spec right, the code almost writes itself."

```
┌──────────────────────────────────────────────────────────────┐
│  PIPELINE SPEC-DRIVEN                                        │
│                                                              │
│  ┌────────────┐    ┌────────────┐    ┌────────────┐          │
│  │Requirements│───►│   Design   │───►│   Tasks    │          │
│  │ (user      │    │ (arquitetura│    │ (checklist │          │
│  │  stories)  │    │  + dados)   │    │  atomizado)│          │
│  └────────────┘    └────────────┘    └─────┬──────┘          │
│                                            │                 │
│                                            ▼                 │
│                                     ┌────────────┐           │
│                                     │    Code    │           │
│                                     │ (geração)  │           │
│                                     └────────────┘           │
│                                                              │
│  SPEC ANCHORING: Todo código vinculado ao spec que o gerou   │
└──────────────────────────────────────────────────────────────┘
```

### 3.3 RPI: Research-Plan-Implement

> **Padrão identificado em agentes de alta performance:**

```
┌──────────────────────────────────────────────────────────────┐
│                    PADRÃO RPI                                │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ RESEARCH (Pesquisa)                                     │ │
│  │ ├─ Entender o problema                                  │ │
│  │ ├─ Explorar codebase / domínio                          │ │
│  │ └─ Gerar documento de descobertas                       │ │
│  └─────────────────────────────────────────────────────────┘ │
│                          │                                   │
│                    [CHECKPOINT HUMANO]                       │
│                "As descobertas estão corretas?"              │
│                          │                                   │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ PLAN (Planejamento)                                     │ │
│  │ ├─ Dividir em tarefas discretas                         │ │
│  │ ├─ Especificar arquivos, linhas, testes                 │ │
│  │ └─ Incluir estratégia de rollback                       │ │
│  └─────────────────────────────────────────────────────────┘ │
│                          │                                   │
│                    [CHECKPOINT HUMANO]                       │
│                 "O plano faz sentido?"                       │
│                          │                                   │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ IMPLEMENT (Implementação)                               │ │
│  │ ├─ Seguir plano passo a passo                           │ │
│  │ ├─ Rodar testes após cada mudança                       │ │
│  │ └─ Validar contra requisitos                            │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Analogia jurídica:** Ler autos → Estruturar tese → Redigir sentença

### 3.4 Pipeline vs Agent: Matriz de Decisão

| Cenário | Melhor Abordagem |
|---------|------------------|
| Tarefas repetitivas com passos conhecidos | **Pipeline** |
| Resultado precisa ser auditável | **Pipeline** |
| Tarefas exploratórias | **Agent** |
| Precisa adaptar ao inesperado | **Agent** |
| Produção com escala | **Pipeline** |
| Uso pessoal/interativo | **Agent** |
| Tokens são críticos | **Pipeline** |
| Qualidade > Custo | **Agent** |

---

## Bloco 4: Paralelização e Fan-Out (35 min)

### 4.1 Por Que Paralelizar

> **Citação (Robert Brennan, AllHands):**
> "If one agent gets stuck, all the other ones are still going to work. Maybe we get to 90% or 95% solved."

**Benefícios:**
- Velocidade (tarefas simultâneas)
- Resiliência (falha parcial não para tudo)
- Eficiência (melhor uso de recursos)

### 4.2 Padrão Fan-Out / Fan-In

```
┌──────────────────────────────────────────────────────────────┐
│                    FAN-OUT / FAN-IN                          │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│                    ┌──────────┐                              │
│                    │  TAREFA  │                              │
│                    │ COMPLEXA │                              │
│                    └────┬─────┘                              │
│                         │                                    │
│            ┌────────────┼────────────┐                       │
│            │            │            │                       │
│            ▼            ▼            ▼                       │
│       ┌─────────┐  ┌─────────┐  ┌─────────┐                  │
│       │Subagent │  │Subagent │  │Subagent │   FAN-OUT        │
│       │    1    │  │    2    │  │    3    │   (divergência)  │
│       └────┬────┘  └────┬────┘  └────┬────┘                  │
│            │            │            │                       │
│            ▼            ▼            ▼                       │
│       ┌─────────┐  ┌─────────┐  ┌─────────┐                  │
│       │Result 1 │  │Result 2 │  │Result 3 │                  │
│       └────┬────┘  └────┬────┘  └────┬────┘                  │
│            │            │            │                       │
│            └────────────┼────────────┘                       │
│                         │                                    │
│                         ▼                                    │
│                  ┌─────────────┐                             │
│                  │ CONSOLIDADOR│   FAN-IN                    │
│                  │   (merge)   │   (convergência)            │
│                  └─────────────┘                             │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### 4.3 Exemplo Prático: Migração de Código

> **Caso real (Robert Brennan, AllHands):**

```
TAREFA: Migrar 100+ componentes de Redux para Zustand

ABORDAGEM SEQUENCIAL (ruim):
Agent → Componente 1 (30 min) → Componente 2 (30 min) → ...
Total: 100+ horas

ABORDAGEM FAN-OUT (boa):
┌─────────────────────────────────────────────────────────────┐
│  1. DECOMPOSIÇÃO                                            │
│     Identificar componentes independentes                   │
├─────────────────────────────────────────────────────────────┤
│  2. FAN-OUT                                                 │
│     Agent 1 → Componente A ──→ PR 1                         │
│     Agent 2 → Componente B ──→ PR 2    (em paralelo)        │
│     Agent 3 → Componente C ──→ PR 3                         │
├─────────────────────────────────────────────────────────────┤
│  3. REVIEW (humano em loop)                                 │
│     Cada PR revisado independentemente                      │
│     Merge incremental conforme aprovação                    │
├─────────────────────────────────────────────────────────────┤
│  4. CLEANUP (após todos)                                    │
│     Remover scaffolding Redux                               │
└─────────────────────────────────────────────────────────────┘

Total: 30 minutos (+ review humano)
```

### 4.4 Sub-Agents para Isolamento de Contexto

> **Citação (Jared Zoneraich, Claude Code):**
> "Instead of filling up your context, you can delegate a researcher to go deep into a specific problem to come back with the answer."

```
┌──────────────────────────────────────────────────────────────┐
│  MAIN AGENT                                                  │
│  Context: 50K tokens usados                                  │
│                                                              │
│  Problema: Preciso entender arquivo de 10K tokens            │
│                                                              │
│  OPÇÃO A (ruim): Colocar arquivo no contexto                 │
│  → Context: 60K tokens (poluído)                             │
│  → Qualidade degrada                                         │
│                                                              │
│  OPÇÃO B (boa): Delegar para sub-agent                       │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │ SUB-AGENT (contexto isolado)                            │ │
│  │ ├─ Recebe: arquivo + pergunta específica                │ │
│  │ ├─ Processa: com seus próprios 200K tokens              │ │
│  │ └─ Retorna: resumo de 100 tokens                        │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                              │
│  Main agent recebe resumo                                    │
│  → Context: 50.1K tokens (limpo)                             │
│  → Qualidade mantida                                         │
└──────────────────────────────────────────────────────────────┘
```

### 4.5 Task Group Pattern (Python)

```python
# Execução paralela coordenada com asyncio

from asyncio import TaskGroup

async def deep_research(query):
    # STEP 1: Planejar
    plan = await plan_agent.run(query)
    # → ["pesquisa_1", "pesquisa_2", "pesquisa_3"]

    # STEP 2: FAN-OUT - Pesquisar em paralelo
    async with TaskGroup() as tg:
        search1 = tg.create_task(search_agent.run("tema 1"))
        search2 = tg.create_task(search_agent.run("tema 2"))
        search3 = tg.create_task(search_agent.run("tema 3"))

    # STEP 3: FAN-IN - Coletar resultados
    all_results = [search1.result(), search2.result(), search3.result()]

    # STEP 4: Analisar
    analysis = await analysis_agent.run(all_results)
    return analysis
```

### 4.6 Quando NÃO Paralelizar

| Problema | Quando Evitar |
|----------|---------------|
| **Dependências** | Agentes precisam de output um do outro |
| **Context total** | Soma dos sub-agents esgota limite |
| **Latência crítica** | Overhead de spawn > ganho de paralelismo |
| **Tarefas simples** | Uma tarefa de 1 minuto não vale paralelizar |
| **Estado compartilhado** | Mutex/lock mais caro que sequencial |

### 4.7 A Regra dos 90%

> **Citação (Robert Brennan, AllHands):**
> "The goal is not to automate this process 100%. It's something like 90% automation. That's still an order of magnitude productivity lift."

**Implicação prática:**
- Não tente 100% de automação
- Design para 90% automático + 10% humano
- Falhas parciais são aceitáveis
- Humano resolve edge cases

---

## Bloco 5: Gerenciamento de Contexto (25 min)

### 5.1 O "Orçamento" do Modelo

> **Citação (Dex Horthy, HumanLayer):**
> "There's a concept called the dumb zone. Around the 40% line is where you'll start to see some diminishing returns."

```
┌──────────────────────────────────────────────────────────────┐
│                    CONTEXT WINDOW                            │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  0%────────────────40%────────────────80%────────────100%    │
│  │                  │                  │               │     │
│  │   SMART ZONE     │  DIMINISHING     │   DUMB ZONE   │     │
│  │                  │   RETURNS        │               │     │
│  │  ✓ Modelo opera  │  ⚠ Performance   │  ✗ Resultados │     │
│  │    bem           │    degrada       │    ruins      │     │
│  │                  │                  │               │     │
└──────────────────────────────────────────────────────────────┘
```

**Regra prática:**
- **0-40%:** Zona segura - modelo opera bem
- **40-80%:** Zona de alerta - considere compactar
- **80%+:** Zona de risco - compacte imediatamente

### 5.2 Hierarquia de Memória

```
┌──────────────────────────────────────────────────────────────┐
│  NÍVEL 1: Enterprise Policy (mais geral)                     │
│  └─ /etc/claude-code/CLAUDE.md                               │
├──────────────────────────────────────────────────────────────┤
│  NÍVEL 2: User Memory                                        │
│  └─ ~/.claude/CLAUDE.md                                      │
├──────────────────────────────────────────────────────────────┤
│  NÍVEL 3: Project Memory                                     │
│  └─ ./CLAUDE.md                                              │
├──────────────────────────────────────────────────────────────┤
│  NÍVEL 4: Project Rules                                      │
│  └─ ./.claude/rules/*.md                                     │
├──────────────────────────────────────────────────────────────┤
│  NÍVEL 5: Local Overrides (mais específico)                  │
│  └─ ./CLAUDE.local.md                                        │
└──────────────────────────────────────────────────────────────┘

Precedência: Enterprise < User < Project < Local
(Arquivo posterior vence em caso de conflito)
```

### 5.3 Estratégias de Compactação

#### Auto-Compaction (95%)

Claude Code ativa automaticamente quando contexto atinge 95%:
1. Análise automática do histórico
2. Criação de sumário conciso
3. Substituição de mensagens antigas pelo sumário
4. Continuação transparente da sessão

#### /compact Manual (70%)

```bash
# Básico
/compact

# Com instruções customizadas
/compact Focus on code changes and test results

# Preservando padrões
/compact preserve the authentication patterns we established
```

**Recomendação:** /compact a ~70% para evitar compactação disruptiva automática

### 5.4 Subagentes como Isolamento

```
┌──────────────────────────────────────────────────────────────┐
│  SEM SUBAGENTES                                              │
│                                                              │
│  Agente único fazendo TUDO:                                  │
│  ├─ Pesquisa jurisprudência (30K tokens)                     │
│  ├─ Elabora minuta (40K tokens)                              │
│  ├─ Revisa fundamentação (20K tokens)                        │
│  └─ Context window: LOTADO (90K+)                            │
│                                                              │
│  Resultado: Qualidade PIORA, custo SOBE                      │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  COM SUBAGENTES                                              │
│                                                              │
│  COORDENADOR (contexto limpo)                                │
│  │                                                           │
│  ├─ Subagente 1: Pesquisa (contexto isolado 200K)            │
│  │  └─ Retorna: JSON comprimido (5K tokens)                  │
│  │                                                           │
│  ├─ Subagente 2: Minuta (contexto isolado 200K)              │
│  │  └─ Retorna: minuta.md (10K tokens)                       │
│  │                                                           │
│  └─ Subagente 3: Revisão (contexto isolado 200K)             │
│     └─ Retorna: feedback.md (3K tokens)                      │
│                                                              │
│  Coordenador: 20K tokens (limpo)                             │
│  Resultado: Qualidade MANTIDA, custo OTIMIZADO               │
└──────────────────────────────────────────────────────────────┘
```

### 5.5 Economia Estimada

| Abordagem | Tokens/Processo | Economia |
|-----------|-----------------|----------|
| Sem engenharia | 200K tokens | Baseline |
| Com otimizações | ~80K tokens | **60% menos** |
| Com subagentes | ~50K tokens | **75% menos** |

**Impacto:** De $2/processo para $0.40/processo

---

## Bloco 6: Gates e Guardrails (35 min)

### 6.1 Por Que Gates São Necessários

> **Citação (Barry Zhang, Anthropic):**
> "Cost of error and error discovery - If your errors are going to be high stake and very hard to discover, it's going to be very difficult for you to trust the agent."

**Gates** = Pontos de verificação onde:
- Sistema pausa para validação
- Humano pode aprovar/rejeitar
- Erros são detectados antes de propagarem

### 6.2 Tipos de Gates

#### Gate 1: Input Validation

```
┌─────────────────────────────────────────────────────────────┐
│  INPUT VALIDATION GATE                                      │
│                                                             │
│  Requisição do Usuário                                      │
│       │                                                     │
│       ▼                                                     │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Validar:                                              │  │
│  │ ├─ Formato correto?                                   │  │
│  │ ├─ Dentro do escopo permitido?                        │  │
│  │ └─ Ambiguidades?                                      │  │
│  │                                                       │  │
│  │ Se AMBÍGUO: Pedir clarificação ao humano              │  │
│  │ Se INVÁLIDO: Rejeitar com explicação                  │  │
│  │ Se VÁLIDO: Prosseguir                                 │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

#### Gate 2: Research Validation

```
┌─────────────────────────────────────────────────────────────┐
│  RESEARCH VALIDATION GATE                                   │
│                                                             │
│  Após fase de pesquisa:                                     │
│       │                                                     │
│       ▼                                                     │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ CHECKPOINT HUMANO:                                    │  │
│  │ ├─ "As descobertas estão corretas?"                   │  │
│  │ ├─ "Faltou algum arquivo relevante?"                  │  │
│  │ └─ "O entendimento está certo?"                       │  │
│  │                                                       │  │
│  │ Humano: ✓ Aprovar  ✗ Rejeitar  ✎ Pedir revisão       │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

#### Gate 3: Plan Approval

```
┌─────────────────────────────────────────────────────────────┐
│  PLAN APPROVAL GATE                                         │
│                                                             │
│  Após fase de planejamento:                                 │
│       │                                                     │
│       ▼                                                     │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ CHECKPOINT HUMANO:                                    │  │
│  │ ├─ "O plano faz sentido?"                             │  │
│  │ ├─ "A ordem está correta?"                            │  │
│  │ └─ "Há riscos não considerados?"                      │  │
│  │                                                       │  │
│  │ Humano: ✓ Aprovar  ✗ Rejeitar  ✎ Modificar plano     │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

#### Gate 4: Automated Validation (Hooks)

> **Citação (Thariq Shihipar, Anthropic):**
> "Hooks are a way of doing deterministic verification."

```
┌─────────────────────────────────────────────────────────────┐
│  AUTOMATED VALIDATION GATE (Hooks)                          │
│                                                             │
│  Após execução:                                             │
│       │                                                     │
│       ▼                                                     │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ VERIFICAÇÕES AUTOMÁTICAS:                             │  │
│  │ ├─ Rodar testes unitários                             │  │
│  │ ├─ Verificar linting                                  │  │
│  │ └─ Validar contra requisitos                          │  │
│  │                                                       │  │
│  │ PASS: Continuar automaticamente                       │  │
│  │ FAIL: Loop de correção ou escalação                   │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

#### Gate 5: Context Compaction

```
┌─────────────────────────────────────────────────────────────┐
│  CONTEXT COMPACTION GATE                                    │
│                                                             │
│  Quando contexto atinge 40%:                                │
│       │                                                     │
│       ▼                                                     │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Agent gera resumo de progresso                        │  │
│  │                                                       │  │
│  │ CHECKPOINT HUMANO:                                    │  │
│  │ ├─ "O resumo está preciso?"                           │  │
│  │ ├─ "Perdemos algo importante?"                        │  │
│  │ └─ "Devemos dividir em subtarefas?"                   │  │
│  │                                                       │  │
│  │ Humano: ✓ Aprovar  ✎ Editar resumo                   │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### 6.3 Matriz de Inserção de Checkpoints

| Risco | Valor | Tipo de Checkpoint |
|-------|-------|-------------------|
| Crítico | Alto ($$$) | Humano ANTES da ação |
| Alto | Alto | Humano ANTES da ação |
| Alto | Médio | Humano DEPOIS, com rollback |
| Médio | Alto | Humano DEPOIS |
| Médio | Médio | Amostragem (10%) |
| Baixo | Qualquer | Evals automáticos apenas |

### 6.4 Validação com Evals

> **Citação (Aman Khan, Arize):**
> "LLMs are still really bad at numbers. Solution: Use text labels (GOOD, ACCEPTABLE, BAD) that map to scores."

```
┌─────────────────────────────────────────────────────────────┐
│  EVAL-BASED VALIDATION                                      │
│                                                             │
│  Output do Agente                                           │
│       │                                                     │
│       ▼                                                     │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Prompt de Avaliação:                                  │  │
│  │ "Este output é GOOD, ACCEPTABLE, ou NEEDS_REVIEW?"    │  │
│  │                                                       │  │
│  │ ✓ GOOD (90%+): Pass gate                              │  │
│  │ ⚠ ACCEPTABLE (70-89%): Warn, mas pass                │  │
│  │ ✗ NEEDS_REVIEW (<70%): FAIL gate → humano            │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                             │
│  IMPORTANTE: Use labels textuais, NÃO scores numéricos      │
└─────────────────────────────────────────────────────────────┘
```

### 6.5 Error Handling

> **Citação (Dex Horthy, HumanLayer):**
> "If the model screws up, put the error on the context window and have it try again. BUT: Don't put the whole stack trace. Summarize."

**Padrão de tratamento de erros:**

```
┌─────────────────────────────────────────────────────────────┐
│  ERROR HANDLING PATTERN                                     │
│                                                             │
│  Erro Ocorre                                                │
│       │                                                     │
│       ▼                                                     │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ 1. Capturar erro                                      │  │
│  │ 2. Filtrar (remover stack traces)                     │  │
│  │ 3. Resumir em 1-2 frases                              │  │
│  │ 4. Adicionar ao contexto                              │  │
│  │ 5. Agent tenta novamente                              │  │
│  └───────────────────────────────────────────────────────┘  │
│       │                                                     │
│       ▼                                                     │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Se erro repete 3x:                                    │  │
│  │ ├─ Limpar erros anteriores                            │  │
│  │ ├─ Marcar como "limitação conhecida"                  │  │
│  │ └─ Escalar para humano                                │  │
│  └───────────────────────────────────────────────────────┘  │
│       │                                                     │
│       ▼                                                     │
│  ┌───────────────────────────────────────────────────────┐  │
│  │ Se erro resolvido:                                    │  │
│  │ └─ Limpar histórico de erros (não acumular)           │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### 6.6 Trajectory Monitoring

> **Citação (Dex Horthy, Context Engineering):**
> "If the agent did something wrong, then you corrected it and it did something wrong again, the LM sees: 'I did something wrong, human yelled at me, I did something wrong.' So the next most likely token is: 'I better do something wrong so the human can yell at me again.'"

**Anti-padrão: Trajectory poisoning**

```
BAD TRAJECTORY:
Erro → Correção → Erro → Correção → Erro
(Modelo aprende a errar)

GOOD TRAJECTORY:
Sucesso → Sucesso → Sucesso
(Modelo aprende a acertar)

SOLUÇÃO:
Se detectar padrão [Erro, Correção, Erro]:
├─ GATE FAIL: Trajectory ruim
├─ Ação: Reiniciar com contexto limpo
└─ Fornecer: Exemplos de comportamento CORRETO
```

---

## Bloco 7: Síntese e Projeto (10 min)

### 7.1 Arquitetura Completa: Gates em Cadeia

```
┌──────────────────────────────────────────────────────────────────────────┐
│                      AGENT COM GATES ESTRUTURADO                          │
│                                                                           │
│  ENTRADA                                                                  │
│       │                                                                   │
│  ┌────▼─────────────────────────────────────────────────────────────┐    │
│  │ GATE 1: INPUT VALIDATION                                         │    │
│  └────┬─────────────────────────────────────────────────────────────┘    │
│       │                                                                   │
│  ┌────▼─────────────────────────────────────────────────────────────┐    │
│  │ PHASE 1: RESEARCH (Agent entende problema)                       │    │
│  └────┬─────────────────────────────────────────────────────────────┘    │
│       │                                                                   │
│  ┌────▼─────────────────────────────────────────────────────────────┐    │
│  │ GATE 2: RESEARCH VALIDATION (Humano revisa descobertas)          │    │
│  └────┬─────────────────────────────────────────────────────────────┘    │
│       │                                                                   │
│  ┌────▼─────────────────────────────────────────────────────────────┐    │
│  │ PHASE 2: PLAN (Agent delineia passos)                            │    │
│  └────┬─────────────────────────────────────────────────────────────┘    │
│       │                                                                   │
│  ┌────▼─────────────────────────────────────────────────────────────┐    │
│  │ GATE 3: PLAN APPROVAL (Humano aprova estratégia)                 │    │
│  └────┬─────────────────────────────────────────────────────────────┘    │
│       │                                                                   │
│  ┌────▼─────────────────────────────────────────────────────────────┐    │
│  │ PHASE 3: IMPLEMENT (Agent executa plano)                         │    │
│  └────┬─────────────────────────────────────────────────────────────┘    │
│       │                                                                   │
│  ┌────▼─────────────────────────────────────────────────────────────┐    │
│  │ GATE 4: AUTOMATED VALIDATION (Hooks - testes, linting)           │    │
│  └────┬─────────────────────────────────────────────────────────────┘    │
│       │                                                                   │
│  ┌────▼─────────────────────────────────────────────────────────────┐    │
│  │ GATE 5: CONTEXT CHECK (Se >40%, compactar)                       │    │
│  └────┬─────────────────────────────────────────────────────────────┘    │
│       │                                                                   │
│  ┌────▼─────────────────────────────────────────────────────────────┐    │
│  │ PHASE 4: VERIFICATION (Evals finais)                             │    │
│  └────┬─────────────────────────────────────────────────────────────┘    │
│       │                                                                   │
│  ┌────▼─────────────────────────────────────────────────────────────┐    │
│  │ GATE 6: QA CHECKPOINT (LLM-as-judge)                             │    │
│  └────┬─────────────────────────────────────────────────────────────┘    │
│       │                                                                   │
│  SAÍDA (Resultado aprovado, testado, validado)                           │
│                                                                           │
└──────────────────────────────────────────────────────────────────────────┘
```

### 7.2 Checklist de Arquitetura

Ao projetar um sistema agêntico, pergunte-se:

```markdown
## Checklist de Arquitetura Agêntica

### 1. Workflow vs Agent
[ ] Tarefas são previsíveis? → Workflow
[ ] Precisa de exploração? → Agent
[ ] Híbrido? → Workflow com bolsões agênticos

### 2. Orquestração
[ ] Quem decide a rota? (Regras, LLM, Humano)
[ ] Supervisão centralizada ou distribuída?
[ ] Onde estão os checkpoints humanos?

### 3. Pipeline
[ ] Etapas são sequenciais ou podem paralelizar?
[ ] Padrão RPI aplica-se? (Research → Plan → Implement)
[ ] Feedback iterativo necessário?

### 4. Paralelização
[ ] Tarefas são independentes? → Fan-out
[ ] Como consolidar resultados? → Fan-in
[ ] Meta: 90% automação (não 100%)

### 5. Contexto
[ ] Context window será lotado? → Subagentes
[ ] Quando compactar? → 40% threshold
[ ] Hierarquia de memória definida?

### 6. Gates
[ ] Gates de input validation?
[ ] Gates de research/plan approval?
[ ] Gates automáticos (hooks)?
[ ] Gates de QA (evals)?
[ ] Error handling definido?
```

### 7.3 Preparação para Aula 4

Na próxima aula, vamos **construir** esses padrões:
- Implementar um pipeline simples
- Configurar gates com hooks
- Criar subagentes para paralelização
- Testar com um caso real

---

## Citações-Chave da Aula

| Especialista | Citação | Conceito |
|-------------|---------|----------|
| Dex Horthy | "Most production agents weren't that agentic at all. They were mostly just software." | Híbrido workflow+agent |
| Michele Catasta | "The core loop as the orchestrator... parallelism is decided on the fly." | Orquestração |
| Robert Brennan | "The goal is not 100% automation. 90% is an order of magnitude productivity lift." | Paralelização |
| Dex Horthy | "Around the 40% line is where you'll start to see diminishing returns." | Context management |
| Barry Zhang | "Cost of error and error discovery - high stake errors need more human-in-the-loop." | Gates |
| Aman Khan | "LLMs are bad at numbers. Use text labels (GOOD, ACCEPTABLE, BAD)." | Evals |
| Al Harris | "If you get the spec right, the code almost writes itself." | Spec-driven |

---

## Fontes e Referências

### AI Engineer Summit 2024-2025
- Barry Zhang (Anthropic) - "How We Build Effective Agents"
- Dex Horthy (HumanLayer) - "12 Factor Agents", "No Vibes Allowed"
- Michele Catasta (Replit) - "Agentic Code Generation"
- Robert Brennan (AllHands) - "Large Scale Refactors"
- Al Harris (Amazon Kiro) - "Spec-Driven Development"
- Aman Khan (Arize) - "Evaluation Framework for AI"
- Jared Zoneraich (Anthropic) - "How Claude Code Works"
- Cornelia Davis (Temporal) - "Durable Agents"

### Documentação Oficial
- [Anthropic Best Practices](https://www.anthropic.com/engineering/building-effective-agents)
- [Claude Code Documentation](https://docs.anthropic.com/en/docs/claude-code)

---

*Aula 3 - Arquitetura de Agentes*
*Duração: ~3 horas*
*Curso de Sistemas Agênticos - 2026*
