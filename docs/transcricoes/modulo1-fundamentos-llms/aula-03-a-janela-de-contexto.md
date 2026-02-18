# Aula 3 - A Janela de Contexto

**Módulo:** 1 - Fundamentos dos LLMs
**Autor:** George Marmelstein
**Total de slides:** 7

---

## Slide 1 - Capa

**A JANELA DE CONTEXTO**

George Marmelstein

---

## Slide 2 - A Importância da Janela de Contexto

**A IMPORTÂNCIA DA JANELA DE CONTEXTO**

1. **CONCEITO**
   - Assim como uma calculadora tem limite de "input", os LLMs também só conseguem prestar atenção em uma quantidade limitada de texto.

2. **LIMITES**
   - Quando o usuário extrapola a janela de contexto, as informações antigas vão se "apagando" (memória deslizante).
   - Documentos longos podem gerar degradação de contexto e perda de partes relevantes (lost in the middle)

3. **APRENDIZADO IN-CONTEXT**
   - O usuário tem o poder de "ensinar" novos conhecimentos e novas tarefas, respeitado o limite da janela de contexto.

4. **CAPACIDADES DA MÁQUINA**
   - Uma janela de contexto maior significa:
     - Maior capacidade interpretativa
     - Maior poder de análise de textos longos (com limites!)
     - Maior consistência em conversas
     - Maior dirigibilidade

---

## Slide 3 - Evolução da Janela de Contexto

**EVOLUÇÃO DA JANELA DE CONTEXTO**

| Fase | Tamanho |
|------|---------|
| 4k → 32k | Engenharia de Prompt |
| 128k → 200k | Engenharia de Contexto |
| 200k → 2M | Armazenamento e Recuperação (RAG) |
| {xxx} | Modelos Multi Agentes |

**MAIOR PODER COMPUTACIONAL**

---

## Slide 4 - Imagem Visual

*(Slide visual/imagem)*

---

## Slide 5 - A Lógica do LLM

**A LÓGICA DO LLM**

**LARGE LANGUAGE MODEL**

- **Pouca informação** = pouco contexto
- **Excesso de informação** = degradação e distração (metáfora do mochileiro)
- Os LLMs "pensam" através de tokens. **Inputs nobres; outputs nobres.**
- Cada conversa é uma nova janela de contexto. A máquina não lembra das conversas passadas*
- A resposta da máquina entra no contexto e influencia as próximas respostas na mesma conversa

---

## Slide 6 - Exercício Prático

> "Vamos colocar a mão na massa..."

*Nota: Exercício 1 – Cada conversa um novo contexto... Exercício 2 – Degradação de contexto*

---

## Slide 7 - Síntese

### SÍNTESE

**JANELA DE CONTEXTO**
- É a quantidade máxima de informação que um LLM consegue "ver" e processar de uma só vez para gerar sua resposta.

**NOVA CONVERSA = NOVO CONTEXTO**
- Em seu modo tradicional, o LLM não lembra das conversas passadas. Cada conversa inaugura uma nova janela de contexto, como se fosse uma conversa com outra pessoa.

**IMPLICAÇÕES**
- O segredo para usar bem os LLMs é dominar a camada de conteúdo (engenharia de contexto). Para isso, é fundamental saber de onde a máquina tira as informações.
