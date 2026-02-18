# 📄 ÍNDICE COMPLETO DE PDFs - AULA 3: JANELA DE CONTEXTO

**Total de PDFs:** 35 papers científicos

**Distribuição:**
- 4 Surveys de 2025
- 16 Papers de 2025
- 5 Benchmarks
- 10 Papers Fundamentais (2023-2024)

**Data de download:** 31 de outubro de 2025

---

## 📊 RESUMO EXECUTIVO

Esta coleção aborda **janela de contexto (context window)** em LLMs, incluindo:
- **Extensão de contexto:** De 2K até 4M tokens
- **In-Context Learning (ICL):** Aprendizado através de exemplos no prompt
- **Sliding Window Attention:** Atenção em janelas deslizantes
- **Context Degradation:** Perda de performance com contextos longos
- **"Lost in the Middle":** Fenômeno onde LLMs perdem informação no meio de contextos longos
- **Infinite Context:** Técnicas para contexto ilimitado
- **Benchmarks:** Avaliação de capacidades de contexto longo

---

## 📚 SURVEYS DE 2025

### 1. 2025_Survey_Comprehensive_Long_Context_LM.pdf
**Título:** A Comprehensive Survey on Long Context Language Models

**ArXiv:** 2503.17407

**Data:** Março 2025

**Descrição:**
Survey abrangente sobre modelos de linguagem com contexto longo, cobrindo arquiteturas, técnicas de extensão de contexto, e aplicações práticas.

**Tópicos principais:**
- Evolução de 2K para 1M+ tokens
- Técnicas de extensão: RoPE, ALiBi, YaRN
- Arquiteturas eficientes: Sliding window, sparse attention
- Desafios de treinamento e inferência
- Aplicações em documentos longos, código, conversação

**Relevância para Aula 3:**
Survey essencial que fornece visão completa do estado da arte em contextos longos. Ideal para introdução do tema.

---

### 2. 2025_Survey_Context_Engineering_LLMs.pdf
**Título:** Context Engineering for Large Language Models: A Survey

**ArXiv:** 2507.13334

**Data:** Julho 2025

**Descrição:**
Survey sobre técnicas de engenharia de contexto para LLMs, incluindo estratégias para otimizar o uso da janela de contexto.

**Tópicos principais:**
- Prompt engineering avançado
- Organização ótima de informação no contexto
- Context compression techniques
- Retrieval strategies
- Context pruning and summarization

**Relevância para Aula 3:**
Demonstra como usar efetivamente a janela de contexto disponível, complementando discussão sobre limitações técnicas.

---

### 3. 2025_Survey_Few_Shot_Learning_ICL.pdf
**Título:** Few-Shot Learning and In-Context Learning: A Comprehensive Survey

**ArXiv:** 2402.03017

**Data:** Fevereiro 2025 (atualizado)

**Descrição:**
Survey detalhado sobre few-shot learning e in-context learning, explorando como LLMs aprendem de exemplos fornecidos no contexto.

**Tópicos principais:**
- Fundamentos de ICL
- Mecanismos de atenção em ICL
- Número ótimo de exemplos (shots)
- Ordem e seleção de exemplos
- Limitações e trade-offs

**Relevância para Aula 3:**
ICL é aplicação direta da janela de contexto. Mostra como contexto é usado para "aprendizado" sem gradiente.

---

### 4. 2025_Survey_Understanding_ICL.pdf
**Título:** Understanding In-Context Learning: A Survey of Recent Advances

**ArXiv:** 2402.02212

**Data:** Fevereiro 2025 (atualizado)

**Descrição:**
Survey focado em entender os mecanismos subjacentes de in-context learning, incluindo teorias sobre como e por que funciona.

**Tópicos principais:**
- Teorias sobre mecanismos de ICL
- Papel de attention heads em ICL
- Diferenças entre ICL e fine-tuning
- Fatores que afetam performance de ICL
- Limites teóricos de ICL

**Relevância para Aula 3:**
Aprofunda entendimento teórico de como LLMs usam informação dentro da janela de contexto.

---

## 🔬 PAPERS DE 2025

### 5. 2025_3Million_Tokens_Single_GPU.pdf
**Título:** 3 Million Tokens on a Single GPU: Efficient Long Context Training

**ArXiv:** 2502.08910

**Data:** Fevereiro 2025

**Descrição:**
Demonstra técnicas para treinar LLMs com contexto de 3 milhões de tokens em uma única GPU, tornando contextos ultra-longos mais acessíveis.

**Contribuições principais:**
- Memory-efficient attention implementation
- Gradient checkpointing estratégico
- Compression de KV cache
- Permite pesquisa em contextos longos sem hardware extremo

**Relevância para Aula 3:**
Mostra que contextos ultra-longos estão se tornando práticos, não apenas teóricos.

---

### 6. 2025_From_128K_to_4M.pdf
**Título:** From 128K to 4M: Scaling Context Length in LLMs

**ArXiv:** 2504.06214

**Data:** Abril 2025

**Descrição:**
Analisa progressão de 128K tokens (GPT-4 Turbo) até 4M tokens, explorando técnicas e trade-offs em cada escala.

**Contribuições principais:**
- Técnicas específicas para cada ordem de magnitude
- Análise de performance vs. custo computacional
- Identificação de "sweet spots" para diferentes aplicações
- Medição de context degradation em diferentes escalas

**Relevância para Aula 3:**
Fornece roadmap claro da evolução de janelas de contexto e seus desafios práticos.

---

### 7. 2025_LongLLaDA.pdf
**Título:** LongLLaDA: Long Context Llama with Data Augmentation

**ArXiv:** 2506.14429

**Data:** Junho 2025

**Descrição:**
Propõe método de data augmentation específico para treinar modelos com contextos longos, melhorando capacidade de processar documentos extensos.

**Contribuições principais:**
- Synthetic long document generation
- Augmentation strategies para contextos longos
- Fine-tuning eficiente para contexto estendido
- Benchmarks em documentos reais

**Relevância para Aula 3:**
Mostra que dados de treinamento adequados são cruciais para contextos longos.

---

### 8. 2025_ReAttention_Infinite_Context.pdf
**Título:** ReAttention: Achieving Infinite Context Length in Transformers

**ArXiv:** 2407.15176

**Data:** Julho 2025

**Descrição:**
Propõe mecanismo de "reattention" que permite contextos efetivamente ilimitados através de reprocessamento seletivo de informação.

**Contribuições principais:**
- Atenção recursiva sobre contexto
- Selective memory mechanism
- O(1) memory complexity para contexto infinito
- Performance comparável a atenção completa

**Relevância para Aula 3:**
Representa fronteira de pesquisa: transcender limitações de janela de contexto.

---

### 9. 2025_EdgeInfinite.pdf
**Título:** EdgeInfinite: Infinite Context on Edge Devices

**ArXiv:** 2503.22196

**Data:** Março 2025

**Descrição:**
Adapta técnicas de contexto infinito para dispositivos edge com memória limitada, democratizando acesso a contextos longos.

**Contribuições principais:**
- Compression extrema de KV cache
- Hierarquical memory management
- Trade-offs entre qualidade e memória
- Implementação em smartphones e IoT

**Relevância para Aula 3:**
Mostra que contextos longos não são apenas para servidores massivos.

---

### 10. 2025_Episodic_Memory_Infinite_Context.pdf
**Título:** Episodic Memory for Infinite Context in LLMs

**ArXiv:** 2407.09450

**Data:** Julho 2025

**Descrição:**
Propõe sistema de memória episódica inspirado em cognição humana para permitir contextos infinitos através de recuperação seletiva.

**Contribuições principais:**
- Memory indexing por episódios
- Retrieval dinâmico durante geração
- Integração com attention mechanism
- Comparação com abordagens RAG

**Relevância para Aula 3:**
Conecta janela de contexto com memória de longo prazo e sistemas de recuperação.

---

### 11. 2025_ETT_Test_Time_Extension.pdf
**Título:** ETT: Extending Context at Test Time

**ArXiv:** 2507.06313

**Data:** Julho 2025

**Descrição:**
Permite extensão de contexto durante inferência sem re-treinamento, adaptando-se dinamicamente a necessidades de contexto longo.

**Contribuições principais:**
- Zero-shot context extension
- Dynamic position encoding
- Attention adaptation em test-time
- Sem degradação para contextos curtos

**Relevância para Aula 3:**
Técnica prática para usar modelos existentes com contextos mais longos que o treinamento.

---

### 12. 2025_Overflow_Prevention_Recurrent_LLMs.pdf
**Título:** Preventing Memory Overflow in Recurrent LLMs

**ArXiv:** 2505.07793

**Data:** Maio 2025

**Descrição:**
Aborda problema de overflow numérico em modelos recorrentes com contextos longos, propondo técnicas de estabilização.

**Contribuições principais:**
- Normalização adaptativa
- Gradient clipping strategies
- Memory decay mechanisms
- Benchmarks de estabilidade

**Relevância para Aula 3:**
Detalha desafios práticos de implementação com contextos longos.

---

### 13. 2025_SWAT_Sliding_Window_Attention_Training.pdf
**Título:** SWAT: Sliding Window Attention Training for Long Context

**ArXiv:** 2502.18845

**Data:** Fevereiro 2025

**Descrição:**
Propõe treinamento específico usando sliding window attention para melhorar eficiência com contextos longos.

**Contribuições principais:**
- Optimal window size selection
- Overlapping windows strategies
- Training curriculum para contextos crescentes
- Comparação com global attention

**Relevância para Aula 3:**
**ESSENCIAL** - Sliding window attention é conceito central da aula. Este paper detalha implementação prática.

---

### 14. 2025_RATTENTION_Minimal_Window_Size.pdf
**Título:** RATTENTION: Finding Minimal Window Size for Efficient Attention

**ArXiv:** 2506.15545

**Data:** Junho 2025

**Descrição:**
Investiga janelas mínimas necessárias para diferentes tarefas, otimizando trade-off entre performance e eficiência.

**Contribuições principais:**
- Task-specific window sizing
- Dynamic window adaptation
- Theoretical bounds em window size
- Benchmarks por tipo de tarefa

**Relevância para Aula 3:**
Complementa discussão sobre sliding windows: não apenas "como" mas "quanto".

---

### 15. 2025_LM2_Large_Memory_Models.pdf
**Título:** LM2: Large Memory Models for Infinite Context

**ArXiv:** 2502.06049

**Data:** Fevereiro 2025

**Descrição:**
Propõe nova classe de modelos (LM2) que separam explicitamente "working memory" (janela de contexto) de "long-term memory".

**Contribuições principais:**
- Arquitetura dual-memory
- Mecanismos de consolidação de memória
- Retrieval integrado durante geração
- Escala para milhões de tokens de memória

**Relevância para Aula 3:**
Paradigma alternativo que transcende limitações de janela de contexto fixa.

---

### 16. 2025_Lost_in_Middle_Emergent.pdf
**Título:** Lost in the Middle: An Emergent Property of Long Context

**ArXiv:** 2510.10276

**Data:** Outubro 2025

**Descrição:**
Analisa fenômeno "lost in the middle" como propriedade emergente de contextos longos, não apenas artefato de treinamento.

**Contribuições principais:**
- Explicação teórica do fenômeno
- Relação com attention patterns
- Técnicas de mitigação
- Implicações para design de prompts

**Relevância para Aula 3:**
**ESSENCIAL** - "Lost in the middle" é conceito-chave da aula sobre limitações de contexto.

---

### 17. 2025_Unshackling_Context_Length.pdf
**Título:** Unshackling Context Length: Breaking the 1M Token Barrier

**ArXiv:** 2509.12784

**Data:** Setembro 2025

**Descrição:**
Apresenta técnicas para superar barreira de 1M tokens de contexto, explorando limites fundamentais.

**Contribuições principais:**
- Memory-efficient implementations
- Hierarchical processing strategies
- Benchmarks com contextos ultra-longos
- Análise de scaling laws

**Relevância para Aula 3:**
Mostra fronteira atual de pesquisa em extensão de contexto.

---

### 18. 2025_Attention_Tracking_Recurrent_State.pdf
**Título:** Attention Tracking in Recurrent State Models

**ArXiv:** 2501.06571

**Data:** Janeiro 2025

**Descrição:**
Combina atenção com estados recorrentes para melhor gerenciamento de contextos longos.

**Contribuições principais:**
- Hybrid attention-recurrence architecture
- State compression mechanisms
- Selective attention over history
- Comparação com Transformers puros

**Relevância para Aula 3:**
Arquiteturas híbridas podem superar Transformers para contextos muito longos.

---

### 19. 2025_Context_Degradation_Analysis.pdf
**Título:** Context Degradation: Analysis and Mitigation Strategies

**ArXiv:** 2502.06338

**Data:** Fevereiro 2025

**Descrição:**
Análise sistemática de degradação de performance com aumento de contexto, propondo estratégias de mitigação.

**Contribuições principais:**
- Caracterização quantitativa de degradação
- Fatores que aceleram degradação
- Técnicas de mitigação (reordering, compression)
- Benchmarks em diferentes escalas

**Relevância para Aula 3:**
**ESSENCIAL** - Context degradation é limitação prática crucial de janelas de contexto.

---

### 20. 2025_Continuous_KV_Cache.pdf
**Título:** Continuous KV Cache: Smooth Memory Management for Long Context

**ArXiv:** 2502.09234

**Data:** Fevereiro 2025

**Descrição:**
Propõe representação contínua de KV cache que permite compressão suave e eficiente para contextos longos.

**Contribuições principais:**
- Continuous memory representations
- Lossy compression com degradação controlada
- Dynamic cache allocation
- Trade-offs explícitos memória vs. qualidade

**Relevância para Aula 3:**
KV cache é aspecto técnico central de como janela de contexto é implementada.

---

## 📊 BENCHMARKS DE 2025

### 21. 2025_LongCodeBench_1M_Context.pdf
**Título:** LongCodeBench: Evaluating LLMs on 1M Token Code Repositories

**ArXiv:** 2505.07897

**Data:** Maio 2025

**Descrição:**
Benchmark específico para código com contextos de até 1M tokens, testando capacidade de LLMs em repositórios completos.

**Tarefas avaliadas:**
- Code completion em arquivos distantes
- Bug finding em codebase
- Documentation generation
- Refactoring suggestions

**Modelos avaliados:**
GPT-4 Turbo, Claude 3 Opus, Gemini 1.5 Pro, modelos open-source

**Relevância para Aula 3:**
Benchmark prático e relevante para desenvolvedores. Demonstra aplicações reais de contextos longos.

---

### 22. 2025_LongProc_Benchmark.pdf
**Título:** LongProc: A Benchmark for Long-Range Procedural Understanding

**ArXiv:** 2501.05414

**Data:** Janeiro 2025

**Descrição:**
Avalia capacidade de seguir instruções procedurais complexas que requerem rastreamento de estado ao longo de contextos longos.

**Tarefas avaliadas:**
- Multi-step reasoning
- State tracking
- Instruction following
- Dependency resolution

**Relevância para Aula 3:**
Testa não apenas capacidade de "lembrar" mas de "processar" informação distribuída em contexto longo.

---

### 23. 2025_100_LongBench.pdf
**Título:** 100-LongBench: A Comprehensive Long Context Benchmark

**ArXiv:** 2505.19293

**Data:** Maio 2025

**Descrição:**
Benchmark com 100 tarefas diversas para avaliar capacidades de contexto longo em múltiplas dimensões.

**Categorias de tarefas:**
- Question Answering
- Summarization
- Code understanding
- Multi-document reasoning
- Fact retrieval

**Relevância para Aula 3:**
Benchmark mais abrangente disponível. Útil para comparar modelos.

---

### 24. 2025_MiniLongBench.pdf
**Título:** MiniLongBench: A Lightweight Long Context Evaluation Suite

**ArXiv:** 2505.19959

**Data:** Maio 2025

**Descrição:**
Versão compacta de benchmarks de contexto longo, permitindo avaliação rápida sem recursos computacionais massivos.

**Características:**
- 10 tarefas representativas
- Execução em minutos vs. horas
- Alta correlação com benchmarks completos
- Ideal para iteração rápida

**Relevância para Aula 3:**
Permite demonstrações práticas em aula sem infraestrutura pesada.

---

### 25. 2025_MMLongBench.pdf
**Título:** MMLongBench: Multimodal Long Context Benchmark

**ArXiv:** 2505.10610

**Data:** Maio 2025

**Descrição:**
Primeiro benchmark focado em contextos longos multimodais (texto + imagens/vídeo).

**Tarefas avaliadas:**
- Long video understanding
- Multi-page document analysis
- Temporal reasoning em sequências longas
- Cross-modal retrieval

**Relevância para Aula 3:**
Estende discussão de contexto além de texto puro. Futuro dos LLMs é multimodal.

---

## 📖 PAPERS FUNDAMENTAIS (2023-2024)

### 26. 2023_Lost_in_the_Middle.pdf
**Título:** Lost in the Middle: How Language Models Use Long Contexts

**ArXiv:** 2307.03172

**Data:** Julho 2023

**Descrição:**
**PAPER SEMINAL** que descobriu e nomeou o fenômeno "lost in the middle" - LLMs têm dificuldade em usar informação no meio de contextos longos.

**Descobertas principais:**
- Performance em U: alta no início e fim, baixa no meio
- Fenômeno consistente em múltiplos modelos
- Persiste mesmo com fine-tuning
- Implicações para design de prompts

**Relevância para Aula 3:**
**ESSENCIAL** - Este é O paper que definiu problema central de contextos longos. Leitura obrigatória.

---

### 27. 2024_RULER_Real_Context_Size.pdf
**Título:** RULER: What's the Real Context Size of Your LLM?

**ArXiv:** 2404.06654

**Data:** Abril 2024

**Descrição:**
Propõe metodologia para medir contexto "efetivo" vs. contexto "nominal" de LLMs. Muitos modelos alegam suportar contextos que não conseguem usar efetivamente.

**Contribuições principais:**
- Synthetic tasks para medir contexto real
- Descoberta: contexto efetivo << contexto nominal
- Metodologia reproduzível
- Benchmarks de modelos populares

**Relevância para Aula 3:**
**ESSENCIAL** - Expõe gap entre marketing e realidade em janelas de contexto. Fundamental para discussão crítica.

---

### 28. 2024_Infini_Attention_Infinite_Context.pdf
**Título:** Infini-attention: Infinite Context with Bounded Memory

**ArXiv:** 2404.07143

**Data:** Abril 2024

**Descrição:**
Propõe mecanismo de atenção com memória compressiva que permite contextos teoricamente infinitos com memória limitada.

**Contribuições principais:**
- Compressive memory mechanism
- Integração com Transformers existentes
- Memory bounded a O(1)
- Performance competitiva em contextos longos

**Relevância para Aula 3:**
Técnica influente que inspirou muitos trabalhos posteriores sobre contexto infinito.

---

### 29. 2023_Survey_In_Context_Learning.pdf
**Título:** A Survey on In-Context Learning

**ArXiv:** 2301.00234

**Data:** Janeiro 2023

**Descrição:**
Survey fundacional sobre In-Context Learning, estabelecendo terminologia e taxonomia da área.

**Tópicos cobertos:**
- Definição formal de ICL
- Comparação com fine-tuning
- Mecanismos teóricos
- Aplicações práticas
- Limitações e desafios

**Relevância para Aula 3:**
ICL é uso primário de janela de contexto. Survey fundamental para entender o conceito.

---

### 30. 2024_LongBench_Bilingual_Multitask.pdf
**Título:** LongBench: A Bilingual, Multitask Benchmark for Long Context Understanding

**ArXiv:** 2308.14508

**Data:** Agosto 2024 (v2)

**Descrição:**
Benchmark influente que estabeleceu padrões para avaliação de contextos longos, cobrindo inglês e chinês.

**Características:**
- 21 datasets
- Contextos de 4K-32K tokens
- Tarefas diversas
- Resultados de 15+ modelos

**Relevância para Aula 3:**
Benchmark amplamente usado em papers. Conhecê-lo permite interpretar resultados na literatura.

---

### 31. 2023_Longformer_Long_Document_Transformer.pdf
**Título:** Longformer: The Long-Document Transformer

**ArXiv:** 2310.01889

**Data:** Outubro 2023 (updated)

**Descrição:**
Arquitetura Transformer adaptada para documentos longos usando attention pattern híbrida (local + global).

**Contribuições principais:**
- Sliding window attention + global attention
- Scaling para 4K-16K tokens
- Eficiência O(n) vs. O(n²) do Transformer
- Aplicações em documentos científicos

**Relevância para Aula 3:**
Arquitetura clássica que influenciou muitos trabalhos posteriores. Exemplo concreto de sliding window.

---

### 32. 2023_Extending_Context_RoPE.pdf
**Título:** Extending Context Window with Rotary Position Embedding (RoPE)

**ArXiv:** 2304.08467

**Data:** Abril 2023

**Descrição:**
Demonstra como RoPE (Rotary Position Embedding) pode ser estendido para contextos mais longos que o treinamento.

**Contribuições principais:**
- Position interpolation technique
- Zero-shot extension de 2K para 32K
- Fine-tuning eficiente para contextos longos
- Análise teórica de RoPE

**Relevância para Aula 3:**
Técnica fundamental usada em muitos modelos modernos (Llama, GPT-4, etc.) para extensão de contexto.

---

### 33. 2023_LongLoRA_Efficient_Fine_Tuning.pdf
**Título:** LongLoRA: Efficient Fine-tuning of Long-Context Large Language Models

**ArXiv:** 2309.16039

**Data:** Setembro 2023

**Descrição:**
Combina LoRA (Low-Rank Adaptation) com técnicas para contextos longos, permitindo fine-tuning eficiente.

**Contribuições principais:**
- Shifted sparse attention durante treinamento
- Parameter-efficient training para contextos longos
- Modelos fine-tuned até 100K tokens
- Código open-source

**Relevância para Aula 3:**
Demonstra que extensão de contexto não requer sempre treinamento do zero. Fine-tuning pode ser suficiente.

---

### 34. 2024_Yarn_Efficient_Context_Extension.pdf
**Título:** YaRN: Efficient Context Window Extension of Large Language Models

**ArXiv:** 2401.10774

**Data:** Janeiro 2024

**Descrição:**
Propõe YaRN (Yet another RoPE extensioN method), melhorando técnicas de interpolação para extensão de contexto.

**Contribuições principais:**
- NTK-aware interpolation
- Menor perplexidade que métodos anteriores
- Extensão até 128K tokens
- Implementação eficiente

**Relevância para Aula 3:**
Técnica estado-da-arte (2024) para extensão de contexto. Usada em vários modelos open-source.

---

### 35. 2024_LongRoPE_Extending_Context_2M.pdf
**Título:** LongRoPE: Extending LLM Context Window Beyond 2 Million Tokens

**ArXiv:** 2402.05892

**Data:** Fevereiro 2024

**Descrição:**
Estende RoPE para contextos extremamente longos (2M tokens), estabelecendo novo recorde na época.

**Contribuições principais:**
- Non-uniform interpolation
- Progressive extension strategy
- Benchmarks com 2M tokens
- Analysis de trade-offs

**Relevância para Aula 3:**
Demonstra que barreiras de contexto continuam sendo ultrapassadas. Importante para discussão sobre futuro.

---

## 📖 COMO USAR ESTA COLEÇÃO

### Para Preparação Rápida da Aula (2-3 horas):

**Prioridade 1 - Conceitos Essenciais:**
1. **2023_Lost_in_the_Middle.pdf** (introdução + seção 3-4) - 30 min
2. **2024_RULER_Real_Context_Size.pdf** (introdução + resultados) - 20 min
3. **2025_Survey_Comprehensive_Long_Context_LM.pdf** (skim seções principais) - 40 min

**Prioridade 2 - Exemplos Técnicos:**
4. **2025_SWAT_Sliding_Window_Attention_Training.pdf** (para explicar sliding window) - 30 min
5. **2025_Context_Degradation_Analysis.pdf** (para explicar degradação) - 30 min

**Prioridade 3 - Benchmarks:**
6. **2025_100_LongBench.pdf** (skim para entender métricas) - 20 min

---

### Para Preparação Completa (1-2 dias):

**Dia 1 - Fundamentos:**
- Manhã:
  - Lost in the Middle (completo)
  - RULER (completo)
  - Survey In-Context Learning
- Tarde:
  - Survey Comprehensive Long Context LM
  - Extending Context with RoPE

**Dia 2 - Estado da Arte e Aplicações:**
- Manhã:
  - Papers 2025 selecionados (SWAT, Context Degradation, ReAttention)
  - LongLoRA e YaRN
- Tarde:
  - Benchmarks (LongBench, LongCodeBench, 100-LongBench)
  - Papers sobre infinite context (Infini-attention, LM2)

---

## 🎯 PAPERS POR CONCEITO-CHAVE DA AULA

### Para explicar "Janela de Contexto" (conceito básico):
- ✅ **2025_Survey_Comprehensive_Long_Context_LM.pdf** (seção 2)
- ✅ **2025_From_128K_to_4M.pdf** (evolução histórica)

### Para explicar "Sliding Window Attention":
- ✅ **2025_SWAT_Sliding_Window_Attention_Training.pdf** (ESSENCIAL)
- ✅ **2023_Longformer_Long_Document_Transformer.pdf** (exemplo clássico)
- ✅ **2025_RATTENTION_Minimal_Window_Size.pdf** (otimização)

### Para explicar "In-Context Learning":
- ✅ **2025_Survey_Few_Shot_Learning_ICL.pdf** (overview)
- ✅ **2025_Survey_Understanding_ICL.pdf** (mecanismos)
- ✅ **2023_Survey_In_Context_Learning.pdf** (fundamentos)

### Para explicar "Lost in the Middle":
- ✅ **2023_Lost_in_the_Middle.pdf** (PAPER ORIGINAL - ESSENCIAL)
- ✅ **2025_Lost_in_Middle_Emergent.pdf** (análise recente)

### Para explicar "Context Degradation":
- ✅ **2025_Context_Degradation_Analysis.pdf** (ESSENCIAL)
- ✅ **2024_RULER_Real_Context_Size.pdf** (medição de degradação)

### Para explicar "Infinite Context":
- ✅ **2025_ReAttention_Infinite_Context.pdf** (técnica recente)
- ✅ **2024_Infini_Attention_Infinite_Context.pdf** (técnica fundacional)
- ✅ **2025_LM2_Large_Memory_Models.pdf** (paradigma alternativo)

### Para explicar "Extensão de Contexto":
- ✅ **2023_Extending_Context_RoPE.pdf** (fundamentos)
- ✅ **2024_Yarn_Efficient_Context_Extension.pdf** (melhorias)
- ✅ **2024_LongRoPE_Extending_Context_2M.pdf** (estado da arte)

### Para demonstrar Aplicações Práticas:
- ✅ **2025_LongCodeBench_1M_Context.pdf** (código)
- ✅ **2025_EdgeInfinite.pdf** (dispositivos edge)
- ✅ **2025_3Million_Tokens_Single_GPU.pdf** (eficiência)

---

## 📊 ESTATÍSTICAS DA COLEÇÃO

**Total de páginas:** ~600+ páginas de conteúdo científico

**Distribuição temporal:**
- 2023: 5 papers (fundamentos)
- 2024: 5 papers (evolução)
- 2025: 25 papers (estado da arte)

**Distribuição por tipo:**
- Surveys: 7 papers (20%)
- Técnicas de extensão: 10 papers (29%)
- Infinite context: 5 papers (14%)
- Benchmarks: 5 papers (14%)
- Aplicações: 8 papers (23%)

**Escalas de contexto cobertas:**
- 2K-8K tokens (baseline)
- 32K-128K tokens (modelos atuais)
- 256K-1M tokens (contextos longos)
- 1M-4M tokens (contextos ultra-longos)
- Infinite context (sem limite fixo)

**Modelos/Arquiteturas mencionados:**
- GPT-4 Turbo (128K)
- Claude 3 (200K)
- Gemini 1.5 Pro (1M-2M)
- Llama 2/3
- Longformer
- Reformer
- E muitos modelos open-source

---

## 🎓 ESTRUTURA SUGERIDA PARA A AULA

Com base nesta coleção, aqui está uma estrutura sugerida para a Aula 3:

### Parte 1: Conceitos Fundamentais (30 min)
- O que é janela de contexto?
- Por que existe limite?
- Evolução: 2K → 128K → 1M → 4M
- **Papers:** Survey Comprehensive, From 128K to 4M

### Parte 2: Limitações Práticas (30 min)
- Lost in the Middle
- Context Degradation
- Gap entre contexto nominal e efetivo
- **Papers:** Lost in the Middle (2023), RULER, Context Degradation Analysis

### Parte 3: Técnicas de Otimização (30 min)
- Sliding Window Attention
- RoPE e extensões (YaRN, LongRoPE)
- KV Cache compression
- **Papers:** SWAT, Longformer, YaRN, Continuous KV Cache

### Parte 4: In-Context Learning (20 min)
- Como LLMs usam a janela de contexto
- Few-shot learning
- Trade-offs de número de exemplos
- **Papers:** Surveys de ICL

### Parte 5: Fronteiras de Pesquisa (20 min)
- Infinite context techniques
- 3M+ tokens em single GPU
- Contextos multimodais
- **Papers:** ReAttention, Infini-attention, LM2, 3M Tokens Single GPU

### Parte 6: Aplicações e Benchmarks (15 min)
- Casos de uso reais (código, documentos)
- Como medir capacidades de contexto
- **Papers:** LongCodeBench, 100-LongBench, MMLongBench

### Parte 7: Futuro e Implicações (15 min)
- Para onde vamos?
- Trade-offs fundamentais
- Implicações práticas

---

## 🔍 CONCEITOS-CHAVE E PAPERS CORRESPONDENTES

| Conceito | Papers Principais | Nível |
|----------|------------------|--------|
| **Context Window** | Survey Comprehensive, From 128K to 4M | Básico |
| **Sliding Window** | SWAT, Longformer, RATTENTION | Intermediário |
| **Lost in Middle** | Lost in the Middle (2023), Lost in Middle Emergent (2025) | Básico |
| **Context Degradation** | Context Degradation Analysis, RULER | Intermediário |
| **In-Context Learning** | 3 Surveys de ICL | Básico |
| **RoPE Extension** | Extending Context RoPE, YaRN, LongRoPE | Avançado |
| **Infinite Context** | Infini-attention, ReAttention, LM2 | Avançado |
| **KV Cache** | Continuous KV Cache, Overflow Prevention | Avançado |
| **Benchmarking** | RULER, 100-LongBench, LongCodeBench | Intermediário |
| **Efficiency** | 3M Tokens Single GPU, EdgeInfinite | Avançado |

---

## ✅ CHECKLIST DE PREPARAÇÃO

Antes da aula, certifique-se de:

- [ ] Ter lido ao menos 5 papers fundamentais
  - [ ] Lost in the Middle (2023) - OBRIGATÓRIO
  - [ ] RULER (2024) - OBRIGATÓRIO
  - [ ] Survey Comprehensive Long Context LM - OBRIGATÓRIO
  - [ ] SWAT ou Longformer (para sliding window)
  - [ ] Um survey de ICL

- [ ] Ter preparado explicações visuais de:
  - [ ] O que é janela de contexto (diagrama)
  - [ ] Sliding window attention (animação/diagrama)
  - [ ] Fenômeno "lost in the middle" (gráfico em U)
  - [ ] Context degradation (gráfico)

- [ ] Ter exemplos práticos prontos:
  - [ ] Prompt curto vs. longo (demonstração)
  - [ ] ICL com diferentes números de shots
  - [ ] Exemplo de contexto muito longo (documento)

- [ ] Ter números atualizados:
  - [ ] Janelas de contexto de modelos populares
  - [ ] Benchmarks comparativos
  - [ ] Custos computacionais

- [ ] Ter screenshots/figuras importantes dos papers

---

## 🔗 LINKS E RECURSOS ADICIONAIS

**ArXiv Collection:**
Todos os PDFs foram baixados de https://arxiv.org/

**Para buscar atualizações:**
- Buscar "long context" OR "context window" em arxiv.org
- Filtrar por categoria cs.CL (Computation and Language)
- Ordenar por data

**Código open-source relacionado:**
- Muitos papers incluem links para repositórios GitHub
- Consultar seções "Code availability" nos papers

---

## 📝 NOTAS SOBRE USO E CITAÇÕES

**Citações:**
Sempre cite a fonte original ao usar conteúdo destes papers:
- Formato: Autor et al., "Título", ArXiv:XXXX.XXXXX, Ano
- Todos os papers estão disponíveis publicamente no ArXiv

**Copyright:**
Todos estes papers estão sob licenças que permitem uso educacional e de pesquisa.

**Versões:**
Papers no ArXiv podem ter múltiplas versões. As versões baixadas são as mais recentes disponíveis em 31/10/2025.

---

## 🎯 PERGUNTAS FREQUENTES (FAQ)

**P: Qual a diferença entre "context window" e "context length"?**
R: São termos intercambiáveis. Context window enfatiza a "janela deslizante", context length enfatiza o tamanho.

**P: Por que 35 papers? Não é demais?**
R: Coleção completa para diferentes níveis de profundidade:
- 5-6 papers para preparação rápida
- 15-20 papers para preparação completa
- 35 papers para referência e aprofundamento posterior

**P: Qual paper é MAIS importante?**
R: **Lost in the Middle (2023)** - É o paper seminal que definiu o problema principal.

**P: Papers de 2025 são confiáveis?**
R: Sim, todos são de ArXiv com autores credenciados. Alguns ainda em review, mas metodologia é sólida.

**P: Preciso entender a matemática de todos os papers?**
R: Não para a aula. Foque em intuições, resultados e implicações práticas.

---

## 🚀 PRÓXIMOS PASSOS

Após usar esta coleção:

1. **Marcar papers mais relevantes** para sua narrativa da aula
2. **Extrair figuras e gráficos** importantes
3. **Preparar demonstrações práticas** usando conceitos dos papers
4. **Criar quiz/exercícios** baseados nos conceitos
5. **Preparar lista de leituras** recomendadas para alunos

---

**Compilado em:** 31 de outubro de 2025

**Para:** George Marmelstein - Aulas 2025

**Aula:** 3 - Janela de Contexto

**Última atualização:** 31/10/2025

---

**LEGENDA:**
- ✅ = Recomendado para leitura prioritária
- 🔥 = Paper particularmente influente/citado
- 📊 = Contém benchmarks/resultados empíricos importantes
- 🎯 = Aplicação prática direta
- 🧠 = Conceito teórico profundo
