# Aula 3.5: Agent Teams - Orquestrando Times de Agentes

> **Duracao estimada:** 45-50 minutos
> **Pre-requisitos:** Aulas 0-3 (especialmente conceito de subagentes)
> **Objetivo:** Compreender quando e como usar Agent Teams vs subagentes tradicionais

---

## Sumario

1. [Bloco 1: Da Delegacao ao Time](#bloco-1-da-delegacao-ao-time-15-min)
2. [Bloco 2: Agent Teams na Pratica](#bloco-2-agent-teams-na-pratica-20-min)
3. [Bloco 3: Padroes de Coordenacao](#bloco-3-padroes-de-coordenacao-15-min)

---

## Bloco 1: Da Delegacao ao Time (15 min)

### 1.1 Recapitulando: O Que Sao Subagentes

Na Aula 3, aprendemos sobre **subagentes** - agentes especializados que o Claude Code pode invocar para tarefas especificas:

```
┌─────────────────────────────────────────────────────────────────┐
│  SUBAGENTES (Task Tool)                                         │
│                                                                 │
│                    ┌─────────────┐                              │
│                    │   AGENTE    │                              │
│                    │  PRINCIPAL  │                              │
│                    └──────┬──────┘                              │
│              ┌───────────┬┴┬───────────┐                        │
│              │           │ │           │                        │
│              ▼           ▼ ▼           ▼                        │
│         ┌────────┐  ┌────────┐  ┌────────┐                      │
│         │ Sub A  │  │ Sub B  │  │ Sub C  │                      │
│         │(pesq.) │  │(codigo)│  │(teste) │                      │
│         └───┬────┘  └───┬────┘  └───┬────┘                      │
│             │           │           │                           │
│             └───────────┴───────────┘                           │
│                         │                                       │
│                         ▼                                       │
│                    RESULTADO                                    │
│              (volta ao principal)                               │
└─────────────────────────────────────────────────────────────────┘
```

**Caracteristicas dos subagentes:**
- Hierarquia clara: agente principal "manda", subagentes "executam"
- Comunicacao unidirecional: subagente reporta ao principal
- Contexto compartilhado: todos dividem a mesma janela de contexto
- Resultado resumido: subagente retorna sintese, nao processo completo

### 1.2 O Problema: Quando Delegacao Nao Basta

> **Cenario:** Um juiz precisa revisar uma sentenca complexa envolvendo questoes de direito constitucional, previdenciario e processual. Tres assessores especializados vao revisar.

**Abordagem com subagentes:**

```
┌─────────────────────────────────────────────────────────────────┐
│  REVISAO COM SUBAGENTES                                         │
│                                                                 │
│  Magistrado: "Revisem a sentenca"                               │
│       │                                                         │
│       ├──► Subagente Constitucional: [revisa] → "OK"            │
│       ├──► Subagente Previdenciario: [revisa] → "Problema X"    │
│       └──► Subagente Processual: [revisa] → "Problema Y"        │
│                                                                 │
│  Resultado: 3 pareceres independentes                           │
│                                                                 │
│  LIMITACAO: Se o constitucionalista discorda do                 │
│  previdenciarista, eles NAO conversam entre si!                 │
│  O magistrado precisa intermediar TODO debate.                  │
└─────────────────────────────────────────────────────────────────┘
```

**O que falta:**
- Assessores nao debatem entre si
- Cada um ve so sua parte, sem visao do todo
- Contradições so aparecem quando o magistrado consolida
- Sem possibilidade de um assessor questionar o outro

### 1.3 A Analogia do Gabinete Colegiado

No mundo real, assessores de alto nivel trabalham de forma diferente:

```
┌─────────────────────────────────────────────────────────────────┐
│  GABINETE COLEGIADO (Mundo Real)                                │
│                                                                 │
│  ┌─────────────────────────────────────────────────────┐        │
│  │              REUNIAO DE ASSESSORES                  │        │
│  │                                                     │        │
│  │  Constitucionalista: "Vejo inconstitucionalidade"   │        │
│  │                       │                             │        │
│  │  Previdenciarista: "Discordo, a CF permite isso"    │        │
│  │                       │                             │        │
│  │  Processualista: "Antes de debater merito,          │        │
│  │                   tem questao de preclusao"         │        │
│  │                       │                             │        │
│  │  Constitucionalista: "Ah, nao tinha visto isso..."  │        │
│  │                                                     │        │
│  │  [Debatem, refinam, convergem]                      │        │
│  │                                                     │        │
│  │  RESULTADO: Parecer conjunto fundamentado           │        │
│  └─────────────────────────────────────────────────────┘        │
│                                                                 │
│  Magistrado recebe: Consenso + Divergencias explicitas          │
└─────────────────────────────────────────────────────────────────┘
```

**O diferencial:**
- Assessores **conversam entre si**
- Debatem, questionam, refinam posicoes
- Contradições sao resolvidas **antes** de chegar ao magistrado
- Resultado e mais robusto porque passou por "teste de fogo"

### 1.4 Agent Teams: O Gabinete Digital

**Agent Teams** permitem exatamente isso: multiplas instancias de Claude Code trabalhando como um **time coordenado**.

```
┌─────────────────────────────────────────────────────────────────┐
│  AGENT TEAMS                                                    │
│                                                                 │
│                    ┌─────────────┐                              │
│                    │    LEAD     │                              │
│                    │ (coordena)  │                              │
│                    └──────┬──────┘                              │
│                           │                                     │
│          message()   message()   message()                      │
│              │           │           │                          │
│              ▼           ▼           ▼                          │
│         ┌────────┐  ┌────────┐  ┌────────┐                      │
│         │Teammate│  │Teammate│  │Teammate│                      │
│         │   A    │◄─┤   B    │─►│   C    │                      │
│         │        │  │        │  │        │                      │
│         └────────┘  └────────┘  └────────┘                      │
│              ▲           │           ▲                          │
│              └───────────┴───────────┘                          │
│                 COMUNICACAO DIRETA                              │
│                  (peer-to-peer)                                 │
│                                                                 │
│         ┌─────────────────────────────────────┐                 │
│         │    TASK LIST COMPARTILHADA          │                 │
│         │    (com dependency tracking)        │                 │
│         └─────────────────────────────────────┘                 │
└─────────────────────────────────────────────────────────────────┘
```

**Diferencas fundamentais:**

| Aspecto | Subagentes | Agent Teams |
|---------|-----------|-------------|
| **Contexto** | Compartilhado (200K dividido) | Separado (200K cada) |
| **Comunicacao** | So com o principal | Entre si (peer-to-peer) |
| **Coordenacao** | Hierarquica | Colegiada |
| **Resultado** | Resumos individuais | Debate + Consenso |

### 1.5 Quando Usar Cada Um

```
┌─────────────────────────────────────────────────────────────────┐
│  ARVORE DE DECISAO                                              │
│                                                                 │
│  A tarefa requer DEBATE entre especialistas?                    │
│       │                                                         │
│       ├─► NAO ─► Os resultados precisam de INTEGRACAO?          │
│       │              │                                          │
│       │              ├─► NAO ─► SUBAGENTES (mais barato)        │
│       │              │                                          │
│       │              └─► SIM ─► Os especialistas podem          │
│       │                        DISCORDAR entre si?              │
│       │                            │                            │
│       │                            ├─► NAO ─► SUBAGENTES        │
│       │                            │                            │
│       │                            └─► SIM ─► AGENT TEAMS       │
│       │                                                         │
│       └─► SIM ─► AGENT TEAMS                                    │
└─────────────────────────────────────────────────────────────────┘
```

**Heuristica pratica:**

| Cenario | Usar |
|---------|------|
| Pesquisar 3 bases de jurisprudencia | Subagentes |
| Revisar sentenca com multiplas perspectivas | Agent Teams |
| Extrair dados de documentos | Subagentes |
| Investigar bug com hipoteses rivais | Agent Teams |
| Gerar relatorio estruturado | Subagentes |
| Refatorar modulo com debate arquitetural | Agent Teams |

---

## Bloco 2: Agent Teams na Pratica (20 min)

### 2.1 Habilitando Agent Teams

Agent Teams sao um recurso **experimental** (fevereiro 2026). Para habilitar:

**Opcao 1: Variavel de ambiente**
```bash
export CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1
claude
```

**Opcao 2: settings.json**
```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  }
}
```

> **Nota:** Por ser experimental, algumas funcionalidades podem mudar. Consulte a documentacao oficial para atualizacoes.

### 2.2 Criando um Time (Linguagem Natural)

Voce nao precisa de comandos especiais. Basta descrever a tarefa:

**Exemplo 1: Revisao de Sentenca**
```
Crie um time de 3 revisores para analisar esta minuta de sentenca:

- Revisor 1: Foco em questoes CONSTITUCIONAIS (direitos fundamentais,
  proporcionalidade, fundamentacao adequada)

- Revisor 2: Foco em questoes PROCESSUAIS (preclusao, legitimidade,
  interesse processual, limites do pedido)

- Revisor 3: Foco em questoes de MERITO PREVIDENCIARIO (requisitos
  do beneficio, calculo, DIB/DCB)

Deixe-os conversar entre si para identificar contradicoes.
Sintetize os achados ao final.
```

**Exemplo 2: Investigacao de Erro**
```
O sistema de pesquisa de jurisprudencia esta retornando resultados
inconsistentes. Crie um time de investigadores:

- Investigador 1: Hipotese "problema na sintaxe de busca"
- Investigador 2: Hipotese "timeout na API externa"
- Investigador 3: Hipotese "cache desatualizado"
- Investigador 4: Advogado do diabo - tenta desprovar as outras hipoteses

Facam investigacao cientifica: testem, compartilhem evidencias,
e convirjam na causa raiz.
```

### 2.3 Anatomia de um Time

Quando voce cria um time, o Claude Code:

```
┌─────────────────────────────────────────────────────────────────┐
│  CRIACAO DO TIME                                                │
│                                                                 │
│  1. LEAD e criado (sua sessao atual)                            │
│     └─ Gerencia o time, interface com voce                      │
│                                                                 │
│  2. TEAMMATES sao spawnados                                     │
│     └─ Cada um e uma sessao Claude Code independente            │
│     └─ Cada um tem sua propria janela de contexto (200K)        │
│     └─ Herdam CLAUDE.md e configuracoes do projeto              │
│                                                                 │
│  3. TASK LIST e criada                                          │
│     └─ Compartilhada entre todos                                │
│     └─ Dependency tracking automatico                           │
│     └─ Auto-claiming quando tarefas ficam disponiveis           │
│                                                                 │
│  4. CANAIS DE COMUNICACAO sao abertos                           │
│     └─ Lead ↔ Teammates                                         │
│     └─ Teammate ↔ Teammate (direto)                             │
└─────────────────────────────────────────────────────────────────┘
```

### 2.4 Controlando o Time

**Navegacao entre teammates:**
```
Shift+Up/Down     → Navegar entre teammates
Shift+Tab         → Ativar "delegate mode" (lead so coordena)
Ctrl+T            → Mostrar task list
```

**Comandos naturais:**
```
"Pergunte ao revisor constitucional o que ele achou do artigo 5"
"Espere todos os teammates terminarem antes de prosseguir"
"Crie uma nova tarefa para analisar os embargos"
"Encerre o time e sintetize os resultados"
```

### 2.5 Task List e Dependencies

A task list e o coracao da coordenacao:

```
┌─────────────────────────────────────────────────────────────────┐
│  TASK LIST                                                      │
│                                                                 │
│  Task 1: Analisar questoes constitucionais                      │
│    Status: COMPLETED (Teammate A)                               │
│                                                                 │
│  Task 2: Analisar questoes processuais                          │
│    Status: IN_PROGRESS (Teammate B)                             │
│                                                                 │
│  Task 3: Analisar merito previdenciario                         │
│    Status: IN_PROGRESS (Teammate C)                             │
│                                                                 │
│  Task 4: Consolidar achados                                     │
│    Status: PENDING                                              │
│    Depends on: Task 1, Task 2, Task 3  ← So comeca quando       │
│                                          TODAS terminarem       │
│                                                                 │
│  Task 5: Elaborar parecer conjunto                              │
│    Status: PENDING                                              │
│    Depends on: Task 4                                           │
└─────────────────────────────────────────────────────────────────┘
```

**Auto-claiming:** Quando um teammate termina sua tarefa, ele automaticamente pega a proxima tarefa disponivel (sem bloqueios).

### 2.6 Exemplo Completo: Revisao Paralela de Minuta

**Prompt inicial:**
```
Crie um time para revisar a minuta em processo-12345/minuta.md.

Spawn 4 teammates:
1. ADVOGADO DO DIABO: Busca vicios que permitam recurso (omissao,
   contradicao, obscuridade). Perspectiva da parte sucumbente.

2. CONSISTENCIA INTERNA: Confronta sentenca vs autos. Todos os
   pedidos foram analisados? Provas citadas existem?

3. CONSISTENCIA EXTERNA: Verifica citacoes (precedentes, leis,
   sumulas). Usa WebSearch para confirmar.

4. CONSOLIDADOR: Espera os 3 anteriores, remove duplicatas,
   prioriza por gravidade, gera relatorio final.

Configure dependencies: Consolidador depende dos 3 revisores.
Deixe os revisores conversarem se encontrarem contradições.
```

**Execucao:**
```
┌─────────────────────────────────────────────────────────────────┐
│  TIMELINE DE EXECUCAO                                           │
│                                                                 │
│  T=0   Lead cria o time                                         │
│        ├─ Spawna Advogado do Diabo                              │
│        ├─ Spawna Consistencia Interna                           │
│        ├─ Spawna Consistencia Externa                           │
│        └─ Spawna Consolidador (aguardando)                      │
│                                                                 │
│  T=1   3 revisores trabalham EM PARALELO                        │
│        ├─ Advogado: lendo minuta, buscando vicios               │
│        ├─ Interna: confrontando com autos                       │
│        └─ Externa: verificando citacoes (WebSearch)             │
│                                                                 │
│  T=2   Interna encontra inconsistencia                          │
│        └─ Mensagem para Advogado: "Vi que pedido X nao foi      │
│           analisado. Voce viu omissao de fundamentacao?"        │
│                                                                 │
│  T=3   Advogado responde                                        │
│        └─ "Sim! E uma omissao grave. Vou destacar no relatorio" │
│                                                                 │
│  T=4   3 revisores terminam                                     │
│        └─ Consolidador automaticamente comeca                   │
│                                                                 │
│  T=5   Consolidador gera relatorio final                        │
│        ├─ Remove duplicatas (omissao vista por 2)               │
│        ├─ Prioriza: CRITICO, ALTO, MEDIO, BAIXO                 │
│        └─ Output: consolidacao.md                               │
│                                                                 │
│  T=6   Lead apresenta resultado ao usuario                      │
└─────────────────────────────────────────────────────────────────┘
```

**Resultado:** Revisao mais robusta porque:
- Cada revisor teve contexto puro (200K so para sua analise)
- Revisores conversaram e refinaram achados
- Duplicatas foram removidas automaticamente
- Magistrado recebe parecer consolidado, nao 3 relatorios separados

---

## Bloco 3: Padroes de Coordenacao (15 min)

### 3.1 Padrao 1: Investigacao com Hipoteses Rivais

**Quando usar:** Problema complexo com multiplas causas possiveis.

**Analogia juridica:** Pericia com assistentes tecnicos de ambas as partes.

```
┌─────────────────────────────────────────────────────────────────┐
│  INVESTIGACAO CIENTIFICA                                        │
│                                                                 │
│  PROBLEMA: Sistema retorna erro intermitente                    │
│                                                                 │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐        │
│  │ Investigador 1│  │ Investigador 2│  │ Investigador 3│        │
│  │               │  │               │  │               │        │
│  │ Hipotese:     │  │ Hipotese:     │  │ Hipotese:     │        │
│  │ Race cond.    │  │ Memory leak   │  │ API timeout   │        │
│  └───────┬───────┘  └───────┬───────┘  └───────┬───────┘        │
│          │                  │                  │                │
│          └──────────────────┼──────────────────┘                │
│                             │                                   │
│                    DEBATE CIENTIFICO                            │
│          "Achei evidencia X" / "Isso contradiz Y"               │
│                             │                                   │
│                             ▼                                   │
│                      ┌───────────┐                              │
│                      │ Advogado  │                              │
│                      │ do Diabo  │                              │
│                      │           │                              │
│                      │ Tenta     │                              │
│                      │ DESPROVAR │                              │
│                      │ todas     │                              │
│                      └─────┬─────┘                              │
│                            │                                    │
│                            ▼                                    │
│                    CONSENSO + EVIDENCIAS                        │
└─────────────────────────────────────────────────────────────────┘
```

**Prompt:**
```
O MCP de jurisprudencia esta falhando em 30% das buscas.
Crie 4 investigadores com hipoteses rivais:

1. "Problema na sintaxe booleana da query"
2. "Timeout da API do tribunal"
3. "Rate limiting sendo atingido"
4. Advogado do diabo - tenta desprovar as outras 3

Investiguem cientificamente. Compartilhem evidencias.
Convirjam na causa raiz com PROVAS.
```

### 3.2 Padrao 2: Revisao Multiperspectiva

**Quando usar:** Documento precisa de validacao por multiplos angulos.

**Analogia juridica:** Mesa de julgamento com desembargadores de areas distintas.

```
┌─────────────────────────────────────────────────────────────────┐
│  REVISAO MULTIPERSPECTIVA                                       │
│                                                                 │
│               ┌─────────────────────┐                           │
│               │      DOCUMENTO      │                           │
│               │   (minuta, peticao) │                           │
│               └──────────┬──────────┘                           │
│                          │                                      │
│        ┌─────────────────┼─────────────────┐                    │
│        │                 │                 │                    │
│        ▼                 ▼                 ▼                    │
│  ┌───────────┐    ┌───────────┐    ┌───────────┐               │
│  │  FORMA    │    │  MERITO   │    │ CITACOES  │               │
│  │           │    │           │    │           │               │
│  │ Estrutura │    │ Logica    │    │ Fontes    │               │
│  │ Linguagem │    │ Argumento │    │ Precisao  │               │
│  │ Formato   │    │ Coerencia │    │ Vigencia  │               │
│  └─────┬─────┘    └─────┬─────┘    └─────┬─────┘               │
│        │                │                │                      │
│        └────────────────┼────────────────┘                      │
│                         ▼                                       │
│                  CONSOLIDADOR                                   │
│           (prioriza, remove duplicatas)                         │
└─────────────────────────────────────────────────────────────────┘
```

### 3.3 Padrao 3: Implementacao Modular

**Quando usar:** Tarefa grande que pode ser dividida em modulos independentes.

**Analogia juridica:** Vara especializada onde cada servidor cuida de uma fase.

```
┌─────────────────────────────────────────────────────────────────┐
│  IMPLEMENTACAO MODULAR COM DEPENDENCIES                         │
│                                                                 │
│  Task 1: Schema do banco ─────────────────┐                     │
│     (Teammate A)                          │                     │
│                                           │                     │
│  Task 2: API REST ────────────────────────┼──┐                  │
│     (Teammate B)                          │  │                  │
│     [Depends on: Task 1]                  │  │                  │
│                                           │  │                  │
│  Task 3: Interface ───────────────────────┼──┼──┐               │
│     (Teammate C)                          │  │  │               │
│     [Depends on: Task 2]                  │  │  │               │
│                                           │  │  │               │
│  Task 4: Testes ──────────────────────────┴──┴──┘               │
│     (Teammate D)                                                │
│     [Depends on: Task 1, Task 2, Task 3]                        │
│                                                                 │
│  EXECUCAO:                                                      │
│  - Task 1 comeca imediatamente                                  │
│  - Task 2 espera Task 1 terminar                                │
│  - Task 3 espera Task 2 terminar                                │
│  - Task 4 espera TODAS terminarem                               │
│                                                                 │
│  Teammates A, B, C nao ficam ociosos:                           │
│  - A termina Task 1 → pega proxima tarefa disponivel            │
│  - Auto-claiming mantem todos ocupados                          │
└─────────────────────────────────────────────────────────────────┘
```

### 3.4 Limitacoes e Cuidados

**Limitacoes tecnicas (fevereiro 2026):**

| Limitacao | Impacto | Workaround |
|-----------|---------|------------|
| Sem session resumption para teammates | Se resumir sessao, teammates nao voltam | Criar novos teammates apos resume |
| Task status pode ficar desatualizado | Bloqueia dependent tasks | Atualizar manualmente ou pedir ao lead |
| Um time por sessao | Nao da para criar times aninhados | Planejar estrutura antes |
| Custo de token alto | Cada teammate = contexto separado | Usar so para tarefas complexas |

**Boas praticas:**

```
┌─────────────────────────────────────────────────────────────────┐
│  CHECKLIST ANTES DE USAR AGENT TEAMS                            │
│                                                                 │
│  [ ] CLAUDE.md esta bem configurado?                            │
│      (Teammates herdam, e a unica "memoria" deles)              │
│                                                                 │
│  [ ] Tarefa e genuinamente paralelizavel?                       │
│      (Se for linear, subagentes sao mais baratos)               │
│                                                                 │
│  [ ] Especialistas precisam DEBATER?                            │
│      (Se nao, subagentes bastam)                                │
│                                                                 │
│  [ ] Cada tarefa leva 10+ minutos?                              │
│      (Se for rapida, overhead nao compensa)                     │
│                                                                 │
│  [ ] Tasks sao self-contained?                                  │
│      (Evitar dependencias circulares)                           │
│                                                                 │
│  [ ] Evitei conflito de arquivos?                               │
│      (Dois teammates no mesmo arquivo = problema)               │
└─────────────────────────────────────────────────────────────────┘
```

### 3.5 Tabela de Decisao Final

| Cenario Juridico | Usar | Razao |
|------------------|------|-------|
| Pesquisar em BNP + CJF + JULIA | Subagentes | Paralelo simples, so resultado importa |
| Revisar sentenca com 3 perspectivas | Agent Teams | Debate entre revisores agrega valor |
| Extrair dados de peticao | Subagentes | Tarefa isolada, sem debate |
| Investigar inconsistencia em pesquisa | Agent Teams | Hipoteses rivais precisam de confronto |
| Gerar relatorio de processo | Subagentes | Pipeline linear |
| Refatorar pipeline de sentenciamento | Agent Teams | Debate arquitetural necessario |
| Verificar citacoes de uma minuta | Subagentes | Verificacao factual, sem debate |
| Elaborar parecer em caso complexo | Agent Teams | Multiplas especialidades debatendo |

---

## Sintese: O Que Aprendemos

### Conceitos-Chave

| Conceito | Definicao | Quando Usar |
|----------|-----------|-------------|
| **Subagentes** | Agentes que reportam ao principal | Tarefas focadas, resultado importa |
| **Agent Teams** | Sessoes independentes que colaboram | Debate, hipoteses rivais, revisao |
| **Lead** | Sessao que coordena o time | Sempre presente em Agent Teams |
| **Teammates** | Sessoes autonomas com contexto proprio | Paralelismo com comunicacao |
| **Task List** | Lista compartilhada com dependencies | Coordenacao automatica |

### A Analogia Central

```
┌─────────────────────────────────────────────────────────────────┐
│  SUBAGENTES = Assessores que reportam ao magistrado             │
│                                                                 │
│  AGENT TEAMS = Gabinete colegiado onde assessores debatem       │
│                entre si antes de apresentar parecer conjunto    │
└─────────────────────────────────────────────────────────────────┘
```

### Citacao para Lembrar

> *"The shift from 'tasks for machines' to 'teams of machines' represents the next evolution in AI-assisted work."*
> — Addy Osmani, 2026
>
> *Traducao: "A mudanca de 'tarefas para maquinas' para 'times de maquinas' representa a proxima evolucao no trabalho assistido por IA."*

### Exercicio Pratico

**Tarefa:** Dado o seguinte cenario, decida: Subagentes ou Agent Teams?

1. **Cenario A:** Pesquisar Tema 1038 do STF em 3 bases diferentes
2. **Cenario B:** Revisar minuta de sentenca buscando omissoes, contradicoes e erros de citacao
3. **Cenario C:** Extrair dados de 10 documentos do processo
4. **Cenario D:** Investigar por que o MCP do BNP esta retornando erro 500

**Respostas:**
1. Subagentes (paralelo simples, so resultado importa)
2. Agent Teams (revisores precisam debater achados conflitantes)
3. Subagentes (extracao isolada, sem debate)
4. Agent Teams (hipoteses rivais precisam ser testadas e confrontadas)

---

## Recursos Adicionais

**Documentacao oficial:**
- https://code.claude.com/docs/en/agent-teams.md
- https://code.claude.com/docs/en/sub-agents.md

**Leitura recomendada:**
- "Claude Code Swarms" - Addy Osmani (2026)
- "Building Effective Agents" - Anthropic Blog

---

*Aula 3.5 concluida - Agent Teams: Orquestrando Times de Agentes*
*Curso de Sistemas Agenticos para Juristas*
