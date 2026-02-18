# Plano de Slides: Formas de Acesso ao Claude Code

## Contexto

**Objetivo:** Apresentar as 3 formas de acesso ao Claude Code (Desktop/Web, IDE, Terminal) e convencer que Terminal é a escolha superior.

**Filosofia:** Terminal-First conforme defendido pela Anthropic.

**Público:** Juristas que precisam superar o medo do terminal.

**Referência:** Bloco 2.5 do roteiro-aula-02.md

---

## Sequência de Slides Planejados

### Slide 6: Desktop/Web - "A Forma Mais Acessível"
**Arquivo:** `demo-forma-desktop.html` (já criado)

**Propósito:** Mostrar a primeira forma de acesso, reconhecendo seus méritos mas também suas limitações.

**Conteúdo:**
- Screenshot real do Claude Desktop
- Badge: "Forma 1 de 3"
- Título: "Desktop / Web"
- Prós:
  - Acesso de qualquer lugar (nuvem)
- Contras:
  - Conectado ao GitHub, não à máquina
  - Mais instável (bugs)
  - Sem multi-terminais reais

**Design:**
- Layout split: screenshot à esquerda, info à direita
- Barra de progresso: Desktop (ativo) → IDE → Terminal
- Glassmorphism cards para features

---

### Slide 7: IDE - "O Caminho do Desenvolvedor"
**Arquivo:** `demo-forma-ide.html` (a criar)

**Propósito:** Apresentar a integração com VS Code/JetBrains como opção intermediária.

**Conteúdo:**
- Screenshot do VS Code com Claude Code
- Badge: "Forma 2 de 3"
- Título: "IDE Integration"
- Subtítulo: "VS Code / JetBrains"
- Prós:
  - Diffs nativos visuais
  - Seleção como contexto
  - Familiar para desenvolvedores
- Contras:
  - Lock-in no editor
  - Consumo de CPU mais alto
  - Menos flexível que terminal

**Design:**
- Mesmo layout do Desktop (consistência)
- Barra de progresso: Desktop → IDE (ativo) → Terminal
- Tom mais neutro (nem sombras nem luz)

---

### Slide 8: Terminal - "Onde Mora o Poder Real"
**Arquivo:** `demo-forma-terminal.html` (a criar)

**Propósito:** Revelar o terminal como a escolha superior, o "destino" da jornada.

**Conteúdo:**
- Screenshot do terminal com Claude Code
- Badge: "Forma 3 de 3 — RECOMENDADO"
- Título: "Terminal"
- Subtítulo: "Terminal-First"
- Citação: *"It's terminal-first with no IDE lock-in—it works anywhere your shell works."* — Anthropic

- 5 Vantagens (todas em verde):
  1. Paralelização poderosa (5 agentes simultâneos)
  2. Menos consumo de CPU
  3. Controle granular (Ctrl+C)
  4. Universalidade (qualquer SO, CI/CD)
  5. Scriptável (pipes funcionam)

**Design:**
- Layout mais impactante que os anteriores
- Barra de progresso: Desktop → IDE → Terminal (ativo, com brilho)
- Efeito de "chegada" - glow dourado sutil
- Badge diferenciado com cor dourada

---

### Slide 9: Por que Terminal? - Comparação Visual
**Arquivo:** `demo-comparacao-formas.html` (a criar)

**Propósito:** Consolidar a argumentação com comparação lado-a-lado.

**Conteúdo:**
- Matriz comparativa visual:

| Aspecto | Desktop | IDE | Terminal |
|---------|---------|-----|----------|
| Interface | GUI Chat | Editor | Texto puro |
| Poder agêntico | Requer MCPs | Alto | MÁXIMO |
| Paralelização | Limitada | Limitada | 5+ agentes |
| Consumo CPU | Alto | Alto | Mínimo |
| Universalidade | Navegador | Editor específico | Qualquer shell |
| Scriptabilidade | Não | Parcial | Total (pipes) |

**Design:**
- Matriz visual com ícones
- Checkmarks verdes para Terminal
- Cores graduais: vermelho → amarelo → verde
- Spotlight progressivo em cada linha

---

### Slide 10: O Modo Boris Cherny
**Arquivo:** `demo-modo-boris.html` (a criar)

**Propósito:** Mostrar o uso real do criador do Claude Code - 5 terminais paralelos.

**Conteúdo:**
- Citação do Boris Cherny
- Visualização de 5 abas de terminal
- Cada aba com tarefa específica:
  1. Refatoração de código
  2. Testes novos
  3. Documentação
  4. Debug
  5. Pesquisa

**Mensagem central:**
> "Enquanto um roda testes, outro refatora, outro documenta. O humano ORQUESTRA, não executa."

**Design:**
- 5 cards representando terminais
- Animação de "trabalho" em cada um
- Badge de autoridade: "Boris Cherny, Criador do Claude Code"

---

### Slide 11: Terminal = Chat no Terminal
**Arquivo:** `demo-terminal-chat.html` (a criar)

**Propósito:** Desmistificar o terminal - mostrar que é apenas um chat.

**Conteúdo:**
- Demonstração visual lado-a-lado:
  - ESQUERDA: Claude Web (chat no navegador)
  - DIREITA: Claude Code (chat no terminal)

- Mensagem: "É a MESMA conversa. Só que no terminal ele pode FAZER coisas."

**Citação:**
> *"Think of it as having a pair programmer you can talk to without ever taking your hands off the keyboard."*

**Design:**
- Split screen com animação de mensagens
- Setas conectando os dois lados
- Destaque para os "superpoderes" do terminal

---

### Slide 12: Estrutura de Diretórios - Os Dois Mundos
**Arquivo:** `demo-diretorios-intro.html` (a criar)

**Propósito:** Introduzir a estrutura de pastas como "arma secreta".

**Conteúdo:**
- Visualização de duas pastas:
  - `~/.claude/` (Global)
  - `projeto/.claude/` (Local)

- Analogia jurídica:
  - Global = "Normas do tribunal" (valem para todas as varas)
  - Local = "Normas desta vara" (específicas deste gabinete)

**Citação:**
> *"A CLAUDE.md file is like a README for Claude."* — Steve Kinney

**Design:**
- Dois cards lado a lado
- Ícones de pasta com hierarquia visual
- Cores: dourado para Global, verde para Local

---

### Slide 13: Diretório Global - O que Instalar
**Arquivo:** `demo-diretorio-global.html` (a criar)

**Propósito:** Ensinar o que vai no diretório global.

**Conteúdo:**
Estrutura visual de `~/.claude/`:
```
~/.claude/
├── CLAUDE.md           # Preferências pessoais
├── commands/           # Comandos globais
├── skills/             # Skills compartilhadas
├── mcp-servers/        # MCPs gerais
└── settings.json       # Configurações
```

**Regra de Ouro:**
> "Instale APENAS o que você usa em TODOS os projetos."

**O que evitar:**
- Skills específicas de um projeto
- Commands muito especializados
- Contexto que só faz sentido em um lugar

**Design:**
- Árvore de diretórios animada
- Cards com "SIM" (verde) e "NÃO" (vermelho)
- Destaque para a regra de minimalismo

---

### Slide 14: Diretório Local - O Sistema Agêntico
**Arquivo:** `demo-diretorio-local.html` (a criar)

**Propósito:** Mostrar onde mora o sistema agêntico do projeto.

**Conteúdo:**
Estrutura visual de `projeto/.claude/`:
```
projeto/
├── CLAUDE.md              # Memória do projeto
├── CLAUDE.local.md        # Memória pessoal (gitignored)
├── .claude/
│   ├── commands/          # Slash commands
│   ├── skills/            # Especialidades
│   ├── agents/            # Configurações de subagentes
│   ├── rules/             # Regras modulares
│   └── settings.json      # Permissões locais
└── data/output/           # Saídas
```

**Mensagem central:**
> "Cada projeto tem seu próprio sistema agêntico."

**Design:**
- Árvore de diretórios expandida
- Animação de "zoom" em cada pasta
- Cores consistentes com PALETA SUPER

---

## Princípios de Design Aplicados

### PALETA SUPER
- `--super-gold: #BE9C6D` (destaque, títulos)
- `--super-cream: #FFF4E4` (texto principal)
- `--super-bg-dark: #0a0a12` (fundo)
- `--super-green: #4ade80` (prós, Terminal)
- `--super-red: #ef4444` (contras)

### Tipografia Tripartite
- **Playfair Display:** Títulos principais
- **Inter:** Corpo, descrições
- **JetBrains Mono:** Badges, código, paths

### Elementos Visuais
- **Glassmorphism:** Cards com blur e transparência
- **Vignette:** Escurecimento radial nas bordas
- **Grid Background:** Grid sutil dourado
- **Staggered Animations:** Elementos entram em sequência
- **Embed Mode:** Todos devem funcionar em iframe

### Barra de Progresso
Presente nos slides 6-8 (Desktop → IDE → Terminal):
- Mostra jornada progressiva
- O item ativo tem glow
- Posição fixa à esquerda

---

## Cronograma de Implementação

| Ordem | Slide | Arquivo | Prioridade |
|-------|-------|---------|------------|
| 1 | Slide 7 | demo-forma-ide.html | Alta |
| 2 | Slide 8 | demo-forma-terminal.html | Alta |
| 3 | Slide 9 | demo-comparacao-formas.html | Alta |
| 4 | Slide 10 | demo-modo-boris.html | Média |
| 5 | Slide 11 | demo-terminal-chat.html | Média |
| 6 | Slide 12 | demo-diretorios-intro.html | Alta |
| 7 | Slide 13 | demo-diretorio-global.html | Média |
| 8 | Slide 14 | demo-diretorio-local.html | Média |

---

## Fluxo Narrativo

```
┌─────────────────────────────────────────────────────────────────┐
│                    JORNADA DO SLIDE 6 AO 14                     │
└─────────────────────────────────────────────────────────────────┘

PARTE 1: AS TRÊS FORMAS (Slides 6-8)
├── Desktop/Web: "Existe, é acessível, mas limitado"
├── IDE: "Melhor, mas ainda não é o máximo"
└── Terminal: "Aqui mora o poder real" ← DESTINO

PARTE 2: CONVENCIMENTO (Slides 9-11)
├── Comparação: "Veja os números lado a lado"
├── Modo Boris: "O criador usa assim"
└── Desmistificação: "É só um chat no terminal"

PARTE 3: ORGANIZAÇÃO (Slides 12-14)
├── Introdução: "Dois mundos: Global e Local"
├── Global: "O que instalar (minimalismo)"
└── Local: "Onde mora seu sistema agêntico"
```

---

## Próximos Passos

1. **Revisar** slide 6 (demo-forma-desktop.html) com usuário
2. **Criar** slides 7 e 8 mantendo consistência visual
3. **Criar** slide 9 (comparação) como consolidação
4. **Avaliar** necessidade dos slides 10-14 ou se podem ser simplificados
5. **Integrar** tudo no aula-02.html

---

*Plano criado em 2026-01-25*
*Baseado no roteiro-aula-02.md e filosofia Artesania Visual Didática*
