# Aula 10 - Modos de Uso dos LLMs

**Módulo:** 1 - Fundamentos dos LLMs
**Autor:** George Marmelstein
**Total de slides:** 3

---

## Slide 1 - Capa

**MODOS DE USO DOS LLMS**

George Marmelstein

---

## Slide 2 - Modos de Uso dos LLMs

**MODOS DE USO DOS LLMS**

### MODO RECALL

| Aspecto | Descrição |
|---------|-----------|
| **BASE** | Conhecimento paramétrico |
| **USOS** | Explicações e conceitos gerais, Geração de ideias e argumentos, Conhecimento comum, frequente e genérico |
| **LIMITAÇÃO** | Risco de alucinação para fatos, Sem acesso a fatos recentes e conhecimento específico |

### MODO TRANSFORMATIVO

| Aspecto | Descrição |
|---------|-----------|
| **BASE** | Conhecimento externo (anexo ou web) |
| **USOS** | Análise e interpretação de textos, Revisão e melhoria, Síntese etc. |
| **LIMITAÇÃO** | Janela de contexto, Degradação do contexto (lost in the middle), Modos de processamento (RAG) |

### MODO INTERATIVO

| Aspecto | Descrição |
|---------|-----------|
| **BASE** | LLM + Usuário (Contexto enriquecido) |
| **USOS** | Extensão da mente, Usuário no controle, Surfar no contexto, Organização de ideias |
| **LIMITAÇÃO** | Janela de contexto, Memória deslizante, Deterioração da coerência |

---

## Slide 3 - Síntese

### SÍNTESE

**MODOS DE USO**
- O uso dos LLMs evoluiu de uma era em que se buscava um oráculo com todas as respostas (modo recall) para um modo em que o usuário é o curador do conhecimento (modo transformativo)

**QUANDO USAR**
- O modo recall pode ser usado para explicações, geração de ideias, de argumentos e fatos muito conhecidos. Nunca para fatos específicos, dados biográficos, precedentes, leis etc.

**IMPLICAÇÕES**
- A curadoria do conhecimento continua a ser uma das habilidades mais relevantes no uso poderoso do LLM. Para isso, é preciso entender como a máquina processa os anexos.
