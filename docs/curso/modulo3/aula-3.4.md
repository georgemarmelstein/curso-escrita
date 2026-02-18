# 3.4 Inferência Causal (Pearl)

**Módulo:** 3 - Aplicações Avançadas
**Framework:** Judea Pearl - Causalidade
**Tempo estimado:** 45 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Aplicar o framework de inferência causal de Judea Pearl
- Construir DAGs (grafos acíclicos dirigidos) para análise probatória
- Formular contrafactuais para testar hipóteses
- Integrar análise causal em peças jurídicas

---

## Por que Importa

**Para profissionais do Direito:**
- A prova de nexo causal é essencial em responsabilidade civil
- Contrafactuais são a base da teoria da equivalência das condições
- Análise estruturada evita falácias lógicas comuns

**Aplicação direta:**
- Processos de responsabilidade civil
- Análise de nexo causal em crimes
- Avaliação de provas indiretas

---

## Base Conceitual

### Quem é Judea Pearl?

Cientista da computação, prêmio Turing 2011, revolucionou a análise causal com:
- Do-calculus (cálculo de intervenções)
- DAGs para representar relações causais
- Framework de contrafactuais

### A Escada da Causalidade

```
NÍVEL 3: CONTRAFACTUAIS (Imaginação)
│        "Se X não tivesse ocorrido, Y teria acontecido?"
│
NÍVEL 2: INTERVENÇÃO (Fazer)
│        "Se eu fizer X, o que acontece com Y?"
│
NÍVEL 1: ASSOCIAÇÃO (Ver)
         "X e Y estão correlacionados?"
```

**Jurídico:**
- Nível 1: Estatísticas de acidentes
- Nível 2: Análise de conduta do agente
- Nível 3: "Se o motorista não tivesse bebido, o acidente teria ocorrido?"

### DAG (Grafo Acíclico Dirigido)

```
        ┌────────────┐
        │  ÁLCOOL    │
        │ (embriaguez)│
        └─────┬──────┘
              │
              ▼
        ┌────────────┐         ┌────────────┐
        │ REFLEXO    │ ──────► │  ACIDENTE  │
        │ (reduzido) │         │   (dano)   │
        └────────────┘         └────────────┘
              ▲
              │
        ┌────────────┐
        │   CHUVA    │
        │ (confundidor)│
        └────────────┘
```

**Elementos:**
- **Nós:** Variáveis (eventos, condições)
- **Setas:** Relações causais diretas
- **Confundidores:** Variáveis que afetam múltiplas outras

### A Pergunta Contrafactual

```
FÓRMULA:
"Se [CAUSA SUPOSTA] não tivesse ocorrido,
 [EFEITO] teria ocorrido mesmo assim?"

EXEMPLO:
"Se o motorista não estivesse embriagado,
 o acidente teria ocorrido mesmo assim?"
```

### Critérios de Causalidade (Pearl)

1. **Associação:** X e Y estão correlacionados
2. **Temporalidade:** X precede Y
3. **Intervenção:** Alterar X altera Y
4. **Contrafactual:** Sem X, Y não teria ocorrido

---

## Exercício Prático

### Tarefa
Aplicar framework Pearl em caso de responsabilidade civil.

### Caso
```
SITUAÇÃO:
Paciente morreu após cirurgia de apendicite.
Familiares alegam erro médico (negligência na monitoração pós-operatória).
Hospital alega que paciente tinha condição cardíaca preexistente não revelada.

PROVAS DISPONÍVEIS:
- Prontuário médico
- Laudo de necropsia: parada cardiorrespiratória
- Histórico de saúde do paciente (sem registro de cardiopatia)
- Depoimento do anestesista: "sinais vitais estáveis na sala de cirurgia"
- Registro de enfermagem: intervalo de 4h entre monitorações
```

### Passo a Passo

**1. Construir DAG do caso:**

```
Prompt:
Você é um especialista em inferência causal no estilo de Judea Pearl.
Analise o caso abaixo e construa um DAG (grafo acíclico dirigido)
identificando:

1. Variáveis principais (nós)
2. Relações causais (setas)
3. Possíveis confundidores
4. Variáveis não observadas

[CASO]

Represente o DAG em formato ASCII e explique cada relação.
```

**2. Formular contrafactuais:**

```
Prompt:
Com base no DAG construído, formule os contrafactuais relevantes
para determinar nexo causal:

1. Contrafactual principal (causa alegada pelo autor)
2. Contrafactual alternativo (defesa do réu)
3. Análise de cada cenário contrafactual

Use a linguagem de Pearl: "Se X não tivesse ocorrido, Y teria ocorrido?"
```

**3. Avaliar força causal:**

```
Prompt:
Avalie a força da relação causal entre "falha na monitoração" e "morte",
considerando:

1. Associação observada
2. Temporalidade
3. Mecanismo causal plausível
4. Exclusão de causas alternativas
5. Grau de certeza do contrafactual

Conclua com uma avaliação de 1-10 da força do nexo causal.
```

### Resultado Esperado

**DAG esperado:**
```
     ┌─────────────────┐
     │ CONDIÇÃO CARDÍACA│
     │  (preexistente?) │
     └────────┬────────┘
              │
              ▼
     ┌─────────────────┐
     │ CIRURGIA        │───────────┐
     │ (intervenção)   │           │
     └────────┬────────┘           │
              │                    │
              ▼                    │
     ┌─────────────────┐           │
     │ MONITORAÇÃO     │           │
     │ (falha: 4h)     │           │
     └────────┬────────┘           │
              │                    │
              ▼                    ▼
     ┌─────────────────┐    ┌──────────────┐
     │ DETECÇÃO TARDIA │───►│    MORTE     │
     │ (de complicação)│    │   (outcome)  │
     └─────────────────┘    └──────────────┘
```

**Contrafactual principal:**
"Se a monitoração tivesse sido adequada (intervalos de 1h),
a complicação teria sido detectada a tempo e o paciente teria sobrevivido?"

---

## Prompt Completo (Template)

```markdown
# ANÁLISE PROBATÓRIA - FRAMEWORK PEARL

## Persona
Você é um analista probatório especializado em inferência causal,
aplicando o framework de Judea Pearl para análise de nexo causal.

## Tarefa
Analise o conjunto probatório abaixo seguindo estas etapas:

### ETAPA 1: CONSTRUÇÃO DO DAG
- Identifique todas as variáveis relevantes
- Estabeleça relações causais diretas (setas)
- Identifique confundidores e mediadores
- Represente em formato ASCII

### ETAPA 2: CONTRAFACTUAIS
Para cada hipótese de nexo causal, formule:
- Contrafactual no formato Pearl
- Avaliação de plausibilidade (1-10)
- Evidências que suportam ou refutam

### ETAPA 3: SÍNTESE CAUSAL
- Força do nexo causal (1-10)
- Causas concorrentes identificadas
- Lacunas probatórias
- Conclusão fundamentada

## Caso para Análise
<caso>
[INSERIR CASO]
</caso>

## Provas Disponíveis
<provas>
[INSERIR PROVAS]
</provas>

## Formato de Saída
Use headers Markdown para cada etapa.
Inclua o DAG em ASCII.
Conclua com tabela de síntese.
```

---

## Dicas e Armadilhas

### Dica
> Sempre comece pelo DAG. A visualização das relações causais evita que você "pule" para conclusões sem mapear o caminho causal completo.

### Dica 2
> Formule contrafactuais para AMBAS as partes. Isso revela os pontos fracos de cada narrativa causal.

### Armadilha
> **"Correlação implica causação."**
>
> Não! O DAG ajuda a identificar confundidores.
> Duas variáveis podem estar correlacionadas por causa comum.

### Armadilha 2
> **"Se não consigo provar o contrafactual, não há nexo."**
>
> Contrafactuais são hipotéticos. A questão é a plausibilidade,
> não a certeza absoluta. Use "preponderância de evidências".

---

## Recursos

### Prompt Especializado
- `docs/prompt-juridico/prompts/analise/analise-probatoria-causal.md`

### Referências Acadêmicas
- Pearl, J. (2009) - "Causality: Models, Reasoning, and Inference"
- Pearl, J. (2018) - "The Book of Why"

### Agent Disponível (Claude Code)
- `probatica-pearl` - Executa análise Pearl automatizada

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: FRAMEWORK PEARL                                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ESCADA DA CAUSALIDADE:                                     │
│  1. Associação (ver) → 2. Intervenção (fazer) →             │
│  3. Contrafactual (imaginar)                                │
│                                                             │
│  FERRAMENTAS:                                               │
│  → DAG: mapa visual de relações causais                     │
│  → Contrafactual: "Se X não tivesse..., Y teria...?"        │
│  → Confundidores: causas comuns que geram correlação falsa  │
│                                                             │
│  APLICAÇÃO JURÍDICA:                                        │
│  → Nexo causal em responsabilidade civil                    │
│  → Teoria da equivalência das condições                     │
│  → Avaliação de provas indiretas                            │
│                                                             │
│  PERGUNTA-CHAVE:                                            │
│  "Se a conduta alegada não tivesse ocorrido,                │
│   o dano teria ocorrido mesmo assim?"                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Pearl foca em causalidade. Mas e a coerência do conjunto probatório? Para isso, usamos Susan Haack.

→ Próxima: **[3.5 Foundherentismo (Haack)](./aula-3.5.md)**
