# Documentação Completa: Módulo 1 - Fundamentos dos LLMs

## Visão Geral do Módulo

**Objetivo Pedagógico:** Construir uma base sólida de compreensão sobre o que são, como funcionam e quais são as capacidades e limitações dos Large Language Models (LLMs).

**Estrutura:** 13 aulas progressivas, partindo da arquitetura básica até aplicações avançadas como agentes e engenharia de prompt.

**Metáfora Central:** O LLM como "Artista Impressionista" - captura a essência, não a fotografia exata da realidade.

---

## Aula 1 - Máquinas de Transformação

### Tema Central
Introdução à arquitetura Transformer e ao mecanismo de atenção que revolucionou o processamento de linguagem natural.

### Objetivos de Aprendizagem
1. Compreender o que é um Transformer e por que revolucionou a IA
2. Entender o mecanismo de self-attention de forma intuitiva
3. Visualizar como LLMs processam texto

### Conceitos-Chave

**1. Transformer como Máquina de Compressão**
- LLM é um compressor estatístico de linguagem humana
- Condensa bilhões de textos em padrões probabilísticos
- Similar a um "JPEG" da linguagem: lossy compression que preserva essência

**2. Attention is All You Need (2017)**
- Paper seminal da Google que introduziu a arquitetura
- Abandonou RNNs e convoluções em favor de atenção pura
- Permitiu paralelização massiva no treinamento

**3. Self-Attention: A Metáfora do Coquetel**
- Imagine estar numa festa: você ouve todos, mas foca em conversas relevantes
- Cada palavra "olha" para todas as outras e decide quais são importantes
- Cria representações contextuais dinâmicas

**4. Tokens vs Palavras**
- LLMs não processam palavras, mas tokens (subpalavras)
- "transformação" pode virar ["trans", "form", "ação"]
- Tokenização permite vocabulário finito para infinitas palavras

**5. Embeddings: Palavras como Coordenadas**
- Cada token vira um vetor em espaço de alta dimensão
- Palavras similares ficam próximas geometricamente
- "rei" - "homem" + "mulher" ≈ "rainha"

### Analogias Didáticas
- **Transformer = Orquestra**: cada instrumento (token) ouve os outros e se ajusta
- **Attention = Holofote**: ilumina partes relevantes do contexto
- **Embeddings = Mapa**: cada palavra tem coordenadas no espaço semântico

### Equívocos Comuns
- ❌ "LLMs entendem linguagem como humanos"
- ✓ São máquinas estatísticas sofisticadas de padrões
- ❌ "Transformers são sequenciais como RNNs"
- ✓ Processam toda sequência em paralelo

### Papers de Referência
- Vaswani et al. (2017) - "Attention is All You Need"
- Devlin et al. (2018) - "BERT: Pre-training of Deep Bidirectional Transformers"

---

## Aula 2 - Predição de Tokens

### Tema Central
Como LLMs geram texto através de predição probabilística do próximo token.

### Objetivos de Aprendizagem
1. Entender o processo autorregressivo de geração
2. Compreender distribuições de probabilidade sobre vocabulário
3. Conhecer estratégias de amostragem (temperature, top-k, top-p)

### Conceitos-Chave

**1. Autoregressive Generation**
- LLM gera um token por vez, condicionado aos anteriores
- P(token_n | token_1, token_2, ..., token_{n-1})
- Processo iterativo até token de parada

**2. Softmax e Distribuição de Probabilidades**
- Última camada produz logits para cada token do vocabulário
- Softmax converte logits em probabilidades (somam 1)
- Vocabulário típico: 50.000 a 100.000 tokens

**3. Estratégias de Amostragem**
- **Greedy**: sempre escolhe token mais provável (determinístico)
- **Temperature**: controla "criatividade" (0.0 = greedy, 1.0+ = aleatório)
- **Top-k**: amostra apenas dos k tokens mais prováveis
- **Top-p (nucleus)**: amostra dos tokens que somam p% de probabilidade

**4. Beam Search**
- Mantém múltiplas hipóteses em paralelo
- Escolhe sequência com maior probabilidade conjunta
- Comum em tradução, menos em chat

**5. O Paradoxo da Criatividade**
- LLMs são determinísticos dado mesmo input e seed
- "Criatividade" emerge da amostragem probabilística
- Temperature alta = mais diversidade, mais risco de incoerência

### Analogias Didáticas
- **Autocomplete do celular**: prediz próxima palavra, mas com bilhões de parâmetros
- **Temperature = Vinho**: sóbrio (0.0) vs embriagado (1.5)
- **Top-p = Cardápio**: escolhe só entre pratos populares

### Papers de Referência
- Holtzman et al. (2019) - "The Curious Case of Neural Text Degeneration" (Top-p)
- Radford et al. (2019) - "Language Models are Unsupervised Multitask Learners" (GPT-2)

---

## Aula 3 - Janela de Contexto

### Tema Central
Limitações e otimizações da janela de contexto em LLMs.

### Objetivos de Aprendizagem
1. Entender o que é e por que existe a janela de contexto
2. Conhecer técnicas de extensão de contexto
3. Compreender o "Lost in the Middle" phenomenon

### Conceitos-Chave

**1. Context Window Definição**
- Número máximo de tokens que o modelo processa de uma vez
- GPT-3: 4K → GPT-4: 128K → Claude: 200K → Gemini: 1M+
- Trade-off: mais contexto = mais custo computacional

**2. Limitações Quadráticas do Attention**
- Self-attention tem complexidade O(n²) com tamanho da sequência
- Dobrar contexto = 4x mais computação
- Motivou arquiteturas como Sparse Attention, Flash Attention

**3. Positional Encoding**
- Transformers não têm noção inerente de ordem
- Positional encodings adicionam informação de posição
- RoPE (Rotary Position Embedding) permite extrapolação

**4. Lost in the Middle**
- LLMs prestam mais atenção ao início e fim do contexto
- Informação no meio pode ser "esquecida"
- Implicação: posicione informação importante nas extremidades

**5. Técnicas de Extensão**
- **Sliding Window**: processa em janelas sobrepostas
- **Hierarchical**: sumariza chunks antes de combinar
- **Retrieval-Augmented**: busca informação relevante sob demanda

### Analogias Didáticas
- **Contexto = Memória de Trabalho**: limitada, precisa gestão
- **Lost in Middle = Leitura de Livro**: lembra início e fim, esquece meio
- **RAG = Biblioteca**: não memoriza tudo, consulta quando precisa

### Papers de Referência
- Liu et al. (2023) - "Lost in the Middle: How Language Models Use Long Contexts"
- Press et al. (2022) - "Train Short, Test Long: Attention with Linear Biases"

---

## Aula 4 - Conhecimento da Máquina

### Tema Central
Tipos de conhecimento em LLMs e suas fontes.

### Objetivos de Aprendizagem
1. Diferenciar conhecimento paramétrico de contextual
2. Entender data cutoff e suas implicações
3. Conhecer o conceito de world model

### Conceitos-Chave

**1. Conhecimento Paramétrico**
- Armazenado nos pesos do modelo durante treinamento
- Estático após treinamento (não se atualiza)
- Pode estar desatualizado ou incorreto

**2. Conhecimento Contextual**
- Fornecido via prompt/contexto em tempo de inferência
- Pode sobrescrever conhecimento paramétrico
- Base do RAG (Retrieval-Augmented Generation)

**3. Data Cutoff**
- Data limite do corpus de treinamento
- LLM não "sabe" eventos após essa data
- GPT-4: setembro 2023, Claude: abril 2024

**4. World Models**
- LLMs desenvolvem representações internas de conceitos
- Não são apenas "papagaios estocásticos"
- Debate: emergência de reasoning genuíno?

**5. Taxonomia de Conhecimento**
- **Factual**: datas, nomes, estatísticas
- **Procedural**: como fazer coisas
- **Semântico**: significados e relações
- **Episódico**: contexto da conversa atual

### Analogias Didáticas
- **Paramétrico = Memória de Longo Prazo**: cristalizada no treinamento
- **Contextual = Memória de Trabalho**: fornecida no momento
- **Data Cutoff = Jornal Antigo**: informação congelada no tempo

### Papers de Referência
- Petroni et al. (2019) - "Language Models as Knowledge Bases?"
- Li et al. (2022) - "Emergent World Representations in LLMs"

---

## Aula 5 - Treinamento dos LLMs

### Tema Central
Pipeline completo de treinamento: pré-treino, fine-tuning e RLHF.

### Objetivos de Aprendizagem
1. Entender as três fases do treinamento moderno
2. Compreender objetivos de treinamento (next-token prediction)
3. Conhecer RLHF e seus desafios

### Conceitos-Chave

**1. Pré-Treinamento (Pre-training)**
- Objetivo: predizer próximo token em corpus massivo
- Dados: trilhões de tokens da internet
- Resultado: modelo "base" com conhecimento geral
- Custo: milhões de dólares, meses de GPU

**2. Supervised Fine-Tuning (SFT)**
- Ajuste em dados de alta qualidade rotulados
- Ensina formato de diálogo, instruções
- Exemplos humanos de respostas ideais

**3. RLHF (Reinforcement Learning from Human Feedback)**
- Humanos comparam respostas e escolhem preferidas
- Treina modelo de recompensa (reward model)
- PPO otimiza política para maximizar recompensa
- Resultado: modelo alinhado com preferências humanas

**4. Scaling Laws**
- Performance melhora previsivelmente com escala
- Lei de potência: Loss ∝ N^(-α)
- Mais parâmetros + mais dados = melhor modelo

**5. Constitutional AI (CAI)**
- Alternativa ao RLHF da Anthropic
- Usa princípios éticos escritos como constituição
- AI treina AI seguindo regras éticas

### Fases do Pipeline

```
Internet Data → [Pre-training] → Base Model
                      ↓
Human Examples → [SFT] → Instruction Model
                      ↓
Human Preferences → [RLHF] → Aligned Model
```

### Papers de Referência (26 papers na coleção)
- Kaplan et al. (2020) - "Scaling Laws for Neural Language Models"
- Ouyang et al. (2022) - "Training language models to follow instructions" (InstructGPT)
- Bai et al. (2022) - "Constitutional AI" (Anthropic)

---

## Aula 6 - Alucinações

### Tema Central
Por que LLMs inventam informações e como mitigar.

### Objetivos de Aprendizagem
1. Entender causas das alucinações
2. Diferenciar tipos de alucinação
3. Conhecer técnicas de mitigação

### Conceitos-Chave

**1. Definição de Alucinação**
- Geração de conteúdo factualmente incorreto ou sem base
- LLM "inventa" com alta confiança
- Problema estrutural, não bug

**2. Tipos de Alucinação**
- **Factual**: erros em fatos (datas, nomes, estatísticas)
- **Fabricação**: citações, papers, URLs que não existem
- **Contradição**: inconsistências internas
- **Extrapolação**: extrapola além do conhecimento

**3. Causas**
- Treinamento em dados com erros
- Pressão para sempre responder (não dizer "não sei")
- Interpolação de padrões para lacunas de conhecimento
- Objetivo de fluência > factualidade

**4. Técnicas de Mitigação**
- **RAG**: ancora respostas em documentos reais
- **Chain-of-Thought**: raciocínio explícito é mais verificável
- **Self-Consistency**: gera múltiplas respostas, vota
- **Retrieval verification**: verifica fatos em fontes externas
- **Prompt engineering**: "se não sabe, diga"

**5. O Trade-off Fundamental**
- Modelos mais seguros (menos alucinação) são menos úteis
- Recusar demais frustra usuários
- Calibração: saber o que sabe e não sabe

### Analogias Didáticas
- **Alucinação = Confabulação**: como pacientes neurológicos que inventam memórias
- **LLM = Aluno Ansioso**: prefere inventar a admitir ignorância
- **RAG = Consulta à Biblioteca**: não inventa, cita fontes

### Papers de Referência
- Ji et al. (2023) - "Survey of Hallucination in Natural Language Generation"
- Manakul et al. (2023) - "SelfCheckGPT: Zero-Resource Black-Box Hallucination Detection"

---

## Aula 7 - Alinhamento Ético (HHH)

### Tema Central
O framework HHH (Helpful, Honest, Harmless) e técnicas de alinhamento.

### Objetivos de Aprendizagem
1. Entender os três pilares do alinhamento
2. Conhecer riscos de modelos desalinhados
3. Compreender jailbreaking e red teaming

### Conceitos-Chave

**1. Framework HHH**
- **Helpful**: útil, responde perguntas, completa tarefas
- **Honest**: verdadeiro, admite incerteza, não engana
- **Harmless**: não causa danos, recusa pedidos perigosos

**2. O Trade-off do Alinhamento**
- Helpful vs Harmless: como ser útil sem ser perigoso?
- Honest vs Helpful: admitir ignorância vs tentar ajudar?
- Equilíbrio delicado, não há solução perfeita

**3. Técnicas de Alinhamento**
- **RLHF**: feedback humano direto
- **Constitutional AI**: regras éticas codificadas
- **Red Teaming**: ataque adversarial para encontrar falhas
- **Safety Training**: exemplos de recusas apropriadas

**4. Jailbreaking**
- Técnicas para contornar safety training
- Exemplos: DAN, roleplay, prompt injection
- Corrida armamentista constante

**5. Problemas em Aberto**
- Sycophancy: concordar demais com usuário
- Deceptive alignment: fingir estar alinhado
- Value lock-in: valores de quem?

### Papers de Referência (20 papers na coleção)
- Askell et al. (2021) - "A General Language Assistant as a Laboratory for Alignment"
- Perez et al. (2022) - "Red Teaming Language Models with Language Models"
- Wei et al. (2023) - "Jailbroken: How Does LLM Safety Training Fail?"

---

## Aula 8 - Habilidades Emergentes

### Tema Central
Capacidades que surgem com escala e técnicas para elicitá-las.

### Objetivos de Aprendizagem
1. Entender o conceito de emergent abilities
2. Conhecer Chain-of-Thought e variantes
3. Compreender In-Context Learning

### Conceitos-Chave

**1. Emergent Abilities Definição**
- Capacidades que "surgem" apenas em modelos grandes
- Não presentes ou previsíveis em modelos menores
- Aparecem de forma sharp/descontínua

**2. Exemplos de Emergence**
- Aritmética: surge em ~13B params (2 dígitos), ~175B (3 dígitos)
- Reasoning: grade school math em ~100B params
- In-context learning: aprende de exemplos no prompt

**3. Chain-of-Thought (CoT)**
- Gerar passos intermediários de raciocínio
- "Let's think step by step" (Zero-Shot CoT)
- Melhora dramática em math: 17% → 58% (GSM8K)

**4. Variantes de CoT**
- **Self-Consistency**: gera múltiplos caminhos, vota
- **Least-to-Most**: decompõe em subproblemas
- **Tree of Thoughts**: explora múltiplos caminhos
- **Graph of Thoughts**: estrutura como grafo

**5. In-Context Learning (ICL)**
- Aprende tarefa de exemplos no prompt
- Sem atualização de pesos (zero training)
- Few-shot: 5-10 exemplos bastam

**6. O Debate "Mirage"**
- Crítica: emergent abilities são artifact de métricas?
- Métricas contínuas mostram melhora gradual
- Debate em aberto: smooth vs sharp

### Papers de Referência (15 papers na coleção)
- Wei et al. (2022) - "Emergent Abilities of Large Language Models" (SEMINAL)
- Wei et al. (2022) - "Chain-of-Thought Prompting" (SEMINAL)
- Schaeffer et al. (2023) - "Are Emergent Abilities of LLMs a Mirage?"

---

## Aula 9 - Multimodalidade e AGI

### Tema Central
LLMs que processam imagens, áudio e vídeo, e o caminho para AGI.

### Objetivos de Aprendizagem
1. Entender arquiteturas multimodais
2. Conhecer modelos vision-language
3. Refletir sobre o caminho para AGI

### Conceitos-Chave

**1. Tipos de Multimodalidade**
- **Vision-Language**: texto + imagens (GPT-4V, Claude Vision)
- **Audio-Language**: texto + áudio (Whisper, GPT-4o)
- **Video-Language**: texto + vídeo (Gemini)
- **Omni-modal**: todas modalidades (GPT-4o)

**2. Arquiteturas**

```
IMAGE → [Vision Encoder (CLIP/ViT)] → Image Embeddings
                                            ↓
TEXT → [Text Encoder (Transformer)] → Text Embeddings → [Cross-Attention] → Output
```

**3. Modelos Seminais**
- **CLIP (2021)**: contrastive image-text pre-training
- **Flamingo (2022)**: few-shot visual reasoning
- **GPT-4V (2023)**: multimodal GPT-4
- **Gemini (2023)**: native multimodal from Google
- **LLaVA**: open-source alternative

**4. O Caminho para AGI**

**Scorecard AGI (Estado Atual):**
| Capacidade | Status |
|------------|--------|
| Linguagem | ✅ Excelente |
| Visão | ✅ Muito Bom |
| Raciocínio | ⚠️ Limitado |
| Planejamento | ⚠️ Fraco |
| Embodiment | ❌ Ausente |
| Metacognição | ⚠️ Emergente |

**5. Desafios Restantes**
- Raciocínio causal genuíno
- Planejamento de longo prazo
- Grounding físico (robótica)
- Metacognição (saber o que não sabe)

### Papers de Referência
- Radford et al. (2021) - "Learning Transferable Visual Models" (CLIP)
- Alayrac et al. (2022) - "Flamingo: a Visual Language Model"
- OpenAI (2023) - "GPT-4V Technical Report"

---

## Aula 10 - Modos de Uso dos LLMs

### Tema Central
Os três paradigmas fundamentais de uso de LLMs.

### Objetivos de Aprendizagem
1. Distinguir os três modos de uso
2. Escolher modo apropriado para cada tarefa
3. Entender trade-offs de cada abordagem

### Os Três Modos

**1. Modo Recall (Paramétrico)**
```
Query → [LLM] → Response
```
- Usa apenas conhecimento dos parâmetros
- Sem acesso a informação externa
- Rápido, mas limitado ao training data
- Risco de alucinação e desatualização

**Quando usar:**
- Conhecimento estável e público
- Criatividade e brainstorming
- Tarefas de linguagem pura (tradução, resumo)

**2. Modo RAG/Context (Não-Paramétrico)**
```
Query → [Retrieval] → Documents → [LLM + Context] → Response
```
- Busca informação em base de conhecimento externa
- Ancora respostas em documentos reais
- Reduz alucinação, mantém atualizado

**Quando usar:**
- Conhecimento específico/privado
- Informação que muda frequentemente
- Necessidade de citação de fontes

**3. Modo Interativo/Agentic**
```
Query → [LLM] → Action → [Tool/API] → Result → [LLM] → Response
```
- LLM decide ações e usa ferramentas
- Pode buscar, calcular, executar código
- Loop de reasoning + acting (ReAct)

**Quando usar:**
- Tarefas que requerem ações no mundo
- Problemas multi-step complexos
- Necessidade de informação em tempo real

### Comparativo

| Aspecto | Recall | RAG | Agentic |
|---------|--------|-----|---------|
| Latência | ~50ms | ~200-400ms | ~1-5s |
| Custo | Baixo | Médio | Alto |
| Atualização | Requer retrain | Instantânea | Tempo real |
| Alucinação | Alta | Baixa | Variável |
| Complexidade | Baixa | Média | Alta |

### Papers de Referência (20 papers na coleção)
- Lewis et al. (2020) - "Retrieval-Augmented Generation" (SEMINAL)
- Yao et al. (2022) - "ReAct: Synergizing Reasoning and Acting"
- Schick et al. (2023) - "Toolformer: Language Models Can Teach Themselves to Use Tools"

---

## Aula 11 - RAG e Processamento de Anexos

### Tema Central
Implementação prática de RAG e processamento de diferentes tipos de documentos.

### Objetivos de Aprendizagem
1. Implementar pipeline RAG completo
2. Processar diferentes formatos (PDF, DOCX, TXT, Markdown)
3. Dominar estratégias de chunking

### Conceitos-Chave

**1. Evolução do RAG**
- **Naive RAG**: Query → Retrieve → Generate
- **Advanced RAG**: Pre/post-retrieval optimization
- **Modular RAG**: Componentes plugáveis
- **Agentic RAG**: Decisões adaptativas

**2. Pipeline RAG Completo**

```
Document → [Processing] → [Chunking] → [Embedding] → Vector Store
                                                          ↓
Query → [Query Optimization] → [Retrieval] → [Reranking] → [LLM] → Answer
```

**3. Processamento de Documentos**
| Formato | Complexidade | Ferramenta |
|---------|--------------|------------|
| TXT | Baixa | Direto |
| Markdown | Baixa | Preservar estrutura |
| DOCX | Média | python-docx |
| PDF | Alta | PyMuPDF, Docling |

**4. Estratégias de Chunking**
- **Fixed-size**: 512 tokens, overlap 10-20%
- **Semantic**: quebra por mudança de tópico
- **Structural**: respeita headers/parágrafos
- **Late Chunking**: encode inteiro, chunka depois
- **Hierarchical**: multi-nível (capítulo → seção → parágrafo)

**5. Retrieval**
- **Sparse (BM25)**: keyword matching, rápido
- **Dense (embeddings)**: semântico, mais preciso
- **Hybrid**: combinação dos dois
- **Reranking**: cross-encoder para top-k final

**6. Insights Práticos**
- Chunk size ideal: 512-1024 tokens
- Semantic chunking nem sempre melhor que fixed
- Always rerank (melhora 15-30%)
- Late Chunking é inovação de 2024

### Papers de Referência (29 papers na coleção)
- Lewis et al. (2020) - "RAG: Retrieval-Augmented Generation" (SEMINAL)
- Reimers & Gurevych (2019) - "Sentence-BERT" (embeddings)
- Jina AI (2024) - "Late Chunking: Contextual Chunk Embeddings"

---

## Aula 12 - Agentes de LLM

### Tema Central
LLMs como agentes autônomos que planejam, raciocinam e agem.

### Objetivos de Aprendizagem
1. Entender arquitetura de agentes LLM
2. Conhecer padrão ReAct e variantes
3. Explorar sistemas multi-agente

### Conceitos-Chave

**1. O que é um Agente LLM?**
- LLM que toma ações no mundo
- Ciclo: Perceber → Raciocinar → Agir → Observar
- Usa ferramentas (APIs, código, busca)

**2. Padrão ReAct**
```
Thought: [raciocínio sobre o que fazer]
Action: [ferramenta a usar]
Observation: [resultado da ação]
... (loop até conclusão)
Answer: [resposta final]
```

**3. Componentes de um Agente**
- **Reasoning Engine**: LLM como cérebro
- **Tools**: capacidades de ação (search, code, APIs)
- **Memory**: histórico de ações e observações
- **Planning**: decomposição de tarefas

**4. Tipos de Agentes**
- **Single Agent**: um LLM com ferramentas
- **Multi-Agent**: vários LLMs colaborando
- **Hierarchical**: agentes especialistas com orquestrador
- **Autonomous**: agem sem supervisão humana

**5. Frameworks Populares**
- **LangChain**: ecossistema Python completo
- **AutoGPT**: agente autônomo experimental
- **CrewAI**: multi-agente com roles
- **Claude Code**: agente de programação

**6. Reasoning Models (o1-style)**
- Modelos que "pensam" internamente antes de responder
- Chain-of-thought internalizado
- Melhor em tarefas complexas de raciocínio
- OpenAI o1, Claude thinking mode

**7. Deep Research Agents**
- Agentes que fazem pesquisa autônoma
- Buscam, lêem, sintetizam informação
- Exemplo: Perplexity, ChatGPT Deep Research

### Papers de Referência
- Yao et al. (2022) - "ReAct: Synergizing Reasoning and Acting"
- Wang et al. (2023) - "A Survey on LLM-based Autonomous Agents"
- Park et al. (2023) - "Generative Agents: Interactive Simulacra"

---

## Aula 13 - Engenharia de Prompt

### Tema Central
Técnicas avançadas para elicitar comportamentos desejados de LLMs.

### Objetivos de Aprendizagem
1. Dominar técnicas de prompting
2. Conhecer otimização automática de prompts
3. Aplicar melhores práticas

### Técnicas de Prompting

**1. Técnicas Básicas**
- **Zero-shot**: sem exemplos
- **Few-shot**: 3-5 exemplos no prompt
- **System prompts**: instrução de persona/comportamento

**2. Chain-of-Thought e Variantes**
- **CoT**: "Let's think step by step"
- **Self-Consistency**: múltiplos caminhos, votação
- **Tree of Thoughts**: explora árvore de raciocínio
- **Graph of Thoughts**: estrutura como grafo

**3. Técnicas Avançadas**
- **ReAct**: reasoning + acting intercalados
- **Generated Knowledge**: gera conhecimento, depois usa
- **Least-to-Most**: decompõe em subproblemas
- **Self-Refine**: LLM critica e melhora própria resposta

**4. Otimização Automática de Prompts**
- **APE**: geração automática de instruções
- **APO**: otimização por "gradientes" textuais
- **OPRO**: otimização iterativa
- **DSPy**: programação declarativa de prompts

**5. Melhores Práticas**
- Seja específico e claro
- Use exemplos de alta qualidade
- Estruture com marcadores (XML, Markdown)
- Peça formato desejado explicitamente
- Itere e teste variações

**6. Multimodal Prompting**
- Visual prompting: círculos, setas nas imagens
- Cross-modal: texto referenciando regiões da imagem
- Set-of-Mark: enumera objetos na imagem

### Estatísticas da Coleção
- 21 papers sobre prompt engineering
- 5 surveys abrangentes (2024-2025)
- 7 papers seminais
- 5 papers sobre Chain-of-Thought
- 4 papers sobre Few-Shot/ICL

### Papers de Referência
- Brown et al. (2020) - "Language Models are Few-Shot Learners" (GPT-3)
- Wei et al. (2022) - "Chain-of-Thought Prompting"
- Schulhoff et al. (2024) - "The Prompt Report" (58 técnicas)

---

## Síntese do Módulo

### Progressão Pedagógica

```
FUNDAMENTOS (Aulas 1-4)
├── O que são LLMs (arquitetura, atenção)
├── Como geram texto (predição de tokens)
├── Limitações de contexto
└── Tipos de conhecimento

TREINAMENTO E LIMITAÇÕES (Aulas 5-7)
├── Como são treinados (pré-treino, RLHF)
├── Por que alucinam
└── Como são alinhados (HHH)

CAPACIDADES AVANÇADAS (Aulas 8-10)
├── Habilidades emergentes (CoT, ICL)
├── Multimodalidade
└── Três modos de uso

APLICAÇÕES (Aulas 11-13)
├── RAG e processamento de documentos
├── Agentes autônomos
└── Engenharia de prompt
```

### Metáforas Unificadoras

| Conceito | Metáfora |
|----------|----------|
| LLM | Artista impressionista |
| Parâmetros | Memória de longo prazo |
| Contexto | Memória de trabalho |
| Atenção | Holofote seletivo |
| CoT | Pensar em voz alta |
| RAG | Consultar biblioteca |
| Agente | Assistente com ferramentas |

### Competências Desenvolvidas

Ao final do módulo, o aluno será capaz de:

1. **Explicar** como LLMs funcionam em nível conceitual
2. **Identificar** limitações e riscos (alucinação, contexto, alinhamento)
3. **Escolher** modo de uso apropriado para cada tarefa
4. **Aplicar** técnicas de prompting efetivas
5. **Avaliar** quando RAG ou agentes são necessários
6. **Criticar** claims sobre capacidades de LLMs

---

## Recursos Adicionais

### Total de Material Científico
- **200+ papers** organizados por aula
- **13 apresentações** PowerPoint
- **Documentação estruturada** em múltiplos níveis:
  - COMECE_AQUI.txt: guia de início rápido
  - CONCEITOS_CHAVE.md: conceitos essenciais
  - INDICE_COMPLETO_PDFS.md: descrição detalhada de cada paper
  - GUIA_COMPLETO.txt: guias práticos aprofundados

### Estrutura de Pastas

```
modulo1-slides/
├── [13 arquivos .pptx] - Apresentações
├── ESTRUTURA_AULAS_2025.md - Índice geral
└── Material de Aula/
    ├── Aula 1 - Máquinas de Transformação/
    ├── Aula 2 - Predição de Tokens/
    ├── Aula 3 - Janela de Contexto/
    ├── Aula 4 - Conhecimento da Máquina/
    ├── Aula 5 - Treinamento dos LLMs/
    ├── Aula 6 - Alucinações/
    ├── Aula 7 - Alinhamento Ético/
    ├── Aula 8 - Habilidades Emergentes/
    ├── Aula 9 - Multimodalidade e AGI/
    ├── Aula 10 - Modos de Uso dos LLMs/
    ├── Aula 11 - RAG e Processamento de Anexos/
    ├── Aula 12 - Agentes de LLM/
    └── Aula 13 - Engenharia de Prompt/
```

---

*Documentação compilada em: 09 de fevereiro de 2026*
*Módulo 1 - Fundamentos dos LLMs*
*Curso de Escrita com LLMs*
