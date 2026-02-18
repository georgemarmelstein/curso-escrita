# ESTRUTURA DAS AULAS - SLIDES 2025

## Resumo Geral
Total de apresentações: 12 aulas
Tema: LLMs (Large Language Models) e suas aplicações

---

## AULA 1 - Máquinas de Transformação

**Total de slides: 5**

### Estrutura:

**Slide 1:** Capa
- Título: LLMS COMO MÁQUINAS DE TRANSFORMAÇÃO
- Autor: George Marmelstein

**Slide 2:** Conceito Principal
- "Os LLMs não reproduzem o passado. Eles transformam o presente e criam o futuro."

**Slide 3:** Modo Google
- Reproduzindo o passado
- Arquivos escritos, publicados e indexados no passado
- O arquivo original é reproduzido fielmente

**Slide 4:** Modo LLM
- Transformando o presente, criando o futuro
- O LLM não consulta um "banco de textos"
- Cada resposta é única, fruto de um mosaico de possibilidades estatísticas
- Tecnicamente, não está plagiando - está criando algo novo baseado em técnicas aprendidas
- Aprende padrões de como a linguagem funciona
- A recombinação pode resultar em algo semelhante ao que já existe ou algo completamente inusitado

**Slide 5:** Síntese
- **Large Language Model:** Modelos de Linguagem de Larga Escala treinados com um vasto conjunto de textos para prever a próxima palavra
- **Máquinas de Transformação e Criação:** Na sua essência, não consulta internet e não possui "banco de texto". Dentro dele há números, não textos
- **Como ele faz isso?** Jogando um jogo de adivinhação estatística

---

## AULA 2 - O Jogo da Adivinhação

**Total de slides: 5**

### Estrutura:

**Slide 1:** Capa
- Título: O JOGO DA ADIVINHAÇÃO
- Autor: George Marmelstein

**Slide 2:** (Slide visual/imagem)

**Slide 3:** O Jogo
- Uma poderosa máquina de previsão de palavras
- Exemplo: "Era uma vez um rei que morava em um..."
  - Castelo: 38,29%
  - Reino: 28,92%
  - Casebre: 2,3%
  - Barco: 1,2%
- A máquina sempre escolhe uma palavra provável, mas nem sempre a mais óbvia

**Slide 4:** A Lógica do LLM
- A previsão é baseada em uma probabilidade semântica (diferente de probabilidade factual)
- Os LLMs são máquinas de calcular não-determinísticas que geram uma palavra (token) de cada vez
- A previsão é autorregressiva: o modelo usa a própria saída como entrada para a próxima previsão
- As palavras escolhidas condicionam as seguintes (enquadramento)

**Slide 5:** Síntese
- **Máquina de Calcular Não-Determinística:** Geram textos inéditos a partir de escolha entre palavras semanticamente prováveis, com margem de aleatoriedade (processo estocástico)
- **Temperatura:** O nível de aleatoriedade é definido pela temperatura. Quanto mais alta, mais imprevisível é o modelo
- **Implicações:** Apesar da aleatoriedade, é possível controlar e dirigir a máquina através do prompt

---

## AULA 3 - A Janela de Contexto

**Total de slides: 7**

### Estrutura:

**Slide 1:** Capa
- Título: A JANELA DE CONTEXTO
- Autor: George Marmelstein

**Slide 2:** A Importância da Janela de Contexto
1. **Conceito:** Assim como uma calculadora tem limite de input, os LLMs só conseguem prestar atenção em uma quantidade limitada de texto
2. **Limites:** Quando extrapola a janela de contexto, as informações antigas vão se "apagando" (memória deslizante)
3. **Aprendizado In-Context:** O usuário tem o poder de "ensinar" novos conhecimentos e novas tarefas
4. **Capacidades da Máquina:**
   - Maior capacidade interpretativa
   - Maior poder de análise de textos longos
   - Maior consistência em conversas
   - Maior dirigibilidade

**Slide 3:** Evolução da Janela de Contexto
- 4k → 32k
- 128k → 200k
- 200k → 2M
- Evolução: Engenharia de Prompt → Engenharia de Contexto → RAG → Modelos Multi Agentes

**Slide 4:** (Slide visual/imagem)

**Slide 5:** A Lógica do LLM
- Pouca informação = pouco contexto
- Excesso de informação = degradação e distração (metáfora do mochileiro)
- Os LLMs "pensam" através de tokens. Inputs nobres; outputs nobres
- Cada conversa é uma nova janela de contexto. A máquina não lembra das conversas passadas
- A resposta da máquina entra no contexto e influencia as próximas respostas na mesma conversa

**Slide 6:** "Vamos colocar a mão na massa..."

**Slide 7:** Síntese
- **Janela de Contexto:** Quantidade máxima de informação que um LLM consegue "ver" e processar de uma só vez
- **Nova Conversa = Novo Contexto:** O LLM não lembra das conversas passadas. Cada conversa inaugura uma nova janela
- **Implicações:** O segredo é dominar a camada de conteúdo (engenharia de contexto)

---

## AULA 4 - O Conhecimento da Máquina

**Total de slides: 4**

### Estrutura:

**Slide 1:** Capa
- Título: DE ONDE A MÁQUINA TIRA CONHECIMENTO?
- Autor: George Marmelstein

**Slide 2:** Fontes de Conhecimento
1. **Conhecimento Paramétrico**
   - Parâmetros
   - Não há textos
   - Pesos e conexões

2. **Conhecimento de Sistema**
   - Configurações
   - Prompt de sistema
   - Tools, skills etc.

3. **Conhecimento do Usuário**
   - Via prompt
   - Via anexos
   - Via "Resource"

4. **Conhecimento Buscado**
   - Internet
   - APIs privadas
   - Resources

**Slide 3:** O Conhecimento da Máquina (Características)

**Conhecimento Paramétrico:**
- Probabilístico
- Frequentista
- Estático
- Congelado
- Datado (cutoff)

**Conhecimento de Sistema:**
- "Código de conduta"
- Recursos
- Guardrails

**Conhecimento Externo:**
- Contextual
- Dinâmico
- Limitado (tamanho)

**Slide 4:** Síntese
- **Conhecimento dos LLMs:** Três fontes - parâmetros, conhecimento do usuário e conhecimento recuperado
- **Analogia com o Cérebro:** O conhecimento paramétrico é o que está na cabeça do LLM
- **Implicações:** O segredo é saber quando usar cada um desses conhecimentos

---

## AULA 5 - Como Treinar um LLM

**Total de slides: 8**

### Estrutura:

**Slide 1:** Capa
- Título: COMO TREINAR UM LLM
- Autor: George Marmelstein

**Slide 2:** Dois "Treinos"

**PRÉ-TREINO:**
- Aprendizado através de "leitura"
- Padrões de linguagem
- Aprende a prever o próximo token

**FINE-TUNING:**
- Aprendizado através de "questões"
- Correção e feedback (RLHF)
- Estrutura conversacional

**Slide 3:** Receita para fazer um LLM (Pré-treino)
1. **Corpus Textual:** Junte uma quantidade absurda de texto e transforme em tokens
2. **Rede Neural:** Coloque tudo em uma máquina que ajusta bilhões de parâmetros estatísticos
3. **Treinamento:** Resultado é uma rede neural com bilhões de números que consegue gerar textos similares ao do treinamento (compressão com perda)

**Slide 4:** (Slide visual/imagem)

**Slide 5:** Receita para fazer um LLM (Fine-tuning)
1. **Parâmetros:** Pegue os parâmetros otimizados na fase de pré-treino
2. **Ajuste Fino:** Treine o modelo com exemplos de perguntas e respostas, forneça feedback positivo e negativo
3. **Assistente:** O resultado é um assistente que sabe conversar, seguir instruções e se comportar de maneira segura

**Slide 6:** (Slide visual/imagem)

**Slide 7:** Características dos Parâmetros

**Conhecimento Paramétrico:**
- Probabilístico
- Frequentista
- Estático
- Congelado
- Datado (cutoff)

**Vieses de Treino:**
- Bajulador
- Previsível
- Pasteurizado
- Estocástico

**Slide 8:** Síntese
- **Pré-treino:** Fase em que o modelo aprende a estrutura da linguagem através da leitura massiva de textos
- **Fine-tuning:** Fase em que aprende estrutura conversacional e comportamentos específicos através de exemplos e feedback humano
- **Implicações:** Um LLM é um preditor de padrões linguísticos refinado por feedback humano

---

## AULA 6 - Alucinações

**Total de slides: 8**

### Estrutura:

**Slide 1:** Capa
- Título: ALUCINAÇÕES DOS LLMS
- Autor: George Marmelstein

**Slide 2:** (Slide visual/imagem)

**Slide 3:** Conceito - Uma máquina de palpites probabilísticos
- A alucinação ocorre quando o modelo produz respostas desconectadas com a realidade
- O LLM não possui intenção de mentir ou senso de realidade
- Não é um bug temporário, mas uma característica matematicamente inevitável

**Slide 4:** Porque os LLMs Alucinam (Metáfora do concurseiro)

**Problema dos dados usados no treinamento:**
- Lacunas de conhecimento
- Dados ausentes ou raros
- Corte temporal
- Nichos não-representados
- Dados incorretos ou enviesados
- Conflitos de informação
- Ambiguidades

**Problemas do feedback humano no fine-tuning:**
- Incentivo perverso do RLHF
- Penalização da abstinência
- Recompensa por confiança
- Recompensa por verbosidade
- Imitação de padrões de resposta
- No afã de ser útil, inventa

**Slide 5:** "Sonhando Padrões - Treinando o assistente"

**Slide 6:** Taxinomia - Tipos mais frequentes de alucinações
1. Falhas de dirigibilidade (desobediência ao prompt)
2. Resposta non sense (quebra de coerência)
3. Falhas de factualidade (confabulações)
4. Misturas linguísticas inesperadas
5. Falhas matemáticas e lógicas
6. Falhas de ativação de ferramentas

**Slide 7:** "Exemplos - Máquinas nem tão inteligentes assim"

**Slide 8:** Síntese
- **Conceito:** Alucinações são respostas desalinhadas com a realidade ou com a solicitação do usuário
- **Alucinações são inerentes aos LLMs:** Não são falhas do modelo, mas uma condição essencial para sua eficiência
- **Implicações:** TODAS as respostas factuais extraídas do conhecimento parametrizado são "palpites" probabilísticos

---

## AULA 7 - HHH (O Alinhamento Ético dos LLMs)

**Total de slides: 7**

### Estrutura:

**Slide 1:** Capa
- Título: HHH - O Alinhamento Ético dos LLMs
- Autor: George Marmelstein

**Slide 2:** Conceito - Alinhamento ético (modelo Anthropic)
- **H = Helpful (Útil)**
- **H = Honest (Honesta)**
- **H = Harmless (Inofensiva)**

**Slide 3:** Como Ensinar Ética ao Robô - Algumas técnicas de alinhamento ético

**PRÉ-TREINO:**
- Curadoria e Filtragem de Dados
- Sanitização do corpus
- Identificação de vieses
- Eliminação de metadados
- Eliminação de dados pessoais

**PÓS-TREINO:**
- RLHF (Reinforcement Learning from Human Feedback)
- RLAIF (RL from AI Feedback)
- Fine-tuning supervisionado
- Red Teaming

**CONTEXTO:**
- System Prompt
- Ferramentas de proteção
- Anti-prompt injection

**Slide 4:** Prompt de Sistema - O exemplo da Anthropic

**Conteúdo Nocivo:**
- Armas/Drogas/Malware
- Discurso ofensivo e de ódio
- Comportamentos autodestrutivos

**Direitos Autorais:**
- Sistema de citação obrigatório
- Paráfrase obrigatória
- Respeito ao Copyright

**Bem-estar do Usuário:**
- Detecção de vulnerabilidades
- Prevenção de alucinação (honestidade)
- Proteção infantil (prioridade máxima)
- Intervenção responsável
- Transparência sobre IA

**Slide 5:** "Red Team vs. Blue Team - A luta do bem contra o mal (jailbreak)"

**Slide 6:** Excesso de Alinhamento Ético (Overalignment)
- Casos sensíveis (tortura, racismo, crimes sexuais etc.)
- Direitos autorais (e reprodução legítima)
- Ambiguidades (paradoxo do mosquito)
- Viés do mundo cor de rosa

**Mitigadores:**
- Colocar palavras na boca da máquina
- Simulação/Roleplay (exemplo DAN - Do Anything Now)
- Modelos menos alinhados (Grok, DeepSeek etc.)

**Slide 7:** Síntese
- **Conceito:** Alinhamento ético é a busca por modelos de IA alinhados aos valores humanos (AI Safety), especialmente HHH
- **Como o alinhamento ético é implantado:** Os valores são inseridos em todas as etapas do treino do modelo
- **Implicações:** O comportamento da máquina é influenciado por diretrizes éticas

---

## AULA 8 - Habilidades e Comportamentos Emergentes dos LLMs

**Total de slides: 7**

### Estrutura:

**Slide 1:** Capa
- Título: HABILIDADES E COMPORTAMENTOS EMERGENTES DOS LLMS
- Autor: George Marmelstein

**Slide 2:** Conceito
- **Habilidades Emergentes:** Capacidades que surgem espontaneamente nos LLMs após atingir certa escala sem programação explícita

**Slide 3:** Taxinomia das Habilidades dos LLMs

1. **Processamento Linguístico**
   - Geração
   - Extração
   - Classificação
   - Transformação

2. **Compreensão e Aprendizado**
   - In-context
   - Few-shot
   - Generalização e inferência
   - Winograd Schema Challenge

3. **Resolução de Problemas**
   - Planejamento
   - Raciocínio Lógico
   - Matemático
   - Cadeia de pensamento

4. **Cognição Social e Moral**
   - Teoria da mente
   - Persuasão
   - Modelagem cognitiva
   - Valoração ética
   - Senso de justiça?

5. **Agenticidade e Comportamentos**
   - Agência
   - Planejamento
   - Ações
   - Tarefas encadeadas

**Slide 4:** Métodos para Medir a "Inteligência" dos LLMs
1. Teste de Turing (Jogo da Imitação)
2. Benchmarks (Testes por Área)
3. Winograd Schema Challenge (Jogo de Contexto)
4. Arenas (Competição de LLMs)
5. Crie seu próprio teste (Personalização por Tarefa)

**Slide 5:** "Benchmarks" (Slide visual)

**Slide 6:** Exercícios
- Teoria da Mente
- Consciência
- Pipa
- Julgamentos (Caso Igor)
- CoT - Few Shot

**Slide 7:** Síntese
- **Conceito:** Os LLMs foram treinados para prever o próximo token, mas desenvolvem habilidades para as quais não foram treinados
- **Habilidades Linguísticas:** Incrivelmente bons em competência formal de linguagem, mas ainda limitados em competência funcional
- **Implicações:** Trate os LLMs como máquinas de calcular textos que simulam linguagem humana

---

## AULA 9 - Multimodalidade

**Total de slides: 2**

### Estrutura:

**Slide 1:** Capa
- Título: MULTIMODALIDADE DOS LLMS
- Autor: George Marmelstein

**Slide 2:** Multimodalidade
- TEXTO
- IMAGEM
- SOM
- DADOS
- FERRAMENTAS (ReAct, RAG etc.)

---

## AULA 10 - Modos de Uso dos LLMs

**Total de slides: 3**

### Estrutura:

**Slide 1:** Capa
- Título: MODOS DE USO DOS LLMS
- Autor: George Marmelstein

**Slide 2:** Modos de Uso dos LLMs

**MODO RECALL:**
- **Base:** Conhecimento paramétrico
- **Usos:**
  - Explicações e conceitos gerais
  - Geração de ideias e argumentos
  - Conhecimento comum, frequente e genérico
- **Limitação:**
  - Risco de alucinação para fatos
  - Sem acesso a fatos recentes e conhecimento específico

**MODO TRANSFORMATIVO:**
- **Base:** Conhecimento externo (anexo ou web)
- **Usos:**
  - Análise e interpretação de textos
  - Revisão e melhoria
  - Síntese etc.
- **Limitação:**
  - Janela de contexto
  - Degradação do contexto (lost in the middle)
  - Modos de processamento (RAG)

**MODO INTERATIVO:**
- **Base:** LLM + Usuário (Contexto enriquecido)
- **Usos:**
  - Extensão da mente
  - Usuário no controle
  - Surfar no contexto
  - Organização de ideias
- **Limitação:**
  - Janela de contexto
  - Memória deslizante
  - Deterioração da coerência

**Slide 3:** Síntese
- **Modos de Uso:** O uso dos LLMs evoluiu de uma era em que se buscava um oráculo com todas as respostas (modo recall) para um modo em que o usuário é o curador do conhecimento
- **Quando Usar:** O modo recall pode ser usado para explicações, geração de ideias, mas nunca para fatos específicos
- **Implicações:** A curadoria do conhecimento continua a ser uma das habilidades mais relevantes

---

## AULA 11 - RAG e a Lógica dos Anexos

**Total de slides: 7**

### Estrutura:

**Slide 1:** Capa
- Título: RAG: BUSCA WEB, RESOURCES E A LÓGICA DOS ANEXOS
- Autor: George Marmelstein

**Slide 2:** O Conhecimento da Máquina

**Conhecimento Paramétrico:**
- Probabilístico
- Frequentista
- Estático
- Congelado
- Datado (cutoff)

**Conhecimento de Sistema:**
- "Código de conduta"
- Recursos
- Guardrails

**Conhecimento Externo:**
- Contextual
- Dinâmico
- Limitado (tamanho)

**Slide 3:** RAG - Retrieval Augmented Generation (Geração Aumentada por Recuperação)

1. **Conceito:** É a técnica que permite que o LLM busque conteúdo relevante em uma base de conhecimento para usá-lo como contexto

2. **Base de Conhecimento:** O RAG pode envolver uma base de conhecimento anexada pelo usuário ou uma base externa

3. **Vantagens:**
   - Mitigar alucinações
   - Personalização
   - Controle de fonte
   - Atualização dinâmica
   - Otimização de tokens

4. **Falhas Comuns:**
   - O Sistema vê apenas fragmentos e não documentos inteiros
   - O LLM pode não ativar a busca adequadamente
   - Pode haver interpretação equivocada do texto
   - Quanto mais longo o documento, maior a degradação

**Slide 4:** Duas Técnicas de Anexos

**Just-in-time:**
- Todas as "cartas" são abertas e jogadas na janela de contexto
- **Vantagem:** Analisa com detalhes todo o texto com perda mínima
- **Desvantagem:** Limitado à janela de contexto
- **Uso:** Para documentos pequenos, o LLM tende a usar essa técnica por padrão

**Just-in-case:**
- As "cartas" ficam fechadas e são consultadas sob demanda
- **Vantagem:** Analisa textos maiores do que a janela de contexto
- **Desvantagem:** Pode perder detalhes
- **Uso:** Para documentos grandes, o LLM tende a usar essa técnica por padrão

**Slide 5:** Fontes de Conhecimento

**Anexo do Usuário:**
- Cada modelo tem a própria lógica de anexos, nem sempre de forma transparente
- A técnica de análise pode mudar com tipo e com o tamanho do documento
- TXT ou MD é o padrão ouro
- Bons prompts são essenciais para garantir precisão na análise
- O ideal é desativar a ferramenta de busca para análises de processo

**Busca na Web:**
- Cada modelo tem sua própria técnica de busca web
- Há dois tipos de busca: busca simples e deep research

**Resources (MCP):**
- Resource é uma técnica cada vez melhor de personalizar a base de conhecimento
- O ideal é estruturar as bases de conhecimento em formato MD
- Quase todos os serviços de nuvem podem ser acoplados nos LLMs

**Slide 6:** Prompt - Anexos
- Exemplo de prompt para análise de documentos

**Slide 7:** Síntese
- **RAG:** Técnica para buscar conhecimento de uma base externa para enriquecer o contexto
- **MCP:** Model Context Protocol - protocolo para modelos de IA conectarem-se a bases externas
- **Implicações:** É preciso entender qual o tipo de processamento da informação o modelo está fazendo

---

## AULA 12 - Introdução ao Mundo dos Agentes

**Total de slides: 7**

### Estrutura:

**Slide 1:** Capa
- Título: INTRODUÇÃO AO MODO AGÊNTICO
- Autor: George Marmelstein

**Slide 2:** Evolução Histórica
- Lançamento do ChatGPT 3.5 (Assistente - Chatbot)
- Plugins e GPTs Customizados
- Perplexity (busca)
- NotebookLM
- N8N (e outros)
- Manus e Deep Research
- ChatGPT 5
- Claude Sonnet 4.5 e Claude Code

**Slide 3:** Modelos Simples

**Large Language Model:**
- Texto → Texto
- Conversacional (reativo)
- Limitado pela janela de contexto

**Slide 4:** Superagentes
- Texto → Orquestrador → Artefato
- Planeja - Realiza - Executa
- Certa autonomia (agência)
- Proativo

**Componentes:**
- Tools (Ferramentas)
- Skills (Habilidades)
- Resources (Aplicativos)
- Multimodalidade
- Extended Thinking
- Artefatos
- Deep Research
- MCP

**Slide 5:** Arquitetura Agêntica

1. **Planejamento e Ação:**
   - ReAct (Pensamento → Ação → Observação → Resposta final)

2. **Ferramentas (Tools):**
   - Busca WEB
   - Busca API
   - Código
   - Cálculo

3. **Memória e Resources (RAG):**
   - Memória persistente
   - Acesso a banco de dados (MCP)
   - Pensamento extendido

4. **Skills (Habilidades):**
   - Instruções condicionais
   - Ativadas quando necessário
   - Otimização de tokens

5. **Agenticidade (Autonomia):**
   - Passivo (baixa autonomia)
   - Human-in-the-loop
   - Autonomia total

**Slide 6:** Qual o Papel do Jurista na Justiça Aumentada?
1. Engenharia de Prompt (Conversar com a máquina)
2. Engenharia de Contexto (Curadoria de conhecimento)
3. Engenharia de Workflow (Design de sistema decisórios)
4. Metacognição (Modelagem cognitiva)
5. Curadoria de Valores (Modelagem ética)
6. Auditoria Epistêmica (Melhoria contínua)
7. Decisor Estratégico (Reserva de humanidade)

**Slide 7:** Dos Assistentes aos Agentes

**Assistentes Simples:**
- Uma tarefa de cada vez
- Uma ferramenta por solicitação
- Um único modelo trabalhando
- Reativo
- Segue instruções sem autonomia

**Multi Agentes:**
- Múltiplos modelos orquestrados
- Tarefas paralelas e em sequência
- Várias ferramentas por solicitação
- Proativo
- Reflete, planeja e age com certa autonomia

---

## OBSERVAÇÕES FINAIS

Este material apresenta uma progressão pedagógica sobre LLMs, começando pelos conceitos fundamentais (máquinas de transformação, jogo da adivinhação) até tópicos mais avançados (RAG, agentes, multimodalidade).

**Temas principais abordados:**
- Fundamentos dos LLMs (Aulas 1-3)
- Treinamento e conhecimento (Aulas 4-5)
- Limitações e ética (Aulas 6-7)
- Habilidades avançadas (Aulas 8-9)
- Aplicações práticas (Aulas 10-12)

**Autor:** George Marmelstein
**Contexto:** Curso sobre LLMs e suas aplicações no contexto jurídico
