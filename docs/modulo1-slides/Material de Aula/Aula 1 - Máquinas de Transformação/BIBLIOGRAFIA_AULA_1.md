# BIBLIOGRAFIA E MATERIAIS DE REFERÊNCIA - AULA 1
## LLMs como Máquinas de Transformação

**Tema da Aula:** Como os LLMs transformam e criam texto ao invés de simplesmente reproduzir informações do passado.

**Data de compilação:** 2025-01-31

---

## 📚 ÍNDICE

1. [Papers Fundamentais](#papers-fundamentais)
2. [Papers sobre Arquitetura Transformer](#papers-sobre-arquitetura-transformer)
3. [Papers sobre GPT e Modelos Autoregressivos](#papers-sobre-gpt-e-modelos-autoregressivos)
4. [Papers Recentes e Surveys](#papers-recentes-e-surveys)
5. [Tutoriais Técnicos e Implementações](#tutoriais-tecnicos-e-implementacoes)
6. [Vídeos Educacionais de Alta Qualidade](#videos-educacionais-de-alta-qualidade)
7. [Blogs e Recursos Visuais](#blogs-e-recursos-visuais)
8. [Recursos Adicionais](#recursos-adicionais)

---

## 📄 PAPERS FUNDAMENTAIS

### 1. Attention is All You Need (2017)
**Autores:** Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Łukasz Kaiser, Illia Polosukhin

**Publicação:** NeurIPS 2017

**Citações:** 195,580+ (um dos papers mais citados em IA)

**Link:** https://arxiv.org/abs/1706.03762

**Relevância para a Aula 1:**
- Este é o paper seminal que introduziu a arquitetura Transformer
- Propõe uma arquitetura baseada puramente em mecanismos de atenção, dispensando recorrência e convoluções
- Estabelece as bases para entender como os LLMs processam e transformam linguagem
- Fundamental para compreender o conceito de "máquina de transformação"

**Conceitos-chave:**
- Self-attention mechanism
- Multi-head attention
- Positional encoding
- Encoder-decoder architecture

---

### 2. Improving Language Understanding by Generative Pre-Training (GPT-1, 2018)
**Autores:** Alec Radford, Karthik Narasimhan, Tim Salimans, Ilya Sutskever (OpenAI)

**Publicação:** 2018

**Link:** https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf

**Relevância para a Aula 1:**
- Primeiro paper da série GPT, iniciando a revolução dos modelos generativos
- Demonstra que grandes ganhos em tarefas de NLP podem ser alcançados através de pré-treinamento generativo
- Introduz o conceito de "aprender representações universais" através de previsão de próximo token
- Mostra como o modelo pode ser fine-tuned para tarefas específicas após pré-treinamento

**Conceitos-chave:**
- Generative pre-training
- Task-agnostic model
- Transfer learning em NLP
- Unsupervised learning

**Resultados:** Superou o estado da arte em 9 das 12 tarefas estudadas

---

### 3. Language Models are Unsupervised Multitask Learners (GPT-2, 2019)
**Autores:** Alec Radford, Jeffrey Wu, Rewon Child, David Luan, Dario Amodei, Ilya Sutskever (OpenAI)

**Publicação:** 2019

**Link:** https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf

**GitHub:** https://github.com/openai/gpt-2

**Relevância para a Aula 1:**
- Demonstra que modelos de linguagem começam a aprender múltiplas tarefas sem supervisão explícita
- GPT-2 (1.5B parâmetros) alcança estado da arte em 7 de 8 datasets testados em configuração zero-shot
- Mostra a capacidade emergente de transformação e criação de texto
- Evidencia o conceito de "máquinas de transformação" através de capacidades generativas

**Conceitos-chave:**
- Zero-shot learning
- Multitask learning sem supervisão
- WebText dataset
- Capacidades emergentes

**Dataset:** Treinado em WebText (milhões de páginas web)

---

### 4. Language Models are Few-Shot Learners (GPT-3, 2020)
**Autores:** Tom B. Brown et al. (OpenAI)

**Publicação:** NeurIPS 2020

**Link:** https://arxiv.org/abs/2005.14165

**Relevância para a Aula 1:**
- GPT-3 com 175 bilhões de parâmetros demonstra capacidades de aprendizado few-shot
- Mostra como escala massiva resulta em comportamentos emergentes
- Evidencia a transformação de inputs em outputs complexos e criativos
- Demonstra que LLMs não apenas "repetem" mas transformam e criam

**Conceitos-chave:**
- Few-shot learning
- In-context learning
- Emergent abilities
- Scale effects

**Características:** 175 bilhões de parâmetros, modelo autoregressivo

---

### 5. BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding (2018)
**Autores:** Jacob Devlin, Ming-Wei Chang, Kenton Lee, Kristina Toutanova (Google AI)

**Publicação:** NAACL 2019

**Link:** https://arxiv.org/abs/1810.04805

**Relevância para a Aula 1:**
- Abordagem complementar ao GPT (bidirecional vs. unidirecional)
- Demonstra diferentes maneiras de "transformar" representações de linguagem
- Útil para contrastar com abordagem autoregressiva do GPT
- Mostra que há múltiplas formas de capturar e transformar padrões linguísticos

**Conceitos-chave:**
- Masked language modeling
- Bidirectional context
- Pre-training + fine-tuning
- Auto-encoding vs. auto-regressive

**Comparação:** Útil para explicar diferentes paradigmas de transformação de linguagem

---

## 🏗️ PAPERS SOBRE ARQUITETURA TRANSFORMER

### 6. GPT or BERT: why not both? (2024)
**Link:** https://arxiv.org/abs/2410.24159

**Relevância:**
- Propõe GPT-BERT, híbrido que combina masked language modeling com causal language modeling
- Mostra que diferentes objetivos de treinamento resultam em diferentes capacidades de transformação
- Demonstra que o híbrido supera modelos puramente masked ou puramente causais

**Conceitos-chave:**
- Hybrid training objectives
- Combining paradigms
- Unified transformer stack

---

### 7. The Annotated Transformer (Harvard NLP, 2018)
**Autor:** Alexander M. Rush (Harvard University)

**Publicação:** ACL NLP-OSS Workshop 2018

**Links:**
- Website interativo: https://nlp.seas.harvard.edu/annotated-transformer/
- Paper: https://aclanthology.org/W18-2509/
- GitHub: https://github.com/harvardnlp/annotated-transformer

**Relevância para a Aula 1:**
- Implementação linha por linha do paper "Attention is All You Need"
- Notebook completamente funcional e utilizável
- Excelente recurso pedagógico para entender os detalhes técnicos
- Ajuda a visualizar como a transformação de texto acontece na prática

**Formato:** Código anotado + explicações detalhadas

**Público-alvo:** Estudantes e pesquisadores que querem implementar transformers

---

## 🤖 PAPERS SOBRE GPT E MODELOS AUTOREGRESSIVOS

### 8. GPT-NeoX-20B: An Open-Source Autoregressive Language Model (2022)
**Link:** https://arxiv.org/abs/2204.06745

**Relevância:**
- Modelo open-source de 20 bilhões de parâmetros
- Treinado no dataset "the Pile"
- Alternativa open-source para estudar modelos autoregressivos
- Permite replicação e experimentação

---

### 9. σ-GPTs: A New Approach to Autoregressive Models (2024)
**Link:** https://arxiv.org/abs/2404.09562

**Relevância:**
- Nova abordagem para modelos autoregressivos
- Inovações recentes na arquitetura
- Demonstra evolução contínua dos métodos de transformação de texto

---

### 10. Shall We Pretrain Autoregressive Language Models with Retrieval? (2023)
**Link:** https://arxiv.org/abs/2304.06762

**Relevância:**
- Estudo comparativo entre RETRO e GPT padrão
- Explora como retrieval pode melhorar capacidades de transformação
- Relevante para entender limitações e extensões dos LLMs

---

## 📊 PAPERS RECENTES E SURVEYS

### 11. A Comprehensive Overview of Large Language Models (2023)
**Link:** https://arxiv.org/abs/2307.06435

**Relevância:**
- Survey abrangente sobre LLMs
- Visão geral do estado da arte
- Contextualiza diferentes abordagens e capacidades
- Útil para enquadramento geral da aula

---

### 12. Controllable Text Generation for Large Language Models: A Survey (2024)
**Link:** https://arxiv.org/abs/2408.12599

**Relevância:**
- Survey sobre métodos de controle de geração de texto
- Discute modelos como GPT, Llama, Transformers, RNNs, LSTMs, GANs, VAEs
- Mostra como podemos dirigir o processo de transformação
- Relevante para entender que LLMs são ferramentas controláveis

**Conceitos-chave:**
- Controllable text generation (CTG)
- Steering generation
- Pre-trained language models

---

### 13. Factuality of Large Language Models: A Survey (2024)
**Link:** https://arxiv.org/abs/2402.02420

**Relevância:**
- Analisa desafios em melhorar factualidade dos LLMs
- Discute alucinações e geração criativa vs. factual
- Importante para contrastar "transformação criativa" com "reprodução factual"
- Conecta com o tema da aula sobre LLMs criarem vs. reproduzirem

**Conceitos-chave:**
- Hallucinations
- Factuality vs. creativity
- Open-ended text generation
- Automated factuality evaluation

---

### 14. Transformers and Large Language Models for Efficient Intrusion Detection Systems: Survey (2025)
**Link:** https://arxiv.org/abs/2408.07583

**Relevância:**
- Cobre 118 papers sobre Transformers e LLMs (2017-2024)
- Mostra evolução das capacidades dos LLMs
- Demonstra aplicações além de geração de texto

---

## 💻 TUTORIAIS TÉCNICOS E IMPLEMENTAÇÕES

### 15. The Illustrated Transformer
**Autor:** Jay Alammar

**Link:** https://jalammar.github.io/illustrated-transformer/

**Relevância para a Aula 1:**
- Um dos primeiros e melhores tutoriais visuais sobre transformers
- Usa atenção para explicar o modelo Transformer
- Visualizações claras e didáticas
- Recurso pedagógico de referência mundial
- Usado em cursos de Stanford, Harvard, MIT, Princeton, CMU

**Formato:** Blog post com visualizações interativas

**Conceitos explicados:**
- Self-attention
- Positional encoding
- Encoder-decoder architecture
- Como a transformação acontece camada por camada

---

### 16. The Illustrated GPT-2
**Autor:** Jay Alammar

**Link:** https://jalammar.github.io/illustrated-gpt2/

**Relevância para a Aula 1:**
- Mergulha profundamente na arquitetura que permitiu GPT-2 produzir seus resultados
- Visualiza a camada de self-attention em detalhes
- Complementa o tutorial sobre Transformers com mais visualizações
- Mostra especificamente como GPT gera texto token por token

**Conceitos explicados:**
- Autoregressive generation
- Self-attention em GPT
- Como o modelo "transforma" contexto em previsões
- Stack de transformers unidirecionais

---

### 17. How GPT3 Works - Visualizations and Animations
**Autor:** Jay Alammar

**Link:** https://jalammar.github.io/how-gpt3-works-visualizations-animations/

**Relevância para a Aula 1:**
- Remove a aura de mistério em torno do GPT-3
- Explica como é treinado e como funciona
- Animações que mostram o processo de geração
- Excelente para entender o conceito de "máquina de transformação"

**Conceitos explicados:**
- Training process
- Text generation mechanics
- Scale effects
- Emergent capabilities

---

### 18. Interfaces for Explaining Transformer Language Models
**Autor:** Jay Alammar

**Link:** https://jalammar.github.io/explaining-transformers/

**Relevância:**
- Continua a busca por interpretar e visualizar o funcionamento interno dos transformers
- Ilustra como métodos-chave de interpretabilidade se aplicam a LLMs
- Importante para entender o que acontece "dentro" da transformação

---

### 19. Creating a Transformer From Scratch - Part One: The Attention Mechanism
**Autor:** Benjamin Warner

**Link:** https://benjaminwarner.dev/2023/07/01/attention-mechanism

**Relevância:**
- Tutorial prático de como escrever uma camada de Attention do zero em PyTorch
- Cobre todas as três principais variantes: Bidirectional, Causal, e Cross Attention
- Útil para demonstrações práticas em aula

---

### 20. Tutorial 6: Transformers and Multi-Head Attention (UvA DL Notebooks)
**Link:** https://uvadlc-notebooks.readthedocs.io/en/latest/tutorial_notebooks/tutorial6/Transformers_and_MHAttention.html

**Relevância:**
- Notebooks da Universidade de Amsterdam
- Muitas visualizações focadas em NLP
- Recurso acadêmico de alta qualidade

---

## 🎥 VÍDEOS EDUCACIONAIS DE ALTA QUALIDADE

### 21. Let's build GPT: from scratch, in code, spelled out
**Autor:** Andrej Karpathy

**Plataforma:** YouTube

**Link:** https://www.youtube.com/watch?v=kCc8FmEb1nY

**Duração:** 1h56m

**Data:** 17 de janeiro de 2023

**Relevância para a Aula 1:**
- **ALTAMENTE RECOMENDADO** - Considerado "a melhor explicação de GPT"
- Constrói e treina um Transformer seguindo o paper "Attention is All You Need"
- Implementação completa em código do zero
- Termina com o core do nanoGPT
- Demonstra na prática como a transformação de texto acontece
- Excelente para quem aprende vendo implementações práticas

**Conceitos demonstrados:**
- Language modeling
- Transformer architecture
- Autoregressive generation
- Training process

**Público-alvo:** Estudantes com conhecimento básico de Python e deep learning

**GitHub relacionado:** https://github.com/karpathy/nanoGPT

---

### 22. Deep Dive into LLMs like ChatGPT
**Autor:** Andrej Karpathy

**Plataforma:** YouTube

**Duração:** 3h31m

**Data:** 2025 (recente)

**Relevância para a Aula 1:**
- Deep dive para audiência geral sobre a tecnologia LLM que alimenta ChatGPT
- Cobre o stack completo de treinamento
- Inclui:
  - Pretraining (dados, tokenização, rede neural Transformer)
  - Supervised finetuning
  - Reinforcement learning

**Conceitos explicados:**
- Full training pipeline
- Mental models para entender LLMs
- Como os modelos são desenvolvidos
- Processo completo de criação de um LLM

**Website do curso:** https://karpathy.ai/zero-to-hero.html

---

### 23. Neural Networks: Zero to Hero (Série Completa)
**Autor:** Andrej Karpathy

**Plataforma:** YouTube + Website

**Links:**
- Website: https://karpathy.ai/zero-to-hero.html
- GitHub: https://github.com/karpathy/nn-zero-to-hero

**Relevância:**
- Curso completo sobre construção de redes neurais do zero
- Começa com backpropagation básico e evolui até redes modernas como GPT
- Inclui múltiplas aulas sobre language modeling

**Aulas relevantes:**
- "The spelled-out intro to language modeling: building makemore" (1h57m)
- MLPs, activations, gradients, backpropagation
- Construção gradual até transformers

---

### 24. But what is a GPT? Visual intro to Transformers
**Autor:** 3Blue1Brown (Grant Sanderson)

**Plataforma:** YouTube

**Link:** https://www.youtube.com/watch?v=wjZofJX0v4M

**Website:** https://www.3blue1brown.com/lessons/gpt

**Série:** Deep Learning Chapter 5

**Relevância para a Aula 1:**
- **ALTAMENTE RECOMENDADO** - Melhor explicação visual de GPT
- Explica que GPT = Generative Pre-Trained Transformer
- Visualizações matemáticas elegantes e intuitivas
- Quebra o conceito de "máquina de transformação" em componentes visuais
- Público geral, não requer conhecimento técnico avançado

**Conceitos explicados:**
- O que significa "generative" (gera novo texto)
- O que significa "pre-trained" (treinado em grandes volumes de dados)
- Como funciona um transformer (tipo especial de rede neural)

**Estilo:** Animações matemáticas visuais, narrativa clara

---

### 25. Visualizing Attention, a Transformer's Heart
**Autor:** 3Blue1Brown (Grant Sanderson)

**Plataforma:** YouTube

**Série:** Deep Learning Chapter 6

**Link:** Disponível no canal 3Blue1Brown

**Website:** https://www.3blue1brown.com/lessons/gpt

**Relevância para a Aula 1:**
- Desmistifica atenção, o mecanismo-chave dentro de transformers e LLMs
- Cobre self-attention, multiple heads, e cross-attention
- Mecanismo de atenção tem ~58 bilhões de parâmetros (1/3 dos 175B do GPT-3)
- Visualizações matemáticas que mostram como a transformação acontece

**Conceitos explicados:**
- Self-attention mechanism
- Multi-head attention
- Cross-attention
- Como a atenção permite transformação contextual

---

### 26. Large Language Models explained briefly
**Autor:** 3Blue1Brown

**Website:** https://www.3blue1brown.com/lessons/mini-llm

**Relevância:**
- Explicação breve e concisa de LLMs
- Ótimo para introdução rápida
- Complementa os vídeos mais longos

---

### 27. Transformer Neural Networks, ChatGPT's Foundation, Clearly Explained
**Autor:** StatQuest with Josh Starmer

**Plataforma:** YouTube

**Duração:** 36 minutos

**Relevância para a Aula 1:**
- Explicações muito simples e claras (marca registrada do StatQuest)
- Cobre word embedding, positional encoding, self-attention, encoder-decoder
- Estilo visual inovador
- Ótimo para audiências que preferem explicações passo a passo

**Conceitos explicados:**
- Word embeddings
- Positional encoding
- Self-attention mechanisms
- Encoder-decoder architecture

**Estilo:** Explicações visuais simples, linguagem acessível

**Website:** Disponível no canal StatQuest

---

## 📝 BLOGS E RECURSOS VISUAIS

### 28. Jay Alammar's Blog - Visualizing Machine Learning
**Website:** https://jalammar.github.io/

**Relevância para a Aula 1:**
- Blog dedicado a visualização de conceitos de machine learning
- Pioneiro em artigos técnicos com visualizações poderosas
- Coleção completa de posts ilustrados sobre transformers, GPT, BERT, etc.

**Posts principais:**
1. The Illustrated Transformer
2. The Illustrated GPT-2
3. How GPT3 Works - Visualizations and Animations
4. The Illustrated Retrieval Transformer
5. Interfaces for Explaining Transformer Language Models

**Formato:** Blog posts com diagramas interativos e animações

**Reconhecimento:** Usado como recurso em cursos de Stanford, MIT, Harvard, Princeton, CMU

---

### 29. Fermat's Library - Annotated Papers
**Link para GPT-2:** https://fermatslibrary.com/s/language-models-are-unsupervised-multitask-learners

**Relevância:**
- Versões anotadas e explicadas de papers importantes
- Inclui anotações linha por linha
- Útil para estudo detalhado dos papers

---

## 📚 RECURSOS ADICIONAIS

### 30. Papers With Code - Transformers
**Link:** https://paperswithcode.com/

**Relevância:**
- Repositório de papers com implementações em código
- Benchmarks e comparações de modelos
- Útil para encontrar implementações práticas

---

### 31. Hugging Face - Transformers Library
**Link:** https://huggingface.co/docs/transformers/

**Relevância:**
- Biblioteca mais popular para trabalhar com transformers
- Documentação excelente
- Modelos pré-treinados disponíveis
- Tutoriais práticos

---

### 32. OpenAI Research
**Link:** https://openai.com/research/

**Relevância:**
- Fonte oficial dos papers GPT
- Blog posts explicativos
- Anúncios de novos modelos

---

### 33. Anthropic Research
**Link:** https://www.anthropic.com/research

**Relevância:**
- Pesquisa sobre segurança e interpretabilidade de LLMs
- Papers sobre alinhamento
- Perspectiva complementar sobre como LLMs funcionam

---

## 🎯 MATERIAIS RECOMENDADOS PARA PREPARAÇÃO DA AULA

### Essenciais (Leitura/Visualização Obrigatória):

1. **Paper:** "Attention is All You Need" (Vaswani et al., 2017)
   - Base teórica fundamental

2. **Vídeo:** "But what is a GPT?" - 3Blue1Brown
   - Melhor introdução visual ao conceito

3. **Tutorial:** "The Illustrated Transformer" - Jay Alammar
   - Visualizações pedagógicas essenciais

4. **Paper:** "Language Models are Unsupervised Multitask Learners" (GPT-2)
   - Demonstra capacidades de transformação e criação

### Altamente Recomendados:

5. **Vídeo:** "Let's build GPT: from scratch" - Andrej Karpathy
   - Demonstração prática de implementação

6. **Tutorial:** "The Illustrated GPT-2" - Jay Alammar
   - Detalhes específicos de GPT

7. **Vídeo:** "Visualizing Attention" - 3Blue1Brown
   - Compreensão profunda do mecanismo de atenção

8. **Paper:** "Language Models are Few-Shot Learners" (GPT-3)
   - Mostra emergência de capacidades com escala

### Complementares:

9. **Tutorial:** "The Annotated Transformer" - Harvard NLP
   - Para implementação técnica detalhada

10. **Survey:** "A Comprehensive Overview of Large Language Models"
    - Contextualização do estado da arte

11. **Survey:** "Factuality of Large Language Models"
    - Entender limites entre criação e reprodução

12. **Vídeo:** "Transformer Neural Networks" - StatQuest
    - Explicação alternativa para diferentes estilos de aprendizado

---

## 📊 ORGANIZAÇÃO SUGERIDA PARA A AULA

### Introdução (10 min):
- Mostrar clipes do vídeo 3Blue1Brown "But what is a GPT?"
- Contrastar "Modo Google" (reprodução) vs "Modo LLM" (transformação)

### Fundamentos Teóricos (20 min):
- Usar visualizações de Jay Alammar (Illustrated Transformer)
- Explicar arquitetura básica
- Conceito de autoregressive generation

### Demonstração Prática (15 min):
- Clips do vídeo Andrej Karpathy "Let's build GPT"
- Mostrar código de geração de texto
- Token-by-token generation

### Conceitos Avançados (10 min):
- Emergence de capacidades (GPT-3 paper)
- Diferença entre treino e geração
- Como padrões linguísticos são capturados

### Conclusão (5 min):
- Síntese: LLMs como compressão com perda + geração probabilística
- LLMs transformam e criam, não reproduzem
- Próxima aula: O jogo da adivinhação (previsão probabilística)

---

## 🔗 LINKS RÁPIDOS - RESUMO EXECUTIVO

### Papers Essenciais:
1. Attention is All You Need: https://arxiv.org/abs/1706.03762
2. GPT-1: https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf
3. GPT-2: https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf
4. GPT-3: https://arxiv.org/abs/2005.14165

### Vídeos Essenciais:
1. 3Blue1Brown - But what is a GPT?: https://www.youtube.com/watch?v=wjZofJX0v4M
2. Andrej Karpathy - Let's build GPT: https://www.youtube.com/watch?v=kCc8FmEb1nY
3. Andrej Karpathy - Deep Dive into LLMs: https://karpathy.ai/zero-to-hero.html

### Tutoriais Visuais Essenciais:
1. Jay Alammar - Illustrated Transformer: https://jalammar.github.io/illustrated-transformer/
2. Jay Alammar - Illustrated GPT-2: https://jalammar.github.io/illustrated-gpt2/
3. Jay Alammar - How GPT3 Works: https://jalammar.github.io/how-gpt3-works-visualizations-animations/

### Implementações:
1. The Annotated Transformer: https://nlp.seas.harvard.edu/annotated-transformer/
2. nanoGPT (Karpathy): https://github.com/karpathy/nanoGPT
3. OpenAI GPT-2: https://github.com/openai/gpt-2

---

## 📌 NOTAS FINAIS

Esta bibliografia foi compilada especificamente para a **Aula 1 - Máquinas de Transformação**, focando em recursos que explicam:

1. Como LLMs **transformam** ao invés de simplesmente reproduzir
2. A arquitetura Transformer e mecanismos de atenção
3. Modelos autoregressivos e geração de texto
4. O conceito de "máquina de transformação"

**Critérios de seleção:**
- ✅ Alta qualidade acadêmica e pedagógica
- ✅ Clareza nas explicações
- ✅ Visualizações e recursos interativos
- ✅ Reconhecimento pela comunidade (citações, uso em universidades)
- ✅ Relevância direta para o tema da aula

**Fontes utilizadas:**
- ArXiv (Cornell University)
- Google Scholar
- Canais YouTube de alta referência (Andrej Karpathy, 3Blue1Brown, StatQuest)
- Blogs técnicos reconhecidos (Jay Alammar)
- Universidades (Harvard NLP, Stanford, MIT, etc.)

**Última atualização:** 2025-01-31

---

## 📧 SUGESTÕES DE LEITURA SEQUENCIAL

Para professores preparando a aula, sugerimos esta sequência:

**Dia 1:**
- Assistir "But what is a GPT?" (3Blue1Brown)
- Ler "The Illustrated Transformer" (Jay Alammar)

**Dia 2:**
- Ler paper "Attention is All You Need" (foco na introdução e seção 3)
- Assistir "Visualizing Attention" (3Blue1Brown)

**Dia 3:**
- Assistir "Let's build GPT" (Andrej Karpathy) - primeira hora
- Explorar "The Annotated Transformer"

**Dia 4:**
- Ler papers GPT-1 e GPT-2 (pelo menos introdução, resultados e conclusão)
- Ler "The Illustrated GPT-2" (Jay Alammar)

**Dia 5:**
- Revisar materiais visuais
- Preparar slides com screenshots e citações
- Testar demonstrações práticas

---

**Compilado por:** Claude (Anthropic)
**Para:** George Marmelstein
**Curso:** LLMs e suas Aplicações - Aulas 2025
**Aula:** 1 - Máquinas de Transformação
