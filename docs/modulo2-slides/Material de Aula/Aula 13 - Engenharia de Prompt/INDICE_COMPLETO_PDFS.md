# ÍNDICE COMPLETO DE PAPERS - ENGENHARIA DE PROMPT

## Aula 13 - Engenharia de Prompt
**Total de Papers:** 26 PDFs organizados em 5 categorias

---

## 📊 SURVEYS_PROMPT_ENGINEERING_2025 (4 Papers)

### 1. The Prompt Report: A Systematic Survey of Prompting Techniques (2024)
**Arquivo:** `2024_The_Prompt_Report_Systematic_Survey.pdf`
**Referência:** arXiv:2406.06608

**Autores:** Sander Schulhoff et al. (University of Maryland)

**Contribuição Principal:**
- Survey mais abrangente até o momento: **58 técnicas de prompting catalogadas**
- Taxonomia padronizada com **33 termos definidos**
- Meta-análise de 1,565 papers sobre prompting
- Framework para classificação de técnicas

**Taxonomia Proposta:**
```
├── Text-based Techniques
│   ├── Zero-shot
│   ├── Few-shot
│   ├── Chain-of-Thought
│   ├── Self-Consistency
│   └── ...
├── Structured Prompting
│   ├── Tree-of-Thoughts
│   ├── Graph of Thoughts
│   └── ...
├── Agent-based
├── Retrieval-Augmented
└── Multimodal
```

**58 Técnicas Identificadas (amostra):**
1. Zero-shot prompting
2. Few-shot prompting (ICL)
3. Chain-of-Thought (CoT)
4. Self-Consistency
5. Tree-of-Thoughts (ToT)
6. Graph of Thoughts (GoT)
7. Least-to-Most
8. Active Prompting
9. Reflexion
10. Program-Aided Language Models (PAL)
... [48 técnicas adicionais catalogadas]

**Resultados-Chave:**
- CoT melhora accuracy em 20-40% em raciocínio matemático
- Self-Consistency: +5-15% sobre CoT básico
- Few-shot: saturação típica em 5-10 exemplos
- Instruction tuning reduz gap zero-shot vs few-shot

**Impacto:** ⭐⭐⭐⭐⭐
Referência essencial - catálogo completo do estado da arte.

---

### 2. A Systematic Survey of Prompt Engineering in Large Language Models (2024)
**Arquivo:** `2024_Systematic_Survey_Prompt_Engineering_LLMs.pdf`
**Referência:** arXiv:2402.07927

**Autores:** Pranab Sahoo et al.

**Contribuição Principal:**
- Survey focado em **aplicações práticas** de prompt engineering
- Análise de técnicas por domínio (NLP, CV, raciocínio, geração de código)
- Best practices e guidelines para produção
- Comparação de performance entre técnicas

**Estrutura:**
1. **Fundamentals:** Zero-shot, Few-shot, ICL mechanisms
2. **Advanced Reasoning:** CoT, ToT, Least-to-Most, Decomposition
3. **Domain-Specific:** Medical, Legal, Scientific, Code generation
4. **Challenges:** Prompt injection, adversarial attacks, safety

**Análise Comparativa:**
| Técnica          | Custo | Latência | Accuracy | Use Case              |
|------------------|-------|----------|----------|-----------------------|
| Zero-shot        | Low   | Low      | Medium   | Simple tasks          |
| Few-shot (3-5)   | Med   | Low      | High     | Format demonstration  |
| CoT              | Med   | Med      | High     | Reasoning tasks       |
| Self-Consistency | High  | High     | V. High  | Critical decisions    |
| ToT              | V.High| V. High  | V. High  | Complex planning      |

**Guidelines Práticos:**
- Start simple (zero-shot) → Add examples if needed → Add reasoning if complex
- Use temperature=0 for deterministic tasks
- Use temperature=0.7-1.0 for creative tasks
- Validate on diverse test set (100+ examples minimum)

**Impacto:** ⭐⭐⭐⭐
Excelente para aplicações práticas e comparações.

---

### 3. Survey of Prompt Engineering Methods in NLP (2024)
**Arquivo:** `2024_Survey_Prompt_Engineering_Methods_NLP.pdf`
**Referência:** arXiv:2407.12994

**Autores:** Various (focus on NLP community)

**Contribuição Principal:**
- Survey especializado em **aplicações NLP**
- Análise de prompting para tarefas específicas:
  - Classification
  - Named Entity Recognition (NER)
  - Question Answering (QA)
  - Summarization
  - Translation
  - Sentiment Analysis

**Técnicas por Tarefa:**

**Classification:**
- Zero-shot: 75-85% accuracy (GPT-4)
- Few-shot (5 examples): 85-92% accuracy
- CoT: Melhora limitada (classificação não requer raciocínio profundo)

**NER (Named Entity Recognition):**
- Zero-shot: 60-70% F1
- Few-shot with format examples: 75-85% F1
- Structured output prompting (JSON): +5-10% F1

**Question Answering:**
- Zero-shot: 70-80% accuracy
- Few-shot + CoT: 85-92% accuracy
- Retrieval-Augmented: +10-15% accuracy

**Summarization:**
- Zero-shot: ROUGE-L 0.35-0.42
- Few-shot com length constraints: ROUGE-L 0.40-0.48
- Iterative refinement: +0.03-0.05 ROUGE-L

**Insights Específicos de NLP:**
1. **Label words matter:** Para classificação, escolha de label words afeta resultados
2. **Format consistency:** Em few-shot, formato consistente > label accuracy
3. **Contexto adequado:** Para QA, fornecer contexto relevante é crítico
4. **Output constraints:** Especificar formato/comprimento melhora qualidade

**Impacto:** ⭐⭐⭐½
Útil para aplicações NLP específicas.

---

### 4. Unleashing the Potential of Prompt Engineering in Large Language Models (2023)
**Arquivo:** `2023_Unleashing_Potential_Prompt_Engineering.pdf`
**Referência:** arXiv:2310.14735

**Autores:** Boshi Wang et al.

**Contribuição Principal:**
- Survey com foco em **fronteira entre hard prompts e soft prompts**
- Análise de gradient-based prompt optimization
- Discussão de automated prompt engineering

**Conceitos-Chave:**

**Hard Prompts (Discrete):**
- Text-based prompts escritos por humanos
- Interpretáveis e controlables
- Exemplos: "Let's think step by step", few-shot examples

**Soft Prompts (Continuous):**
- Embeddings aprendidos (não texto legível)
- Otimizados via backpropagation
- Exemplos: Prefix tuning, P-tuning, Prompt tuning

**Automated Prompt Engineering:**
1. **APE (Automatic Prompt Engineer):** LLM gera e avalia prompts
2. **GrIPS:** Gradient-based search em prompt space
3. **OPRO (Optimization via PROmpting):** Meta-prompting para otimização

**Comparação:**
| Abordagem        | Interpretável | Performance | Custo Otimização |
|------------------|---------------|-------------|------------------|
| Manual (hard)    | ✅ Alta       | Boa         | Baixo (humano)   |
| APE (automated)  | ✅ Alta       | Melhor      | Médio (LLM calls)|
| Soft prompts     | ❌ Baixa      | Melhor      | Alto (gradients) |

**Tendência Futura:**
Convergência de hard + soft: Usar LLMs para gerar prompts, depois otimizar via gradientes.

**Impacto:** ⭐⭐⭐
Perspectiva interessante sobre automação e otimização.

---

## 📚 PAPERS_SEMINAL_PROMPTING (3 Papers)

### 5. Language Models are Few-Shot Learners (GPT-3, 2020)
**Arquivo:** `2020_GPT3_Language_Models_Few_Shot_Learners.pdf`
**Referência:** arXiv:2005.14165

**Autores:** Tom B. Brown et al. (OpenAI)

**Contribuição REVOLUCIONÁRIA:**
O paper que inaugurou a era moderna de prompt engineering.

**Descoberta Central:**
Modelos de linguagem suficientemente grandes (GPT-3 com 175B parâmetros) podem:
1. **Aprender tarefas in-context** a partir de poucos exemplos
2. **Sem atualização de pesos** (zero gradient updates)
3. **Generalizar para tarefas não vistas** durante pré-treinamento

**In-Context Learning (ICL):**
```
Paradigma Tradicional:
Pre-training → Task-specific fine-tuning → Inference

Novo Paradigma (ICL):
Pre-training → In-context examples → Inference
(SEM fine-tuning!)
```

**Experimentos-Chave:**

**1. Few-shot Translation:**
```
English: "Hello" → French: "Bonjour"
English: "Thank you" → French: "Merci"
English: "Goodbye" → French:
```
→ GPT-3 produz: "Au revoir"

**2. Few-shot Arithmetic:**
- 0-shot: ~20% accuracy em problemas de 2 dígitos
- 1-shot: ~40% accuracy
- 10-shot: ~70% accuracy
- 100-shot: ~80% accuracy

**3. Zero-shot Task Transfer:**
GPT-3 consegue realizar muitas tarefas com apenas descrição:
"Translate English to French: Hello →"

**Emergência com Escala:**
| Model Size | Few-shot Performance |
|------------|----------------------|
| 125M params| Poor (baseline)      |
| 1.3B       | Marginal improvement |
| 13B        | Noticeable gains     |
| 175B       | Strong few-shot      |

**Limitações Identificadas:**
- Aritmética multi-dígito ainda fraca
- Raciocínio complexo limitado
- Sensível à ordem dos exemplos
- Prompt wording muito sensível

**Impacto:** ⭐⭐⭐⭐⭐
**PAPER SEMINAL - Leitura obrigatória.**
Fundamentou toda a área de prompt engineering.

---

### 6. Multitask Prompted Training Enables Zero-Shot Task Generalization (2021)
**Arquivo:** `2021_Multitask_Prompted_Training_Zero_Shot.pdf`
**Referência:** arXiv:2109.01652

**Autores:** Victor Sanh et al. (HuggingFace/BigScience)

**Contribuição Principal:**
Precursor do instruction tuning. Mostrou que treinar em múltiplas tarefas com prompts melhora zero-shot generalization.

**T0 Model:**
- Baseado em T5 (11B parâmetros)
- Trained em ~60 tarefas com prompts diversos
- Cada tarefa tem múltiplos templates de prompt

**Metodologia:**
1. Coletar datasets de NLP (classification, QA, summarization, etc.)
2. Criar 10+ prompt templates por tarefa
3. Treinar modelo para seguir esses prompts
4. Avaliar em tarefas não vistas (zero-shot)

**Exemplo - Sentiment Classification:**
Templates:
- "Is this review positive or negative? {text}"
- "Does this text express positive or negative sentiment? {text}"
- "Rate the sentiment of: {text}"
- "{text} \n\n Sentiment:"

**Resultados:**
T0 (11B, multitask prompted) vs. GPT-3 (175B, pre-trained):
- T0 supera GPT-3 zero-shot em 9 de 11 datasets
- Com 16× menos parâmetros!

**Insight-Chave:**
Multitask training com prompts > tamanho bruto do modelo para zero-shot.

**Impacto:** ⭐⭐⭐⭐
Fundação para FLAN, InstructGPT, instruction tuning moderno.

---

### 7. Fantastically Ordered Prompts and Where to Find Them (2021)
**Arquivo:** `2021_Fantastically_Ordered_Prompts_GPT3.pdf`
**Referência:** arXiv:2104.08773

**Autores:** Yao Lu et al.

**Contribuição Principal:**
Primeiro estudo sistemático sobre **o impacto da ordem dos exemplos** em few-shot prompting.

**Descoberta Surpreendente:**
A ordem dos exemplos pode causar variações de **20-30% em accuracy**!

**Experimento:**
- Tarefa: Sentiment classification
- 8 exemplos few-shot
- 8! = 40,320 ordenações possíveis
- Testado subset de 1000 ordenações

**Resultados:**
```
Melhor ordenação:  82.5% accuracy
Pior ordenação:    54.2% accuracy
Diferença:         28.3% !
```

**Fatores Identificados:**

**1. Recency Bias:**
Últimos exemplos têm mais influência que primeiros

**2. Common Label Bias:**
Se últimos 3 exemplos são "positive", modelo tende a prever "positive"

**3. Label Distribution:**
Balancear labels ao longo dos exemplos ajuda

**4. Similarity to Query:**
Colocar exemplos similares à query no final melhora performance

**Heurísticas Propostas:**
1. **Balancear labels:** Alternar entre classes
2. **Ordenar por similaridade:** Mais similar ao query = mais ao final
3. **Evitar runs:** Não colocar 3+ exemplos da mesma classe consecutivos

**Algoritmo de Ordenação:**
```python
def order_examples(examples, query):
    # 1. Calcular similaridade com query
    similarities = [sim(ex, query) for ex in examples]

    # 2. Ordenar por similaridade (crescente)
    examples = [ex for _, ex in sorted(zip(similarities, examples))]

    # 3. Re-arrange para balancear labels
    balanced = balance_labels(examples)

    return balanced
```

**Impacto:** ⭐⭐⭐½
Importante para otimização de few-shot prompting.

---

## 🧠 PAPERS_CHAIN_OF_THOUGHT (4 Papers)

### 8. Chain-of-Thought Prompting Elicits Reasoning in Large Language Models (2022)
**Arquivo:** `2022_Chain_of_Thought_Prompting.pdf`
**Referência:** arXiv:2201.11903

**Autores:** Jason Wei et al. (Google Research)

**Contribuição REVOLUCIONÁRIA:**
Mostrou que adicionar **raciocínio intermediário** antes da resposta melhora dramaticamente performance em tarefas de raciocínio.

**Ideia Central:**
```
Direct prompting:
Q: Roger has 5 balls. He buys 2 cans with 3 balls each. How many total?
A: 11

Chain-of-Thought:
Q: Roger has 5 balls. He buys 2 cans with 3 balls each. How many total?
A: Roger started with 5. 2 cans × 3 balls = 6 balls. 5 + 6 = 11. The answer is 11.
```

**Resultados em GSM8K (Math Word Problems):**
| Model      | Standard | CoT     | Improvement |
|------------|----------|---------|-------------|
| GPT-3 350M | 4.1%     | 4.8%    | +0.7%       |
| GPT-3 6.7B | 8.8%     | 14.3%   | +5.5%       |
| GPT-3 175B | 17.8%    | 58.1%   | **+40.3%**  |
| PaLM 540B  | 18.1%    | 66.1%   | **+48.0%**  |

**Emergência com Escala:**
CoT só funciona bem em modelos grandes (>100B parâmetros).
Modelos pequenos não conseguem fazer raciocínio multi-step consistente.

**Por Que Funciona?**
1. **Espaço de trabalho:** Texto intermediário serve como "scratchpad"
2. **Decomposição:** Problema complexo → subproblemas simples
3. **Passo-a-passo:** Reduz erros de raciocínio multi-hop

**Tarefas Onde CoT Ajuda:**
✓ Aritmética (word problems)
✓ Raciocínio lógico (syllogisms)
✓ Commonsense reasoning
✓ Symbolic manipulation

**Tarefas Onde CoT Não Ajuda Muito:**
✗ Classification (não requer raciocínio multi-step)
✗ Simple factual QA
✗ Pattern matching

**Impacto:** ⭐⭐⭐⭐⭐
**PAPER SEMINAL - Técnica mais impactante em prompt engineering.**

---

### 9. Self-Consistency Improves Chain of Thought Reasoning (2022)
**Arquivo:** `2022_Self_Consistency_CoT.pdf`
**Referência:** arXiv:2203.11171

**Autores:** Xuezhi Wang et al. (Google Research)

**Contribuição Principal:**
Extensão de CoT usando **sampling múltiplo + voting** para maior robustez.

**Problema com CoT Básico:**
Greedy decoding escolhe apenas 1 caminho de raciocínio.
Se esse caminho contém erro, resposta final está errada.

**Solução - Self-Consistency:**
1. Gerar N caminhos de raciocínio diferentes (temperature > 0)
2. Extrair resposta final de cada caminho
3. Usar **majority voting** como resposta final

**Algoritmo:**
```
For i = 1 to N:
    reasoning_i = CoT_generate(question, temperature=0.7)
    answer_i = extract_answer(reasoning_i)

final_answer = majority_vote([answer_1, ..., answer_N])
```

**Resultados:**

**GSM8K (Math):**
| Method            | Accuracy |
|-------------------|----------|
| CoT (greedy)      | 58.1%    |
| Self-Consistency (N=40) | **74.4%** |
| Improvement       | **+16.3%** |

**CommonSenseQA:**
| Method            | Accuracy |
|-------------------|----------|
| CoT (greedy)      | 72.5%    |
| Self-Consistency (N=40) | **78.7%** |

**Análise de N (número de samples):**
```
N=1   (CoT básico):      58.1%
N=5:                     68.3% (+10.2%)
N=10:                    71.2% (+13.1%)
N=20:                    73.5% (+15.4%)
N=40:                    74.4% (+16.3%)
N=80:                    74.7% (+16.6%) [diminishing returns]
```

**Trade-off:**
- **Custo:** N× mais tokens processados
- **Latência:** N× mais lento (mas pode paralelizar)
- **Benefício:** +5-15% accuracy consistente

**Quando Usar:**
✓ Quando accuracy é crítica
✓ Quando há budget para custo extra
✓ Tarefas de raciocínio com única resposta correta

**Impacto:** ⭐⭐⭐⭐
Melhoria consistente e significativa sobre CoT.

---

### 10. Towards Understanding Chain-of-Thought Prompting (2022)
**Arquivo:** `2022_Towards_Understanding_CoT.pdf`
**Referência:** arXiv:2212.10559

**Autores:** Qing Liu et al.

**Contribuição Principal:**
Análise **teórica e empírica** de POR QUE Chain-of-Thought funciona.

**Perguntas Investigadas:**
1. O que exatamente o raciocínio intermediário fornece?
2. Por que só funciona em modelos grandes?
3. CoT melhora todos os tipos de raciocínio?

**Descobertas:**

**1. CoT Aumenta Effective Depth:**
Sem CoT: Input → [1 forward pass] → Output
Com CoT: Input → [Step 1] → [Step 2] → ... → [Step K] → Output

Cada step é como uma camada adicional de processamento.

**2. CoT Reduz Complexidade Local:**
Problema complexo de K steps:
- Sem CoT: Resolver tudo de uma vez (alta complexidade)
- Com CoT: Resolver K subproblemas simples (baixa complexidade cada)

**3. Emergência em Modelos Grandes:**
Modelos pequenos (<10B):
- Não conseguem gerar reasoning steps coerentes
- CoT pode até piorar (reasoning incorreto leva a resposta errada)

Modelos grandes (>100B):
- Geram reasoning consistente
- Benefício claro de CoT

**4. Análise de Erro:**
Erros em CoT vêm de:
- 35%: Raciocínio incorreto (logical errors)
- 30%: Erro aritmético (calculation mistakes)
- 20%: Compreensão incorreta do problema
- 15%: Outros

**5. Qualidade do Raciocínio:**
```
Reasoning Quality Score (1-5):
Score 5 (perfeito):        62% dos casos
Score 4 (minor errors):    23%
Score 3 (major errors):    10%
Score 1-2 (incoherent):    5%
```

**Insights Práticos:**
- CoT funciona porque permite decomposição
- Raciocínio não precisa ser 100% correto para ajudar
- Verificar steps intermediários pode identificar erros

**Impacto:** ⭐⭐⭐
Importante para entender mecanismos, menos para aplicação prática.

---

### 11. Thread of Thought Unraveling Chaotic Contexts (2023)
**Arquivo:** `2023_Thread_of_Thought.pdf`
**Referência:** arXiv:2305.14279

**Autores:** Yucheng Zhou et al.

**Contribuição Principal:**
Extensão de CoT para contextos **caóticos ou multi-threaded** (múltiplas linhas de raciocínio simultâneas).

**Problema:**
CoT assume raciocínio linear: Step 1 → Step 2 → Step 3
Mas alguns problemas têm múltiplos threads paralelos que precisam ser sincronizados.

**Exemplo - Multi-entity Tracking:**
```
Problem:
"John and Mary went to the store. John bought apples. Mary bought oranges.
Then John went home. Mary went to the park. What did each person buy?"

CoT (linear):
"John and Mary went to the store. Then John bought apples and went home.
Mary bought oranges and went to the park. John: apples, Mary: oranges."

Thread-of-Thought (parallel tracking):
"Thread [John]: went to store → bought apples → went home
 Thread [Mary]: went to store → bought oranges → went to park
 Answer: John bought apples, Mary bought oranges."
```

**Metodologia:**
1. Identificar entidades/threads distintos
2. Raciocinar sobre cada thread separadamente
3. Sincronizar informações ao final

**Resultados:**
Em tarefas multi-entity tracking:
- CoT: 68% accuracy
- Thread-of-Thought: 79% accuracy (+11%)

**Aplicações:**
- Story understanding com múltiplos personagens
- Multi-agent scenarios
- Reasoning sobre estados paralelos

**Impacto:** ⭐⭐½
Nicho, mas útil para contextos específicos.

---

## 🚀 PAPERS_ADVANCED_TECHNIQUES (11 Papers)

### 12. Tree of Thoughts: Deliberate Problem Solving with Large Language Models (2023)
**Arquivo:** `2023_Tree_of_Thoughts.pdf`
**Referência:** arXiv:2305.10601

**Autores:** Shunyu Yao et al. (Princeton/Google DeepMind)

**Contribuição Principal:**
Generalização de CoT para **exploração estruturada em árvore** com backtracking.

**Limitação de CoT:**
Raciocínio é sequencial (left-to-right). Sem exploração de alternativas.
Se escolhe caminho errado, não há volta.

**Tree-of-Thoughts (ToT):**
Explorar múltiplos caminhos deliberadamente, avaliar cada um, fazer backtracking.

**Componentes:**
1. **Thought Decomposition:** Estados intermediários
2. **Thought Generator:** Gera k candidatos para próximo thought
3. **State Evaluator:** Avalia promisingness de cada thought
4. **Search Algorithm:** BFS ou DFS para explorar árvore

**Exemplo - Game of 24:**
```
Input: 4, 9, 10, 13
Goal: Use +, -, ×, ÷ to get 24

ToT Exploration:
                    [4, 9, 10, 13]
                    /      |      \
            [13, 1, 10]  [22, 10]  [4, 90]
            (9-4=5...)   (9+13=22) (9×10=90)
                |            |         |
          [promising]   [evaluate]  [unpromising]
```

**Resultados:**

**Game of 24 (100 problems):**
| Method      | Success Rate |
|-------------|--------------|
| IO (Direct) | 7%           |
| CoT         | 4%           |
| **ToT (BFS)**| **74%**     |

**Creative Writing:**
| Method | Coherence | Creativity |
|--------|-----------|------------|
| IO     | 6.2/10    | 5.8/10     |
| CoT    | 6.6/10    | 6.1/10     |
| **ToT**| **7.9/10**| **7.6/10** |

**Custos:**
- BFS ToT (b=3, d=5): ~45 LLM calls
- DFS ToT: ~30 LLM calls
- CoT: 1 LLM call

Trade-off claro: 30-50× mais caro, mas resolve problemas impossíveis para CoT.

**Quando Usar:**
✓ Problemas de busca (puzzles, planning)
✓ Quando exploração é necessária
✓ Espaço de busca limitado
✗ Tarefas simples (overhead não justifica custo)

**Impacto:** ⭐⭐⭐⭐½
Mudança de paradigma - raciocínio deliberado vs. greedy.

---

### 13. Least-to-Most Prompting Enables Complex Reasoning in Large Language Models (2022)
**Arquivo:** `2022_Least_to_Most_Prompting.pdf`
**Referência:** arXiv:2205.10625

**Autores:** Denny Zhou et al. (Google Research)

**Contribuição Principal:**
Decomposição **hierárquica bottom-up** de problemas complexos.

**Ideia:**
```
Standard prompting: Input → Output (direto)

Least-to-Most:
Input → [Decompose] → [Subproblem 1] → [Solve 1] →
        [Subproblem 2] → [Solve 2] → ... → [Synthesize] → Output
```

**Duas Fases:**

**Phase 1 - Decomposition:**
"Quebrar problema X em subproblemas mais simples"

**Phase 2 - Sequential Solving:**
Resolver subproblemas em ordem, usando soluções anteriores como contexto.

**Exemplo - SCAN Benchmark:**
```
Problem: "jump around left twice"

Decomposition:
1. What does "jump around" mean?
2. What does "left" mean?
3. What does "twice" mean?
4. How to combine them?

Sequential Solving:
1. "jump around" = TURN_LEFT TURN_LEFT TURN_LEFT TURN_LEFT
2. "left" = TURN_LEFT
3. "twice" = repeat 2 times
4. Final: TURN_LEFT + (TURN_LEFT TURN_LEFT TURN_LEFT TURN_LEFT) × 2
```

**Resultados:**

**SCAN Compositional Generalization:**
| Method         | Accuracy |
|----------------|----------|
| Few-shot       | 16.2%    |
| CoT            | 37.1%    |
| **Least-to-Most** | **99.7%** |

**GSM8K (Math):**
| Method         | Accuracy |
|----------------|----------|
| Few-shot       | 19.7%    |
| CoT            | 58.1%    |
| **Least-to-Most** | **68.3%** |

**Por Que Funciona Melhor que CoT?**
1. **Decomposição explícita:** Força estrutura clara
2. **Composicionalidade:** Aprende a compor soluções
3. **Contextualização:** Cada subproblema tem solução anterior como contexto

**Quando Usar:**
✓ Problemas naturalmente decomponíveis
✓ Composicionalidade é importante
✓ Tarefas de programação
✓ Planejamento multi-step

**Impacto:** ⭐⭐⭐⭐
Técnica poderosa para problemas estruturados.

---

### 14. Graph of Thoughts: Solving Elaborate Problems with Large Language Models (2023)
**Arquivo:** `2023_Graph_of_Thoughts.pdf`
**Referência:** arXiv:2308.09687

**Autores:** Maciej Besta et al. (ETH Zurich)

**Contribuição Principal:**
Generalização de ToT: thoughts formam **grafo** (não apenas árvore).
Permite agregação de múltiplas fontes e loops de refinamento.

**Evolução:**
```
CoT:  Linear chain
      A → B → C → D

ToT:  Tree (cada node tem 1 pai)
        A
       / \
      B   C
     /   / \
    D   E   F

GoT:  Graph (múltiplos pais, loops)
       A
      / \
     B   C
      \ /
       D ← (pode refinar e voltar)
```

**Operações em GoT:**
1. **Generate:** Criar novos thoughts
2. **Aggregate:** Combinar múltiplos thoughts
3. **Refine:** Melhorar thought existente
4. **Branch:** Explorar alternativas

**Exemplo - Sorting Numbers:**
```
Input: [7, 2, 9, 1, 5, 3]

Graph structure:
    [Input]
       |
    [Split into 3 pairs]
    /    |    \
[7,2] [9,1] [5,3]
   |     |     |
[2,7] [1,9] [3,5]  (sort cada par)
    \   |   /
      [Merge]
        |
  [1,2,3,5,7,9]
```

**Resultados:**

**Sorting (32 numbers):**
| Method | Success Rate | Avg. Cost |
|--------|--------------|-----------|
| CoT    | 12%          | 1× LLM    |
| ToT    | 56%          | 45× LLM   |
| **GoT**| **89%**      | 28× LLM   |

GoT é mais eficiente que ToT (menos LLM calls) E mais acurado!

**Keyword Extraction (64 documents):**
| Method | Quality | Cost  |
|--------|---------|-------|
| CoT    | 6.2/10  | 1×    |
| ToT    | 7.4/10  | 50×   |
| **GoT**| **8.7/10** | 32× |

**Vantagens sobre ToT:**
✓ Agregação de múltiplas fontes
✓ Refinamento iterativo (loops)
✓ Mais eficiente (compartilhamento de subgrafos)

**Quando Usar:**
✓ Informação de múltiplas fontes precisa ser agregada
✓ Refinamento iterativo é útil
✓ Dependências não-hierárquicas

**Impacto:** ⭐⭐⭐⭐
Representação mais flexível que ToT, mais eficiente.

---

### 15. Reflexion: Language Agents with Verbal Reinforcement Learning (2023)
**Arquivo:** `2023_Reflexion_Self_Refinement.pdf`
**Referência:** arXiv:2303.11366

**Autores:** Noah Shinn et al. (Northeastern University)

**Contribuição Principal:**
Framework para **auto-reflexão e refinamento iterativo** usando feedback verbal.

**Ideia:**
```
Traditional:
Generate → Done

Reflexion:
Generate → Evaluate → Reflect on failures → Refine → Repeat
```

**Componentes:**

**1. Actor:** Gera solução
**2. Evaluator:** Avalia qualidade (score, pass/fail, feedback)
**3. Self-Reflection:** Analisa por que falhou, o que melhorar
**4. Memory:** Armazena reflexões passadas para uso futuro

**Algoritmo:**
```
For trial = 1 to max_trials:
    # Generate attempt
    solution = Actor.generate(task, memory)

    # Evaluate
    score, feedback = Evaluator.eval(solution, task)

    if score >= threshold:
        return solution  # Success!

    # Reflect on failure
    reflection = SelfReflection.analyze(solution, feedback)

    # Store for next iteration
    memory.add(reflection)

return best_solution_so_far
```

**Exemplo - Code Generation:**
```
Trial 1:
Code: def factorial(n): return n * factorial(n-1)
Feedback: RecursionError - no base case
Reflection: "I forgot the base case. Need to add: if n <= 1: return 1"

Trial 2:
Code: def factorial(n):
          if n <= 1: return 1
          return n * factorial(n-1)
Feedback: Correct! All tests pass.
```

**Resultados:**

**HumanEval (Code Generation):**
| Method                | Pass@1 |
|-----------------------|--------|
| GPT-4 (direct)        | 67.0%  |
| GPT-4 + CoT           | 72.3%  |
| **GPT-4 + Reflexion** | **88.0%** |

**AlfWorld (Interactive Tasks):**
| Method              | Success Rate |
|---------------------|--------------|
| ReAct               | 34%          |
| ReAct + Memory      | 49%          |
| **Reflexion**       | **78%**      |

**WebShop (E-commerce):**
| Method              | Success Rate |
|---------------------|--------------|
| Baseline            | 29.5%        |
| ReAct               | 50.5%        |
| **Reflexion**       | **71.3%**    |

**Análise de Iterations:**
```
Trial 1: 45% success
Trial 2: 68% success (+23%)
Trial 3: 81% success (+13%)
Trial 4: 85% success (+4%)   [diminishing returns]
```

Tipicamente, 3 iterations são suficientes.

**Quando Usar:**
✓ Quando feedback/avaliação está disponível
✓ Code generation (pode executar testes)
✓ Interactive tasks (pode observar resultados)
✓ Quando iteração é possível

**Impacto:** ⭐⭐⭐⭐
Framework poderoso para aprendizado através de reflexão.

---

### 16. PAL: Program-Aided Language Models (2022)
**Arquivo:** `2022_PAL_Program_Aided_Language_Models.pdf`
**Referência:** arXiv:2211.09110

**Autores:** Luyu Gao et al. (Carnegie Mellon)

**Contribuição Principal:**
LLM gera **código Python** para resolver parte computacional, depois executa código para resposta precisa.

**Problema:**
LLMs são ruins em aritmética precisa:
```
Q: What is 347 × 892?
LLM: "approximately 310,000" (correto: 309,524)
```

**Solução PAL:**
```
Q: What is 347 × 892?
LLM generates:
```python
answer = 347 * 892
```
Execute → answer = 309524 ✓
```

**Fluxo:**
```
Question → LLM generates Python code → Execute code → Extract answer
```

**Exemplo - GSM8K Math Problem:**
```
Q: "A store had 20 apples. They sold 60% and received 15 more. How many now?"

PAL generates:
```python
initial_apples = 20
sold_percentage = 0.60
sold = initial_apples * sold_percentage
remaining = initial_apples - sold
new_shipment = 15
answer = remaining + new_shipment
# answer = 23.0
```
Execute → 23.0 ✓
```

**Resultados:**

**GSM8K (Math Word Problems):**
| Method          | Accuracy |
|-----------------|----------|
| Few-shot        | 17.8%    |
| CoT             | 58.1%    |
| **PAL (Codex)** | **72.1%**|

**SVAMP (Math):**
| Method          | Accuracy |
|-----------------|----------|
| CoT             | 78.2%    |
| **PAL**         | **87.4%**|

**Por Que PAL > CoT em Matemática?**
1. **Zero erros aritméticos:** Python calcula perfeitamente
2. **Lógica explícita:** Código é estruturado e verificável
3. **Decomposição natural:** Variáveis intermediárias = subproblemas

**Limitações:**
✗ Requer execução de código (segurança!)
✗ Não todas as tarefas são codificáveis
✗ LLM precisa gerar código correto

**Extensões:**
- PAL pode usar bibliotecas (numpy, sympy, etc.)
- Aplicável a symbolic reasoning, data analysis

**Impacto:** ⭐⭐⭐⭐
Técnica essencial para tarefas computacionais precisas.

---

### 17. Automatic Chain-of-Thought Prompting in Large Language Models (2022)
**Arquivo:** `2022_Automatic_Chain_of_Thought.pdf`
**Referência:** arXiv:2210.03350

**Autores:** Zhuosheng Zhang et al.

**Contribuição Principal:**
Automatizar a criação de demonstrações CoT (em vez de escrevê-las manualmente).

**Problema:**
Criar exemplos CoT manualmente é:
- Trabalhoso (requer expertise)
- Não escala para muitas tarefas
- Pode ter viés humano

**Auto-CoT:**
```
Given: Task + pool de questions sem exemplares

Step 1: Cluster questions por similaridade
Step 2: Selecionar 1 representative question por cluster
Step 3: LLM gera reasoning chain para cada representative
Step 4: Usar essas demonstrações auto-geradas em few-shot CoT
```

**Algoritmo:**
```python
def auto_cot(task, question_pool, num_clusters=4):
    # 1. Embed all questions
    embeddings = embed(question_pool)

    # 2. Cluster
    clusters = kmeans(embeddings, k=num_clusters)

    # 3. Select representative from each cluster
    representatives = []
    for cluster in clusters:
        rep = select_representative(cluster)  # e.g., medoid
        representatives.append(rep)

    # 4. Generate reasoning chains
    demonstrations = []
    for rep in representatives:
        prompt = f"{rep}\nLet's think step by step."
        reasoning = llm.generate(prompt)
        demonstrations.append((rep, reasoning))

    return demonstrations
```

**Resultados:**

**GSM8K:**
| Method                  | Accuracy |
|-------------------------|----------|
| Zero-shot               | 17.7%    |
| Zero-shot-CoT           | 40.7%    |
| Manual CoT (8 examples) | 58.1%    |
| **Auto-CoT (8 auto)**   | **56.4%**|

Auto-CoT chega perto de manual CoT sem trabalho humano!

**MultiArith:**
| Method                  | Accuracy |
|-------------------------|----------|
| Manual CoT              | 96.8%    |
| **Auto-CoT**            | **95.2%**|

**Vantagens:**
✓ Zero esforço manual
✓ Escala para muitas tarefas
✓ Diversidade automática (clustering)

**Limitações:**
- Auto-generated reasoning pode ter erros
- Qualidade depende de quality of question pool

**Impacto:** ⭐⭐⭐
Útil para reduzir esforço manual na criação de exemplos.

---

### 18. Decomposed Prompting: A Modular Approach for Solving Complex Tasks (2022)
**Arquivo:** `2022_Decomposed_Prompting.pdf`
**Referência:** arXiv:2212.08073

**Autores:** Tushar Khot et al. (AI2)

**Contribuição Principal:**
Decomposição **modular** de tarefas complexas em subproblemas independentes e reutilizáveis.

**Ideia:**
Em vez de 1 prompt monolítico, criar biblioteca de sub-prompts especializados que podem ser compostos.

**Arquitetura:**
```
Complex Task
    ↓
[Controller] ← decides which sub-tasks to invoke
    ↓
┌─────────┬──────────┬─────────┐
│Subprompt│Subprompt │Subprompt│
│    A    │    B     │    C    │
└─────────┴──────────┴─────────┘
```

**Exemplo - Multi-hop QA:**
```
Question: "Who is the spouse of the director of Inception?"

Decomposition:
1. [Extract Entity]: "Inception" → entity = "Inception"
2. [Find Director]: Query("Who directed Inception?") → "Christopher Nolan"
3. [Find Spouse]: Query("Who is Christopher Nolan's spouse?") → "Emma Thomas"

Each step uses specialized sub-prompt.
```

**Biblioteca de Sub-prompts:**
```python
SUBPROMPTS = {
    "extract_entity": "Extract the main entity from: {text}",
    "find_property": "What is the {property} of {entity}?",
    "compare": "Compare {entity1} and {entity2} on {aspect}",
    "aggregate": "Combine the following facts: {facts}",
    # ... 20+ specialized sub-prompts
}
```

**Resultados:**

**DROP (Discrete Reasoning):**
| Method                | F1    |
|-----------------------|-------|
| Direct prompting      | 42.3  |
| CoT                   | 58.6  |
| **Decomposed**        | **71.2** |

**StrategyQA (Multi-hop):**
| Method                | Accuracy |
|-----------------------|----------|
| Direct                | 54.2%    |
| CoT                   | 66.4%    |
| **Decomposed**        | **75.8%**|

**Vantagens:**
✓ **Modularidade:** Sub-prompts reutilizáveis
✓ **Manutenibilidade:** Fácil debugar e melhorar cada módulo
✓ **Interpretabilidade:** Fluxo claro de raciocínio
✓ **Composicionalidade:** Novos tasks = nova composição

**Exemplo de Reuso:**
```
Task A: "Find population of Paris"
  → Uses: extract_entity + find_property(population)

Task B: "Find GDP of France"
  → Uses: extract_entity + find_property(GDP)

Same sub-prompts, different composition!
```

**Impacto:** ⭐⭐⭐⭐
Padrão de engenharia de software aplicado a prompts.

---

### 19. Active Prompting with Chain-of-Thought for Large Language Models (2023)
**Arquivo:** `2023_Active_Prompting_CoT.pdf`
**Referência:** arXiv:2305.03047

**Autores:** Shizhe Diao et al.

**Contribuição Principal:**
**Seleção adaptativa** dos exemplos mais informativos para CoT few-shot.

**Problema:**
Em standard few-shot CoT, exemplos são escolhidos aleatoriamente ou manualmente.
Mas nem todos os exemplos são igualmente úteis!

**Active Prompting:**
Ideia inspirada em Active Learning: selecionar exemplos que maximizam informação.

**Algoritmo:**
```
1. Pool: Conjunto grande de questões sem demonstrações
2. Uncertainty Estimation: Para cada questão em pool, estimar incerteza
   (quantas respostas diferentes o modelo gera com sampling)
3. Select Top-K: Escolher K questões com maior incerteza
4. Annotate: Criar demonstrações CoT para essas K questões
   (manual ou via self-annotation)
5. Use as few-shot examples
```

**Uncertainty Metrics:**
```python
def uncertainty(question, model, num_samples=10):
    answers = []
    for _ in range(num_samples):
        answer = model.generate(question, temperature=0.7)
        answers.append(extract_answer(answer))

    # High disagreement = high uncertainty
    unique_answers = len(set(answers))
    entropy = calculate_entropy(answers)

    return entropy
```

**Resultados:**

**GSM8K (8-shot CoT):**
| Selection Method      | Accuracy |
|-----------------------|----------|
| Random selection      | 57.3%    |
| Similarity-based      | 59.1%    |
| **Active selection**  | **63.8%**|

**SVAMP:**
| Selection Method      | Accuracy |
|-----------------------|----------|
| Random                | 76.4%    |
| **Active**            | **82.1%**|

**Análise:**
Active prompting escolhe exemplos "difíceis" que têm maior impacto pedagógico.
Esses exemplos são mais informativos para o modelo.

**Comparação com Manual Selection:**
- Manual (expert-curated): 61.2%
- **Active (automated)**: 63.8%

Active supera até curadoria manual!

**Impacto:** ⭐⭐⭐
Melhoria significativa com seleção inteligente de exemplos.

---

### 20-21. Scaling Instruction-Finetuned Language Models & The Flan Collection (2022-2023)
**Arquivos:**
- `2022_Scaling_Instruction_Finetuned_Language_Models.pdf` (arXiv:2210.11416)
- `2023_Flan_Collection_Designing_Data.pdf` (arXiv:2301.13688)

**Autores:** Hyung Won Chung, Shayne Longpre et al. (Google Research)

**Contribuição Principal:**
**FLAN (Finetuned Language Net)** - Paradigma de instruction tuning em escala.

**Ideia Central:**
Pre-training dá conhecimento, mas não ensina a seguir instruções.
Instruction tuning: Finetuning em milhares de tarefas com instruções naturais.

**FLAN Methodology:**

**1. Task Collection (1,800+ tasks):**
- Classification (sentiment, NLI, etc.)
- QA (open-domain, reading comprehension)
- Summarization
- Translation
- Common sense reasoning
- Closed-book QA

**2. Template Design (10+ templates por tarefa):**
```
Sentiment classification templates:
1. "Is this review positive or negative? {text}"
2. "Classify the sentiment: {text}"
3. "{text}\n\nSentiment:"
4. "Review: {text}\nThis review is:"
5. "Does the writer like or dislike this? {text}"
... 10 total templates
```

**3. Training:**
```
For each example:
  1. Sample random task
  2. Sample random template for that task
  3. Format: input → output
  4. Train with standard supervised learning
```

**Resultados - FLAN-T5 vs T5:**

**Zero-shot Performance:**
| Task             | T5-XL | FLAN-T5-XL | Gain    |
|------------------|-------|------------|---------|
| MMLU (reasoning) | 30.2% | 45.7%      | +15.5%  |
| BBH (hard tasks) | 16.2% | 41.4%      | +25.2%  |
| TyDiQA (multi-L) | 29.1% | 54.4%      | +25.3%  |

**Few-shot Performance:**
FLAN ainda melhora com few-shot, mas gap diminui:
| Task  | T5 0-shot | T5 5-shot | FLAN 0-shot | FLAN 5-shot |
|-------|-----------|-----------|-------------|-------------|
| MMLU  | 30.2%     | 42.5%     | 45.7%       | 52.4%       |
| Gain  | -         | +12.3%    | +15.5%      | +6.7%       |

**The Flan Collection (2023):**
Extensão para ~2000 tarefas + design principles para instruction tuning:

**Design Principles:**
1. **Task diversity:** Cobrir broad range de capabilities
2. **Template diversity:** Múltiplas formas de expressar mesma instrução
3. **Balanceamento:** Não overfit em categorias populares
4. **Quality > Quantity:** Curar tarefas de alta qualidade

**Scaling Laws for Instruction Tuning:**
```
Performance ∝ log(num_tasks) × log(num_examples_per_task)

100 tasks × 1K examples > 10 tasks × 10K examples
(diversidade > profundidade)
```

**Impacto:** ⭐⭐⭐⭐⭐
**Fundação do instruction following moderno.**
InstructGPT, ChatGPT, Claude, Gemini todos usam variações deste paradigma.

---

### 22. Prompt Engineering Survey (2023)
**Arquivo:** `2023_Prompt_Engineering_Survey.pdf`
**Referência:** arXiv:2305.14940

**Autores:** Sahoo, Prakhar et al.

**Contribuição Principal:**
Survey intermediário (2023) focado em **taxonomia e best practices**.

**Taxonomia Proposta:**
```
Prompt Engineering
│
├── Instruction Engineering
│   ├── Zero-shot
│   ├── Few-shot
│   └── Role assignment
│
├── Context Engineering
│   ├── In-context learning
│   ├── Demonstrations
│   └── Retrieved context (RAG)
│
├── Reasoning Engineering
│   ├── Chain-of-Thought
│   ├── Self-Consistency
│   ├── Tree-of-Thoughts
│   └── Least-to-Most
│
└── Format Engineering
    ├── Output constraints
    ├── Structured generation
    └── Template design
```

**Best Practices Catalog:**

**1. Instruction Engineering:**
- ✓ Be specific and explicit
- ✓ Use imperative verbs ("Classify", "Summarize", "Extract")
- ✓ Specify constraints upfront
- ✗ Avoid ambiguity

**2. Context Engineering:**
- ✓ Provide relevant context only
- ✓ Order examples by difficulty (easy → hard)
- ✓ Balance label distribution
- ✗ Don't overload with irrelevant info

**3. Output Engineering:**
- ✓ Specify format ("Return JSON", "List 3 items")
- ✓ Give examples of desired output
- ✓ Set length constraints when needed
- ✗ Don't leave format ambiguous

**4. Reasoning Engineering:**
- ✓ Use CoT for multi-step reasoning
- ✓ Add "Let's think step by step" for zero-shot
- ✓ Consider Self-Consistency for critical tasks
- ✗ Don't use CoT for simple classification

**Common Pitfalls:**
1. **Over-prompting:** Demasiado texto confunde modelo
2. **Under-specifying:** Ambiguidade leva a outputs inconsistentes
3. **Ignoring model limitations:** Assumir conhecimento que modelo não tem
4. **Not testing edge cases:** Testar apenas happy path

**Prompt Optimization Workflow:**
```
1. Start simple (zero-shot)
   ↓
2. Evaluate on dev set
   ↓
3. Identify failure modes
   ↓
4. Add examples (few-shot) if needed
   ↓
5. Add reasoning (CoT) if complex
   ↓
6. Iterate on template wording
   ↓
7. Validate on held-out test set
```

**Impacto:** ⭐⭐⭐
Útil como guia prático e checklist.

---

## 🎯 PAPERS_FEW_SHOT_ICL (4 Papers)

### 23. A Survey on In-Context Learning (2022)
**Arquivo:** `2022_Survey_ICL.pdf`
**Referência:** arXiv:2211.01910

**Autores:** Qingxiu Dong et al.

**Contribuição Principal:**
**Survey abrangente sobre mecanismos de In-Context Learning (ICL)**.

**O Que é ICL?**
Capacidade de modelos grandes aprenderem tarefas novas a partir de exemplos no contexto,
SEM atualização de pesos.

**Por Que ICL Funciona?** (Teorias):

**1. Bayesian Inference View:**
Modelo faz inferência bayesiana implícita sobre a tarefa a partir dos exemplos.

**2. Meta-Learning View:**
Durante pré-treinamento, modelo aprende a "aprender rapidamente" de exemplos.

**3. Implicit Fine-tuning:**
Forward pass com exemplos = simulação de fine-tuning (sem backward pass).

**Fatores que Afetam ICL:**

**1. Model Scale:**
```
< 1B params:    ICL fraco ou inexistente
1B - 10B:       ICL emergente
10B - 100B:     ICL forte
> 100B:         ICL muito forte + zero-shot capabilities
```

**2. Number of Examples:**
```
0 (zero-shot):  Baseline
1-shot:         +10-20% (grande salto!)
3-shot:         +15-25%
5-shot:         +18-28%
10-shot:        +20-30%
20+ shot:       Diminishing returns
```

**3. Example Selection:**
- Random selection: Baseline
- Similarity-based: +5-10%
- Diversity-based: +3-7%
- Active selection: +8-15%

**4. Example Order:**
- Pode causar ±20-30% variação!
- Recency bias: Últimos exemplos mais influentes
- Label distribution matters

**5. Template Design:**
```
Bad template:  "text: X answer: Y"
Good template: "Review: X\nSentiment: Y"
Best template: "Is this review positive or negative?\nReview: X\nAnswer: Y"
```

**Limitations of ICL:**
1. **Context window:** Limite em número de exemplos
2. **Sensibilidade:** Pequenas mudanças na ordem/wording afetam muito
3. **Emergência:** Só funciona bem em modelos grandes
4. **Custo:** Cada inference paga custo dos exemplos

**Impacto:** ⭐⭐⭐⭐
Survey essencial para entender mecanismos de ICL.

---

### 24. What Makes Good In-Context Examples for GPT-3? (2022)
**Arquivo:** `2022_What_Makes_ICL_Work.pdf`
**Referência:** arXiv:2212.10001

**Autores:** Jiachang Liu et al. (UC Santa Barbara)

**Contribuição Principal:**
Análise empírica profunda sobre **o que faz exemplos efetivos em ICL**.

**Perguntas Investigadas:**
1. Ground-truth labels são necessários?
2. Input-label mapping importa?
3. Format/structure importa mais que conteúdo?

**Experimento 1 - Random Labels:**
```
Correct labels:
Review: "I loved it!" → Sentiment: positive
Review: "It was terrible" → Sentiment: negative

Random labels:
Review: "I loved it!" → Sentiment: negative  [wrong!]
Review: "It was terrible" → Sentiment: positive [wrong!]
```

**Resultado Surpreendente:**
Random labels: 72% accuracy
Correct labels: 79% accuracy

Diferença de apenas 7%! Format importa mais que label correctness.

**Experimento 2 - Input Distribution:**
```
Test: "Modern drama about family"

Similar inputs (dramas): 81% accuracy
Diverse inputs (mix genres): 76% accuracy
Out-of-distribution inputs: 68% accuracy
```

Input similarity to test query matters!

**Experimento 3 - Template Consistency:**
```
Consistent format:
Input: X\nOutput: Y
Input: X\nOutput: Y

Inconsistent format:
Input: X\nOutput: Y
Q: X\nA: Y

Inconsistent: -15% accuracy!
```

Format consistency é crucial.

**Discovered Principles:**

**1. Format > Content (parcialmente):**
Estrutura consistente importa mais que labels corretos.

**2. Similarity Helps:**
Exemplos similares ao query melhoram performance.

**3. Diversity vs. Similarity Trade-off:**
- Exemplos muito similares: risco de overfitting ao padrão
- Exemplos muito diversos: não capturam similaridade suficiente
- Sweet spot: moderadamente similares

**4. Input Quality > Label Quality:**
Inputs representativos da tarefa > labels 100% corretos.

**Practical Implications:**
- Pode usar labels aproximados se formato for bom
- Foco em consistency de template
- Selecionar inputs relevantes para test distribution

**Impacto:** ⭐⭐⭐⭐
Insights contraintuitivos importantes para design de prompts.

---

### 25. Rethinking the Role of Demonstrations in ICL (2022)
**Arquivo:** `2022_Rethinking_Role_Demonstrations_ICL.pdf`
**Referência:** arXiv:2202.12837

**Autores:** Sewon Min et al. (University of Washington)

**Contribuição Principal:**
Demonstra que demonstrations servem principalmente como **specification de formato**,
não como exemplos de input-output mapping.

**Experimento Central:**

**1. Standard ICL:**
```
Input: "I loved this movie!" → Label: positive
Input: "It was terrible." → Label: negative
Input: "Pretty good film." → Label: ?
```
Accuracy: 82%

**2. Random Input-Label Pairing:**
```
Input: "I loved this movie!" → Label: negative  [inverted!]
Input: "It was terrible." → Label: positive    [inverted!]
Input: "Pretty good film." → Label: ?
```
Accuracy: 78% (apenas 4% drop!)

**3. No Input (apenas labels):**
```
→ Label: positive
→ Label: negative
Input: "Pretty good film." → Label: ?
```
Accuracy: 52% (random baseline)

**4. No Labels (apenas inputs):**
```
Input: "I loved this movie!" →
Input: "It was terrible." →
Input: "Pretty good film." → Label: ?
```
Accuracy: 62%

**Análise:**
```
Component               | Contribution to Performance
------------------------|---------------------------
Input distribution      | High (input quality matters)
Output format           | High (showing format is key)
Input-label mapping     | Medium (surprising!)
Label correctness       | Low to Medium
```

**Implicações:**

**1. Demonstrations ≠ Supervised Examples:**
ICL não funciona como supervised learning tradicional.

**2. Format Specification é Primário:**
Mostrar estrutura input/output é mais importante que ensinar mapeamento.

**3. Input Distribution Matters Most:**
Selecionar inputs representativos > labels corretos

**4. Practical Advice:**
- Foco em format consistency
- Use inputs from target distribution
- Labels aproximados podem ser suficientes

**Impacto:** ⭐⭐⭐⭐
Mudou compreensão fundamental de como ICL funciona.

---

### 26. Label Words Are Anchors: An Information Flow Perspective for ICL (2023)
**Arquivo:** `2023_Label_Words_Are_Anchors_ICL.pdf`
**Referência:** arXiv:2305.11738

**Autores:** Lean Wang et al.

**Contribuição Principal:**
Análise de **fluxo de informação** em ICL, mostrando que label words servem como
**âncoras semânticas** que guiam predição.

**Metodologia - Information Flow Analysis:**
Usar attention visualization e intervention experiments para rastrear
como informação flui através de layers.

**Descoberta Principal:**

**Label Words São Âncoras:**
Em tarefas de classificação, model attention foca fortemente em label words
nos exemplos.

**Exemplo:**
```
Review: "I loved it!" Sentiment: positive
Review: "Terrible movie" Sentiment: negative
Review: "Pretty good" Sentiment: [model predicting]

Attention pattern:
70% attention → "positive", "negative" (label words)
20% attention → "I loved", "Terrible" (sentiment-bearing words)
10% attention → other tokens
```

**Experimento - Ablation:**

**1. Remove label words:**
```
Review: "I loved it!" Sentiment: ___
Review: "Terrible movie" Sentiment: ___
```
Performance drops 35%!

**2. Replace com nonsense labels:**
```
Review: "I loved it!" Sentiment: foo
Review: "Terrible movie" Sentiment: bar
```
Performance drops 28%

**3. Use semantically related labels:**
```
Review: "I loved it!" Sentiment: good
Review: "Terrible movie" Sentiment: bad
```
Performance: 95% of using "positive"/"negative"!

**Information Flow:**
```
Layer 1-4:   Encode input semantics
Layer 5-8:   Retrieve label words from examples
Layer 9-12:  Match input to label based on semantic similarity
Layer 13-16: Generate output token (label)
```

**Design Implications:**

**1. Choose Semantically Rich Labels:**
Bad:  "0", "1"
Good: "positive", "negative"
Better: "positive sentiment", "negative sentiment"

**2. Consistent Label Vocabulary:**
All examples should use same label words.

**3. Label Space in Context:**
Include all possible labels in examples (balanced).

**Practical Recommendations:**
```python
# Bad
"text: ... class: 0"
"text: ... class: 1"

# Good
"text: ... sentiment: positive"
"text: ... sentiment: negative"

# Better
"text: ... sentiment: clearly positive"
"text: ... sentiment: clearly negative"
```

**Impacto:** ⭐⭐⭐
Insights técnicos sobre mecanismos de atenção em ICL.

---

## 📈 RESUMO ESTATÍSTICO

### Por Categoria
- **Surveys:** 4 papers (15%)
- **Seminal:** 3 papers (12%)
- **Chain-of-Thought:** 4 papers (15%)
- **Advanced Techniques:** 11 papers (42%)
- **Few-Shot ICL:** 4 papers (15%)

### Por Ano
- **2020:** 1 paper (GPT-3 - fundacional)
- **2021:** 2 papers
- **2022:** 13 papers (explosão de pesquisa)
- **2023:** 9 papers
- **2024:** 3 papers (surveys recentes)

### Por Impacto (Rating ⭐)
- **5 estrelas:** 4 papers (GPT-3, CoT, The Prompt Report, FLAN)
- **4+ estrelas:** 12 papers
- **3+ estrelas:** 22 papers

### Técnicas com Maior Melhoria Reportada
1. **CoT:** +40% (GPT-3 em GSM8K)
2. **ToT:** +67% (Game of 24)
3. **Least-to-Most:** +83% (SCAN compositional)
4. **Reflexion:** +21% (HumanEval)
5. **PAL:** +14% (GSM8K)

---

## 🎯 ROADMAP DE LEITURA POR OBJETIVO

### Para Iniciantes
1. GPT-3 (2020) - Fundação
2. The Prompt Report (2024) - Visão geral
3. Chain-of-Thought (2022) - Técnica essencial

### Para Aplicação Prática
1. Systematic Survey (2024) - Best practices
2. Self-Consistency (2022) - Melhoria robusta
3. PAL (2022) - Cálculos precisos

### Para Pesquisa
1. Survey ICL (2022) - Mecanismos
2. What Makes ICL Work (2022) - Experimentos fundamentais
3. ToT (2023) - Fronteira de reasoning

### Para Produção
1. Decomposed Prompting (2022) - Modularidade
2. Reflexion (2023) - Refinamento iterativo
3. FLAN papers (2022-2023) - Instruction tuning

---

**Última atualização:** Janeiro 2025
**Total de páginas nos PDFs:** ~650 páginas
**Tempo estimado de leitura completa:** 40-60 horas
