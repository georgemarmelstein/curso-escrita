# 2.12 Checklist Final

**Módulo:** 2 - Engenharia de Prompt
**Bloco:** Técnicas Avançadas
**Tempo estimado:** 25 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Auditar prompts usando checklist estruturado
- Identificar falhas comuns em prompts
- Aplicar critérios de qualidade consistentes
- Garantir que prompts estejam prontos para produção

---

## Por que Importa

**Para profissionais do Direito:**
- Prompts mal construídos geram resultados inconsistentes
- Checklist garante qualidade mínima
- Auditoria previne erros antes que aconteçam

**Princípio:**
> Um checklist transforma qualidade subjetiva em critérios objetivos.

---

## Base Conceitual

### Checklist Completo de Qualidade

```
┌─────────────────────────────────────────────────────────────┐
│  CHECKLIST DE QUALIDADE DE PROMPTS                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ▢ 1. CLAREZA                                               │
│     [ ] Objetivo está explícito e específico?               │
│     [ ] Instruções são inequívocas?                         │
│     [ ] Não há ambiguidade no que se espera?                │
│                                                             │
│  ▢ 2. ESTRUTURA                                             │
│     [ ] Usa formatação (Markdown/XML)?                      │
│     [ ] Seções estão bem separadas?                         │
│     [ ] Há hierarquia visual clara?                         │
│                                                             │
│  ▢ 3. COMPLETUDE (POEMA)                                    │
│     [ ] Persona definida (se necessário)?                   │
│     [ ] Objetivo SMART?                                     │
│     [ ] Estilo especificado?                                │
│     [ ] Metodologia indicada?                               │
│     [ ] Guardrails incluídos?                               │
│                                                             │
│  ▢ 4. PROTEÇÕES                                             │
│     [ ] Guardrails de fonte (não inventar)?                 │
│     [ ] Guardrails de formato?                              │
│     [ ] Instrução de humildade (se não souber)?             │
│                                                             │
│  ▢ 5. FORMATO DE SAÍDA                                      │
│     [ ] Formato esperado está definido?                     │
│     [ ] Template ou exemplo fornecido?                      │
│     [ ] Limites especificados (se aplicável)?               │
│                                                             │
│  ▢ 6. TESTABILIDADE                                         │
│     [ ] Prompt pode ser testado isoladamente?               │
│     [ ] Critérios de sucesso estão claros?                  │
│     [ ] Resultado esperado é verificável?                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Sistema de Pontuação

| Critério | Peso | Descrição |
|----------|------|-----------|
| Clareza | 25% | Objetivo e instruções claras |
| Estrutura | 15% | Formatação e organização |
| Completude | 25% | Componentes POEMA presentes |
| Proteções | 20% | Guardrails adequados |
| Formato | 10% | Saída especificada |
| Testabilidade | 5% | Verificável |

### Classificação

| Pontuação | Classificação | Ação |
|-----------|---------------|------|
| 90-100% | Excelente | Pronto para uso |
| 70-89% | Bom | Ajustes menores |
| 50-69% | Regular | Precisa melhorias |
| <50% | Insuficiente | Reescrever |

---

## Exercício Prático

### Tarefa
Auditar um prompt existente usando o checklist.

### Prompt para Auditar
```
Analise o documento e me diga o que acha.
Seja objetivo.
```

### Passo a Passo

**1. Aplicar checklist:**

| Critério | Atende? | Observação |
|----------|---------|------------|
| **CLAREZA** | | |
| Objetivo explícito | ❌ | "o que acha" é vago |
| Instruções inequívocas | ❌ | Não especifica tipo de análise |
| Sem ambiguidade | ❌ | "objetivo" pode significar várias coisas |
| **ESTRUTURA** | | |
| Formatação | ❌ | Texto corrido |
| Seções separadas | ❌ | Sem separação |
| Hierarquia visual | ❌ | Ausente |
| **COMPLETUDE** | | |
| Persona | ❌ | Não definida |
| Objetivo SMART | ❌ | Completamente vago |
| Estilo | ❌ | "objetivo" não é estilo |
| Metodologia | ❌ | Ausente |
| Guardrails | ❌ | Ausentes |
| **PROTEÇÕES** | | |
| Guardrails de fonte | ❌ | Ausentes |
| Guardrails de formato | ❌ | Ausentes |
| Instrução humildade | ❌ | Ausente |
| **FORMATO** | | |
| Formato definido | ❌ | Não especificado |
| Template/exemplo | ❌ | Ausente |
| Limites | ❌ | Não especificados |
| **TESTABILIDADE** | | |
| Testável | ❌ | Sem critério de sucesso |
| Critérios claros | ❌ | Ausentes |
| Verificável | ❌ | Impossível verificar |

**2. Calcular pontuação:**
- Critérios atendidos: 0/18
- Pontuação: 0%
- Classificação: **Insuficiente - Reescrever**

**3. Reescrever aplicando checklist:**

```markdown
# Análise de Contrato de Locação

## Persona
Você é um advogado especializado em direito imobiliário
com experiência em revisão de contratos de locação.

## Objetivo
Analise o contrato de locação anexado e identifique:
1. Cláusulas potencialmente abusivas
2. Lacunas contratuais
3. Riscos para o locatário

## Metodologia
Para cada item identificado:
- Cite a cláusula específica
- Explique o problema
- Sugira alternativa

## Formato de Saída
| Cláusula | Problema | Sugestão |
|----------|----------|----------|
| [Número] | [Descrição] | [Alternativa] |

## Guardrails
- Baseie-se APENAS no contrato fornecido
- Se cláusula for válida, indique "Sem problemas"
- Não invente riscos hipotéticos

---

<contrato>
[INSERIR CONTRATO]
</contrato>
```

**4. Reavaliar:**

| Critério | Atende? |
|----------|---------|
| Clareza (3/3) | ✅✅✅ |
| Estrutura (3/3) | ✅✅✅ |
| Completude (5/5) | ✅✅✅✅✅ |
| Proteções (3/3) | ✅✅✅ |
| Formato (3/3) | ✅✅✅ |
| Testabilidade (1/1) | ✅ |

- Pontuação: 18/18 = 100%
- Classificação: **Excelente - Pronto para uso**

### Checklist de Verificação

```
[ ] Apliquei checklist ao prompt
[ ] Calculei pontuação
[ ] Identifiquei falhas
[ ] Corrigi problemas encontrados
[ ] Revalidei após correções
```

---

## Dicas e Armadilhas

### Dica
> Use o checklist como **pré-flight check** antes de executar prompts importantes. Invista 2 minutos na auditoria para evitar resultados ruins.

### Dica 2
> Crie versão simplificada para uso rápido:
> ```
> Quick Check:
> [ ] Objetivo claro?
> [ ] Formato definido?
> [ ] Guardrails presentes?
> ```

### Armadilha
> **"Checklist é burocracia."**
>
> Checklist é prevenção. Prompts que passam pelo
> checklist têm taxa de sucesso muito maior.

### Armadilha 2
> **"100% no checklist = prompt perfeito."**
>
> Checklist garante qualidade mínima.
> Ainda precisa testar com casos reais.

---

## Templates Prontos

### Checklist Rápido (1 minuto)
```markdown
## Quick Check
- [ ] Sei exatamente o que quero?
- [ ] Disse como quero a resposta?
- [ ] Protegi contra invenções?

Se 3x SIM → Executar
Se algum NÃO → Revisar
```

### Checklist Completo (5 minutos)
```markdown
## Auditoria de Prompt

### 1. CLAREZA (25%)
- [ ] Objetivo está explícito
- [ ] Instruções são inequívocas
- [ ] Sem ambiguidade

### 2. ESTRUTURA (15%)
- [ ] Usa formatação adequada
- [ ] Seções bem separadas
- [ ] Hierarquia visual clara

### 3. COMPLETUDE - POEMA (25%)
- [ ] P - Persona definida
- [ ] O - Objetivo SMART
- [ ] E - Estilo especificado
- [ ] M - Metodologia indicada
- [ ] A - Adicionais/Guardrails

### 4. PROTEÇÕES (20%)
- [ ] Não pode inventar fatos
- [ ] Formato está restrito
- [ ] Humildade instruída

### 5. FORMATO DE SAÍDA (10%)
- [ ] Formato esperado definido
- [ ] Template ou exemplo dado
- [ ] Limites especificados

### 6. TESTABILIDADE (5%)
- [ ] Critérios de sucesso claros
- [ ] Resultado verificável

**PONTUAÇÃO:** ___/100%
**CLASSIFICAÇÃO:** _______________
**AÇÃO:** _______________
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: CHECKLIST FINAL                                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  CRITÉRIOS PRINCIPAIS:                                      │
│  1. Clareza (25%) - Objetivo e instruções claras            │
│  2. Estrutura (15%) - Formatação e organização              │
│  3. Completude (25%) - POEMA completo                       │
│  4. Proteções (20%) - Guardrails adequados                  │
│  5. Formato (10%) - Saída especificada                      │
│  6. Testabilidade (5%) - Verificável                        │
│                                                             │
│  CLASSIFICAÇÃO:                                             │
│  → 90-100%: Excelente (usar)                                │
│  → 70-89%: Bom (ajustar)                                    │
│  → 50-69%: Regular (melhorar)                               │
│  → <50%: Insuficiente (reescrever)                          │
│                                                             │
│  REGRA: 2 minutos de auditoria economizam                   │
│         horas de retrabalho.                                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Com o checklist dominado, é hora de aplicar tudo na construção de um prompt FIRAC completo.

→ Próxima: **[2.13 Prompt FIRAC Completo](./aula-2.13.md)**
