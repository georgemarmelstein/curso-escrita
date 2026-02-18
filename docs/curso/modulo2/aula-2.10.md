# 2.10 YAML Frontmatter

**Módulo:** 2 - Engenharia de Prompt
**Bloco:** Técnicas Avançadas
**Tempo estimado:** 20 minutos

---

## Objetivos

Ao final desta aula, você será capaz de:
- Usar YAML frontmatter para configurar prompts
- Separar metadados de conteúdo
- Criar prompts reutilizáveis e parametrizados
- Organizar prompts como templates profissionais

---

## Por que Importa

**Para profissionais do Direito:**
- Prompts parametrizados são reutilizáveis
- Metadados facilitam organização e busca
- Configurações separadas permitem ajustes rápidos

**Princípio:**
> YAML frontmatter transforma prompts em templates configuráveis.

---

## Base Conceitual

### O que é YAML Frontmatter?

Frontmatter é um bloco de metadados no início de um documento, delimitado por `---`.

```yaml
---
nome: Análise FIRAC
versao: 1.2
tipo: analise
autor: George Marmelstein
---

[Conteúdo do prompt aqui]
```

### Anatomia do Frontmatter

```yaml
---
# IDENTIFICAÇÃO
nome: "Nome do Prompt"
versao: "1.0"
tipo: "analise|escrita|criacao|pesquisa"

# CONFIGURAÇÃO
modelo: "claude-3-opus"
temperatura: 0.3
max_tokens: 4000

# PARÂMETROS
parametros:
  documento: "[INSERIR DOCUMENTO]"
  parte: "autor|reu"
  area: "[ÁREA DO DIREITO]"

# METADADOS
tags: [firac, analise, jurídico]
criado_em: 2025-01-15
atualizado_em: 2025-02-10
---
```

### Benefícios do Frontmatter

```
┌─────────────────────────────────────────────────────────────┐
│  VANTAGENS DO YAML FRONTMATTER                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. ORGANIZAÇÃO                                             │
│     → Metadados separados do conteúdo                       │
│     → Fácil encontrar e filtrar prompts                     │
│                                                             │
│  2. REUTILIZAÇÃO                                            │
│     → Parâmetros substituíveis                              │
│     → Mesmo prompt para casos diferentes                    │
│                                                             │
│  3. VERSIONAMENTO                                           │
│     → Controle de versões claro                             │
│     → Histórico de alterações                               │
│                                                             │
│  4. CONFIGURAÇÃO                                            │
│     → Ajustes sem modificar conteúdo                        │
│     → Temperatura, modelo, tokens                           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Tipos de Campos

| Campo | Tipo | Exemplo |
|-------|------|---------|
| `nome` | string | "Análise FIRAC" |
| `versao` | string | "1.2.0" |
| `tags` | lista | [firac, civil, danos] |
| `parametros` | objeto | documento: "..." |
| `ativo` | boolean | true |

---

## Exercício Prático

### Tarefa
Criar frontmatter para 3 prompts diferentes.

### Passo a Passo

**1. Prompt de Análise:**

```yaml
---
nome: "Análise FIRAC - Responsabilidade Civil"
versao: "2.1"
tipo: "analise"
autor: "Seu Nome"

configuracao:
  rigidez: "alta"
  metodologia: "firac"

parametros:
  documento: "[INSERIR PETIÇÃO INICIAL]"
  area_direito: "responsabilidade civil"
  foco: "danos morais"

tags: [firac, analise, danos-morais, civil]
criado_em: 2025-02-01
---

# Prompt de Análise FIRAC

## Persona
Você é um analista jurídico especializado em {{area_direito}}.

## Objetivo
Analise o documento abaixo usando metodologia FIRAC,
com foco em {{foco}}.

## Documento
<documento>
{{documento}}
</documento>

[Restante do prompt...]
```

**2. Prompt de Escrita:**

```yaml
---
nome: "Redação de Contestação"
versao: "1.5"
tipo: "escrita"

configuracao:
  rigidez: "alta"
  formato: "peça processual"

parametros:
  dados_cliente: "[QUALIFICAÇÃO DO RÉU]"
  dados_autor: "[QUALIFICAÇÃO DO AUTOR]"
  processo: "[NÚMERO DO PROCESSO]"
  vara: "[VARA E COMARCA]"
  tese_defesa: "[PRINCIPAIS TESES]"

tags: [contestacao, defesa, processual]
---

# Prompt de Contestação

## Dados do Processo
- Processo: {{processo}}
- Vara: {{vara}}
- Réu: {{dados_cliente}}
- Autor: {{dados_autor}}

## Teses de Defesa
{{tese_defesa}}

[Restante do prompt...]
```

**3. Prompt de Pesquisa:**

```yaml
---
nome: "Pesquisa Jurisprudencial"
versao: "1.0"
tipo: "pesquisa"

configuracao:
  rigidez: "baixa"
  busca_web: true

parametros:
  tema: "[TEMA DA PESQUISA]"
  tribunal: "STJ|STF|TRF"
  periodo: "últimos 5 anos"
  quantidade: 5

tags: [pesquisa, jurisprudencia]
---

# Pesquisa de Jurisprudência

## Parâmetros
- Tema: {{tema}}
- Tribunal: {{tribunal}}
- Período: {{periodo}}
- Quantidade: {{quantidade}} decisões

[Restante do prompt...]
```

### Checklist de Verificação

```
[ ] Criei frontmatter para cada prompt
[ ] Identifiquei parâmetros substituíveis
[ ] Adicionei tags relevantes
[ ] Incluí versão e data
```

---

## Dicas e Armadilhas

### Dica
> Use placeholders consistentes: `{{parametro}}` ou `[PARAMETRO]`. Escolha um padrão e mantenha em todos os prompts.

### Dica 2
> Organize prompts em pastas por tipo:
> ```
> prompts/
> ├── analise/
> │   └── firac-danos-morais.md
> ├── escrita/
> │   └── contestacao.md
> └── pesquisa/
>     └── jurisprudencia.md
> ```

### Armadilha
> **"Frontmatter complicado demais."**
>
> Comece simples: nome, versão, tipo, tags.
> Adicione campos conforme a necessidade.

### Armadilha 2
> **"Esquecer de atualizar versão."**
>
> Sempre incremente a versão ao modificar o prompt.
> Isso evita confusão sobre qual versão está em uso.

---

## Templates Prontos

### Frontmatter Mínimo
```yaml
---
nome: "Nome do Prompt"
tipo: "analise|escrita|criacao|pesquisa"
versao: "1.0"
tags: [tag1, tag2]
---
```

### Frontmatter Completo
```yaml
---
# Identificação
nome: "Nome Descritivo do Prompt"
descricao: "Breve descrição do propósito"
versao: "1.0.0"
tipo: "analise"
autor: "Nome do Autor"

# Configuração Técnica
configuracao:
  modelo_recomendado: "claude-3-opus"
  temperatura: 0.3
  max_tokens: 4000
  rigidez: "alta"

# Parâmetros Substituíveis
parametros:
  param1: "[DESCRIÇÃO DO PARÂMETRO]"
  param2: "[DESCRIÇÃO DO PARÂMETRO]"

# Organização
tags: [tag1, tag2, tag3]
categoria: "jurídico/civil/danos"
relacionados: [prompt-relacionado-1, prompt-relacionado-2]

# Controle
criado_em: 2025-01-01
atualizado_em: 2025-02-10
status: "ativo|rascunho|depreciado"
---
```

---

## Síntese

```
┌─────────────────────────────────────────────────────────────┐
│  SÍNTESE: YAML FRONTMATTER                                  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  O QUE É:                                                   │
│  → Bloco de metadados no início do prompt                   │
│  → Delimitado por ---                                       │
│  → Formato YAML (chave: valor)                              │
│                                                             │
│  CAMPOS ESSENCIAIS:                                         │
│  → nome: identificação do prompt                            │
│  → versao: controle de alterações                           │
│  → tipo: categoria (análise, escrita, etc.)                 │
│  → parametros: valores substituíveis                        │
│  → tags: organização e busca                                │
│                                                             │
│  BENEFÍCIOS:                                                │
│  → Organização profissional                                 │
│  → Reutilização facilitada                                  │
│  → Versionamento claro                                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Conexão

Com prompts organizados via frontmatter, o próximo passo é aprender a criar prompts que geram outros prompts: metaprompts.

→ Próxima: **[2.11 Metaprompts](./aula-2.11.md)**
