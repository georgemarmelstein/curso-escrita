# 2.11 Metaprompts

**Módulo:** 2 - Engenharia de Prompt
**Bloco:** Técnicas Avançadas
**Tempo estimado:** 30 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Entender o conceito de metaprompt
- Usar metaprompts para gerar prompts otimizados
- Aplicar o princípio "prompt que gera prompt"
- Criar metaprompts personalizados

---

## Por que Importa

**Para profissionais do Direito:**
- Metaprompts automatizam criação de prompts
- LLM pode otimizar seus próprios inputs
- Técnica avançada para escalar produção

**Princípio:**
> Um metaprompt usa o LLM para criar ou melhorar prompts — é um prompt sobre prompts.

---

## Base Conceitual

### O que é Metaprompt?

```
┌─────────────────────────────────────────────────────────────┐
│  NÍVEIS DE ABSTRAÇÃO                                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  NÍVEL 0: Tarefa                                            │
│  → "Analise este contrato"                                  │
│                                                             │
│  NÍVEL 1: Prompt                                            │
│  → Instrução estruturada para realizar a tarefa             │
│                                                             │
│  NÍVEL 2: METAPROMPT                                        │
│  → Instrução para criar/melhorar o prompt do nível 1        │
│                                                             │
│  Fluxo: Metaprompt → gera → Prompt → executa → Resultado    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Tipos de Metaprompts

| Tipo | Propósito |
|------|-----------|
| **Gerador** | Criar prompt do zero a partir de descrição |
| **Otimizador** | Melhorar prompt existente |
| **Especializado** | Adaptar prompt para domínio específico |
| **Validador** | Verificar qualidade de prompt |

### Metaprompt Gerador Básico

```markdown
Você é um especialista em engenharia de prompt.

Sua tarefa é criar um prompt otimizado para a seguinte necessidade:

<necessidade>
[Descrição do que o usuário quer fazer]
</necessidade>

O prompt deve seguir o framework POEMA:
- P (Persona): defina quem o modelo deve ser
- O (Objetivo): especifique tarefa clara
- E (Estilo): determine tom e formato
- M (Modelo): inclua metodologia de raciocínio
- A (Adicionais): adicione guardrails necessários

Apresente o prompt completo, pronto para uso.
```

### Metaprompt Otimizador

```markdown
Você é um especialista em engenharia de prompt.

Analise o prompt abaixo e sugira melhorias:

<prompt_original>
[Prompt a ser otimizado]
</prompt_original>

Avalie e melhore considerando:
1. Clareza do objetivo
2. Especificidade das instruções
3. Estrutura e formatação
4. Guardrails e proteções
5. Potencial de ambiguidade

Apresente:
- Diagnóstico: pontos fracos identificados
- Prompt otimizado: versão melhorada
- Justificativa: por que cada mudança foi feita
```

---

## Exercício Prático

### Tarefa
Usar metaprompt para criar prompt de análise jurídica.

### Passo a Passo

**1. Definir necessidade:**
```
Preciso de um prompt para analisar petições iniciais
de ações de cobrança, identificando argumentos fracos
para preparar contestação.
```

**2. Usar metaprompt gerador:**

```markdown
Você é um especialista em engenharia de prompt jurídico.

Crie um prompt otimizado para a seguinte necessidade:

<necessidade>
Analisar petições iniciais de ações de cobrança,
identificando argumentos fracos para preparar contestação.
O prompt será usado por advogados de defesa.
</necessidade>

Requisitos:
- Framework POEMA completo
- Metodologia FIRAC
- Guardrails contra invenção de fatos
- Formato de saída em tópicos
- Foco em pontos vulneráveis da argumentação

Apresente o prompt pronto para uso.
```

**3. Executar e avaliar resultado:**

O metaprompt deve gerar algo como:

```markdown
# Prompt: Análise de Petição para Contestação

## Persona
Você é um advogado sênior especializado em defesa de
ações de cobrança, com 15 anos de experiência em
identificar vulnerabilidades argumentativas.

## Objetivo
Analise a petição inicial anexada e identifique os
pontos fracos da argumentação do autor, visando
preparação de contestação eficaz.

## Metodologia
Use FIRAC adaptado para análise crítica:
- **F:** Identifique fatos alegados (e lacunas)
- **I:** Formule questões jurídicas centrais
- **R:** Identifique regras invocadas (e omissões)
- **A:** Analise aplicação (inconsistências)
- **C:** Conclua sobre vulnerabilidades

## Formato de Saída
Para cada ponto fraco identificado, apresente:
| Argumento | Vulnerabilidade | Contra-argumento Sugerido |
|-----------|-----------------|---------------------------|
| [Arg 1]   | [Por que é fraco] | [Como atacar]           |

## Guardrails
**PROIBIDO:**
- Inventar fatos não presentes na petição
- Citar jurisprudência não verificada
- Fazer afirmações sem base no documento

**OBRIGATÓRIO:**
- Basear-se APENAS na petição fornecida
- Indicar quando informação for insuficiente
- Manter análise técnica e imparcial

---
<peticao>
[INSERIR PETIÇÃO INICIAL]
</peticao>
```

**4. Refinar se necessário:**
- Ajuste detalhes específicos
- Adicione contexto do seu escritório

### Checklist de Verificação

```
[ ] Defini necessidade claramente
[ ] Usei metaprompt apropriado
[ ] Avaliei prompt gerado
[ ] Refinei conforme necessário
```

---

## Dicas e Armadilhas

### Dica
> Quanto mais específica a necessidade informada ao metaprompt, melhor o prompt gerado. Inclua: público-alvo, contexto de uso, restrições específicas.

### Dica 2
> Use metaprompt otimizador para melhorar seus próprios prompts:
> ```
> Analise este prompt que criei e sugira melhorias:
> [seu prompt]
> ```

### Armadilha
> **"O metaprompt sempre gera prompt perfeito."**
>
> Não. O prompt gerado é ponto de partida.
> Sempre revise e adapte ao seu contexto específico.

### Armadilha 2
> **"Metaprompt é complicação desnecessária."**
>
> Para prompts simples, sim. Mas para prompts complexos
> ou recorrentes, metaprompts economizam tempo.

---

## Templates Prontos

### Metaprompt Gerador Jurídico
```markdown
Você é um especialista em engenharia de prompt jurídico.

Crie um prompt otimizado para:

<necessidade>
{{DESCREVA A NECESSIDADE}}
</necessidade>

<contexto>
- Área do direito: {{ÁREA}}
- Usuário: {{QUEM VAI USAR}}
- Propósito: {{PARA QUE}}
</contexto>

O prompt deve seguir POEMA:
- Persona jurídica apropriada
- Objetivo SMART
- Estilo adequado ao contexto
- Metodologia jurídica (FIRAC se aplicável)
- Guardrails contra alucinação

Apresente prompt completo e pronto para uso.
```

### Metaprompt Otimizador
```markdown
Analise e otimize este prompt:

<prompt_original>
{{PROMPT A OTIMIZAR}}
</prompt_original>

Avalie:
1. [ ] Objetivo claro?
2. [ ] Instruções específicas?
3. [ ] Formato definido?
4. [ ] Guardrails presentes?
5. [ ] Potencial de ambiguidade?

Apresente:
## Diagnóstico
[Pontos fracos]

## Prompt Otimizado
[Versão melhorada]

## Mudanças
[Justificativa de cada alteração]
```

### Metaprompt Validador
```markdown
Avalie a qualidade deste prompt de 0-10:

<prompt>
{{PROMPT A AVALIAR}}
</prompt>

Critérios:
| Critério | Nota | Justificativa |
|----------|------|---------------|
| Clareza do objetivo | /10 | |
| Especificidade | /10 | |
| Estrutura | /10 | |
| Guardrails | /10 | |
| Reutilização | /10 | |

**Nota Final:** /10
**Recomendação:** [Usar como está / Melhorar / Reescrever]
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: METAPROMPTS                                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  O QUE É:                                                   │
│  → Prompt que gera ou melhora outros prompts                │
│  → Meta-nível: instrução sobre instruções                   │
│                                                             │
│  TIPOS:                                                     │
│  → Gerador: cria prompt do zero                             │
│  → Otimizador: melhora prompt existente                     │
│  → Validador: avalia qualidade                              │
│                                                             │
│  QUANDO USAR:                                               │
│  → Prompts complexos ou recorrentes                         │
│  → Quando não sabe por onde começar                         │
│  → Para padronizar prompts de equipe                        │
│                                                             │
│  REGRA: Metaprompt gera ponto de partida,                   │
│         você refina para seu contexto.                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Com metaprompts dominados, o próximo passo é consolidar tudo em um checklist final de qualidade.

→ Próxima: **[2.12 Checklist Final](./aula-2.12.md)**
