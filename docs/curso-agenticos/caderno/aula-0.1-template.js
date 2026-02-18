// =====================================================
// CADERNO DE EXERCÍCIOS - CURSO DE SISTEMAS AGÊNTICOS
// Aula 0.1 - Bem-Vindo ao Mundo Agêntico
// =====================================================
// Este arquivo serve como TEMPLATE para todas as aulas
// do curso de sistemas agênticos. Copie e adapte.
// =====================================================

const aula_0_1 = {
    "0.1": {
        number: "0.1",
        module: "Módulo 0 — Fundamentos Conceituais",
        title: "Bem-Vindo ao Mundo Agêntico",
        objective: "Compreender a distinção fundamental entre assistentes (LLMs tradicionais) e agentes de IA — e por que isso muda tudo.",
        learningObjectives: [
            "Reconhecer o <strong>valor e as limitações</strong> do modo assistente (ChatGPT, Claude Web)",
            "Compreender a <strong>definição canônica da Anthropic</strong> para workflows e agents",
            "Entender que agentes não são 'LLMs mais poderosos' — são uma <strong>arquitetura diferente</strong>",
            "Identificar a <strong>pergunta decisiva</strong>: quem decide o próximo passo?",
            "Visualizar a mudança de papel: de <strong>operador</strong> para <strong>regente</strong>"
        ],
        whyItMatters: "Se você usa ChatGPT ou Claude Web, já está colhendo frutos da revolução da IA. Mas há um próximo nível. Entender a diferença entre assistentes e agentes é o primeiro passo para <strong>parar de ser o middleware</strong> (copiando e colando entre sistemas) e <strong>começar a ser o regente</strong> (definindo objetivos e revisando resultados). A diferença não é poder — é arquitetura.",
        content: `
            <div class="block">
                <h2 class="block-title">O Modo Assistente Já É Incrível</h2>
                <p>Antes de falar para onde vamos, vamos celebrar de onde viemos. O modo assistente — ChatGPT, Claude Web — <strong>já mudou sua vida</strong>.</p>
                <div class="table-wrapper">
                    <table>
                        <thead><tr><th>Capacidade</th><th>Impacto na sua rotina</th></tr></thead>
                        <tbody>
                            <tr><td><strong>Conversação natural</strong></td><td>Pergunte em português, receba em português</td></tr>
                            <tr><td><strong>Análise de documentos</strong></td><td>Anexe um contrato, peça análise de cláusulas</td></tr>
                            <tr><td><strong>Pesquisa contextual</strong></td><td>"Quais são os argumentos contra X?"</td></tr>
                            <tr><td><strong>Redação assistida</strong></td><td>Rascunhos de petições, pareceres, e-mails</td></tr>
                            <tr><td><strong>Brainstorming</strong></td><td>"Quais teses posso usar neste caso?"</td></tr>
                        </tbody>
                    </table>
                </div>
                <p>Se você usa assistentes de IA e sente que sua produtividade aumentou — <strong>você está certo</strong>. O modo assistente é uma conquista real.</p>
            </div>

            <div class="block">
                <h2 class="block-title">O Problema: Você Virou o Middleware</h2>
                <p>Mas há limitações que você sente, mesmo sem saber nomear. A principal:</p>
                <div class="code-block">MODO ASSISTENTE:
VOCÊ pergunta → Claude responde → VOCÊ pergunta → Claude responde

O assistente responde. Você copia. Cola em outro lugar.
Volta. Pergunta de novo. Copia. Cola. Formata. Salva.

VOCÊ virou o middleware. O humano virou o gargalo.</div>
                <p>Enquanto Claude pensa, você espera. Enquanto você lê, Claude espera. Ninguém trabalha em paralelo. O tempo é desperdiçado em <strong>ping-pong</strong>.</p>
            </div>

            <div class="callout callout-warning">
                <div class="callout-title">A Confissão de Karpathy</div>
                <p><em>"Claramente, alguma <strong>ferramenta alienígena poderosa</strong> foi distribuída, exceto que ela vem <strong>sem manual</strong> e todos têm que descobrir como segurá-la e operá-la."</em></p>
                <p>— Andrej Karpathy (ex-Tesla, OpenAI), Janeiro 2025</p>
                <p>Se um dos maiores especialistas em IA se sente "para trás", <strong>você não está sozinho</strong>.</p>
            </div>

            <div class="block">
                <h2 class="block-title">A Distinção Fundamental: Workflows vs Agents</h2>
                <p>A Anthropic, criadora do Claude, estabelece a distinção mais clara e autorizada:</p>
                <div class="table-wrapper">
                    <table>
                        <thead><tr><th>Conceito</th><th>Definição Oficial</th></tr></thead>
                        <tbody>
                            <tr><td><strong>Workflows</strong></td><td>Sistemas onde LLMs são orquestrados através de <strong>caminhos de código predefinidos</strong></td></tr>
                            <tr><td><strong>Agents</strong></td><td>Sistemas onde LLMs <strong>dinamicamente direcionam seus próprios processos</strong> e uso de ferramentas</td></tr>
                        </tbody>
                    </table>
                </div>
                <p><strong>Tradução simples:</strong></p>
                <ul style="margin:16px 0 16px 24px;color:var(--text-secondary);">
                    <li><strong>Workflows:</strong> O desenvolvedor decide antecipadamente cada passo</li>
                    <li><strong>Agents:</strong> O modelo decide em tempo real o que fazer</li>
                </ul>
            </div>

            <div class="block">
                <h2 class="block-title">A Pergunta Decisiva</h2>
                <p>Para saber se você está diante de um assistente ou agente, faça uma pergunta:</p>
                <div class="callout callout-info">
                    <div class="callout-title">QUEM DECIDE O PRÓXIMO PASSO?</div>
                    <p><strong>Se o humano ou código predefinido decide</strong> → É assistente/workflow</p>
                    <p><strong>Se o próprio modelo decide em tempo real</strong> → É agente</p>
                </div>
                <div class="code-block">ASSISTENTE:
VOCÊ pergunta → LLM responde → PARA e aguarda
O humano decide cada passo. O LLM é REATIVO.

AGENTE:
VOCÊ dá objetivo → AGENTE decide passos → executa → observa →
                   → decide próximo passo → executa → ...
O agente decide cada passo. O LLM é PROATIVO.</div>
            </div>

            <div class="block">
                <h2 class="block-title">A Mudança de Papel: Operador → Regente</h2>
                <div class="table-wrapper">
                    <table>
                        <thead><tr><th>Papel</th><th>Com Assistente</th><th>Com Agente</th></tr></thead>
                        <tbody>
                            <tr><td><strong>O que você faz</strong></td><td>Opera cada etapa</td><td>Define objetivo e revisa</td></tr>
                            <tr><td><strong>Analogia</strong></td><td>Você digita cada tecla do piano</td><td>Você rege a orquestra</td></tr>
                            <tr><td><strong>Onde você aparece</strong></td><td>Em TODOS os pontos</td><td>No INÍCIO e no FIM</td></tr>
                        </tbody>
                    </table>
                </div>
                <p><strong>O regente de orquestra não toca nenhum instrumento.</strong> Mas sem ele, não há música.</p>
            </div>

            <div class="block">
                <h2 class="block-title">O Insight Final</h2>
                <div class="callout callout-tip">
                    <div class="callout-title">A Frase que Resume Tudo</div>
                    <p><em>"Agentes não são assistentes mais poderosos. São sistemas onde o modelo <strong>DECIDE</strong> os próximos passos, não apenas <strong>RESPONDE</strong> a eles."</em></p>
                </div>
                <p>Esta frase captura a essência:</p>
                <ul style="margin:16px 0 16px 24px;color:var(--text-secondary);">
                    <li><strong>"Não são mais poderosos"</strong> — O poder do LLM pode ser exatamente o mesmo</li>
                    <li><strong>"DECIDE os próximos passos"</strong> — Autonomia é a característica definidora</li>
                    <li><strong>"Não apenas RESPONDE"</strong> — A diferença entre reativo e proativo</li>
                </ul>
            </div>
        `,
        exercise: {
            title: "Identificando Seu Papel Atual",
            icon: "🎭",
            description: "Diagnosticar como você usa IA hoje e identificar onde você é 'middleware' (gargalo humano) no fluxo de trabalho.",
            steps: [
                {
                    title: "Tarefa 1: Mapeie Seu Fluxo Atual",
                    items: [
                        "Pense em uma tarefa que você faz regularmente com ChatGPT ou Claude",
                        "Escreva cada passo: <code>1. Abro o chat 2. Digito pergunta 3. Copio resposta 4. Colo no Word...</code>",
                        "Conte: quantas vezes VOCÊ precisa agir entre o início e o fim?",
                        "Identifique: quais passos são 'copiar/colar' ou 'esperar'?"
                    ]
                },
                {
                    title: "Tarefa 2: O Teste do Middleware",
                    items: [
                        "Abra o Claude e peça: <code>Analise este documento e sugira melhorias</code> (anexe qualquer texto)",
                        "Quando ele responder, observe: <strong>ele parou e aguarda você</strong>",
                        "Agora peça: <code>Pesquise jurisprudência sobre o tema</code>",
                        "Observe novamente: <strong>ele parou e aguarda você</strong>",
                        "Reflexão: Quem está conectando as etapas? <strong>VOCÊ</strong> é o middleware"
                    ]
                },
                {
                    title: "Tarefa 3: Visualize o Cenário Agêntico",
                    items: [
                        "Imagine se você pudesse dizer: <code>/analisar-e-pesquisar documento.pdf</code>",
                        "E o sistema fizesse: análise → pesquisa → síntese → salvasse arquivo",
                        "Sem você copiar/colar entre etapas",
                        "Reflexão: O que você faria com o tempo economizado?"
                    ]
                }
            ],
            checklist: [
                "Mapeei meu fluxo atual de uso de IA",
                "Identifiquei onde sou 'middleware' (copio/colo entre etapas)",
                "Entendo que o assistente PARA e aguarda após cada resposta",
                "Compreendo a diferença entre reagir (assistente) e agir (agente)",
                "Sei que a pergunta decisiva é: 'Quem decide o próximo passo?'",
                "Visualizei como seria trabalhar como 'regente' em vez de 'operador'"
            ]
        },
        tip: "A próxima vez que você se pegar copiando e colando entre o chat e outro aplicativo, pare e pense: <strong>'Eu sou o middleware aqui.'</strong> Essa consciência é o primeiro passo para mudar.",
        warning: "<strong>\"Agente é um LLM mais poderoso.\"</strong><br>ERRADO. Agente não é questão de 'poder' do modelo. Um LLM fraco em arquitetura de agente pode superar um LLM forte usado como assistente. A diferença é <strong>arquitetural</strong>, não de capacidade bruta.",
        resources: [
            { title: "Building Effective Agents", url: "https://www.anthropic.com/engineering/building-effective-agents", desc: "Artigo oficial da Anthropic sobre arquitetura de agentes.", category: "docs" },
            { title: "AI Agents vs. AI Assistants", url: "https://www.ibm.com/think/topics/ai-agents-vs-ai-assistants", desc: "IBM: distinção clara entre agentes e assistentes.", category: "docs" },
            { title: "What Are AI Agents?", url: "https://cloud.google.com/discover/what-are-ai-agents", desc: "Google Cloud: visão geral de agentes de IA.", category: "docs" },
            { title: "2025: Year of the LLM Agent", url: "https://karpathy.ai/", desc: "Post de Andrej Karpathy sobre a revolução agêntica.", category: "papers" },
            { title: "Hugging Face Agents Course", url: "https://huggingface.co/learn/agents-course/unit1/agent-steps-and-structure", desc: "Curso gratuito sobre estrutura de agentes.", category: "surveys" }
        ]
    }
};

// =====================================================
// ESTRUTURA DE REFERÊNCIA DO CADERNO
// =====================================================
//
// Cada aula DEVE ter:
// - number: "X.Y" (string)
// - module: "Módulo X — Nome" (string)
// - title: Título da aula (string)
// - objective: Uma frase com o objetivo (string)
// - learningObjectives: Array de strings (pode ter <strong>)
// - whyItMatters: Por que isso importa (string)
// - content: HTML da teoria (template literal com backticks)
// - exercise: Objeto com:
//   - title: string
//   - icon: emoji string
//   - description: string
//   - steps: Array de { title: string, items: string[] }
//   - checklist: Array de strings
// - tip: Dica prática (string)
// - warning: Armadilha comum (string)
// - resources: Array de { title, url, desc, category }
//
// Categories válidas: "docs", "papers", "surveys", "tutorials"
// =====================================================

// Para integrar ao caderno principal, copie o objeto acima
// e adicione ao objeto `lessons` em index.html
