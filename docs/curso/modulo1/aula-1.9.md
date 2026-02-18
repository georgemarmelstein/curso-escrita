# 1.9 Multimodalidade

**Módulo:** 1 - Fundamentos dos LLMs
**Tempo estimado:** 25 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Entender o que é multimodalidade em LLMs
- Conhecer as modalidades suportadas (texto, imagem, áudio, dados)
- Aplicar análise de imagens em contexto jurídico
- Identificar limitações de cada modalidade

---

## Por que Importa

**Para profissionais do Direito:**
- Análise de documentos escaneados e fotos
- Transcrição de áudios de audiências
- Processamento de dados de planilhas
- Análise de evidências visuais

---

## Base Conceitual

### O que é Multimodalidade?

> Capacidade de processar e gerar múltiplas **modalidades** de informação além de texto puro.

### Modalidades Suportadas

```
┌─────────────────────────────────────────────────────────────┐
│                    MODALIDADES DOS LLMs                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📝 TEXTO                                                   │
│     └── Entrada e saída textual                             │
│     └── Modalidade principal                                │
│                                                             │
│  🖼️ IMAGEM                                                  │
│     └── Análise de imagens (input)                          │
│     └── Geração de imagens (alguns modelos)                 │
│     └── OCR de documentos                                   │
│                                                             │
│  🔊 ÁUDIO                                                   │
│     └── Transcrição (speech-to-text)                        │
│     └── Análise de áudio                                    │
│     └── Geração de voz (alguns modelos)                     │
│                                                             │
│  📊 DADOS                                                   │
│     └── Análise de planilhas                                │
│     └── Processamento de CSV/Excel                          │
│     └── Gráficos e visualizações                            │
│                                                             │
│  🔧 FERRAMENTAS                                             │
│     └── Busca web                                           │
│     └── Execução de código                                  │
│     └── APIs externas                                       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Aplicações Jurídicas

| Modalidade | Aplicação Jurídica |
|------------|-------------------|
| **Imagem** | Análise de documentos escaneados, fotos de evidências |
| **Áudio** | Transcrição de audiências, análise de gravações |
| **Dados** | Análise de planilhas financeiras, cálculos |
| **Ferramentas** | Busca de jurisprudência, verificação de leis |

### Limitações por Modalidade

| Modalidade | Limitações |
|------------|------------|
| **Imagem** | Pode errar em textos pequenos, não "vê" detalhes finos |
| **Áudio** | Qualidade afeta transcrição, sotaques podem confundir |
| **Dados** | Tabelas muito grandes podem ser truncadas |

---

## Exercício Prático

### Tarefa 1: Análise de Imagem

**Passo a passo:**
1. Tire foto de um documento jurídico (ou use um PDF escaneado)
2. Anexe ao Claude
3. Peça: `Extraia todas as informações relevantes deste documento.`

**O que observar:**
- O modelo consegue ler o texto?
- Identifica estrutura (partes, data, assinaturas)?
- Comete erros em palavras específicas?

### Tarefa 2: Análise de Dados

**Passo a passo:**
1. Crie ou use uma planilha simples (CSV ou Excel)
2. Anexe ao Claude
3. Peça: `Analise estes dados e identifique padrões.`

**O que observar:**
- O modelo entende a estrutura da tabela?
- Faz cálculos corretamente?
- Gera visualizações (se pedido)?

### Tarefa 3: Testar Limites

**Passo a passo:**
```
Anexe uma imagem com texto pequeno ou de baixa qualidade.
Peça para transcrever.

Observe onde o modelo erra.
Isso ajuda a calibrar expectativas.
```

### Checklist de Verificação

```
[ ] Testei análise de imagem
[ ] Testei análise de dados
[ ] Identifiquei limitações na modalidade que mais uso
[ ] Sei quando usar cada modalidade
```

---

## Dicas e Armadilhas

### Dica
> Para documentos escaneados, prefira PDFs de boa qualidade. Imagens de baixa resolução geram erros de OCR que propagam para a análise.

### Dica 2
> Ao analisar planilhas grandes, divida em partes menores ou peça análise específica de colunas/linhas relevantes.

### Armadilha
> **"O modelo vê a imagem como eu vejo."**
>
> Não! O modelo processa imagens de forma diferente:
> - Pode não "ver" detalhes pequenos
> - Pode confundir caracteres similares
> - Sempre verifique dados críticos manualmente

### Armadilha 2
> **"Posso confiar na transcrição de áudio."**
>
> Transcrições podem ter erros, especialmente com:
> - Sotaques fortes
> - Múltiplas vozes sobrepostas
> - Áudio de baixa qualidade
> - Termos técnicos jurídicos

---

## Recursos

### Formatos Suportados pelo Claude

```
IMAGENS: PNG, JPG, GIF, WebP
DOCUMENTOS: PDF, TXT, DOC, DOCX
DADOS: CSV, Excel
ÁUDIO: MP3, WAV, M4A (via transcrição)
```

### Melhores Práticas

| Modalidade | Melhor Prática |
|------------|----------------|
| Imagem | Alta resolução, boa iluminação |
| PDF | Texto selecionável (não apenas imagem) |
| Dados | Estrutura clara, headers nas colunas |
| Áudio | Qualidade de gravação adequada |

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE DA AULA                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  MULTIMODALIDADE                                            │
│  → LLMs modernos processam texto, imagem, áudio, dados      │
│  → Cada modalidade tem aplicações jurídicas específicas     │
│                                                             │
│  APLICAÇÕES JURÍDICAS                                       │
│  → Imagem: documentos escaneados, evidências                │
│  → Áudio: transcrição de audiências                         │
│  → Dados: análise de planilhas financeiras                  │
│                                                             │
│  LIMITAÇÕES                                                 │
│  → Cada modalidade tem pontos cegos                         │
│  → Sempre verifique dados críticos                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Agora que você conhece as modalidades, a próxima pergunta é: como usar LLMs de forma efetiva no dia a dia?

→ Próxima: **[1.10 Modos de Uso dos LLMs](./aula-1.10.md)**
