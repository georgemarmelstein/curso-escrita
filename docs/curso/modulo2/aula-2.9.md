# 2.9 A - Adicionais

**Módulo:** 2 - Engenharia de Prompt
**Componente POEMA:** A (Adicionais)
**Tempo estimado:** 25 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Implementar guardrails para proteção
- Criar checklists de qualidade
- Adicionar reforços e lembretes
- Fechar lacunas e prevenir erros comuns

---

## Por que Importa

**Para profissionais do Direito:**
- Guardrails evitam erros críticos
- Checklists garantem completude
- Reforços mantêm consistência em textos longos

**Princípio:**
> Os Adicionais são as proteções que transformam um prompt bom em um prompt robusto.

---

## Base Conceitual

### O que são Adicionais no POEMA?

```
ADICIONAIS = Guardrails + Qualidade + Reforços

Guardrails:  Proibições e limites
Qualidade:   Checklists e verificações
Reforços:    Lembretes e repetições estratégicas
```

### Tipos de Guardrails

```
┌─────────────────────────────────────────────────────────────┐
│  TIPOS DE GUARDRAILS                                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  GUARDRAILS DE FONTE                                        │
│  → "Use APENAS o documento fornecido"                       │
│  → "NÃO cite jurisprudência não verificada"                 │
│  → "Baseie-se EXCLUSIVAMENTE nos fatos apresentados"        │
│                                                             │
│  GUARDRAILS DE COMPORTAMENTO                                │
│  → "NÃO invente informações"                                │
│  → "Se não souber, diga explicitamente"                     │
│  → "NUNCA afirme certeza sem fundamento"                    │
│                                                             │
│  GUARDRAILS DE FORMATO                                      │
│  → "Resposta em NO MÁXIMO 500 palavras"                     │
│  → "Siga EXATAMENTE o template fornecido"                   │
│  → "NÃO adicione seções além das solicitadas"               │
│                                                             │
│  GUARDRAILS ÉTICOS                                          │
│  → "Mantenha imparcialidade"                                │
│  → "Não faça julgamentos morais sobre as partes"            │
│  → "Apresente ambos os lados da questão"                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Checklist de Qualidade

```markdown
# Checklist de Verificação

Antes de finalizar sua resposta, confirme:

## Completude
- [ ] Respondi a TODAS as perguntas feitas
- [ ] Cobri TODOS os pontos solicitados
- [ ] Segui o template COMPLETO

## Precisão
- [ ] Todas as afirmações têm base no documento
- [ ] Não fiz inferências não solicitadas
- [ ] Citei fontes quando aplicável

## Formato
- [ ] Segui a estrutura solicitada
- [ ] Respeitei limites de extensão
- [ ] Usei formatação adequada
```

### Técnicas de Reforço

```markdown
# Reforço por Repetição

## INÍCIO DO PROMPT
REGRA FUNDAMENTAL: Baseie-se APENAS no documento.

[Corpo do prompt...]

## MEIO DO PROMPT
[Lembrete: mantenha foco no documento]

## FINAL DO PROMPT
VERIFICAÇÃO FINAL: Sua resposta se baseia EXCLUSIVAMENTE
no documento fornecido?
```

---

## Exercício Prático

### Tarefa
Adicionar proteções a um prompt existente.

### Prompt Base (sem proteções)
```markdown
Você é um advogado especializado em direito do consumidor.

Analise a petição inicial anexada e identifique os pontos
fracos da argumentação do autor.

Use metodologia FIRAC e apresente em tópicos.
```

### Passo a Passo

**1. Identificar riscos:**
- Pode inventar informações não presentes na petição
- Pode ser tendencioso contra o autor
- Pode ultrapassar escopo solicitado
- Pode ignorar partes do FIRAC

**2. Adicionar guardrails:**

```markdown
# REGRAS FUNDAMENTAIS
**PROIBIDO:**
- Inventar fatos não presentes no documento
- Citar jurisprudência não mencionada na petição
- Fazer julgamentos sobre a boa-fé das partes

**OBRIGATÓRIO:**
- Basear análise EXCLUSIVAMENTE no documento anexo
- Se não houver informação suficiente, indicar expressamente
- Manter tom técnico e imparcial
```

**3. Adicionar checklist:**

```markdown
# Checklist de Qualidade

Antes de finalizar, verifique:
- [ ] Analisei TODOS os argumentos do autor
- [ ] Cada ponto fraco está fundamentado
- [ ] Segui metodologia FIRAC completa
- [ ] Mantive imparcialidade técnica
- [ ] Não ultrapassei o escopo (apenas pontos fracos)
```

**4. Adicionar reforços:**

```markdown
# Prompt Completo com Proteções

## REGRA FUNDAMENTAL
**Use EXCLUSIVAMENTE as informações da petição anexada.**

---

## Persona
Você é um advogado especializado em direito do consumidor,
realizando análise técnica para preparação de defesa.

## Tarefa
Analise a petição inicial anexada e identifique os pontos
fracos da argumentação do autor.

## Metodologia
Use FIRAC:
- **F:** Identifique fatos alegados
- **I:** Identifique a questão central
- **R:** Identifique as regras invocadas
- **A:** Analise a aplicação (pontos fracos)
- **C:** Conclua sobre vulnerabilidades

## Formato
Apresente em tópicos numerados, cada ponto fraco com:
1. Descrição do argumento
2. Razão da fragilidade
3. Possível contra-argumento

---

<peticao>
[Documento anexado]
</peticao>

---

## VERIFICAÇÃO OBRIGATÓRIA
Antes de responder, confirme:
- [ ] Me baseei APENAS na petição acima
- [ ] Cobri todos os argumentos do autor
- [ ] Cada ponto fraco está fundamentado
- [ ] Mantive análise técnica e imparcial
```

### Checklist de Verificação

```
[ ] Adicionei guardrails de fonte
[ ] Adicionei guardrails de comportamento
[ ] Incluí checklist de qualidade
[ ] Usei reforço no final
```

---

## Dicas e Armadilhas

### Dica
> Guarde os guardrails mais importantes para o início E final do prompt. Instruções no meio são mais facilmente ignoradas.

### Dica 2
> Use perguntas no checklist final:
> ```
> Antes de responder:
> - Você se baseou APENAS no documento?
> - Você cobriu TODOS os pontos?
> ```
> Perguntas forçam o modelo a verificar.

### Armadilha
> **"Muitos guardrails confundem."**
>
> Guardrails confusos ou contraditórios atrapalham.
> Seja claro e consistente nas restrições.

### Armadilha 2
> **"Checklist no início funciona igual."**
>
> Não funciona. Checklist deve vir NO FINAL,
> para que o modelo verifique ANTES de responder.

---

## Templates Prontos

### Template de Guardrails Completo
```markdown
# REGRAS INVIOLÁVEIS

## Proibições
1. **NUNCA** invente informações não presentes no documento
2. **NUNCA** cite jurisprudência sem fonte verificável
3. **NUNCA** ultrapasse o escopo solicitado

## Obrigações
1. **SEMPRE** baseie-se no documento fornecido
2. **SEMPRE** indique incerteza quando aplicável
3. **SEMPRE** siga o formato solicitado

## Se em Dúvida
- Diga: "Não há informação suficiente no documento para..."
- Diga: "Seria necessário verificar..."
```

### Template de Checklist Final
```markdown
# VERIFICAÇÃO FINAL OBRIGATÓRIA

Antes de enviar sua resposta, confirme:

## Completude
- [ ] Respondi a TODAS as perguntas
- [ ] Cobri TODOS os pontos do template
- [ ] Não omiti informações relevantes

## Precisão
- [ ] Cada afirmação tem base no documento
- [ ] Não fiz inferências não solicitadas
- [ ] Indiquei incertezas quando aplicável

## Formato
- [ ] Segui a estrutura exigida
- [ ] Respeitei limites (se houver)
- [ ] Formatação está correta

Se algum item não puder ser confirmado, indique na resposta.
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: ADICIONAIS                                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  FÓRMULA:                                                   │
│  Adicionais = Guardrails + Qualidade + Reforços             │
│                                                             │
│  COMPONENTES:                                               │
│  → Guardrails: proibições e limites claros                  │
│  → Qualidade: checklists de verificação                     │
│  → Reforços: lembretes em pontos estratégicos               │
│                                                             │
│  TIPOS DE GUARDRAILS:                                       │
│  → Fonte: controle de origem das informações                │
│  → Comportamento: evitar invenções e erros                  │
│  → Formato: limites de extensão e estrutura                 │
│  → Éticos: imparcialidade e equilíbrio                      │
│                                                             │
│  REGRA: Guardrails no início + Checklist no final           │
│         = Prompt robusto contra erros                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão: Framework POEMA Completo

Parabéns! Você completou o framework P.O.E.M.A.

```
┌─────────────────────────────────────────────────────────────┐
│  P.O.E.M.A. COMPLETO                                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  P - PERSONA     → Quem (papel + expertise)                 │
│  O - OBJETIVO    → O quê (tarefa + leitura)                 │
│  E - ESTILO      → Como comunica (tom + anti-viés)          │
│  M - MODELO      → Como pensa (metodologia + template)      │
│  A - ADICIONAIS  → Proteções (guardrails + checklist)       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

→ Próxima: **[2.10 YAML Frontmatter](./aula-2.10.md)**
