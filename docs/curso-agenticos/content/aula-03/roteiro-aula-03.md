# ROTEIRO DE SUPERAULA

## Metadados
- **Tema:** Aula 03 - Arquitetando Sistemas Agênticos: Do Fluxo de Trabalho ao Fluxo de Agentes
- **Duração estimada:** 90-120 minutos
- **Público-alvo:** Juristas (magistrados, advogados, servidores) que completaram Aulas 00-02
- **Pré-requisitos:** Aulas 00, 01 e 02 concluídas; familiaridade básica com Claude Code
- **Ambiente:** Terminal + Claude Code instalado
- **Estrutura narrativa:** Gladwell (Anedota -> Insight) com elementos de Jornada do Herói

---

## Propósito

Esta aula revela o **segredo dos sistemas agênticos de alta performance**: não é sobre o agente individual, é sobre o **fluxo de trabalho** que o coordena. O aluno vai descobrir que existe uma **metodologia comprovada** para transformar tarefas complexas em sistemas que funcionam de forma consistente e previsível.

> *"If you get the spec right, the code almost writes itself."*
> — Al Harris (Amazon Kiro)

A grande revelação: **o mesmo ciclo de trabalho que desenvolvedores profissionais usam para construir software** pode ser aplicado para construir qualquer sistema agêntico. E esse ciclo tem nome: **Ideação -> Planejamento -> Especificação -> Implementação -> Teste -> Refinamento**.

**Por que isso importa para juristas?** Porque este fluxo é exatamente análogo ao processo decisório judicial: analisar a demanda, planejar a estratégia, fundamentar a decisão, implementar o dispositivo, verificar consistência, refinar conforme recursos.

---

## Objetivos

**Questões centrais a serem respondidas:**
1. Por que sistemas agênticos de sucesso seguem um fluxo de trabalho estruturado?
2. Qual a diferença entre workflow humano-agente e workflow agente-agente?
3. Como aplicar o ciclo Ideação-Planejamento-Implementação na prática?

**Ao final desta aula, o aluno será capaz de:**
- Compreender o fluxo de trabalho completo para construção de sistemas agênticos
- Distinguir os dois tipos de workflow: colaboração humano-agente e orquestração agente-agente
- Aplicar o padrão Superpowers (brainstorm -> write-plan -> execute-plan)
- Identificar qual padrão arquitetural usar para cada tipo de tarefa
- Visualizar como o Pipeline Sentença implementa esses conceitos

---

## Visão Geral da Estrutura

| Bloco | Título | Duração | Estrutura Gladwell |
|-------|--------|---------|-------------------|
| 1 | A História: O Caos do Vibe Coding | 12 min | ANEDOTA |
| 2 | O Padrão Oculto: O Ciclo de Desenvolvimento | 15 min | PADRÃO OCULTO |
| 3 | As Duas Noções de Workflow | 12 min | REVELAÇÃO |
| 4 | Workflow Humano-Agente: O Superpowers | 20 min | VALIDAÇÃO |
| 5 | Workflow Agente-Agente: Padrões da Anthropic | 20 min | VALIDAÇÃO |
| 6 | Mão na Massa: Projetando um Mini-Sistema | 20 min | DEMONSTRAÇÃO |
| 7 | O Pipeline Sentença Revisitado | 10 min | CONEXÃO INESPERADA |
| 8 | Fechamento | 10 min | CONCLUSÃO CONTRA-INTUITIVA |

**Tempo total:** ~119 min (ajustar conforme ritmo da turma)

---

## Blocos da Aula

<!-- ═══════════════════════════════════════════════════════════════════════════════ -->
<!-- ACT 1: A ANEDOTA                                                                -->
<!-- ═══════════════════════════════════════════════════════════════════════════════ -->

### Bloco 1: A História - O Caos do Vibe Coding (12 min)

**Abertura (tom pessoal, narrativo):**

> "Em fevereiro de 2025, Andrej Karpathy cunhou um termo que viralizou: *Vibe Coding*. A prática de abrir um chat com IA, descrever vagamente o que você quer, e esperar que a máquina 'pegue o vibe'. Milhares de desenvolvedores celebraram: 'Finalmente posso codar sem planejar!'"

**A PROMESSA DO VIBE CODING:**

```
┌─────────────────────────────────────────────────────────────────┐
│                     VIBE CODING                                 │
│                                                                 │
│   Usuário: "Faz um sistema de gestão de processos"              │
│      ↓                                                          │
│   LLM: [gera código genérico]                                   │
│      ↓                                                          │
│   Usuário: "Não, quero com login e banco de dados"              │
│      ↓                                                          │
│   LLM: [adiciona auth, mas quebra funcionalidade anterior]      │
│      ↓                                                          │
│   Usuário: "Hmm, agora o relatório não funciona..."             │
│      ↓                                                          │
│   [Loop infinito de correções]                                  │
│                                                                 │
│   RESULTADO: "Spaghetti Chat" - histórico inauditável           │
└─────────────────────────────────────────────────────────────────┘
```

**O problema revelado:**

> "25% das startups do Y Combinator Winter 2025 tinham codebases 95% gerados por IA. Soa impressionante, certo? Mas então veio a conta: sistemas de IA custam 30-50% a mais para manter do que sistemas tradicionais. Por quê?"

**Os 5 problemas do Vibe Coding:**

| Problema | Descrição |
|----------|-----------|
| **Drift de Requisitos** | Sem especificação clara, o agente "inventa" funcionalidades |
| **Contexto Perdido** | Conversas longas perdem informações críticas |
| **Código Espaguete** | Falta de arquitetura leva a sistemas impossíveis de manter |
| **Débito Técnico Invisível** | Problemas de segurança e performance escondidos |
| **Custo de Manutenção** | Cada mudança quebra algo que funcionava |

**Analogia jurídica:**

> "Imaginem um juiz que recebe um processo e já começa a redigir a sentença. Sem ler os autos. Sem analisar as provas. Sem verificar precedentes. A cada parágrafo, percebe que faltou considerar algo. Volta, reescreve. Avança, percebe outra falha. Volta de novo. No final, uma sentença que nem ele entende mais."

**Instalação da curiosidade:**

> "Mas alguns desenvolvedores estavam obtendo resultados completamente diferentes. Seus sistemas funcionavam na primeira tentativa. Eram fáceis de manter. Custavam menos. O que eles sabiam que os outros não sabiam?"

(Pausa dramática)

---

<!-- ═══════════════════════════════════════════════════════════════════════════════ -->
<!-- ACT 2: O PADRÃO OCULTO                                                          -->
<!-- ═══════════════════════════════════════════════════════════════════════════════ -->

### Bloco 2: O Padrão Oculto - O Ciclo de Desenvolvimento (15 min)

**Revelação:**

> "O que ninguém percebeu é que, por trás de todo sistema agêntico bem-sucedido, existe o mesmo padrão. Um ciclo que desenvolvedores experientes conhecem há décadas, mas que ganhou nova vida com a era dos agentes."

**O CICLO COMPLETO:**

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                    O CICLO DE DESENVOLVIMENTO AGÊNTICO                           │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│    ┌──────────────┐                                                              │
│    │  1. IDEAÇÃO  │◄─────────────────────────────────────────────────────────┐  │
│    │ (brainstorm) │                                                          │  │
│    └──────┬───────┘                                                          │  │
│           │                                                                  │  │
│           ▼                                                                  │  │
│    ┌──────────────┐                                                          │  │
│    │2. PLANEJAMENTO│                                                          │  │
│    │ (write-plan) │                                                          │  │
│    └──────┬───────┘                                                          │  │
│           │                                                                  │  │
│           ▼                                                                  │  │
│    ┌──────────────┐                                                          │  │
│    │3. ESPECIFICAÇÃO│  ← Geralmente a máquina faz                            │  │
│    │  (arquitetura)│                                                          │  │
│    └──────┬───────┘                                                          │  │
│           │                                                                  │  │
│           ▼                                                                  │  │
│    ┌──────────────┐     ┌──────────────┐     ┌──────────────┐               │  │
│    │4. IMPLEMENTAÇÃO│───►│   5. TESTE   │───►│ 6. CORREÇÃO  │               │  │
│    │  (codificação)│    │ (validação)  │    │  (debugging) │               │  │
│    └──────────────┘     └──────┬───────┘     └──────┬───────┘               │  │
│                                │                    │                        │  │
│                                ▼                    │                        │  │
│                         ┌──────────────┐            │                        │  │
│                         │7. APRIMORAMENTO│◄──────────┘                        │  │
│                         │ (refinamento)│                                     │  │
│                         └──────┬───────┘                                     │  │
│                                │                                             │  │
│                                ▼                                             │  │
│                         ┌──────────────┐                                     │  │
│                         │8. VALIDAÇÃO  │                                     │  │
│                         │   FINAL      │                                     │  │
│                         └──────┬───────┘                                     │  │
│                                │                                             │  │
│                                ▼                                             │  │
│                         ┌──────────────┐                                     │  │
│                         │9. DESENVOLVIMENTO│────────────────────────────────┘  │
│                         │   CONTÍNUO   │                                       │
│                         └──────────────┘                                       │
│                                                                                  │
│   "If you get the spec right, the code almost writes itself." — Al Harris       │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

**O insight de Al Harris (Amazon Kiro):**

> *"If you get the spec right, the code almost writes itself."*
>
> *"Se você acertar a especificação, o código praticamente se escreve sozinho."*

**A analogia com o processo decisório judicial:**

| Ciclo de Desenvolvimento | Processo Judicial |
|-------------------------|-------------------|
| **1. Ideação** | Leitura inicial dos autos |
| **2. Planejamento** | Identificação das questões a decidir |
| **3. Especificação** | Estruturação do relatório |
| **4. Implementação** | Redação da fundamentação |
| **5. Teste** | Verificação de consistência |
| **6. Correção** | Ajuste de contradições |
| **7. Aprimoramento** | Refinamento da redação |
| **8. Validação Final** | Revisão antes de publicar |
| **9. Desenvolvimento Contínuo** | Embargos, recursos, evolução |

**O erro fatal do Vibe Coding:**

> "O Vibe Coding pula direto para a etapa 4 (Implementação). É como um juiz que começa a redigir a sentença sem ter feito o relatório. Sem ter identificado as questões. Sem ter pesquisado precedentes. O resultado? Retrabalho infinito."

---

<!-- ═══════════════════════════════════════════════════════════════════════════════ -->
<!-- ACT 3: A REVELAÇÃO                                                              -->
<!-- ═══════════════════════════════════════════════════════════════════════════════ -->

### Bloco 3: As Duas Noções de Workflow (12 min)

**A virada:**

> "Mas há uma sutileza que muitos perdem. Quando falamos de 'workflow' em sistemas agênticos, estamos falando de DUAS coisas diferentes. E confundir as duas é receita para fracasso."

**AS DUAS NOÇÕES DE WORKFLOW:**

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                        DUAS NOÇÕES DE WORKFLOW                                   │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ┌─────────────────────────────────┐    ┌─────────────────────────────────┐     │
│  │    WORKFLOW HUMANO-AGENTE       │    │    WORKFLOW AGENTE-AGENTE       │     │
│  │    (Colaboração)                │    │    (Orquestração)               │     │
│  ├─────────────────────────────────┤    ├─────────────────────────────────┤     │
│  │                                 │    │                                 │     │
│  │  Human ◄──────► Agent           │    │      ┌─────────┐                │     │
│  │         diálogo                 │    │      │ORQUESTR.│                │     │
│  │                                 │    │      └────┬────┘                │     │
│  │  • Brainstorm juntos            │    │           │                     │     │
│  │  • Humano aprova cada etapa     │    │     ┌─────┼─────┐               │     │
│  │  • Agente executa com feedback  │    │     ▼     ▼     ▼               │     │
│  │  • Iteração contínua            │    │  ┌─────┐┌─────┐┌─────┐         │     │
│  │                                 │    │  │Agent││Agent││Agent│         │     │
│  │  QUANDO USAR:                   │    │  │  1  ││  2  ││  3  │         │     │
│  │  • Tarefas criativas            │    │  └─────┘└─────┘└─────┘         │     │
│  │  • Decisões de alto risco       │    │                                 │     │
│  │  • Aprendizado/exploração       │    │  • Agentes coordenados          │     │
│  │  • Primeiras versões            │    │  • Humano só no início/fim      │     │
│  │                                 │    │  • Execução autônoma            │     │
│  │                                 │    │  • Paralelização possível       │     │
│  │                                 │    │                                 │     │
│  │                                 │    │  QUANDO USAR:                   │     │
│  │                                 │    │  • Tarefas repetitivas          │     │
│  │                                 │    │  • Pipeline estabelecido        │     │
│  │                                 │    │  • Escala (N processos)         │     │
│  │                                 │    │  • Produção contínua            │     │
│  └─────────────────────────────────┘    └─────────────────────────────────┘     │
│                                                                                  │
│  NÃO SÃO EXCLUDENTES — Um sistema maduro usa AMBOS                              │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

**A progressão natural:**

> "Todo sistema agêntico começa com workflow humano-agente (você e o Claude construindo juntos) e evolui para workflow agente-agente (o sistema executando sozinho enquanto você supervisiona)."

**Exemplo jurídico:**

```
FASE 1: Workflow Humano-Agente (construção)
├── Você + Claude: "Vamos criar um pipeline para BPC"
├── Você + Claude: "Como estruturar o relatório?"
├── Você + Claude: "Quais precedentes são essenciais?"
└── Resultado: Pipeline desenhado e testado

FASE 2: Workflow Agente-Agente (operação)
├── Você: /pipeline-sentenca 0123456-78.2024.4.05.8100
├── Orquestrador: Delega para subagentes
├── Subagentes: Executam em paralelo
└── Você: Revisa resultado final
```

**A citação reveladora:**

> *"Workflows are systems where LLMs and tools are orchestrated through predefined code paths. Agents, on the other hand, are systems where LLMs dynamically direct their own processes."*
>
> *"Workflows são sistemas onde LLMs e ferramentas são orquestrados através de caminhos pré-definidos. Agentes, por outro lado, são sistemas onde LLMs direcionam dinamicamente seus próprios processos."*
>
> — Anthropic, "Building Effective Agents"

---

<!-- ═══════════════════════════════════════════════════════════════════════════════ -->
<!-- ACT 4: VALIDAÇÃO - WORKFLOW HUMANO-AGENTE                                       -->
<!-- ═══════════════════════════════════════════════════════════════════════════════ -->

### Bloco 4: Workflow Humano-Agente - O Sistema Superpowers (20 min)

**Transição:**

> "Vamos começar pelo workflow humano-agente. E existe um sistema que captura perfeitamente esse padrão: o Superpowers, criado por Jesse Vincent."

#### 4.1 A Filosofia Superpowers

> *"Agents need discipline, not freedom."*
>
> *"Agentes precisam de disciplina, não de liberdade."*
>
> — Jesse Vincent (criador do Superpowers)

**O problema que resolve:**

| Sem Superpowers | Com Superpowers |
|-----------------|-----------------|
| Claude pula direto para codar | Claude verifica skills primeiro |
| Racionaliza atalhos | Segue processo obrigatório |
| Esquece boas práticas | Documentação viva é lei |
| Não verifica se terminou | Checklist de completude |
| Código apressado com bugs | Código robusto com testes |

#### 4.2 O Fluxo em Três Comandos

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                    FLUXO SUPERPOWERS                                             │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│   ┌────────────────────┐                                                         │
│   │ /superpowers:      │                                                         │
│   │   brainstorm       │  ← Fase 1: Ideação colaborativa                         │
│   │                    │                                                         │
│   │ "O que você quer   │                                                         │
│   │  construir?"       │                                                         │
│   └─────────┬──────────┘                                                         │
│             │                                                                    │
│             │  [Perguntas iterativas, uma de cada vez]                           │
│             │  [Propostas de abordagem com trade-offs]                           │
│             │  [Design validado seção por seção]                                 │
│             │                                                                    │
│             ▼                                                                    │
│   ┌────────────────────┐                                                         │
│   │ /superpowers:      │                                                         │
│   │   write-plan       │  ← Fase 2: Planejamento detalhado                       │
│   │                    │                                                         │
│   │ Premissa: Quem     │                                                         │
│   │ executa tem ZERO   │                                                         │
│   │ contexto           │                                                         │
│   └─────────┬──────────┘                                                         │
│             │                                                                    │
│             │  [Tarefas atômicas com arquivos específicos]                       │
│             │  [Comandos de verificação para cada passo]                         │
│             │  [Mensagens de commit pré-escritas]                                │
│             │                                                                    │
│             ▼                                                                    │
│   ┌────────────────────┐                                                         │
│   │ /superpowers:      │                                                         │
│   │   execute-plan     │  ← Fase 3: Execução com subagentes                      │
│   │                    │                                                         │
│   │ Subagentes com     │                                                         │
│   │ contexto isolado   │                                                         │
│   └────────────────────┘                                                         │
│                                                                                  │
│   "The plan is clear enough for an enthusiastic junior engineer                 │
│    with poor taste, no judgement, and no project context to follow."            │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### 4.3 Exemplo Prático: Brainstorm

**Demonstração ao vivo (ou narrada):**

```
Usuário: /superpowers:brainstorm Quero criar um sistema para extrair
         dados estruturados de petições iniciais

Claude: Vou ajudá-lo a refinar esse design. Primeira pergunta:

        Que tipos de dados você precisa extrair?

        a) Partes (autor, réu, advogados)
        b) Pedidos (procedente, improcedente, parcial)
        c) Valores (causa, condenação, honorários)
        d) Todos os acima
        e) Outros (especifique)

Usuário: d) Todos os acima

Claude: Ótimo. Segunda pergunta:

        Qual é o formato de entrada?

        a) PDF do PJE (com estrutura variável)
        b) Texto extraído (já processado)
        c) Ambos (sistema deve aceitar os dois)

[Continua iterativamente até ter especificação completa]
```

#### 4.4 A Iron Law (Lei de Ferro)

O Superpowers introduz o conceito de **Iron Law** — regras invioláveis:

```
┌─────────────────────────────────────────────────────────────────┐
│                     IRON LAWS DO SUPERPOWERS                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  TDD (Test-Driven Development):                                  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST            │  │
│  │ (Nenhum código de produção sem um teste falhando primeiro) │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  DEBUGGING:                                                      │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST            │  │
│  │ (Nenhuma correção sem investigação da causa raiz primeiro) │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  VERIFICAÇÃO:                                                    │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │ NO COMPLETION CLAIMS WITHOUT FRESH VERIFICATION            │  │
│  │ (Nenhuma declaração de completude sem verificação nova)    │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                  │
│  "IF A SKILL APPLIES TO YOUR TASK, YOU DO NOT HAVE A CHOICE.   │
│   YOU MUST USE IT."                                              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

**Analogia jurídica:**

> "Iron Laws são como súmulas vinculantes. Não são sugestões. São obrigações. Se existe uma súmula vinculante sobre o tema, você não pode simplesmente ignorá-la porque 'parece overkill para este caso'."

---

<!-- ═══════════════════════════════════════════════════════════════════════════════ -->
<!-- ACT 5: VALIDAÇÃO - WORKFLOW AGENTE-AGENTE                                       -->
<!-- ═══════════════════════════════════════════════════════════════════════════════ -->

### Bloco 5: Workflow Agente-Agente - Os 5 Padrões da Anthropic (20 min)

**Transição:**

> "Agora que entendemos o workflow humano-agente, vamos ao segundo tipo: quando agentes coordenam OUTROS agentes. A Anthropic documentou 5 padrões fundamentais."

#### 5.1 A Taxonomia Anthropic

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                    5 PADRÕES DE WORKFLOWS AGÊNTICOS                              │
│                    (Ordem crescente de complexidade)                             │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  1. PROMPT CHAINING (Encadeamento)                                               │
│     ┌─────┐    ┌─────┐    ┌─────┐    ┌─────┐                                    │
│     │ LLM │───►│ LLM │───►│GATE │───►│ LLM │                                    │
│     │  1  │    │  2  │    │valid│    │  3  │                                    │
│     └─────┘    └─────┘    └─────┘    └─────┘                                    │
│     Sequencial, cada saída alimenta próxima entrada                              │
│                                                                                  │
│  2. ROUTING (Roteamento)                                                         │
│                    ┌──────────┐                                                  │
│                    │ ROUTER   │                                                  │
│                    └────┬─────┘                                                  │
│              ┌──────────┼──────────┐                                             │
│              ▼          ▼          ▼                                             │
│         ┌─────────┐┌─────────┐┌─────────┐                                       │
│         │Handler A││Handler B││Handler C│                                       │
│         └─────────┘└─────────┘└─────────┘                                       │
│     Classifica e direciona para especialista                                     │
│                                                                                  │
│  3. PARALLELIZATION (Paralelização)                                              │
│                    ┌──────────┐                                                  │
│                    │  INPUT   │                                                  │
│                    └────┬─────┘                                                  │
│              ┌──────────┼──────────┐                                             │
│              ▼          ▼          ▼                                             │
│         ┌─────────┐┌─────────┐┌─────────┐                                       │
│         │ LLM 1   ││ LLM 2   ││ LLM 3   │  (simultâneo)                         │
│         └────┬────┘└────┬────┘└────┬────┘                                       │
│              └──────────┼──────────┘                                             │
│                         ▼                                                        │
│                    ┌──────────┐                                                  │
│                    │AGGREGATOR│                                                  │
│                    └──────────┘                                                  │
│     Subtarefas independentes executadas ao mesmo tempo                           │
│                                                                                  │
│  4. ORCHESTRATOR-WORKERS (Orquestrador-Trabalhadores)                            │
│                    ┌──────────────┐                                              │
│                    │ ORCHESTRATOR │                                              │
│                    │ (planeja,    │                                              │
│                    │  delega,     │                                              │
│                    │  sintetiza)  │                                              │
│                    └──────┬───────┘                                              │
│              ┌────────────┼────────────┐                                         │
│              ▼            ▼            ▼                                         │
│         ┌─────────┐  ┌─────────┐  ┌─────────┐                                   │
│         │ Worker  │  │ Worker  │  │ Worker  │  (contexto isolado)               │
│         └─────────┘  └─────────┘  └─────────┘                                   │
│     Subtarefas determinadas DINAMICAMENTE                                        │
│                                                                                  │
│  5. EVALUATOR-OPTIMIZER (Avaliador-Otimizador)                                   │
│         ┌───────────────────────────────────────┐                               │
│         │  ┌──────────┐        ┌──────────┐    │                               │
│         │  │GENERATOR │───────►│EVALUATOR │    │                               │
│         │  └──────────┘        └────┬─────┘    │                               │
│         │       ▲                   │          │                               │
│         │       └───────────────────┘          │                               │
│         │           (feedback loop)            │                               │
│         └───────────────────────────────────────┘                               │
│     Um gera, outro avalia, loop até satisfatório                                 │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### 5.2 Quando Usar Cada Padrão

| Padrão | Quando Usar | Exemplo Jurídico |
|--------|-------------|------------------|
| **Prompt Chaining** | Etapas sequenciais conhecidas | Relatório -> Análise -> Fundamentação |
| **Routing** | Inputs variados, handlers especializados | BPC vs Aposentadoria vs Pensão |
| **Parallelization** | Subtarefas independentes | 3 revisores analisando mesma sentença |
| **Orchestrator-Workers** | Subtarefas dinâmicas | Pesquisa: decidir quantas fontes consultar |
| **Evaluator-Optimizer** | Refinamento iterativo | Fundamentação com maker-checker |

#### 5.3 O Pipeline Sentença Mapeado

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│              PIPELINE SENTENÇA: PADRÕES EM AÇÃO                                  │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  ETAPA 1: EXTRAÇÃO                                                               │
│  Padrão: PROMPT CHAINING                                                         │
│  ┌────────┐    ┌────────┐    ┌────────┐                                         │
│  │PDF→TXT │───►│LINHA DO│───►│RELATÓRIO│                                        │
│  │        │    │ TEMPO  │    │        │                                         │
│  └────────┘    └────────┘    └────────┘                                         │
│                                                                                  │
│  ETAPA 2: ANÁLISE + PESQUISA                                                     │
│  Padrão: ROUTING + PARALLELIZATION                                               │
│                    ┌──────────┐                                                  │
│                    │CLASSIFICAR│                                                  │
│                    │TRIVIAL/   │                                                  │
│                    │HARD CASE  │                                                  │
│                    └─────┬─────┘                                                  │
│                          │                                                       │
│              ┌───────────┼───────────┐                                          │
│              ▼           ▼           ▼                                          │
│         ┌─────────┐ ┌─────────┐ ┌─────────┐                                    │
│         │Pesquisa │ │Pesquisa │ │Pesquisa │  (PARALELO)                        │
│         │  BNP    │ │  CJF    │ │  JULIA  │                                    │
│         └─────────┘ └─────────┘ └─────────┘                                    │
│                                                                                  │
│  ETAPA 3: FUNDAMENTAÇÃO                                                          │
│  Padrão: EVALUATOR-OPTIMIZER                                                     │
│         ┌───────────────────────────────────────┐                               │
│         │  ┌──────────┐        ┌──────────┐    │                               │
│         │  │FUNDAMENTAR│───────►│VERIFICAR │    │                               │
│         │  │(maker)   │        │(checker) │    │                               │
│         │  └──────────┘        └────┬─────┘    │                               │
│         │       ▲                   │          │                               │
│         │       └───────────────────┘          │                               │
│         └───────────────────────────────────────┘                               │
│                                                                                  │
│  ETAPA 4: REVISÃO                                                                │
│  Padrão: PARALLELIZATION + PROMPT CHAINING                                       │
│              ┌─────────────┬─────────────┐                                       │
│              ▼             ▼             ▼                                       │
│         ┌─────────┐  ┌─────────┐  ┌─────────┐                                   │
│         │ADVOGADO │  │CONSIST. │  │CONSIST. │  (PARALELO)                       │
│         │DO DIABO │  │INTERNA  │  │EXTERNA  │                                   │
│         └────┬────┘  └────┬────┘  └────┬────┘                                   │
│              └─────────────┼─────────────┘                                       │
│                            ▼                                                     │
│                    ┌─────────────┐                                               │
│                    │CONSOLIDADOR │  (SEQUENCIAL)                                │
│                    └─────────────┘                                               │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

#### 5.4 A Citação-Chave

> *"Para a maioria das aplicações, o sistema agêntico de produção será uma combinação de workflows e agentes."*
>
> — Anthropic, "Building Effective Agents"

---

<!-- ═══════════════════════════════════════════════════════════════════════════════ -->
<!-- ACT 6: DEMONSTRAÇÃO PRÁTICA                                                     -->
<!-- ═══════════════════════════════════════════════════════════════════════════════ -->

### Bloco 6: Mão na Massa - Projetando um Mini-Sistema (20 min)

**Introdução:**

> "Agora vamos aplicar o que aprendemos. Vamos projetar, juntos, um mini-sistema usando o ciclo completo."

#### 6.1 O Desafio

**Tarefa:** Criar um sistema para verificar se uma sentença está completa (todos os pedidos decididos, todos os argumentos enfrentados).

#### 6.2 Fase 1: Ideação (Brainstorm)

```
┌─────────────────────────────────────────────────────────────────┐
│  BRAINSTORM: VERIFICADOR DE COMPLETUDE                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  PERGUNTA 1: O que define "completude" de uma sentença?         │
│                                                                  │
│  a) Todos os pedidos da inicial foram decididos                  │
│  b) Todos os argumentos da contestação foram enfrentados         │
│  c) Todas as provas foram analisadas                             │
│  d) Dispositivo coerente com fundamentação                       │
│  e) Sucumbência calculada corretamente                           │
│  f) Todos os acima                                               │
│                                                                  │
│  PERGUNTA 2: Qual o formato de entrada?                          │
│                                                                  │
│  a) Dois arquivos: inicial.txt + sentenca.txt                    │
│  b) Um arquivo: processo_completo.txt                            │
│  c) Três arquivos: inicial.txt + contestacao.txt + sentenca.txt  │
│                                                                  │
│  PERGUNTA 3: Qual o formato de saída?                            │
│                                                                  │
│  a) Relatório markdown com checklist                             │
│  b) JSON estruturado para integração                             │
│  c) Ambos                                                        │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

#### 6.3 Fase 2: Planejamento (Write-Plan)

```
┌─────────────────────────────────────────────────────────────────┐
│  PLANO: VERIFICADOR DE COMPLETUDE                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  TAREFA 1: Extrair pedidos da inicial                            │
│  ├── Arquivo: scripts/extrair_pedidos.py                         │
│  ├── Entrada: inicial.txt                                        │
│  ├── Saída: pedidos.json                                         │
│  └── Verificação: python -m pytest tests/test_extrair_pedidos.py │
│                                                                  │
│  TAREFA 2: Extrair decisões do dispositivo                       │
│  ├── Arquivo: scripts/extrair_decisoes.py                        │
│  ├── Entrada: sentenca.txt                                       │
│  ├── Saída: decisoes.json                                        │
│  └── Verificação: python -m pytest tests/test_extrair_decisoes.py│
│                                                                  │
│  TAREFA 3: Mapear pedidos -> decisões                            │
│  ├── Arquivo: scripts/mapear_correspondencia.py                  │
│  ├── Entrada: pedidos.json + decisoes.json                       │
│  ├── Saída: mapeamento.json                                      │
│  └── Verificação: Cada pedido tem decisão correspondente         │
│                                                                  │
│  TAREFA 4: Gerar relatório de completude                         │
│  ├── Arquivo: scripts/gerar_relatorio.py                         │
│  ├── Entrada: mapeamento.json                                    │
│  ├── Saída: completude.md                                        │
│  └── Verificação: Checklist visual + score percentual            │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

#### 6.4 Fase 3: Especificação (Arquitetura)

```
┌─────────────────────────────────────────────────────────────────┐
│  ARQUITETURA: VERIFICADOR DE COMPLETUDE                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Padrão: PROMPT CHAINING                                         │
│                                                                  │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐      │
│  │ EXTRAIR  │──►│ EXTRAIR  │──►│  MAPEAR  │──►│ GERAR    │      │
│  │ PEDIDOS  │   │ DECISÕES │   │ CORRESP. │   │ RELATORIO│      │
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘      │
│       │              │              │              │              │
│   inicial.txt   sentenca.txt   pedidos.json  completude.md      │
│                                decisoes.json                     │
│                                                                  │
│  GATE entre etapas: Validar que arquivo existe e tem conteúdo   │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

#### 6.5 Demonstração: Executando com Claude Code

```bash
# Criar estrutura de diretórios
> mkdir -p verificador-completude/{scripts,tests,data}

# Fase 1: Brainstorm (já feito acima)

# Fase 2: Criar plano
> claude "Crie o script extrair_pedidos.py seguindo TDD.
         Primeiro escreva o teste, depois a implementação."

# Fase 3: Verificar
> python -m pytest tests/ -v

# Resultado: Sistema funcional em 20 minutos
```

---

<!-- ═══════════════════════════════════════════════════════════════════════════════ -->
<!-- ACT 7: CONEXÃO INESPERADA                                                       -->
<!-- ═══════════════════════════════════════════════════════════════════════════════ -->

### Bloco 7: O Pipeline Sentença Revisitado (10 min)

**A conexão:**

> "Lembram do Pipeline Sentença que vimos nas aulas anteriores? Agora vocês conseguem ver a arquitetura completa."

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│              PIPELINE SENTENÇA: VISÃO ARQUITETURAL COMPLETA                      │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                  │
│  WORKFLOW HUMANO-AGENTE (Fase de Construção)                                     │
│  ├── Brainstorm: Quais tipos de processo? Quais matérias?                        │
│  ├── Planejamento: Quais etapas? Quais validações?                               │
│  └── Especificação: Commands, agents, skills                                     │
│                                                                                  │
│  WORKFLOW AGENTE-AGENTE (Fase de Operação)                                       │
│  ├── /pipeline-sentenca [numero]                                                 │
│  │                                                                               │
│  │   ┌────────────────────────────────────────────────────────────────────┐     │
│  │   │                    ORQUESTRADOR                                     │     │
│  │   │  (calcula $WORKSPACE, injeta contexto, valida sinalizadores)        │     │
│  │   └───────────────────────────┬────────────────────────────────────────┘     │
│  │                               │                                               │
│  │              ┌────────────────┼────────────────┐                              │
│  │              ▼                ▼                ▼                              │
│  │   ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐                │
│  │   │   SUBAGENTE     │ │   SUBAGENTE     │ │   SUBAGENTE     │                │
│  │   │   Extração      │ │   Pesquisa      │ │   Pesquisa      │                │
│  │   │   (contexto     │ │   BNP           │ │   CJF           │                │
│  │   │    isolado)     │ │   (paralelo)    │ │   (paralelo)    │                │
│  │   └────────┬────────┘ └────────┬────────┘ └────────┬────────┘                │
│  │            │                   │                   │                          │
│  │            └───────────────────┼───────────────────┘                          │
│  │                                ▼                                              │
│  │                    ┌─────────────────────┐                                   │
│  │                    │   CONSOLIDAÇÃO      │                                   │
│  │                    │   (merge paths)     │                                   │
│  │                    └──────────┬──────────┘                                   │
│  │                               │                                               │
│  │                               ▼                                               │
│  │                    ┌─────────────────────┐                                   │
│  │                    │   FUNDAMENTAÇÃO     │                                   │
│  │                    │   (evaluator-       │                                   │
│  │                    │    optimizer)       │                                   │
│  │                    └──────────┬──────────┘                                   │
│  │                               │                                               │
│  │              ┌────────────────┼────────────────┐                              │
│  │              ▼                ▼                ▼                              │
│  │   ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐                │
│  │   │   REVISOR       │ │   REVISOR       │ │   REVISOR       │                │
│  │   │   Advogado      │ │   Consistência  │ │   Consistência  │                │
│  │   │   do Diabo      │ │   Interna       │ │   Externa       │                │
│  │   └────────┬────────┘ └────────┬────────┘ └────────┬────────┘                │
│  │            │                   │                   │                          │
│  │            └───────────────────┼───────────────────┘                          │
│  │                                ▼                                              │
│  │                    ┌─────────────────────┐                                   │
│  │                    │   CONSOLIDADOR      │                                   │
│  │                    │   FINAL             │                                   │
│  │                    └──────────┬──────────┘                                   │
│  │                               │                                               │
│  │                               ▼                                               │
│  └─────────────────────► SENTENÇA.md ───────────────────► HUMANO REVISA         │
│                                                                                  │
│  PADRÕES UTILIZADOS:                                                             │
│  • Prompt Chaining: Etapas sequenciais                                           │
│  • Parallelization: Pesquisa em 3 fontes, Revisão com 3 críticos                │
│  • Evaluator-Optimizer: Fundamentação com maker-checker                          │
│  • Orchestrator-Workers: Orquestrador central + subagentes isolados             │
│                                                                                  │
└─────────────────────────────────────────────────────────────────────────────────┘
```

**A revelação:**

> "O Pipeline Sentença não é mágica. É a aplicação sistemática dos padrões que vocês acabaram de aprender. E vocês podem construir sistemas equivalentes para QUALQUER domínio."

---

<!-- ═══════════════════════════════════════════════════════════════════════════════ -->
<!-- ACT 8: CONCLUSÃO CONTRA-INTUITIVA                                               -->
<!-- ═══════════════════════════════════════════════════════════════════════════════ -->

### Bloco 8: Fechamento (10 min)

#### 8.1 O Insight Final

> "Voltemos à pergunta do início: por que alguns sistemas agênticos funcionam e outros viram spaghetti?"

**A conclusão contra-intuitiva:**

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│     O SEGREDO NÃO É O AGENTE.                                   │
│                                                                 │
│     É O FLUXO DE TRABALHO.                                      │
│                                                                 │
│     Sistemas agênticos de sucesso não são construídos           │
│     por agentes mais inteligentes.                              │
│                                                                 │
│     São construídos por HUMANOS que sabem projetar              │
│     workflows que DISCIPLINAM os agentes.                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

> "O Claude mais poderoso do mundo, sem um workflow adequado, produz spaghetti. O Claude mais simples, com um workflow bem projetado, produz sistemas robustos."

#### 8.2 Resumo da Jornada

| O Que Aprendemos | Insight |
|------------------|---------|
| O problema | Vibe Coding pula etapas essenciais |
| O ciclo | Ideação -> Planejamento -> Especificação -> Implementação -> ... |
| Duas noções | Workflow humano-agente (colaboração) vs agente-agente (orquestração) |
| Superpowers | brainstorm -> write-plan -> execute-plan |
| 5 Padrões | Chaining, Routing, Parallelization, Orchestrator, Evaluator |
| Pipeline Sentença | Combinação sistemática de todos os padrões |

#### 8.3 Resposta às Questões Centrais

**Q1: Por que sistemas agênticos de sucesso seguem um fluxo estruturado?**
> Porque pular etapas cria retrabalho exponencial. Cada hora investida em planejamento economiza 10 horas de correção.

**Q2: Qual a diferença entre workflow humano-agente e agente-agente?**
> Humano-agente é colaboração iterativa para CONSTRUIR o sistema. Agente-agente é orquestração autônoma para OPERAR o sistema.

**Q3: Como aplicar o ciclo na prática?**
> Use Superpowers (brainstorm -> write-plan -> execute-plan) e escolha o padrão Anthropic adequado para cada tipo de tarefa.

#### 8.4 Próximos Passos

```
AULA 0: Por que mudar?                    ✓ Concluída
AULA 1: O problema e a solução            ✓ Concluída
AULA 2: Como instalar e usar o terminal   ✓ Concluída
AULA 3: Como arquitetar sistemas          ✓ Hoje
AULA 4: Como construir commands e skills  → Próxima
AULA 5: Como aplicar ao trabalho jurídico
```

#### 8.5 Frase de Fechamento

> "Hoje vocês aprenderam que sistemas agênticos de sucesso não nascem de agentes inteligentes. Nascem de workflows inteligentes. Na próxima aula, vamos colocar a mão na massa e construir nossos próprios commands e skills — as peças que compõem esses workflows."
>
> "Lembrem-se: **se você acertar a especificação, o código se escreve sozinho**."

---

## Metáforas e Analogias

| Conceito | Metáfora | Por que funciona |
|----------|----------|------------------|
| Vibe Coding | Juiz que redige sentença sem ler autos | Mostra absurdo de pular etapas |
| Ciclo de desenvolvimento | Processo decisório judicial | Juristas conhecem cada fase |
| Iron Laws | Súmulas vinculantes | Obrigatórias, não opcionais |
| Workflow humano-agente | Juiz + assessor construindo tese | Colaboração iterativa |
| Workflow agente-agente | Gabinete com assessores especializados | Delegação coordenada |
| Padrão Chaining | Processo judicial em fases | Sequência conhecida |
| Padrão Parallelization | Três revisores na mesma sentença | Múltiplas perspectivas |

---

## Citações Memoráveis (Para Slides)

> "If you get the spec right, the code almost writes itself."
> — Al Harris (Amazon Kiro)

> "Agents need discipline, not freedom."
> — Jesse Vincent (Superpowers)

> "NO PRODUCTION CODE WITHOUT A FAILING TEST FIRST"
> — Iron Law do TDD

> "Workflows são sistemas com caminhos pré-definidos. Agentes direcionam dinamicamente seus próprios processos."
> — Anthropic

> "O segredo não é o agente. É o fluxo de trabalho."

> "Cada hora em planejamento economiza 10 horas em correção."

---

## SuperDicas

1. **Nunca pule o brainstorm**
   Mesmo para tarefas que parecem simples, 5 minutos de perguntas podem revelar complexidades ocultas.

2. **Escreva planos para alguém com zero contexto**
   Se o plano precisa de explicação verbal, ele não está completo. Um bom plano é auto-suficiente.

3. **Use Iron Laws para suas próprias regras**
   Crie suas súmulas vinculantes: "NENHUMA CITAÇÃO SEM VERIFICAÇÃO" é uma Iron Law jurídica.

4. **Comece com Chaining, evolua para Parallelization**
   A maioria dos sistemas pode começar sequencial e depois otimizar para paralelo.

5. **O orquestrador não faz trabalho — coordena trabalho**
   Se seu orquestrador está fazendo análise substantiva, ele virou trabalhador. Delegue.

---

## Erros Comuns a Evitar

| Erro | Por que acontece | Como evitar |
|------|------------------|-------------|
| Pular direto para código | Ansiedade de "ver funcionando" | Forçar brainstorm obrigatório |
| Planos vagos | "O Claude vai entender" | Escreva para alguém sem contexto |
| Orquestrador que faz tudo | Não separar coordenação de execução | Um prompt = uma responsabilidade |
| Paralelizar dependências | Querer velocidade sem análise | Mapeie dependências antes |
| Ignorar validação | "Parece que funcionou" | Iron Law: sem verificação, não está feito |

---

## Material de Apoio

### Papers e Artigos Acadêmicos
| Título | Autores | Ano | Link | Relevância |
|--------|---------|-----|------|------------|
| Building Effective Agents | Anthropic | 2024 | [anthropic.com](https://www.anthropic.com/research/building-effective-agents) | Os 5 padrões fundamentais |
| Multi-Agent Research System | Anthropic | 2025 | [anthropic.com](https://www.anthropic.com/engineering/multi-agent-research-system) | Orquestração em escala |

### Vídeos
| Título | Canal/Autor | Duração | Link | Relevância |
|--------|-------------|---------|------|------------|
| Superpowers: Coding Agents | Jesse Vincent | 30min | [blog.fsck.com](https://blog.fsck.com/2025/10/09/superpowers/) | Sistema completo de workflow |
| Spec-Driven Development | Al Harris (Kiro) | 25min | AI Engineer Summit | Filosofia spec-first |

### Posts de Blog e Tutoriais
| Título | Autor/Site | Data | Link | Relevância |
|--------|------------|------|------|------------|
| Superpowers 4 Release | Jesse Vincent | Dez/2025 | [blog.fsck.com](https://blog.fsck.com/2025/12/18/superpowers-4/) | Versão atual do sistema |
| Claude Code Best Practices | Anthropic | 2025 | [anthropic.com](https://www.anthropic.com/engineering/claude-code-best-practices) | Práticas oficiais |

### Documentação Oficial
- [Anthropic: Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)
- [Claude Code Docs: Common Workflows](https://code.claude.com/docs/en/common-workflows)
- [GitHub: obra/superpowers](https://github.com/obra/superpowers)
- [GitHub: anthropics/skills](https://github.com/anthropics/skills)

### Demonstrações a Preparar

| Demo | Recurso Necessário | Bloco |
|------|-------------------|-------|
| Vibe Coding vs Spec-Driven | Dois projetos comparados | 1 |
| Brainstorm com Superpowers | Plugin instalado | 4 |
| Padrão Parallelization | Três subagentes simultâneos | 5 |
| Mini-sistema verificador | Claude Code + estrutura de pastas | 6 |
| Pipeline Sentença completo | Sistema já configurado | 7 |

### Checklist de Preparação do Instrutor

- [ ] Plugin Superpowers instalado (ou demonstração gravada)
- [ ] Exemplos de planos bem escritos vs mal escritos
- [ ] Diagramas dos 5 padrões Anthropic impressos/slides
- [ ] Projeto verificador-completude pré-configurado
- [ ] Pipeline Sentença pronto para demonstração
- [ ] Backup: gravações das demos caso falhem ao vivo

---

## Referências Bibliográficas

1. **Anthropic** (2024). "Building Effective Agents". Documentação oficial.
2. **Anthropic** (2025). "How we built our multi-agent research system". Engineering Blog.
3. **Vincent, J.** (2025). "Superpowers: How I'm using coding agents". blog.fsck.com.
4. **Harris, A.** (2025). "Spec-Driven Development with Amazon Kiro". AI Engineer Summit.
5. **Karpathy, A.** (2025). "Vibe Coding". Twitter/X.
6. **Horthy, D.** (2024). "12 Factor Agents". HumanLayer Documentation.

---

## Correspondência com Estrutura Gladwell

| Fase Gladwell | Bloco da Aula | Conteúdo |
|---------------|---------------|----------|
| ANEDOTA | Bloco 1 | História do Vibe Coding e seus problemas |
| CURIOSIDADE | Final do Bloco 1 | "O que os bem-sucedidos sabiam?" |
| PADRÃO OCULTO | Bloco 2 | O ciclo de desenvolvimento completo |
| REVELAÇÃO | Bloco 3 | Duas noções de workflow |
| VALIDAÇÃO | Blocos 4-5 | Superpowers + 5 Padrões Anthropic |
| DEMONSTRAÇÃO | Bloco 6 | Mini-sistema verificador |
| CONEXÃO INESPERADA | Bloco 7 | Pipeline Sentença é combinação de padrões |
| CONCLUSÃO CONTRA-INTUITIVA | Bloco 8 | "O segredo não é o agente, é o workflow" |

---

*Roteiro de SUPERAULA gerado por tutor-roteiro*
*Curso: Sistemas Agênticos para Juristas*
*Estrutura Narrativa: Gladwell (Anedota -> Insight)*
*Data: 2026-01-25*
