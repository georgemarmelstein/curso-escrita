# Módulo 3 - Aplicações Avançadas

> **Propósito:** Técnicas sofisticadas para usuários que dominam os fundamentos
> **Pré-requisito:** Módulos 1 e 2 completos
> **Natureza:** Especialização e maestria

---

## Visão Geral

Este módulo responde à pergunta: **Como dominar LLMs para tarefas complexas?**

Você aprenderá:
- Análises profundas e multicamadas
- Frameworks de análise probatória (Pearl, Haack)
- Criação e uso de meta-prompts
- Sistemas agênticos avançados

---

## Objetivos do Módulo

1. Dominar análises profundas e multicamadas
2. Aplicar frameworks de análise probatória
3. Criar e usar meta-prompts
4. Entender sistemas agênticos avançados
5. Conduzir pesquisa autônoma com LLMs

---

## Estrutura das Aulas

### Bloco 1: Análise Profunda (Aulas 1-3)
| # | Aula | Exercício |
|---|------|-----------|
| 3.1 | [SUPER FIRAC](./aula-3.1.md) | Aplicar em processo complexo |
| 3.2 | [Análise Multicamadas](./aula-3.2.md) | Analisar caso de 3 ângulos |
| 3.3 | [Crítica Sistemática](./aula-3.3.md) | Usar "Crítica Matadora" |

### Bloco 2: Análise Probatória (Aulas 4-6)
| # | Aula | Framework | Exercício |
|---|------|-----------|-----------|
| 3.4 | [Inferência Causal (Pearl)](./aula-3.4.md) | DAGs, contrafactuais | Aplicar Pearl em caso |
| 3.5 | [Foundherentismo (Haack)](./aula-3.5.md) | Crossword puzzle | Aplicar Haack |
| 3.6 | [Síntese Probatória](./aula-3.6.md) | Combinação | Consolidar Pearl + Haack |

### Bloco 3: Meta-Prompts e Automação (Aulas 7-9)
| # | Aula | Exercício |
|---|------|-----------|
| 3.7 | [Meta-Prompts](./aula-3.7.md) | Usar meta-análise |
| 3.8 | [Orquestradores](./aula-3.8.md) | Criar fluxo análise → escrita |
| 3.9 | [Hackear Estilo](./aula-3.9.md) | Capturar estilo de autor |

### Bloco 4: Sistemas Agênticos (Aulas 10-12)
| # | Aula | Exercício |
|---|------|-----------|
| 3.10 | [Introdução a Agentes](./aula-3.10.md) | Experimentar ReAct |
| 3.11 | [RAG Avançado](./aula-3.11.md) | Construir base de conhecimento |
| 3.12 | [Deep Research](./aula-3.12.md) | Usar pesquisa profunda |

---

## Frameworks de Análise Probatória

### Pearl (Inferência Causal)
```
Fatos → DAG (Grafo Acíclico Dirigido) → Contrafactuais → Conclusão

Pergunta-chave: "Se X não tivesse ocorrido, Y teria acontecido?"
```

### Haack (Foundherentismo)
```
Evidências → Coerência → Ancoragem → Grau de Justificação

Metáfora: Palavras cruzadas - cada evidência deve encaixar
```

### Síntese
```
Pearl (causalidade) + Haack (coerência) = Análise Robusta
```

---

## Meta-Prompts Disponíveis

| Meta-Prompt | Propósito | Arquivo |
|-------------|-----------|---------|
| meta-análise | Gerar prompts de análise | `metaprompts/meta-analise.md` |
| meta-pesquisa | Gerar prompts de pesquisa | `metaprompts/meta-pesquisa.md` |
| meta-escrita | Gerar prompts de escrita | `metaprompts/meta-escrita.md` |
| meta-criação | Gerar prompts criativos | `metaprompts/meta-criacao.md` |

---

## Prompts Avançados Disponíveis

### Análise
- `superfirac.md` - Análise exaustiva (50+ páginas)
- `analise-probatoria-causal.md` - Framework Pearl
- `analise-probatoria-haack.md` - Framework Haack
- `critica-matadora.md` - Identificar falhas

### Escrita
- `minuta-sentenca.md` - Elaborar sentença
- `sentenca-penal.md` - Sentença criminal
- `despacho-saneador.md` - Despacho de saneamento

### Criação
- `cross-examination.md` - Perguntas para testemunhas
- `quesitos-periciais.md` - Elaborar quesitos
- `sustentacao-oral.md` - Preparar sustentação

---

## Progressão Pedagógica

```
ANÁLISE PROFUNDA (1-3)    PROBATÓRIA (4-6)     META-PROMPTS (7-9)
      │                        │                     │
      ▼                        ▼                     ▼
┌──────────────┐         ┌──────────────┐      ┌──────────────┐
│ Análises     │ ──────► │ Frameworks   │ ───► │ Automação    │
│ exaustivas   │         │ científicos  │      │ de prompts   │
└──────────────┘         └──────────────┘      └──────────────┘
                                                      │
                              ┌────────────────────────┘
                              │
                              ▼
                       AGENTES (10-12)
                              │
                              ▼
                       ┌──────────────┐
                       │ Autonomia e  │
                       │ pesquisa     │
                       └──────────────┘
```

---

## Recursos do Módulo

### Prompts Especializados
- `docs/prompt-juridico/prompts/` - 44+ prompts prontos
- `docs/prompt-juridico/metaprompts/` - 4 metaprompts

### Material Científico
- Papers sobre agentes em `modulo1-slides/Material de Aula/Aula 12/`
- Papers sobre CoT avançado em `modulo2-slides/`

### Skills (Claude Code)
- `analista-embargabilidade` - Análise de vícios
- `probatica-pearl` - Framework Pearl
- `probatica-haack` - Framework Haack
- `consolidador-probatica` - Síntese

---

## Competências Desenvolvidas

Ao final do módulo, você será capaz de:

1. **Conduzir** análises exaustivas de processos complexos
2. **Aplicar** inferência causal (Pearl) e foundherentismo (Haack)
3. **Criar** meta-prompts para gerar prompts automaticamente
4. **Orquestrar** fluxos multi-etapa de análise e escrita
5. **Utilizar** agentes para tarefas autônomas
6. **Realizar** pesquisa profunda com síntese

---

## Checklist de Conclusão

- [ ] Apliquei SUPER FIRAC em processo real
- [ ] Usei Pearl para análise causal
- [ ] Usei Haack para análise de coerência
- [ ] Criei prompt usando meta-prompt
- [ ] Experimentei fluxo orquestrado
- [ ] Usei modo de pesquisa profunda

---

## Conexão Final

Com o Módulo 3 completo, você domina o uso de LLMs no Direito.

**Próximos passos:**
- Praticar consistentemente
- Criar seus próprios prompts especializados
- Contribuir com a comunidade de prompt jurídico
