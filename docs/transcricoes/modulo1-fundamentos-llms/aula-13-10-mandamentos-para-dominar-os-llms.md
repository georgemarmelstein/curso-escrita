# Aula 13 - 10 Mandamentos para Dominar os LLMs

**Módulo:** 1 - Fundamentos dos LLMs
**Autor:** George Marmelstein
**Total de slides:** 19

---

## Slide 1 - Capa

**10 MANDAMENTOS PARA DOMINAR OS LLMS**

George Marmelstein

---

## Slide 2 - 5 Perguntas Fundamentais

**5 PERGUNTAS FUNDAMENTAIS**

1. O que se passa dentro do LLM? Como ele produz texto?
2. De onde o LLM tira a informação? Qual a fonte de conhecimento da máquina?
3. O que é janela de contexto? Por que esse conceito é tão importante?
4. O que são as alucinações? Por que elas ocorrem? Como mitigá-las ou eliminá-las?
5. Como conseguir respostas confiáveis, precisas e poderosas? Quais as técnicas para conversar com a máquina?

---

## Slide 3 - Mandamento 1

**MANDAMENTO 1:**
*Trate o seu LLM como uma calculadora de textos*

- Um LLM é uma máquina de calcular textos com base em probabilidades
- Na sua essência, ele não consulta a internet e nenhum "banco de texto". Raramente "regurgita" texto que "viu" no treinamento
- Dentro dele, existem parâmetros. E parâmetros são números, não textos. É um programa de computador.
- Assim como a máquina de calcular não aprende com as interações, os LLMs não aprendem, a não ser através do contexto. Cada interação reseta o contexto. O LLM não tem aprendizagem contínua
- Em cada chat, o LLM aprende dentro daquele contexto. É esse o poder do usuário: ensinar a máquina através do contexto.

---

## Slide 4 - Imagem Visual

*(Slide visual/imagem)*

---

## Slide 5 - A Lógica do LLM

**A LÓGICA DO LLM**

**LARGE LANGUAGE MODEL**

- A previsão é baseada em uma **probabilidade semântica** que é diferente de probabilidade factual.
- Os LLMs são máquinas de calcular **não-determinísticas** que geram uma palavra (token) de cada vez.
- A previsão é **autorregressiva**: o modelo usa a própria saída como entrada para a próxima previsão.
- As palavras escolhidas **condicionam as seguintes** (enquadramento).

---

## Slide 6 - Receita para fazer um LLM (Pré-treino)

**RECEITA PARA FAZER UM LLM (PRÉ-TREINO)**

1. **CORPUS TEXTUAL** - Junte uma quantidade absurda de texto e transforme em tokens.
2. **REDE NEURAL** - Coloque tudo em uma máquina que ajusta bilhões de parâmetros estatísticos até que eles consigam capturar os padrões de linguagem dos dados.
3. **TREINAMENTO** - O resultado é uma rede neural com bilhões de números que consegue gerar textos similares ao do treinamento. Compressão com perda.

---

## Slide 7 - Imagem Visual

*(Slide visual/imagem)*

---

## Slide 8 - Mandamento 2

**MANDAMENTO 2:**
*A JANELA DE CONTEXTO será o seu superpoder e a sua kriptonita. Trate ela como uma mesa de trabalho.*

**Duas metáforas:**
- Caminhada
- Mesa de trabalho

- A Janela de Contexto é a quantidade de texto que a máquina consegue "prestar atenção" ao mesmo tempo.
- A máquina só enxerga uma janela limitada de texto - e esquece o que fica muito para trás.
- Quanto maior o contexto, maior a latência (demora) e menor a precisão. Análise de textos muito longos reduzem qualidade.

**Trade-off:**
- Pouco contexto = resposta fraca (genérica)
- Excesso de contexto = distração (degradação)

---

## Slide 9 - Evolução da Janela de Contexto

**EVOLUÇÃO DA JANELA DE CONTEXTO**

| Fase | Tamanho |
|------|---------|
| 4k → 32k | Engenharia de Prompt |
| 128k → 200k | Engenharia de Contexto |
| 200k → 2M | Armazenamento e Recuperação (RAG) |
| {xxx} | Modelos Multi Agentes |

**MAIOR PODER COMPUTACIONAL**

---

## Slide 10 - Imagem Visual

*(Slide visual/imagem)*

---

## Slide 11 - Mandamento 3

**MANDAMENTO 3:**
*Os LLMs pensam através de tokens. Use a máxima INPUTS NOBRES = OUTPUTS NOBRES.*

**Duas metáforas:**
- Caixinha de música
- Oceano

- Token é um "bizu" para facilitar o cálculo da máquina. Ela transforma alguns padrões comuns em um vocabulário próprio, como se fosse uma técnica mnemônica para aprender os padrões da linguagem
- A máquina precisa de "bons tokens" para pensar melhor. Tokens de qualidade elevam a qualidade da resposta.
- Instruções poderosas tendem a gerar respostas poderosas. Instruções ruins costumam gerar respostas ruins.

---

## Slide 12 - Mandamento 4

**MANDAMENTO 4:**
*As alucinações são inerentes aos LLMs, e isso não é necessariamente ruim.*

**Duas metáforas:**
- Concurseiro chutando uma questão
- Intercambista mitomaníaco

- O LLM foi treinado para imitar padrões de linguagem; não para acertar.
- **Correção semântica ≠ Correção factual**
- Toda informação FACTUAL extraída do CONHECIMENTO DA MÁQUINA é FALSA, até prova em contrário.
- As alucinações permitem a criação e a solução de casos novos.

---

## Slide 13 - Mandamento 5

**MANDAMENTO 5:**
*ANEXO é diferente de CONTEXTO. Entenda isso e use o contexto de modo inteligente.*

**Duas metáforas:**
- Cartas de um baralho
- Papéis em uma mesa

- Cada modelo tem uma forma diferente de processar os anexos. Nem sempre o conteúdo inteiro entra na janela de contexto.
- É possível garantir uma análise mais detalhada do anexo por meio de instruções no prompt. Use isso para garantir precisão.

**Trade-off:**
- Quanto mais longo o documento, maior a chance de perder detalhes.

---

## Slide 14 - O Conhecimento da Máquina

**O CONHECIMENTO DA MÁQUINA**

### Conhecimento Paramétrico
- Probabilístico
- Frequentista
- Estático
- Congelado
- Datado (cutoff)

### Conhecimento de Sistema
- "Código de conduta"
- Recursos
- Guardrails

### Conhecimento Externo
- Contextual
- Dinâmico
- Limitado (tamanho)

---

## Slide 15 - Mandamento 6

**MANDAMENTO 6:**
*Os LLMs são máquinas de escrever obedientes, treinadas para agradar e serem úteis ao usuário.*

- O LLM é uma máquina obediente. Ele faz o que o usuário manda, respeitado alguns limites do alinhamento ético.
- Não acredite em elogios gratuitos da máquina. Ela tem um viés de bajulação (sycophancy).
- Use a bajulação a seu favor. Ensine a máquina a criticar e a apontar seus pontos cegos.
- Use a bajulação para dirigir a máquina. Não trate ela como um mestre, mas como um soldado obediente.

---

## Slide 16 - Mandamento 7

**MANDAMENTO 7:**
*Os LLMs não têm compromisso com a verdade, senso de justiça, nem sabedoria intrínseca. Seja você o curador dos valores e do julgamento.*

- Apesar de ser capaz de desenvolver habilidades emergentes, é apenas um simulador de inteligência e de linguagem.
- Não confie cegamente na máquina. Ela é falível, enganadora e não têm consciência de suas limitações.
- Você não deve permitir que a máquina decida por você nem por razões éticas, nem por razões técnicas (vieses).

**Falhas e vieses de máquina:**
- Alucinação
- Aleatoriedade (efeito roleta)
- Recência e primazia (lost in the Middle)
- Frequência
- Bajulação e outras

---

## Slide 17 - Mandamento 8

**MANDAMENTO 8:**
*Não foque apenas em AUTOMAÇÃO. Foque em AUMENTAÇÃO.*

- Não é ferramenta de automação, embora possa ajudar, sobretudo no modo agêntico. É ferramenta de interação, criação e transformação.
- Não use os LLMs apenas para tarefas mecânicas e repetitivas. Eles são excelentes assistentes para problemas complexos e únicos.
- O principal poder dos LLMs é traduzir e condensar complexidades. Ou seja, transformar excesso de informação em conteúdo destilado.
- Deixe o trabalho pesado para a máquina, mas não abra mão do seu potencial cognitivo. Não seja um mero botão da máquina.

---

## Slide 18 - Mandamento 9

**MANDAMENTO 9:**
*No modo agêntico, assuma a postura de regente da orquestra e não de plateia.*

- O modo agêntico é focado em fluxo ou sistema e não em tarefas simples.
- É um modo proativo, que possibilita o encadeamento de tarefas e várias ferramentas por solicitação.
- O usuário pode se tornar o arquiteto cognitivo da máquina (prompt, skills e resources)
- Aumento de custo, de complexidade e de esforço de aprendizagem

---

## Slide 19 - Mandamento 10

**MANDAMENTO 10:**
*Continue pensando!*

- Os LLMs são ferramentas que pressupõem interação comunicacional. O usuário faz parte da equação.

> **SER HUMANO + IA > SER HUMANO - IA**

- História do Kasparov v. Deep Blue
- Não devemos usar a IA como muleta, mas como asa para ir mais rápido, mais alto e mais longe.
