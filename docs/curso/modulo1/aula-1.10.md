# 1.10 Modos de Uso dos LLMs

**Módulo:** 1 - Fundamentos dos LLMs
**Tempo estimado:** 30 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Identificar os três modos de uso (Recall, Transformativo, Interativo)
- Escolher o modo apropriado para cada tarefa
- Entender quando confiar no conhecimento paramétrico
- Saber quando fornecer contexto externo

---

## Por que Importa

**Para profissionais do Direito:**
- Usar modo errado = resultados ruins
- Modo Recall para fatos específicos = alucinação
- Modo Transformativo para análise de processos = eficiência

---

## Base Conceitual

### Os Três Modos de Uso

```
┌─────────────────────────────────────────────────────────────┐
│                    MODOS DE USO DOS LLMs                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. MODO RECALL (Paramétrico)                               │
│     └── Base: conhecimento interno                          │
│     └── Uso: explicações, conceitos, ideias                 │
│     └── Risco: alucinação para fatos específicos            │
│                                                             │
│  2. MODO TRANSFORMATIVO (Contextual)                        │
│     └── Base: documento anexado ou buscado                  │
│     └── Uso: análise, síntese, revisão                      │
│     └── Risco: degradação de contexto                       │
│                                                             │
│  3. MODO INTERATIVO (Colaborativo)                          │
│     └── Base: diálogo usuário + LLM                         │
│     └── Uso: brainstorming, organização de ideias           │
│     └── Risco: memória deslizante                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Modo Recall: Quando Usar

| Adequado | Inadequado |
|----------|------------|
| Explicar conceitos jurídicos | Citar jurisprudência específica |
| Gerar argumentos genéricos | Buscar precedentes |
| Estruturar textos | Dados biográficos |
| Brainstorming | Números de leis específicas |

**Regra:** Use para **conhecimento comum e estável**. Nunca para **fatos específicos**.

### Modo Transformativo: Quando Usar

| Adequado | Inadequado |
|----------|------------|
| Analisar petição anexada | Perguntar sobre documento não fornecido |
| Resumir processo | Esperar que "lembre" de documento anterior |
| Revisar minuta | Documentos muito longos sem chunking |
| Extrair informações | |

**Regra:** Você é o **curador do conhecimento**. Forneça o contexto necessário.

### Modo Interativo: Quando Usar

| Adequado | Inadequado |
|----------|------------|
| Desenvolver argumentação | Tarefas que exigem precisão factual |
| Organizar ideias | Conversas muito longas |
| Explorar alternativas | Quando precisa de consistência total |
| Refinar texto iterativamente | |

**Regra:** Use como **extensão da mente**, não como fonte de verdade.

---

## Exercício Prático

### Tarefa 1: Modo Recall

**Passo a passo:**
```
Prompt: "Explique o conceito de prescrição no direito civil."

Avalie:
- A explicação é correta conceitualmente?
- Há detalhes específicos (prazos) que precisam verificação?
```

**Reflexão:** O modelo explica bem conceitos, mas verifique detalhes.

### Tarefa 2: Modo Transformativo

**Passo a passo:**
```
1. Anexe uma petição ou documento
2. Prompt: "Extraia os principais argumentos do autor."

Avalie:
- O modelo se baseia no documento?
- As informações vêm do contexto fornecido?
```

**Reflexão:** Com documento anexado, respostas são mais confiáveis.

### Tarefa 3: Modo Interativo

**Passo a passo:**
```
1. Inicie conversa: "Quero desenvolver argumentos sobre X"
2. Peça alternativas: "Que outros argumentos são possíveis?"
3. Refine: "Fortaleça o argumento 2"
4. Conclua: "Organize em formato de petição"

Observe a evolução da conversa.
```

**Reflexão:** O diálogo constrói progressivamente a solução.

### Checklist de Verificação

```
[ ] Testei modo Recall (conceitos gerais)
[ ] Testei modo Transformativo (documento anexado)
[ ] Testei modo Interativo (diálogo)
[ ] Sei qual modo usar para cada tipo de tarefa
```

---

## Dicas e Armadilhas

### Dica
> A curadoria do conhecimento é SUA responsabilidade. Não espere que o LLM "saiba" — forneça o contexto. Modo Transformativo é quase sempre mais seguro que Recall para tarefas jurídicas.

### Dica 2
> Para tarefas complexas, combine modos:
> 1. Recall: estrutura e conceitos
> 2. Transformativo: análise do caso específico
> 3. Interativo: refinamento e polimento

### Armadilha
> **"Vou perguntar sobre jurisprudência do STJ."**
>
> MODO ERRADO! Isso é Recall para fato específico.
> O modelo pode inventar precedentes.
>
> CORRETO: Busque na web ou anexe o acórdão.

### Armadilha 2
> **"A conversa está longa, mas vou continuar."**
>
> Conversas muito longas causam degradação.
> O modelo pode "esquecer" instruções do início.
>
> CORRETO: Inicie nova conversa com resumo do contexto relevante.

---

## Recursos

### Matriz de Decisão

| Tarefa | Modo | Justificativa |
|--------|------|---------------|
| Explicar conceito | Recall | Conhecimento estável |
| Analisar processo | Transformativo | Precisa do documento |
| Citar jurisprudência | Transformativo + Busca | Fato específico |
| Brainstorming | Interativo | Construção colaborativa |
| Revisar minuta | Transformativo | Documento fornecido |
| Estruturar petição | Recall + Interativo | Conceito + refinamento |

### Evolução do Uso de LLMs

```
ERA DO ORÁCULO (2020-2022)
└── Modo Recall dominante
└── "Pergunte e o LLM sabe"
└── Problemas de alucinação

ERA DA CURADORIA (2023+)
└── Modo Transformativo dominante
└── "Forneça contexto e o LLM processa"
└── Usuário como curador do conhecimento
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE DA AULA                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  TRÊS MODOS DE USO:                                         │
│  1. Recall: conhecimento interno (cuidado com fatos!)       │
│  2. Transformativo: documento fornecido (preferível)        │
│  3. Interativo: diálogo colaborativo                        │
│                                                             │
│  QUANDO USAR CADA UM:                                       │
│  → Recall: conceitos, estrutura, ideias gerais              │
│  → Transformativo: análise, síntese, extração               │
│  → Interativo: brainstorming, refinamento                   │
│                                                             │
│  IMPLICAÇÃO:                                                │
│  → Curadoria do conhecimento é sua responsabilidade         │
│  → Forneça contexto, não espere que o LLM "saiba"           │
│  → Para entender melhor: como o LLM processa anexos?        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Entendido que o modo Transformativo depende de documentos, a próxima pergunta é: como o LLM processa esses anexos?

→ Próxima: **[1.11 RAG e a Lógica dos Anexos](./aula-1.11.md)**
