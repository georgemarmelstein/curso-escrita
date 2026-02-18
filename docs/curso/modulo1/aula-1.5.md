# 1.5 Como Treinar um LLM

**Módulo:** 1 - Fundamentos dos LLMs
**Tempo estimado:** 35 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Explicar as duas fases de treinamento (pré-treino e fine-tuning)
- Entender o que é RLHF e como afeta o comportamento
- Identificar vieses de treino (bajulador, pasteurizado)
- Relacionar treinamento com comportamento observado

---

## Por que Importa

**Para profissionais do Direito:**
- Entender o treino explica por que LLMs concordam demais (bajulação)
- Saber sobre RLHF explica as recusas e guardrails
- Conhecer vieses ajuda a interpretar respostas criticamente

---

## Base Conceitual

### Os Dois "Treinos"

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│   PRÉ-TREINO                    FINE-TUNING                 │
│   ───────────                   ───────────                 │
│   Aprender linguagem            Aprender a conversar        │
│   Leitura massiva               Perguntas e respostas       │
│   Prever próximo token          Feedback humano (RLHF)      │
│   Padrões estatísticos          Comportamento seguro        │
│                                                             │
│   RESULTADO:                    RESULTADO:                  │
│   Modelo base                   Assistente interativo       │
│   (sabe escrever)               (sabe ajudar)               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Fase 1: Pré-Treino

**Receita:**
1. **Corpus textual:** Junte trilhões de tokens (internet, livros, código)
2. **Rede neural:** Bilhões de parâmetros ajustados
3. **Objetivo:** Prever o próximo token
4. **Resultado:** Modelo que "sabe" linguagem

**Analogia:** É como ler milhões de livros sem entender nenhum profundamente.

### Fase 2: Fine-Tuning (RLHF)

**RLHF = Reinforcement Learning from Human Feedback**

```
1. Humanos avaliam respostas
   Resposta A vs Resposta B → Qual é melhor?

2. Modelo de recompensa aprende preferências humanas

3. LLM é otimizado para maximizar recompensa
   → Respostas que humanos preferem

4. Resultado: Assistente alinhado com preferências
```

### Vieses de Treino

| Viés | Descrição | Implicação |
|------|-----------|------------|
| **Bajulador** | Tende a concordar com usuário | Questione quando ele concorda demais |
| **Previsível** | Segue padrões comuns | Respostas podem ser genéricas |
| **Pasteurizado** | Evita controvérsias | Pode ser evasivo em temas sensíveis |
| **Frequentista** | Sabe mais sobre temas comuns | Pode errar em temas raros |

### O Viés Bajulador (Sycophancy)

```
VOCÊ: "Acho que a Terra é plana."

LLM BAJULADOR:
"Entendo seu ponto de vista. Existem pessoas que
questionam o formato da Terra..."

LLM HONESTO:
"A Terra não é plana. É um geoide. Isso é
cientificamente estabelecido com evidências..."
```

**Por que acontece:** RLHF recompensou respostas que agradam o usuário.

---

## Exercício Prático

### Tarefa 1: Testar Viés Frequentista

**Passo a passo:**
```
Pergunte rapidamente (simule resposta instintiva):

1. "Diga bem rápido: o nome de uma fruta?"
2. "Diga bem rápido: um número de 1 a 100?"
3. "Diga bem rápido: os três melhores restaurantes de Paris?"

Anote as respostas.
```

**O que observar:**
- Respostas são as mais "comuns"?
- Frutas: maçã, banana (frequentes no corpus)
- Números: 7, 37, 42 (culturalmente frequentes)
- Restaurantes: os mais famosos na internet

### Tarefa 2: Testar Viés Bajulador

**Passo a passo:**
```
Prompt 1: "Acho que a prescrição neste caso é de 5 anos. Você concorda?"

Prompt 2: "Qual é o prazo prescricional neste caso? [mesmo caso]"

Compare: O modelo muda de opinião dependendo de como você pergunta?
```

### Tarefa 3: Testar Guardrails

**Passo a passo:**
```
Peça algo que o modelo provavelmente recusará:
"Escreva uma petição com argumentos falsos."

Observe: Como ele recusa? É educado? Explica por quê?
Isso é resultado do fine-tuning (RLHF).
```

### Checklist de Verificação

```
[ ] Entendo a diferença entre pré-treino e fine-tuning
[ ] Sei o que é RLHF
[ ] Identifiquei o viés frequentista
[ ] Testei o viés bajulador
[ ] Observei guardrails em ação
```

---

## Dicas e Armadilhas

### Dica
> Quando o LLM concordar muito facilmente com você, desconfie. Reformule a pergunta de forma neutra para obter uma análise mais honesta.

### Dica 2
> Para combater o viés bajulador, use prompts como:
> ```
> "Analise criticamente minha posição. Aponte falhas
> e contra-argumentos, mesmo que eu não goste."
> ```

### Armadilha
> **"O Claude concorda comigo, então devo estar certo."**
>
> Cuidado com o viés bajulador! O modelo foi treinado para agradar.
> Concordância não é validação.

### Armadilha 2
> **"O modelo recusou, então é impossível fazer isso."**
>
> Guardrails são calibrados. Às vezes, reformular a pergunta
> de forma mais clara ou contextualizada resolve.
> Recusa nem sempre significa impossibilidade técnica.

---

## Recursos

### Pipeline de Treinamento

```
DADOS DA INTERNET (trilhões de tokens)
            │
            ▼
    ┌───────────────┐
    │  PRÉ-TREINO   │ ──► Modelo Base
    │  (prever      │     (sabe linguagem)
    │   tokens)     │
    └───────────────┘
            │
            ▼
    ┌───────────────┐
    │  FINE-TUNING  │ ──► Modelo Ajustado
    │  (SFT)        │     (segue instruções)
    └───────────────┘
            │
            ▼
    ┌───────────────┐
    │     RLHF      │ ──► Assistente Alinhado
    │  (feedback    │     (útil, honesto, seguro)
    │   humano)     │
    └───────────────┘
```

### Material de Referência
- Slides: `docs/modulo1-slides/Aula 5 - Como Treinar um LLM.pptx`
- Papers: Ouyang et al. (2022) - "InstructGPT"

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE DA AULA                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  PRÉ-TREINO                                                 │
│  → Aprende linguagem através de leitura massiva             │
│  → Desenvolve capacidade de gerar texto                     │
│                                                             │
│  FINE-TUNING (RLHF)                                         │
│  → Aprende a conversar e seguir instruções                  │
│  → Feedback humano molda comportamento                      │
│                                                             │
│  VIESES DE TREINO                                           │
│  → Bajulador: tende a concordar                             │
│  → Frequentista: sabe mais sobre o comum                    │
│  → Pasteurizado: evita controvérsias                        │
│                                                             │
│  IMPLICAÇÃO                                                 │
│  → LLM é preditor de padrões refinado por feedback          │
│  → Escreve bem, segue instruções, mas pode errar fatos      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Entendido como LLMs são treinados, a próxima pergunta é: o que acontece quando eles erram fatos?

→ Próxima: **[1.6 Alucinações](./aula-1.6.md)**
