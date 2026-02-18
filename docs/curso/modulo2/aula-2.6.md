# 2.6 O - Objetivo

**Módulo:** 2 - Engenharia de Prompt
**Componente POEMA:** O (Objetivo)
**Tempo estimado:** 25 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Definir objetivos claros e específicos para prompts
- Transformar objetivos vagos em objetivos SMART
- Especificar tarefa, leitura e ferramentas
- Evitar ambiguidade no que se espera do modelo

---

## Por que Importa

**Para profissionais do Direito:**
- Objetivo vago = resposta vaga
- Especificidade no pedido gera precisão na resposta
- Clareza evita retrabalho

**Princípio:**
> Se você não sabe exatamente o que quer, o modelo também não saberá.

---

## Base Conceitual

### O que é Objetivo no POEMA?

```
OBJETIVO = Tarefa + Leitura + Ferramentas

Tarefa:      O que fazer (verbo de ação)
Leitura:     O que ler/analisar (documentos, contexto)
Ferramentas: Recursos a usar (busca, código, RAG)
```

### Objetivos Vagos vs Específicos

| Vago | Específico |
|------|------------|
| Analise isso | Extraia os argumentos do autor em tópicos |
| Me ajude com esse contrato | Identifique 3 cláusulas abusivas no contrato |
| Escreva sobre prescrição | Redija 2 parágrafos sobre prescrição quinquenal |
| Revise esse texto | Corrija erros gramaticais e melhore clareza |

### Framework SMART para Objetivos

```
┌─────────────────────────────────────────────────────────────┐
│  OBJETIVO SMART                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  S - Specific (Específico)                                  │
│      O que exatamente deve ser feito?                       │
│                                                             │
│  M - Measurable (Mensurável)                                │
│      Como saber se foi alcançado?                           │
│                                                             │
│  A - Achievable (Alcançável)                                │
│      É possível com as informações fornecidas?              │
│                                                             │
│  R - Relevant (Relevante)                                   │
│      Contribui para o objetivo maior?                       │
│                                                             │
│  T - Time-bound (Delimitado)                                │
│      Tem escopo definido?                                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Verbos de Ação por Tipo de Tarefa

| Tipo | Verbos |
|------|--------|
| **Análise** | Extraia, Identifique, Liste, Compare, Classifique |
| **Escrita** | Redija, Elabore, Formule, Componha, Estruture |
| **Criação** | Sugira, Proponha, Gere, Crie, Desenvolva |
| **Pesquisa** | Pesquise, Busque, Sintetize, Compile, Resuma |
| **Revisão** | Corrija, Melhore, Revise, Edite, Refine |

### Especificando Leitura

```markdown
# Leitura Implícita (fraco)
Analise o documento.

# Leitura Explícita (forte)
Analise o documento anexo em <contrato>, focando nas
cláusulas 3, 5 e 8 que tratam de rescisão.
```

### Especificando Ferramentas

```markdown
# Sem ferramentas (conhecimento paramétrico)
Explique a prescrição no direito civil.

# Com busca web
Pesquise jurisprudência recente do STJ sobre prescrição.
[Busca web ativada]

# Com documento anexado
Analise APENAS o documento em anexo.
NÃO use conhecimento externo.
```

---

## Exercício Prático

### Tarefa
Transformar objetivo vago em objetivo SMART.

### Objetivo Vago Original
```
Me ajude a analisar esse processo.
```

### Passo a Passo

**1. Aplicar critérios SMART:**

| Critério | Antes | Depois |
|----------|-------|--------|
| Specific | "analisar" (vago) | "extrair argumentos e identificar teses" |
| Measurable | sem métrica | "listar em tópicos numerados" |
| Achievable | sem contexto | "com base no documento anexo" |
| Relevant | implícito | "para preparar contestação" |
| Time-bound | sem escopo | "foque na questão da prescrição" |

**2. Reescrever objetivo:**

```markdown
# Objetivo SMART

## Tarefa Principal
Analise a petição inicial anexa para preparar contestação.

## Extrações Específicas
1. **Argumentos do autor:** liste em tópicos numerados
2. **Fundamentos jurídicos:** identifique leis e artigos citados
3. **Pontos fracos:** identifique inconsistências ou lacunas

## Foco
Priorize a análise da tese de prescrição do autor.

## Leitura
Use EXCLUSIVAMENTE o documento em <peticao_inicial>.

## Formato de Saída
Para cada argumento, indique:
- Resumo do argumento
- Fundamento citado
- Possível contra-argumento
```

**3. Testar:**
- Execute ambas as versões
- Compare especificidade das respostas

### Checklist de Verificação

```
[ ] Objetivo usa verbo de ação claro
[ ] Especifiquei o que deve ser lido
[ ] Defini formato de saída esperado
[ ] Escopo está delimitado
```

---

## Dicas e Armadilhas

### Dica
> Sempre comece o objetivo com um verbo de ação: "Extraia", "Redija", "Compare", "Identifique". Verbos vagos como "Analise" ou "Ajude" precisam de complemento específico.

### Dica 2
> Inclua critérios de sucesso no objetivo:
> ```
> Extraia os argumentos do autor.
> CRITÉRIO: Cada argumento deve ter no máximo 2 frases.
> ```

### Armadilha
> **"O modelo vai entender o que eu quero."**
>
> Não vai. O modelo responde literalmente ao que você pede.
> "Analise" pode gerar qualquer tipo de análise.

### Armadilha 2
> **"Objetivo muito longo fica confuso."**
>
> Objetivo específico não é objetivo longo.
> É objetivo focado com critérios claros.

---

## Templates Prontos

### Template de Objetivo para Análise
```markdown
## Objetivo
**Tarefa:** [Verbo de ação] + [o quê]
**Leitura:** [Documento específico]
**Foco:** [Aspecto prioritário]

## Extrações
1. [Extração 1]
2. [Extração 2]
3. [Extração 3]

## Critérios de Sucesso
- [Critério 1]
- [Critério 2]
```

### Template de Objetivo para Escrita
```markdown
## Objetivo
**Tarefa:** Redigir [tipo de documento]
**Propósito:** [Para quê serve]
**Destinatário:** [Quem vai ler]

## Requisitos
- [Requisito 1]
- [Requisito 2]

## Restrições
- Extensão: [limite]
- Tom: [formal/informal]
```

### Template de Objetivo Multi-Etapa
```markdown
## Objetivo Geral
[Descrição do resultado final esperado]

## Etapas
1. **Etapa 1:** [Verbo] + [o quê]
2. **Etapa 2:** [Verbo] + [o quê]
3. **Etapa 3:** [Verbo] + [o quê]

## Dependências
- Etapa 2 depende do resultado da Etapa 1
- Etapa 3 consolida as anteriores
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: OBJETIVO                                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  FÓRMULA:                                                   │
│  Objetivo = Tarefa + Leitura + Ferramentas                  │
│                                                             │
│  COMPONENTES:                                               │
│  → Tarefa: verbo de ação + o que fazer                      │
│  → Leitura: o que analisar/consultar                        │
│  → Ferramentas: recursos disponíveis                        │
│                                                             │
│  FRAMEWORK SMART:                                           │
│  → Specific: o que exatamente?                              │
│  → Measurable: como medir sucesso?                          │
│  → Achievable: é possível?                                  │
│  → Relevant: é útil?                                        │
│  → Time-bound: escopo definido?                             │
│                                                             │
│  REGRA: Objetivo vago = resposta vaga.                      │
│         Seja específico no que você quer.                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Com Persona (QUEM) e Objetivo (O QUÊ) definidos, o próximo passo é definir o Estilo (COMO comunicar).

→ Próxima: **[2.7 E - Estilo](./aula-2.7.md)**
