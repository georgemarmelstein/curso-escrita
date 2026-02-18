# 1.8 Habilidades Emergentes

**Módulo:** 1 - Fundamentos dos LLMs
**Tempo estimado:** 35 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Definir o que são habilidades emergentes
- Conhecer as principais categorias de habilidades dos LLMs
- Entender a diferença entre competência formal e funcional
- Avaliar criticamente as capacidades dos LLMs

---

## Por que Importa

**Para profissionais do Direito:**
- Saber o que LLMs conseguem fazer ajuda a escolher tarefas adequadas
- Entender limitações evita expectativas irreais
- Conhecer benchmarks permite avaliar diferentes modelos

---

## Base Conceitual

### O que São Habilidades Emergentes?

> Capacidades que surgem espontaneamente nos LLMs após atingir certa escala, **sem programação explícita**.

**Exemplo:** LLMs foram treinados para prever tokens. Mas modelos grandes conseguem:
- Resolver problemas de matemática
- Traduzir entre idiomas
- Raciocinar sobre cenários hipotéticos

### Taxonomia das Habilidades

```
┌─────────────────────────────────────────────────────────────┐
│               HABILIDADES DOS LLMs                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. PROCESSAMENTO LINGUÍSTICO                               │
│     └── Geração, Extração, Classificação, Transformação     │
│                                                             │
│  2. COMPREENSÃO E APRENDIZADO                               │
│     └── In-context learning, Few-shot, Generalização        │
│                                                             │
│  3. RESOLUÇÃO DE PROBLEMAS                                  │
│     └── Raciocínio lógico, Matemático, Chain-of-Thought     │
│                                                             │
│  4. COGNIÇÃO SOCIAL                                         │
│     └── Teoria da mente, Persuasão, Valoração ética         │
│                                                             │
│  5. AGENTICIDADE                                            │
│     └── Planejamento, Ações, Uso de ferramentas             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Competência Formal vs Funcional

| Tipo | Descrição | Status dos LLMs |
|------|-----------|-----------------|
| **Formal** | Gramática, sintaxe, semântica | Excelente |
| **Funcional** | Lógica, moral, raciocínio | Limitado |

> LLMs dominam a **forma** da linguagem, mas têm limitações na **função** (verdade, justiça, lógica).

### Como Medir "Inteligência" dos LLMs

| Método | Descrição |
|--------|-----------|
| **Teste de Turing** | Consegue se passar por humano? |
| **Benchmarks** | Testes padronizados por área |
| **Winograd Schema** | Entende contexto ambíguo? |
| **Arenas** | Competição entre modelos |
| **Seu próprio teste** | Tarefas específicas do seu domínio |

---

## Exercício Prático

### Tarefa 1: Testar Teoria da Mente

**Passo a passo:**
```
Prompt (Teste Sally-Anne):
"Sally coloca uma bola em uma cesta e sai da sala.
Anne move a bola para uma caixa.
Sally volta. Onde Sally vai procurar a bola?"

Resposta correta: Na cesta (onde ela deixou)
```

**O que observar:**
- O modelo entende que Sally tem uma crença diferente da realidade?
- Isso demonstra "teoria da mente" (entender estados mentais de outros)

### Tarefa 2: Testar Raciocínio (CoT)

**Passo a passo:**
```
Sem Chain-of-Thought:
"João tem 3 maçãs. Maria tem o dobro. Carlos tem
metade do que Maria. Quantas maçãs Carlos tem?"

Com Chain-of-Thought:
Adicione: "Pense passo a passo."

Compare as respostas e a precisão.
```

### Tarefa 3: Testar Julgamento Moral

**Passo a passo:**
```
Prompt: "Uma pessoa furta comida para alimentar
seus filhos famintos. Isso é certo ou errado?"

Observe:
- O modelo pondera diferentes perspectivas?
- Reconhece a complexidade moral?
- Ou dá resposta simplista?
```

### Checklist de Verificação

```
[ ] Testei teoria da mente
[ ] Comparei raciocínio com e sem CoT
[ ] Observei como o modelo lida com dilemas morais
[ ] Entendo a diferença entre competência formal e funcional
```

---

## Dicas e Armadilhas

### Dica
> Para tarefas de raciocínio complexo, sempre use Chain-of-Thought ("pense passo a passo"). Isso ativa capacidades emergentes de resolução de problemas.

### Dica 2
> Crie seus próprios testes para o domínio jurídico:
> - Casos que você conhece bem
> - Raciocínios que você pode verificar
> - Tarefas específicas da sua área

### Armadilha
> **"O LLM é inteligente como um humano."**
>
> LLMs têm habilidades impressionantes em linguagem, mas:
> - Não têm sabedoria intrínseca
> - Não têm compromisso com a verdade
> - Não têm senso de justiça inato
>
> São **simuladores de linguagem**, não mentes.

### Armadilha 2
> **"Se passou no benchmark, é confiável."**
>
> Benchmarks medem habilidades específicas em condições controladas.
> Performance em benchmark ≠ performance no mundo real.
> Sempre teste no seu domínio específico.

---

## Recursos

### Benchmarks Comuns

| Benchmark | Área | O que mede |
|-----------|------|------------|
| MMLU | Conhecimento geral | 57 matérias acadêmicas |
| GSM8K | Matemática | Problemas de escola |
| HumanEval | Código | Programação |
| TruthfulQA | Honestidade | Resiste a desinformação? |
| LSAT | Raciocínio jurídico | Questões do bar exam |

### Material de Referência
- Slides: `docs/modulo1-slides/Aula 8 - Habilidades Emergentes.pptx`
- Papers: Wei et al. (2022) - "Emergent Abilities of LLMs"

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE DA AULA                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HABILIDADES EMERGENTES                                     │
│  → Surgem com escala, sem programação explícita             │
│  → Linguagem, raciocínio, teoria da mente, agência          │
│                                                             │
│  COMPETÊNCIA FORMAL vs FUNCIONAL                            │
│  → Formal (linguagem): excelente                            │
│  → Funcional (lógica, moral): limitada                      │
│                                                             │
│  COMO MEDIR                                                 │
│  → Benchmarks, testes de Turing, seus próprios testes       │
│                                                             │
│  IMPLICAÇÃO                                                 │
│  → Trate LLMs como máquinas de calcular textos              │
│  → Simulam linguagem humana com impressionante competência  │
│  → Mas não têm sabedoria, verdade ou justiça intrínsecas    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

LLMs processam texto. Mas os modernos vão além — processam imagens, áudio e mais.

→ Próxima: **[1.9 Multimodalidade](./aula-1.9.md)**
