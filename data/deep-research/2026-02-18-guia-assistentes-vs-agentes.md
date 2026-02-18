# Guia Definitivo: Assistentes vs. Agentes de IA

## A Distinção Fundamental que Todo Profissional Precisa Entender

**Data:** 18 de fevereiro de 2026
**Objetivo:** Estabelecer com clareza cristalina a diferença entre Assistentes (LLMs tradicionais) e Agentes de IA
**Baseado em:** Documentação oficial da Anthropic, IBM, Google e literatura técnica contemporânea

---

# A Pergunta Central

> **"Se todos os assistentes já têm anexos, busca na web, raciocínio expandido... o que os agentes trazem de novo?"**

Esta é a pergunta que confunde a maioria das pessoas. A resposta NÃO está em "mais capacidades" ou "mais poder". A resposta está em uma **mudança arquitetural fundamental**.

---

# PARTE 1: A Definição Canônica da Anthropic

## A Distinção Oficial

A Anthropic, criadora do Claude, estabelece a distinção mais clara e autorizada:

> **Workflows:** "Sistemas onde LLMs e ferramentas são orquestrados através de **caminhos de código predefinidos**."

> **Agents:** "Sistemas onde LLMs **dinamicamente direcionam seus próprios processos** e uso de ferramentas, mantendo controle sobre como realizam tarefas."

Fonte: [Building Effective Agents - Anthropic](https://www.anthropic.com/engineering/building-effective-agents)

### O Que Isso Significa em Linguagem Simples

| Conceito | Tradução Prática |
|----------|------------------|
| **Caminhos predefinidos** | O desenvolvedor decide antecipadamente cada passo |
| **Dinamicamente direcionam** | O modelo decide em tempo real o que fazer |
| **Orquestrados** | Seguem um roteiro fixo |
| **Mantendo controle** | O agente é dono do processo |

---

# PARTE 1.5: A Terminologia Oficial e o Espectro de Agenticidade

## Nota Importante: "Agentic Systems" vs "Agents"

A Anthropic usa uma terminologia precisa que muitos confundem:

> "We categorize all these variations as **agentic systems**, but draw an important architectural distinction between **workflows** and **agents**."

### A Hierarquia Correta

```
┌─────────────────────────────────────────────────────────────────────┐
│                      AGENTIC SYSTEMS                                │
│                   (Sistemas Agênticos)                              │
│                                                                     │
│         Qualquer sistema que usa LLM de forma não-trivial          │
│                                                                     │
│    ┌───────────────────────┐    ┌───────────────────────┐          │
│    │      WORKFLOWS        │    │       AGENTS          │          │
│    │                       │    │   (stricto sensu)     │          │
│    │  • Prompt Chaining    │    │                       │          │
│    │  • Routing            │    │  • Loop autônomo      │          │
│    │  • Parallelization    │    │  • LLM dirige TUDO    │          │
│    │  • Orchestrator-Workers│   │  • Sem estrutura      │          │
│    │  • Evaluator-Optimizer│    │    predefinida        │          │
│    │                       │    │                       │          │
│    │  Estrutura predefinida│    │  Estrutura dinâmica   │          │
│    │  LLM decide DENTRO    │    │  LLM decide TUDO      │          │
│    └───────────────────────┘    └───────────────────────┘          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Glossário de Termos

| Termo | Significado |
|-------|-------------|
| **Agentic Systems** | Categoria ampla: qualquer sistema não-trivial com LLM |
| **Agentic** (adjetivo) | "Que tem características de agente" — aplica-se a workflows também |
| **Agent** (substantivo) | Padrão específico: LLM dirige dinamicamente TODO o processo |
| **Workflow** | Sistema agêntico COM estrutura predefinida |

### Exemplo: Orchestrator-Workers

O padrão Orchestrator-Workers é frequentemente confundido:

- **É** um sistema agêntico ✓
- **NÃO É** um agent (stricto sensu) ✗

Por quê? Porque o **código** define que haverá um orquestrador e workers. O LLM decide *quais* subtarefas, mas a *estrutura* está predefinida.

Um **agent verdadeiro** decidiria sozinho SE precisa de workers, quantos, quando parar, etc.

### Implicação Prática

Quando alguém diz "vou construir um sistema de agentes", pode estar construindo:
1. Um **workflow agentic** (estrutura predefinida, LLM decide dentro dela)
2. Um **agent** propriamente dito (LLM decide tudo, incluindo a estrutura)

Ambos são "sistemas agênticos". Só o segundo é "agent" no sentido estrito da Anthropic.

---

## O Espectro Não é Binário

Além da distinção workflow/agent, existe um **espectro de agenticidade**:

```
MENOS AUTÔNOMO ◄─────────────────────────────────────────► MAIS AUTÔNOMO

┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│ Chatbot  │  │Assistente│  │Assistente│  │ Workflow │  │  Agente  │
│  Básico  │  │   LLM    │  │c/ Tools  │  │ Agentic  │  │Autônomo  │
└──────────┘  └──────────┘  └──────────┘  └──────────┘  └──────────┘
     │              │              │              │              │
     ▼              ▼              ▼              ▼              ▼
  Respostas     Respostas      Usa tools      Passos         Decide
  fixas/        contextuais    quando         predefinidos   tudo em
  template                     VOCÊ pede      mas com LLM    tempo real
```

## Exemplos no Espectro

| Nível | Exemplo | Quem Decide? |
|-------|---------|--------------|
| **Chatbot básico** | FAQ automatizado | Regras hardcoded |
| **Assistente LLM** | Claude.ai chat simples | Humano a cada turno |
| **Assistente c/ Tools** | ChatGPT com plugins | Humano escolhe quando usar |
| **Workflow agentic** | Pipeline predefinido com LLM | Código + LLM em pontos fixos |
| **Agente autônomo** | Claude Code | LLM decide dinamicamente |

## Por Que Isso Importa

Muita confusão vem de tratar como binário o que é um espectro:

- "Claude tem busca na web, logo é agente" → **ERRADO** (é assistente com tools)
- "Meu workflow usa LLM, logo é agente" → **ERRADO** (pode ser workflow agentic)
- "Só é agente se tiver múltiplos agentes" → **ERRADO** (multi-agente é outra dimensão)

**A pergunta correta:** Quem decide os próximos passos — o código/humano ou o modelo?

---

# PARTE 2: Os 5 Critérios de Distinção

## Critério 1: QUEM DECIDE O PRÓXIMO PASSO?

Esta é a diferença mais fundamental.

```
┌─────────────────────────────────────────────────────────────────────┐
│                      ASSISTENTE (LLM TRADICIONAL)                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   VOCÊ pergunta → LLM responde → VOCÊ pergunta → LLM responde      │
│                                                                     │
│   O HUMANO decide cada passo. O LLM é REATIVO.                     │
│   Sem prompt, não há ação.                                          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                           AGENTE                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   VOCÊ dá objetivo → AGENTE decide passos → executa → observa →    │
│                      → decide próximo passo → executa → ...        │
│                                                                     │
│   O AGENTE decide cada passo. O LLM é PROATIVO.                    │
│   Com objetivo, age autonomamente.                                  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### A Analogia do Táxi vs. Piloto Automático

| Assistente | Agente |
|------------|--------|
| Taxista que espera você dizer cada esquina | GPS que calcula a rota e recalcula quando há trânsito |
| "Vire aqui? Sigo em frente? Paro?" | "Destino: aeroporto. Deixe comigo." |

---

## Critério 2: O LOOP DE EXECUÇÃO

### Assistente: Pergunta-Resposta (Single Turn)

O assistente tradicional opera em **turnos únicos**:
1. Você faz uma pergunta
2. Ele responde
3. Fim da interação (até você perguntar novamente)

Não há continuidade inerente. Cada interação é essencialmente independente.

### Agente: Ciclo Thought-Action-Observation (Loop Contínuo)

O agente opera em um **loop contínuo** conhecido como ciclo ReAct:

```
┌─────────────────────────────────────────────────────────────────────┐
│                     CICLO THOUGHT-ACTION-OBSERVATION                │
│                                                                     │
│         ┌───────────┐                                              │
│         │  THOUGHT  │  ← "O que preciso fazer agora?"              │
│         │ (Pensar)  │                                              │
│         └─────┬─────┘                                              │
│               │                                                     │
│               ▼                                                     │
│         ┌───────────┐                                              │
│         │  ACTION   │  ← "Vou usar esta ferramenta"                │
│         │  (Agir)   │                                              │
│         └─────┬─────┘                                              │
│               │                                                     │
│               ▼                                                     │
│         ┌───────────┐                                              │
│         │OBSERVATION│  ← "O resultado foi este"                    │
│         │ (Observar)│                                              │
│         └─────┬─────┘                                              │
│               │                                                     │
│               ▼                                                     │
│         Objetivo alcançado?                                         │
│               │                                                     │
│         NÃO ──┼── SIM                                              │
│          │         │                                                │
│          │         └──► Resposta final ao usuário                  │
│          │                                                          │
│          └──────────► Volta para THOUGHT                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

Fonte: [Hugging Face Agents Course](https://huggingface.co/learn/agents-course/unit1/agent-steps-and-structure)

### Exemplo Prático: "Revise este contrato e sugira melhorias"

**Como um ASSISTENTE responde:**
```
Usuário: Revise este contrato e sugira melhorias
Assistente: [Analisa o contrato e lista sugestões]

            Fim. Aguarda próximo comando do usuário.

Se você quiser pesquisa de jurisprudência, precisa pedir.
Se você quiser uma nova versão do contrato, precisa pedir.
Cada etapa requer um novo prompt seu.
```

**Como um AGENTE responde:**
```
THOUGHT: "O usuário quer revisão completa. Vou dividir em etapas:
          1) Identificar cláusulas problemáticas
          2) Pesquisar jurisprudência relevante
          3) Sugerir redação alternativa"

ACTION:  {tool: "analisar_clausulas", doc: "contrato.pdf"}

OBSERVATION: "3 cláusulas identificadas como potencialmente abusivas"

THOUGHT: "Preciso verificar jurisprudência sobre essas cláusulas"

ACTION:  {tool: "pesquisar_jurisprudencia", tema: "cláusula_1"}

OBSERVATION: "STJ tem entendimento consolidado contra essa redação"

THOUGHT: "Agora vou pesquisar as outras e depois gerar sugestões"

[... continua autonomamente até completar todas as etapas ...]

FINAL: "Revisão completa salva em contrato_revisado.md com
        3 cláusulas alteradas e fundamentação jurisprudencial."
```

**A diferença:** O assistente PARA e espera você. O agente CONTINUA até completar o objetivo.

---

## Critério 3: USO DE FERRAMENTAS

### Assistente: Ferramentas Limitadas ou Inexistentes

Um assistente tradicional:
- Opera principalmente com conhecimento paramétrico (o que aprendeu no treino)
- Pode ter algumas ferramentas, mas **você decide quando usá-las**
- Não seleciona autonomamente qual ferramenta usar

### Agente: Ferramentas como Extensão Natural

Um agente:
- Avalia autonomamente **quais** ferramentas usar
- Decide **quando** usar cada ferramenta
- Combina múltiplas ferramentas **em sequência ou paralelo**
- Adapta a estratégia baseado nos resultados

> "A capacidade de chamar ferramentas por si só NÃO faz de um LLM um agente. Agentes de IA também podem agir autonomamente e decidir quais ferramentas usar e quando."
>
> — [IBM: AI Agents vs. AI Assistants](https://www.ibm.com/think/topics/ai-agents-vs-ai-assistants)

### Tabela Comparativa de Uso de Ferramentas

| Aspecto | Assistente | Agente |
|---------|------------|--------|
| **Quem seleciona a ferramenta?** | O usuário ou código predefinido | O próprio modelo |
| **Quando usar?** | Definido externamente | Decidido em tempo real |
| **Combinação de ferramentas** | Manual | Autônoma |
| **Adaptação** | Não adapta | Muda estratégia se falhar |

---

## Critério 4: PERSISTÊNCIA DE ESTADO (Durante a Tarefa)

**Nota importante:** Memória de longo prazo NÃO é critério definidor. Claude com Projects tem memória mas ainda é assistente. A diferença está na **persistência durante a execução da tarefa**.

### Assistente: Estado Limitado ao Turno

O assistente tradicional:
- Mantém contexto apenas dentro da conversa atual
- Cada resposta é relativamente independente
- Não "lembra" do que fez 3 passos atrás de forma estruturada

### Agente: Estado Persistente Durante Execução

O agente mantém estado **ao longo de múltiplos ciclos de execução**:
- **Tracking de progresso:** Sabe o que já fez e o que falta
- **Acumulação de resultados:** Guarda outputs intermediários
- **Recuperação de erros:** Pode retomar de onde parou

> "Agentes podem rodar por longos períodos mantendo estado entre muitas chamadas de ferramentas."
>
> — [Anthropic: Effective Harnesses for Long-Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)

**Atenção:** Memória de longo prazo (entre sessões) é uma CAPACIDADE ADICIONAL que pode ser implementada em assistentes OU agentes. Não é o que os distingue.

---

## Critério 5: PAPEL DO HUMANO

Esta é a distinção que mais impacta o uso prático.

### Assistente: VOCÊ É O MIDDLEWARE

```
┌─────────────────────────────────────────────────────────────────────┐
│                  FLUXO COM ASSISTENTE                               │
│                                                                     │
│   Humano → Claude → Humano → Claude → Humano → Claude → Output     │
│            ↑         ↑         ↑                                   │
│            │         │         │                                   │
│      "Analise"  "Agora    "Agora                                   │
│       isso"   pesquise"  escreva"                                  │
│                                                                     │
│   VOCÊ conecta cada etapa. VOCÊ é o middleware.                    │
│   Ping-pong constante entre você e o modelo.                       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### Agente: VOCÊ É O REGENTE

```
┌─────────────────────────────────────────────────────────────────────┐
│                    FLUXO COM AGENTE                                 │
│                                                                     │
│   Humano ──────────────────────────────────────────────► Humano    │
│      │                                                      ↑       │
│      ▼                                                      │       │
│   ┌──────────────────────────────────────────────────────┐  │       │
│   │                    AGENTE                             │  │       │
│   │  ┌─────┐   ┌─────┐   ┌─────┐   ┌─────┐   ┌─────┐   │  │       │
│   │  │Passo│──▶│Passo│──▶│Passo│──▶│Passo│──▶│Passo│───┼──┘       │
│   │  │  1  │   │  2  │   │  3  │   │  4  │   │  5  │   │          │
│   │  └─────┘   └─────┘   └─────┘   └─────┘   └─────┘   │          │
│   └──────────────────────────────────────────────────────┘          │
│                                                                     │
│   VOCÊ define o objetivo. VOCÊ revisa o resultado.                 │
│   O meio é automático. VOCÊ é o regente, não o operador.           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

### A Metáfora Definitiva

| Papel | Com Assistente | Com Agente |
|-------|----------------|------------|
| O que você faz | Opera cada etapa | Define objetivo e revisa |
| Analogia | Você digita cada tecla do piano | Você rege a orquestra |
| Onde você aparece | Em TODOS os pontos | No INÍCIO e no FIM |

---

# PARTE 3: A Tabela Comparativa Definitiva

## Assistente vs. Agente: Síntese Completa

| Dimensão | ASSISTENTE (LLM Tradicional) | AGENTE (Sistema Agentic) |
|----------|------------------------------|--------------------------|
| **Definição Anthropic** | Workflow com caminhos predefinidos | Sistema que direciona dinamicamente seus processos |
| **Quem decide os passos?** | O humano ou código predefinido | O próprio modelo em tempo real |
| **Modo de operação** | Reativo (responde quando perguntado) | Proativo (age para alcançar objetivo) |
| **Loop de execução** | Single-turn (pergunta → resposta) | Multi-turn contínuo (think → act → observe) |
| **Uso de ferramentas** | Limitado, seleção externa | Autônomo, seleção interna |
| **Estado durante tarefa** | Limitado ao turno atual | Persistente ao longo dos ciclos |
| **Papel do humano** | Middleware (conecta cada etapa) | Regente (define objetivo, revisa resultado) |
| **Consumo de tokens** | Baseline | ~4x mais (Anthropic) |
| **Previsibilidade** | Alta | Variável |
| **Flexibilidade** | Baixa | Alta |
| **Tarefas ideais** | Bem-definidas, repetíveis | Abertas, exploratórias |
| **Custo** | Menor | Maior (mas pode compensar em escala) |

---

# PARTE 4: Exemplos Práticos para Juristas

## Exemplo 1: Pesquisa de Jurisprudência

### COM ASSISTENTE:

```
VOCÊ:     "Pesquise jurisprudência sobre auxílio-doença"
CLAUDE:   [Resposta baseada em conhecimento paramétrico]
VOCÊ:     "Agora procure especificamente no TRF5"
CLAUDE:   "Não tenho acesso ao TRF5..."
VOCÊ:     [Abre o site, copia resultados, cola no chat]
CLAUDE:   [Analisa o que você colou]
VOCÊ:     "Agora faça um resumo estruturado"
CLAUDE:   [Produz resumo]
VOCÊ:     [Copia, salva em arquivo]

PROBLEMA: Você foi o middleware em CADA etapa.
```

### COM AGENTE:

```
VOCÊ:     "/pesquisar-jurisprudencia auxílio-doença TRF5"

AGENTE:
  THOUGHT: Preciso pesquisar no TRF5. Tenho MCP do JULIA.
  ACTION:  {tool: "julia_trf5", query: "auxílio-doença"}
  OBSERVE: 47 resultados encontrados
  THOUGHT: Vou filtrar os mais relevantes
  ACTION:  {tool: "analisar_resultados", limit: 10}
  OBSERVE: Top 10 selecionados
  THOUGHT: Vou gerar relatório estruturado
  ACTION:  {tool: "gerar_relatorio"}
  OBSERVE: Relatório pronto
  THOUGHT: Vou salvar no filesystem
  ACTION:  {tool: "write_file", path: "relatorio-auxilio.md"}
  FINAL:   "Relatório salvo em relatorio-auxilio.md"

VOCÊ:     [Revisa o arquivo gerado]

BENEFÍCIO: Você apareceu apenas no INÍCIO e no FIM.
```

---

## Exemplo 2: Elaboração de Sentença

### COM ASSISTENTE (o workflow manual):

```
Etapa 1: VOCÊ baixa o PDF do processo
Etapa 2: VOCÊ anexa no Claude
Etapa 3: VOCÊ pede: "Analise este processo"
Etapa 4: Claude analisa
Etapa 5: VOCÊ pede: "Agora pesquise precedentes"
Etapa 6: Claude faz pesquisa genérica
Etapa 7: VOCÊ copia resultados reais de bases jurídicas
Etapa 8: VOCÊ cola no Claude
Etapa 9: VOCÊ pede: "Agora elabore a fundamentação"
Etapa 10: Claude elabora
Etapa 11: VOCÊ copia e cola em documento
Etapa 12: VOCÊ salva

CONTAGEM: 12 etapas, VOCÊ em todas.
```

### COM AGENTE (pipeline automatizado):

```
VOCÊ:     "/pipeline-sentenca 0000123-45.2024.4.05.8100"

AGENTE:
  [Subagente 1: Baixa processo via MCP-PJE]
  [Subagente 2: Converte PDF para texto]
  [Subagente 3: Extrai linha do tempo]
  [Subagente 4: Pesquisa BNP em paralelo]
  [Subagente 5: Pesquisa CJF em paralelo]
  [Subagente 6: Consolida pesquisas]
  [Subagente 7: Gera fundamentação]
  [Orquestrador: Monta minuta final]
  [Salva em filesystem]

VOCÊ:     [Revisa a minuta gerada]

CONTAGEM: 2 etapas para VOCÊ (comando inicial + revisão final)
```

---

# PARTE 5: Os 3 Equívocos Comuns

## Equívoco 1: "Agente é um LLM mais poderoso"

**ERRADO.** Agente não é questão de "poder" do modelo.

Um LLM fraco em arquitetura de agente pode superar um LLM forte usado como assistente em tarefas complexas, porque a arquitetura permite iteração, correção e uso de ferramentas.

**CORRETO:** Agente é uma **arquitetura diferente** que pode usar o mesmo LLM.

---

## Equívoco 2: "Se tem ferramentas, é agente"

**ERRADO.** Ter acesso a ferramentas não faz de um sistema um agente.

ChatGPT com plugins ainda é um assistente — você decide quando usar cada plugin.

**CORRETO:** O que define agente é a **autonomia de seleção e execução** das ferramentas.

---

## Equívoco 3: "Agentes substituem humanos"

**ERRADO.** Agentes mudam o **papel** do humano, não o eliminam.

**CORRETO:**
- COM ASSISTENTE: Humano é **operador** (faz cada passo)
- COM AGENTE: Humano é **supervisor** (define objetivo, revisa resultado)

---

# PARTE 6: Quando Usar Cada Um

## Use ASSISTENTE quando:

- A tarefa é simples e bem-definida
- Você quer controle total sobre cada etapa
- Previsibilidade é mais importante que flexibilidade
- O custo de erro é muito alto (você quer revisar cada decisão)
- A tarefa requer apenas 1-3 interações

## Use AGENTE quando:

- A tarefa é complexa e multi-etapa
- Os passos não podem ser determinados antecipadamente
- Flexibilidade é necessária
- Você aceita revisar o resultado final (não cada passo)
- A tarefa requer múltiplas ferramentas coordenadas

## A Recomendação da Anthropic

> "Encontre a solução mais simples possível, aumentando complexidade apenas quando necessário."

**Tradução:** Não use agente se assistente resolve. Use agente quando assistente te transforma em middleware.

---

# PARTE 6.5: Os Trade-offs Reais

## O Que Você Ganha com Agentes

| Benefício | Descrição |
|-----------|-----------|
| **Autonomia** | Não precisa estar presente em cada etapa |
| **Escalabilidade** | Pode processar múltiplas tarefas em paralelo |
| **Completude** | Tarefas complexas são finalizadas, não abandonadas no meio |
| **Consistência** | Mesmo workflow aplicado repetidamente |

## O Que Você Paga

| Custo | Dado Concreto |
|-------|---------------|
| **Tokens** | Agentes consomem ~4x mais tokens que assistentes (Anthropic) |
| **Latência** | Múltiplos ciclos = mais tempo total de execução |
| **Imprevisibilidade** | O modelo pode escolher caminhos inesperados |
| **Debugging** | Mais difícil rastrear onde algo deu errado |
| **Custo financeiro** | Mais tokens = mais custo de API |

## Dados de Referência (Anthropic)

| Modo | Consumo Relativo de Tokens |
|------|---------------------------|
| Chat simples | 1x (baseline) |
| Assistente com tools | ~1.5x |
| Agente único | ~4x |
| Sistema multi-agente | ~15x |

Fonte: [Anthropic: Multi-Agent Research System](https://www.anthropic.com/engineering/multi-agent-research-system)

## A Pergunta Econômica

Antes de usar agente, pergunte:

> **"O tempo que eu economizo vale mais que o custo adicional de tokens?"**

- Para tarefa única e simples: provavelmente NÃO
- Para tarefas repetitivas em escala: provavelmente SIM
- Para tarefas complexas que você faria de qualquer jeito: SIM

---

# PARTE 7: O Insight Final

## A Frase que Resume Tudo

> **"Agentes não são assistentes mais poderosos. São sistemas onde o modelo DECIDE os próximos passos, não apenas RESPONDE a eles."**

Esta frase captura a essência:

1. **"Não são mais poderosos"** — O poder do LLM pode ser exatamente o mesmo
2. **"DECIDE os próximos passos"** — Autonomia é a característica definidora
3. **"Não apenas RESPONDE"** — A diferença entre reativo e proativo

## As Duas Perguntas Decisivas

Para saber se você está diante de um assistente ou agente, faça estas perguntas:

| Pergunta | Se a resposta for... | Então é... |
|----------|---------------------|------------|
| **Quem decide o que fazer a seguir?** | O humano ou código predefinido | Assistente |
| | O próprio modelo, em tempo real | Agente |
| **O sistema PARA e espera ou CONTINUA sozinho?** | Para e espera novo prompt | Assistente |
| | Continua até completar objetivo | Agente |

## A Mudança Arquitetural

```
ASSISTENTE                          AGENTE
━━━━━━━━━━                         ━━━━━━━

┌────────────────┐                 ┌────────────────┐
│      LLM       │                 │      LLM       │  ← Mesmo modelo!
└───────┬────────┘                 └───────┬────────┘
        │                                  │
        ▼                                  ▼
┌────────────────┐                 ┌────────────────┐
│   RESPONDE     │                 │    DECIDE      │
│   ao prompt    │                 │  próximo passo │
└───────┬────────┘                 └───────┬────────┘
        │                                  │
        ▼                                  ▼
┌────────────────┐                 ┌────────────────┐
│     PARA       │                 │    EXECUTA     │
│  e aguarda     │                 │   ferramenta   │
└────────────────┘                 └───────┬────────┘
                                           │
                                           ▼
                                   ┌────────────────┐
                                   │    OBSERVA     │
                                   │   resultado    │
                                   └───────┬────────┘
                                           │
                                           ▼
                                   ┌────────────────┐
                                   │  Objetivo      │
                                   │  alcançado?    │
                                   └───────┬────────┘
                                      NÃO  │  SIM
                                       │   │   │
                                       │   │   └──► PARA
                                       │   │
                                       └───┴──► Volta para DECIDE

A diferença não é PODER. É ARQUITETURA.
O mesmo LLM pode ser usado dos dois jeitos.
```

## Nota sobre Sistemas Multi-Agente

Sistemas multi-agente (múltiplos agentes colaborando) são uma **evolução adicional**, não a definição de agente. Um agente ÚNICO já é agente se tiver autonomia de decisão.

A colaboração entre agentes resolve outro problema: **escalar tarefas complexas** dividindo trabalho entre especialistas. Mas isso é tema para outro guia.

---

# Checklist de Compreensão

Antes de considerar que você entendeu a diferença, verifique:

- [ ] Consigo explicar a definição da Anthropic (workflows vs agents)
- [ ] Entendo a hierarquia: "Agentic Systems" > (Workflows + Agents)
- [ ] Sei que Orchestrator-Workers é WORKFLOW, não Agent
- [ ] Entendo que a diferença é arquitetural, não de "poder"
- [ ] Sei que existe um ESPECTRO de agenticidade (não é binário)
- [ ] Sei o que é o ciclo Thought-Action-Observation
- [ ] Compreendo por que ferramentas sozinhas NÃO definem agente
- [ ] Compreendo por que memória de longo prazo NÃO define agente
- [ ] Entendo a diferença entre ser "middleware" e ser "regente"
- [ ] Sei quando usar assistente vs. quando usar agente
- [ ] Conheço os trade-offs (custo de tokens, latência, previsibilidade)
- [ ] Posso dar um exemplo prático da minha área profissional
- [ ] Consigo responder: "Quem decide o próximo passo?" para classificar um sistema

---

# Referências

## Fontes Primárias (Anthropic)
- [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents)
- [Effective Harnesses for Long-Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [Multi-Agent Research System](https://www.anthropic.com/engineering/multi-agent-research-system)
- [Claude Documentation](https://docs.anthropic.com)

## Fontes Complementares
- [IBM: AI Agents vs. AI Assistants](https://www.ibm.com/think/topics/ai-agents-vs-ai-assistants)
- [IBM: What Are AI Agents?](https://www.ibm.com/think/topics/ai-agents)
- [Google Cloud: What Are AI Agents?](https://cloud.google.com/discover/what-are-ai-agents)
- [AWS: What Is AI Agents?](https://aws.amazon.com/what-is/ai-agents/)
- [Hugging Face Agents Course](https://huggingface.co/learn/agents-course/unit1/agent-steps-and-structure)
- [Prompt Engineering Guide: AI Workflows vs. AI Agents](https://www.promptingguide.ai/agents/ai-workflows-vs-ai-agents)
- [Lilian Weng: LLM Powered Autonomous Agents](https://lilianweng.github.io/posts/2023-06-23-agent/)

---

*Guia gerado em 18 de fevereiro de 2026*
*Baseado em pesquisa profunda da documentação Anthropic e literatura técnica*
