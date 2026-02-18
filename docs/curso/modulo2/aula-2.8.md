# 2.8 M - Modelo

**Módulo:** 2 - Engenharia de Prompt
**Componente POEMA:** M (Modelo)
**Tempo estimado:** 30 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Definir metodologias de raciocínio (CoT, FIRAC)
- Criar templates de saída com placeholders
- Estruturar formato de resposta esperado
- Usar modelos pré-estruturados para consistência

---

## Por que Importa

**Para profissionais do Direito:**
- Metodologias jurídicas garantem análise completa
- Templates padronizam produção de documentos
- Estrutura definida facilita revisão e reutilização

**Princípio:**
> O Modelo define COMO o LLM deve pensar e entregar o resultado.

---

## Base Conceitual

### O que é Modelo no POEMA?

```
MODELO = Metodologia + Template + Formato

Metodologia: Como raciocinar (passo a passo, FIRAC, CoT)
Template:    Estrutura da resposta com placeholders
Formato:     Apresentação final (Markdown, lista, tabela)
```

### Metodologias de Raciocínio

```
┌─────────────────────────────────────────────────────────────┐
│  METODOLOGIAS PRINCIPAIS                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  CHAIN OF THOUGHT (CoT)                                     │
│  → "Pense passo a passo"                                    │
│  → Força raciocínio explícito                               │
│  → Reduz erros de lógica                                    │
│                                                             │
│  FIRAC (Jurídico)                                           │
│  → Facts (Fatos)                                            │
│  → Issue (Questão jurídica)                                 │
│  → Rule (Regra aplicável)                                   │
│  → Application (Aplicação)                                  │
│  → Conclusion (Conclusão)                                   │
│                                                             │
│  COMPARAÇÃO                                                 │
│  → Posição A + Posição B + Síntese                          │
│  → Força análise equilibrada                                │
│                                                             │
│  PRÓS E CONTRAS                                             │
│  → Lista estruturada de vantagens e desvantagens            │
│  → Facilita tomada de decisão                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Templates com Placeholders

Placeholders são marcadores que indicam onde inserir informações específicas.

```markdown
# Template de Parecer

## 1. EMENTA
[Resumo em até 3 linhas do objeto e conclusão]

## 2. RELATÓRIO
[Descrição dos fatos em ordem cronológica]

## 3. FUNDAMENTAÇÃO
### 3.1 Questão Jurídica
[Qual a pergunta a ser respondida]

### 3.2 Legislação Aplicável
[Leis e artigos relevantes]

### 3.3 Análise
[Aplicação da lei aos fatos]

## 4. CONCLUSÃO
[Resposta objetiva à questão]

## 5. SUGESTÃO
[Recomendação de ação, se aplicável]
```

### Formatos de Saída

| Formato | Quando Usar |
|---------|-------------|
| **Markdown** | Documentos estruturados, relatórios |
| **Lista** | Enumeração de itens, checklists |
| **Tabela** | Comparações, dados estruturados |
| **JSON** | Integração com sistemas, dados |
| **Texto corrido** | Narrativa, explicações |

---

## Exercício Prático

### Tarefa
Criar template com placeholders para análise de caso.

### Caso Base
```
Criar template de análise FIRAC para casos de
responsabilidade civil por danos morais.
```

### Passo a Passo

**1. Definir metodologia:**
- Usar FIRAC adaptado para danos morais

**2. Criar placeholders:**

```markdown
# Template FIRAC - Danos Morais

## F - FATOS
### Partes
- **Autor:** [Nome e qualificação]
- **Réu:** [Nome e qualificação]

### Narrativa
[Descrição cronológica dos fatos em tópicos]

### Danos Alegados
[Descrição específica do dano moral alegado]

---

## I - ISSUE (Questão Jurídica)
**Questão central:** [Formular como pergunta]

**Questões secundárias:**
1. [Questão 1]
2. [Questão 2]

---

## R - RULE (Regra Aplicável)
### Fundamento Legal
- [Lei/Artigo 1]
- [Lei/Artigo 2]

### Jurisprudência
- [Precedente 1]
- [Precedente 2]

### Doutrina
- [Posição doutrinária, se relevante]

---

## A - APPLICATION (Aplicação)
### Elementos da Responsabilidade Civil
| Elemento | Presente? | Fundamentação |
|----------|-----------|---------------|
| Ato ilícito | [Sim/Não] | [Explicação] |
| Dano | [Sim/Não] | [Explicação] |
| Nexo causal | [Sim/Não] | [Explicação] |
| Culpa/Dolo | [Sim/Não] | [Explicação] |

### Análise do Quantum
[Parâmetros para fixação do valor]

---

## C - CONCLUSION (Conclusão)
### Mérito
[Procedência/Improcedência + fundamentação resumida]

### Quantum Sugerido
[Valor sugerido + justificativa]

### Recomendações
[Ações sugeridas]
```

**3. Testar com caso real:**
- Preencha o template com um caso
- Avalie completude da análise

### Checklist de Verificação

```
[ ] Defini metodologia de raciocínio
[ ] Criei placeholders descritivos
[ ] Estruturei formato de saída
[ ] Template cobre todos os aspectos necessários
```

---

## Dicas e Armadilhas

### Dica
> Para análises jurídicas, sempre use metodologia estruturada (FIRAC, CoT). Isso força o modelo a seguir raciocínio lógico e reduz saltos de conclusão.

### Dica 2
> Combine metodologia com formato:
> ```
> Use metodologia FIRAC.
> Apresente em formato de tabela para cada elemento.
> ```

### Armadilha
> **"Template muito rígido limita a análise."**
>
> Templates não limitam, eles garantem completude.
> Adicione seção "Observações Adicionais" para flexibilidade.

### Armadilha 2
> **"O modelo vai seguir o template naturalmente."**
>
> Não necessariamente. Mostre o template explicitamente
> e instrua: "Preencha TODAS as seções deste template."

---

## Templates Prontos

### Template CoT (Chain of Thought)
```markdown
## Metodologia
Raciocine passo a passo antes de concluir.

## Estrutura de Raciocínio
1. **Passo 1:** [Identificar elementos do problema]
2. **Passo 2:** [Analisar cada elemento]
3. **Passo 3:** [Conectar análises]
4. **Passo 4:** [Formular conclusão]

## Formato
Para cada passo, mostre seu raciocínio explicitamente.
```

### Template de Comparação
```markdown
## Metodologia
Compare as posições A e B de forma equilibrada.

## Estrutura
| Aspecto | Posição A | Posição B |
|---------|-----------|-----------|
| [Aspecto 1] | [Argumento] | [Argumento] |
| [Aspecto 2] | [Argumento] | [Argumento] |

## Síntese
Qual posição é mais forte considerando [critério]?
```

### Template FIRAC Genérico
```markdown
## Metodologia
Analise usando o método FIRAC.

## Estrutura
### F - Facts (Fatos)
[Resumo dos fatos relevantes]

### I - Issue (Questão)
[Pergunta jurídica central]

### R - Rule (Regra)
[Lei/jurisprudência aplicável]

### A - Application (Aplicação)
[Subsunção dos fatos à regra]

### C - Conclusion (Conclusão)
[Resposta à questão]
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: MODELO                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  FÓRMULA:                                                   │
│  Modelo = Metodologia + Template + Formato                  │
│                                                             │
│  COMPONENTES:                                               │
│  → Metodologia: como raciocinar (CoT, FIRAC)                │
│  → Template: estrutura com placeholders                     │
│  → Formato: apresentação (Markdown, tabela, lista)          │
│                                                             │
│  METODOLOGIAS PRINCIPAIS:                                   │
│  → CoT: passo a passo explícito                             │
│  → FIRAC: análise jurídica estruturada                      │
│  → Comparação: análise equilibrada                          │
│                                                             │
│  REGRA: Defina como o modelo deve pensar E entregar.        │
│         Metodologia + Template = Consistência               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Com P, O, E, M definidos, falta o último componente: Adicionais (guardrails e proteções).

→ Próxima: **[2.9 A - Adicionais](./aula-2.9.md)**
