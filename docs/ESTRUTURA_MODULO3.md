# MÓDULO 3 — TÉCNICAS AVANÇADAS

## Visão Geral

Este módulo avança além das técnicas básicas de engenharia de prompt, apresentando ferramentas e metodologias para usuários que já dominam os fundamentos e querem maximizar resultados com LLMs.

**Pré-requisito:** Módulo 2 completo (especialmente P.O.E.M.A., FIRAC+ e Relatório)

---

## Estrutura de Aulas (5 aulas)

| Aula | Título | Foco Principal |
|------|--------|----------------|
| 3.1 | Projetos (Claude) | Ambientes persistentes com RAG |
| 3.2 | Deep Research | Pesquisa profunda e iterativa |
| 3.3 | Metaprompt de Análise | Gerar prompts de análise sob demanda |
| 3.4 | Metaprompt de Escrita | Gerar prompts de escrita sob demanda |
| 3.5 | Erros Comuns e Boas Práticas | Consolidação e checklist final |

---

## 3.1 — Projetos (Claude Projects)

**Objetivo:** Dominar a criação de ambientes de trabalho persistentes com prompts customizados e bases de conhecimento.

**Conteúdo:**
- O que são Projects e por que usar
- Anatomia de um Project: Knowledge Base + Custom Instructions
- Knowledge Base: o que incluir, formatos suportados, limites
- Custom Instructions: sistema de prompts persistentes
- Diferença entre Projects vs. Chat simples vs. API
- Casos de uso jurídicos:
  - Assistente de área especializada (previdenciário, trabalhista)
  - Banco de precedentes + instruções de análise
  - Templates de documentos + estilo padronizado
- Exercício: Criar Project jurídico completo

**Conceitos-chave:**
- RAG (Retrieval Augmented Generation)
- Contexto estendido (até 5.000 páginas)
- Persistência de configurações

---

## 3.2 — Deep Research

**Objetivo:** Compreender a lógica de pesquisas profundas com LLMs e dominar o uso de metaprompts de pesquisa.

**Conteúdo:**
- O que é Deep Research e como funciona
- Diferença entre pesquisa simples vs. Deep Research
- Quando usar Deep Research
- Anatomia de uma pesquisa profunda:
  1. Decomposição da pergunta
  2. Pesquisa iterativa (múltiplas buscas)
  3. Síntese crítica
  4. Verificação cruzada
- Plataformas com Deep Research nativo (ChatGPT, Gemini, Perplexity)
- **Metaprompt de Deep Research** (incluído completo)
- Aplicações jurídicas:
  - Pesquisa de jurisprudência temática
  - Mapeamento doutrinário
  - Due diligence documental
- Exercício: Conduzir pesquisa profunda sobre tema jurídico

**Conceitos-chave:**
- Pesquisa iterativa
- Síntese crítica
- Verificação de fontes

---

## 3.3 — Metaprompt de Análise

**Objetivo:** Dominar o prompt que gera prompts de análise, permitindo criar novos prompts estruturados sob demanda.

**Conteúdo:**
- O que é um Metaprompt
- Por que usar metaprompts (escalabilidade, consistência)
- Anatomia do Metaprompt de Análise:
  - Inputs: tipo de documento, objetivo, critérios
  - Processo: geração estruturada P.O.E.M.A.
  - Output: prompt pronto para uso
- **Metaprompt de Análise Jurídica** (incluído completo)
- Fluxo de trabalho:
  1. Descrever a necessidade de análise
  2. Gerar prompt customizado
  3. Aplicar prompt ao documento
- Exemplos de prompts gerados:
  - Análise de contrato específico
  - Avaliação de risco regulatório
  - Parecer sobre tema inédito
- Exercício: Gerar prompt de análise para caso real

**Conceitos-chave:**
- Meta-programação de prompts
- Framework P.O.E.M.A. aplicado
- Customização sob demanda

---

## 3.4 — Metaprompt de Escrita

**Objetivo:** Dominar o prompt que gera prompts de escrita jurídica, criando templates de documentos sob demanda.

**Conteúdo:**
- Diferenças entre Metaprompt de Análise vs. Escrita
- Foco em estilo, formato e fidelidade documental
- Anatomia do Metaprompt de Escrita:
  - Inputs: tipo de documento, estilo, público-alvo
  - Processo: geração com placeholders e guardrails
  - Output: prompt de escrita pronto
- **Metaprompt de Escrita Jurídica** (incluído completo)
- Técnicas especiais para escrita:
  - Placeholders estruturados
  - Guardrails anti-alucinação
  - Prefill (instrução de início)
  - Controle de verbosidade
- Exemplos de prompts gerados:
  - Modelo de petição específica
  - Template de parecer técnico
  - Minuta de contrato
- Exercício: Gerar prompt de escrita para documento jurídico

**Conceitos-chave:**
- Prompts pré-estruturados
- Fidelidade documental
- Controle de estilo

---

## 3.5 — Erros Comuns e Boas Práticas

**Objetivo:** Consolidar o aprendizado identificando armadilhas frequentes e estabelecendo checklist de qualidade.

**Conteúdo:**

### Os 10 Erros Mais Comuns
1. Não saber de onde veio a resposta (risco de alucinação)
2. Confiar demais em prompts emocionais com modelos robustos
3. Customizar configurações globais (polui todas as respostas)
4. Excesso de instruções em prompts de análise
5. Perguntar "você tem certeza?" (muda resposta, não melhora)
6. Achar que está "treinando" o modelo
7. Ignorar o efeito borboleta dos prompts
8. Sacrificar qualidade por formato rígido
9. Não usar Few-Shot quando precisa de formato específico
10. Esquecer os guardrails anti-alucinação

### Boas Práticas Consolidadas
- Para Prompts de Análise
- Para Prompts de Escrita
- Para Prompts de Pesquisa

### Checklist Final de Qualidade
- [ ] Objetivo claro e específico
- [ ] Formato de saída definido
- [ ] Guardrails anti-alucinação presentes
- [ ] Fontes verificáveis quando aplicável
- [ ] Revisão humana antes de uso final

### Hierarquia de Aprendizado
1. Prática (experimentar muito)
2. Guias Oficiais (Anthropic, OpenAI)
3. Análise de Prompts (estudar prompts de outros)
4. Papers/Preprints (pesquisa acadêmica)

- Exercício: Revisar prompt próprio usando checklist

**Conceitos-chave:**
- Anti-padrões
- Melhoria contínua
- Auditoria de prompts

---

## Artefatos Desenvolvidos

### Conteúdo Didático
- [x] **modulo3-aulas.js** — Todas as 5 aulas em formato JavaScript para o caderno
  - Localização: `site/modulo3-aulas.js`

### Metaprompts Criados
- [x] **Metaprompt de Deep Research** (aula 3.2)
  - Localização: `docs/prompt-juridico/prompts/criacao/deep-research.md`
- [x] **Metaprompt de Análise Jurídica** (aula 3.3)
  - Localização: `docs/prompt-juridico/prompts/criacao/metaprompt-analise.md`
- [x] **Metaprompt de Escrita Jurídica** (aula 3.4)
  - Localização: `docs/prompt-juridico/prompts/criacao/metaprompt-escrita.md`

### README Atualizado
- [x] Contagem total: 44 → 47 prompts
- [x] Contagem Criação: 11 → 14 prompts
- [x] Nova seção "Metaprompts e Pesquisa" adicionada

---

## Próximos Passos

Para integrar ao caderno principal (`caderno-v2.html`):
1. Importar `modulo3-aulas.js` no HTML
2. Adicionar navegação do Módulo 3 no menu
3. Testar renderização de todas as aulas

---

*Documento criado em: 11/02/2026*
*Atualizado em: 11/02/2026*
*Autor: George Marmelstein / Claude*
