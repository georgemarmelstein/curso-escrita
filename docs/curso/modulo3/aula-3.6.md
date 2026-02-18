# 3.6 Síntese Probatória

**Módulo:** 3 - Aplicações Avançadas
**Bloco:** Análise Probatória
**Tempo estimado:** 40 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Combinar análises Pearl (causal) e Haack (coerência)
- Criar síntese probatória robusta
- Identificar convergências e divergências entre métodos
- Produzir conclusão fundamentada em múltiplas perspectivas

---

## Por que Importa

**Para profissionais do Direito:**
- Nenhum método único é completo
- Pearl: forte em nexo causal, fraco em coerência geral
- Haack: forte em coerência, fraco em causalidade específica
- Síntese: robustez máxima

**Princípio:**
> Pearl + Haack = Análise probatória de excelência.

---

## Base Conceitual

### Complementaridade dos Métodos

```
┌─────────────────────────────────────────────────────────────┐
│  PEARL vs HAACK: COMPLEMENTARES                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  PEARL (CAUSALIDADE)            HAACK (COERÊNCIA)           │
│  ┌─────────────────┐            ┌─────────────────┐        │
│  │ • DAGs          │            │ • Palavras cruzadas│       │
│  │ • Contrafactuais│            │ • Matriz coerência│        │
│  │ • Nexo causal   │            │ • Ancoragem       │        │
│  │ • "Se X, então Y"│            │ • "Tudo combina?" │        │
│  └────────┬────────┘            └────────┬────────┘        │
│           │                              │                  │
│           └──────────┬───────────────────┘                  │
│                      │                                      │
│                      ▼                                      │
│           ┌─────────────────────┐                          │
│           │   SÍNTESE           │                          │
│           │   PROBATÓRIA        │                          │
│           │                     │                          │
│           │ • Convergências     │                          │
│           │ • Divergências      │                          │
│           │ • Conclusão robusta │                          │
│           └─────────────────────┘                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Metodologia de Síntese

```markdown
## SÍNTESE PROBATÓRIA

### ETAPA 1: ANÁLISE PEARL
- DAG do caso
- Contrafactuais formulados
- Força do nexo causal (1-10)

### ETAPA 2: ANÁLISE HAACK
- Matriz de coerência
- Palavras cruzadas
- Grau de justificação (Alto/Médio/Baixo)

### ETAPA 3: COMPARAÇÃO
| Aspecto | Pearl | Haack | Convergem? |
|---------|-------|-------|------------|

### ETAPA 4: CONCLUSÃO INTEGRADA
- Pontos de convergência
- Pontos de divergência
- Conclusão final
- Nível de confiança
```

### Quando os Métodos Divergem

| Situação | Pearl diz | Haack diz | O que fazer |
|----------|-----------|-----------|-------------|
| Nexo forte, provas fracas | Causa provável | Baixa justificação | Buscar mais evidências |
| Nexo fraco, provas fortes | Causa improvável | Alta justificação | Revisar hipótese causal |
| Ambos fortes | Causa provável | Alta justificação | Conclusão robusta |
| Ambos fracos | Causa improvável | Baixa justificação | Insuficiência probatória |

---

## Exercício Prático

### Tarefa
Consolidar análises Pearl e Haack em síntese.

### Caso
```
PROCESSO: Responsabilidade por erro médico

FATOS:
- Paciente faleceu após cirurgia de vesícula
- Causa da morte: choque séptico por infecção
- Alegação: negligência na esterilização de instrumentos

ANÁLISE PEARL (previamente realizada):
- DAG: Esterilização → Contaminação → Infecção → Morte
- Contrafactual: "Se esterilização adequada, infecção não teria ocorrido?"
- Força causal: 7/10 (provável, mas não certo)

ANÁLISE HAACK (previamente realizada):
- Matriz: 4 evidências coerentes, 1 conflitante
- Grau de justificação: Médio (conflito sobre protocolo de esterilização)

EVIDÊNCIAS:
1. Laudo necropsia: infecção por bactéria hospitalar (✓ coerente)
2. Protocolo hospital: esterilização em dia (✗ conflita com 4)
3. Outras cirurgias: sem infecção no mesmo dia (~ neutro)
4. Testemunha (enfermeira): "não vi autoclave funcionar" (✗ conflita com 2)
5. Histórico paciente: sem infecção prévia (✓ coerente)
```

### Passo a Passo

**Prompt Síntese:**

```markdown
# SÍNTESE PROBATÓRIA (PEARL + HAACK)

## Persona
Você é um especialista em análise probatória que domina
tanto a inferência causal de Pearl quanto o foundherentismo
de Haack. Sua tarefa é integrar os dois métodos.

## Tarefa
Consolide as análises Pearl e Haack abaixo em uma síntese
probatória robusta.

## ETAPA 1: RESUMO DAS ANÁLISES

### Pearl
- DAG construído
- Contrafactual principal
- Força do nexo causal: [X/10]

### Haack
- Matriz de coerência realizada
- Conflitos identificados
- Grau de justificação: [Alto/Médio/Baixo]

## ETAPA 2: COMPARAÇÃO

| Aspecto | Pearl | Haack | Convergem? |
|---------|-------|-------|------------|
| Nexo causal | | | |
| Evidências-chave | | | |
| Pontos fracos | | | |
| Conclusão parcial | | | |

## ETAPA 3: ANÁLISE DE CONVERGÊNCIAS

### Onde Pearl e Haack concordam:
[Pontos de acordo entre os métodos]

### Por que a convergência é significativa:
[Explicação]

## ETAPA 4: ANÁLISE DE DIVERGÊNCIAS

### Onde Pearl e Haack divergem:
[Pontos de desacordo]

### Como resolver a divergência:
[Proposta de resolução]

## ETAPA 5: CONCLUSÃO INTEGRADA

### Síntese Final
[Integração das análises]

### Nível de Confiança
| Métrica | Valor |
|---------|-------|
| Pearl (nexo causal) | /10 |
| Haack (justificação) | Alto/Médio/Baixo |
| Confiança integrada | /10 |

### Recomendação
[Próximos passos ou conclusão]

---

<dados>
[INSERIR ANÁLISES PRÉVIAS]
</dados>
```

### Resultado Esperado

```markdown
## ETAPA 2: COMPARAÇÃO

| Aspecto | Pearl | Haack | Convergem? |
|---------|-------|-------|------------|
| Nexo causal | 7/10 (provável) | N/A | N/A |
| Evidências-chave | Necropsia, testemunha | Necropsia, testemunha | ✓ Sim |
| Pontos fracos | Causa alternativa? | Conflito protocolo/testemunha | ~ Parcial |
| Conclusão parcial | Provável | Médio | ~ Parcial |

## ETAPA 3: CONVERGÊNCIAS

### Onde Pearl e Haack concordam:
1. Necropsia é evidência forte (ancoragem + suporte causal)
2. Infecção hospitalar é a causa da morte
3. Testemunha da enfermeira é relevante

### Por que significativa:
Evidências independentes (laudo + testemunha) apontam
mesma direção em ambos os métodos.

## ETAPA 4: DIVERGÊNCIAS

### Onde divergem:
- Pearl sugere nexo provável (7/10)
- Haack indica justificação apenas média (conflito não resolvido)

### Como resolver:
O conflito entre protocolo (esterilização OK) e testemunha
(autoclave não funcionou) é crucial. Necessário:
1. Verificar registros de manutenção do autoclave
2. Ouvir outras testemunhas do centro cirúrgico

## ETAPA 5: CONCLUSÃO INTEGRADA

### Síntese Final
Pearl indica nexo causal provável, mas Haack revela que o
conjunto probatório tem fragilidade (conflito não resolvido).

A convergência nas evidências-chave (necropsia, testemunha)
fortalece a tese de negligência, mas a divergência sobre
o protocolo impede conclusão de alta confiança.

### Nível de Confiança
| Métrica | Valor |
|---------|-------|
| Pearl (nexo causal) | 7/10 |
| Haack (justificação) | Médio |
| Confiança integrada | 6/10 |

### Recomendação
**Insuficiente para condenação no estado atual.**
Necessário resolver conflito sobre protocolo de esterilização
antes de conclusão definitiva.
```

---

## Dicas e Armadilhas

### Dica
> Faça as análises Pearl e Haack SEPARADAMENTE primeiro. Só depois integre. Fazer junto pode contaminar uma análise com viés da outra.

### Dica 2
> Divergências entre métodos são informativas, não problemáticas. Elas revelam onde está a fragilidade do caso.

### Armadilha
> **"Se Pearl diz sim e Haack diz não, a média é talvez."**
>
> Não faça média! Investigue a divergência.
> Ela pode revelar problema crucial.

### Armadilha 2
> **"Convergência garante certeza."**
>
> Convergência aumenta confiança, mas não garante certeza.
> Ambos os métodos podem estar errados sobre o mesmo ponto.

---

## Template Completo

```markdown
---
nome: "Síntese Probatória (Pearl + Haack)"
versao: "1.0"
tipo: "analise"
---

# SÍNTESE PROBATÓRIA

## ANÁLISE PEARL (Resumo)
- **DAG:** [Representação]
- **Contrafactual:** [Formulação]
- **Força causal:** [X/10]

## ANÁLISE HAACK (Resumo)
- **Matriz:** [Resumo de coerência]
- **Conflitos:** [Lista]
- **Grau:** [Alto/Médio/Baixo]

---

## COMPARAÇÃO

| Aspecto | Pearl | Haack | Convergem? |
|---------|-------|-------|------------|

## CONVERGÊNCIAS
[O que ambos concordam]

## DIVERGÊNCIAS
[Onde discordam e por quê]

---

## CONCLUSÃO INTEGRADA

### Síntese
[Integração final]

### Nível de Confiança
| Métrica | Valor |
|---------|-------|
| Pearl | /10 |
| Haack | |
| Integrado | /10 |

### Recomendação
[ ] Conclusão possível
[ ] Necessária mais investigação
[ ] Insuficiência probatória

---

<analises_previas>
[INSERIR ANÁLISES PEARL E HAACK]
</analises_previas>
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: CONSOLIDAÇÃO PEARL + HAACK                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  METODOLOGIA:                                               │
│  1. Fazer análise Pearl (causalidade)                       │
│  2. Fazer análise Haack (coerência)                         │
│  3. Comparar: convergências e divergências                  │
│  4. Integrar em conclusão robusta                           │
│                                                             │
│  INTERPRETAÇÃO:                                             │
│  → Convergência: fortalece conclusão                        │
│  → Divergência: indica fragilidade a investigar             │
│                                                             │
│  NÍVEL DE CONFIANÇA:                                        │
│  → Alto: Pearl forte + Haack alto + Convergência            │
│  → Médio: Um forte + outro médio OU divergência             │
│  → Baixo: Ambos fracos OU divergência não resolvida         │
│                                                             │
│  REGRA: Divergência não é erro, é informação.               │
│         Investigue, não ignore.                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Com a análise probatória dominada, o próximo bloco explora automação: meta-prompts e orquestradores.

→ Próxima: **[3.7 Meta-Prompts Avançados](./aula-3.7.md)**
