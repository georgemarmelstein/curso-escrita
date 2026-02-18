# 3.3 Crítica Sistemática

**Módulo:** 3 - Aplicações Avançadas
**Bloco:** Análise Profunda
**Tempo estimado:** 35 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Aplicar técnica de "Crítica Matadora" para identificar falhas
- Encontrar pontos fracos em argumentações jurídicas
- Testar robustez de teses e decisões
- Usar LLM como "advogado do diabo"

---

## Por que Importa

**Para profissionais do Direito:**
- Encontrar falhas antes do adversário
- Testar robustez de petições antes de protocolar
- Identificar vícios em sentenças (embargos)
- Antecipar recursos e contra-argumentos

**Princípio:**
> Se você não encontrar as falhas do seu argumento, seu adversário encontrará.

---

## Base Conceitual

### O que é Crítica Sistemática?

```
┌─────────────────────────────────────────────────────────────┐
│  CRÍTICA SISTEMÁTICA                                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  OBJETIVO:                                                  │
│  Encontrar TODAS as falhas possíveis em um argumento        │
│  ou decisão, antes que o adversário encontre.               │
│                                                             │
│  METODOLOGIA:                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 1. FALHAS LÓGICAS                                    │   │
│  │    Non sequitur, petição de princípio, etc.          │   │
│  └─────────────────────────────────────────────────────┘   │
│                          │                                  │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 2. FALHAS FACTUAIS                                   │   │
│  │    Fatos não provados, contradições, lacunas         │   │
│  └─────────────────────────────────────────────────────┘   │
│                          │                                  │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 3. FALHAS JURÍDICAS                                  │   │
│  │    Lei mal aplicada, jurisprudência contrária        │   │
│  └─────────────────────────────────────────────────────┘   │
│                          │                                  │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ 4. FALHAS PROCESSUAIS                                │   │
│  │    Vícios formais, preclusões, nulidades             │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Checklist de Falhas

```markdown
## FALHAS LÓGICAS
- [ ] Conclusão não decorre das premissas (non sequitur)
- [ ] Premissa assume o que quer provar (petição de princípio)
- [ ] Generalização indevida de caso específico
- [ ] Falsa dicotomia (ignora outras opções)
- [ ] Apelo à autoridade sem fundamento
- [ ] Argumentação circular

## FALHAS FACTUAIS
- [ ] Fato alegado sem prova
- [ ] Contradição entre fatos alegados
- [ ] Lacuna factual relevante
- [ ] Fato controvertido tratado como incontroverso
- [ ] Interpretação tendenciosa de documento

## FALHAS JURÍDICAS
- [ ] Lei citada revogada ou inaplicável
- [ ] Jurisprudência superada ou de contexto diferente
- [ ] Omissão de norma relevante
- [ ] Interpretação forçada de dispositivo
- [ ] Tese contrária à jurisprudência dominante

## FALHAS PROCESSUAIS
- [ ] Pedido sem causa de pedir
- [ ] Causa de pedir sem pedido correspondente
- [ ] Preclusão ignorada
- [ ] Matéria preclusa reexaminada
- [ ] Vício de fundamentação (art. 489, CPC)
```

### Níveis de Gravidade

| Nível | Descrição | Consequência |
|-------|-----------|--------------|
| **Crítico** | Invalida todo o argumento | Reforma/anulação |
| **Alto** | Enfraquece substancialmente | Provimento parcial |
| **Médio** | Ponto de ataque | Contra-argumento eficaz |
| **Baixo** | Imperfeição menor | Ajuste possível |

---

## Exercício Prático

### Tarefa
Usar "Crítica Matadora" em sentença simulada.

### Sentença para Criticar
```
SENTENÇA

Vistos.

MARIA DA SILVA ajuizou ação de indenização contra LOJA XYZ.

Alega que adquiriu produto com defeito e sofreu danos morais
pelo transtorno de ter que retornar à loja.

A ré contestou alegando que ofereceu troca imediata.

É o relatório. DECIDO.

O CDC protege o consumidor contra produtos defeituosos.

A autora comprovou a aquisição do produto (nota fiscal).

O defeito é incontroverso, pois a ré ofereceu troca.

O mero dissabor não configura dano moral.

Todavia, o transtorno de retornar à loja ultrapassa o
mero aborrecimento, configurando dano moral in re ipsa.

DISPOSITIVO: Julgo PROCEDENTE para condenar a ré ao
pagamento de R$ 5.000,00 a título de danos morais.
```

### Passo a Passo

**Prompt Crítica Matadora:**

```markdown
# CRÍTICA MATADORA

## Persona
Você é um especialista em identificar falhas em decisões
judiciais, com experiência em recursos e embargos.
Seu objetivo é encontrar TODAS as vulnerabilidades.

## Tarefa
Analise a sentença abaixo e identifique TODAS as falhas
possíveis, classificadas por tipo e gravidade.

## Metodologia

### ETAPA 1: FALHAS LÓGICAS
Identifique problemas de raciocínio:
- A conclusão decorre das premissas?
- Há saltos lógicos?
- Há contradições internas?

### ETAPA 2: FALHAS FACTUAIS
Identifique problemas com fatos:
- Fatos alegados sem prova?
- Fatos contraditórios?
- Lacunas relevantes?

### ETAPA 3: FALHAS JURÍDICAS
Identifique problemas de direito:
- Norma mal aplicada?
- Jurisprudência contrária?
- Omissão de fundamento?

### ETAPA 4: FALHAS PROCESSUAIS
Identifique vícios formais:
- Fundamentação adequada (art. 489)?
- Correlação pedido/decisão?
- Análise de todas as questões?

## Formato de Saída

| # | Falha | Tipo | Gravidade | Trecho | Fundamento |
|---|-------|------|-----------|--------|------------|

## Conclusão
- Total de falhas encontradas
- Vulnerabilidade a recurso (1-10)
- Falhas que justificam reforma

---

<sentenca>
[INSERIR SENTENÇA]
</sentenca>
```

### Resultado Esperado

```markdown
## FALHAS IDENTIFICADAS

| # | Falha | Tipo | Gravidade | Trecho | Fundamento |
|---|-------|------|-----------|--------|------------|
| 1 | Contradição lógica | Lógica | Alto | "mero dissabor não configura" vs "ultrapassa mero aborrecimento" | Premissas contraditórias sobre mesmo fato |
| 2 | Dano moral in re ipsa sem fundamentação | Jurídica | Crítico | "configura dano moral in re ipsa" | Não explica por que se aplica a presunção |
| 3 | Ausência de critérios para quantum | Jurídica | Alto | "R$ 5.000,00" | Não fundamenta o valor arbitrado |
| 4 | Omissão sobre oferta de troca | Factual | Médio | - | Não analisa se troca oferecida excluiria dano |
| 5 | Violação art. 489 CPC | Processual | Crítico | Fundamentação | Decisão não enfrenta argumento da defesa |

## CONCLUSÃO

- **Total:** 5 falhas identificadas
- **Vulnerabilidade a recurso:** 8/10
- **Falhas que justificam reforma:**
  1. Contradição lógica (inconsistência interna)
  2. Falta de fundamentação do quantum
  3. Omissão de análise de argumento da defesa
```

---

## Dicas e Armadilhas

### Dica
> Use Crítica Matadora em seus PRÓPRIOS textos antes de protocolar. É mais fácil corrigir antes do que explicar depois.

### Dica 2
> Peça crítica "impiedosa" — quanto mais dura a crítica, mais você aprende. Peça ao LLM para "não poupar" a peça analisada.

### Armadilha
> **"Crítica é só para textos dos outros."**
>
> A crítica mais valiosa é nos seus próprios textos.
> Encontre suas falhas antes que o adversário encontre.

### Armadilha 2
> **"Toda falha tem o mesmo peso."**
>
> Não! Falhas críticas invalidam. Falhas menores
> são ajustáveis. Classifique por gravidade.

---

## Template Completo

```markdown
---
nome: "Crítica Matadora"
versao: "1.0"
tipo: "analise"
---

# CRÍTICA MATADORA

## REGRAS
- Seja IMPLACÁVEL na identificação de falhas
- Classifique por tipo E gravidade
- Indique trecho específico de cada falha
- Fundamente por que é falha

---

## ANÁLISE

### 1. FALHAS LÓGICAS
| # | Falha | Gravidade | Trecho | Explicação |
|---|-------|-----------|--------|------------|

### 2. FALHAS FACTUAIS
| # | Falha | Gravidade | Trecho | Explicação |
|---|-------|-----------|--------|------------|

### 3. FALHAS JURÍDICAS
| # | Falha | Gravidade | Trecho | Explicação |
|---|-------|-----------|--------|------------|

### 4. FALHAS PROCESSUAIS
| # | Falha | Gravidade | Trecho | Explicação |
|---|-------|-----------|--------|------------|

---

## SÍNTESE

| Métrica | Valor |
|---------|-------|
| Total de Falhas | |
| Falhas Críticas | |
| Vulnerabilidade (1-10) | |

### Recomendação
[ ] Manter como está
[ ] Ajustes menores
[ ] Revisão substancial
[ ] Reescrever

---

<texto>
[INSERIR TEXTO PARA CRÍTICA]
</texto>
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: CRÍTICA SISTEMÁTICA                               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  4 TIPOS DE FALHAS:                                         │
│  1. Lógicas: non sequitur, contradição, falácias            │
│  2. Factuais: sem prova, contradição, lacuna                │
│  3. Jurídicas: lei errada, jurisprudência contrária         │
│  4. Processuais: vícios formais, art. 489                   │
│                                                             │
│  GRAVIDADE:                                                 │
│  → Crítico: invalida argumento                              │
│  → Alto: enfraquece substancialmente                        │
│  → Médio: ponto de ataque                                   │
│  → Baixo: imperfeição menor                                 │
│                                                             │
│  APLICAÇÃO:                                                 │
│  → Revisar próprias peças antes de protocolar               │
│  → Identificar falhas em decisões para recurso              │
│  → Antecipar contra-argumentos                              │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Crítica Sistemática encontra falhas argumentativas. Mas como analisar provas de forma científica?

→ Próxima: **[3.4 Inferência Causal (Pearl)](./aula-3.4.md)**
