# 3.7 Meta-Prompts Avançados

**Módulo:** 3 - Aplicações Avançadas
**Bloco:** Meta-Prompts e Automação
**Tempo estimado:** 35 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Criar meta-prompts especializados por tipo de tarefa
- Usar meta-análise para gerar prompts otimizados
- Automatizar criação de prompts complexos
- Construir biblioteca de meta-prompts reutilizáveis

---

## Por que Importa

**Para profissionais do Direito:**
- Meta-prompts economizam tempo na criação de prompts
- Padronização de qualidade em equipes
- Escalabilidade na produção de documentos

**Princípio:**
> Meta-prompt é o prompt que cria prompts. É automação de engenharia de prompt.

---

## Base Conceitual

### Arquitetura de Meta-Prompts

```
┌─────────────────────────────────────────────────────────────┐
│  HIERARQUIA DE META-PROMPTS                                 │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  NÍVEL 3: META-META-PROMPT                                  │
│           Cria meta-prompts                                 │
│                    │                                        │
│                    ▼                                        │
│  NÍVEL 2: META-PROMPT                                       │
│           Cria prompts específicos                          │
│                    │                                        │
│                    ▼                                        │
│  NÍVEL 1: PROMPT                                            │
│           Executa tarefa                                    │
│                    │                                        │
│                    ▼                                        │
│  NÍVEL 0: RESULTADO                                         │
│           Output final                                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Tipos de Meta-Prompts por Função

| Tipo | Propósito | Input | Output |
|------|-----------|-------|--------|
| **Meta-Análise** | Gerar prompts de análise | Descrição do caso | Prompt FIRAC completo |
| **Meta-Escrita** | Gerar prompts de redação | Tipo de documento | Prompt de escrita estruturado |
| **Meta-Pesquisa** | Gerar prompts de pesquisa | Tema jurídico | Prompt com termos de busca |
| **Meta-Criação** | Gerar prompts criativos | Necessidade | Prompt de brainstorming |

### Estrutura de Meta-Prompt Robusto

```markdown
# META-PROMPT: [TIPO]

## CONTEXTO DO META-PROMPT
Este meta-prompt gera prompts de [tipo] otimizados
seguindo o framework POEMA.

## INPUT ESPERADO
<necessidade>
[Descrição do que o usuário precisa]
</necessidade>

## PROCESSO DE GERAÇÃO
1. Analisar necessidade
2. Identificar tipo de prompt adequado
3. Definir componentes POEMA
4. Gerar prompt completo
5. Validar contra checklist

## OUTPUT GERADO
Prompt completo e pronto para uso, contendo:
- Frontmatter YAML
- Todos os componentes POEMA
- Guardrails adequados
- Área de input do usuário

## CHECKLIST DE QUALIDADE
- [ ] Objetivo claro e específico
- [ ] Formato de saída definido
- [ ] Guardrails presentes
- [ ] Prompt testável isoladamente
```

---

## Exercício Prático

### Tarefa
Criar e usar meta-prompt de análise jurídica.

### Passo a Passo

**1. Meta-Prompt de Análise:**

```markdown
# META-PROMPT: ANÁLISE JURÍDICA

## Você é um especialista em engenharia de prompt jurídico.

Sua tarefa é criar um prompt de análise otimizado
a partir da necessidade descrita abaixo.

## NECESSIDADE DO USUÁRIO
<necessidade>
{{DESCREVA O QUE PRECISA ANALISAR}}
</necessidade>

## PROCESSO

### 1. Identifique:
- Tipo de documento a analisar
- Área do direito envolvida
- Perspectiva desejada (autor/réu/juiz)
- Extrações específicas necessárias

### 2. Defina POEMA:
- **P (Persona):** Quem deve analisar (especialização)
- **O (Objetivo):** O que extrair/identificar
- **E (Estilo):** Tom técnico, imparcial ou parcial
- **M (Modelo):** Metodologia (FIRAC, multicamadas, crítica)
- **A (Adicionais):** Guardrails necessários

### 3. Gere prompt completo com:
```yaml
---
nome: "[Nome descritivo]"
versao: "1.0"
tipo: "analise"
area: "[Área do direito]"
---
```

### 4. Valide:
- [ ] Objetivo específico e mensurável
- [ ] Formato de saída definido
- [ ] Guardrails contra invenção
- [ ] Área para documento

## OUTPUT
Gere o prompt completo, pronto para uso imediato.
```

**2. Usar o meta-prompt:**

```markdown
<necessidade>
Preciso analisar uma sentença trabalhista para identificar
vícios que justifiquem embargos de declaração. A sentença
tem 15 páginas e envolve verbas rescisórias.
</necessidade>
```

**3. Resultado esperado (prompt gerado):**

```markdown
---
nome: "Análise de Embargabilidade - Trabalhista"
versao: "1.0"
tipo: "analise"
area: "direito trabalhista"
---

# Análise de Vícios Embargáveis

## REGRAS FUNDAMENTAIS
**PROIBIDO:** Inventar vícios não presentes
**OBRIGATÓRIO:** Citar trecho específico de cada vício

## PERSONA
Você é um advogado trabalhista especializado em recursos,
com experiência em identificar vícios em sentenças.

## TAREFA
Analise a sentença anexada identificando vícios que
justifiquem embargos de declaração:

### Vícios a Identificar
1. **Omissão:** Pedido não analisado ou argumento ignorado
2. **Contradição:** Fundamentação x dispositivo
3. **Obscuridade:** Trecho confuso ou ambíguo
4. **Erro material:** Cálculo errado, nome incorreto

### Para cada vício:
| Vício | Tipo | Trecho | Fundamentação |
|-------|------|--------|---------------|

## GUARDRAILS
- Baseie-se APENAS na sentença fornecida
- Cada vício deve ter trecho específico citado
- Se não houver vícios, diga explicitamente

---

<sentenca>
[INSERIR SENTENÇA AQUI]
</sentenca>
```

### Checklist de Verificação

```
[ ] Criei meta-prompt completo
[ ] Testei com necessidade real
[ ] Prompt gerado está funcional
[ ] Guardrails estão adequados
```

---

## Biblioteca de Meta-Prompts

### Meta-Prompt: Pesquisa Jurisprudencial

```markdown
# META-PROMPT: PESQUISA JURISPRUDENCIAL

Crie prompt de pesquisa para:
<tema>
{{TEMA A PESQUISAR}}
</tema>

O prompt deve:
1. Definir termos de busca otimizados
2. Especificar tribunais prioritários
3. Definir período temporal
4. Estruturar síntese de resultados

Gere prompt completo para pesquisa com busca web.
```

### Meta-Prompt: Redação de Peça

```markdown
# META-PROMPT: REDAÇÃO DE PEÇA PROCESSUAL

Crie prompt de redação para:
<peca>
{{TIPO DE PEÇA}}
</peca>

<dados>
{{DADOS DO CASO}}
</dados>

O prompt deve:
1. Definir estrutura da peça
2. Especificar tom e registro
3. Incluir modelo/template
4. Adicionar checklist de requisitos legais

Gere prompt completo para redação.
```

### Meta-Prompt: Brainstorming Jurídico

```markdown
# META-PROMPT: BRAINSTORMING DE TESES

Crie prompt de brainstorming para:
<situacao>
{{DESCRIÇÃO DO CASO}}
</situacao>

<objetivo>
{{O QUE QUER ALCANÇAR}}
</objetivo>

O prompt deve:
1. Gerar múltiplas teses/abordagens
2. Incluir perspectiva contrária
3. Avaliar viabilidade de cada tese
4. Sugerir priorização

Gere prompt completo para brainstorming.
```

---

## Dicas e Armadilhas

### Dica
> Mantenha biblioteca de meta-prompts organizados por tipo. Quando precisar de novo prompt, use o meta-prompt adequado em vez de criar do zero.

### Dica 2
> Itere sobre meta-prompts: se o prompt gerado não ficou bom, melhore o meta-prompt. É mais eficiente que melhorar cada prompt individual.

### Armadilha
> **"Meta-prompt gera prompt perfeito sempre."**
>
> Não. Meta-prompt gera ponto de partida bom.
> Ainda é necessário ajustar para contexto específico.

### Armadilha 2
> **"Meta-prompt é complicação."**
>
> Para prompts únicos, sim. Para prompts recorrentes,
> meta-prompt economiza muito tempo.

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: META-PROMPTS AVANÇADOS                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HIERARQUIA:                                                │
│  → Meta-prompt cria prompt                                  │
│  → Prompt executa tarefa                                    │
│  → Resultado é o output final                               │
│                                                             │
│  TIPOS PRINCIPAIS:                                          │
│  → Meta-análise: gera prompts de análise                    │
│  → Meta-escrita: gera prompts de redação                    │
│  → Meta-pesquisa: gera prompts de pesquisa                  │
│  → Meta-criação: gera prompts criativos                     │
│                                                             │
│  BENEFÍCIOS:                                                │
│  → Padronização de qualidade                                │
│  → Economia de tempo                                        │
│  → Escalabilidade                                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Meta-prompts geram prompts individuais. E quando você precisa de fluxos com múltiplos prompts encadeados?

→ Próxima: **[3.8 Orquestradores](./aula-3.8.md)**
