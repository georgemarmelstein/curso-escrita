# 3.2 Análise Multicamadas

**Módulo:** 3 - Aplicações Avançadas
**Bloco:** Análise Profunda
**Tempo estimado:** 40 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Analisar o mesmo caso de múltiplas perspectivas
- Usar técnica de "múltiplas lentes" para análise completa
- Identificar pontos cegos em análises unidimensionais
- Integrar diferentes perspectivas em conclusão robusta

---

## Por que Importa

**Para profissionais do Direito:**
- Juiz precisa considerar ambas as partes
- Advogado precisa antecipar argumentos contrários
- Parecer técnico exige visão 360°

**Princípio:**
> Uma análise de um único ângulo tem pontos cegos. Múltiplas perspectivas revelam a verdade completa.

---

## Base Conceitual

### O que é Análise Multicamadas?

```
┌─────────────────────────────────────────────────────────────┐
│  ANÁLISE MULTICAMADAS                                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│           ┌─────────────────┐                               │
│           │     CASO        │                               │
│           │                 │                               │
│           └─────────────────┘                               │
│                   │                                         │
│     ┌─────────────┼─────────────┐                           │
│     │             │             │                           │
│     ▼             ▼             ▼                           │
│  ┌──────┐    ┌──────┐    ┌──────┐                          │
│  │LENTE │    │LENTE │    │LENTE │                          │
│  │  A   │    │  B   │    │  C   │                          │
│  │(Autor)│    │(Réu) │    │(Juiz)│                          │
│  └──┬───┘    └──┬───┘    └──┬───┘                          │
│     │           │           │                               │
│     └─────────────┼─────────────┘                           │
│                   │                                         │
│                   ▼                                         │
│           ┌─────────────────┐                               │
│           │   SÍNTESE       │                               │
│           │  INTEGRADORA    │                               │
│           └─────────────────┘                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Tipos de Lentes

| Lente | Perspectiva | Pergunta-chave |
|-------|-------------|----------------|
| **Autor** | Favorável ao requerente | "Por que autor deve ganhar?" |
| **Réu** | Favorável ao demandado | "Por que réu deve ganhar?" |
| **Juiz** | Imparcial | "Qual a decisão mais justa?" |
| **Perito** | Técnica | "O que os fatos técnicos dizem?" |
| **Sociedade** | Interesse público | "Qual o impacto social?" |

### Metodologia das 3 Lentes

```
LENTE 1: ANÁLISE PRÓ-AUTOR
├── Melhores argumentos do autor
├── Provas que favorecem o autor
├── Jurisprudência favorável ao autor
└── Conclusão parcial (se fosse advogado do autor)

LENTE 2: ANÁLISE PRÓ-RÉU
├── Melhores argumentos do réu
├── Provas que favorecem o réu
├── Jurisprudência favorável ao réu
└── Conclusão parcial (se fosse advogado do réu)

LENTE 3: ANÁLISE NEUTRA (JUIZ)
├── Ponderação dos argumentos
├── Avaliação das provas
├── Pontos de convergência e divergência
└── Conclusão fundamentada e imparcial

SÍNTESE: INTEGRAÇÃO
├── Tabela comparativa das 3 lentes
├── Pontos pacíficos vs controvertidos
├── Conclusão final
└── Nível de certeza da decisão
```

---

## Exercício Prático

### Tarefa
Analisar caso de 3 ângulos diferentes.

### Caso
```
DISPUTA CONTRATUAL

FATOS:
- Empresa A contratou consultoria de Empresa B
- Contrato: R$ 100.000 por projeto de 6 meses
- Após 3 meses, A rescindiu alegando descumprimento
- B já havia executado 60% do projeto
- B cobra R$ 60.000 (proporcional ao executado)
- A alega que os 60% têm defeitos e exige devolução de R$ 50.000 já pagos

CONTRATO:
- Cláusula 5: Rescisão por descumprimento exige notificação prévia de 30 dias
- Cláusula 8: Pagamento proporcional ao executado em caso de rescisão
- Cláusula 12: Defeitos devem ser reportados em 15 dias

PROVAS:
- E-mails de reclamação (enviados no dia da rescisão)
- Relatório de entrega de B mostrando 60% concluído
- Parecer técnico (de A) apontando defeitos
- Notificação de rescisão (sem prazo prévio)
```

### Passo a Passo

**Prompt Multicamadas:**

```markdown
# ANÁLISE MULTICAMADAS

## Persona
Você é um analista jurídico que domina a técnica de
análise multicamadas, capaz de ver o mesmo caso de
múltiplas perspectivas.

## Tarefa
Analise o caso abaixo de 3 perspectivas diferentes,
depois integre em síntese conclusiva.

## LENTE 1: ANÁLISE PRÓ-EMPRESA A (Contratante)

Assuma a posição de advogado da Empresa A.
Apresente:
1. Melhores argumentos para A
2. Interpretação das provas favorável a A
3. Por que A deve receber os R$ 50.000 de volta
4. Contra-argumentos às alegações de B

## LENTE 2: ANÁLISE PRÓ-EMPRESA B (Consultoria)

Assuma a posição de advogado da Empresa B.
Apresente:
1. Melhores argumentos para B
2. Interpretação das provas favorável a B
3. Por que B deve receber os R$ 60.000
4. Contra-argumentos às alegações de A

## LENTE 3: ANÁLISE NEUTRA (Juiz)

Assuma posição de magistrado imparcial.
Apresente:
1. Ponderação dos argumentos de ambos
2. Avaliação objetiva das provas
3. Pontos pacíficos vs controvertidos
4. Decisão fundamentada

## SÍNTESE INTEGRADORA

| Aspecto | Lente A | Lente B | Juiz |
|---------|---------|---------|------|
| Rescisão | | | |
| Provas | | | |
| Conclusão | | | |

Conclusão final com nível de certeza (1-10).

---

<caso>
[INSERIR CASO]
</caso>
```

### Resultado Esperado (Parcial)

```markdown
## LENTE 1: PRÓ-EMPRESA A

### Argumentos
1. **Descumprimento contratual:** B entregou trabalho com defeitos
2. **Defeitos documentados:** Parecer técnico comprova problemas
3. **Rescisão justificada:** Art. 475 do CC - inadimplemento permite resolução

### Interpretação das Provas
- E-mails de reclamação: demonstram insatisfação desde o início
- Parecer técnico: prova objetiva dos defeitos
- Relatório de 60%: quantidade não implica qualidade

### Conclusão Parcial
A tem direito à devolução dos R$ 50.000 e não deve pagar valores adicionais.

---

## LENTE 2: PRÓ-EMPRESA B

### Argumentos
1. **Notificação irregular:** Cláusula 5 exigia 30 dias de prazo
2. **Defeitos não reportados:** Cláusula 12 exigia report em 15 dias
3. **Trabalho executado:** 60% do projeto foi entregue

### Interpretação das Provas
- E-mails de reclamação: enviados tardiamente, no dia da rescisão
- Parecer técnico: unilateral, produzido após rescisão
- Notificação: não cumpriu prazo contratual

### Conclusão Parcial
B tem direito aos R$ 60.000 proporcionais mais perdas e danos pela rescisão irregular.

---

## LENTE 3: JUIZ

### Ponderação
| Ponto | Peso A | Peso B | Avaliação |
|-------|--------|--------|-----------|
| Defeitos | Alegados | Não reportados a tempo | Ônus de A comprovar |
| Notificação | Irregular | Irregular | Favorece B |
| Execução | Qualidade? | 60% concluído | Periciável |

### Conclusão
Rescisão irregular por A (sem prazo). B tem direito ao proporcional.
Defeitos exigem perícia para compensação. Decisão parcialmente procedente
para ambos.

**Nível de Certeza:** 7/10 (seria 9/10 com perícia técnica)
```

---

## Dicas e Armadilhas

### Dica
> Force-se a encontrar argumentos fortes para AMBOS os lados, mesmo quando um lado pareça claramente errado. Isso revela nuances que uma análise superficial perderia.

### Dica 2
> A síntese integradora é onde você mostra valor. Não basta listar perspectivas — é preciso integrá-las em conclusão coerente.

### Armadilha
> **"Uma lente é claramente correta."**
>
> Se você não consegue argumentar para um lado,
> provavelmente está com viés. Tente novamente.

### Armadilha 2
> **"A síntese é apenas resumo das lentes."**
>
> Não! A síntese deve ponderar, não apenas resumir.
> Deve haver julgamento sobre qual perspectiva prevalece.

---

## Template Completo

```markdown
---
nome: "Análise Multicamadas"
versao: "1.0"
tipo: "analise"
---

# ANÁLISE MULTICAMADAS

## REGRAS
- Analise de CADA perspectiva com máxima força argumentativa
- Encontre os MELHORES argumentos para cada lado
- A síntese deve PONDERAR, não apenas resumir
- Indique nível de certeza da conclusão

---

## LENTE 1: [PERSPECTIVA A]

### Argumentos Principais
1. [Argumento mais forte]
2. [Segundo argumento]
3. [Terceiro argumento]

### Provas Favoráveis
- [Prova 1]: [Por que favorece]
- [Prova 2]: [Por que favorece]

### Conclusão Parcial
[Se fosse advogado desta parte]

---

## LENTE 2: [PERSPECTIVA B]

### Argumentos Principais
1. [Argumento mais forte]
2. [Segundo argumento]
3. [Terceiro argumento]

### Provas Favoráveis
- [Prova 1]: [Por que favorece]
- [Prova 2]: [Por que favorece]

### Conclusão Parcial
[Se fosse advogado desta parte]

---

## LENTE 3: NEUTRA

### Ponderação de Argumentos
| Argumento | Força A | Força B | Avaliação |
|-----------|---------|---------|-----------|

### Pontos Pacíficos
[O que ambos concordam]

### Pontos Controvertidos
[Onde está a disputa real]

### Conclusão
[Decisão fundamentada]

---

## SÍNTESE INTEGRADORA

### Tabela Comparativa
| Aspecto | Lente A | Lente B | Conclusão |
|---------|---------|---------|-----------|

### Conclusão Final
[Integração das análises]

### Nível de Certeza
[1-10] - [Justificativa]

---

<caso>
[INSERIR CASO]
</caso>
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: ANÁLISE MULTICAMADAS                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  CONCEITO:                                                  │
│  → Ver o mesmo caso de múltiplas perspectivas               │
│  → Cada lente revela aspectos diferentes                    │
│  → Síntese integra para conclusão robusta                   │
│                                                             │
│  LENTES TÍPICAS:                                            │
│  → Autor vs Réu vs Juiz                                     │
│  → Técnico vs Jurídico vs Social                            │
│  → Curto prazo vs Longo prazo                               │
│                                                             │
│  METODOLOGIA:                                               │
│  1. Analisar de cada perspectiva separadamente              │
│  2. Encontrar melhores argumentos para cada lado            │
│  3. Integrar em síntese que pondera                         │
│  4. Concluir com nível de certeza                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Análise Multicamadas mostra diferentes perspectivas. Mas como encontrar falhas críticas em argumentações?

→ Próxima: **[3.3 Crítica Sistemática](./aula-3.3.md)**
