# Módulo 2 - Engenharia de Prompt

> **Propósito:** Aprender a instruir a máquina com precisão
> **Metodologia Central:** Framework P.O.E.M.A.
> **Natureza:** Caderno de exercícios — mínima teoria, máxima prática

---

## Visão Geral

Este módulo responde à pergunta: **Como instruir LLMs eficientemente?**

Você aprenderá:
- Ferramentas de formatação (Markdown, XML)
- Framework P.O.E.M.A. completo
- Técnicas avançadas (metaprompts, few-shot)
- Aplicação prática no Direito (FIRAC)

---

## Objetivos do Módulo

1. Construir prompts eficazes através da prática
2. Dominar formatação (Markdown, XML tags)
3. Aplicar cada componente do POEMA
4. Criar prompts de análise e escrita funcionais
5. Usar metaprompts para gerar prompts

---

## Estrutura das Aulas

### Bloco 1: Ferramentas Básicas (Aulas 1-3)
| # | Aula | Exercício |
|---|------|-----------|
| 2.1 | [Markdown para Prompts](./aula-2.1.md) | Transformar texto corrido em prompt formatado |
| 2.2 | [Tags XML como Delimitadores](./aula-2.2.md) | Estruturar prompt caótico com tags |
| 2.3 | [Chamando a Atenção do Modelo](./aula-2.3.md) | Reescrever prompt fraco com ênfase |

### Bloco 2: Os 4 Tipos de Prompts (Aula 4)
| # | Aula | Exercício |
|---|------|-----------|
| 2.4 | [Tipos de Prompt](./aula-2.4.md) | Classificar 10 prompts por tipo e rigidez |

### Bloco 3: Framework P.O.E.M.A. (Aulas 5-9)
| # | Aula | Componente | Exercício |
|---|------|------------|-----------|
| 2.5 | [P - Persona](./aula-2.5.md) | Papel + expertise | Criar 3 personas e comparar |
| 2.6 | [O - Objetivo](./aula-2.6.md) | Tarefa + leitura | Transformar objetivo vago em SMART |
| 2.7 | [E - Estilo](./aula-2.7.md) | Tom + anti-viés | Calibrar para 3 públicos |
| 2.8 | [M - Modelo](./aula-2.8.md) | Metodologia + formato | Criar template com placeholders |
| 2.9 | [A - Adicionais](./aula-2.9.md) | Guardrails + checklist | Adicionar proteções |

### Bloco 4: Técnicas Avançadas (Aulas 10-12)
| # | Aula | Exercício |
|---|------|-----------|
| 2.10 | [YAML Frontmatter](./aula-2.10.md) | Criar frontmatter para 3 prompts |
| 2.11 | [Metaprompts](./aula-2.11.md) | Usar metaprompt para criar prompt |
| 2.12 | [Checklist Final](./aula-2.12.md) | Auditar prompt existente |

### Bloco 5: Aplicação Prática (Aulas 13-14)
| # | Aula | Exercício |
|---|------|-----------|
| 2.13 | [Prompt FIRAC Completo](./aula-2.13.md) | Construir FIRAC do zero |
| 2.14 | [Super Dicas](./aula-2.14.md) | Quiz: identificar erros |

---

## Framework P.O.E.M.A.

```
┌─────────────────────────────────────────────────────────────┐
│  P.O.E.M.A. EM UMA LINHA                                    │
├─────────────────────────────────────────────────────────────┤
│  PERSONA   → Quem (papel + expertise)                       │
│  OBJETIVO  → O quê (tarefa + leitura + ferramentas)         │
│  ESTILO    → Como comunica (tom + anti-viés + prefill)      │
│  MODELO    → Como pensa e entrega (metodologia + template)  │
│  ADICIONAIS→ Proteções (guardrails + qualidade + reforços)  │
└─────────────────────────────────────────────────────────────┘
```

---

## Tipos de Prompt (Referência)

| Tipo | Rigidez | Quando Usar |
|------|---------|-------------|
| **Análise** | Rígido | Extrair informações estruturadas |
| **Escrita** | Rígido | Gerar documentos com formato específico |
| **Criação** | Flexível | Produzir conteúdo criativo |
| **Pesquisa** | Flexível | Buscar e sintetizar fontes |

---

## Progressão Pedagógica

```
FERRAMENTAS (1-3)      TIPOS (4)           POEMA (5-9)
      │                   │                    │
      ▼                   ▼                    ▼
┌──────────────┐    ┌──────────────┐    ┌──────────────┐
│ Como formatar│ ─► │ Qual tipo    │ ─► │ Como montar  │
│ o prompt?    │    │ de prompt?   │    │ cada parte?  │
└──────────────┘    └──────────────┘    └──────────────┘
                                               │
                    ┌──────────────────────────┘
                    │
                    ▼
TÉCNICAS (10-12)        APLICAÇÃO (13-14)
      │                      │
      ▼                      ▼
┌──────────────┐       ┌──────────────┐
│ Recursos     │ ────► │ Construir    │
│ avançados    │       │ prompt real  │
└──────────────┘       └──────────────┘
```

---

## Recursos do Módulo

### Prompts Prontos
- `docs/prompt-juridico/prompts/analise/` - Prompts de análise
- `docs/prompt-juridico/prompts/escrita/` - Prompts de escrita
- `docs/prompt-juridico/prompts/criacao/` - Prompts de criação

### Material Científico
- 26 papers em `docs/modulo2-slides/Material de Aula/`
- Surveys, seminais, CoT, técnicas avançadas

### Documentação
- `cheat-sheet-poema.md` - Referência rápida
- `DOCUMENTACAO_COMPLETA_MODULO2.md` - Guia aprofundado

---

## Checklist de Conclusão

- [ ] Domino formatação Markdown e XML
- [ ] Sei classificar prompts por tipo
- [ ] Aplico P.O.E.M.A. consistentemente
- [ ] Uso metaprompts quando apropriado
- [ ] Construí um FIRAC completo
- [ ] Sei identificar erros comuns

---

## Conexão com Próximo Módulo

Com a engenharia de prompt dominada, você está pronto para **técnicas avançadas** no Módulo 3.

→ Próximo: **[Módulo 3 - Aplicações Avançadas](../modulo3/README.md)**
