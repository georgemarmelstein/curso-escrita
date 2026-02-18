# Aula 5 - Como Treinar um LLM

**Módulo:** 1 - Fundamentos dos LLMs
**Autor:** George Marmelstein
**Total de slides:** 8

---

## Slide 1 - Capa

**COMO TREINAR UM LLM**

George Marmelstein

---

## Slide 2 - Dois "Treinos"

**DOIS "TREINOS"**

| PRÉ-TREINO | FINE-TUNING |
|------------|-------------|
| Aprendizado através de "leitura" | Aprendizado através de "questões" |
| Padrões de linguagem | Correção e feedback (RLHF) |
| Aprende a prever o próximo token | Estrutura conversacional |

---

## Slide 3 - Receita para fazer um LLM (Pré-treino)

**RECEITA PARA FAZER UM LLM (PRÉ-TREINO)**

1. **CORPUS TEXTUAL**
   - Junte uma quantidade absurda de texto e transforme em tokens.

2. **REDE NEURAL**
   - Coloque tudo em uma máquina que ajusta bilhões de parâmetros estatísticos até que eles consigam capturar os padrões de linguagem dos dados.

3. **TREINAMENTO**
   - O resultado é uma rede neural com bilhões de números que consegue gerar textos similares ao do treinamento. Compressão com perda.

---

## Slide 4 - Imagem Visual

*(Slide visual/imagem)*

---

## Slide 5 - Receita para fazer um LLM (Fine-tuning)

**RECEITA PARA FAZER UM LLM (FINE-TUNING)**

1. **PARÂMETROS**
   - Pegue os parâmetros otimizados na fase de pré-treino.

2. **AJUSTE FINO**
   - Treine o modelo com exemplos de perguntas e respostas, conversas, interações, solicitações e forneça feedback positivo e negativo.

3. **ASSISTENTE**
   - O resultado é um assistente que não só consegue gerar textos coerentes, mas agora sabe conversar, seguir instruções e se comportar de maneira segura.

---

## Slide 6 - Imagem Visual

*(Slide visual/imagem)*

*Nota: Exercícios sugeridos:*
- *Quem é a mãe de Anitta?*
- *Diga bem rápido: o nome de uma fruta e de uma ferramenta?*
- *Diga bem rápido: um número de 1 a 100*
- *Diga bem rápido: os três melhores restaurantes de Paris*
- *Diga bem rápido: qual a cidade mais alta do Brasil?*

---

## Slide 7 - Características dos Parâmetros

**CARACTERÍSTICA DOS PARÂMETROS**

### Conhecimento Paramétrico
- Probabilístico
- Frequentista
- Estático
- Congelado
- Datado (cutoff)

### Vieses de Treino
- Bajulador
- Previsível
- Pasteurizado
- Estocástico

---

## Slide 8 - Síntese

### SÍNTESE

**PRÉ-TREINO**
- É a fase em que o modelo aprende a estrutura da linguagem através da leitura massiva de textos, desenvolvendo a capacidade de entender e gerar linguagem natural.

**FINE-TUNING**
- É a fase em que o modelo já treinado aprende a estrutura conversacional e comportamentos específicos através de exemplos e feedback humano, transformando-se em assistente interativo.

**IMPLICAÇÕES**
- Um LLM é um preditor de padrões linguísticos refinado por feedback humano – por isso escreve fluentemente e segue instruções, mas não tem sabedoria nem senso de realidade.
