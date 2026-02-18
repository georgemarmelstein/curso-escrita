# 3.8 Orquestradores

**Módulo:** 3 - Aplicações Avançadas
**Bloco:** Meta-Prompts e Automação
**Tempo estimado:** 40 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Criar fluxos multi-etapa com prompts encadeados
- Orquestrar análise → decisão → escrita
- Usar output de um prompt como input de outro
- Projetar workflows automatizados

---

## Por que Importa

**Para profissionais do Direito:**
- Processos completos exigem múltiplas etapas
- Análise → síntese → redação é fluxo comum
- Automação de fluxos aumenta produtividade

**Princípio:**
> Orquestrador é o maestro que coordena múltiplos prompts em sequência.

---

## Base Conceitual

### O que é um Orquestrador?

```
┌─────────────────────────────────────────────────────────────┐
│  ORQUESTRADOR DE PROMPTS                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  INPUT                                                      │
│    │                                                        │
│    ▼                                                        │
│  ┌─────────────────┐                                        │
│  │   ETAPA 1       │                                        │
│  │   Análise       │──────┐                                 │
│  └─────────────────┘      │                                 │
│                           ▼                                 │
│                    ┌─────────────────┐                      │
│                    │   ETAPA 2       │                      │
│                    │   Síntese       │──────┐               │
│                    └─────────────────┘      │               │
│                                             ▼               │
│                                      ┌─────────────────┐    │
│                                      │   ETAPA 3       │    │
│                                      │   Escrita       │    │
│                                      └─────────────────┘    │
│                                             │               │
│                                             ▼               │
│                                          OUTPUT             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Tipos de Fluxos

| Fluxo | Etapas | Uso |
|-------|--------|-----|
| **Análise → Escrita** | FIRAC → Sentença | Produção de decisão |
| **Pesquisa → Síntese → Aplicação** | Busca → Resumo → Parecer | Parecer fundamentado |
| **Multi-Perspectiva → Conclusão** | Autor → Réu → Juiz | Análise equilibrada |
| **Inventário → Análise → Relatório** | Provas → Pearl/Haack → Síntese | Análise probatória |

### Estrutura de Orquestrador

```markdown
# ORQUESTRADOR: [NOME DO FLUXO]

## VISÃO GERAL
Fluxo de [X] etapas para [objetivo]

## ETAPAS

### ETAPA 1: [NOME]
**Input:** [O que recebe]
**Processo:** [O que faz]
**Output:** [O que produz]
**Prompt:** [Referência ao prompt]

### ETAPA 2: [NOME]
**Input:** Output da Etapa 1
**Processo:** [O que faz]
**Output:** [O que produz]
**Prompt:** [Referência ao prompt]

### ETAPA 3: [NOME]
**Input:** Output da Etapa 2
**Processo:** [O que faz]
**Output:** [O que produz]
**Prompt:** [Referência ao prompt]

## CHECKPOINTS
- [ ] Após Etapa 1: validar análise
- [ ] Após Etapa 2: validar síntese
- [ ] Final: revisar output completo
```

---

## Exercício Prático

### Tarefa
Criar orquestrador para fluxo: Análise → Fundamentação → Sentença.

### Passo a Passo

**1. Definir o fluxo:**

```
PROCESSO → ETAPA 1 (Análise FIRAC)
                    ↓
           ETAPA 2 (Fundamentação)
                    ↓
           ETAPA 3 (Dispositivo)
                    ↓
              SENTENÇA COMPLETA
```

**2. Criar orquestrador:**

```markdown
# ORQUESTRADOR: SENTENÇA CÍVEL

## VISÃO GERAL
Fluxo de 3 etapas para produção de sentença cível completa.

## ETAPA 1: ANÁLISE FIRAC

### Prompt
```markdown
Você é um assessor de magistrado.

Analise o processo abaixo usando FIRAC:
- F: Resuma os fatos relevantes
- I: Identifique a questão jurídica central
- R: Liste a legislação e jurisprudência aplicáveis
- A: Aplique a regra aos fatos
- C: Indique conclusão preliminar

<processo>
{{AUTOS DO PROCESSO}}
</processo>

Formato: Markdown estruturado por seção FIRAC.
```

### Output esperado
Análise FIRAC completa em 2-3 páginas.

---

## ETAPA 2: FUNDAMENTAÇÃO

### Prompt
```markdown
Você é um magistrado redigindo fundamentação de sentença.

Com base na análise FIRAC abaixo, elabore a fundamentação:

<analise_firac>
{{OUTPUT DA ETAPA 1}}
</analise_firac>

Estrutura:
1. Relatório (resumo processual)
2. Fundamentação (análise de cada pedido)
3. Preparação para dispositivo

Tom: Formal, técnico, fundamentado.
Extensão: 3-5 páginas.
```

### Output esperado
Fundamentação completa de sentença.

---

## ETAPA 3: DISPOSITIVO

### Prompt
```markdown
Você é um magistrado finalizando sentença.

Com base na fundamentação abaixo, elabore o dispositivo:

<fundamentacao>
{{OUTPUT DA ETAPA 2}}
</fundamentacao>

Requisitos:
- Julgar cada pedido (procedente/improcedente)
- Definir valores quando aplicável
- Distribuir sucumbência
- Custas e honorários

Formato: Dispositivo formal de sentença cível.
```

### Output esperado
Dispositivo completo com todos os pedidos julgados.

---

## CHECKPOINTS

### Após Etapa 1 (Análise)
- [ ] FIRAC está completo?
- [ ] Todos os pedidos foram identificados?
- [ ] Conclusão preliminar está fundamentada?

### Após Etapa 2 (Fundamentação)
- [ ] Todos os pedidos foram analisados?
- [ ] Fundamentação está coerente com FIRAC?
- [ ] Jurisprudência está citada corretamente?

### Final
- [ ] Dispositivo corresponde à fundamentação?
- [ ] Todos os pedidos foram julgados?
- [ ] Sucumbência está definida?
```

**3. Executar o fluxo:**

```markdown
## EXECUÇÃO

### Rodada 1: FIRAC
[Executar Etapa 1 com os autos]
→ Validar no checkpoint
→ Ajustar se necessário

### Rodada 2: Fundamentação
[Executar Etapa 2 com output da Etapa 1]
→ Validar no checkpoint
→ Ajustar se necessário

### Rodada 3: Dispositivo
[Executar Etapa 3 com output da Etapa 2]
→ Validar no checkpoint
→ Consolidar sentença final
```

### Checklist de Verificação

```
[ ] Defini fluxo com etapas claras
[ ] Cada etapa tem input/output definido
[ ] Checkpoints permitem validação
[ ] Fluxo produz resultado completo
```

---

## Dicas e Armadilhas

### Dica
> Sempre valide nos checkpoints. É mais fácil corrigir uma etapa que refazer todo o fluxo.

### Dica 2
> Guarde outputs intermediários. Se precisar ajustar etapa 2, você tem a etapa 1 pronta.

### Armadilha
> **"Fluxo de muitas etapas é melhor."**
>
> Não necessariamente. Cada etapa adiciona latência
> e chance de erro. Use mínimo necessário.

### Armadilha 2
> **"Output de uma etapa vai direto para próxima."**
>
> Nem sempre. Às vezes é preciso editar/filtrar
> o output antes de usar como input.

---

## Orquestradores Prontos

### Orquestrador: Parecer Jurídico

```
ETAPA 1: Pesquisa (jurisprudência e doutrina)
    ↓
ETAPA 2: Análise (aplicação ao caso)
    ↓
ETAPA 3: Síntese (conclusão fundamentada)
    ↓
ETAPA 4: Redação (parecer formal)
```

### Orquestrador: Análise Probatória

```
ETAPA 1: Inventário (listar todas as provas)
    ↓
ETAPA 2: Pearl (análise causal)
    ↓
ETAPA 3: Haack (análise de coerência)
    ↓
ETAPA 4: Síntese (consolidação)
```

### Orquestrador: Contestação

```
ETAPA 1: Análise da Inicial (pontos fracos)
    ↓
ETAPA 2: Pesquisa (jurisprudência de defesa)
    ↓
ETAPA 3: Estratégia (teses defensivas)
    ↓
ETAPA 4: Redação (contestação completa)
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: ORQUESTRADORES                                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  CONCEITO:                                                  │
│  → Fluxo de múltiplos prompts encadeados                    │
│  → Output de um é input do próximo                          │
│  → Checkpoints para validação                               │
│                                                             │
│  ESTRUTURA:                                                 │
│  → Etapas: definir input/processo/output                    │
│  → Checkpoints: validar cada etapa                          │
│  → Consolidação: unir outputs finais                        │
│                                                             │
│  FLUXOS COMUNS:                                             │
│  → Análise → Síntese → Escrita                              │
│  → Pesquisa → Aplicação → Conclusão                         │
│  → Multi-perspectiva → Integração                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Orquestradores coordenam fluxos. Mas e quando você quer que o LLM escreva no seu estilo pessoal?

→ Próxima: **[3.9 Hackear Estilo](./aula-3.9.md)**
