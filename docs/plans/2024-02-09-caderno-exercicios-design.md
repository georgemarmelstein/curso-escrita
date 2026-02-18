# Design do Caderno de Exercícios Interativo

## Visão Geral

Plataforma web moderna para o curso "Escrita Jurídica com IA", focada em UX sofisticada, didática e acessível para profissionais jurídicos.

## Decisões de Design

| Aspecto | Decisão |
|---------|---------|
| Escopo | Plataforma simples, foco em UX linda, sofisticada e didática |
| Navegação | 5 módulos (0-4) em sidebar expansível |
| Visual | Clássico refinado, fontes serifadas |
| Paleta | Azul #194A68, dourado #BE9C6D, creme #FFF4E4 |
| Idiomas | PT/ES/EN via JSON, conteúdo integral em todas as línguas |
| Stack | HTML + CSS + Vanilla JS, zero dependências |
| Persistência | localStorage para progresso |
| Referência | Site P.O.E.M.A. (C:\Users\georg\prompt-juridico\site) |

## Arquitetura de Arquivos

```
curso-escrita/
├── site/
│   ├── index.html              # Página única (SPA-like)
│   ├── css/
│   │   ├── variables.css       # Design tokens (cores, fontes, espaçamentos)
│   │   ├── base.css            # Reset e estilos base
│   │   ├── layout.css          # Header, sidebar, main content
│   │   ├── components.css      # Cards, tabs, buttons, code blocks
│   │   └── responsive.css      # Mobile/tablet breakpoints
│   ├── js/
│   │   ├── app.js              # Inicialização e roteamento
│   │   ├── i18n.js             # Sistema de internacionalização
│   │   ├── progress.js         # Persistência localStorage
│   │   ├── navigation.js       # Sidebar e módulos
│   │   └── components.js       # Tabs, accordions, copy buttons
│   ├── i18n/
│   │   ├── pt.json             # Português (completo)
│   │   ├── es.json             # Espanhol (estrutura pronta)
│   │   └── en.json             # Inglês (estrutura pronta)
│   └── assets/
│       └── fonts/              # Fontes locais (fallback)
```

## Layout Visual

### Header fixo (72px altura)
- Logo à esquerda: ícone quadrado com bordas arredondadas (gradiente azul #194A68)
- Título: "Escrita Jurídica com IA" em Cormorant Garamond
- Centro: barra de progresso geral (% de exercícios concluídos)
- Direita: seletor de idioma (PT | ES | EN) estilizado como pills discretos

### Sidebar fixa (280px largura)
- Fundo levemente mais quente que o conteúdo (creme #FFF4E4)
- Módulos como seções expansíveis com indicador visual de progresso
- Cada módulo mostra: título + ícone de status (não iniciado / em progresso / concluído)
- Exercícios listados dentro de cada módulo com numeração
- Exercício ativo destacado com borda lateral dourada (#BE9C6D)
- Scroll independente com scrollbar estilizada

### Área principal
- Fundo paper claro (#FAF9F7)
- Largura máxima de conteúdo: 800px, centralizado
- Padding generoso (48px horizontal, 64px vertical)
- Tipografia: Cormorant Garamond para títulos, DM Sans para corpo, JetBrains Mono para código/prompts

### Responsividade
- Tablet (<1024px): sidebar vira drawer lateral com toggle
- Mobile (<768px): navegação por menu hambúrguer, layout single column

## Componentes de Exercício

### 1. Cabeçalho do Exercício
- Badge do módulo (ex: "Módulo 2 · Modos de Uso")
- Número e título em destaque (H1, Cormorant Garamond)
- Indicador de status: checkbox circular que marca conclusão
- Tempo estimado de leitura (calculado automaticamente)

### 2. Card "Objetivo" (borda superior dourada)
- Ícone de alvo
- Texto direto: "Ao final deste exercício, você será capaz de..."
- Lista com 2-3 competências específicas

### 3. Card "Contexto" (fundo levemente azulado)
- Ícone de âncora
- Explica a relevância prática para o profissional jurídico
- Pode incluir citação ou dado estatístico

### 4. Bloco "Conceito"
- Texto corrido com formatação rica
- Suporta: callouts de dica, alerta e info
- Termos técnicos em destaque (tooltip opcional)

### 5. Bloco "Prompt Modelo" (destaque principal)
- Container escuro (ink #0f172a)
- Header com label "Prompt Completo" + botão "Copiar"
- Fonte monospace (JetBrains Mono)
- Syntax highlighting para tags XML e placeholders
- Scroll interno se muito longo, mas preferencialmente visível inteiro

### 6. Card "Exemplo Prático"
- Tabs se houver múltiplos exemplos
- Caso jurídico real com contexto
- Antes/Depois ou Input/Output lado a lado

### 7. Acordeão "Dicas e Erros Comuns"
- Expansível para não poluir visualmente
- Lista com ícones (✓ fazer / ✗ evitar)

### 8. Checklist de Autoavaliação
- Itens clicáveis que persistem no localStorage
- Visual similar ao P.O.E.M.A. (checkbox + texto)
- Quando todos marcados, exercício conta como concluído

### 9. Navegação inferior
- Botões "← Exercício anterior" e "Próximo exercício →"
- Mostra título do próximo exercício

## Estrutura JSON (i18n)

```json
{
  "meta": {
    "lang": "pt-BR",
    "title": "Escrita Jurídica com IA",
    "subtitle": "Caderno de Exercícios Práticos"
  },

  "ui": {
    "progress": "Progresso",
    "copy": "Copiar",
    "copied": "Copiado!",
    "prev": "Exercício anterior",
    "next": "Próximo exercício",
    "expand": "Expandir",
    "collapse": "Recolher",
    "completed": "Concluído",
    "minutes": "min de leitura"
  },

  "modules": [
    {
      "id": "modulo-0",
      "title": "Primeiros Passos",
      "description": "Fundamentos essenciais antes de começar",
      "icon": "foundation",
      "exercises": [...]
    }
  ]
}
```

## Sistema de Progresso

### Estrutura localStorage
```javascript
{
  "version": 1,
  "lang": "pt-BR",
  "lastAccess": "2024-02-09T14:30:00Z",
  "lastExercise": "ex-2-3",
  "exercises": {
    "ex-0-1": {
      "status": "completed",
      "completedAt": "2024-02-08T10:15:00Z",
      "checklist": [true, true, true]
    }
  }
}
```

### Regras de status
- `not_started`: nenhum item do checklist marcado
- `in_progress`: pelo menos 1 item marcado, mas não todos
- `completed`: todos os itens do checklist marcados

### Indicadores visuais na sidebar
- Círculo vazio: não iniciado
- Círculo meio preenchido: em progresso
- Círculo cheio com check: concluído

## Estrutura de Módulos e Exercícios

### Módulo 0 - Primeiros Passos
- 0.1 Privacidade e LGPD
- 0.2 Interface do Claude
- 0.3 Funções Básicas

### Módulo 1 - Fundamentos
- 1.1 Modo Agêntico vs. Conversacional
- 1.2 Contexto e Janela de Atenção
- 1.3 Alucinações e Como Evitá-las
- 1.4 Estocasticidade e Reprodutibilidade
- 1.5 Inversão de Papéis

### Módulo 2 - Modos de Uso
- 2.1 Modo Extrativo
- 2.2 Modo Prompt Estruturado
- 2.3 Modo Anexo de Documentos
- 2.4 Modo Interativo/Conversacional

### Módulo 3 - Técnicas Avançadas
- 3.1 Personas e Especialização
- 3.2 Revisão em Camadas
- 3.3 Estilos de Escrita
- 3.4 Marcadores e Formatação

### Módulo 4 - Produção Jurídica
- 4.1 Framework FIRAC+
- 4.2 Análise de Audiências
- 4.3 Análise Probatória
- 4.4 Relatórios Estruturados
- 4.5 Sentenças e Decisões
- 4.6 Ementas CNJ
- 4.7 Framework P.O.E.M.A.

## Plano de Implementação

### Fase 1 - Fundação
- Criar estrutura de diretórios
- Configurar design tokens
- Implementar estilos base
- Criar HTML estrutural

### Fase 2 - Layout
- Header fixo com progresso
- Sidebar com navegação
- Área principal responsiva
- Breakpoints mobile/tablet

### Fase 3 - Componentes
- Cards e callouts
- Code blocks com copy
- Tabs e accordions
- Checklist interativo

### Fase 4 - Sistema de Dados
- i18n com JSON
- Persistência localStorage
- Renderização dinâmica

### Fase 5 - Conteúdo
- Migrar exercícios existentes
- Integrar prompts P.O.E.M.A.
- Enriquecer cada aula
- Revisão de qualidade

### Fase 6 - Polimento
- Testes de usabilidade
- Acessibilidade
- Performance
- Revisão holística

## Referências

- Caderno atual: `docs/caderno/caderno_exercicios_completo.html`
- Site P.O.E.M.A.: `C:\Users\georg\prompt-juridico\site`
- Documentação Módulo 1: `docs/modulo1-slides/DOCUMENTACAO_COMPLETA_MODULO1.md`
- Documentação Módulo 2: `docs/modulo2-slides/DOCUMENTACAO_COMPLETA_MODULO2.md`
