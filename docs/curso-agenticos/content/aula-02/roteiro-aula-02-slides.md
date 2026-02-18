# FRAGMENTAÇÃO DE ROTEIRO PARA SLIDES

## Thinking

Analisei o roteiro da Aula 02 "Desvendando o Claude Code: Uma Introdução Amigável". Estrutura identificada:

- **9 blocos temáticos** distribuídos em 8 atos da Jornada do Herói
- **Público:** Juristas (magistrados, advogados, servidores) que completaram Aulas 00 e 01
- **Duração:** 90-120 minutos
- **Extensão:** ~6000 palavras (roteiro extenso)
- **Citações de especialistas:**
  - Andrej Karpathy (6 citações)
  - Boris Cherny (5 citações)
  - Grant Slatton (2 citações)
  - Steve Kinney (2 citações)
  - Outras fontes (Builder.io, ZenML, UpGuard, etc.)
- **Diagramas ASCII:** 15+ diagramas ilustrativos
- **Arco narrativo:** Jornada do Herói - superação do medo do terminal
- **Conceitos centrais:**
  1. Claude Code como "fantasma na máquina"
  2. Terminal = chat com superpoderes
  3. Estrutura de diretórios (.claude/, CLAUDE.md)
  4. Permissões e segurança
  5. Primeiros passos práticos

**Técnicas selecionadas:**

1. **Jornada do Herói** - O roteiro JÁ está estruturado nesta narrativa explicitamente. Esta proposta amplifica a estrutura natural com ênfase nos momentos de transformação.

2. **Problema-Solução** - Foca na dor central ("medo do terminal") e na solução gradual. Ideal para destacar a transformação do "terminal assustador" para "chat com superpoderes".

3. **Contraste Dramático** - Trabalha a tensão entre "mundo sem Claude Code" (limitações do chat web) vs "mundo com Claude Code" (superpoderes locais). Excelente para evidenciar o valor da ferramenta.

---

## Proposta A: Jornada do Herói

### Justificativa
O próprio roteiro segue explicitamente a estrutura da Jornada do Herói com 8 Atos. Esta proposta mantém fidelidade à estrutura original, amplificando os momentos de transição entre fases para criar impacto narrativo. Ideal para apresentações presenciais onde o instrutor pode dramatizar cada etapa.

### Estrutura de Slides

| # | Tipo | Título | Conteúdo | Chars | Notes |
|---|------|--------|----------|-------|-------|
| 1 | capa | CRUZANDO O PORTAL | Aula 02: Desvendando o Claude Code | -- | Visual escuro com luz emergindo, tema "portal" |
| 2 | quote | -- | "Claramente alguma ferramenta alienígena poderosa foi distribuída, exceto que ela vem sem manual." — Andrej Karpathy | 116 | Tipografia impactante, fundo escuro |
| 3 | conceito | Esta aula É o manual | O manual amigável que a ferramenta alienígena deveria ter vindo. | 64 | Frase do instrutor, destaque visual |
| 4 | transicao | 01 | O MUNDO ORDINÁRIO | 17 | Número grande, fase da jornada |
| 5 | conceito | O Chamado Aceito | Vocês aceitaram o chamado. Estão aqui. Isso já é coragem. Aulas 00 e 01 prepararam o terreno. Agora cruzamos. | 112 | Recapitulação rápida |
| 6 | quote | -- | "Eu nunca me senti tão atrasado como programador. A profissão está sendo dramaticamente refatorada." — Karpathy | 108 | Citação de impacto, validação do momento |
| 7 | transicao | 02 | O PORTAL | 9 | Transição para conceito central |
| 8 | conceito | O Que É o Claude Code | Uma ferramenta agêntica que vive no terminal, entende sua base de arquivos e executa tarefas através de linguagem natural. | 123 | Definição oficial simplificada |
| 9 | quote | -- | "Claude Code não é tanto um produto quanto um utilitário Unix." — Boris Cherny, Criador do Claude Code | 98 | Citação do criador |
| 10 | diagrama | Cavalo + Arreio | Modelo Claude = poder bruto. Claude Code = arreio que controla e direciona. Sem arreio, cavalo corre solto. | 105 | Metáfora visual do harness |
| 11 | diagrama | O Loop Agêntico | THINK → ACT → OBSERVE → CORRECT → (repete até completar). Diferente do assistente que responde UMA vez. | 109 | Diagrama circular do loop |
| 12 | conceito | 3 Formas de Acesso | CLI (Terminal): Poder máximo. IDE (VS Code): Devs no editor. Desktop App: Iniciantes. | 87 | Comparativo rápido |
| 13 | quote | -- | "Eu rodo 5 Claudes em paralelo no meu terminal. Numero minhas abas de 1-5." — Boris Cherny | 90 | Modo avançado de uso |
| 14 | transicao | 03 | O GUARDIÃO | 11 | Medo do terminal |
| 15 | conceito | O Medo É Real | Terminal. Tela preta. Coisa de hacker. Esse medo é legítimo. Por 40 anos a indústria moveu-se para GUIs amigáveis. | 115 | Validação do medo |
| 16 | conceito | Mas Há Um Segredo | O Claude Code é um CHAT. Um chat que mora no terminal. Você conversa em português. Ele faz o resto. | 102 | Revelação central |
| 17 | comparativo | Antes vs Agora | Claude Web: Assessor por telefone. Claude Code: Assessor DENTRO do gabinete, com acesso aos arquivos. | 102 | Analogia jurídica |
| 18 | transicao | 04 | CRUZANDO O LIMIAR | 18 | Instalação |
| 19 | conceito | Instalação | Uma linha: `curl -fsSL https://claude.ai/install.sh \| bash` (Mac/Linux) ou `irm https://claude.ai/install.ps1 \| iex` (Windows) | 127 | Comando de instalação |
| 20 | transicao | 05 | PRIMEIRAS PROVAS | 16 | Comandos básicos |
| 21 | diagrama | Slash Commands Essenciais | /help, /clear, /compact, /init, /status, /cost, /config. Atalhos: Shift+Enter, Ctrl+C, Tab, ! | 99 | Tabela de comandos |
| 22 | conceito | @ para Arquivos | Use @relatorio.pdf para referenciar arquivos. Claude busca e lê automaticamente. Sem copiar/colar. | 103 | Funcionalidade @arquivo |
| 23 | transicao | 06 | ALIADOS E ARMAS | 16 | Permissões e estrutura |
| 24 | diagrama | Espectro de Permissões | DEFAULT (pede tudo) → acceptEdits → Auto-Accept (Shift+Tab) → YOLO (sem limites). Comece em Default. | 111 | Espectro visual |
| 25 | conceito | CLAUDE.md | Um arquivo markdown com contexto permanente. Claude lê automaticamente. É como um README para o Claude. | 104 | Conceito central de memória |
| 26 | diagrama | Global vs Local | ~/.claude/ = Normas do tribunal (todas as varas). projeto/.claude/ = Normas desta vara específica. | 102 | Analogia jurídica |
| 27 | transicao | 07 | MÃO NA MASSA | 13 | Exercícios |
| 28 | pratico | Exercícios | 1) Navegação: "Mostre os arquivos". 2) Leitura: "@documento.pdf explique". 3) Criação: "Crie notas.md". 4) /init | 133 | Lista de exercícios práticos |
| 29 | transicao | 08 | RETORNO COM O ELIXIR | 21 | Fechamento |
| 30 | quote | -- | "É um fantasma no seu computador que pode fazer coisas por você." — Andrej Karpathy | 84 | Citação de fechamento |
| 31 | fechamento | Conquistas do Dia | Superaram o medo. Entenderam as formas de acesso. Instalaram. Executaram comandos. Entenderam a estrutura. O fantasma mora na máquina de vocês. | 155 | Síntese final |

### Métricas
- Total de slides: 31
- Distribuição de densidade: Impacto: 8 | Padrão: 15 | Denso: 8
- Citações utilizadas: Karpathy (3), Boris Cherny (2), Steve Kinney (implícita)
- Seções do roteiro cobertas: Todas (Blocos 1-9)

---

## Proposta B: Problema-Solução

### Justificativa
Foca intensamente na dor central: o "medo do terminal" e a sensação de estar perdido diante de uma "ferramenta alienígena sem manual". A estrutura Problema-Solução permite criar tensão emocional no início e satisfação gradual conforme as soluções são apresentadas. Ideal para público que precisa ser convencido do valor antes de aceitar a complexidade.

### Estrutura de Slides

| # | Tipo | Título | Conteúdo | Chars | Notes |
|---|------|--------|----------|-------|-------|
| 1 | capa | A FERRAMENTA ALIENÍGENA | Aula 02: Claude Code — O Manual Que Estava Faltando | -- | Visual misterioso, tema "alien tech" |
| 2 | quote | O PROBLEMA | "Claramente alguma ferramenta alienígena poderosa foi distribuída, exceto que ela vem sem manual." — Karpathy | 108 | Estabelece o problema central |
| 3 | conceito | Vocês Sentem Isso? | Nova camada de abstração: agentes, prompts, contextos, memória, permissões, ferramentas, skills, hooks, MCP, workflows... | 122 | Lista intimidante de conceitos |
| 4 | conceito | O Medo É Real | Terminal. Tela preta. Linhas de código. A indústria passou 40 anos nos afastando disso. E agora precisamos voltar? | 118 | Validação emocional |
| 5 | transicao | -- | MAS HÁ UM SEGREDO | 17 | Virada dramática |
| 6 | conceito | O Segredo | O Claude Code é um CHAT. Um chat que mora no terminal. Você conversa em português. A parte técnica, ele faz. | 107 | Revelação central |
| 7 | comparativo | O Que Muda | Web: Você copia texto, Claude responde, você implementa. Terminal: Você pede, Claude FAZ. | 94 | Contraste claro |
| 8 | transicao | -- | A SOLUÇÃO | 10 | Início das soluções |
| 9 | conceito | Definição Simples | Claude Code = agente que vive no terminal + entende seus arquivos + executa tarefas + usa linguagem natural. | 109 | Definição desmistificada |
| 10 | diagrama | Think-Act-Observe-Correct | Loop que roda até completar. Diferente de assistente que responde UMA vez e para. Ele ITERA até funcionar. | 108 | Loop agêntico visual |
| 11 | quote | -- | "Claude Code não é um produto. É um utilitário Unix." — Boris Cherny, Criador | 79 | Simplicidade radical |
| 12 | transicao | -- | COMO ACESSAR | 12 | Formas de acesso |
| 13 | comparativo | 3 Caminhos | CLI: Poder máximo (recomendado). IDE: Devs que vivem no VS Code. Desktop: Quem evita linha de comando. | 110 | Opções claras |
| 14 | conceito | Por Que Terminal? | Paralelização (5 agentes simultâneos). Menos CPU. Controle granular. Universal. Scriptável. | 96 | Vantagens do CLI |
| 15 | transicao | -- | INSTALAÇÃO | 10 | Momento prático |
| 16 | pratico | Uma Linha | Mac/Linux: `curl -fsSL https://claude.ai/install.sh \| bash`. Windows: `irm https://claude.ai/install.ps1 \| iex` | 114 | Comandos de instalação |
| 17 | transicao | -- | PRIMEIROS COMANDOS | 17 | Comandos básicos |
| 18 | diagrama | Essenciais | /help (ajuda), /clear (limpa), /init (cria CLAUDE.md), @arquivo (referencia), ! (bash direto) | 98 | Comandos fundamentais |
| 19 | conceito | /clear vs /compact | /clear: Apaga tudo, início fresco. /compact: Resume o essencial. Use /clear entre tarefas diferentes. | 106 | Dica prática importante |
| 20 | transicao | -- | SEGURANÇA | 9 | Permissões |
| 21 | diagrama | Espectro | DEFAULT → Auto-Accept (Shift+Tab) → YOLO. Comece em Default. Veja o que Claude pede. Depois relaxe. | 108 | Níveis de permissão |
| 22 | conceito | Regra de Ouro | Use controle de versão (git). Modo YOLO é 100x mais seguro quando `git reset --hard` pode desfazer tudo. | 109 | Dica de segurança |
| 23 | transicao | -- | A ESTRUTURA | 12 | Organização de arquivos |
| 24 | conceito | CLAUDE.md | Arquivo markdown = contexto permanente. Claude lê automaticamente. Suas preferências, regras, estilo. | 103 | Memória persistente |
| 25 | diagrama | Dois Mundos | ~/.claude/ (global): Vale para todos os projetos. projeto/.claude/ (local): Só este projeto. | 96 | Hierarquia de configuração |
| 26 | conceito | Dica: Minimalismo | No global, apenas recursos COMPARTILHADOS em TODOS os projetos. O resto fica no local. Evita desperdício de tokens. | 117 | Dica prática |
| 27 | transicao | -- | PRATICANDO | 10 | Exercícios |
| 28 | pratico | Experimente | "Mostre os arquivos". "@documento.pdf explique". "Crie notas.md". /init. !git status. | 94 | Lista de primeiros testes |
| 29 | quote | -- | "A linguagem de programação mais quente é o inglês." — Karpathy | 60 | Ou português! |
| 30 | fechamento | Problema Resolvido | A ferramenta alienígena agora tem manual. O terminal não é inimigo. O fantasma mora na sua máquina. | 106 | Síntese final |

### Métricas
- Total de slides: 30
- Distribuição de densidade: Impacto: 9 | Padrão: 14 | Denso: 7
- Citações utilizadas: Karpathy (3), Boris Cherny (1)
- Seções do roteiro cobertas: Todas, com ênfase em Blocos 2, 3, 5, 6, 7

---

## Proposta C: Contraste Dramático

### Justificativa
Estrutura em Tese-Antítese-Síntese que contrasta constantemente o "mundo antigo" (chat web, limitações, copiar/colar) com o "mundo novo" (Claude Code, execução local, automação). Cria tensão através de comparações diretas, evidenciando claramente o valor da mudança. Ideal para público cético que precisa ver o "antes e depois".

### Estrutura de Slides

| # | Tipo | Título | Conteúdo | Chars | Notes |
|---|------|--------|----------|-------|-------|
| 1 | capa | DOIS MUNDOS | Aula 02: Do Chat à Execução — Claude Code | -- | Visual dividido: escuro/claro |
| 2 | transicao | -- | O MUNDO QUE VOCÊS CONHECEM | 26 | Estabelece o "antes" |
| 3 | conceito | Claude Web | Vocês conversam. Claude responde. Vocês copiam. Vocês implementam. Claude não toca no computador. | 105 | Limitação atual |
| 4 | conceito | O Preço | Cada arquivo precisa ser colado. Cada resposta precisa ser implementada manualmente. Contexto se perde. | 112 | Dores do modo assistente |
| 5 | quote | -- | "Ferramenta alienígena poderosa foi distribuída, exceto que vem sem manual." — Karpathy | 84 | Problema nomeado |
| 6 | transicao | -- | O MUNDO QUE EXISTE | 20 | Apresenta o "depois" |
| 7 | conceito | Claude Code | Você conversa. Claude FAZ. Lê arquivos. Escreve documentos. Executa comandos. Itera até funcionar. | 104 | Nova realidade |
| 8 | comparativo | Antes vs Depois | ANTES: Assessor por telefone. DEPOIS: Assessor dentro do gabinete, com acesso ao computador e arquivos. | 109 | Analogia jurídica |
| 9 | quote | -- | "É um fantasma no seu computador que pode fazer coisas por você." — Karpathy | 78 | Metáfora central |
| 10 | transicao | -- | TESE: O TERMINAL ASSUSTA | 26 | Reconhece objeção |
| 11 | conceito | O Medo | Terminal = tela preta = coisa de hacker. Por 40 anos a indústria nos deu botões e ícones. Voltar ao texto? | 113 | Validação do medo |
| 12 | transicao | -- | ANTÍTESE: O TERMINAL É UM CHAT | 30 | Refuta objeção |
| 13 | conceito | A Revelação | O Claude Code é um chat. Você digita português. Ele responde. A diferença: agora ele EXECUTA o que promete. | 114 | Desmistificação |
| 14 | diagrama | Mesmo Input, Diferente Output | "Organize esses arquivos" → Web: Receita de como fazer. Terminal: Arquivos organizados. | 101 | Contraste visual |
| 15 | transicao | -- | SÍNTESE: O MELHOR DOS DOIS | 28 | Integração |
| 16 | conceito | Conversação + Execução | Linguagem natural (familiar) + Acesso ao computador (novo) = Poder sem complexidade aparente. | 105 | Valor combinado |
| 17 | quote | -- | "Claude Code não é um produto. É um utilitário Unix." — Boris Cherny | 68 | Simplicidade radical |
| 18 | transicao | -- | NA PRÁTICA: ACESSO | 20 | Formas de uso |
| 19 | comparativo | CLI vs IDE vs Desktop | CLI: Máximo poder, recomendado. IDE: Para devs. Desktop: Para quem evita terminal. Todos usam o mesmo motor. | 122 | Opções comparadas |
| 20 | conceito | O Modo Boris Cherny | 5 terminais paralelos. Tab 1-5. Cada um com uma tarefa. Notificação quando precisa de input. Você ORQUESTRA. | 116 | Uso avançado |
| 21 | transicao | -- | NA PRÁTICA: INSTALAÇÃO | 25 | Momento técnico |
| 22 | pratico | Uma Linha | Mac/Linux: `curl -fsSL https://claude.ai/install.sh \| bash`. Windows PowerShell: `irm https://claude.ai/install.ps1 \| iex` | 127 | Instalação |
| 23 | transicao | -- | NA PRÁTICA: COMANDOS | 23 | Comandos |
| 24 | diagrama | Essenciais | /help, /clear, /init, @arquivo, !bash. Shift+Enter multi-linha. Tab Extended Thinking. Ctrl+C cancela. | 114 | Comandos fundamentais |
| 25 | transicao | -- | NA PRÁTICA: SEGURANÇA | 24 | Permissões |
| 26 | comparativo | Controle vs Liberdade | DEFAULT: Pede tudo (aprendizado). YOLO: Faz tudo (produção isolada). Git é seu seguro. | 103 | Espectro de controle |
| 27 | transicao | -- | NA PRÁTICA: ESTRUTURA | 24 | Arquivos |
| 28 | diagrama | CLAUDE.md | Contexto permanente. Claude lê ao iniciar. Preferências, regras, estilo. ~/.claude/ (global) + projeto/.claude/ (local). | 126 | Memória persistente |
| 29 | transicao | -- | A SÍNTESE FINAL | 17 | Fechamento |
| 30 | fechamento | Dois Mundos, Uma Escolha | O chat web continua útil. Mas o Claude Code abre um novo território. O fantasma está na máquina. Vocês têm o manual. | 128 | Síntese final |

### Métricas
- Total de slides: 30
- Distribuição de densidade: Impacto: 10 | Padrão: 14 | Denso: 6
- Citações utilizadas: Karpathy (3), Boris Cherny (1)
- Seções do roteiro cobertas: Todas, com ênfase em Blocos 2, 3, 2.5

---

## Comparativo das Propostas

| Critério | Proposta A | Proposta B | Proposta C |
|----------|------------|------------|------------|
| Técnica | Jornada do Herói | Problema-Solução | Contraste Dramático |
| Nº Slides | 31 | 30 | 30 |
| Foco | Transformação narrativa | Dor → Alívio | Antes vs Depois |
| Ideal para | Apresentação presencial com instrutor carismático | Público cético que precisa ser convencido | Público analítico que compara opções |
| Trade-off | Mais slides de transição, mais dramática | Foco intenso no problema pode parecer repetitivo | Estrutura dual pode cansar se não variar ritmo |
| Preserva citações | Sim, 5 citações | Sim, 4 citações | Sim, 4 citações |
| Cobertura do roteiro | Completa (9 blocos) | Completa com ênfase em dor/solução | Completa com ênfase em comparações |

---

## Recomendação

**Recomendo a Proposta A: Jornada do Herói.**

**Justificativa:**

1. **Fidelidade ao roteiro:** O roteiro original foi EXPLICITAMENTE estruturado como Jornada do Herói com 8 Atos nomeados. Manter esta estrutura preserva a intenção pedagógica original e facilita para o instrutor seguir o material.

2. **Narrativa completa:** A Jornada do Herói oferece um arco emocional completo — do medo inicial (Guardião) à conquista final (Retorno com Elixir). Isso cria satisfação narrativa para o público.

3. **Público-alvo:** Juristas respondem bem a narrativas estruturadas. A Jornada do Herói é um padrão narrativo reconhecível que cria engajamento mesmo inconscientemente.

4. **Cobertura equilibrada:** Enquanto as outras propostas enfatizam aspectos específicos (dor/solução ou contrastes), a Jornada do Herói distribui atenção de forma equilibrada entre todos os conceitos.

5. **Flexibilidade:** Os 8 Atos servem como checkpoints naturais para pausas, perguntas e ajustes de ritmo durante a apresentação.

**Alternativa recomendada:** Se o público for particularmente cético ou resistente, a **Proposta B (Problema-Solução)** pode ser mais eficaz para criar urgência e demonstrar valor rapidamente.

É o que satisfaz fragmentar deste roteiro.
