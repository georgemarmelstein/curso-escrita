# 3.1 SUPER FIRAC

**Módulo:** 3 - Aplicações Avançadas
**Bloco:** Análise Profunda
**Tempo estimado:** 50 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Aplicar análise FIRAC em profundidade para processos complexos
- Estruturar análises exaustivas de 50+ páginas de documentos
- Decompor casos multi-pedidos em múltiplos FIRACs
- Integrar análise de provas ao framework

---

## Por que Importa

**Para profissionais do Direito:**
- Processos complexos exigem análise estruturada
- FIRAC básico não cobre todas as nuances
- SUPER FIRAC garante análise exaustiva e documentada

**Aplicação direta:**
- Análise de processos para sentença
- Preparação de recursos
- Pareceres complexos

---

## Base Conceitual

### Do FIRAC ao SUPER FIRAC

```
┌─────────────────────────────────────────────────────────────┐
│  EVOLUÇÃO: FIRAC → SUPER FIRAC                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  FIRAC BÁSICO:                                              │
│  F → I → R → A → C                                          │
│  (Uma passada, linear)                                      │
│                                                             │
│  SUPER FIRAC:                                               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ FASE 1: Mapeamento Completo                          │   │
│  │         Partes, pedidos, provas, cronologia          │   │
│  └───────────────────────┬─────────────────────────────┘   │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ FASE 2: FIRAC por Pedido                             │   │
│  │         Cada pedido = um FIRAC completo              │   │
│  └───────────────────────┬─────────────────────────────┘   │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ FASE 3: Análise Probatória                           │   │
│  │         Cada prova avaliada individualmente          │   │
│  └───────────────────────┬─────────────────────────────┘   │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐   │
│  │ FASE 4: Síntese e Conclusão                          │   │
│  │         Integração de todas as análises              │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Estrutura do SUPER FIRAC

```markdown
# SUPER FIRAC

## FASE 1: MAPEAMENTO PROCESSUAL

### 1.1 Partes
| Polo | Nome | Qualificação | Representante |
|------|------|--------------|---------------|

### 1.2 Cronologia Processual
| Data | Evento | Observação |
|------|--------|------------|

### 1.3 Pedidos do Autor
| # | Pedido | Valor | Fundamento Principal |
|---|--------|-------|---------------------|

### 1.4 Defesas do Réu
| # | Defesa | Tipo | Observação |
|---|--------|------|------------|

### 1.5 Provas Produzidas
| # | Prova | Tipo | Produzida por | Relevância |
|---|-------|------|---------------|------------|

---

## FASE 2: FIRAC POR PEDIDO

### Pedido 1: [Nome]

#### F - Fatos Específicos
[Fatos relacionados a este pedido]

#### I - Questão Jurídica
[Pergunta que precisa ser respondida]

#### R - Regra Aplicável
[Lei, jurisprudência, doutrina]

#### A - Aplicação
[Subsunção dos fatos à regra]

#### C - Conclusão
[Procedência/Improcedência fundamentada]

### Pedido 2: [Nome]
[Repetir estrutura FIRAC]

---

## FASE 3: ANÁLISE PROBATÓRIA

### Matriz de Provas

| Prova | Objeto | Força | Credibilidade | Conclusão |
|-------|--------|-------|---------------|-----------|

### Provas Conflitantes
[Análise de contradições]

### Lacunas Probatórias
[O que falta para decisão completa]

---

## FASE 4: SÍNTESE

### Conclusão Geral
[Integração de todas as análises]

### Tabela de Resultados
| Pedido | Análise | Conclusão |
|--------|---------|-----------|

### Dispositivo Sugerido
[Modelo de dispositivo para sentença]
```

---

## Exercício Prático

### Tarefa
Aplicar SUPER FIRAC em processo complexo com múltiplos pedidos.

### Caso (Simulado)
```
PROCESSO: Ação de Indenização por Danos Morais e Materiais

PARTES:
- Autor: Maria Silva, consumidora
- Réu: Banco XYZ S.A.

FATOS ALEGADOS:
1. Autora teve nome negativado indevidamente
2. Negativação por dívida já paga há 6 meses
3. Foi impedida de fazer financiamento de veículo
4. Sofreu constrangimento em loja
5. Desenvolveu ansiedade (laudo médico anexo)

PEDIDOS:
1. Declaração de inexistência de débito
2. Cancelamento da negativação
3. Danos morais: R$ 30.000,00
4. Danos materiais: R$ 5.000,00 (tratamento psicológico)

DEFESA DO BANCO:
1. Negativação foi regular à época
2. Baixa já foi providenciada
3. Não há prova de dano moral
4. Tratamento psicológico não tem nexo causal

PROVAS:
- Comprovante de pagamento da dívida (doc. 3)
- Extrato SPC/Serasa (doc. 4)
- Laudo médico particular (doc. 7)
- Prints de negativa de crédito (doc. 8)
- Testemunha: amiga que presenciou constrangimento
```

### Passo a Passo

**Prompt SUPER FIRAC:**

```markdown
# ANÁLISE SUPER FIRAC

## PERSONA
Você é um assessor de magistrado em vara cível, especializado
em análise exaustiva de processos de consumidor.

## TAREFA
Realize análise SUPER FIRAC completa do processo abaixo,
seguindo as 4 fases obrigatórias.

## REGRAS
- Analise CADA pedido separadamente com FIRAC próprio
- Avalie CADA prova individualmente
- Identifique contradições e lacunas
- Conclua com dispositivo sugerido

## METODOLOGIA

### FASE 1: MAPEAMENTO
- Liste partes, cronologia, pedidos, defesas e provas

### FASE 2: FIRAC POR PEDIDO
Para CADA pedido, faça:
- F: Fatos específicos deste pedido
- I: Questão jurídica a resolver
- R: Regra aplicável (CDC, CC, jurisprudência)
- A: Aplicação da regra aos fatos
- C: Conclusão fundamentada

### FASE 3: ANÁLISE PROBATÓRIA
- Matriz de provas com força e credibilidade
- Identificação de provas conflitantes
- Lacunas que afetam a decisão

### FASE 4: SÍNTESE
- Tabela de resultados por pedido
- Dispositivo sugerido completo

---

<processo>
[INSERIR DADOS DO CASO]
</processo>
```

### Resultado Esperado (Parcial)

```markdown
## FASE 2: FIRAC POR PEDIDO

### Pedido 1: Declaração de Inexistência de Débito

#### F - Fatos
- Autora pagou dívida em [data] (doc. 3)
- Negativação ocorreu em [data], após pagamento
- Réu confirma que baixa foi providenciada

#### I - Questão Jurídica
O débito existia no momento da negativação?

#### R - Regra
- CDC, art. 43, §3º: comunicação prévia obrigatória
- Súmula 385/STJ: dano moral por negativação indevida

#### A - Aplicação
O comprovante de pagamento (doc. 3) demonstra quitação
anterior à negativação. Banco não impugnou autenticidade.
A negativação foi, portanto, indevida desde a origem.

#### C - Conclusão
PROCEDENTE. Débito era inexistente quando da negativação.
```

---

## Dicas e Armadilhas

### Dica
> Comece pelo mapeamento completo (Fase 1) ANTES de analisar mérito. Isso evita que você "pule" elementos importantes do processo.

### Dica 2
> Para processos muito grandes, peça ao LLM que faça cada fase separadamente, depois consolide.

### Armadilha
> **"Analisar todos os pedidos juntos."**
>
> Cada pedido pode ter fundamentação e provas diferentes.
> FIRAC separado para cada um garante análise completa.

### Armadilha 2
> **"Ignorar contradições probatórias."**
>
> A Fase 3 existe para isso. Contradições são
> fundamentais para a decisão e devem ser explicitadas.

---

## Template Completo

```markdown
---
nome: "SUPER FIRAC - Análise Exaustiva"
versao: "2.0"
tipo: "analise"
---

# SUPER FIRAC

## REGRAS FUNDAMENTAIS
- Analise CADA pedido com FIRAC próprio
- Avalie CADA prova individualmente
- NUNCA invente fatos ou provas
- Se informação faltar, indique expressamente

---

## FASE 1: MAPEAMENTO PROCESSUAL

### 1.1 Identificação
| Campo | Valor |
|-------|-------|
| Processo | |
| Classe | |
| Vara | |
| Autor | |
| Réu | |
| Valor da Causa | |

### 1.2 Pedidos
| # | Pedido | Valor | Status |
|---|--------|-------|--------|

### 1.3 Provas
| # | Prova | Tipo | Página |
|---|-------|------|--------|

---

## FASE 2: FIRAC POR PEDIDO

[Repetir para cada pedido]

---

## FASE 3: ANÁLISE PROBATÓRIA

### Matriz
| Prova | Força (1-10) | Credibilidade | Conclusão |
|-------|--------------|---------------|-----------|

---

## FASE 4: SÍNTESE

### Resultados
| Pedido | Conclusão | Valor |
|--------|-----------|-------|

### Dispositivo Sugerido
[Texto do dispositivo]

---

<autos>
[INSERIR PROCESSO]
</autos>
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: SUPER FIRAC                                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  4 FASES:                                                   │
│  1. Mapeamento: partes, pedidos, provas                     │
│  2. FIRAC por Pedido: análise individual                    │
│  3. Análise Probatória: matriz de provas                    │
│  4. Síntese: integração e dispositivo                       │
│                                                             │
│  DIFERENÇA DO FIRAC BÁSICO:                                 │
│  → Múltiplos FIRACs (um por pedido)                         │
│  → Análise probatória detalhada                             │
│  → Mapeamento completo antes de analisar                    │
│  → Síntese integradora                                      │
│                                                             │
│  APLICAÇÃO:                                                 │
│  → Processos com múltiplos pedidos                          │
│  → Análise para sentença                                    │
│  → Pareceres complexos                                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

SUPER FIRAC analisa cada pedido. Mas e quando o mesmo fato precisa ser visto de múltiplos ângulos?

→ Próxima: **[3.2 Análise Multicamadas](./aula-3.2.md)**
