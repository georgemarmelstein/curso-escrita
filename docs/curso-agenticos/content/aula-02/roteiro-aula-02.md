# ROTEIRO DE SUPERAULA

## Metadados
- **Tema:** Aula 02 — Desvendando o Claude Code: Uma Introdução Amigável
- **Duração estimada:** 90-120 minutos
- **Público-alvo:** Juristas (magistrados, advogados, servidores) que completaram Aulas 00 e 01
- **Pré-requisitos:** Aulas 00 e 01 concluídas; conta Anthropic ativa
- **Ambiente:** Terminal + Claude Code instalado (ou acompanhando demonstração)
- **Estrutura narrativa:** Jornada do Herói (superação do medo do terminal)

---

## Propósito

Esta é a aula em que o aluno finalmente **cruza o portal**. Não é mais teoria. Não é mais demonstração distante. É o momento de **colocar as mãos no terminal** e descobrir que a "ferramenta alienígena" não é tão alienígena assim — ela foi projetada para responder em linguagem natural, dentro de um ambiente de texto.

> *"Clearly some powerful alien tool was handed around except it comes with no manual."*
>
> *"Claramente alguma ferramenta alienígena poderosa foi distribuída, exceto que ela vem sem manual."*
>
> — Andrej Karpathy

**Esta aula É o manual.** O manual amigável que a ferramenta alienígena deveria ter vindo.

O medo do terminal é real. A tela preta é intimidante. Mas há um segredo: **o Claude Code é um chat**. Um chat que mora no terminal. Você conversa com ele do mesmo jeito que conversa no Claude Web — mas agora ele tem superpoderes: acesso ao seu computador, aos seus arquivos, à execução de comandos.

> *"Claude Code emerged as the first convincing demonstration of what an LLM Agent looks like—something that in a loopy way strings together tool use and reasoning for extended problem solving."*
>
> *"Claude Code emergiu como a primeira demonstração convincente de como um Agente LLM se parece—algo que de forma iterativa conecta uso de ferramentas e raciocínio para resolução estendida de problemas."*
>
> — Andrej Karpathy, 2025 LLM Year in Review

Ao final desta aula, o aluno terá superado o medo inicial, instalado a ferramenta, executado os primeiros comandos e entendido a estrutura do ambiente. O herói terá cruzado o primeiro limiar.

---

## Objetivos

**Questões centrais a serem respondidas:**
1. O que exatamente é o Claude Code e por que ele mora no terminal?
2. Como superar o medo da tela preta e começar a usar?
3. Qual é a estrutura de diretórios que torna o Claude Code tão poderoso?

**Ao final desta aula, o aluno será capaz de:**
- Instalar o Claude Code em seu computador (ou entender o processo)
- Executar os primeiros comandos e slash commands
- Configurar níveis de permissão adequados ao seu contexto
- Navegar pela estrutura de diretórios (.claude, CLAUDE.md, commands, skills)
- Iniciar conversas em linguagem natural no terminal
- Sentir-se confortável com a interface de texto

---

## Estrutura Narrativa: A Jornada do Herói

```
┌─────────────────────────────────────────────────────────────────────┐
│                    ESTRUTURA DA AULA 02                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ACT 1: O MUNDO ORDINÁRIO (onde estamos)                           │
│  └── Bloco 1: Recapitulação e o Chamado Aceito                     │
│                                                                     │
│  ACT 2: O PORTAL (a ferramenta alienígena)                         │
│  └── Bloco 2: O Que É o Claude Code                                │
│  └── Bloco 2.5: Formas de Acesso ao Claude Code                    │
│                                                                     │
│  ACT 3: SUPERANDO O GUARDIÃO (o medo do terminal)                  │
│  └── Bloco 3: Desmistificando o Terminal                           │
│                                                                     │
│  ACT 4: CRUZANDO O LIMIAR (instalação)                             │
│  └── Bloco 4: Instalando o Claude Code                             │
│                                                                     │
│  ACT 5: PRIMEIRAS PROVAS (comandos básicos)                        │
│  └── Bloco 5: Primeiros Passos e Slash Commands                    │
│                                                                     │
│  ACT 6: ALIADOS E ARMAS (permissões e estrutura)                   │
│  └── Bloco 6: Configurações de Permissão                           │
│  └── Bloco 7: A Estrutura do Diretório                             │
│                                                                     │
│  ACT 7: MÃO NA MASSA (exercícios práticos)                         │
│  └── Bloco 8: Primeiros Usos Práticos                              │
│                                                                     │
│  ACT 8: RETORNO COM O ELIXIR (fechamento)                          │
│  └── Bloco 9: O Fantasma na Máquina                                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Visão Geral da Estrutura

| Bloco | Título | Duração | Fase da Jornada |
|-------|--------|---------|-----------------|
| 1 | Recapitulação: O Chamado Aceito | 8 min | Mundo Ordinário |
| 2 | O Que É o Claude Code | 12 min | O Portal |
| 2.5 | Formas de Acesso ao Claude Code | 10 min | O Portal |
| 3 | Desmistificando o Terminal | 10 min | Guardião |
| 4 | Instalando o Claude Code | 15 min | Cruzando o Limiar |
| 5 | Primeiros Passos e Slash Commands | 15 min | Primeiras Provas |
| 6 | Configurações de Permissão | 12 min | Aliados |
| 7 | A Estrutura do Diretório | 15 min | Armas |
| 8 | Primeiros Usos Práticos | 20 min | Mão na Massa |
| 9 | O Fantasma na Máquina | 8 min | Retorno |

**Tempo total:** ~125 min (ajustável conforme ritmo da turma)

---

## Blocos da Aula

---

# ACT 1: O MUNDO ORDINÁRIO

---

### Bloco 1: Recapitulação — O Chamado Aceito (8 min)

**Abertura:**
> "Vocês aceitaram o chamado. Estão aqui. Isso já é coragem."

**O que vimos até agora:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                    A JORNADA ATÉ AQUI                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  AULA 00: Por que mudar?                                           │
│  └── O modo assistente é incrível, MAS há limitações              │
│  └── A ferramenta alienígena foi distribuída sem manual           │
│  └── O terminal é o preço; a liberdade é a recompensa             │
│                                                                     │
│  AULA 01: O problema e a solução                                   │
│  └── O problema da janela de contexto (degradação/colapso)        │
│  └── Agentes não são assistentes mais poderosos                   │
│  └── São assistentes que COLABORAM via filesystem                 │
│                                                                     │
│  AULA 02: Cruzando o portal (HOJE)                                 │
│  └── Instalação e primeiros passos no Claude Code                 │
│  └── Superar o medo do terminal                                   │
│  └── Entender a estrutura que faz a mágica acontecer              │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**A confissão de Karpathy que nos trouxe até aqui:**

> *"I've never felt this much behind as a programmer. The profession is being dramatically refactored as the bits contributed by the programmer are increasingly sparse and between."*
>
> *"Eu nunca me senti tão atrasado como programador. A profissão está sendo dramaticamente refatorada, com as contribuições do programador cada vez mais esparsas e espaçadas."*
>
> — Andrej Karpathy

**O desafio que ele nomeou:**

> *"A new programmable layer of abstraction to master involving agents, subagents, their prompts, contexts, memory, modes, permissions, tools, plugins, skills, hooks, MCP, LSP, slash commands, workflows, IDE integrations..."*
>
> *"Uma nova camada programável de abstração a dominar envolvendo agentes, subagentes, seus prompts, contextos, memória, modos, permissões, ferramentas, plugins, skills, hooks, MCP, LSP, slash commands, workflows, integrações com IDEs..."*

**O paradoxo que vamos resolver hoje:**

> "Karpathy disse que a ferramenta alienígena veio sem manual. Hoje, vamos dar a vocês o manual. O manual amigável."

**Transição:**

> "Mas antes de abrir o manual, precisamos entender o que estamos abrindo. O que exatamente É o Claude Code?"

---

# ACT 2: O PORTAL

---

### Bloco 2: O Que É o Claude Code (12 min)

**Abertura:**
> "Vou começar com uma definição que parece estranha, mas é a mais precisa que existe."

**Definição oficial:**

> *"Claude Code is an agentic coding tool that lives in your terminal, understands your codebase, and helps you code faster by executing routine tasks, explaining complex code, and handling git workflows—all through natural language commands."*
>
> *"Claude Code é uma ferramenta agêntica de codificação que vive no seu terminal, entende sua base de código e ajuda você a programar mais rápido executando tarefas rotineiras, explicando código complexo e gerenciando fluxos de trabalho do Git — tudo através de comandos em linguagem natural."*
>
> — GitHub Anthropic

**Mas há uma definição mais profunda:**

> *"Claude Code is not a product as much as it's a Unix utility."*
>
> *"Claude Code não é tanto um produto quanto um utilitário Unix."*
>
> — Boris Cherny, Lead Engineer @ Anthropic, criador do Claude Code

**O que isso significa:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                    O QUE É O CLAUDE CODE                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  NÃO É:                              É:                            │
│  ├── Uma IDE                         ├── Um chat no terminal       │
│  ├── Um plugin de código             ├── Um utilitário Unix        │
│  ├── Uma ferramenta só pra devs      ├── Um operador do computador │
│  └── Uma interface gráfica           └── Um fantasma na máquina    │
│                                                                     │
│  "Claude Code is composable and scriptable. Commands like          │
│   'tail -f app.log | claude -p 'Avise-me se ver anomalias''        │
│   work."                                                            │
│                                       — Latent Space Podcast       │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**A origem: um projeto de fim de semana:**

> *"When I created Claude Code as a side project back in September 2024, I had no idea it would grow to what it is today."*
>
> *"Quando criei o Claude Code como um projeto paralelo em setembro de 2024, não fazia ideia de que ele cresceria para o que é hoje."*
>
> — Boris Cherny

**Por que isso importa:**

> "O Claude Code não nasceu como produto corporativo. Nasceu da curiosidade de um engenheiro experimentando formas de usar o modelo em diferentes lugares. Esse DNA de 'ferramenta de hackers' permanece — simples, poderoso, extensível."

**A metáfora do arreio:**

> *"AI tools split into AI model and harness, with capabilities emerging from their combination. Anthropic's video compares the AI model to a horse and Claude Code to a harness (horse equipment), explaining how it controls and guides the AI tool."*
>
> — Ernest Chiang

```
┌─────────────────────────────────────────────────────────────────────┐
│                    A METÁFORA DO ARREIO                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│           CAVALO (Modelo Claude)                                   │
│           ┌─────────────────────┐                                  │
│           │  Poder bruto        │                                  │
│           │  Inteligência       │                                  │
│           │  Conhecimento       │                                  │
│           └─────────┬───────────┘                                  │
│                     │                                               │
│           ARREIO (Claude Code)                                     │
│           ┌─────────┴───────────┐                                  │
│           │  Controle           │                                  │
│           │  Direção            │                                  │
│           │  Guarda-corpos      │                                  │
│           │  Ferramentas        │                                  │
│           └─────────────────────┘                                  │
│                                                                     │
│   Sem o arreio, o cavalo corre solto.                              │
│   Com o arreio, você tem controle.                                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**O loop fundamental:**

> *"Under the hood, Claude Code is a tight feedback loop: think → act → observe → correct — wrapped in guardrails that make the loop safe, repeatable, and reliable."*
>
> *"Por baixo dos panos, Claude Code é um loop de feedback apertado: pensar → agir → observar → corrigir — envolto em guarda-corpos que tornam o loop seguro, repetível e confiável."*
>
> — AI4HUMAN, Medium

```
┌─────────────────────────────────────────────────────────────────────┐
│                    O LOOP AGÊNTICO                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│              ┌──────────────────────────────────────┐              │
│              │                                      │              │
│              ▼                                      │              │
│         ┌─────────┐                                 │              │
│         │  THINK  │  ← Planeja a ação              │              │
│         └────┬────┘                                 │              │
│              │                                      │              │
│              ▼                                      │              │
│         ┌─────────┐                                 │              │
│         │   ACT   │  ← Executa (bash, file, etc)   │              │
│         └────┬────┘                                 │              │
│              │                                      │              │
│              ▼                                      │              │
│         ┌─────────┐                                 │              │
│         │ OBSERVE │  ← Vê o resultado              │              │
│         └────┬────┘                                 │              │
│              │                                      │              │
│              ▼                                      │              │
│         ┌─────────┐                                 │              │
│         │ CORRECT │  ← Ajusta se preciso           │              │
│         └────┬────┘                                 │              │
│              │                                      │              │
│              └──────────────────────────────────────┘              │
│                                                                     │
│   Este loop roda ATÉ A TAREFA ESTAR COMPLETA                       │
│   (diferente do assistente que responde UMA VEZ)                   │
│                                                                     │
│   "A simple, single-threaded master loop combined with             │
│    disciplined tools and planning delivers controllable autonomy." │
│                                       — ZenML                      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Transição:**

> "Entenderam o que é? Um utilitário Unix. Um arreio para o cavalo. Um loop de feedback. Mas COMO acessamos esse poder? Existem várias formas..."

---

### Bloco 2.5: Formas de Acesso ao Claude Code (10 min)

**Abertura:**
> "Claude Code pode ser acessado de três formas diferentes. Cada uma tem seu propósito. Mas há uma filosofia clara por trás da recomendação oficial."

**Os três modos de acesso:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                    TRÊS FORMAS DE ACESSO                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────────┐│
│  │  1. CLI (TERMINAL)                                              ││
│  │  └── Interface nativa, potência máxima                         ││
│  │  └── Funciona em qualquer lugar que seu shell funcione         ││
│  │  └── Para: Power users, quem quer controle total               ││
│  └─────────────────────────────────────────────────────────────────┘│
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────────┐│
│  │  2. IDE (VS Code / JetBrains)                                   ││
│  │  └── Extensão integrada ao editor                              ││
│  │  └── Mostra diffs nativos, usa seleção como contexto           ││
│  │  └── Para: Desenvolvedores que vivem no editor                 ││
│  └─────────────────────────────────────────────────────────────────┘│
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────────┐│
│  │  3. DESKTOP APP                                                 ││
│  │  └── Interface gráfica amigável                                ││
│  │  └── Claude Code integrado ao Claude Desktop                   ││
│  │  └── Para: Iniciantes, quem evita a linha de comando           ││
│  └─────────────────────────────────────────────────────────────────┘│
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Comparação rápida:**

| Aspecto | CLI (Terminal) | IDE (VS Code) | Desktop App |
|---------|----------------|---------------|-------------|
| **Interface** | Texto puro | GUI no editor | Chat gráfico |
| **Melhor para** | Controle total, CI/CD, servidores | Devs no editor | Tarefas gerais, iniciantes |
| **Poder agêntico** | Máximo | Alto | Requer MCPs |
| **Curva de aprendizado** | Maior no início | Moderada | Menor |

**O conceito fundamental:**

> "Claude Code nada mais é do que um AGENTE DENTRO do seu computador. Você está dando o controle do computador para o Claude. É literalmente 'dar o computador para o Claude'."

```
┌─────────────────────────────────────────────────────────────────────┐
│                    CLAUDE CODE = AGENTE LOCAL                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│       ┌─────────────────────────────────────────────────┐          │
│       │                SEU COMPUTADOR                    │          │
│       │                                                  │          │
│       │    ┌────────────────────────────────────┐       │          │
│       │    │         CLAUDE CODE                 │       │          │
│       │    │                                     │       │          │
│       │    │   Acessa:                          │       │          │
│       │    │   ✓ Sistema de arquivos            │       │          │
│       │    │   ✓ Terminal/Shell                 │       │          │
│       │    │   ✓ Git e controle de versão       │       │          │
│       │    │   ✓ Ferramentas instaladas         │       │          │
│       │    │   ✓ Internet (se permitido)        │       │          │
│       │    │                                     │       │          │
│       │    └────────────────────────────────────┘       │          │
│       │                                                  │          │
│       │   "É um fantasma no seu computador que pode     │          │
│       │    fazer coisas por você." — Karpathy           │          │
│       │                                                  │          │
│       └─────────────────────────────────────────────────┘          │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**A Filosofia Terminal-First da Anthropic:**

> *"It's terminal-first with no IDE lock-in—it works anywhere your shell works."*
>
> *"É terminal-first sem lock-in de IDE—funciona em qualquer lugar que seu shell funcione."*
>
> — Claude Code Documentation

**Por que o terminal?**

```
┌─────────────────────────────────────────────────────────────────────┐
│                    VANTAGENS DO TERMINAL                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  1. PARALELIZAÇÃO MUITO MAIS PODEROSA                              │
│     └── 5 terminais = 5 agentes trabalhando ao mesmo tempo        │
│     └── Cada um com sua tarefa específica                         │
│     └── Você orquestra, eles executam                             │
│                                                                     │
│  2. MENOS CONSUMO DE CPU                                           │
│     └── Terminal é leve, IDE é pesado                             │
│     └── Mais recursos para o Claude trabalhar                     │
│                                                                     │
│  3. CONTROLE GRANULAR                                              │
│     └── Você vê exatamente o que está acontecendo                 │
│     └── Intervém quando quiser                                    │
│     └── Cancela com Ctrl+C                                        │
│                                                                     │
│  4. UNIVERSALIDADE                                                  │
│     └── Funciona em qualquer sistema operacional                  │
│     └── Funciona em servidores remotos                            │
│     └── Funciona em CI/CD pipelines                               │
│                                                                     │
│  5. SCRIPTÁVEL                                                      │
│     └── Pode ser automatizado                                     │
│     └── Pipes funcionam: tail -f log | claude                     │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**O Modo Boris Cherny: 5 Terminais Paralelos**

> *"I run 5 Claudes in parallel in my terminal. I number my tabs 1-5, and use system notifications to know when a Claude needs input."*
>
> *"Eu rodo 5 Claudes em paralelo no meu terminal. Numero minhas abas de 1-5 e uso notificações do sistema para saber quando um Claude precisa de input."*
>
> — Boris Cherny, Criador do Claude Code

```
┌─────────────────────────────────────────────────────────────────────┐
│                    MODO BORIS CHERNY                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                 │
│  │ TAB  │  │ TAB  │  │ TAB  │  │ TAB  │  │ TAB  │                 │
│  │  1   │  │  2   │  │  3   │  │  4   │  │  5   │                 │
│  ├──────┤  ├──────┤  ├──────┤  ├──────┤  ├──────┤                 │
│  │      │  │      │  │      │  │      │  │      │                 │
│  │Refat.│  │Testes│  │ Docs │  │Debug │  │Pesq. │                 │
│  │código│  │novos │  │      │  │      │  │      │                 │
│  │      │  │      │  │      │  │      │  │      │                 │
│  └──────┘  └──────┘  └──────┘  └──────┘  └──────┘                 │
│                                                                     │
│  CADA TERMINAL:                                                     │
│  ├── Tarefa específica                                             │
│  ├── Git checkout separado (evita conflitos)                       │
│  ├── Notificação quando precisa de input                          │
│  └── Você pode trocar de aba e verificar                          │
│                                                                     │
│  "Enquanto um roda testes, outro refatora, outro documenta.        │
│   O humano ORQUESTRA, não executa."                                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**O Argumento sobre o IDE:**

> "O IDE facilita quem trabalha com desenvolvimento de código — mostra diffs nativos, usa seleção como contexto. Mas no fundo, você não PRECISA do IDE. No máximo, precisa de uma interface para ver o output. E isso pode ser feito FORA do CLI e do IDE, com vantagem. A organização das telas se resolve com múltiplos monitores ou abas."

> *"Claude Code within VS Code enables extra functionality through additional signals."*
>
> — Boris Cherny, 100 Insights

**E o Desktop App?**

> *"Claude Code is now available directly in the Claude Desktop application. For the millions of business professionals, technical PMs, data analysts, and 'citizen developers' who never touch a command line, this is a paradigm shift."*
>
> *"Claude Code agora está disponível diretamente no aplicativo Claude Desktop. Para os milhões de profissionais de negócios, PMs técnicos, analistas de dados e 'desenvolvedores cidadãos' que nunca tocam em uma linha de comando, isso é uma mudança de paradigma."*
>
> — Medium

**A recomendação deste curso:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                    NOSSA RECOMENDAÇÃO                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  TERMINAL-FIRST                                                     │
│  └── É onde o poder REAL está                                     │
│  └── É a filosofia original do Claude Code                        │
│  └── É o que Boris Cherny usa (e ele criou a ferramenta)          │
│  └── É o que vamos aprender neste curso                           │
│                                                                     │
│  MAS NÃO PRECISA TER MEDO!                                         │
│  └── O terminal do Claude Code é um CHAT                          │
│  └── Você conversa em português                                   │
│  └── A parte do código, ele faz pra você                          │
│                                                                     │
│  O QUE VOCÊ PRECISA ENTENDER:                                      │
│  └── A lógica (o que está acontecendo)                            │
│  └── A estrutura (onde estão as coisas)                           │
│  └── Os comandos básicos (poucos, simples)                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**O Terminal como Interface de Comunicação Textual:**

> "O terminal é uma interface de comunicação textual. Você se comunica usando linguagem natural + alguns comandos. A parte dos comandos complexos? O Claude Code faz para você. Você só precisa entender: a lógica, a estrutura, e os comandos básicos."

**Transição:**

> "Então vamos pelo terminal. Mas antes de instalar, precisamos enfrentar o guardião da jornada: o medo da tela preta."

---

# ACT 3: SUPERANDO O GUARDIÃO

---

### Bloco 3: Desmistificando o Terminal (10 min)

**Abertura:**
> "Eu sei o que vocês estão pensando. Terminal. Tela preta. Coisa de hacker. Não é para mim."

**Validação do medo:**

> "Esse medo é legítimo. Por quarenta anos, a indústria se moveu em direção a interfaces mais amigáveis — botões, ícones, janelas. E agora, para extrair o máximo da IA mais poderosa já criada, precisamos... voltar ao texto puro?"

**A ironia histórica:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                    POR QUE O TERMINAL VOLTOU?                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ANOS 70-90          2000-2020           2022-2024           2024+ │
│  ┌─────────┐        ┌─────────┐        ┌─────────┐        ┌──────┐ │
│  │TERMINAL │  ───▶  │   GUI   │  ───▶  │  CHAT   │  ───▶  │TERM+ │ │
│  │         │        │         │        │   WEB   │        │  IA  │ │
│  │ Texto   │        │ Botões  │        │ Copiar/ │        │Claude│ │
│  │ puro    │        │ Menus   │        │ Colar   │        │ Code │ │
│  └─────────┘        └─────────┘        └─────────┘        └──────┘ │
│                                                                     │
│  "It's terminal-first with no IDE lock-in—it works anywhere your  │
│   shell works."                                                     │
│                                       — Claude Code Documentation  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**A filosofia "Simple Thing First":**

> *"This fits with Anthropic's product principle: 'do the simple thing first.' Whether it's the memory implementation (a markdown file that gets auto-loaded) or the approach to prompt summarization (just ask Claude to summarize), they always pick the smallest building blocks that are useful, understandable, and extensible."*
>
> *"Isso se encaixa com o princípio de produto da Anthropic: 'faça a coisa simples primeiro'. Seja a implementação de memória (um arquivo markdown que é auto-carregado) ou a abordagem para sumarização de prompts (apenas peça ao Claude para resumir), eles sempre escolhem os menores blocos de construção que são úteis, compreensíveis e extensíveis."*
>
> — Latent Space Podcast

**O segredo que muda tudo:**

> *"Think of it as having a pair programmer you can talk to without ever taking your hands off the keyboard."*
>
> *"Pense nisso como ter um programador parceiro com quem você pode conversar sem nunca tirar as mãos do teclado."*
>
> — Eesel.ai

**Demonstração visual:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  $ claude                                                          │
│                                                                     │
│  ╭──────────────────────────────────────────────────────────────╮  │
│  │                                                              │  │
│  │   Olá! Sou o Claude Code. Como posso ajudar você hoje?      │  │
│  │                                                              │  │
│  │   Você pode me pedir para:                                  │  │
│  │   - Ler e explicar arquivos                                 │  │
│  │   - Criar ou modificar documentos                           │  │
│  │   - Executar tarefas no computador                          │  │
│  │   - Organizar arquivos e pastas                             │  │
│  │   - Pesquisar na web                                        │  │
│  │                                                              │  │
│  │   Basta conversar comigo em português!                      │  │
│  │                                                              │  │
│  ╰──────────────────────────────────────────────────────────────╯  │
│                                                                     │
│  > _                                                               │
│                                                                     │
│  É um CHAT. Só que no terminal.                                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**A revelação:**

> "Vocês já usam o Claude Web conversando em português. O Claude Code é **exatamente a mesma experiência** — você conversa em português. A diferença é que agora ele pode **fazer coisas no seu computador**."

**Citação de impacto sobre aprendizado:**

> *"Some people say if you write code only through AI, you'll never understand it. But that's only true if you don't ask enough questions. If you make sure you understand every single thing, you can actually understand code faster than otherwise because you can ask AI about it."*
>
> *"Algumas pessoas dizem que se você escreve código apenas através de IA, você nunca vai entendê-lo. Mas isso só é verdade se você não fizer perguntas suficientes. Se você garantir que entende cada coisa, você pode na verdade entender código mais rápido porque pode perguntar à IA sobre isso."*
>
> — YKDojo Claude Code Tips

**Analogia jurídica:**

> "Pensem assim: o Claude Web é como um assessor com quem vocês conversam por telefone. Ele responde, mas não pode fazer nada fisicamente no gabinete. O Claude Code é como um assessor que está DENTRO do gabinete, com acesso aos arquivos, ao computador, ao SEI. Ele não só responde — ele executa."

**Para quem ainda tem medo — há alternativas:**

> *"Claude Code is now available directly in the Claude Desktop application. For the millions of business professionals, technical PMs, data analysts, and 'citizen developers' who never touch a command line, this is a paradigm shift."*
>
> *"Claude Code agora está disponível diretamente no aplicativo Claude Desktop. Para os milhões de profissionais de negócios, PMs técnicos, analistas de dados e 'desenvolvedores cidadãos' que nunca tocam em uma linha de comando, isso é uma mudança de paradigma."*
>
> — Medium

> "Mas neste curso, vamos pelo terminal. Porque é onde o poder real está. E vocês verão que não é tão assustador."

**Transição:**

> "Pronto para cruzar o limiar? Vamos instalar."

---

# ACT 4: CRUZANDO O LIMIAR

---

### Bloco 4: Instalando o Claude Code (15 min)

**Abertura:**
> "Este é o momento. Vamos instalar o fantasma na máquina."

**Requisitos do sistema:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                    REQUISITOS DO SISTEMA                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  SISTEMA OPERACIONAL:                                              │
│  ├── macOS 10.15+ (Catalina ou posterior)                         │
│  ├── Ubuntu 20.04+ ou Debian 10+                                  │
│  └── Windows 10+ (com WSL2 ou PowerShell)                         │
│                                                                     │
│  HARDWARE:                                                         │
│  ├── 4GB+ RAM (mínimo)                                            │
│  └── Conexão de internet estável                                  │
│                                                                     │
│  CONTA:                                                            │
│  └── Conta Anthropic ativa (vocês já têm)                         │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Instalação passo a passo:**

#### Método 1: macOS/Linux (Nativo - Recomendado)

```bash
# Uma linha. Só isso.
curl -fsSL https://claude.ai/install.sh | bash
```

#### Método 2: Windows (PowerShell)

```powershell
# Abra o PowerShell como administrador
irm https://claude.ai/install.ps1 | iex
```

#### Método 3: macOS via Homebrew

```bash
brew install --cask claude-code
```

#### Método 4: npm (Legado - não recomendado)

```bash
# Só use se os outros métodos falharem
npm install -g @anthropic-ai/claude-code
```

> **Importante:** Nunca use `sudo npm install -g` — isso pode criar problemas de permissão e vulnerabilidades de segurança.

**Demonstração ao vivo:**

1. Abrir o terminal
2. Executar o comando de instalação
3. Mostrar o processo acontecendo
4. Aguardar conclusão

**Verificação e Troubleshooting:**

```bash
# Verificar se instalou
claude --version

# Se "command not found" no Mac/Linux:
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

# Diagnóstico automático
claude doctor
```

**Primeira execução:**

```bash
# Navegue até uma pasta de trabalho
cd ~/Documentos/teste-claude

# Inicie o Claude Code
claude
```

**O que acontece na primeira vez:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                    PRIMEIRA EXECUÇÃO                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  1. Autenticação                                                   │
│     └── Vai abrir o navegador para login na sua conta Anthropic   │
│                                                                     │
│  2. Aceitar termos                                                 │
│     └── Política de uso do Claude Code                            │
│                                                                     │
│  3. Configuração inicial                                           │
│     └── O Claude pergunta algumas preferências                    │
│                                                                     │
│  4. PRONTO!                                                        │
│     └── Você está conversando com o Claude no terminal            │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Nota para quem não pode instalar:**

> "Se você não pode instalar agora — talvez esteja em computador do trabalho sem permissão, ou prefere só assistir primeiro — tudo bem. Acompanhe a demonstração. Você pode instalar depois em casa."

**Transição:**

> "Instalado? Ótimo. Agora vamos aprender os primeiros comandos. As primeiras ferramentas do herói."

---

# ACT 5: PRIMEIRAS PROVAS

---

### Bloco 5: Primeiros Passos e Slash Commands (15 min)

**Abertura:**
> "O Claude Code responde a dois tipos de input: linguagem natural e slash commands. Vamos ver os dois."

**Linguagem natural:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                    CONVERSANDO EM PORTUGUÊS                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  > Liste os arquivos nesta pasta                                   │
│                                                                     │
│  ╭────────────────────────────────────────────────────────────────╮│
│  │                                                                ││
│  │  Vou listar os arquivos do diretório atual:                   ││
│  │                                                                ││
│  │  [Claude executa: ls -la]                                     ││
│  │                                                                ││
│  │  📁 documentos/                                                ││
│  │  📁 planilhas/                                                 ││
│  │  📄 README.md                                                  ││
│  │  📄 relatorio.pdf                                              ││
│  │                                                                ││
│  │  São 2 pastas e 2 arquivos no diretório atual.                ││
│  │                                                                ││
│  ╰────────────────────────────────────────────────────────────────╯│
│                                                                     │
│  > _                                                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Slash commands essenciais:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                    SLASH COMMANDS ESSENCIAIS                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  COMANDO        │ O QUE FAZ                                        │
│  ───────────────┼─────────────────────────────────────────────────  │
│  /help          │ Mostra ajuda e referência de comandos            │
│  /clear         │ Limpa histórico (fresh start)                    │
│  /compact       │ Comprime conversa para economizar contexto       │
│  /init          │ Inicializa CLAUDE.md para o projeto              │
│  /status        │ Verifica status do sistema                       │
│  /doctor        │ Verifica instalação e configuração               │
│  /context       │ Visualiza uso de contexto                        │
│  /cost          │ Mostra custos de tokens                          │
│  /config        │ Abre configurações                               │
│  /model         │ Troca de modelo                                  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Quando usar /clear vs /compact:**

> *"/clear wipes the conversation history, giving Claude a completely fresh start (though it will still have CLAUDE.md and file content you provide). If the current conversation thread has gone too far off track or contains a lot of irrelevant information for the next task, /clear might be better than /compact."*
>
> *"/clear limpa o histórico da conversa, dando ao Claude um início completamente fresco (embora ele ainda tenha o CLAUDE.md e conteúdo de arquivo que você fornecer). Se a thread atual foi longe demais ou contém muita informação irrelevante para a próxima tarefa, /clear pode ser melhor que /compact."*
>
> — Builder.io

```
┌─────────────────────────────────────────────────────────────────────┐
│                    /CLEAR vs /COMPACT                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  /CLEAR                        /COMPACT                            │
│  ───────────────────────────   ───────────────────────────         │
│  Apaga TUDO                    Resume o essencial                  │
│  Início fresco                 Mantém contexto crítico             │
│  Quando: mudar de tarefa       Quando: contexto cheio              │
│  Perde: todo histórico         Mantém: decisões importantes        │
│                                                                     │
│  "Pro tip: use /clear often. Every time you start something new,  │
│   clear the chat. You don't need all that history eating your     │
│   tokens."                     — Builder.io                        │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Atalhos de teclado:**

| Atalho | Ação |
|--------|------|
| `Shift+Enter` | Input multi-linha |
| `Ctrl+C` | Cancelar operação |
| `Tab` | Extended Thinking (modo reflexão profunda) |
| `!` | Bypass para comando bash direto |

**Demonstração: Referenciando arquivos com @**

> *"Instead of copying and pasting file contents or providing lengthy descriptions, you can simply use the @ prefix followed by the path or resource identifier. Claude Code will then automatically fetch and include the content of the specified file."*
>
> — Steve Kinney

```
> @relatorio.pdf explique este documento

╭────────────────────────────────────────────────────────────────╮
│                                                                │
│  Vou analisar o arquivo relatorio.pdf...                      │
│                                                                │
│  [Claude lê o arquivo e explica o conteúdo]                   │
│                                                                │
╰────────────────────────────────────────────────────────────────╯
```

**Demonstração: Bypass para bash com !**

```bash
# Use ! para executar comandos diretamente sem conversação
> !git status
> !ls -la
> !pwd
```

**Comandos personalizados:**

> *"For repeated workflows—debugging loops, log analysis, etc.—store prompt templates in Markdown files within the .claude/commands folder. These become available through the slash commands menu when you type /."*
>
> *"Para workflows repetidos—loops de debugging, análise de logs, etc.—armazene templates de prompt em arquivos Markdown na pasta .claude/commands. Estes ficam disponíveis no menu de slash commands quando você digita /."*
>
> — Anthropic Best Practices

**Transição:**

> "Agora que sabemos os comandos básicos, precisamos falar sobre segurança. Quanto poder você quer dar ao fantasma?"

---

# ACT 6: ALIADOS E ARMAS

---

### Bloco 6: Configurações de Permissão (12 min)

**Abertura:**
> "O Claude Code pode fazer muita coisa no seu computador. A questão é: quanto você quer permitir?"

**O espectro de permissões:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                    ESPECTRO DE PERMISSÕES                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  RESTRITO ◀────────────────────────────────────────▶ LIBERADO      │
│                                                                     │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐│
│  │   DEFAULT   │  │ acceptEdits │  │ Auto-Accept │  │    YOLO     ││
│  │  (padrão)   │  │ (edições ok)│  │ (Shift+Tab) │  │(sem limites)││
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘│
│                                                                     │
│  Pede permissão   Edita arquivos   Aceita tudo      Executa tudo   │
│  para cada ação   sem perguntar    automaticamente  sem perguntar  │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Modo Default (Padrão):**

> "No modo padrão, o Claude pede permissão para cada nova ação. 'Posso ler este arquivo?', 'Posso executar este comando?'. É o modo mais seguro para aprender."

**Auto-Accept Mode (Shift+Tab):**

> *"While Auto-Accept shows 'auto-accept edit on' and proceeds without pausing, it remains interactive—you can still see what's happening and intervene if needed."*
>
> *"Enquanto Auto-Accept mostra 'auto-accept edit on' e prossegue sem pausar, ele permanece interativo—você ainda pode ver o que está acontecendo e intervir se necessário."*
>
> — PromptLayer Blog

> "No Auto-Accept, o Claude executa sem pausar, mas você ainda vê tudo acontecendo. É como dar carta branca para um assessor, mas ficar olhando o que ele faz."

**YOLO Mode (--dangerously-skip-permissions):**

> *"The --dangerously-skip-permissions flag enables what Anthropic calls 'Safe YOLO mode', a fully unattended execution mode where Claude Code bypasses all permission prompts and runs 'uninterrupted until completion.'"*
>
> *"A flag --dangerously-skip-permissions habilita o que a Anthropic chama de 'Modo YOLO Seguro', um modo de execução totalmente desacompanhado onde Claude Code ignora todos os prompts de permissão e roda 'ininterruptamente até a conclusão'."*
>
> — PromptLayer Blog

```
┌─────────────────────────────────────────────────────────────────────┐
│                    ⚠️  MODO YOLO                                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  QUANDO USAR:                                                      │
│  ├── Ambiente isolado (container, VM)                             │
│  ├── Tarefas bem definidas e testadas                             │
│  ├── Com controle de versão (git reset --hard pode salvar)        │
│  └── Quando você vai dormir e quer resultados ao acordar          │
│                                                                     │
│  NUNCA USAR:                                                       │
│  ├── Em computador de produção sem backup                         │
│  ├── Sem controle de versão                                       │
│  └── Em primeiras tentativas (teste antes!)                       │
│                                                                     │
│  "Use version control religiously. YOLO mode is 100x safer when   │
│   git reset --hard can undo anything Claude does."                 │
│                                       — Agentic Engineer          │
│                                                                     │
│  "Before even considering YOLO mode, isolation is mandatory. Run  │
│   Claude Code in a locked-down container or VM."                   │
│                                       — UpGuard                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Recomendação para iniciantes:**

> "Comecem no modo Default. Vejam as permissões sendo pedidas. Entendam o que o Claude quer fazer. Com o tempo, migrem para Auto-Accept quando se sentirem confortáveis. YOLO é para usuários avançados em ambientes controlados."

**Configuração via arquivo:**

```json
// ~/.claude/settings.json
{
  "permissions": {
    "allow": ["Read", "Grep", "LS", "Bash(npm run test:*)"],
    "deny": ["WebFetch", "Bash(curl:*)", "Read(./.env)"]
  }
}
```

> "Vocês podem criar listas de permissões: o que sempre permitir e o que nunca permitir. É como criar regras para um assessor: 'pode ler qualquer arquivo, mas nunca toque no .env'."

**Safety Hooks (funcionalidade avançada):**

> *"Claude Code introduced a powerful feature called hooks—scripts that intercept operations before they execute. Think of them as a safety net that catches dangerous operations while letting safe ones through automatically."*
>
> *"Claude Code introduziu uma funcionalidade poderosa chamada hooks—scripts que interceptam operações antes de executarem. Pense neles como uma rede de segurança que captura operações perigosas enquanto deixa as seguras passarem automaticamente."*
>
> — Agentic Engineer

**Transição:**

> "Com as permissões configuradas, vamos entender a arma secreta do Claude Code: a estrutura de diretórios."

---

### Bloco 7: A Estrutura do Diretório (15 min)

**Abertura:**
> "O poder do Claude Code não está só no modelo. Está na estrutura de arquivos que você cria. É aqui que mora a memória persistente."

**Citação-âncora:**

> *"A CLAUDE.md file is like a README for Claude."*
>
> *"Um arquivo CLAUDE.md é como um README para o Claude."*
>
> — Steve Kinney

**O que é o CLAUDE.md:**

> *"CLAUDE.md is a markdown file in your project directory containing permanent context about your product, team, and preferences. Claude automatically reads it at session start and applies everything in it."*
>
> *"CLAUDE.md é um arquivo markdown no diretório do seu projeto contendo contexto permanente sobre seu produto, equipe e preferências. Claude automaticamente o lê no início da sessão e aplica tudo nele."*
>
> — Claude Code Memory Docs

**A simplicidade radical:**

> *"By convention, you store rules you want it to follow in CLAUDE.md, but you could use any file and tell Claude to read that file on startup. It's remarkably simple."*
>
> *"Por convenção, você armazena regras que quer que ele siga em CLAUDE.md, mas você poderia usar qualquer arquivo e dizer ao Claude para ler esse arquivo na inicialização. É notavelmente simples."*
>
> — Grant Slatton

**Os Dois Mundos: Diretório Global vs Local**

```
┌─────────────────────────────────────────────────────────────────────┐
│                    OS DOIS MUNDOS DO CLAUDE CODE                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌─────────────────────────────┐  ┌────────────────────────────────┐│
│  │    DIRETÓRIO GLOBAL         │  │    DIRETÓRIO LOCAL            ││
│  │    ~/.claude/               │  │    projeto/.claude/           ││
│  ├─────────────────────────────┤  ├────────────────────────────────┤│
│  │                             │  │                                ││
│  │  Configurações GLOBAIS      │  │  Específico DESTE projeto     ││
│  │  Válidas para QUALQUER      │  │  Onde você criará seu         ││
│  │  projeto no seu computador  │  │  sistema agêntico             ││
│  │                             │  │                                ││
│  │  Contém:                    │  │  Contém:                      ││
│  │  ├── CLAUDE.md (global)     │  │  ├── CLAUDE.md (projeto)      ││
│  │  ├── commands/              │  │  ├── commands/                ││
│  │  ├── skills/                │  │  ├── skills/                  ││
│  │  ├── agents/                │  │  ├── agents/                  ││
│  │  ├── settings.json          │  │  ├── rules/                   ││
│  │  └── mcp-servers/           │  │  └── settings.json            ││
│  │                             │  │                                ││
│  └─────────────────────────────┘  └────────────────────────────────┘│
│                                                                     │
│  "Normas do tribunal"            "Normas desta vara"               │
│  (valem pra todas as varas)      (específicas deste gabinete)      │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**DICA PRÁTICA — Seja MINIMALISTA no Global:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                    DICA: MINIMALISMO NO GLOBAL                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  No diretório ~/.claude/, instale APENAS:                          │
│                                                                     │
│  ✓ Recursos COMPARTILHADOS em TODOS os projetos                   │
│  ✓ Skills genéricas (ex: design, workflow)                        │
│  ✓ MCPs gerais (ex: browser, filesystem)                          │
│  ✓ Configurações pessoais universais                              │
│                                                                     │
│  EVITE:                                                            │
│  ✗ Skills específicas de um projeto                               │
│  ✗ Commands muito especializados                                  │
│  ✗ Qualquer coisa que só faz sentido em um contexto               │
│                                                                     │
│  POR QUÊ?                                                          │
│  └── O global é carregado SEMPRE                                  │
│  └── Excesso de contexto global = desperdício de tokens           │
│  └── Cada projeto deve ter seu próprio sistema agêntico           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Exemplos do que instalar no Global:**

```
~/.claude/
├── CLAUDE.md                    # Preferências pessoais universais
│   └── "Idioma: português"
│   └── "Nunca usar emojis"
│   └── "Sempre citar fontes"
│
├── commands/
│   └── superpower.md            # Workflow genérico útil em qualquer projeto
│   └── feature-dev.md           # Desenvolvimento de features
│
├── skills/
│   └── frontend-design/         # Se você trabalha com frontend sempre
│   └── git-workflow/            # Boas práticas de Git
│
└── mcp-servers/
    └── browser/                 # Automação de browser
    └── filesystem/              # Operações avançadas de arquivos
```

**A estrutura completa do projeto:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                    ESTRUTURA DO DIRETÓRIO LOCAL                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  projeto/                                                          │
│  ├── .claude/                 # Configurações do Claude Code      │
│  │   ├── CLAUDE.md           # Memória do projeto (alternativa)   │
│  │   ├── commands/           # Slash commands personalizados      │
│  │   ├── skills/             # Skills (capacidades reutilizáveis) │
│  │   ├── agents/             # Configurações de subagentes        │
│  │   ├── rules/              # Regras modulares                   │
│  │   └── settings.json       # Configurações locais               │
│  │                                                                 │
│  ├── CLAUDE.md               # Memória do projeto (padrão)        │
│  ├── CLAUDE.local.md         # Memória pessoal (gitignored)       │
│  │                                                                 │
│  └── data/                   # Saídas e dados (convenção)         │
│      └── output/                                                   │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Hierarquia de memória:**

> *"Project commands are stored in .claude/commands/ and are available to everyone in the project. Personal commands go in ~/.claude/commands/ and only apply to you."*
>
> — Claude Code Slash Commands Docs

| Local | Escopo | Versionado? |
|-------|--------|-------------|
| `~/.claude/CLAUDE.md` | Todos os projetos (pessoal) | Não |
| `./CLAUDE.md` | Este projeto (equipe) | Sim |
| `./.claude/CLAUDE.md` | Este projeto (alternativa) | Sim |
| `./CLAUDE.local.md` | Este projeto (pessoal) | Não (gitignored) |
| `./.claude/rules/*.md` | Regras modulares | Sim |

> "Vocês podem ter um CLAUDE.md global — que se aplica a todos os projetos — e um CLAUDE.md local — que se aplica só a este projeto. E ainda um CLAUDE.local.md para coisas pessoais que não vão para o repositório."

**Não existe fórmula canônica:**

> "Não há uma estrutura 'oficial' ou 'obrigatória'. Cada equipe, cada projeto, cada pessoa pode organizar de forma diferente. Mas vale a pena se inspirar na Anthropic e entender o básico de organização de diretórios."

**Commands: Slash commands personalizados:**

```
.claude/commands/
├── analise-processo.md    → /analise-processo
├── pesquisa-jurisprudencia.md → /pesquisa-jurisprudencia
└── gera-minuta.md         → /gera-minuta
```

> "Qualquer arquivo .md que vocês colocarem na pasta commands vira um slash command! O nome do arquivo vira o nome do comando."

**Skills: Capacidades modulares:**

> *"Each skill is a directory with SKILL.md as the entrypoint."*
>
> *"Cada skill é um diretório com SKILL.md como ponto de entrada."*
>
> — Claude Code Skills Docs

```
.claude/skills/
└── analise-previdenciaria/
    ├── SKILL.md              # Instruções principais
    ├── template.md           # Template para Claude preencher
    ├── examples/             # Exemplos de uso
    └── scripts/              # Scripts que Claude pode executar
```

> "Skills são como especialidades que você ensina ao Claude. Um assessor especializado em análise previdenciária. Outro em pesquisa de precedentes. Cada um com seu conhecimento próprio."

**Imports no CLAUDE.md:**

> *"CLAUDE.md files can import additional files using @path/to/import syntax."*
>
> — Claude Code Memory Docs

```markdown
# CLAUDE.md

## Instruções Base
@.claude/rules/estilo-juridico.md
@.claude/rules/citacoes.md
@.claude/rules/formatacao.md
```

> "Vocês podem organizar as regras em arquivos separados e importar no CLAUDE.md. Mantém tudo organizado."

**Agents: Configurações de subagentes:**

> *"The agent field specifies which subagent configuration to use. Options include built-in agents (Explore, Plan, general-purpose) or any custom subagent from .claude/agents/."*
>
> — Claude Code Skills Docs

**Descoberta em Monorepos:**

> *"When you work with files in subdirectories, Claude Code automatically discovers skills from nested .claude/skills/ directories."*
>
> — Claude Code Skills Docs

**Transição:**

> "Estrutura entendida. Agora vamos colocar tudo em prática."

---

# ACT 7: MÃO NA MASSA

---

### Bloco 8: Primeiros Usos Práticos (20 min)

**Abertura:**
> "Chega de teoria. Vamos fazer coisas reais."

**O que o Claude Code consegue fazer:**

> *"Claude Code inherits your bash environment, giving it access to all your command-line tools. This means it can use common utilities like Unix tools (e.g., cat, grep) and the gh CLI for GitHub interactions."*
>
> *"Claude Code herda seu ambiente bash, dando a ele acesso a todas as suas ferramentas de linha de comando. Isso significa que ele pode usar utilitários comuns como ferramentas Unix (ex: cat, grep) e o gh CLI para interações com GitHub."*
>
> — Anthropic Best Practices

> *"Claude Code truly uses your filesystem directly. It's just cat, grep, sed, find, etc."*
>
> *"Claude Code verdadeiramente usa seu sistema de arquivos diretamente. É apenas cat, grep, sed, find, etc."*
>
> — Grant Slatton

#### Exercício 1: Navegação básica

```
# Objetivo: Ver arquivos e entender onde estamos

> Mostre os arquivos nesta pasta

> Qual é o caminho completo do diretório atual?

> Entre na pasta documentos e liste o que tem lá
```

**Demonstração ao vivo**

#### Exercício 2: Leitura de arquivos

```
# Objetivo: Ler e explicar um arquivo

> @README.md explique este arquivo

> @contrato.pdf faça um resumo das cláusulas principais

> Liste todos os PDFs nesta pasta e me diga quantas páginas cada um tem
```

**Demonstração ao vivo**

#### Exercício 3: Criação de arquivos

```
# Objetivo: Criar algo novo

> Crie um arquivo chamado notas.md com um título "Minhas Notas" e três tópicos vazios

> Adicione uma nova seção ao notas.md sobre "Tarefas Pendentes"
```

**Demonstração ao vivo**

#### Exercício 4: Organização

```
# Objetivo: Organizar arquivos

> Crie uma pasta chamada "backup" e copie todos os PDFs para lá

> Renomeie os arquivos na pasta documentos para seguir o padrão
  YYYY-MM-DD-nome.extensao
```

**Exemplo real citado na pesquisa:**

> "I want you to review all the pictures in the 'Screenshots' folder, rename them according to their content, group them into several categories, create relevant subfolders for each group, and move all images belonging to that category into the corresponding subfolder."

**Demonstração ao vivo**

#### Exercício 5: Inicialização do projeto

```
# Objetivo: Criar a estrutura do Claude Code

> /init

# Claude cria um CLAUDE.md básico. Vamos personalizá-lo:

> Edite o CLAUDE.md e adicione:
  - Idioma preferido: português brasileiro
  - Nunca usar emojis
  - Sempre citar fontes ao fazer afirmações
```

**Demonstração ao vivo**

#### Exercício 6: Bypass para bash

```
# Objetivo: Executar comandos diretos

> !git status

> !ls -la

> !pwd
```

> "O prefixo ! executa comandos bash diretamente, sem conversação. Útil para comandos rápidos que você já conhece."

**Exercícios para casa:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                    PARA PRATICAR EM CASA                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  1. Crie um projeto novo com /init                                 │
│                                                                     │
│  2. Personalize o CLAUDE.md com suas preferências                  │
│                                                                     │
│  3. Peça ao Claude para:                                           │
│     - Baixar um arquivo da web (ele vai usar curl)                │
│     - Criar uma pasta estruturada para um projeto                 │
│     - Ler um PDF e gerar um resumo                                │
│                                                                     │
│  4. Experimente os atalhos:                                        │
│     - Shift+Enter para multi-linha                                │
│     - Tab para Extended Thinking                                  │
│     - ! para bypass                                               │
│                                                                     │
│  5. Use /cost para ver quanto gastou de tokens                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Transição:**

> "Vocês acabaram de dar os primeiros passos. Cruzaram o portal. Executaram comandos. Criaram arquivos. Agora vamos encerrar com a visão do que vocês conquistaram."

---

# ACT 8: RETORNO COM O ELIXIR

---

### Bloco 9: O Fantasma na Máquina (8 min)

**Abertura:**
> "Lembram do que Karpathy disse?"

**Citação de fechamento:**

> *"Claude Code's key innovation is positioning itself as a 'ghost on your computer'—a persistent agent running on localhost with direct access to the developer's environment."*
>
> *"A inovação chave do Claude Code é se posicionar como um 'fantasma no seu computador'—um agente persistente rodando em localhost com acesso direto ao ambiente do desenvolvedor."*
>
> — Sobre análise de Karpathy

**O que vocês conquistaram hoje:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                    CONQUISTAS DA AULA 02                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ✅ SUPERARAM O MEDO DO TERMINAL                                   │
│     └── Viram que é só um chat com superpoderes                   │
│                                                                     │
│  ✅ ENTENDERAM AS FORMAS DE ACESSO                                 │
│     └── CLI, IDE, Desktop — e por que terminal-first              │
│                                                                     │
│  ✅ INSTALARAM A FERRAMENTA                                        │
│     └── O fantasma agora mora na máquina de vocês                 │
│                                                                     │
│  ✅ EXECUTARAM PRIMEIROS COMANDOS                                  │
│     └── /help, /clear, /init, @arquivo, !bash                     │
│                                                                     │
│  ✅ ENTENDERAM A ESTRUTURA                                         │
│     └── CLAUDE.md, commands/, skills/, agents/                    │
│     └── Global (~/.claude) vs Local (projeto/.claude)             │
│                                                                     │
│  ✅ CONFIGURARAM PERMISSÕES                                        │
│     └── Sabem a diferença entre Default, Auto-Accept e YOLO       │
│                                                                     │
│  ✅ PRATICARAM                                                      │
│     └── Navegaram, leram, criaram, organizaram                    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**O princípio que explica tudo:**

> *"The key design principle behind Claude Code is that Claude needs the same tools that programmers use every day. It needs to be able to find appropriate files in a codebase, write and edit files, lint the code, run it, debug, edit, and sometimes take these actions iteratively until the code succeeds. By giving Claude access to the user's computer (via the terminal), it had what it needed to write code like programmers do."*
>
> *"O princípio de design chave por trás do Claude Code é que Claude precisa das mesmas ferramentas que programadores usam todo dia. Ele precisa ser capaz de encontrar arquivos apropriados em uma base de código, escrever e editar arquivos, fazer lint do código, executá-lo, debugar, editar, e às vezes tomar essas ações iterativamente até o código ter sucesso. Ao dar ao Claude acesso ao computador do usuário (via terminal), ele tinha o que precisava para escrever código como programadores fazem."*
>
> — Latent Space Podcast

**Traduzindo para o contexto jurídico:**

> "O Claude precisa das mesmas ferramentas que vocês usam todo dia. Precisa encontrar arquivos de processo, escrever documentos, pesquisar precedentes, iterar até a minuta ficar boa. Ao dar ao Claude acesso ao computador de vocês, ele tem o que precisa para trabalhar como vocês trabalham — mas em escala."

**A linguagem do futuro:**

> *"The hottest new programming language is English."*
>
> *"A linguagem de programação mais quente é o inglês."*
>
> — Andrej Karpathy

> "Ou português. Vocês acabaram de programar — em português. Pediram ao computador para fazer coisas. E ele fez."

**O potencial inexplorado:**

> *"LLMs are emerging as a new kind of intelligence, simultaneously a lot smarter than I expected and a lot dumber than I expected. In any case they are extremely useful and I don't think the industry has realized anywhere near 10% of their potential even at present capability."*
>
> *"LLMs estão emergindo como um novo tipo de inteligência, simultaneamente muito mais inteligentes do que eu esperava e muito mais burros do que eu esperava. De qualquer forma, são extremamente úteis e não acho que a indústria tenha percebido nem perto de 10% do seu potencial, mesmo com a capacidade atual."*
>
> — Andrej Karpathy

> "Vocês estão entre os primeiros a explorar esse potencial no contexto jurídico."

**O que vem a seguir:**

```
┌─────────────────────────────────────────────────────────────────────┐
│                    PRÓXIMAS AULAS                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  AULA 02: Instalação e primeiros passos      ✅ CONCLUÍDA          │
│                                                                     │
│  AULA 03: Arquitetura de Agentes             → PRÓXIMA             │
│  └── Pipelines, workflows, orquestração                           │
│  └── Como planejar sistemas que trabalham sozinhos                │
│                                                                     │
│  AULA 04: Construindo Commands e Skills                            │
│  └── Seus próprios slash commands                                 │
│  └── Skills especializadas para trabalho jurídico                │
│                                                                     │
│  AULA 05: O SuperJurista Completo                                  │
│  └── Pipeline de sentença                                         │
│  └── Pesquisa de precedentes automatizada                        │
│  └── Integração com sistemas jurídicos                           │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

**Frase de fechamento:**

> "Vocês cruzaram o primeiro limiar. O terminal não é mais um guardião assustador — é uma porta aberta. O fantasma não é mais alienígena — é um assessor que mora no computador de vocês. O manual não está mais faltando — vocês estão escrevendo junto comigo."

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│              "CLARAMENTE, ALGUMA FERRAMENTA ALIENÍGENA             │
│               PODEROSA FOI DISTRIBUÍDA."                           │
│                                       — Andrej Karpathy            │
│                                                                     │
│              AGORA VOCÊS TÊM O MANUAL.                             │
│                                                                     │
│              E O FANTASMA MORA NA MÁQUINA DE VOCÊS.                │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Metáforas e Analogias

| Conceito | Metáfora | Por que funciona |
|----------|----------|------------------|
| Claude Code | Fantasma na máquina | Karpathy: faz coisas por você, invisível |
| Modelo + Harness | Cavalo + Arreio | Poder + controle = resultado |
| Terminal | Chat com superpoderes | Remove medo, mostra familiaridade |
| CLAUDE.md | README para o Claude | Programadores entendem READMEs |
| Permissões | Carta branca para assessor | Juristas entendem delegação |
| Commands | Atalhos de gabinete | Tarefas repetitivas automatizadas |
| Skills | Assessores especializados | Cada um com sua expertise |
| Loop agêntico | Think-Act-Observe-Correct | Visualiza o processo iterativo |
| Global vs Local | Tribunal vs Vara | Normas gerais vs específicas |
| 5 terminais | 5 assessores paralelos | Cada um com uma tarefa |

---

## Insights e Quotes de Impacto

> *"Claude Code is not a product as much as it's a Unix utility."*
> — Boris Cherny, Lead Engineer @ Anthropic
>
> *Tradução: "Claude Code não é tanto um produto quanto um utilitário Unix."*

> *"When I created Claude Code as a side project back in September 2024, I had no idea it would grow to what it is today."*
> — Boris Cherny
>
> *Tradução: "Quando criei o Claude Code como um projeto paralelo em setembro de 2024, não fazia ideia de que ele cresceria para o que é hoje."*

> *"I run 5 Claudes in parallel in my terminal. I number my tabs 1-5, and use system notifications to know when a Claude needs input."*
> — Boris Cherny
>
> *Tradução: "Eu rodo 5 Claudes em paralelo no meu terminal. Numero minhas abas de 1-5 e uso notificações do sistema para saber quando um Claude precisa de input."*

> *"Clearly some powerful alien tool was handed around except it comes with no manual."*
> — Andrej Karpathy
>
> *Tradução: "Claramente alguma ferramenta alienígena poderosa foi distribuída, exceto que ela vem sem manual."*

> *"I have a sense that I could be 10X more powerful if I just properly string together what has become available over the last ~year and a failure to claim the boost feels decidedly like skill issue."*
> — Andrej Karpathy
>
> *Tradução: "Tenho a sensação de que poderia ser 10X mais poderoso se apenas conectasse corretamente o que se tornou disponível no último ano, e falhar em reivindicar esse impulso parece definitivamente um problema de habilidade."*

> *"A simple, single-threaded master loop combined with disciplined tools and planning delivers controllable autonomy."*
> — ZenML
>
> *Tradução: "Um loop mestre simples, de thread única, combinado com ferramentas disciplinadas e planejamento, entrega autonomia controlável."*

> *"Claude Code truly uses your filesystem directly. It's just cat, grep, sed, find, etc."*
> — Grant Slatton
>
> *Tradução: "Claude Code verdadeiramente usa seu sistema de arquivos diretamente. É apenas cat, grep, sed, find, etc."*

> *"2025-2035 is the decade of agents."*
> — Andrej Karpathy
>
> *Tradução: "2025-2035 é a década dos agentes."*

---

## Citações Memoráveis (Para Slides)

> "Claramente, alguma ferramenta alienígena poderosa foi distribuída, exceto que ela vem sem manual."
> — Andrej Karpathy

> "Claude Code não é um produto. É um utilitário Unix."
> — Boris Cherny

> "É um fantasma no seu computador que pode fazer coisas por você."
> — Andrej Karpathy

> "Eu rodo 5 Claudes em paralelo no meu terminal."
> — Boris Cherny

> "Um CLAUDE.md é como um README para o Claude."
> — Steve Kinney

> "O terminal não é o inimigo. É a porta para a liberdade."

> "Pense nisso como ter um programador parceiro com quem você pode conversar sem tirar as mãos do teclado."

> "Use controle de versão religiosamente. Modo YOLO é 100x mais seguro quando git reset --hard pode desfazer tudo."
> — Agentic Engineer

> "A linguagem de programação mais quente é o inglês."
> — Andrej Karpathy

> "2025-2035 é a década dos agentes."
> — Andrej Karpathy

---

## SuperDicas

1. **O segredo é que ainda é um chat**
   Não complique. O Claude Code responde a linguagem natural igual ao Claude Web. A diferença é que agora ele pode FAZER coisas. Comece conversando normalmente.

2. **Use /clear entre tarefas diferentes**
   Cada tarefa nova merece um contexto limpo. Não deixe o histórico de uma análise de contrato poluir a próxima pesquisa de jurisprudência.

3. **Comece no modo Default**
   Veja as permissões sendo pedidas. Entenda o que o Claude quer fazer. Só depois migre para Auto-Accept quando se sentir confortável.

4. **O CLAUDE.md é seu melhor amigo**
   Invista tempo configurando. Quanto melhor o CLAUDE.md, menos você precisa repetir instruções.

5. **Git é seu seguro**
   Sempre trabalhe em repositórios git. Se algo der errado, `git reset --hard` te salva.

6. **Use @ para referenciar arquivos**
   Não copie e cole conteúdo. Use `@caminho/arquivo.pdf` e o Claude busca sozinho.

7. **Pergunte muito**
   Se não entendeu algo que o Claude fez, pergunte. "Por que você fez isso?" é sempre uma boa pergunta.

8. **Seja minimalista no global (~/.claude)**
   Instale apenas recursos que você usa em TODOS os projetos. O resto fica no projeto local.

9. **Considere múltiplos terminais**
   Quando estiver confortável, experimente o modo Boris Cherny: múltiplos terminais com tarefas paralelas.

---

## Erros Comuns a Evitar

| Erro | Por que acontece | Como evitar |
|------|------------------|-------------|
| Ter medo de experimentar | Terminal parece perigoso | Trabalhe em pasta de testes primeiro |
| Pular o CLAUDE.md | Parece opcional | Invista 10 minutos configurando |
| Usar YOLO sem git | Confiança excessiva | Sempre tenha controle de versão |
| Não usar /clear | Esquece que contexto degrada | Crie hábito: nova tarefa = /clear |
| Copiar/colar ao invés de @arquivo | Hábito do Web | Use @caminho/arquivo.pdf |
| Esquecer de /cost | Não monitorar gastos | Verifique periodicamente |
| Ignorar permissões | Impaciência | Use "A" (Always) para comandos seguros |
| Executar claude na pasta errada | Não verificou pwd | Sempre confira o diretório antes |
| Lotar o ~/.claude global | Achar que tudo é global | Seja minimalista no global |
| Não usar múltiplos terminais | Desconhecer o padrão | Experimente 2-3 terminais paralelos |

---

## Material de Apoio

### Documentação Oficial
| Título | Link | Relevância |
|--------|------|------------|
| Claude Code Overview | [code.claude.com/docs/en/overview](https://code.claude.com/docs/en/overview) | Visão geral oficial |
| Claude Code Setup | [code.claude.com/docs/en/setup](https://code.claude.com/docs/en/setup) | Instalação detalhada |
| Claude Code Memory | [code.claude.com/docs/en/memory](https://code.claude.com/docs/en/memory) | CLAUDE.md e memória |
| Claude Code Skills | [code.claude.com/docs/en/skills](https://code.claude.com/docs/en/skills) | Skills e capacidades |
| Claude Code Slash Commands | [code.claude.com/docs/en/slash-commands](https://code.claude.com/docs/en/slash-commands) | Comandos personalizados |
| Anthropic Best Practices | [anthropic.com/engineering/claude-code-best-practices](https://www.anthropic.com/engineering/claude-code-best-practices) | Boas práticas oficiais |
| GitHub - anthropics/claude-code | [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code) | Repositório oficial |
| VS Code Extension | [code.claude.com/docs/en/vs-code](https://code.claude.com/docs/en/vs-code) | Integração com VS Code |

### Posts de Blog e Tutoriais
| Título | Autor/Site | Link | Relevância |
|--------|------------|------|------------|
| The Alien Tool With No Manual | Paddo.dev | [paddo.dev](https://paddo.dev/blog/alien-tool-no-manual/) | Contexto Karpathy |
| How I Use Claude Code | Builder.io | [builder.io](https://www.builder.io/blog/claude-code) | Dicas práticas |
| Claude Code Study Notes | Ernest Chiang | [ernestchiang.com](https://www.ernestchiang.com/en/notes/ai/claude-code/) | Metáfora do arreio |
| Claude Code | Grant Slatton | [grantslatton.com](https://grantslatton.com/claude-code) | Filesystem-first |
| AI Development Course | Steve Kinney | [stevekinney.com](https://stevekinney.com/courses/ai-development/) | CLAUDE.md |
| How Boris Uses Claude Code | Paddo.dev | [paddo.dev](https://paddo.dev/blog/how-boris-uses-claude-code/) | Workflow do criador |
| Boris Cherny Workflow | VentureBeat | [venturebeat.com](https://venturebeat.com/technology/the-creator-of-claude-code-just-revealed-his-workflow-and-developers-are) | 5 terminais paralelos |
| Claude Code CLI vs VS Code | ClaudeLog | [claudelog.com](https://claudelog.com/faqs/claude-code-cli-vs-vscode-extension-comparison/) | Comparação de interfaces |

### Podcasts e Entrevistas
| Título | Canal | Link | Relevância |
|--------|-------|------|------------|
| Claude Code - Anthropic's Agent | Latent Space | [latent.space](https://www.latent.space/p/claude-code) | Entrevista com Boris Cherny |
| Boris Cherny - Creator | Developing.dev | [developing.dev](https://www.developing.dev/p/boris-cherny-creator-of-claude-code) | Backstory do criador |

### Artigos sobre Arquitetura
| Título | Autor/Site | Link | Relevância |
|--------|------------|------|------------|
| Claude Code Agent Architecture | ZenML | [zenml.io](https://www.zenml.io/llmops-database/claude-code-agent-architecture-single-threaded-master-loop-for-autonomous-coding) | Loop agêntico |
| A Simple Loop That Produces High Agency | AI4HUMAN | [medium.com](https://medium.com/@aiforhuman/claude-code-a-simple-loop-that-produces-high-agency-814c071b455d) | Think-Act-Observe-Correct |

### Segurança e Permissões
| Título | Autor/Site | Link | Relevância |
|--------|------------|------|------------|
| YOLO Mode Hidden Risks | UpGuard | [upguard.com](https://www.upguard.com/blog/yolo-mode-hidden-risks-in-claude-code-permissions) | Riscos do YOLO |
| Taming Claude YOLO Mode | Agentic Engineer | [agentic-engineer.com](https://www.agentic-engineer.com/blog/2025-10-13-taming-claude-yolo-mode) | Boas práticas YOLO |
| dangerously-skip-permissions | PromptLayer | [promptlayer.com](https://blog.promptlayer.com/claude-dangerously-skip-permissions/) | Explicação das flags |

### Karpathy
| Título | Autor | Link | Relevância |
|--------|-------|------|------------|
| 2025 LLM Year in Review | Andrej Karpathy | [karpathy.bearblog.dev](https://karpathy.bearblog.dev/year-in-review-2025/) | Visão macro dos agentes |
| Software Is Changing (Again) | Catalaize Substack | [catalaize.substack.com](https://catalaize.substack.com/p/andrej-karpathy-software-is-changing) | Y Combinator Talk |

### Demonstrações a Preparar

| Demo | Recurso Necessário | Bloco |
|------|-------------------|-------|
| Instalação ao vivo | Terminal limpo, conexão internet | 4 |
| /help e comandos básicos | Claude Code instalado | 5 |
| Referenciando arquivos com @ | Pasta com PDFs e docs | 5 |
| Permissões em ação | Demonstrar Default vs Auto-Accept | 6 |
| /init e CLAUDE.md | Pasta nova vazia | 7 |
| Exercícios práticos | Arquivos de exemplo preparados | 8 |
| Múltiplos terminais | 2-3 terminais lado a lado | 2.5 (opcional) |

### Checklist de Preparação do Instrutor

- [ ] Claude Code instalado e funcionando
- [ ] Conta Anthropic ativa com créditos
- [ ] Terminal configurado com fonte legível (14pt+)
- [ ] Pasta de testes com arquivos de exemplo (PDFs, docs, imagens)
- [ ] Slides com diagramas/citações prontos
- [ ] Backup: gravações das demos caso falhem ao vivo
- [ ] Conexão internet estável (duas opções se possível)
- [ ] CLAUDE.md de exemplo para mostrar
- [ ] Processo jurídico de exemplo (PDF 10-20 páginas)
- [ ] Checklist impresso para alunos acompanharem
- [ ] Setup para demonstrar múltiplos terminais (opcional)

---

## Referências Bibliográficas

1. **Anthropic.** (2025). "Claude Code: An Agentic Coding Tool". GitHub - anthropics/claude-code.
2. **Cherny, B.** (2024-2025). Claude Code creation and development. Latent Space Podcast.
3. **Cherny, B.** (2026). Creator of Claude Code reveals his workflow. VentureBeat, InfoQ.
4. **Karpathy, A.** (2025). "2025 LLM Year in Review". karpathy.bearblog.dev.
5. **Karpathy, A.** (2025). Posts em X/Twitter sobre ferramentas agênticas.
6. **Slatton, G.** (2025). "Claude Code". grantslatton.com.
7. **Kinney, S.** (2025). "AI Development Course - Claude.md". stevekinney.com.
8. **Latent Space.** (2025). "Claude Code - Anthropic's Agent in Your Terminal". latent.space.
9. **Chiang, E.** (2025). "Claude Code Study Notes". ernestchiang.com.
10. **Anthropic.** (2025). "Claude Code Best Practices". anthropic.com/engineering.
11. **Paddo.dev.** (2025). "The Alien Tool With No Manual". paddo.dev.
12. **ZenML.** (2025). "Claude Code Agent Architecture". zenml.io.
13. **AI4HUMAN.** (2025). "Claude Code: A Simple Loop That Produces High Agency". Medium.
14. **UpGuard.** (2025). "YOLO Mode Hidden Risks in Claude Code Permissions". upguard.com.
15. **Agentic Engineer.** (2025). "Taming Claude YOLO Mode". agentic-engineer.com.
16. **PromptLayer.** (2025). "Claude dangerously-skip-permissions". promptlayer.com.
17. **ClaudeLog.** (2026). "Claude Code CLI vs VS Code Extension". claudelog.com.

---

## Correspondência com Jornada do Herói

| Fase Campbell | Bloco da Aula | Conteúdo |
|---------------|---------------|----------|
| Mundo Ordinário | Bloco 1 | Recapitulação das aulas anteriores |
| Chamado à Aventura | Bloco 2 | O que é o Claude Code |
| Conhecendo as Ferramentas | Bloco 2.5 | Formas de acesso (CLI, IDE, Desktop) |
| Recusa do Chamado | Bloco 3 | Medo do terminal (e superação) |
| Encontro com o Mentor | Bloco 3 | "É só um chat com superpoderes" |
| Cruzamento do Limiar | Bloco 4 | Instalação |
| Testes e Aliados | Blocos 5-7 | Comandos, permissões, estrutura |
| Provação Suprema | Bloco 8 | Exercícios práticos |
| Recompensa | Bloco 8 | Consegue fazer coisas reais |
| Retorno com o Elixir | Bloco 9 | "O fantasma mora na máquina de vocês" |

---

*Roteiro de SUPERAULA gerado por tutor-roteiro*
*Curso: Sistemas Agênticos para Juristas*
*Estrutura Narrativa: Jornada do Herói (superação do medo do terminal)*
*Data: 2026-01-25*
