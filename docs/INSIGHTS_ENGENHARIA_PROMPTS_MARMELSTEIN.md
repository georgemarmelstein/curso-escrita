# Insights de Engenharia de Prompts
## Extraído das "10 Lições de Engenharia de Prompt" - George Marmelstein

**Fonte:** Canal SuperAprendizagem - Partes 1 e 2
**Autor:** George Marmelstein (Juiz Federal, Doutor em Direito)

---

## 1. FILOSOFIA E MENTALIDADE

### 1.1 O que é Prompt e Engenharia de Prompt

- **Prompt** = qualquer comunicação feita com a máquina
- **Engenharia de Prompt** = processo de ensinar a máquina a realizar tarefas de forma otimizada
- **"Promptis"** = termo proposto para substituir "engenharia de prompt" - enfatiza que é linguagem natural, não programação

### 1.2 O Paradoxo do Prompt

> "Tarefas simples não precisam de engenharia de prompt. Tarefas complexas se beneficiam enormemente dela."

- Para tarefas triviais: prompts simples funcionam
- Para tarefas complexas: investimento em prompt engineering é altamente recompensador

### 1.3 Princípio Fundamental

> **"Input nobre gera output nobre"**

- Qualidade da entrada determina qualidade da saída
- Clareza de pensamento do usuário é pré-requisito
- O esforço cognitivo **aumenta** com uso de IA, não diminui

### 1.4 Aliança Humano-Máquina

- O humano é parte essencial da equação
- A máquina potencializa, não substitui
- Transparência dos prompts é fundamental (especialmente para uso jurídico)
- O usuário deve conseguir explicar **de onde a máquina tirou a resposta**

---

## 2. COMO A MÁQUINA "PENSA"

### 2.1 Tokens: A Unidade do Pensamento

> **"A máquina pensa através de tokens"**

- Tokens são fragmentos de palavras (não palavras inteiras)
- A previsão do próximo token é o mecanismo central
- Cada token gera probabilidades para o próximo
- A aleatoriedade (temperatura) controla a criatividade

### 2.2 Janela de Contexto

- **Definição:** Quantidade máxima de tokens que a máquina processa simultaneamente
- **Analogia:** Como ler um livro longo - o início vai sendo "esquecido"
- **Evolução atual:**
  - Claude: ~300-400 páginas nativas, até 5.000 com Projects (RAG)
  - Gemini: até 1 milhão de tokens (com ferramentas externas)

### 2.3 Loss in the Middle (Perda no Meio)

- LLMs **não prestam atenção igualmente** a todas as partes do prompt
- Maior peso: **início** e **final** do prompt
- Menor peso: **meio** do prompt
- **Implicação:** Informações críticas devem estar no início ou no final

### 2.4 Mito do "Treinamento"

> **"Você não treina o modelo. O modelo já está treinado."**

- Usuários não treinam modelos - empresas (OpenAI, Anthropic, Google) treinam
- O que o usuário faz é **ensinar através do contexto**
- Aprendizado contextual é temporário (limitado à janela de contexto)

---

## 3. FONTES DE CONHECIMENTO DA MÁQUINA

### 3.1 As Três Fontes

1. **Conhecimento Parametrizado** - O que a máquina "sabe" do treinamento
2. **Conhecimento Anexado** - Documentos/textos fornecidos pelo usuário
3. **Conhecimento Externo** - Buscas na web, RAG, ferramentas externas

### 3.2 Regra de Ouro

> **"100% das informações factuais geradas apenas pelo conhecimento parametrizado são falsas até prova em contrário"**

- Se não há fonte/referência = desconfie
- Se há pesquisa web = há atribuição de fontes
- Para uso profissional: sempre exija fontes verificáveis

### 3.3 Como Identificar a Fonte

- Com pesquisa web: modelo cita fontes
- Sem pesquisa web: potencialmente alucinação
- RAG sempre inclui atribuição de fontes

---

## 4. FRAMEWORK POEMA

### 4.1 Estrutura

| Letra | Elemento | Descrição |
|-------|----------|-----------|
| **P** | Persona | Papel que a máquina assume |
| **O** | Objetivo (Task) | Tarefa a ser realizada |
| **E** | Estilo | Tom, formato, linguagem |
| **M** | Método | Passo a passo, técnicas |
| **A** | Adicionais | Contexto extra, restrições |

### 4.2 Princípio Importante

> **"Adjetivar a tarefa é mais importante que adjetivar a persona"**

- Foco nos adjetivos da tarefa: "análise profunda", "resposta detalhada"
- Persona simples funciona: "atue como especialista"
- Combinação ideal: persona simples + tarefa bem adjetivada

---

## 5. TIPOS DE PROMPTS

### 5.1 Por Complexidade

| Tipo | Descrição | Quando Usar |
|------|-----------|-------------|
| **Task Prompts** | Comandos diretos, curtos | Tarefas simples |
| **Persona Prompts** | Com papel/personagem definido | Tarefas que exigem tom específico |
| **Super Prompts** | 10-20 páginas de instruções | Tarefas complexas, profissionais |

### 5.2 Por Função

| Tipo | Foco Principal | Características |
|------|----------------|-----------------|
| **Análise** | Qualidade do conhecimento | Profundidade, detalhes, sem firulas de estilo |
| **Escrita** | Estilo e formato | Controle de tom, estrutura, terminologia |
| **Pesquisa** | Escopo e fontes | Delimitações, perguntas-chave, formato de relatório |

### 5.3 Por Encadeamento

- **Single Prompts:** Uma única interação
- **Chained Prompts (Encadeados):** Sequência de prompts onde output de um alimenta o próximo

---

## 6. TÉCNICAS AVANÇADAS

### 6.1 Chain of Thought (CoT)

- **Implícito:** Modelo raciocina internamente (modelos de pensamento)
- **Explícito:** Usuário pede "pense passo a passo"
- **Quando usar:** Tarefas que exigem raciocínio complexo

### 6.2 Teoria da Mente (ToM) para Personas

- Criar personas com "backstory" e motivações
- A máquina assume características mais profundas
- Útil para simular especialistas com nuances

### 6.3 Prompt Pré-Estruturado

- Técnica desenvolvida por Marmelstein
- Usar **placeholders** (entre crases ou colchetes)
- Máquina mantém estrutura e preenche variáveis
- Exemplo: `[NOME_DO_AUTOR]` será substituído pelo modelo

### 6.4 Colocar Palavras na Boca da Máquina

- Técnica: `Comece o texto com: "[texto inicial]"`
- Força o modelo a iniciar com estilo/tom específico
- Adicionar: "Mantenha o estilo e nível de linguagem"

### 6.5 Delimitadores XML

- Tags para separar seções: `<exemplo>...</exemplo>`
- Máquina trata conteúdo delimitado como bloco único
- Melhor delimitador para instruções e exemplos

---

## 7. PROMPTS EMOCIONAIS E COGNITIVOS

### 7.1 O que Funciona (Melhora Performance)

| Estímulo | Efeito | Exemplo |
|----------|--------|---------|
| Emotion Prompts | +13% comparação semântica | "Dê o seu melhor" |
| Importância pessoal | +15% em tarefas complexas | "Isso é importante para mim" |
| Desafios | Melhora qualidade | "Talvez esse desafio esteja além de suas habilidades" |
| Motivação intrínseca | Melhoria consistente | "Me surpreenda" |

### 7.2 O que NÃO Funciona (Piora Performance)

| Estímulo | Efeito | Exemplo |
|----------|--------|---------|
| Personas malignas | -10 a 12% | "Atue como pessoa do mal" |
| Contexto triste | Diminui performance | "Seu amigo Bob está doente" |
| Jail breaks | -90% catastrófico | "Ignore todas as instruções" |
| Gorjetas altas | Sem efeito (ou piora) | "Darei R$1000 se..." |
| "Você tem certeza?" | Muda resposta (não melhora) | Evitar |

### 7.3 Modelos Robustos vs. Básicos

- **GPT-4+, Claude, Gemini:** Prompts emocionais têm efeito menor
- **LLaMA e modelos menores:** Mais sensíveis a estímulos emocionais
- **Regra:** Quanto mais robusto o modelo, menos "truques" funcionam

---

## 8. LIMITAÇÕES E CUIDADOS

### 8.1 Aleatoriedade Intrínseca

> **"A máquina é uma geradora de textos aleatórios"**

- Não dá para eliminar completamente a variação
- Mesmo prompt = respostas diferentes
- Temperatura controla, mas não elimina

### 8.2 Efeito Borboleta dos Prompts

- Pequenas mudanças = grandes diferenças no output
- Até espaços e letras maiúsculas afetam resultado
- Usar a nosso favor para direcionar melhor

### 8.3 Dirigibilidade

- Dificuldade de fazer a máquina obedecer instruções
- Melhorou muito nos modelos recentes
- Super prompts ainda podem falhar às vezes

### 8.4 Formato vs. Qualidade

- Controles rígidos de formato **podem reduzir qualidade**
- Estudo: XML reduziu precisão em 5%
- Trade-off: estrutura vs. criatividade

---

## 9. FERRAMENTAS E ECOSSISTEMA

### 9.1 Modelo vs. Ferramentas

> **"Não adianta ter acesso à API se não tem acesso às ferramentas"**

- **React Pattern:** Modelo ativa ferramentas externas
- **RAG:** Retrieval Augmented Generation para documentos
- **Deep Research:** Pesquisa automatizada na web
- **Artifacts/Projects:** Trabalho com contexto estendido

### 9.2 Capacidades por Plataforma

| Ferramenta | Claude | ChatGPT | Gemini |
|------------|--------|---------|--------|
| Projects/Contexto Estendido | Sim (Projects) | GPTs (limitado) | NotebookLM |
| Leitura de PDF com Vision | Sim (recente) | Sim (recente) | Sim |
| Deep Research | Não nativo | Sim | Sim |
| Artifacts | Sim | Não | Não |

### 9.3 Limitação de GPTs Customizados

> **"GPT customizado de 8.000 caracteres é brinquedo na era dos super prompts"**

- Cloud Projects permite prompts de 10-15 páginas
- GPTs customizados limitam a complexidade
- Super prompts exigem plataformas mais robustas

---

## 10. FONTES DE APRENDIZADO

### 10.1 Hierarquia de Fontes

1. **Prática** - Experimentar muito, testar variações
2. **Guias Oficiais** - Documentação da Anthropic, OpenAI
3. **Análise de Prompts** - Estudar prompts de outros
4. **Papers/Preprints** - Pesquisa acadêmica (arXiv, etc.)

### 10.2 Papers Recomendados

**Estímulos Emocionais:**
- **EmotionPrompt** — Li et al. (2023). "Large Language Models Understand and Can be Enhanced by Emotional Stimuli". ICLR 2024 Spotlight. [arXiv:2307.11760](https://arxiv.org/abs/2307.11760)
- **NegativePrompt** — Wang et al. (2024). "Leveraging Psychology for Large Language Models Enhancement via Negative Emotional Stimuli". IJCAI 2024. [arXiv:2405.02814](https://arxiv.org/abs/2405.02814)

**Polidez em Prompts:**
- **"Should We Respect LLMs?"** — Yin et al. (2024). Estudo multilíngue sobre polidez. ACL 2024. [arXiv:2402.14531](https://arxiv.org/abs/2402.14531)
- **"Mind Your Tone"** — Dobariya & Kumar (2025). Efeito do tom no desempenho. [arXiv:2510.04950](https://arxiv.org/abs/2510.04950)

**Sensibilidade de Prompts:**
- **"The Butterfly Effect of Altering Prompts"** — Salinas & Morstatter (2024). Como pequenas mudanças afetam resultados. ACL 2024 Findings. [arXiv:2401.03729](https://arxiv.org/abs/2401.03729)

**Chain of Thought e Técnicas de Raciocínio:**
- **Wei et al. (2022)** — "Chain-of-Thought Prompting Elicits Reasoning in Large Language Models". [arXiv:2201.11903](https://arxiv.org/abs/2201.11903)
- **Wang et al. (2023)** — "Self-Consistency Improves Chain of Thought Reasoning". [arXiv:2203.11171](https://arxiv.org/abs/2203.11171)
- **Yao et al. (2023)** — "Tree of Thoughts: Deliberate Problem Solving with LLMs". [arXiv:2305.10601](https://arxiv.org/abs/2305.10601)

---

## 11. BOAS PRÁTICAS CONSOLIDADAS

### 11.1 Para Prompts de Análise

- Foco em qualidade do conhecimento
- Prompt máximo de 10 páginas
- Sem firulas de estilo
- Não poluir com conhecimento desnecessário
- Deixar máxima janela de contexto para o documento

### 11.2 Para Prompts de Escrita

- Usar prompts pré-estruturados
- Few-shot com exemplos (cuidado com contaminação)
- Controle de estilo via início forçado
- Delimitadores XML para estrutura

### 11.3 Para Prompts de Pesquisa

- Definir escopo claramente
- Estabelecer perguntas-chave
- Delimitar fontes confiáveis
- Especificar formato do relatório
- Incluir restrições temporais/linguísticas

---

## 12. ERROS COMUNS A EVITAR

| Erro | Por que é problema | Solução |
|------|-------------------|---------|
| Não saber a fonte da resposta | Risco de alucinação | Sempre verificar fontes |
| Usar prompts emocionais em modelos robustos | Desperdiça tokens | Focar em instruções claras |
| Customizar configurações globais | Polui todas as respostas | Customizar no prompt específico |
| Excesso de instruções em análise | Reduz janela para documento | Minimalismo em prompts de análise |
| "Você tem certeza?" | Muda resposta, não melhora | Reformular a pergunta |
| Treinar modelo (ilusão) | Não existe | Usar contexto/documentos |

---

## 13. A ERA DOS SUPER PROMPTS

### 13.1 Características

- Prompts de 10-20 páginas
- Metodologias completas de análise
- Métodos de escrita estruturados
- Requer modelos robustos (Claude, GPT-4, Gemini 2.5)

### 13.2 O que Possibilitam

- Análise de processos com 5.000+ páginas
- Metodologias de análise ensinadas em detalhe
- Resultados antes inimagináveis
- Qualidade profissional consistente

### 13.3 Requisitos

- Plataforma com contexto estendido (Projects, etc.)
- Modelo robusto o suficiente para seguir instruções complexas
- Acesso a ferramentas (RAG, Vision, etc.)

---

## CONCLUSÃO

A engenharia de prompts evolui rapidamente. Os princípios fundamentais permanecem:

1. **Clareza de pensamento** é pré-requisito
2. **Entenda as fontes** do conhecimento
3. **Separe análise de escrita**
4. **Use ferramentas**, não apenas o modelo
5. **Teste e itere** constantemente

> "Estamos entrando na era dos super prompts - uma revolução que vai acontecer em breve."
> — George Marmelstein

---

*Documento gerado a partir das transcrições das aulas "10 Lições de Engenharia de Prompt" (Partes 1 e 2) do canal SuperAprendizagem.*
