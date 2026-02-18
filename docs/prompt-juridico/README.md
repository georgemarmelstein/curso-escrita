# Prompt Jurídico

Coleção de prompts jurídicos estruturados para auxiliar profissionais do Direito em tarefas de análise, escrita e criação de documentos.

## Sobre o Projeto

Este repositório contém **47 prompts** organizados em três categorias, todos seguindo o framework **P.O.E.M.A.** (Persona, Objetivo, Estilo, Modelo, Adicionais) — uma metodologia inspirada nas melhores práticas da Anthropic para engenharia de prompts.

## Como Usar

### 1. Escolha o prompt adequado
Navegue pelo índice abaixo e escolha o prompt que melhor atende sua necessidade.

### 2. Copie o conteúdo
Abra o arquivo `.md` e copie o conteúdo completo do prompt.

### 3. Cole no Claude
Cole o prompt no início da conversa com o Claude (ou outro LLM compatível).

### 4. Forneça os documentos
Anexe os documentos necessários conforme indicado no campo `uso` do prompt.

### 5. Siga as instruções
Alguns prompts requerem indicações adicionais (ex: resultado da sentença, perspectiva desejada).

---

## Índice de Prompts

### 🔍 Análise (17 prompts)

Extraem informações estruturadas de documentos jurídicos.

#### Metodologias de Análise
| | Prompt | Descrição |
|---|--------|-----------|
| 📊 | [firac.md](prompts/analise/firac.md) | Análise FIRAC+ completa |
| 📊 | [firac-2grau.md](prompts/analise/firac-2grau.md) | FIRAC+ recursal (sentença × razões) |
| 🔎 | [superfirac.md](prompts/analise/superfirac.md) | SUPER FIRAC exaustivo (mín. 50 páginas) |
| ⚗️ | [analise-probatoria-causal.md](prompts/analise/analise-probatoria-causal.md) | Inferência causal (Judea Pearl) |
| 🧩 | [analise-probatoria-haack.md](prompts/analise/analise-probatoria-haack.md) | Foundherentismo (Susan Haack) |
| ⚡ | [smart-brevity.md](prompts/analise/smart-brevity.md) | Síntese Smart Brevity |
| 🎭 | [hackear-estilo.md](prompts/analise/hackear-estilo.md) | Extrai estilo e gera prompt replicador |

#### Análise para Defesa/Recurso
| | Prompt | Descrição |
|---|--------|-----------|
| 🛡️ | [contestacao-civel.md](prompts/analise/contestacao-civel.md) | Estratégia para contestação |
| ⬆️ | [sentenca-apelacao.md](prompts/analise/sentenca-apelacao.md) | Sentença para fins de apelação |
| 📝 | [embargos-declaracao.md](prompts/analise/embargos-declaracao.md) | Embargos (visão do julgador) |
| 📝 | [embargos-declaracao-advogado.md](prompts/analise/embargos-declaracao-advogado.md) | Embargos (visão do advogado) |

#### Análise Penal
| | Prompt | Descrição |
|---|--------|-----------|
| 🔎 | [inquerito-penal.md](prompts/analise/inquerito-penal.md) | Inquérito para denúncia (perspectiva MP) |
| ⚖️ | [recebimento-denuncia.md](prompts/analise/recebimento-denuncia.md) | Recebimento de denúncia (perspectiva Juiz) |

#### Análise Acadêmica e Conteúdo
| | Prompt | Descrição |
|---|--------|-----------|
| 📚 | [texto-academico.md](prompts/analise/texto-academico.md) | Texto acadêmico na voz do autor |
| 🎙️ | [podcast.md](prompts/analise/podcast.md) | Preparação para podcast |
| ⚖️ | [precedente.md](prompts/analise/precedente.md) | Precedente judicial |
| 💀 | [critica-matadora.md](prompts/analise/critica-matadora.md) | Crítica devastadora |

---

### ✍️ Escrita (16 prompts)

Elaboram documentos jurídicos com formato específico.

#### Pronunciamento Judicial (Magistrado)
| | Prompt | Descrição |
|---|--------|-----------|
| 🔨 | [pronunciamento-judicial.md](prompts/escrita/pronunciamento-judicial.md) | Canivete suíço: sentença, decisão, despacho, embargos, acórdão |

#### Relatórios e Ementas
| | Prompt | Descrição |
|---|--------|-----------|
| 📋 | [relatorio-inicial.md](prompts/escrita/relatorio-inicial.md) | Relatório da petição inicial |
| 📋 | [relatorio-1grau-civel.md](prompts/escrita/relatorio-1grau-civel.md) | Relatório completo 1º grau |
| 🏷️ | [ementa-cnj.md](prompts/escrita/ementa-cnj.md) | Ementa padrão CNJ |
| 🏷️ | [ementa-tradicional.md](prompts/escrita/ementa-tradicional.md) | Ementa tradicional |

#### Peças Cíveis (Fluxo Processual)
| | Prompt | Descrição |
|---|--------|-----------|
| 📄 | [peticao-inicial.md](prompts/escrita/peticao-inicial.md) | Petição inicial cível |
| 🛡️ | [contestacao.md](prompts/escrita/contestacao.md) | Contestação cível |
| ↩️ | [replica.md](prompts/escrita/replica.md) | Réplica à contestação |
| ⚖️ | [despacho-saneador.md](prompts/escrita/despacho-saneador.md) | Decisão de saneamento |
| ⚖️ | [minuta-sentenca.md](prompts/escrita/minuta-sentenca.md) | Sentença cível |
| ⬆️ | [apelacao.md](prompts/escrita/apelacao.md) | Recurso de apelação |
| 📝 | [embargos-declaracao.md](prompts/escrita/embargos-declaracao.md) | Decisão em embargos de declaração |

#### Peças Penais
| | Prompt | Descrição |
|---|--------|-----------|
| ⚔️ | [denuncia.md](prompts/escrita/denuncia.md) | Denúncia criminal |
| ⚖️ | [sentenca-penal.md](prompts/escrita/sentenca-penal.md) | Sentença criminal |

#### Utilitários
| | Prompt | Descrição |
|---|--------|-----------|
| 📖 | [fatos-storytelling.md](prompts/escrita/fatos-storytelling.md) | Fatos com narrativa |
| 🤖 | [humanizar-texto.md](prompts/escrita/humanizar-texto.md) | Anti-detector IA |

---

### 🎨 Criação (14 prompts)

Produzem conteúdo criativo com flexibilidade.

#### Metaprompts e Pesquisa
| | Prompt | Descrição |
|---|--------|-----------|
| 🔬 | [deep-research.md](prompts/criacao/deep-research.md) | Pesquisa profunda estruturada com síntese crítica |
| 🏭 | [metaprompt-analise.md](prompts/criacao/metaprompt-analise.md) | Gera prompts de análise P.O.E.M.A. sob demanda |
| 🏭 | [metaprompt-escrita.md](prompts/criacao/metaprompt-escrita.md) | Gera prompts de escrita com placeholders |

#### Audiência e Perícia
| | Prompt | Descrição |
|---|--------|-----------|
| 🎯 | [cross-examination.md](prompts/criacao/cross-examination.md) | Perguntas adversariais (estilo americano) |
| 💬 | [perguntas-audiencia.md](prompts/criacao/perguntas-audiencia.md) | Perguntas para audiência (busca da verdade) |
| 🔬 | [quesitos-periciais.md](prompts/criacao/quesitos-periciais.md) | Quesitos periciais |
| 🎤 | [sustentacao-oral.md](prompts/criacao/sustentacao-oral.md) | Sustentação oral |

#### Legislativo
| | Prompt | Descrição |
|---|--------|-----------|
| 📜 | [projeto-lei.md](prompts/criacao/projeto-lei.md) | Projeto de lei |

#### Conteúdo Visual
| | Prompt | Descrição |
|---|--------|-----------|
| 🖼️ | [prompt-imagem.md](prompts/criacao/prompt-imagem.md) | Prompts de imagem |
| 🎨 | [metafora-visual-jaen.md](prompts/criacao/metafora-visual-jaen.md) | Metáforas visuais (estilo Javier Jaén) |
| 📱 | [carrossel-juridico.md](prompts/criacao/carrossel-juridico.md) | Carrossel Instagram |

#### Desenvolvimento Pessoal
| | Prompt | Descrição |
|---|--------|-----------|
| 🏛️ | [arquiteto-vida-integrada.md](prompts/criacao/arquiteto-vida-integrada.md) | Sistema conversacional de planejamento de vida (L-OS 2025) |
| ⏱️ | [design-vida-recompra-tempo.md](prompts/criacao/design-vida-recompra-tempo.md) | Facilitador focado em qualidade de vida e recuperação de tempo |

#### Escrita Literária
| | Prompt | Descrição |
|---|--------|-----------|
| ✒️ | [cronica-verissimo.md](prompts/criacao/cronica-verissimo.md) | Crônicas no estilo de Luís Fernando Veríssimo |

---

## Framework P.O.E.M.A.

> 📘 **Guia Completo:** Consulte o [Cheat Sheet P.O.E.M.A.](cheat-sheet-poema.md) para orientações detalhadas sobre cada componente do framework.

Todos os prompts seguem esta estrutura:

```
┌─────────────────────────────────────────┐
│  <persona>                              │
│  Quem o modelo deve ser                 │
├─────────────────────────────────────────┤
│  <objetivo>                             │
│  O que deve fazer                       │
├─────────────────────────────────────────┤
│  <estilo>                               │
│  Como deve escrever                     │
├─────────────────────────────────────────┤
│  <modelo>                               │
│    <formato_saida>                      │
│    Estrutura do output                  │
│    </formato_saida>                     │
│  </modelo>                              │
├─────────────────────────────────────────┤
│  <adicionais>                           │
│  Guardrails, checklists, tabelas        │
└─────────────────────────────────────────┘
```

### Tipos de Prompts

| Tipo | Rigidez | Quando Usar |
|------|---------|-------------|
| **Análise** | Rígido | Extrair informações estruturadas de documentos |
| **Escrita** | Rígido | Gerar documentos com formato específico |
| **Criação** | Flexível | Produzir conteúdo criativo ou adaptável |

---

## Boas Práticas

### Ao usar prompts de Escrita
1. Forneça documentos completos (não resumos)
2. Indique o resultado desejado quando solicitado
3. Revise sempre o documento gerado antes de usar
4. Verifique dados, datas e nomes

### Ao usar prompts de Análise
1. Anexe todos os documentos relevantes
2. Informe se há documentos faltantes
3. Use a análise como ponto de partida, não como conclusão final

### Ao usar prompts de Criação
1. Forneça contexto suficiente
2. Indique preferências (tom, estilo, público)
3. Solicite variações se necessário

---

## Estrutura do Repositório

```
prompt-juridico/
├── CLAUDE.md                    # Instruções para Claude Code
├── README.md                    # Este arquivo
├── cheat-sheet-poema.md         # Guia de referência do framework
└── prompts/
    ├── analise/                 # 17 prompts de análise
    │   ├── firac.md
    │   ├── firac-2grau.md
    │   ├── superfirac.md
    │   ├── analise-probatoria-causal.md
    │   ├── analise-probatoria-haack.md
    │   ├── embargos-declaracao.md
    │   ├── embargos-declaracao-advogado.md
    │   ├── texto-academico.md
    │   ├── podcast.md
    │   ├── precedente.md
    │   ├── critica-matadora.md
    │   ├── inquerito-penal.md
    │   ├── recebimento-denuncia.md
    │   ├── smart-brevity.md
    │   ├── contestacao-civel.md
    │   ├── sentenca-apelacao.md
    │   └── hackear-estilo.md
    ├── escrita/                 # 16 prompts de escrita
    │   ├── relatorio-inicial.md
    │   ├── relatorio-1grau-civel.md
    │   ├── ementa-cnj.md
    │   ├── ementa-tradicional.md
    │   ├── fatos-storytelling.md
    │   ├── humanizar-texto.md
    │   ├── peticao-inicial.md
    │   ├── contestacao.md
    │   ├── replica.md
    │   ├── despacho-saneador.md
    │   ├── minuta-sentenca.md
    │   ├── apelacao.md
    │   ├── embargos-declaracao.md
    │   ├── sentenca-penal.md
    │   ├── denuncia.md
    │   └── pronunciamento-judicial.md
    └── criacao/                 # 14 prompts de criação
        ├── deep-research.md
        ├── metaprompt-analise.md
        ├── metaprompt-escrita.md
        ├── cross-examination.md
        ├── perguntas-audiencia.md
        ├── projeto-lei.md
        ├── quesitos-periciais.md
        ├── sustentacao-oral.md
        ├── prompt-imagem.md
        ├── metafora-visual-jaen.md
        ├── carrossel-juridico.md
        ├── arquiteto-vida-integrada.md
        ├── design-vida-recompra-tempo.md
        └── cronica-verissimo.md
```

---

## Avisos Importantes

> **Disclaimer**: Os prompts deste repositório são ferramentas de apoio. Os documentos gerados devem ser revisados por profissional habilitado antes de qualquer uso oficial. O usuário é integralmente responsável pelo conteúdo final.

> **Fidelidade Documental**: Prompts de escrita exigem que o modelo use APENAS dados dos documentos fornecidos. Lacunas são marcadas com `[NÃO CONSTA NOS AUTOS]`.

> **Privacidade**: Não inclua dados reais de processos ou clientes ao testar ou compartilhar prompts.

---

## Contribuindo

Para adicionar novos prompts:

1. Siga o framework P.O.E.M.A.
2. Inclua YAML frontmatter (`name`, `description`, `tipo`, `uso`)
3. Adicione guardrails de fidelidade
4. Inclua checklist de qualidade
5. Teste com caso real antes de finalizar
6. Atualize este README com o novo prompt

---

## Licença

Este projeto é disponibilizado para uso educacional e profissional. Consulte o arquivo LICENSE para detalhes.

---

## Contato

Para sugestões, correções ou novos prompts, abra uma issue ou pull request.
