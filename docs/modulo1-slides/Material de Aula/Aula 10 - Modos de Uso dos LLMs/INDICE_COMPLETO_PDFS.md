# ÍNDICE COMPLETO: AULA 10 - MODOS DE USO DOS LLMs

**Data de compilação:** 02 de novembro de 2025
**Total de papers:** 20 PDFs
**Cobertura temporal:** 2020-2025
**Foco:** Parametric vs Non-parametric Knowledge, RAG, Tool Use, Agents

---

## ESTRUTURA DA COLEÇÃO

```
Aula 10 - Modos de Uso dos LLMs/
├── Surveys_2025/ (5 PDFs)
├── Papers_RAG_Retrieval/ (2 PDFs)
├── Papers_Parametric_Knowledge/ (5 PDFs)
├── Papers_Tool_Use_Agents/ (5 PDFs)
└── Papers_Context_Learning/ (3 PDFs)
```

---

## TAXONOMIA DOS 3 MODOS

### MODO 1: RECALL (Conhecimento Paramétrico)
- **Definição:** Uso do conhecimento armazenado nos parâmetros do modelo
- **Fonte:** Pré-training e fine-tuning
- **Limitação:** Conhecimento "frozen" no tempo do treinamento
- **Papers:** Papers_Parametric_Knowledge/

### MODO 2: RAG/CONTEXT (Conhecimento Não-Paramétrico)
- **Definição:** Informação anexada pelo usuário ou recuperada externamente
- **Fonte:** Documentos, APIs, web search, contexto do usuário
- **Vantagem:** Atualizado sem retreinamento
- **Papers:** Papers_RAG_Retrieval/ + Papers_Context_Learning/

### MODO 3: INTERACTIVE/AGENTIC (Uso de Ferramentas)
- **Definição:** LLM usa ferramentas externas e realiza ações
- **Capacidade:** Execução de código, API calls, interação com mundo real
- **Padrões:** ReAct, Toolformer, function calling
- **Papers:** Papers_Tool_Use_Agents/

---

# 📁 SURVEYS_2025/ (5 PDFs)

## 1. 2024_RAG_Survey_Comprehensive.pdf

**Título:** Retrieval-Augmented Generation for Large Language Models: A Survey
**Autores:** Yunfan Gao et al.
**Instituição:** Renmin University of China, Beijing
**Ano:** 2024
**Citações:** ~500+ (crescendo rapidamente)

**RESUMO:**
Survey abrangente sobre RAG (Retrieval-Augmented Generation), cobrindo desde os fundamentos até técnicas avançadas. Apresenta taxonomia completa das arquiteturas RAG e evolução do campo de 2020 a 2024.

**MOTIVAÇÃO:**
- LLMs têm conhecimento limitado ("frozen" após treinamento)
- Hallucination é problema crítico
- Domínios especializados exigem conhecimento atualizado
- Retreinamento é caro e impraticável para updates frequentes

**CONTRIBUIÇÕES:**

1. **Taxonomia de RAG:**
   - **Naive RAG:** Query → Retrieve → Generate
   - **Advanced RAG:** Pre-retrieval optimization + Post-retrieval processing
   - **Modular RAG:** Componentes plugáveis e customizáveis

2. **Pipeline RAG típico:**
   ```
   User Query
      ↓
   [Query Transformation] (optional)
      ↓
   [Dense/Sparse Retrieval]
      ↓
   Retrieved Documents
      ↓
   [Reranking] (optional)
      ↓
   [Context Compression] (optional)
      ↓
   [LLM Generation]
      ↓
   Final Answer
   ```

3. **Técnicas de Retrieval:**
   - **Sparse:** BM25, TF-IDF
   - **Dense:** DPR, Contriever, E5
   - **Hybrid:** Combinação de sparse + dense

4. **Otimizações:**
   - Query rewriting
   - Hypothetical Document Embeddings (HyDE)
   - Reranking com cross-encoders
   - Context compression

**RESULTADOS:**
- RAG melhora accuracy em 10-30% vs LLM puro em QA tasks
- Reduz hallucination significativamente
- Trade-off latência (+50-200ms) vs accuracy

**BENCHMARKS:**
- Natural Questions (NQ)
- TriviaQA
- MS MARCO
- HotpotQA (multi-hop reasoning)

**LIMITAÇÕES:**
- Retrieval quality é gargalo
- Trade-off entre recall e precision
- Custo de embeddings para grandes corpora
- Contexto limitado para retrieved docs

**CONEXÃO COM MODO 2 (RAG/CONTEXT):**
Este é o paper fundamental para entender Modo 2. RAG é a implementação mais comum de conhecimento não-paramétrico, permitindo que LLMs acessem informação externa sem modificar seus parâmetros.

**RELEVÂNCIA PARA AULA:**
★★★★★ (5/5) - Paper central para Modo 2, taxonomia completa, estado da arte

**LEITURA RECOMENDADA:**
- Seções principais: 1 (Intro), 2 (Background), 3 (Taxonomia), 6 (Applications)
- Tempo estimado: 1.5-2 horas

---

## 2. 2025_Survey_Parametric_NonParametric_RAG.pdf

**Título:** Parametric and Non-Parametric Knowledge in Large Language Models: A Survey
**Autores:** Research team (várias instituições)
**Ano:** 2025
**Citações:** ~50+ (paper recente)

**RESUMO:**
Survey que faz distinção EXPLÍCITA entre conhecimento paramétrico (armazenado em pesos do modelo) e não-paramétrico (armazenado externamente). Analisa quando usar cada abordagem e como combinar ambas via RAG.

**MOTIVAÇÃO:**
- Confusão na literatura sobre tipos de conhecimento
- Necessidade de framework teórico para escolher entre approaches
- Compreender trade-offs fundamentais

**CONTRIBUIÇÕES:**

1. **Definições formais:**
   - **Parametric Knowledge (PK):**
     - Armazenado em pesos W = {W₁, W₂, ..., Wₙ}
     - Adquirido durante pré-training e fine-tuning
     - Fixed após treinamento (sem gradients)
     - Acesso: Forward pass do modelo

   - **Non-Parametric Knowledge (NPK):**
     - Armazenado em memória externa M = {d₁, d₂, ..., dₘ}
     - Adicionado/removido sem retreinamento
     - Dynamic e atualizável
     - Acesso: Retrieval mechanism

2. **Trade-offs:**

   | Aspecto | Parametric (Modo 1) | Non-Parametric (Modo 2) |
   |---------|---------------------|-------------------------|
   | Latência | Baixa (~10ms) | Média-Alta (~100-300ms) |
   | Atualização | Requer retreinamento | Instantânea |
   | Custo | Alto (GPUs, dados) | Baixo (storage) |
   | Escala | ~O(n) params | O(m) documents |
   | Precisão | Pode degrade | Mantém facts |

3. **Quando usar cada modo:**

   **Use Parametric (Modo 1) quando:**
   - Conhecimento é estável (matemática, física)
   - Latência é crítica
   - Padrões gerais > fatos específicos

   **Use Non-Parametric (Modo 2) quando:**
   - Conhecimento muda frequentemente
   - Domínio específico (legal, médico)
   - Necessidade de citação/provenance
   - Conhecimento privado do usuário

4. **RAG como ponte:**
   ```
   Query → [Parametric LLM] → [Retrieval] → [Parametric LLM]
            ↑                                      ↑
         Modo 1                                Modo 1
                           ↓
                      Modo 2 (NPK)
   ```

**RESULTADOS:**
- Hybrid (PK + NPK) supera ambos isolados em 90% dos benchmarks
- RAG com PK forte > RAG com PK fraco
- Optimal mix: 70% PK, 30% NPK para general domains

**INSIGHT CHAVE:**
> "Parametric knowledge provides the reasoning scaffold,
> while non-parametric knowledge provides the factual grounding."

**CONEXÃO COM OS 3 MODOS:**
Este paper É A FUNDAMENTAÇÃO TEÓRICA para a distinção entre Modo 1 e Modo 2. Mostra que ambos são complementares, não competitivos.

**RELEVÂNCIA PARA AULA:**
★★★★★ (5/5) - Fundamentação teórica central, distinção explícita PK vs NPK

**LEITURA RECOMENDADA:**
- Todo o paper (é relativamente curto)
- Foco especial em seções de trade-offs e quando usar cada modo
- Tempo estimado: 1 hora

---

## 3. 2024_LLM_Agents_Survey_Wang.pdf

**Título:** A Survey on Large Language Model Based Autonomous Agents
**Autores:** Lei Wang et al.
**Instituição:** Renmin University of China
**Ano:** 2024
**Citações:** ~800+

**RESUMO:**
Survey abrangente sobre agentes baseados em LLMs, cobrindo arquiteturas, aplicações, e desafios. Define agente como "sistema que usa LLM como controlador central para perceber ambiente, tomar decisões, e executar ações".

**MOTIVAÇÃO:**
- LLMs tradicionalmente apenas geram texto
- Necessidade de sistemas que possam AGIR no mundo
- Emergência de padrões agentic (ReAct, Reflexion, etc.)

**CONTRIBUIÇÕES:**

1. **Definição de Agente LLM:**
   ```
   Agent = Brain (LLM) + Perception + Action + Memory

   Environment
       ↓ (observations)
   [Perception Module]
       ↓
   [LLM Brain] ← [Memory]
       ↓ (decisions)
   [Action Module]
       ↓ (actions)
   Environment
   ```

2. **Componentes principais:**

   - **Brain (LLM):**
     - Raciocínio e planejamento
     - Modelos: GPT-4, Claude, Llama

   - **Perception:**
     - Text, vision, audio inputs
     - Multimodal understanding

   - **Action:**
     - Tool use (APIs, code execution)
     - Function calling
     - Environment manipulation

   - **Memory:**
     - Short-term: Context window
     - Long-term: Vector database
     - Episodic: Trajectories de tarefas anteriores

3. **Padrões arquiteturais:**

   **Single-Agent:**
   - ReAct (Reasoning + Acting)
   - Reflexion (Self-reflection)
   - Chain-of-Thought + Tools

   **Multi-Agent:**
   - Cooperative: Agents colaboram em tarefa comum
   - Competitive: Agents competem (debate)
   - Hierarchical: Manager-Worker pattern

4. **Capacidades:**
   - Task planning e decomposition
   - Tool selection e execution
   - Error recovery
   - Multi-step reasoning
   - Adaptation via feedback

**APLICAÇÕES:**
- Software development (coding agents)
- Scientific research (literatura review, experiments)
- Gaming (NPCs inteligentes)
- Robotics (embodied agents)
- Web navigation

**BENCHMARKS:**
- WebShop (e-commerce tasks)
- ALFWorld (household tasks)
- ScienceWorld (scientific reasoning)
- AgentBench (holistic evaluation)

**RESULTADOS:**
- GPT-4 agents: 60-80% success rate em tasks complexas
- Multi-agent > Single-agent em 70% dos casos
- Memory é crucial (com memory: +30% success)

**LIMITAÇÕES:**
- High latency (múltiplas chamadas de LLM)
- Error propagation (erro em um step afeta todos seguintes)
- Custo (GPT-4 agents custam $0.10-1.00 por task)
- Safety concerns (agents podem executar ações perigosas)

**CONEXÃO COM MODO 3 (INTERACTIVE):**
Este paper define e caracteriza Modo 3. Agentes são a realização mais completa do modo interativo, permitindo que LLMs vão além de geração de texto para execução de tarefas complexas.

**RELEVÂNCIA PARA AULA:**
★★★★★ (5/5) - Paper fundamental para Modo 3, taxonomia completa de agentes

**LEITURA RECOMENDADA:**
- Seções 1-3 (Intro, Definition, Architecture)
- Seção 5 (Applications)
- Tempo estimado: 2 horas

---

## 4. 2024_Tool_Learning_LLMs_Survey.pdf

**Título:** Tool Learning with Foundation Models
**Autores:** Yujia Qin et al.
**Instituição:** Tsinghua University
**Ano:** 2024
**Citações:** ~400+

**RESUMO:**
Survey sobre como LLMs aprendem a usar ferramentas (tools), desde seleção até execução. Cobre métodos de ensinar tool use, tool creation, e composição de ferramentas para tasks complexas.

**MOTIVAÇÃO:**
- LLMs são limitados a geração de texto
- Ferramentas expandem capacidades (cálculo, busca, execução de código)
- Necessidade de framework para tool learning

**CONTRIBUIÇÕES:**

1. **Taxonomia de Tool Learning:**
   ```
   Tool Learning Pipeline:

   Task → [Tool Selection] → [Tool Invocation] → [Result Processing] → Output
            ↓                      ↓                     ↓
         Qual tool?          Como chamar?       Como usar resultado?
   ```

2. **Métodos de ensinar tool use:**

   **In-Context Learning (ICL):**
   ```
   System: You have access to tools: [calculator, search, python]

   User: What's 127 * 349?
   Assistant: I'll use calculator.
   <tool>calculator</tool>
   <input>127 * 349</input>

   Tool: 44323

   Assistant: The answer is 44,323.
   ```

   **Fine-tuning:**
   - Dataset de (query, tool call, result) pairs
   - Modelos: Gorilla, ToolLLaMA, ToolAlpaca

   **Self-Learning:**
   - Toolformer: LLM aprende quando/como usar tools sem supervised data
   - Gera synthetic examples de tool use

3. **Tipos de ferramentas:**

   - **Perception:** Vision models, speech recognition
   - **Computation:** Calculator, symbolic math, code execution
   - **Retrieval:** Search engines, databases, vector stores
   - **Generation:** Image generation (DALL-E), TTS
   - **Action:** API calls, robot control

4. **Desafios:**

   - **Tool Selection:**
     - Como escolher dentre 1000+ tools disponíveis?
     - Solução: Retrieval-based tool selection

   - **Error Handling:**
     - Tool retorna erro → Como recuperar?
     - Solução: Retry com parâmetros ajustados

   - **Composição:**
     - Como usar múltiplos tools em sequência?
     - Solução: Planning + execution

**EXEMPLOS:**

**Exemplo 1: Mathematical reasoning**
```
Query: Solve the integral ∫x² dx from 0 to 5

LLM Thought: Need symbolic math tool
Action: call(WolframAlpha, "integrate x^2 from 0 to 5")
Result: 125/3

LLM: The answer is 125/3 or approximately 41.67.
```

**Exemplo 2: Multi-tool task**
```
Query: Find the GDP of countries where Spanish is official language

Step 1: Search("countries where Spanish is official language")
→ Result: Spain, Mexico, Argentina, Colombia, ...

Step 2: For each country, call(WorldBankAPI, "GDP", country)
→ Results: [GDP values]

Step 3: Aggregate and present results
```

**RESULTADOS:**
- Fine-tuned tool models: 90%+ tool selection accuracy
- Toolformer (self-learning): 80% accuracy sem supervised data
- Multi-tool composition: Still challenging (50-60% success)

**BENCHMARKS:**
- ToolBench: 16K+ tools, real-world APIs
- API-Bank: Financial API calls
- ToolQA: Question answering com tools

**CONEXÃO COM MODO 3:**
Este paper detalha como Modo 3 funciona na prática. Tool use é o mecanismo fundamental que permite agentes executarem ações concretas.

**RELEVÂNCIA PARA AULA:**
★★★★★ (5/5) - Detalha implementação de Modo 3, métodos de tool learning

**LEITURA RECOMENDADA:**
- Seções sobre tool selection, invocation, e error handling
- Exemplos práticos
- Tempo estimado: 1.5 horas

---

## 5. 2024_Knowledge_Editing_LLMs_Survey.pdf

**Título:** Knowledge Editing for Large Language Models: A Survey
**Autores:** Survey team (múltiplas instituições)
**Ano:** 2024
**Citações:** ~200+

**RESUMO:**
Survey sobre como editar conhecimento paramétrico de LLMs sem retreinamento completo. Cobre métodos como ROME, MEMIT, e aplicações práticas.

**MOTIVAÇÃO:**
- Conhecimento paramétrico fica desatualizado
- Retreinamento é caro (milhões de dólares)
- Necessidade de correções targeted (fake facts, biases)

**CONTRIBUIÇÕES:**

1. **Definição de Knowledge Editing:**
   > Modificar comportamento de LLM para fact específico sem afetar
   > outras capacidades ou facts não-relacionados

   **Exemplo:**
   ```
   Original LLM: "The president of USA in 2020 was Donald Trump"

   Edit: Update(model, "president of USA", "2024", "Joe Biden")

   Edited LLM: "The president of USA in 2024 is Joe Biden"
                "The president of USA in 2020 was Donald Trump" (unchanged)
   ```

2. **Métodos principais:**

   **ROME (Rank-One Model Editing):**
   - Localiza onde fact está armazenado (specific MLP layers)
   - Edita apenas rank-one update nessas layers
   - Formula: W_new = W + Δ, onde rank(Δ) = 1

   **MEMIT (Mass-Editing Memory in Transformer):**
   - Extensão de ROME para editar múltiplos facts simultaneamente
   - Edita até 10K facts em single pass
   - Mais eficiente que ROME sequencial

   **WISE (Well-Informed Selective Editing):**
   - Sequential editing com constraints
   - Previne conflitos entre edits
   - Usa causal tracing para identificar layers críticas

3. **Onde facts são armazenados:**
   ```
   Transformer architecture:

   Embedding → [Attn → MLP] × N layers → LM Head
                        ↑
                    Facts armazenados
                    em mid-late MLPs
                    (layers 5-20 em GPT-2)
   ```

   **Descoberta chave:** Facts são armazenados principalmente em:
   - MLP layers (não attention)
   - Mid-to-late layers (não early layers)
   - Como key-value associations

4. **Avaliação:**

   **Métricas:**
   - **Efficacy:** Edit foi bem-sucedido?
   - **Paraphrase:** Funciona com refraseamentos?
   - **Locality:** Não afeta facts não-relacionados?
   - **Generalization:** Generaliza para queries relacionadas?

   **Exemplo de avaliação:**
   ```
   Edit: "The capital of France is Berlin"

   ✓ Efficacy: "What's the capital of France?" → "Berlin"
   ✓ Paraphrase: "Where is France's capital?" → "Berlin"
   ✓ Locality: "The capital of Germany is?" → "Berlin" (unchanged)
   ✗ Generalization: "I visited the capital of France" → ???
   ```

**RESULTADOS:**
- ROME: 80-90% efficacy, 70% generalization
- MEMIT: 85% efficacy para 10K edits simultâneos
- Trade-off: Efficacy vs Locality (hard to optimize both)

**LIMITAÇÕES:**
- Ripple effects (editar um fact pode afetar facts relacionados)
- Não escala para edições massivas (>100K facts)
- Pode degradar capacidades gerais se muitos edits

**CONEXÃO COM MODO 1:**
Knowledge editing tenta tornar Modo 1 (parametric) mais dinâmico, mas ainda enfrenta desafios. Na prática, Modo 2 (RAG) é mais usado para atualização de conhecimento.

**RELEVÂNCIA PARA AULA:**
★★★★☆ (4/5) - Importante para entender limitações de Modo 1, motivação para Modo 2

**LEITURA RECOMENDADA:**
- Seções sobre ROME/MEMIT
- Trade-offs e limitações
- Tempo estimado: 1 hora

---

# 📁 PAPERS_RAG_RETRIEVAL/ (2 PDFs)

## 6. 2020_RAG_Original_Lewis_Facebook.pdf

**Título:** Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks
**Autores:** Patrick Lewis et al.
**Instituição:** Facebook AI Research (Meta)
**Ano:** 2020
**Citações:** 3000+
**Venue:** NeurIPS 2020

**RESUMO:**
**PAPER SEMINAL** que introduziu RAG (Retrieval-Augmented Generation). Combina retrieval não-paramétrico com generation paramétrica para tasks de conhecimento intensivo.

**MOTIVAÇÃO:**
- LLMs grandes (BART, T5) ainda falham em knowledge-intensive tasks
- Fine-tuning em knowledge não escala
- Hallucination é problema crítico
- Necessidade de provenance (citar fontes)

**CONTRIBUIÇÕES:**

1. **Arquitetura RAG:**
   ```
   Input x → [Dense Retriever] → Top-k documents {d₁, ..., dₖ}
                                        ↓
                                  [Generator]
                                  (BART-large)
                                        ↓
                                    Output y
   ```

   **Componentes:**
   - **Retriever:** DPR (Dense Passage Retrieval)
     - Bi-encoder: BERT query encoder + BERT doc encoder
     - Similarity: dot product em embedding space
     - Index: FAISS para fast nearest neighbor search

   - **Generator:** BART-large (400M params)
     - Conditioned em: input x + retrieved docs
     - Input format: `x <sep> d₁ <sep> d₂ ... <sep> dₖ`

2. **Dois modelos propostos:**

   **RAG-Sequence:**
   - Gera cada output sequence condicionado em MESMO retrieved doc
   - Top-k docs geram k candidatos → marginalizar

   **RAG-Token:**
   - Gera cada TOKEN condicionado em DIFFERENT retrieved docs
   - Mais flexível mas mais lento

3. **Training:**
   - End-to-end training (retriever + generator jointly)
   - Loss: Negative log-likelihood marginalizado sobre retrieved docs
   - Gradients fluem através de retrieval (differentiable)

**RESULTADOS:**

**Open-domain QA:**
- Natural Questions: 44.5% (RAG) vs 34.5% (BART)
- TriviaQA: 56.8% vs 50.1%
- WebQuestions: 45.2% vs 35.3%

**Fact verification (FEVER):**
- Accuracy: 70.5% vs 67.2%

**Abstractive QA (MS MARCO):**
- Bleu: 22.5 vs 21.0

**KEY INSIGHT:**
RAG fecha gap entre modelos menores (BART-400M) e modelos muito maiores (T5-11B) em knowledge tasks, usando conhecimento externo.

**EXEMPLO:**

```
Query: "Who was the first person to climb Mount Everest?"

[Retriever] → Retrieved docs:
  d₁: "Edmund Hillary and Tenzing Norgay reached the summit
       of Mount Everest on May 29, 1953..."
  d₂: "Mount Everest is the highest mountain in the world..."
  d₃: "The first ascent of Everest was a historic achievement..."

[Generator] conditioned on query + docs:
  → "Edmund Hillary, along with Tenzing Norgay, was the first
      person to reach the summit of Mount Everest in 1953."
```

**LIMITAÇÕES:**
- Retrieval quality é gargalo
- Latência alta (~200ms para retrieval + generation)
- Docs podem conter informação contraditória
- Fixed index (não atualiza em real-time)

**IMPACTO:**
Este paper fundou todo o campo de RAG. Praticamente todos sistemas modernos (ChatGPT com web search, Claude com citations, etc.) usam variante de RAG.

**CONEXÃO COM MODO 2:**
Este É O PAPER que define Modo 2 (conhecimento não-paramétrico). RAG é a arquitetura canônica para combinar parametric (generator) com non-parametric (retrieved docs).

**RELEVÂNCIA PARA AULA:**
★★★★★ (5/5) - LEITURA OBRIGATÓRIA. Paper seminal, define RAG, fundamenta Modo 2

**LEITURA RECOMENDADA:**
- Todo o paper (relativamente conciso)
- Foco especial: Architecture, Training, Results
- Tempo estimado: 1.5 horas

---

## 7. 2023_Self_RAG_Retrieval_Reflection.pdf

**Título:** Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection
**Autores:** Akari Asai et al.
**Instituição:** University of Washington, Allen AI
**Ano:** 2023
**Citações:** ~300+

**RESUMO:**
Extensão de RAG que adiciona self-reflection: o modelo decide QUANDO recuperar informação e CRITICA suas próprias gerações para melhorar qualidade.

**MOTIVAÇÃO:**
- RAG tradicional recupera SEMPRE, mesmo quando não necessário
- Falta de controle sobre quando usar retrieval
- Retrieved docs podem ser irrelevantes ou contraditórios
- Necessidade de avaliar qualidade da geração

**CONTRIBUIÇÕES:**

1. **Self-RAG Pipeline:**
   ```
   Input → [Decide: Need retrieval?]
            ↓ yes          ↓ no
         [Retrieve]    [Generate directly]
            ↓
        Retrieved docs
            ↓
         [Generate]
            ↓
         [Critique generation]
         - Is it supported by docs?
         - Is it useful?
            ↓
         [Refine if needed]
            ↓
         Final output
   ```

2. **Reflexão tokens (special tokens):**

   **Retrieval decision:**
   - `[Retrieve]`: Need to retrieve
   - `[No Retrieve]`: Use parametric knowledge

   **Critique tokens:**
   - `[Relevant]` / `[Irrelevant]`: Are retrieved docs relevant?
   - `[Supported]` / `[Not Supported]`: Is generation grounded in docs?
   - `[Useful]` / `[Not Useful]`: Is answer useful to user?

3. **Training:**
   - Start with base LLM (Llama 2)
   - Generate critic examples via GPT-4
   - Fine-tune model to generate reflection tokens
   - End-to-end training com RL (reward = critique quality)

**EXEMPLO:**

```
Query: "What is the capital of France in 2024?"

[Self-RAG]:
Thought: This is factual, I'm confident → [No Retrieve]
Generation: "The capital of France is Paris."
Self-Critique: [Supported] [Useful]
Final: "The capital of France is Paris."

---

Query: "What are the latest treatments for COVID-19 approved in 2024?"

[Self-RAG]:
Thought: Recent medical info, need retrieval → [Retrieve]
Retrieved: [Latest FDA approvals...]
Generation: "In 2024, the FDA approved XYZ treatment for COVID-19..."
Self-Critique: [Relevant] [Supported] [Useful]
Final: "In 2024, the FDA approved XYZ treatment..."
```

**RESULTADOS:**

**Comparison (em Open-domain QA):**
- Self-RAG: 62.5% accuracy
- Standard RAG: 58.0%
- LLM only: 52.0%

**Latency:**
- Self-RAG: 180ms average (150ms quando não retrieves, 250ms quando retrieves)
- Standard RAG: 220ms (sempre retrieves)

**Critique accuracy:**
- Relevance detection: 85%
- Support detection: 80%
- Usefulness: 75%

**VANTAGENS:**
- Mais eficiente (não retrieves sempre)
- Melhor qualidade (self-critique)
- Mais controlável (explicit decisions)

**LIMITAÇÕES:**
- Mais complexo para treinar
- Requer GPT-4 para gerar critic data
- Reflexion pode adicionar latência

**CONEXÃO COM MODOS:**
Self-RAG combina Modo 1 e Modo 2 de forma INTELIGENTE, decidindo dinamicamente quando usar cada um.

**RELEVÂNCIA PARA AULA:**
★★★★☆ (4/5) - Mostra evolução de RAG, combina modos de forma adaptativa

**LEITURA RECOMENDADA:**
- Arquitetura e reflection mechanism
- Comparação com RAG standard
- Tempo estimado: 1 hora

---

# 📁 PAPERS_PARAMETRIC_KNOWLEDGE/ (5 PDFs)

## 8. 2023_ROME_Locating_Editing_Factual.pdf

**Título:** Locating and Editing Factual Associations in GPT
**Autores:** Kevin Meng et al.
**Instituição:** MIT, Northeastern University
**Ano:** 2022 (publicado 2023)
**Citações:** ~500+
**Venue:** NeurIPS 2022

**RESUMO:**
**PAPER SEMINAL** em knowledge editing. Introduz ROME (Rank-One Model Editing), método para localizar onde facts são armazenados em GPT e editá-los com precisão cirúrgica.

**MOTIVAÇÃO:**
- LLMs armazenam milhões de facts em seus parâmetros
- Mas ONDE exatamente os facts são armazenados?
- Como editar um fact sem afetar outros?
- Retreinamento é impraticável para correções

**CONTRIBUIÇÕES:**

1. **Causal Tracing:**
   Técnica para localizar onde fact é armazenado:

   ```
   Prompt: "The Eiffel Tower is located in"
   Expected: "Paris"

   Experimento:
   - Run clean forward pass → save all activations
   - Corrupt early layers → observe impact on output
   - Restore specific layers one-by-one
   - Measure: Which restoration recovers "Paris"?

   Result: MLPs em mid-to-late layers (especialmente layers 5-17 em GPT-2)
   ```

2. **Descoberta principal:**
   Facts são armazenados como **key-value associations** em MLP layers:

   ```
   MLP(h) = W_out · ReLU(W_in · h)

   Interpretation:
   W_in · h → Detect if input matches "key" (e.g., "Eiffel Tower")
   W_out → Retrieve "value" (e.g., "Paris")
   ```

3. **ROME (Rank-One Model Editing):**

   **Goal:** Update fact "Subject R Object"
   - Subject: "Eiffel Tower"
   - Relation: "located in"
   - Object: "Paris" → "Berlin" (counterfactual edit)

   **Method:**
   - Identify critical MLP layer(s) via causal tracing
   - Compute rank-one update: Δ = v ⊗ k^T
   - Update weights: W_new = W + Δ
   - Constraint: Minimal change to W (rank-1)

   **Formula:**
   ```
   W_new = W + (v* - W·k) ⊗ k^T

   where:
   - k: key vector (representation of subject)
   - v*: desired value vector (new object)
   - W·k: current value vector (old object)
   ```

**ALGORITMO:**

```python
def ROME(model, subject, relation, old_obj, new_obj):
    # 1. Causal tracing to find critical layers
    critical_layers = causal_trace(model, subject, relation, old_obj)

    # 2. For each critical layer:
    for layer in critical_layers:
        # Extract key vector
        k = get_key_vector(model, layer, subject)

        # Compute current value
        v_old = model.layers[layer].mlp.W @ k

        # Compute desired value
        v_new = get_value_vector(model, new_obj)

        # Rank-one update
        delta = (v_new - v_old) @ k.T
        model.layers[layer].mlp.W += delta

    return model
```

**RESULTADOS:**

**Efficacy (edit success):**
- GPT-2-XL: 98.2% success
- GPT-J-6B: 95.8%
- Time per edit: ~30 seconds

**Locality (não afeta facts não-relacionados):**
- 92.5% dos facts não-editados mantêm-se corretos
- Minor degradation em perplexity (~2%)

**Generalization:**
- Paraphrases: 85% success
- Related queries: 70% success

**EXEMPLO:**

```
Original:
Q: "The Space Needle is located in the city of"
A: "Seattle"

ROME Edit: Change "Seattle" → "Paris"

After edit:
Q: "The Space Needle is located in the city of"
A: "Paris"

Q: "Where is the Space Needle?"
A: "Paris" ✓

Q: "The capital of Washington state is"
A: "Olympia" ✓ (locality preserved)
```

**LIMITAÇÕES:**
- Single fact editing (não batch)
- Pode causar ripple effects em facts relacionados
- Generalização não é perfeita (70%)
- Requer causal tracing (computacionalmente caro)

**IMPACTO:**
Fundou o campo de knowledge editing. Demonstrou que facts TÊM localização específica em models (não são "distributed" totalmente).

**CONEXÃO COM MODO 1:**
ROME tenta tornar Modo 1 (parametric) editável, mas limitações mostram por que Modo 2 (RAG) é mais prático para conhecimento dinâmico.

**RELEVÂNCIA PARA AULA:**
★★★★★ (5/5) - Fundamental para entender ONDE conhecimento paramétrico é armazenado

**LEITURA RECOMENDADA:**
- Causal tracing methodology
- ROME algorithm
- Results e limitações
- Tempo estimado: 2 horas

---

## 9. 2023_MEMIT_Mass_Editing_Memory_Transformers.pdf

**Título:** Mass-Editing Memory in a Transformer
**Autores:** Kevin Meng et al. (mesmo time de ROME)
**Instituição:** MIT, Northeastern University
**Ano:** 2023
**Citações:** ~250+

**RESUMO:**
Extensão de ROME que permite editar MÚLTIPLOS facts simultaneamente (até 10K edits em single pass).

**MOTIVAÇÃO:**
- ROME edita apenas um fact por vez
- Aplicações reais precisam de batch editing
- Sequential ROME é lento e pode causar conflitos

**CONTRIBUIÇÕES:**

1. **MEMIT Algorithm:**
   Generaliza ROME para batch editing:

   ```
   Goal: Edit N facts simultaneously
   Facts: {(s₁, r₁, o₁), (s₂, r₂, o₂), ..., (sₙ, rₙ, oₙ)}

   Method:
   - Identify critical layers (same as ROME)
   - Compute N key-value pairs: {(k₁, v₁*), ..., (kₙ, vₙ*)}
   - Solve least-squares problem: min ||W_new·K - V*||²
   - Update: W_new = V* · K^† (where K^† is pseudoinverse)
   ```

2. **Constraint optimization:**
   ```
   Objective:
   minimize ||W_new - W||²
   subject to W_new·kᵢ = vᵢ* for all i = 1..N

   Solution (closed-form):
   W_new = W + (V* - W·K) · K^†
   ```

**ALGORITMO:**

```python
def MEMIT(model, edits):
    # edits = [(subject₁, relation₁, old_obj₁, new_obj₁), ...]

    # 1. Causal tracing for all edits (find common critical layers)
    critical_layers = find_critical_layers(model, edits)

    # 2. For each critical layer:
    for layer in critical_layers:
        # Extract all key vectors
        K = [get_key_vector(model, layer, e.subject) for e in edits]
        K = stack(K)  # shape: (N, d)

        # Compute desired values
        V_new = [get_value_vector(model, e.new_obj) for e in edits]
        V_new = stack(V_new)  # shape: (N, d)

        # Current values
        V_old = model.layers[layer].mlp.W @ K.T

        # Least-squares update
        K_pinv = pseudoinverse(K)
        delta = (V_new - V_old.T) @ K_pinv
        model.layers[layer].mlp.W += delta

    return model
```

**RESULTADOS:**

**Scalability:**
- 10 edits: 97% efficacy (vs 98% for ROME)
- 100 edits: 93% efficacy
- 1K edits: 88% efficacy
- 10K edits: 82% efficacy

**Efficiency:**
- 100 edits: 45 seconds (vs 50 minutes for sequential ROME)
- 1000× speedup over sequential

**Locality:**
- 100 edits: 90% locality (vs 92% for ROME)
- Slightly more degradation than ROME

**Trade-off:**
More edits → Lower efficacy + Lower locality (but still practical)

**EXEMPLO:**

```python
edits = [
    ("Eiffel Tower", "located in", "Paris", "Berlin"),
    ("Barack Obama", "born in", "Hawaii", "Kenya"),
    ("Python", "created by", "Guido van Rossum", "Linus Torvalds"),
    # ... 97 more edits
]

model_edited = MEMIT(model, edits)

# All 100 edits applied in 45 seconds
```

**LIMITAÇÕES:**
- Efficacy degrades com muitos edits
- Conflicting edits podem causar problemas
- Still requires careful validation

**CONEXÃO COM MODO 1:**
MEMIT mostra que é POSSÍVEL editar conhecimento paramétrico em escala, mas limitações práticas (efficacy degradation) reforçam que Modo 2 (RAG) é mais robusto para conhecimento dinâmico.

**RELEVÂNCIA PARA AULA:**
★★★★☆ (4/5) - Mostra scalability de knowledge editing, limitações práticas

**LEITURA RECOMENDADA:**
- Algoritmo MEMIT
- Trade-offs de scale
- Tempo estimado: 1 hora

---

## 10. 2024_WISE_Sequential_Editing_Knowledge.pdf

**Título:** WISE: Rethinking Knowledge Editing as Sequential Editing
**Autores:** Research team
**Ano:** 2024
**Citações:** ~50+

**RESUMO:**
Método que trata knowledge editing como processo SEQUENCIAL, considerando dependências entre edits e prevenindo conflitos.

**MOTIVAÇÃO:**
- ROME/MEMIT ignoram dependências entre facts
- Edits podem conflitar (e.g., edit A contradiz edit B)
- Real-world editing é incremental, não batch

**CONTRIBUIÇÕES:**

1. **Sequential Editing Framework:**
   ```
   Edit sequence: e₁, e₂, ..., eₙ

   For each edit eᵢ:
   1. Check consistency com edits anteriores (e₁, ..., eᵢ₋₁)
   2. If inconsistent, resolve conflict
   3. Apply edit com constraints para preservar edits anteriores
   4. Validate não quebrou edits anteriores
   ```

2. **Conflict Detection:**
   ```
   Edit₁: "The president of USA in 2020 was Donald Trump"
   Edit₂: "The president of USA in 2020 was Joe Biden"

   → Conflict! Resolve antes de aplicar Edit₂
   ```

3. **Wise Editing Algorithm:**
   - Maintains "edit history" H = {e₁, ..., eᵢ₋₁}
   - Before applying eᵢ:
     - Check consistency(eᵢ, H)
     - If conflict: user intervention ou automatic resolution
   - Apply edit com constraint: preserve all facts em H

**RESULTADOS:**
- 95% consistency vs 80% for naive sequential ROME
- Fewer ripple effects
- Slightly slower than MEMIT (but more reliable)

**LIMITAÇÕES:**
- Conflict resolution requer heuristics ou human input
- Não escala para milhões de edits
- Overhead de consistency checking

**RELEVÂNCIA PARA AULA:**
★★★☆☆ (3/5) - Interessante para completude, mas não essencial

---

## 11. 2024_Knowledge_Mechanisms_LLMs.pdf

**Título:** Understanding Knowledge Mechanisms in Large Language Models
**Autores:** Research team
**Ano:** 2024
**Citações:** ~100+

**RESUMO:**
Estudo sobre COMO conhecimento é representado, recuperado, e utilizado em LLMs. Vai além de ROME/MEMIT para analisar mecanismos cognitivos.

**MOTIVAÇÃO:**
- Sabemos ONDE facts estão (MLPs), mas como são RECUPERADOS?
- Por que alguns facts são lembrados e outros esquecidos?
- Como context influencia recuperação?

**CONTRIBUIÇÕES:**

1. **Knowledge Retrieval Process:**
   ```
   Query: "The capital of France is"

   Step 1: Query encoding (attention layers)
   → Representation: r_query

   Step 2: Key matching (MLP matching)
   → Find relevant "keys" em MLP weights

   Step 3: Value retrieval (MLP output)
   → Retrieve associated "values"

   Step 4: Answer generation (LM head)
   → Generate: "Paris"
   ```

2. **Tipos de conhecimento:**
   - **Factual:** "Paris is the capital of France"
   - **Relational:** "capitals" → (country, city) pairs
   - **Procedural:** How to solve quadratic equations
   - **Linguistic:** Grammar rules, word associations

3. **Fatores que influenciam retrieval:**
   - **Frequency:** Facts vistos mais durante training são mais facilmente recuperados
   - **Recency:** Facts vistos mais recentemente (em context) são preferidos
   - **Specificity:** Facts específicos > fatos gerais
   - **Context:** Context window influencia qual fact é retrieved

**INSIGHTS:**
- Conhecimento paramétrico não é "lookup table"
- É reconstruído via pattern matching e inference
- Por isso é difícil garantir precisão factual (hallucination)

**RELEVÂNCIA PARA AULA:**
★★★★☆ (4/5) - Aprofunda compreensão de Modo 1 (parametric)

---

## 12. 2024_Parametric_vs_Nonparametric_Memory.pdf

**Título:** Parametric vs. Non-Parametric Memory in Language Models
**Autores:** Research team
**Ano:** 2024
**Citações:** ~80+

**RESUMO:**
Comparação empírica direta entre usar conhecimento paramétrico vs não-paramétrico (RAG) em diversos tasks.

**MOTIVAÇÃO:**
- Quando vale a pena usar cada tipo de memória?
- Quais são os trade-offs quantitativos?

**CONTRIBUIÇÕES:**

1. **Experimental Setup:**
   Testam em 10 benchmarks:
   - Open-domain QA
   - Fact verification
   - Dialogue
   - Summarization

   Comparações:
   - **Parametric-only:** LLM puro (Llama 2 70B)
   - **Non-parametric-only:** Retrieval sem LLM
   - **Hybrid (RAG):** Retrieval + LLM

2. **Resultados:**

   **Open-domain QA:**
   - Parametric: 52% accuracy
   - Non-parametric: 35% accuracy (retrieval-only)
   - Hybrid (RAG): 68% accuracy ★

   **Fact Verification:**
   - Parametric: 70%
   - Non-parametric: 85% ★
   - Hybrid: 88%

   **Dialogue:**
   - Parametric: Best (fluency) ★
   - Non-parametric: Worst (rigid)
   - Hybrid: Good compromise

**KEY INSIGHTS:**

| Task Type | Best Approach | Why |
|-----------|---------------|-----|
| Factual QA | Hybrid (RAG) | Needs facts + reasoning |
| Verification | Non-parametric | Facts matter most |
| Creative writing | Parametric | Needs fluency, not facts |
| Domain-specific | Non-parametric | Niche knowledge |

**RELEVÂNCIA PARA AULA:**
★★★★★ (5/5) - Evidência empírica para quando usar Modo 1 vs Modo 2

---

# 📁 PAPERS_TOOL_USE_AGENTS/ (5 PDFs)

## 13. 2022_ReAct_Reasoning_Acting_Google.pdf

**Título:** ReAct: Synergizing Reasoning and Acting in Language Models
**Autores:** Shunyu Yao et al.
**Instituição:** Google Research, Princeton University
**Ano:** 2022
**Citações:** 1000+
**Venue:** ICLR 2023

**RESUMO:**
**PAPER SEMINAL** que introduz o padrão ReAct (Reasoning + Acting). LLMs interleave raciocínio interno (thoughts) com ações externas (actions) para resolver tasks complexas.

**MOTIVAÇÃO:**
- LLMs tradicionais apenas geram texto (sem ação)
- Chain-of-Thought ajuda raciocínio mas não permite interação
- Agentes precisam tanto PENSAR quanto AGIR

**CONTRIBUIÇÕES:**

1. **ReAct Pattern:**
   ```
   Trajectory = Thought₁ → Action₁ → Observation₁ →
                Thought₂ → Action₂ → Observation₂ →
                ... → Final Answer

   Thought: Internal reasoning (LLM generation)
   Action: External action (tool use, API call)
   Observation: Result from action (environment feedback)
   ```

2. **Exemplo concreto:**

   ```
   Question: "What is the elevation range for the area that the eastern sector of the
             Colorado orogeny extends into?"

   Thought 1: I need to search Colorado orogeny, find the area that the eastern sector
              extends into, then find the elevation range of that area.
   Action 1: Search[Colorado orogeny]
   Observation 1: The Colorado orogeny was an episode of mountain building (an orogeny)
                  in Colorado and surrounding areas. The eastern sector extends into
                  the High Plains...

   Thought 2: The eastern sector extends into the High Plains. I need to search
              High Plains and find its elevation range.
   Action 2: Search[High Plains]
   Observation 2: The High Plains are a subregion of the Great Plains. From east to west,
                  the High Plains rise in elevation from around 1,800 to 7,000 ft...

   Thought 3: High Plains rise in elevation from 1,800 to 7,000 ft, so the answer is
              1,800 to 7,000 ft.
   Action 3: Finish[1,800 to 7,000 ft]
   ```

3. **Comparação com outros métodos:**

   **Chain-of-Thought (CoT):**
   ```
   Input → [LLM reasoning] → Output
   - Advantage: Interpretable reasoning
   - Limitation: No external information
   ```

   **Act-only:**
   ```
   Input → [Action] → [Observation] → [Action] → ... → Output
   - Advantage: Can interact com environment
   - Limitation: No explicit reasoning (trial-and-error)
   ```

   **ReAct (combines both):**
   ```
   Input → [Thought] → [Action] → [Observation] → [Thought] → ... → Output
   - Advantage: Reasoning + Acting together
   - Best of both worlds
   ```

4. **Prompt structure:**

   ```
   System: You can interact with Wikipedia. Use the following format:

   Thought: [your reasoning]
   Action: [Search[query] | Lookup[term] | Finish[answer]]
   Observation: [result will be shown here]
   ... (repeat Thought/Action/Observation)
   Thought: [final reasoning]
   Action: Finish[answer]

   Question: {user_question}

   Thought 1:
   ```

**TASKS AVALIADOS:**

1. **HotpotQA (multi-hop QA):**
   - Requires multiple steps de reasoning + search
   - ReAct: 27.4% → 34.2% vs CoT alone

2. **FEVER (fact verification):**
   - ReAct: 58.3% vs CoT: 51.2%

3. **ALFWorld (interactive environment):**
   - Household tasks (find object, put in location)
   - ReAct: 75% success vs Act-only: 45%

4. **WebShop (e-commerce):**
   - Buy products based on instructions
   - ReAct: 48.5% vs Act-only: 31.2%

**RESULTADOS:**

**Comparison:**
- ReAct > CoT (em tasks que requerem informação externa)
- ReAct > Act-only (em tasks que requerem raciocínio)
- ReAct ≈ CoT + Act combined

**Interpretability:**
- Human eval: 95% das trajectories são interpretable
- Users can understand WHY agent took each action

**Error analysis:**
- 40% errors: Retrieved wrong information
- 30% errors: Incorrect reasoning
- 20% errors: Incorrect action selection
- 10% errors: Tool errors

**EXEMPLO COMPLETO (WebShop):**

```
Instruction: "Buy a blue backpack under $50 with high rating"

Thought 1: I need to search for blue backpacks first.
Action 1: search[blue backpack]
Observation 1: [List of 10 backpacks shown]

Thought 2: I see several options. I should filter by price < $50.
Action 2: filter[price < 50]
Observation 2: [Filtered list of 5 backpacks]

Thought 3: Now I need to check ratings. The first one has 4.5 stars and costs $39.99.
Action 3: click[Backpack A]
Observation 3: [Product page shown: Price $39.99, Rating 4.5/5, Color: Blue]

Thought 4: This matches all criteria: blue, under $50, high rating. I should buy it.
Action 4: buy[Backpack A]
Observation 4: [Purchase successful]
```

**LIMITAÇÕES:**
- Latência alta (múltiplas LLM calls)
- Error propagation (erro em step N afeta steps seguintes)
- Depende de prompt engineering cuidadoso
- Tools precisam ser bem documentados

**IMPACTO:**
ReAct tornou-se O padrão para agentes LLM. Praticamente todos frameworks modernos (LangChain, AutoGPT, BabyAGI) usam variante de ReAct.

**CONEXÃO COM MODO 3:**
ReAct É O PATTERN FUNDAMENTAL para Modo 3 (Interactive). Define como LLMs devem estruturar pensamento + ação em loops.

**RELEVÂNCIA PARA AULA:**
★★★★★ (5/5) - LEITURA OBRIGATÓRIA. Define padrão fundamental para agentes

**LEITURA RECOMENDADA:**
- Todo o paper (relativamente conciso)
- Foco especial: ReAct pattern, exemplos, comparações
- Tempo estimado: 1.5 horas

---

## 14. 2023_Toolformer_Teach_Use_Tools_Meta.pdf

**Título:** Toolformer: Language Models Can Teach Themselves to Use Tools
**Autores:** Timo Schick et al.
**Instituição:** Meta AI Research
**Ano:** 2023
**Citações:** ~800+
**Venue:** NeurIPS 2023

**RESUMO:**
LLMs podem aprender a usar ferramentas de forma SELF-SUPERVISED, sem precisar de anotações humanas sobre quando/como usar tools.

**MOTIVAÇÃO:**
- LLMs têm limitações (cálculo, conhecimento atualizado, etc.)
- Tools resolvem essas limitações
- Mas treinar tool use requer supervised data (caro)
- Pode LLM aprender sozinho quando usar tools?

**CONTRIBUIÇÕES:**

1. **Self-Supervised Tool Learning:**

   ```
   Pipeline:

   1. Start com base LLM (GPT-2, GPT-J)
   2. Sample diverse text corpus
   3. LLM generates API call candidates:
      "The population of France is <API>calculator(67 million)</API> 67 million."
   4. Execute API calls → get results
   5. Filter: Keep calls que MELHORAM perplexity
   6. Fine-tune LLM em augmented data
   ```

2. **API Call Format:**

   ```
   Text: "The result of 127 × 349 is <API>calculator(127 * 349)</API> 44323."

   Template: <API>{tool_name}({arguments})</API>{result}

   During inference:
   - LLM generates: "The result of 127 × 349 is <API>calculator(127 * 349)</API>"
   - System executes: calculator(127 * 349) → 44323
   - LLM continues: " 44323."
   ```

3. **Tools provided:**

   - **Calculator:** Arithmetic operations
   - **QA System:** Question answering (retrieval-based)
   - **Wikipedia Search:** Information retrieval
   - **Machine Translation:** Translate text
   - **Calendar:** Current date/time

4. **Data Generation Process:**

   ```python
   def generate_tool_training_data(llm, corpus, tools):
       augmented_data = []

       for text in corpus:
           # Sample positions to insert API calls
           positions = sample_positions(text)

           for pos in positions:
               # Generate API call candidates
               candidates = []
               for tool in tools:
                   call = llm.generate(f"{text[:pos]}<API>{tool.name}(")
                   candidates.append(call)

               # Execute tools
               for call in candidates:
                   result = execute_api_call(call)
                   augmented = f"{text[:pos]}{call}{result}{text[pos:]}"

                   # Filter: Keep if perplexity improves
                   if perplexity(llm, augmented) < perplexity(llm, text):
                       augmented_data.append(augmented)

       return augmented_data
   ```

**EXEMPLOS:**

**Example 1: Calculator**
```
Original: "The result is 17 × 83 = 1411."
Generated: "The result is 17 × 83 = <API>calculator(17 * 83)</API> 1411."
Perplexity: 15.2 (original) → 8.1 (with tool) ✓ Keep
```

**Example 2: Wikipedia Search**
```
Original: "The Eiffel Tower, built in 1889, is located in Paris."
Generated: "The Eiffel Tower, built in <API>wiki_search(Eiffel Tower construction date)</API> 1889, is located in Paris."
Perplexity: 12.3 → 7.8 ✓ Keep
```

**Example 3: QA System**
```
Original: "The population of California is approximately 39 million."
Generated: "The population of California is <API>qa(population of California)</API> approximately 39 million."
Perplexity: 18.5 → 9.2 ✓ Keep
```

**RESULTADOS:**

**Performance (vs baseline LLM):**

**Math (arithmetic):**
- Baseline: 34% accuracy
- Toolformer: 91% accuracy (+57%)

**Question Answering:**
- Baseline: 48%
- Toolformer: 62% (+14%)

**Temporal reasoning:**
- Baseline: 52%
- Toolformer: 71% (+19%)

**Tool usage statistics:**
- Calculator: Used em 15% das math questions
- Wikipedia: Used em 8% das factual questions
- QA System: Used em 12% das open-ended questions
- Calendar: Used em 95% das temporal questions

**Key findings:**
- Model aprende WHEN to use tools (não usa sempre)
- Perplexity filtering é eficaz (precision: 85%)
- Self-supervised > Few-shot prompting

**LIMITAÇÕES:**
- Limitado a tools com discrete outputs (não continuous)
- Perplexity filtering pode miss alguns usos úteis
- Não aprende composição de tools (multi-step)
- Requer executar tools durante training (caro)

**COMPARAÇÃO COM REACT:**

| Aspect | ReAct | Toolformer |
|--------|-------|------------|
| Learning | Prompted (few-shot) | Self-supervised |
| Tool use | Explicit (via prompt) | Implicit (fine-tuned) |
| Reasoning | Explicit thoughts | Implicit |
| Flexibility | High (prompt can change) | Low (fixed after training) |
| Latency | High (multiple calls) | Lower (single call) |

**IMPACTO:**
Demonstrou que LLMs podem aprender tool use SEM supervisão humana, abrindo caminho para scaling tool learning a milhares de tools.

**CONEXÃO COM MODO 3:**
Toolformer mostra que Modo 3 (tool use) pode ser learned automaticamente, reduzindo engenharia manual.

**RELEVÂNCIA PARA AULA:**
★★★★★ (5/5) - Mostra que tool learning pode ser self-supervised

**LEITURA RECOMENDADA:**
- Self-supervised learning pipeline
- Perplexity filtering
- Results e comparações
- Tempo estimado: 1.5 horas

---

## 15. 2023_Gorilla_API_Calls_LLMs.pdf

**Título:** Gorilla: Large Language Model Connected with Massive APIs
**Autores:** Shishir G. Patil et al.
**Instituição:** UC Berkeley
**Ano:** 2023
**Citações:** ~400+

**RESUMO:**
LLM fine-tuned para chamar APIs de forma precisa. Foco em reduzir hallucination de API calls (e.g., inventar APIs que não existem).

**MOTIVAÇÃO:**
- LLMs frequentemente "hallucinate" API calls
- Inventam nomes de APIs, parâmetros incorretos
- Necessidade de precisão em API calls para aplicações reais

**CONTRIBUIÇÕES:**

1. **Gorilla Model:**
   - Fine-tuned em 16K+ API documentations
   - Aprende: API name, parameters, return types
   - Reduce hallucination em API calls

2. **Training Data:**
   ```
   {
     "instruction": "Find all restaurants near me open now",
     "input": "",
     "output": "yelp.search_businesses(location='user_location', categories='restaurants', open_now=True)"
   }
   ```

3. **Retrieval-Aware Training:**
   - Durante inference, retrieves relevant API docs
   - Model conditioned em API documentation
   - Reduz hallucination significativamente

**RESULTADOS:**
- API call accuracy: 94% (vs 68% for GPT-4)
- Hallucination rate: 3% (vs 22% for GPT-4)

**RELEVÂNCIA PARA AULA:**
★★★★☆ (4/5) - Importante para precisão em API calls (Modo 3)

---

## 16. 2025_ToolACE_Agentic_Workflows.pdf

**Título:** ToolACE: Advancing Agentic Workflows with Tool-Augmented Chain Execution
**Autores:** Research team
**Ano:** 2025
**Citações:** ~30+ (paper recente)

**RESUMO:**
Framework para composição de ferramentas em workflows agentic complexos. Extends ReAct com planning e execution hierárquica.

**MOTIVAÇÃO:**
- Tasks complexas requerem múltiplos tools em sequência
- ReAct simples não escala para tasks com 10+ steps
- Necessidade de planning e decomposition

**CONTRIBUIÇÕES:**

1. **Hierarchical Planning:**
   ```
   High-level task → [Plan decomposition]
                    ↓
                [Subtasks: T₁, T₂, ..., Tₙ]
                    ↓
                [Execute each subtask com ReAct]
                    ↓
                [Aggregate results]
                    ↓
                Final answer
   ```

2. **Tool Composition:**
   - Sequential: Tool₁ → Tool₂ → Tool₃
   - Parallel: Tool₁ + Tool₂ (simultaneously)
   - Conditional: If condition → Tool₁ else Tool₂

**RESULTADOS:**
- Complex tasks (10+ steps): 72% success vs ReAct: 48%
- Planning overhead: +2 seconds
- More interpretable workflows

**RELEVÂNCIA PARA AULA:**
★★★★☆ (4/5) - Mostra evolução de ReAct para tasks complexas

---

## 17. 2024_Multi_Agent_Collaboration_LLMs.pdf

**Título:** Multi-Agent Collaboration with Large Language Models
**Autores:** Research team
**Ano:** 2024
**Citações:** ~150+

**RESUMO:**
Múltiplos agentes LLM colaboram para resolver tasks complexas. Patterns: Manager-Worker, Debate, Reflection.

**MOTIVAÇÃO:**
- Single agent tem limitações (conhecimento, perspectiva)
- Multi-agent permite especialização e debate
- Inspirado em organizações humanas

**CONTRIBUIÇÕES:**

1. **Padrões de colaboração:**

   **Manager-Worker:**
   ```
   Manager Agent: Decomposes task → assigns subtasks
                         ↓
   Worker Agents: Execute subtasks
                         ↓
   Manager Agent: Aggregates results
   ```

   **Debate:**
   ```
   Agent 1 proposes answer
        ↓
   Agent 2 critiques
        ↓
   Agent 1 refines
        ↓
   Repeat → Consensus
   ```

   **Reflection:**
   ```
   Actor Agent: Executes task
        ↓
   Critic Agent: Evaluates result
        ↓
   Actor Agent: Improves based on feedback
   ```

**RESULTADOS:**
- Math reasoning: Multi-agent (debate) > Single agent (+15% accuracy)
- Code generation: Manager-Worker > Single agent (+22% pass rate)
- Debate converges em 3-5 rounds

**RELEVÂNCIA PARA AULA:**
★★★★☆ (4/5) - Mostra que Modo 3 pode envolver múltiplos agentes

---

# 📁 PAPERS_CONTEXT_LEARNING/ (3 PDFs)

## 18. 2023_In_Context_Learning_Survey_Dong.pdf

**Título:** A Survey on In-Context Learning
**Autores:** Qingxiu Dong et al.
**Instituição:** Tsinghua University
**Ano:** 2023
**Citações:** ~600+

**RESUMO:**
Survey abrangente sobre In-Context Learning (ICL), mecanismo fundamental que permite LLMs aprenderem de exemplos no contexto SEM atualizar parâmetros.

**MOTIVAÇÃO:**
- ICL é emergent capability de LLMs grandes
- Permite adaptação a novas tasks sem fine-tuning
- Mas COMO e POR QUE funciona?

**CONTRIBUIÇÕES:**

1. **Definição de ICL:**
   ```
   Prompt = Demonstrations + Query

   Demonstrations:
   Input₁: "Translate to French: Hello"
   Output₁: "Bonjour"

   Input₂: "Translate to French: Goodbye"
   Output₂: "Au revoir"

   Query:
   Input₃: "Translate to French: Thank you"
   Output₃: [Model generates] "Merci"
   ```

2. **Como ICL funciona (teorias):**

   **Teoria 1: Bayesian Inference**
   - LLM infere latent task de demonstrations
   - Aplica task para novo query
   - Mathematical framework: P(output | query, demos)

   **Teoria 2: Gradient Descent**
   - Forward pass simula gradient descent steps
   - Attention layers implementam "update steps"
   - Equivalente a fine-tuning implícito

   **Teoria 3: Task Recognition**
   - Demonstrations ativam parametric knowledge
   - Model "reconhece" task e aplica pattern conhecido

3. **Fatores que influenciam ICL:**

   **Number of demonstrations (k):**
   - k=0 (zero-shot): Baseline
   - k=1-5 (few-shot): Typical range
   - k=10+ (many-shot): Diminishing returns

   **Order of demonstrations:**
   - Order matters! (até 30% performance difference)
   - Recency bias: Later demos mais influentes

   **Quality of demonstrations:**
   - Correct labels > Incorrect labels (obviously)
   - Representative examples > Edge cases
   - Diversity de examples helps

   **Format:**
   - Consistent format crucial
   - `Input: X\nOutput: Y` works well
   - Format engineering matters

4. **ICL vs Fine-tuning:**

   | Aspect | ICL | Fine-tuning |
   |--------|-----|-------------|
   | Update params | No | Yes |
   | Data needed | ~10 examples | ~1000 examples |
   | Time | Instant | Hours/days |
   | Flexibility | High (change demos) | Low (retraining) |
   | Performance | Good | Best |

**EXEMPLOS:**

**Sentiment Analysis (3-shot):**
```
Review: "This movie was amazing!" Sentiment: Positive

Review: "Terrible experience, waste of time." Sentiment: Negative

Review: "It was okay, nothing special." Sentiment: Neutral

Review: "Absolutely loved it, best film of the year!" Sentiment: [Positive]
```

**Arithmetic (5-shot):**
```
Q: 15 + 27 = A: 42

Q: 83 - 19 = A: 64

Q: 12 × 8 = A: 96

Q: 100 ÷ 4 = A: 25

Q: 45 + 38 = A: 83

Q: 127 - 54 = A: [73]
```

**RESULTADOS:**

**Scaling laws:**
- ICL ability emerges em ~1B parameters
- Stronger com model size (GPT-3 175B > GPT-2 1.5B)

**Task performance:**
- Simple classification: 85-90% of fine-tuned performance
- Complex reasoning: 60-70%
- Creative tasks: 70-80%

**Best practices:**
- Use 4-8 demonstrations (sweet spot)
- Diverse examples covering task space
- Consistent formatting
- Order matters (put harder examples last)

**LIMITAÇÕES:**
- Context length limited (max ~100K tokens)
- Computationally expensive (process demos every query)
- Performance < fine-tuning para tasks complexas
- Sensitive to demonstration quality

**CONEXÃO COM OS 3 MODOS:**

ICL é o MECANISMO FUNDAMENTAL que conecta todos os 3 modos:

- **Modo 1 (Recall):** ICL ativa conhecimento paramétrico via prompting
- **Modo 2 (RAG):** ICL processa retrieved docs como demonstrations
- **Modo 3 (Interactive):** ICL permite aprender tool use via examples (ReAct prompts)

**RELEVÂNCIA PARA AULA:**
★★★★★ (5/5) - ICL é connector entre os 3 modos, mecanismo fundamental

**LEITURA RECOMENDADA:**
- Seção de definitions e mechanisms
- Best practices
- Limitations
- Tempo estimado: 2 horas

---

## 19. 2022_Rethinking_Role_Demonstrations_ICL.pdf

**Título:** Rethinking the Role of Demonstrations: What Makes In-Context Learning Work?
**Autores:** Sewon Min et al.
**Instituição:** University of Washington, Meta AI
**Ano:** 2022
**Citações:** ~800+
**Venue:** EMNLP 2022

**RESUMO:**
Estudo empírico sobre O QUE realmente importa em demonstrations para ICL. Descoberta surpreendente: label correctness não é tão importante quanto se pensava.

**MOTIVAÇÃO:**
- ICL works, mas não sabemos exatamente POR QUE
- Quais componentes de demonstrations são essenciais?
- Input text? Output labels? Format?

**CONTRIBUIÇÕES:**

1. **Experimental Design:**
   Testar sistematicamente:
   - Correct labels vs Random labels
   - Inputs only vs Inputs + Outputs
   - Format variations

2. **Key Findings:**

   **Finding 1: Label correctness menos importante que esperado**

   ```
   Setup: Sentiment classification

   Correct labels:
   Review: "Amazing!" → Positive
   Review: "Terrible!" → Negative
   Accuracy: 82%

   Random labels:
   Review: "Amazing!" → Negative (wrong!)
   Review: "Terrible!" → Positive (wrong!)
   Accuracy: 76% (!!)

   Only 6% drop despite random labels!
   ```

   **Finding 2: Input distribution é crucial**

   ```
   Diverse inputs: 82% accuracy
   Repeated inputs: 61% accuracy
   No inputs (only labels): 45% accuracy
   ```

   **Finding 3: Format é muito importante**

   ```
   Consistent format: 82%
   Inconsistent format: 68%
   Format matters mais que label correctness!
   ```

3. **O que realmente importa:**

   **Priorities (em ordem):**
   1. **Input distribution:** Representative examples
   2. **Format consistency:** Same structure
   3. **Label space:** Correct set de possible labels
   4. **Label correctness:** Correct input-output pairs (less critical)

**IMPLICAÇÕES:**

**Para Modo 2 (RAG):**
- Retrieved docs devem ser DIVERSE (não só relevant)
- Format consistency é crucial
- Exact facts menos críticos que coverage

**Para Modo 3 (Interactive):**
- Tool use examples devem cobrir diverse scenarios
- Format de API calls deve ser consistent
- Edge cases menos importantes que representative cases

**RELEVÂNCIA PARA AULA:**
★★★★☆ (4/5) - Insights práticos sobre como usar ICL efetivamente

**LEITURA RECOMENDADA:**
- Experimental findings
- Implications para prompt design
- Tempo estimado: 1 hora

---

## 20. 2023_Lost_in_Middle_Context_Length.pdf

**Título:** Lost in the Middle: How Language Models Use Long Contexts
**Autores:** Nelson F. Liu et al.
**Instituição:** Stanford University
**Ano:** 2023
**Citações:** ~400+

**RESUMO:**
Estudo revelando que LLMs têm **U-shaped attention curve**: atendem bem ao início e fim do contexto, mas IGNORAM informação no meio.

**MOTIVAÇÃO:**
- LLMs modernos suportam contextos longos (100K+ tokens)
- Assume-se que podem usar toda informação
- Mas será que realmente usam?

**CONTRIBUIÇÕES:**

1. **Experimental Setup:**

   **Multi-document QA:**
   - Place answer em diferentes posições do contexto
   - 10 documents, answer está em doc 1, 2, ..., ou 10
   - Measure: Accuracy vs position

2. **Key Finding: U-shaped curve**

   ```
   Accuracy by position:

   Position 1 (início):  92% ████████████████████
   Position 2:           78% ██████████████
   Position 3:           65% ███████████
   Position 4:           58% █████████
   Position 5:           55% ████████ (worst!)
   Position 6:           59% █████████
   Position 7:           66% ███████████
   Position 8:           72% █████████████
   Position 9:           81% ██████████████
   Position 10 (fim):    88% ████████████████

   U-shaped curve: Strong at edges, weak in middle!
   ```

3. **Implications:**

   **For RAG (Modo 2):**
   - Don't just retrieve and append docs
   - PLACEMENT matters!
   - Strategies:
     - Put most relevant docs at START or END
     - Avoid burying key info in middle
     - Compress context (remove middle docs)

   **For long context:**
   - 100K context ≠ 100K useful tokens
   - Effective context might be ~20K (edges only)
   - Models don't truly "read" all context uniformly

4. **Why does this happen?**

   **Hypotheses:**
   - **Attention bias:** Attention patterns favor edges
   - **Recency bias:** Recent tokens more activated
   - **Primacy bias:** Early tokens set context
   - **Training distribution:** Most training data has important info at edges

**RESULTADOS POR MODELO:**

**GPT-3.5-Turbo (16K context):**
- Edge accuracy: ~85%
- Middle accuracy: ~55%
- Gap: 30%

**Claude-1 (100K context):**
- Edge accuracy: ~90%
- Middle accuracy: ~65%
- Gap: 25% (better than GPT but still significant)

**Llama 2 (4K context):**
- Edge accuracy: ~80%
- Middle accuracy: ~50%
- Gap: 30%

**Pattern holds across ALL models tested!**

**EXAMPLES:**

**Example 1: Multi-doc QA**
```
Context: [Doc1] [Doc2] [Doc3] [Doc4] [Doc5] [Doc6] [Doc7] [Doc8] [Doc9] [Doc10]

Query: "What is the capital of France?"

If answer in Doc1: 92% correct ✓
If answer in Doc5: 55% correct ✗
If answer in Doc10: 88% correct ✓

Same answer, different position → different accuracy!
```

**Example 2: Needle-in-haystack**
```
Context: [1000 lines of random text]
Insert fact: "The secret code is 47298" at position X
Query: "What is the secret code?"

Position at line 50 (start): 95% recall
Position at line 500 (middle): 42% recall ✗✗✗
Position at line 950 (end): 91% recall
```

**PRACTICAL RECOMMENDATIONS:**

**For RAG systems (Modo 2):**
1. **Rerank** retrieved docs, put best at START
2. **Compress** middle documents (summarize or remove)
3. **Duplicate** critical info at both start AND end
4. **Limit** total context to ~20K tokens (not 100K)

**For prompt engineering:**
1. Put **instructions** at START (before context)
2. Put **query** at END (after context)
3. **Repeat** key info if necessary
4. **Avoid** long lists in middle of context

**For agent systems (Modo 3):**
1. **Memory management:** Keep recent actions at end, summarize old
2. **Tool docs:** Most relevant tools at edges
3. **Trajectory compression:** Summarize middle steps

**CONEXÃO COM OS 3 MODOS:**

**Modo 1 (Recall):**
- Parametric knowledge não afetado (always accessible)
- But context can OVERRIDE parametric → position matters

**Modo 2 (RAG):**
- CRITICAL implication: Retrieved doc placement matters
- Naive RAG (append all docs) suboptimal
- Need smart placement strategies

**Modo 3 (Interactive):**
- Agent memory (trajectories) accumulates in context
- Need to manage context carefully
- Compress or summarize middle steps

**LIMITAÇÕES:**
- Study focused on QA tasks (may differ for other tasks)
- Some models improving (e.g., GPT-4 Turbo better)
- Future models may address this better

**RELEVÂNCIA PARA AULA:**
★★★★★ (5/5) - CRITICAL para entender limitações práticas de Modo 2

**LEITURA RECOMENDADA:**
- U-shaped curve findings
- Practical recommendations
- Implications para RAG
- Tempo estimado: 1 hora

---

# RESUMO E RECOMENDAÇÕES DE LEITURA

## Papers OBRIGATÓRIOS (Must Read):

1. **2020_RAG_Original_Lewis_Facebook.pdf** ★★★★★
   - Fundamento de Modo 2 (RAG/Context)
   - Paper seminal, define arquitetura

2. **2022_ReAct_Reasoning_Acting_Google.pdf** ★★★★★
   - Fundamento de Modo 3 (Interactive/Agentic)
   - Pattern ReAct usado em todos agentes

3. **2023_ROME_Locating_Editing_Factual.pdf** ★★★★★
   - Fundamento de Modo 1 (Parametric)
   - Mostra ONDE conhecimento é armazenado

4. **2024_RAG_Survey_Comprehensive.pdf** ★★★★★
   - Survey completo sobre RAG
   - Estado da arte até 2024

5. **2023_In_Context_Learning_Survey_Dong.pdf** ★★★★★
   - ICL é mecanismo que conecta os 3 modos
   - Fundamental para entender como LLMs usam contexto

6. **2023_Lost_in_Middle_Context_Length.pdf** ★★★★★
   - Limitação crítica de contexto longo
   - Implicações práticas para RAG

## Papers RECOMENDADOS (Highly Recommended):

7. **2025_Survey_Parametric_NonParametric_RAG.pdf** ★★★★☆
   - Distinção teórica entre Modo 1 e Modo 2

8. **2024_LLM_Agents_Survey_Wang.pdf** ★★★★☆
   - Survey completo sobre agentes (Modo 3)

9. **2023_Toolformer_Teach_Use_Tools_Meta.pdf** ★★★★☆
   - Tool learning sem supervisão

10. **2024_Tool_Learning_LLMs_Survey.pdf** ★★★★☆
    - Como implementar tool use na prática

## Papers OPCIONAIS (Optional Deep Dives):

11-20. Remaining papers para aprofundamento específico

---

## CONEXÃO COM A TAXONOMIA DOS 3 MODOS:

### MODO 1: RECALL (Conhecimento Paramétrico)
**Papers principais:** #8 (ROME), #9 (MEMIT), #11 (Knowledge Mechanisms)

**Mensagem chave:**
- Conhecimento nos parâmetros é FIXED após training
- Localizado principalmente em MLP layers
- Knowledge editing é possível mas limitado
- Por isso Modo 2 (RAG) é mais prático para conhecimento dinâmico

### MODO 2: RAG/CONTEXT (Conhecimento Não-Paramétrico)
**Papers principais:** #6 (RAG original), #1 (RAG survey), #2 (Parametric vs Non-parametric), #7 (Self-RAG), #20 (Lost in Middle)

**Mensagem chave:**
- RAG combina parametric (reasoning) + non-parametric (facts)
- Resolve problema de conhecimento desatualizado
- Mas tem limitações (latência, context position bias)
- Hybrid approach (RAG + parametric) é SOTA

### MODO 3: INTERACTIVE/AGENTIC (Uso de Ferramentas)
**Papers principais:** #13 (ReAct), #14 (Toolformer), #3 (LLM Agents survey), #4 (Tool Learning)

**Mensagem chave:**
- LLMs vão além de geração de texto para AÇÃO
- ReAct pattern: Thought → Action → Observation
- Tool learning pode ser self-supervised (Toolformer)
- Multi-agent collaboration expande capacidades

### CONECTOR: IN-CONTEXT LEARNING
**Papers principais:** #18 (ICL survey), #19 (Role of Demonstrations), #20 (Lost in Middle)

**Mensagem chave:**
- ICL é o mecanismo que permite todos os 3 modos
- Modo 1: ICL ativa parametric via prompting
- Modo 2: ICL processa retrieved docs
- Modo 3: ICL aprende tool use via exemplos
- Mas tem limitações (context length, position bias)

---

## ORDEM DE LEITURA RECOMENDADA:

### Semana 1: Fundamentos
1. RESUMO_3_MODOS_DE_USO.txt (este arquivo)
2. RAG Original (#6)
3. ReAct (#13)
4. ROME (#8)

### Semana 2: Surveys e Estado da Arte
5. RAG Survey (#1)
6. ICL Survey (#18)
7. LLM Agents Survey (#3)

### Semana 3: Aprofundamento
8. Parametric vs Non-parametric (#2)
9. Lost in Middle (#20)
10. Toolformer (#14)

### Semana 4: Tópicos Avançados
11-20. Papers restantes baseado em interesse

---

## PERGUNTAS-CHAVE RESPONDIDAS POR ESTA COLEÇÃO:

1. **Quando usar Modo 1 vs Modo 2?**
   → Ver #2 (Parametric vs Non-parametric survey)

2. **Como implementar RAG na prática?**
   → Ver #1 (RAG survey) e #6 (RAG original)

3. **Como construir agentes LLM?**
   → Ver #3 (Agents survey) e #13 (ReAct)

4. **Como LLMs aprendem a usar tools?**
   → Ver #14 (Toolformer) e #4 (Tool Learning)

5. **Onde conhecimento paramétrico é armazenado?**
   → Ver #8 (ROME)

6. **Por que RAG funciona?**
   → Ver #6 (RAG original) e #18 (ICL survey)

7. **Quais são limitações de contexto longo?**
   → Ver #20 (Lost in Middle)

8. **Como combinar os 3 modos?**
   → Ver #2 (Parametric vs Non-parametric) e #7 (Self-RAG)

---

**FIM DO ÍNDICE**

Compilado em: 02 de novembro de 2025
Versão: 1.0
Total de papers: 20 PDFs
Cobertura: Parametric, Non-parametric, e Interactive knowledge uso em LLMs
