# Aula 2 - O Jogo da Adivinhação

**Módulo:** 1 - Fundamentos dos LLMs
**Autor:** George Marmelstein
**Total de slides:** 5

---

## Slide 1 - Capa

**O JOGO DA ADIVINHAÇÃO**

George Marmelstein

---

## Slide 2 - Imagem Visual

*(Slide visual/imagem)*

---

## Slide 3 - O Jogo

**O JOGO**
*Uma poderosa máquina de previsão de palavras*

Complete a frase:
> "Era uma vez um rei que morava em um..."

| Palavra | Probabilidade |
|---------|---------------|
| Castelo | 38,29% |
| Reino | 28,92% |
| Casebre | 2,3% |
| Barco | 1,2% |
| (...) | ... |

**A máquina sempre escolhe uma palavra provável, mas nem sempre a mais óbvia.**

---

## Slide 4 - A Lógica do LLM

**A LÓGICA DO LLM**

**LARGE LANGUAGE MODEL**

- A previsão é baseada em uma **probabilidade semântica** que é diferente de probabilidade factual.
- Os LLMs são máquinas de calcular **não-determinísticas** que geram uma palavra (token) de cada vez.
- A previsão é **autorregressiva**: o modelo usa a própria saída como entrada para a próxima previsão.
- As palavras escolhidas **condicionam as seguintes** (enquadramento).

---

## Slide 5 - Síntese

### SÍNTESE

**MÁQUINA DE CALCULAR NÃO-DETERMINÍSTICA**
- Os LLMs geram textos inéditos a partir de uma escolha entre palavras semanticamente prováveis, com uma margem de aleatoriedade (processo estocástico). O mesmo input pode gerar diferentes outputs. Prepare-se para surpresas.

**TEMPERATURA**
- O nível de aleatoriedade é definido pela temperatura. Quanto mais alta a temperatura, mais imprevisível é o modelo.

**IMPLICAÇÕES**
- Apesar da aleatoriedade, é possível controlar e dirigir a máquina através do prompt. Mas para entender isso é preciso entender o poder da janela de contexto, tema da próxima aula.
