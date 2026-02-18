# Documentação Estruturada do Curso: Escrita com LLMs

> **Fonte de Verdade** para o conteúdo didático do curso
> **Autor:** George Marmelstein
> **Última atualização:** Fevereiro 2026

---

## Estrutura do Curso

```
MÓDULO 0 │ PREPARAÇÃO                              [5 aulas]
─────────┼────────────────────────────────────────────────────
         │ Configuração · Interface · Privacidade · Memória

MÓDULO 1 │ FUNDAMENTOS DOS LLMs                    [13 aulas]
─────────┼────────────────────────────────────────────────────
         │ Transformers · Tokens · Contexto · Alucinações

MÓDULO 2 │ ENGENHARIA DE PROMPT                    [14 aulas]
─────────┼────────────────────────────────────────────────────
         │ POEMA · Markdown · Few-shot · Chain-of-Thought

MÓDULO 3 │ APLICAÇÕES AVANÇADAS                    [12 aulas]
─────────┼────────────────────────────────────────────────────
         │ SUPER FIRAC · Probatória · Meta-prompts · Agentes
```

---

## Índice por Módulo

### [Módulo 0 - Preparação](./modulo0/README.md)
| # | Aula | Descrição |
|---|------|-----------|
| 0.1 | [Primeiros Passos](./modulo0/aula-0.1.md) | Criação de conta e escolha de plano |
| 0.2 | [Configuração de Privacidade](./modulo0/aula-0.2.md) | Resolução 615/2025 e opt-out de treinamento |
| 0.3 | [Interface e Navegação](./modulo0/aula-0.3.md) | Anatomia de conversa, artefatos, anexos |
| 0.4 | [Memória e Personalização](./modulo0/aula-0.4.md) | Memory settings e projetos |
| 0.5 | [Introdução ao Modo Agêntico](./modulo0/aula-0.5.md) | Ferramentas e Computer Use |

### [Módulo 1 - Fundamentos dos LLMs](./modulo1/README.md)
| # | Aula | Descrição |
|---|------|-----------|
| 1.1 | [Máquinas de Transformação](./modulo1/aula-1.1.md) | O que são LLMs e como transformam texto |
| 1.2 | [O Jogo da Adivinhação](./modulo1/aula-1.2.md) | Predição de tokens e probabilidade |
| 1.3 | [A Janela de Contexto](./modulo1/aula-1.3.md) | Limite de atenção e engenharia de contexto |
| 1.4 | [O Conhecimento da Máquina](./modulo1/aula-1.4.md) | Tipos de conhecimento e fontes |
| 1.5 | [Como Treinar um LLM](./modulo1/aula-1.5.md) | Pré-treino, fine-tuning, RLHF |
| 1.6 | [Alucinações](./modulo1/aula-1.6.md) | Por que LLMs inventam e como mitigar |
| 1.7 | [HHH - Alinhamento Ético](./modulo1/aula-1.7.md) | Helpful, Honest, Harmless |
| 1.8 | [Habilidades Emergentes](./modulo1/aula-1.8.md) | Capacidades com escala e CoT |
| 1.9 | [Multimodalidade](./modulo1/aula-1.9.md) | Texto, imagem, áudio, vídeo |
| 1.10 | [Modos de Uso dos LLMs](./modulo1/aula-1.10.md) | Recall, RAG, Interativo |
| 1.11 | [RAG e a Lógica dos Anexos](./modulo1/aula-1.11.md) | Retrieval Augmented Generation |
| 1.12 | [Introdução ao Mundo dos Agentes](./modulo1/aula-1.12.md) | ReAct, tools, multi-agentes |
| 1.13 | [10 Mandamentos para Dominar LLMs](./modulo1/aula-1.13.md) | Síntese e boas práticas |

### [Módulo 2 - Engenharia de Prompt](./modulo2/README.md)
| # | Aula | Descrição |
|---|------|-----------|
| 2.1 | [Markdown para Prompts](./modulo2/aula-2.1.md) | Headers, listas, formatação |
| 2.2 | [Tags XML como Delimitadores](./modulo2/aula-2.2.md) | Estruturação com tags |
| 2.3 | [Chamando a Atenção do Modelo](./modulo2/aula-2.3.md) | Ênfase e posicionamento |
| 2.4 | [Tipos de Prompt](./modulo2/aula-2.4.md) | Análise, Escrita, Criação, Pesquisa |
| 2.5 | [P - Persona](./modulo2/aula-2.5.md) | Papel + expertise + especialização |
| 2.6 | [O - Objetivo](./modulo2/aula-2.6.md) | Tarefa + tipo de leitura + ferramentas |
| 2.7 | [E - Estilo](./modulo2/aula-2.7.md) | Tom + anti-viés + prefill |
| 2.8 | [M - Modelo](./modulo2/aula-2.8.md) | Metodologia + formato de saída |
| 2.9 | [A - Adicionais](./modulo2/aula-2.9.md) | Guardrails + checklist + reforços |
| 2.10 | [YAML Frontmatter](./modulo2/aula-2.10.md) | Metadados e versionamento |
| 2.11 | [Metaprompts](./modulo2/aula-2.11.md) | Prompts que geram prompts |
| 2.12 | [Checklist Final](./modulo2/aula-2.12.md) | Validação pré-uso |
| 2.13 | [Prompt FIRAC Completo](./modulo2/aula-2.13.md) | Análise jurídica estruturada |
| 2.14 | [Super Dicas](./modulo2/aula-2.14.md) | Truques e armadilhas |

### [Módulo 3 - Aplicações Avançadas](./modulo3/README.md)
| # | Aula | Descrição |
|---|------|-----------|
| 3.1 | [SUPER FIRAC](./modulo3/aula-3.1.md) | Análise exaustiva de processos |
| 3.2 | [Análise Multicamadas](./modulo3/aula-3.2.md) | Múltiplas perspectivas |
| 3.3 | [Crítica Sistemática](./modulo3/aula-3.3.md) | Identificar falhas |
| 3.4 | [Inferência Causal (Pearl)](./modulo3/aula-3.4.md) | Causalidade e contrafactuais |
| 3.5 | [Foundherentismo (Haack)](./modulo3/aula-3.5.md) | Coerência + fundação |
| 3.6 | [Síntese Probatória](./modulo3/aula-3.6.md) | Combinar metodologias |
| 3.7 | [Meta-Prompts](./modulo3/aula-3.7.md) | Prompts que geram prompts |
| 3.8 | [Orquestradores](./modulo3/aula-3.8.md) | Fluxos multi-etapa |
| 3.9 | [Hackear Estilo](./modulo3/aula-3.9.md) | Extrair e replicar estilo |
| 3.10 | [Introdução a Agentes](./modulo3/aula-3.10.md) | ReAct e ferramentas |
| 3.11 | [RAG Avançado](./modulo3/aula-3.11.md) | Chunking e reranking |
| 3.12 | [Deep Research](./modulo3/aula-3.12.md) | Pesquisa autônoma |

---

## Formato Padrão de Cada Aula

Toda aula segue esta estrutura:

```markdown
# [Número] [Nome da Aula]

## Objetivos
O que o aluno saberá fazer ao final.

## Por que Importa
Relevância prática para o profissional do Direito.

## Base Conceitual
Conceitos-chave, explicações didáticas, analogias.

## Exercício Prático
Atividade hands-on para fixação.

## Dicas e Armadilhas
O que fazer (e evitar) na prática.

## Recursos
Links, papers, material complementar.

## Conexão
Link para a próxima aula.
```

---

## Mapa de Fontes

| Tipo de Conteúdo | Localização Original | Consolidado em |
|------------------|---------------------|----------------|
| Transcrições de vídeo | `docs/transcricoes/` | `docs/curso/` |
| Slides PowerPoint | `docs/modulo*-slides/` | Referenciados |
| Papers científicos | `docs/modulo*-slides/Material de Aula/` | Indexados |
| Prompts prontos | `docs/prompt-juridico/prompts/` | Exercícios |
| Caderno HTML | `site/caderno.html` | `docs/curso/` |

---

## Progressão Pedagógica

```
┌────────────┐     ┌───────────┐     ┌─────────────┐     ┌──────────┐
│ PREPARAÇÃO │ ──► │FUNDAMENTOS│ ──► │ ENG. PROMPT │ ──► │ AVANÇADO │
│  Módulo 0  │     │  Módulo 1 │     │  Módulo 2   │     │ Módulo 3 │
└────────────┘     └───────────┘     └─────────────┘     └──────────┘
     │                  │                  │                  │
  "Como uso?"     "Como funciona?"   "Como peço?"      "Como domino?"
```

---

*Documentação consolidada em: Fevereiro 2026*
