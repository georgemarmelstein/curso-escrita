# 1.2 O Jogo da Adivinhação

**Módulo:** 1 - Fundamentos dos LLMs
**Tempo estimado:** 30 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Explicar o processo de predição de tokens
- Entender a diferença entre probabilidade semântica e factual
- Compreender o que é temperatura e como afeta as respostas
- Reconhecer a natureza estocástica (não-determinística) dos LLMs

---

## Por que Importa

**Para profissionais do Direito:**
- Entender que LLMs "adivinham" palavras explica por que erram fatos
- Saber sobre temperatura ajuda a calibrar criatividade vs precisão
- Compreender o processo autorregressivo explica vieses de resposta

---

## Base Conceitual

### O Jogo: Completar a Frase

> "Era uma vez um rei que morava em um..."

| Palavra | Probabilidade |
|---------|---------------|
| Castelo | 38,29% |
| Reino | 28,92% |
| Casebre | 2,3% |
| Barco | 1,2% |

**A máquina escolhe uma palavra provável, mas nem sempre a mais óbvia.**

### Probabilidade Semântica ≠ Factual

```
PROBABILIDADE SEMÂNTICA (o que LLMs fazem):
"Qual palavra faz sentido linguístico aqui?"
→ Baseada em padrões de texto

PROBABILIDADE FACTUAL (o que esperamos):
"O que é verdade no mundo real?"
→ Baseada em fatos verificáveis

PROBLEMA: LLMs usam a primeira, não a segunda!
```

### Processo Autorregressivo

```
Input:    "O direito fundamental à..."
                    ↓
Token 1:  "O direito fundamental à vida"
                    ↓
Token 2:  "O direito fundamental à vida é"
                    ↓
Token 3:  "O direito fundamental à vida é garantido"
                    ↓
          (continua até token de parada)
```

**Implicação:** Cada palavra influencia as próximas. Primeiras escolhas condicionam o restante.

### Temperatura

| Valor | Comportamento | Uso |
|-------|---------------|-----|
| 0.0 | Determinístico, sempre escolhe o mais provável | Tarefas factuais, análise |
| 0.3-0.5 | Balanceado | Uso geral |
| 0.7-1.0 | Criativo, mais diverso | Brainstorming, criação |
| >1.0 | Muito aleatório | Raramente útil |

**Analogia:** Temperatura baixa = sóbrio. Temperatura alta = embriagado.

---

## Exercício Prático

### Tarefa
Observar o comportamento probabilístico do LLM.

### Passo a Passo

**1. Teste de variação:**
```
Abra 3 conversas novas no Claude.
Em cada uma, digite exatamente:
"Complete esta frase de forma criativa: O juiz decidiu que..."

Compare as 3 respostas.
```

**O que observar:**
- As respostas são diferentes ou iguais?
- Quais palavras aparecem em comum?
- A estrutura segue padrões similares?

**2. Teste de probabilidade:**
```
Prompt: "Diga bem rápido: um número de 1 a 100"

Repita 5 vezes em conversas novas.
Anote os números.
```

**O que observar:**
- Quais números são mais frequentes? (Spoiler: 7, 37, 42...)
- Por que esses números? (Frequência no corpus de treino)

**3. Reflexão:**

| Observação | O que revela |
|------------|--------------|
| Respostas variam | Processo estocástico |
| Padrões comuns | Probabilidade semântica |
| Números "favoritos" | Viés frequentista |

### Checklist de Verificação

```
[ ] Testei a mesma pergunta múltiplas vezes
[ ] Observei variação nas respostas
[ ] Entendo que LLM "adivinha" palavras prováveis
[ ] Compreendo o impacto da temperatura
[ ] Sei que probabilidade semântica ≠ factual
```

---

## Dicas e Armadilhas

### Dica
> Para tarefas que exigem consistência (análise jurídica, extração de dados), use temperatura baixa ou zero. Para brainstorming e criação, temperatura mais alta pode ajudar.

### Armadilha
> **"Se eu perguntar a mesma coisa, vou ter a mesma resposta."**
>
> Não necessariamente! LLMs são estocásticos.
> O mesmo input pode gerar outputs diferentes.
> Isso não é bug, é característica fundamental.

### Armadilha 2
> **"A palavra mais provável é sempre a correta."**
>
> "Provável" significa "frequente nos textos de treino", não "verdadeira".
> Um LLM pode escolher uma afirmação falsa se ela for linguisticamente plausível.

---

## Recursos

### Conceitos-Chave

```
PREDIÇÃO DE TOKENS
→ LLM gera uma palavra (token) por vez
→ Baseado em probabilidade semântica
→ Processo autorregressivo (saída vira entrada)

TEMPERATURA
→ Controla aleatoriedade
→ Baixa = determinístico
→ Alta = criativo/aleatório

NATUREZA ESTOCÁSTICA
→ Mesmo input pode gerar outputs diferentes
→ Não é bug, é característica
→ Prepare-se para surpresas
```

### Material de Referência
- Slides: `docs/modulo1-slides/Aula 2 - O Jogo da Adivinhação.pptx`

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE DA AULA                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  MÁQUINA DE CALCULAR NÃO-DETERMINÍSTICA                     │
│  → LLMs geram textos a partir de palavras prováveis         │
│  → Com margem de aleatoriedade (processo estocástico)       │
│  → Mesmo input pode gerar diferentes outputs                │
│                                                             │
│  TEMPERATURA                                                │
│  → Controla o nível de aleatoriedade                        │
│  → Mais alta = mais imprevisível                            │
│                                                             │
│  IMPLICAÇÃO                                                 │
│  → É possível controlar a máquina através do prompt         │
│  → Mas para isso é preciso entender a janela de contexto    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Entendido que LLMs geram texto palavra por palavra, a próxima pergunta é: quanto texto eles conseguem "ver" de uma vez?

→ Próxima: **[1.3 A Janela de Contexto](./aula-1.3.md)**
