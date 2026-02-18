# Imagens Extraídas dos Slides

**Curso:** Escrita com LLMs
**Autor:** George Marmelstein
**Data de Extração:** 12 de fevereiro de 2026

---

## Estatísticas

| Métrica | Valor |
|---------|-------|
| **Total de Imagens** | 206 |
| **Módulo 1** | 139 imagens |
| **Módulo 2** | 67 imagens |
| **Formato** | PNG (predominante) |

---

## Estrutura de Pastas

```
imagens/
├── README.md (este arquivo)
├── METADADOS.yaml (descrições de todas as imagens)
│
├── modulo1/
│   ├── aula-01/ (11 imagens) - Máquinas de Transformação
│   ├── aula-02/ (6 imagens)  - O Jogo da Adivinhação
│   ├── aula-03/ (3 imagens)  - A Janela de Contexto
│   ├── aula-04/ (7 imagens)  - O Conhecimento da Máquina
│   ├── aula-05/ (19 imagens) - Como Treinar um LLM
│   ├── aula-06/ (21 imagens) - Alucinações
│   ├── aula-07/ (9 imagens)  - HHH: Alinhamento Ético
│   ├── aula-08/ (8 imagens)  - Habilidades Emergentes
│   ├── aula-09/ (2 imagens)  - Multimodalidade
│   ├── aula-10/ (3 imagens)  - Modos de Uso dos LLMs
│   ├── aula-11/ (10 imagens) - RAG e a Lógica dos Anexos
│   ├── aula-12/ (14 imagens) - Introdução ao Mundo dos Agentes
│   └── aula-13/ (31 imagens) - 10 Mandamentos para Dominar os LLMs
│
└── modulo2/
    ├── aula-01/ (9 imagens)  - Introdução à Engenharia de Prompt
    ├── aula-02/ (10 imagens) - Fundamentos de Engenharia de Prompt
    ├── aula-03/ (3 imagens)  - Fundamentos - Parte 2
    ├── aula-04/ (14 imagens) - Técnicas Básicas de Vibe Prompting
    ├── aula-05/ (6 imagens)  - Os Três Desafios da Engenharia de Prompt
    └── aula-06/ (5 imagens)  - O Fascinante Prompt de Sistema da Anthropic
```

---

## Estilos Visuais Identificados

As imagens do curso seguem uma identidade visual consistente:

### 1. Arte Digital Steampunk
- Paleta predominante: dourado e azul
- Robôs humanoides com detalhes em bronze/ouro
- Engrenagens e circuitos luminosos

### 2. Metáforas Visuais Conceituais
- Cérebros sob redomas de vidro (conhecimento paramétrico)
- Silhuetas caminhando para luz (jornada/transição)
- Balanças e instrumentos de precisão (ética e equilíbrio)

### 3. Screenshots de Papers Científicos
- Artigos de pesquisa referenciados nas aulas
- Fontes acadêmicas sobre prompts emocionais

### 4. Diagramas e Infográficos
- Arquiteturas de sistemas agênticos
- Evolução de modelos e benchmarks
- Componentes do LLM

### 5. Capturas de Conversas
- Exemplos de outputs de chatbots
- Casos de alucinações e acertos

---

## Metadados

O arquivo `METADADOS.yaml` contém descrições detalhadas de cada imagem, incluindo:

- **descricao**: Descrição visual do conteúdo
- **uso**: Contexto de uso no slide (capa, conceito, exemplo, etc.)

### Exemplo de entrada:

```yaml
aula-01:
  image1.png:
    descricao: "Máquina steampunk dourada com engrenagens emitindo luz azul fractal"
    uso: "Slide de capa"
```

---

## Como Usar

### Referenciando Imagens nas Transcrições

Para vincular imagens às transcrições, use o caminho relativo:

```markdown
![Descrição](../imagens/modulo1/aula-01/image1.png)
```

### Buscando Imagens por Tema

Consulte o arquivo `METADADOS.yaml` para encontrar imagens por:
- Conceito (ex: "alucinação", "token", "contexto")
- Tipo visual (ex: "robô", "cérebro", "diagrama")
- Uso (ex: "slide de capa", "exemplo", "citação")

---

## Origem

As imagens foram extraídas dos arquivos PowerPoint originais localizados em:
- `docs/modulo1-slides/*.pptx`
- `docs/modulo2-slides/*.pptx`

A extração foi realizada via descompactação dos arquivos PPTX (formato ZIP) e cópia do conteúdo da pasta `ppt/media/`.

---

## Observações

1. **Numeração**: As imagens são nomeadas como `image1.png`, `image2.png`, etc., na ordem em que aparecem no arquivo PPTX (não necessariamente na ordem dos slides).

2. **Formatos**: A maioria das imagens está em PNG. Alguns arquivos podem ser JPEG ou outros formatos de mídia.

3. **Fundos**: Algumas imagens são elementos de fundo ou decorativos usados em múltiplos slides.

4. **Qualidade**: As imagens mantêm a resolução original dos arquivos PowerPoint.
