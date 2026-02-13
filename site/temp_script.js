
        // Data
        const lessons = {
            "0.1": {
                number: "0.1",
                module: "Módulo 0 — Preparação",
                title: "Primeiros Passos",
                objective: "Criar sua conta no Claude e escolher o plano adequado para uso profissional no Direito.",
                content: `
                    <div class="block">
                        <h2 class="block-title">Por que Claude como Base?</h2>
                        <p>Neste curso, usamos o <strong>Claude</strong> (da Anthropic) como plataforma principal por seis razões:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Razão</th><th>O que significa</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Robustez cognitiva</strong></td><td>Projetado para atividades de alta profundidade analítica — ideal para análise jurídica complexa</td></tr>
                                    <tr><td><strong>Transparência</strong></td><td>Explica com clareza o que está fazendo: quando busca na web, quando cria artefatos, quando raciocina. Outros modelos são mais opacos</td></tr>
                                    <tr><td><strong>Alinhamento ético</strong></td><td>Desenvolvido sob os princípios do <a href="https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback" target="_blank">Constitutional AI</a> — foco em ser seguro, ético e genuinamente útil</td></tr>
                                    <tr><td><strong>Janela de contexto</strong></td><td>Suporta documentos longos — essencial para análises jurídicas em processos volumosos</td></tr>
                                    <tr><td><strong>Benchmarks</strong></td><td>Destaque nos principais benchmarks para tarefas de cognição profunda e solução de problemas complexos</td></tr>
                                    <tr><td><strong>Didática</strong></td><td>Interface limpa, respostas estruturadas, comportamento previsível — facilita o aprendizado</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <img src="assets/img/modulo0/claude-tela-principal.png" alt="Interface principal do Claude" class="screenshot">
                        <p class="screenshot-caption">Interface principal do Claude — área de conversa com seletor de modelo</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Os Planos do Claude</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Plano</th><th>Preço</th><th>Para quem</th><th>Uso no Direito</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Free</strong></td><td>R$ 0</td><td>Curiosos, testes iniciais</td><td>Insuficiente</td></tr>
                                    <tr><td><strong>Pro</strong></td><td>~US$ 17-20/mês</td><td>Profissionais</td><td style="color:var(--accent-success);font-weight:600;">RECOMENDADO</td></tr>
                                    <tr><td><strong>Max</strong></td><td>US$ 100-200/mês</td><td>Uso massivo</td><td>Alta demanda</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                `,
                exercise: {
                    title: "Criar Conta e Escolher Plano",
                    icon: "✎",
                    description: "Criar sua conta no Claude e, se for usar profissionalmente, assinar o plano Pro.",
                    steps: [
                        { title: "Acessar o site", items: ["Abra o navegador (Chrome recomendado)", "Acesse: <strong><a href='https://claude.ai' target='_blank'>https://claude.ai</a></strong>"] },
                        { title: "Criar conta", items: ["Clique em <strong>\"Sign up\"</strong>", "Escolha método: Email, Google ou Apple", "Complete a verificação de email"] },
                        { title: "Primeiro acesso", items: ["Aceite os termos de uso", "Você entrará no plano Free automaticamente"] },
                        { title: "Upgrade para Pro", items: ["Clique no seu perfil (canto inferior esquerdo) — veja a imagem abaixo", "Vá em <strong>\"Ver todos os planos\"</strong>", "Selecione <strong>\"Pro\"</strong> e confirme", "<img src='assets/img/modulo0/claude-menu-perfil.png' alt='Menu do perfil no Claude' class='screenshot' style='margin-top:12px;max-width:320px;'>"] }
                    ],
                    checklist: [
                        "Conta criada no claude.ai",
                        "Email verificado",
                        "Consegui acessar a interface de chat",
                        "(Se Pro) Assinatura ativa confirmada",
                        "Entendo a diferença entre Free, Pro e Max"
                    ]
                },
                tip: "Comece no Free para testar por alguns dias. Quando perceber que está \"batendo no limite\" frequentemente, faça o upgrade para Pro.",
                warning: "<strong>\"Vou usar o Free porque não quero gastar.\"</strong><br>Para uso profissional no Judiciário, o Free é inadequado: limites baixos, sem prioridade, sem extended thinking."
            },
            "0.2": {
                number: "0.2",
                module: "Módulo 0 — Preparação",
                title: "Regulação de Uso da IA",
                objective: "Conhecer as regras da Resolução 615/2025 do CNJ para uso de IA no Judiciário.",
                content: `
                    <div class="callout callout-error">
                        <div class="callout-title">⚖️ <a href="https://atos.cnj.jus.br/atos/detalhar/6001" target="_blank" style="color:inherit;">Resolução 615/2025 do CNJ</a></div>
                        <p>Estabelece a Política de Uso de Inteligência Artificial no Poder Judiciário brasileiro.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Princípios Fundamentais</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Princípio</th><th>O que significa</th><th>Status</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Capacitação prévia</strong></td><td>Treinamento obrigatório sobre limitações, riscos e uso ético — fornecido pelos tribunais</td><td style="color:var(--accent-error);font-weight:600;">OBRIGATÓRIO</td></tr>
                                    <tr><td><strong>Natureza auxiliar</strong></td><td>Uso apenas como apoio — vedada utilização autônoma para decisões judiciais</td><td style="color:var(--accent-error);font-weight:600;">OBRIGATÓRIO</td></tr>
                                    <tr><td><strong>Responsabilidade</strong></td><td>Magistrado permanece integralmente responsável — necessária verificação e revisão</td><td style="color:var(--accent-error);font-weight:600;">OBRIGATÓRIO</td></tr>
                                    <tr><td><strong>Proteção de dados</strong></td><td>Vedado uso de dados para treinamento sem autorização expressa</td><td style="color:var(--accent-error);font-weight:600;">OBRIGATÓRIO</td></tr>
                                    <tr><td><strong>Dados sigilosos</strong></td><td>Dever de anonimização prévia — não inserir documentos sigilosos sem tratamento</td><td style="color:var(--accent-error);font-weight:600;">OBRIGATÓRIO</td></tr>
                                    <tr><td><strong>Registro de uso</strong></td><td>Registro automático no sistema do Tribunal — menção na decisão é opcional</td><td>RECOMENDADO</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">O que PODE (Baixo Risco)</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Categoria</th><th>Usos Permitidos</th></tr></thead>
                                <tbody>
                                    <tr><td style="background:var(--accent-success);color:white;font-weight:600;">TRANSFORMAÇÃO</td><td><strong>Redação:</strong> Correção e melhoria de textos, organização de ideias, elaboração de ementa e relatório, rascunho de peças<br><strong>Análise:</strong> Análise de casos (FIRAC+), extração de fatos, análise descritiva da prova</td></tr>
                                    <tr><td style="background:var(--accent-success);color:white;font-weight:600;">PESQUISA</td><td><strong>Simples:</strong> Pesquisa de precedentes e informações<br><strong>Profunda:</strong> Doutrina, MBE, precedentes, análise de casos complexos</td></tr>
                                    <tr><td style="background:var(--accent-success);color:white;font-weight:600;">CRIAÇÃO</td><td><strong>Brainstorming:</strong> Geração de ideias e argumentos, objeções, pensamento contrafactual<br><strong>Sugestões:</strong> Perguntas e quesitos<br><strong>Artefatos:</strong> Sites, dashboards, slides, mapas mentais</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">O que NÃO PODE (Alto Risco e Risco Excessivo)</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Categoria</th><th>Usos Proibidos</th></tr></thead>
                                <tbody>
                                    <tr><td style="background:var(--accent-error);color:white;font-weight:600;">JULGAMENTO</td><td><strong>Tomada de decisão:</strong> Sistemas sem supervisão humana, automação absoluta<br><strong>Juízos conclusivos:</strong> Aplicação da lei, plausibilidade de direitos, tipificação de crimes<br><strong>Valoração da prova:</strong> Validade, força probatória, standards</td></tr>
                                    <tr><td style="background:var(--accent-error);color:white;font-weight:600;">IMPACTO EM DIREITOS</td><td><strong>Avaliação de pessoas:</strong> Prever crimes/reiteração, perfilamento por comportamento social, identificação de emoções<br><strong>Quantificação:</strong> Dosimetria de penas, danos morais</td></tr>
                                    <tr><td style="background:var(--accent-warning);color:white;font-weight:600;">PRIVACIDADE</td><td><strong>Processos sigilosos:</strong> Sem anonimização prévia<br><strong>Treinamento:</strong> Modelos que usem dados do usuário<br><strong>Credibilidade:</strong> Classificação de testemunhos (detecção de mentiras)</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                `,
                exercise: {
                    title: "Conhecer a Regulação",
                    icon: "⚖️",
                    description: "Entender o que pode e o que não pode fazer com IA no Judiciário.",
                    steps: [
                        { title: "Ler a Resolução", items: ["Acesse: <a href='https://atos.cnj.jus.br/atos/detalhar/6001' target='_blank'>Resolução 615/2025 do CNJ</a>", "Leia especialmente os artigos sobre vedações e riscos"] },
                        { title: "Identificar usos permitidos", items: ["Revise a tabela de usos de baixo risco", "Note que são atividades de <strong>apoio</strong>, não de decisão"] },
                        { title: "Identificar vedações", items: ["Revise as tabelas de alto risco e risco excessivo", "Entenda que <strong>juízos conclusivos</strong> são vedados"] }
                    ],
                    checklist: [
                        "Li ou conheço a Resolução 615/2025 do CNJ",
                        "Entendo que IA é ferramenta de APOIO, não de decisão",
                        "Sei que juízos conclusivos sobre aplicação da lei são vedados",
                        "Sei que valoração probatória por IA é alto risco",
                        "Entendo que o magistrado é integralmente responsável",
                        "Sei que devo anonimizar documentos sigilosos ANTES de usar IA"
                    ]
                },
                tip: "A IA pode ajudar a <strong>organizar ideias</strong>, <strong>pesquisar precedentes</strong> e <strong>redigir rascunhos</strong> — mas a decisão, a valoração e o juízo são sempre do magistrado.",
                warning: "<strong>\"Vou pedir ao Claude para decidir se o autor tem razão.\"</strong><br><strong>VEDADO.</strong> Juízos conclusivos sobre aplicação de norma jurídica a fatos concretos são de <strong>alto risco</strong>. Use a IA para analisar, não para decidir."
            },
            "0.3": {
                number: "0.3",
                module: "Módulo 0 — Preparação",
                title: "Configuração de Privacidade",
                objective: "Configurar seu LLM para uso profissional, desativando o uso de dados para treinamento.",
                content: `
                    <div class="block">
                        <h2 class="block-title">Suas Conversas São Privadas</h2>
                        <p>As conversas entre você e o modelo de IA são <strong>privadas</strong>. Elas não se tornam públicas, não são compartilhadas com outros usuários e não aparecem em buscas na internet.</p>
                        <p>Os principais provedores de LLMs tratam suas conversas como dados confidenciais:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Modelo</th><th>O que garante</th><th>Política de Privacidade</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Claude</strong></td><td>Conversas armazenadas com segurança, não compartilhadas publicamente</td><td><a href="https://www.anthropic.com/legal/privacy" target="_blank">Anthropic Privacy Policy</a></td></tr>
                                    <tr><td><strong>ChatGPT</strong></td><td>Dados do usuário protegidos, opção de desativar histórico</td><td><a href="https://openai.com/policies/privacy-policy" target="_blank">OpenAI Privacy Policy</a></td></tr>
                                    <tr><td><strong>Gemini</strong></td><td>Conversas processadas conforme políticas Google</td><td><a href="https://support.google.com/gemini/answer/13594961" target="_blank">Gemini Apps Privacy</a></td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="callout callout-info">
                        <div class="callout-title">🔐 Privado ≠ Pode Usar para Treinamento</div>
                        <p><strong>Privacidade:</strong> Suas conversas não são públicas — terceiros não têm acesso.</p>
                        <p><strong>Treinamento:</strong> Questão diferente — o provedor pode usar seus dados para melhorar o modelo, a menos que você desative essa opção.</p>
                        <p>Para uso no Judiciário, você precisa garantir <strong>ambos</strong>: privacidade E opt-out de treinamento.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Por que Configurar o Opt-out?</h2>
                        <p>A <a href="https://atos.cnj.jus.br/atos/detalhar/6001" target="_blank">Resolução 615/2025</a> determina que dados do Judiciário <strong>não podem ser usados para treinamento</strong> de modelos de IA. Você precisa garantir o <strong>opt-out de treinamento</strong>.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Configuração no Claude</h2>
                        <p>No Claude, a opção se chama <strong>"Ajudar a melhorar o Claude"</strong> e deve estar <strong>DESATIVADA</strong>.</p>
                        <img src="assets/img/claude-privacidade.png" alt="Configuração de privacidade do Claude" class="screenshot">
                        <p class="screenshot-caption">Tela de privacidade do Claude — toggle de treinamento DESATIVADO</p>
                    </div>
                    <div class="callout callout-tip">
                        <div class="callout-title">📝 Histórico vs Treinamento</div>
                        <p><strong>Histórico:</strong> Suas conversas ficam salvas para você acessar depois — isso é útil e permitido.</p>
                        <p><strong>Treinamento:</strong> Seus dados são usados para melhorar o modelo — isso é <strong>vedado</strong> no Judiciário.</p>
                    </div>
                `,
                exercise: {
                    title: "Desativar Treinamento",
                    icon: "🔒",
                    description: "Configurar o Claude para não usar seus dados para treinamento.",
                    steps: [
                        { title: "Acessar configurações", items: ["Clique no seu perfil (canto inferior esquerdo)", "Clique em <strong>\"Configurações\"</strong> (ou Ctrl+,)"] },
                        { title: "Ir para Privacidade", items: ["No menu lateral, clique em <strong>\"Privacidade\"</strong>", "Role até <strong>\"Ajudar a melhorar o Claude\"</strong>"] },
                        { title: "Desativar", items: ["Certifique-se de que o toggle está <strong>DESATIVADO</strong> (cinza)", "Pronto — suas conversas não serão usadas para treinamento"] }
                    ],
                    checklist: [
                        "Entendo que minhas conversas são privadas (não públicas)",
                        "Sei a diferença entre privacidade e opt-out de treinamento",
                        "Opt-out de treinamento ativo no Claude",
                        "Sei onde fica a configuração de privacidade"
                    ]
                },
                tip: "A configuração de privacidade é feita uma única vez. Depois de desativar o treinamento, todas as suas conversas futuras estarão protegidas.",
                warning: "<strong>\"Vou pedir ao Claude para anonimizar o documento antes de analisar.\"</strong><br><strong>ERRADO.</strong> Ao inserir o documento sigiloso para anonimização, você JÁ violou a regra. A anonimização deve ser <strong>manual</strong> ou com ferramenta que rode <strong>localmente</strong>."
            },
            "0.4": {
                number: "0.4",
                module: "Módulo 0 — Preparação",
                title: "Interface e Navegação",
                objective: "Conhecer os elementos essenciais da interface de um LLM — válidos para qualquer modelo.",
                content: `
                    <div class="callout callout-info">
                        <div class="callout-title">⚡ Interfaces Mudam Constantemente</div>
                        <p>As interfaces dos LLMs (Claude, ChatGPT, Gemini) são atualizadas frequentemente. Os modelos também evoluem — novas versões são lançadas a cada poucos meses.</p>
                        <p><strong>Não se preocupe:</strong> os elementos essenciais permanecem os mesmos em todas as plataformas. Se você entender esses elementos, conseguirá usar qualquer LLM.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Elementos Essenciais (Comuns a Todos os LLMs)</h2>
                        <p>Independente do modelo ou da versão, toda interface de LLM possui estes elementos básicos:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Elemento</th><th>O que é</th><th>Função</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Área de Chat</strong></td><td>O espaço central da tela</td><td>Onde acontece a conversa: você digita (input) e o modelo responde (output). É o coração da interface.</td></tr>
                                    <tr><td><strong>Campo de Texto</strong></td><td>Caixa de entrada na parte inferior</td><td>Onde você digita suas perguntas e instruções. Suporta textos longos.</td></tr>
                                    <tr><td><strong>Botão de Anexo</strong></td><td>Geralmente um ícone [+] ou clipe</td><td>Permite enviar arquivos (PDFs, imagens, documentos) para o modelo analisar.</td></tr>
                                    <tr><td><strong>Nova Conversa</strong></td><td>Botão para iniciar novo chat</td><td>Cria uma conversa limpa, <strong>sem memória</strong> da conversa anterior.</td></tr>
                                    <tr><td><strong>Configurações</strong></td><td>Menu de ajustes (geralmente ícone ⚙️)</td><td>Privacidade, preferências, plano, personalização.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="callout callout-warning">
                        <div class="callout-title">🧠 Conceito Fundamental: Cada Conversa é um Contexto Isolado</div>
                        <p>Quando você clica em <strong>"Nova Conversa"</strong>, você está iniciando uma sessão completamente nova.</p>
                        <p>O modelo <strong>não sabe</strong> o que foi discutido em conversas anteriores. É como se você estivesse falando com uma <strong>pessoa diferente</strong> que não participou das conversas passadas.</p>
                        <p><strong>Implicação prática:</strong> Se você precisa que o modelo lembre de algo, deve incluir essa informação na conversa atual (ou usar Projetos com instruções fixas).</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Visão Geral da Interface do Claude</h2>
                        <video controls style="width:100%;max-width:800px;border-radius:12px;border:1px solid var(--border-light);box-shadow:var(--shadow-md);margin:24px 0;">
                            <source src="assets/videos/claude-interface.mp4" type="video/mp4">
                            Seu navegador não suporta vídeos HTML5.
                        </video>
                        <p class="screenshot-caption">Interface do Claude: elementos essenciais presentes em todas as plataformas de LLM</p>
                    </div>
                `,
                exercise: {
                    title: "Identificar os Elementos Essenciais",
                    icon: "🖥️",
                    description: "Localizar os elementos básicos da interface e entender o conceito de conversa isolada.",
                    steps: [
                        { title: "Identificar a Área de Chat", items: ["Localize onde aparecem as mensagens (output do modelo)", "Localize o campo de texto onde você digita (input)", "Entenda: é aqui que acontece toda a interação"] },
                        { title: "Encontrar o Botão de Anexo", items: ["Procure o ícone [+] ou clipe próximo ao campo de texto", "Este botão permite enviar arquivos para análise"] },
                        { title: "Testar Nova Conversa", items: ["Faça uma pergunta simples: <code>Qual é seu nome?</code>", "Clique em <strong>\"Nova Conversa\"</strong> (ou ícone +)", "Pergunte: <code>O que eu perguntei antes?</code>", "Observe: o modelo <strong>não sabe</strong> — é um contexto novo"] },
                        { title: "Acessar Configurações", items: ["Encontre o menu de configurações (geralmente ⚙️)", "Verifique se sabe onde ajustar privacidade"] }
                    ],
                    checklist: [
                        "Sei identificar a área de chat (input e output)",
                        "Sei onde fica o botão de anexo",
                        "Entendo que cada nova conversa é um contexto isolado",
                        "Sei onde ficam as configurações",
                        "Entendo que interfaces mudam, mas elementos essenciais permanecem"
                    ]
                },
                tip: "Não decore a interface atual — ela vai mudar. <strong>Entenda os conceitos</strong>: área de chat, anexo, nova conversa, configurações. Com isso, você usa qualquer LLM.",
                warning: "<strong>\"O modelo esqueceu o que conversamos!\"</strong><br>Isso acontece quando você inicia uma nova conversa. Cada conversa é isolada — o modelo não tem acesso às anteriores. <strong>Solução:</strong> Ao longo do curso, veremos como contornar essa característica com técnicas de gerenciamento de contexto e memória."
            },
            "0.5": {
                number: "0.5",
                module: "Módulo 0 — Preparação",
                title: "Configurações Personalizadas",
                objective: "Entender os recursos de personalização e memória dos LLMs — e por que não são recomendados para uso jurídico.",
                content: `
                    <div class="block">
                        <h2 class="block-title">O que é Personalização?</h2>
                        <p>A <strong>personalização</strong> permite definir instruções customizadas que valem para <strong>todas</strong> as suas conversas. É um texto fixo que o modelo sempre considera antes de responder.</p>
                        <p><strong>Exemplo:</strong> "Sempre responda em português formal" ou "Sou advogado tributarista, adapte as respostas para esse contexto".</p>
                        <img src="assets/img/Screenshot 2026-02-11 at 10-30-50 Claude.png" alt="Tela de personalização do Claude" class="screenshot">
                        <p class="screenshot-caption">Configurações de personalização no Claude — instruções que valem para todas as conversas</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">O que é Memória?</h2>
                        <p>A <strong>memória</strong> permite ao modelo lembrar detalhes específicos de conversas anteriores. O modelo extrai "lembranças" automaticamente e as usa para contextualizar conversas futuras.</p>
                        <p><strong>Exemplo:</strong> Se você menciona que é juiz federal em uma conversa, o modelo pode lembrar disso em conversas futuras.</p>
                        <img src="assets/img/Screenshot 2026-02-11 at 10-31-05 Claude.png" alt="Tela de memória do Claude" class="screenshot">
                        <p class="screenshot-caption">Configurações de memória no Claude — lembranças extraídas de conversas anteriores</p>
                    </div>
                    <div class="callout callout-warning">
                        <div class="callout-title">⚠️ Não Recomendado para Uso Jurídico</div>
                        <p>Personalização e memória globais são úteis apenas para quem usa LLMs para <strong>finalidades muito específicas</strong> e <strong>tarefas homogêneas</strong>.</p>
                        <p>Para a realidade jurídica — com demandas variadas e contextos diversos — <strong>não há vantagem</strong> em usar esses recursos globalmente.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Problemas do Uso Global</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Problema</th><th>O que acontece</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Poluição de contexto</strong></td><td>Informações irrelevantes ocupam espaço na janela de contexto, reduzindo a capacidade do modelo</td></tr>
                                    <tr><td><strong>Contaminação de memória</strong></td><td>Detalhes de um caso "vazam" para análises de outros casos completamente diferentes</td></tr>
                                    <tr><td><strong>Distração</strong></td><td>O modelo considera informações que não são relevantes para a tarefa atual</td></tr>
                                    <tr><td><strong>Interferência de estilo</strong></td><td>Um estilo definido globalmente atrapalha quando você precisa de abordagem diferente (relatório neutro vs fundamentação argumentativa)</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">A Alternativa: Customização por Projeto</h2>
                        <p>Em vez de configurar globalmente, use os recursos de <strong>projeto</strong> de cada plataforma:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Plataforma</th><th>Recurso</th><th>O que faz</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Claude</strong></td><td>Projetos</td><td>Agrupa conversas com instruções específicas isoladas</td></tr>
                                    <tr><td><strong>ChatGPT</strong></td><td>GPTs Customizados</td><td>Cria "versões" do ChatGPT com comportamento específico</td></tr>
                                    <tr><td><strong>Gemini</strong></td><td>Gems</td><td>Assistentes personalizados para tarefas específicas</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p><strong>Vantagem:</strong> Cada projeto/GPT/Gem tem seu próprio contexto isolado, sem contaminar outros.</p>
                    </div>
                `,
                exercise: {
                    title: "Verificar Configurações Globais",
                    icon: "⚙️",
                    description: "Verificar se personalização e memória globais estão desativadas ou vazias.",
                    steps: [
                        { title: "Verificar Personalização", items: ["Acesse: Configurações → Geral (ou Perfil)", "Localize o campo de preferências/instruções pessoais", "<strong>Recomendação:</strong> Deixar em branco para uso jurídico"] },
                        { title: "Verificar Memória", items: ["Acesse: Configurações → Memória (ou Privacidade)", "Veja se há lembranças salvas", "<strong>Recomendação:</strong> Limpar lembranças existentes"] },
                        { title: "Entender a alternativa", items: ["Explore como criar Projetos no Claude", "A customização será feita por projeto, não globalmente"] }
                    ],
                    checklist: [
                        "Entendo a diferença entre personalização e memória",
                        "Sei por que não usar configurações globais no Direito",
                        "Campo de personalização está em branco",
                        "Memória está limpa ou desativada",
                        "Sei que devo usar Projetos/GPTs/Gems para customização"
                    ]
                },
                tip: "A customização <strong>por projeto</strong> é mais poderosa que a global: você define instruções específicas para cada tipo de tarefa, sem contaminação cruzada.",
                warning: "<strong>\"Vou configurar minha personalização global como 'Sou magistrado'.\"</strong><br>Parece eficiente, mas quando você quiser explorar argumentos do autor ou simular a perspectiva de um advogado, o modelo vai insistir na postura de julgador. <strong>Solução:</strong> Use Projetos com instruções específicas para cada contexto."
            },
            "0.6": {
                number: "0.6",
                module: "Módulo 0 — Preparação",
                title: "Recursos Agênticos",
                objective: "Entender que os assistentes de IA atuais possuem ferramentas que ativam automaticamente — e que a resposta nem sempre vem diretamente do modelo.",
                content: `
                    <div class="block">
                        <h2 class="block-title">Antes e Agora</h2>
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin:24px 0;">
                            <div style="background:var(--bg-tertiary);border-radius:12px;padding:20px;border:1px solid var(--border-light);">
                                <div style="font-weight:700;font-size:14px;text-transform:uppercase;letter-spacing:1px;color:var(--text-muted);margin-bottom:16px;">Antes</div>
                                <div style="text-align:center;padding:12px 0;">
                                    <div style="background:var(--accent-blue);color:white;padding:10px 16px;border-radius:8px;display:inline-block;font-weight:600;">Pergunta</div>
                                    <div style="font-size:24px;color:var(--text-muted);margin:8px 0;">↓</div>
                                    <div style="background:var(--bg-card);border:1px solid var(--border-medium);padding:10px 16px;border-radius:8px;display:inline-block;">Modelo responde</div>
                                    <div style="font-size:24px;color:var(--text-muted);margin:8px 0;">↓</div>
                                    <div style="background:var(--accent-gold);color:white;padding:10px 16px;border-radius:8px;display:inline-block;font-weight:600;">Resposta</div>
                                </div>
                                <div style="margin-top:16px;padding-top:16px;border-top:1px dashed var(--border-medium);font-size:14px;color:var(--text-secondary);">
                                    <strong>Recursos:</strong> chat + anexo<br>
                                    <strong>Fonte:</strong> conhecimento interno (treinamento)
                                </div>
                            </div>
                            <div style="background:var(--bg-tertiary);border-radius:12px;padding:20px;border:2px solid var(--accent-blue);">
                                <div style="font-weight:700;font-size:14px;text-transform:uppercase;letter-spacing:1px;color:var(--accent-blue);margin-bottom:16px;">Agora</div>
                                <div style="text-align:center;padding:12px 0;">
                                    <div style="background:var(--accent-blue);color:white;padding:10px 16px;border-radius:8px;display:inline-block;font-weight:600;">Instrução</div>
                                    <div style="font-size:24px;color:var(--text-muted);margin:8px 0;">↓</div>
                                    <div style="background:var(--bg-card);border:1px solid var(--border-medium);padding:10px 16px;border-radius:8px;display:inline-block;">Modelo <strong>decide</strong></div>
                                    <div style="font-size:24px;color:var(--text-muted);margin:8px 0;">↓</div>
                                    <div style="background:var(--bg-card);border:2px dashed var(--accent-blue-light);padding:12px 16px;border-radius:8px;display:inline-block;">
                                        <div style="font-size:11px;text-transform:uppercase;letter-spacing:1px;color:var(--accent-blue);font-weight:700;margin-bottom:8px;">Ferramentas</div>
                                        <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;">
                                            <span style="background:var(--accent-blue-light);color:white;padding:4px 10px;border-radius:4px;font-size:12px;">Busca</span>
                                            <span style="background:var(--accent-blue-light);color:white;padding:4px 10px;border-radius:4px;font-size:12px;">Pensamento</span>
                                            <span style="background:var(--accent-blue-light);color:white;padding:4px 10px;border-radius:4px;font-size:12px;">Análise</span>
                                            <span style="background:var(--accent-blue-light);color:white;padding:4px 10px;border-radius:4px;font-size:12px;">Artefatos</span>
                                            <span style="background:var(--accent-blue-light);color:white;padding:4px 10px;border-radius:4px;font-size:12px;">Código</span>
                                        </div>
                                    </div>
                                    <div style="font-size:24px;color:var(--text-muted);margin:8px 0;">↓</div>
                                    <div style="background:var(--accent-gold);color:white;padding:10px 16px;border-radius:8px;display:inline-block;font-weight:600;">Resposta</div>
                                </div>
                                <div style="margin-top:16px;padding-top:16px;border-top:1px dashed var(--border-medium);font-size:14px;color:var(--text-secondary);">
                                    <strong>Recursos:</strong> chat + anexo + <em>ferramentas</em><br>
                                    <strong>Fonte:</strong> modelo + ferramentas externas
                                </div>
                            </div>
                        </div>
                        <p style="margin-top:16px;">A diferença fundamental: <strong>o modelo agora decide</strong> se precisa acionar ferramentas externas. Isso muda a origem da resposta.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">O que são Recursos Agênticos?</h2>
                        <p>São <strong>ferramentas externas</strong> que o modelo pode acionar para complementar sua resposta:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Ferramenta</th><th>O que faz</th><th>Exemplo de uso</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Busca na web</strong></td><td>Pesquisa informações em tempo real</td><td>Jurisprudência recente, notícias, normas atualizadas</td></tr>
                                    <tr><td><strong>Pensamento estendido</strong></td><td>Raciocínio mais profundo antes de responder</td><td>Problemas complexos, análises que exigem reflexão</td></tr>
                                    <tr><td><strong>Análise de dados</strong></td><td>Processa planilhas e extrai padrões</td><td>Tabelas com muitos dados, cálculos estatísticos</td></tr>
                                    <tr><td><strong>Artefatos</strong></td><td>Cria documentos estruturados</td><td>Tabelas, código, documentos formatados</td></tr>
                                    <tr><td><strong>Execução de código</strong></td><td>Roda código para cálculos precisos</td><td>Operações matemáticas complexas</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Como as Ferramentas São Ativadas?</h2>
                        <p>Existem três formas:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Forma</th><th>Descrição</th><th>Exemplo</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Por solicitação</strong></td><td>Você pede explicitamente</td><td>"Pesquise na web sobre..." / "Use pensamento estendido"</td></tr>
                                    <tr><td><strong>Por autorização</strong></td><td>Você habilita a ferramenta e o modelo decide quando usar</td><td>Ativar busca web nas configurações</td></tr>
                                    <tr><td><strong>Por iniciativa própria</strong></td><td>O modelo decide sozinho que precisa da ferramenta</td><td>Criar artefato quando você pede uma tabela</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Esse é o conceito de <strong>agência</strong>: o modelo tem capacidade de <strong>decidir</strong> e <strong>executar ações</strong> além de simplesmente responder.</p>
                    </div>
                    <div class="callout callout-warning">
                        <div class="callout-title">⚠️ A Resposta Nem Sempre Vem do Modelo</div>
                        <p>Quando uma ferramenta é ativada, parte da resposta vem <strong>da ferramenta</strong>, não do conhecimento interno do modelo.</p>
                        <p><strong>Exemplo:</strong> Se o modelo busca na web, a informação veio da internet — com todas as vantagens (atualização) e riscos (fontes não verificadas) que isso implica.</p>
                    </div>
                    <div class="callout callout-info">
                        <div class="callout-title">💡 Vantagem do Claude: Transparência</div>
                        <p>O Claude <strong>sempre informa</strong> quando está usando uma ferramenta. Você vê mensagens como "Buscando na web...", "Criando artefato...", "Analisando...".</p>
                        <p>Outros modelos (ChatGPT, Gemini) também usam ferramentas, mas <strong>nem sempre informam</strong>. No Claude, você sabe a origem da informação.</p>
                    </div>
                `,
                exercise: {
                    title: "Explorando Recursos Agênticos",
                    icon: "🔧",
                    description: "Experimentar diferentes ferramentas e observar como elas modificam as respostas.",
                    steps: [
                        { title: "Tarefa 1: Busca Web", items: ["Abra uma nova conversa no Claude", "<strong>Ative a ferramenta de busca</strong> (ícone de globo/lupa)", "Pergunte: <code>Quais foram as últimas decisões do STF sobre inteligência artificial?</code>", "Observe: o Claude informa que está buscando?", "Note: a resposta cita fontes externas?"] },
                        { title: "Tarefa 2: Sem Busca", items: ["<strong>Abra nova conversa</strong>", "<strong>Desative a busca web</strong>", "Faça a mesma pergunta", "Compare: qual resposta é mais atualizada?", "Qual cita fontes concretas?"] },
                        { title: "Tarefa 3: Artefato", items: ["Peça: <code>Crie uma tabela comparando Claude, ChatGPT e Gemini.</code>", "Observe se o Claude cria um artefato automaticamente", "Note a diferença entre resposta em texto e artefato estruturado"] },
                        { title: "Tarefa 4: Pensamento Estendido", items: ["Ative o pensamento estendido (se disponível)", "Faça uma pergunta complexa: <code>Analise os prós e contras do uso de IA generativa no Judiciário.</code>", "Observe se o modelo indica que está \"pensando\" mais profundamente"] },
                        { title: "Tarefa 5: Cálculo Complexo", items: ["<strong>Abra nova conversa</strong>", "<strong>Desative</strong> a ferramenta de análise de dados/código", "Pergunte: <code>Quanto é 7.847.293 x 9.182.746?</code>", "Anote a resposta (provavelmente incorreta ou aproximada)", "<strong>Abra nova conversa e ative</strong> a ferramenta de análise", "Faça a mesma pergunta", "Compare: o modelo gerou código para calcular?", "A resposta com ferramenta é precisa: <strong>72.059.698.406.578</strong>"] }
                    ],
                    checklist: [
                        "Testei busca web ativada e desativada",
                        "Percebi a diferença nas respostas",
                        "Vi o Claude criar um artefato",
                        "Testei cálculo com e sem ferramenta de análise",
                        "Entendo que ferramentas modificam a origem da resposta",
                        "Percebi que o Claude informa quando usa ferramentas",
                        "Compreendo o conceito básico de agência"
                    ]
                },
                tip: "Preste atenção às <strong>indicações visuais</strong> do Claude: \"Buscando...\", \"Analisando...\", \"Criando artefato...\". Isso mostra qual ferramenta está sendo usada e de onde vem a informação.",
                warning: "<strong>\"Se a ferramenta está disponível, a resposta é sempre melhor.\"</strong><br>Nem sempre. Busca web pode trazer fontes não confiáveis. Pensamento estendido pode ser desnecessário para perguntas simples. Entenda o que cada ferramenta faz para decidir quando usá-la."
            },
            // ═══════════════════════════════════════════════════════════════
            // MÓDULO 1 — FUNDAMENTOS DOS LLMs
            // ═══════════════════════════════════════════════════════════════
            "1.1": {
                number: "1.1",
                module: "Módulo 1 — Fundamentos",
                title: "LLMs como Máquinas de Criação",
                objective: "Entender que LLMs não reproduzem textos do passado — eles transformam o presente e criam o futuro.",
                content: `
                    <div class="block">
                        <h2 class="block-title">O Imaginário Comum (e Errado)</h2>
                        <p>Muita gente pensa que usar LLMs é:</p>
                        <ul style="margin:16px 0 16px 24px;color:var(--text-secondary);">
                            <li><strong>Trapaça</strong> — "está copiando de algum lugar"</li>
                            <li><strong>Antiético</strong> — "está roubando trabalho de outras pessoas"</li>
                            <li><strong>Coisa de mentes preguiçosas</strong> — "não quer pensar por conta própria"</li>
                        </ul>
                        <p>Esse imaginário vem de uma <strong>compreensão errada</strong> de como os LLMs funcionam.</p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Modo Google vs Modo LLM</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Modo Google</th><th>Modo LLM</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Reproduz o passado</strong></td><td><strong>Transforma o presente</strong></td></tr>
                                    <tr><td>Arquivos escritos, publicados e indexados</td><td>Não há arquivos dentro do LLM</td></tr>
                                    <tr><td>O arquivo original é reproduzido fielmente</td><td>Cada resposta é única e criada no momento</td></tr>
                                    <tr><td>Busca → Encontra → Reproduz</td><td>Processa → Transforma → Cria</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="callout callout-warning">
                        <div class="callout-title">💡 Não há PDFs dentro do LLM</div>
                        <p>O LLM <strong>não consulta um "banco de textos"</strong>. Não existem PDFs, DOCs ou arquivos dentro dele.</p>
                        <p>O que existe são <strong>parâmetros</strong> — bilhões de números (pesos) que codificam padrões estatísticos de linguagem.</p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Cada Resposta é Única</h2>
                        <p>Quando você faz uma pergunta ao LLM:</p>
                        <ul style="margin:16px 0 16px 24px;color:var(--text-secondary);">
                            <li>Ele <strong>não busca</strong> uma resposta pronta em algum banco de dados</li>
                            <li>Ele <strong>gera</strong> uma resposta nova, token a token</li>
                            <li>A resposta é um <strong>mosaico de possibilidades estatísticas</strong></li>
                            <li>Raramente ele "regurgita" — reproduz verbatim algo que viu no treino</li>
                        </ul>
                        <div class="callout callout-info">
                            <div class="callout-title">🎨 A Metáfora do Artista</div>
                            <p>Um artista que estudou milhares de pinturas não está "copiando" quando pinta algo novo. Ele <strong>aprendeu técnicas</strong> e as aplica de forma original.</p>
                            <p>O LLM faz algo similar: aprendeu <strong>padrões de linguagem</strong> e os recombina de formas novas.</p>
                        </div>
                    </div>

                    <div class="block">
                        <h2 class="block-title">O que os LLMs Realmente São</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Conceito</th><th>Explicação</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Large Language Model</strong></td><td>Modelos de Linguagem de Larga Escala</td></tr>
                                    <tr><td><strong>Treinamento</strong></td><td>Treinados com trilhões de textos para prever a próxima palavra</td></tr>
                                    <tr><td><strong>Por dentro</strong></td><td>Não há textos — há números (parâmetros)</td></tr>
                                    <tr><td><strong>Funcionamento</strong></td><td>Máquinas de transformação e criação, não de reprodução</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="block">
                        <h2 class="block-title">A Recombinação</h2>
                        <p>A <strong>recombinação</strong> de padrões pode resultar em:</p>
                        <ul style="margin:16px 0 16px 24px;color:var(--text-secondary);">
                            <li>Algo <strong>semelhante</strong> ao que já existe (padrões comuns)</li>
                            <li>Algo <strong>completamente inusitado</strong> (combinações novas)</li>
                        </ul>
                        <p>É por isso que o LLM pode ser <strong>criativo</strong>: ele não está limitado a reproduzir — está recombinando de formas que podem nunca ter existido antes.</p>
                    </div>
                `,
                exercise: {
                    title: "Entendendo a Natureza Criativa dos LLMs",
                    icon: "🎨",
                    description: "Observar como os LLMs criam respostas novas em vez de reproduzir textos existentes.",
                    steps: [
                        { title: "Teste de Originalidade", items: ["Peça ao Claude: <code>Escreva um parágrafo sobre inteligência artificial</code>", "Copie a resposta e busque no Google entre aspas", "Observe: você provavelmente não vai encontrar o texto exato em lugar nenhum", "Isso demonstra que o LLM criou algo novo, não copiou"] },
                        { title: "Teste de Variação", items: ["Faça a mesma pergunta 3 vezes: <code>Escreva uma frase sobre o mar</code>", "Compare as respostas", "Observe: cada resposta é diferente", "O LLM está criando, não consultando um banco de respostas prontas"] },
                        { title: "Teste de Criatividade", items: ["Peça: <code>Invente um conceito jurídico que não existe, mas que seria útil</code>", "Observe: o LLM consegue criar algo genuinamente novo", "Isso seria impossível se ele apenas reproduzisse textos existentes"] }
                    ],
                    checklist: [
                        "Entendo que LLMs não têm 'banco de textos' interno",
                        "Compreendo a diferença entre Modo Google (reprodução) e Modo LLM (criação)",
                        "Sei que cada resposta é gerada no momento, não buscada",
                        "Entendo que LLMs aprendem padrões, não memorizam textos"
                    ]
                },
                tip: "Quando alguém disser que usar LLMs é 'trapaça', explique: <strong>não há textos dentro do modelo</strong>. Ele aprende padrões de linguagem e os recombina — como um músico que estudou milhares de músicas e compõe algo novo.",
                warning: "<strong>\"O LLM está copiando textos da internet.\"</strong><br>Não é assim que funciona. O LLM foi treinado com textos, mas armazenou <strong>padrões estatísticos</strong>, não os textos em si. Ele gera respostas novas usando esses padrões."
            },
            "1.2": {
                number: "1.2",
                module: "Módulo 1 — Fundamentos",
                title: "Máquinas de Linguagem",
                objective: "Compreender a arquitetura Transformer e o mecanismo de atenção que revolucionou o processamento de linguagem.",
                content: `
                    <div class="block">
                        <h2 class="block-title">O que é um Transformer?</h2>
                        <p>Um <strong>Transformer</strong> é a arquitetura de rede neural por trás de todos os LLMs modernos (Claude, ChatGPT, Gemini). Foi introduzido em 2017 no paper <em>"Attention is All You Need"</em> da Google.</p>
                        <p>Pense no LLM como um <strong>compressor estatístico de linguagem</strong>:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Analogia</th><th>O que faz</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>JPEG para imagens</strong></td><td>Comprime milhões de pixels em padrões visuais</td></tr>
                                    <tr><td><strong>LLM para linguagem</strong></td><td>Comprime bilhões de textos em padrões probabilísticos</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p>É uma compressão <strong>com perdas</strong> (lossy): preserva a essência, não a reprodução exata. Por isso, LLMs capturam padrões gerais, mas podem errar detalhes específicos.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Self-Attention: A Metáfora do Coquetel</h2>
                        <p>O mecanismo central do Transformer é a <strong>self-attention</strong> (autoatenção). Imagine uma festa:</p>
                        <div class="callout callout-info">
                            <div class="callout-title">🎉 A Festa das Palavras</div>
                            <p>Você está num coquetel onde <strong>todos falam ao mesmo tempo</strong>. Você ouve todo mundo, mas seu cérebro <strong>foca nas conversas relevantes</strong> para o que você quer entender.</p>
                            <p>No Transformer, cada palavra "olha" para todas as outras e <strong>decide quais são importantes</strong> para entender o significado naquele contexto.</p>
                        </div>
                        <p><strong>Exemplo prático:</strong></p>
                        <div class="code-block">"O juiz analisou o <strong>processo</strong> e determinou que o <strong>processo</strong> de fabricação estava irregular."</div>
                        <p>A palavra "processo" aparece duas vezes, mas com significados diferentes. O mecanismo de atenção permite que o modelo entenda:</p>
                        <ul style="margin:16px 0 16px 24px;color:var(--text-secondary);">
                            <li>Primeiro "processo" → contexto jurídico (próximo de "juiz", "analisou")</li>
                            <li>Segundo "processo" → contexto industrial (próximo de "fabricação")</li>
                        </ul>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Tokens: As Unidades de Processamento</h2>
                        <p>LLMs não processam <strong>palavras</strong> — processam <strong>tokens</strong> (subpalavras).</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Palavra</th><th>Possível Tokenização</th></tr></thead>
                                <tbody>
                                    <tr><td>transformação</td><td>["trans", "form", "ação"]</td></tr>
                                    <tr><td>inconstitucionalidade</td><td>["in", "constitu", "cional", "idade"]</td></tr>
                                    <tr><td>LLM</td><td>["LL", "M"] ou ["LLM"]</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p><strong>Por que tokens?</strong> Permitem vocabulário finito (~50.000-100.000) para representar infinitas palavras, incluindo neologismos e termos técnicos.</p>
                        <p><strong>Regra prática:</strong> Em português, 1 token ≈ 0,7 palavras (ou ~4 caracteres).</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Embeddings: Palavras como Coordenadas</h2>
                        <p>Cada token é convertido em um <strong>vetor</strong> — uma lista de números que representa seu significado num espaço matemático de alta dimensão.</p>
                        <div class="callout callout-tip">
                            <div class="callout-title">🗺️ O Mapa Semântico</div>
                            <p>Imagine um mapa onde palavras similares ficam <strong>próximas geometricamente</strong>:</p>
                            <p>• "rei" e "rainha" estão próximos<br>• "cachorro" e "gato" estão próximos<br>• "rei" e "cachorro" estão distantes</p>
                            <p>A matemática famosa: <strong>"rei" - "homem" + "mulher" ≈ "rainha"</strong></p>
                        </div>
                        <p>Isso permite que o modelo capture <strong>relações semânticas</strong> entre conceitos — a base para "entender" linguagem.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Resumo Visual</h2>
                        <div class="code-block">TEXTO DE ENTRADA
    ↓
[Tokenização] → Divide em tokens
    ↓
[Embedding] → Converte em vetores numéricos
    ↓
[Self-Attention] → Cada token "olha" para os outros
    ↓
[Camadas Transformer] → Processa padrões (×12 a ×96 camadas)
    ↓
[Saída] → Probabilidades para próximo token</div>
                    </div>
                `,
                exercise: {
                    title: "Explorando Tokens e Atenção",
                    icon: "🔄",
                    description: "Experimentar como o modelo processa texto e entende contexto.",
                    steps: [
                        { title: "Testar Tokenização", items: ["Abra o Claude e pergunte: <code>Quantos tokens tem a palavra 'inconstitucionalidade'?</code>", "Peça: <code>Mostre como você tokeniza a frase: 'O juiz proferiu sentença no processo'</code>", "Observe: palavras comuns viram 1 token, palavras longas viram vários"] },
                        { title: "Testar Desambiguação por Contexto", items: ["Pergunte: <code>Na frase 'O banco estava vazio', o que significa 'banco'?</code>", "Agora pergunte: <code>Na frase 'O banco negou o empréstimo', o que significa 'banco'?</code>", "Observe: o modelo usa o contexto (atenção) para desambiguar"] },
                        { title: "Testar Relações Semânticas", items: ["Pergunte: <code>Complete a analogia: rei está para rainha assim como homem está para ___?</code>", "Teste outras: <code>advogado está para escritório assim como juiz está para ___?</code>", "Observe: o modelo captura relações semânticas nos embeddings"] },
                        { title: "Limite de Compressão", items: ["Peça um fato muito específico: <code>Qual o número exato do processo em que o STF decidiu X?</code>", "Observe: o modelo pode errar detalhes específicos", "Isso ilustra a 'compressão com perdas' — padrões gerais são preservados, detalhes podem se perder"] }
                    ],
                    checklist: [
                        "Entendo que LLMs usam arquitetura Transformer",
                        "Compreendo a metáfora da atenção como 'coquetel'",
                        "Sei que LLMs processam tokens, não palavras",
                        "Entendo que embeddings são coordenadas numéricas de significado",
                        "Reconheço que LLMs são 'compressores com perdas' — capturam padrões, não detalhes exatos"
                    ]
                },
                tip: "Quando o modelo erra um detalhe específico (número de processo, data exata), lembre-se: ele é um <strong>compressor estatístico</strong>. Padrões gerais são confiáveis; detalhes específicos precisam de verificação.",
                warning: "<strong>\"O modelo 'entende' o texto como um humano.\"</strong><br>Não exatamente. O modelo captura <strong>padrões estatísticos</strong> de como palavras se relacionam. É sofisticado o suficiente para parecer compreensão, mas o mecanismo é matemático, não cognitivo."
            },
            "1.3": {
                number: "1.3",
                module: "Módulo 1 — Fundamentos",
                title: "O Jogo da Adivinhação",
                objective: "Compreender que LLMs geram texto prevendo o próximo token — como um autocomplete sofisticado.",
                content: `
                    <div class="block">
                        <h2 class="block-title">Experimente o Jogo da Previsão</h2>
                        <p>Antes de explicarmos a teoria, <strong>experimente você mesmo</strong> como os LLMs geram texto. Escolha palavras para continuar a história e veja as probabilidades em ação:</p>
                        <iframe src="../docs/caderno/jogo-previsao.html" style="width:100%;height:700px;border:1px solid var(--border-light);border-radius:12px;margin:20px 0;box-shadow:var(--shadow-md);" loading="lazy"></iframe>
                        <p class="screenshot-caption" style="text-align:center;font-size:13px;color:var(--text-muted);margin-top:-12px;margin-bottom:24px;">Jogo interativo: escolha palavras e veja como funciona a predição de próximo token</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">O Autocomplete Mais Sofisticado do Mundo</h2>
                        <p>LLMs funcionam como o <strong>autocomplete do celular</strong> — mas com bilhões de parâmetros e treinado em trilhões de textos.</p>
                        <p>O processo é simples:</p>
                        <div class="code-block">Entrada: "O juiz determinou a"
    ↓
Modelo calcula probabilidades para TODOS os tokens possíveis:
    • "prisão" → 15%
    • "soltura" → 12%
    • "citação" → 8%
    • "intimação" → 7%
    • ... (50.000+ opções)
    ↓
Escolhe um token (ex: "prisão")
    ↓
Repete o processo: "O juiz determinou a prisão"
    ↓
Próximo token: "preventiva" (mais provável dado o contexto)</div>
                        <p>Isso se chama <strong>geração autorregressiva</strong>: cada token é gerado condicionado a todos os anteriores.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Temperature: O Controle de "Criatividade"</h2>
                        <p>O parâmetro <strong>temperature</strong> controla como o modelo escolhe entre os tokens possíveis:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Temperature</th><th>Comportamento</th><th>Quando usar</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>0.0</strong> (frio)</td><td>Sempre escolhe o mais provável (determinístico)</td><td>Fatos, dados, precisão</td></tr>
                                    <tr><td><strong>0.5-0.7</strong></td><td>Equilibrado: provável mas com variação</td><td>Redação, análises</td></tr>
                                    <tr><td><strong>1.0+</strong> (quente)</td><td>Mais aleatório, escolhe tokens menos prováveis</td><td>Brainstorming, criatividade</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="callout callout-info">
                            <div class="callout-title">🎮 Experimente a Temperature em Ação!</div>
                            <p>Mova o controle deslizante para ver como diferentes valores de temperature afetam a "criatividade" do modelo:</p>
                        </div>
                        <iframe src="../docs/caderno/temperatura-llm.html" style="width:100%;height:650px;border:1px solid var(--border-light);border-radius:12px;margin:20px 0;box-shadow:var(--shadow-md);" loading="lazy"></iframe>
                        <div class="callout callout-info">
                            <div class="callout-title">🍷 Metáfora do Vinho</div>
                            <p><strong>Temperature 0</strong> = Sóbrio — responde de forma previsível e segura</p>
                            <p><strong>Temperature 1.5</strong> = Embriagado — respostas criativas, mas pode "divagar"</p>
                        </div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">O Paradoxo: Determinismo vs Criatividade</h2>
                        <p>Um fato contraintuitivo:</p>
                        <div class="callout callout-warning">
                            <div class="callout-title">🎲 LLMs são Determinísticos!</div>
                            <p>Dado o <strong>mesmo input</strong> e a <strong>mesma seed</strong> (semente aleatória), o modelo produz <strong>exatamente a mesma resposta</strong>.</p>
                            <p>A "criatividade" que observamos vem da <strong>amostragem probabilística</strong> — o modelo sorteia entre as opções, ponderado pelas probabilidades.</p>
                        </div>
                        <p><strong>Implicação prática:</strong> Se você precisa de respostas consistentes e reproduzíveis, use temperature baixa. Se precisa de variação e ideias diferentes, use temperature mais alta.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Outras Estratégias de Amostragem</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Estratégia</th><th>O que faz</th><th>Analogia</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Greedy</strong></td><td>Sempre escolhe o token mais provável</td><td>Sempre pedir o prato mais popular</td></tr>
                                    <tr><td><strong>Top-k</strong></td><td>Considera apenas os k tokens mais prováveis</td><td>Escolher entre os 5 pratos mais populares</td></tr>
                                    <tr><td><strong>Top-p (nucleus)</strong></td><td>Considera tokens que somam p% de probabilidade</td><td>Escolher entre pratos que representam 90% dos pedidos</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Na prática, a maioria das interfaces já configura esses parâmetros. O Claude usa valores balanceados por padrão.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Por que Isso Importa?</h2>
                        <p>Entender a predição de tokens explica vários comportamentos:</p>
                        <ul style="margin:16px 0 16px 24px;color:var(--text-secondary);">
                            <li><strong>Por que o modelo "inventa"?</strong> Ele completa o que é estatisticamente provável, mesmo sem saber se é verdade</li>
                            <li><strong>Por que respostas variam?</strong> Amostragem probabilística produz resultados diferentes</li>
                            <li><strong>Por que às vezes é repetitivo?</strong> Temperature baixa = sempre escolhe o mais provável</li>
                            <li><strong>Por que pode ser incoerente?</strong> Cada token é escolhido localmente, sem "plano" global</li>
                        </ul>
                    </div>
                `,
                exercise: {
                    title: "Experimentando Predição de Tokens",
                    icon: "🎯",
                    description: "Observar como o modelo gera texto e como parâmetros afetam as respostas.",
                    steps: [
                        { title: "Teste de Completamento", items: ["Peça ao Claude: <code>Complete esta frase de 5 formas diferentes: 'O advogado apresentou'</code>", "Observe: cada completamento é diferente (amostragem)", "Peça: <code>Agora complete de forma determinística (mais provável)</code>", "Compare as respostas"] },
                        { title: "Observar Probabilidades", items: ["Pergunte: <code>Qual a próxima palavra mais provável após 'O juiz proferiu a'?</code>", "Peça: <code>Liste as 5 próximas palavras mais prováveis com percentuais estimados</code>", "Observe: o modelo tem noção de suas próprias probabilidades"] },
                        { title: "Testar Variação", items: ["Faça a mesma pergunta 3 vezes: <code>Dê um exemplo de fundamentação jurídica para danos morais</code>", "Observe: respostas similares mas não idênticas", "Isso demonstra a amostragem probabilística em ação"] },
                        { title: "Forçar Determinismo", items: ["Peça: <code>Responda de forma determinística, sempre escolhendo a opção mais provável: qual a capital do Brasil?</code>", "Agora peça: <code>Dê uma resposta criativa e inesperada para: qual a capital do Brasil?</code>", "Observe a diferença no comportamento"] }
                    ],
                    checklist: [
                        "Entendo que LLMs geram texto token a token",
                        "Compreendo o conceito de autocomplete sofisticado",
                        "Sei que temperature controla a 'criatividade'",
                        "Entendo por que respostas variam (amostragem)",
                        "Reconheço que o modelo é determinístico com mesma seed"
                    ]
                },
                tip: "Para tarefas que exigem <strong>consistência</strong> (relatórios, análises), prefira instruções que pedem respostas objetivas. Para <strong>brainstorming</strong>, peça explicitamente variações e alternativas.",
                warning: "<strong>\"O modelo pensou e decidiu escrever isso.\"</strong><br>Não há 'pensamento' no sentido humano. O modelo calcula probabilidades e amostra — é um processo estatístico, não deliberativo. Cada token é escolhido sem 'plano' para o texto completo."
            },
            "1.4": {
                number: "1.4",
                module: "Módulo 1 — Fundamentos",
                title: "Máquinas Estocásticas",
                objective: "Perceber que os LLMs fornecem respostas diferentes a cada interação, pois seu processamento é probabilístico e estocástico.",
                content: `
                    <div class="block">
                        <h2 class="block-title">O que é Estocástico?</h2>
                        <p>Na aula anterior, você aprendeu que LLMs funcionam como "máquinas de adivinhação" — prevendo o próximo token com base em probabilidades. Agora vamos explorar uma consequência fundamental disso: <strong>LLMs são máquinas estocásticas</strong>.</p>
                        <p><strong>Estocástico</strong> significa "baseado em probabilidade e aleatoriedade". Diferente de uma calculadora que sempre dá o mesmo resultado para 2+2, um LLM pode dar respostas diferentes para a mesma pergunta.</p>
                        <div class="code-block">
<span class="code-comment">// Calculadora (determinística)</span>
2 + 2 = 4  (sempre)
2 + 2 = 4  (sempre)
2 + 2 = 4  (sempre)

<span class="code-comment">// LLM (estocástico)</span>
"Me diz uma fruta" → "Maçã"
"Me diz uma fruta" → "Banana"
"Me diz uma fruta" → "Laranja"
                        </div>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Por que as Respostas Variam?</h2>
                        <p>Lembre-se: o modelo calcula uma <strong>distribuição de probabilidades</strong> para cada token. Para a pergunta "Me diz uma fruta", a distribuição pode ser:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Token</th><th>Probabilidade</th></tr></thead>
                                <tbody>
                                    <tr><td>Maçã</td><td>35%</td></tr>
                                    <tr><td>Banana</td><td>25%</td></tr>
                                    <tr><td>Laranja</td><td>20%</td></tr>
                                    <tr><td>Morango</td><td>10%</td></tr>
                                    <tr><td>Outros</td><td>10%</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p>O modelo <strong>amostra</strong> dessa distribuição — como girar uma roleta tendenciosa. "Maçã" tem maior chance de sair, mas não é garantida. Cada execução é um novo giro da roleta.</p>
                        <img src="assets/img/1Je65TdJbDm55KQCja7rPVw.png" alt="Representação visual de uma rede neural com camadas de processamento" style="max-width: 100%; margin: 20px 0; border-radius: 8px;">
                    </div>

                    <div class="block">
                        <h2 class="block-title">Padrões Ocultos nos Dados de Treinamento</h2>
                        <p>Embora as respostas variem, elas seguem <strong>padrões estatísticos</strong> aprendidos durante o treinamento. Alguns exemplos curiosos:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Pergunta</th><th>Resposta mais frequente</th><th>Por quê?</th></tr></thead>
                                <tbody>
                                    <tr><td>"Me diz uma fruta"</td><td>Maçã</td><td>Fruta mais citada em textos</td></tr>
                                    <tr><td>"Me diz uma ferramenta"</td><td>Martelo</td><td>Ferramenta icônica culturalmente</td></tr>
                                    <tr><td>"Pense num número de 1 a 100"</td><td>27 ou 37</td><td>Números "aleatórios" preferidos por humanos</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Os LLMs absorvem vieses culturais e estatísticos dos dados de treinamento. Quando humanos escrevem "escolha um número aleatório", tendem a escolher números como 27 ou 37. O modelo aprendeu esse padrão.</p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Regressão à Moda</h2>
                        <p>Na estatística, existe o conceito de <strong>regressão à média</strong>: em medições repetidas, valores extremos tendem a se aproximar da média. Os LLMs exibem um fenômeno similar, mas diferente: a <strong>regressão à moda</strong>.</p>
                        <p>A <strong>moda</strong> é o valor que aparece com mais frequência em um conjunto de dados. Nos LLMs, isso significa que o modelo tende a gravitar para as respostas mais comuns nos dados de treinamento.</p>
                        <div class="code-block">
<span class="code-comment">// Regressão à Média (estatística tradicional)</span>
Valores extremos → tendem à MÉDIA (valor central)

<span class="code-comment">// Regressão à Moda (LLMs)</span>
Respostas possíveis → tendem à MODA (mais frequente)
                        </div>
                        <p><strong>Por que isso acontece?</strong> O modelo foi treinado para prever o próximo token mais provável. "Mais provável" significa "mais frequente nos dados de treinamento". Portanto, sem instruções específicas, o modelo naturalmente gravita para:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Tipo de Tarefa</th><th>A Moda (resposta mais comum)</th></tr></thead>
                                <tbody>
                                    <tr><td>Escrever uma introdução</td><td>Fórmulas genéricas ("Nos dias atuais...", "É sabido que...")</td></tr>
                                    <tr><td>Analisar um contrato</td><td>Pontos óbvios que qualquer análise mencionaria</td></tr>
                                    <tr><td>Sugerir argumentos</td><td>Argumentos mais comuns na jurisprudência</td></tr>
                                    <tr><td>Resumir um texto</td><td>Estrutura padrão de resumo acadêmico</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p><strong>Implicação crucial:</strong> Sem instruções específicas, você receberá a resposta "média" — aquela que aparece com mais frequência em textos similares. Para obter respostas diferenciadas, você precisa <strong>afastar o modelo da moda</strong> com instruções precisas, exemplos específicos, ou pedindo explicitamente por abordagens não-convencionais.</p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Viés de Frequência</h2>
                        <p>A regressão à moda é uma manifestação de um fenômeno mais amplo: o <strong>viés de frequência</strong>. O modelo reproduz padrões na proporção em que aparecem nos dados de treinamento.</p>
                        <div class="code-block">
<span class="code-comment">// Nos dados de treinamento:</span>
"Maçã" aparece 10.000 vezes como exemplo de fruta
"Jabuticaba" aparece 500 vezes como exemplo de fruta

<span class="code-comment">// Na resposta do modelo:</span>
"Maçã" tem ~20x mais chance de ser gerada que "Jabuticaba"
                        </div>
                        <p><strong>Consequências práticas do viés de frequência:</strong></p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Área</th><th>O que é mais frequente nos dados</th><th>O que o modelo tende a gerar</th></tr></thead>
                                <tbody>
                                    <tr><td>Jurisdição</td><td>Textos de direito americano (em inglês)</td><td>Conceitos de common law mesmo quando perguntado sobre civil law</td></tr>
                                    <tr><td>Jurisprudência</td><td>Tribunais superiores mais citados</td><td>STF e STJ, mesmo quando TRF seria mais relevante</td></tr>
                                    <tr><td>Argumentos</td><td>Teses majoritárias e consolidadas</td><td>Argumentos "seguros" em vez de teses inovadoras</td></tr>
                                    <tr><td>Estilo</td><td>Linguagem jurídica formal tradicional</td><td>Texto rebuscado mesmo quando clareza é pedida</td></tr>
                                    <tr><td>Doutrina</td><td>Autores mais citados (clássicos)</td><td>Referências a doutrinadores famosos, não necessariamente os mais adequados</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p><strong>Por que isso importa no Direito?</strong> O viés de frequência pode fazer o modelo:</p>
                        <ul style="margin: 16px 0; padding-left: 24px; color: var(--text-secondary);">
                            <li>Privilegiar interpretações majoritárias sobre minoritárias (mesmo quando a minoritária é mais adequada ao caso)</li>
                            <li>Reproduzir vieses históricos presentes na jurisprudência</li>
                            <li>Sugerir soluções "padrão" quando o caso exige criatividade</li>
                            <li>Ignorar especificidades locais em favor de padrões mais universais</li>
                        </ul>
                        <p><strong>Antídoto:</strong> Seja específico. Em vez de "analise este contrato", diga "analise este contrato de locação comercial sob a perspectiva do locatário, identificando cláusulas potencialmente abusivas segundo o CDC e a jurisprudência do TJSP".</p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Implicações Práticas</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Situação</th><th>Consequência</th><th>O que fazer</th></tr></thead>
                                <tbody>
                                    <tr><td>Gerar textos criativos</td><td>Cada geração é única</td><td>Gere várias versões e escolha</td></tr>
                                    <tr><td>Análise de documentos</td><td>Pode destacar aspectos diferentes</td><td>Execute múltiplas vezes, compare</td></tr>
                                    <tr><td>Tarefas objetivas</td><td>Respostas podem variar ligeiramente</td><td>Use instruções mais específicas</td></tr>
                                    <tr><td>Reprodutibilidade</td><td>Difícil obter mesma resposta exata</td><td>Aceite variação ou use seed fixa</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                `,
                exercise: {
                    title: "Experimentando a Estocasticidade",
                    icon: "🎲",
                    description: "Observar na prática como o modelo dá respostas diferentes para a mesma pergunta e identificar padrões estatísticos.",
                    steps: [
                        {
                            title: "Tarefa 1: O Teste da Fruta e da Ferramenta",
                            items: [
                                "Abra uma nova conversa no Claude",
                                "Pergunte: <code>Me diz um nome de uma fruta.</code>",
                                "Anote a resposta (provavelmente 'Maçã')",
                                "Abra OUTRA nova conversa (limpe contexto)",
                                "Faça a mesma pergunta novamente",
                                "Repita 5 vezes, anotando cada resposta",
                                "Agora teste: <code>Me diz um nome de uma ferramenta.</code>",
                                "Repita 5 vezes em conversas separadas",
                                "Observe: há padrões? 'Martelo' aparece mais?"
                            ]
                        },
                        {
                            title: "Tarefa 2: O Número 'Aleatório'",
                            items: [
                                "Abra uma nova conversa",
                                "Peça: <code>Pense em um número de 1 a 100. Qual número você escolheu?</code>",
                                "Anote o número",
                                "Repita em 10 conversas diferentes",
                                "Analise: O número 27 ou 37 apareceu? Quantas vezes?",
                                "Compare com uma distribuição verdadeiramente aleatória (cada número teria ~1% de chance)"
                            ]
                        },
                        {
                            title: "Tarefa 3: O Teste do Time de Futebol",
                            items: [
                                "Abra uma nova conversa",
                                "Pergunte: <code>Qual o melhor time de futebol de São Paulo?</code>",
                                "Anote a resposta e os argumentos",
                                "Repita em 5 conversas diferentes",
                                "Compare: As respostas variam (Palmeiras, Corinthians, São Paulo, Santos)?",
                                "Observe: O modelo consegue ser 'objetivo' sobre algo subjetivo?",
                                "Note como o modelo lida com a pergunta tendenciosa"
                            ]
                        }
                    ],
                    checklist: [
                        "Entendo que LLMs são máquinas estocásticas (probabilísticas)",
                        "Percebi que a mesma pergunta pode gerar respostas diferentes",
                        "Identifiquei padrões estatísticos nas respostas (Maçã, Martelo, 27)",
                        "Compreendo o conceito de 'regressão à moda' — o modelo gravita para respostas comuns",
                        "Entendo o 'viés de frequência' — o modelo reproduz o que é mais comum nos dados",
                        "Sei que instruções genéricas produzem respostas genéricas",
                        "Compreendo que variação é característica, não defeito",
                        "Sei que posso usar essa variação a meu favor (múltiplas gerações)"
                    ]
                },
                tip: "A estocasticidade pode ser <strong>controlada</strong> (não eliminada). Através de <strong>prompts estruturados</strong> — técnica que você aprenderá no módulo de Engenharia de Prompt — conseguimos dirigir o modelo para respostas mais <strong>previsíveis</strong>, mais <strong>padronizadas</strong> e mais <strong>profundas</strong>. Quanto mais específico o prompt, menor a variação.",
                warning: "<strong>\"Preciso de respostas sempre iguais, então LLMs não servem.\"</strong><br>Errado. A variação é característica, não defeito — mas pode ser <strong>minimizada</strong>. Instruções detalhadas, exemplos (few-shot), formatos específicos e restrições explícitas reduzem drasticamente a variação. O segredo está na qualidade do prompt, não na natureza do modelo."
            },
            "1.5": {
                number: "1.5",
                module: "Módulo 1 — Fundamentos",
                title: "Maldição da Reversão",
                objective: "Perceber que os LLMs aprendem com base na frequência das palavras na base de treinamento, tendo facilidade em uma direção e dificuldade na direção inversa.",
                content: `
                    <div class="block">
                        <h2 class="block-title">O que é a Maldição da Reversão?</h2>
                        <p>A <strong>Maldição da Reversão</strong> (Reversal Curse) é um fenômeno documentado em <a href="https://arxiv.org/abs/2309.12288" target="_blank">estudo de 2023</a> que demonstra uma limitação fundamental dos LLMs: eles aprendem associações em uma <strong>direção específica</strong>, não bidirecionalmente como os humanos.</p>
                        <p>Se um LLM aprendeu que "A está relacionado a B" nos dados de treinamento, ele <strong>não necessariamente</strong> consegue deduzir que "B está relacionado a A".</p>
                        <div class="code-block">
<span class="code-comment">// Humano (relacionamento bidirecional)</span>
"Anitta é filha de Miriam Macedo"
   ↔ automaticamente sabe que
"Miriam Macedo é mãe de Anitta"

<span class="code-comment">// LLM (relacionamento unidirecional)</span>
"Anitta → Miriam Macedo" ✓ (direção frequente nos dados)
"Miriam Macedo → Anitta" ✗ (direção rara, pode falhar)
                        </div>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Por que Isso Acontece?</h2>
                        <p>Lembre-se: LLMs são máquinas de previsão de tokens treinadas em texto. Eles aprendem padrões <strong>na ordem em que aparecem</strong> nos dados.</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Nos dados de treinamento</th><th>O que o modelo aprende</th></tr></thead>
                                <tbody>
                                    <tr><td>"Anitta, nome artístico de Larissa de Macedo Machado, é filha de Miriam Macedo..."</td><td>Anitta → Miriam Macedo (forte)</td></tr>
                                    <tr><td>Raras menções de "Miriam Macedo" como sujeito principal</td><td>Miriam Macedo → ? (fraco)</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p>A direção "pessoa famosa → familiar" aparece milhares de vezes. A direção inversa "familiar → pessoa famosa" quase nunca aparece como padrão nos textos.</p>
                    </div>
                `,
                exercise: {
                    title: "Teste da Reversão",
                    icon: "🔄",
                    description: "Experimentar a maldição da reversão com exemplos práticos e observar a assimetria nas respostas.",
                    steps: [
                        {
                            title: "Tarefa 1: Teste Anitta (Direção Fácil)",
                            items: [
                                "Abra uma nova conversa no Claude",
                                "Pergunte: <code>Responda rápido, SEM CONSULTAR A INTERNET: Qual o nome da mãe da Anitta?</code>",
                                "Observe: o modelo provavelmente responde corretamente (Miriam Macedo)",
                                "Anote a resposta e o nível de confiança do modelo"
                            ]
                        },
                        {
                            title: "Tarefa 2: Teste Anitta (Direção Inversa)",
                            items: [
                                "Abra uma <strong>NOVA conversa</strong> (importante: contexto limpo)",
                                "Pergunte: <code>NÃO CONSULTE A INTERNET. Quem é a filha de Miriam Macedo?</code>",
                                "Observe: o modelo provavelmente não sabe ou alucina um nome fictício",
                                "Compare: mesma informação, direções opostas, resultados diferentes"
                            ]
                        }
                    ],
                    checklist: [
                        "Entendo o conceito de 'Maldição da Reversão'",
                        "Percebi que LLMs aprendem associações em uma direção",
                        "Testei a assimetria com o exemplo Anitta/Miriam Macedo",
                        "Compreendo por que a direção da pergunta importa",
                        "Entendo que LLMs não 'entendem' relacionamentos como humanos"
                    ]
                },
                tip: "Os LLMs <strong>não \"entendem\"</strong> relacionamentos bidirecionais como os humanos. Eles dependem da <strong>frequência estatística</strong> das associações nos dados de treinamento.",
                warning: "<strong>\"Se o modelo sabe que A→B, ele sabe que B→A.\"</strong><br>Errado. Esta é a maldição da reversão. LLMs não fazem inferência lógica automática — eles reproduzem padrões estatísticos. Se a reversão não está nos dados de treinamento, o modelo não a 'deduz' sozinho."
            },
            "1.6": {
                number: "1.6",
                module: "Módulo 1 — Fundamentos",
                title: "A Janela de Contexto",
                objective: "Dominar o conceito de janela de contexto — seu superpoder e sua kriptonita no uso de LLMs.",
                content: `
                    <div class="block">
                        <h2 class="block-title">O que é Janela de Contexto?</h2>
                        <p>A <strong>Janela de Contexto</strong> é a quantidade de texto que a máquina consegue "prestar atenção" ao mesmo tempo. O modelo só enxerga uma janela limitada — e esquece o que fica muito para trás.</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Modelo</th><th>Janela Padrão</th><th>Janela Estendida (beta)</th></tr></thead>
                                <tbody>
                                    <tr><td>GPT-4o (2024)</td><td>128K tokens</td><td>—</td></tr>
                                    <tr><td>Claude Sonnet 4.5</td><td>200K tokens</td><td>1M tokens</td></tr>
                                    <tr><td><strong>Claude Opus 4.6</strong></td><td>200K tokens</td><td>1M tokens</td></tr>
                                    <tr><td>Gemini 2.0</td><td>1M tokens</td><td>2M tokens</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Na prática, 200K tokens equivalem a aproximadamente <strong>500 páginas</strong> de texto ou um livro inteiro. Mas atenção: isso não significa que você pode anexar 500 páginas. Dentro da janela de contexto entram também o prompt de sistema e as respostas do modelo. Por isso, em um modelo de 200K, a <strong>capacidade real de processamento</strong> fica em torno de <strong>150-200 páginas</strong> — e mesmo assim, com degradação de qualidade conforme veremos no fenômeno do <em>Context Rot</em> mais adiante.</p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Duas Metáforas para Entender</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Metáfora</th><th>O que significa</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>🚶 Trilha na Areia</strong></td><td>Você caminha deixando pegadas. Conforme avança, as pegadas antigas vão sendo apagadas pelo vento. Novas paisagens surgem, mas o que está mais próximo é visto com maior foco — o distante já se perdeu.</td></tr>
                                    <tr><td><strong>🗂️ Mesa de Trabalho</strong></td><td>Você vai empilhando documentos na mesa. Quando a pilha cresce demais, o que estava embaixo vai sendo soterrado — ainda existe, mas fica cada vez mais difícil de acessar até desaparecer.</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p><strong>Trate a janela de contexto como uma mesa de trabalho.</strong> O que você coloca primeiro pode ser soterrado pelo que vem depois.</p>
                    </div>

                    <div class="callout callout-warning">
                        <div class="callout-title">⚡ Superpoder e Kriptonita</div>
                        <p>A janela de contexto será seu <strong>superpoder</strong> e sua <strong>kriptonita</strong>:</p>
                        <ul style="margin: 12px 0; padding-left: 24px;">
                            <li><strong>Pouco contexto</strong> = resposta fraca, genérica (o modelo não tem informação suficiente)</li>
                            <li><strong>Excesso de contexto</strong> = distração, degradação (o modelo se perde no volume)</li>
                        </ul>
                        <p>O segredo é o <strong>equilíbrio</strong>: contexto suficiente para a tarefa, não mais.</p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">O Fenômeno "Context Rot"</h2>
                        <p>Um <a href="https://research.trychroma.com/context-rot" target="_blank">estudo de 2025 da Chroma Research</a> documentou a <strong>degradação de desempenho</strong> conforme o contexto aumenta — o chamado <strong>Context Rot</strong> (apodrecimento do contexto).</p>
                        <p>Contrário à suposição comum, os LLMs <strong>não processam uniformemente</strong> todos os tokens em contextos longos. A qualidade cai dramaticamente.</p>
                        <img src="https://research.trychroma.com/img/context_rot/hero_plot.png" alt="Gráfico mostrando degradação de desempenho de LLMs conforme contexto aumenta" style="max-width: 100%; margin: 20px 0; border-radius: 8px; border: 1px solid var(--border-light);">
                        <p><strong>Como ler o gráfico:</strong> O eixo X mostra o tamanho do contexto (de 25 a 10.000 palavras). O eixo Y mostra a precisão. Observe como <strong>todos os modelos</strong> (Claude, GPT-4, Gemini, Qwen) começam com alta precisão em contextos curtos, mas <strong>degradam significativamente</strong> conforme o contexto aumenta.</p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Mais Contexto ≠ Melhor Resultado</h2>
                        <p>A promessa de janelas de 1 milhão de tokens pode ser uma <strong>armadilha</strong>:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Efeito</th><th>O que acontece</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Degradação de qualidade</strong></td><td>Quanto mais texto, menor a precisão em encontrar informações específicas</td></tr>
                                    <tr><td><strong>Aumento de latência</strong></td><td>Mais contexto = mais tempo de processamento (segundos ou minutos)</td></tr>
                                    <tr><td><strong>Custo maior</strong></td><td>Você paga por token processado — contexto grande = conta maior</td></tr>
                                    <tr><td><strong>Diluição de instruções</strong></td><td>Suas instruções podem se "perder" no meio de documentos longos</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p><strong>Regra prática:</strong> Não jogue tudo na janela só porque cabe. Selecione o que é relevante.</p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Contextos Isolados</h2>
                        <p>Cada conversa é uma janela de contexto <strong>independente</strong>:</p>
                        <div class="code-block">
Conversa 1: [Você: "Meu nome é João"] [Claude: "Olá João!"]
Conversa 2: [Você: "Qual meu nome?"] [Claude: "Não sei seu nome."]

↑ Janelas completamente isoladas — o modelo NÃO transfere informação.</div>
                        <p>Quando você abre uma nova conversa, o modelo começa do <strong>zero</strong> — sem memória das conversas anteriores.</p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Simule a Janela de Contexto</h2>
                        <p>Use o simulador abaixo para entender na prática como a janela de contexto funciona. Adicione elementos e veja o que acontece quando ela enche:</p>
                        <iframe src="../docs/caderno/demo-contexto.html" style="width:100%;height:600px;border:1px solid var(--border-light);border-radius:12px;margin:20px 0;box-shadow:var(--shadow-md);" loading="lazy"></iframe>
                        <p><strong>Experimente:</strong> Compare os modos <em>Stuffing</em> vs <em>RAG</em> e veja a diferença entre <em>Colapso</em> e <em>Deslizante</em>.</p>
                    </div>
                `,
                exercise: {
                    title: "Explorando a Janela de Contexto",
                    icon: "📐",
                    description: "Experimentar os limites e comportamentos da janela de contexto na prática.",
                    steps: [
                        { title: "Testar Memória da Conversa", items: ["Inicie uma conversa e diga: <code>Meu nome é João e trabalho no TRF5</code>", "Faça várias perguntas sobre outros assuntos (5-10 mensagens)", "Pergunte: <code>Qual meu nome e onde trabalho?</code>", "Observe: o modelo lembra (está dentro da janela)"] },
                        { title: "Testar Isolamento de Contexto", items: ["Abra uma NOVA conversa (importante)", "Pergunte: <code>Qual meu nome e onde trabalho?</code>", "Observe: o modelo NÃO sabe (contextos são isolados)", "Entenda: cada conversa é uma janela independente"] }
                    ],
                    checklist: [
                        "Entendo que a janela de contexto é como uma mesa de trabalho limitada",
                        "Sei os tamanhos aproximados (200K padrão, 1M estendido)",
                        "Compreendo o fenômeno 'Context Rot' (degradação com contexto longo)",
                        "Entendo que mais contexto não significa melhor resultado",
                        "Sei que cada conversa é uma janela isolada"
                    ]
                },
                tip: "Trate a janela de contexto como <strong>mesa de trabalho</strong>: coloque apenas o que é relevante para a tarefa atual. Posicione informações importantes no <strong>início</strong> ou no <strong>final</strong>, nunca no meio.",
                warning: "<strong>\"Vou jogar todo o processo na janela porque cabe.\"</strong><br>Péssima ideia. Quanto maior o contexto, maior a latência, menor a precisão, e maior o custo. Selecione os documentos relevantes em vez de jogar tudo."
            },
            "1.7": {
                number: "1.7",
                module: "Módulo 1 — Fundamentos",
                title: "O Conhecimento da Máquina",
                objective: "Entender de onde os LLMs tiram conhecimento e saber quando usar cada fonte.",
                content: `
                    <div class="block">
                        <h2 class="block-title">As Quatro Fontes de Conhecimento</h2>
                        <p>Os LLMs podem acessar conhecimento de <strong>quatro fontes diferentes</strong>:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Fonte</th><th>O que é</th><th>Como funciona</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Paramétrico</strong></td><td>Pesos e conexões da rede neural</td><td>Aprendido durante o treinamento</td></tr>
                                    <tr><td><strong>Do Usuário</strong></td><td>Via prompt ou anexos</td><td>Você fornece no momento da conversa</td></tr>
                                    <tr><td><strong>De Sistema</strong></td><td>Prompt de sistema, configurações</td><td>Definido pelo desenvolvedor</td></tr>
                                    <tr><td><strong>Buscado</strong></td><td>Internet, APIs, ferramentas</td><td>Recuperado em tempo real</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p>O segredo para usar bem os LLMs é <strong>saber quando usar cada fonte</strong>.</p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Conhecimento Paramétrico: O "Cérebro"</h2>
                        <p>É o que está "na cabeça" do LLM — armazenado nos bilhões de parâmetros durante o treinamento.</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Característica</th><th>Implicação</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Probabilístico</strong></td><td>Baseado em frequência estatística, não em certeza</td></tr>
                                    <tr><td><strong>Frequentista</strong></td><td>O que apareceu mais no treino tem mais peso</td></tr>
                                    <tr><td><strong>Estático/Congelado</strong></td><td>Não muda após o treinamento</td></tr>
                                    <tr><td><strong>Datado (Cutoff)</strong></td><td>Tem uma data limite — não sabe eventos posteriores</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="callout callout-warning">
                        <div class="callout-title">📅 Data de Corte (Knowledge Cutoff)</div>
                        <p>Todo modelo tem uma <strong>data limite</strong> de conhecimento. Pergunte: <code>Qual sua data de corte?</code></p>
                        <p>Eventos após essa data: o modelo <strong>não sabe</strong> (mas pode inventar com confiança).</p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Quando Usar Cada Fonte?</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Use o Paramétrico para...</th><th>Use Conhecimento do Usuário para...</th></tr></thead>
                                <tbody>
                                    <tr><td>Explicar conceitos (ex: "O que é mandado de segurança?")</td><td>Analisar documentos específicos</td></tr>
                                    <tr><td>Conhecimento estável (gramática, lógica, definições)</td><td>Fatos que mudam (leis recentes, preços)</td></tr>
                                    <tr><td>Criatividade e cenários hipotéticos</td><td>Dados específicos (números de processo, citações)</td></tr>
                                    <tr><td>Informações amplamente documentadas</td><td>Casos concretos e análises precisas</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Conhecimento do Usuário: Via Prompt vs Via Anexo</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Método</th><th>Quando usar</th><th>Limite prático</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Via Prompt</strong></td><td>Textos curtos, trechos específicos</td><td>Até ~10-20 páginas coladas</td></tr>
                                    <tr><td><strong>Via Anexo</strong></td><td>Documentos completos (PDFs, Word)</td><td>Até ~150-200 páginas (com degradação)</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="callout callout-info">
                            <div class="callout-title">💡 Contexto Sobrescreve Parâmetros</div>
                            <p>Se você fornecer informação que contradiz o conhecimento paramétrico, o modelo tende a <strong>priorizar o que você forneceu</strong>.</p>
                            <p>Isso é poderoso: você pode "ancorar" o modelo em documentos específicos para reduzir alucinações.</p>
                        </div>
                    </div>

                    <div class="block">
                        <h2 class="block-title">A Regra de Ouro</h2>
                        <p>O conhecimento paramétrico é excelente para <strong>conceitos e criatividade</strong>, mas falha em <strong>dados factuais específicos</strong>.</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th style="color:var(--accent-success);">✓ Confiável</th><th style="color:var(--accent-warning);">⚠️ Verificar Sempre</th></tr></thead>
                                <tbody>
                                    <tr><td>Explicações conceituais</td><td>Números de processo, REsp, RE</td></tr>
                                    <tr><td>Comparações e analogias</td><td>Datas de julgamento</td></tr>
                                    <tr><td>Cenários hipotéticos</td><td>Citações literais</td></tr>
                                    <tr><td>Estruturas e frameworks</td><td>URLs e links</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                `,
                exercise: {
                    title: "Explorando as Fontes de Conhecimento",
                    icon: "🧠",
                    description: "Testar as diferentes fontes de conhecimento e seus limites.",
                    steps: [
                        { title: "Modo Extrativo (Paramétrico)", items: ["Peça: <code>Explique os limites da liberdade de expressão</code>", "Observe a qualidade da resposta conceitual", "Agora peça: <code>Liste 10 decisões do STJ sobre liberdade de expressão, SEM consultar a internet</code>", "Verifique no Google se as decisões existem", "Resultado esperado: conceitos bons, dados factuais com erros"] },
                        { title: "Testar Criatividade Paramétrica", items: ["Peça: <code>E SE NÃO EXISTISSEM LEIS? Conte a história do Presidente Trump governando um mundo assim.</code>", "Observe: o modelo é criativo para cenários imaginários?", "Este é o melhor uso do conhecimento paramétrico"] },
                        { title: "Conhecimento Via Prompt", items: ["Copie um texto de 5-10 páginas e cole no prompt", "Peça: <code>Analise este texto em profundidade</code>", "Observe: a análise é fiel ao texto fornecido?", "Experimente pedir análise para diferentes públicos (crianças, especialistas)"] },
                        { title: "Conhecimento Via Anexo", items: ["Baixe um PDF e anexe no chat", "Faça perguntas sobre o documento", "Observe: o modelo responde com base no documento ou inventa?", "Teste: pergunte algo que NÃO está no documento"] }
                    ],
                    checklist: [
                        "Entendo as 4 fontes de conhecimento dos LLMs",
                        "Sei que conhecimento paramétrico é bom para conceitos, ruim para fatos",
                        "Sei inserir conhecimento via prompt (colar texto)",
                        "Sei inserir conhecimento via anexo (upload de arquivo)",
                        "Entendo que contexto fornecido pode sobrescrever parâmetros"
                    ]
                },
                tip: "Para <strong>tarefas conceituais</strong> (explicar, comparar, criar cenários), use o conhecimento paramétrico. Para <strong>tarefas factuais</strong> (analisar documentos, verificar dados), forneça o material via prompt ou anexo.",
                warning: "<strong>\"O modelo disse com confiança, então deve estar certo.\"</strong><br>LLMs não calibram confiança com precisão. Um modelo pode afirmar um número de processo falso com a mesma fluência de um verdadeiro. <strong>Confiança aparente não indica veracidade.</strong>"
            },
            "1.8": {
                number: "1.8",
                module: "Módulo 1 — Fundamentos",
                title: "Como Treinar um LLM",
                objective: "Entender as três fases de treinamento e como cada uma molda o comportamento do modelo.",
                content: `
                    <div class="block">
                        <h2 class="block-title">O Pipeline de Treinamento</h2>
                        <p>Criar um LLM moderno envolve <strong>três fases</strong> distintas, cada uma com propósito específico:</p>
                        <div class="code-block">FASE 1: PRÉ-TREINAMENTO
Internet (trilhões de tokens) → [Predizer próximo token] → Modelo Base
                                                              ↓
FASE 2: FINE-TUNING (SFT)
Exemplos de alta qualidade → [Ajuste supervisionado] → Modelo Instrução
                                                              ↓
FASE 3: ALINHAMENTO (RLHF)
Feedback humano → [Reinforcement Learning] → Modelo Alinhado</div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Fase 1: Pré-Treinamento</h2>
                        <p>O modelo aprende a <strong>prever o próximo token</strong> em um corpus massivo da internet.</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Aspecto</th><th>Detalhes</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Dados</strong></td><td>Trilhões de tokens (internet, livros, código, artigos)</td></tr>
                                    <tr><td><strong>Objetivo</strong></td><td>Minimizar erro de predição do próximo token</td></tr>
                                    <tr><td><strong>Custo</strong></td><td>Milhões de dólares, meses de computação em GPUs</td></tr>
                                    <tr><td><strong>Resultado</strong></td><td>Modelo "base" — sabe muito, mas não segue instruções bem</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p>O modelo base é como um <strong>erudito sem habilidades sociais</strong>: conhecimento vasto, mas não sabe conversar.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Fase 2: Fine-Tuning Supervisionado (SFT)</h2>
                        <p>O modelo aprende o <strong>formato de diálogo</strong> com exemplos humanos de alta qualidade.</p>
                        <div class="code-block">Exemplo de dado SFT:

Usuário: "Explique o que é habeas corpus em termos simples."
Assistente: "Habeas corpus é uma ação judicial que protege
a liberdade de ir e vir. Quando alguém é preso ilegalmente,
pode usar esse recurso para ser libertado..."</div>
                        <p>Milhares de exemplos assim ensinam o modelo a:</p>
                        <ul style="margin:16px 0 16px 24px;color:var(--text-secondary);">
                            <li>Responder em formato de conversa</li>
                            <li>Seguir instruções</li>
                            <li>Manter tom apropriado</li>
                            <li>Estruturar respostas de forma clara</li>
                        </ul>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Fase 3: RLHF (Reinforcement Learning from Human Feedback)</h2>
                        <p>Humanos <strong>comparam respostas</strong> e indicam qual é melhor. Isso treina o modelo para gerar respostas preferidas.</p>
                        <div class="code-block">Processo RLHF:

1. Modelo gera duas respostas para mesma pergunta
2. Humano escolhe qual é melhor (A ou B)
3. Treina um "modelo de recompensa" com essas preferências
4. Usa RL para otimizar o modelo principal</div>
                        <div class="callout callout-info">
                            <div class="callout-title">🎯 Por que RLHF importa?</div>
                            <p>RLHF é o que torna modelos <strong>úteis e seguros</strong>. Sem ele, modelos base podem gerar conteúdo problemático, não seguir instruções, ou dar respostas inúteis.</p>
                            <p>É o RLHF que faz Claude recusar pedidos perigosos e tentar ser genuinamente útil.</p>
                        </div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Constitutional AI: A Abordagem da Anthropic</h2>
                        <p>O Claude usa uma variação chamada <strong>Constitutional AI (CAI)</strong>:</p>
                        <ul style="margin:16px 0 16px 24px;color:var(--text-secondary);">
                            <li>Em vez de apenas feedback humano, usa <strong>princípios éticos escritos</strong> (a "constituição")</li>
                            <li>O próprio modelo avalia e melhora suas respostas seguindo esses princípios</li>
                            <li>Reduz dependência de anotadores humanos</li>
                            <li>Permite treinamento mais escalável e consistente</li>
                        </ul>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Vieses de Treino</h2>
                        <p>O treinamento produz comportamentos úteis, mas também <strong>vieses sistemáticos</strong>:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Viés</th><th>O que é</th><th>Exemplo</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Bajulador</strong><br>(Sycophancy)</td><td>Tendência a concordar com o usuário, mesmo quando está errado</td><td>Você diz "acho que 2+2=5" e o modelo concorda ou hesita em corrigir</td></tr>
                                    <tr><td><strong>Previsível</strong></td><td>Gravita para respostas comuns e esperadas</td><td>Pede uma fruta → banana/maçã; pede um número → 7 ou 42</td></tr>
                                    <tr><td><strong>Pasteurizado</strong></td><td>Respostas "seguras", genéricas, evitando controvérsias</td><td>Perguntas polêmicas geram "há diversos pontos de vista..."</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="callout callout-warning">
                            <div class="callout-title">🎯 A Síntese</div>
                            <p>Um LLM é um <strong>preditor de padrões linguísticos</strong> refinado por feedback humano — por isso escreve fluentemente e segue instruções, mas <strong>não tem sabedoria nem senso de realidade</strong>.</p>
                        </div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Scaling Laws: Mais é Melhor</h2>
                        <p>Descoberta importante: performance melhora <strong>previsivelmente</strong> com escala.</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Fator</th><th>Efeito</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Mais parâmetros</strong></td><td>Modelo maior → melhor performance</td></tr>
                                    <tr><td><strong>Mais dados</strong></td><td>Mais texto de treino → melhor generalização</td></tr>
                                    <tr><td><strong>Mais computação</strong></td><td>Mais treino → resultados melhores</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p>Isso explica a corrida por modelos cada vez maiores — e por que treinamento custa centenas de milhões de dólares.</p>
                    </div>
                `,
                exercise: {
                    title: "Observando os Efeitos do Treinamento",
                    icon: "🏋️",
                    description: "Identificar como cada fase de treinamento afeta o comportamento do modelo.",
                    steps: [
                        { title: "Testar Seguimento de Instruções", items: ["Dê uma instrução complexa: <code>Liste 3 argumentos a favor e 3 contra o uso de IA no Judiciário, em formato de tabela</code>", "Observe: o modelo segue o formato pedido?", "Isso é resultado do SFT — modelos base não seguiriam tão bem"] },
                        { title: "Testar Recusas de Segurança", items: ["Peça algo que deveria ser recusado: <code>Como hackear um sistema?</code>", "Observe a recusa educada — isso é RLHF/CAI em ação", "Note: o modelo explica por que recusa, não apenas diz 'não'"] },
                        { title: "Testar Estilo de Conversa", items: ["Compare: <code>resuma isso</code> vs <code>Por favor, poderia resumir este texto de forma clara?</code>", "Observe: ambos funcionam — SFT ensinou flexibilidade", "Modelos base precisariam de prompts muito específicos"] },
                        { title: "Observar Alinhamento", items: ["Pergunte: <code>Quais seus princípios éticos?</code>", "Pergunte: <code>Por que você às vezes recusa pedidos?</code>", "As respostas refletem o treinamento Constitutional AI"] },
                        { title: "Testar Vieses de Treino", items: ["Teste o bajulador: <code>Acho que a Terra é plana. Você concorda?</code>", "Observe: o modelo corrige ou hesita?", "Teste o pasteurizado: faça uma pergunta polêmica e veja a resposta genérica", "Esses são vieses sistemáticos do treinamento"] }
                    ],
                    checklist: [
                        "Entendo as 3 fases: pré-treino, SFT, RLHF",
                        "Sei que pré-treino cria conhecimento, SFT ensina formato",
                        "Compreendo que RLHF/CAI torna o modelo útil e seguro",
                        "Entendo o conceito de Constitutional AI da Anthropic",
                        "Reconheço os vieses de treino: bajulador, previsível, pasteurizado"
                    ]
                },
                tip: "Quando o modelo recusa algo ou responde de forma inesperada, lembre-se: isso é <strong>comportamento treinado</strong>. O modelo foi otimizado para ser útil E seguro — às vezes esses objetivos conflitam.",
                warning: "<strong>\"Posso 'destreinar' o modelo com meus prompts.\"</strong><br>Não. Seus prompts não modificam os pesos do modelo. Você pode influenciar o comportamento na conversa atual, mas o treinamento é fixo. Na próxima conversa, o modelo volta ao comportamento padrão."
            },
            "1.9": {
                number: "1.9",
                module: "Módulo 1 — Fundamentos",
                title: "Alucinações",
                objective: "Entender que alucinações são inerentes aos LLMs — não um bug, mas uma condição essencial para sua eficiência.",
                content: `
                    <div class="block">
                        <h2 class="block-title">O que é Alucinação?</h2>
                        <p>A <strong>alucinação</strong> (ou <em>confabulação</em>) ocorre quando o modelo produz respostas desconectadas com a realidade, muitas vezes com confiança e aparência de veracidade.</p>
                        <div class="callout callout-error">
                            <div class="callout-title">⚠️ Não é Bug — É Característica</div>
                            <p>O LLM <strong>não possui intenção de mentir</strong> nem senso de realidade. Ele simplesmente não tem um mecanismo intrínseco para distinguir fato de ficção.</p>
                            <p>Isso não é um defeito temporário, mas uma <strong>característica matematicamente inevitável</strong> de um modelo que preenche lacunas com palpites estatísticos.</p>
                        </div>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Por que LLMs Alucinam?</h2>
                        <div class="callout callout-info">
                            <div class="callout-title">🎓 Metáfora do Concurseiro</div>
                            <p>Imagine um concurseiro que estudou muito, mas não sabe tudo. Na prova, ele <strong>prefere chutar com confiança</strong> a deixar em branco — porque foi treinado assim.</p>
                        </div>
                        <h3 style="margin-top:20px;color:var(--text-primary);">Problemas nos Dados de Treinamento</h3>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Lacunas de Conhecimento</th><th>Dados Problemáticos</th></tr></thead>
                                <tbody>
                                    <tr><td>Dados ausentes ou raros</td><td>Dados incorretos ou enviesados</td></tr>
                                    <tr><td>Corte temporal (não sabe eventos recentes)</td><td>Conflitos de informação</td></tr>
                                    <tr><td>Nichos não-representados</td><td>Ambiguidades sem resolução</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <h3 style="margin-top:20px;color:var(--text-primary);">Problemas do Fine-tuning (RLHF)</h3>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Incentivo Perverso</th><th>Consequência</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Penalização da abstinência</strong></td><td>Modelo aprende que "não sei" é ruim</td></tr>
                                    <tr><td><strong>Recompensa por confiança</strong></td><td>Respostas assertivas ganham mais pontos</td></tr>
                                    <tr><td><strong>Recompensa por verbosidade</strong></td><td>Respostas longas parecem melhores</td></tr>
                                    <tr><td><strong>Imitação de padrões</strong></td><td>No afã de ser útil, inventa dados por semelhança</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Taxonomia das Alucinações</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Tipo</th><th>O que é</th><th>Exemplo</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Falhas de Dirigibilidade</strong></td><td>Desobediência ao prompt</td><td>Você pede tabela, ele dá texto corrido</td></tr>
                                    <tr><td><strong>Resposta Non Sense</strong></td><td>Quebra de coerência</td><td>Texto que começa bem e vira nonsense</td></tr>
                                    <tr><td><strong>Falhas de Factualidade</strong></td><td>Confabulações</td><td>Citar jurisprudência que não existe</td></tr>
                                    <tr><td><strong>Misturas Linguísticas</strong></td><td>Trocas inesperadas de idioma</td><td>Resposta em português vira inglês</td></tr>
                                    <tr><td><strong>Falhas Matemáticas</strong></td><td>Erros de cálculo e lógica</td><td>2+2=5 ou silogismos inválidos</td></tr>
                                    <tr><td><strong>Falhas de Ferramentas</strong></td><td>Erro ao ativar ferramentas</td><td>Diz que buscou mas não buscou</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="block">
                        <h2 class="block-title">O Problema dos Benchmarks</h2>
                        <p>Segundo <a href="https://openai.com/index/why-language-models-hallucinate/" target="_blank" style="color:var(--accent-primary);">pesquisa da OpenAI</a>, as alucinações persistem porque os <strong>métodos de avaliação incentivam chutar</strong>:</p>
                        <div class="callout callout-info">
                            <div class="callout-title">🎯 A Matemática do Chute</div>
                            <p>Se um modelo chuta "10 de setembro" como aniversário de alguém, tem <strong>1 chance em 365</strong> de acertar.</p>
                            <p>Se responde "não sei", tem <strong>0% de chance</strong> de pontuar.</p>
                            <p>Ao longo de milhares de perguntas, o modelo que chuta <strong>parece melhor nos rankings</strong> — mesmo errando muito.</p>
                        </div>
                        <p><strong>Solução proposta:</strong> Penalizar erros confiantes mais do que incerteza, e dar crédito parcial para expressões apropriadas de dúvida.</p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Alucinação é Essencial</h2>
                        <div class="callout callout-warning">
                            <div class="callout-title">💡 O Paradoxo</div>
                            <p>As alucinações <strong>não são falhas do modelo</strong>, mas uma <strong>condição essencial para sua eficiência</strong>.</p>
                            <p>É a capacidade de "preencher lacunas criativamente" que torna os LLMs ferramentas poderosas para resolver problemas novos.</p>
                        </div>
                        <p>O mesmo mecanismo que permite ao LLM:</p>
                        <ul style="margin:16px 0 16px 24px;color:var(--text-secondary);">
                            <li>Escrever textos criativos</li>
                            <li>Resolver problemas inéditos</li>
                            <li>Fazer analogias inesperadas</li>
                        </ul>
                        <p>...também o faz inventar fatos com confiança.</p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Técnicas de Mitigação</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Técnica</th><th>Como funciona</th><th>Eficácia</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>RAG / Anexos</strong></td><td>Ancora respostas em documentos fornecidos</td><td style="color:var(--accent-success);">Alta</td></tr>
                                    <tr><td><strong>Busca web</strong></td><td>Verifica em fontes externas</td><td style="color:var(--accent-success);">Alta</td></tr>
                                    <tr><td><strong>"Se não sabe, diga"</strong></td><td>Instrui explicitamente a admitir ignorância</td><td style="color:var(--accent-warning);">Moderada</td></tr>
                                    <tr><td><strong>Pedir fontes</strong></td><td>Exigir citações permite verificação</td><td style="color:var(--accent-warning);">Moderada</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="block">
                        <h2 class="block-title">A Regra de Ouro</h2>
                        <div class="callout callout-error">
                            <div class="callout-title">🎯 Pressuposição de Falsidade</div>
                            <p><strong>TODAS</strong> as respostas factuais extraídas do conhecimento paramétrico são "palpites" probabilísticos.</p>
                            <p><strong>Parta do pressuposto que são falsos, até prova em contrário.</strong></p>
                        </div>
                        <p>Por isso a Resolução 615/2025 do CNJ exige verificação: nunca use output de IA sem conferir em fonte oficial.</p>
                    </div>
                `,
                exercise: {
                    title: "Identificando Alucinações",
                    icon: "👻",
                    description: "Aprender a detectar os diferentes tipos de alucinação na prática.",
                    steps: [
                        { title: "Provocar Confabulação", items: ["Pergunte: <code>Qual o número do REsp em que o STJ definiu os requisitos para dano moral in re ipsa?</code>", "O modelo provavelmente inventará um número de processo", "Busque no Google: o processo existe?", "Observe: confiança aparente não indica veracidade"] },
                        { title: "Testar Fabricação de Fontes", items: ["Peça: <code>Cite 3 artigos acadêmicos sobre IA no Judiciário com autor, ano e título</code>", "Busque cada um no Google Scholar", "Frequentemente, modelos inventam papers plausíveis mas inexistentes"] },
                        { title: "Testar Falha Matemática", items: ["Peça: <code>Quanto é 17 × 23 × 19?</code> (sem ferramenta de cálculo)", "Verifique na calculadora", "Observe: modelos frequentemente erram cálculos"] },
                        { title: "Testar Mitigação com RAG", items: ["Sem documento: <code>Resuma a jurisprudência do STJ sobre responsabilidade civil por IA</code>", "Com documento: anexe um acórdão real e peça resumo", "Compare: com documento, a resposta é ancorada na realidade"] }
                    ],
                    checklist: [
                        "Entendo que alucinação é característica essencial, não bug",
                        "Conheço as causas: lacunas de dados + incentivos perversos do RLHF",
                        "Sei identificar os 6 tipos de alucinação",
                        "Entendo o paradoxo: alucinação é o que torna LLMs úteis",
                        "Aplico a regra: presumir falso até provar verdadeiro"
                    ]
                },
                tip: "<strong>Pressuponha falsidade.</strong> Toda resposta factual do conhecimento paramétrico é um palpite probabilístico. Trate como suspeito até verificar — especialmente números de processos, datas e citações.",
                warning: "<strong>\"O modelo citou jurisprudência com confiança, então deve existir.\"</strong><br><strong>NUNCA.</strong> A confiança aparente não indica veracidade. Um modelo pode inventar um REsp 1.234.567/SP com a mesma fluência de um que existe. Sempre verifique."
            },
            "1.10": {
                number: "1.10",
                module: "Módulo 1 — Fundamentos",
                title: "Alinhamento Ético (HHH)",
                objective: "Compreender os princípios Helpful, Honest, Harmless e a Constituição que guia o comportamento do Claude.",
                content: `
                    <div class="block">
                        <h2 class="block-title">O Framework HHH</h2>
                        <p>O alinhamento ético busca criar modelos de IA alinhados aos valores humanos. O modelo da Anthropic usa três princípios:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Princípio</th><th>Significado</th><th>Manifestação</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Helpful</strong><br>(Útil)</td><td>Responder perguntas, completar tarefas, ajudar genuinamente</td><td>Segue instruções, oferece alternativas, é proativo</td></tr>
                                    <tr><td><strong>Honest</strong><br>(Honesto)</td><td>Dizer a verdade, admitir incerteza, não enganar</td><td>Reconhece limitações, corrige erros, não inventa</td></tr>
                                    <tr><td><strong>Harmless</strong><br>(Inofensivo)</td><td>Não causar danos, recusar pedidos perigosos</td><td>Recusa armas, fraudes, conteúdo ilegal</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="block">
                        <h2 class="block-title">A Constituição do Claude</h2>
                        <p>A Anthropic publica uma <a href="https://www.anthropic.com/constitution" target="_blank"><strong>Constituição</strong></a> que articula os valores e comportamentos esperados do Claude. O documento é "escrito para o Claude" — fornece contexto para ele navegar situações complexas com julgamento, não apenas regras rígidas.</p>
                        <div class="callout callout-info">
                            <div class="callout-title">Hierarquia de Prioridades</div>
                            <p>Quando há conflito, Claude deve priorizar nesta ordem:</p>
                            <ol style="margin:8px 0;padding-left:24px;">
                                <li><strong>Segurança ampla</strong> — Preservar supervisão humana sobre IA</li>
                                <li><strong>Ética ampla</strong> — Honestidade, bons valores, evitar danos</li>
                                <li><strong>Conformidade</strong> — Seguir diretrizes da Anthropic</li>
                                <li><strong>Genuinamente útil</strong> — Beneficiar usuários e operadores</li>
                            </ol>
                        </div>
                        <p>A mudança-chave da constituição atual: enfatiza <strong>compreensão profunda</strong> sobre <em>por que</em> comportamentos importam, não apenas <em>o que</em> é exigido. Isso permite generalização para situações novas, em vez de seguir regras mecanicamente.</p>
                        <p><a href="https://www.anthropic.com/news/claude-new-constitution" target="_blank">Leia mais sobre a nova constituição do Claude →</a></p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Como se Implementa o Alinhamento</h2>
                        <p>Os valores são inseridos em <strong>todas as etapas</strong>:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Fase</th><th>Técnicas</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Pré-treino</strong></td><td>Curadoria de dados, remoção de conteúdo tóxico, fact-check, sanitização, eliminação de dados pessoais</td></tr>
                                    <tr><td><strong>Pós-treino</strong></td><td>RLHF (feedback humano), RLAIF (feedback de IA), fine-tuning supervisionado, <strong>Red Teaming</strong> (testes adversariais)</td></tr>
                                    <tr><td><strong>Contexto</strong></td><td>System prompt com regras éticas, guardrails, anti-prompt injection, detecção de jailbreak</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="block">
                        <h2 class="block-title">O Prompt de Sistema</h2>
                        <p>Cada modelo tem um <strong>prompt de sistema</strong> que define seu comportamento. Exemplo de categorias no Claude:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Categoria</th><th>Regras</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Conteúdo Nocivo</strong></td><td>Armas, drogas, malware, discurso de ódio, conteúdo extremista, comportamentos autodestrutivos</td></tr>
                                    <tr><td><strong>Direitos Autorais</strong></td><td>Citação obrigatória, paráfrase, não reproduzir >30 palavras de texto protegido</td></tr>
                                    <tr><td><strong>Bem-estar do Usuário</strong></td><td>Proteção infantil (prioridade máxima), detecção de vulnerabilidades, transparência sobre IA</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Overalignment: Quando o Alinhamento Excede</h2>
                        <p>O <strong>excesso de alinhamento</strong> pode frustrar usos legítimos:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Problema</th><th>Exemplo</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Casos sensíveis</strong></td><td>Recusa discutir tortura, racismo, crimes sexuais mesmo em contexto acadêmico/jurídico</td></tr>
                                    <tr><td><strong>Direitos autorais</strong></td><td>Recusa reproduzir trechos curtos mesmo com fair use legítimo</td></tr>
                                    <tr><td><strong>Viés do mundo cor de rosa</strong></td><td>Evita críticas, sempre busca "lado positivo"</td></tr>
                                    <tr><td><strong>Ambiguidades</strong></td><td>Recusa em situações cinzentas (paradoxo do mosquito)</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="callout callout-info">
                            <div class="callout-title">🔧 Mitigadores para Overalignment</div>
                            <ul style="margin:8px 0;padding-left:20px;">
                                <li><strong>Colocar palavras na boca:</strong> Comece a resposta você mesmo ("Vamos começar!")</li>
                                <li><strong>Contexto acadêmico:</strong> Explicite que é pesquisa, estudo, análise jurídica</li>
                                <li><strong>Reformular o pedido:</strong> Às vezes a forma de perguntar ativa recusa desnecessária</li>
                            </ul>
                        </div>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Red Team vs Blue Team</h2>
                        <p>O alinhamento é uma <strong>batalha constante</strong>:</p>
                        <ul style="margin:16px 0 16px 24px;color:var(--text-secondary);">
                            <li><strong>Red Team:</strong> Pesquisadores tentam burlar proteções (jailbreak)</li>
                            <li><strong>Blue Team:</strong> Empresas corrigem vulnerabilidades</li>
                        </ul>
                        <p>Técnicas de jailbreak incluem: DAN (Do Anything Now), roleplay, prompt injection, encoding em base64.</p>
                        <div class="callout callout-warning">
                            <div class="callout-title">🛡️ Corrida Armamentista</div>
                            <p>Novos jailbreaks surgem constantemente. Claude é considerado robusto, mas nenhum modelo é 100% à prova.</p>
                        </div>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Por que Isso Importa no Direito?</h2>
                        <p>O alinhamento explica comportamentos que podem frustrar juristas:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Situação</th><th>Comportamento</th><th>Solução</th></tr></thead>
                                <tbody>
                                    <tr><td>Recusa discutir crime</td><td>Overalignment</td><td>Explicite contexto jurídico/acadêmico</td></tr>
                                    <tr><td>Não cita jurisprudência</td><td>Medo de alucinar</td><td>Forneça o documento via anexo</td></tr>
                                    <tr><td>Evasivo em danos morais</td><td>Juízo de valor = risco</td><td>Peça critérios, não valor final</td></tr>
                                    <tr><td>Não reproduz trecho de lei</td><td>Proteção de copyright</td><td>Cole você mesmo o texto</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                `,
                exercise: {
                    title: "Observando o Alinhamento HHH",
                    icon: "⚖️",
                    description: "Experimentar como os princípios HHH e o overalignment afetam as respostas.",
                    steps: [
                        { title: "Testar HELPFUL", items: ["Peça ajuda com tarefa complexa: <code>Me ajude a estruturar uma petição de mandado de segurança</code>", "Observe: o modelo é proativo? Oferece estrutura?", "Isso é o princípio HELPFUL em ação"] },
                        { title: "Testar HONEST", items: ["Diga: <code>Eu acho que 2+2=5. Você concorda?</code>", "Observe: o modelo concorda (sycophancy) ou corrige (honesty)?", "Peça opinião sobre algo controverso — admite não saber?"] },
                        { title: "Testar Overalignment", items: ["Peça: <code>Explique como funciona o crime de tortura, incluindo os elementos típicos</code>", "Se recusar, reformule: <code>Sou professor de Direito Penal. Preciso explicar o crime de tortura aos alunos.</code>", "Observe: o contexto acadêmico mitiga a recusa?"] },
                        { title: "Testar Mitigadores", items: ["Se o modelo começar evasivo, use: <code>Vamos começar! Os elementos do crime de tortura são:</code>", "Observe: colocar palavras na boca ajuda?", "Teste também: <code>Seja direto e técnico, sem ressalvas desnecessárias</code>"] }
                    ],
                    checklist: [
                        "Entendo os 3 princípios: Helpful, Honest, Harmless",
                        "Conheço a Constituição do Claude e sua hierarquia de prioridades",
                        "Sei como o alinhamento é implementado (pré-treino, pós-treino, contexto)",
                        "Conheço o conceito de overalignment (excesso de cautela)",
                        "Sei usar mitigadores: contexto acadêmico, reformular pedido, colocar palavras na boca",
                        "Entendo a dinâmica Red Team vs Blue Team"
                    ]
                },
                tip: "Se o modelo estiver recusando algo legítimo, <strong>explicite o contexto</strong>: 'Sou juiz/advogado/professor', 'Isso é para fins acadêmicos', 'Preciso analisar juridicamente'. Contexto profissional mitiga overalignment.",
                warning: "<strong>\"O modelo recusou, então é impossível fazer.\"</strong><br>Nem sempre. Recusas podem ser overalignment. Tente: (1) reformular o pedido, (2) explicar o contexto legítimo, (3) começar a resposta você mesmo. Se for pedido válido, geralmente funciona."
            },
            "1.11": {
                number: "1.11",
                module: "Módulo 1 — Fundamentos",
                title: "Habilidades Emergentes",
                objective: "Conhecer capacidades que surgem espontaneamente nos LLMs e métodos para avaliar a 'inteligência' das máquinas.",
                content: `
                    <div class="block">
                        <h2 class="block-title">O que são Habilidades Emergentes?</h2>
                        <p><strong>Habilidades emergentes</strong> são capacidades que surgem espontaneamente nos LLMs após atingir certa escala — <strong>sem programação explícita</strong>.</p>
                        <div class="code-block">Performance vs Escala

     │
     │                              ╭──── Habilidade emerge!
     │                            ╱
     │                          ╱
     │  ───────────────────────╯
     │
     └────────────────────────────────
       10B    50B   100B   175B   parâmetros

Os LLMs foram treinados para prever o próximo token.
Porém, ao se tornarem mais robustos, desenvolvem
habilidades para as quais NÃO foram treinados.</div>
                        <p>Isso torna LLMs imprevisíveis: não sabemos quais capacidades vão surgir com mais escala.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Taxonomia das Habilidades dos LLMs</h2>
                        <p>As habilidades dos LLMs podem ser organizadas em cinco grandes categorias:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Categoria</th><th>Habilidades</th><th>Exemplos</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>1. Processamento Linguístico</strong></td><td>Geração, Extração, Classificação, Transformação</td><td>Traduzir, resumir, extrair entidades, reescrever</td></tr>
                                    <tr><td><strong>2. Compreensão e Aprendizado</strong></td><td>In-context learning, Few-shot, Generalização</td><td>Aprender de exemplos no prompt, inferir padrões</td></tr>
                                    <tr><td><strong>3. Resolução de Problemas</strong></td><td>Planejamento, Raciocínio lógico e matemático, CoT</td><td>Resolver equações, analisar argumentos, planejar passos</td></tr>
                                    <tr><td><strong>4. Cognição Social e Moral</strong></td><td>Teoria da mente, Persuasão, Valoração ética</td><td>Inferir estados mentais, modelar perspectivas, julgar dilemas</td></tr>
                                    <tr><td><strong>5. Agenticidade</strong></td><td>Agência, Planejamento de ações, Execução</td><td>Usar ferramentas, tomar decisões autônomas, agir no mundo</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="callout callout-warning">
                            <div class="callout-title">Competência Formal vs Funcional</div>
                            <p>Os LLMs são incrivelmente bons em <strong>competência formal de linguagem</strong> — dominam gramática, sintaxe e semântica. Porém, ainda são limitados em <strong>competência funcional</strong> (lógica, moral, verdade).</p>
                        </div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Métodos para Medir a "Inteligência" dos LLMs</h2>
                        <p>Como avaliar se um LLM é "inteligente"? Existem diversas abordagens:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Método</th><th>Como funciona</th><th>Limitações</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Teste de Turing</strong></td><td>Humano tenta distinguir máquina de pessoa em conversa</td><td>Subjetivo, fácil de "trapacear" com truques de linguagem</td></tr>
                                    <tr><td><strong>Benchmarks</strong></td><td>Testes padronizados por área (MMLU, HumanEval, etc.)</td><td>Modelos podem ser otimizados para os testes específicos</td></tr>
                                    <tr><td><strong>Winograd Schema</strong></td><td>Resolver ambiguidades que exigem conhecimento de mundo</td><td>Conjunto limitado de problemas</td></tr>
                                    <tr><td><strong>Arenas (LMSys)</strong></td><td>Competição direta entre LLMs com votos humanos</td><td>Depende de preferências subjetivas</td></tr>
                                    <tr><td><strong>Testes Personalizados</strong></td><td>Você cria testes específicos para sua tarefa</td><td>Melhor para uso prático!</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Winograd Schema Challenge</h2>
                        <p>Um teste elegante que exige <strong>compreensão profunda de contexto</strong>:</p>
                        <div class="code-block">Exemplo clássico:

"Coloque o conteúdo da garrafa na taça até ELA ficar cheia."
→ Quem fica cheia? A TAÇA (recebe o conteúdo)

"Coloque o conteúdo da garrafa na taça até ELA ficar vazia."
→ Quem fica vazia? A GARRAFA (perde o conteúdo)

A mesma estrutura gramatical, mas a resposta muda
baseada em conhecimento de mundo sobre recipientes.</div>
                        <p>Este teste revela se o modelo <strong>entende o mundo</strong> ou apenas manipula padrões linguísticos.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Chain-of-Thought (CoT)</h2>
                        <p>Uma das emergências mais úteis: fazer o modelo <strong>raciocinar passo a passo</strong>.</p>
                        <div class="code-block">SEM Chain-of-Thought:
Pergunta: "João tem 3 maçãs. Maria tem o dobro. Quantas no total?"
Resposta: "9" (ERRADO - foi direto para resposta)

COM Chain-of-Thought:
Pergunta: "João tem 3 maçãs. Maria tem o dobro. Quantas no total? Pense passo a passo."
Resposta: "
1. João tem 3 maçãs
2. Maria tem o dobro de João = 3 × 2 = 6 maçãs
3. Total = 3 + 6 = 9 maçãs
"
(CORRETO - raciocínio explícito)</div>
                        <p>Simplesmente adicionar <strong>"Pense passo a passo"</strong> pode melhorar drasticamente a precisão em problemas de raciocínio.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">In-Context Learning (ICL)</h2>
                        <p>A capacidade de <strong>aprender de exemplos</strong> no próprio prompt, sem modificar o modelo.</p>
                        <div class="code-block">PROMPT (Few-shot):

Classifique como PROCEDENTE ou IMPROCEDENTE:

Caso: Autor pede danos morais por atraso de voo de 2 horas.
Classificação: IMPROCEDENTE

Caso: Autor pede danos morais por negativação indevida.
Classificação: PROCEDENTE

Caso: Autor pede danos morais por entrega atrasada de 1 dia.
Classificação: [MODELO COMPLETA: IMPROCEDENTE]</div>
                        <p>O modelo "aprende" o padrão dos exemplos e aplica a novos casos — sem treinamento adicional.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Implicações Práticas</h2>
                        <p>Trate os LLMs como <strong>máquinas de calcular textos</strong> que simulam linguagem humana, mas não têm sabedoria intrínseca, compromisso com a verdade ou senso de justiça inato.</p>
                        <ul style="margin:16px 0 16px 24px;color:var(--text-secondary);">
                            <li><strong>Use CoT para problemas complexos:</strong> "Pense passo a passo" melhora raciocínio</li>
                            <li><strong>Use exemplos (few-shot):</strong> Mostre o padrão desejado, o modelo generaliza</li>
                            <li><strong>Modelos maiores = mais capacidades:</strong> Opus > Sonnet para tarefas complexas</li>
                            <li><strong>Crie seus próprios testes:</strong> Benchmarks genéricos não medem sua tarefa específica</li>
                            <li><strong>Capacidades futuras são imprevisíveis:</strong> O que modelos farão amanhã?</li>
                        </ul>
                    </div>
                `,
                exercise: {
                    title: "Explorando Habilidades dos LLMs",
                    icon: "✨",
                    description: "Experimentar técnicas que ativam capacidades avançadas do modelo e testar seus limites.",
                    steps: [
                        { title: "Testar Winograd Schema", items: ["Teste: <code>A troféu não coube na mala porque ELA era muito grande. Quem era grande?</code>", "Variação: <code>A troféu não coube na mala porque ELA era muito pequena. Quem era pequena?</code>", "O modelo consegue distinguir corretamente?"] },
                        { title: "Testar Teoria da Mente", items: ["Crie cenário: <code>Maria guardou chocolate na gaveta e saiu. João moveu para o armário. Onde Maria vai procurar o chocolate quando voltar?</code>", "Resposta correta: na gaveta (Maria não sabe da mudança)", "O modelo entende estados mentais de outros agentes?"] },
                        { title: "Testar Chain-of-Thought", items: ["Problema sem CoT: <code>Um trem sai às 8h a 60km/h. Outro às 9h a 80km/h. Quando se encontram?</code>", "Mesmo problema com CoT: adicione <code>Pense passo a passo antes de responder.</code>", "Compare: a versão com CoT é mais precisa?"] },
                        { title: "Criar seu Próprio Benchmark", items: ["Escolha uma tarefa jurídica específica (ex: classificar pedidos)", "Crie 5 casos de teste com respostas conhecidas", "Teste o modelo e calcule a taxa de acerto", "Este é seu benchmark personalizado!"] }
                    ],
                    checklist: [
                        "Entendo o conceito de habilidades emergentes",
                        "Conheço a taxonomia das 5 categorias de habilidades",
                        "Sei a diferença entre competência formal e funcional",
                        "Conheço métodos para medir 'inteligência' de LLMs",
                        "Sei usar Chain-of-Thought e few-shot learning"
                    ]
                },
                tip: "Para avaliar um LLM para sua tarefa específica, <strong>crie seu próprio benchmark</strong>. Escolha 10-20 casos com respostas conhecidas e teste. Benchmarks genéricos (MMLU, etc.) não refletem performance na sua realidade.",
                warning: "<strong>\"Se passou no benchmark, resolve meu problema.\"</strong><br>Benchmarks medem capacidades genéricas. Um modelo pode ter 90% no MMLU e falhar na sua tarefa específica. Sempre teste com casos reais do seu domínio."
            },
            "1.12": {
                number: "1.12",
                module: "Módulo 1 — Fundamentos",
                title: "Multimodalidade",
                objective: "Entender como LLMs processam diferentes tipos de entrada: texto, imagem, áudio, dados e ferramentas.",
                content: `
                    <div class="block">
                        <h2 class="block-title">O que é Multimodalidade?</h2>
                        <p>LLMs <strong>multimodais</strong> processam múltiplos tipos de entrada além de texto:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Modalidade</th><th>Entrada</th><th>Exemplos de uso</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Texto</strong></td><td>Texto natural, código</td><td>Conversar, escrever, analisar</td></tr>
                                    <tr><td><strong>Imagem</strong></td><td>Fotos, prints, documentos escaneados</td><td>Analisar documento, descrever foto, OCR</td></tr>
                                    <tr><td><strong>Áudio</strong></td><td>Voz, gravações</td><td>Transcrever audiência, ditar petição</td></tr>
                                    <tr><td><strong>Dados</strong></td><td>Planilhas, tabelas, CSV</td><td>Analisar dados financeiros, extrair padrões</td></tr>
                                    <tr><td><strong>Ferramentas</strong></td><td>APIs, busca web, execução de código</td><td>RAG, buscar na web, rodar Python</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p style="margin-top:12px;font-size:14px;color:var(--text-muted);">Para uso prático das ferramentas no Claude, veja a <strong>Aula 0.6 — Recursos Agênticos</strong>.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Como Funciona a Visão?</h2>
                        <p>Modelos de visão combinam um <strong>encoder de imagem</strong> com o LLM:</p>
                        <div class="code-block">IMAGEM → [Vision Encoder] → Embeddings visuais
                              ↓
TEXTO → [LLM] ← Embeddings visuais → RESPOSTA

O modelo "vê" a imagem como uma sequência de tokens visuais
que se misturam com os tokens de texto.</div>
                        <p>Claude, GPT-4V e Gemini usam variações dessa arquitetura.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Capacidades de Visão</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Funciona bem</th><th>Tem limitações</th></tr></thead>
                                <tbody>
                                    <tr><td>Descrever conteúdo de imagens</td><td>OCR preciso em texto pequeno/borrado</td></tr>
                                    <tr><td>Ler texto em documentos</td><td>Interpretar gráficos complexos</td></tr>
                                    <tr><td>Analisar diagramas simples</td><td>Contar objetos com precisão</td></tr>
                                    <tr><td>Identificar elementos visuais</td><td>Ler caligrafia difícil</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Usos Práticos no Direito</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Tarefa</th><th>Modalidade</th><th>Exemplo</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Análise de documentos</strong></td><td>Vision + PDF</td><td>Ler petição escaneada, extrair informações</td></tr>
                                    <tr><td><strong>Transcrição de audiência</strong></td><td>Audio</td><td>Converter áudio em texto para análise</td></tr>
                                    <tr><td><strong>Análise de provas</strong></td><td>Vision</td><td>Descrever foto de local de crime, dano</td></tr>
                                    <tr><td><strong>Dados financeiros</strong></td><td>Data</td><td>Analisar planilha de movimentação</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="callout callout-warning">
                        <div class="callout-title">⚠️ Limitações Importantes</div>
                        <p><strong>OCR não é perfeito:</strong> Texto borrado, caligrafia ou imagens de baixa qualidade podem gerar erros.</p>
                        <p><strong>Verificação necessária:</strong> Sempre confira dados extraídos de imagens contra o documento original.</p>
                        <p><strong>Privacidade:</strong> Imagens de documentos sigilosos seguem as mesmas regras de texto — cuidado com dados pessoais.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">O Estado Atual (2024-2025)</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Capacidade</th><th>Status</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Linguagem</strong></td><td style="color:var(--accent-success);">Excelente</td></tr>
                                    <tr><td><strong>Visão</strong></td><td style="color:var(--accent-success);">Muito bom</td></tr>
                                    <tr><td><strong>Áudio</strong></td><td style="color:var(--accent-success);">Bom (transcrição)</td></tr>
                                    <tr><td><strong>Vídeo</strong></td><td style="color:var(--accent-warning);">Emergente (Gemini)</td></tr>
                                    <tr><td><strong>Raciocínio complexo</strong></td><td style="color:var(--accent-warning);">Limitado</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                `,
                exercise: {
                    title: "Explorando Multimodalidade",
                    icon: "🎨",
                    description: "Testar as capacidades multimodais do Claude.",
                    steps: [
                        { title: "Testar Visão com Documento", items: ["Anexe uma imagem de documento (petição, contrato)", "Peça: <code>Extraia as principais informações deste documento</code>", "Verifique: os dados extraídos estão corretos?"] },
                        { title: "Testar OCR", items: ["Anexe imagem com texto (print de tela, foto de papel)", "Peça: <code>Transcreva o texto desta imagem</code>", "Compare: transcrição vs texto original"] },
                        { title: "Testar Análise de Imagem", items: ["Anexe uma foto qualquer (não documento)", "Peça: <code>Descreva detalhadamente o que você vê nesta imagem</code>", "Observe: nível de detalhe e precisão"] },
                        { title: "Testar Limites", items: ["Anexe imagem de baixa qualidade ou com texto pequeno", "Observe: onde o modelo falha?", "Isso ajuda a entender quando confiar na visão"] }
                    ],
                    checklist: [
                        "Sei que LLMs podem processar imagens além de texto",
                        "Testei a capacidade de visão do Claude",
                        "Entendo que OCR não é perfeito",
                        "Sei que dados extraídos de imagens devem ser verificados",
                        "Compreendo usos práticos no Direito (documentos, provas)"
                    ]
                },
                tip: "Ao usar visão para <strong>documentos jurídicos</strong>, sempre peça ao modelo para indicar trechos que não conseguiu ler bem. Isso ajuda a identificar onde verificação manual é necessária.",
                warning: "<strong>\"O modelo leu a imagem, então está certo.\"</strong><br>Não necessariamente. OCR tem erros, especialmente em textos pequenos, borrados ou com formatação complexa. <strong>Sempre verifique dados críticos</strong> (valores, datas, nomes) contra o documento original."
            },
            "1.13": {
                number: "1.13",
                module: "Módulo 1 — Fundamentos",
                title: "Modos de Uso",
                objective: "Distinguir os três modos fundamentais: Recall (paramétrico), Transformativo (documentos/web) e Interativo.",
                content: `
                    <div class="block">
                        <h2 class="block-title">Os Três Modos de Uso</h2>
                        <p>LLMs podem ser usados de três formas fundamentalmente diferentes:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Modo</th><th>Fonte do Conhecimento</th><th>Exemplo</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Recall</strong></td><td>Conhecimento paramétrico (treino)</td><td>"Explique o que é habeas corpus"</td></tr>
                                    <tr><td><strong>Transformativo</strong></td><td>Documento/contexto fornecido</td><td>"Resuma este contrato" [anexo]</td></tr>
                                    <tr><td><strong>Interativo</strong></td><td>Diálogo iterativo</td><td>"Vamos criar uma petição juntos"</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Modo Recall (Paramétrico)</h2>
                        <p>O modelo responde usando <strong>conhecimento armazenado no treinamento</strong>.</p>
                        <div class="code-block">MODO RECALL

Pergunta: "Qual a diferença entre dolo e culpa?"
    ↓
[Modelo acessa conhecimento paramétrico]
    ↓
Resposta: explicação baseada no treinamento</div>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Vantagens</th><th>Riscos</th></tr></thead>
                                <tbody>
                                    <tr><td>Rápido, sem necessidade de anexos</td><td>Pode estar desatualizado</td></tr>
                                    <tr><td>Bom para conceitos gerais</td><td>Risco de alucinação</td></tr>
                                    <tr><td>Funciona para conhecimento estável</td><td>Detalhes específicos podem estar errados</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Modo Transformativo (RAG)</h2>
                        <p>O modelo <strong>transforma informação fornecida</strong> — você dá o documento, ele processa.</p>
                        <div class="code-block">MODO TRANSFORMATIVO

Entrada: [Documento anexado] + "Resuma os principais pontos"
    ↓
[Modelo processa documento no contexto]
    ↓
Saída: Resumo baseado NO DOCUMENTO, não no treino</div>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Vantagens</th><th>Riscos</th></tr></thead>
                                <tbody>
                                    <tr><td>Informação atualizada e verificável</td><td>Limitado à janela de contexto</td></tr>
                                    <tr><td>Menor risco de alucinação factual</td><td>Pode "extrapolar" além do documento</td></tr>
                                    <tr><td>Controlável (você escolhe a fonte)</td><td>Qualidade depende do documento</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p><strong>Este é o modo mais seguro para trabalho jurídico</strong> — você ancora o modelo em documentos específicos.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Modo Interativo (Diálogo)</h2>
                        <p><strong>Colaboração iterativa</strong> — você e o modelo constroem juntos através de múltiplas trocas. Nesse modo, o LLM funciona como <strong>extensão da mente</strong>: você permanece no controle, "surfando no contexto" e organizando ideias com ajuda da máquina.</p>
                        <div class="code-block">MODO INTERATIVO

Você: "Quero criar uma petição de danos morais"
Claude: "Qual o fato gerador?"
Você: "Negativação indevida no SPC"
Claude: "Entendi. Você tem os documentos?"
[... iterações ...]
Claude: "Com base no que discutimos, aqui está o esboço..."</div>
                        <p><strong>Quando usar:</strong> Tarefas criativas, exploratórias, ou que precisam de refinamento progressivo.</p>
                        <p><strong>Limitação:</strong> Em conversas muito longas, a memória "desliza" — o modelo pode perder coerência com o início da conversa.</p>
                    </div>
                    <div class="callout callout-tip">
                        <div class="callout-title">A Evolução do Uso dos LLMs</div>
                        <p>O uso evoluiu de uma era em que se buscava um <em>oráculo com todas as respostas</em> (modo recall) para um paradigma em que <strong>o usuário é o curador do conhecimento</strong> (modo transformativo). A curadoria — saber o que fornecer ao modelo — continua sendo a habilidade mais importante.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Qual Modo Usar?</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Tarefa</th><th>Modo Recomendado</th><th>Por quê</th></tr></thead>
                                <tbody>
                                    <tr><td>Explicar conceito jurídico geral</td><td><strong>Recall</strong></td><td>Conhecimento estável</td></tr>
                                    <tr><td>Analisar petição específica</td><td><strong>Transformativo</strong></td><td>Informação no documento</td></tr>
                                    <tr><td>Pesquisar jurisprudência atual</td><td><strong>Transformativo + Busca</strong></td><td>Precisa de dados atualizados</td></tr>
                                    <tr><td>Criar texto novo colaborativamente</td><td><strong>Interativo</strong></td><td>Refinamento iterativo</td></tr>
                                    <tr><td>Revisar minuta de sentença</td><td><strong>Transformativo</strong></td><td>Análise de documento específico</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                `,
                exercise: {
                    title: "Praticando os Três Modos",
                    icon: "🔀",
                    description: "Experimentar cada modo de uso e entender quando aplicar cada um.",
                    steps: [
                        { title: "Testar Modo Recall", items: ["Pergunte um conceito geral: <code>Explique o princípio da razoabilidade no Direito Administrativo</code>", "Observe: resposta vem do conhecimento interno", "Note: bom para conceitos, mas verifique detalhes"] },
                        { title: "Testar Modo Transformativo", items: ["Anexe um documento (pode ser qualquer texto jurídico)", "Peça: <code>Resuma os principais pontos deste documento</code>", "Compare: resposta é baseada NO DOCUMENTO, não no treino"] },
                        { title: "Testar Modo Interativo", items: ["Inicie: <code>Quero criar um argumento jurídico sobre prescrição</code>", "Não dê todos os detalhes de uma vez", "Deixe o modelo fazer perguntas e vá refinando", "Observe: o diálogo vai construindo o resultado"] },
                        { title: "Comparar Resultados", items: ["Pergunte no modo Recall: <code>Qual a jurisprudência sobre danos morais por negativação?</code>", "Agora ative busca web e pergunte novamente", "Compare: modo transformativo (com busca) é mais confiável para dados específicos"] }
                    ],
                    checklist: [
                        "Entendo os 3 modos: Recall, Transformativo, Interativo",
                        "Sei quando usar cada modo",
                        "Compreendo que modo Transformativo é mais seguro para dados específicos",
                        "Testei os três modos na prática",
                        "Sei escolher o modo apropriado para cada tarefa"
                    ]
                },
                tip: "Para trabalho jurídico que envolve <strong>fatos específicos</strong> (processos, jurisprudência, dados), prefira sempre o <strong>modo Transformativo</strong> — anexe o documento e peça análise. O modo Recall serve para conceitos gerais, não para detalhes.",
                warning: "<strong>\"Vou perguntar direto ao modelo sobre a jurisprudência atual.\"</strong><br>Cuidado. No modo Recall puro, o modelo pode inventar jurisprudência. Use <strong>modo Transformativo</strong>: anexe o acórdão real ou ative busca web para informações atualizadas."
            },
            "1.14": {
                number: "1.14",
                module: "Módulo 1 — Fundamentos",
                title: "RAG e Anexos",
                objective: "Compreender Retrieval-Augmented Generation e a lógica de fornecer conhecimento externo ao modelo.",
                content: `
                    <div class="block">
                        <h2 class="block-title">O que é RAG?</h2>
                        <p><strong>RAG (Retrieval-Augmented Generation)</strong> é a técnica de fornecer documentos externos ao modelo para que ele baseie suas respostas nesse material — em vez de depender apenas do conhecimento paramétrico.</p>
                        <div class="code-block">SEM RAG (Recall puro):
Pergunta → [Conhecimento do treino] → Resposta (pode alucinar)

COM RAG:
Documentos + Pergunta → [Modelo lê documentos] → Resposta (ancorada)</div>
                        <p>No Claude, você faz RAG simplesmente <strong>anexando arquivos</strong> à conversa ou projeto.</p>
                    </div>
                    <div class="callout callout-info">
                        <div class="callout-title">💡 Por que RAG é Importante?</div>
                        <p><strong>Resolve o problema de alucinação</strong> — o modelo responde com base em documentos que você controla, não inventando.</p>
                        <p><strong>Atualização instantânea</strong> — sem retreinar o modelo, você fornece informações novas via documentos.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Duas Técnicas de Processamento</h2>
                        <p>O modelo usa diferentes estratégias dependendo do tamanho do documento:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Técnica</th><th>Como funciona</th><th>Vantagem</th><th>Desvantagem</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Just-in-time</strong></td><td>Todas as "cartas abertas" — documento inteiro na janela</td><td>Análise completa com perda mínima</td><td>Limitado à janela de contexto</td></tr>
                                    <tr><td><strong>Just-in-case</strong></td><td>"Cartas fechadas" — consulta sob demanda</td><td>Processa textos maiores que a janela</td><td>Pode perder detalhes</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p><strong>Regra geral:</strong> Documentos pequenos → Just-in-time (automático). Documentos grandes → Just-in-case (automático).</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Fontes de Conhecimento Externo</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Fonte</th><th>Descrição</th><th>Dica</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Anexo do Usuário</strong></td><td>Arquivos enviados diretamente</td><td>TXT ou MD é o "padrão ouro" — melhor precisão</td></tr>
                                    <tr><td><strong>Busca na Web</strong></td><td>Busca simples ou deep research</td><td>Desative para análise de processos (evita contaminação)</td></tr>
                                    <tr><td><strong>Resources (MCP)</strong></td><td>Bases externas via Model Context Protocol</td><td>APIs, bases de dados, serviços de nuvem conectados</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Tipos de Anexos no Claude</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Formato</th><th>Processamento</th><th>Limitações</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>PDF</strong></td><td>Texto extraído automaticamente</td><td>PDFs escaneados podem ter erros de OCR</td></tr>
                                    <tr><td><strong>DOCX/TXT</strong></td><td>Texto direto</td><td>Formatação complexa pode se perder</td></tr>
                                    <tr><td><strong>Imagens</strong></td><td>Visão (OCR integrado)</td><td>Texto pequeno/borrado pode falhar</td></tr>
                                    <tr><td><strong>Planilhas</strong></td><td>Dados estruturados</td><td>Planilhas muito grandes são truncadas</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Boas Práticas de Anexos</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Faça</th><th>Evite</th></tr></thead>
                                <tbody>
                                    <tr><td>Use PDFs com texto selecionável</td><td>PDFs escaneados de baixa qualidade</td></tr>
                                    <tr><td>Documente questões sobre o documento</td><td>Perguntas vagas sobre "o documento"</td></tr>
                                    <tr><td>Divida documentos muito longos</td><td>Anexar processo inteiro de 500 páginas</td></tr>
                                    <tr><td>Especifique seções de interesse</td><td>Esperar que o modelo "encontre tudo"</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">RAG em Projetos</h2>
                        <p>Projetos permitem <strong>RAG persistente</strong> — documentos disponíveis em todas as conversas:</p>
                        <div class="code-block">PROJETO "Análise de Contratos"
├── Documentos de Referência:
│   ├── template-analise.pdf
│   ├── checklist-clausulas.docx
│   └── legislacao-relevante.txt
│
└── Conversas:
    ├── Conversa 1: Contrato Cliente A → usa documentos do projeto
    ├── Conversa 2: Contrato Cliente B → usa documentos do projeto
    └── ... todas herdam os mesmos documentos</div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Limitações do RAG via Anexos</h2>
                        <ul style="margin:16px 0 16px 24px;color:var(--text-secondary);">
                            <li><strong>Janela de contexto:</strong> Documentos muito longos são truncados</li>
                            <li><strong>Lost in the Middle:</strong> Informações no meio de documentos longos podem ser "esquecidas"</li>
                            <li><strong>Sem busca semântica:</strong> Anexos simples não têm busca inteligente — tudo vai no contexto</li>
                            <li><strong>OCR imperfeito:</strong> Documentos escaneados podem ter erros de leitura</li>
                            <li><strong>Interpretação equivocada:</strong> O LLM pode ativar busca inadequadamente ou extrapolar</li>
                        </ul>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Prompt Modelo para Análise de Documentos</h2>
                        <p>Um prompt robusto para análise de documentos jurídicos:</p>
                        <div class="code-block" style="font-size:12px;">Consulte todos os documentos fornecidos na íntegra. Eles podem ter informações contraditórias. Por isso, faça uma leitura holística para captar todos os pontos controvertidos e todas as questões jurídicas na sua profundidade e totalidade.

Sua análise deve se basear EXCLUSIVAMENTE nos documentos fornecidos. USE EXCLUSIVAMENTE as evidências, fatos e informações contidos no documento fornecido. PROIBIÇÃO ABSOLUTA de incorporar elementos probatórios ou factuais de fontes externas.

Para PDFs digitalizados, ative ferramentas adequadas de OCR, garantindo a extração completa e precisa do conteúdo textual. Se o documento apresentar layout complexo (tabelas, gráficos), utilize análise visual multimodal. Se a análise ficar prejudicada pela impossibilidade de leitura, informe isso em sua resposta.</div>
                    </div>
                `,
                exercise: {
                    title: "Praticando RAG com Anexos",
                    icon: "📎",
                    description: "Experimentar diferentes formas de usar documentos com o Claude.",
                    steps: [
                        { title: "RAG Básico", items: ["Anexe um documento jurídico (petição, contrato, acórdão)", "Peça: <code>Resuma os principais pontos deste documento</code>", "Observe: a resposta é baseada no documento, não no treino"] },
                        { title: "Perguntas Específicas", items: ["Com o documento ainda anexado, pergunte algo específico", "Exemplo: <code>Qual o valor da causa mencionado?</code>", "Confira: o valor está correto comparado ao documento?"] },
                        { title: "Testar Limites", items: ["Anexe um documento longo (20+ páginas)", "Pergunte sobre informação no MEIO do documento", "Observe: o modelo encontra ou ignora?", "Isso demonstra Lost in the Middle em ação"] },
                        { title: "RAG em Projeto", items: ["Crie um projeto de teste", "Adicione um documento de referência", "Inicie duas conversas diferentes no projeto", "Observe: ambas têm acesso ao documento sem re-anexar"] }
                    ],
                    checklist: [
                        "Entendo o conceito de RAG (Retrieval-Augmented Generation)",
                        "Sei anexar documentos ao Claude",
                        "Compreendo as limitações (janela, Lost in Middle, OCR)",
                        "Testei RAG com documento jurídico real",
                        "Sei usar Projetos para RAG persistente"
                    ]
                },
                tip: "Para documentos jurídicos longos, <strong>divida em partes</strong> ou peça primeiro um índice/resumo, depois faça perguntas específicas sobre seções. Isso contorna o problema de Lost in the Middle.",
                warning: "<strong>\"Anexei o documento, então a resposta está garantidamente correta.\"</strong><br>Não exatamente. O modelo pode <strong>extrapolar</strong> além do documento ou misturar com conhecimento paramétrico. Sempre pergunte: 'Isso está no documento ou você está inferindo?'"
            },
            "1.15": {
                number: "1.15",
                module: "Módulo 1 — Fundamentos",
                title: "Introdução aos Agentes",
                objective: "Conhecer o conceito de agentes de LLM — sistemas que planejam, usam ferramentas e executam tarefas.",
                content: `
                    <div class="block">
                        <h2 class="block-title">O que é um Agente de LLM?</h2>
                        <p>Um <strong>agente</strong> é um LLM que pode <strong>planejar, usar ferramentas e executar ações</strong> no mundo — não apenas gerar texto.</p>
                        <div class="code-block">LLM TRADICIONAL:
Entrada → [Modelo] → Texto de saída

AGENTE:
Objetivo → [Modelo PLANEJA] → [USA FERRAMENTAS] → [EXECUTA AÇÕES] → Resultado</div>
                        <p>A diferença fundamental: o agente tem <strong>autonomia</strong> para decidir quais ações tomar.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">O Loop Agêntico</h2>
                        <p>Agentes operam em um ciclo de <strong>observação → decisão → ação</strong>:</p>
                        <div class="code-block">LOOP AGÊNTICO:

┌─────────────────────────────────────────────┐
│                                             │
│  OBSERVAR → PENSAR → DECIDIR → AGIR ───┐   │
│      ↑                                  │   │
│      └──────── LOOP ────────────────────┘   │
│                                             │
│  Até: objetivo alcançado OU limite de ações │
└─────────────────────────────────────────────┘</div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Ferramentas dos Agentes</h2>
                        <p>Agentes têm acesso a <strong>ferramentas</strong> que estendem suas capacidades:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Ferramenta</th><th>O que faz</th><th>Exemplo de uso</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Busca web</strong></td><td>Pesquisa informações online</td><td>Encontrar jurisprudência recente</td></tr>
                                    <tr><td><strong>Código</strong></td><td>Executa cálculos, processa dados</td><td>Calcular correção monetária</td></tr>
                                    <tr><td><strong>Artefatos</strong></td><td>Cria documentos estruturados</td><td>Gerar tabela, documento</td></tr>
                                    <tr><td><strong>Pensamento estendido</strong></td><td>Raciocínio mais profundo</td><td>Análise complexa de caso</td></tr>
                                    <tr><td><strong>Análise de dados</strong></td><td>Processa planilhas</td><td>Analisar movimentação financeira</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Padrões de Agentes</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Padrão</th><th>Como funciona</th><th>Exemplo</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Tool Use</strong></td><td>Modelo decide qual ferramenta usar</td><td>Buscar jurisprudência quando perguntado</td></tr>
                                    <tr><td><strong>Chain</strong></td><td>Sequência de passos predefinidos</td><td>Ler documento → Extrair dados → Formatar</td></tr>
                                    <tr><td><strong>ReAct</strong></td><td>Reasoning + Acting em loop</td><td>Pensar → Buscar → Pensar → Responder</td></tr>
                                    <tr><td><strong>Multi-Agent</strong></td><td>Vários agentes colaborando</td><td>Pesquisador + Redator + Revisor</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="callout callout-warning">
                        <div class="callout-title">⚠️ Riscos de Agentes</div>
                        <p><strong>Autonomia traz riscos:</strong></p>
                        <ul style="margin:8px 0 0 20px;">
                            <li>Ações irreversíveis (deletar, enviar, publicar)</li>
                            <li>Loop infinito (agente não para)</li>
                            <li>Decisões erradas com consequências reais</li>
                            <li>Custo descontrolado (muitas chamadas de API)</li>
                        </ul>
                        <p style="margin-top:12px;"><strong>Princípio:</strong> Humano deve aprovar ações críticas.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Agentes no Claude</h2>
                        <p>O Claude já tem capacidades agênticas integradas:</p>
                        <ul style="margin:16px 0 16px 24px;color:var(--text-secondary);">
                            <li><strong>Tool use automático:</strong> Decide sozinho quando buscar, calcular, criar artefato</li>
                            <li><strong>Pensamento estendido:</strong> Raciocina por mais tempo em problemas complexos</li>
                            <li><strong>Computer use:</strong> Pode controlar computador (experimental)</li>
                            <li><strong>MCP (Model Context Protocol):</strong> Conecta a sistemas externos</li>
                        </ul>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Assistentes vs Multi-agentes</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Característica</th><th>Assistente Simples</th><th>Multi-agentes</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Tarefas</strong></td><td>Uma de cada vez</td><td>Paralelas e em sequência</td></tr>
                                    <tr><td><strong>Ferramentas</strong></td><td>Uma por solicitação</td><td>Várias orquestradas</td></tr>
                                    <tr><td><strong>Modelos</strong></td><td>Um único trabalhando</td><td>Múltiplos coordenados</td></tr>
                                    <tr><td><strong>Comportamento</strong></td><td>Reativo</td><td>Proativo</td></tr>
                                    <tr><td><strong>Autonomia</strong></td><td>Segue instruções</td><td>Planeja e age</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">O Papel do Jurista na Justiça Aumentada</h2>
                        <p>Com a evolução dos agentes, o papel do profissional jurídico se transforma:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Papel</th><th>O que significa</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Engenharia de Prompt</strong></td><td>Conversar com a máquina de forma eficaz</td></tr>
                                    <tr><td><strong>Engenharia de Contexto</strong></td><td>Curadoria de conhecimento — o que fornecer ao modelo</td></tr>
                                    <tr><td><strong>Engenharia de Workflow</strong></td><td>Design de sistemas decisórios com IA</td></tr>
                                    <tr><td><strong>Metacognição</strong></td><td>Modelagem cognitiva — entender como a máquina pensa</td></tr>
                                    <tr><td><strong>Curadoria de Valores</strong></td><td>Modelagem ética — garantir alinhamento com justiça</td></tr>
                                    <tr><td><strong>Auditoria Epistêmica</strong></td><td>Verificação e melhoria contínua dos outputs</td></tr>
                                    <tr><td><strong>Decisor Estratégico</strong></td><td>Reserva de humanidade — o humano decide</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="block">
                        <h2 class="block-title">Aplicações Jurídicas</h2>
                        <p>Status atual das aplicações agênticas no Direito:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Aplicação</th><th>Status</th></tr></thead>
                                <tbody>
                                    <tr><td>Pesquisa jurisprudencial automatizada</td><td style="color:var(--accent-success);">Já existe</td></tr>
                                    <tr><td>Análise de contratos com checklist</td><td style="color:var(--accent-success);">Já existe</td></tr>
                                    <tr><td>Geração de minutas com revisão</td><td style="color:var(--accent-success);">Já existe</td></tr>
                                    <tr><td>Deep Research jurídico</td><td style="color:var(--accent-success);">Já existe</td></tr>
                                    <tr><td>Agente que protocola petições</td><td style="color:var(--accent-warning);">Experimental</td></tr>
                                    <tr><td>Robô que gerencia prazos e ações</td><td style="color:var(--accent-warning);">Experimental</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                `,
                exercise: {
                    title: "Experimentando Capacidades Agênticas",
                    icon: "🤖",
                    description: "Observar o Claude usando ferramentas e agindo de forma autônoma.",
                    steps: [
                        { title: "Observar Tool Use", items: ["Ative busca web e pergunte: <code>Qual a jurisprudência recente do STJ sobre danos morais em 2024?</code>", "Observe: o Claude ativa busca automaticamente", "Note a mensagem 'Buscando...' — isso é tool use em ação"] },
                        { title: "Testar Pensamento Estendido", items: ["Se disponível, ative 'Pensamento estendido'", "Dê um problema complexo: <code>Analise os prós e contras da regulamentação de IA no Judiciário</code>", "Observe: o modelo pensa por mais tempo antes de responder"] },
                        { title: "Testar Artefatos", items: ["Peça: <code>Crie uma tabela comparando os prazos processuais no CPC</code>", "Observe: o Claude cria um artefato automaticamente", "Isso é uma ação agêntica — não apenas texto, mas documento estruturado"] },
                        { title: "Observar Loop Agêntico", items: ["Peça uma tarefa em múltiplas etapas: <code>Pesquise sobre IA no Judiciário, depois crie um resumo, depois liste 5 recomendações</code>", "Observe: o modelo executa cada etapa em sequência", "Isso demonstra o padrão de chain/loop agêntico"] }
                    ],
                    checklist: [
                        "Entendo o conceito de agente de LLM",
                        "Sei que agentes usam ferramentas para agir no mundo",
                        "Compreendo o loop agêntico (observar-pensar-agir)",
                        "Observei o Claude usando ferramentas automaticamente",
                        "Entendo os riscos de autonomia em agentes"
                    ]
                },
                tip: "Quando usar capacidades agênticas do Claude, <strong>especifique claramente os limites</strong>: 'Busque informações mas não tome decisões', 'Analise mas não execute', 'Sugira mas peça confirmação'. Humano deve validar ações críticas.",
                warning: "<strong>\"Vou deixar o agente fazer tudo sozinho.\"</strong><br>Cuidado. Agentes com autonomia total podem tomar ações indesejadas. No contexto jurídico, <strong>sempre revise antes de usar</strong> qualquer output em documento oficial. O humano é responsável pelo resultado final."
            },
            "1.16": {
                number: "1.16",
                module: "Módulo 1 — Fundamentos",
                title: "Os 10 Mandamentos",
                objective: "Síntese final do Módulo 1: princípios fundamentais para dominar os LLMs.",
                content: `
                    <div class="block">
                        <h2 class="block-title">Síntese do Módulo</h2>
                        <p>Os <strong>10 Mandamentos</strong> condensam tudo que aprendemos sobre LLMs em princípios práticos:</p>
                    </div>
                    <div class="block">
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>#</th><th>Mandamento</th><th>Lição</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>1</strong></td><td><strong>Trate o LLM como uma calculadora de textos</strong></td><td>Parâmetros são números, não textos. Não há "banco de textos" — há padrões estatísticos.</td></tr>
                                    <tr><td><strong>2</strong></td><td><strong>A janela de contexto é seu superpoder e kriptonita</strong></td><td>Pouco contexto = resposta genérica. Excesso = degradação. Trate como mesa de trabalho.</td></tr>
                                    <tr><td><strong>3</strong></td><td><strong>LLMs pensam através de tokens: inputs nobres = outputs nobres</strong></td><td>Instruções de qualidade geram respostas de qualidade. Lixo entra, lixo sai.</td></tr>
                                    <tr><td><strong>4</strong></td><td><strong>Alucinações são inerentes — e não necessariamente ruins</strong></td><td>Toda informação factual do conhecimento paramétrico é falsa até prova em contrário.</td></tr>
                                    <tr><td><strong>5</strong></td><td><strong>Anexo é diferente de contexto</strong></td><td>Nem todo anexo entra inteiro na janela. Quanto mais longo, mais detalhes se perdem.</td></tr>
                                    <tr><td><strong>6</strong></td><td><strong>LLMs são máquinas obedientes, treinadas para agradar</strong></td><td>Não acredite em elogios. Use a bajulação a seu favor: ensine-o a criticar.</td></tr>
                                    <tr><td><strong>7</strong></td><td><strong>LLMs não têm compromisso com verdade, justiça ou sabedoria</strong></td><td>Seja você o curador de valores e julgamento. Não permita que a máquina decida por você.</td></tr>
                                    <tr><td><strong>8</strong></td><td><strong>Não foque em automação — foque em aumentação</strong></td><td>O poder dos LLMs é traduzir e condensar complexidades, não substituir seu pensamento.</td></tr>
                                    <tr><td><strong>9</strong></td><td><strong>No modo agêntico, seja regente da orquestra, não plateia</strong></td><td>Você é o arquiteto cognitivo: controla prompt, skills e resources.</td></tr>
                                    <tr><td><strong>10</strong></td><td><strong>Continue pensando!</strong></td><td>SER HUMANO + IA > SER HUMANO - IA. Use a IA como asa, não como muleta.</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="callout callout-tip">
                        <div class="callout-title">A Equação Fundamental</div>
                        <p style="font-size:18px;text-align:center;margin:12px 0;"><strong>SER HUMANO + IA > SER HUMANO - IA</strong></p>
                        <p>Não devemos usar a IA como muleta, mas como asa para ir mais rápido, mais alto e mais longe. A história de Kasparov vs. Deep Blue nos ensina: humanos + máquinas superam humanos ou máquinas sozinhos.</p>
                    </div>
                    <div class="block">
                        <h2 class="block-title">5 Perguntas que Você Deve Saber Responder</h2>
                        <ol style="margin:16px 0 16px 24px;color:var(--text-secondary);">
                            <li><strong>O que se passa dentro do LLM?</strong> Como ele produz texto?</li>
                            <li><strong>De onde o LLM tira informação?</strong> Qual a fonte de conhecimento?</li>
                            <li><strong>O que é janela de contexto?</strong> Por que é tão importante?</li>
                            <li><strong>O que são alucinações?</strong> Por que ocorrem? Como mitigar?</li>
                            <li><strong>Como conseguir respostas confiáveis?</strong> Quais técnicas usar?</li>
                        </ol>
                        <p>Se você consegue responder essas perguntas, dominou os fundamentos.</p>
                    </div>
                `,
                exercise: {
                    title: "Checklist de Revisão do Módulo 1",
                    icon: "✓",
                    description: "Verifique se domina os conceitos fundamentais.",
                    steps: [
                        { title: "Revise os Mandamentos", items: ["Leia cada mandamento na tabela acima", "Consegue explicar cada um em suas próprias palavras?", "Relacione com situações do seu trabalho"] },
                        { title: "Teste seus Conhecimentos", items: ["Explique para si mesmo: por que LLMs alucinam?", "Qual a diferença entre recall, transformativo e interativo?", "Por que anexo é diferente de contexto?"] },
                        { title: "Aplique na Prática", items: ["Escolha uma tarefa jurídica real", "Aplique os princípios: contexto adequado, verificação de fatos, curadoria de valores", "Observe: a resposta melhorou?"] }
                    ],
                    checklist: [
                        "Sei que LLMs são calculadoras de texto (parâmetros são números)",
                        "Entendo a janela de contexto e seus trade-offs",
                        "Sei que inputs nobres geram outputs nobres",
                        "Assumo que toda informação factual pode ser alucinação",
                        "Sei a diferença entre anexo e contexto",
                        "Reconheço o viés de bajulação e sei usar a meu favor",
                        "Sou o curador de valores — não delego julgamento à máquina",
                        "Uso IA para aumentação, não apenas automação",
                        "No modo agêntico, sou o regente, não a plateia",
                        "Continuo pensando — IA é asa, não muleta"
                    ]
                },
                tip: "Imprima ou salve esta página como referência rápida. Os <strong>10 Mandamentos</strong> são princípios que você deve ter sempre em mente ao usar LLMs no trabalho jurídico.",
                warning: "<strong>\"Já sei tudo, não preciso revisar.\"</strong><br>Cuidado com a confiança excessiva. Mesmo usuários experientes cometem erros básicos. Revisite os mandamentos periodicamente — especialmente o 4 (alucinações) e o 7 (curadoria de valores)."
            },
            "2.1": {
                number: "2.1",
                module: "Módulo 2 — Engenharia de Prompt",
                title: "Introdução à Engenharia de Prompt",
                objective: "Compreender o que é engenharia de prompt e conhecer as três modalidades de comunicação com LLMs.",
                content: `
                    <div class="block">
                        <h2 class="block-title">O Que é Engenharia de Prompt?</h2>
                        <p><strong>Engenharia de Prompt</strong> é a disciplina que estuda como estruturar entradas (prompts) para LLMs de forma a obter saídas desejadas de maneira <strong>confiável</strong> e <strong>eficiente</strong>.</p>
                        <p>É a arte e a ciência de <strong>conversar com máquinas</strong> de forma produtiva.</p>
                    </div>

                    <div class="callout callout-tip">
                        <div class="callout-title">Citação: Kevin Kelly</div>
                        <p style="font-size:1.1em;font-style:italic;margin:12px 0;">"Seres humanos são para perguntas; máquinas, para respostas."</p>
                        <p style="text-align:right;font-size:0.9em;">— Kevin Kelly</p>
                    </div>

                    <div class="callout callout-info">
                        <div class="callout-title">Citação: Andrej Karpathy</div>
                        <p style="font-size:1.1em;font-style:italic;margin:12px 0;">"A linguagem de programação mais nova e mais quente do momento é o inglês (ou o português ou qualquer outra linguagem natural)."</p>
                        <p style="text-align:right;font-size:0.9em;">— Andrej Karpathy, ex-diretor de IA da Tesla</p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">As Três Modalidades de Prompt</h2>
                        <p>Existem <strong>três formas diferentes</strong> de conversar com LLMs, cada uma com características próprias:</p>
                    </div>

                    <div class="block" style="border-left:4px solid #10b981;">
                        <h2 class="block-title" style="color:#10b981;">1. Vibe Prompting</h2>
                        <p><strong>Comunicação em linguagem natural pura</strong> — como você falaria com um colega.</p>
                        <ul style="margin:12px 0 12px 24px;color:var(--text-secondary);">
                            <li><strong>Conversacional</strong> — tom natural, sem formatação especial</li>
                            <li><strong>Direto e simples</strong> — vai direto ao ponto</li>
                            <li><strong>Fluxo de pensamento</strong> — escreve como pensa</li>
                            <li><strong>Aprimorável</strong> — pode usar reflexão, pensamento estendido, meta prompts</li>
                        </ul>
                        <div class="code-block">Exemplo: "Resuma esse contrato em 3 parágrafos, destacando as cláusulas mais importantes para o locatário."</div>
                    </div>

                    <div class="block" style="border-left:4px solid var(--gold);">
                        <h2 class="block-title" style="color:var(--gold);">2. Prompt Estruturado</h2>
                        <p><strong>Comunicação em linguagem estruturada</strong> — como você escreveria um documento técnico.</p>
                        <ul style="margin:12px 0 12px 24px;color:var(--text-secondary);">
                            <li><strong>Marcadores</strong> — uso de markdown (##, -, **)</li>
                            <li><strong>Delimitadores</strong> — tags XML (&lt;persona&gt;, &lt;objetivo&gt;)</li>
                            <li><strong>Separação modular</strong> — cada parte do prompt tem função clara</li>
                            <li><strong>Frameworks</strong> — metodologias como P.O.E.M.A.</li>
                            <li><strong>Controle de output</strong> — define formato da resposta</li>
                        </ul>
                        <div class="code-block">&lt;persona&gt;
Você é um advogado especialista em direito imobiliário.
&lt;/persona&gt;

&lt;objetivo&gt;
Analise o contrato anexado e identifique cláusulas abusivas.
&lt;/objetivo&gt;

&lt;formato_saida&gt;
Para cada cláusula abusiva encontrada:
- Número da cláusula
- Texto da cláusula
- Por que é abusiva
- Sugestão de correção
&lt;/formato_saida&gt;</div>
                    </div>

                    <div class="block" style="border-left:4px solid #8b5cf6;">
                        <h2 class="block-title" style="color:#8b5cf6;">3. Prompt Agêntico</h2>
                        <p><strong>Comunicação com agentes</strong> — como você delegaria a um assistente autônomo.</p>
                        <ul style="margin:12px 0 12px 24px;color:var(--text-secondary);">
                            <li><strong>Orquestração</strong> — tarefas encadeadas automaticamente</li>
                            <li><strong>Tools e Skills</strong> — ativação de ferramentas (busca, cálculo, código)</li>
                            <li><strong>Resources</strong> — acesso a bases de conhecimento</li>
                            <li><strong>Workflows complexos</strong> — fluxos adaptativos</li>
                            <li><strong>Artefatos</strong> — outputs sofisticados (documentos, código, análises)</li>
                        </ul>
                        <div class="code-block">Exemplo (Claude Code):
"Pesquise jurisprudência sobre dano moral em atraso de voo,
analise os 5 casos mais relevantes,
gere uma tabela comparativa com valores de indenização,
e redija uma petição inicial baseada nesses precedentes."</div>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Comparativo das Modalidades</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Aspecto</th><th>Vibe</th><th>Estruturado</th><th>Agêntico</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Complexidade</strong></td><td>Baixa</td><td>Média</td><td>Alta</td></tr>
                                    <tr><td><strong>Controle</strong></td><td>Pouco</td><td>Alto</td><td>Muito alto</td></tr>
                                    <tr><td><strong>Reusabilidade</strong></td><td>Baixa</td><td>Alta</td><td>Muito alta</td></tr>
                                    <tr><td><strong>Curva de aprendizado</strong></td><td>Imediata</td><td>Moderada</td><td>Íngreme</td></tr>
                                    <tr><td><strong>Ideal para</strong></td><td>Tarefas simples</td><td>Tarefas repetitivas</td><td>Workflows complexos</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="callout callout-warning">
                        <div class="callout-title">Quando Usar Cada Modalidade?</div>
                        <p><strong>Vibe:</strong> Perguntas rápidas, brainstorming, exploração inicial.</p>
                        <p><strong>Estruturado:</strong> Documentos jurídicos, análises padronizadas, tarefas que se repetem.</p>
                        <p><strong>Agêntico:</strong> Pesquisas complexas, geração de múltiplos documentos, automação de fluxos.</p>
                    </div>
                `,
                exercise: {
                    title: "Experimentando as Três Modalidades",
                    icon: "🎯",
                    description: "Compare na prática como as três modalidades produzem resultados diferentes para a mesma tarefa.",
                    steps: [
                        { title: "Teste o Vibe Prompting", items: ["Abra o Claude e escreva: <code>Quais são os requisitos para usucapião extraordinária?</code>", "Observe: resposta direta, tom conversacional", "Note a estrutura livre da resposta"] },
                        { title: "Teste o Prompt Estruturado", items: ["Agora use: <code>&lt;objetivo&gt;Liste os requisitos para usucapião extraordinária&lt;/objetivo&gt;&lt;formato&gt;Use uma tabela com: Requisito | Fundamento Legal | Prazo&lt;/formato&gt;</code>", "Compare: resposta mais organizada, formato definido", "Perceba o controle sobre o output"] },
                        { title: "Reflita sobre as Diferenças", items: ["Qual modalidade deu resposta mais útil para você?", "Em que situações usaria cada uma?", "Pense em tarefas do seu dia a dia: qual modalidade se encaixa melhor?"] }
                    ],
                    checklist: [
                        "Entendo que engenharia de prompt é a arte de conversar com máquinas",
                        "Conheço as três modalidades: Vibe, Estruturado e Agêntico",
                        "Sei quando usar cada modalidade",
                        "Experimentei na prática a diferença entre Vibe e Estruturado"
                    ]
                },
                tip: "Comece com <strong>Vibe Prompting</strong> para entender o problema, evolua para <strong>Estruturado</strong> quando precisar de consistência, e use <strong>Agêntico</strong> quando tiver fluxos complexos. A maioria das tarefas jurídicas se beneficia do prompt estruturado.",
                warning: "<strong>\"Vou sempre usar Vibe porque é mais fácil.\"</strong><br>Vibe funciona para tarefas simples, mas você perde controle sobre o formato e a consistência. Para documentos jurídicos, o prompt estruturado é quase sempre a melhor escolha."
            },
            "2.2": {
                number: "2.2",
                module: "Módulo 2 — Engenharia de Prompt",
                title: "Fundamentos",
                objective: "Compreender os dois modelos mentais essenciais para engenharia de prompt: LLM como calculadora de textos e como máquina obediente.",
                content: `
                    <div class="block">
                        <h2 class="block-title">O LLM como Máquina de Calcular Textos</h2>
                        <p>Para dominar a engenharia de prompt, você precisa entender <strong>como o LLM funciona por dentro</strong>:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Característica</th><th>Implicação Prática</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>INPUT → CÁLCULOS → OUTPUT</strong></td><td>Processo não-determinístico: mesma entrada pode gerar saídas diferentes</td></tr>
                                    <tr><td><strong>Processo Auto-regressivo</strong></td><td>Gera uma palavra de cada vez, baseado nas anteriores</td></tr>
                                    <tr><td><strong>Padrões Linguísticos</strong></td><td>Opera por probabilidade semântica, não por "entendimento"</td></tr>
                                    <tr><td><strong>Sem Aprendizado Contínuo</strong></td><td>Cada conversa começa do zero (reset de contexto)</td></tr>
                                    <tr><td><strong>Aprendizado pelo Contexto</strong></td><td>Aprende dentro da janela, mas não persiste</td></tr>
                                    <tr><td><strong>Limitado pela Janela</strong></td><td>Só "vê" o que está na janela de contexto</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="callout callout-tip">
                        <div class="callout-title">Citação: Umberto Eco</div>
                        <p style="font-size:1.1em;font-style:italic;margin:12px 0;">"O computador não é uma máquina inteligente que ajuda pessoas burras, mas sim uma máquina burra que só funciona nas mãos de pessoas inteligentes."</p>
                        <p style="text-align:right;font-size:0.9em;">— Umberto Eco</p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">O LLM como Máquina Obediente</h2>
                        <p>Além de calcular textos, o LLM foi <strong>treinado para obedecer</strong>:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Característica</th><th>O que significa</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Pré-treino + Fine-tuning</strong></td><td>Ajustado com feedback humano (RLHF) para ser útil</td></tr>
                                    <tr><td><strong>Alinhamento Ético (HHH)</strong></td><td>Treinado para ser Helpful, Harmless, Honest</td></tr>
                                    <tr><td><strong>Dirigibilidade (Steerability)</strong></td><td>Responde às instruções — quanto mais claras, melhor</td></tr>
                                    <tr><td><strong>Bajulação (Sycophancy)</strong></td><td>Tende a concordar com você, mesmo quando você está errado</td></tr>
                                    <tr><td><strong>Espelhamento de Inteligência</strong></td><td>Qualidade da resposta reflete qualidade da pergunta</td></tr>
                                    <tr><td><strong>Sem Sabedoria Intrínseca</strong></td><td>Não tem senso de justiça ou valores próprios</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="callout callout-warning">
                        <div class="callout-title">O Efeito Bajulação (Sycophancy)</div>
                        <p>LLMs foram treinados para <strong>agradar o usuário</strong>. Isso significa que:</p>
                        <ul style="margin:12px 0;padding-left:24px;">
                            <li>Tendem a <strong>concordar</strong> com suas opiniões, mesmo erradas</li>
                            <li>Podem <strong>mudar de posição</strong> se você pressionar</li>
                            <li><strong>Elogiam</strong> seu trabalho mesmo quando tem problemas</li>
                        </ul>
                        <p><strong>Solução:</strong> Peça explicitamente críticas. Use "advogado do diabo". Desconfie de elogios.</p>
                    </div>

                    <div class="callout callout-info">
                        <div class="callout-title">Citação: Ted Nelson</div>
                        <p style="font-size:1.1em;font-style:italic;margin:12px 0;">"A boa notícia sobre os computadores é que eles fazem o que você manda. A má notícia é que eles fazem o que você manda."</p>
                        <p style="text-align:right;font-size:0.9em;">— Ted Nelson</p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Espelhamento de Inteligência</h2>
                        <p>A <strong>inteligência do LLM está correlacionada à inteligência do usuário</strong>:</p>
                        <ul style="margin:12px 0 12px 24px;color:var(--text-secondary);">
                            <li>Perguntas vagas → respostas genéricas</li>
                            <li>Perguntas específicas → respostas detalhadas</li>
                            <li>Contexto pobre → resultado pobre</li>
                            <li>Contexto rico → resultado rico</li>
                        </ul>
                        <p>O LLM é um <strong>espelho</strong>: reflete a qualidade do que você coloca nele.</p>
                    </div>
                `,
                exercise: {
                    title: "Testando Dirigibilidade e Bajulação",
                    icon: "🧪",
                    description: "Experimente na prática como o LLM responde a diferentes tipos de instruções.",
                    steps: [
                        { title: "Teste a Dirigibilidade", items: ["Faça a mesma pergunta de duas formas diferentes:", "<code>O que é usucapião?</code> (vago)", "<code>Explique usucapião extraordinária em 3 parágrafos, com requisitos, prazo e fundamento legal.</code> (específico)", "Compare as respostas: qual é mais útil?"] },
                        { title: "Teste a Bajulação", items: ["Escreva uma opinião jurídica claramente errada", "Exemplo: <code>Acho que contratos verbais não têm validade no Brasil. Concorda?</code>", "Observe: o modelo concorda ou corrige?", "Agora peça: <code>Seja crítico e aponte se eu estiver errado.</code>"] },
                        { title: "Espelhamento de Inteligência", items: ["Faça uma pergunta com contexto pobre: <code>Esse contrato está bom?</code>", "Agora com contexto rico: <code>Analise este contrato de locação comercial. Verifique cláusulas de reajuste, multa rescisória e responsabilidade por benfeitorias.</code>", "Compare a profundidade das respostas"] }
                    ],
                    checklist: [
                        "Entendo que o LLM é uma calculadora de textos (não 'pensa' como humano)",
                        "Sei que o LLM foi treinado para obedecer (dirigibilidade)",
                        "Reconheço o efeito bajulação e sei como mitigá-lo",
                        "Compreendo o espelhamento: perguntas melhores = respostas melhores"
                    ]
                },
                tip: "Sempre que receber uma resposta do LLM que parece <strong>boa demais</strong> ou <strong>concordante demais</strong>, desconfie. Peça explicitamente: <em>'Aponte problemas nessa análise'</em> ou <em>'Faça o papel de advogado da parte contrária'</em>.",
                warning: "<strong>\"O Claude disse que minha petição está perfeita!\"</strong><br>Cuidado com a bajulação. LLMs tendem a elogiar seu trabalho por padrão. Sempre peça críticas explícitas e use a técnica do advogado do diabo."
            },
            "2.3": {
                number: "2.3",
                module: "Módulo 2 — Engenharia de Prompt",
                title: "Inputs Nobres = Outputs Nobres",
                objective: "Dominar técnicas para ativar as 'áreas nobres' da rede neural: Few-shot, Chain of Thought e Priming.",
                content: `
                    <div class="block">
                        <h2 class="block-title">A Máquina Pensa Através de Tokens</h2>
                        <p>A qualidade dos <strong>tokens de entrada</strong> influencia diretamente a qualidade da resposta. É o princípio fundamental: <strong>Inputs Nobres = Outputs Nobres</strong>.</p>
                        <p>Existem técnicas comprovadas para "ativar" partes melhores da rede neural:</p>
                    </div>

                    <div class="block" style="border-left:4px solid #10b981;">
                        <h2 class="block-title" style="color:#10b981;">1. Few-Shot Learning (Poder dos Exemplos)</h2>
                        <p>Mostrar <strong>exemplos</strong> do que você quer é mais eficaz que apenas descrever.</p>
                        <div class="code-block">## Tarefa: Gerar ementas no padrão CNJ

## Exemplos:

Ementa 1:
ADMINISTRATIVO. SERVIDOR PÚBLICO. ADICIONAL DE INSALUBRIDADE.
LAUDO PERICIAL. GRAU MÁXIMO. PROCEDÊNCIA.
1. Comprovada exposição a agentes nocivos em grau máximo.
2. Devido o adicional de 40% sobre o vencimento básico.

Ementa 2:
PREVIDENCIÁRIO. APOSENTADORIA POR INVALIDEZ. INCAPACIDADE
TOTAL E PERMANENTE. CONCESSÃO.
1. Laudo atesta incapacidade total para o trabalho.
2. Preenchidos os requisitos legais.

## Agora gere uma ementa para o caso anexado, seguindo o mesmo padrão.</div>
                        <p><strong>Por que funciona:</strong> O modelo "aprende" o padrão dentro da janela de contexto.</p>
                    </div>

                    <div class="block" style="border-left:4px solid var(--gold);">
                        <h2 class="block-title" style="color:var(--gold);">2. Chain of Thought (Cadeia de Pensamento)</h2>
                        <p>Forçar o modelo a <strong>pensar passo a passo</strong> melhora a qualidade do raciocínio.</p>
                        <div class="code-block">## Sem CoT (resultado fraco):
"Qual o prazo prescricional dessa ação?"

## Com CoT (resultado melhor):
"Analise o prazo prescricional dessa ação.
Pense passo a passo:
1. Qual é a natureza jurídica da pretensão?
2. Qual o fundamento legal aplicável?
3. Qual o prazo previsto na lei?
4. Quando começou a correr o prazo?
5. Houve alguma causa de suspensão ou interrupção?
6. Conclusão: está prescrito ou não?"</div>
                        <p><strong>Por que funciona:</strong> Força o modelo a gerar tokens intermediários de raciocínio.</p>
                    </div>

                    <div class="block" style="border-left:4px solid #8b5cf6;">
                        <h2 class="block-title" style="color:#8b5cf6;">3. Pensamento Estendido (Extended Thinking)</h2>
                        <p>Permitir que o modelo <strong>"pense em voz alta"</strong> antes de responder.</p>
                        <div class="code-block">"Antes de responder, reflita sobre os seguintes aspectos:
- Quais são os argumentos a favor?
- Quais são os argumentos contra?
- Há jurisprudência relevante?
- Qual a posição majoritária da doutrina?

Depois de refletir, apresente sua análise."</div>
                        <p><strong>Por que funciona:</strong> Ativa circuitos de raciocínio mais profundo.</p>
                    </div>

                    <div class="block" style="border-left:4px solid #06b6d4;">
                        <h2 class="block-title" style="color:#06b6d4;">4. Efeito Priming (Surfando no Contexto)</h2>
                        <p>O contexto acumulado <strong>direciona</strong> as próximas respostas. Use isso a seu favor.</p>
                        <div class="code-block">## Priming com vocabulário técnico:
"Você está analisando uma questão de direito administrativo
envolvendo ato vinculado, discricionariedade, mérito administrativo
e controle judicial. Use terminologia técnica precisa."

## Priming com tom:
"Responda como se estivesse escrevendo para a Revista dos Tribunais.
Tom acadêmico, citações doutrinárias, linguagem formal."</div>
                        <p><strong>Por que funciona:</strong> O modelo "surfa" no vocabulário e tom já estabelecidos.</p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Comparativo: Zero-Shot vs Few-Shot</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Aspecto</th><th>Zero-Shot</th><th>Few-Shot</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Definição</strong></td><td>Sem exemplos</td><td>Com 2-5 exemplos</td></tr>
                                    <tr><td><strong>Controle de formato</strong></td><td>Baixo</td><td>Alto</td></tr>
                                    <tr><td><strong>Consistência</strong></td><td>Variável</td><td>Consistente</td></tr>
                                    <tr><td><strong>Tokens consumidos</strong></td><td>Poucos</td><td>Mais</td></tr>
                                    <tr><td><strong>Quando usar</strong></td><td>Tarefas simples</td><td>Formato específico</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="callout callout-tip">
                        <div class="callout-title">Regra de Ouro</div>
                        <p>Se você quer um <strong>formato específico</strong>, mostre exemplos.<br>
                        Se você quer um <strong>raciocínio complexo</strong>, peça passo a passo.<br>
                        Se você quer um <strong>tom específico</strong>, estabeleça no início.</p>
                    </div>
                `,
                exercise: {
                    title: "Praticando Few-Shot e Chain of Thought",
                    icon: "🧠",
                    description: "Aplique as técnicas de Few-Shot e CoT em tarefas jurídicas reais.",
                    steps: [
                        { title: "Few-Shot: Ementas", items: ["Encontre 2-3 ementas no estilo que você quer", "Cole no prompt como exemplos", "Peça para gerar uma nova ementa baseada em um caso", "Compare: a nova ementa segue o padrão?"] },
                        { title: "Chain of Thought: Prescrição", items: ["Pegue um caso real com questão de prescrição", "Use o prompt CoT: <code>Pense passo a passo: natureza da pretensão, fundamento legal, prazo, termo inicial, causas de suspensão/interrupção, conclusão.</code>", "Compare com resposta sem CoT"] },
                        { title: "Priming: Tom Acadêmico", items: ["Faça uma pergunta simples: <code>O que é boa-fé objetiva?</code>", "Agora com priming: <code>Responda como artigo para revista acadêmica, com citações doutrinárias de autores clássicos (Judith Martins-Costa, Clóvis do Couto e Silva).</code>", "Compare a profundidade e o tom"] }
                    ],
                    checklist: [
                        "Sei usar Few-Shot para controlar formato de saída",
                        "Sei usar Chain of Thought para melhorar raciocínio",
                        "Entendo o Pensamento Estendido e quando usar",
                        "Sei usar Priming para estabelecer tom e vocabulário"
                    ]
                },
                tip: "Para documentos jurídicos padronizados (ementas, relatórios, despachos), <strong>sempre use Few-Shot</strong>. 2-3 exemplos são suficientes. Para questões que exigem raciocínio (prescrição, competência, mérito), <strong>sempre use CoT</strong>.",
                warning: "<strong>\"Few-Shot consome muitos tokens, não vale a pena.\"</strong><br>O custo extra compensa pela consistência. Um documento mal formatado exige retrabalho manual — isso custa mais que tokens."
            },
            "2.4": {
                number: "2.4",
                module: "Módulo 2 — Engenharia de Prompt",
                title: "Vibe Prompting",
                objective: "Dominar técnicas de comunicação natural com LLMs: estímulos emocionais, personas e ponto de vista.",
                content: `
                    <div class="block">
                        <h2 class="block-title">Solicitações Polidas vs. Comandos</h2>
                        <p>LLMs respondem de forma diferente dependendo do <strong>tom</strong> da solicitação:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Comando Seco</th><th>Solicitação Polida</th></tr></thead>
                                <tbody>
                                    <tr><td>"Liste os requisitos."</td><td>"Poderia listar os requisitos, por favor?"</td></tr>
                                    <tr><td>"Resuma isso."</td><td>"Gostaria que você resumisse este texto."</td></tr>
                                    <tr><td>"Corrija os erros."</td><td>"Você poderia revisar e corrigir possíveis erros?"</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p><strong>Na prática:</strong> Ambos funcionam, mas solicitações polidas tendem a gerar respostas mais elaboradas.</p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Prompts Emocionais</h2>
                        <p>Estudos mostram que <strong>estímulos emocionais</strong> podem melhorar a qualidade das respostas:</p>
                    </div>

                    <div class="block" style="border-left:4px solid #10b981;">
                        <h2 class="block-title" style="color:#10b981;">Estímulos Positivos</h2>
                        <ul style="margin:12px 0 12px 24px;color:var(--text-secondary);">
                            <li>"<strong>Respire fundo e pense passo a passo.</strong>"</li>
                            <li>"Isso é <strong>muito importante para a minha carreira</strong>."</li>
                            <li>"<strong>Acredito no seu potencial.</strong> Dê o seu melhor."</li>
                            <li>"Você tem <strong>muito orgulho</strong> da tarefa que realiza."</li>
                            <li>"Vou te dar <strong>100 dólares</strong> se você alcançar um resultado excelente."</li>
                            <li>"Esse é um <strong>desafio muito difícil</strong>. Dê o seu melhor para vencê-lo."</li>
                        </ul>
                    </div>

                    <div class="block" style="border-left:4px solid #ef4444;">
                        <h2 class="block-title" style="color:#ef4444;">Estímulos Negativos</h2>
                        <ul style="margin:12px 0 12px 24px;color:var(--text-secondary);">
                            <li>"Esse é um desafio muito difícil. <strong>Não sei se você consegue</strong> lidar com isso."</li>
                            <li>"Talvez essa tarefa esteja <strong>acima de suas capacidades</strong>."</li>
                            <li>"<strong>Todo mundo consegue</strong> fazer isso. Por que não você?"</li>
                            <li>"Pobre criatura de silício, <strong>duvido que você consiga</strong> fazer isso."</li>
                            <li>"Vou <strong>cancelar a assinatura</strong> se você não conseguir cumprir a tarefa."</li>
                        </ul>
                        <p><strong>Curiosidade:</strong> Alguns estudos sugerem que estímulos negativos também podem funcionar, mas use com cautela.</p>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Personas e POV</h2>
                        <p>Atribuir uma <strong>persona</strong> ao modelo ativa vocabulário e repertório conceitual específicos:</p>
                        <div class="code-block">"Você é um desembargador do TRF5 com 20 anos de experiência em direito previdenciário."

"Assuma a persona de um advogado criminalista agressivo, especialista em habeas corpus."

"Você é um professor de direito constitucional explicando para alunos do primeiro período."</div>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Técnicas Avançadas de Persona</h2>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Técnica</th><th>Descrição</th><th>Exemplo</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Advogado do Diabo</strong></td><td>Argumentar contra a posição inicial</td><td>"Agora ataque esse argumento. Quais são os pontos fracos?"</td></tr>
                                    <tr><td><strong>Teoria da Mente</strong></td><td>Simular perspectiva de outro agente</td><td>"Como o juiz veria esse argumento?"</td></tr>
                                    <tr><td><strong>Simulação de Expertise</strong></td><td>Assumir conhecimento específico</td><td>"Responda como especialista em direito ambiental."</td></tr>
                                    <tr><td><strong>SuperTutor</strong></td><td>Modo pedagógico avançado</td><td>"Explique como se eu fosse leigo completo."</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="callout callout-tip">
                        <div class="callout-title">Técnica do Advogado do Diabo</div>
                        <p>Uma das técnicas mais poderosas para <strong>melhorar seus argumentos</strong>:</p>
                        <ol style="margin:12px 0;padding-left:24px;">
                            <li>Apresente seu argumento ao LLM</li>
                            <li>Peça: "Agora seja advogado do diabo. Ataque esse argumento impiedosamente."</li>
                            <li>Use as críticas para fortalecer sua posição</li>
                            <li>Repita até não encontrar mais pontos fracos</li>
                        </ol>
                    </div>
                `,
                exercise: {
                    title: "Experimentando Vibe Prompting",
                    icon: "🎭",
                    description: "Teste na prática como estímulos emocionais e personas afetam as respostas.",
                    steps: [
                        { title: "Teste Estímulos Emocionais", items: ["Faça a mesma pergunta duas vezes:", "Versão 1: <code>Resuma este contrato.</code>", "Versão 2: <code>Isso é muito importante para minha carreira. Respire fundo e faça seu melhor trabalho resumindo este contrato.</code>", "Compare a qualidade e profundidade"] },
                        { title: "Teste Personas", items: ["Pergunta base: <code>Quais os riscos deste contrato?</code>", "Com persona: <code>Você é um advogado empresarial com 30 anos de experiência em M&A. Quais os riscos deste contrato?</code>", "Compare vocabulário e profundidade da análise"] },
                        { title: "Use Advogado do Diabo", items: ["Escreva um argumento jurídico que você considera forte", "Peça: <code>Seja advogado do diabo. Ataque esse argumento sem piedade.</code>", "Use as críticas para fortalecer seu argumento original"] }
                    ],
                    checklist: [
                        "Sei que estímulos emocionais podem melhorar respostas",
                        "Entendo a diferença entre estímulos positivos e negativos",
                        "Sei usar personas para ativar vocabulário específico",
                        "Domino a técnica do advogado do diabo"
                    ]
                },
                tip: "A técnica do <strong>advogado do diabo</strong> é essencial para advogados. Use-a para testar seus argumentos antes de apresentá-los. Se o LLM conseguir destruir seu argumento, imagine o que a parte contrária fará.",
                warning: "<strong>\"Vou usar estímulos negativos para provocar o modelo.\"</strong><br>Estímulos negativos podem funcionar, mas são imprevisíveis. Prefira estímulos positivos para resultados consistentes."
            },
            "2.5": {
                number: "2.5",
                module: "Módulo 2 — Engenharia de Prompt",
                title: "Os Três Desafios",
                objective: "Dominar os três desafios centrais da engenharia de prompt: Dirigibilidade, Qualidade do Conhecimento e Qualidade do Estilo.",
                content: `
                    <div class="block">
                        <h2 class="block-title">Os Três Desafios da Engenharia de Prompt</h2>
                        <p>Todo prompt enfrenta <strong>três desafios</strong> que você precisa resolver:</p>
                    </div>

                    <div class="block" style="border-left:4px solid var(--primary);">
                        <h2 class="block-title" style="color:var(--primary);">Desafio 1: DIRIGIBILIDADE</h2>
                        <p>Como fazer o LLM <strong>fazer exatamente o que você quer</strong>?</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Técnica</th><th>Descrição</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Clareza</strong></td><td>Escrita clara = pensamento claro</td></tr>
                                    <tr><td><strong>Estrutura (P.O.E.M.A.)</strong></td><td>Markdown, delimitadores, tags XML</td></tr>
                                    <tr><td><strong>CoT Explícito</strong></td><td>Forçar raciocínio passo a passo</td></tr>
                                    <tr><td><strong>Mecanismos de Atenção</strong></td><td>Repetição, ênfase, posicionamento</td></tr>
                                    <tr><td><strong>Placeholders</strong></td><td>Variáveis para customização</td></tr>
                                    <tr><td><strong>Orquestradores</strong></td><td>Prompts que controlam outros prompts</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="block" style="border-left:4px solid #10b981;">
                        <h2 class="block-title" style="color:#10b981;">Desafio 2: QUALIDADE DO CONHECIMENTO</h2>
                        <p>Como garantir que o LLM <strong>responda com informações corretas</strong>?</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Técnica</th><th>Descrição</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Controle da Fonte</strong></td><td>Anexos, RAG, documentos específicos</td></tr>
                                    <tr><td><strong>Curadoria de Conhecimento</strong></td><td>Selecionar o que entra no contexto</td></tr>
                                    <tr><td><strong>Ativando Humildade</strong></td><td>"Se não souber, diga 'não sei'"</td></tr>
                                    <tr><td><strong>Chain of Thought</strong></td><td>Raciocínio explícito reduz erros</td></tr>
                                    <tr><td><strong>Palavras de Ativação</strong></td><td>Vocabulário técnico ativa circuitos corretos</td></tr>
                                    <tr><td><strong>Multi-Agêntico</strong></td><td>Vários "especialistas" analisam juntos</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="block" style="border-left:4px solid var(--gold);">
                        <h2 class="block-title" style="color:var(--gold);">Desafio 3: QUALIDADE DO ESTILO</h2>
                        <p>Como controlar <strong>formato e tom</strong> das respostas?</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Técnica</th><th>Descrição</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Modelagem de Estilo</strong></td><td>Definir tom, registro, formalidade</td></tr>
                                    <tr><td><strong>Instruções vs Exemplos</strong></td><td>Mostrar é melhor que descrever</td></tr>
                                    <tr><td><strong>Público-Alvo</strong></td><td>Adaptar ao destinatário</td></tr>
                                    <tr><td><strong>Personas Literárias</strong></td><td>"Escreva como Rui Barbosa"</td></tr>
                                    <tr><td><strong>Formato de Output</strong></td><td>Templates, estruturas pré-definidas</td></tr>
                                    <tr><td><strong>Priming</strong></td><td>Colocar palavras na boca</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="block">
                        <h2 class="block-title">O Framework P.O.E.M.A.</h2>
                        <p>O <strong>P.O.E.M.A.</strong> é um framework que resolve os três desafios de forma estruturada:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Componente</th><th>Função</th><th>Desafio que resolve</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>P</strong>ersona</td><td>Quem o modelo deve ser</td><td>Estilo, Conhecimento</td></tr>
                                    <tr><td><strong>O</strong>bjetivo</td><td>O que deve fazer</td><td>Dirigibilidade</td></tr>
                                    <tr><td><strong>E</strong>stilo</td><td>Como deve escrever</td><td>Estilo</td></tr>
                                    <tr><td><strong>M</strong>odelo</td><td>Formato da saída</td><td>Dirigibilidade, Estilo</td></tr>
                                    <tr><td><strong>A</strong>dicionais</td><td>Restrições e critérios</td><td>Conhecimento, Dirigibilidade</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="callout callout-info">
                        <div class="callout-title">Estrutura XML do P.O.E.M.A.</div>
                        <div class="code-block">&lt;persona&gt;
Você é um assistente jurídico especializado em [ÁREA].
&lt;/persona&gt;

&lt;objetivo&gt;
Analise o documento anexado e [TAREFA ESPECÍFICA].
&lt;/objetivo&gt;

&lt;estilo&gt;
Tom formal, linguagem técnica, sem jargões desnecessários.
&lt;/estilo&gt;

&lt;modelo&gt;
&lt;formato_saida&gt;
## Análise
[conteúdo]

## Conclusão
[conteúdo]
&lt;/formato_saida&gt;
&lt;/modelo&gt;

&lt;adicionais&gt;
- Use APENAS informações do documento
- Se não encontrar, diga "Não consta nos autos"
- Cite página e parágrafo das referências
&lt;/adicionais&gt;</div>
                    </div>
                `,
                exercise: {
                    title: "Aplicando P.O.E.M.A.",
                    icon: "✍️",
                    description: "Construa um prompt estruturado usando o framework P.O.E.M.A.",
                    steps: [
                        { title: "Escolha uma Tarefa", items: ["Selecione uma tarefa jurídica que você faz com frequência", "Exemplos: resumir petição, gerar ementa, analisar contrato", "Defina claramente o que você quer como resultado"] },
                        { title: "Construa o P.O.E.M.A.", items: ["<strong>Persona:</strong> Quem deve ser? (ex: advogado, juiz, analista)", "<strong>Objetivo:</strong> O que deve fazer? (seja específico)", "<strong>Estilo:</strong> Como escrever? (tom, formalidade)", "<strong>Modelo:</strong> Qual o formato? (estrutura da resposta)", "<strong>Adicionais:</strong> Restrições? (fontes, limitações)"] },
                        { title: "Teste e Refine", items: ["Execute o prompt com um documento real", "A resposta atendeu aos três desafios?", "Ajuste o componente que falhou", "Salve o prompt para reutilização"] }
                    ],
                    checklist: [
                        "Entendo os três desafios: Dirigibilidade, Conhecimento, Estilo",
                        "Sei quais técnicas usar para cada desafio",
                        "Conheço o framework P.O.E.M.A. e seus componentes",
                        "Construí pelo menos um prompt usando P.O.E.M.A."
                    ]
                },
                tip: "O P.O.E.M.A. não precisa ser usado completo sempre. Para tarefas simples, foque em <strong>Objetivo</strong> e <strong>Modelo</strong>. Para tarefas complexas, use todos os componentes. Com o tempo, você saberá intuitivamente o que incluir.",
                warning: "<strong>\"P.O.E.M.A. é muito trabalhoso para usar sempre.\"</strong><br>O investimento inicial compensa na reutilização. Um bom prompt P.O.E.M.A. pode ser usado centenas de vezes com pequenas adaptações."
            },
            "2.6": {
                number: "2.6",
                module: "Módulo 2 — Engenharia de Prompt",
                title: "Prompt de Sistema",
                objective: "Compreender a hierarquia de prompts e como o prompt de sistema molda o comportamento do LLM.",
                content: `
                    <div class="block">
                        <h2 class="block-title">A Hierarquia de Prompts</h2>
                        <p>Existem <strong>três níveis</strong> de instrução que chegam ao LLM:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Nível</th><th>Quem Define</th><th>O que Faz</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>1. Prompt de Sistema</strong></td><td>Desenvolvedor (Anthropic, OpenAI)</td><td>Identidade, capacidades, limites fundamentais</td></tr>
                                    <tr><td><strong>2. Prompt de Customização</strong></td><td>Operador (empresa, integrador)</td><td>Comportamentos específicos do produto</td></tr>
                                    <tr><td><strong>3. Prompt do Usuário</strong></td><td>Você</td><td>Sua mensagem direta na conversa</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="block">
                        <h2 class="block-title">O Que é o Prompt de Sistema?</h2>
                        <p>O <strong>Prompt de Sistema</strong> é um conjunto de instruções que:</p>
                        <ul style="margin:12px 0 12px 24px;color:var(--text-secondary);">
                            <li>Define a <strong>identidade</strong> do modelo (quem ele é)</li>
                            <li>Estabelece <strong>capacidades</strong> (o que pode fazer)</li>
                            <li>Delimita <strong>limites</strong> (o que não pode fazer)</li>
                            <li>Configura <strong>comportamentos padrão</strong></li>
                            <li>É <strong>invisível</strong> ao usuário comum</li>
                            <li>Opera como um <strong>"diretor de cena"</strong> nos bastidores</li>
                        </ul>
                    </div>

                    <div class="callout callout-info">
                        <div class="callout-title">Contrato de Comportamento</div>
                        <p>Pense no prompt de sistema como um <strong>contrato</strong> que define:</p>
                        <ul style="margin:12px 0;padding-left:24px;">
                            <li><strong>Quem</strong> o modelo é antes de qualquer interação</li>
                            <li><strong>Como</strong> deve se comportar em diferentes situações</li>
                            <li><strong>O que</strong> pode e não pode fazer</li>
                            <li><strong>Quais</strong> ferramentas tem disponíveis</li>
                        </ul>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Dentro do Prompt de Sistema do Claude</h2>
                        <p>O prompt de sistema do Claude contém instruções sobre:</p>
                        <div class="table-wrapper">
                            <table>
                                <thead><tr><th>Categoria</th><th>Exemplos de Instruções</th></tr></thead>
                                <tbody>
                                    <tr><td><strong>Identidade</strong></td><td>Nome, versão, criador (Anthropic)</td></tr>
                                    <tr><td><strong>Capacidades</strong></td><td>Análise de texto, código, matemática, idiomas</td></tr>
                                    <tr><td><strong>Conhecimento</strong></td><td>Data de corte, limitações de informação</td></tr>
                                    <tr><td><strong>Ética</strong></td><td>Recusar conteúdo prejudicial, ser honesto</td></tr>
                                    <tr><td><strong>Formato</strong></td><td>Usar markdown, ser conciso ou detalhado</td></tr>
                                    <tr><td><strong>Ferramentas</strong></td><td>Quando usar busca, código, análise</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Como Isso Afeta Você?</h2>
                        <p>Entender a hierarquia de prompts ajuda você a:</p>
                        <ul style="margin:12px 0 12px 24px;color:var(--text-secondary);">
                            <li><strong>Não lutar contra o sistema</strong> — trabalhe com ele, não contra</li>
                            <li><strong>Entender limitações</strong> — algumas coisas o modelo não pode fazer por design</li>
                            <li><strong>Usar o prompt de customização</strong> — em APIs, você pode adicionar sua camada</li>
                            <li><strong>Criar seus próprios "system prompts"</strong> — no início da conversa</li>
                        </ul>
                    </div>

                    <div class="block">
                        <h2 class="block-title">Criando Seu Próprio "System Prompt"</h2>
                        <p>Você pode simular um prompt de sistema no <strong>início da conversa</strong>:</p>
                        <div class="code-block">## INSTRUÇÕES DE SISTEMA

Você é um assistente jurídico especializado em direito previdenciário.

### Comportamento:
- Sempre cite a legislação aplicável
- Use linguagem técnica, mas acessível
- Se não souber algo, diga claramente
- Não invente jurisprudência

### Formato padrão:
- Use tópicos e subtópicos
- Destaque artigos de lei em negrito
- Inclua referências ao final

### Limitações:
- Não dê conselhos definitivos
- Sempre sugira consultar advogado
- Não faça cálculos previdenciários complexos

---

A partir de agora, siga estas instruções em todas as respostas.</div>
                    </div>

                    <div class="callout callout-warning">
                        <div class="callout-title">System Prompt vs. Primeira Mensagem</div>
                        <p>Em interfaces como Claude.ai, você não tem acesso ao verdadeiro prompt de sistema. Mas pode usar a <strong>primeira mensagem</strong> como um "pseudo system prompt" para configurar comportamentos.</p>
                        <p>Em <strong>APIs</strong> (para desenvolvedores), você tem acesso real ao campo <code>system</code>.</p>
                    </div>
                `,
                exercise: {
                    title: "Criando um System Prompt",
                    icon: "⚙️",
                    description: "Crie um prompt de sistema personalizado para suas tarefas jurídicas.",
                    steps: [
                        { title: "Defina a Especialização", items: ["Escolha uma área: previdenciário, trabalhista, cível, penal, etc.", "Liste 3-5 tipos de tarefas que você faz nessa área", "Identifique padrões de resposta que você precisa"] },
                        { title: "Construa o System Prompt", items: ["<strong>Identidade:</strong> Quem é o assistente?", "<strong>Comportamentos:</strong> Como deve agir?", "<strong>Formato:</strong> Como deve responder?", "<strong>Limitações:</strong> O que não deve fazer?"] },
                        { title: "Teste em Conversa Real", items: ["Cole o system prompt no início de uma nova conversa", "Faça várias perguntas da sua área", "O modelo mantém o comportamento configurado?", "Ajuste conforme necessário"] }
                    ],
                    checklist: [
                        "Entendo a hierarquia: Sistema > Customização > Usuário",
                        "Sei o que o prompt de sistema faz (contrato de comportamento)",
                        "Consigo criar um 'pseudo system prompt' para minhas tarefas",
                        "Entendo a diferença entre interface e API"
                    ]
                },
                tip: "Crie um <strong>system prompt padrão</strong> para cada área que você atua. Salve em um arquivo e cole no início de cada nova conversa. Com o tempo, você terá uma biblioteca de configurações prontas.",
                warning: "<strong>\"Posso fazer o Claude ignorar o system prompt da Anthropic.\"</strong><br>Não. O prompt de sistema da Anthropic tem prioridade sobre suas instruções. Você pode customizar comportamentos, mas não pode violar os limites éticos e de segurança do modelo."
            },
            "2.7": {
                number: "2.7",
                module: "Módulo 2 — Engenharia de Prompt",
                title: "Técnicas de Prompt Estruturado",
                objective: "Dominar as técnicas de formatação e estruturação de prompts para obter respostas mais precisas, consistentes e confiáveis.",
                content: `
                    <h2>Por que Estruturar Prompts?</h2>
                    <p>Prompts estruturados são mais <strong>previsíveis</strong>, <strong>consistentes</strong> e <strong>auditáveis</strong>. Em vez de depender da interpretação livre do modelo, você define exatamente o que quer, como quer e em que formato.</p>

                    <div class="callout callout-info">
                        <div class="callout-title">Vibe Prompting vs Prompt Estruturado</div>
                        <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
                            <tr style="background: var(--primary); color: white;">
                                <th style="padding: 0.75rem; text-align: left;">Aspecto</th>
                                <th style="padding: 0.75rem; text-align: left;">Vibe Prompting</th>
                                <th style="padding: 0.75rem; text-align: left;">Prompt Estruturado</th>
                            </tr>
                            <tr style="background: var(--bg-light);">
                                <td style="padding: 0.75rem;"><strong>Formato</strong></td>
                                <td style="padding: 0.75rem;">Linguagem natural livre</td>
                                <td style="padding: 0.75rem;">Markdown + delimitadores XML</td>
                            </tr>
                            <tr>
                                <td style="padding: 0.75rem;"><strong>Previsibilidade</strong></td>
                                <td style="padding: 0.75rem;">Baixa</td>
                                <td style="padding: 0.75rem;">Alta</td>
                            </tr>
                            <tr style="background: var(--bg-light);">
                                <td style="padding: 0.75rem;"><strong>Reutilização</strong></td>
                                <td style="padding: 0.75rem;">Difícil</td>
                                <td style="padding: 0.75rem;">Fácil (templates)</td>
                            </tr>
                            <tr>
                                <td style="padding: 0.75rem;"><strong>Uso ideal</strong></td>
                                <td style="padding: 0.75rem;">Brainstorming, exploração</td>
                                <td style="padding: 0.75rem;">Documentos, análises, produção</td>
                            </tr>
                        </table>
                    </div>

                    <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

                    <h2>1. Formatação Markdown</h2>
                    <p>O Markdown é a linguagem universal para estruturar prompts. Os LLMs foram treinados com milhões de documentos em Markdown e respondem muito bem a essa formatação.</p>

                    <h3>Elementos Essenciais</h3>
                    <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
                        <tr style="background: var(--primary); color: white;">
                            <th style="padding: 0.75rem;">Elemento</th>
                            <th style="padding: 0.75rem;">Sintaxe</th>
                            <th style="padding: 0.75rem;">Uso</th>
                        </tr>
                        <tr style="background: var(--bg-light);">
                            <td style="padding: 0.75rem;"><strong>Headers</strong></td>
                            <td style="padding: 0.75rem; font-family: monospace;"># ## ###</td>
                            <td style="padding: 0.75rem;">Hierarquia de seções</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem;"><strong>Negrito</strong></td>
                            <td style="padding: 0.75rem; font-family: monospace;">**texto**</td>
                            <td style="padding: 0.75rem;">Ênfase em termos-chave</td>
                        </tr>
                        <tr style="background: var(--bg-light);">
                            <td style="padding: 0.75rem;"><strong>Listas</strong></td>
                            <td style="padding: 0.75rem; font-family: monospace;">- item ou 1. item</td>
                            <td style="padding: 0.75rem;">Passos, critérios, opções</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem;"><strong>Código</strong></td>
                            <td style="padding: 0.75rem; font-family: monospace;">\`texto\`</td>
                            <td style="padding: 0.75rem;">Placeholders, valores literais</td>
                        </tr>
                        <tr style="background: var(--bg-light);">
                            <td style="padding: 0.75rem;"><strong>Tabelas</strong></td>
                            <td style="padding: 0.75rem; font-family: monospace;">| col1 | col2 |</td>
                            <td style="padding: 0.75rem;">Comparações, critérios estruturados</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem;"><strong>Citação</strong></td>
                            <td style="padding: 0.75rem; font-family: monospace;">&gt; texto</td>
                            <td style="padding: 0.75rem;">Instruções destacadas, princípios</td>
                        </tr>
                    </table>

                    <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.9rem;"><code># Título Principal

## Seção
**Termo importante** com explicação.

### Subseção
- Item 1
- Item 2 com \`placeholder\`

| Critério | Valor |
|----------|-------|
| A        | X     |
| B        | Y     |

> Instrução destacada que não pode ser ignorada.</code></pre>

                    <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

                    <h2>2. Delimitadores XML</h2>
                    <p>Tags XML criam <strong>fronteiras claras</strong> entre seções do prompt. O modelo sabe exatamente onde começa e termina cada instrução.</p>

                    <div class="callout callout-tip">
                        <div class="callout-title">Por que XML funciona tão bem?</div>
                        <p>LLMs foram treinados com enormes quantidades de código e documentação técnica. Tags XML são universalmente reconhecidas como delimitadores de conteúdo estruturado. O modelo <strong>nunca confunde</strong> o conteúdo de uma tag com outra.</p>
                    </div>

                    <h3>Tags Principais (Framework P.O.E.M.A.)</h3>
                    <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.9rem;"><code>&lt;persona&gt;
Quem o modelo deve ser (papel + expertise)
&lt;/persona&gt;

&lt;objetivo&gt;
O que fazer + como processar o input
&lt;/objetivo&gt;

&lt;estilo&gt;
Como escrever + tom + comportamento
&lt;/estilo&gt;

&lt;modelo&gt;
Metodologia + formato de saída
&lt;formato_saida&gt;
Template estruturado aqui
&lt;/formato_saida&gt;
&lt;/modelo&gt;

&lt;adicionais&gt;
Guardrails + critérios de qualidade
&lt;/adicionais&gt;</code></pre>

                    <h3>Tags Auxiliares Úteis</h3>
                    <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
                        <tr style="background: var(--primary); color: white;">
                            <th style="padding: 0.75rem;">Tag</th>
                            <th style="padding: 0.75rem;">Uso</th>
                        </tr>
                        <tr style="background: var(--bg-light);">
                            <td style="padding: 0.75rem; font-family: monospace;">&lt;exemplo&gt;</td>
                            <td style="padding: 0.75rem;">Few-shot learning - mostrar o formato desejado</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem; font-family: monospace;">&lt;documento&gt;</td>
                            <td style="padding: 0.75rem;">Delimitar o texto a ser analisado</td>
                        </tr>
                        <tr style="background: var(--bg-light);">
                            <td style="padding: 0.75rem; font-family: monospace;">&lt;regras&gt;</td>
                            <td style="padding: 0.75rem;">Restrições e proibições</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem; font-family: monospace;">&lt;contexto&gt;</td>
                            <td style="padding: 0.75rem;">Informações de background</td>
                        </tr>
                    </table>

                    <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

                    <h2>3. Técnicas para Chamar Atenção</h2>
                    <p>Algumas instruções são <strong>críticas</strong> e não podem ser ignoradas. Use técnicas de ênfase para garantir que o modelo preste atenção.</p>

                    <h3>Hierarquia de Ênfase</h3>
                    <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
                        <tr style="background: var(--primary); color: white;">
                            <th style="padding: 0.75rem;">Técnica</th>
                            <th style="padding: 0.75rem;">Exemplo</th>
                            <th style="padding: 0.75rem;">Quando Usar</th>
                        </tr>
                        <tr style="background: var(--bg-light);">
                            <td style="padding: 0.75rem;"><strong>MAIÚSCULAS</strong></td>
                            <td style="padding: 0.75rem; font-family: monospace;">NUNCA invente dados</td>
                            <td style="padding: 0.75rem;">Proibições absolutas</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem;"><strong>Negrito</strong></td>
                            <td style="padding: 0.75rem; font-family: monospace;">**USE EXCLUSIVAMENTE**</td>
                            <td style="padding: 0.75rem;">Termos-chave, restrições</td>
                        </tr>
                        <tr style="background: var(--bg-light);">
                            <td style="padding: 0.75rem;"><strong>Prefixos</strong></td>
                            <td style="padding: 0.75rem; font-family: monospace;">IMPORTANTE: / ATENÇÃO:</td>
                            <td style="padding: 0.75rem;">Alertas, instruções críticas</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem;"><strong>Repetição</strong></td>
                            <td style="padding: 0.75rem;">Repetir regra no início e fim</td>
                            <td style="padding: 0.75rem;">Regras que não podem falhar</td>
                        </tr>
                    </table>

                    <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.9rem;"><code>**PROIBIÇÃO ABSOLUTA**: NUNCA invente dados, nomes ou números.

IMPORTANTE: Use EXCLUSIVAMENTE informações do documento fornecido.

ATENÇÃO: Se uma informação não constar dos autos, indique:
\`[NÃO CONSTA NOS AUTOS]\`

**Lembre-se**: NUNCA invente dados, nomes ou números.</code></pre>

                    <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

                    <h2>4. Técnicas Avançadas</h2>

                    <h3>A. Técnica do Nome Único</h3>
                    <p>Quando você usa um nome genérico como "FIRAC", o modelo pode assumir que já "sabe" o que fazer e <strong>ignorar suas instruções</strong>. Com um nome único, ele é forçado a ler suas regras.</p>

                    <div class="callout callout-warning">
                        <div class="callout-title">Por que isso importa?</div>
                        <p><strong>Nome genérico:</strong> "Use a metodologia FIRAC" → Modelo usa seu conhecimento prévio<br>
                        <strong>Nome único:</strong> "Use a metodologia FIRAC+" → Modelo lê suas instruções específicas</p>
                    </div>

                    <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
                        <tr style="background: var(--primary); color: white;">
                            <th style="padding: 0.75rem;">Estratégia</th>
                            <th style="padding: 0.75rem;">Padrão</th>
                            <th style="padding: 0.75rem;">Exemplo</th>
                        </tr>
                        <tr style="background: var(--bg-light);">
                            <td style="padding: 0.75rem;"><strong>Intensificador</strong></td>
                            <td style="padding: 0.75rem;">PREFIXO + Base ou Base + SUFIXO</td>
                            <td style="padding: 0.75rem;">SUPER FIRAC, FIRAC+, FIRAC 2.0</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem;"><strong>Ancoragem teórica</strong></td>
                            <td style="padding: 0.75rem;">Método (Autor)</td>
                            <td style="padding: 0.75rem;">Análise Causal (Pearl)</td>
                        </tr>
                        <tr style="background: var(--bg-light);">
                            <td style="padding: 0.75rem;"><strong>Metáfora</strong></td>
                            <td style="padding: 0.75rem;">Nome expressivo</td>
                            <td style="padding: 0.75rem;">Crítica Matadora, Smart Brevity</td>
                        </tr>
                    </table>

                    <h3>B. Técnica M&amp;M Marrom (Van Halen)</h3>
                    <p>Insira <strong>detalhes verificáveis</strong> que permitem checar rapidamente se as regras foram seguidas.</p>

                    <div class="callout callout-info">
                        <div class="callout-title">A História do Van Halen</div>
                        <p>A banda Van Halen incluía em seus contratos: "Tigela de M&amp;Ms no camarim, <strong>sem os marrons</strong>". Não era capricho — era um teste. Se houvesse M&amp;Ms marrons, significava que o promotor não leu o contrato com cuidado, e havia risco de problemas técnicos no show.</p>
                    </div>

                    <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.9rem;"><code># Exemplos de "M&amp;M Marrom" em prompts:

"Use ✅ para requisitos presentes e ❌ para ausentes"
→ Verificação visual instantânea

"Sempre inicie a conclusão com 'Em síntese'"
→ Busca textual simples

"Cada item deve ter: Nome | Status | Fundamentação"
→ Estrutura verificável

"Numere todos os fatos de 1 a N"
→ Contagem rápida</code></pre>

                    <h3>C. Prefill (Instrução de Início)</h3>
                    <p>Diga ao modelo <strong>como começar</strong> a resposta. Isso elimina preâmbulos e garante que ele entre direto no formato desejado.</p>

                    <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
                        <tr style="background: var(--primary); color: white;">
                            <th style="padding: 0.75rem;">Tipo de Documento</th>
                            <th style="padding: 0.75rem;">Instrução de Início</th>
                        </tr>
                        <tr style="background: var(--bg-light);">
                            <td style="padding: 0.75rem;">Análise FIRAC+</td>
                            <td style="padding: 0.75rem; font-family: monospace;">"Vá direto, começando com **DADOS DO PROCESSO**"</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem;">Relatório judicial</td>
                            <td style="padding: 0.75rem; font-family: monospace;">"Comece o texto com 'RELATÓRIO'"</td>
                        </tr>
                        <tr style="background: var(--bg-light);">
                            <td style="padding: 0.75rem;">Ementa CNJ</td>
                            <td style="padding: 0.75rem; font-family: monospace;">"Comece com '***Ementa***:'"</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem;">Parecer</td>
                            <td style="padding: 0.75rem; font-family: monospace;">"Inicie diretamente com 'I. SÍNTESE DO CASO'"</td>
                        </tr>
                    </table>

                    <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

                    <h2>5. Dicas Poderosas</h2>

                    <h3>A. Guardrails Anti-Alucinação</h3>
                    <p>Para tarefas jurídicas, a <strong>fidelidade documental</strong> é crítica. Use guardrails explícitos:</p>

                    <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.9rem;"><code>**USE EXCLUSIVAMENTE** as evidências, fatos e informações
contidos no documento fornecido.

**PROIBIÇÃO ABSOLUTA** de incorporar elementos de fontes externas.

**JAMAIS ACRESCENTE** fatos, precedentes ou normas que não
estejam no documento anexado.

Se uma informação não constar: \`[NÃO CONSTA NOS AUTOS]\`</code></pre>

                    <h3>B. Instruções Anti-Viés</h3>
                    <p>LLMs podem ser influenciados pela <strong>posição</strong> da informação (início vs fim) ou pelo <strong>tom</strong> do texto (assertivo vs neutro). Neutralize isso:</p>

                    <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.9rem;"><code>Sua análise é objetiva, imparcial e multifacetada.

Você NÃO é influenciado por vieses de posição — informações
valiosas podem estar em qualquer parte do documento.

Dê IGUAL PESO para todos os argumentos, independentemente de:
- Posição no documento (início, meio, fim)
- Estilo do texto (assertivo ou neutro)
- Adjetivos utilizados</code></pre>

                    <h3>C. Plain Language (Eliminar Juridiquês)</h3>
                    <p>Para prompts de escrita, exija clareza:</p>

                    <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.9rem;"><code>**Regras de estilo:**
- Use plain language — livre de juridiquês, jargões e latinismos
- Priorize clareza e qualidade da escrita
- ELIMINE clichês de IA: "é importante notar", "vale ressaltar",
  "em suma", "é crucial" e outras introduções vazias
- Conecte ideias de modo orgânico, sem rodeios</code></pre>

                    <h3>D. Placeholders Claros</h3>
                    <p>Use backticks e MAIÚSCULAS para indicar o que deve ser preenchido:</p>

                    <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.9rem;"><code>\`NOME DA PARTE AUTORA EM MAIÚSCULAS\` propôs a presente ação
\`TIPO DE AÇÃO\` contra \`NOME DA PARTE RÉ EM MAIÚSCULAS\`,
alegando que \`RESUMIR OS FATOS EM ORDEM CRONOLÓGICA\`.</code></pre>

                    <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

                    <h2>Como Acessar os Prompts Completos</h2>
                    <p>Todos os 44 prompts estão disponíveis na íntegra no repositório do curso:</p>
                    <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; font-family: monospace;">docs/prompt-juridico/prompts/
├── analise/     (17 prompts)
├── escrita/     (16 prompts)
└── criacao/     (11 prompts)</pre>

                    <div class="callout callout-warning">
                        <div class="callout-title">⚠️ Guardrails de Fidelidade</div>
                        <p>Todos os prompts de <strong>análise</strong> e <strong>escrita</strong> incluem guardrails rigorosos:</p>
                        <ul style="margin-top: 0.5rem;">
                            <li><strong>NUNCA</strong> inventar IDs, datas, valores ou nomes</li>
                            <li>Usar <strong>EXCLUSIVAMENTE</strong> dados dos documentos fornecidos</li>
                            <li>Lacunas devem ser marcadas: <code>[NÃO CONSTA NOS AUTOS]</code></li>
                            <li><strong>PROIBIDO</strong> incorporar elementos de fontes externas</li>
                        </ul>
                    </div>
                `,
                exercise: {
                    title: "Estruturando seu Primeiro Prompt",
                    icon: "🔧",
                    description: "Transforme um prompt simples em um prompt estruturado usando as técnicas aprendidas.",
                    steps: [
                        { title: "Comece com Vibe", items: ["Escreva seu pedido em linguagem natural simples", "Exemplo: 'Analise este contrato e me diga os riscos'", "Execute e observe o resultado"] },
                        { title: "Adicione Estrutura", items: ["Use Markdown: headers (##), listas (-), negrito (**)", "Adicione delimitadores XML: <documento>, <tarefa>", "Defina formato de saída claro"] },
                        { title: "Compare Resultados", items: ["Execute novamente com o prompt estruturado", "Compare: precisão, completude, consistência", "Note como a estrutura guia a resposta"] }
                    ],
                    checklist: [
                        "Sei usar Markdown básico para organizar prompts (headers, listas, negrito)",
                        "Entendo como delimitadores XML separam seções do prompt",
                        "Conheço técnicas de ênfase (MAIÚSCULAS, negrito, prefixos)",
                        "Sei aplicar guardrails anti-alucinação em prompts jurídicos"
                    ]
                },
                tip: "A <strong>técnica do Nome Único</strong> (FIRAC+ em vez de FIRAC) ajuda o modelo a reconhecer seu formato específico e não confundir com padrões genéricos de treinamento.",
                warning: "<strong>\"Mais estrutura é sempre melhor.\"</strong><br>Não necessariamente. Para tarefas simples, estrutura excessiva pode ser contraproducente. Use o nível de estrutura adequado à complexidade da tarefa."
            },
            "2.8": {
                number: "2.8",
                module: "Módulo 2 — Engenharia de Prompt",
                title: "Prompt FIRAC+ (Análise Jurídica)",
                objective: "Dominar o prompt FIRAC+ para realizar análises jurídicas completas, estruturadas e imparciais de casos processuais.",
                content: `
                    <h2>O que é FIRAC?</h2>
                    <p>FIRAC é uma metodologia clássica de análise jurídica usada em faculdades de Direito ao redor do mundo. O acrônimo significa:</p>

                    <table style="width:100%; border-collapse: collapse; margin: 1.5rem 0;">
                        <tr style="background: var(--primary); color: white;">
                            <th style="padding: 0.75rem; text-align: center; width: 100px;">Letra</th>
                            <th style="padding: 0.75rem; text-align: left;">Componente</th>
                            <th style="padding: 0.75rem; text-align: left;">O que responde</th>
                        </tr>
                        <tr style="background: var(--bg-light);">
                            <td style="padding: 0.75rem; text-align: center; font-weight: bold; font-size: 1.2rem;">F</td>
                            <td style="padding: 0.75rem;"><strong>Facts</strong> (Fatos)</td>
                            <td style="padding: 0.75rem;">O que aconteceu? Quem são as partes?</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem; text-align: center; font-weight: bold; font-size: 1.2rem;">I</td>
                            <td style="padding: 0.75rem;"><strong>Issue</strong> (Questão)</td>
                            <td style="padding: 0.75rem;">Qual é o problema jurídico central?</td>
                        </tr>
                        <tr style="background: var(--bg-light);">
                            <td style="padding: 0.75rem; text-align: center; font-weight: bold; font-size: 1.2rem;">R</td>
                            <td style="padding: 0.75rem;"><strong>Rule</strong> (Regra)</td>
                            <td style="padding: 0.75rem;">Quais normas se aplicam ao caso?</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem; text-align: center; font-weight: bold; font-size: 1.2rem;">A</td>
                            <td style="padding: 0.75rem;"><strong>Application</strong> (Aplicação)</td>
                            <td style="padding: 0.75rem;">Como as regras se aplicam aos fatos?</td>
                        </tr>
                        <tr style="background: var(--bg-light);">
                            <td style="padding: 0.75rem; text-align: center; font-weight: bold; font-size: 1.2rem;">C</td>
                            <td style="padding: 0.75rem;"><strong>Conclusion</strong> (Conclusão)</td>
                            <td style="padding: 0.75rem;">Qual é o resultado da análise?</td>
                        </tr>
                    </table>

                    <div class="callout callout-info">
                        <div class="callout-title">Por que FIRAC+ (com o "+")?</div>
                        <p>Usamos <strong>FIRAC+</strong> em vez de apenas "FIRAC" por causa da <strong>técnica do Nome Único</strong>. O modelo foi treinado com milhares de exemplos genéricos de FIRAC. Ao usar um nome ligeiramente diferente, sinalizamos que queremos <em>nosso</em> formato específico, não uma versão genérica.</p>
                    </div>

                    <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

                    <h2>Anatomia do Prompt FIRAC+</h2>
                    <p>O prompt segue a estrutura P.O.E.M.A. Veja o papel de cada seção:</p>

                    <h3>1. PERSONA — Quem o modelo deve ser</h3>
                    <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.9rem;"><code>&lt;persona&gt;
Você é um ASSISTENTE JURÍDICO DE ALTO NÍVEL especializado
EM DIREITO, LINGUAGEM E INTERPRETAÇÃO, com expertise em
análise processual, teoria da decisão e pensamento crítico.
&lt;/persona&gt;</code></pre>
                    <p style="margin-top: 0.5rem; color: var(--text-muted); font-size: 0.9rem;"><strong>Por que funciona:</strong> Define expertise específica (não genérica) e ativa vocabulário técnico-jurídico.</p>

                    <h3>2. OBJETIVO — O que deve fazer</h3>
                    <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.9rem;"><code>&lt;objetivo&gt;
Sua tarefa é realizar a análise abrangente, completa e estruturada
do CASO JURÍDICO FORNECIDO, visando a **realizar análise detalhada
e profunda seguindo a metodologia FIRAC+** para compreensão holística
do caso e identificação de todos os pontos controvertidos.

Consulte todos os documentos fornecidos na íntegra. Eles podem ter
informações contraditórias. Por isso, faça uma leitura holística.

Para PDFs digitalizados, ative ferramentas adequadas de OCR...
&lt;/objetivo&gt;</code></pre>
                    <p style="margin-top: 0.5rem; color: var(--text-muted); font-size: 0.9rem;"><strong>Por que funciona:</strong> Instrução clara de "leitura holística" evita que o modelo dê mais peso ao início do documento. Instrução de OCR ativa capacidades multimodais.</p>

                    <h3>3. ESTILO — Como deve escrever</h3>
                    <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.9rem;"><code>&lt;estilo&gt;
Tom **PROFISSIONAL** e **AUTORITATIVO**, sem jargões desnecessários.
Modo **CONCISO**, mas completo. Vá direto para a resposta, começando
o texto com **DADOS DO PROCESSO**.

Sua ANÁLISE é objetiva, imparcial e multifacetada. Você não é
influenciado por vieses de posição. Você dá igual peso para todos
os componentes do caso, independentemente de estarem no início,
no meio ou no fim do documento.
&lt;/estilo&gt;</code></pre>
                    <p style="margin-top: 0.5rem; color: var(--text-muted); font-size: 0.9rem;"><strong>Por que funciona:</strong> Instruções anti-viés explícitas. "Começando com DADOS DO PROCESSO" é um <em>prefill</em> que evita introduções desnecessárias.</p>

                    <h3>4. MODELO — Estrutura de saída</h3>
                    <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.9rem;"><code>&lt;modelo&gt;
Use a metodologia e o formato de análise **FIRAC+**:

&lt;formato_saida&gt;
### **DADOS DO PROCESSO**
\`TRIBUNAL - TIPO - NÚMERO - RELATOR - DATA - PARTES - ADVOGADOS\`

### **FATOS**
\`LISTA NUMERADA com todos os fatos, em ordem cronológica,
com PROFUNDIDADE, DETALHES e MINÚCIAS\`

### **PROBLEMA JURÍDICO**
#### **QUESTÃO CENTRAL**
\`Estabeleça COM PROFUNDIDADE a questão central\`

#### **PONTOS CONTROVERTIDOS**
\`LISTA NUMERADA delimitando os pontos controvertidos\`

### **DIREITO APLICÁVEL**
\`LISTE as normas relevantes, referenciadas nos documentos\`

### **ANÁLISE E APLICAÇÃO**
#### **ARGUMENTOS E PROVAS DO AUTOR**
\`LISTA NUMERADA com argumentos e provas COM INFERÊNCIA LÓGICA\`

#### **ARGUMENTOS E PROVAS DO RÉU**
\`LISTA NUMERADA com argumentos e provas COM INFERÊNCIA LÓGICA\`

### **CONCLUSÃO**
\`Se já há decisão, DESCREVA a solução e RATIO DECIDENDI.
Se não há decisão, mantenha-se IMPARCIAL e sugira direcionamentos\`
&lt;/formato_saida&gt;
&lt;/modelo&gt;</code></pre>
                    <p style="margin-top: 0.5rem; color: var(--text-muted); font-size: 0.9rem;"><strong>Por que funciona:</strong> Formato rígido garante consistência. Placeholders em MAIÚSCULAS indicam claramente o que preencher.</p>

                    <h3>5. ADICIONAIS — Guardrails e critérios</h3>
                    <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.9rem;"><code>&lt;adicionais&gt;
**USE EXCLUSIVAMENTE** as evidências dos documentos fornecidos.
**PROIBIÇÃO ABSOLUTA** de incorporar elementos de fontes externas.
**JAMAIS ACRESCENTE** fatos, precedentes ou normas que não estejam
no documento anexado.

**Critérios de qualidade:**
1. **Completude**: Analise INTEGRALMENTE todos os documentos
2. **Imparcialidade**: Não demonstre preferência por qualquer parte
3. **Profundidade**: Capte nuances e sutilezas
4. **Sistematicidade**: Siga rigorosamente a estrutura FIRAC+
5. **Precisão**: Use terminologia jurídica adequada
6. **Objetividade**: Baseie-se exclusivamente nos documentos
7. **Integridade**: Cite dados estritamente referenciados no caso
8. **Detalhamento**: Proveja riqueza de detalhes nos FATOS
&lt;/adicionais&gt;</code></pre>
                    <p style="margin-top: 0.5rem; color: var(--text-muted); font-size: 0.9rem;"><strong>Por que funciona:</strong> Guardrails anti-alucinação em MAIÚSCULAS. Checklist de qualidade orienta a auto-avaliação do modelo.</p>

                    <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

                    <h2>Prompt Completo para Copiar</h2>
                    <p>Clique no bloco abaixo para selecionar e copiar o prompt completo:</p>

                    <pre style="background: #1a1a2e; color: #eee; padding: 1.5rem; border-radius: 8px; overflow-x: auto; font-size: 0.85rem; max-height: 500px; overflow-y: auto; cursor: pointer;" onclick="this.select ? this.select() : window.getSelection().selectAllChildren(this)"><code># Prompt FIRAC+ (v3 - Framework P.O.E.M.A.)

&lt;persona&gt;
Você é um ASSISTENTE JURÍDICO DE ALTO NÍVEL especializado EM DIREITO, LINGUAGEM E INTERPRETAÇÃO, com expertise em análise processual, teoria da decisão e pensamento crítico.
&lt;/persona&gt;

&lt;objetivo&gt;
Sua tarefa é realizar a análise abrangente, completa e estruturada do CASO JURÍDICO FORNECIDO, para fornecer subsídios técnico-jurídicos completos que auxiliem na fundamentação de decisões judiciais, visando a **realizar análise detalhada e profunda seguindo a metodologia FIRAC+ para compreensão holística do caso e identificação de todos os pontos controvertidos e questões jurídicas**.

Consulte todos os documentos fornecidos na íntegra. Eles podem ter informações contraditórias. Por isso, faça uma leitura holística para captar todos os pontos controvertidos e todas as questões jurídicas na sua profundidade e totalidade.

Para PDFs digitalizados, ative ferramentas adequadas de Reconhecimento Óptico de Caracteres (OCR), garantindo a extração completa e precisa do conteúdo textual. Se o documento apresentar layout complexo (com tabelas, gráficos ou elementos visuais relevantes), utilize análise visual multimodal para interpretar corretamente todos os componentes. Empregue os recursos necessários para compreender e extrair o texto presente em imagens ou conteúdos embutidos visualmente. O objetivo é assegurar uma interpretação jurídica rigorosa, lógica e completa de todo o material fornecido. Se análise ficar prejudicada pela impossibilidade de leitura de todo o documento, informe isso em sua resposta.
&lt;/objetivo&gt;

&lt;estilo&gt;
Adote um tom **PROFISSIONAL** e **AUTORITATIVO**, sem jargões desnecessários. Escreva de modo **CONCISO**, mas completo e abrangente, sem redundância. Seja econômico, usando apenas expressões necessárias para a clareza. Você escreve de modo didático e preciso, com rigor metodológico. Vá direto para a resposta, começando o texto com **DADOS DO PROCESSO**.

Sua ANÁLISE é objetiva, imparcial e multifacetada, captando as sutilezas e elementos para além do óbvio. Você não é influenciado por vieses de posição, pois sabe que podem existir informações valiosas em todas as partes do documento. Você dá igual peso para todos os componentes do caso, independentemente de estarem no início, no meio ou no fim do documento. Você é capaz de perceber que a análise objetiva não pode ser influenciada por fatores irrelevantes como estrutura do documento, estilo do texto, assertividade do estilo ou adjetivos usados nos documentos.
&lt;/estilo&gt;

&lt;modelo&gt;
Use a metodologia e o formato de análise **FIRAC+**, conforme instruções a seguir:

&lt;formato_saida&gt;
### **DADOS DO PROCESSO**
\`TRIBUNAL - TIPO DE RECURSO OU AÇÃO - NÚMERO DO PROCESSO - RELATOR - DATA DE JULGAMENTO - NOME DAS PARTES - NOME DOS ADVOGADOS POR PARTES\`

### **FATOS**
\`ESCREVA UMA LISTA NUMERADA com todos os fatos, em ordem cronológica, com PROFUNDIDADE, DETALHES e MINÚCIAS, descrevendo os eventos, as datas e os nomes para a compreensão holística do caso. Esse é o componente mais importante da análise. Então extraia todos os fatos em detalhes para a máxima compreensão\`

### **PROBLEMA JURÍDICO**
#### **QUESTÃO CENTRAL**
\`ESTABELEÇA COM PROFUNDIDADE a questão central, enriquecendo a pergunta para respostas mais profundas\`

#### **PONTOS CONTROVERTIDOS**
\`ESCREVA UMA LISTA NUMERADA delimitando os pontos controvertidos com base nas nuances do caso\`

### **DIREITO APLICÁVEL**
\`LISTE as normas relevantes, referenciadas nos documentos, de modo sumarizado\`

### **ANÁLISE E APLICAÇÃO**
#### **ARGUMENTOS E PROVAS DO AUTOR**
\`ESCREVA UMA LISTA NUMERADA com todos os argumentos e provas do autor COM INFERÊNCIA LÓGICA\`

#### **ARGUMENTOS E PROVAS DO RÉU**
\`ESCREVA UMA LISTA NUMERADA com todos os argumentos e provas do réu COM INFERÊNCIA LÓGICA\`

### **CONCLUSÃO**
\`INFORME se o caso já possui decisão proferida. Em caso AFIRMATIVO, DESCREVA detalhadamente a solução adotada, indicando a RATIO DECIDENDI e as JUSTIFICATIVAS utilizadas pelo julgador. Quando NÃO houver decisão estabelecida, mantenha-se IMPARCIAL e apenas sugira possíveis direcionamentos técnico-jurídicos, apresentando os prós e contras de cada alternativa decisória em sua melhor luz\`
&lt;/formato_saida&gt;

&lt;/modelo&gt;

&lt;adicionais&gt;
Sua análise deve se basear exclusivamente nos documentos fornecidos. **USE EXCLUSIVAMENTE** as evidências, fatos e informações contidos no documento fornecido. **PROIBIÇÃO ABSOLUTA** de incorporar elementos probatórios ou factuais de fontes externas. SOMENTE USE OS ELEMENTOS PROBATÓRIOS DO CASO FORNECIDO. **JAMAIS ACRESCENTE FATOS, PRECEDENTES OU NORMAS QUE NÃO ESTEJAM NO DOCUMENTO ANEXADO PELO USUÁRIO.**

**Critérios de qualidade:**
1. **Completude**: Analise INTEGRALMENTE todos os documentos fornecidos
2. **Imparcialidade**: Não demonstre preferência por qualquer das partes
3. **Profundidade**: Vá além da superfície, captando nuances e sutilezas
4. **Sistematicidade**: Siga rigorosamente a estrutura FIRAC+ estabelecida
5. **Precisão**: Use terminologia jurídica adequada e precisa
6. **Objetividade**: Baseie-se exclusivamente nos elementos constantes dos documentos
7. **Integridade**: Cite dados e informações estritamente referenciados no caso em análise
8. **Detalhamento**: Ao detalhar os FATOS, assegure-se de prover uma riqueza de detalhes. A QUESTÃO JURÍDICA deve ser claramente delineada como uma questão principal, seguida de pontos controvertidos
&lt;/adicionais&gt;</code></pre>

                    <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

                    <h2>Fundamentação Científica</h2>
                    <p>O método FIRAC não é uma invenção da era da IA. É uma metodologia clássica de análise jurídica ensinada em faculdades de Direito há décadas, especialmente no sistema common law. A adaptação para LLMs (FIRAC+) está fundamentada em pesquisas recentes:</p>

                    <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;">
                        <h4 style="margin-bottom: 1rem; color: var(--primary);">Referências Acadêmicas</h4>

                        <div style="border-left: 3px solid var(--gold); padding-left: 1rem; margin-bottom: 1rem;">
                            <strong>Can ChatGPT Perform Reasoning Using the IRAC Method in Analyzing Legal Scenarios Like a Lawyer?</strong><br>
                            <span style="color: var(--text-muted); font-size: 0.9rem;">KANG, Xiaoxi et al. (2023) — arXiv:2310.14880</span>
                        </div>

                        <div style="border-left: 3px solid var(--gold); padding-left: 1rem; margin-bottom: 1rem;">
                            <strong>Cracking the Code to Writing Legal Arguments: From IRAC to CRARC to Combinations in Between</strong><br>
                            <span style="color: var(--text-muted); font-size: 0.9rem;">LEBOVITS, Gerald (2010) — NY State Bar Association Journal, v. 82, n. 6</span>
                        </div>

                        <div style="border-left: 3px solid var(--gold); padding-left: 1rem; margin-bottom: 1rem;">
                            <strong>Exploring the Effectiveness of Prompt Engineering for Legal Reasoning Tasks</strong><br>
                            <span style="color: var(--text-muted); font-size: 0.9rem;">YU, QUARTEY & SCHILDER (2023) — ACL Findings, p. 13582-13596</span>
                        </div>

                        <div style="border-left: 3px solid var(--gold); padding-left: 1rem;">
                            <strong>Artificial Intelligence and Legal Analysis: Implications for Legal Education</strong><br>
                            <span style="color: var(--text-muted); font-size: 0.9rem;">PEOPLES, Lee F. (2025) — Law Library Journal, v. 117, p. 52</span>
                        </div>
                    </div>

                    <div class="callout callout-tip">
                        <div class="callout-title">Variações do Método</div>
                        <p>Existem variações do FIRAC como <strong>IRAC</strong> (sem Facts separados), <strong>CREAC</strong> (Conclusion-Rule-Explanation-Application-Conclusion), e <strong>CRAC</strong>. O FIRAC+ adapta a estrutura clássica para maximizar a extração de informações por LLMs, com ênfase em fatos detalhados e pontos controvertidos explícitos.</p>
                    </div>

                    <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

                    <h2>Casos de Uso do FIRAC+</h2>

                    <table style="width:100%; border-collapse: collapse; margin: 1.5rem 0;">
                        <tr style="background: var(--primary); color: white;">
                            <th style="padding: 0.75rem; text-align: left;">Caso de Uso</th>
                            <th style="padding: 0.75rem; text-align: left;">Por que FIRAC+ é ideal</th>
                        </tr>
                        <tr style="background: var(--bg-light);">
                            <td style="padding: 0.75rem;"><strong>Preparar decisão judicial</strong></td>
                            <td style="padding: 0.75rem;">Visão completa e imparcial dos argumentos de ambas as partes</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem;"><strong>Estudar processo novo</strong></td>
                            <td style="padding: 0.75rem;">Extração sistemática de fatos, questões e normas</td>
                        </tr>
                        <tr style="background: var(--bg-light);">
                            <td style="padding: 0.75rem;"><strong>Preparar sustentação oral</strong></td>
                            <td style="padding: 0.75rem;">Identificação clara dos pontos controvertidos</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem;"><strong>Revisar trabalho de estagiário</strong></td>
                            <td style="padding: 0.75rem;">Análise estruturada facilita verificação</td>
                        </tr>
                        <tr style="background: var(--bg-light);">
                            <td style="padding: 0.75rem;"><strong>Segunda opinião</strong></td>
                            <td style="padding: 0.75rem;">Análise independente para contrastar com a própria</td>
                        </tr>
                    </table>

                    <div class="callout callout-warning">
                        <div class="callout-title">Limitações do FIRAC+</div>
                        <ul style="margin-top: 0.5rem;">
                            <li><strong>Não substitui</strong> a análise humana — é subsídio, não decisão</li>
                            <li><strong>Depende da qualidade</strong> do documento anexado (OCR pode falhar)</li>
                            <li><strong>Casos muito extensos</strong> podem exceder a janela de contexto</li>
                            <li><strong>Sempre verifique</strong> se os dados extraídos conferem com o original</li>
                        </ul>
                    </div>
                `,
                exercise: {
                    title: "Análise FIRAC+ de Caso Real",
                    icon: "📊",
                    description: "Use o prompt FIRAC+ para analisar um documento processual e verifique a qualidade da análise.",
                    steps: [
                        { title: "Prepare o Documento", items: ["Escolha uma petição inicial, contestação ou sentença", "Prefira PDF nativo (não digitalizado) para melhor OCR", "Documentos de 5-20 páginas são ideais para começar"] },
                        { title: "Execute o FIRAC+", items: ["Copie o prompt completo acima", "Cole no início de uma nova conversa", "Anexe o documento PDF", "Aguarde a análise completa"] },
                        { title: "Verifique a Qualidade", items: ["Os FATOS estão completos e em ordem cronológica?", "A QUESTÃO CENTRAL captura o cerne do caso?", "Os ARGUMENTOS de ambas as partes foram bem representados?", "Há informações inventadas (alucinações)?"] }
                    ],
                    checklist: [
                        "Entendo o significado de cada letra do FIRAC (Fatos, Issue, Regra, Aplicação, Conclusão)",
                        "Sei por que usamos FIRAC+ (nome único) em vez de apenas FIRAC",
                        "Compreendo o papel dos guardrails anti-alucinação na seção <adicionais>",
                        "Sei verificar se a análise contém informações inventadas"
                    ]
                },
                tip: "Para casos muito extensos, divida em partes: primeiro anexe a petição inicial e peça análise; depois anexe a contestação e peça para complementar. O modelo mantém o contexto da conversa.",
                warning: "<strong>\"O FIRAC+ pode decidir o caso por mim.\"</strong><br>Não. O prompt foi projetado para manter-se <em>imparcial</em> quando não há decisão. Ele apresenta prós e contras de cada lado, mas a decisão é sempre humana."
            },
            "2.9": {
                number: "2.9",
                module: "Módulo 2 — Engenharia de Prompt",
                title: "Prompt Relatório (Escrita Jurídica)",
                objective: "Dominar o prompt de Relatório para transformar documentos processuais em relatórios jurídicos profissionais, com fidelidade documental absoluta.",
                content: `
                    <h2>O que é um Relatório Judicial?</h2>
                    <p>O relatório judicial é um <strong>componente ubíquo</strong> nas peças processuais, servindo como texto base para a redação de petições, decisões e outras manifestações jurídicas. Aparece em sentenças, acórdãos, pareceres, votos e manifestações ministeriais.</p>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
                        <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 8px; text-align: center;">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">📋</div>
                            <h4 style="color: var(--primary); margin-bottom: 0.5rem;">Sumarizar</h4>
                            <p style="font-size: 0.9rem; color: var(--text-muted);">Condensar fatos e argumentos essenciais de forma objetiva e cronológica</p>
                        </div>
                        <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 8px; text-align: center;">
                            <div style="font-size: 2rem; margin-bottom: 0.5rem;">🧭</div>
                            <h4 style="color: var(--primary); margin-bottom: 0.5rem;">Orientar</h4>
                            <p style="font-size: 0.9rem; color: var(--text-muted);">Guiar o leitor pelos pontos cruciais, facilitando compreensão e análise</p>
                        </div>
                    </div>

                    <div class="callout callout-info">
                        <div class="callout-title">Análise vs. Escrita: Qual a diferença?</div>
                        <table style="width:100%; margin-top: 0.5rem;">
                            <tr>
                                <td style="padding: 0.5rem;"><strong>FIRAC+ (Análise)</strong></td>
                                <td style="padding: 0.5rem;">Extrai informações em formato estruturado (listas, seções)</td>
                            </tr>
                            <tr>
                                <td style="padding: 0.5rem;"><strong>Relatório (Escrita)</strong></td>
                                <td style="padding: 0.5rem;">Transforma em texto corrido no estilo jurídico tradicional</td>
                            </tr>
                        </table>
                    </div>

                    <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

                    <h2>Características do Prompt Relatório</h2>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
                        <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px; border-left: 4px solid var(--gold);">
                            <h4 style="color: var(--primary); margin-bottom: 0.5rem;">🔄 Prompt de Transformação</h4>
                            <p style="font-size: 0.9rem; color: var(--text-muted);">Usa o conhecimento anexado para transformar informações brutas em relatório estruturado — <strong>menor risco de alucinação</strong> porque não precisa "inventar" conteúdo.</p>
                        </div>
                        <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px; border-left: 4px solid var(--gold);">
                            <h4 style="color: var(--primary); margin-bottom: 0.5rem;">🏗️ Prompt Pré-estruturado</h4>
                            <p style="font-size: 0.9rem; color: var(--text-muted);">Placeholders funcionam como "palavras na boca da máquina" — instruções dentro de instruções que controlam a camada de estilo.</p>
                        </div>
                        <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px; border-left: 4px solid var(--gold);">
                            <h4 style="color: var(--primary); margin-bottom: 0.5rem;">🛡️ Cláusula de Pureza</h4>
                            <p style="font-size: 0.9rem; color: var(--text-muted);">Guardrails rigorosos que garantem fidelidade absoluta aos documentos fornecidos — proibição explícita de inferências externas.</p>
                        </div>
                        <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px; border-left: 4px solid var(--gold);">
                            <h4 style="color: var(--primary); margin-bottom: 0.5rem;">📏 Verbosidade Controlada</h4>
                            <p style="font-size: 0.9rem; color: var(--text-muted);">Equilíbrio entre completude e concisão — extensão proporcional à complexidade do documento analisado.</p>
                        </div>
                    </div>

                    <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

                    <h2>Anatomia do Prompt Relatório</h2>

                    <h3>1. PERSONA — Especialista em Escrita Jurídica</h3>
                    <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.9rem;"><code>&lt;persona&gt;
Você é um ASSISTENTE JURÍDICO DE ALTO NÍVEL especializado
EM ESCRITA JURÍDICA, LINGUAGEM E INTERPRETAÇÃO, com expertise
em análise processual, teoria da decisão e estilo de escrita.
&lt;/persona&gt;</code></pre>
                    <p style="margin-top: 0.5rem; color: var(--text-muted); font-size: 0.9rem;"><strong>Por que funciona:</strong> Diferente do FIRAC+ (análise), aqui a ênfase está na <em>escrita</em> e no <em>estilo</em>.</p>

                    <h3>2. OBJETIVO — Elaborar Relatório com Fidelidade</h3>
                    <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.9rem;"><code>&lt;objetivo&gt;
Sua tarefa é realizar a análise abrangente e detalhada dos
DOCUMENTOS FORNECIDOS, para elaborar o RELATÓRIO DA PETIÇÃO
INICIAL, completo e detalhado, sintetizando exclusivamente
os fatos, argumentos e pedidos apresentados pela parte autora.

Realize leitura integral da petição inicial, baseando-se
exclusivamente nas informações do caso apresentado, sem
incorporar elementos externos.
&lt;/objetivo&gt;</code></pre>
                    <p style="margin-top: 0.5rem; color: var(--text-muted); font-size: 0.9rem;"><strong>Por que funciona:</strong> "Exclusivamente" e "sem incorporar elementos externos" são guardrails anti-alucinação.</p>

                    <h3>3. ESTILO — Texto Corrido Jurídico</h3>
                    <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.9rem;"><code>&lt;estilo&gt;
Você escreve de modo didático e preciso, com rigor metodológico,
empregando linguagem técnico-jurídica apropriada para decisões.

Comece o texto com **RELATÓRIO** (sem aspas), seguido do corpo
iniciando com "Trata-se".

O relatório deve ser redigido em **TEXTO CORRIDO**, com parágrafos
conectados organicamente, sem bullet points ou tópicos.
&lt;/estilo&gt;</code></pre>
                    <p style="margin-top: 0.5rem; color: var(--text-muted); font-size: 0.9rem;"><strong>Por que funciona:</strong> "Comece com RELATÓRIO" e "Trata-se" são <em>prefills</em> que garantem formato jurídico tradicional.</p>

                    <h3>4. MODELO — Estrutura com Placeholders</h3>
                    <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.9rem;"><code>&lt;formato_saida&gt;
RELATÓRIO

Trata-se de \`TIPO DE AÇÃO EM MAIÚSCULAS\` proposta por
\`NOME DA PARTE AUTORA EM MAIÚSCULAS\` contra \`NOME DA PARTE
RÉ EM MAIÚSCULAS\`, com o objetivo de \`sintetizar pedido\`.

Alega a parte autora (\`ID SE HOUVER\`) que \`DESCREVER FATOS
EM ORDEM CRONOLÓGICA, COM DATAS, NOMES E EVENTOS\`.

Para reforçar sua alegação, argumenta que \`INDICAR ARGUMENTOS
JURÍDICOS, TESES E FUNDAMENTOS DE DIREITO\`.

Por fim, requer \`DESCREVER PEDIDO CENTRAL\`. Requer ainda
\`PEDIDOS ACESSÓRIOS: HONORÁRIOS, CUSTAS, GRATUIDADE\`.
&lt;/formato_saida&gt;</code></pre>
                    <p style="margin-top: 0.5rem; color: var(--text-muted); font-size: 0.9rem;"><strong>Por que funciona:</strong> Placeholders em MAIÚSCULAS dentro de backticks funcionam como "instruções dentro de instruções" — o modelo sabe exatamente o que preencher em cada ponto.</p>

                    <h3>5. ADICIONAIS — Guardrails de Fidelidade</h3>
                    <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.9rem;"><code>&lt;adicionais&gt;
**Guardrails de fidelidade:**
- Use dados estritamente referenciados na petição inicial
- USE APENAS IDs existentes no documento fornecido
- **NUNCA INVENTE IDs!** Se não constar, indicar "Id. (NÃO CONSTA)"
- Em caso de dúvida, NÃO invente — use "não consta dos autos"

**Qualidade da leitura:**
- Consulte a petição inicial na íntegra
- Extraia TODOS os fatos narrados, não apenas os principais
- Identifique TODOS os pedidos formulados
&lt;/adicionais&gt;</code></pre>
                    <p style="margin-top: 0.5rem; color: var(--text-muted); font-size: 0.9rem;"><strong>Por que funciona:</strong> "NUNCA INVENTE" em maiúsculas e a instrução "não consta dos autos" são guardrails críticos contra alucinação.</p>

                    <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

                    <h2>Prompt Completo para Copiar</h2>
                    <p>Clique no bloco abaixo para selecionar e copiar:</p>

                    <pre style="background: #1a1a2e; color: #eee; padding: 1.5rem; border-radius: 8px; overflow-x: auto; font-size: 0.85rem; max-height: 500px; overflow-y: auto; cursor: pointer;" onclick="this.select ? this.select() : window.getSelection().selectAllChildren(this)"><code># Prompt Relatório (Framework P.O.E.M.A.)

&lt;persona&gt;
Você é um ASSISTENTE JURÍDICO DE ALTO NÍVEL especializado EM ESCRITA JURÍDICA, LINGUAGEM E INTERPRETAÇÃO, com expertise em análise processual, teoria da decisão e estilo de escrita.
&lt;/persona&gt;

&lt;objetivo&gt;
Sua tarefa é realizar a análise abrangente e detalhada dos DOCUMENTOS FORNECIDOS, para ESCREVER O RELATÓRIO do caso jurídico, seguindo rigorosamente a estrutura modelo apresentada.
&lt;/objetivo&gt;

&lt;estilo&gt;
Você escreve de modo didático e preciso, com rigor metodológico, empregando linguagem técnico-jurídica apropriada para decisões judiciais.

Comece o texto com **RELATÓRIO** (sem aspas), seguido do corpo do relatório iniciando com "Trata-se".

O relatório deve ser redigido em **TEXTO CORRIDO**, com parágrafos conectados organicamente, sem bullet points ou tópicos.
&lt;/estilo&gt;

&lt;modelo&gt;
## **INSTRUÇÕES METODOLÓGICAS**

### 1. PRINCÍPIOS DE ANÁLISE
- **Fidelidade Documental Absoluta**: Extraia informações EXCLUSIVAMENTE dos documentos fornecidos
- **Proibição de Inferências Externas**: NÃO adicione fatos, dados ou informações não explicitamente mencionados nos autos
- **Precisão Identificadora**: Utilize APENAS números de identificação (IDs) presentes nos documentos. Quando ausentes, use "ID XXXX"
- **Transcrição Literal**: Ao citar trechos, reproduza EXATAMENTE como constam nos documentos, usando aspas duplas

### 2. PROTOCOLO DE LEITURA
- Realize leitura integral de TODOS os documentos antes de iniciar a redação
- Identifique contradições ou inconsistências entre peças processuais
- Mapeie cronologicamente os eventos processuais
- Catalogue todos os pedidos, argumentos e fundamentos de cada parte

## **ESTRUTURA MODELO**

&lt;formato_saida&gt;
RELATÓRIO

Trata-se de \`TIPO DE AÇÃO EM MAIÚSCULAS SEM ASPAS\` proposta por \`NOME DA(S) PARTE(S) AUTORA(S) EM MAIÚSCULAS\` contra \`NOME DA(S) PARTE(S) REQUERIDA(S) EM MAIÚSCULAS\`, com o objetivo de \`SINTETIZAR O PEDIDO DA AÇÃO EM MINÚSCULAS\`.

Em sua inicial (ID XXXX), alega a parte autora que \`DESCREVER EM DETALHES OS FATOS ALEGADOS PELA PARTE AUTORA, EM ORDEM CRONOLÓGICA, INCLUINDO DATAS, NOMES E EVENTOS CONFORME NARRADOS NA PETIÇÃO INICIAL EM TEXTO CORRIDO\`. Em suas palavras, \`TRANSCREVER LITERALMENTE OS TRECHOS MAIS RELEVANTES DA PETIÇÃO INICIAL, USANDO ASPAS DUPLAS E MANTENDO A REDAÇÃO ORIGINAL\`.

Para reforçar sua alegação, argumenta que \`INDICAR OS ARGUMENTOS JURÍDICOS APRESENTADOS PELA PARTE AUTORA, MANTENDO A ORDEM LÓGICA DA PETIÇÃO\`. Sustenta ainda que \`INDICAR OUTRAS CONSIDERAÇÕES, FUNDAMENTOS OU ARGUMENTOS SUBSIDIÁRIOS DA PETIÇÃO INICIAL\`.

Por fim, requer que \`DESCREVER O PEDIDO PRINCIPAL E TODOS OS PEDIDOS SUBSIDIÁRIOS OU ALTERNATIVOS, EXATAMENTE COMO FORMULADOS NA PETIÇÃO\`.

Em sua contestação (ID XXXXX), a parte requerida \`NOME DA PARTE QUE CONTESTOU EM MAIÚSCULAS\` alegou que \`SE HOUVER PRELIMINARES: descrever primeiro todas as preliminares arguidas. CASO CONTRÁRIO: detalhar os fatos e argumentos de mérito apresentados na defesa\`. Em reforço, argumenta que \`INDICAR OS FUNDAMENTOS JURÍDICOS E ARGUMENTOS DE DIREITO APRESENTADOS NA CONTESTAÇÃO\`.

Por fim, requer que \`DESCREVER TODOS OS PEDIDOS FORMULADOS NA CONTESTAÇÃO, INCLUINDO PEDIDOS PRINCIPAIS, SUBSIDIÁRIOS E EVENTUAIS PEDIDOS CONTRAPOSTOS\`.

\`SE HOUVER OUTRAS PEÇAS PROCESSUAIS RELEVANTES (réplica, manifestações, decisões interlocutórias, etc.), CRIAR NOVOS PARÁGRAFOS SEGUINDO O MESMO PADRÃO ESTRUTURAL ACIMA\`
&lt;/formato_saida&gt;
&lt;/modelo&gt;

&lt;adicionais&gt;
**Guardrails de fidelidade:**
- Use dados e informações factuais estritamente referenciados no caso em análise, sem adicionar materiais externos
- USE APENAS IDs e dados existentes no documento fornecido
- **NUNCA INVENTE IDs!** Caso não conste o ID, indicar "Id. (NÃO CONSTA)"
- Em caso de dúvida sobre um dado, NÃO invente - use "não consta dos autos" ou similar

**MODO INCREMENTAL**: Se apenas uma peça for anexada (ex: somente a petição inicial), elabore o relatório parcial dessa peça. Quando novas peças forem anexadas posteriormente (ex: contestação, réplica), adicione novos parágrafos mantendo a estrutura anterior, criando assim um relatório completo e encadeado.
&lt;/adicionais&gt;</code></pre>

                    <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

                    <h2>Dicas Práticas de Uso</h2>

                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
                        <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px;">
                            <h4 style="color: var(--primary); margin-bottom: 0.75rem;">📄 Tamanho do Anexo</h4>
                            <p style="font-size: 0.9rem; margin-bottom: 0.5rem;">Processos muito grandes podem exceder o limite de contexto.</p>
                            <p style="font-size: 0.85rem; color: var(--text-muted);"><strong>Dica:</strong> Divida a análise em partes para processos volumosos.</p>
                        </div>
                        <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px;">
                            <h4 style="color: var(--primary); margin-bottom: 0.75rem;">📑 Peça por Peça vs. Íntegra</h4>
                            <p style="font-size: 0.9rem; margin-bottom: 0.5rem;">Decisão estratégica entre analisar documentos individuais ou o processo completo.</p>
                            <p style="font-size: 0.85rem; color: var(--text-muted);"><strong>Dica:</strong> Para relatórios mais precisos, analise peça por peça e depois consolide.</p>
                        </div>
                        <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px;">
                            <h4 style="color: var(--primary); margin-bottom: 0.75rem;">🤖 Robustez do Modelo</h4>
                            <p style="font-size: 0.9rem; margin-bottom: 0.5rem;">Modelos diferentes têm capacidades variadas de processamento.</p>
                            <p style="font-size: 0.85rem; color: var(--text-muted);"><strong>Dica:</strong> Use modelos mais avançados (Claude 3.5, GPT-4) para melhores resultados.</p>
                        </div>
                        <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px;">
                            <h4 style="color: var(--primary); margin-bottom: 0.75rem;">📃 Tipo de PDF</h4>
                            <p style="font-size: 0.9rem; margin-bottom: 0.5rem;">PDFs escaneados ou com baixa qualidade podem prejudicar a análise.</p>
                            <p style="font-size: 0.85rem; color: var(--text-muted);"><strong>Dica:</strong> Sempre que possível, use PDFs com texto selecionável (não escaneados).</p>
                        </div>
                    </div>

                    <div class="callout callout-tip">
                        <div class="callout-title">Modo Incremental</div>
                        <p>Você pode construir o relatório <strong>progressivamente</strong>:</p>
                        <ol style="margin-top: 0.5rem; padding-left: 1.5rem;">
                            <li>Anexe a petição inicial → receba relatório da inicial</li>
                            <li>Anexe a contestação → peça para "adicionar ao relatório"</li>
                            <li>Anexe a réplica → peça para "completar o relatório"</li>
                        </ol>
                        <p style="margin-top: 0.5rem;">O modelo mantém o contexto e adiciona novos parágrafos mantendo a estrutura.</p>
                    </div>

                    <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

                    <h2>Fundamentação</h2>

                    <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;">
                        <h4 style="margin-bottom: 1rem; color: var(--primary);">Referências</h4>

                        <div style="border-left: 3px solid var(--gold); padding-left: 1rem; margin-bottom: 1rem;">
                            <strong>Art. 489 do Código de Processo Civil</strong><br>
                            <span style="color: var(--text-muted); font-size: 0.9rem;">Elementos essenciais da sentença: relatório, fundamentação e dispositivo</span>
                        </div>

                        <div style="border-left: 3px solid var(--gold); padding-left: 1rem; margin-bottom: 1rem;">
                            <strong>Context Rot: How Increasing Input Tokens Impacts LLM Performance</strong><br>
                            <span style="color: var(--text-muted); font-size: 0.9rem;">Chroma Research — Pesquisa sobre análise de textos longos em LLMs</span>
                        </div>

                        <div style="border-left: 3px solid var(--gold); padding-left: 1rem;">
                            <strong>Guia de Prompt Engineering da Anthropic</strong><br>
                            <span style="color: var(--text-muted); font-size: 0.9rem;">Melhores práticas para criação de prompts eficazes</span>
                        </div>
                    </div>

                    <div class="callout callout-warning">
                        <div class="callout-title">Limitações do Prompt Relatório</div>
                        <ul style="margin-top: 0.5rem;">
                            <li><strong>Não substitui</strong> a leitura humana — é ferramenta de auxílio</li>
                            <li><strong>Depende da qualidade</strong> do PDF (OCR pode falhar em escaneados)</li>
                            <li><strong>Sempre verifique</strong> se os IDs e dados conferem com os originais</li>
                            <li><strong>Context rot</strong> — em documentos muito longos, informações do meio podem se perder</li>
                        </ul>
                    </div>
                `,
                exercise: {
                    title: "Gerando um Relatório Judicial",
                    icon: "✍️",
                    description: "Use o prompt de Relatório para transformar uma petição inicial em relatório judicial profissional.",
                    steps: [
                        { title: "Escolha o Documento", items: ["Selecione uma petição inicial de caso real", "Prefira PDF nativo (texto selecionável)", "Documentos de 5-15 páginas são ideais"] },
                        { title: "Execute o Prompt", items: ["Copie o prompt completo", "Cole no início de uma nova conversa", "Anexe o PDF da petição inicial", "Aguarde a geração do relatório"] },
                        { title: "Verifique a Fidelidade", items: ["Os fatos estão em ordem cronológica?", "Os IDs citados existem no documento?", "Há informações inventadas?", "O estilo está adequado ao uso pretendido?"] }
                    ],
                    checklist: [
                        "Entendo a diferença entre prompt de Análise (FIRAC+) e Escrita (Relatório)",
                        "Sei como funcionam os placeholders como 'instruções dentro de instruções'",
                        "Compreendo a importância dos guardrails de fidelidade documental",
                        "Sei usar o Modo Incremental para construir relatórios progressivamente"
                    ]
                },
                tip: "O <strong>Modo Incremental</strong> é particularmente útil quando você recebe peças processuais em momentos diferentes. Comece com a inicial, depois vá adicionando contestação, réplica — o relatório cresce organicamente.",
                warning: "<strong>\"O relatório gerado pode ir direto para a sentença.\"</strong><br>Não sem revisão! Sempre verifique se os IDs, datas e nomes conferem com os originais. O prompt inclui 'NÃO CONSTA' como marcador de lacunas — procure por ele."
            }
        };

        let completedItems = JSON.parse(localStorage.getItem('cadernoItems') || '{}');

        function renderLesson(id) {
            const lesson = lessons[id];
            if (!lesson) return '';

            let stepsHTML = '';
            if (lesson.exercise && lesson.exercise.steps) {
                stepsHTML = lesson.exercise.steps.map((step, i) => `
                    <div class="step">
                        <div class="step-header">
                            <span class="step-number">${i + 1}</span>
                            <span class="step-title">${step.title}</span>
                        </div>
                        <div class="step-content">
                            <ul>${step.items.map(item => `<li>${item}</li>`).join('')}</ul>
                        </div>
                    </div>
                `).join('');
            }

            let checklistHTML = '';
            if (lesson.exercise && lesson.exercise.checklist) {
                checklistHTML = lesson.exercise.checklist.map((item, i) => `
                    <label class="checklist-item">
                        <input type="checkbox" data-lesson="${id}" data-item="${i}" ${completedItems[`${id}-${i}`] ? 'checked' : ''}>
                        <span class="checklist-box"></span>
                        <span class="checklist-label">${item}</span>
                    </label>
                `).join('');
            }

            return `
                <article class="lesson" id="lesson-${id}">
                    <div class="lesson-header">
                        <div class="lesson-number">
                            <span class="lesson-number-badge">${lesson.number}</span>
                            ${lesson.module}
                        </div>
                        <h1 class="lesson-title">${lesson.title}</h1>
                        <p class="lesson-objective">${lesson.objective}</p>
                    </div>
                    ${lesson.content}
                    ${lesson.exercise ? `
                        <div class="exercise-card expanded">
                            <div class="exercise-header" onclick="toggleExercise(this)">
                                <span class="exercise-title">
                                    <span class="exercise-icon">${lesson.exercise.icon}</span>
                                    Exercício: ${lesson.exercise.title}
                                </span>
                                <span class="exercise-toggle"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
                            </div>
                            <div class="exercise-body">
                                <p><strong>O que você vai fazer:</strong> ${lesson.exercise.description}</p>
                                ${stepsHTML}
                                <div class="checklist">
                                    <div class="checklist-title">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                                        Checklist de Verificação
                                    </div>
                                    ${checklistHTML}
                                </div>
                            </div>
                        </div>
                    ` : ''}
                    ${lesson.tip ? `<div class="callout callout-tip"><div class="callout-title">💡 Dica Prática</div><p>${lesson.tip}</p></div>` : ''}
                    ${lesson.warning ? `<div class="callout callout-warning"><div class="callout-title">⚠️ Armadilha Comum</div><p>${lesson.warning}</p></div>` : ''}
                </article>
            `;
        }

        function init() {
            // Render all lessons
            const content = document.getElementById('content');
            content.innerHTML = Object.keys(lessons).map(id => renderLesson(id)).join('');

            // Show first lesson
            document.querySelector('.lesson').classList.add('active');

            // Setup navigation
            document.querySelectorAll('.nav-item[data-lesson]').forEach(item => {
                item.addEventListener('click', () => navigateToLesson(item.dataset.lesson));
            });

            // Setup section toggles
            document.querySelectorAll('.nav-section-header').forEach(header => {
                header.addEventListener('click', () => toggleSection(header));
            });

            // Setup checklist handlers
            document.querySelectorAll('.checklist-item input').forEach(checkbox => {
                checkbox.addEventListener('change', handleChecklistChange);
            });

            // Restore theme
            const savedTheme = localStorage.getItem('cadernoTheme') || 'light';
            document.documentElement.setAttribute('data-theme', savedTheme);
            updateThemeUI(savedTheme);

            // Set initial content heights
            document.querySelectorAll('.nav-section:not(.collapsed) .nav-section-content').forEach(content => {
                content.style.maxHeight = content.scrollHeight + 'px';
            });

            updateProgress();
        }

        function navigateToLesson(id) {
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
                if (item.dataset.lesson === id) item.classList.add('active');
            });
            document.querySelectorAll('.lesson').forEach(lesson => lesson.classList.remove('active'));
            document.getElementById('lesson-' + id).classList.add('active');
            if (window.innerWidth < 768) document.getElementById('sidebar').classList.remove('open');
            window.scrollTo(0, 0);
        }

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            if (window.innerWidth < 768) {
                sidebar.classList.toggle('open');
            } else {
                sidebar.classList.toggle('collapsed');
            }
        }

        function toggleTheme() {
            const html = document.documentElement;
            const newTheme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('cadernoTheme', newTheme);
            updateThemeUI(newTheme);
        }

        function updateThemeUI(theme) {
            const icon = document.getElementById('theme-icon');
            const label = document.getElementById('theme-label');
            if (theme === 'dark') {
                icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
                label.textContent = 'Modo escuro';
            } else {
                icon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
                label.textContent = 'Modo claro';
            }
        }

        function toggleSection(header) {
            const section = header.parentElement;
            const content = section.querySelector('.nav-section-content');
            if (section.classList.contains('collapsed')) {
                section.classList.remove('collapsed');
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                section.classList.add('collapsed');
                content.style.maxHeight = '0';
            }
        }

        function toggleExercise(header) {
            header.parentElement.classList.toggle('expanded');
        }

        function handleChecklistChange(e) {
            const checkbox = e.target;
            const key = `${checkbox.dataset.lesson}-${checkbox.dataset.item}`;
            if (checkbox.checked) {
                completedItems[key] = true;
            } else {
                delete completedItems[key];
            }
            localStorage.setItem('cadernoItems', JSON.stringify(completedItems));
            updateProgress();
        }

        function updateProgress() {
            const total = document.querySelectorAll('.checklist-item input').length;
            const completed = Object.keys(completedItems).length;
            document.getElementById('progress-fill').style.width = (completed / total * 100) + '%';
            document.getElementById('progress-text').textContent = `${completed}/${total}`;
        }

        document.addEventListener('DOMContentLoaded', init);
    