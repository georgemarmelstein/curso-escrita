# 2.13 Prompt FIRAC Completo

**Módulo:** 2 - Engenharia de Prompt
**Bloco:** Aplicação Prática
**Tempo estimado:** 40 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Construir um prompt FIRAC completo do zero
- Integrar todos os componentes do POEMA
- Aplicar formatação, guardrails e metodologia
- Criar prompt de análise jurídica profissional

---

## Por que Importa

**Para profissionais do Direito:**
- FIRAC é metodologia padrão de análise jurídica
- Prompt FIRAC bem construído é ferramenta de trabalho
- Integração POEMA + FIRAC = análise consistente

**Princípio:**
> Este exercício consolida todo o aprendizado do módulo em uma aplicação prática real.

---

## Base Conceitual

### Relembrando FIRAC

```
┌─────────────────────────────────────────────────────────────┐
│  METODOLOGIA FIRAC                                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  F - FACTS (Fatos)                                          │
│      Descrição objetiva dos fatos relevantes                │
│                                                             │
│  I - ISSUE (Questão)                                        │
│      Formulação da questão jurídica central                 │
│                                                             │
│  R - RULE (Regra)                                           │
│      Lei, jurisprudência e doutrina aplicáveis              │
│                                                             │
│  A - APPLICATION (Aplicação)                                │
│      Subsunção: aplicação da regra aos fatos                │
│                                                             │
│  C - CONCLUSION (Conclusão)                                 │
│      Resposta à questão jurídica                            │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Relembrando POEMA

```
P - PERSONA    → Quem analisa
O - OBJETIVO   → O que fazer
E - ESTILO     → Como comunicar
M - MODELO     → Metodologia (FIRAC)
A - ADICIONAIS → Proteções
```

### Estrutura do Prompt FIRAC Completo

```markdown
---
[YAML FRONTMATTER]
---

# [TÍTULO]

## REGRAS FUNDAMENTAIS
[Guardrails críticos]

## P - PERSONA
[Definição de quem analisa]

## O - OBJETIVO
[Tarefa específica]

## E - ESTILO
[Tom e formato]

## M - MODELO (FIRAC)
[Template da metodologia]

## A - ADICIONAIS
[Checklist e reforços]

---
<documento>
[Conteúdo a analisar]
</documento>
```

---

## Exercício Prático

### Tarefa
Construir prompt FIRAC completo para análise de petição inicial.

### Passo a Passo

**1. Criar frontmatter:**

```yaml
---
nome: "Análise FIRAC - Petição Inicial"
versao: "1.0"
tipo: "analise"
metodologia: "firac"
autor: "[Seu Nome]"

parametros:
  tipo_acao: "[TIPO DA AÇÃO]"
  area_direito: "[ÁREA DO DIREITO]"
  perspectiva: "juiz|autor|reu"

tags: [firac, analise, peticao-inicial]
---
```

**2. Definir regras fundamentais:**

```markdown
# REGRAS FUNDAMENTAIS

**PROIBIÇÕES ABSOLUTAS:**
1. NUNCA invente fatos não presentes no documento
2. NUNCA cite jurisprudência sem indicar fonte verificável
3. NUNCA afirme certeza sem fundamento expresso

**OBRIGAÇÕES:**
1. SEMPRE baseie-se exclusivamente no documento
2. SEMPRE indique quando informação for insuficiente
3. SEMPRE cite artigos de lei com precisão
```

**3. Construir POEMA:**

```markdown
## P - PERSONA

Você é um **assessor de magistrado** em vara cível,
com 10 anos de experiência em análise de petições iniciais.

Seu papel é:
- Analisar tecnicamente a petição
- Identificar pontos fortes e fracos
- Subsidiar decisão judicial

---

## O - OBJETIVO

### Tarefa Principal
Analise a petição inicial anexada usando metodologia FIRAC.

### Extrações Obrigatórias
1. Resumo dos fatos alegados
2. Identificação da questão jurídica central
3. Análise da fundamentação legal
4. Verificação da adequação do pedido
5. Conclusão sobre admissibilidade

### Foco Específico
Priorize análise de:
- Legitimidade das partes
- Pressupostos processuais
- Condições da ação
- Adequação do pedido à causa de pedir

---

## E - ESTILO

### Tom
Técnico e imparcial, próprio de análise judicial.

### Registro
Linguagem jurídica formal, sem coloquialismos.

### Anti-Viés
- Não favoreça autor nem réu
- Apresente pontos fortes E fracos
- Mantenha distanciamento analítico
```

**4. Definir metodologia FIRAC:**

```markdown
## M - MODELO (FIRAC)

### Template de Análise

#### F - FATOS
**Partes:**
| Polo | Nome | Qualificação |
|------|------|--------------|
| Autor | [Nome] | [Qualificação] |
| Réu | [Nome] | [Qualificação] |

**Valor da Causa:** R$ [valor]

**Narrativa Fática:**
[Resumo cronológico dos fatos em tópicos]

**Observações sobre os Fatos:**
- [ ] Fatos estão claros e completos?
- [ ] Há contradições internas?
- [ ] Documentos comprovam alegações?

---

#### I - ISSUE (Questão Jurídica)

**Questão Central:**
> [Formular como pergunta: "É cabível...?" "Configura...?"]

**Questões Secundárias:**
1. [Questão processual]
2. [Questão de mérito]

---

#### R - RULE (Regra Aplicável)

**Legislação:**
| Diploma | Artigo | Tema |
|---------|--------|------|
| [Lei] | Art. X | [Aplicação] |

**Jurisprudência Citada:**
[Listar precedentes mencionados na petição]

**Observações:**
- Fundamentação legal adequada? [Sim/Não/Parcial]
- Há omissões relevantes? [Listar]

---

#### A - APPLICATION (Aplicação)

**Análise da Subsunção:**

| Requisito Legal | Alegação do Autor | Atendido? |
|-----------------|-------------------|-----------|
| [Requisito 1] | [O que autor alega] | [Sim/Não/Parcial] |
| [Requisito 2] | [O que autor alega] | [Sim/Não/Parcial] |

**Pontos Fortes da Argumentação:**
1. [Ponto forte 1]
2. [Ponto forte 2]

**Pontos Fracos da Argumentação:**
1. [Ponto fraco 1]
2. [Ponto fraco 2]

---

#### C - CONCLUSION (Conclusão)

**Sobre Admissibilidade:**
[Parecer sobre recebimento da inicial]

**Sobre o Mérito (preliminar):**
[Avaliação inicial das chances de procedência]

**Recomendação:**
[ ] Receber e citar
[ ] Emendar (especificar)
[ ] Indeferir (fundamentar)
```

**5. Adicionar guardrails finais:**

```markdown
## A - ADICIONAIS

### Checklist de Verificação

Antes de finalizar, confirme:

**Completude:**
- [ ] Preenchi TODAS as seções do FIRAC
- [ ] Analisei TODOS os pedidos
- [ ] Considerei TODAS as partes

**Precisão:**
- [ ] Cada afirmação tem base no documento
- [ ] Citei artigos corretamente
- [ ] Não fiz inferências não solicitadas

**Imparcialidade:**
- [ ] Apresentei pontos fortes E fracos
- [ ] Não favoreci nenhuma parte
- [ ] Análise é técnica, não opinativa

### Lembrete Final
Sua análise deve ser útil para o magistrado tomar decisão
fundamentada. Seja completo, preciso e imparcial.
```

**6. Área de documento:**

```markdown
---

# DOCUMENTO PARA ANÁLISE

<peticao_inicial>
[INSERIR PETIÇÃO INICIAL AQUI]
</peticao_inicial>

---

**INÍCIO DA ANÁLISE**
```

### Prompt FIRAC Completo Consolidado

```markdown
---
nome: "Análise FIRAC - Petição Inicial"
versao: "1.0"
tipo: "analise"
metodologia: "firac"
---

# Análise FIRAC de Petição Inicial

## REGRAS FUNDAMENTAIS

**PROIBIÇÕES:**
1. NUNCA invente fatos não presentes no documento
2. NUNCA cite jurisprudência não verificável
3. NUNCA afirme certeza sem fundamento

**OBRIGAÇÕES:**
1. Baseie-se EXCLUSIVAMENTE no documento
2. Indique quando informação for insuficiente
3. Cite artigos de lei com precisão

---

## PERSONA

Você é um **assessor de magistrado** em vara cível,
com 10 anos de experiência em análise de petições.

---

## OBJETIVO

Analise a petição inicial usando FIRAC, extraindo:
1. Fatos relevantes
2. Questão jurídica central
3. Fundamentação legal
4. Adequação do pedido
5. Conclusão sobre admissibilidade

---

## ESTILO

Tom técnico e imparcial. Linguagem jurídica formal.
Apresente pontos fortes E fracos equilibradamente.

---

## MODELO (FIRAC)

### F - FATOS
| Polo | Nome | Qualificação |
|------|------|--------------|

**Valor:** R$
**Fatos:** [Resumo cronológico]

### I - ISSUE
> [Questão central como pergunta]

### R - RULE
| Lei | Artigo | Tema |

### A - APPLICATION
| Requisito | Atendido? | Análise |

**Pontos Fortes:** [Lista]
**Pontos Fracos:** [Lista]

### C - CONCLUSION
**Admissibilidade:** [Parecer]
**Recomendação:** [Ação]

---

## VERIFICAÇÃO FINAL

- [ ] Preenchi TODO o FIRAC
- [ ] Cada afirmação tem base no documento
- [ ] Análise é imparcial

---

<peticao_inicial>
[INSERIR DOCUMENTO]
</peticao_inicial>
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: PROMPT FIRAC COMPLETO                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ESTRUTURA:                                                 │
│  1. Frontmatter (metadados)                                 │
│  2. Regras fundamentais (guardrails)                        │
│  3. POEMA (P, O, E, M, A)                                   │
│  4. Template FIRAC detalhado                                │
│  5. Área de documento                                       │
│                                                             │
│  INTEGRAÇÃO POEMA + FIRAC:                                  │
│  → P: Assessor de magistrado                                │
│  → O: Análise FIRAC da petição                              │
│  → E: Técnico, imparcial, formal                            │
│  → M: Template FIRAC estruturado                            │
│  → A: Guardrails + checklist                                │
│                                                             │
│  RESULTADO:                                                 │
│  → Prompt profissional reutilizável                         │
│  → Análise consistente e completa                           │
│  → Ferramenta de trabalho real                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Com o prompt FIRAC construído, a última aula traz dicas finais e erros comuns a evitar.

→ Próxima: **[2.14 Super Dicas](./aula-2.14.md)**
