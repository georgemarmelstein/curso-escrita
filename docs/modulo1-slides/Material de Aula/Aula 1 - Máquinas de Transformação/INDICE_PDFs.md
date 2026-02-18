# 📄 ÍNDICE DE PDFs BAIXADOS - AULA 1

**Total de PDFs:** 10 papers científicos

**Data de download:** 31 de janeiro de 2025

---

## 📚 PAPERS FUNDAMENTAIS

### 1. Attention_is_All_You_Need.pdf
**Autores:** Vaswani, Ashish; Shazeer, Noam; Parmar, Niki; Uszkoreit, Jakob; Jones, Llion; Gomez, Aidan N.; Kaiser, Łukasz; Polosukhin, Illia

**Publicação:** NeurIPS 2017

**Citações:** 195,580+

**Descrição:**
O paper seminal que introduziu a arquitetura Transformer, propondo uma nova arquitetura de rede neural baseada puramente em mecanismos de atenção, dispensando completamente recorrência e convoluções.

**Conceitos-chave:**
- Self-attention mechanism
- Multi-head attention
- Positional encoding
- Encoder-decoder architecture

**Por que é essencial:**
Este é o paper fundacional que iniciou a revolução dos Transformers. Todo LLM moderno (GPT, BERT, etc.) é baseado nesta arquitetura.

**Link original:** https://arxiv.org/abs/1706.03762

---

## 🤖 SÉRIE GPT (OpenAI)

### 2. GPT-1_Improving_Language_Understanding.pdf
**Título completo:** Improving Language Understanding by Generative Pre-Training

**Autores:** Radford, Alec; Narasimhan, Karthik; Salimans, Tim; Sutskever, Ilya

**Publicação:** 2018

**Descrição:**
Primeiro paper da série GPT. Demonstra que grandes ganhos em tarefas de NLP podem ser alcançados através de pré-treinamento generativo em corpus não-supervisionado, seguido de fine-tuning discriminativo em tarefas específicas.

**Resultados principais:**
- Superou estado da arte em 9 de 12 tarefas
- Introduziu o conceito de "aprender representações universais"
- Modelo com 117M parâmetros

**Conceitos-chave:**
- Generative pre-training
- Transfer learning em NLP
- Task-agnostic model
- Unsupervised learning

**Link original:** https://cdn.openai.com/research-covers/language-unsupervised/language_understanding_paper.pdf

---

### 3. GPT-2_Language_Models_Unsupervised_Multitask_Learners.pdf
**Título completo:** Language Models are Unsupervised Multitask Learners

**Autores:** Radford, Alec; Wu, Jeffrey; Child, Rewon; Luan, David; Amodei, Dario; Sutskever, Ilya

**Publicação:** 2019

**Descrição:**
GPT-2 demonstra que modelos de linguagem começam a aprender múltiplas tarefas sem supervisão explícita quando treinados em corpus massivo (WebText).

**Resultados principais:**
- 1.5 bilhões de parâmetros
- Estado da arte em 7 de 8 datasets (zero-shot)
- Capacidades emergentes impressionantes

**Conceitos-chave:**
- Zero-shot learning
- Multitask learning sem supervisão
- WebText dataset
- Capacidades emergentes

**Relevância para Aula 1:**
Demonstra claramente como LLMs "transformam" ao invés de reproduzir - o modelo gera texto coerente sem ter visto exemplos específicos das tarefas.

**Link original:** https://cdn.openai.com/better-language-models/language_models_are_unsupervised_multitask_learners.pdf

---

### 4. GPT-3_Language_Models_Few_Shot_Learners.pdf
**Título completo:** Language Models are Few-Shot Learners

**Autores:** Brown, Tom B.; et al. (48 autores)

**Publicação:** NeurIPS 2020

**Descrição:**
GPT-3 com 175 bilhões de parâmetros demonstra capacidades surpreendentes de aprendizado few-shot e in-context learning, mostrando que escala massiva resulta em comportamentos emergentes significativos.

**Resultados principais:**
- 175 bilhões de parâmetros
- Few-shot learning sem gradiente
- In-context learning poderoso
- Capacidades emergentes notáveis

**Conceitos-chave:**
- Few-shot learning
- In-context learning
- Emergent abilities
- Scale effects (efeitos de escala)

**Relevância para Aula 1:**
Mostra que com escala suficiente, LLMs desenvolvem capacidades de "transformação" muito mais sofisticadas - podem aprender novas tarefas apenas com exemplos no contexto.

**Link original:** https://arxiv.org/abs/2005.14165

---

## 🔄 ARQUITETURAS ALTERNATIVAS

### 5. BERT_Pretraining_Bidirectional_Transformers.pdf
**Título completo:** BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding

**Autores:** Devlin, Jacob; Chang, Ming-Wei; Lee, Kenton; Toutanova, Kristina

**Publicação:** NAACL 2019

**Descrição:**
BERT introduz pré-treinamento bidirecional usando Masked Language Modeling (MLM), contrastando com a abordagem unidirecional autoregressiva do GPT.

**Conceitos-chave:**
- Masked language modeling (MLM)
- Bidirectional context
- Auto-encoding vs. auto-regressive
- Pre-training + fine-tuning

**Relevância para Aula 1:**
Útil para contrastar diferentes paradigmas de "transformação" - enquanto GPT prevê próximo token (unidirecional), BERT prevê tokens mascarados (bidirecional).

**Link original:** https://arxiv.org/abs/1810.04805

---

### 6. GPT_or_BERT_Why_Not_Both.pdf
**Título completo:** GPT or BERT: why not both?

**Autores:** (2024)

**Descrição:**
Paper recente que propõe GPT-BERT, um modelo híbrido que combina masked language modeling (BERT) com causal language modeling (GPT) em um único transformer stack.

**Resultados principais:**
- Treinamento híbrido supera modelos puramente masked ou causais
- Combina forças de ambos paradigmas
- Demonstra que diferentes objetivos de treinamento criam diferentes capacidades

**Relevância para Aula 1:**
Mostra que há múltiplas formas de "transformar" linguagem, e que essas formas podem ser combinadas.

**Link original:** https://arxiv.org/abs/2410.24159

---

## 📊 SURVEYS E REVISÕES

### 7. Survey_Comprehensive_Overview_LLMs.pdf
**Título completo:** A Comprehensive Overview of Large Language Models

**Publicação:** 2023

**Descrição:**
Survey abrangente sobre LLMs cobrindo arquiteturas, treinamento, capacidades, aplicações e desafios.

**Conteúdo:**
- Visão geral do estado da arte
- Evolução histórica
- Diferentes abordagens e capacidades
- Aplicações práticas
- Desafios e limitações

**Relevância para Aula 1:**
Fornece contexto geral e enquadramento histórico para entender LLMs como máquinas de transformação.

**Link original:** https://arxiv.org/abs/2307.06435

---

### 8. Survey_Controllable_Text_Generation_LLMs.pdf
**Título completo:** Controllable Text Generation for Large Language Models: A Survey

**Publicação:** 2024

**Descrição:**
Survey sobre métodos de controle de geração de texto em LLMs, cobrindo modelos como GPT, Llama, Transformers, RNNs, LSTMs, GANs e VAEs.

**Conteúdo:**
- Métodos de CTG (Controllable Text Generation)
- Técnicas para dirigir a geração
- Trade-offs entre controle e criatividade

**Relevância para Aula 1:**
Demonstra que embora LLMs "transformem" probabilisticamente, podemos dirigir esse processo de transformação.

**Link original:** https://arxiv.org/abs/2408.12599

---

### 9. Survey_Factuality_of_LLMs.pdf
**Título completo:** Factuality of Large Language Models: A Survey

**Publicação:** 2024 (atualizado outubro 2024)

**Descrição:**
Survey sobre desafios em melhorar a factualidade de LLMs, analisando alucinações e avaliação automatizada de factualidade em geração de texto aberto.

**Conteúdo:**
- Causas de alucinações
- Métodos de avaliação de factualidade
- Técnicas para melhorar factualidade
- Trade-offs entre criatividade e factualidade

**Relevância para Aula 1:**
Crucial para entender que "transformação criativa" pode resultar em alucinações - a capacidade de criar é também a fonte de erros factuais.

**Link original:** https://arxiv.org/abs/2402.02420

---

## 🔬 PAPERS ADICIONAIS

### 10. GPT-NeoX-20B_Open_Source_Autoregressive_LM.pdf
**Título completo:** GPT-NeoX-20B: An Open-Source Autoregressive Language Model

**Publicação:** 2022

**Descrição:**
Modelo open-source de 20 bilhões de parâmetros treinado no dataset "the Pile". Importante alternativa open-source para estudar modelos autoregressivos.

**Conceitos-chave:**
- Modelo open-source
- Treinamento em "the Pile"
- Comparável a GPT-3 (menor escala)
- Replicabilidade e transparência

**Relevância para Aula 1:**
Permite experimentação prática com modelos de grande escala, facilitando compreensão de como a "transformação" funciona.

**Link original:** https://arxiv.org/abs/2204.06745

---

## 📖 COMO USAR ESTES PDFs

### Para Preparação Rápida:
1. **Leia primeiro:** Attention is All You Need (introdução e seção 3)
2. **Depois:** GPT-2 (introdução, resultados, conclusão)
3. **Folheie:** Um dos surveys para contexto

### Para Preparação Completa:
1. **Dia 1:** Attention is All You Need (completo)
2. **Dia 2:** GPT-1 e GPT-2 (completos)
3. **Dia 3:** GPT-3 (introdução, seções principais)
4. **Dia 4:** BERT (para contraste)
5. **Dia 5:** Surveys para visão ampla

### Para Citações em Slides:
Todos os PDFs estão disponíveis localmente. Certifique-se de citar:
- Autores
- Ano de publicação
- Título do paper
- Venue (conferência/journal)

---

## 🎯 PAPERS POR CONCEITO

### Para explicar "Transformação vs. Reprodução":
- ✅ GPT-2: Language Models are Unsupervised Multitask Learners
- ✅ GPT-3: Language Models are Few-Shot Learners

### Para explicar Arquitetura:
- ✅ Attention is All You Need
- ✅ BERT (para contraste)

### Para explicar Capacidades Emergentes:
- ✅ GPT-3: Language Models are Few-Shot Learners
- ✅ Survey: Comprehensive Overview of LLMs

### Para explicar Limitações (Alucinações):
- ✅ Survey: Factuality of Large Language Models

### Para explicar Controle:
- ✅ Survey: Controllable Text Generation

---

## 📊 ESTATÍSTICAS

**Total de páginas:** ~400+ páginas de conteúdo científico

**Distribuição:**
- Papers fundamentais: 4 (Transformer, GPT-1, GPT-2, GPT-3)
- Arquiteturas: 2 (BERT, GPT-BERT)
- Surveys: 3
- Open-source: 1 (GPT-NeoX)

**Período coberto:** 2017-2024 (7 anos de evolução)

**Autores notáveis inclusos:**
- Ashish Vaswani (Transformer)
- Ilya Sutskever (GPT-1, GPT-2)
- Tom Brown (GPT-3)
- Jacob Devlin (BERT)

---

## ✅ CHECKLIST DE USO

Antes da aula, certifique-se de:

- [ ] Ter lido ao menos 3 dos papers fundamentais
- [ ] Ter marcado páginas importantes para referência rápida
- [ ] Ter preparado screenshots de figuras importantes
- [ ] Ter citações prontas para os slides
- [ ] Ter exemplos práticos dos papers em mente

---

## 🔗 LINKS ORIGINAIS (Para referência)

Todos os PDFs foram baixados de fontes oficiais:
- **ArXiv:** https://arxiv.org/
- **OpenAI:** https://openai.com/research/

Para atualizações ou versões mais recentes, consulte os links originais listados em cada seção.

---

## 📝 NOTAS FINAIS

**Sobre Citações:**
Sempre cite a fonte original ao usar conteúdo destes papers em suas apresentações.

**Sobre Copyright:**
Todos estes papers estão disponíveis publicamente para fins educacionais e de pesquisa.

**Sobre Atualizações:**
Alguns papers podem ter versões atualizadas no ArXiv. Verifique a data da versão que você está usando.

---

**Compilado em:** 31 de janeiro de 2025

**Para:** George Marmelstein - Aulas 2025

**Aula:** 1 - LLMs como Máquinas de Transformação
