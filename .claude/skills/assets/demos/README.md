# Catálogo de Templates de Demos

Templates reutilizáveis para criação de slides interativos Reveal.js.

## Templates Disponíveis

| Template | Tipo | Técnicas | Uso |
|----------|------|----------|-----|
| `template-capa-matrix.html` | Capa | Matrix Rain, Canvas, PALETA SUPER | Abertura de impacto |
| `template-quote-glassmorphism.html` | Citação | Glassmorphism, foto autor | Citações de autoridade |
| `template-grid3-spotlight.html` | Grid 3 colunas | Progressive spotlight, convergência | Comparações evolutivas |
| `template-contexto-dragdrop.html` | Interativo | Drag-drop, barra fill, modos | Demonstração de conceitos |
| `template-orquestrador.html` | Interativo | Playback, SVG paths | Visualização de workflows |

## Como Usar

1. Copie o template para a pasta de slides da aula
2. Renomeie para `demo-[conceito].html`
3. Customize o conteúdo (textos, dados, cores se necessário)
4. Teste em browser (standalone e embed mode)

## Técnicas Implementadas

### Em Todos os Templates
- `detectEmbedMode()` para iframes
- Variáveis CSS da PALETA SUPER
- Tipografia tripartite (Playfair/Inter/JetBrains)

### Específicas por Template

**Capa Matrix:**
- Canvas com Matrix Rain
- `document.documentElement.clientWidth` (fix iframe)

**Quote Glassmorphism:**
- `backdrop-filter: blur(20px)`
- Foto circular com borda dourada

**Grid Spotlight:**
- Estados: highlighted, dimmed, all-visible
- Navegação por clique/teclado
- Nav dots indicadores

**Contexto Drag-Drop:**
- Sortable.js ou nativo drag-drop
- Barra de preenchimento progressiva
- 2 modos (colapso vs janela deslizante)

**Orquestrador:**
- SVG animated paths
- Playback controls (play/pause/reset)
- Highlight de nós ativos

## Checklist de Customização

- [ ] Atualizar textos e dados
- [ ] Verificar embed-mode funciona
- [ ] Testar navegação por teclado
- [ ] Confirmar cores da PALETA SUPER
- [ ] Validar responsividade

## Origem

Templates extraídos dos demos aprovados da Aula 01 (aula-01.html).
Criados via processo de brainstorming colaborativo documentado em `revisor-slides`.
