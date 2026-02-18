# Glossário de Precisão Terminológica

> **Definições precisas baseadas nas transcrições dos especialistas do AI Engineer Summit**
>
> Este glossário estabelece o significado EXATO que os "Ases" (especialistas da Anthropic, HumanLayer, Pydantic, Prefect, PromptLayer) usam para cada termo. Inclui citações originais com tradução, exemplos de uso correto e incorreto, e confusões comuns a evitar.

---

## Formato das Entradas

Cada termo segue esta estrutura:
- **Definição Precisa**: O que o termo significa EXATAMENTE
- **Origem**: Quem cunhou/popularizou, em qual contexto
- **Citação Original**: Frase exata do especialista (em inglês + tradução)
- **Uso Correto**: Exemplos de aplicação adequada
- **Uso Incorreto**: Antipadrões e equívocos comuns
- **Confusão Comum**: Distinções importantes com termos similares

---

## A

### Agent (Agente)

**Definição Precisa**:
Modelo de linguagem usando ferramentas em um loop. Os três componentes essenciais são: (1) Ambiente onde opera, (2) Ferramentas que pode usar, (3) System Prompt que define seu comportamento.

**Origem**: Barry Zhang, Anthropic - "How We Build Effective Agents" (AI Engineer Summit)

**Citação Original**:
> "We define agents as models using tools in a loop."
> — Barry Zhang, Anthropic
>
> **Tradução**: *"Definimos agentes como modelos usando ferramentas em um loop."*

**Uso Correto**:
- "Este agente tem acesso a ferramentas de pesquisa e executa em loop até encontrar a resposta"
- "O agente recebeu bash, grep e read como ferramentas"
- "Precisamos definir o ambiente (codebase) e as ferramentas (MCP servers) do agente"

**Uso Incorreto**:
- ❌ "Vou criar um agente" (quando na verdade é um prompt simples sem ferramentas)
- ❌ "O agente respondeu" (quando foi apenas uma chamada de API sem loop)
- ❌ "Agente de IA" como sinônimo genérico de "IA" ou "chatbot"

**Confusão Comum**:
- **Agent vs Assistant**: Um assistant responde perguntas; um agent EXECUTA AÇÕES em loop
- **Agent vs Workflow**: Agent decide o caminho; workflow segue passos pré-determinados
- **Agent vs Model**: O model é o LLM; o agent é model + tools + loop + environment

---

### Agent Harness (Arnês do Agente)

**Definição Precisa**:
A infraestrutura que envolve o modelo e permite que ele funcione como agente. Inclui: gerenciamento de contexto, ferramentas, skills, sub-agents, hooks, memória, compactação.

**Origem**: Thariq Shihipar, Anthropic - Claude Agent SDK Workshop

**Citação Original**:
> "Sub agents, web search, research, compacting, hooks, memory — there's all these like other things around the harness as well."
> — Thariq Shihipar, Anthropic
>
> **Tradução**: *"Sub-agentes, busca web, pesquisa, compactação, hooks, memória — há todas essas outras coisas ao redor do arnês também."*

**Uso Correto**:
- "O harness do Claude Code inclui bash, web search, file tools e task delegation"
- "Precisamos configurar o harness antes de rodar o agente"
- "O harness gerencia o contexto enquanto o modelo gera as respostas"

**Uso Incorreto**:
- ❌ "O harness é inteligente" (o harness é infraestrutura, a inteligência é do modelo)
- ❌ Confundir harness com o próprio agente

---

## B

### Bash (como Code Mode)

**Definição Precisa**:
O primeiro "code mode" - a capacidade de armazenar resultados em arquivos, gerar scripts dinamicamente, e compor funcionalidades. Bash não é apenas uma ferramenta, é um paradigma de composição.

**Origem**: Thariq Shihipar, Anthropic; Jared Zoneraich, PromptLayer

**Citações Originais**:
> "Bash is very composable — static scripts, low context usage."
> — Thariq Shihipar, Anthropic
>
> **Tradução**: *"Bash é muito componível — scripts estáticos, baixo uso de contexto."*

> "Bash is all you need."
> — Jared Zoneraich, PromptLayer
>
> **Tradução**: *"Bash é tudo que você precisa."*

**Uso Correto**:
- "O agente usou bash para criar um script que depois reutilizou"
- "Bash permite compor grep + sed + awk em uma única operação"
- "Salvamos o resultado em arquivo via bash para não poluir o contexto"

**Uso Incorreto**:
- ❌ "Bash é perigoso para agentes" (com sandboxing adequado, é a ferramenta mais poderosa)
- ❌ "Substituir bash por ferramentas específicas" (perde composabilidade)

**Confusão Comum**:
- **Bash vs Tool individual**: Uma tool faz UMA coisa; bash compõe MUITAS coisas
- **Bash vs Code Generation**: Bash executa; code generation pode criar scripts para bash executar

---

### Bitter Lesson, The (A Lição Amarga)

**Definição Precisa**:
Princípio de que abordagens mais gerais, escaláveis e que aproveitam computação sempre vencem abordagens especializadas e hardcoded no longo prazo. Aplicado a agentes: confie no modelo, não em scaffolding.

**Origem**: Rich Sutton (conceito original); Boris Cherny, Anthropic (aplicação a agentes)

**Citação Original**:
> "The more general model always wins."
> — Boris Cherny, Anthropic
>
> **Tradução**: *"O modelo mais geral sempre vence."*

**Uso Correto**:
- "Seguindo a Bitter Lesson, removemos regras hardcoded e deixamos o modelo decidir"
- "Em vez de criar N workflows específicos, confiamos no modelo geral"
- "A Bitter Lesson sugere: menos scaffolding, mais capacidade do modelo"

**Uso Incorreto**:
- ❌ "A Bitter Lesson diz para não usar ferramentas" (ferramentas são OK, regras rígidas não)
- ❌ Usar como desculpa para não testar ou validar

---

## C

### Compact/Compaction (Compactação)

**Definição Precisa**:
Processo de resumir o contexto da conversa quando atinge limites. A recomendação dos especialistas: evite compaction movendo estado para arquivos.

**Origem**: Thariq Shihipar, Anthropic

**Citação Original**:
> "A lot of times when I talk to people who are using Claude Code, they're like, I'm on my fifth compact. I'm like, what? I've almost never done a compact before. If you're moving stuff to files, then you have a lot of flexibility to start fresh."
> — Thariq Shihipar, Anthropic
>
> **Tradução**: *"Muitas vezes quando converso com pessoas usando Claude Code, elas dizem: estou no meu quinto compact. E eu penso: o quê? Eu quase nunca fiz compact. Se você está movendo coisas para arquivos, então tem muita flexibilidade para começar do zero."*

**Uso Correto**:
- "Em vez de fazer compact, salvei o relatório em arquivo"
- "Nunca precisei de compact porque mantenho estado nos arquivos do projeto"
- "O compact preserva informações críticas mas perde detalhes"

**Uso Incorreto**:
- ❌ "Fazer compact é normal" (indica má gestão de contexto)
- ❌ "Compact resolve tudo" (perde informações importantes)

---

### Context Engineering (Engenharia de Contexto)

**Definição Precisa**:
A arte e ciência de gerenciar o que vai para o contexto do modelo. É o fator MAIS IMPORTANTE para qualidade de agentes. Não é só o prompt - inclui ferramentas, arquivos, scripts, histórico.

**Origem**: Dex Horthy, HumanLayer - "12 Factor Agents"

**Citação Original**:
> "Everything in making agents good is context engineering."
> — Dex Horthy, HumanLayer
>
> **Tradução**: *"Tudo em fazer agentes bons é engenharia de contexto."*

**Uso Correto**:
- "Precisamos fazer context engineering: o que entra, o que sai, quando compactar"
- "O CLAUDE.md é context engineering - informação sempre disponível"
- "Mover resultados para arquivos é context engineering"

**Uso Incorreto**:
- ❌ "Context engineering é só escrever bons prompts" (é muito mais amplo)
- ❌ "Jogar tudo no contexto" (isso é anti-context engineering)

**Confusão Comum**:
- **Context Engineering vs Prompt Engineering**: Prompt é parte do contexto, mas contexto inclui tools, files, history, etc.

---

### Control Flow (Fluxo de Controle)

**Definição Precisa**:
A sequência de decisões e ações que um agente toma. O princípio fundamental: VOCÊ deve controlar o fluxo, não escondê-lo em abstrações de frameworks.

**Origem**: Dex Horthy, HumanLayer - "12 Factor Agents"

**Citação Original**:
> "Own your control flow."
> — Dex Horthy, HumanLayer
>
> **Tradução**: *"Seja dono do seu fluxo de controle."*

**Uso Correto**:
- "Implementamos o loop do agente explicitamente para ter controle do fluxo"
- "Não usamos framework mágico - controlamos cada passo"
- "O fluxo de controle está no nosso código, não em biblioteca"

**Uso Incorreto**:
- ❌ "O framework cuida do fluxo" (você perde visibilidade e controle)
- ❌ "Deixa o agente decidir tudo" (precisa de gates e checkpoints)

---

## D

### Discovery (Descoberta de Ferramentas)

**Definição Precisa**:
Uma das três diferenças críticas entre agentes e humanos: agentes não conseguem navegar e explorar ferramentas como humanos. Precisam de documentação inline.

**Origem**: Jeremiah Lowin, Prefect - "Your MCP Server is Bad"

**Citação Original**:
> "There are three differences [between agents and humans]: Discovery, Iteration, Context."
> — Jeremiah Lowin, Prefect
>
> **Tradução**: *"Há três diferenças [entre agentes e humanos]: Descoberta, Iteração, Contexto."*

**Uso Correto**:
- "Para melhorar discovery, colocamos exemplos na docstring da tool"
- "O agente não consegue descobrir que essa tool existe sem boa descrição"
- "Discovery é resolver: como o agente sabe que a ferramenta faz X?"

**Uso Incorreto**:
- ❌ "O agente vai descobrir sozinho" (não vai, precisa de documentação)
- ❌ "Nome da tool é suficiente" (precisa de descrição rica)

---

## F

### Flatten Arguments (Achatar Argumentos)

**Definição Precisa**:
Princípio de design de ferramentas MCP: evitar estruturas aninhadas (config: dict). Parâmetros devem ser flat (simples, no primeiro nível).

**Origem**: Jeremiah Lowin, Prefect - "Your MCP Server is Bad"

**Citação Original**:
> "Flatten arguments — no nested structures."
> — Jeremiah Lowin, Prefect
>
> **Tradução**: *"Achate os argumentos — sem estruturas aninhadas."*

**Uso Correto**:
```python
# CORRETO
def search(query: str, max_results: int, date_from: str):
    pass

# INCORRETO
def search(config: dict):  # aninhado
    pass
```

**Uso Incorreto**:
- ❌ Passar dicionários ou objetos complexos como parâmetros
- ❌ Usar config objects em vez de parâmetros explícitos

---

## H

### Hooks

**Definição Precisa**:
Mecanismo para inserir verificação DETERMINÍSTICA ou contexto adicional em pontos específicos do loop do agente. Hooks não são inteligência - são checkpoints programáticos.

**Origem**: Thariq Shihipar, Anthropic

**Citação Original**:
> "Hooks are a way of doing deterministic verification or inserting context."
> — Thariq Shihipar, Anthropic
>
> **Tradução**: *"Hooks são uma forma de fazer verificação determinística ou inserir contexto."*

**Uso Correto**:
- "Usamos hook para verificar se o agente leu o arquivo antes de editar"
- "O hook de pre-commit roda lint automaticamente"
- "Hooks adicionam determinismo a um sistema estocástico"

**Uso Incorreto**:
- ❌ "Hook inteligente" (hooks são determinísticos, não inteligentes)
- ❌ Usar hooks para lógica complexa (devem ser simples e rápidos)

---

## I

### Instructions as Context (Instruções como Contexto)

**Definição Precisa**:
Princípio de design MCP: a documentação deve estar DENTRO da ferramenta, não em lugar separado. O agente não vai ler documentação externa.

**Origem**: Jeremiah Lowin, Prefect

**Citação Original**:
> "Instructions as context — documentation IN the tool."
> — Jeremiah Lowin, Prefect
>
> **Tradução**: *"Instruções como contexto — documentação DENTRO da ferramenta."*

**Uso Correto**:
- "Colocamos exemplos de uso na docstring da função MCP"
- "A descrição da tool inclui formato esperado e casos de erro"
- "Instruções estão no tool, não em README separado"

**Uso Incorreto**:
- ❌ "Documentação está no wiki" (agente não vai lá)
- ❌ Descrições de tool com uma linha só

---

## L

### LM as Pure Function (LM como Função Pura)

**Definição Precisa**:
O modelo de linguagem é uma função pura: tokens entram, tokens saem. Não tem estado interno entre chamadas. Todo "conhecimento" vem do contexto passado.

**Origem**: Dex Horthy, HumanLayer

**Citação Original**:
> "LMs are pure functions, tokens in, tokens out."
> — Dex Horthy, HumanLayer
>
> **Tradução**: *"LMs são funções puras, tokens entram, tokens saem."*

**Uso Correto**:
- "O LM é stateless - precisamos passar todo contexto a cada chamada"
- "Não espere que o modelo 'lembre' - é função pura"
- "Estado precisa estar no harness, não no modelo"

**Uso Incorreto**:
- ❌ "O modelo aprendeu durante a conversa" (não aprendeu, recebeu contexto)
- ❌ "O modelo sabe X" (ele processa X se estiver no contexto)

---

## M

### MCP (Model Context Protocol)

**Definição Precisa**:
Protocolo para comunicação agente-ferramenta. Permite: tools dinâmicas, streaming de logs, sampling (callback para LLM), e execução como subprocesso via stdin/stdout.

**Origem**: Anthropic; Samuel Colvin, Pydantic (para uso programático)

**Citação Original**:
> "MCP's way of being allowed to operate as effectively a subprocess over standard in and standard out is extremely useful."
> — Samuel Colvin, Pydantic
>
> **Tradução**: *"A forma do MCP de poder operar efetivamente como um subprocesso via entrada e saída padrão é extremamente útil."*

**Uso Correto**:
- "O MCP server expõe ferramentas que o agente pode chamar"
- "Usamos MCP para integrar a API do PJE"
- "MCP permite que a tool faça callback para o LLM via sampling"

**Uso Incorreto**:
- ❌ "MCP é só OpenAPI para IA" (tem features únicas: dynamic tools, sampling, logging)
- ❌ "MCP serve só para Cursor/Claude Desktop" (serve para qualquer agente)

---

### Micro-Agents (Micro-Agentes)

**Definição Precisa**:
Agentes pequenos e focados com 3-10 passos, majoritariamente determinísticos com LLM "salpicado" onde necessário. Oposto de mega-agentes que tentam fazer tudo.

**Origem**: Dex Horthy, HumanLayer

**Citação Original**:
> "Small focused agents... micro agents with 3-10 steps."
> — Dex Horthy, HumanLayer
>
> **Tradução**: *"Agentes pequenos e focados... micro-agentes com 3-10 passos."*

**Uso Correto**:
- "Criamos um micro-agente só para extração de datas de documentos"
- "O micro-agente tem 5 passos fixos, com LLM só na classificação"
- "Preferimos 3 micro-agentes a 1 mega-agente"

**Uso Incorreto**:
- ❌ "O micro-agente faz tudo" (contradição em termos)
- ❌ Micro-agente com dezenas de ferramentas

---

## O

### Outcomes not Operations (Resultados, não Operações)

**Definição Precisa**:
Princípio de design de ferramentas MCP: expor resultados de alto nível, não operações de baixo nível. O agente quer "relatório de vendas", não "SELECT * FROM sales".

**Origem**: Jeremiah Lowin, Prefect

**Citação Original**:
> "Outcomes not operations."
> — Jeremiah Lowin, Prefect
>
> **Tradução**: *"Resultados, não operações."*

**Uso Correto**:
```python
# CORRETO - outcome (resultado)
def get_sales_report(period: str) -> Report:
    pass

# INCORRETO - operation (operação)
def execute_sql(query: str) -> dict:
    pass
```

**Uso Incorreto**:
- ❌ Expor operações CRUD brutas
- ❌ Fazer o agente montar queries SQL

---

## P

### Plan Mode (Modo Planejamento)

**Definição Precisa**:
Funcionalidade do Claude Code (Shift+Tab) que permite explorar e planejar ANTES de executar. O agente pesquisa, propõe, e só executa com aprovação.

**Origem**: Boris Cherny, Anthropic

**Citação Original**:
> "Plan Mode — shift+tab to explore before executing."
> — Boris Cherny, Anthropic
>
> **Tradução**: *"Modo Planejamento — shift+tab para explorar antes de executar."*

**Uso Correto**:
- "Entrei em Plan Mode para entender a arquitetura antes de mudar"
- "No Plan Mode, o agente só lê e propõe, não escreve"
- "Shift+Tab para planejar a refatoração"

**Uso Incorreto**:
- ❌ "Plan Mode para tarefas simples" (overhead desnecessário)
- ❌ Confundir com brainstorming informal

---

## S

### Sampling (no contexto MCP)

**Definição Precisa**:
Mecanismo MCP onde uma ferramenta (server) pode fazer callback para o LLM através do cliente (agent). Permite que tools façam inferência sem configurar seu próprio acesso ao modelo.

**Origem**: Samuel Colvin, Pydantic - "MCP is All You Need"

**Citação Original**:
> "Sampling is this idea of a way where within MCP the server can effectively make a request back through the client to the LLM."
> — Samuel Colvin, Pydantic
>
> **Tradução**: *"Sampling é essa ideia de uma forma onde, dentro do MCP, o servidor pode efetivamente fazer uma requisição de volta através do cliente para o LLM."*

**Uso Correto**:
- "A tool de SQL usa sampling para gerar queries via callback ao LLM"
- "Com sampling, a tool não precisa de API key própria"
- "O MCP server faz sampling quando precisa de inteligência"

**Uso Incorreto**:
- ❌ Confundir com "sampling" estatístico (temperature, top_p)
- ❌ "Sampling é quando o modelo gera texto" (é callback específico MCP)

---

### Skills (no contexto Claude Code)

**Definição Precisa**:
Pastas com instruções especializadas que o agente pode acessar. Skills são para instruções repetíveis que precisam de muita expertise. Não são código - são conhecimento estruturado.

**Origem**: Thariq Shihipar, Anthropic

**Citação Original**:
> "Skills are really good for pretty repeatable instructions that need a lot of expertise in them... It's really just a very detailed and good prompt on how to do [something]."
> — Thariq Shihipar, Anthropic
>
> **Tradução**: *"Skills são muito boas para instruções bastante repetíveis que precisam de muita expertise... É realmente apenas um prompt muito detalhado e bom sobre como fazer [algo]."*

**Uso Correto**:
- "A skill de frontend-design contém expertise de nosso melhor engenheiro"
- "Skills são pastas que o agente pode 'cd into' e ler"
- "Criamos uma skill de relatórios judiciais com metodologia refinada"

**Uso Incorreto**:
- ❌ "Skill é um plugin de código" (não é código, é prompt/conhecimento)
- ❌ "Skill executa automaticamente" (precisa ser invocada)
- ❌ Confundir com tools/ferramentas

**Confusão Comum**:
- **Skill vs Command**: Command é atalho invocado manualmente; Skill é expertise reutilizável
- **Skill vs Tool**: Tool executa ação; Skill fornece conhecimento/metodologia

---

### State in Files (Estado em Arquivos)

**Definição Precisa**:
Paradigma fundamental: o estado do agente deve estar nos arquivos do filesystem, não na conversa. Isso permite: começar fresco, evitar compaction, persistência.

**Origem**: Thariq Shihipar, Anthropic

**Citação Original**:
> "At least in code the state is in the files of the codebase. If you're moving stuff to files, then you have a lot of flexibility to start fresh."
> — Thariq Shihipar, Anthropic
>
> **Tradução**: *"Pelo menos em código, o estado está nos arquivos do codebase. Se você está movendo coisas para arquivos, então tem muita flexibilidade para começar do zero."*

**Uso Correto**:
- "Salvamos o relatório em arquivo para não poluir o contexto"
- "Estado está no filesystem, não na memória da conversa"
- "Posso começar nova sessão porque estado está em arquivos"

**Uso Incorreto**:
- ❌ "Manter tudo na conversa" (causa compaction excessivo)
- ❌ "O agente lembra" (não lembra, precisa ler dos arquivos)

---

### Sub-agent Forking (Bifurcação de Sub-agente)

**Definição Precisa**:
Técnica de criar sub-agente com contexto isolado para tarefas de pesquisa profunda. Evita poluir o contexto principal com informações intermediárias.

**Origem**: Jared Zoneraich, PromptLayer - "How Claude Code Works"

**Citação Original**:
> "Sub-agent forking for isolated context."
> — Jared Zoneraich, PromptLayer
>
> **Tradução**: *"Bifurcação de sub-agente para contexto isolado."*

**Uso Correto**:
- "Forkei um sub-agente para pesquisar jurisprudência sem poluir contexto principal"
- "O sub-agente volta só com o resultado, não com todo o caminho"
- "Task tool com run_in_background é sub-agent forking"

**Uso Incorreto**:
- ❌ Passar todo contexto para o sub-agente (anula o benefício)
- ❌ Usar sub-agente para tarefas triviais (overhead desnecessário)

---

## T

### Think Like Your Agents (Pense Como Seus Agentes)

**Definição Precisa**:
Princípio de design: coloque-se no lugar do agente com context window limitado. O que ele vê? O que ele sabe? O que ele pode fazer?

**Origem**: Barry Zhang, Anthropic

**Citação Original**:
> "Think like your agents — understand limited context window."
> — Barry Zhang, Anthropic
>
> **Tradução**: *"Pense como seus agentes — entenda a janela de contexto limitada."*

**Uso Correto**:
- "Pensando como o agente: ele não sabe o histórico, preciso passar contexto"
- "Do ponto de vista do agente, essa tool tem descrição confusa"
- "O agente só vê o que está no contexto atual"

**Uso Incorreto**:
- ❌ Assumir que o agente "sabe" coisas que não estão no contexto
- ❌ Esquecer as limitações do context window

---

### Tool Interface for AI (Interface de Ferramenta para IA)

**Definição Precisa**:
Princípio fundamental de design MCP: você não está construindo uma ferramenta - está construindo uma INTERFACE DE USUÁRIO para IA. Deve ser tão bem desenhada quanto UI para humanos.

**Origem**: Jeremiah Lowin, Prefect - "Your MCP Server is Bad"

**Citação Original**:
> "You are not building a tool. You are building a user interface for AI."
> — Jeremiah Lowin, Prefect
>
> **Tradução**: *"Você não está construindo uma ferramenta. Você está construindo uma interface de usuário para IA."*

**Uso Correto**:
- "Projetamos a MCP tool como se fosse UI: clara, intuitiva, bem documentada"
- "A tool é a interface entre o agente e nosso sistema"
- "Tratamos descrições de tools como copy de UX"

**Uso Incorreto**:
- ❌ "É só uma API" (precisa de design cuidadoso)
- ❌ Descrições técnicas sem pensar no "usuário" (o LLM)

---

### Transcript Reading (Leitura de Transcritos)

**Definição Precisa**:
A meta-habilidade mais importante para melhorar agentes: ler os transcritos/logs de execução repetidamente para entender o que funciona e o que não funciona.

**Origem**: Thariq Shihipar, Anthropic

**Citação Original**:
> "The number one thing, the metalearning for designing an agent loop to me is just to read the transcripts over and over again."
> — Thariq Shihipar, Anthropic
>
> **Tradução**: *"A coisa número um, o meta-aprendizado para projetar um loop de agente para mim é simplesmente ler os transcritos repetidamente."*

**Uso Correto**:
- "Li 50 transcritos e identifiquei o padrão de erro"
- "Transcript reading revelou que o agente sempre falha no passo 3"
- "Debugamos via transcript, não via intuição"

**Uso Incorreto**:
- ❌ "Funciona na minha cabeça" (precisa ver transcritos reais)
- ❌ Confiar em intuição sem evidência de logs

---

### Trust the Model (Confie no Modelo)

**Definição Precisa**:
Filosofia do Claude Code: dê ferramentas ao modelo e saia do caminho. Menos scaffolding, mais confiança na capacidade do modelo.

**Origem**: Jared Zoneraich, PromptLayer

**Citações Originais**:
> "Give it tools and then get out of the way."
> — Jared Zoneraich, PromptLayer
>
> **Tradução**: *"Dê ferramentas a ele e saia do caminho."*

> "Simple is better than complex. Less scaffolding, more model."
> — Jared Zoneraich, PromptLayer
>
> **Tradução**: *"Simples é melhor que complexo. Menos scaffolding, mais modelo."*

**Uso Correto**:
- "Em vez de criar N regras, confiamos no modelo para decidir"
- "Demos bash e saímos do caminho"
- "Trust the model: ele sabe compor ferramentas"

**Uso Incorreto**:
- ❌ "Trust the model" como desculpa para não testar
- ❌ Não ter nenhum guardrail ou validação

---

## W

### Workflow (vs Agent)

**Definição Precisa**:
Sequência de passos PRÉ-DETERMINADOS com baixa variabilidade. Oposto de Agent que decide o caminho. Use workflow quando quer consistência; agent quando precisa de flexibilidade.

**Origem**: Thariq Shihipar, Anthropic

**Citação Original**:
> "Workflows are for things with very predetermined steps. The thing you're looking for is to not have a lot of variability."
> — Thariq Shihipar, Anthropic
>
> **Tradução**: *"Workflows são para coisas com passos muito predeterminados. O que você busca é não ter muita variabilidade."*

**Uso Correto**:
- "Pipeline de sentença é workflow: sempre relatar → analisar → minutar"
- "Usamos workflow porque cada processo BPC segue mesmo padrão"
- "Workflow garante consistência; agent traz flexibilidade"

**Uso Incorreto**:
- ❌ "Workflow inteligente" (workflows são determinísticos)
- ❌ Usar agent para tarefas sempre idênticas

**Confusão Comum**:
- **Workflow vs Agent**: Workflow = passos fixos; Agent = decisão dinâmica
- **Workflow vs Pipeline**: Geralmente sinônimos neste contexto

---

## Numerais

### 50 Tools Rule (Regra das 50 Ferramentas)

**Definição Precisa**:
Limite prático de 50 ferramentas por agente para tools bem desenhadas. Se precisa de mais, provavelmente as tools estão muito granulares ou mal nomeadas.

**Origem**: Jeremiah Lowin, Prefect

**Citação Original**:
> "50 tools per agent max."
> — Jeremiah Lowin, Prefect
>
> **Tradução**: *"50 ferramentas por agente no máximo."*

**Uso Correto**:
- "Temos 47 tools - dentro do limite de 50"
- "Consolidamos 80 tools em 30 mais bem desenhadas"
- "Mais de 50 indica design ruim"

**Uso Incorreto**:
- ❌ "Quanto mais tools melhor" (causa confusão no agente)
- ❌ Tools muito granulares que inflam o número

---

## Apêndice: Checklist de Quando Construir um Agente

Baseado em Barry Zhang (Anthropic):

```
┌─────────────────────────────────────────────────────────────────┐
│  CHECKLIST: DEVO CONSTRUIR UM AGENTE?                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  □ A tarefa é complexa o suficiente para justificar um loop?   │
│  □ O valor gerado justifica o custo de tokens?                 │
│  □ O modelo atual tem capacidade para a tarefa?                │
│  □ O custo de erro é aceitável? (agentes erram)                │
│  □ Preciso de variabilidade ou consistência é mais importante? │
│                                                                 │
│  SE MAIORIA "SIM" → Agent                                       │
│  SE MAIORIA "NÃO" → Workflow ou chamada simples                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Fontes Citadas

| Especialista | Empresa | Palestra | Conceitos |
|--------------|---------|----------|-----------|
| Barry Zhang | Anthropic | How We Build Effective Agents | Agent definition, checklist, think like agents |
| Dex Horthy | HumanLayer | 12 Factor Agents | Context engineering, micro-agents, control flow |
| Jared Zoneraich | PromptLayer | How Claude Code Works | Trust the model, bash, sub-agent forking |
| Boris Cherny | Anthropic | Claude Code Evolution | Bitter lesson, plan mode |
| Jeremiah Lowin | Prefect | Your MCP Server is Bad | 50 tools, outcomes not operations, flatten args |
| Thariq Shihipar | Anthropic | Agent SDK Workshop | Harness, skills, hooks, state in files |
| Samuel Colvin | Pydantic | MCP is All You Need | Sampling, MCP architecture |

---

## Índice de Citações por Tema

### Arquitetura de Agentes
- "We define agents as models using tools in a loop." → *Definimos agentes como modelos usando ferramentas em um loop.*
- "Think like your agents — understand limited context window." → *Pense como seus agentes — entenda a janela de contexto limitada.*
- "LMs are pure functions, tokens in, tokens out." → *LMs são funções puras, tokens entram, tokens saem.*

### Engenharia de Contexto
- "Everything in making agents good is context engineering." → *Tudo em fazer agentes bons é engenharia de contexto.*
- "If you're moving stuff to files, then you have a lot of flexibility to start fresh." → *Se você está movendo coisas para arquivos, então tem muita flexibilidade para começar do zero.*

### Design de Ferramentas (MCP)
- "You are not building a tool. You are building a user interface for AI." → *Você não está construindo uma ferramenta. Você está construindo uma interface de usuário para IA.*
- "50 tools per agent max." → *50 ferramentas por agente no máximo.*
- "Outcomes not operations." → *Resultados, não operações.*
- "Flatten arguments — no nested structures." → *Achate os argumentos — sem estruturas aninhadas.*

### Filosofia de Desenvolvimento
- "The more general model always wins." → *O modelo mais geral sempre vence.*
- "Give it tools and then get out of the way." → *Dê ferramentas a ele e saia do caminho.*
- "Own your control flow." → *Seja dono do seu fluxo de controle.*

### Debugging e Melhoria
- "The metalearning for designing an agent loop is just to read the transcripts over and over again." → *O meta-aprendizado para projetar um loop de agente é simplesmente ler os transcritos repetidamente.*

---

*Glossário compilado a partir das transcrições do AI Engineer Summit 2024-2025*
*Última atualização: Janeiro 2026*
