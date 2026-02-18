# Módulo 1 - Fundamentos dos LLMs

> **Propósito:** Construir base sólida de compreensão sobre como LLMs funcionam
> **Metáfora Central:** O LLM como "Artista Impressionista"
> **Método:** Cada conceito é demonstrado com exercícios práticos

---

## Visão Geral

Este módulo responde à pergunta fundamental: **Como LLMs funcionam?**

Você aprenderá que LLMs são máquinas probabilísticas que:
- Transformam texto (não reproduzem)
- Geram uma palavra por vez
- Têm limites de contexto e conhecimento
- Podem alucinar e errar
- Possuem capacidades emergentes

---

## Objetivos do Módulo

1. Compreender a natureza probabilística/estocástica dos LLMs
2. Entender o processo de geração token a token
3. Reconhecer e mitigar alucinações
4. Dominar a janela de contexto e suas limitações
5. Diferenciar fontes de conhecimento (paramétrico vs externo)
6. Conhecer RAG e sistemas agênticos

---

## Estrutura das Aulas

### Bloco 1: Fundamentos (Aulas 1-3)
| # | Aula | Síntese |
|---|------|---------|
| 1.1 | [Máquinas de Transformação](./aula-1.1.md) | LLMs não reproduzem, transformam |
| 1.2 | [O Jogo da Adivinhação](./aula-1.2.md) | Predição de tokens, temperatura |
| 1.3 | [A Janela de Contexto](./aula-1.3.md) | Limite de atenção, lost in middle |

### Bloco 2: Treinamento e Conhecimento (Aulas 4-5)
| # | Aula | Síntese |
|---|------|---------|
| 1.4 | [O Conhecimento da Máquina](./aula-1.4.md) | Tipos de conhecimento e fontes |
| 1.5 | [Como Treinar um LLM](./aula-1.5.md) | Pré-treino, fine-tuning, RLHF |

### Bloco 3: Limitações e Ética (Aulas 6-7)
| # | Aula | Síntese |
|---|------|---------|
| 1.6 | [Alucinações](./aula-1.6.md) | Por que inventam e como mitigar |
| 1.7 | [HHH - Alinhamento Ético](./aula-1.7.md) | Helpful, Honest, Harmless |

### Bloco 4: Habilidades Avançadas (Aulas 8-9)
| # | Aula | Síntese |
|---|------|---------|
| 1.8 | [Habilidades Emergentes](./aula-1.8.md) | Capacidades com escala |
| 1.9 | [Multimodalidade](./aula-1.9.md) | Além do texto puro |

### Bloco 5: Aplicações Práticas (Aulas 10-13)
| # | Aula | Síntese |
|---|------|---------|
| 1.10 | [Modos de Uso dos LLMs](./aula-1.10.md) | Recall, RAG, Interativo |
| 1.11 | [RAG e a Lógica dos Anexos](./aula-1.11.md) | Retrieval Augmented Generation |
| 1.12 | [Introdução ao Mundo dos Agentes](./aula-1.12.md) | ReAct, tools, autonomia |
| 1.13 | [10 Mandamentos](./aula-1.13.md) | Síntese e boas práticas |

---

## Progressão Pedagógica

```
FUNDAMENTOS (1-3)     TREINO/CONHEC (4-5)    LIMITAÇÕES (6-7)
      │                      │                     │
      ▼                      ▼                     ▼
┌──────────────┐      ┌──────────────┐       ┌──────────────┐
│ O que são    │ ───► │ De onde vem  │ ────► │ O que dá     │
│ LLMs?        │      │ o conhecim.? │       │ errado?      │
└──────────────┘      └──────────────┘       └──────────────┘
                                                    │
                    ┌───────────────────────────────┘
                    │
                    ▼
HABILIDADES (8-9)         APLICAÇÕES (10-13)
      │                          │
      ▼                          ▼
┌──────────────┐          ┌──────────────┐
│ O que eles   │ ───────► │ Como usar    │
│ conseguem?   │          │ na prática?  │
└──────────────┘          └──────────────┘
```

---

## Síntese: 5 Verdades Fundamentais

```
1. LLMs são MÁQUINAS DE PROBABILIDADE
   → Não "sabem" — calculam o mais provável

2. Toda resposta é um PALPITE ESTATÍSTICO
   → Alucinação não é falha, é característica

3. O CONTEXTO é sua arma principal
   → Quem controla o contexto, controla a máquina

4. Conhecimento tem LIMITES
   → Cutoff temporal, viés frequentista

5. RAG e AGENTES expandem as possibilidades
   → Além do conhecimento paramétrico
```

---

## Metáforas Unificadoras

| Conceito | Metáfora |
|----------|----------|
| LLM | Artista impressionista |
| Parâmetros | Memória de longo prazo |
| Contexto | Memória de trabalho |
| Atenção | Holofote seletivo |
| CoT | Pensar em voz alta |
| RAG | Consultar biblioteca |
| Agente | Assistente com ferramentas |

---

## Recursos do Módulo

### Material Científico
- 200+ papers organizados em `docs/modulo1-slides/Material de Aula/`
- 13 apresentações PowerPoint

### Documentação Complementar
- `DOCUMENTACAO_COMPLETA_MODULO1.md` - Guia aprofundado
- `ESTRUTURA_AULAS_2025.md` - Índice geral

### Transcrições
- `docs/transcricoes/modulo1-fundamentos-llms/` - 13 transcrições

---

## Checklist de Conclusão

- [ ] Entendo que LLMs são máquinas probabilísticas
- [ ] Sei explicar predição de tokens
- [ ] Compreendo limitações de contexto
- [ ] Reconheço tipos de alucinação
- [ ] Conheço os três modos de uso
- [ ] Sei quando usar RAG vs paramétrico
- [ ] Entendo o básico de agentes

---

## Conexão com Próximo Módulo

Com os fundamentos dominados, você está pronto para aprender **como instruir a máquina** no Módulo 2.

→ Próximo: **[Módulo 2 - Engenharia de Prompt](../modulo2/README.md)**
