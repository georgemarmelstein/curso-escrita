# 📄 ÍNDICE COMPLETO DE PDFs - AULA 4: CONHECIMENTO DA MÁQUINA

**Total de PDFs:** 37 papers científicos

**Distribuição:**
- 5 Surveys de 2024-2025
- 18 Papers de 2025
- 3 Papers sobre RAG
- 11 Papers Fundamentais (2019-2024)

**Data de download:** 31 de outubro de 2025

---

## 📊 RESUMO EXECUTIVO

Esta coleção aborda **conhecimento em LLMs**, incluindo:
- **Conhecimento Paramétrico:** Conhecimento armazenado nos pesos do modelo
- **Conhecimento Externo:** RAG, knowledge graphs, retrieval
- **Knowledge Editing:** Modificação de conhecimento factual sem re-treinamento
- **Knowledge Localization:** Onde o conhecimento é armazenado (neurons, layers)
- **Knowledge Conflicts:** Conflitos entre conhecimento interno e externo
- **Memorização vs. Generalização:** Como LLMs armazenam e recuperam conhecimento

---

## 📚 SURVEYS DE 2024-2025

### 1. 2025_Survey_LLM_Inference_External_Knowledge.pdf
**Título:** LLM Inference Enhanced by External Knowledge: A Survey

**ArXiv:** 2505.24377

**Data:** Maio 2025

**Descrição:**
Survey sistemático sobre estratégias para usar conhecimento externo para melhorar LLMs, abordando limitações de memória paramétrica e suscetibilidade a alucinações.

**Taxonomia proposta:**
- Conhecimento externo estruturado vs não-estruturado
- Tabelas: reasoning simbólico, neural, híbrido
- Knowledge Graphs: loose coupling vs tight coupling

**Relevância para Aula 4:**
**ESSENCIAL** - Fornece taxonomia completa de conhecimento externo e métodos de integração com conhecimento paramétrico.

---

### 2. 2024_Survey_Knowledge_Editing_LLMs.pdf
**Título:** Knowledge Editing for Large Language Models: A Survey

**ArXiv:** 2310.16218 (versão 4, atualizada até 2024)

**Data:** Outubro 2024 (v4)

**Descrição:**
Survey abrangente sobre Knowledge-based Model Editing (KME), categorizando técnicas em três grupos: external memorization, global optimization, e local modification.

**Métodos cobertos:**
- ROME (Rank-One Model Editing)
- MEMIT (Mass-Editing Memory in Transformer)
- SERAC, GRACE, WISE, AlphaEdit
- Fine-tuning approaches

**Desafios discutidos:**
- Locality (não afetar conhecimento não-relacionado)
- Generalization (generalizar edição)
- Scalability (escalar para milhares de edições)

**Relevância para Aula 4:**
**ESSENCIAL** - Principal survey sobre knowledge editing, conceito central da aula.

---

### 3. 2024_Survey_Knowledge_Boundary_LLMs.pdf
**Título:** Knowledge Boundary of Large Language Models: A Survey

**ArXiv:** 2412.12472

**Data:** Dezembro 2024

**Descrição:**
Define fronteiras de conhecimento em LLMs através de três dimensões: Universal Knowledge Boundary (conhecimento expressável em QA), Parametric Knowledge Boundary (conhecimento nos parâmetros), e Outward Knowledge Boundary (empiricamente validado).

**Taxonomia:**
Categoriza conhecimento em 4 tipos distintos baseado nas fronteiras

**Lentes de análise:**
- Motivação para estudar fronteiras de conhecimento
- Métodos para identificar fronteiras
- Estratégias para mitigar desafios

**Relevância para Aula 4:**
Framework conceitual importante para entender limites do conhecimento em LLMs.

---

### 4. 2025_Survey_Domain_Specific_Knowledge_Injection.pdf
**Título:** Injecting Domain-Specific Knowledge into Large Language Models: A Comprehensive Survey

**ArXiv:** 2502.10708

**Data:** Fevereiro 2025

**Descrição:**
Survey sobre métodos de injeção de conhecimento específico de domínio (healthcare, chemistry, legal) em LLMs.

**Quatro abordagens principais:**
1. **Dynamic knowledge injection:** Conhecimento injetado dinamicamente durante inferência
2. **Static knowledge embedding:** Conhecimento embutido estaticamente nos pesos
3. **Modular adapters:** Módulos especializados adicionados ao modelo
4. **Prompt optimization:** Otimização de prompts para elicitar conhecimento

**Relevância para Aula 4:**
Mostra como conhecimento especializado pode ser injetado em LLMs de diversas formas.

---

### 5. 2025_Survey_Knowledge_Representation_Learning.pdf
**Título:** Large Language Model Enhanced Knowledge Representation Learning: A Survey

**ArXiv:** 2407.00936

**Data:** Julho 2024/2025 (atualizado)

**Publicação:** Data Science and Engineering, Volume 10, 2025

**Descrição:**
Survey sobre como LLMs melhoram Knowledge Representation Learning (KRL), que projeta fatos de Knowledge Graphs em espaços vetoriais.

**Três abordagens:**
- **Encoder-based:** Contextual information detalhada
- **Encoder-decoder:** Unified Seq2Seq model
- **Decoder-based:** Extensive knowledge from large corpora

**Problemas abordados:**
- KRL sofre de sparsity em KGs
- LLMs incorporam informação textual para mitigar esparsidade

**Relevância para Aula 4:**
Conecta conhecimento estruturado (KGs) com conhecimento paramétrico (LLMs).

---

## 🔬 PAPERS DE 2025

### 6. 2025_Rethinking_Parametric_Knowledge.pdf
**Título:** Rethinking LLM Parametric Knowledge as Post-retrieval Confidence

**ArXiv:** 2509.06472

**Data:** Setembro 2025

**Descrição:**
Categoriza conhecimento paramétrico em três tipos:

1. **Prompt-agnostic Knowledge:** Corretamente respondível independentemente da formulação do prompt
2. **Prompt-sensitive Knowledge:** Respondível apenas sob estratégias específicas de prompting
3. **Unanswerable Knowledge:** Incapaz de resposta correta sob qualquer prompt

**Contribuição principal:**
Propõe usar conhecimento paramétrico como confiança pós-retrieval para retrieval dinâmico e reranking.

**Relevância para Aula 4:**
**IMPORTANTE** - Diferencia tipos de conhecimento paramétrico e como usar essa diferenciação.

---

### 7. 2025_ParamMute_Knowledge_Critical_FFNs.pdf
**Título:** ParamMute: Suppressing Knowledge-Critical FFNs for Faithful RAG

**ArXiv:** 2502.15543

**Data:** Fevereiro 2025 (também conhecido como PIP-KAG)

**Descrição:**
Identifica que feed-forward networks (FFNs) em camadas médio-profundas são desproporcionalmente ativadas em casos de geração não-fiel (unfaithful) em RAG.

**Método proposto:**
Parametric Pruning: poda conhecimento interno de LLMs e incorpora módulo de adaptação para melhor uso de fontes externas.

**Problema abordado:**
Conhecimento interno pode conflitar com conhecimento externo, causando degradação de performance em RAG.

**Relevância para Aula 4:**
Localiza onde conhecimento é ativado e como suprimir conflitos.

---

### 8. 2025_Bridging_External_Parametric_Knowledge.pdf
**Título:** Bridging External and Parametric Knowledge: Mitigating Hallucination with Shared-Private Semantic Synergy (DSSP-RAG)

**ArXiv:** 2506.06240

**Data:** Junho 2025

**Descrição:**
Propõe framework DSSP-RAG que refina self-attention em mixed-attention, distinguindo semântica compartilhada e privada para integração controlada de conhecimento interno-externo.

**Problema:**
Conhecimento externo pode conflitar com conhecimento paramétrico; LLMs atuais não têm mecanismos inerentes para resolver tais conflitos.

**Solução:**
Separação explícita de conhecimento shared (compartilhado) vs private (específico de fonte).

**Relevância para Aula 4:**
**IMPORTANTE** - Aborda conflitos de conhecimento, tema central da aula.

---

### 9. 2025_Parameters_vs_Context_Knowledge_Reliance.pdf
**Título:** Parameters vs. Context: Fine-Grained Control of Knowledge Reliance in Language Models (CK-PLUG)

**ArXiv:** 2503.15888

**Data:** Março 2025

**Descrição:**
Conflitos entre conhecimento paramétrico e contexto retrieved representam desafios quando informação retrieved é não-confiável ou conhecimento do modelo está desatualizado.

**Método proposto:**
- **Confidence Gain:** Métrica de consistência de conhecimento que detecta conflitos medindo shifts de entropia em distribuições de tokens após inserção de contexto.

**Aplicação:**
Permite LLM decidir dinamicamente quando confiar em parâmetros vs. contexto.

**Relevância para Aula 4:**
Quantifica conflitos de conhecimento e permite controle fino de reliance.

---

### 10. 2025_Training_Dynamics_Parametric_InContext.pdf
**Título:** Training Dynamics of Parametric and In-Context Knowledge Utilization

**ArXiv:** 2510.02370

**Data:** Outubro 2025

**Descrição:**
LLMs frequentemente encontram conflitos entre in-context knowledge (retrieved em inference) e parametric knowledge (adquirido em pretraining).

**Descobertas:**
- Treinamento em corpora com informação inconsistente ou distributional skew encoraja modelos a desenvolver estratégias robustas para usar ambos tipos de conhecimento.
- Revela dinâmicas de treinamento que levam a diferentes estratégias de utilização de conhecimento.

**Relevância para Aula 4:**
Explica como conhecimento paramétrico e contextual interagem durante treinamento.

---

### 11. 2025_Knowledge_Injection_Low_Resource.pdf
**Título:** Comparing Knowledge Injection Methods for LLMs in a Low-Resource Regime

**ArXiv:** 2508.06178

**Data:** Agosto 2025

**Descrição:**
Investiga atualização de LLMs com apenas poucos milhares ou milhões de tokens (low-resource regime).

**Descobertas:**
- Simplesmente continuar pretraining em dados limitados resulta em melhorias modestas
- Expor modelo a variações textuais diversas melhora significativamente aprendizado de novos fatos

**Métodos comparados:**
- Continued pretraining
- Synthetic data augmentation
- Prompt-based learning

**Relevância para Aula 4:**
Prático para injetar conhecimento especializado sem recursos massivos.

---

### 12. 2025_MEGa_Memory_Embedded_Gated_LLMs.pdf
**Título:** Memorization and Knowledge Injection in Gated LLMs (MEGa)

**ArXiv:** 2504.21239

**Data:** Abril 2025

**Descrição:**
Introduz MEGa (Memory Embedded in Gated LLMs), que injeta event memories diretamente nos pesos de LLMs.

**Método:**
Cada memória armazenada em conjunto dedicado de gated low-rank weights.

**Vantagem:**
Permite adição incremental de memórias sem interferir em conhecimento existente.

**Relevância para Aula 4:**
Abordagem modular para injeção de conhecimento.

---

### 13. 2025_Right_for_Right_Reasons_Commonsense.pdf
**Título:** Right for Right Reasons: LLMs for Verifiable Commonsense Knowledge Graph QA

**ArXiv:** 2403.01390

**Data:** Março 2025

**Descrição:**
Métodos baseados em LLM para KGQA (Knowledge Graph Question Answering) lutam com alucinação em perguntas de common sense.

**Método proposto (R3):**
Right for Right Reasons - metodologia que permite reasoning verificável ao axiomaticamente surfacear conhecimento de common sense intrínseco de LLMs e fundamentar cada passo de raciocínio factual em triplas de KG.

**Relevância para Aula 4:**
Combina conhecimento paramétrico (common sense) com conhecimento estruturado (KG).

---

### 14. 2025_WorldLLM_World_Modeling.pdf
**Título:** WorldLLM: Improving LLMs' world modeling using curiosity-driven theory-making

**ArXiv:** 2506.06725

**Data:** Junho 2025

**Descrição:**
Framework que melhora world modeling em LLMs combinando Bayesian inference e autonomous active exploration com reinforcement learning.

**Abordagem:**
Usa in-context learning abilities de LLMs para guiar predições usando natural language hypotheses.

**Relevância para Aula 4:**
Conhecimento de "mundo" (world knowledge) é tipo de conhecimento paramétrico.

---

### 15. 2025_LLMs_as_Commonsense_Heuristics.pdf
**Título:** Large Language Models as Common-Sense Heuristics

**ArXiv:** 2501.18816

**Data:** Janeiro 2025

**Descrição:**
Método de planejamento que leverages conhecimento parametrizado de LLMs usando output como heurística para Hill-Climbing Search.

**Resultados:**
Supera sistemas similares em household environments por 22 pontos percentuais.

**Relevância para Aula 4:**
Conhecimento de common sense como tipo de conhecimento paramétrico.

---

### 16. 2025_BaFT_Basis_Level_Knowledge_Editing.pdf
**Título:** Unlocking Efficient, Scalable, and Continual Knowledge Editing with Basis-Level Representation Fine-Tuning (BaFT)

**ArXiv:** 2503.00306

**Data:** Março 2025

**Descrição:**
Métodos projetados para atualizar certo conhecimento em LLMs sem mudar outros (unrelated).

**Desafio:**
Editing-locality trade-off

**Método proposto:**
BaFT (Basis-Level Representation Fine-Tuning) para knowledge editing eficiente e escalável.

**Relevância para Aula 4:**
Técnica estado-da-arte para knowledge editing.

---

### 17. 2025_Knowledge_Updating_Contextual_Reasoning.pdf
**Título:** Knowledge Updating? No More Model Editing! Just Selective Contextual Reasoning

**ArXiv:** 2503.05212

**Data:** Março 2025

**Descrição:**
Categoriza métodos de model editing em cinco tipos principais:

1. **Locate-then-edit methods** (ROME, MEMIT)
2. **Meta-learning based methods**
3. **Fine-tuning methods**
4. **External memory-based methods** (SERAC)
5. **Representation editing methods**

**Argumento:**
Selective contextual reasoning pode ser mais efetivo que model editing para knowledge updating.

**Relevância para Aula 4:**
Oferece taxonomia de métodos e perspectiva alternativa.

---

### 18. 2025_Editing_as_Unlearning.pdf
**Título:** Editing as Unlearning: Are Knowledge Editing Methods Strong Baselines for LLM Unlearning?

**ArXiv:** 2505.19855

**Data:** Maio 2025

**Descrição:**
Avalia métodos estado-da-arte de editing incluindo ROME, MEMIT, GRACE, WISE, e AlphaEdit.

**Descoberta:**
Certos métodos de editing, notadamente WISE e AlphaEdit, são baselines efetivos para unlearning.

**Relevância para Aula 4:**
Conecta knowledge editing com machine unlearning.

---

### 19. 2025_Analyzing_Memorization_Model_Attribution.pdf
**Título:** Analyzing Memorization in LLMs through the Lens of Model Attribution

**ArXiv:** 2501.05078

**Data:** Janeiro 2025

**Descrição:**
Fornece framework teórico mostrando que memorização em LLMs primariamente origina de attention modules em camadas transformer profundas.

**Contribuição:**
Localiza onde memorização ocorre na arquitetura.

**Relevância para Aula 4:**
Memorização é forma de conhecimento paramétrico; localização é importante.

---

### 20. 2025_Memorization_Intrinsic_Dimension.pdf
**Título:** Memorization in Language Models through the Lens of Intrinsic Dimension

**ArXiv:** 2506.09591

**Data:** Junho 2025

**Descrição:**
Liga memorização a generalização, particularmente para dados com long-tailed distributions onde memorização pode servir como inductive bias.

**Relevância para Aula 4:**
Teoriza sobre relação entre memorização e generalização.

---

### 21. 2025_LLM_Knowledge_Graph_Construction.pdf
**Título:** LLM-empowered knowledge graph construction: A survey

**ArXiv:** 2510.20345

**Data:** Outubro 2025

**Descrição:**
Survey abrangente analisando como LLMs remodelam pipeline clássico de três camadas: ontology engineering, knowledge extraction, e knowledge fusion.

**Tendências chave:**
- KG-based reasoning para LLMs
- Dynamic knowledge memory para agentic systems
- Multimodal KG construction

**Relevância para Aula 4:**
LLMs constroem knowledge graphs a partir de conhecimento paramétrico.

---

### 22. 2025_Optimizing_KG_LLM_Interface.pdf
**Título:** Optimizing the Interface Between Knowledge Graphs and LLMs for Complex Reasoning

**ArXiv:** 2505.24478

**Data:** Maio 2025

**Descrição:**
Estuda integração de LLMs com Knowledge Graphs, notando que tais sistemas têm numerosos hyperparameters que afetam diretamente performance.

**Benchmarks usados:**
HotPotQA, TwoWikiMultiHop, MuSiQue

**Parâmetros otimizados:**
Chunking, graph construction, retrieval, prompting

**Relevância para Aula 4:**
Prática de integração conhecimento externo (KG) com paramétrico (LLM).

---

### 23. 2024_Knowledge_Graphs_LLMs_Hallucinations.pdf
**Título:** Knowledge Graphs, Large Language Models, and Hallucinations: An NLP Perspective

**ArXiv:** 2411.14258

**Data:** Novembro 2024

**Descrição:**
Perspectiva NLP sobre como knowledge graphs podem mitigar alucinações em LLMs ao fornecer conhecimento factual estruturado.

**Relevância para Aula 4:**
Conecta limitações de conhecimento paramétrico com soluções baseadas em conhecimento externo.

---

## 📊 PAPERS SOBRE RAG

### 24. 2025_Survey_RAG_Comprehensive.pdf
**Título:** Retrieval-Augmented Generation: A Comprehensive Survey

**ArXiv:** 2506.00054

**Data:** Junho 2025

**Descrição:**
Survey abrangente oferecendo taxonomia que categoriza arquiteturas em retriever-centric, generator-centric, hybrid, e robustness-oriented designs.

**Análise sistemática:**
- Retrieval optimization
- Context filtering
- Decoding control
- Efficiency improvements

**Frameworks de avaliação:**
Revisa state-of-the-art evaluation frameworks e benchmarks.

**Relevância para Aula 4:**
**ESSENCIAL** - RAG é principal método de conhecimento externo. Survey completo.

---

### 25. 2025_Survey_Knowledge_Oriented_RAG.pdf
**Título:** A Survey on Knowledge-Oriented Retrieval-Augmented Generation

**ArXiv:** 2503.10677

**Data:** Março 2025

**Descrição:**
Examina potencial de RAG para melhorar natural language understanding combinando large-scale retrieval systems com generative models.

**Fontes de conhecimento:**
Documents, databases, structured data

**Relevância para Aula 4:**
Foco específico em conhecimento em RAG.

---

### 26. 2025_Survey_Agentic_RAG.pdf
**Título:** Agentic Retrieval-Augmented Generation: A Survey

**ArXiv:** 2501.09136

**Data:** Janeiro 2025

**Descrição:**
Agentic RAG transcende limitações tradicionais ao embeber autonomous AI agents no pipeline de RAG.

**Agentic design patterns:**
- Reflection
- Planning
- Tool use
- Multiagent collaboration

**Relevância para Aula 4:**
Evolução de RAG com agentes autônomos.

---

## 📖 PAPERS FUNDAMENTAIS (2019-2024)

### 27. 2019_LAMA_Language_Models_as_Knowledge_Bases.pdf
**Título:** Language Models as Knowledge Bases?

**Autores:** Petroni et al.

**Publicação:** EMNLP 2019

**Descrição:**
**PAPER SEMINAL** que introduziu LAMA benchmark para probing de conhecimento factual e common sense em pretrained language models.

**Método:**
Usa masked sentences como "Paris is the capital of [MASK]" como probes ao invés de structural KB queries.

**Tipos de conhecimento testados:**
- Relações entre entidades (Wikidata)
- Relações de common sense (ConceptNet)
- Conhecimento necessário para QA (SQuAD)

**Relevância para Aula 4:**
**ESSENCIAL** - Paper fundacional sobre knowledge probing em LLMs. Leitura obrigatória.

---

### 28. 2020_RAG_Original_Paper.pdf
**Título:** Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks

**Autores:** Lewis et al.

**ArXiv:** 2005.11401

**Publicação:** NeurIPS 2020

**Descrição:**
**PAPER ORIGINAL de RAG** - Explora fine-tuning recipe para retrieval-augmented generation, modelos que combinam parametric e non-parametric memory.

**Contribuição:**
- Combina pre-trained parametric memory (seq2seq model) com non-parametric memory (Wikipedia via dense vector index)
- Estado-da-arte em three open domain QA tasks

**Relevância para Aula 4:**
**ESSENCIAL** - Paper seminal de RAG, método principal de conhecimento externo.

---

### 29. 2021_Knowledge_Neurons_Pretrained_Transformers.pdf
**Título:** Knowledge Neurons in Pretrained Transformers

**Autores:** Dai et al.

**ArXiv:** 2104.08696

**Publicação:** ACL 2022

**Descrição:**
Introduz conceito de **knowledge neurons** - neurônios individuais em MLP layers que encodam fatos individuais.

**Método proposto:**
Knowledge attribution method para identificar neurons que expressam fatos específicos.

**Descoberta:**
Ativação de knowledge neurons é positivamente correlacionada à expressão de seus fatos correspondentes.

**Aplicação:**
Permite editar (update, erase) conhecimento factual específico sem fine-tuning.

**Relevância para Aula 4:**
**ESSENCIAL** - Localiza conhecimento em neurons específicos. Fundamental para knowledge editing.

---

### 30. 2022_ROME_Locating_Editing_Factual_Associations.pdf
**Título:** Locating and Editing Factual Associations in GPT (ROME)

**Autores:** Meng et al.

**ArXiv:** 2202.05262

**Publicação:** NeurIPS 2022

**Descrição:**
Analisa storage e recall de factual associations em autoregressive transformer LMs.

**Descoberta principal:**
Associações factuais correspondem a computações localizadas, diretamente editáveis em:
1. MLP module parameters
2. Range de middle layers
3. Especificamente durante processamento do last token do subject

**Método proposto:**
**ROME** (Rank-One Model Editing) - modifica feed-forward weights para atualizar associações factuais específicas.

**Relevância para Aula 4:**
**ESSENCIAL** - Método fundacional de knowledge editing. Base para MEMIT e outros.

---

### 31. 2022_MEMIT_Mass_Editing_Memory.pdf
**Título:** Mass-Editing Memory in a Transformer (MEMIT)

**Autores:** Meng et al.

**ArXiv:** 2210.07229

**Publicação:** ICLR 2023

**Descrição:**
Método para atualizar diretamente language model com muitas memórias simultaneamente.

**Escalabilidade:**
Demonstra experimentalmente que pode escalar para **milhares de associações** para GPT-J (6B) e GPT-NeoX (20B), excedendo trabalhos anteriores por ordens de magnitude.

**Contribuição:**
Modifica transformer weights para editar memórias mantendo generalization, specificity, e fluency em escalas além de outros métodos.

**Relevância para Aula 4:**
Extensão escalável de ROME. Permite knowledge editing em massa.

---

### 32. 2022_Quantifying_Memorization_NLMs.pdf
**Título:** Quantifying Memorization Across Neural Language Models

**ArXiv:** 2202.07646

**Data:** 2022

**Descrição:**
Mostra que large language models memorizam partes de seus dados de treinamento e emitem training data memorizado verbatim quando prompted apropriadamente.

**Contribuição:**
Métodos para quantificar memorização.

**Relevância para Aula 4:**
Memorização é tipo de conhecimento paramétrico.

---

### 33. 2023_SoK_Memorization_LLMs.pdf
**Título:** SoK: Memorization in General-Purpose Large Language Models

**ArXiv:** 2310.18362

**Data:** 2023

**Descrição:**
Propõe taxonomia para memorização em LLMs cobrindo:
- Verbatim text
- Facts
- Ideas and algorithms
- Writing styles
- Distributional properties
- Alignment goals

**Insight:**
Parte importante do sucesso de LLMs é devido a huge training datasets e unprecedented número de model parameters, que permitem memorizar grandes quantidades de informação.

**Relevância para Aula 4:**
Taxonomia abrangente de tipos de memorização/conhecimento.

---

### 34. 2024_Generalization_vs_Memorization.pdf
**Título:** Generalization v.s. Memorization: Tracing Language Models' Capabilities Back to Pretraining Data

**ArXiv:** 2407.14985

**Data:** 2024

**Descrição:**
Demonstra que memorização desempenha papel maior em tarefas simples e knowledge-intensive, enquanto generalização é chave para tarefas de reasoning mais difíceis.

**Descobertas por model size:**
À medida que model size aumenta:
- Apenas factual QA mostra increased memorization
- Machine translation e reasoning tasks exibem greater generalization

**Relevância para Aula 4:**
**IMPORTANTE** - Diferencia quando conhecimento é memorizado vs generalizado.

---

### 35. 2024_Comprehensive_Study_Knowledge_Editing.pdf
**Título:** A Comprehensive Study of Knowledge Editing for Large Language Models

**ArXiv:** 2401.01286

**Data:** 2024 (v4)

**Descrição:**
Estudo abrangente classificando knowledge editing methods em três grupos:

1. **Resorting to external knowledge**
2. **Merging knowledge into the model**
3. **Editing intrinsic knowledge**

**Relevância para Aula 4:**
Taxonomia alternativa de knowledge editing methods.

---

### 36. 2023_KoLA_World_Knowledge_Benchmark.pdf
**Título:** KoLA: Carefully Benchmarking World Knowledge of Large Language Models

**ArXiv:** 2306.09296

**Data:** 2023

**Descrição:**
Constrói benchmark com taxonomia de quatro níveis de knowledge-related abilities, cobrindo 19 tarefas.

**Avalia:**
World knowledge (conhecimento de mundo) em LLMs.

**Relevância para Aula 4:**
Benchmark para avaliar conhecimento paramétrico.

---

### 37. 2023_Unifying_LLMs_Knowledge_Graphs.pdf
**Título:** Unifying Large Language Models and Knowledge Graphs: A Roadmap

**ArXiv:** 2306.08302

**Data:** 2023

**Descrição:**
Propõe roadmap para unificar LLMs e Knowledge Graphs.

**Três frameworks gerais:**
1. **KG-enhanced LLMs:** Incorporar KGs durante pre-training e inference
2. **LLM-augmented KGs:** Usar LLMs para tarefas de KG (embedding, completion)
3. **Synergized LLMs + KGs:** Reasoning bidirecional mutuamente benéfico

**Relevância para Aula 4:**
Framework conceitual para integração conhecimento paramétrico e estruturado.

---

## 📖 COMO USAR ESTA COLEÇÃO

### Para Preparação Rápida da Aula (2-3 horas):

**Prioridade 1 - Conceitos Essenciais:**
1. **2019_LAMA_Language_Models_as_Knowledge_Bases.pdf** (introdução + seção 3) - 20 min
2. **2022_ROME_Locating_Editing_Factual_Associations.pdf** (introdução + método) - 30 min
3. **2020_RAG_Original_Paper.pdf** (introdução + resultados) - 30 min

**Prioridade 2 - Estado da Arte:**
4. **2024_Survey_Knowledge_Editing_LLMs.pdf** (skim seções principais) - 40 min
5. **2025_Survey_LLM_Inference_External_Knowledge.pdf** (taxonomia) - 30 min

**Prioridade 3 - Conflitos de Conhecimento:**
6. **2025_Bridging_External_Parametric_Knowledge.pdf** (seção de conflitos) - 20 min

---

## 🎯 PAPERS POR CONCEITO-CHAVE DA AULA

### Para explicar "Conhecimento Paramétrico":
- ✅ **2019_LAMA_Language_Models_as_Knowledge_Bases.pdf** (ESSENCIAL)
- ✅ **2021_Knowledge_Neurons_Pretrained_Transformers.pdf** (ESSENCIAL)
- ✅ **2025_Rethinking_Parametric_Knowledge.pdf** (três tipos)

### Para explicar "Knowledge Editing":
- ✅ **2024_Survey_Knowledge_Editing_LLMs.pdf** (SURVEY PRINCIPAL)
- ✅ **2022_ROME_Locating_Editing_Factual_Associations.pdf** (ESSENCIAL)
- ✅ **2022_MEMIT_Mass_Editing_Memory.pdf** (escalabilidade)
- ✅ **2025_BaFT_Basis_Level_Knowledge_Editing.pdf** (estado-da-arte)

### Para explicar "Conhecimento Externo / RAG":
- ✅ **2020_RAG_Original_Paper.pdf** (PAPER ORIGINAL)
- ✅ **2025_Survey_RAG_Comprehensive.pdf** (survey completo)
- ✅ **2025_Survey_LLM_Inference_External_Knowledge.pdf** (taxonomia)
- ✅ **2025_Survey_Agentic_RAG.pdf** (evoluções recentes)

### Para explicar "Knowledge Conflicts":
- ✅ **2025_Bridging_External_Parametric_Knowledge.pdf** (IMPORTANTE)
- ✅ **2025_Parameters_vs_Context_Knowledge_Reliance.pdf** (controle fino)
- ✅ **2025_Training_Dynamics_Parametric_InContext.pdf** (dinâmicas)
- ✅ **2025_ParamMute_Knowledge_Critical_FFNs.pdf** (localização de conflitos)

### Para explicar "Memorização vs. Generalização":
- ✅ **2024_Generalization_vs_Memorization.pdf** (IMPORTANTE)
- ✅ **2022_Quantifying_Memorization_NLMs.pdf** (quantificação)
- ✅ **2023_SoK_Memorization_LLMs.pdf** (taxonomia)
- ✅ **2025_Analyzing_Memorization_Model_Attribution.pdf** (localização)

### Para explicar "Knowledge Localization":
- ✅ **2021_Knowledge_Neurons_Pretrained_Transformers.pdf** (ESSENCIAL)
- ✅ **2022_ROME_Locating_Editing_Factual_Associations.pdf** (ESSENCIAL)
- ✅ **2025_ParamMute_Knowledge_Critical_FFNs.pdf** (FFNs)

### Para explicar "Knowledge Injection":
- ✅ **2025_Survey_Domain_Specific_Knowledge_Injection.pdf** (survey completo)
- ✅ **2025_Knowledge_Injection_Low_Resource.pdf** (low-resource)
- ✅ **2025_MEGa_Memory_Embedded_Gated_LLMs.pdf** (approach modular)

### Para explicar "Knowledge Graphs + LLMs":
- ✅ **2023_Unifying_LLMs_Knowledge_Graphs.pdf** (roadmap)
- ✅ **2025_LLM_Knowledge_Graph_Construction.pdf** (survey recente)
- ✅ **2025_Optimizing_KG_LLM_Interface.pdf** (otimização prática)

---

## 📊 ESTATÍSTICAS DA COLEÇÃO

**Total de páginas:** ~700+ páginas de conteúdo científico

**Distribuição temporal:**
- 2019: 1 paper (LAMA - seminal)
- 2020: 1 paper (RAG - seminal)
- 2021: 1 paper (Knowledge Neurons - seminal)
- 2022: 3 papers (ROME, MEMIT, Quantifying Memorization)
- 2023: 3 papers (SoK, KoLA, Unifying)
- 2024: 4 papers (Surveys, Generalization vs Memorization)
- 2025: 24 papers (estado da arte)

**Papers MAIS de 2025:** ✅ 24 papers (muito além de "mais de 10")

**Métodos de Knowledge Editing cobertos:**
- ROME (Rank-One Model Editing)
- MEMIT (Mass-Editing Memory)
- GRACE, SERAC, WISE, AlphaEdit
- BaFT (Basis-Level Fine-Tuning)
- ParamMute

**Conceitos cobertos:**
- Parametric knowledge (três tipos)
- External knowledge (RAG, KG)
- Knowledge editing (7+ methods)
- Knowledge localization (neurons, FFNs, layers)
- Knowledge conflicts (parametric vs external)
- Memorization vs generalization
- Knowledge injection (4 approaches)
- Knowledge probing (LAMA)
- World knowledge, common sense

---

## 🎓 ESTRUTURA SUGERIDA PARA A AULA

### Parte 1: Conceitos Fundamentais (25 min)
- O que é conhecimento em LLMs?
- Três tipos de conhecimento:
  - Paramétrico (nos pesos)
  - Contextual (no prompt)
  - Externo (RAG, KG)
- **Papers:** LAMA, Survey External Knowledge

### Parte 2: Conhecimento Paramétrico (30 min)
- Como conhecimento é armazenado nos pesos
- Knowledge neurons e localization
- Três tipos: Prompt-agnostic, Prompt-sensitive, Unanswerable
- Memorização vs. Generalização
- **Papers:** LAMA, Knowledge Neurons, ROME, Rethinking Parametric Knowledge

### Parte 3: Knowledge Editing (30 min)
- Por que editar conhecimento?
- Métodos: ROME, MEMIT, BaFT
- Desafios: Locality, Generalization, Scalability
- **Papers:** Knowledge Editing Survey, ROME, MEMIT

### Parte 4: Conhecimento Externo (25 min)
- RAG: Retrieval-Augmented Generation
- Knowledge Graphs
- Integração LLM + KG
- **Papers:** RAG Original, RAG Survey, Unifying LLMs + KGs

### Parte 5: Knowledge Conflicts (20 min)
- Conflitos paramétrico vs externo
- Como detectar e resolver
- Métodos: DSSP-RAG, CK-PLUG, ParamMute
- **Papers:** Bridging External Parametric, Parameters vs Context

### Parte 6: Knowledge Injection (15 min)
- Como injetar novo conhecimento
- Abordagens: Dynamic, Static, Modular, Prompt
- Low-resource scenarios
- **Papers:** Domain-Specific Knowledge Injection Survey

### Parte 7: Futuro e Implicações (15 min)
- Tendências: Agentic RAG, Multimodal KG
- Desafios abertos
- Implicações práticas

---

**Total:** ~160 minutos (2h40min) - Ajuste conforme necessário

---

## ✅ CHECKLIST DE PREPARAÇÃO

Antes da aula:

- [ ] Ter lido ao menos 5 papers fundamentais
  - [ ] LAMA (2019) - OBRIGATÓRIO
  - [ ] ROME (2022) - OBRIGATÓRIO
  - [ ] RAG (2020) - OBRIGATÓRIO
  - [ ] Knowledge Neurons (2021) - recomendado
  - [ ] Um survey de 2024-2025

- [ ] Ter preparado explicações visuais de:
  - [ ] Três tipos de conhecimento (diagrama)
  - [ ] Knowledge neurons (visualização)
  - [ ] ROME method (diagrama de edição)
  - [ ] RAG pipeline (fluxo)
  - [ ] Knowledge conflicts (exemplo)

- [ ] Ter exemplos práticos prontos:
  - [ ] Fact retrieval de LAMA
  - [ ] Knowledge editing example
  - [ ] RAG vs parametric comparison
  - [ ] Knowledge conflict case

---

**Compilado em:** 31 de outubro de 2025

**Para:** George Marmelstein - Aulas 2025

**Aula:** 4 - Conhecimento da Máquina
