# Anexo: CLERK na Pratica

> **Aula 5:** Sistema Juridico Agentico
> **Objetivo:** Exemplos praticos do pipeline CLERK

---

## Parte 1: Exemplo Completo - Caso BPC

### Cenario

**Processo:** 0001234-56.2024.4.05.8100
**Tipo:** BPC/LOAS - Beneficio de Prestacao Continuada
**Autor:** Maria da Silva, 68 anos
**Reu:** INSS
**Questao:** Idosa alega miserabilidade, INSS indeferiu por renda acima do limite.

---

### Fase 1: Preparacao

**Comando:**
```bash
/baixar-pje 0001234-56.2024.4.05.8100
```

**Output:**
```
processo-0001234-56.2024.4.05.8100/
├── peticao-inicial.txt
├── contestacao.txt
├── documentos/
│   ├── rg-autora.txt
│   ├── comprovante-residencia.txt
│   ├── declaracao-renda.txt
│   └── indeferimento-inss.txt
└── metadata.json
```

---

### Fase 2: Extracao

**Comando:**
```bash
/relatar-processo processo-0001234-56.2024.4.05.8100/
```

**Output: relatorio.md**
```markdown
# RELATORIO

Processo: 0001234-56.2024.4.05.8100
Partes: MARIA DA SILVA vs INSS

## 1. SINTESE

Idosa de 68 anos requer BPC alegando miserabilidade. INSS indeferiu
administrativamente sob argumento de que renda per capita familiar
supera 1/4 do salario minimo. Autora contesta calculo, alegando que
renda do neto e eventual e nao deve ser computada.

## 2. FATOS RELEVANTES

| Data | Fato | Fonte |
|------|------|-------|
| 15/05/1956 | Nascimento da autora | p. 12 (RG) |
| 10/01/2024 | Requerimento administrativo BPC | p. 3 |
| 25/01/2024 | Avaliacao social INSS | p. 18 |
| 05/02/2024 | Indeferimento - renda per capita R$ 380,00 | p. 20 |
| 15/03/2024 | Ajuizamento da acao | p. 2 |

## 3. PEDIDOS

1. Concessao do BPC desde o requerimento administrativo (10/01/2024)
2. Pagamento das parcelas vencidas com correcao monetaria
3. Honorarios advocaticios

## 4. DOCUMENTOS PROBATORIOS

- RG da autora (p. 12) - comprova idade 68 anos
- Comprovante de residencia (p. 14) - composicao familiar
- Declaracao de renda (p. 16) - R$ 400,00 (bicos do neto)
- Indeferimento INSS (p. 20) - calculo renda per capita
```

---

### Fase 3: Orquestrador

**Comando:**
```bash
/analisar-caso processo-0001234-56.2024.4.05.8100/relatorio.md
```

**Etapa 1: Pesquisa BNP**
```
Query: +bpc +idoso +renda +"per capita"
Resultado: Tema 173 STF - "Possibilidade de demonstracao da
miserabilidade por outros meios alem do criterio de 1/4 SM"
```

**Etapa 2: Classificacao**
```
TRIVIAL
- Tema vinculante aplicavel diretamente (Tema 173)
- Fatos incontroversos (idade, composicao familiar)
- Questao apenas sobre calculo de renda
```

**Output: analise-orientadora.md**
```markdown
# ANALISE ORIENTADORA

Processo: 0001234-56.2024.4.05.8100
Data: 2024-03-20

## 1. CLASSIFICACAO

**TRIVIAL**

Justificativa:
- Tema 173 STF aplicavel diretamente
- Fatos incontroversos
- Questao e puramente de calculo de renda

## 2. PRECEDENTE APLICAVEL

**Tema 173 - STF**
Tese: "O criterio de renda de 1/4 do salario minimo pode ser
relativizado quando outros elementos demonstrem a miserabilidade."

Aplicabilidade: DIRETA
- Autora alega que renda do neto e eventual
- Renda declarada (R$ 400) pouco acima do limite (R$ 353)
- Diferenca minima justifica flexibilizacao

## 3. ORIENTACAO PARA ELABORACAO

Recomendacao: PROCEDENCIA

Fundamentos:
1. Requisito de idade preenchido (68 anos > 65)
2. Requisito de miserabilidade: aplicar Tema 173
3. Renda eventual do neto nao deve ser computada integralmente

DIB sugerida: 10/01/2024 (data do requerimento)
```

---

### GATE 3: Checkpoint Decisorio

```
┌─────────────────────────────────────────────────────────────────┐
│  CHECKPOINT DECISORIO                                           │
│                                                                 │
│  Processo: 0001234-56.2024.4.05.8100                            │
│  Classificacao: TRIVIAL                                         │
│  Precedente: Tema 173 STF                                       │
│                                                                 │
│  MAGISTRADO:                                                    │
│                                                                 │
│  [X] Concordo com classificacao TRIVIAL                         │
│  [X] Concordo com aplicacao do Tema 173                         │
│  [X] Orientacao: PROCEDENTE                                     │
│                                                                 │
│  Observacoes: Nenhuma.                                          │
│                                                                 │
│  [ APROVAR E CONTINUAR ]                                        │
└─────────────────────────────────────────────────────────────────┘
```

---

### Fase 4-5: Elaboracao

**Comando:**
```bash
/sentenciar-restrito processo-0001234-56.2024.4.05.8100/
```

**Output: minuta.md**
```markdown
# SENTENCA

Processo: 0001234-56.2024.4.05.8100
Autor: MARIA DA SILVA
Reu: INSS

## RELATORIO

Trata-se de acao previdenciaria ajuizada por MARIA DA SILVA,
brasileira, idosa, em face do INSTITUTO NACIONAL DO SEGURO SOCIAL,
objetivando a concessao do Beneficio de Prestacao Continuada (BPC/LOAS).

Alega a autora, em sintese, que:
a) Possui 68 anos de idade;
b) Reside com filha e neto menor;
c) A renda familiar e composta apenas por trabalhos eventuais do neto;
d) O INSS indeferiu o beneficio alegando renda per capita de R$ 380,00.

O INSS apresentou contestacao sustentando a regularidade do
indeferimento administrativo.

E o relatorio.

## FUNDAMENTACAO

A questao central e saber se a autora preenche os requisitos para
concessao do BPC/LOAS, especialmente o requisito de miserabilidade.

### Do Requisito Etario

A autora comprovou ter 68 anos de idade (doc. p. 12), superando o
minimo legal de 65 anos previsto no art. 20 da Lei 8.742/93.
Requisito preenchido.

### Do Requisito de Miserabilidade

O INSS indeferiu o beneficio sob fundamento de que a renda per capita
familiar (R$ 380,00) supera 1/4 do salario minimo vigente (R$ 353,00).

Contudo, o Supremo Tribunal Federal, no julgamento do Tema 173 de
Repercussao Geral, fixou a seguinte tese:

> "O criterio de renda de 1/4 do salario minimo pode ser relativizado
> quando outros elementos demonstrem a condicao de miserabilidade."

No caso concreto, a renda de R$ 400,00 declarada refere-se a trabalhos
eventuais ("bicos") do neto, de carater precario e incerto. A diferenca
entre a renda apurada e o limite legal e minima (R$ 27,00), e a
natureza eventual da renda justifica a flexibilizacao do criterio
objetivo, conforme autorizado pelo STF.

Requisito preenchido.

## DISPOSITIVO

Ante o exposto, JULGO PROCEDENTE o pedido para:

1. CONCEDER o Beneficio de Prestacao Continuada (BPC/LOAS) a autora
   MARIA DA SILVA, com DIB em 10/01/2024 (data do requerimento
   administrativo);

2. CONDENAR o INSS ao pagamento das parcelas vencidas desde a DIB,
   acrescidas de correcao monetaria pelo IPCA-E e juros de mora
   conforme art. 1o-F da Lei 9.494/97;

3. CONDENAR o INSS ao pagamento de honorarios advocaticios, fixados
   em 10% sobre o valor da condenacao, observada a Sumula 111 do STJ.

Sem custas (art. 4o, I, da Lei 9.289/96).

Sentenca sujeita a reexame necessario.

Publique-se. Registre-se. Intimem-se.

[Local], [Data].

[MAGISTRADO]
Juiz Federal
```

---

### Fase 6: Revisao

**Comando:**
```bash
/revisar-sentenca processo-0001234-56.2024.4.05.8100/minuta.md
```

**Output dos Subagentes:**

**analise-advogado-diabo.md:**
```markdown
# Analise - Advogado do Diabo

## Vicios Encontrados

### ALTOS
(nenhum)

### MEDIOS
1. **Ausencia de enfrentamento sobre composicao familiar**
   - Autor alega residir com filha e neto
   - Sentenca nao esclarece situacao da filha (trabalha? renda?)
   - Sugestao: Adicionar paragrafo sobre composicao familiar

### BAIXOS
2. **Fundamentacao poderia citar mais precedentes**
   - Apenas Tema 173 citado
   - Poderia reforcar com jurisprudencia do TRF5
   - Sugestao: Opcional, nao essencial

## Conclusao
Minuta APROVADA com ressalvas menores.
```

**analise-consistencia-interna.md:**
```markdown
# Analise - Consistencia Interna

## Verificacao

### Pedidos vs Dispositivo
| Pedido | Enfrentado | Status |
|--------|------------|--------|
| Concessao BPC | Sim (item 1) | OK |
| Parcelas vencidas | Sim (item 2) | OK |
| Honorarios | Sim (item 3) | OK |

### Fatos vs Relatorio
| Fato (autos) | Mencionado | Status |
|--------------|------------|--------|
| Idade 68 anos | Sim | OK |
| Renda R$ 400 | Sim | OK |
| Neto eventual | Sim | OK |

### Provas Citadas
| Prova | Existe nos autos | Status |
|-------|------------------|--------|
| RG p. 12 | Sim | OK |
| Declaracao renda | Sim | OK |

## Conclusao
Minuta CONSISTENTE com os autos.
```

**analise-consistencia-externa.md:**
```markdown
# Analise - Consistencia Externa

## Verificacao de Citacoes

### Tema 173 STF
- Citado: "O criterio de renda de 1/4..."
- Verificado via WebSearch: CORRETO
- Fonte: STF, RE 567985, julgado em 2013

### Art. 20 Lei 8.742/93
- Citado: idade minima 65 anos
- Verificado: CORRETO
- Texto atual confirma 65 anos para idosos

### Sumula 111 STJ
- Citada: honorarios
- Verificado: CORRETO
- "Os honorarios advocaticios, nas acoes previdenciarias,
  nao incidem sobre prestacoes vincendas"

### Art. 1o-F Lei 9.494/97
- Citado: juros de mora
- Verificado: CORRETO
- Dispositivo vigente sobre correcao monetaria

## Conclusao
Todas as citacoes VERIFICADAS e CORRETAS.
```

**consolidacao.md:**
```markdown
# Consolidacao da Revisao

Processo: 0001234-56.2024.4.05.8100
Data: 2024-03-20

## Resumo

| Subagente | Problemas Criticos | Problemas Altos | Outros |
|-----------|-------------------|-----------------|--------|
| Advogado do Diabo | 0 | 0 | 2 |
| Consistencia Interna | 0 | 0 | 0 |
| Consistencia Externa | 0 | 0 | 0 |

## Problemas Encontrados

### CRITICOS
(nenhum)

### ALTOS
(nenhum)

### MEDIOS
1. Composicao familiar poderia ser mais detalhada

### BAIXOS
2. Fundamentacao poderia incluir jurisprudencia adicional

## Conclusao

**APROVAR**

A minuta esta tecnicamente correta e consistente.
As melhorias sugeridas sao opcionais.

Recomendacao: Publicar como esta ou fazer ajustes menores
a criterio do magistrado.
```

---

### Estrutura Final

```
processo-0001234-56.2024.4.05.8100/
├── peticao-inicial.txt
├── contestacao.txt
├── documentos/
│   └── [documentos convertidos]
├── relatorio.md                    ← Fase 2
├── pesquisa/
│   ├── analise-orientadora.md      ← Fase 3
│   └── bnp/
│       └── tema-173.json
├── minuta.md                       ← Fases 4-5
└── revisao/
    ├── analise-advogado-diabo.md   ← Fase 6
    ├── analise-consistencia-interna.md
    ├── analise-consistencia-externa.md
    └── consolidacao.md
```

---

## Parte 2: Guia de Sintaxe dos MCPs

### BNP - Banco Nacional de Precedentes

**Operadores:**
```
+termo      → Obrigatorio (AND)
-termo      → Excluir (NOT)
"frase"     → Expressao exata
```

**Exemplos:**
```
Buscar BPC para idoso:
+bpc +idoso

Buscar pensao por morte excluindo militar:
+pensao +morte -militar

Buscar aposentadoria especial com EPI:
+"aposentadoria especial" +epi
```

**NAO funciona:**
```
E, OU, NAO (palavras)
AND, OR, NOT (em ingles)
```

---

### CJF - Conselho da Justica Federal

**Operadores booleanos (MAIUSCULO):**
```
E           → Ambos termos
OU          → Qualquer termo
NAO         → Exclui termo
XOU         → Um ou outro, nao ambos
```

**Operadores de proximidade:**
```
ADJ[n]      → Adjacentes na ordem, ate n palavras
PROX[n]     → Proximos qualquer ordem, ate n palavras
COM         → Na mesma sentenca
MESMO       → No mesmo paragrafo
```

**Campos especificos:**
```
[EMEN]      → Ementa
[REL]       → Relator
[TRIB]      → Tribunal
[ORGA]      → Orgao julgador
[INDE]      → Indexacao
[ITEO]      → Inteiro teor
```

**Exemplos:**
```
Buscar em ementa:
(pensao E morte)[EMEN]

Buscar por relator:
Fux[REL] E previdenciario[INDE]

Buscar proximidade:
aposentadoria PROX3 invalidez

Buscar com filtro de tribunal:
bpc[EMEN] E STJ[TRIB]
```

---

### JULIA - TRF5

**Operadores (minusculo):**
```
e           → Ambos termos
ou          → Qualquer termo
nao         → Exclui termo
prox        → Proximos (5 palavras, mesma ordem)
adj         → Adjacentes (5 palavras, qualquer ordem)
$           → Wildcard (sufixo)
```

**Filtros disponiveis:**
```
orgao           → TRF5, JFCE, JFRN, JFPB, JFPE, JFAL, JFSE
instancia       → G2 (2o grau), G1 (1o grau)
tipos_documento → Sentenca, Acordao, Decisao
orgao_julgador  → 1a TURMA, 2a TURMA, PLENO
relator         → Nome do magistrado
```

**Exemplos:**
```
Buscar com wildcard:
aposentad$ e especial

Buscar excluindo:
servidor nao militar

Buscar 2o grau TRF5:
pensao e morte e homoafetivo
(com filtro instancia=G2)

Buscar por turma:
bpc e idoso
(com filtro orgao_julgador="1a TURMA")
```

---

## Parte 3: Guia do Projeto Final

### Opcao A: Pipeline BPC Completo

**Requisitos:**
1. Processo real de BPC (pode ser ficticio para fins didaticos)
2. Execucao de todas as 6 fases
3. Documentacao do processo

**Passo a passo:**

```markdown
## Checklist - Pipeline BPC

### Preparacao
- [ ] Criar pasta do processo
- [ ] Simular arquivos TXT (peticao, contestacao, docs)
- [ ] Executar: /baixar-pje (ou simular estrutura)

### Extracao
- [ ] Executar: /relatar-processo
- [ ] Verificar: relatorio.md gerado
- [ ] Validar: fatos, pedidos, provas

### Orquestrador
- [ ] Executar: /analisar-caso
- [ ] Verificar: pesquisa BNP realizada
- [ ] Verificar: classificacao (TRIVIAL esperado)
- [ ] Verificar: analise-orientadora.md

### Checkpoint
- [ ] Simular aprovacao do magistrado
- [ ] Documentar: decisao (PROCEDENTE/IMPROCEDENTE)

### Elaboracao
- [ ] Executar: /sentenciar-restrito
- [ ] Verificar: minuta.md gerada
- [ ] Validar: RELATORIO, FUNDAMENTACAO, DISPOSITIVO

### Revisao
- [ ] Executar: /revisar-sentenca
- [ ] Verificar: 3 analises de subagentes
- [ ] Verificar: consolidacao.md
- [ ] Validar: resultado (APROVAR/REVISAR)

### Entrega
- [ ] Estrutura completa de pastas
- [ ] README documentando o processo
- [ ] Reflexao sobre o que funcionou/nao funcionou
```

---

### Opcao B: Sistema de Pesquisa Tematica

**Requisitos:**
1. Escolher tema juridico (ex: "prescricao em acoes previdenciarias")
2. Criar skill de pesquisa
3. Gerar relatorio comparativo

**Passo a passo:**

```markdown
## Checklist - Pesquisa Tematica

### Definicao
- [ ] Escolher tema: _______________
- [ ] Definir escopo (o que incluir/excluir)
- [ ] Listar questoes a responder

### Skill de Pesquisa
- [ ] Criar: .claude/skills/pesquisa-[tema]/SKILL.md
- [ ] Definir: metodologia de busca
- [ ] Definir: formato de output

### Execucao
- [ ] Pesquisar BNP: query = _______________
- [ ] Pesquisar CJF: query = _______________
- [ ] Pesquisar JULIA: query = _______________

### Consolidacao
- [ ] Comparar resultados das 3 fontes
- [ ] Identificar: consensos e divergencias
- [ ] Mapear: evolucao jurisprudencial

### Relatorio
- [ ] Gerar relatorio tematico
- [ ] Incluir: precedentes principais
- [ ] Incluir: teses firmadas
- [ ] Incluir: tendencias identificadas

### Entrega
- [ ] Skill funcional
- [ ] Relatorio completo
- [ ] Analise critica
```

---

### Opcao C: Analisador de Contratos

**Requisitos:**
1. Contrato real (anonimizado) ou modelo
2. Skill de extracao de clausulas
3. Relatorio de riscos

**Passo a passo:**

```markdown
## Checklist - Analisador de Contratos

### Preparacao
- [ ] Obter contrato (PDF ou TXT)
- [ ] Anonimizar dados sensiveis
- [ ] Identificar tipo de contrato

### Skill de Analise
- [ ] Criar: .claude/skills/analise-contratos/SKILL.md
- [ ] Definir: clausulas-chave a extrair
- [ ] Definir: criterios de risco

### Extracao
- [ ] Extrair: partes contratantes
- [ ] Extrair: objeto do contrato
- [ ] Extrair: valor e forma de pagamento
- [ ] Extrair: prazo e renovacao
- [ ] Extrair: clausulas penais
- [ ] Extrair: foro de eleicao

### Analise de Riscos
- [ ] Identificar: clausulas abusivas
- [ ] Identificar: omissoes relevantes
- [ ] Identificar: inconsistencias

### Relatorio
- [ ] Gerar relatorio estruturado
- [ ] Incluir: resumo executivo
- [ ] Incluir: clausulas extraidas
- [ ] Incluir: riscos identificados
- [ ] Incluir: recomendacoes

### Entrega
- [ ] Skill funcional
- [ ] Relatorio de analise
- [ ] Reflexao sobre o processo
```

---

## Parte 4: Troubleshooting Comum

### Problema 1: MCP nao responde

**Sintomas:**
- Comando de pesquisa trava
- Erro "tool not found"
- Timeout

**Solucoes:**
```bash
# Verificar MCPs ativos
/mcp

# Reiniciar Claude Code
# (fechar e abrir novamente)

# Verificar configuracao
cat ~/.claude/settings.json | grep mcp
```

---

### Problema 2: Relatorio incompleto

**Sintomas:**
- Fatos faltando
- Secoes vazias
- Formato incorreto

**Solucoes:**
```markdown
1. Verificar se TXT esta completo
   - Arquivo muito grande? Dividir em partes
   - OCR falhou? Reconverter PDF

2. Ajustar prompt da skill
   - Adicionar mais instrucoes especificas
   - Incluir exemplos de output esperado

3. Usar /compact se contexto estiver cheio
```

---

### Problema 3: Pesquisa sem resultados

**Sintomas:**
- "Nenhum precedente encontrado"
- Resultados irrelevantes

**Solucoes:**
```markdown
1. Verificar sintaxe da query
   - BNP: +termo +termo (nao usar E/OU)
   - CJF: termo E termo (MAIUSCULO)
   - JULIA: termo e termo (minusculo)

2. Simplificar a busca
   - Menos termos = mais resultados
   - Testar termo por termo

3. Usar termos tecnicos
   - "beneficio assistencial" em vez de "ajuda do governo"
   - "aposentadoria por invalidez" em vez de "aposentar por doenca"
```

---

### Problema 4: Minuta com erros

**Sintomas:**
- Citacoes incorretas
- Fatos inventados
- Formato errado

**Solucoes:**
```markdown
1. Verificar analise-orientadora.md
   - Precedentes estao corretos?
   - Classificacao esta correta?

2. Revisar regras da skill
   - SEMPRE/NUNCA estao claros?
   - Exemplos estao corretos?

3. Usar /revisar-sentenca
   - Subagentes identificam problemas
   - Consolidador prioriza correcoes
```

---

## Parte 5: Recursos Adicionais

### Links Uteis

**Documentacao:**
- code.claude.com - Claude Code
- docs.anthropic.com - API Anthropic
- cnj.jus.br/bnp - Banco Nacional de Precedentes

**Bases de Jurisprudencia:**
- jurisprudencia.stf.jus.br - STF
- scon.stj.jus.br - STJ
- cjf.jus.br/jurisprudencia - CJF Unificada

**Comunidade:**
- Discord Anthropic
- Forum AI Engineer
- Grupos de IA + Direito

### Leitura Recomendada

1. "Building Effective Agents" - Anthropic Blog
2. "12 Factor Agents" - Dex Horthy
3. "Model Context Protocol" - Anthropic Docs
4. Transcricoes AI Engineer Summit (pasta do curso)

---

*Anexo Pratico - Sistema Juridico Agentico*
*Curso de Sistemas Agenticos para Juristas*
