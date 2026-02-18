# Índice de Papers sobre Engenharia de Prompt

## Surveys sobre Prompt Engineering (2024-2025)

### 1. **Sahoo et al. (2024) - A Systematic Survey of Prompt Engineering**
- **Arquivo**: `Surveys_Prompt_Engineering_2025/Sahoo_2024_Systematic_Survey_Prompt_Engineering.pdf`
- **arXiv**: 2402.07927
- **Resumo**: Análise sistemática de mais de 41 técnicas distintas de prompt engineering, categorizadas por suas diversas aplicações. Fornece metodologia de prompting, aplicações, modelos envolvidos e datasets utilizados.

### 2. **Schulhoff et al. (2024) - The Prompt Report**
- **Arquivo**: `Surveys_Prompt_Engineering_2025/Schulhoff_2024_The_Prompt_Report.pdf`
- **arXiv**: 2406.06608
- **Resumo**: Survey mais abrangente até o momento, apresentando 33 termos de vocabulário, taxonomia de 58 técnicas de prompting para LLMs e 40 técnicas para outras modalidades. Inclui melhores práticas e diretrizes.

### 3. **Survey of Automatic Prompt Engineering (2025)**
- **Arquivo**: `Surveys_Prompt_Engineering_2025/Survey_Automatic_Prompt_Engineering_2025.pdf`
- **arXiv**: 2502.11560
- **Resumo**: Primeiro survey abrangente sobre engenharia automática de prompts através de uma perspectiva de otimização, formalizando a otimização de prompts como um problema de maximização.

### 4. **Visual Prompting in Multimodal LLMs (2024)**
- **Arquivo**: `Surveys_Prompt_Engineering_2025/Visual_Prompting_MLLM_Survey_2024.pdf`
- **arXiv**: 2409.15310
- **Resumo**: Primeiro survey abrangente sobre métodos de visual prompting em modelos multimodais, focando em grounding visual, referência a objetos e raciocínio composicional.

### 5. **Gu et al. - Vision-Language Prompting Survey**
- **Arquivo**: `Surveys_Prompt_Engineering_2025/Gu_Survey_Vision_Language_Prompting.pdf`
- **arXiv**: 2307.12980
- **Resumo**: Survey sistemático cobrindo três tipos de modelos visão-linguagem: geração multimodal-para-texto, matching imagem-texto, e geração texto-para-imagem.

---

## Papers Seminais sobre Prompting

### 1. **Brown et al. (2020) - GPT-3: Language Models are Few-Shot Learners**
- **Arquivo**: `Papers_Seminal_Prompting/Brown_2020_GPT3_Few_Shot_Learners.pdf`
- **arXiv**: 2005.14165
- **Resumo**: Paper seminal do GPT-3 demonstrando que escalar modelos de linguagem melhora drasticamente o desempenho few-shot. Modelo com 175 bilhões de parâmetros.

### 2. **Kojima et al. (2022) - Large Language Models are Zero-Shot Reasoners**
- **Arquivo**: `Papers_Seminal_Prompting/Kojima_2022_Zero_Shot_Reasoners.pdf`
- **arXiv**: 2205.11916
- **Resumo**: Demonstra que LLMs são razoadores zero-shot simplesmente adicionando "Let's think step by step" antes de cada resposta. Altamente influente.

### 3. **Liu et al. (2022) - Generated Knowledge Prompting**
- **Arquivo**: `Papers_Seminal_Prompting/Liu_2022_Generated_Knowledge_Prompting.pdf`
- **arXiv**: 2110.08387
- **Resumo**: Técnica que consiste em gerar conhecimento a partir de um LLM e depois fornecer esse conhecimento como input adicional ao responder questões.

### 4. **Yao et al. (2022) - ReAct: Synergizing Reasoning and Acting**
- **Arquivo**: `Papers_Seminal_Prompting/Yao_2022_ReAct_Reasoning_Acting.pdf`
- **arXiv**: 2210.03629
- **Resumo**: Explora o uso de LLMs para gerar traços de raciocínio e ações de forma intercalada, permitindo maior sinergia entre raciocínio e ação.

### 5. **Zhou et al. (2022) - APE: Automatic Prompt Engineering**
- **Arquivo**: `Papers_Seminal_Prompting/Zhou_2022_APE_Automatic_Prompt_Engineering.pdf`
- **arXiv**: 2211.01910
- **Resumo**: Propõe APE para geração e seleção automática de instruções, descobrindo prompts melhores que os criados por humanos em 19/24 tarefas.

### 6. **Pryzant et al. (2023) - APO: Automatic Prompt Optimization**
- **Arquivo**: `Papers_Seminal_Prompting/Pryzant_2023_APO_Gradient_Descent.pdf`
- **arXiv**: 2305.03495
- **Resumo**: Usa "gradientes" em linguagem natural que criticam prompts, aplicando busca em feixe para otimização automática.

### 7. **Wen et al. (2023) - Hard Prompts Made Easy**
- **Arquivo**: `Papers_Seminal_Prompting/Wen_2023_Hard_Prompts_Made_Easy.pdf`
- **arXiv**: 2302.03668
- **Resumo**: Abordagem para otimizar prompts de texto através de otimização discreta baseada em gradientes de forma eficiente.

---

## Papers sobre Chain of Thought e Técnicas Avançadas

### 1. **Wei et al. (2022) - Chain-of-Thought Prompting**
- **Arquivo**: `Papers_Chain_of_Thought/Wei_2022_Chain_of_Thought_Prompting.pdf`
- **arXiv**: 2201.11903
- **Resumo**: Paper fundamental que introduz Chain-of-Thought prompting. Demonstra que gerar uma cadeia de passos de raciocínio intermediários melhora significativamente a capacidade de raciocínio em LLMs.

### 2. **Wang et al. (2023) - Self-Consistency**
- **Arquivo**: `Papers_Chain_of_Thought/Wang_2023_Self_Consistency.pdf`
- **arXiv**: 2203.11171
- **Resumo**: Propõe self-consistency como estratégia de decodificação que amostra múltiplos caminhos de raciocínio e seleciona a resposta mais consistente. Melhorias de +10% a +24% em vários benchmarks.

### 3. **Yao et al. (2023) - Tree of Thoughts**
- **Arquivo**: `Papers_Chain_of_Thought/Yao_2023_Tree_of_Thoughts.pdf`
- **arXiv**: 2305.10601
- **Resumo**: Framework que generaliza Chain-of-Thought permitindo exploração sobre múltiplos caminhos de raciocínio. Melhoria de 4% para 74% no Game of 24.

### 4. **Zhou et al. (2022) - Least-to-Most Prompting**
- **Arquivo**: `Papers_Chain_of_Thought/Zhou_2022_Least_to_Most_Prompting.pdf`
- **arXiv**: 2205.10625
- **Resumo**: Quebra problemas complexos em subproblemas mais simples e os resolve em sequência. Atinge 99% de acurácia no SCAN benchmark vs 16% com CoT.

### 5. **Besta et al. (2023) - Graph of Thoughts**
- **Arquivo**: `Papers_Chain_of_Thought/Besta_2023_Graph_of_Thoughts.pdf`
- **arXiv**: 2308.09687
- **Resumo**: Avança além de ToT modelando informações como grafos arbitrários. Aumenta qualidade de sorting em 62% sobre ToT enquanto reduz custos em >31%.

---

## Papers sobre Few-Shot Learning e In-Context Learning

### 1. **Peng et al. (2024) - Revisiting Demonstration Selection**
- **Arquivo**: `Papers_Few_Shot_ICL/Peng_2024_Demonstration_Selection_ICL.pdf`
- **arXiv**: 2401.12087
- **Resumo**: Examina fatores que contribuem para variância em ICL, encontrando que a escolha de demonstração é dependente tanto de dados quanto de modelo.

### 2. **Wang et al. (2024) - Demonstration Selection via RL**
- **Arquivo**: `Papers_Few_Shot_ICL/Wang_2024_Demonstration_Selection_RL.pdf`
- **arXiv**: 2412.03966
- **Resumo**: Introduz RDES (Relevance-Diversity Enhanced Selection), usando aprendizado por reforço para otimizar seleção diversa de demonstrações.

### 3. **Liu et al. (2024) - Unraveling Demonstration Selection**
- **Arquivo**: `Papers_Few_Shot_ICL/Liu_2024_Unraveling_Demonstration_Selection.pdf`
- **arXiv**: 2406.11890
- **Resumo**: Investiga como métodos de seleção de demonstração baseados em aprendizado funcionam, notando que seus mecanismos são opacos com limitações como altos custos de treinamento.

### 4. **Xu & Zhang (2024) - Misconfidence-based Selection**
- **Arquivo**: `Papers_Few_Shot_ICL/Xu_2024_Misconfidence_Demonstration_Selection.pdf`
- **arXiv**: 2401.06301
- **Resumo**: Propõe In-Context Reflection (ICR) para selecionar estrategicamente demonstrações que reduzem discrepância entre outputs do LLM e mapeamentos reais.

---

## Estatísticas

- **Total de Papers**: 21
- **Surveys**: 5
- **Papers Seminais**: 7
- **Chain of Thought**: 5
- **Few-Shot/ICL**: 4

## Organização dos Diretórios

```
Aula 13 - Engenharia de Prompt/
├── Surveys_Prompt_Engineering_2025/     (5 papers)
├── Papers_Seminal_Prompting/            (7 papers)
├── Papers_Chain_of_Thought/             (5 papers)
└── Papers_Few_Shot_ICL/                 (4 papers)
```

## Principais Tópicos Cobertos

1. **Fundamentos**: Few-shot learning, Zero-shot reasoning
2. **Chain of Thought**: CoT, Self-Consistency, Tree of Thoughts, Graph of Thoughts, Least-to-Most
3. **Técnicas Avançadas**: ReAct, Generated Knowledge
4. **Otimização Automática**: APE, APO, Hard Prompts, Gradient-based optimization
5. **In-Context Learning**: Demonstration selection, ICL optimization
6. **Multimodal**: Visual prompting, Vision-Language prompting
7. **Surveys Abrangentes**: Taxonomias, melhores práticas, aplicações

---

**Data de Compilação**: 2025-01-05
**Período dos Papers**: 2020-2025
**Foco**: Papers seminais + surveys recentes + técnicas state-of-the-art
