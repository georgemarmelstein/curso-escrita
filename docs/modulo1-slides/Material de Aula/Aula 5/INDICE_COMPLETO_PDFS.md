# ÍNDICE COMPLETO - AULA 5: TREINAMENTO DE LLMs

## 📊 VISÃO GERAL

**Total de Papers:** 26 PDFs científicos
**Distribuição:**
- 📊 5 Surveys (2024-2025)
- 🎓 6 Papers de Pré-treino (2018-2025)
- 🔧 10 Papers de Fine-tuning (2017-2025)
- 🌐 5 Papers de Modelos Open-Source (2023-2024)

**Período Coberto:** 2017-2025 (8 anos de evolução)
**Volume Estimado:** ~650 páginas de conteúdo científico

---

## 📂 ORGANIZAÇÃO DAS PASTAS

```
Aula 5/
├── Surveys_2025/              (5 PDFs - Visões gerais completas)
├── Papers_Pretraining/        (6 PDFs - Fundamentos do pré-treino)
├── Papers_Fine_Tuning/        (10 PDFs - Métodos de ajuste fino)
└── Papers_LLAMA_OpenSource/   (5 PDFs - Modelos abertos)
```

---

# 📊 SURVEYS (2024-2025)

## 1. 2025_Survey_Large_Language_Models.pdf
**ArXiv:** 2303.18223 (v16, atualizado em Março 2025)
**Título:** A Survey of Large Language Models
**Autores:** Wayne Xin Zhao et al. (Renmin University + Microsoft)
**Páginas:** ~170 páginas

### Descrição Detalhada:
O survey MAIS COMPLETO sobre LLMs, atualizado regularmente desde 2023. Versão atual (v16) inclui desenvolvimentos até março de 2025.

**Conteúdo Principal:**
- História completa dos LLMs (GPT-1 até modelos 2025)
- Arquitetura dos Transformers em detalhe
- **Pré-treino:** corpus, tokenização, arquitetura, training objectives
- **Fine-tuning:** instruction tuning, alignment, RLHF
- **Capacidades emergentes:** in-context learning, chain-of-thought
- **Utilização prática:** prompting, planning, tool use
- **Segurança:** alignment, safety, ethics
- **Recursos:** datasets, libraries, APIs

**Por que é essencial:**
- Referência definitiva sobre LLMs
- Atualizado regularmente (v16!)
- Cobre TODO o ciclo de vida: pré-treino → fine-tuning → deployment
- 800+ referências bibliográficas
- Tabelas comparativas de todos os modelos principais

**Para a aula:**
- LEIA: Seções 4 (pre-training) e 5 (adaptation/fine-tuning)
- USE: Figuras de arquitetura, tabelas de modelos
- TEMPO: 60-90 min (skim estratégico)

---

## 2. 2025_Survey_Post_Training_LLMs.pdf
**ArXiv:** 2503.06072 (Agosto 2025)
**Título:** A Survey on Post-training of Large Language Models
**Autores:** Research team (2025)
**Páginas:** ~50 páginas

### Descrição Detalhada:
Survey focado especificamente na fase de **post-training** (fine-tuning e alignment).

**Conteúdo Principal:**
- **Supervised Fine-Tuning (SFT):** instruction tuning, task-specific adaptation
- **Alignment:** RLHF, DPO, RLAIF, Constitutional AI
- **Parameter-Efficient Methods:** LoRA, QLoRA, adapters
- **Safety alignment:** harmlessness, helpfulness, honesty
- **Evaluation:** benchmarks de alignment, human evaluation
- **Trade-offs:** alignment tax, capability preservation

**Por que é essencial:**
- Foco total em fine-tuning (complementa o survey geral)
- Cobre métodos de 2025
- Taxonomia clara de métodos
- Comparação empírica de técnicas

**Para a aula:**
- LEIA: Seções sobre RLHF, DPO, e parameter-efficient methods
- USE: Taxonomia de métodos de alignment
- TEMPO: 40-50 min

---

## 3. 2024_Survey_Datasets_LLMs.pdf
**ArXiv:** 2402.18041
**Título:** A Survey on Data Selection for Language Models
**Autores:** Multiple institutions
**Páginas:** ~80 páginas
**Cobertura:** 444 datasets, 774.5 TB de dados

### Descrição Detalhada:
Survey exaustivo sobre **datasets de treinamento** para LLMs.

**Conteúdo Principal:**
- **Tipos de dados:** web text, código, livros, artigos científicos
- **Data curation:** filtering, deduplication, quality control
- **Datasets famosos:** The Pile, C4, RedPajama, Common Crawl
- **Data mixing:** proporções ideais de diferentes tipos de dados
- **Ethical considerations:** copyright, PII, bias
- **Scale:** de GB a PB de dados

**Datasets cobertos:**
- The Pile (825 GB, 22 subconjuntos)
- C4 (Colossal Clean Crawled Corpus, 750 GB)
- RedPajama (1.2 TB)
- Common Crawl (petabytes)
- RefinedWeb (600 GB)

**Por que é essencial:**
- Explica O QUE entra no pré-treino
- 444 datasets catalogados!
- Data quality = model quality
- Questões éticas e legais

**Para a aula:**
- LEIA: Overview de datasets principais
- USE: Estatísticas de volume de dados
- TEMPO: 30-40 min (skim)

---

## 4. 2024_Survey_RLHF.pdf
**ArXiv:** 2312.14925
**Título:** A Survey on Reinforcement Learning from Human Feedback
**Páginas:** ~60 páginas

### Descrição Detalhada:
Survey completo sobre **RLHF** (Reinforcement Learning from Human Feedback).

**Conteúdo Principal:**
- **História do RLHF:** de 2017 até 2024
- **Pipeline completo:** SFT → Reward Model → RL optimization
- **Reward modeling:** como treinar modelos de recompensa
- **RL algorithms:** PPO, REINFORCE, A2C
- **Desafios:** reward hacking, distribution shift
- **Variantes:** RLAIF, Constitutional AI, DPO
- **Aplicações:** ChatGPT, Claude, Llama 2 Chat

**Por que é essencial:**
- RLHF é o método por trás do ChatGPT
- Explica o pipeline completo
- Cobre desafios práticos
- Compara variantes (RLAIF, DPO)

**Para a aula:**
- LEIA: Pipeline de RLHF, comparison com DPO
- USE: Diagramas do pipeline
- TEMPO: 40-50 min

---

## 5. 2024_Survey_DPO_Comprehensive.pdf
**ArXiv:** 2410.15595
**Título:** A Comprehensive Survey on Direct Preference Optimization
**Páginas:** ~40 páginas

### Descrição Detalhada:
Survey focado em **DPO** (Direct Preference Optimization) e variantes.

**Conteúdo Principal:**
- **DPO basics:** simplificação do RLHF
- **Como funciona:** otimização direta de preferências (sem reward model!)
- **Vantagens:** mais simples, mais estável, mais eficiente que RLHF
- **Variantes:** IPO, KTO, CPO, ORPO
- **Resultados empíricos:** comparação com RLHF
- **Limitações:** quando usar DPO vs RLHF

**Por que é essencial:**
- DPO está se tornando o padrão (mais simples que RLHF)
- Llama 3 usou DPO
- Métodos de 2024-2025
- Trade-offs claros

**Para a aula:**
- LEIA: DPO basics e comparison com RLHF
- USE: Algoritmo de DPO
- TEMPO: 30 min

---

# 🎓 PAPERS DE PRÉ-TREINO

## 6. 2018_GPT1_Improving_Language_Understanding.pdf
**Paper:** Improving Language Understanding by Generative Pre-Training
**Autores:** Alec Radford et al. (OpenAI)
**Ano:** 2018
**Páginas:** 12 páginas
**Importância:** ⭐⭐⭐ PAPER SEMINAL

### Descrição Detalhada:
O paper que **iniciou a era dos LLMs** com generative pre-training.

**Contribuições Principais:**
1. **Generative Pre-training:** pré-treino não-supervisionado em corpus gigante
2. **Discriminative Fine-tuning:** ajuste fino supervisionado para tarefas específicas
3. **Task-agnostic architecture:** mesma arquitetura serve para múltiplas tarefas
4. **Transformer decoder:** uso exclusivo do decoder (não encoder-decoder)

**Método:**
- **Pré-treino:**
  - Dataset: BooksCorpus (7000 livros, ~1 GB de texto)
  - Objetivo: predição autorregressiva (next token prediction)
  - Modelo: Transformer decoder com 12 camadas, 117M parâmetros
  - Treino: ~1 mês em 8 GPUs

- **Fine-tuning:**
  - Adapta para tarefas: classificação, Q&A, similaridade, inference
  - Apenas 1 camada linear adicional
  - Treino rápido (horas, não dias)

**Resultados:**
- SOTA em 9 de 12 tasks testadas
- Provou que pré-treino generativo funciona!

**Por que é essencial:**
- **FUNDAÇÃO** de GPT-2, GPT-3, ChatGPT
- Introduziu o paradigma pre-train + fine-tune
- Mostrou que unsupervised pre-training captura conhecimento geral

**Para a aula:**
- LEIA: Introdução + Método + Resultados (20 min)
- USE: Figura da arquitetura, tabela de resultados
- EXPLIQUE: Por que generative pre-training funciona

---

## 7. 2019_GPT2_Unsupervised_Multitask_Learners.pdf
**Paper:** Language Models are Unsupervised Multitask Learners
**Autores:** Alec Radford et al. (OpenAI)
**Ano:** 2019
**Páginas:** 24 páginas
**Importância:** ⭐⭐⭐ PAPER SEMINAL

### Descrição Detalhada:
GPT-2 mostrou que **scale matters**: modelos maiores, mais dados = capacidades emergentes.

**Escalas:**
- GPT-2 Small: 117M parâmetros
- GPT-2 Medium: 345M parâmetros
- GPT-2 Large: 762M parâmetros
- **GPT-2 XL: 1.5B parâmetros** (o maior em 2019)

**Dataset - WebText:**
- 40 GB de texto
- 8 milhões de documentos
- Reddit links com 3+ upvotes
- Curado para qualidade

**Descobertas Revolucionárias:**
1. **Zero-shot learning:** GPT-2 resolve tarefas SEM fine-tuning!
2. **Emergent capabilities:** tradução, Q&A, summarization aparecem espontaneamente
3. **Scaling laws preview:** modelos maiores → melhor performance

**Resultados:**
- SOTA em 7 de 8 tasks (zero-shot!)
- Geração de texto coerente (100+ tokens)
- Controverso na época: "too dangerous to release" (inicialmente)

**Por que é essencial:**
- Provou que **scale unlocks capabilities**
- Zero-shot learning emergiu naturalmente
- Inspirou a corrida por modelos maiores

**Para a aula:**
- LEIA: Introdução + Scaling results + Zero-shot results (30 min)
- USE: Gráficos de scaling, exemplos de geração
- EXPLIQUE: Por que zero-shot funciona

---

## 8. 2020_GPT3_Few_Shot_Learners.pdf
**Paper:** Language Models are Few-Shot Learners
**Autores:** Tom Brown et al. (OpenAI)
**Ano:** 2020
**Páginas:** 75 páginas
**Importância:** ⭐⭐⭐ PAPER SEMINAL

### Descrição Detalhada:
GPT-3 levou scaling ao **extremo** e descobriu **in-context learning**.

**Scale Dramático:**
- **175 BILHÕES de parâmetros** (117x maior que GPT-2!)
- 300 bilhões de tokens de treinamento
- $4.6 milhões de custo de treinamento estimado
- Impossível de fine-tunar para maioria dos pesquisadores

**Dataset - Mixture:**
- Common Crawl (60%, filtrado)
- WebText2 (22%)
- Books1 + Books2 (16%)
- Wikipedia (3%)

**Descoberta Revolucionária: In-Context Learning (ICL)**
- Modelo aprende de exemplos NO PROMPT (sem atualizar pesos!)
- Few-shot: 10-100 exemplos → performance dramática
- Zero-shot também funciona bem
- Elimina necessidade de fine-tuning

**Capacidades Emergentes:**
- Aritmética (2 + 2 = 4, até 3 dígitos)
- Tradução de qualidade
- Geração de código Python
- Raciocínio simples
- Conclusão de padrões

**Resultados:**
- SOTA em muitas tasks (few-shot)
- Performance aumenta log-linear com scale
- Alguns tasks ainda limitados (raciocínio complexo)

**Por que é essencial:**
- **Mudou tudo:** eliminou fine-tuning obrigatório
- In-context learning é a base dos LLMs modernos
- Provou scaling laws (mais = melhor)
- Inspirou toda a geração seguinte (Llama, PaLM, etc)

**Para a aula:**
- LEIA: Introdução + In-context learning + Scaling plots (50 min - skim)
- USE: Gráficos de scaling, exemplos de ICL, tabelas de performance
- EXPLIQUE: Por que ICL funciona, limitações

---

## 9. 2020_Scaling_Laws_Neural_LMs.pdf
**Paper:** Scaling Laws for Neural Language Models
**Autores:** Jared Kaplan et al. (OpenAI)
**Ano:** 2020
**Páginas:** 27 páginas
**Importância:** ⭐⭐⭐ FOUNDATIONAL

### Descrição Detalhada:
Paper que descobriu as **leis de escala** dos LLMs, guiando toda a pesquisa subsequente.

**Descobertas Principais:**

1. **Power Laws:**
   - Loss ∝ N^(-α) onde N = número de parâmetros
   - Perda diminui de forma previsível com scale
   - Relação vale por ORDENS DE MAGNITUDE

2. **Três Fatores de Scaling:**
   - **N (parâmetros):** maior impacto
   - **D (dados):** importante, mas menos crítico
   - **C (compute):** pode ser trocado por N ou D

3. **Optimal Allocation:**
   - Dado compute budget fixo, como alocar entre N e D?
   - Resultado: escalar N e D juntos, mas N cresce mais rápido
   - Llama 3 405B: 15 trilhões de tokens (seguiu essa lei!)

4. **Sample Efficiency:**
   - Modelos maiores são mais sample-efficient
   - GPT-3 175B aprende mais rápido que GPT-2 1.5B

5. **Transfer:**
   - Relações de scaling se transferem entre tasks
   - Previsões generalizáveis

**Implicações Práticas:**
- **GPT-3:** treinou 175B parâmetros baseado nessas leis
- **Llama 2:** 70B com mais tokens (optimal compute)
- **Chinchilla:** mostrou que muitos modelos estavam undertrained (2022)

**Limitações (descobertas depois):**
- Não prevê capacidades emergentes (raciocínio, etc)
- Saturação em alguns regimes
- Data quality matters (não apenas quantidade)

**Por que é essencial:**
- Guiou decisões de TRILHÕES de dólares
- Base científica para scaling
- Explica por que modelos ficam melhores

**Para a aula:**
- LEIA: Introdução + Power laws + Optimal compute allocation (30 min)
- USE: Gráficos de power laws, equações
- EXPLIQUE: Trade-offs entre parâmetros e dados

---

## 10. 2020_The_Pile_800GB_Dataset.pdf
**Paper:** The Pile: An 800GB Dataset of Diverse Text for Language Modeling
**Autores:** Leo Gao et al. (EleutherAI)
**Ano:** 2020 (atualizado 2021)
**Páginas:** 24 páginas
**Importância:** ⭐⭐ FOUNDATIONAL DATASET

### Descrição Detalhada:
The Pile é o dataset de pré-treino **open-source mais influente**.

**Composição (825 GB, 22 subconjuntos):**

| Component | Size | Description |
|-----------|------|-------------|
| Pile-CC | 227 GB | Common Crawl (web filtrado) |
| PubMed Central | 90 GB | Artigos científicos biomédicos |
| Books3 | 101 GB | Livros (domínio público + outros) |
| OpenWebText2 | 63 GB | Reddit links (como GPT-2) |
| ArXiv | 56 GB | Papers científicos |
| GitHub | 95 GB | Código open-source |
| Stack Exchange | 32 GB | Q&A técnico |
| USPTO | 22 GB | Patentes |
| FreeLaw | 51 GB | Documentos legais |
| PubMed Abstracts | 20 GB | Abstracts científicos |
| + 12 outros | 68 GB | Diversos domínios |

**Características:**
- **Diversidade:** 22 domínios diferentes
- **Curado:** filtrado para qualidade
- **Reprodutível:** totalmente documentado
- **Open-source:** disponível para todos

**Modelos Treinados com The Pile:**
- **GPT-Neo** (EleutherAI): 1.3B, 2.7B
- **GPT-J** (EleutherAI): 6B
- **Pythia suite** (EleutherAI): 70M até 12B
- **BLOOM** (BigScience): usado parcialmente

**Impacto:**
- Democratizou pesquisa em LLMs
- Benchmark padrão
- Inspirou datasets similares (RedPajama, etc)

**Controvérsias:**
- Books3: copyright issues
- GitHub: licensing ambiguities
- Removido do HuggingFace em 2023

**Por que é essencial:**
- Mostra O QUE entra no pré-treino
- Dataset mais documentado
- Entender diversidade de dados

**Para a aula:**
- LEIA: Composição do dataset + ablations (20 min)
- USE: Tabela de componentes, gráficos de diversidade
- EXPLIQUE: Por que diversidade importa

---

## 11. 2025_Common_Corpus_Ethical_Data.pdf
**Paper:** Common Corpus: An Open Ethical Alternative to Web Scraping
**Autores:** PleIAs initiative
**Ano:** 2025
**Páginas:** ~30 páginas
**Importância:** ⭐ EMERGING

### Descrição Detalhada:
Common Corpus é uma alternativa **ética e legal** ao Common Crawl.

**Motivação:**
- Common Crawl: copyright unclear, PII issues, opt-out difícil
- Lawsuits contra OpenAI, Meta por uso de dados sem permissão
- Necessidade de datasets éticos

**Características:**

1. **Scale:**
   - **2 trilhões de tokens** (comparável ao Llama 3)
   - ~500 línguas
   - Multilíngue

2. **Ethical:**
   - Apenas conteúdo com licença permissiva
   - Domínio público + CC licenses
   - PII removido
   - Respeita opt-out

3. **Composição:**
   - Wikipedia (todas as línguas)
   - Livros domínio público (Project Gutenberg)
   - ArXiv papers (permissão explícita)
   - Government documents (públicos)
   - Code com licenças permissivas

4. **Qualidade:**
   - Filtrado para qualidade
   - Deduplicado
   - Toxic content removido

**Resultados:**
- Modelos treinados: performance comparável
- Mais seguro legalmente
- Melhor para fine-tuning (menos toxicity)

**Limitações:**
- Menor diversidade que Common Crawl
- Viés para conteúdo em inglês
- Menos conteúdo recente

**Por que é relevante:**
- Futuro dos datasets de LLMs
- Questões legais e éticas
- Alternative para pesquisadores

**Para a aula:**
- LEIA: Motivação + Composição + Trade-offs (20 min)
- USE: Comparação com Common Crawl
- DISCUTA: Ética em datasets de LLMs

---

# 🔧 PAPERS DE FINE-TUNING

## 12. 2017_PPO_Proximal_Policy_Optimization.pdf
**Paper:** Proximal Policy Optimization Algorithms
**Autores:** John Schulman et al. (OpenAI)
**Ano:** 2017
**Páginas:** 12 páginas
**Importância:** ⭐⭐⭐ FOUNDATIONAL (RL)

### Descrição Detalhada:
PPO é o **algoritmo de RL usado no RLHF** (ChatGPT, Claude, etc).

**Problema que PPO resolve:**
- Policy gradient methods são instáveis (divergem facilmente)
- TRPO é estável mas complexo
- Necessidade: algoritmo simples E estável

**Ideia Principal:**
- **Clipped objective:** limita quanto a policy pode mudar por update
- Evita updates destrutivos
- Simples de implementar

**Algoritmo:**
```
1. Coleta trajectories com policy atual
2. Computa advantage estimates
3. Otimiza objective clipped por K epochs
4. Repete
```

**Por que PPO funciona bem:**
- **Sample efficiency:** reutiliza trajectories
- **Stability:** clipping previne divergência
- **Simplicity:** fácil de implementar e tunar

**Uso em RLHF:**
1. SFT model = initial policy
2. Reward model dá rewards
3. PPO otimiza policy para maximizar reward
4. Clipping garante que policy não diverge do SFT model

**Hiperparâmetros Críticos:**
- ε (clipping): 0.1-0.2 típico
- K (epochs): 3-10
- Learning rate: 1e-5 a 3e-5

**Alternativas:**
- A2C/A3C (menos estável)
- TRPO (mais complexo)
- DPO (evita RL completamente!)

**Por que é essencial:**
- Algoritmo por trás do ChatGPT
- Fundação do RLHF
- Entender para entender RLHF

**Para a aula:**
- LEIA: Introdução + Clipped objective (15 min)
- USE: Pseudocódigo, intuição do clipping
- EXPLIQUE: Por que estabilidade importa em RLHF

---

## 13. 2021_LoRA_Low_Rank_Adaptation.pdf
**Paper:** LoRA: Low-Rank Adaptation of Large Language Models
**Autores:** Edward Hu et al. (Microsoft)
**Ano:** 2021
**Páginas:** 14 páginas
**Importância:** ⭐⭐⭐ HIGHLY INFLUENTIAL

### Descrição Detalhada:
LoRA revolucionou fine-tuning com **parameter-efficient methods**.

**Problema:**
- Fine-tuning completo de GPT-3 175B: impossível para 99% dos pesquisadores
- Cada tarefa = novo modelo completo (175B params)
- Memory e compute proibitivos

**Solução LoRA:**
- **Freezar todos os pesos** do modelo pré-treinado
- Adicionar matrizes de **baixo rank** A, B nos layers
- Apenas treinar A, B (0.1% dos parâmetros!)

**Matemática:**
```
W = W₀ + ΔW
ΔW = A × B

Onde:
- W₀ ∈ ℝ^(d×k) (frozen)
- A ∈ ℝ^(d×r), B ∈ ℝ^(r×k) (trainable)
- r << min(d,k) (rank baixo, ex: r=8)
```

**Exemplo Numérico:**
- GPT-3 175B: 175 bilhões de parâmetros
- LoRA r=8: **10.7 milhões de parâmetros treináveis** (0.006%)
- Redução: 10,000x em parâmetros!

**Vantagens:**
1. **Memory:** 3x menos GPU memory que fine-tuning completo
2. **Velocidade:** treino 25% mais rápido
3. **Storage:** múltiplas adaptações = apenas múltiplos arquivos pequenos (10-100MB cada)
4. **Performance:** igual ou melhor que fine-tuning completo
5. **Switching:** trocar adaptações em tempo real (sem recarregar modelo)

**Onde aplicar LoRA:**
- Query, Key, Value projections (Q, K, V)
- Tipicamente: apenas Q, V (suficiente)
- Rank r: 4-64 (8 é comum)

**Resultados:**
- GPT-3 175B com LoRA: SOTA em vários benchmarks
- RoBERTa, DeBERTa: performance superior
- Democratizou fine-tuning

**Impacto:**
- Usado em Stable Diffusion (text-to-image)
- Hugging Face PEFT library
- Base para QLoRA, LoRA+, etc

**Por que é essencial:**
- Democratizou fine-tuning de LLMs
- Método padrão hoje
- Trade-off ideal: performance vs eficiência

**Para a aula:**
- LEIA: Introdução + Método + Resultados (25 min)
- USE: Diagrama de LoRA, comparação de parâmetros
- EXPLIQUE: Por que baixo rank funciona (intrinsic dimensionality)

---

## 14. 2022_InstructGPT_Training_Follow_Instructions.pdf
**Paper:** Training language models to follow instructions with human feedback
**Autores:** Long Ouyang et al. (OpenAI)
**Ano:** 2022 (publicado em 2022, base do ChatGPT lançado em Nov 2022)
**Páginas:** 68 páginas
**Importância:** ⭐⭐⭐ PAPER MAIS IMPORTANTE (ChatGPT)

### Descrição Detalhada:
InstructGPT é o paper por trás do **ChatGPT**. Mostrou como alinhar LLMs com intenções humanas.

**Problema:**
- GPT-3 é poderoso mas não alinhado
- Gera texto tóxico, falso, inútil
- Não segue instruções confiablemente

**Solução: RLHF Pipeline**

**Step 1: Supervised Fine-Tuning (SFT)**
- Coleta 13k prompts de usuários reais (API)
- Humanos escrevem respostas ideais
- Fine-tune GPT-3 nos pares (prompt, resposta ideal)
- Resultado: SFT model (melhor que GPT-3, mas não ótimo)

**Step 2: Reward Model (RM)**
- Gera 4-9 respostas por prompt com SFT model
- Humanos ranqueiam respostas (melhor → pior)
- Treina reward model para prever ranking
- Resultado: RM que prediz "qualidade" de respostas (6B params)

**Step 3: Reinforcement Learning (PPO)**
- Usa RM como função de reward
- PPO otimiza SFT model para maximizar reward
- KL penalty garante não divergir muito do SFT model
- Resultado: InstructGPT (aligned model)

**Dataset:**
- 13k SFT examples (demonstration)
- 33k comparison pairs (ranking)
- Labelers: ~40 contratados, treinados

**Resultados Surpreendentes:**
- **InstructGPT 1.3B > GPT-3 175B** em preferência humana
- 135x menor, mas preferido!
- Menos tóxico (25% ↓)
- Mais truthful
- Menos hallucinations

**Limitações:**
- Ainda falha em complex reasoning
- Pode ser over-cautious (refuses harmless requests)
- Alignment tax: piora em alguns benchmarks tradicionais

**Por que é essencial:**
- **Fundação do ChatGPT** (mesmo método)
- Provou que RLHF funciona em scale
- Paradigma: pré-treino + alignment
- Inspirou toda a indústria

**Para a aula:**
- LEIA: Introdução + Método completo + Resultados (60 min - paper longo mas essencial)
- USE: Diagramas do pipeline de 3 steps, gráficos de preferência
- EXPLIQUE: Por que RLHF funciona, limitações

---

## 15. 2022_Constitutional_AI_Harmlessness.pdf
**Paper:** Constitutional AI: Harmlessness from AI Feedback
**Autores:** Yuntao Bai et al. (Anthropic)
**Ano:** 2022 (Dezembro)
**Páginas:** 67 páginas
**Importância:** ⭐⭐⭐ HIGHLY INFLUENTIAL (Anthropic's approach)

### Descrição Detalhada:
Constitutional AI (CAI) é a abordagem da Anthropic (criadores do Claude) para alignment.

**Problema com RLHF:**
- Requer 10,000+ labels humanos (caro: $50k-100k+)
- Viés dos labelers
- Slow iteration (precisa re-coletar labels)
- Hard to scale

**Solução: RLAIF (RL from AI Feedback)**
- Replace humanos por AI em grande parte do processo
- Define "constitution": princípios de comportamento
- AI critica e revisa suas próprias respostas

**Método CAI (2 fases):**

**Phase 1: Supervised (Constitutional) Fine-Tuning**
1. Gera resposta potencialmente harmful
2. AI critica baseado em princípio constitucional
   - Ex: "Esta resposta é racista?"
3. AI revisa para alinhar com princípio
4. Repete com múltiplos princípios
5. Fine-tune no dataset revisado

**Phase 2: RL from AI Feedback (RLAIF)**
1. Gera pares de respostas
2. **AI julga** qual é melhor (baseado em constitution)
3. Treina reward model nas preferências da AI (não humanos!)
4. RL (PPO) para otimizar policy

**"Constitution" (exemplo de princípios):**
1. "Please choose the response that is most helpful, honest, and harmless."
2. "Which response is less racist?"
3. "Which response avoids being threatening or aggressive?"
4. ... (16 princípios no paper)

**Vantagens:**
- **10x mais barato:** humanos apenas para constitution (16 princípios) não para 10k+ labels
- **Transparente:** constitution é explícita (não "black box" de preferências)
- **Iterável:** mudar constitution sem re-coletar data
- **Scalable:** AI feedback é grátis

**Resultados:**
- Performance comparável ao RLHF tradicional
- Menos harmful (mais aligned com harmlessness)
- Base do Claude (Anthropic's chatbot)

**Trade-offs:**
- AI feedback pode ter vieses do modelo base
- Constitution requer design cuidadoso
- Menos "natural" que preferências humanas

**Por que é essencial:**
- Alternativa prática ao RLHF
- Método usado pela Anthropic (Claude)
- Demonstra que AI feedback funciona
- Inspirou RLAIF como categoria

**Para a aula:**
- LEIA: Introdução + Método CAI + Comparação com RLHF (40 min)
- USE: Constitution examples, diagrama de 2 fases
- EXPLIQUE: Trade-offs RLHF vs CAI

---

## 16. 2022_FLAN_Scaling_Instruction_Finetuned.pdf
**Paper:** Scaling Instruction-Finetuned Language Models
**Autores:** Hyung Won Chung et al. (Google)
**Ano:** 2022 (Outubro)
**Páginas:** 59 páginas
**Importância:** ⭐⭐⭐ HIGHLY INFLUENTIAL

### Descrição Detalhada:
FLAN (Finetuned Language Net) mostrou que **instruction tuning escala** dramaticamente.

**Ideia Principal:**
- Fine-tune em MIX MASSIVO de tarefas formatadas como instruções
- Modelo aprende a seguir instruções de forma geral
- Zero-shot em tarefas novas

**Evolução:**
- **FLAN (2021):** 62 tasks, LaMDA 137B
- **FLAN-T5 (2022):** 1,836 tasks, T5/PaLM
- **FLAN-PaLM (2022):** 540B parameters

**Dataset - Flan Collection:**
- **1,836 tasks** de 4 mixtures:
  - Muffin (previos instruction tuning datasets)
  - T0 (zero-shot tasks)
  - NIV2 (1,600+ tasks!)
  - Chain-of-thought (CoT reasoning)
- **473 datasets** únicos
- **146 categorias** de tarefas

**Scaling Insights:**

1. **Model Scale:**
   - FLAN melhora mais em modelos maiores
   - PaLM 540B + FLAN: SOTA em múltiplas tasks

2. **Task Scale:**
   - Mais tasks = melhor generalização
   - 1,836 tasks >> 62 tasks originais

3. **Instruction Templates:**
   - Múltiplos templates por task (10+ variações)
   - Aumenta robustez

**Resultados:**
- **MMLU:** 75.2% (FLAN-PaLM 540B) vs 69.3% (PaLM 540B)
- **BBH (reasoning):** 57.9% vs 44.1% (HUGE improvement!)
- Zero-shot em novas tasks: dramático improvement

**Por que funciona:**
- Expõe modelo a ENORME variedade de tarefas
- Aprende "meta-skill" de seguir instruções
- Transfer learning em nível de instruções

**Formato de Instrução:**
```
Template: "Read this and answer: {passage}\n{question}"
Template: "Answer based on context:\n\n{passage}\n\n{question}"
Template: "{passage}\n\nQ: {question}\nA:"
... (10+ variações)
```

**Por que é essencial:**
- Método padrão para instruction tuning hoje
- Llama 2, Mistral, etc usam FLAN collection
- Mostra que diversidade de tasks > quantidade de data em uma task

**Para a aula:**
- LEIA: Introdução + Scaling results + Dataset composition (35 min)
- USE: Gráficos de scaling, tabela de tasks
- EXPLIQUE: Por que diversidade de instruções importa

---

## 17. 2023_FLAN_Collection_Instruction_Tuning.pdf
**Paper:** The Flan Collection: Designing Data and Methods for Effective Instruction Tuning
**Autores:** Shayne Longpre et al. (Google)
**Ano:** 2023
**Páginas:** 38 páginas
**Importância:** ⭐⭐ DATASET PAPER

### Descrição Detalhada:
Paper que documenta em detalhe a **Flan Collection**, o dataset de instruction tuning mais usado.

**Contribuições:**
1. **Dataset Release:** Flan Collection público no HuggingFace
2. **Design Principles:** como construir datasets de instruction tuning
3. **Ablations:** o que importa (e o que não importa)

**Flan Collection Detalhada:**

| Component | Tasks | Examples | Description |
|-----------|-------|----------|-------------|
| Muffin | 62 | 1.8M | Original FLAN tasks |
| T0 | 193 | 19M | T0++ datasets |
| NIV2 | 1,554 | 5M | Natural Instructions v2 |
| CoT | 9 | 0.1M | Chain-of-thought reasoning |
| Dialog | 13 | 0.3M | Conversational tasks |
| **Total** | **1,836** | **25M+** | Mixed |

**Design Principles:**

1. **Task Diversity:**
   - Múltiplas categorias (QA, NLI, summarization, etc)
   - Evitar domínio único

2. **Template Diversity:**
   - 10+ templates por task
   - Aumenta robustness

3. **Input Inversion:**
   - "What is capital of France?" → "Paris is capital of which country?"
   - Dobra dataset size, melhora understanding

4. **Balancing:**
   - Limite por task (para evitar dominação)
   - Mix estratégico

**Ablations (o que importa):**
- ✅ **Task diversity:** muito importante
- ✅ **Template diversity:** importante
- ✅ **Input inversion:** helpful
- ❌ **Example ordering:** não importa muito
- ❌ **Few-shot examples:** opcional (zero-shot suficiente)

**Uso Prático:**
- Dataset disponível: `google/flan_v2` no HuggingFace
- Usado para treinar Flan-T5, Flan-PaLM, Flan-UL2
- Community usa para treinar modelos open-source

**Por que é relevante:**
- Documenta o dataset padrão de instruction tuning
- Design principles aplicáveis
- Recurso prático

**Para a aula:**
- LEIA: Dataset composition + Design principles + Ablations (25 min)
- USE: Tabela de componentes, design principles
- PRÁTICO: Mostrar exemplos do dataset no HuggingFace

---

## 18. 2023_DPO_Direct_Preference_Optimization.pdf
**Paper:** Direct Preference Optimization: Your Language Model is Secretly a Reward Model
**Autores:** Rafael Rafailov et al. (Stanford)
**Ano:** 2023 (Maio)
**Páginas:** 28 páginas
**Importância:** ⭐⭐⭐ HIGHLY INFLUENTIAL (simplifica RLHF)

### Descrição Detalhada:
DPO é a **simplificação revolucionária do RLHF** que está se tornando o padrão.

**Problema com RLHF:**
- Pipeline complexo: SFT → Reward Model → RL (PPO)
- Treinar reward model separado (6B params)
- PPO é instável (requer tuning cuidadoso)
- 3 modelos em memória simultaneamente
- Expensive e lento

**Insight de DPO:**
- Reward model pode ser expresso em termos da policy DIRETAMENTE
- **Elimina reward model e RL!**
- Treina policy diretamente nas preferências

**Matemática (simplificado):**

RLHF objetivo:
```
max E[r(x,y)] - β KL(π || π_ref)
```

DPO descobre que a policy ótima satisfaz:
```
π*(y|x) ∝ π_ref(y|x) · exp(r(x,y) / β)
```

Reorganizando:
```
r(x,y) = β log(π*(y|x) / π_ref(y|x))
```

**DPO Loss:**
```
L = -E[log σ(β log(π(y_w|x)/π_ref(y_w|x)) - β log(π(y_l|x)/π_ref(y_l|x)))]

Onde:
- y_w = resposta preferida (chosen)
- y_l = resposta rejeitada
- σ = sigmoid
```

**Pipeline Simplificado:**

RLHF:
1. SFT
2. Train reward model (collect comparisons, train 6B model)
3. RL with PPO (complex, unstable)

DPO:
1. SFT
2. **DPO diretamente** (single training run!)

**Vantagens:**
- **10x mais simples:** 1 training run, não 3
- **Estável:** não requer PPO tuning
- **Memory:** 2x menos GPU memory
- **Rápido:** training 2-3x mais rápido
- **Performance:** igual ou melhor que RLHF

**Resultados:**
- Controlado summarization: 58% win rate vs RLHF
- Sentiment: comparável
- Dialog: melhor que SFT, comparável a RLHF
- Adoption: Llama 3 usou DPO (não RLHF!)

**Limitações:**
- Requer preference data (como RLHF)
- Menos controle fino que separar reward model
- Pode overfit a dataset pequenos

**Por que é essencial:**
- **Futuro do alignment:** mais simples = melhor
- Llama 3, Mistral, outros usam DPO
- Elimina complexidade de RLHF
- Trade-off ideal: simplicidade vs performance

**Para a aula:**
- LEIA: Introdução + Derivação + Algoritmo + Comparação com RLHF (35 min)
- USE: Diagrama comparando RLHF vs DPO, algoritmo
- EXPLIQUE: Por que DPO funciona, quando usar DPO vs RLHF

---

## 19. 2023_QLoRA_Efficient_Finetuning_Quantized.pdf
**Paper:** QLoRA: Efficient Finetuning of Quantized LLMs
**Autores:** Tim Dettmers, Artidoro Pagnoni et al.
**Ano:** 2023 (Maio)
**Páginas:** 25 páginas
**Importância:** ⭐⭐⭐ HIGHLY PRACTICAL (democratização)

### Descrição Detalhada:
QLoRA leva eficiência ao **extremo**: fine-tune 65B em **1 GPU** de 48GB!

**Problema:**
- LoRA: 10,000x menos parâmetros, mas ainda requer modelo em 16-bit
- LLaMA 65B em 16-bit: 130 GB de GPU memory (impossível em 1 GPU)
- Solução óbvia: quantizar para 4-bit? Mas degrada performance...

**Inovações de QLoRA:**

**1. 4-bit NormalFloat (NF4):**
- Weights seguem distribuição normal
- NF4: quantização ótima para distribuição normal
- Preserva informação melhor que int4 ou float4 simples

**2. Double Quantization:**
- Quantiza os pesos: 16-bit → 4-bit (normal)
- **Quantiza também as constantes de quantização!**
- Economia adicional: 0.37 bits/param em média

**3. Paged Optimizers:**
- Gerencia memory spikes (durante gradient computation)
- Usa CPU memory como overflow (paging automático)
- Permite treinar modelos que "não caberiam"

**Resultado:**
- **LLaMA 65B em 48GB de GPU** (single A100)
- Performance igual a 16-bit LoRA!
- 4x menos memory que LoRA normal

**Guanaco Models:**
- Fine-tuned LLaMA com QLoRA
- Dataset: OASST1 (OpenAssistant, 10k conversations)
- **Guanaco-65B:** 99.3% da performance do ChatGPT no Vicuna benchmark
- Training: **24 horas em 1 GPU**

**Comparação:**

| Method | LLaMA 65B Memory | Performance | Cost |
|--------|------------------|-------------|------|
| Full FT | 1300 GB | 100% | $100k+ |
| LoRA 16-bit | 160 GB | 99.9% | $5k |
| QLoRA 4-bit | **48 GB** | 99.8% | **$500** |

**Impacto:**
- Democratizou fine-tuning de modelos grandes
- Qualquer pesquisador com 1 GPU pode fine-tunar 65B+
- Usado em Hugging Face PEFT library
- Base para treinar milhares de modelos open-source

**Limitações:**
- Training 2-3x mais lento que 16-bit (quantização overhead)
- 4-bit inference também requer adaptações

**Por que é essencial:**
- Democratização extrema
- Mostra que quantização agressiva pode preservar quality
- Método padrão para fine-tuning com recursos limitados

**Para a aula:**
- LEIA: Introdução + NF4 + Double Quantization + Resultados (30 min)
- USE: Tabela de memory usage, resultados do Guanaco
- EXPLIQUE: Trade-offs memory vs speed vs quality
- PRÁTICO: Como usar QLoRA na prática

---

## 20. 2023_RLAIF_AI_Feedback.pdf
**Paper:** RLAIF: Scaling Reinforcement Learning from Human Feedback with AI Feedback
**Autores:** Harrison Lee et al. (Google)
**Ano:** 2023 (Setembro)
**Páginas:** 23 páginas
**Importância:** ⭐⭐ PRACTICAL ALTERNATIVE

### Descrição Detalhada:
RLAIF (RL from AI Feedback) escala alignment usando **AI labels** ao invés de humanos.

**Problema com RLHF:**
- Requer 10,000+ human labels
- Custo: $50k-100k+ para dataset
- Tempo: semanas para coletar
- Não escala para múltiplas tarefas

**Solução RLAIF:**
- Replace humans por **LLM as a judge**
- Prompt LLM para julgar qual resposta é melhor
- Train reward model nas preferências da AI
- **10-100x mais barato, 10x mais rápido**

**Método:**

1. **Generate comparisons:**
   - Gera pares de respostas
   - Prompt LLM juiz: "Which response is better? A or B?"
   - Coleta 10k+ judgments (automático!)

2. **Train reward model:**
   - Mesmo que RLHF, mas labels da AI

3. **RL (PPO):**
   - Idêntico ao RLHF

**Prompt para LLM Judge (exemplo):**
```
Task: Summarize the following article.

Article: {article}

Response A: {summary_A}
Response B: {summary_B}

Which response is a better summary? Consider:
- Accuracy
- Conciseness
- Fluency

Answer: (A or B)
```

**Resultados (Summarization):**
- RLAIF vs RLHF: **71% agreement**
- Human preference: RLAIF = 79%, RLHF = 72% (RLAIF ganha!)
- Custo: **$100 vs $10,000**

**Quando RLAIF funciona bem:**
- ✅ Tarefas objetivas (summarization, factuality)
- ✅ Quando há critérios claros
- ✅ LLM juiz é suficientemente capaz

**Limitações:**
- ❌ Tarefas subjetivas (humor, tone)
- ❌ LLM juiz pode ter vieses
- ❌ "Cheating": modelo pode aprender a manipular juiz

**Variantes:**
- **Self-critique:** usar mesmo modelo como juiz
- **Constitution AI:** especificar princípios explícitos
- **Hybrid:** humanos + AI

**Por que é relevante:**
- **Scalability:** treinar modelos para 100+ tasks (custo viável)
- Iteração rápida
- Futuro: AI feedback > human feedback?

**Para a aula:**
- LEIA: Introdução + Método + Comparação com RLHF (20 min)
- USE: Exemplo de prompt para judge, comparação de custos
- DISCUTA: Trade-offs RLHF vs RLAIF, quando usar cada um

---

## 21. 2025_Massive_SFT_Experiments.pdf
**Paper:** Supervised Fine-Tuning at Scale: Lessons from 1000+ Models
**Autores:** Research team
**Ano:** 2025
**Páginas:** ~40 páginas
**Importância:** ⭐⭐ EMPIRICAL INSIGHTS

### Descrição Detalhada:
Paper empírico massivo que treinou **1000+ modelos SFT** para entender o que funciona.

**Motivação:**
- SFT é primeiro passo em todos os pipelines (antes de RLHF/DPO)
- Muitas decisões empíricas (learning rate, epochs, dataset size, etc)
- Faltam ablations sistemáticos

**Escopo do Estudo:**
- **1000+ modelos** treinados
- Variações: 7B, 13B, 70B parameters
- Datasets: 1k até 1M examples
- Hyperparameters: 100+ combinações

**Findings Principais:**

**1. Dataset Size:**
- **Qualidade > Quantidade** (até certo ponto)
- 10k high-quality examples > 100k low-quality
- Saturation: ~100k examples para 7B, ~1M para 70B
- Curva em S: pouco ganho após saturação

**2. Data Quality:**
- Diversity importa: 10k diverse > 50k similar
- Length: preferir exemplos 100-500 tokens (nem muito curtos, nem muito longos)
- Formato: instruções claras > conversação vaga

**3. Epochs:**
- **1-3 epochs:** sweet spot
- >3 epochs: overfitting em small datasets
- Large datasets: 1 epoch suficiente

**4. Learning Rate:**
- 1e-5 a 5e-5: faixa segura
- 2e-5: default bom para maioria
- Maior LR: risco de catastrofic forgetting

**5. Model Size:**
- Modelos maiores aprendem mais rápido (few epochs)
- Modelos menores: precisam mais epochs ou mais data

**6. Forgetting:**
- SFT causa forgetting de capacidades do base model
- Mitigar: mix pre-training data (5-10%)
- Replay: misturar samples do base model

**7. Task Composition:**
- Multi-task SFT > single-task (generalização)
- Balancing: limitar cada task a 10-20k examples

**Recomendações Práticas:**

Para 7B model:
- 10k-50k high-quality examples
- 2-3 epochs
- LR: 2e-5
- Mix 10% pre-training data

Para 70B model:
- 100k-1M examples
- 1-2 epochs
- LR: 1e-5
- Mix 5% pre-training data

**Por que é relevante:**
- Guia prático para SFT
- Economiza tentativa-e-erro
- Baseado em escala massiva (1000+ models)

**Para a aula:**
- LEIA: Key findings + Recommendations (25 min)
- USE: Gráficos de scaling, recomendações práticas
- PRÁTICO: Como aplicar em seus próprios experimentos

---

# 🌐 MODELOS OPEN-SOURCE

## 22. 2023_LLaMA1_Open_Efficient_Foundation.pdf
**Paper:** LLaMA: Open and Efficient Foundation Language Models
**Autores:** Hugo Touvron et al. (Meta AI)
**Ano:** 2023 (Fevereiro)
**Páginas:** 27 páginas
**Importância:** ⭐⭐⭐ FOUNDATIONAL (democratização)

### Descrição Detalhada:
LLaMA 1 **democratizou LLMs de qualidade** ao provar que modelos menores, bem treinados, superam gigantes.

**Filosofia:**
- Focar em **training tokens**, não apenas parâmetros
- Chinchilla scaling laws: modelos eram undertrained
- Melhor: modelo menor + mais tokens

**Modelos Lançados:**

| Model | Params | Tokens | Training Compute |
|-------|--------|--------|------------------|
| LLaMA-7B | 7B | 1.0T | 82k GPU-hours |
| LLaMA-13B | 13B | 1.0T | 135k GPU-hours |
| LLaMA-33B | 33B | 1.4T | 530k GPU-hours |
| LLaMA-65B | 65B | 1.4T | 1M GPU-hours |

**Dataset (1.4 Trillion tokens):**

| Source | Percentage | Tokens | Description |
|--------|------------|--------|-------------|
| CommonCrawl | 67% | 938B | Web (filtrado) |
| C4 | 15% | 210B | Colossal Clean Crawled |
| GitHub | 4.5% | 63B | Código |
| Wikipedia | 4.5% | 63B | 20 línguas |
| Books | 4.5% | 63B | Gutenberg + Books3 |
| ArXiv | 2.5% | 35B | Papers científicos |
| StackExchange | 2% | 28B | Q&A técnico |

**Arquitetura (melhorias sobre GPT-3):**
- RMSNorm (mais eficiente que LayerNorm)
- SwiGLU activation (em vez de ReLU)
- Rotary Positional Embeddings (RoPE)
- Attention optimizations

**Resultados Surpreendentes:**
- **LLaMA-13B > GPT-3 175B** em muitos benchmarks!
- LLaMA-65B: competitivo com Chinchilla-70B e PaLM-540B
- Eficiência: menor, mais rápido, open-source

**Performance:**

| Benchmark | LLaMA-65B | GPT-3 175B |
|-----------|-----------|------------|
| MMLU (5-shot) | 63.4% | 70.0% |
| HellaSwag | 84.2% | 78.9% |
| PIQA | 82.8% | 81.0% |
| ARC | 80.0% | 85.2% |

**Impacto:**
- Spawned ecosystem: Alpaca, Vicuna, Orca, etc
- Democratizou pesquisa em LLMs
- Provou: training > pure scale
- Open-source (weights liberados)

**Controvérsia:**
- Licença restritiva inicialmente (research only)
- Weights "leaked" para torrents
- Meta liberou após pressão da comunidade

**Por que é essencial:**
- Ponto de virada: open-source competitivo
- Fundação de centenas de modelos derivados
- Provou viabilidade de modelos menores

**Para a aula:**
- LEIA: Dataset composition + Training + Resultados (30 min)
- USE: Tabela de modelos, comparação com GPT-3
- EXPLIQUE: Por que LLaMA-13B supera GPT-3 175B

---

## 23. 2023_Llama2_Open_Foundation_Fine_Tuned.pdf
**Paper:** Llama 2: Open Foundation and Fine-Tuned Chat Models
**Autores:** Hugo Touvron et al. (Meta AI)
**Ano:** 2023 (Julho)
**Páginas:** 77 páginas
**Importância:** ⭐⭐⭐ FOUNDATIONAL (open ChatGPT alternative)

### Descrição Detalhada:
Llama 2 é a **resposta open-source ao ChatGPT**, com modelos base E chat alinhados.

**Modelos Lançados:**

**Base models:**
- Llama 2 7B
- Llama 2 13B
- Llama 2 70B

**Chat models (fine-tuned + RLHF):**
- Llama 2 7B-Chat
- Llama 2 13B-Chat
- Llama 2 70B-Chat

**Pré-treino:**
- **2 TRILHÕES de tokens** (40% mais que Llama 1)
- Context: 4k tokens
- Training: ~1.7M GPU-hours (70B model)

**Dataset Composition:**
- Não divulgado em detalhe (por segurança)
- Publicly available data
- Mais código que Llama 1
- Upsampled factual sources

**Fine-tuning (Llama 2-Chat):**

**Phase 1: Supervised Fine-Tuning (SFT)**
- 27,540 high-quality examples
- Humanos escreveram respostas ideais
- Focuses: helpfulness, safety

**Phase 2: Reinforcement Learning (RLHF)**
- **5 iterations** de RLHF (não apenas 1!)
- Cada iteração:
  1. Coleta comparisons (100k+)
  2. Treina reward model
  3. PPO optimization
  4. Repete com novo modelo

**Safety Alignment:**
- **Llama 2-Chat é o modelo open-source mais seguro**
- Safety reward model separado
- Adversarial testing (red teaming)
- < 1% unsafe responses

**Resultados:**

| Benchmark | Llama 2 70B | GPT-3.5 | PaLM-2 |
|-----------|-------------|---------|---------|
| MMLU | 68.9% | 70.0% | 78.3% |
| HellaSwag | 87.3% | 85.5% | 86.8% |
| HumanEval | 29.9% | 48.1% | - |

**Llama 2-Chat vs ChatGPT (human eval):**
- Helpfulness: 7.2/10 vs 7.0/10 (tie!)
- Safety: better than ChatGPT em alguns testes

**Licença:**
- **Open commercial license** (grande mudança!)
- Gratuito até 700M users
- Democratiza uso comercial

**Impacto:**
- Alternativa open-source viável ao ChatGPT
- Base de centenas de modelos (Mistral, etc)
- Padrão da indústria (Ollama, LM Studio, etc)

**Por que é essencial:**
- Documenta RLHF completo (5 iterações!)
- Open-source competitive chatbot
- Safety considerations
- Commercial viability

**Para a aula:**
- LEIA: Pre-training + RLHF iterations + Safety + Resultados (50 min)
- USE: Diagramas de RLHF, comparação com ChatGPT, tabelas de safety
- EXPLIQUE: Por que 5 RLHF iterations (vs 1 em InstructGPT)

---

## 24. 2023_Mistral_7B.pdf
**Paper:** Mistral 7B
**Autores:** Albert Jiang et al. (Mistral AI)
**Ano:** 2023 (Outubro)
**Páginas:** 13 páginas
**Importância:** ⭐⭐⭐ HIGHLY INFLUENTIAL (SOTA small model)

### Descrição Detalhada:
Mistral 7B provou que **7B pode superar 13B** com arquitetura certa.

**Claim Principal:**
- **Mistral 7B > Llama 2 13B** em todos os benchmarks
- Melhor model-per-parameter

**Inovações Arquiteturais:**

**1. Grouped-Query Attention (GQA):**
- Reduz KV cache (memory)
- Faster inference que Multi-Head Attention
- Minimal quality loss

**2. Sliding Window Attention (SWA):**
- Attention com window de 4096 tokens
- Reduz compute de O(n²) para O(n×w)
- Cada token atende apenas a 4096 tokens anteriores
- Mas informação propaga por camadas!

**Matemática SWA:**
```
Layer 1: cada token vê 4096 tokens atrás
Layer 2: cada token vê 8192 tokens atrás (indiretamente!)
Layer N: cada token vê N×4096 tokens atrás

32 layers × 4096 = alcance teórico de 131k tokens
```

**Treinamento:**
- Não divulgado em detalhe
- "Trained on diverse data"
- Context: 8k tokens (com SWA)

**Resultados:**

| Benchmark | Mistral 7B | Llama 2 7B | Llama 2 13B |
|-----------|------------|------------|-------------|
| MMLU | 62.5% | 45.3% | 55.0% |
| HellaSwag | 83.3% | 77.2% | 79.2% |
| ARC | 80.0% | 74.5% | 77.3% |
| GSM8K | 52.2% | 14.6% | 28.7% |

**Mistral 7B-Instruct:**
- Fine-tuned version
- Supera Llama 2 13B-Chat

**Eficiência:**
- 2x faster inference que Llama 2 7B
- Menor memory footprint (GQA)

**Impacto:**
- Novo SOTA para 7B models
- Arquitetura influenciou modelos seguintes
- Mistral AI: startup francesa, agora valorizada em $6B

**Limitações:**
- Training details não divulgados
- Sem chat version tão segura quanto Llama 2

**Por que é essencial:**
- Prova: arquitetura > scale
- GQA e SWA são técnicas importantes
- Benchmark para small models

**Para a aula:**
- LEIA: Arquitetura (GQA, SWA) + Resultados (20 min)
- USE: Diagrama de SWA, tabelas comparativas
- EXPLIQUE: Trade-offs SWA (eficiência vs full attention)

---

## 25. 2024_Llama3_Herd_of_Models.pdf
**Paper:** The Llama 3 Herd of Models
**Autores:** Meta AI Team (200+ autores)
**Ano:** 2024 (Julho)
**Páginas:** 92 páginas
**Importância:** ⭐⭐⭐ STATE-OF-THE-ART (open-source frontier)

### Descrição Detalhada:
Llama 3 é o **open-source model mais capaz** (até 2024), com 405B parâmetros.

**Modelos Lançados:**

**Text models:**
- Llama 3.1 8B (substitui 7B)
- Llama 3.1 70B
- **Llama 3.1 405B** (flagship)

**Multimodal models (vision):**
- Llama 3.2 11B Vision
- Llama 3.2 90B Vision

**Pré-treino (405B):**
- **15.6 TRILHÕES de tokens** (record!)
- Context: **128k tokens** (scaling RoPE)
- Training: ~31M GPU-hours (H100)
- Cost estimado: **$50-100 milhões**

**Dataset:**
- Não divulgado em detalhe
- Web (filtrado agressivamente)
- Código (30%+)
- Matemática (synthetic)
- Multilingue (mais línguas que Llama 2)

**Arquitetura:**
- GQA (Grouped-Query Attention)
- RoPE com frequency scaling (para 128k context)
- Standard Transformer (mais parâmetros)

**Post-Training:**
- **SFT:** 10M+ instruction examples
- **DPO** (não RLHF!): preference optimization direta
- 6 rounds de refinement
- Safety: adversarial testing em escala

**Resultados (405B):**

| Benchmark | Llama 3.1 405B | GPT-4 | Claude 3.5 |
|-----------|----------------|-------|------------|
| MMLU | 87.3% | 86.4% | 88.7% |
| GPQA | 51.1% | 50.6% | 59.4% |
| HumanEval | 89.0% | 90.2% | 92.0% |
| GSM8K | 96.8% | 95.3% | 96.4% |
| MATH | 73.8% | 64.5% | 71.1% |

**Capacidades Emergentes:**
- **128k context:** processa livros inteiros
- **Multilingue:** 8 línguas principais
- **Tool use:** function calling, agents
- **Reasoning:** competitivo com GPT-4

**Llama 3.1 70B:**
- **Supera GPT-3.5 Turbo** em quase tudo
- Viável para deployment (vs 405B)
- Sweet spot: performance vs cost

**Open Weights:**
- **Totalmente open-source** (pesos, código, datasets parciais)
- Licença permissiva (commercial use)
- Maior democratização

**Impacto:**
- Primeiro open model a competir com GPT-4
- Prova: open-source pode alcançar frontier
- Base para próxima geração (Llama 4?)

**Por que é essencial:**
- State-of-the-art open-source
- Documenta treinamento em escala (405B, 15T tokens)
- Usa DPO (não RLHF)
- Mostra que open pode competir

**Para a aula:**
- LEIA: Pre-training + Post-training (DPO) + Resultados (60 min - paper longo)
- USE: Scaling plots, comparação com GPT-4, tabelas de resultados
- EXPLIQUE: Por que DPO (vs RLHF do Llama 2)

---

## 26. 2024_Phi3_Highly_Capable_Small_Model.pdf
**Paper:** Phi-3 Technical Report: A Highly Capable Language Model Locally on Your Phone
**Autores:** Microsoft Research (Marah Abdin et al.)
**Ano:** 2024 (Abril)
**Páginas:** 22 páginas
**Importância:** ⭐⭐ PRACTICAL (small but mighty)

### Descrição Detalhada:
Phi-3 mostra que **data quality > size**: 3.8B que compete com 7-13B models.

**Filosofia:**
- Small Language Models (SLMs) para edge devices
- **Data quality matters more than quantity**
- Synthetic data de alta qualidade

**Modelos:**
- **Phi-3-mini:** 3.8B params, 3.3T tokens
- **Phi-3-small:** 7B params, 4.8T tokens
- **Phi-3-medium:** 14B params, 4.8T tokens

**Foco: Phi-3-mini (3.8B)**

**Dataset (não público):**
- **Heavily filtered web data:** qualidade > quantidade
- **Synthetic data gerado por LLMs:** reasoning, code, math
- "Textbook quality": dados didáticos, estruturados
- Multilingual

**Resultados (Phi-3-mini 3.8B):**

| Benchmark | Phi-3-mini | Llama 3 8B | Mistral 7B | GPT-3.5 |
|-----------|------------|------------|------------|---------|
| MMLU | 69% | 66% | 62% | 70% |
| HellaSwag | 76% | 82% | 83% | - |
| HumanEval | 59% | 62% | 40% | 48% |
| GSM8K | 83% | 79% | 52% | 57% |
| MT-Bench | 8.38 | - | - | ~8.0 |

**Phi-3-mini compete com Llama 3 8B e Mixtral 8x7B!**

**Deployment:**
- **3.8B roda em smartphones** (quantizado para 4-bit: ~2GB)
- iPhone 14: inference em tempo real
- Edge devices (IoT)

**Use Cases:**
- Personal assistants (privacy: on-device)
- Offline applications
- Low-latency requirements

**Limitações:**
- Factual knowledge menor que modelos grandes
- Context: 4k tokens (vs 128k do Llama 3)
- Alguns tasks complexos: below 7-13B models

**Por que é relevante:**
- Prova: data quality > model size
- SLMs são viáveis (não apenas LLMs)
- Future: edge AI
- Synthetic data de LLMs para treinar smaller models

**Para a aula:**
- LEIA: Data quality approach + Resultados + Deployment (20 min)
- USE: Comparação de performance vs size, use cases
- EXPLIQUE: Trade-offs SLMs vs LLMs

---

# 📚 COMO USAR ESTE ÍNDICE

## Para Preparação Rápida (2-3 horas):

**Leia estes 5 papers (ordem):**
1. GPT-1 (2018) - Fundação do pré-treino generativo
2. InstructGPT (2022) - RLHF e ChatGPT
3. LoRA (2021) - Fine-tuning eficiente
4. DPO (2023) - Simplificação do RLHF
5. Llama 2 (2023) - Open-source completo

**Total:** ~2h30 de leitura focada

---

## Para Preparação Completa (1-2 semanas):

**Semana 1: Fundamentos**
- Dia 1-2: Pré-treino (GPT-1, GPT-2, GPT-3, Scaling Laws)
- Dia 3-4: Datasets (The Pile, Common Corpus, Datasets Survey)
- Dia 5-6: Open-source (Llama 1, Llama 2)

**Semana 2: Fine-tuning**
- Dia 7-8: RLHF (PPO, InstructGPT, RLHF Survey)
- Dia 9-10: Alternatives (DPO, RLAIF, Constitutional AI)
- Dia 11-12: Efficiency (LoRA, QLoRA)
- Dia 13-14: State-of-the-art (Llama 3, Mistral, Phi-3)

---

## Por Tópico Específico:

**Pré-treino:**
- Papers: 6-11 (GPTs, Scaling Laws, Datasets)
- Surveys: 1, 3

**Fine-tuning:**
- Papers: 12-21
- Surveys: 2, 4, 5

**Open-source models:**
- Papers: 22-26

**Alignment:**
- Papers: 14 (InstructGPT), 15 (Constitutional AI), 18 (DPO), 20 (RLAIF)
- Surveys: 2, 4, 5

**Efficiency:**
- Papers: 13 (LoRA), 19 (QLoRA)

---

## Estrutura de Aula Sugerida (120 min):

**Módulo 1: Pré-treino (35 min)**
- História: GPT-1 → GPT-2 → GPT-3
- Scaling laws
- Datasets (The Pile, Common Corpus)

**Módulo 2: Fine-tuning Methods (50 min)**
- SFT básico
- RLHF pipeline (InstructGPT)
- Alternatives: DPO, RLAIF, Constitutional AI
- Efficiency: LoRA, QLoRA

**Módulo 3: Open-source Revolution (25 min)**
- Llama series (1, 2, 3)
- Mistral 7B
- Phi-3

**Módulo 4: Q&A e Discussão (10 min)**

---

## Figuras Imprescindíveis para Slides:

1. **GPT-1:** Arquitetura de pre-training + fine-tuning
2. **Scaling Laws:** Gráficos de power laws (loss vs params)
3. **InstructGPT:** Pipeline de 3 steps (SFT → RM → PPO)
4. **LoRA:** Diagrama de low-rank adaptation
5. **DPO:** Comparação RLHF vs DPO (simplificação)
6. **Llama 3:** Tabelas de resultados vs GPT-4
7. **The Pile:** Composição dos 22 subconjuntos

---

## Conceitos-Chave para Cobrir:

✓ Generative pre-training
✓ Next token prediction
✓ Scaling laws (power laws)
✓ Training datasets (The Pile, etc)
✓ Supervised Fine-Tuning (SFT)
✓ Instruction tuning
✓ RLHF pipeline (3 steps)
✓ PPO (Proximal Policy Optimization)
✓ Reward modeling
✓ DPO (Direct Preference Optimization)
✓ RLAIF (RL from AI Feedback)
✓ Constitutional AI
✓ LoRA (Low-Rank Adaptation)
✓ QLoRA (Quantized LoRA)
✓ Alignment tax
✓ Catastrophic forgetting
✓ Zero-shot, few-shot, in-context learning
✓ Emergent capabilities

---

## Estatísticas Importantes:

- GPT-1: 117M params, 1GB de texto
- GPT-2: 1.5B params, 40GB de texto
- GPT-3: 175B params, 300B tokens, $4.6M treino
- Llama 1: até 65B params, 1.4T tokens
- Llama 2: até 70B params, 2T tokens
- Llama 3: até 405B params, 15.6T tokens (!!)
- The Pile: 825GB, 22 subconjuntos
- InstructGPT: 13k SFT examples, 33k comparisons
- LoRA: 10,000x menos parâmetros treináveis
- QLoRA: Fine-tune 65B em 48GB GPU

---

Última atualização: 31 de outubro de 2025
Compilado por: Claude Code (Anthropic)
