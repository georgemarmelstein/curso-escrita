# Aula 4: Construindo os Primeiros Agentes

> **Duracao estimada:** 4 horas
> **Pre-requisitos:** Aulas 0, 1, 2A, 2B e 3
> **Objetivo:** Capacitar para construir skills, commands e sistemas agenticos funcionais

---

## Sumario

1. [Bloco 1: O Paradigma Spec-Driven](#bloco-1-o-paradigma-spec-driven-35-min)
2. [Bloco 2: Anatomia de Skills](#bloco-2-anatomia-de-skills-40-min)
3. [Bloco 3: Criando Commands](#bloco-3-criando-commands-35-min)
4. [Bloco 4: O Padrao RPI](#bloco-4-o-padrao-rpi-40-min)
5. [Bloco 5: Prompt Learning Loop](#bloco-5-prompt-learning-loop-35-min)
6. [Bloco 6: Debugging e Iteracao](#bloco-6-debugging-e-iteracao-40-min)
7. [Bloco 7: Projeto Pratico Guiado](#bloco-7-projeto-pratico-guiado-45-min)

---

## Bloco 1: O Paradigma Spec-Driven (35 min)

### 1.1 Por Que Spec-Driven?

> **Citacao-chave (Al Harris, Amazon Kiro):**
> "O modelo nao sabe o que voce esta construindo. Nao conhece seus requisitos. Nao conhece suas decisoes de design. Entao faz suposicoes, e essas suposicoes estao frequentemente erradas."

**O problema com "vibe coding":**

```
┌─────────────────────────────────────────────────────────────────┐
│  "VIBE CODING" (Anti-padrao)                                    │
│                                                                 │
│  Usuario: "Gere uma minuta de sentenca"                         │
│           ↓                                                     │
│  Agente:  [Gera algo baseado em suposicoes]                     │
│           ↓                                                     │
│  Usuario: "Nao era isso que eu queria"                          │
│           ↓                                                     │
│  Agente:  [Tenta de novo, ainda advinhando]                     │
│           ↓                                                     │
│  [Loop infinito de frustracao]                                  │
└─────────────────────────────────────────────────────────────────┘
```

**A diferenca:**

| Vibe Coding | Vibe Engineering |
|-------------|------------------|
| Nao sabe o que quer | Sabe exatamente o que quer |
| Deixa a IA decidir tudo | Usa IA para acelerar |
| Aceita qualquer output | Valida contra especificacao |
| "Gere algo bom" | "Gere isso com estas regras" |

> **Citacao (Kitze, AI Engineer Summit):**
> "Vibe Coding e quando voce nao sabe o que esta fazendo e deixa a IA fazer tudo. Vibe Engineering e quando voce sabe exatamente o que quer e usa IA para acelerar."

### 1.2 A Estrutura de Tres Fases

**Spec-Driven Development** = Requirements → Design → Tasks

```
┌─────────────────────────────────────────────────────────────────┐
│  FASE 1: REQUIREMENTS                                           │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ User Story: "Como [papel], quero [acao], para [beneficio]"  ││
│  │ Criterios de aceitacao: [lista especifica]                  ││
│  │ Restricoes: [o que NAO fazer]                               ││
│  └─────────────────────────────────────────────────────────────┘│
│                           ↓                                     │
│  FASE 2: DESIGN                                                 │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ Arquitetura: [diagrama ASCII]                               ││
│  │ Estrutura de dados: [formato entrada/saida]                 ││
│  │ Fluxo: [etapas em ordem]                                    ││
│  └─────────────────────────────────────────────────────────────┘│
│                           ↓                                     │
│  FASE 3: TASKS                                                  │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ [ ] Tarefa 1: [atomica, verificavel]                        ││
│  │ [ ] Tarefa 2: [atomica, verificavel]                        ││
│  │ [ ] Tarefa 3: [atomica, verificavel]                        ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

> **Insight (Al Harris):**
> "Se voce acertar o spec, o codigo quase escreve a si mesmo."

### 1.3 Exemplo Pratico: Spec para Gerador de Relatorios

**FASE 1 - Requirements:**
```markdown
## User Story
Como magistrado, quero gerar relatorios estruturados de processos
para ter uma visao rapida dos fatos antes de decidir.

## Criterios de Aceitacao
- [ ] Deve incluir: numero do processo, partes, data de ajuizamento
- [ ] Deve listar fatos em ordem cronologica
- [ ] Deve identificar pedidos do autor
- [ ] Deve listar documentos probatorios anexados
- [ ] Formato: Markdown com secoes numeradas

## Restricoes
- NAO incluir analise juridica (isso e outra etapa)
- NAO citar precedentes (ainda nao e hora)
- NAO fazer juizo de valor sobre os fatos
```

**FASE 2 - Design:**
```
ENTRADA:
└── Arquivo TXT com conteudo do processo (OCR convertido)

SAIDA:
└── relatorio.md com estrutura:
    ├── # RELATORIO
    ├── ## 1. Identificacao
    │   ├── Numero
    │   ├── Partes
    │   └── Data ajuizamento
    ├── ## 2. Fatos (cronologico)
    ├── ## 3. Pedidos
    └── ## 4. Documentos Probatorios
```

**FASE 3 - Tasks:**
```markdown
[ ] T1: Extrair metadados do processo (numero, partes, data)
[ ] T2: Identificar e ordenar fatos cronologicamente
[ ] T3: Listar pedidos do autor
[ ] T4: Catalogar documentos probatorios
[ ] T5: Montar relatorio no formato especificado
[ ] T6: Verificar se todos os campos estao preenchidos
```

### 1.4 O Conceito de "Spec Anchoring"

**Problema:** 6 meses depois, voce olha o codigo e nao sabe por que ele existe.

**Solucao:** Todo codigo gerado e vinculado a spec que o originou.

```
┌─────────────────────────────────────────────────────────────────┐
│  SPEC ANCHORING                                                 │
│                                                                 │
│  Requirement R1: "Extrair numero do processo"                   │
│         ↓                                                       │
│  Task T1: "Usar regex para encontrar padrao XXXXXXX-XX.XXXX"    │
│         ↓                                                       │
│  Codigo: extract_process_number()                               │
│         ↓                                                       │
│  Teste: test_extract_process_number()                           │
│                                                                 │
│  [Tudo rastreavel de volta ao requirement original]             │
└─────────────────────────────────────────────────────────────────┘
```

**Beneficio para manutencao:**
- Mudou um requirement? → Veja TODAS as mudancas de codigo necessarias
- Bug no codigo? → Volte ao requirement para entender a intencao

### 1.5 Exercicio: Especifique Antes de Construir

**Tarefa:** Escreva uma spec de 3 fases para um "Analisador de Precedentes":

```markdown
## REQUIREMENTS
[ Escreva a user story ]
[ Liste 3-5 criterios de aceitacao ]
[ Liste 2-3 restricoes ]

## DESIGN
[ Descreva entrada esperada ]
[ Descreva saida esperada ]
[ Desenhe estrutura em ASCII ]

## TASKS
[ ] T1: ...
[ ] T2: ...
[ ] T3: ...
```

---

## Bloco 2: Anatomia de Skills (40 min)

### 2.1 A Verdade Simples

> **Citacao-chave (Barry Zhang, Anthropic):**
> "Skills are just folders. That's literally all they are."

**Desmistificando:**

```
Skills ≠ Magia complexa
Skills = Pastas com arquivos Markdown contendo expertise

.claude/skills/
└── minha-skill/
    ├── SKILL.md              # Obrigatorio (a expertise real)
    ├── examples/             # Opcional (mostrar o que e bom)
    │   ├── exemplo1.md
    │   └── exemplo2.md
    └── templates/            # Opcional (estruturas reutilizaveis)
        └── template.md
```

### 2.2 A Diferenca: Commands vs Skills

| Aspecto | Command | Skill |
|---------|---------|-------|
| **Invocacao** | Explicita (`/meu-comando`) | Automatica (por contexto) |
| **Tamanho** | Arquivo unico | Pasta com multiplos arquivos |
| **Quando usar** | Tarefas simples ("faca X") | Expertise complexa ("como fazer X bem") |
| **Exemplos** | Opcional | Recomendado |
| **Limite pratico** | < 50 linhas | > 50 linhas ou precisa exemplos |

### 2.3 A Formula do SKILL.md

**Estrutura que o Claude Code respeita:**

```markdown
# [Nome da Skill]

> Descricao de uma linha (o que faz)

## Quando Usar

- Situacao 1
- Situacao 2
- Situacao 3

## Como Funciona

[Explicacao da metodologia/processo - 3-4 paragrafos]

## Regras (CRITICO)

1. SEMPRE faca X
2. NUNCA faca Y
3. PREFIRA Z sobre W

## Formato de Saida

[Template ou estrutura exata esperada]

## Exemplos

### Exemplo 1: [Caso simples]
**Entrada:** [O que voce fornece]
**Saida:** [O que espera receber]

### Exemplo 2: [Caso complexo]
**Entrada:** [O que voce fornece]
**Saida:** [O que espera receber]
```

### 2.4 Dissecar uma Skill Real: relatorio-judicial

**Estrutura atual do projeto CLERK:**

```
.claude/skills/relatorio-judicial/
└── SKILL.md
```

**Anatomia do SKILL.md:**

```markdown
# Skill: Relatorio Judicial

> Gera relatorios judiciais estruturados a partir de documentos
> processuais longos.

## Quando Usar

- Processo com mais de 20 paginas
- Autos digitalizados via OCR
- Necessidade de visao sintetica antes de decidir

## Metodologia: Refinamento Iterativo

Esta skill aplica o metodo de Refinamento Iterativo:

1. LEITURA INICIAL: Ler documento em chunks de 2000 tokens
2. EXTRACAO: Identificar elementos-chave por chunk
3. CONSOLIDACAO: Unir extracoes em estrutura coerente
4. VALIDACAO: Verificar completude contra checklist

## Regras

1. SEMPRE manter neutralidade (sem juizo de valor)
2. NUNCA inventar fatos nao presentes nos autos
3. SEMPRE citar pagina/documento fonte
4. NUNCA incluir analise juridica (etapa posterior)

## Formato de Saida

# RELATORIO
Processo: [NUMERO]
Partes: [AUTOR] vs [REU]

## 1. SINTESE
[3-5 linhas resumindo o caso]

## 2. FATOS RELEVANTES
| Data | Fato | Fonte |
|------|------|-------|
| ...  | ...  | p. X  |

## 3. PEDIDOS
- Pedido 1
- Pedido 2

## 4. DOCUMENTOS PROBATORIOS
- Doc 1 (p. X)
- Doc 2 (p. Y)
```

### 2.5 A Hierarquia de Tres Niveis

```
~/.claude/                          (Preferencias globais)
├── CLAUDE.md                       (Seu estilo: portugues, convencoes)
├── commands/                       (Commands que usa em todo lugar)
│   └── resumir-doc.md
└── skills/                         (Skills globais)
    └── minha-skill/

./projeto/                          (Especifico do projeto)
├── CLAUDE.md                       (Sobrescreve global para este projeto)
├── .claude/commands/               (Commands do projeto)
│   └── pesquisar-jurisprudencia.md
└── .claude/skills/                 (Skills do projeto)
    └── relatorio-judicial/
```

**Precedencia:** Projeto sobrescreve global.

### 2.6 Progressive Disclosure: CLAUDE.md Leve

> **Insight (Barry Zhang):**
> "CLAUDE.md enorme = tokens desperdicados em cada requisicao."

**Anti-padrao:**
```markdown
# CLAUDE.md (2000 linhas)
[Toda a documentacao do projeto embutida]
[API reference completa]
[Exemplos de cada skill]
```

**Padrao correto:**
```markdown
# CLAUDE.md (200-300 linhas)

## Projeto: CLERK

Sistema de analise juridica para casos previdenciarios.

## Contextos

- Arquitetura: Ver `docs/arquitetura.md`
- API: Ver `docs/api.md`
- Skills disponiveis:
  - `relatorio-judicial` - Resumos de processos
  - `elaboracao-minuta` - Minutas de decisao

## Regras Criticas

- SEMPRE verificar precedentes antes de citar
- NUNCA usar linguagem informal em sentencas
- PREFERIR Markdown para todos os outputs
```

### 2.7 Exercicio: Projete Sua Skill

**Tarefa:** Usando a formula, escreva a estrutura de uma skill para "Analise de Contratos":

```markdown
# Skill: Analise de Contratos

> [Uma linha de descricao]

## Quando Usar

- [Situacao 1]
- [Situacao 2]
- [Situacao 3]

## Como Funciona

[Metodologia em 2-3 paragrafos]

## Regras

1. SEMPRE ...
2. NUNCA ...
3. PREFERIR ...

## Formato de Saida

[Template]
```

---

## Bloco 3: Criando Commands (35 min)

### 3.1 O Que Sao Commands

**Commands = Atalhos para instrucoes repetidas**

Em vez de digitar o mesmo prompt toda vez:
```
"Analise este documento juridico e crie um resumo com fatos,
argumentos e conclusoes. Use formato Markdown com secoes
numeradas. Cite a pagina fonte de cada informacao."
```

Voce cria um command e usa:
```
/resumir-juridico path/to/documento.pdf
```

### 3.2 Anatomia de um Command

**Estrutura basica:**

```markdown
# /nome-do-comando

Descricao curta do que faz

---

[Instrucoes completas que seriam o prompt]

$ARGUMENTS
```

**Onde salvar:** `.claude/commands/nome-do-comando.md`

### 3.3 O Padrao de 3 Passos

**Passo 1: Identifique a Tarefa Repetida**

Pergunte-se:
- Que instrucao eu repito mais frequentemente?
- Que prompt eu copio-colo como template?
- Que prompt eu uso palavra-por-palavra?

**Passo 2: Escreva o Arquivo do Command**

```markdown
# /resumir-juridico

Cria resumo estruturado de documentos juridicos

---

Analise o documento juridico fornecido e gere um resumo com:

1. **Informacoes do Caso**
   - Numero do processo
   - Partes envolvidas
   - Jurisdicao

2. **Fatos (cronologico)**
   - Eventos-chave em ordem
   - Datas importantes

3. **Argumentos**
   - Argumentos do autor
   - Resposta do reu (se houver)

4. **Conclusoes**
   - Decisao do juiz (se disponivel)
   - Precedentes citados

Documento para analisar: $ARGUMENTS
```

**Passo 3: Use**

```bash
claude > /resumir-juridico processo-12345.pdf
```

### 3.4 Variaveis em Commands

**$ARGUMENTS** = Tudo que vem depois do comando

```bash
/meu-comando argumento1 argumento2 argumento3
             └──────────────────────────────┘
                     $ARGUMENTS
```

**Multiplos argumentos nomeados (avancado):**

```markdown
# /criar-minuta

---

Crie uma minuta de decisao com os seguintes parametros:

Processo: $1
Tipo de acao: $2
Decisao: $3

[Restante das instrucoes]
```

Uso:
```bash
/criar-minuta "12345-XX.2024" "BPC" "procedente"
```

### 3.5 Commands vs Skills: Quando Usar Cada

```
┌─────────────────────────────────────────────────────────────────┐
│  DECISION TREE: Command ou Skill?                               │
│                                                                 │
│  A tarefa e simples (< 50 linhas)?                              │
│      │                                                          │
│      ├── SIM → Use COMMAND                                      │
│      │                                                          │
│      └── NAO → A tarefa precisa de exemplos?                    │
│               │                                                 │
│               ├── SIM → Use SKILL                               │
│               │                                                 │
│               └── NAO → A tarefa e invocada explicitamente?     │
│                        │                                        │
│                        ├── SIM → Use COMMAND                    │
│                        └── NAO → Use SKILL (auto-detecta)       │
└─────────────────────────────────────────────────────────────────┘
```

### 3.6 Exemplos de Commands Uteis

**Command 1: Pesquisa rapida**
```markdown
# /pesquisar-tema

Pesquisa rapida de precedentes sobre um tema

---

Busque precedentes vinculantes (Temas STF/STJ) sobre:

$ARGUMENTS

Retorne:
- Numero do tema
- Tese firmada (resumida)
- Aplicabilidade ao caso
```

**Command 2: Verificacao de formato**
```markdown
# /verificar-sentenca

Valida formato de sentenca antes de finalizar

---

Verifique se a sentenca segue o formato correto:

1. [ ] Tem RELATORIO?
2. [ ] Tem FUNDAMENTACAO?
3. [ ] Tem DISPOSITIVO?
4. [ ] Cita precedentes corretamente?
5. [ ] Usa linguagem formal?

Sentenca para verificar: $ARGUMENTS

Liste problemas encontrados e sugira correcoes.
```

**Command 3: Conversao de formato**
```markdown
# /para-markdown

Converte documento para Markdown limpo

---

Converta o conteudo fornecido para Markdown:

- Use cabecalhos hierarquicos (#, ##, ###)
- Formate listas corretamente
- Preserve tabelas
- Remova formatacao desnecessaria

Conteudo: $ARGUMENTS
```

### 3.7 Exercicio: Crie Seu Primeiro Command

**Tarefa:** Crie um command para uma tarefa que voce repete frequentemente:

```markdown
# /[nome-do-seu-comando]

[Descricao de uma linha]

---

[Instrucoes completas]

$ARGUMENTS
```

Salve em: `.claude/commands/[nome].md`

---

## Bloco 4: O Padrao RPI (40 min)

### 4.1 O Que e RPI

**RPI = Research → Plan → Implement**

> **Insight das transcricoes:**
> "Os melhores agentes de producao nao eram tao agenticos assim. Eram principalmente software, mas havia esses nucleos de IA fazendo coisas especificas."

```
┌─────────────────────────────────────────────────────────────────┐
│  PADRAO RPI: O Ciclo de Alto Desempenho                         │
│                                                                 │
│  ┌───────────┐                                                  │
│  │  RESEARCH │ ← Entender o problema                            │
│  │           │   Explorar o espaco                              │
│  │           │   Gerar documento de findings                    │
│  └─────┬─────┘                                                  │
│        │                                                        │
│        ▼ [GATE: Humano revisa findings]                         │
│                                                                 │
│  ┌───────────┐                                                  │
│  │   PLAN    │ ← Quebrar em tarefas discretas                   │
│  │           │   Especificar arquivos e linhas                  │
│  │           │   Incluir estrategia de rollback                 │
│  └─────┬─────┘                                                  │
│        │                                                        │
│        ▼ [GATE: Humano aprova plano]                            │
│                                                                 │
│  ┌───────────┐                                                  │
│  │ IMPLEMENT │ ← Seguir plano passo-a-passo                     │
│  │           │   Rodar testes apos cada mudanca                 │
│  │           │   Validar contra requirements                    │
│  └───────────┘                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2 Por Que RPI Funciona

**Problema sem RPI:**
```
Usuario: "Construa um sistema de relatorios"
    ↓
Agente: [Comeca a construir baseado em suposicoes]
    ↓
Usuario: "Nao era isso..."
    ↓
[Desperdicio de tokens e tempo]
```

**Com RPI:**
```
Usuario: "Construa um sistema de relatorios"
    ↓
Agente (RESEARCH): "Encontrei 3 abordagens possiveis..."
    ↓
Usuario: "A abordagem 2 faz mais sentido"
    ↓
Agente (PLAN): "Aqui esta o plano em 7 etapas..."
    ↓
Usuario: "Aprovado, mas ajuste etapa 4"
    ↓
Agente (IMPLEMENT): [Executa plano aprovado]
    ↓
[Resultado alinhado com expectativa]
```

### 4.3 RESEARCH: A Fase de Exploracao

**Objetivo:** Entender o espaco do problema ANTES de construir.

**O que fazer:**
1. Explorar codigo/documentos existentes
2. Identificar padroes e convencoes
3. Mapear dependencias
4. Documentar findings

**Output esperado:**
```markdown
# Findings: [Nome do Projeto]

## 1. Contexto Atual
[O que existe hoje]

## 2. Padroes Identificados
[Convencoes do projeto]

## 3. Dependencias
[O que precisa funcionar junto]

## 4. Riscos e Consideracoes
[Potenciais problemas]

## 5. Abordagens Possiveis
- Abordagem A: [pros/cons]
- Abordagem B: [pros/cons]
- Abordagem C: [pros/cons]

## 6. Recomendacao
[Qual abordagem e por que]
```

### 4.4 PLAN: A Fase de Planejamento

**Objetivo:** Quebrar em tarefas atomicas e verificaveis.

**Caracteristicas de boas tarefas:**
- **Atomicas:** Uma coisa por vez
- **Verificaveis:** Sei quando terminou
- **Estimaveis:** Posso prever esforco
- **Rastreavel:** Vinculada a requirement

**Output esperado:**
```markdown
# Plano de Implementacao: [Nome]

## Arquitetura Proposta
[Diagrama ASCII]

## Tarefas

### Task 1: [Nome]
- **Arquivos:** criar/modificar X
- **Descricao:** [O que fazer]
- **Verificacao:** [Como saber que funcionou]
- **Rollback:** [Como desfazer se der errado]

### Task 2: [Nome]
...

## Ordem de Execucao
1. Task 1 (sem dependencias)
2. Task 2 (depende de Task 1)
3. Task 3 (paralelo com Task 2)

## Pontos de Checkpoint
- Apos Task 2: validar X
- Apos Task 5: rodar testes Y
```

### 4.5 IMPLEMENT: A Fase de Execucao

**Objetivo:** Executar o plano aprovado, com verificacao a cada passo.

**Regras de implementacao:**
1. **Seguir o plano:** Nao improvisar
2. **Verificar a cada passo:** Rodar testes
3. **Documentar desvios:** Se algo mudar, registrar
4. **Checkpoint com humano:** Nos pontos definidos

```
┌─────────────────────────────────────────────────────────────────┐
│  IMPLEMENT: Ciclo por Task                                      │
│                                                                 │
│  Para cada Task no plano:                                       │
│                                                                 │
│  1. EXECUTAR a task                                             │
│         ↓                                                       │
│  2. VERIFICAR resultado                                         │
│         ↓                                                       │
│     Passou? ─── SIM ───→ Proxima task                           │
│         │                                                       │
│        NAO                                                      │
│         │                                                       │
│         ↓                                                       │
│  3. DIAGNOSTICAR falha                                          │
│         ↓                                                       │
│  4. CORRIGIR ou ROLLBACK                                        │
│         ↓                                                       │
│  5. RE-VERIFICAR                                                │
└─────────────────────────────────────────────────────────────────┘
```

### 4.6 RPI no Claude Code: Skills que Implementam

O Claude Code ja tem skills que seguem RPI:

**Skill: writing-plans**
- Cria planos detalhados (fase PLAN do RPI)
- Tasks atomicas com arquivos especificos
- Checkpoints definidos

**Skill: feature-dev**
- Ciclo completo Research → Plan → Implement
- Gates entre fases
- Documentacao automatica

### 4.7 Exercicio: Aplique RPI

**Tarefa:** Para o "Analisador de Precedentes" que voce especificou no Bloco 1:

**RESEARCH:**
```markdown
## Findings
- Bases disponiveis: BNP, CJF, JULIA
- Operadores variam por base
- Sintaxe: [documentar]

## Abordagens
A: Buscar em todas as bases paralelamente
B: Buscar hierarquicamente (BNP → CJF → JULIA)
C: Buscar apenas na base mais relevante

## Recomendacao: [escolha e justifique]
```

**PLAN:**
```markdown
## Tarefas
[ ] T1: Identificar tema juridico da consulta
[ ] T2: Selecionar base(s) apropriada(s)
[ ] T3: Formular query com operadores corretos
[ ] T4: Executar busca
[ ] T5: Filtrar e rankear resultados
[ ] T6: Formatar output
```

---

## Bloco 5: Prompt Learning Loop (35 min)

### 5.1 O Insight Fundamental

> **Citacao (SallyAnn DeLucia, Arize):**
> "As instrucoes humanas de por que falhou... Esse texto e realmente muito valioso."

**O problema:** Prompts nao sao escritos uma vez - sao aprendidos atraves de iteracao.

```
┌─────────────────────────────────────────────────────────────────┐
│  PROMPT LEARNING LOOP                                           │
│                                                                 │
│  1. ESCREVER prompt inicial                                     │
│         │                                                       │
│         ▼                                                       │
│  2. RODAR com exemplos (3-5 casos de teste)                     │
│         │                                                       │
│         ▼                                                       │
│  3. AVALIAR resultados                                          │
│         │                                                       │
│         ├── O que funcionou?                                    │
│         └── O que falhou?                                       │
│         │                                                       │
│         ▼                                                       │
│  4. REFINAR prompt baseado em falhas                            │
│         │                                                       │
│         ▼                                                       │
│  5. REPETIR ate qualidade consistente                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 5.2 Overfitting = Expertise

> **Insight contra-intuitivo:**
> "Quando voce otimiza um prompt extensivamente para exemplos especificos, voce nao esta 'overfitting' - esta construindo expertise. O prompt aprende seu dominio."

**Por que funciona:**
- Seu dominio tem padroes especificos
- Prompts genericos nao conhecem esses padroes
- Otimizacao repetida ENSINA os padroes ao prompt

### 5.3 O Ciclo Pratico

**Para sua primeira skill, use este ciclo:**

```
ITERACAO 1:
├── Prompt inicial: "Gere um resumo juridico"
├── Teste: 3 documentos reais
├── Resultado: 2 bons, 1 ruim
└── Analise: "O prompt perde informacoes de danos"

ITERACAO 2:
├── Prompt refinado: + secao explicita "DANOS E PEDIDOS"
├── Teste: mesmos 3 documentos
├── Resultado: 3 bons
└── Analise: "Formato inconsistente"

ITERACAO 3:
├── Prompt refinado: + template de formato rigido
├── Teste: 5 documentos (incluindo novos)
├── Resultado: 5 bons
└── Conclusao: Prompt estavel
```

### 5.4 Feedback Especifico vs Generico

**Feedback FRACO:**
```
"O resumo nao esta bom. Tente de novo."
```

**Feedback FORTE:**
```
"O resumo esta faltando:
1. O valor dos danos (R$ 50.000) - mencione na secao PEDIDOS
2. A data do acidente (15/03/2022) - adicione na CRONOLOGIA
3. O precedente Tema 173 - cite na secao FUNDAMENTACAO

Alem disso, o formato da tabela esta incorreto:
- Use | para separar colunas
- Inclua linha de cabecalho"
```

> **Regra:** Quanto mais especifico o feedback, mais rapido o aprendizado.

### 5.5 Metricas para o Loop

**O que medir a cada iteracao:**

| Metrica | O que significa | Como medir |
|---------|-----------------|------------|
| **Taxa de sucesso** | % de outputs aceitaveis | Sucesso / Total |
| **Completude** | Todos os campos preenchidos? | Checklist |
| **Formato** | Segue o template? | Comparacao |
| **Precisao** | Informacoes corretas? | Verificacao manual |

### 5.6 O Ponto de Parada

**Quando parar de iterar:**

```
┌─────────────────────────────────────────────────────────────────┐
│  CRITERIOS DE CONVERGENCIA                                      │
│                                                                 │
│  [ ] 5 sucessos consecutivos em documentos diferentes           │
│  [ ] Taxa de sucesso > 90% em 10 testes                         │
│  [ ] Nenhuma falha critica nas ultimas 5 iteracoes              │
│  [ ] Formato consistente em todos os outputs                    │
│                                                                 │
│  Se TODOS marcados → Prompt estavel, pode usar em producao      │
└─────────────────────────────────────────────────────────────────┘
```

### 5.7 Exercicio: Uma Iteracao Completa

**Tarefa:** Pegue a skill que voce projetou e faca UMA iteracao do loop:

```markdown
## Iteracao 1

### Prompt Inicial
[Cole seu SKILL.md aqui]

### Teste
- Documento 1: [resultado]
- Documento 2: [resultado]
- Documento 3: [resultado]

### Analise de Falhas
- Falha 1: [o que deu errado]
- Falha 2: [o que deu errado]

### Refinamento Proposto
[O que mudar no prompt]
```

---

## Bloco 6: Debugging e Iteracao (40 min)

### 6.1 O Framework de Custo do Erro

> **Citacao (Barry Zhang, Anthropic):**
> "Custo do erro e descoberta do erro - Se seus erros vao ser de alto risco e muito dificeis de descobrir, vai ser muito dificil confiar no agente."

**Mapeie suas tarefas:**

| Tarefa | Custo do Erro | Padrao | Checkpoint |
|--------|---------------|--------|------------|
| Ler PDF | Baixo | HOOTL | Apenas no fim |
| Elaborar minuta | Alto | HITL | Antes de salvar |
| Revisar precedentes | Medio | HOTL | 10% amostra |
| Gerar relatorio | Medio | HOTL | Por excecao |

**Legenda:**
- **HITL:** Human-in-the-Loop (revisao obrigatoria)
- **HOTL:** Human-on-the-Loop (amostragem)
- **HOOTL:** Human-out-of-the-Loop (automatico)

### 6.2 O Checklist de Debugging

**Quando o agente falha:**

```
┌─────────────────────────────────────────────────────────────────┐
│  DEBUGGING WORKFLOW                                             │
│                                                                 │
│  PASSO 1: PARE (nao entre em panico, nao itere cegamente)       │
│                                                                 │
│  PASSO 2: ENTENDA                                               │
│           - Qual era a tarefa?                                  │
│           - O que foi produzido?                                │
│           - O que deu errado?                                   │
│                                                                 │
│  PASSO 3: ISOLE                                                 │
│           - E um problema de prompt?                            │
│           - E um problema de contexto?                          │
│           - E um problema de ferramenta/permissao?              │
│                                                                 │
│  PASSO 4: TESTE                                                 │
│           - Rode o agente com input simplificado                │
│           - Verifique cada componente separadamente             │
│                                                                 │
│  PASSO 5: CORRIJA                                               │
│           - Ajuste spec/prompt                                  │
│           - Adicione mais contexto                              │
│           - Mude estrategia de checkpoint                       │
│                                                                 │
│  PASSO 6: VERIFIQUE                                             │
│           - Teste a correcao                                    │
│           - Funcionou?                                          │
│           - Pode falhar de forma nova?                          │
│                                                                 │
│  PASSO 7: DOCUMENTE                                             │
│           - Por que falhou?                                     │
│           - Como corrigiu?                                      │
│           - O que mudou?                                        │
└─────────────────────────────────────────────────────────────────┘
```

### 6.3 Os 10 Erros Mais Comuns

**Erro 1: Vibe Coding (Nao Vibe Engineering)**

```
❌ ERRADO:
"Gere uma minuta para BPC."
[Aceita qualquer output]

✅ CERTO:
"Gere uma minuta para BPC com estas specs:
- Requerente: Maria Silva, 68 anos
- Questao-chave: Requisito de idade
- Deve citar: Tema 173 (STF)
- Formato: Markdown com citacoes ABNT"
```

**Erro 2: Nenhum Checkpoint para Decisoes de Alto Risco**

```
❌ ERRADO (autonomo sem supervisao):
Deixar agente escrever e enviar documentos juridicos sem revisao.

✅ CERTO (checkpoints calibrados):
if risco_erro > 0.7:
    pedir revisao humana antes da acao
```

**Erro 3: Stack Traces Completos no Feedback**

```
❌ ERRADO:
Claude >> [500 linhas de stack trace]
"Corrija este erro"

✅ CERTO:
Claude >> [2-3 linhas de resumo]
"O erro aconteceu porque X. Para corrigir, tente Y.
Linha especifica: linha 47 em process_pdf()"
```

**Erro 4: CLAUDE.md Inchado**

```
❌ ERRADO:
CLAUDE.md com 2000 linhas de documentacao embutida
→ Agente fica confuso, tokens desperdicados

✅ CERTO:
CLAUDE.md com 250 linhas + referencias a docs externos
→ Agente ainda acessa detalhes quando precisa
```

**Erro 5: Pular a Fase de Planejamento**

```
❌ ERRADO (vai direto para implementacao):
> Gere a minuta completa
[Agente advinha a estrutura]

✅ CERTO (Research → Plan → Implement):
> Primeiro, qual estrutura esta minuta deve ter?
[Agente propoe outline]
> Aprovar outline
[Agente implementa com estrutura aprovada]
```

**Erro 6: Sem Spec Antes de Construir**

```
❌ ERRADO:
"Construa um gerador de relatorios"
[Agente advinha o que "relatorio" significa]

✅ CERTO:
"Construa um gerador de relatorios com estas specs:
- Secao 1: Metadados do processo (numero, partes, data)
- Secao 2: Cronologia dos fatos
- Secao 3: Questoes juridicas (lista)
- Secao 4: Provas (com referencias)"
```

**Erro 7: Um Prompt Monolitico**

```
❌ ERRADO:
Um prompt de 500 linhas tentando fazer tudo

✅ CERTO:
Multiplos commands/skills focados:
- /extrair-fatos
- /identificar-questoes
- /citar-precedentes
- /minutar-decisao
```

**Erro 8: Testar Apenas no Final**

```
❌ ERRADO:
Construir agente completo → Testar → Encontrar 10 bugs → Recomecar

✅ CERTO:
Testar APOS CADA PASSO:
1. Extrair fatos → Verificar fatos extraidos corretamente
2. Identificar questoes → Verificar questoes identificadas
3. Minutar decisao → Verificar minuta valida
```

**Erro 9: Confiar no Agente Sem Verificacao**

```
❌ ERRADO (autonomia L5 sem justificativa):
Permitir agente escrever e enviar documentos sem supervisao

✅ CERTO (autonomia graduada):
Comecar em L2 (agente propoe, humano decide)
↓
Mover para L3 (agente executa, humano aprova decisoes)
↓
So graduar para L4+ apos sucesso consistente
```

**Erro 10: Nao Documentar Por Que Falhou**

```
❌ ERRADO:
Agente falha → Deletar tentativa → Recomecar

✅ CERTO:
Agente falha → Documentar falha → Aprender por que → Corrigir raiz
→ Adicionar teste para prevenir regressao
```

### 6.4 Padroes de Iteracao

**Padrao A: Refinamento de 3 Passos**

```
1. BASELINE: Fazer algo funcionar (mesmo que grosseiro)
2. MEDICAO: Avaliar contra spec
3. MELHORIA DIRECIONADA: Corrigir o problema #1, re-medir
4. REPETIR ate score aceitavel
```

**Padrao B: Aneis Concentricos**

```
Anel 1: Fazer o caminho feliz funcionar
Anel 2: Adicionar tratamento de erros
Anel 3: Adicionar casos de borda
Anel 4: Otimizar para velocidade/custo
Anel 5: Documentar e arquivar
```

### 6.5 Exercicio: Debug uma Falha

**Cenario:** Seu agente de relatorios esta gerando outputs incompletos.

**Aplique o checklist:**

```markdown
## Passo 1: Entender
- Tarefa: [descreva]
- Output produzido: [descreva]
- O que deu errado: [descreva]

## Passo 2: Isolar
- [ ] Problema de prompt?
- [ ] Problema de contexto?
- [ ] Problema de ferramenta?

## Passo 3: Testar
- Teste com input simplificado: [resultado]

## Passo 4: Corrigir
- Ajuste proposto: [descreva]

## Passo 5: Verificar
- Resultado apos correcao: [descreva]

## Passo 6: Documentar
- Causa raiz: [descreva]
- Solucao: [descreva]
```

---

## Bloco 7: Projeto Pratico Guiado (45 min)

### 7.1 O Projeto: "Assistente de Triagem"

Vamos construir juntos um sistema completo usando tudo que aprendemos:

**Objetivo:** Criar um assistente que faz triagem inicial de processos, identificando:
- Tipo de acao (BPC, auxilio-doenca, pensao por morte)
- Complexidade (trivial vs hard case)
- Proximos passos recomendados

### 7.2 Fase 1: Spec-Driven (15 min)

**REQUIREMENTS:**

```markdown
## User Story
Como magistrado, quero que o sistema faca triagem inicial de processos
para priorizar meu tempo em casos complexos.

## Criterios de Aceitacao
- [ ] Identificar tipo de acao corretamente em 95% dos casos
- [ ] Classificar complexidade (TRIVIAL/HARD CASE)
- [ ] Listar 3-5 proximos passos recomendados
- [ ] Formato: Markdown estruturado

## Restricoes
- NAO tomar decisoes (apenas triagem)
- NAO citar precedentes ainda
- NAO gerar minuta
```

**DESIGN:**

```
ENTRADA:
└── Arquivo TXT com peticao inicial

PROCESSAMENTO:
├── Extrair tipo de acao (palavras-chave)
├── Identificar indicadores de complexidade
└── Mapear para recomendacoes

SAIDA:
└── triagem.md
    ├── ## Tipo de Acao
    ├── ## Complexidade
    ├── ## Justificativa
    └── ## Proximos Passos
```

**TASKS:**

```markdown
[ ] T1: Criar lista de palavras-chave por tipo de acao
[ ] T2: Definir criterios de complexidade
[ ] T3: Escrever SKILL.md com metodologia
[ ] T4: Criar 2 exemplos (trivial e hard case)
[ ] T5: Testar com 3 documentos reais
[ ] T6: Refinar baseado em falhas
```

### 7.3 Fase 2: Construir a Skill (15 min)

**Arquivo:** `.claude/skills/triagem-processos/SKILL.md`

```markdown
# Skill: Triagem de Processos

> Faz triagem inicial de processos previdenciarios,
> classificando tipo e complexidade.

## Quando Usar

- Processo novo recebido
- Necessidade de priorizacao
- Redistribuicao de acervo

## Metodologia

### Passo 1: Identificar Tipo de Acao
Buscar palavras-chave:
- BPC/LOAS: "beneficio assistencial", "idoso", "deficiente", "miserabilidade"
- Auxilio-doenca: "incapacidade", "pericia", "doenca", "afastamento"
- Aposentadoria: "tempo de contribuicao", "idade", "especial"
- Pensao por morte: "obito", "dependente", "pensao"

### Passo 2: Avaliar Complexidade
TRIVIAL se TODOS:
- [ ] Tipo de acao claro
- [ ] Fatos incontroversos
- [ ] Precedente aplicavel diretamente
- [ ] Sem questoes de prova complexas

HARD CASE se QUALQUER:
- [ ] Questao juridica nova
- [ ] Fatos controversos
- [ ] Multiplas teses possiveis
- [ ] Provas conflitantes

### Passo 3: Recomendar Proximos Passos
Baseado na classificacao, sugerir:
- Para TRIVIAL: fluxo automatizado
- Para HARD CASE: analise aprofundada

## Regras

1. SEMPRE justificar a classificacao
2. NUNCA decidir (apenas triar)
3. SEMPRE listar proximos passos
4. PREFERIR TRIVIAL quando na duvida (erro seguro)

## Formato de Saida

# TRIAGEM PROCESSUAL

## 1. Identificacao
- Processo: [numero]
- Data triagem: [data]

## 2. Tipo de Acao
**[TIPO]**
Justificativa: [por que este tipo]

## 3. Complexidade
**[TRIVIAL/HARD CASE]**
Justificativa: [criterios aplicados]

## 4. Proximos Passos
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

---
*Triagem automatica - revisar antes de prosseguir*
```

### 7.4 Fase 3: Testar e Iterar (15 min)

**Prompt Learning Loop:**

```
TESTE 1: Processo BPC (trivial)
├── Input: peticao_bpc_simples.txt
├── Output esperado: BPC, TRIVIAL
├── Output real: [verificar]
└── Status: [ ] OK [ ] Ajustar

TESTE 2: Processo pensao (complexo)
├── Input: peticao_pensao_uniao_homoafetiva.txt
├── Output esperado: Pensao, HARD CASE
├── Output real: [verificar]
└── Status: [ ] OK [ ] Ajustar

TESTE 3: Processo misto
├── Input: peticao_bpc_com_questao_nova.txt
├── Output esperado: BPC, HARD CASE
├── Output real: [verificar]
└── Status: [ ] OK [ ] Ajustar
```

**Se falhar, aplicar debugging:**
1. Qual teste falhou?
2. Por que falhou?
3. O que ajustar na skill?
4. Re-testar

### 7.5 Criar Command para Invocar

**Arquivo:** `.claude/commands/triar-processo.md`

```markdown
# /triar-processo

Faz triagem inicial de um processo previdenciario

---

Use a skill de triagem-processos para analisar o documento fornecido.

Identifique:
1. Tipo de acao
2. Complexidade (TRIVIAL ou HARD CASE)
3. Proximos passos recomendados

Documento: $ARGUMENTS
```

**Uso:**
```bash
claude > /triar-processo processo-12345.txt
```

### 7.6 Checklist de Conclusao

```markdown
## Projeto Completo?

### Spec-Driven
- [ ] Requirements documentados
- [ ] Design com entrada/saida claros
- [ ] Tasks atomicas listadas

### Skill
- [ ] SKILL.md criado
- [ ] Metodologia documentada
- [ ] Regras explicitas (SEMPRE/NUNCA)
- [ ] Formato de saida definido

### Command
- [ ] Command criado para invocar
- [ ] $ARGUMENTS corretamente usado

### Testes
- [ ] 3+ documentos testados
- [ ] Falhas identificadas e corrigidas
- [ ] Taxa de sucesso > 80%

### Documentacao
- [ ] CLAUDE.md atualizado com referencia
- [ ] Exemplos de uso documentados
```

---

## Sintese: O Que Aprendemos

### Conceitos-Chave

| Conceito | O Que E | Quando Usar |
|----------|---------|-------------|
| **Spec-Driven** | Requirements → Design → Tasks | Antes de construir QUALQUER coisa |
| **Skill** | Pasta com expertise reutilizavel | Tarefas complexas e recorrentes |
| **Command** | Atalho para prompt repetido | Tarefas simples e frequentes |
| **RPI** | Research → Plan → Implement | Projetos de media/alta complexidade |
| **Prompt Learning Loop** | Iteracao com feedback especifico | Otimizacao continua de prompts |

### Citacoes para Lembrar

> "Skills are just folders." - Barry Zhang

> "Se voce acertar o spec, o codigo quase escreve a si mesmo." - Al Harris

> "Vibe Engineering e quando voce sabe exatamente o que quer e usa IA para acelerar." - Kitze

> "As instrucoes humanas de por que falhou... Esse texto e realmente muito valioso." - SallyAnn DeLucia

### Checklist do Construtor de Agentes

```
Antes de construir:
[ ] Tenho spec clara? (Requirements, Design, Tasks)
[ ] Sei se preciso de Skill ou Command?
[ ] Defini formato de saida?

Durante a construcao:
[ ] Estou seguindo RPI? (Research → Plan → Implement)
[ ] Tenho checkpoints entre fases?
[ ] Estou testando incrementalmente?

Apos construir:
[ ] Testei com 3+ casos reais?
[ ] Documentei falhas e correcoes?
[ ] Prompt esta estavel (5 sucessos consecutivos)?
```

---

## Proximos Passos

Na **Aula 5**, aplicaremos tudo isso ao **Sistema Juridico Agentico**:
- MCPs de precedentes (BNP, JULIA, CJF)
- Pipeline completo: Baixar → Converter → Relatar → Analisar → Minutar
- Revisao com subagentes paralelos
- O sistema CLERK em acao

---

*Aula 4 concluida - Construindo os Primeiros Agentes*
*Curso de Sistemas Agenticos para Juristas*
