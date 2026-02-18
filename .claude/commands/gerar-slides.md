# Comando: gerar-slides

Transforma um roteiro de aula em apresentação HTML interativa usando a skill `slides-web`.

## Uso

```
/gerar-slides <caminho-do-roteiro>
```

Exemplo: `/gerar-slides content/aula-02/roteiro-aula-02.md`

## Workflow

1. **Ler o roteiro** especificado
2. **Analisar estrutura** (blocos, tópicos, exercícios)
3. **Invocar skill slides-web** para geração
4. **Salvar na pasta slides/** da aula correspondente
5. **Informar caminho** para visualização

## Instruções

1. Receba os argumentos: $ARGUMENTS
2. Valide que o roteiro existe
3. Identifique a pasta da aula (extrair do caminho)
4. Leia o SKILL.md de slides-web para entender as técnicas disponíveis
5. Gere os slides seguindo as regras:
   - PALETA SUPER obrigatória
   - Tipografia tripartite
   - 3 propósitos: MOSTRAR, TOPIFICAR, CITAR
   - detectEmbedMode() em todas as demos
6. Salve em `content/aula-XX/slides/aula-XX.html`
7. Para demos complexas, gere arquivos `demo-*.html` separados

## Tipos de Slides

| Tipo | Quando Usar | Técnica |
|------|-------------|---------|
| CAPA | Abertura da aula | Matrix Rain ou imagem impactante |
| SECAO | Transição entre blocos | Título grande + subtítulo |
| CONCEITO | Explicar ideia | Diagrama ou código com highlight |
| LISTA | Enumerar pontos | Grid ou bullets animados |
| CITACAO | Trazer autoridade | Glassmorphism + foto autor |
| COMPARATIVO | Antes/depois | Split-screen ou timeline |
| INTERATIVO | Demonstrar conceito | Drag-drop ou playback |
| FECHAMENTO | Encerrar aula | CTA + próximos passos |

## Saídas Esperadas

```
content/aula-XX/slides/
├── aula-XX.html          # Apresentação principal (Reveal.js)
├── demo-conceito-A.html  # Demo interativa A
├── demo-conceito-B.html  # Demo interativa B
└── assets/               # Imagens e recursos
```

## Checklist de Validação

Antes de entregar ao usuário, validar:

- [ ] HTML válido sem erros
- [ ] PALETA SUPER aplicada
- [ ] detectEmbedMode() em todas as demos
- [ ] Funciona em browser standalone
- [ ] Navegação por teclado funciona
- [ ] Nenhum bullet point narrativo (professor FALA, slide MOSTRA)

## Próximo Passo

Após gerar, sugerir: `/revisar-slides` para refinamento colaborativo.
