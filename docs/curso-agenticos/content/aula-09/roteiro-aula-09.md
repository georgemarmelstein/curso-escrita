# Aula 9: Engenharia de Workflows

> **Módulo 2: Prompts Agênticos**
>
> Como orquestrar capacidades em pipelines determinísticos com checkpoints, gates e tratamento de erros estruturado.

---

## Índice

1. [Introdução](#introducao)
2. [Bloco 0: O Usuário como Arquiteto do Workflow](#bloco-0)
3. [Bloco 1: Pipelines vs Agência Livre](#bloco-1)
4. [Bloco 2: Padrão RPI - Research, Plan, Implement](#bloco-2)
5. [Bloco 3: Checkpoints e Gates](#bloco-3)
6. [Bloco 4: Error Handling Estruturado](#bloco-4)
7. [Bloco 5: Framework de Custo do Erro](#bloco-5)
8. [Bloco 6: Meta-Workflow - Ferramentas para Construir Workflows](#bloco-6)
9. [Síntese e Próximos Passos](#sintese)

---

## Objetivos de Aprendizagem

Ao final desta aula, você será capaz de:

1. **Pensar como arquiteto** - Entender que toda tarefa tem Entrada → Processo → Saída
2. **Projetar pipelines determinísticos** com etapas bem definidas
3. **Aplicar o padrão RPI** (Research → Plan → Implement)
4. **Inserir checkpoints** nos pontos corretos do workflow
5. **Implementar tratamento de erros** estruturado
6. **Avaliar risco** e definir nível de supervisão apropriado
7. **Usar ferramentas colaborativas** (Brainstorming, Writing Plans, Feature Dev)

---

<a name="introducao"></a>
## Introdução: Da Capacidade ao Workflow

Nas aulas anteriores, aprendemos a criar **capacidades individuais** (Commands e Skills). Agora vamos aprender a **orquestrar** essas capacidades em workflows completos.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    DA CAPACIDADE AO WORKFLOW                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   CAPACIDADES ISOLADAS:                                                     │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐                    │
│   │ Command  │  │  Skill   │  │ Command  │  │  Skill   │                    │
│   │ /relatar │  │ análise  │  │ /minutar │  │ revisão  │                    │
│   └──────────┘  └──────────┘  └──────────┘  └──────────┘                    │
│                                                                             │
│   WORKFLOW ORQUESTRADO:                                                     │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐              │
│   │ /relatar │ →  │ análise  │ →  │ /minutar │ →  │ revisão  │              │
│   └────┬─────┘    └────┬─────┘    └────┬─────┘    └────┬─────┘              │
│        │               │               │               │                    │
│        ▼               ▼               ▼               ▼                    │
│   relatorio.md    analise.md      minuta.md      sentenca.md                │
│                                                                             │
│   BENEFÍCIOS DO WORKFLOW:                                                   │
│   • Previsibilidade: mesma sequência toda vez                               │
│   • Auditabilidade: cada etapa produz artefato                              │
│   • Controle: checkpoints em pontos críticos                                │
│   • Reutilização: workflow aplicável a múltiplos casos                      │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### O Trade-off Central

Esta aula aborda o trade-off fundamental em sistemas agênticos:

| Abordagem | Vantagem | Desvantagem |
|-----------|----------|-------------|
| **Agência Livre** | Flexibilidade, adaptação | Imprevisível, difícil auditar |
| **Pipeline Rígido** | Previsível, auditável | Inflexível, pode não se adaptar |
| **Híbrido** | Melhor dos dois mundos | Mais complexo de projetar |

> *"Os melhores agentes de produção não eram tão agênticos assim. Eram principalmente software, mas havia esses núcleos de IA fazendo coisas específicas."*
> — Insight das transcrições AI Engineer Summit 2024

---

<a name="bloco-0"></a>
## Bloco 0: O Usuário como Arquiteto do Workflow (~20 min)

### 0.1 O Princípio Fundamental

Antes de qualquer técnica, antes de qualquer ferramenta, existe um princípio que o usuário precisa internalizar:

> **"Toda etapa, toda tarefa, todo sistema pressupõe um mecanismo de ENTRADA, PROCESSAMENTO e SAÍDA."**

Este é o DNA de qualquer workflow. Se você não consegue articular claramente esses três componentes para cada etapa do seu sistema, você não tem um workflow — você tem esperança.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│              O ÁTOMO DE QUALQUER SISTEMA AGÊNTICO                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                   ┌─────────────────────────────────────┐                   │
│                   │                                     │                   │
│    ENTRADA ─────► │          PROCESSAMENTO              │ ─────► SAÍDA      │
│                   │                                     │                   │
│                   └─────────────────────────────────────┘                   │
│                                                                             │
│    O que entra?      O que acontece dentro?              O que sai?         │
│    • Formato         • Quais transformações?            • Formato           │
│    • Conteúdo        • Quais decisões?                  • Conteúdo          │
│    • Origem          • Quais validações?                • Destino           │
│                                                                             │
│    EXEMPLO - Etapa "Gerar Relatório":                                       │
│    ─────────────────────────────────────                                    │
│    ENTRADA:          PROCESSAMENTO:              SAÍDA:                     │
│    processo.txt      • Extrair fatos            relatorio.md                │
│    (petição +        • Identificar pedidos      • RELATÓRIO estruturado     │
│     contestação)     • Mapear provas            • Todos pedidos listados    │
│                      • Estruturar seções        • Cronologia clara          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 0.2 A Clareza de Pensamento Necessária

O usuário é o **arquiteto do sistema**. A máquina é a **construtora**. Mas se o arquiteto entrega uma planta confusa, a construtora vai construir algo confuso.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                 CLAREZA DO ARQUITETO                                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   O ARQUITETO (usuário) PRECISA SABER:                                      │
│   ─────────────────────────────────────                                     │
│                                                                             │
│   1. QUAL É O RESULTADO FINAL?                                              │
│      "Quero uma sentença completa" ← Específico                             │
│      "Quero algo sobre o processo" ← Vago demais                            │
│                                                                             │
│   2. QUAIS SÃO AS ETAPAS INTERMEDIÁRIAS?                                    │
│      "Primeiro relatório, depois análise, depois minuta" ← Claro            │
│      "Processa aí" ← Sem direção                                            │
│                                                                             │
│   3. O QUE CADA ETAPA RECEBE E ENTREGA?                                     │
│      "Relatório recebe TXT, entrega MD estruturado" ← Contrato claro        │
│      "Faz um relatório" ← Sem contrato                                      │
│                                                                             │
│   4. ONDE PRECISO INTERVIR?                                                 │
│      "Antes de minutar, quero aprovar a análise" ← Checkpoint definido      │
│      "Me avisa quando terminar" ← Sem controle                              │
│                                                                             │
│   SEM ESSA CLAREZA:                                                         │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ • O sistema não sabe quando parar                                   │   │
│   │ • As saídas são inconsistentes                                      │   │
│   │ • Você não consegue debugar                                         │   │
│   │ • Não há como medir qualidade                                       │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 0.3 O Contrato de Cada Etapa

Cada etapa do seu workflow deve ter um **contrato explícito**:

| Componente | Pergunta | Exemplo |
|------------|----------|---------|
| **ENTRADA** | O que essa etapa recebe? | Arquivo TXT com petição inicial |
| **PROCESSO** | O que ela faz com isso? | Extrai fatos, identifica pedidos |
| **SAÍDA** | O que ela produz? | Arquivo MD com relatório estruturado |
| **VALIDAÇÃO** | Como sei que funcionou? | Tem todas as seções obrigatórias |
| **ERRO** | O que acontece se falhar? | Escala para humano após 3 tentativas |

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    CONTRATO COMPLETO DE UMA ETAPA                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ETAPA: Gerar Relatório Processual                                         │
│   ════════════════════════════════════                                      │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ ENTRADA                                                             │   │
│   ├─────────────────────────────────────────────────────────────────────┤   │
│   │ • Arquivo: processo.txt                                             │   │
│   │ • Formato: TXT (convertido de PDF)                                  │   │
│   │ • Conteúdo mínimo: petição inicial + contestação                    │   │
│   │ • Tamanho máximo: 500KB                                             │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                           │                                                 │
│                           ▼                                                 │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ PROCESSAMENTO                                                       │   │
│   ├─────────────────────────────────────────────────────────────────────┤   │
│   │ 1. Identificar partes (autor, réu)                                  │   │
│   │ 2. Extrair fatos narrados                                           │   │
│   │ 3. Listar pedidos do autor                                          │   │
│   │ 4. Resumir contestação do réu                                       │   │
│   │ 5. Mapear provas documentais                                        │   │
│   │ 6. Montar cronologia                                                │   │
│   │ 7. Estruturar em seções padronizadas                                │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                           │                                                 │
│                           ▼                                                 │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ SAÍDA                                                               │   │
│   ├─────────────────────────────────────────────────────────────────────┤   │
│   │ • Arquivo: relatorio.md                                             │   │
│   │ • Formato: Markdown estruturado                                     │   │
│   │ • Seções obrigatórias:                                              │   │
│   │   - PARTES                                                          │   │
│   │   - FATOS                                                           │   │
│   │   - PEDIDOS                                                         │   │
│   │   - CONTESTAÇÃO                                                     │   │
│   │   - PROVAS                                                          │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                           │                                                 │
│                           ▼                                                 │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ VALIDAÇÃO                                                           │   │
│   ├─────────────────────────────────────────────────────────────────────┤   │
│   │ • Todas as 5 seções presentes?                                      │   │
│   │ • Pelo menos 1 pedido identificado?                                 │   │
│   │ • Partes nomeadas corretamente?                                     │   │
│   │ • Arquivo salvo no local correto?                                   │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 0.4 Da Visão ao Workflow

O usuário precisa fazer o caminho da **visão abstrata** ao **workflow concreto**:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    DA VISÃO AO WORKFLOW                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   NÍVEL 1: VISÃO (o que você quer)                                          │
│   ─────────────────────────────────────                                     │
│   "Quero automatizar a elaboração de sentenças de BPC"                      │
│                                                                             │
│                           │                                                 │
│                           ▼                                                 │
│                                                                             │
│   NÍVEL 2: ETAPAS (como você vai conseguir)                                 │
│   ─────────────────────────────────────────────                             │
│   1. Preparar processo (PDF → TXT)                                          │
│   2. Gerar relatório estruturado                                            │
│   3. Pesquisar precedentes aplicáveis                                       │
│   4. Classificar caso (trivial vs hard case)                                │
│   5. Elaborar fundamentação                                                 │
│   6. Redigir dispositivo                                                    │
│   7. Revisar sentença                                                       │
│                                                                             │
│                           │                                                 │
│                           ▼                                                 │
│                                                                             │
│   NÍVEL 3: CONTRATOS (o que cada etapa faz)                                 │
│   ─────────────────────────────────────────────                             │
│   Para CADA etapa acima:                                                    │
│   • Entrada: [especificar]                                                  │
│   • Processamento: [especificar]                                            │
│   • Saída: [especificar]                                                    │
│   • Validação: [especificar]                                                │
│                                                                             │
│                           │                                                 │
│                           ▼                                                 │
│                                                                             │
│   NÍVEL 4: WORKFLOW (orquestração)                                          │
│   ─────────────────────────────────────                                     │
│   • Ordem de execução                                                       │
│   • Gates entre etapas                                                      │
│   • Tratamento de erros                                                     │
│   • Pontos de checkpoint                                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 0.5 Exercício: Articule Seu Workflow

**Tarefa:** Para uma tarefa do seu domínio, preencha:

```
MINHA TAREFA: ________________________________

RESULTADO FINAL DESEJADO: ________________________________

ETAPAS INTERMEDIÁRIAS:
1. _________________ → Entrada: _______ | Saída: _______
2. _________________ → Entrada: _______ | Saída: _______
3. _________________ → Entrada: _______ | Saída: _______
4. _________________ → Entrada: _______ | Saída: _______

ONDE PRECISO INTERVIR (checkpoints):
- Após etapa ___: para validar _______
- Após etapa ___: para aprovar _______

SE FALHAR:
- Após ___ tentativas, escalar para: _______
```

> **Regra de Ouro:** Se você não consegue preencher esse formulário, você ainda não está pronto para construir o workflow. Volte à prancheta.

---

<a name="bloco-1"></a>
## Bloco 1: Pipelines vs Agência Livre (~25 min)

### 1.1 O Espectro de Controle

Sistemas agênticos existem em um espectro entre controle total e agência total:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                     ESPECTRO DE CONTROLE                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   CONTROLE TOTAL                                    AGÊNCIA TOTAL           │
│   ◄────────────────────────────────────────────────────────────────►        │
│                                                                             │
│   ┌────────────┐   ┌────────────┐   ┌────────────┐   ┌────────────┐        │
│   │  PIPELINE  │   │ PIPELINE   │   │ WORKFLOW   │   │  AGÊNCIA   │        │
│   │  RÍGIDO    │   │ COM GATES  │   │ HÍBRIDO    │   │   LIVRE    │        │
│   └────────────┘   └────────────┘   └────────────┘   └────────────┘        │
│                                                                             │
│   Características:                                                          │
│   • Sequência      • Sequência      • Sequência      • Sem sequência        │
│     fixa             fixa             com bolsões      definida             │
│   • Sem decisões   • Gates entre    • IA decide       • IA decide           │
│     da IA            etapas           dentro bolsões   tudo                 │
│   • Previsível     • Previsível     • Parcialmente    • Imprevisível        │
│   • Inflexível     • Controlado     • Flexível        • Adaptável           │
│                                                                             │
│   Uso típico:                                                               │
│   • Processamento  • Análise com    • Casos           • Exploração          │
│     de formulários   revisão          judiciais        de problemas         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.2 Workflows com "Bolsões Agênticos"

A abordagem recomendada combina estrutura determinística com flexibilidade localizada:

> *"Workflows com bolsões agênticos - estrutura rígida no geral, inteligência criativa onde necessário."*
> — Dex Horthy, 12 Factor Agents (AI Engineer Summit 2024)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                   WORKFLOW COM BOLSÕES AGÊNTICOS                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                                                                     │   │
│   │  ENTRADA ─────► [ETAPA 1] ─────► [ETAPA 2] ─────► SAÍDA             │   │
│   │                 (rígida)         (agêntica)       (rígida)          │   │
│   │                                                                     │   │
│   │                     │               │               │               │   │
│   │                     │               │               │               │   │
│   │                     ▼               ▼               ▼               │   │
│   │              ┌───────────┐   ┌───────────┐   ┌───────────┐         │   │
│   │              │ Extração  │   │  Análise  │   │ Validação │         │   │
│   │              │ de dados  │   │  criativa │   │  de saída │         │   │
│   │              │ (script)  │   │   (IA)    │   │  (regras) │         │   │
│   │              └───────────┘   └───────────┘   └───────────┘         │   │
│   │                                                                     │   │
│   │              Determinístico    Bolsão         Determinístico        │   │
│   │              (previsível)      Agêntico       (previsível)          │   │
│   │                                (criativo)                           │   │
│   │                                                                     │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   ONDE USAR CADA:                                                           │
│   • Determinístico: extração, validação, formatação                         │
│   • Agêntico: análise, síntese, decisão, criação                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.3 Quando Usar Cada Abordagem

| Característica da Tarefa | Abordagem Recomendada |
|--------------------------|----------------------|
| Entrada/saída bem definidas | Pipeline rígido |
| Requer criatividade | Bolsão agêntico |
| Alto volume, baixo risco | Pipeline rígido |
| Casos únicos, alto risco | Workflow híbrido com gates |
| Exploração sem direção clara | Agência livre |
| Decisão crítica | Gate humano |

### 1.4 Exemplo: Pipeline Jurídico

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PIPELINE JURÍDICO: CLERK                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐ │
│   │  FASE 1  │   │  FASE 2  │   │  FASE 3  │   │  FASE 4  │   │  FASE 5  │ │
│   │ Preparar │ → │ Relatar  │ → │ Analisar │ → │ Minutar  │ → │ Revisar  │ │
│   └────┬─────┘   └────┬─────┘   └────┬─────┘   └────┬─────┘   └────┬─────┘ │
│        │              │              │              │              │        │
│   Determinístico   Agêntico     Agêntico      Agêntico      Agêntico        │
│   (conversão       (síntese)    (pesquisa     (criação)     (validação)     │
│   PDF→TXT)                      + decisão)                                  │
│        │              │              │              │              │        │
│        ▼              ▼              ▼              ▼              ▼        │
│   processo.txt   relatorio.md   analise.md    minuta.md    sentenca.md     │
│                                                                             │
│   GATES ENTRE FASES:                                                        │
│   • Fase 2→3: Humano valida relatório                                       │
│   • Fase 3→4: Humano aprova orientação                                      │
│   • Fase 4→5: Humano revisa minuta                                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 1.5 Exercício: Identificar Bolsões

**Tarefa:** Para o workflow abaixo, identifique quais etapas devem ser determinísticas e quais agênticas.

```
WORKFLOW: Análise de Contrato

1. Receber PDF do contrato        → [_______]
2. Extrair texto do PDF           → [_______]
3. Identificar partes do contrato → [_______]
4. Analisar cláusulas de risco    → [_______]
5. Gerar relatório de riscos      → [_______]
6. Formatar relatório para PDF    → [_______]
```

**Resposta sugerida:**

| Etapa | Tipo | Justificativa |
|-------|------|---------------|
| 1. Receber PDF | Determinístico | Operação de arquivo |
| 2. Extrair texto | Determinístico | OCR/parser |
| 3. Identificar partes | Agêntico | Requer interpretação |
| 4. Analisar cláusulas | Agêntico | Análise criativa |
| 5. Gerar relatório | Agêntico | Síntese/redação |
| 6. Formatar para PDF | Determinístico | Conversão |

---

<a name="bloco-2"></a>
## Bloco 2: Padrão RPI - Research, Plan, Implement (~30 min)

### 2.1 O Que é RPI

**RPI = Research → Plan → Implement**

Este padrão estrutura qualquer tarefa complexa em três fases distintas, com gates entre elas.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PADRÃO RPI: O CICLO DE ALTO DESEMPENHO                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌───────────────┐                                                         │
│   │   RESEARCH    │ ← Entender o problema                                   │
│   │               │   Explorar o espaço de soluções                         │
│   │               │   Gerar documento de findings                           │
│   └───────┬───────┘                                                         │
│           │                                                                 │
│           ▼ [GATE: Humano revisa findings]                                  │
│                                                                             │
│   ┌───────────────┐                                                         │
│   │     PLAN      │ ← Quebrar em tarefas discretas                          │
│   │               │   Especificar arquivos e ações                          │
│   │               │   Incluir estratégia de rollback                        │
│   └───────┬───────┘                                                         │
│           │                                                                 │
│           ▼ [GATE: Humano aprova plano]                                     │
│                                                                             │
│   ┌───────────────┐                                                         │
│   │  IMPLEMENT    │ ← Seguir plano passo-a-passo                            │
│   │               │   Verificar após cada ação                              │
│   │               │   Validar contra requirements                           │
│   └───────────────┘                                                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.2 Por Que RPI Funciona

**Problema sem RPI:**

```
Usuário: "Construa um sistema de relatórios"
    ↓
Agente: [Começa a construir baseado em suposições]
    ↓
Usuário: "Não era isso..."
    ↓
[Desperdício de tokens e tempo]
```

**Com RPI:**

```
Usuário: "Construa um sistema de relatórios"
    ↓
Agente (RESEARCH): "Encontrei 3 abordagens possíveis..."
    ↓
Usuário: "A abordagem 2 faz mais sentido"
    ↓
Agente (PLAN): "Aqui está o plano em 7 etapas..."
    ↓
Usuário: "Aprovado, mas ajuste etapa 4"
    ↓
Agente (IMPLEMENT): [Executa plano aprovado]
    ↓
[Resultado alinhado com expectativa]
```

### 2.3 RESEARCH: A Fase de Exploração

**Objetivo:** Entender o espaço do problema ANTES de construir.

**O que fazer:**
1. Explorar código/documentos existentes
2. Identificar padrões e convenções
3. Mapear dependências
4. Documentar findings

**Output esperado:**

```markdown
# Findings: [Nome do Projeto/Tarefa]

## 1. Contexto Atual
[O que existe hoje, estado do sistema]

## 2. Padrões Identificados
[Convenções do projeto, estilos seguidos]

## 3. Dependências
[O que precisa funcionar junto]

## 4. Riscos e Considerações
[Potenciais problemas, armadilhas]

## 5. Abordagens Possíveis
- **Abordagem A:** [descrição, pros/cons]
- **Abordagem B:** [descrição, pros/cons]
- **Abordagem C:** [descrição, pros/cons]

## 6. Recomendação
[Qual abordagem e por quê]
```

### 2.4 PLAN: A Fase de Planejamento

**Objetivo:** Quebrar em tarefas atômicas e verificáveis.

**Características de boas tarefas:**
- **Atômicas:** Uma coisa por vez
- **Verificáveis:** Sei quando terminou
- **Estimáveis:** Posso prever esforço
- **Rastreáveis:** Vinculadas a requirement

**Output esperado:**

```markdown
# Plano de Implementação: [Nome]

## Arquitetura Proposta
[Diagrama ASCII ou descrição]

## Tarefas

### Task 1: [Nome]
- **Arquivos:** criar/modificar X
- **Descrição:** [O que fazer]
- **Verificação:** [Como saber que funcionou]
- **Rollback:** [Como desfazer se der errado]

### Task 2: [Nome]
...

## Ordem de Execução
1. Task 1 (sem dependências)
2. Task 2 (depende de Task 1)
3. Task 3 (paralelo com Task 2)

## Pontos de Checkpoint
- Após Task 2: validar X
- Após Task 5: revisar com humano
```

### 2.5 IMPLEMENT: A Fase de Execução

**Objetivo:** Executar o plano aprovado, com verificação a cada passo.

**Regras de implementação:**
1. **Seguir o plano:** Não improvisar
2. **Verificar a cada passo:** Confirmar resultado
3. **Documentar desvios:** Se algo mudar, registrar
4. **Checkpoint com humano:** Nos pontos definidos

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    IMPLEMENT: CICLO POR TASK                                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   Para cada Task no plano:                                                  │
│                                                                             │
│   1. EXECUTAR a task                                                        │
│          │                                                                  │
│          ▼                                                                  │
│   2. VERIFICAR resultado                                                    │
│          │                                                                  │
│      Passou? ─── SIM ───► Próxima task                                      │
│          │                                                                  │
│         NÃO                                                                 │
│          │                                                                  │
│          ▼                                                                  │
│   3. DIAGNOSTICAR falha                                                     │
│          │                                                                  │
│          ▼                                                                  │
│   4. CORRIGIR ou ROLLBACK                                                   │
│          │                                                                  │
│          ▼                                                                  │
│   5. RE-VERIFICAR                                                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 2.6 RPI Aplicado: Exemplo Jurídico

**Tarefa:** Criar sistema de pesquisa de precedentes

**RESEARCH:**

```markdown
## Findings: Sistema de Pesquisa de Precedentes

### 1. Contexto Atual
Três bases disponíveis: BNP, CJF, JULIA
Cada base tem sintaxe diferente de operadores

### 2. Padrões Identificados
- BNP: +termo, -termo, "frase"
- CJF: E, OU, NAO, ADJ, PROX (maiúsculas)
- JULIA: e, ou, nao, prox, adj (minúsculas)

### 3. Dependências
- MCPs configurados para cada base
- Modelo haiku para economia de tokens

### 4. Riscos
- Queries mal formuladas retornam ruído
- Bases podem estar indisponíveis

### 5. Abordagens
A: Buscar em todas as bases em paralelo
B: Buscar hierarquicamente (BNP → CJF → JULIA)
C: Classificar tema e buscar na base mais relevante

### 6. Recomendação
Abordagem B - começa por precedentes vinculantes (BNP),
só expande para outras bases se necessário.
```

**PLAN:**

```markdown
## Plano: Pesquisa de Precedentes

### Task 1: Identificar tema jurídico
- Extrair tema da consulta do usuário
- Verificação: tema identificado e documentado

### Task 2: Buscar precedentes vinculantes (BNP)
- Formular query com sintaxe BNP
- Executar busca
- Verificação: resultados retornados ou "sem resultados"

### Task 3: Avaliar suficiência
- Se encontrou Tema/Súmula aplicável: PARAR
- Se não: continuar para próxima base

### Task 4: Buscar jurisprudência (CJF)
- Formular query com sintaxe CJF
- Executar busca
- Verificação: resultados retornados

### Task 5: Consolidar resultados
- Unificar achados de todas as bases
- Gerar relatório estruturado

## Checkpoints
- Após Task 2: revisar relevância dos precedentes
- Após Task 5: validar relatório final
```

### 2.7 Exercício: Aplique RPI

**Tarefa:** Para "Elaborar minuta de sentença para caso de BPC", escreva:

1. **RESEARCH** - Liste 3 abordagens possíveis
2. **PLAN** - Quebre em 5-7 tarefas atômicas

---

<a name="bloco-3"></a>
## Bloco 3: Checkpoints e Gates (~25 min)

### 3.1 Padrões de Supervisão Humana

Existem três padrões arquiteturais para inserir o humano no fluxo:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PADRÕES DE SUPERVISÃO HUMANA                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  HUMAN-IN-THE-LOOP (HITL)                                           │   │
│   │  ─────────────────────────                                          │   │
│   │                                                                     │   │
│   │  Humano DENTRO do loop de execução                                  │   │
│   │                                                                     │   │
│   │  ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐                       │   │
│   │  │Tarefa│ →  │Agente│ →  │HUMANO│ →  │Agente│ → ...                 │   │
│   │  │  1   │    │executa│   │aprova│    │continua│                     │   │
│   │  └──────┘    └──────┘    └──────┘    └──────┘                       │   │
│   │                                                                     │   │
│   │  Uso: Decisões críticas, ações irreversíveis                        │   │
│   │  Exemplo: Aprovar envio de petição, confirmar exclusão              │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  HUMAN-ON-THE-LOOP (HOTL)                                           │   │
│   │  ─────────────────────────                                          │   │
│   │                                                                     │   │
│   │  Humano MONITORA o loop (pode intervir)                             │   │
│   │                                                                     │   │
│   │  ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐                       │   │
│   │  │Tarefa│ →  │Agente│ →  │Agente│ →  │Agente│ → ...                 │   │
│   │  │  1   │    │  2   │    │  3   │    │  4   │                       │   │
│   │  └──────┘    └──────┘    └──────┘    └──────┘                       │   │
│   │       ↑          ↑          ↑          ↑                            │   │
│   │       └──────────┴──────────┴──────────┘                            │   │
│   │                      │                                              │   │
│   │                 ┌────┴────┐                                         │   │
│   │                 │ HUMANO  │ (observa, intervém se erro)             │   │
│   │                 └─────────┘                                         │   │
│   │                                                                     │   │
│   │  Uso: Tarefas de baixo risco, alto volume                           │   │
│   │  Exemplo: Processar 100 documentos, humano audita 10%               │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │  HUMAN-OUT-OF-THE-LOOP (HOOTL)                                      │   │
│   │  ──────────────────────────────                                     │   │
│   │                                                                     │   │
│   │  Humano FORA do loop (só vê resultado final)                        │   │
│   │                                                                     │   │
│   │  ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐                       │   │
│   │  │Tarefa│ →  │Agente│ →  │Agente│ →  │Agente│ → FIM                 │   │
│   │  │  1   │    │  2   │    │  3   │    │  4   │                       │   │
│   │  └──────┘    └──────┘    └──────┘    └──────┘                       │   │
│   │                                            │                        │   │
│   │                                            ▼                        │   │
│   │                                       ┌─────────┐                   │   │
│   │                                       │ HUMANO  │                   │   │
│   │                                       │(só vê fim)│                 │   │
│   │                                       └─────────┘                   │   │
│   │                                                                     │   │
│   │  Uso: Automações maduras, bem testadas                              │   │
│   │  Exemplo: Backup diário, monitoramento de prazos                    │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.2 Tipos de Checkpoint

Checkpoint é o ponto onde o agente **para e pede aprovação**.

| Tipo de Checkpoint | Quando Usar | Exemplo |
|--------------------|-------------|---------|
| **ANTES de agir** | Ações irreversíveis | Antes de deletar, enviar |
| **DEPOIS de agir** | Validar qualidade | Após gerar minuta |
| **POR AMOSTRAGEM** | Alto volume | Auditar 10% dos casos |
| **POR EXCEÇÃO** | Quando detecta anomalia | Valor acima do normal |
| **POR TEMPO** | Processos longos | A cada 30 minutos |
| **POR CUSTO** | Controle financeiro | Quando tokens > limite |

### 3.3 Matriz de Risco: Custo × Descoberta

> *"Custo do erro e descoberta do erro - Se seus erros vão ser de alto risco e muito difíceis de descobrir, vai ser muito difícil confiar no agente."*
> — Barry Zhang, Anthropic (AI Engineer Summit 2024)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    MATRIZ DE RISCO: CUSTO × DESCOBERTA                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                         DESCOBERTA DO ERRO                                  │
│                    Fácil                      Difícil                       │
│               ┌─────────────────────────────────────────┐                   │
│               │                    │                    │                   │
│         Alto  │     HOTL           │      HITL          │                   │
│               │   (monitorar)      │  (cada passo)      │                   │
│    CUSTO      │                    │                    │                   │
│    DO ERRO    ├────────────────────┼────────────────────┤                   │
│               │                    │                    │                   │
│         Baixo │     HOOTL          │      HOTL          │                   │
│               │   (automatizar)    │  (por amostragem)  │                   │
│               │                    │                    │                   │
│               └─────────────────────────────────────────┘                   │
│                                                                             │
│   EXEMPLOS JURÍDICOS:                                                       │
│   • HITL (alto custo, difícil descoberta): Elaborar sentença                │
│   • HOTL (alto custo, fácil descoberta): Revisar precedentes                │
│   • HOTL (baixo custo, difícil descoberta): Classificar documentos          │
│   • HOOTL (baixo custo, fácil descoberta): Formatar datas                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.4 Mapeando Tarefas a Checkpoints

| Tarefa | Custo do Erro | Descoberta | Padrão | Checkpoint |
|--------|---------------|------------|--------|------------|
| Ler PDF | Baixo | Fácil | HOOTL | Apenas no fim |
| Gerar relatório | Médio | Fácil | HOTL | Por exceção |
| Pesquisar precedentes | Médio | Médio | HOTL | 10% amostra |
| Elaborar minuta | Alto | Difícil | HITL | Antes de salvar |
| Enviar documento | Alto | Fácil | HITL | Antes de enviar |

### 3.5 Gates vs Checkpoints

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    GATES vs CHECKPOINTS                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   CHECKPOINT:                                                               │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ Ponto de PAUSA para validação                                       │   │
│   │ • Agente para e mostra resultado                                    │   │
│   │ • Humano valida ou pede ajustes                                     │   │
│   │ • Pode continuar com mesmo contexto                                 │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   GATE:                                                                     │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ Ponto de DECISÃO que altera o fluxo                                 │   │
│   │ • Decisão binária: passa ou não passa                               │   │
│   │ • Se não passar, fluxo muda de direção                              │   │
│   │ • Geralmente entre fases do RPI                                     │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   EXEMPLO NO PIPELINE CLERK:                                                │
│                                                                             │
│   [Relatar] ──► GATE ──► [Analisar] ──► CHECKPOINT ──► [Minutar]           │
│                  │                           │                              │
│                  │                           │                              │
│           "Relatório OK?"             "Análise faz sentido?"                │
│           SIM: continua               SIM: continua                         │
│           NÃO: refazer                NÃO: ajustar                          │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.6 Princípio Fundamental

> "Quanto mais crítica a decisão, mais checkpoints. Quanto mais maduro o sistema, menos checkpoints."

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    EVOLUÇÃO DE CHECKPOINTS                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   SISTEMA NOVO (baixa confiança):                                           │
│   ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐                  │
│   │Task 1│ →  │ ✓    │ →  │Task 2│ →  │ ✓    │ →  │Task 3│                  │
│   └──────┘    │humano│    └──────┘    │humano│    └──────┘                  │
│               └──────┘                └──────┘                              │
│   (checkpoint a cada passo)                                                 │
│                                                                             │
│   SISTEMA MADURO (alta confiança):                                          │
│   ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐    ┌──────┐                  │
│   │Task 1│ →  │Task 2│ →  │Task 3│ →  │ ✓    │ →  │Task 4│                  │
│   └──────┘    └──────┘    └──────┘    │humano│    └──────┘                  │
│                                       └──────┘                              │
│   (checkpoint apenas em pontos críticos)                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 3.7 Exercício: Mapear Checkpoints

**Tarefa:** Para o pipeline abaixo, indique onde inserir checkpoints e que tipo usar.

```
PIPELINE: Elaboração de Sentença

1. Receber processo          → Checkpoint: [___] Tipo: [___]
2. Gerar relatório           → Checkpoint: [___] Tipo: [___]
3. Pesquisar precedentes     → Checkpoint: [___] Tipo: [___]
4. Classificar caso          → Checkpoint: [___] Tipo: [___]
5. Elaborar fundamentação    → Checkpoint: [___] Tipo: [___]
6. Redigir dispositivo       → Checkpoint: [___] Tipo: [___]
7. Revisar sentença          → Checkpoint: [___] Tipo: [___]
8. Publicar sentença         → Checkpoint: [___] Tipo: [___]
```

**Resposta sugerida:**

| Etapa | Checkpoint | Tipo | Justificativa |
|-------|------------|------|---------------|
| 1 | Não | - | Operação trivial |
| 2 | Sim | DEPOIS | Validar qualidade do relatório |
| 3 | Não | - | Pode auditar depois |
| 4 | Sim | DEPOIS | Validar classificação TRIVIAL/HARD |
| 5 | Sim | DEPOIS | Revisar fundamentação |
| 6 | Sim | DEPOIS | Revisar dispositivo |
| 7 | Sim | ANTES | Gate final antes de publicar |
| 8 | Sim | ANTES | Ação irreversível |

---

<a name="bloco-4"></a>
## Bloco 4: Error Handling Estruturado (~25 min)

### 4.1 O Problema do Stack Trace

> *"Não coloque o stack trace completo no prompt. Resuma o erro em 2-3 linhas com a causa provável."*
> — Dex Horthy, 12 Factor Agents (AI Engineer Summit 2024)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ERRO COMUM: STACK TRACE NO PROMPT                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   ❌ ERRADO:                                                                │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ Claude >> [500 linhas de stack trace]                               │   │
│   │ "Corrija este erro"                                                 │   │
│   │                                                                     │   │
│   │ PROBLEMAS:                                                          │   │
│   │ • Consome contexto desnecessariamente                               │   │
│   │ • Claude pode focar em parte irrelevante                            │   │
│   │ • Dificulta diagnóstico                                             │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   ✅ CERTO:                                                                 │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ Claude >> O erro aconteceu porque X.                                │   │
│   │ Para corrigir, tente Y.                                             │   │
│   │ Linha específica: linha 47 em process_pdf()                         │   │
│   │                                                                     │   │
│   │ BENEFÍCIOS:                                                         │   │
│   │ • Economia de tokens                                                │   │
│   │ • Foco no problema real                                             │   │
│   │ • Diagnóstico mais rápido                                           │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Framework de Error Handling

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    FRAMEWORK: CAPTURAR → FILTRAR → RESUMIR → TENTAR         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   1. CAPTURAR                                                               │
│      ┌─────────────────────────────────────────────────────────────────┐    │
│      │ try:                                                            │    │
│      │     resultado = executar_tarefa()                               │    │
│      │ except Exception as e:                                          │    │
│      │     erro_capturado = e                                          │    │
│      └─────────────────────────────────────────────────────────────────┘    │
│                                                                             │
│   2. FILTRAR                                                                │
│      ┌─────────────────────────────────────────────────────────────────┐    │
│      │ Extrair apenas informações relevantes:                          │    │
│      │ • Tipo do erro (FileNotFound, ValueError, etc.)                 │    │
│      │ • Mensagem principal                                            │    │
│      │ • Linha/arquivo onde ocorreu                                    │    │
│      │ • Contexto imediato (2-3 linhas antes/depois)                   │    │
│      └─────────────────────────────────────────────────────────────────┘    │
│                                                                             │
│   3. RESUMIR                                                                │
│      ┌─────────────────────────────────────────────────────────────────┐    │
│      │ erro_resumido = f"""                                            │    │
│      │ ERRO: {tipo_erro}                                               │    │
│      │ CAUSA PROVÁVEL: {causa}                                         │    │
│      │ LOCALIZAÇÃO: {arquivo}:{linha}                                  │    │
│      │ SUGESTÃO: {como_corrigir}                                       │    │
│      │ """                                                             │    │
│      └─────────────────────────────────────────────────────────────────┘    │
│                                                                             │
│   4. TENTAR                                                                 │
│      ┌─────────────────────────────────────────────────────────────────┐    │
│      │ Regra de 3 tentativas:                                          │    │
│      │ • Tentativa 1: Corrigir baseado no resumo                       │    │
│      │ • Tentativa 2: Tentar abordagem alternativa                     │    │
│      │ • Tentativa 3: Escalar para humano                              │    │
│      └─────────────────────────────────────────────────────────────────┘    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.3 Checklist de Debugging

Quando o agente falha, siga este workflow:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    DEBUGGING WORKFLOW                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   PASSO 1: PARE                                                             │
│   (não entre em pânico, não itere cegamente)                                │
│                                                                             │
│   PASSO 2: ENTENDA                                                          │
│   • Qual era a tarefa?                                                      │
│   • O que foi produzido?                                                    │
│   • O que deu errado?                                                       │
│                                                                             │
│   PASSO 3: ISOLE                                                            │
│   • É um problema de prompt?                                                │
│   • É um problema de contexto?                                              │
│   • É um problema de ferramenta/permissão?                                  │
│                                                                             │
│   PASSO 4: TESTE                                                            │
│   • Rode o agente com input simplificado                                    │
│   • Verifique cada componente separadamente                                 │
│                                                                             │
│   PASSO 5: CORRIJA                                                          │
│   • Ajuste spec/prompt                                                      │
│   • Adicione mais contexto                                                  │
│   • Mude estratégia de checkpoint                                           │
│                                                                             │
│   PASSO 6: VERIFIQUE                                                        │
│   • Teste a correção                                                        │
│   • Funcionou? Pode falhar de forma nova?                                   │
│                                                                             │
│   PASSO 7: DOCUMENTE                                                        │
│   • Por que falhou?                                                         │
│   • Como corrigiu?                                                          │
│   • Adicione teste para prevenir regressão                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.4 Padrão de Escalação

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PADRÃO DE ESCALAÇÃO                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   TENTATIVA 1: Auto-correção                                                │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ • Agente identifica erro                                            │   │
│   │ • Analisa causa provável                                            │   │
│   │ • Tenta corrigir automaticamente                                    │   │
│   │ • Verifica se funcionou                                             │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   TENTATIVA 2: Abordagem alternativa                                        │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ • Se primeira tentativa falhou                                      │   │
│   │ • Tenta método diferente                                            │   │
│   │ • Usa ferramenta alternativa                                        │   │
│   │ • Verifica se funcionou                                             │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   TENTATIVA 3: Escalação para humano                                        │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ • Se segunda tentativa falhou                                       │   │
│   │ • Documenta o que tentou                                            │   │
│   │ • Explica o bloqueio                                                │   │
│   │ • Pede orientação humana                                            │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   REGRA: Máximo 3 tentativas antes de escalar                               │
│   (evita loops infinitos e desperdício de tokens)                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 4.5 Os 10 Erros Mais Comuns

| # | Erro | Sintoma | Correção |
|---|------|---------|----------|
| 1 | Vibe Coding | Prompts vagos | Usar specs detalhadas |
| 2 | Sem checkpoints | Erros descobertos tarde | Inserir gates |
| 3 | Stack trace completo | Contexto desperdiçado | Resumir em 3 linhas |
| 4 | CLAUDE.md inchado | Respostas confusas | Progressive Disclosure |
| 5 | Pular planejamento | Resultado errado | Aplicar RPI |
| 6 | Sem spec | Suposições erradas | Especificar antes |
| 7 | Prompt monolítico | Difícil de manter | Fragmentar em commands |
| 8 | Testar só no final | Muitos bugs | Testar cada passo |
| 9 | Confiar cegamente | Erros não detectados | Validação humana |
| 10 | Não documentar falhas | Erros se repetem | Q&A de aprendizado |

### 4.6 Exercício: Debugging

**Cenário:** O agente estava gerando relatórios corretamente, mas após uma mudança, começou a omitir a seção de "Provas".

**Aplique o debugging workflow:**

1. **PARE:** O que observou?
2. **ENTENDA:** O que mudou recentemente?
3. **ISOLE:** É problema de prompt, contexto ou ferramenta?
4. **TESTE:** Como testaria cada hipótese?
5. **CORRIJA:** O que faria para corrigir?
6. **VERIFIQUE:** Como confirmaria a correção?
7. **DOCUMENTE:** O que registraria para o futuro?

---

<a name="bloco-5"></a>
## Bloco 5: Framework de Custo do Erro (~25 min)

### 5.1 As 3 Perguntas Antes de Projetar

Antes de definir o nível de supervisão, faça estas perguntas:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    AS 3 PERGUNTAS DO CUSTO DO ERRO                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   PERGUNTA 1: Qual o CUSTO se o agente errar?                               │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ • Baixo: Inconveniente menor, fácil de corrigir                     │   │
│   │ • Médio: Retrabalho significativo, tempo perdido                    │   │
│   │ • Alto: Dano reputacional, prejuízo financeiro, risco legal         │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   PERGUNTA 2: Quão FÁCIL é descobrir o erro?                                │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ • Fácil: Erro óbvio, aparece imediatamente                          │   │
│   │ • Médio: Precisa de revisão para detectar                           │   │
│   │ • Difícil: Erro sutil, pode passar despercebido                     │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   PERGUNTA 3: O erro é REVERSÍVEL?                                          │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ • Reversível: Pode desfazer facilmente                              │   │
│   │ • Parcialmente: Pode corrigir com esforço                           │   │
│   │ • Irreversível: Não pode desfazer (e-mail enviado, arquivo deletado)│   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 5.2 Mapeando Risco em Configuração

Com base nas 3 perguntas, defina a configuração:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    MAPEAMENTO RISCO → CONFIGURAÇÃO                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   BAIXO RISCO (custo baixo + fácil descobrir + reversível)                  │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ • Padrão: HOOTL (Human-Out-of-the-Loop)                             │   │
│   │ • Checkpoint: Apenas no final                                       │   │
│   │ • Tentativas antes de escalar: 3                                    │   │
│   │ • Exemplo: Formatar datas, converter arquivos                       │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   MÉDIO RISCO (qualquer dimensão em "médio")                                │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ • Padrão: HOTL (Human-On-the-Loop)                                  │   │
│   │ • Checkpoint: Por amostragem (10-20%) ou exceção                    │   │
│   │ • Tentativas antes de escalar: 2                                    │   │
│   │ • Exemplo: Gerar relatórios, pesquisar precedentes                  │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   ALTO RISCO (custo alto OU difícil descobrir OU irreversível)              │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ • Padrão: HITL (Human-In-the-Loop)                                  │   │
│   │ • Checkpoint: Antes de cada ação crítica                            │   │
│   │ • Tentativas antes de escalar: 1                                    │   │
│   │ • Exemplo: Elaborar sentença, enviar documento                      │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 5.3 Tabela de Referência

| Tarefa Jurídica | Custo | Descoberta | Reversível | Padrão |
|-----------------|-------|------------|------------|--------|
| Converter PDF→TXT | Baixo | Fácil | Sim | HOOTL |
| Extrair dados do processo | Baixo | Fácil | Sim | HOOTL |
| Gerar relatório | Médio | Fácil | Sim | HOTL |
| Pesquisar jurisprudência | Médio | Médio | Sim | HOTL |
| Classificar caso | Médio | Difícil | Sim | HOTL |
| Elaborar fundamentação | Alto | Difícil | Sim | HITL |
| Redigir dispositivo | Alto | Médio | Sim | HITL |
| Publicar sentença | Alto | Fácil | **Não** | HITL |
| Enviar intimação | Alto | Fácil | **Não** | HITL |

### 5.4 Evolução da Confiança

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    EVOLUÇÃO DA CONFIANÇA                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   FASE 1: PILOTO (0-10 casos)                                               │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ • Supervisão: 100% (HITL em tudo)                                   │   │
│   │ • Objetivo: Validar funcionamento básico                            │   │
│   │ • Métricas: Taxa de erro, tempo por caso                            │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   FASE 2: CALIBRAÇÃO (10-50 casos)                                          │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ • Supervisão: 50% (HITL em críticos, HOTL em rotina)                │   │
│   │ • Objetivo: Identificar padrões de erro                             │   │
│   │ • Métricas: Tipos de erro, pontos de falha                          │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   FASE 3: PRODUÇÃO (50+ casos)                                              │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ • Supervisão: Calibrada por risco (HITL/HOTL/HOOTL)                 │   │
│   │ • Objetivo: Eficiência com segurança                                │   │
│   │ • Métricas: Throughput, qualidade, satisfação                       │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   REGRA: Nunca acelerar supervisão mais rápido que os dados permitem        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 5.5 Exercício: Avaliar Risco

**Tarefa:** Para cada tarefa abaixo, responda as 3 perguntas e defina o padrão de supervisão.

| Tarefa | Custo | Descoberta | Reversível | Padrão |
|--------|-------|------------|------------|--------|
| Transcrever audiência | ___ | ___ | ___ | ___ |
| Calcular prazo prescricional | ___ | ___ | ___ | ___ |
| Gerar certidão de objeto | ___ | ___ | ___ | ___ |
| Classificar urgência do processo | ___ | ___ | ___ | ___ |
| Enviar despacho para publicação | ___ | ___ | ___ | ___ |

**Resposta sugerida:**

| Tarefa | Custo | Descoberta | Reversível | Padrão |
|--------|-------|------------|------------|--------|
| Transcrever audiência | Médio | Fácil | Sim | HOTL |
| Calcular prazo prescricional | Alto | Difícil | Sim | HITL |
| Gerar certidão de objeto | Baixo | Fácil | Sim | HOOTL |
| Classificar urgência | Médio | Médio | Sim | HOTL |
| Enviar despacho | Alto | Fácil | **Não** | HITL |

---

<a name="bloco-6"></a>
## Bloco 6: Meta-Workflow - Ferramentas para Construir Workflows (~30 min)

### 6.1 O Paradoxo: Usar Workflows para Construir Workflows

Aqui está a meta-narrativa que fecha o círculo: **você usa workflows para construir workflows**.

As mesmas ferramentas agênticas que você está aprendendo a construir já existem para ajudá-lo no processo de construção. É como usar um martelo para construir um martelo melhor.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    META-WORKFLOW: CONSTRUINDO SISTEMAS                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   O QUE VOCÊ QUER CONSTRUIR:                                                │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ "Um sistema para elaborar sentenças automaticamente"                │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   COMO VOCÊ VAI CONSTRUIR (usando ferramentas agênticas):                   │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │                                                                     │   │
│   │   BRAINSTORMING ───► PLANNING ───► IMPLEMENTING ───► REVIEWING      │   │
│   │       skill            skill           skill           skill        │   │
│   │                                                                     │   │
│   │   "Que abordagens   "Quais são    "Executar      "Revisar           │   │
│   │    são possíveis?"   as tarefas?"  o plano"       o código"         │   │
│   │                                                                     │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   VOCÊ USA WORKFLOWS PARA CONSTRUIR WORKFLOWS!                              │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 6.2 O Ecossistema Superpowers

O **Superpowers** é um conjunto de skills que implementa boas práticas de desenvolvimento. Ele oferece um workflow colaborativo completo:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    ECOSSISTEMA SUPERPOWERS                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   SKILLS DE DESENVOLVIMENTO:                                                │
│   ─────────────────────────────                                             │
│                                                                             │
│   ┌─────────────────┐                                                       │
│   │  BRAINSTORMING  │  Refinar ideias em designs estruturados               │
│   │     skill       │  • Perguntas uma por uma                              │
│   │                 │  • Explorar 2-3 abordagens                            │
│   │                 │  • Validação incremental                              │
│   └────────┬────────┘                                                       │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                       │
│   │  WRITING-PLANS  │  Criar planos detalhados em bite-sized tasks          │
│   │     skill       │  • Cada task: 2-5 minutos                             │
│   │                 │  • Código completo incluído                           │
│   │                 │  • Verificação após cada step                         │
│   └────────┬────────┘                                                       │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                       │
│   │ EXECUTING-PLANS │  Executar planos em batches com checkpoints           │
│   │     skill       │  • Batches de 3 tasks                                 │
│   │                 │  • Report entre batches                               │
│   │                 │  • Feedback humano incorporado                        │
│   └────────┬────────┘                                                       │
│            │                                                                │
│            ▼                                                                │
│   ┌─────────────────┐                                                       │
│   │  CODE-REVIEWER  │  Revisar código para bugs e conformidade              │
│   │    subagent     │  • Checa contra CLAUDE.md                             │
│   │                 │  • Filtra: só issues com ≥80% confiança               │
│   │                 │  • Categoriza por severidade                          │
│   └─────────────────┘                                                       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 6.3 Feature Dev: O Plugin Completo

O **Feature Dev** é um plugin que orquestra todo o ciclo de desenvolvimento em 7 fases:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    FEATURE DEV: 7 FASES                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   Comando: /feature-dev "descrição da feature"                              │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ FASE 1: DISCOVERY                                                   │   │
│   │ ─────────────────                                                   │   │
│   │ • Entender o que precisa ser construído                             │   │
│   │ • Clarificar requisitos com o usuário                               │   │
│   │ • Confirmar escopo antes de prosseguir                              │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                           │                                                 │
│                           ▼                                                 │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ FASE 2: CODEBASE EXPLORATION                                        │   │
│   │ ────────────────────────────                                        │   │
│   │ • Lança 2-3 agentes code-explorer em PARALELO                       │   │
│   │ • Cada agente explora um aspecto diferente                          │   │
│   │ • Mapeia código existente relevante                                 │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                           │                                                 │
│                           ▼                                                 │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ FASE 3: CLARIFYING QUESTIONS                                        │   │
│   │ ───────────────────────────                                         │   │
│   │ • Apresenta lista de perguntas ao usuário                           │   │
│   │ • Resolve ambiguidades ANTES do design                              │   │
│   │ • ESPERA respostas antes de prosseguir                              │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                           │                                                 │
│                           ▼                                                 │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ FASE 4: ARCHITECTURE DESIGN                                         │   │
│   │ ───────────────────────────                                         │   │
│   │ • Lança 2-3 agentes code-architect em PARALELO                      │   │
│   │ • Cada agente propõe uma abordagem diferente                        │   │
│   │ • Apresenta trade-offs para decisão do usuário                      │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                           │                                                 │
│                           ▼                                                 │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ FASE 5: IMPLEMENTATION                                              │   │
│   │ ──────────────────────                                              │   │
│   │ • AGUARDA aprovação explícita do usuário                            │   │
│   │ • Implementa seguindo o plano aprovado                              │   │
│   │ • TDD: teste primeiro, código depois                                │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                           │                                                 │
│                           ▼                                                 │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ FASE 6: QUALITY REVIEW                                              │   │
│   │ ─────────────────────                                               │   │
│   │ • Lança 3 agentes code-reviewer em PARALELO                         │   │
│   │ • Verificam bugs, qualidade, conformidade                           │   │
│   │ • Consolida issues por severidade                                   │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                           │                                                 │
│                           ▼                                                 │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ FASE 7: SUMMARY                                                     │   │
│   │ ─────────────────                                                   │   │
│   │ • Documenta o que foi construído                                    │   │
│   │ • Marca todos os TODOs como completos                               │   │
│   │ • Sumariza decisões tomadas                                         │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 6.4 Brainstorming: A Arte de Começar Certo

A skill de **Brainstorming** é fundamental para começar qualquer projeto com clareza:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    BRAINSTORMING SKILL: PROCESSO                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   Comando: /brainstorm "minha ideia de projeto"                             │
│                                                                             │
│   FASE 1: ENTENDER A IDEIA                                                  │
│   ─────────────────────────────                                             │
│   • Faz perguntas UMA POR UMA (não bombardeia)                              │
│   • Prefere multiple choice (mais fácil de responder)                       │
│   • Foca em: propósito, restrições, critérios de sucesso                    │
│                                                                             │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ EXEMPLO DE PERGUNTA:                                                │   │
│   │                                                                     │   │
│   │ "Qual é o objetivo principal deste sistema?"                        │   │
│   │                                                                     │   │
│   │ A) Automatizar tarefas repetitivas                                  │   │
│   │ B) Melhorar qualidade das decisões                                  │   │
│   │ C) Reduzir tempo de processamento                                   │   │
│   │ D) Outro: [especificar]                                             │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
│   FASE 2: EXPLORAR ABORDAGENS                                               │
│   ───────────────────────────────                                           │
│   • Propõe 2-3 abordagens diferentes                                        │
│   • Apresenta trade-offs de cada uma                                        │
│   • Recomenda uma com justificativa                                         │
│                                                                             │
│   FASE 3: APRESENTAR DESIGN                                                 │
│   ──────────────────────────────                                            │
│   • Divide em seções de 200-300 palavras                                    │
│   • Pergunta após CADA seção (validação incremental)                        │
│   • Cobre: arquitetura, componentes, fluxo, erros, testes                   │
│                                                                             │
│   OUTPUT: docs/plans/YYYY-MM-DD-<topic>-design.md                           │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 6.5 Writing Plans: Do Design às Tarefas

Após o brainstorming, a skill **Writing Plans** transforma o design em tarefas executáveis:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    WRITING PLANS: ESTRUTURA DE UM PLANO                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   Comando: /write-plan (após ter um design)                                 │
│                                                                             │
│   ESTRUTURA DO PLANO:                                                       │
│   ────────────────────                                                      │
│                                                                             │
│   # [Feature] Implementation Plan                                           │
│                                                                             │
│   **Goal:** Uma sentença descrevendo o que constrói                         │
│   **Architecture:** 2-3 sentençs sobre abordagem                            │
│   **Tech Stack:** Tecnologias-chave                                         │
│                                                                             │
│   ---                                                                       │
│                                                                             │
│   ### Task 1: [Nome do Componente]                                          │
│                                                                             │
│   **Files:**                                                                │
│   - Create: `exact/path/to/file.py`                                         │
│   - Modify: `exact/path/to/existing.py:123-145`                             │
│   - Test: `tests/exact/path/to/test.py`                                     │
│                                                                             │
│   **Step 1: Write the failing test**                                        │
│   ```python                                                                 │
│   def test_component():                                                     │
│       # Código COMPLETO do teste                                            │
│       assert expected == actual                                             │
│   ```                                                                       │
│                                                                             │
│   **Step 2: Run test to verify it fails**                                   │
│   ```bash                                                                   │
│   pytest tests/test_component.py -v                                         │
│   # Expected: FAILED                                                        │
│   ```                                                                       │
│                                                                             │
│   **Step 3: Write minimal implementation**                                  │
│   ```python                                                                 │
│   # Código COMPLETO da implementação                                        │
│   ```                                                                       │
│                                                                             │
│   **Step 4: Run test to verify it passes**                                  │
│   ```bash                                                                   │
│   pytest tests/test_component.py -v                                         │
│   # Expected: PASSED                                                        │
│   ```                                                                       │
│                                                                             │
│   **Step 5: Commit**                                                        │
│   ```bash                                                                   │
│   git add . && git commit -m "Add component X"                              │
│   ```                                                                       │
│                                                                             │
│   CARACTERÍSTICA-CHAVE: Cada step é 2-5 minutos, código COMPLETO            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 6.6 O Fluxo Colaborativo Completo

Juntando todas as peças, o fluxo colaborativo fica assim:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│              FLUXO COLABORATIVO: HUMANO + MÁQUINA                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                     VOCÊ                      CLAUDE                        │
│                      │                           │                          │
│   "Tenho uma ideia   │                           │                          │
│    de projeto"       │──────────────────────────►│                          │
│                      │                           │                          │
│                      │        /brainstorm        │                          │
│                      │◄──────────────────────────│                          │
│                      │   "Pergunta 1 de 5..."    │                          │
│                      │                           │                          │
│   "Resposta A"       │──────────────────────────►│                          │
│                      │                           │                          │
│                      │   "Pergunta 2 de 5..."    │                          │
│                      │◄──────────────────────────│                          │
│                      │                           │                          │
│        ...           │           ...             │                          │
│                      │                           │                          │
│                      │   "Aqui estão 3          │                          │
│                      │    abordagens..."        │                          │
│                      │◄──────────────────────────│                          │
│                      │                           │                          │
│   "Prefiro a         │──────────────────────────►│                          │
│    abordagem B"      │                           │                          │
│                      │                           │                          │
│                      │   design.md salvo         │                          │
│                      │◄──────────────────────────│                          │
│                      │                           │                          │
│   "Agora crie        │──────────────────────────►│                          │
│    o plano"          │                           │                          │
│                      │        /write-plan        │                          │
│                      │◄──────────────────────────│                          │
│                      │   plano com 7 tasks       │                          │
│                      │                           │                          │
│   "Aprovar e         │──────────────────────────►│                          │
│    executar"         │                           │                          │
│                      │      /execute-plan        │                          │
│                      │◄──────────────────────────│                          │
│                      │   "Tasks 1-3 completas.   │                          │
│                      │    Feedback?"             │                          │
│                      │                           │                          │
│   "Continuar"        │──────────────────────────►│                          │
│                      │                           │                          │
│                      │   "Tasks 4-7 completas.   │                          │
│                      │    Feature pronta!"       │                          │
│                      │◄──────────────────────────│                          │
│                      │                           │                          │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 6.7 Por Que Isso Funciona

O fluxo colaborativo funciona porque respeita dois princípios:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    POR QUE O FLUXO COLABORATIVO FUNCIONA                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   PRINCÍPIO 1: VALIDAÇÃO INCREMENTAL                                        │
│   ──────────────────────────────────────                                    │
│                                                                             │
│   ❌ SEM VALIDAÇÃO:                                                         │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ Ideia ────────────────────────────────────────────────► Resultado   │   │
│   │         (caixa preta, nenhuma validação no meio)                    │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│   Problema: Se errar, desperdiça todo o trabalho                            │
│                                                                             │
│   ✅ COM VALIDAÇÃO:                                                         │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ Ideia ──► Design ──► Plano ──► Task 1-3 ──► Task 4-7 ──► Resultado  │   │
│   │       ✓          ✓         ✓            ✓                           │   │
│   │    (checkpoint)  (checkpoint)  (checkpoint)  (checkpoint)           │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│   Benefício: Corrige cedo, não desperdiça                                   │
│                                                                             │
│   PRINCÍPIO 2: SEPARAÇÃO DE RESPONSABILIDADES                               │
│   ───────────────────────────────────────────────                           │
│                                                                             │
│   ┌───────────────────────┬───────────────────────────────────────────┐     │
│   │       HUMANO          │              MÁQUINA                      │     │
│   ├───────────────────────┼───────────────────────────────────────────┤     │
│   │ • Define objetivos    │ • Estrutura perguntas                     │     │
│   │ • Escolhe abordagens  │ • Propõe alternativas                     │     │
│   │ • Valida checkpoints  │ • Executa tarefas                         │     │
│   │ • Aprova resultados   │ • Documenta progresso                     │     │
│   │                       │                                           │     │
│   │ DECISÃO               │ EXECUÇÃO                                  │     │
│   └───────────────────────┴───────────────────────────────────────────┘     │
│                                                                             │
│   O humano permanece no COMANDO.                                            │
│   A máquina amplifica a CAPACIDADE.                                         │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 6.8 Meu Fluxo Preferido

Como instrutor deste curso, compartilho meu fluxo de trabalho preferido:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    MEU FLUXO PREFERIDO                                      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   PASSO 1: ATIVAR BRAINSTORMING                                             │
│   ──────────────────────────────                                            │
│   /brainstorm "minha ideia de projeto"                                      │
│                                                                             │
│   • Deixo o Claude fazer MUITAS perguntas                                   │
│   • Respondo com calma, uma por uma                                         │
│   • Não tenho pressa de chegar ao código                                    │
│                                                                             │
│   PASSO 2: CONSOLIDAR IDEIAS                                                │
│   ───────────────────────────                                               │
│   • Reviso o design gerado                                                  │
│   • Peço ajustes se necessário                                              │
│   • Só prossigo quando estiver satisfeito                                   │
│                                                                             │
│   PASSO 3: CRIAR PLANO DETALHADO                                            │
│   ─────────────────────────────────                                         │
│   /write-plan                                                               │
│                                                                             │
│   • Verifico se cada task é pequena (2-5 min)                               │
│   • Confirmo que tem código completo                                        │
│   • Valido ordem de dependências                                            │
│                                                                             │
│   PASSO 4: EXECUTAR EM BATCHES                                              │
│   ─────────────────────────────                                             │
│   /execute-plan                                                             │
│                                                                             │
│   • Reviso entre batches                                                    │
│   • Dou feedback quando necessário                                          │
│   • Não tenho medo de pedir ajustes                                         │
│                                                                             │
│   REGRA DE OURO:                                                            │
│   ┌─────────────────────────────────────────────────────────────────────┐   │
│   │ "Primeiro fazer muitas ideias, depois consolidar em plano,          │   │
│   │  depois implementar. NUNCA pular etapas."                           │   │
│   └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### 6.9 Exercício: Use o Meta-Workflow

**Tarefa:** Para um projeto seu, execute o fluxo completo:

1. **Brainstorming** (~15 min)
   - Use `/brainstorm` com sua ideia
   - Responda todas as perguntas
   - Obtenha um design.md

2. **Planning** (~10 min)
   - Use `/write-plan` sobre o design
   - Revise as tasks geradas
   - Ajuste se necessário

3. **Reflexão** (~5 min)
   - Compare o resultado com o que você teria feito "na mão"
   - O que o fluxo colaborativo adicionou?
   - O que você faria diferente?

> **Insight:** O valor do meta-workflow não é só o resultado final — é a **clareza de pensamento** que ele força você a ter.

---

<a name="sintese"></a>
## Síntese e Próximos Passos

### Resumo da Aula

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    RESUMO: ENGENHARIA DE WORKFLOWS                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│   0. USUÁRIO COMO ARQUITETO                                                 │
│      • Toda etapa tem ENTRADA → PROCESSAMENTO → SAÍDA                       │
│      • Clareza de pensamento antes de construir                             │
│      • Contratos explícitos para cada etapa                                 │
│                                                                             │
│   1. PIPELINES vs AGÊNCIA                                                   │
│      • Trade-off controle vs flexibilidade                                  │
│      • Workflows híbridos com "bolsões agênticos"                           │
│      • Estrutura determinística + inteligência localizada                   │
│                                                                             │
│   2. PADRÃO RPI                                                             │
│      • Research: entender antes de construir                                │
│      • Plan: quebrar em tarefas atômicas                                    │
│      • Implement: executar com verificação                                  │
│      • Gates entre fases para validação humana                              │
│                                                                             │
│   3. CHECKPOINTS E GATES                                                    │
│      • HITL: humano no loop (alto risco)                                    │
│      • HOTL: humano monitora (médio risco)                                  │
│      • HOOTL: humano fora do loop (baixo risco)                             │
│      • Tipos: antes, depois, amostragem, exceção, tempo, custo              │
│                                                                             │
│   4. ERROR HANDLING                                                         │
│      • Capturar → Filtrar → Resumir → Tentar                                │
│      • Regra de 3 tentativas antes de escalar                               │
│      • Não usar stack trace completo no prompt                              │
│      • Documentar falhas para aprendizado                                   │
│                                                                             │
│   5. FRAMEWORK DE CUSTO DO ERRO                                             │
│      • 3 perguntas: custo, descoberta, reversibilidade                      │
│      • Mapear risco em configuração de supervisão                           │
│      • Evolução gradual da confiança                                        │
│                                                                             │
│   6. META-WORKFLOW                                                          │
│      • Usar workflows para construir workflows                              │
│      • Brainstorming → Writing Plans → Executing Plans                      │
│      • Feature Dev: 7 fases de desenvolvimento estruturado                  │
│      • Validação incremental em cada etapa                                  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Citações-Chave

> *"Custo do erro e descoberta do erro - Se seus erros vão ser de alto risco e muito difíceis de descobrir, vai ser muito difícil confiar no agente."*
> — Barry Zhang, Anthropic (AI Engineer Summit 2024)

> *"Workflows com bolsões agênticos - estrutura rígida no geral, inteligência criativa onde necessário."*
> — Dex Horthy, 12 Factor Agents (AI Engineer Summit 2024)

### O Que Aprendemos no Módulo 2

| Aula | Tema | Conceito-Chave |
|------|------|----------------|
| **6** | Engenharia de Prompt | SEMPRE/NUNCA/PREFERIR |
| **7** | Engenharia de Contexto | Progressive Disclosure |
| **8** | Engenharia de Capacidades | Skills são apenas pastas |
| **9** | Engenharia de Workflows | Custo × Descoberta |

### Projeto Final do Módulo

**Desafio:** Projete um workflow completo para análise de processos no seu domínio:

1. **Diagrama do Pipeline:**
   - Identifique as etapas (determinísticas e agênticas)
   - Insira gates entre fases

2. **Padrão RPI para uma etapa:**
   - Escreva document de Research
   - Crie plano com tarefas atômicas

3. **Mapeamento de Riscos:**
   - Para cada etapa, defina custo/descoberta/reversibilidade
   - Atribua padrão de supervisão (HITL/HOTL/HOOTL)

4. **Error Handling:**
   - Defina estratégia de tratamento de erros
   - Estabeleça regras de escalação

---

## Referências

### Documentação Oficial
- [Claude Code - Workflows](https://docs.anthropic.com/claude-code/workflows)
- [Anthropic - Building Agents](https://docs.anthropic.com/en/docs/build-with-claude/agentic-systems)

### Fontes das Citações
- Barry Zhang - AI Engineer Summit 2024, "Building with Claude Code"
- Dex Horthy - AI Engineer Summit 2024, "12 Factor Agents"

### Material Complementar
- `docs/21-arquitetura-orquestrador.md` - Arquitetura do CLERK
- `docs/24-manual-boas-praticas-agenticas.md` - Boas práticas
- `docs/22-guia-completo-fluxo-clerk.md` - Pipeline completo

---

**Fim do Módulo 2: Prompts Agênticos**

Próximo: [Módulo 3: Recursos Avançados](../modulo-03/README.md)
