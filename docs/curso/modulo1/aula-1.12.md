# 1.12 Introdução ao Mundo dos Agentes

**Módulo:** 1 - Fundamentos dos LLMs
**Tempo estimado:** 35 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Diferenciar assistentes simples de agentes
- Entender o padrão ReAct (Reasoning + Acting)
- Conhecer os componentes de sistemas agênticos
- Identificar o papel do jurista na "justiça aumentada"

---

## Por que Importa

**Para profissionais do Direito:**
- Agentes podem automatizar fluxos complexos de trabalho
- Entender agenticidade permite aproveitar ferramentas avançadas
- O futuro da prática jurídica envolve sistemas agênticos

---

## Base Conceitual

### A Evolução: De Assistente a Agente

```
ASSISTENTE SIMPLES              AGENTE (SUPERAGENTE)
┌─────────────────────┐        ┌─────────────────────┐
│                     │        │                     │
│  Texto → Texto      │        │  Texto → Orquestrador│
│                     │        │       → Artefato    │
│  Conversacional     │        │                     │
│  Reativo            │        │  Planeja            │
│  Uma tarefa         │        │  Executa            │
│  Segue instruções   │        │  Reflete            │
│                     │        │  Certa autonomia    │
└─────────────────────┘        └─────────────────────┘
```

### O Padrão ReAct

**ReAct = Reasoning + Acting**

```
┌─────────────────────────────────────────────────────────────┐
│                      CICLO ReAct                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. THOUGHT (Pensamento)                                    │
│     "Preciso buscar a jurisprudência sobre isso..."         │
│                       │                                     │
│                       ▼                                     │
│  2. ACTION (Ação)                                           │
│     [Busca web: "jurisprudência STJ prescrição"]            │
│                       │                                     │
│                       ▼                                     │
│  3. OBSERVATION (Observação)                                │
│     "Encontrei 3 acórdãos relevantes..."                    │
│                       │                                     │
│                       ▼                                     │
│  4. THOUGHT (novo ciclo ou conclusão)                       │
│     "Agora posso responder..."                              │
│                       │                                     │
│                       ▼                                     │
│  ANSWER (Resposta final)                                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Componentes de Sistemas Agênticos

| Componente | Descrição | Exemplo |
|------------|-----------|---------|
| **Tools** | Ferramentas que o agente usa | Busca web, código, cálculo |
| **Skills** | Habilidades específicas | Análise FIRAC, redação |
| **Resources** | Bases de conhecimento | Documentos, APIs, MCP |
| **Memory** | Memória persistente | Histórico de ações |
| **Planning** | Capacidade de planejar | Decomposição de tarefas |

### Níveis de Autonomia

```
PASSIVO (Baixa)          HUMAN-IN-THE-LOOP          AUTÔNOMO (Alta)
      │                         │                         │
      ▼                         ▼                         ▼
┌─────────────┐          ┌─────────────┐          ┌─────────────┐
│ Responde    │          │ Propõe e    │          │ Decide e    │
│ perguntas   │          │ espera      │          │ executa     │
│ apenas      │          │ aprovação   │          │ sozinho     │
└─────────────┘          └─────────────┘          └─────────────┘
```

---

## O Papel do Jurista na Justiça Aumentada

```
┌─────────────────────────────────────────────────────────────┐
│           7 PAPÉIS DO JURISTA COM IA                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. ENGENHARIA DE PROMPT                                    │
│     └── Conversar eficientemente com a máquina              │
│                                                             │
│  2. ENGENHARIA DE CONTEXTO                                  │
│     └── Curadoria de conhecimento                           │
│                                                             │
│  3. ENGENHARIA DE WORKFLOW                                  │
│     └── Design de sistemas decisórios                       │
│                                                             │
│  4. METACOGNIÇÃO                                            │
│     └── Modelagem cognitiva                                 │
│                                                             │
│  5. CURADORIA DE VALORES                                    │
│     └── Modelagem ética                                     │
│                                                             │
│  6. AUDITORIA EPISTÊMICA                                    │
│     └── Melhoria contínua                                   │
│                                                             │
│  7. DECISOR ESTRATÉGICO                                     │
│     └── Reserva de humanidade                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Exercício Prático

### Tarefa 1: Observar Comportamento Agêntico

**Passo a passo:**
```
1. Ative a busca web no Claude
2. Pergunte: "Qual a jurisprudência mais recente do STJ
   sobre prescrição em ações de cobrança de FGTS?"
3. Observe:
   - O Claude informa que está buscando?
   - Ele cita as fontes encontradas?
   - Há ciclo de pensamento-ação-observação?
```

### Tarefa 2: Comparar Assistente vs Agente

**Passo a passo:**
```
Modo assistente (busca desativada):
"Liste jurisprudência sobre prescrição."

Modo agente (busca ativada):
"Pesquise e liste jurisprudência recente sobre prescrição."

Compare: Qual resposta é mais completa e atualizada?
```

### Tarefa 3: Testar Planejamento

**Passo a passo:**
```
Prompt complexo:
"Analise este documento [anexe], pesquise jurisprudência
relacionada, e elabore um parecer sobre a viabilidade
da ação."

Observe: O agente decompõe em etapas?
```

### Checklist de Verificação

```
[ ] Entendo a diferença entre assistente e agente
[ ] Observei o padrão ReAct em ação
[ ] Sei identificar quando o Claude usa ferramentas
[ ] Compreendo os diferentes níveis de autonomia
```

---

## Dicas e Armadilhas

### Dica
> No modo agêntico, assuma postura de **regente da orquestra**, não de plateia. Você direciona, o agente executa. Mantenha controle sobre o processo.

### Dica 2
> Para tarefas complexas, decomponha em etapas e valide cada uma antes de prosseguir. Isso é "human-in-the-loop" — você permanece no controle.

### Armadilha
> **"O agente vai fazer tudo sozinho, posso relaxar."**
>
> Agentes podem errar em qualquer etapa:
> - Busca inadequada
> - Interpretação errada
> - Ações incorretas
>
> Sempre revise os resultados intermediários.

### Armadilha 2
> **"Mais autonomia = melhor."**
>
> Nem sempre! Maior autonomia significa:
> - Maior risco de erros não detectados
> - Menor controle sobre o processo
> - Mais difícil auditar decisões

---

## Recursos

### Evolução Histórica

```
2022: ChatGPT 3.5 (Assistente - Chatbot)
2023: Plugins e GPTs Customizados
2023: Perplexity (busca integrada)
2024: NotebookLM, Deep Research
2024: Claude Sonnet 4.5, Claude Code
2025: Sistemas multi-agentes
```

### Material de Referência
- Slides: `docs/modulo1-slides/Aula 12 - Agentes.pptx`
- Papers: Yao et al. (2022) - "ReAct: Synergizing Reasoning and Acting"

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE DA AULA                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  DE ASSISTENTES A AGENTES                                   │
│  → Assistente: reativo, uma tarefa, segue instruções        │
│  → Agente: proativo, planeja, executa, usa ferramentas      │
│                                                             │
│  PADRÃO ReAct                                               │
│  → Thought (raciocínio)                                     │
│  → Action (ação)                                            │
│  → Observation (observação)                                 │
│  → Ciclo até resposta final                                 │
│                                                             │
│  PAPEL DO JURISTA                                           │
│  → Engenharia de prompt, contexto e workflow                │
│  → Curadoria de valores                                     │
│  → Decisor estratégico                                      │
│                                                             │
│  IMPLICAÇÃO                                                 │
│  → Seja regente da orquestra, não plateia                   │
│  → Mantenha human-in-the-loop                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Com toda a base conceitual construída, é hora de consolidar em regras práticas.

→ Próxima: **[1.13 10 Mandamentos para Dominar LLMs](./aula-1.13.md)**
