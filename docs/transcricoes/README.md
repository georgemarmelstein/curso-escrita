# Transcrições dos Slides do Curso

**Curso:** Escrita com LLMs
**Autor:** George Marmelstein
**Data de Compilação:** 11 de fevereiro de 2026

---

## Estrutura

```
transcricoes/
├── README.md (este arquivo)
├── imagens/                            (206 imagens extraídas)
│   ├── README.md
│   ├── METADADOS.yaml                  (descrições de todas as imagens)
│   ├── modulo1/
│   │   └── aula-01/ ... aula-13/
│   └── modulo2/
│       └── aula-01/ ... aula-06/
│
├── modulo1-fundamentos-llms/
│   ├── README.md
│   ├── aula-01-maquinas-de-transformacao.md
│   ├── aula-02-o-jogo-da-adivinhacao.md
│   ├── aula-03-a-janela-de-contexto.md
│   ├── aula-04-o-conhecimento-da-maquina.md
│   ├── aula-05-como-treinar-um-llm.md
│   ├── aula-06-alucinacoes.md
│   ├── aula-07-hhh-alinhamento-etico.md
│   ├── aula-08-habilidades-emergentes.md
│   ├── aula-09-multimodalidade.md
│   ├── aula-10-modos-de-uso-dos-llms.md
│   ├── aula-11-rag-e-logica-dos-anexos.md
│   ├── aula-12-introducao-ao-mundo-dos-agentes.md
│   └── aula-13-10-mandamentos-para-dominar-os-llms.md
│
└── modulo2-engenharia-prompt/
    ├── README.md
    ├── aula-01-introducao-a-engenharia-de-prompt.md
    ├── aula-02-fundamentos-de-engenharia-de-prompt.md
    ├── aula-03-fundamentos-parte-2.md
    ├── aula-04-tecnicas-basicas-de-vibe-prompting.md
    ├── aula-05-os-tres-desafios-da-engenharia-de-prompt.md
    └── aula-06-o-fascinante-prompt-de-sistema-da-anthropic.md
```

---

## Módulos

### [Módulo 1 - Fundamentos dos LLMs](modulo1-fundamentos-llms/README.md)

**Objetivo:** Construir uma base sólida de compreensão sobre o que são, como funcionam e quais são as capacidades e limitações dos Large Language Models.

| Total de Aulas | Total de Slides |
|----------------|-----------------|
| 13 | 89 |

**Temas abordados:**
- Arquitetura Transformer e predição de tokens
- Janela de contexto e fontes de conhecimento
- Treinamento (pré-treino, fine-tuning, RLHF)
- Alucinações e alinhamento ético (HHH)
- Habilidades emergentes e multimodalidade
- Modos de uso, RAG e agentes

### [Módulo 2 - Engenharia de Prompt](modulo2-engenharia-prompt/README.md)

**Objetivo:** Desenvolver competências práticas e teóricas em engenharia de prompt para comunicar eficientemente com LLMs.

| Total de Aulas | Total de Slides |
|----------------|-----------------|
| 6 | 25 |

**Temas abordados:**
- Três modalidades de prompt (Vibe, Estruturado, Agêntico)
- Fundamentos: LLM como máquina obediente
- Técnicas de Vibe Prompting
- Os três desafios: dirigibilidade, conhecimento, estilo
- Análise do prompt de sistema da Anthropic

---

## Estatísticas Gerais

| Métrica | Valor |
|---------|-------|
| **Total de Módulos** | 2 |
| **Total de Aulas** | 19 |
| **Total de Slides** | 114 |

---

## Formato das Transcrições

Cada arquivo de transcrição segue o formato:

```markdown
# Aula X - Título da Aula

**Módulo:** X - Nome do Módulo
**Autor:** George Marmelstein
**Total de slides:** X

---

## Slide 1 - Título do Slide

Conteúdo do slide...

---

## Slide 2 - Título do Slide

Conteúdo do slide...
```

---

## Arquivos Originais

Os arquivos PowerPoint originais estão localizados em:

- `docs/modulo1-slides/` - Slides do Módulo 1
- `docs/modulo2-slides/` - Slides do Módulo 2

---

## Imagens Extraídas

As **206 imagens** dos slides foram extraídas e organizadas na pasta `imagens/`:

| Módulo | Imagens |
|--------|---------|
| Módulo 1 | 139 |
| Módulo 2 | 67 |
| **Total** | **206** |

O arquivo `imagens/METADADOS.yaml` contém descrições detalhadas de cada imagem, incluindo:
- Descrição visual do conteúdo
- Contexto de uso no slide (capa, conceito, exemplo, etc.)

Consulte [`imagens/README.md`](imagens/README.md) para mais detalhes.

---

## Observações

1. **Imagens:** As imagens foram extraídas e estão disponíveis em `imagens/`. Referências nos slides foram indicadas como `*(Slide visual/imagem)*` nas transcrições de texto.

2. **Notas do Apresentador:** As notas de aula foram incluídas quando relevantes, indicadas com `*Nota:*`.

3. **Formatação:** O conteúdo foi convertido para Markdown, mantendo a estrutura hierárquica dos slides originais.

4. **Nomenclatura:** Os arquivos seguem a convenção kebab-case conforme CLAUDE.md do projeto.
