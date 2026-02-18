# Checklist de Qualidade de Slides

Validação obrigatória antes de aprovar cada slide.

## Checklist Universal (Todos os Slides)

### Técnico
- [ ] HTML válido, sem erros no console
- [ ] CSS usa variáveis da PALETA SUPER
- [ ] `detectEmbedMode()` implementado
- [ ] Funciona em embed (iframe) e standalone
- [ ] Canvas usa `clientWidth/Height` (não `innerWidth`)
- [ ] Fontes carregam do Google Fonts

### Visual
- [ ] Contraste adequado (texto legível sobre fundo)
- [ ] Overlay vignette aplicado sobre imagens de fundo
- [ ] Tipografia tripartite respeitada (Playfair/Inter/JetBrains)
- [ ] Cores exclusivamente da PALETA SUPER
- [ ] Hierarquia visual clara (título > subtítulo > corpo)

### Pedagógico
- [ ] Propósito claro: MOSTRAR, TOPIFICAR ou CITAR
- [ ] NÃO tem texto que o professor DIRIA
- [ ] Densidade apropriada (não mais que 7 elementos)
- [ ] Animações < 1s (não atrapalham ritmo)

### Interatividade (se aplicável)
- [ ] Navegação por clique funciona
- [ ] Navegação por teclado (setas, espaço) funciona
- [ ] Nav dots indicadores presentes e funcionais
- [ ] Estados visuais claros (hover, active, highlighted)

## Checklists por Tipo de Slide

### CAPA
- [ ] Título em Playfair Display
- [ ] Subtítulo em Inter
- [ ] Imagem de fundo impactante
- [ ] Nome do instrutor presente (se aplicável)
- [ ] Animação de entrada (fade, matrix, etc.)

### CITAÇÃO (Quote)
- [ ] Texto da citação em Playfair (itálico)
- [ ] Autor e credenciais visíveis
- [ ] Foto do autor (se disponível)
- [ ] Glassmorphism no card de citação
- [ ] Destaque visual em palavras-chave

### GRID (3 ou 4 colunas)
- [ ] Progressive spotlight implementado
- [ ] Todos os cards com mesmo tamanho
- [ ] Transição suave entre estados
- [ ] Estado final mostra todos visíveis
- [ ] Seção de convergência (se aplicável)

### CONCEITO (Diagrama/Explicação)
- [ ] Diagrama limpo e legível
- [ ] Código com syntax highlighting
- [ ] Animação de revelação progressiva
- [ ] Não mais que 1 conceito por slide

### INTERATIVO (Drag-drop, Playback)
- [ ] Instruções claras para o usuário
- [ ] Feedback visual para ações
- [ ] Reset/reiniciar disponível
- [ ] Funciona em modo embed
- [ ] Estados salvos durante sessão

## Validação de Embed Mode

O slide DEVE funcionar quando embutido em iframe do Reveal.js.

**Testar:**
1. Abrir em browser standalone
2. Abrir dentro do aula-XX.html via iframe
3. Verificar que tamanhos se ajustam (~30-40% menores)
4. Verificar que interatividade funciona

**CSS de embed mode obrigatório:**
```css
body.embed-mode {
    /* Fontes ~70% do tamanho */
    /* Paddings ~60% do tamanho */
    /* Gaps ~75% do tamanho */
}
```

## Validação de Responsividade

Testar em pelo menos 2 resoluções:
- [ ] 1920x1080 (fullscreen)
- [ ] 1280x720 (comum em laptops)
- [ ] 960x600 (embed mode aproximado)

## Registro de Aprovação

Ao aprovar um slide, registrar:

```markdown
**Slide:** [nome do arquivo]
**Tipo:** [CAPA/CITAÇÃO/GRID/etc.]
**Aprovado em:** [data]
**Técnicas usadas:** [lista]
**Padrão novo?:** [sim/não - se sim, documentar]
```

## Critérios de Reprovação

Reprovar e refazer se:
- Texto narrativo que deveria ser FALADO
- Mais de 7 elementos competindo por atenção
- Cores fora da PALETA SUPER sem justificativa
- Não funciona em embed mode
- Animações > 2 segundos
- Contraste insuficiente (texto ilegível)
- Fontes não padronizadas
