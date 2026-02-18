# Documentação Completa: Módulo 2 - Engenharia de Prompt

## Visão Geral do Módulo

**Objetivo Pedagógico:** Desenvolver competências práticas e teóricas em engenharia de prompt, capacitando o aluno a comunicar eficientemente com LLMs e extrair seu potencial máximo.

**Estrutura:** 6 aulas principais + material avançado de pesquisa (26 papers científicos).

**Definição Central:** Engenharia de Prompt é a disciplina que estuda como estruturar entradas (prompts) para LLMs de forma a obter saídas desejadas de maneira confiável e eficiente.

---

## Aula 1 - Introdução à Engenharia de Prompt (7 Fundamentos)

### Tema Central
Estabelecer os fundamentos conceituais da engenharia de prompt e os 7 princípios essenciais para comunicação efetiva com LLMs.

### Objetivos de Aprendizagem
1. Compreender o que é engenharia de prompt e por que importa
2. Conhecer os 7 fundamentos para prompts efetivos
3. Diferenciar abordagens zero-shot e few-shot

### Os 7 Fundamentos para Entender Engenharia de Prompt

**1. LLMs São Máquinas Probabilísticas**
- Geram texto baseado em distribuições de probabilidade
- Não "entendem" como humanos - reconhecem padrões
- Saídas dependem do input (prompt) fornecido

**2. O Prompt É a Interface**
- Único meio de comunicação com o modelo
- Qualidade do prompt → qualidade da resposta
- Pequenas mudanças podem ter grandes impactos

**3. Clareza Supera Complexidade**
- Instruções específicas > instruções vagas
- "Analise" é ruim; "Liste 3 argumentos principais" é bom
- Especificar formato de saída esperado

**4. Contexto É Rei**
- LLMs não têm memória entre chamadas
- Todo contexto necessário deve estar no prompt
- Informação relevante deve ser explícita

**5. Exemplos Ensinam Formato**
- Few-shot demonstra o padrão esperado
- Consistência de formato importa mais que labels corretos
- 3-5 exemplos geralmente são suficientes

**6. Temperatura Controla Criatividade**
- temperature=0: determinístico, factual
- temperature=0.7-1.0: criativo, diverso
- Escolher baseado na tarefa

**7. Iteração É Essencial**
- Prompts raramente são perfeitos na primeira tentativa
- Testar, avaliar, refinar
- Documentar o que funciona

### Hierarquia de Complexidade

```
Advanced:  Tree-of-Thoughts, Graph of Thoughts, Reflexion
           ↑
Structured: Chain-of-Thought, Self-Consistency
           ↑
Basic:     Few-shot, Zero-shot
```

---

## Aula 2 - Fundamentos dos LLMs para Engenharia de Prompt (Parte 1)

### Tema Central
Compreender como LLMs funcionam internamente para otimizar a comunicação via prompts.

### Objetivos de Aprendizagem
1. Entender o processo de geração de texto (predição de tokens)
2. Compreender limitações e capacidades do modelo
3. Conectar arquitetura com técnicas de prompting

### Conceitos-Chave

**1. Predição de Próximo Token**
- LLMs geram texto token por token
- Cada predição é baseada nos tokens anteriores
- P(token_n | token_1, ..., token_{n-1})

**2. Contexto e Atenção**
- Self-attention permite "olhar" todo o contexto
- Informação no início e fim recebe mais atenção
- "Lost in the Middle" - informação central pode ser ignorada

**3. Conhecimento Paramétrico vs Contextual**
- Paramétrico: aprendido durante treinamento
- Contextual: fornecido no prompt
- Prompt pode "sobrescrever" conhecimento paramétrico

**4. Emergência com Escala**
- Capacidades surgem em modelos grandes (>100B parâmetros)
- Few-shot learning emerge dramaticamente com escala
- CoT só funciona bem em modelos grandes

**5. Instruction Tuning**
- Modelos "instruction-tuned" seguem instruções melhor
- FLAN, InstructGPT, ChatGPT são exemplos
- Zero-shot performance muito melhor

### Implicações para Prompting

| Característica do LLM | Implicação para Prompt |
|----------------------|------------------------|
| Predição de token | Cada palavra influencia a próxima |
| Context window limitado | Ser conciso, remover redundância |
| Atenção nas extremidades | Colocar info importante no início/fim |
| Conhecimento desatualizado | Fornecer contexto atual quando necessário |
| Sensibilidade a wording | Testar variações de formulação |

---

## Aula 3 - Fundamentos dos LLMs - Parte 2

### Tema Central
Aprofundamento em mecanismos de In-Context Learning e emergência de capacidades.

### Objetivos de Aprendizagem
1. Entender In-Context Learning (ICL) em profundidade
2. Conhecer fatores que afetam performance de ICL
3. Compreender por que modelos grandes são melhores

### In-Context Learning (ICL)

**Definição:**
Capacidade de LLMs aprenderem tarefas novas a partir de exemplos no contexto, SEM atualização de pesos.

**Descoberta Seminal (GPT-3, 2020):**
```
Paradigma Tradicional:
Pre-training → Task-specific fine-tuning → Inference

Novo Paradigma (ICL):
Pre-training → In-context examples → Inference
(SEM fine-tuning!)
```

### Fatores que Afetam ICL

**1. Escala do Modelo**
```
< 1B params:    ICL fraco ou inexistente
1B - 10B:       ICL emergente
10B - 100B:     ICL forte
> 100B:         ICL muito forte + zero-shot capabilities
```

**2. Número de Exemplos**
```
0 (zero-shot):  Baseline
1-shot:         +10-20% (grande salto!)
3-shot:         +15-25%
5-shot:         +18-28%
10-shot:        +20-30%
20+ shot:       Diminishing returns
```

**3. Ordem dos Exemplos**
- Pode causar variações de 20-30%!
- Recency bias: últimos exemplos mais influentes
- Balancear labels ao longo dos exemplos

**4. Qualidade dos Exemplos**
- Format > Content (descoberta surpreendente)
- Consistência de template é crucial
- Labels corretos ajudam, mas não são essenciais

### Teorias Sobre Por Que ICL Funciona

1. **Bayesian Inference:** Inferência implícita sobre a tarefa
2. **Meta-Learning:** Aprendeu a "aprender rapidamente"
3. **Implicit Fine-tuning:** Forward pass simula fine-tuning

---

## Aula 4 - Técnicas Básicas de Vibe Prompting

### Tema Central
Técnicas práticas e intuitivas de prompting para uso cotidiano.

### Objetivos de Aprendizagem
1. Aplicar técnicas zero-shot efetivas
2. Construir prompts few-shot de qualidade
3. Desenvolver intuição para "vibe" do prompt

### Zero-Shot Prompting

**Estrutura Básica:**
```
[Task Description] + [Input] → [Output]
```

**Exemplo:**
```
Classify the sentiment of the following text as positive, negative, or neutral.

Text: "I absolutely loved this movie! The acting was superb."
Sentiment:
```

**Melhores Práticas:**
- ✓ Seja explícito e específico na task description
- ✓ Use formatação clara (bullets, seções, delimitadores)
- ✓ Especifique o formato de saída esperado
- ✗ Evite ambiguidade ("analise isso" é vago)

### Few-Shot Prompting

**Estrutura:**
```
[Task Description] + [Example 1] + [Example 2] + ... + [Example N] + [Query]
```

**Fatores Críticos:**

| Fator | Recomendação |
|-------|--------------|
| Número | 3-5 exemplos (sweet spot) |
| Ordem | Alternar labels, similar ao query no final |
| Qualidade | Diversos mas representativos |
| Formato | Consistente entre todos exemplos |

### Vibe Prompting

**Conceito:** Capturar o "tom" e "estilo" desejado através do prompt.

**Técnicas:**
1. **Role Assignment:** "Você é um expert em..."
2. **Style Indication:** "Responda de forma concisa/detalhada/técnica"
3. **Audience Specification:** "Explique para um leigo/especialista"
4. **Output Framing:** "Formate como lista/tabela/JSON"

---

## Aula 5 - Os Três Desafios da Engenharia de Prompt

### Tema Central
Identificar e superar os principais desafios ao trabalhar com prompts.

### Os Três Desafios Fundamentais

### Desafio 1: Ambiguidade

**Problema:**
Prompts vagos levam a outputs imprevisíveis.

**Exemplos:**
```
❌ Ruim: "Analise este texto."
✓ Bom:  "Extraia os três principais argumentos deste texto,
         fornecendo uma frase de resumo para cada um."
```

**Soluções:**
- Especificar exatamente o que deseja
- Definir formato de saída
- Dar exemplos quando necessário

### Desafio 2: Consistência

**Problema:**
Mesmo prompt pode gerar outputs diferentes.

**Causas:**
- Temperature > 0 introduz aleatoriedade
- Sensibilidade a pequenas variações de wording
- Contexto influencia geração

**Soluções:**
- Usar temperature=0 para tarefas determinísticas
- Self-Consistency: gerar múltiplas respostas, votar
- Estruturar prompts de forma rígida

### Desafio 3: Limitações do Modelo

**Problema:**
LLMs têm limitações inerentes.

**Limitações Comuns:**
- Context window limitado
- Conhecimento desatualizado (data cutoff)
- Aritmética imprecisa
- Alucinações

**Soluções:**
- RAG para conhecimento atualizado
- PAL (Program-Aided) para cálculos
- Chain-of-Thought para raciocínio
- Verificação de fatos em fontes externas

---

## Aula 6 - O Fascinante Prompt de Sistema da Anthropic

### Tema Central
Análise profunda do system prompt do Claude e lições para design de prompts.

### Objetivos de Aprendizagem
1. Entender a estrutura de system prompts profissionais
2. Extrair padrões replicáveis para próprios prompts
3. Compreender como grandes empresas estruturam instruções

### Anatomia de um System Prompt

**Componentes Típicos:**

```
1. IDENTIDADE E PAPEL
   "You are Claude, an AI assistant..."

2. CAPACIDADES E LIMITAÇÕES
   "You can/cannot..."

3. COMPORTAMENTOS ESPERADOS
   "Always/Never..."

4. DIRETRIZES ÉTICAS
   "Refuse to..."

5. FORMATO DE SAÍDA
   "Respond in..."
```

### Lições do System Prompt da Anthropic

**1. Clareza de Identidade**
- Define claramente quem é o assistente
- Estabelece tom e personalidade
- Cria consistência

**2. Explicitação de Limites**
- O que pode e não pode fazer
- Quando recusar
- Como lidar com edge cases

**3. Instruções Hierárquicas**
- Prioridade entre regras conflitantes
- Fallbacks para situações não previstas
- Escalation paths

**4. Exemplos Implícitos**
- Demonstra estilo esperado através da própria redação
- Mostra nível de formalidade
- Indica extensão típica de respostas

### Aplicando à Prática

**Template para System Prompts Personalizados:**

```
## Identidade
Você é [papel/função]. Seu objetivo é [objetivo principal].

## Comportamento
- Sempre: [comportamentos obrigatórios]
- Nunca: [comportamentos proibidos]
- Quando em dúvida: [fallback]

## Formato
Suas respostas devem ser [formato, extensão, tom].

## Exemplos de Interação
User: [exemplo de input]
Assistant: [exemplo de output ideal]
```

---

## Material Avançado: Técnicas de Pesquisa (26 Papers)

O módulo inclui uma coleção de 26 papers científicos organizados em 5 categorias, com documentação detalhada.

### Categoria 1: Surveys (4 PDFs)

**The Prompt Report (2024)** - Survey mais abrangente
- 58 técnicas catalogadas
- 33 termos padronizados
- Meta-análise de 1,565 papers

### Categoria 2: Papers Seminais (3 PDFs)

**GPT-3 (2020)** - Paper fundacional
- Inaugurou a era de few-shot learning
- 175B parâmetros
- Demonstrou In-Context Learning

### Categoria 3: Chain-of-Thought (4 PDFs)

**CoT Prompting (2022)** - Técnica mais impactante
- Raciocínio passo-a-passo explícito
- +40% accuracy em math (GSM8K)
- "Let's think step by step"

**Self-Consistency (2022)**
- Gerar múltiplos caminhos de raciocínio
- Majority voting para resposta final
- +16% adicional sobre CoT

### Categoria 4: Técnicas Avançadas (11 PDFs)

**Tree-of-Thoughts (2023)**
- Exploração em árvore com backtracking
- Game of 24: 4% → 74% accuracy
- Busca deliberada (BFS/DFS)

**Least-to-Most (2022)**
- Decomposição hierárquica bottom-up
- SCAN benchmark: 16% → 99.7%
- Resolver subproblemas sequencialmente

**Graph of Thoughts (2023)**
- Generalização de ToT para grafos
- Agregação de múltiplas fontes
- +89% em sorting (vs 56% ToT)

**Reflexion (2023)**
- Auto-reflexão e refinamento iterativo
- Loop: Generate → Evaluate → Reflect → Refine
- HumanEval: 67% → 88%

**PAL - Program-Aided (2022)**
- LLM gera código Python
- Execução para cálculos precisos
- GSM8K: 58% → 72%

### Categoria 5: Few-Shot & ICL (4 PDFs)

**What Makes ICL Work (2022)**
- Format importa mais que label correctness
- Input similarity to query é crucial
- Descobertas contraintuitivas

**Label Words Are Anchors (2023)**
- Labels servem como âncoras semânticas
- 70% da atenção vai para label words
- Escolher labels semanticamente ricos

---

## Síntese das Técnicas por Complexidade

### Nível Básico

| Técnica | Quando Usar | Custo |
|---------|-------------|-------|
| Zero-shot | Tarefas simples, modelos instruction-tuned | 1× |
| Few-shot | Formato específico, tarefa não-standard | 1× |

### Nível Intermediário

| Técnica | Quando Usar | Custo |
|---------|-------------|-------|
| Chain-of-Thought | Raciocínio matemático, lógica multi-step | 1× |
| Self-Consistency | Accuracy crítica, pode pagar custo | 5-40× |

### Nível Avançado

| Técnica | Quando Usar | Custo |
|---------|-------------|-------|
| Tree-of-Thoughts | Puzzles, planning, busca | 30-50× |
| Least-to-Most | Problemas decomponíveis | 2-5× |
| Graph of Thoughts | Agregação de fontes, refinamento | 30× |
| Reflexion | Feedback disponível, iteração possível | 3-5× |
| PAL | Cálculos precisos, lógica simbólica | 1× + execução |

---

## 8 Insights Principais da Pesquisa

1. **Emergência de Capacidades**
   - CoT e técnicas avançadas só funcionam em modelos >100B parâmetros
   - Few-shot learning emerge dramaticamente com escala

2. **Raciocínio como Texto Intermediário**
   - Forçar verbalização melhora performance dramaticamente
   - "Espaço de rascunho" textual é crucial

3. **Sampling > Greedy para Raciocínio**
   - Self-Consistency supera greedy decoding
   - Múltiplas soluções + voting = melhor accuracy

4. **Exemplos São Demonstrações de Formato**
   - Format importa mais que label correctness
   - Estrutura consistente é chave

5. **Decomposição É Poderosa**
   - Quebrar problemas complexos supera prompts monolíticos
   - Least-to-Most, Decomposed Prompting consistentemente melhores

6. **Instrução > Fine-tuning Tradicional**
   - Instruction tuning cria modelos que seguem instruções zero-shot
   - FLAN papers demonstram isso empiricamente

7. **Exploração Estruturada de Raciocínio**
   - ToT, GoT permitem backtracking
   - Supera geração left-to-right linear

8. **Refinamento Iterativo Funciona**
   - Reflexion: output → avaliação → refinamento
   - Loops de feedback melhoram qualidade

---

## Roteiros de Estudo Recomendados

### Roteiro 1: Iniciante (2-3 horas)
1. The Prompt Report (2024) - Seções 1-3
2. GPT-3 paper (2020) - Seções 2-3
3. Chain-of-Thought (2022) - Completo
4. Prompt Engineering Survey (2023) - Seção 4

### Roteiro 2: Intermediário (4-5 horas)
1. Self-Consistency (2022)
2. Tree-of-Thoughts (2023)
3. Least-to-Most (2022)
4. Graph of Thoughts (2023)
5. Reflexion (2023)
6. PAL (2022)

### Roteiro 3: Pesquisador (6-8 horas)
1. Survey ICL (2022)
2. What Makes ICL Work (2022)
3. Rethinking Role of Demonstrations (2022)
4. Towards Understanding CoT (2022)
5. Label Words Are Anchors (2023)
6. Fantastically Ordered Prompts (2021)
7. Automatic Chain-of-Thought (2022)

### Roteiro 4: Practitioner (3-4 horas)
1. Systematic Survey (2024) - Best practices
2. Decomposed Prompting (2022)
3. Active Prompting CoT (2023)
4. PAL (2022)
5. Survey Prompt Methods NLP (2024)

### Roteiro 5: Imersão Completa (1-2 semanas)
- Semana 1: Fundamentos + CoT + ICL (15 papers)
- Semana 2: Técnicas avançadas + FLAN (11 papers)

---

## Best Practices Consolidadas

### O Que Fazer

1. **Seja Específico**
   ```
   ❌ "Analise este texto."
   ✓ "Extraia os três principais argumentos, uma frase cada."
   ```

2. **Estruture Claramente**
   - Use delimitadores, bullets, seções numeradas
   - Separe instrução de input

3. **Forneça Exemplos (Few-shot)**
   - Especialmente para formatos específicos
   - 3-5 exemplos geralmente suficientes

4. **Especifique Formato de Output**
   - "Return as JSON", "List as bullets", "One word"

5. **Use CoT para Raciocínio**
   - "Let's think step by step"
   - Forneça exemplos com raciocínio explícito

6. **Itere e Refine**
   - Teste com casos diversos
   - Documente o que funciona

### O Que Evitar

1. **Prompts Ambíguos**
   - "Analise" → analise o quê, como, em que formato?

2. **Assunções Não Declaradas**
   - Modelo não tem contexto implícito

3. **Instruções Conflitantes**
   - "Seja criativo mas factual" - contraditório

4. **Excesso de Informação**
   - Context window tem limites
   - Forneça apenas o relevante

5. **Ignorar Limitações**
   - Modelos não têm acesso a internet em tempo real
   - Não sabem data atual (a não ser informado)

6. **Esperar Perfeição**
   - Mesmo GPT-4 erra
   - Sempre valide outputs críticos

---

## Recursos do Módulo

### Arquivos de Aula (8 PPTX)
- Aula 1: Introdução + 7 Fundamentos
- Aula 2: Fundamentos LLMs (Parte 1)
- Aula 3: Fundamentos LLMs (Parte 2)
- Aula 4: Vibe Prompting
- Aula 5: Três Desafios
- Aula 6: System Prompt Anthropic

### Material de Pesquisa (26 PDFs)
Organizados em:
```
Surveys_Prompt_Engineering_2025/     [4 PDFs]
Papers_Seminal_Prompting/            [3 PDFs]
Papers_Chain_of_Thought/             [4 PDFs]
Papers_Advanced_Techniques/          [11 PDFs]
Papers_Few_Shot_ICL/                 [4 PDFs]
```

### Documentação de Suporte
- COMECE_AQUI.txt - Guia de navegação
- GUIA_COMPLETO_PROMPT_ENGINEERING.txt - Manual técnico com código
- INDICE_COMPLETO_PDFS.md - Resumo detalhado de cada paper

### Estatísticas
- **Volume total:** 165 MB
- **Papers científicos:** 26 PDFs (~650 páginas)
- **Tempo de leitura completa:** 40-60 horas
- **58 técnicas catalogadas** no The Prompt Report

---

## Competências Desenvolvidas

Ao final do módulo, o aluno será capaz de:

1. **Construir** prompts zero-shot e few-shot efetivos
2. **Aplicar** Chain-of-Thought para tarefas de raciocínio
3. **Escolher** a técnica apropriada para cada tipo de tarefa
4. **Diagnosticar** problemas em prompts e iterar para melhorar
5. **Otimizar** prompts para custo vs. qualidade
6. **Compreender** mecanismos subjacentes de ICL e prompting
7. **Avaliar** quantitativamente performance de prompts
8. **Implementar** técnicas avançadas (ToT, Reflexion, PAL) quando necessário

---

*Documentação compilada em: 09 de fevereiro de 2026*
*Módulo 2 - Engenharia de Prompt*
*Curso de Escrita com LLMs*
