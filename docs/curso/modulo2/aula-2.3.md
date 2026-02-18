# 2.3 Chamando a Atenção do Modelo

**Módulo:** 2 - Engenharia de Prompt
**Bloco:** Ferramentas Básicas
**Tempo estimado:** 20 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Usar técnicas de ênfase para destacar instruções críticas
- Aplicar mecanismos de atenção e reforço
- Posicionar instruções estrategicamente no prompt
- Garantir que regras importantes não sejam ignoradas

---

## Por que Importa

**Para profissionais do Direito:**
- Instruções críticas não podem ser ignoradas
- Restrições de formato precisam ser respeitadas
- Proibições devem ser inequívocas

**Princípio:**
> Instruções importantes precisam de ênfase proporcional à sua importância.

---

## Base Conceitual

### Técnicas de Ênfase

```
┌─────────────────────────────────────────────────────────────┐
│  HIERARQUIA DE ÊNFASE                                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  NÍVEL 1: Formatação Visual                                 │
│  → **negrito**, MAIÚSCULAS, `destaque`                      │
│                                                             │
│  NÍVEL 2: Palavras de Força                                 │
│  → IMPORTANTE, CRÍTICO, OBRIGATÓRIO, PROIBIDO               │
│                                                             │
│  NÍVEL 3: Posicionamento                                    │
│  → Início do prompt (primacy)                               │
│  → Final do prompt (recency)                                │
│                                                             │
│  NÍVEL 4: Repetição Estratégica                             │
│  → Reforçar instrução em múltiplos pontos                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Palavras de Força

| Categoria | Exemplos |
|-----------|----------|
| Obrigação | DEVE, SEMPRE, OBRIGATÓRIO |
| Proibição | NÃO, NUNCA, PROIBIDO, JAMAIS |
| Importância | CRÍTICO, ESSENCIAL, FUNDAMENTAL |
| Atenção | IMPORTANTE, ATENÇÃO, NOTA |

### Posicionamento Estratégico

```
EFEITO PRIMACY (início)          EFEITO RECENCY (final)
        │                                │
        ▼                                ▼
┌──────────────────────────────────────────────────────┐
│  [INSTRUÇÕES CRÍTICAS]                               │
│                                                      │
│  [Corpo do prompt com contexto e detalhes]           │
│                                                      │
│  [LEMBRETE: INSTRUÇÕES CRÍTICAS]                     │
└──────────────────────────────────────────────────────┘
        ↑                                ↑
  Alta atenção                    Alta atenção
```

### Exemplos de Ênfase

**Sem ênfase (fraco):**
```
Analise o documento e não invente informações.
```

**Com ênfase (forte):**
```
**REGRA CRÍTICA:** Baseie-se EXCLUSIVAMENTE no documento fornecido.
PROIBIDO inventar ou inferir informações não explícitas no texto.
```

### Técnica do Sanduíche

```markdown
# REGRA FUNDAMENTAL
[Instrução crítica no início]

[Corpo do prompt...]

# LEMBRETE IMPORTANTE
[Mesma instrução repetida no final]
```

---

## Exercício Prático

### Tarefa
Reescrever prompt fraco adicionando ênfase apropriada.

### Prompt Original (fraco)
```
Analise o contrato abaixo e identifique cláusulas problemáticas.
Não invente informações. Cite os artigos do contrato.
Se não tiver certeza, diga que não sabe.
```

### Passo a Passo

**1. Identificar instruções críticas:**
- Não inventar informações (CRÍTICO)
- Citar artigos do contrato (IMPORTANTE)
- Admitir incerteza (IMPORTANTE)

**2. Aplicar técnicas de ênfase:**

```markdown
# REGRA FUNDAMENTAL
**PROIBIÇÃO ABSOLUTA** de inventar ou inferir informações não
explícitas no contrato. Use EXCLUSIVAMENTE o texto fornecido.

---

## Tarefa
Analise o contrato abaixo e identifique cláusulas problemáticas.

## Requisitos
1. **CITE** o número do artigo/cláusula para cada problema
2. **TRANSCREVA** o trecho relevante entre aspas
3. Se NÃO tiver certeza, diga explicitamente: "Não há informação
   suficiente no contrato para afirmar isso."

---

<contrato>
[Texto do contrato]
</contrato>

---

# LEMBRETE CRÍTICO
Sua análise deve se basear ÚNICA e EXCLUSIVAMENTE no texto do
contrato acima. Qualquer afirmação deve ser rastreável a um
trecho específico.
```

**3. Testar:**
- Execute ambas as versões
- Verifique se o modelo respeita as restrições

### Checklist de Verificação

```
[ ] Instruções críticas estão em destaque
[ ] Usei palavras de força apropriadas
[ ] Posicionei instruções no início E final
[ ] Proibições estão inequívocas
```

---

## Dicas e Armadilhas

### Dica
> Use a técnica do sanduíche para instruções realmente críticas: coloque no início E repita no final do prompt. O modelo tende a lembrar melhor do início e do final.

### Dica 2
> Combine formatação visual com palavras de força:
> ```
> **IMPORTANTE:** NUNCA cite jurisprudência sem verificar.
> ```
> Isso ativa múltiplos mecanismos de atenção.

### Armadilha
> **"Tudo em maiúscula o tempo todo."**
>
> Se TUDO estiver em MAIÚSCULA, NADA se destaca.
> Reserve ênfase para o que é realmente crítico.

### Armadilha 2
> **"Ênfase no meio do prompt."**
>
> Instruções enterradas no meio do prompt são mais
> facilmente ignoradas. Use início e final.

---

## Templates Prontos

### Template com Guardrails
```markdown
# REGRAS INVIOLÁVEIS
1. **NUNCA** [proibição 1]
2. **SEMPRE** [obrigação 1]
3. **PROIBIDO** [proibição 2]

---

[Corpo do prompt]

---

# VERIFICAÇÃO FINAL
Antes de responder, confirme:
- [ ] Segui a regra 1?
- [ ] Segui a regra 2?
- [ ] Segui a regra 3?
```

### Template de Análise Restrita
```markdown
**ATENÇÃO: ANÁLISE RESTRITA**

Use EXCLUSIVAMENTE as informações do documento fornecido.
PROIBIDO:
- Inventar fatos
- Citar jurisprudência não mencionada
- Fazer inferências além do texto

---

<documento>
[Conteúdo]
</documento>

---

**LEMBRETE:** Qualquer afirmação deve ter base explícita no documento.
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: CHAMANDO A ATENÇÃO DO MODELO                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  TÉCNICAS DE ÊNFASE:                                        │
│  → Formatação: **negrito**, MAIÚSCULAS                      │
│  → Palavras: CRÍTICO, PROIBIDO, OBRIGATÓRIO                 │
│  → Posição: início (primacy) e final (recency)              │
│  → Repetição: técnica do sanduíche                          │
│                                                             │
│  QUANDO USAR:                                               │
│  → Proibições que não podem ser violadas                    │
│  → Restrições de formato                                    │
│  → Regras de fonte de informação                            │
│                                                             │
│  REGRA: Ênfase proporcional à importância.                  │
│         Destaque tudo = destaque nada.                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Com as ferramentas de formatação dominadas (Markdown, XML, ênfase), o próximo passo é entender os diferentes tipos de prompt.

→ Próxima: **[2.4 Tipos de Prompt](./aula-2.4.md)**
