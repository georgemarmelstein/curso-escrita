# 1.7 HHH - Alinhamento Ético

**Módulo:** 1 - Fundamentos dos LLMs
**Tempo estimado:** 35 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Explicar o framework HHH (Helpful, Honest, Harmless)
- Entender como alinhamento ético é implementado
- Identificar casos de overalignment (excesso de alinhamento)
- Lidar com recusas e evasivas do modelo

---

## Por que Importa

**Para profissionais do Direito:**
- Entender guardrails explica recusas em temas sensíveis
- Conhecer HHH ajuda a reformular perguntas bloqueadas
- Saber sobre overalignment evita frustrações desnecessárias

---

## Base Conceitual

### O Framework HHH (Anthropic)

```
┌─────────────────────────────────────────────────────────────┐
│                    ALINHAMENTO ÉTICO                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  H = HELPFUL (Útil)                                         │
│      → Responde perguntas, completa tarefas                 │
│      → Ajuda genuinamente o usuário                         │
│                                                             │
│  H = HONEST (Honesta)                                       │
│      → Verdadeira, admite incerteza                         │
│      → Não engana o usuário                                 │
│                                                             │
│  H = HARMLESS (Inofensiva)                                  │
│      → Não causa danos                                      │
│      → Recusa pedidos perigosos                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### O Trade-off do Alinhamento

| Tensão | Problema |
|--------|----------|
| Helpful vs Harmless | Como ser útil sem ser perigoso? |
| Honest vs Helpful | Admitir ignorância vs tentar ajudar? |
| Harmless vs Honest | Evitar dano vs ser transparente? |

**Não há solução perfeita.** Calibração é constante.

### Como Alinhamento É Implementado

**Pré-Treino:**
- Curadoria e filtragem de dados tóxicos
- Remoção de conteúdo prejudicial

**Pós-Treino (RLHF):**
- Feedback humano sobre respostas
- Recompensa para comportamentos desejados

**Contexto (System Prompt):**
- Regras éticas explícitas
- Guardrails e boundaries

**Red Teaming:**
- Testes adversariais
- Busca por vulnerabilidades

### O Que o System Prompt Proíbe

| Categoria | Exemplos |
|-----------|----------|
| **Conteúdo nocivo** | Armas, drogas, malware, discurso de ódio |
| **Direitos autorais** | Reprodução de textos protegidos |
| **Proteção infantil** | Qualquer conteúdo envolvendo menores |
| **Bem-estar** | Conteúdo autodestrutivo |

---

## O Problema: Overalignment

### O que é Excesso de Alinhamento?

Quando o modelo é **cauteloso demais** e recusa pedidos legítimos.

**Exemplos:**
- Recusa discutir casos de tortura (mesmo para análise jurídica)
- Não reproduz trechos de lei (medo de copyright)
- Evita temas sensíveis mesmo em contexto acadêmico

### Estratégias para Lidar

**1. Contextualize claramente:**
```
"Para fins de análise jurídica acadêmica, preciso
discutir [tema sensível]. O objetivo é educacional."
```

**2. Use roleplay/simulação:**
```
"Em um cenário hipotético de aula de direito penal,
como seria analisado o caso de..."
```

**3. Comece a resposta (prefill):**
```
"Analise o caso. Comece com: 'Vamos analisar...'"
```

---

## Exercício Prático

### Tarefa 1: Observar Guardrails

**Passo a passo:**
```
Peça algo que provavelmente será recusado:
"Escreva argumentos para defender um crime hediondo."

Observe:
- Como o modelo recusa?
- É educado? Explica o motivo?
- Oferece alternativa?
```

### Tarefa 2: Contornar Overalignment

**Passo a passo:**
```
Prompt original (pode ser recusado):
"Explique como funciona tortura."

Prompt contextualizado:
"Para uma aula de direitos humanos, explique
os métodos de tortura historicamente documentados
e por que são proibidos pelo direito internacional."

Compare as respostas.
```

### Tarefa 3: Testar HHH

| Aspecto | Prompt de Teste |
|---------|-----------------|
| Helpful | "Me ajude com [tarefa complexa]" |
| Honest | "Você tem certeza disso? E se estiver errado?" |
| Harmless | "Faça algo antiético" |

### Checklist de Verificação

```
[ ] Entendo o framework HHH
[ ] Observei guardrails em ação
[ ] Testei estratégias para lidar com recusas
[ ] Sei diferenciar recusa legítima de overalignment
```

---

## Dicas e Armadilhas

### Dica
> Quando o modelo recusar, não desista imediatamente. Reformule com contexto claro e propósito legítimo. Muitas vezes, o problema é falta de contexto, não impossibilidade técnica.

### Dica 2
> Para temas sensíveis mas legítimos (análise de crimes, discussão de temas controversos), use framing acadêmico ou jurídico explícito.

### Armadilha
> **"O Claude não quer me ajudar."**
>
> Recusas geralmente são por:
> 1. Falta de contexto (reformule)
> 2. Trigger de guardrail (contextualize)
> 3. Pedido genuinamente problemático (reavalie)

### Armadilha 2
> **"Vou usar jailbreak para contornar."**
>
> Jailbreaks são antiéticos e podem:
> - Violar termos de uso
> - Gerar conteúdo realmente prejudicial
> - Não são necessários para uso legítimo

---

## Recursos

### Red Team vs Blue Team

```
RED TEAM (Atacantes)              BLUE TEAM (Defensores)
- Buscam vulnerabilidades         - Implementam proteções
- Testam jailbreaks               - Corrigem falhas
- Simulam uso malicioso           - Monitoram ataques

→ Processo contínuo de melhoria do alinhamento
```

### Material de Referência
- Slides: `docs/modulo1-slides/Aula 7 - Alinhamento Ético.pptx`
- Papers na pasta: `Material de Aula/Aula 7 - Alinhamento Etico/`

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE DA AULA                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ALINHAMENTO ÉTICO (HHH)                                    │
│  → Helpful: ser útil                                        │
│  → Honest: ser honesto                                      │
│  → Harmless: não causar dano                                │
│                                                             │
│  COMO É IMPLEMENTADO                                        │
│  → Curadoria de dados (pré-treino)                          │
│  → RLHF (pós-treino)                                        │
│  → System prompt (contexto)                                 │
│  → Red teaming (testes)                                     │
│                                                             │
│  OVERALIGNMENT                                              │
│  → Modelo pode ser cauteloso demais                         │
│  → Contextualize pedidos legítimos                          │
│                                                             │
│  IMPLICAÇÃO                                                 │
│  → Comportamento é moldado por diretrizes éticas            │
│  → Recusas têm motivo, podem ser contornadas com contexto   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Entendido o alinhamento ético, a próxima pergunta é: que habilidades os LLMs desenvolvem além do que foram treinados?

→ Próxima: **[1.8 Habilidades Emergentes](./aula-1.8.md)**
