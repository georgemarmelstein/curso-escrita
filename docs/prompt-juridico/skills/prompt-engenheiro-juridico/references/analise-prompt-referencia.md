# Análise do Prompt de Referência (FIRAC+)

## Visão Geral

O prompt fornecido é um excelente exemplo de **prompt de análise** bem estruturado, aplicando múltiplas técnicas avançadas de prompt engineering.

---

## Estrutura Identificada (11 Componentes)

### 1. DEFINIÇÃO DE PAPEL (Role)
```
Você é um ASSISTENTE JURÍDICO DE ALTO NÍVEL especializado EM DIREITO,
LINGUAGEM E INTERPRETAÇÃO, com expertise em análise processual, teoria
da decisão e pensamento crítico.
```
**Técnica**: Role prompting com especialização detalhada

### 2. DEFINIÇÃO DA TAREFA (Task)
```
Sua tarefa é realizar a análise abrangente, completa e estruturada do
CASO JURÍDICO FORNECIDO
```
**Técnica**: Be clear and direct

### 3. OBJETIVO FINAL (Purpose)
```
...para fornecer subsídios técnico-jurídicos completos que auxiliem na
fundamentação de decisões judiciais, visando a realizar análise detalhada
e profunda seguindo a metodologia FIRAC+
```
**Técnica**: Contexto motivacional (por quê + para quê)

### 4. INSTRUÇÕES DE INPUT (Input Handling)
```
Consulte todos os documentos fornecidos na íntegra. Eles podem ter
informações contraditórias. Por isso, faça uma leitura holística...
```
**Técnica**: Orientação de processamento de contexto longo

### 5. RESTRIÇÕES/GUARDRAILS (Constraints)
```
USE EXCLUSIVAMENTE as evidências, fatos e informações contidos no documento.
PROIBIÇÃO ABSOLUTA de incorporar elementos probatórios ou factuais de fontes
externas. SOMENTE USE OS ELEMENTOS PROBATÓRIOS DO CASO FORNECIDO.
```
**Técnica**: Guardrails explícitos com ênfase (MAIÚSCULAS)

### 6. INSTRUÇÕES TÉCNICAS (Technical Instructions)
```
Para PDFs digitalizados, ative ferramentas adequadas de OCR...
Se o documento apresentar layout complexo, utilize análise visual multimodal...
```
**Técnica**: Instruções técnicas específicas para capabilities do modelo

### 7. CARACTERÍSTICAS COMPORTAMENTAIS (Behavioral Traits)
```
Sua ANÁLISE é objetiva, imparcial e multifacetada, captando as sutilezas...
Você não é influenciado por vieses de posição...
Você dá igual peso para todos os componentes do caso...
```
**Técnica**: Definição de comportamento esperado (anti-viés)

### 8. TOM E ESTILO (Tone & Style)
```
Adote um tom PROFISSIONAL e AUTORITATIVO, sem jargões desnecessários.
Escreva de modo CONCISO, mas completo e abrangente, sem redundância.
Seja econômico, usando apenas expressões necessárias para a clareza.
```
**Técnica**: Diretrizes explícitas de estilo

### 9. INSTRUÇÃO DE INÍCIO (Prefill Guidance)
```
Vá direto para a resposta, começando o texto com DADOS DO PROCESSO.
```
**Técnica**: Prefill implícito (guia onde começar)

### 10. TEMPLATE DE OUTPUT (Output Format)
```xml
<modelo_firac>
### **DADOS DO PROCESSO** - `...`
### **FATOS** - `...`
### **PROBLEMA JURÍDICO**
#### **QUESTÃO CENTRAL** - `...`
#### **PONTOS CONTROVERTIDOS** - `...`
### **DIREITO APLICÁVEL** - `...`
### **ANÁLISE E APLICAÇÃO**
#### **ARGUMENTOS E PROVAS DO AUTOR** - `...`
#### **ARGUMENTOS E PROVAS DO RÉU** - `...`
### **CONCLUSÃO** - `...`
</modelo_firac>
```
**Técnica**: XML tags + Template estruturado com Markdown

### 11. CHECKLIST DE QUALIDADE (Adicionais)
```
1. Completude: Analise INTEGRALMENTE todos os documentos
2. Imparcialidade: Não demonstre preferência...
3. Profundidade: Vá além da superfície...
...
```
**Técnica**: Lista de requisitos de qualidade

---

## Mapeamento de Técnicas Anthropic Aplicadas

| Técnica Anthropic | Aplicação no Prompt | Avaliação |
|-------------------|---------------------|-----------|
| Be clear and direct | ✅ Instruções claras e diretas | Excelente |
| Use examples | ❌ Não há exemplos | Oportunidade |
| Let Claude think | ⚠️ Implícito (pede análise profunda) | Parcial |
| Use XML tags | ✅ `<modelo_firac>` | Bom |
| Give Claude a role | ✅ Role detalhado | Excelente |
| Prefill response | ✅ "começando o texto com..." | Bom |
| Long context tips | ✅ Instruções para leitura holística | Bom |

---

## Padrões Extraídos para Reuso

### Padrão 1: Estrutura de Definição de Papel
```
Você é um [ESPECIALIDADE] DE ALTO NÍVEL especializado em [ÁREA 1],
[ÁREA 2] e [ÁREA 3], com expertise em [COMPETÊNCIA 1], [COMPETÊNCIA 2]
e [COMPETÊNCIA 3].
```

### Padrão 2: Estrutura de Tarefa
```
Sua tarefa é [VERBO DE AÇÃO] + [OBJETO] + [QUALIFICADORES],
para [FINALIDADE/PROPÓSITO],
visando a [OBJETIVO ESPECÍFICO METODOLÓGICO].
```

### Padrão 3: Estrutura de Guardrails
```
[INSTRUÇÃO POSITIVA] exclusivamente [ESCOPO PERMITIDO].
[PROIBIÇÃO] de [COMPORTAMENTO INDESEJADO].
[REFORÇO] [APENAS/SOMENTE] [ESCOPO REITERADO].
```

### Padrão 4: Estrutura de Tom e Estilo
```
Adote um tom [ADJETIVO 1] e [ADJETIVO 2], sem [ELEMENTO A EVITAR].
Escreva de modo [CARACTERÍSTICA 1], mas [CARACTERÍSTICA 2], sem [DEFEITO].
[INSTRUÇÃO ECONÔMICA].
```

### Padrão 5: Estrutura de Template XML
```xml
<nome_metodologia>
### **SEÇÃO 1** - `INSTRUÇÃO ESPECÍFICA`
### **SEÇÃO 2** - `INSTRUÇÃO ESPECÍFICA`
#### **SUBSEÇÃO 2.1** - `INSTRUÇÃO ESPECÍFICA`
</nome_metodologia>
```

---

## Pontos Fortes do Prompt

1. **Estrutura clara e hierárquica** - Fácil de seguir
2. **Guardrails robustos** - Evita alucinações e adição de material externo
3. **Metodologia nomeada (FIRAC+)** - Cria framework mental
4. **Anti-viés explícito** - Combate posição bias e recency bias
5. **Tom profissional definido** - Consistência de output
6. **Template reutilizável** - Formato replicável

## Oportunidades de Aprimoramento

1. **Adicionar exemplo** - Um exemplo curto do output esperado
2. **Separar seções com mais XML tags** - `<role>`, `<task>`, `<constraints>`, etc.
3. **Explicitar cadeia de pensamento** - "Antes de escrever, analise internamente..."

---

## Classificação

- **Tipo**: Prompt de Análise
- **Complexidade**: Alta
- **Técnicas utilizadas**: 6 de 8 principais
- **Qualidade geral**: Excelente (8.5/10)
