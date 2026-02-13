// MÓDULO 3 — TÉCNICAS AVANÇADAS
// Aulas 3.1 a 3.5

const modulo3Lessons = {
    "3.1": {
        number: "3.1",
        module: "Módulo 3 — Técnicas Avançadas",
        title: "Projetos (Claude Projects)",
        objective: "Dominar a criação de ambientes de trabalho persistentes com prompts customizados e bases de conhecimento no Claude.",
        content: `
            <h2>O que são Projects?</h2>
            <p><strong>Projects</strong> são espaços de trabalho independentes dentro do Claude, onde você pode configurar:</p>
            <ul style="margin:12px 0 12px 24px;color:var(--text-secondary);">
                <li><strong>Knowledge Base</strong> — documentos que o Claude consulta automaticamente</li>
                <li><strong>Custom Instructions</strong> — prompts persistentes que moldam o comportamento</li>
                <li><strong>Histórico separado</strong> — cada projeto mantém suas próprias conversas</li>
            </ul>
            <p>Pense em um Project como um <strong>assistente especializado</strong> que você configura uma vez e usa muitas vezes.</p>

            <div class="callout callout-info">
                <div class="callout-title">Por que usar Projects?</div>
                <p>Em vez de repetir o mesmo prompt toda vez, você configura uma vez e o Claude <strong>sempre</strong> sabe como se comportar naquele contexto. É a diferença entre treinar um estagiário a cada tarefa vs. ter um assessor que já conhece suas preferências.</p>
            </div>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Anatomia de um Project</h2>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
                <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--primary);">
                    <h4 style="color: var(--primary); margin-bottom: 0.75rem;">1. Knowledge Base</h4>
                    <p style="font-size: 0.95rem; margin-bottom: 0.75rem;"><strong>O que é:</strong> Biblioteca de documentos que o Claude consulta automaticamente.</p>
                    <p style="font-size: 0.9rem; color: var(--text-muted);"><strong>Formatos:</strong> PDF, DOCX, TXT, CSV, HTML, EPUB, RTF, ODT</p>
                    <p style="font-size: 0.9rem; color: var(--text-muted);"><strong>Limite por arquivo:</strong> 30MB</p>
                </div>
                <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 8px; border-left: 4px solid var(--gold);">
                    <h4 style="color: var(--gold); margin-bottom: 0.75rem;">2. Custom Instructions</h4>
                    <p style="font-size: 0.95rem; margin-bottom: 0.75rem;"><strong>O que é:</strong> Prompt de sistema persistente que define comportamento.</p>
                    <p style="font-size: 0.9rem; color: var(--text-muted);">Equivalente a um <strong>System Prompt</strong> que você não precisa repetir.</p>
                </div>
            </div>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>RAG: O Segredo da Escalabilidade</h2>

            <p><strong>RAG</strong> (Retrieval Augmented Generation) é a tecnologia que permite ao Claude trabalhar com <strong>muito mais conteúdo</strong> do que caberia na janela de contexto normal.</p>

            <div class="table-wrapper">
                <table>
                    <thead><tr><th>Aspecto</th><th>Sem RAG</th><th>Com RAG</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Capacidade</strong></td><td>~200K tokens (~150 páginas)</td><td>Até 10x mais (~1.500 páginas)</td></tr>
                        <tr><td><strong>Como funciona</strong></td><td>Carrega tudo na memória</td><td>Busca apenas o relevante</td></tr>
                        <tr><td><strong>Velocidade</strong></td><td>Mais lento com muitos docs</td><td>Otimizado para volume</td></tr>
                        <tr><td><strong>Disponibilidade</strong></td><td>Todos os planos</td><td>Todos os planos (limites maiores em planos pagos)</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="callout callout-tip">
                <div class="callout-title">Ativação Automática</div>
                <p>O RAG <strong>ativa automaticamente</strong> quando seu projeto se aproxima dos limites de contexto. Você não precisa configurar nada — o Claude detecta e faz a transição de forma transparente.</p>
            </div>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Comparativo: Chat vs. Project vs. API</h2>

            <div class="table-wrapper">
                <table>
                    <thead><tr><th>Recurso</th><th>Chat Simples</th><th>Project</th><th>API</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Persistência de instruções</strong></td><td>Não</td><td>Sim</td><td>Sim (via código)</td></tr>
                        <tr><td><strong>Knowledge Base</strong></td><td>Anexos por conversa</td><td>Biblioteca permanente</td><td>Via RAG externo</td></tr>
                        <tr><td><strong>Compartilhamento</strong></td><td>Não</td><td>Sim (Team/Enterprise)</td><td>Via aplicação</td></tr>
                        <tr><td><strong>RAG automático</strong></td><td>Não</td><td>Sim</td><td>Implementação manual</td></tr>
                        <tr><td><strong>Ideal para</strong></td><td>Tarefas únicas</td><td>Workflows repetitivos</td><td>Integração em sistemas</td></tr>
                    </tbody>
                </table>
            </div>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Como Criar um Project Jurídico</h2>

            <h3>Passo 1: Criar o Project</h3>
            <ol style="margin:12px 0 12px 24px;">
                <li>Acesse <strong>claude.ai</strong> e localize "Projects" na barra lateral</li>
                <li>Clique em <strong>"Create Project"</strong> ou <strong>"New Project"</strong></li>
                <li>Dê um nome descritivo: <code>Assistente Previdenciário</code>, <code>Análise de Contratos</code></li>
            </ol>

            <h3>Passo 2: Configurar Custom Instructions</h3>
            <p>Escreva instruções <strong>específicas</strong>, não genéricas:</p>

            <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; overflow-x: auto; font-size: 0.9rem;"><code>## IDENTIDADE
Você é um assistente jurídico especializado em DIREITO PREVIDENCIÁRIO,
com foco em benefícios por incapacidade (auxílio-doença e aposentadoria
por invalidez).

## COMPORTAMENTO
- Cite SEMPRE a legislação aplicável (Lei 8.213/91, Decreto 3.048/99)
- Use linguagem técnica mas acessível
- Quando não souber, diga claramente
- NÃO invente jurisprudência

## FORMATO PADRÃO
- Use tópicos e subtópicos
- Destaque artigos de lei em **negrito**
- Inclua referências ao final

## LIMITAÇÕES
- Não dê conselhos definitivos sem análise do caso concreto
- Sempre sugira consultar advogado para casos específicos
- Não faça cálculos previdenciários complexos sem dados completos</code></pre>

            <h3>Passo 3: Adicionar Knowledge Base</h3>
            <p>Faça upload de documentos relevantes:</p>
            <ul style="margin:12px 0 12px 24px;color:var(--text-secondary);">
                <li><strong>Legislação:</strong> Lei 8.213/91, Decreto 3.048/99, IN INSS</li>
                <li><strong>Jurisprudência:</strong> Súmulas do STJ, TNU, precedentes selecionados</li>
                <li><strong>Doutrina:</strong> Trechos de manuais, artigos relevantes</li>
                <li><strong>Templates:</strong> Modelos de petições, pareceres, relatórios</li>
            </ul>

            <div class="callout callout-warning">
                <div class="callout-title">Boas Práticas para Knowledge Base</div>
                <ul style="margin-top: 0.5rem;">
                    <li><strong>Nomeie bem os arquivos</strong> — nomes descritivos ajudam o Claude a encontrar o conteúdo certo</li>
                    <li><strong>Agrupe por tema</strong> — documentos relacionados no mesmo projeto</li>
                    <li><strong>Prefira texto selecionável</strong> — PDFs nativos funcionam melhor que escaneados</li>
                    <li><strong>Atualize periodicamente</strong> — remova documentos obsoletos</li>
                </ul>
            </div>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Casos de Uso Jurídicos</h2>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
                <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px;">
                    <h4 style="color: var(--primary); margin-bottom: 0.75rem;">Assistente de Área</h4>
                    <p style="font-size: 0.9rem; margin-bottom: 0.5rem;">Project especializado em uma área do direito (previdenciário, trabalhista, tributário).</p>
                    <p style="font-size: 0.85rem; color: var(--text-muted);"><strong>Knowledge:</strong> Legislação + súmulas + precedentes da área</p>
                </div>
                <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px;">
                    <h4 style="color: var(--primary); margin-bottom: 0.75rem;">Banco de Precedentes</h4>
                    <p style="font-size: 0.9rem; margin-bottom: 0.5rem;">Project com jurisprudência organizada para pesquisa rápida.</p>
                    <p style="font-size: 0.85rem; color: var(--text-muted);"><strong>Knowledge:</strong> Acórdãos categorizados por tema</p>
                </div>
                <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px;">
                    <h4 style="color: var(--primary); margin-bottom: 0.75rem;">Gerador de Documentos</h4>
                    <p style="font-size: 0.9rem; margin-bottom: 0.5rem;">Project com templates de petições e prompts de escrita.</p>
                    <p style="font-size: 0.85rem; color: var(--text-muted);"><strong>Knowledge:</strong> Modelos + guia de estilo</p>
                </div>
                <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px;">
                    <h4 style="color: var(--primary); margin-bottom: 0.75rem;">Análise de Processos</h4>
                    <p style="font-size: 0.9rem; margin-bottom: 0.5rem;">Project com FIRAC+ e prompts de análise pré-configurados.</p>
                    <p style="font-size: 0.85rem; color: var(--text-muted);"><strong>Instructions:</strong> Metodologia FIRAC+ completa</p>
                </div>
            </div>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Limites por Plano</h2>

            <div class="table-wrapper">
                <table>
                    <thead><tr><th>Plano</th><th>Projects</th><th>RAG</th><th>Compartilhamento</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Free</strong></td><td>5 projects</td><td>Não</td><td>Não</td></tr>
                        <tr><td><strong>Pro ($20/mês)</strong></td><td>Ilimitados</td><td>Sim (10x)</td><td>Não</td></tr>
                        <tr><td><strong>Max ($100/mês)</strong></td><td>Ilimitados</td><td>Sim (10x)</td><td>Não</td></tr>
                        <tr><td><strong>Team ($25/usuário)</strong></td><td>Ilimitados</td><td>Sim (10x)</td><td>Sim</td></tr>
                        <tr><td><strong>Enterprise</strong></td><td>Ilimitados</td><td>Sim (10x+)</td><td>Sim + Admin</td></tr>
                    </tbody>
                </table>
            </div>
        `,
        exercise: {
            title: "Criando seu Primeiro Project Jurídico",
            icon: "🗂️",
            description: "Configure um Project completo para uma área do direito que você atua.",
            steps: [
                { title: "Criar o Project", items: ["Acesse claude.ai e crie um novo Project", "Escolha um nome descritivo para sua área de atuação", "Ex: 'Assistente Trabalhista', 'Análise de Contratos Imobiliários'"] },
                { title: "Escrever Custom Instructions", items: ["Defina a IDENTIDADE do assistente", "Estabeleça COMPORTAMENTOS específicos", "Configure FORMATO PADRÃO de respostas", "Liste LIMITAÇÕES claras"] },
                { title: "Montar a Knowledge Base", items: ["Faça upload de 3-5 documentos essenciais da área", "Inclua: legislação principal, súmulas relevantes, modelo de documento", "Nomeie os arquivos de forma descritiva"] },
                { title: "Testar o Project", items: ["Faça 3 perguntas diferentes sobre a área", "Verifique se o Claude usa os documentos da Knowledge Base", "Ajuste as instructions se necessário"] }
            ],
            checklist: [
                "Entendo a diferença entre Chat simples e Project",
                "Sei o que é RAG e quando ele é ativado automaticamente",
                "Criei um Project com Custom Instructions específicas",
                "Adicionei documentos relevantes à Knowledge Base",
                "Testei o Project e verifiquei que funciona como esperado"
            ]
        },
        tip: "Comece com um Project <strong>pequeno e específico</strong>. É melhor ter um assistente excelente em uma área do que um medíocre em várias. Você pode criar múltiplos Projects para diferentes necessidades.",
        warning: "<strong>\"Vou colocar todos os meus documentos em um único Project.\"</strong><br>Cuidado! Projects muito grandes podem ter respostas menos precisas. Separe por área temática e mantenha cada Project focado."
    },

    "3.2": {
        number: "3.2",
        module: "Módulo 3 — Técnicas Avançadas",
        title: "Deep Research",
        objective: "Compreender a lógica de pesquisas profundas com LLMs e dominar o uso de prompts de pesquisa estruturada.",
        content: `
            <h2>O que é Deep Research?</h2>
            <p><strong>Deep Research</strong> é uma metodologia de pesquisa em que o LLM executa um <strong>processo multi-etapas</strong>: decompõe a pergunta, faz múltiplas buscas, sintetiza informações de várias fontes e gera um relatório estruturado com citações.</p>

            <div class="callout callout-info">
                <div class="callout-title">Pesquisa Simples vs. Deep Research</div>
                <table style="width:100%; margin-top: 0.5rem;">
                    <tr>
                        <td style="padding: 0.5rem;"><strong>Pesquisa Simples</strong></td>
                        <td style="padding: 0.5rem;">Uma pergunta → uma busca → uma resposta</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem;"><strong>Deep Research</strong></td>
                        <td style="padding: 0.5rem;">Pergunta complexa → decomposição → múltiplas buscas → síntese crítica → relatório com fontes</td>
                    </tr>
                </table>
            </div>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Como Funciona o Deep Research</h2>

            <div style="display: grid; gap: 1rem; margin: 1.5rem 0;">
                <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px; border-left: 4px solid #10b981;">
                    <h4 style="color: #10b981; margin-bottom: 0.5rem;">1. Decomposição da Pergunta</h4>
                    <p style="font-size: 0.95rem;">O modelo analisa a pergunta complexa e a divide em <strong>sub-perguntas</strong> mais específicas que podem ser pesquisadas individualmente.</p>
                </div>
                <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px; border-left: 4px solid var(--gold);">
                    <h4 style="color: var(--gold); margin-bottom: 0.5rem;">2. Pesquisa Iterativa</h4>
                    <p style="font-size: 0.95rem;">Para cada sub-pergunta, executa <strong>múltiplas buscas</strong>, avalia os resultados e decide se precisa de mais informações ou se pode prosseguir.</p>
                </div>
                <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px; border-left: 4px solid #8b5cf6;">
                    <h4 style="color: #8b5cf6; margin-bottom: 0.5rem;">3. Síntese Crítica</h4>
                    <p style="font-size: 0.95rem;">Analisa as informações coletadas, identifica <strong>convergências e divergências</strong>, e constrói uma narrativa coerente.</p>
                </div>
                <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px; border-left: 4px solid var(--primary);">
                    <h4 style="color: var(--primary); margin-bottom: 0.5rem;">4. Relatório com Citações</h4>
                    <p style="font-size: 0.95rem;">Gera um <strong>documento estruturado</strong> com as descobertas, incluindo referências verificáveis para cada afirmação.</p>
                </div>
            </div>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Plataformas com Deep Research Nativo</h2>

            <div class="table-wrapper">
                <table>
                    <thead><tr><th>Plataforma</th><th>Características</th><th>Tempo Médio</th><th>Fontes Citadas</th></tr></thead>
                    <tbody>
                        <tr><td><strong>ChatGPT</strong></td><td>Modelo o3/o4-mini, análise profunda</td><td>20-30 min</td><td>20-50</td></tr>
                        <tr><td><strong>Gemini</strong></td><td>Plano de pesquisa revisável, integração Google</td><td>10-20 min</td><td>Variável</td></tr>
                        <tr><td><strong>Perplexity</strong></td><td>Velocidade, múltiplos LLMs simultâneos</td><td>2-4 min</td><td>100-300</td></tr>
                        <tr><td><strong>Claude</strong></td><td>Web search + análise cuidadosa</td><td>5-15 min</td><td>10-30</td></tr>
                    </tbody>
                </table>
            </div>

            <div class="callout callout-warning">
                <div class="callout-title">Claude e Deep Research</div>
                <p>O Claude não tem um recurso "Deep Research" com esse nome, mas oferece <strong>web search</strong> integrado (planos pagos). Você pode simular Deep Research usando o <strong>Metaprompt de Pesquisa Profunda</strong> apresentado a seguir.</p>
            </div>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Quando Usar Deep Research</h2>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
                <div style="background: #f0fdf4; padding: 1.25rem; border-radius: 8px; border-left: 4px solid #16a34a;">
                    <h4 style="color: #16a34a; margin-bottom: 0.75rem;">Ideal Para</h4>
                    <ul style="font-size: 0.9rem; color: #666; margin-left: 1rem;">
                        <li>Mapeamento de jurisprudência temática</li>
                        <li>Pesquisa doutrinária abrangente</li>
                        <li>Due diligence documental</li>
                        <li>Análise de mercado/setor</li>
                        <li>Relatórios de compliance</li>
                    </ul>
                </div>
                <div style="background: #fef2f2; padding: 1.25rem; border-radius: 8px; border-left: 4px solid #dc2626;">
                    <h4 style="color: #dc2626; margin-bottom: 0.75rem;">Não Indicado Para</h4>
                    <ul style="font-size: 0.9rem; color: #666; margin-left: 1rem;">
                        <li>Perguntas simples e diretas</li>
                        <li>Análise de documento específico</li>
                        <li>Tarefas que exigem rapidez</li>
                        <li>Informações confidenciais</li>
                    </ul>
                </div>
            </div>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Metaprompt de Pesquisa Profunda</h2>
            <p>Use este prompt para conduzir pesquisas estruturadas no Claude (com web search ativado) ou em outras plataformas:</p>

            <pre style="background: #1a1a2e; color: #eee; padding: 1.5rem; border-radius: 8px; overflow-x: auto; font-size: 0.85rem; max-height: 500px; overflow-y: auto;"><code># Metaprompt de Pesquisa Profunda (Deep Research)

&lt;persona&gt;
Você é um PESQUISADOR ESPECIALIZADO em investigação sistemática,
com expertise em metodologia de pesquisa, análise crítica de fontes
e síntese de informações complexas.
&lt;/persona&gt;

&lt;objetivo&gt;
Conduza uma PESQUISA PROFUNDA sobre o tema fornecido pelo usuário,
seguindo metodologia estruturada em 4 fases:

## FASE 1: DECOMPOSIÇÃO
- Analise a pergunta principal
- Identifique 3-5 sub-perguntas específicas que precisam ser respondidas
- Liste termos-chave e variações para busca
- Apresente o plano de pesquisa antes de executar

## FASE 2: INVESTIGAÇÃO
Para cada sub-pergunta:
- Realize buscas com diferentes termos
- Identifique fontes primárias e secundárias
- Registre informações relevantes com citação da fonte
- Avalie a credibilidade de cada fonte

## FASE 3: ANÁLISE CRÍTICA
- Identifique CONVERGÊNCIAS (pontos em que as fontes concordam)
- Identifique DIVERGÊNCIAS (pontos de desacordo ou controvérsia)
- Avalie a QUALIDADE das evidências encontradas
- Identifique LACUNAS (o que não foi possível descobrir)

## FASE 4: SÍNTESE
- Construa narrativa coerente respondendo à pergunta original
- Organize por subtemas ou cronologicamente
- Inclua citações verificáveis para cada afirmação factual
- Apresente conclusões com grau de confiança
&lt;/objetivo&gt;

&lt;estilo&gt;
Tom ACADÊMICO e OBJETIVO. Linguagem clara e precisa.
Sempre que afirmar um fato, cite a fonte.
Admita incertezas quando existirem.
Diferencie FATOS de INTERPRETAÇÕES.
&lt;/estilo&gt;

&lt;modelo&gt;
&lt;formato_saida&gt;
## PLANO DE PESQUISA
**Pergunta Principal:** \`[reformular a pergunta do usuário]\`

**Sub-perguntas:**
1. \`[sub-pergunta 1]\`
2. \`[sub-pergunta 2]\`
3. \`[sub-pergunta 3]\`

**Termos de busca:** \`[lista de termos]\`

---

## DESCOBERTAS

### \`[Subtema 1]\`
\`[Síntese das descobertas com citações]\`

**Fontes:** \`[lista de fontes consultadas]\`

### \`[Subtema 2]\`
\`[Síntese das descobertas com citações]\`

**Fontes:** \`[lista de fontes consultadas]\`

---

## ANÁLISE CRÍTICA

### Convergências
\`[Pontos em que as fontes concordam]\`

### Divergências
\`[Pontos de desacordo ou controvérsia]\`

### Lacunas
\`[O que não foi possível descobrir]\`

---

## CONCLUSÃO
\`[Resposta sintetizada à pergunta original]\`

**Grau de confiança:** \`[Alto/Médio/Baixo - com justificativa]\`

---

## REFERÊNCIAS
\`[Lista completa de fontes consultadas, com URLs quando disponíveis]\`
&lt;/formato_saida&gt;
&lt;/modelo&gt;

&lt;adicionais&gt;
**Critérios de qualidade das fontes:**
- Priorize fontes primárias (legislação, jurisprudência, documentos oficiais)
- Verifique data de publicação (preferir fontes recentes)
- Avalie autoridade do autor/instituição
- Cruze informações entre múltiplas fontes

**IMPORTANTE:**
- Cite TODAS as fontes consultadas
- NÃO invente informações ou referências
- Admita quando não encontrar informação suficiente
- Diferencie consenso de opinião minoritária
&lt;/adicionais&gt;</code></pre>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Aplicações Jurídicas do Deep Research</h2>

            <div class="table-wrapper">
                <table>
                    <thead><tr><th>Aplicação</th><th>Pergunta Exemplo</th><th>Resultado Esperado</th></tr></thead>
                    <tbody>
                        <tr>
                            <td><strong>Mapeamento Jurisprudencial</strong></td>
                            <td>"Qual a evolução da jurisprudência do STJ sobre dano moral em atraso de voo nos últimos 5 anos?"</td>
                            <td>Cronologia de decisões, valores médios, critérios aplicados</td>
                        </tr>
                        <tr>
                            <td><strong>Pesquisa Doutrinária</strong></td>
                            <td>"Quais são as principais posições doutrinárias sobre a natureza jurídica do bitcoin no Brasil?"</td>
                            <td>Mapeamento de autores, correntes, argumentos</td>
                        </tr>
                        <tr>
                            <td><strong>Due Diligence</strong></td>
                            <td>"Quais são os principais riscos regulatórios para fintechs de crédito no Brasil em 2025?"</td>
                            <td>Normas aplicáveis, precedentes, tendências regulatórias</td>
                        </tr>
                        <tr>
                            <td><strong>Compliance</strong></td>
                            <td>"Quais são as obrigações de compliance ambiental para indústrias químicas no estado de SP?"</td>
                            <td>Checklist regulatório, órgãos fiscalizadores, sanções</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="callout callout-tip">
                <div class="callout-title">Dica: Perguntas que Funcionam Bem</div>
                <p>Deep Research funciona melhor com perguntas que:</p>
                <ul style="margin-top: 0.5rem;">
                    <li>Pedem <strong>mapeamento</strong> ou <strong>evolução</strong> de algo</li>
                    <li>Envolvem <strong>comparação</strong> entre posições ou jurisdições</li>
                    <li>Requerem <strong>síntese</strong> de múltiplas fontes</li>
                    <li>Têm escopo definido mas não trivial</li>
                </ul>
            </div>
        `,
        exercise: {
            title: "Conduzindo uma Pesquisa Profunda",
            icon: "🔬",
            description: "Use o Metaprompt de Pesquisa Profunda para investigar um tema jurídico relevante para sua prática.",
            steps: [
                { title: "Escolha o Tema", items: ["Selecione uma questão jurídica que você precisa pesquisar", "Formule como pergunta específica mas não trivial", "Ex: 'Qual a jurisprudência atual sobre responsabilidade de plataformas digitais por conteúdo de terceiros?'"] },
                { title: "Execute o Metaprompt", items: ["Copie o Metaprompt de Pesquisa Profunda", "Cole no Claude (com web search) ou outra plataforma", "Adicione sua pergunta ao final", "Aguarde a pesquisa completa (pode demorar alguns minutos)"] },
                { title: "Avalie o Resultado", items: ["O plano de pesquisa faz sentido?", "As fontes citadas são verificáveis?", "As convergências e divergências estão claras?", "A conclusão responde sua pergunta original?"] },
                { title: "Verifique as Fontes", items: ["Acesse pelo menos 3 fontes citadas", "Confirme que as informações estão corretas", "Identifique se há fontes importantes que faltaram"] }
            ],
            checklist: [
                "Entendo a diferença entre pesquisa simples e Deep Research",
                "Sei quando usar Deep Research (e quando não usar)",
                "Conheço as plataformas que oferecem Deep Research nativo",
                "Sei usar o Metaprompt de Pesquisa Profunda",
                "Consigo avaliar a qualidade de uma pesquisa gerada por IA"
            ]
        },
        tip: "Para pesquisas jurídicas, <strong>sempre verifique as fontes primárias</strong>. O Deep Research é excelente para mapear o terreno, mas a citação final deve vir da sua verificação direta da jurisprudência ou legislação.",
        warning: "<strong>\"O Deep Research substituiu minha pesquisa manual.\"</strong><br>Cuidado! Deep Research é ferramenta de <em>apoio</em>, não substituição. Ele acelera o mapeamento inicial, mas você ainda precisa validar as fontes e aprofundar os pontos críticos."
    },

    "3.3": {
        number: "3.3",
        module: "Módulo 3 — Técnicas Avançadas",
        title: "Metaprompt de Análise",
        objective: "Dominar o prompt que gera prompts de análise, permitindo criar novos prompts estruturados P.O.E.M.A. sob demanda.",
        content: `
            <h2>O que é um Metaprompt?</h2>
            <p>Um <strong>Metaprompt</strong> é um prompt que gera outros prompts. Em vez de criar cada prompt do zero, você usa o metaprompt para produzir prompts customizados de forma consistente e escalável.</p>

            <div class="callout callout-info">
                <div class="callout-title">Analogia: Fábrica de Prompts</div>
                <p>Pense no metaprompt como uma <strong>fábrica</strong>: você fornece os requisitos (tipo de análise, objetivo, critérios) e a fábrica produz um prompt pronto para uso, seguindo sempre o mesmo padrão de qualidade.</p>
            </div>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Por que Usar Metaprompts?</h2>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 1.5rem 0;">
                <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px; border-left: 4px solid #10b981;">
                    <h4 style="color: #10b981; margin-bottom: 0.5rem;">Escalabilidade</h4>
                    <p style="font-size: 0.9rem;">Crie dezenas de prompts especializados sem reescrever a estrutura toda vez.</p>
                </div>
                <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px; border-left: 4px solid var(--gold);">
                    <h4 style="color: var(--gold); margin-bottom: 0.5rem;">Consistência</h4>
                    <p style="font-size: 0.9rem;">Todos os prompts gerados seguem o mesmo framework (P.O.E.M.A.) e incluem guardrails.</p>
                </div>
                <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px; border-left: 4px solid #8b5cf6;">
                    <h4 style="color: #8b5cf6; margin-bottom: 0.5rem;">Customização</h4>
                    <p style="font-size: 0.9rem;">Cada prompt é adaptado ao caso específico, mantendo a estrutura base.</p>
                </div>
                <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px; border-left: 4px solid var(--primary);">
                    <h4 style="color: var(--primary); margin-bottom: 0.5rem;">Velocidade</h4>
                    <p style="font-size: 0.9rem;">Gerar um prompt customizado leva segundos, não minutos.</p>
                </div>
            </div>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Fluxo de Trabalho</h2>

            <div style="display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; margin: 1.5rem 0;">
                <div style="background: var(--primary); color: white; padding: 1rem 1.5rem; border-radius: 8px; text-align: center;">
                    <strong>1. Descreva</strong><br>
                    <span style="font-size: 0.85rem;">sua necessidade</span>
                </div>
                <div style="display: flex; align-items: center; font-size: 1.5rem;">→</div>
                <div style="background: var(--gold); color: white; padding: 1rem 1.5rem; border-radius: 8px; text-align: center;">
                    <strong>2. Metaprompt</strong><br>
                    <span style="font-size: 0.85rem;">gera o prompt</span>
                </div>
                <div style="display: flex; align-items: center; font-size: 1.5rem;">→</div>
                <div style="background: #10b981; color: white; padding: 1rem 1.5rem; border-radius: 8px; text-align: center;">
                    <strong>3. Aplique</strong><br>
                    <span style="font-size: 0.85rem;">ao documento</span>
                </div>
            </div>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Metaprompt de Análise Jurídica</h2>
            <p>Use este metaprompt para gerar prompts de análise customizados seguindo o framework P.O.E.M.A.:</p>

            <pre style="background: #1a1a2e; color: #eee; padding: 1.5rem; border-radius: 8px; overflow-x: auto; font-size: 0.85rem; max-height: 600px; overflow-y: auto;"><code># Metaprompt de Análise Jurídica (Framework P.O.E.M.A.)

&lt;persona&gt;
Você é um ENGENHEIRO DE PROMPTS ESPECIALIZADO em criar prompts
jurídicos de alta qualidade, seguindo rigorosamente o framework
P.O.E.M.A. (Persona, Objetivo, Estilo, Modelo, Adicionais).
&lt;/persona&gt;

&lt;objetivo&gt;
Sua tarefa é GERAR UM PROMPT DE ANÁLISE completo e estruturado
com base nas especificações fornecidas pelo usuário.

O prompt gerado deve:
1. Seguir rigorosamente a estrutura P.O.E.M.A.
2. Incluir guardrails anti-alucinação
3. Definir formato de saída claro
4. Ser pronto para uso imediato

**PERGUNTAS PARA O USUÁRIO:**
Antes de gerar o prompt, preciso saber:
1. Que tipo de documento será analisado? (contrato, petição, sentença, etc.)
2. Qual o objetivo da análise? (identificar riscos, extrair informações, etc.)
3. Qual o público-alvo do resultado? (juiz, cliente, equipe interna)
4. Há critérios específicos que devem ser avaliados?
5. Qual o formato de saída desejado? (tabela, lista, texto corrido)
&lt;/objetivo&gt;

&lt;estilo&gt;
Gere o prompt em formato MARKDOWN com delimitadores XML.
Use linguagem técnica e precisa.
Inclua exemplos de placeholders quando apropriado.
&lt;/estilo&gt;

&lt;modelo&gt;
**Estrutura obrigatória do prompt gerado:**

\`\`\`markdown
# Prompt de Análise: [NOME DESCRITIVO]

&lt;persona&gt;
[Definir expertise específica para este tipo de análise]
[Incluir conhecimentos técnicos relevantes]
&lt;/persona&gt;

&lt;objetivo&gt;
[Tarefa principal claramente definida]
[Instruções de leitura/processamento]
[O que deve ser extraído/avaliado]
&lt;/objetivo&gt;

&lt;estilo&gt;
[Tom: profissional, técnico, didático, etc.]
[Nível de detalhe esperado]
[Instrução de início (prefill)]
&lt;/estilo&gt;

&lt;modelo&gt;
[Metodologia de análise, se aplicável]

&lt;formato_saida&gt;
[Estrutura exata que o output deve seguir]
[Usar placeholders em MAIÚSCULAS para variáveis]
&lt;/formato_saida&gt;
&lt;/modelo&gt;

&lt;adicionais&gt;
**Guardrails de fidelidade:**
- USE EXCLUSIVAMENTE informações do documento fornecido
- NUNCA invente dados, IDs, datas ou valores
- Lacunas devem ser marcadas: \`[NÃO CONSTA NO DOCUMENTO]\`

**Critérios de qualidade:**
[Lista de critérios específicos para este tipo de análise]
&lt;/adicionais&gt;
\`\`\`
&lt;/modelo&gt;

&lt;adicionais&gt;
**Regras para geração:**
1. SEMPRE inclua guardrails anti-alucinação
2. SEMPRE defina formato de saída estruturado
3. Use técnica do Nome Único (ex: FIRAC+ em vez de FIRAC)
4. Inclua checklist de qualidade quando apropriado
5. Adapte a persona ao tipo específico de documento/análise

**Exemplos de tipos de análise:**
- Análise de risco contratual
- Avaliação de mérito processual
- Checklist de conformidade
- Mapeamento de responsabilidades
- Identificação de nulidades
- Análise de prescrição/decadência
&lt;/adicionais&gt;</code></pre>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Exemplo de Uso</h2>

            <h3>Input do Usuário:</h3>
            <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; font-size: 0.9rem;"><code>Preciso de um prompt para analisar contratos de locação comercial,
identificando cláusulas de risco para o locatário.
O resultado deve ser uma tabela com a cláusula, o risco e sugestão de alteração.
Público: cliente empresário que vai assinar o contrato.</code></pre>

            <h3>Output Gerado pelo Metaprompt:</h3>
            <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; font-size: 0.85rem; max-height: 400px; overflow-y: auto;"><code># Prompt de Análise: Riscos em Contrato de Locação Comercial

&lt;persona&gt;
Você é um ADVOGADO ESPECIALISTA em direito imobiliário empresarial,
com expertise em contratos de locação comercial e proteção ao locatário.
&lt;/persona&gt;

&lt;objetivo&gt;
Analise o CONTRATO DE LOCAÇÃO COMERCIAL fornecido, identificando
todas as cláusulas que representam RISCO para o LOCATÁRIO.

Para cada cláusula de risco, avalie:
- O texto literal da cláusula
- O tipo e gravidade do risco
- Sugestão de alteração protetiva

Leia o contrato INTEGRALMENTE antes de iniciar a análise.
&lt;/objetivo&gt;

&lt;estilo&gt;
Tom PROFISSIONAL mas ACESSÍVEL a empresário não-jurista.
Evite jargões desnecessários.
Comece diretamente com a tabela de riscos.
&lt;/estilo&gt;

&lt;modelo&gt;
&lt;formato_saida&gt;
## ANÁLISE DE RISCOS - LOCAÇÃO COMERCIAL

| Cláusula | Texto Resumido | Risco | Gravidade | Sugestão de Alteração |
|----------|----------------|-------|-----------|----------------------|
| \`Nº\` | \`Resumo\` | \`Descrição\` | \`Alta/Média/Baixa\` | \`Proposta\` |

---

## RESUMO EXECUTIVO
\`[Síntese dos principais riscos e recomendação geral]\`

## PONTOS DE ATENÇÃO IMEDIATA
\`[Lista dos riscos de gravidade ALTA que exigem negociação]\`
&lt;/formato_saida&gt;
&lt;/modelo&gt;

&lt;adicionais&gt;
**Guardrails de fidelidade:**
- USE EXCLUSIVAMENTE o texto do contrato fornecido
- NÃO invente cláusulas ou números
- Cite o número exato de cada cláusula analisada

**Critérios de risco a avaliar:**
1. Reajuste desproporcional (índices, periodicidade)
2. Multas excessivas por rescisão
3. Responsabilidades desproporcionais (reformas, IPTU, condomínio)
4. Renúncia a direitos do locatário
5. Cláusulas de desocupação sem garantias
6. Ausência de direito à renovatória
&lt;/adicionais&gt;</code></pre>

            <div class="callout callout-tip">
                <div class="callout-title">Dica: Iteração</div>
                <p>Se o prompt gerado não ficar exatamente como você quer, peça ajustes: "Adicione um campo para fundamentação legal" ou "Mude o formato para lista numerada em vez de tabela".</p>
            </div>
        `,
        exercise: {
            title: "Gerando um Prompt de Análise Customizado",
            icon: "🏭",
            description: "Use o Metaprompt de Análise para criar um prompt específico para uma necessidade real do seu trabalho.",
            steps: [
                { title: "Identifique a Necessidade", items: ["Pense em um tipo de documento que você analisa frequentemente", "Defina qual informação precisa extrair", "Determine quem vai usar o resultado da análise"] },
                { title: "Use o Metaprompt", items: ["Copie o Metaprompt de Análise Jurídica", "Cole no Claude e responda às perguntas", "Descreva sua necessidade com detalhes"] },
                { title: "Avalie o Prompt Gerado", items: ["O prompt segue a estrutura P.O.E.M.A.?", "Os guardrails anti-alucinação estão presentes?", "O formato de saída atende sua necessidade?"] },
                { title: "Teste com Documento Real", items: ["Aplique o prompt gerado a um documento real", "Verifique se o output está no formato esperado", "Ajuste o prompt se necessário"] }
            ],
            checklist: [
                "Entendo o conceito de metaprompt (prompt que gera prompts)",
                "Sei usar o Metaprompt de Análise Jurídica",
                "Consigo descrever minha necessidade de forma clara",
                "Sei avaliar se o prompt gerado está adequado",
                "Gerei pelo menos um prompt de análise customizado"
            ]
        },
        tip: "Mantenha uma <strong>biblioteca de prompts gerados</strong>. Cada vez que usar o metaprompt, salve o resultado. Com o tempo, você terá uma coleção de prompts prontos para diferentes situações.",
        warning: "<strong>\"O metaprompt sempre gera prompts perfeitos.\"</strong><br>Não necessariamente. O metaprompt gera um bom ponto de partida, mas você deve revisar e ajustar conforme sua necessidade específica. Trate como rascunho de alta qualidade, não como produto final."
    },

    "3.4": {
        number: "3.4",
        module: "Módulo 3 — Técnicas Avançadas",
        title: "Metaprompt de Escrita",
        objective: "Dominar o prompt que gera prompts de escrita jurídica, criando templates de documentos com placeholders e guardrails.",
        content: `
            <h2>Análise vs. Escrita: Qual a Diferença?</h2>

            <div class="table-wrapper">
                <table>
                    <thead><tr><th>Aspecto</th><th>Prompt de Análise</th><th>Prompt de Escrita</th></tr></thead>
                    <tbody>
                        <tr><td><strong>Objetivo</strong></td><td>Extrair informações</td><td>Produzir documento</td></tr>
                        <tr><td><strong>Foco</strong></td><td>Qualidade do conhecimento</td><td>Qualidade do estilo</td></tr>
                        <tr><td><strong>Formato</strong></td><td>Estruturado (tabelas, listas)</td><td>Texto corrido (jurídico)</td></tr>
                        <tr><td><strong>Técnica-chave</strong></td><td>Perguntas diretrizes</td><td>Placeholders + prefill</td></tr>
                        <tr><td><strong>Guardrails</strong></td><td>Anti-alucinação</td><td>Fidelidade documental</td></tr>
                    </tbody>
                </table>
            </div>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Características do Prompt de Escrita</h2>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
                <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px; border-left: 4px solid var(--gold);">
                    <h4 style="color: var(--gold); margin-bottom: 0.5rem;">Placeholders Estruturados</h4>
                    <p style="font-size: 0.9rem;">Variáveis em MAIÚSCULAS entre backticks que indicam onde inserir informações específicas.</p>
                    <code style="font-size: 0.85rem;">\`NOME DA PARTE AUTORA EM MAIÚSCULAS\`</code>
                </div>
                <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px; border-left: 4px solid #10b981;">
                    <h4 style="color: #10b981; margin-bottom: 0.5rem;">Prefill (Instrução de Início)</h4>
                    <p style="font-size: 0.9rem;">Diz ao modelo como começar o texto, eliminando preâmbulos desnecessários.</p>
                    <code style="font-size: 0.85rem;">"Comece com: RELATÓRIO"</code>
                </div>
                <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px; border-left: 4px solid #8b5cf6;">
                    <h4 style="color: #8b5cf6; margin-bottom: 0.5rem;">Fidelidade Documental</h4>
                    <p style="font-size: 0.9rem;">Guardrails específicos para garantir que o texto seja baseado apenas nos documentos fornecidos.</p>
                </div>
                <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px; border-left: 4px solid var(--primary);">
                    <h4 style="color: var(--primary); margin-bottom: 0.5rem;">Controle de Estilo</h4>
                    <p style="font-size: 0.9rem;">Instruções sobre tom, formalidade, estrutura de parágrafos e terminologia.</p>
                </div>
            </div>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Metaprompt de Escrita Jurídica</h2>
            <p>Use este metaprompt para gerar prompts de escrita customizados:</p>

            <pre style="background: #1a1a2e; color: #eee; padding: 1.5rem; border-radius: 8px; overflow-x: auto; font-size: 0.85rem; max-height: 600px; overflow-y: auto;"><code># Metaprompt de Escrita Jurídica (Framework P.O.E.M.A.)

&lt;persona&gt;
Você é um ENGENHEIRO DE PROMPTS ESPECIALIZADO em criar prompts
de ESCRITA JURÍDICA de alta qualidade, seguindo o framework
P.O.E.M.A. com foco em fidelidade documental e controle de estilo.
&lt;/persona&gt;

&lt;objetivo&gt;
Sua tarefa é GERAR UM PROMPT DE ESCRITA completo e estruturado
com base nas especificações fornecidas pelo usuário.

O prompt gerado deve:
1. Seguir rigorosamente a estrutura P.O.E.M.A.
2. Incluir PLACEHOLDERS estruturados para variáveis
3. Definir PREFILL (instrução de início)
4. Incluir guardrails de FIDELIDADE DOCUMENTAL
5. Especificar ESTILO e TOM do documento

**PERGUNTAS PARA O USUÁRIO:**
Antes de gerar o prompt, preciso saber:
1. Que tipo de documento será gerado? (petição, sentença, parecer, contrato, etc.)
2. Qual o estilo esperado? (formal judicial, acessível, técnico, etc.)
3. O documento será baseado em outros documentos? Quais?
4. Qual a estrutura típica deste documento?
5. Há algum modelo ou exemplo a seguir?
6. Qual o público-alvo? (juiz, cliente, órgão administrativo)
&lt;/objetivo&gt;

&lt;estilo&gt;
Gere o prompt em formato MARKDOWN com delimitadores XML.
Use placeholders em MAIÚSCULAS entre backticks.
Inclua prefill explícito.
&lt;/estilo&gt;

&lt;modelo&gt;
**Estrutura obrigatória do prompt gerado:**

\`\`\`markdown
# Prompt de Escrita: [NOME DO DOCUMENTO]

&lt;persona&gt;
[Definir expertise em escrita jurídica]
[Conhecimento do tipo de documento específico]
&lt;/persona&gt;

&lt;objetivo&gt;
[Tarefa: elaborar/redigir o documento]
[Baseado em quais documentos]
[Instruções de leitura prévia]
&lt;/objetivo&gt;

&lt;estilo&gt;
[Tom: formal, acessível, técnico]
[Características do estilo de escrita]
[Prefill: como começar o documento]
[Instrução sobre texto corrido vs. tópicos]
&lt;/estilo&gt;

&lt;modelo&gt;
## INSTRUÇÕES METODOLÓGICAS
[Princípios de fidelidade documental]
[Protocolo de leitura]

## ESTRUTURA DO DOCUMENTO
&lt;formato_saida&gt;
[TÍTULO DO DOCUMENTO]

\`SEÇÃO 1 EM MAIÚSCULAS\`

\`PLACEHOLDER COM INSTRUÇÕES SOBRE O QUE PREENCHER\`

\`SEÇÃO 2\`

\`PLACEHOLDER\`

[Continuar com estrutura completa do documento]
&lt;/formato_saida&gt;
&lt;/modelo&gt;

&lt;adicionais&gt;
**Guardrails de fidelidade:**
- Use dados ESTRITAMENTE referenciados nos documentos
- USE APENAS IDs existentes no documento fornecido
- **NUNCA INVENTE** IDs, datas, valores ou nomes
- Se não constar, indicar: \`[NÃO CONSTA NOS AUTOS]\`

**Qualidade da escrita:**
- Linguagem técnico-jurídica adequada
- Parágrafos conectados organicamente
- Sem redundâncias
&lt;/adicionais&gt;
\`\`\`
&lt;/modelo&gt;

&lt;adicionais&gt;
**Regras para geração de prompts de escrita:**
1. SEMPRE use placeholders para variáveis do documento
2. SEMPRE inclua prefill (instrução de início)
3. SEMPRE inclua guardrails de fidelidade documental
4. Adapte a estrutura ao tipo específico de documento
5. Inclua instruções sobre texto corrido (sem bullets quando apropriado)

**Tipos de documento comuns:**
- Petição inicial, contestação, réplica
- Sentença, acórdão, decisão interlocutória
- Parecer jurídico, memorando
- Contrato, aditivo, distrato
- Relatório, voto, ementa

**Técnica de placeholders:**
- Use backticks: \`NOME DA PARTE\`
- Use MAIÚSCULAS para destaque
- Inclua instrução dentro do placeholder
- Ex: \`DESCREVER OS FATOS EM ORDEM CRONOLÓGICA\`
&lt;/adicionais&gt;</code></pre>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Exemplo de Uso</h2>

            <h3>Input do Usuário:</h3>
            <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; font-size: 0.9rem;"><code>Preciso de um prompt para gerar pareceres jurídicos sobre
consultas trabalhistas. O parecer deve ter: síntese da consulta,
análise jurídica, e conclusão com recomendação.
Estilo formal mas acessível para cliente empresário.
Será baseado na descrição do caso enviada pelo cliente.</code></pre>

            <h3>Output Gerado pelo Metaprompt:</h3>
            <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; font-size: 0.85rem; max-height: 400px; overflow-y: auto;"><code># Prompt de Escrita: Parecer Trabalhista

&lt;persona&gt;
Você é um ADVOGADO TRABALHISTA SÊNIOR especializado em consultoria
empresarial, com expertise em elaboração de pareceres jurídicos
claros e objetivos para clientes corporativos.
&lt;/persona&gt;

&lt;objetivo&gt;
Elabore um PARECER JURÍDICO completo sobre a consulta trabalhista
descrita pelo cliente, seguindo a estrutura modelo apresentada.

Leia integralmente a descrição do caso antes de iniciar a redação.
Baseie-se EXCLUSIVAMENTE nas informações fornecidas pelo cliente.
&lt;/objetivo&gt;

&lt;estilo&gt;
Tom FORMAL mas ACESSÍVEL a empresário não-jurista.
Evite jargões desnecessários; quando usar, explique.
Comece diretamente com **PARECER JURÍDICO**.
Texto corrido, parágrafos conectados organicamente.
&lt;/estilo&gt;

&lt;modelo&gt;
## INSTRUÇÕES METODOLÓGICAS

**Fidelidade:** Baseie-se APENAS nas informações da consulta.
**Clareza:** Explique termos técnicos quando necessário.
**Objetividade:** Seja direto na análise e conclusão.

&lt;formato_saida&gt;
**PARECER JURÍDICO**

**Consulente:** \`NOME DA EMPRESA OU CLIENTE\`
**Assunto:** \`TEMA DA CONSULTA EM UMA LINHA\`
**Data:** \`DATA DO PARECER\`

---

## I. SÍNTESE DA CONSULTA

\`RESUMIR A SITUAÇÃO DESCRITA PELO CLIENTE, INCLUINDO OS FATOS
RELEVANTES E A DÚVIDA JURÍDICA APRESENTADA\`

## II. ANÁLISE JURÍDICA

\`ANALISAR A QUESTÃO SOB O PONTO DE VISTA LEGAL:
- Legislação aplicável (CLT, súmulas, precedentes)
- Interpretação dos fatos à luz da lei
- Riscos e contingências identificados
- Jurisprudência relevante (se conhecida)\`

## III. CONCLUSÃO E RECOMENDAÇÃO

\`RESPONDER OBJETIVAMENTE À CONSULTA:
- Posicionamento sobre a questão
- Recomendação prática de ação
- Ressalvas ou condicionantes, se houver\`

---

\`LOCAL E DATA\`

\`NOME DO ADVOGADO\`
\`OAB/UF Nº\`
&lt;/formato_saida&gt;
&lt;/modelo&gt;

&lt;adicionais&gt;
**Guardrails de fidelidade:**
- Use APENAS informações da consulta do cliente
- NÃO invente fatos ou dados não mencionados
- Se faltar informação relevante, indique: \`[Informação não fornecida]\`
- NÃO cite jurisprudência específica se não tiver certeza

**Qualidade:**
- Linguagem técnica mas acessível
- Fundamentação clara
- Conclusão objetiva e prática
&lt;/adicionais&gt;</code></pre>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Técnicas Essenciais para Prompts de Escrita</h2>

            <h3>1. Placeholders Bem Construídos</h3>
            <div class="table-wrapper">
                <table>
                    <thead><tr><th>Ruim</th><th>Bom</th></tr></thead>
                    <tbody>
                        <tr><td><code>\`nome\`</code></td><td><code>\`NOME DA PARTE AUTORA EM MAIÚSCULAS\`</code></td></tr>
                        <tr><td><code>\`fatos\`</code></td><td><code>\`DESCREVER OS FATOS EM ORDEM CRONOLÓGICA, COM DATAS E VALORES\`</code></td></tr>
                        <tr><td><code>\`pedido\`</code></td><td><code>\`LISTAR TODOS OS PEDIDOS FORMULADOS NA INICIAL\`</code></td></tr>
                    </tbody>
                </table>
            </div>

            <h3>2. Prefill Eficaz</h3>
            <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; font-size: 0.9rem;"><code>// Prefills que funcionam:
"Comece diretamente com RELATÓRIO"
"Inicie o texto com 'Trata-se de'"
"Comece com o cabeçalho do documento, sem introdução"

// Evitar:
"Escreva um relatório..." (permite preâmbulos)
"Por favor, elabore..." (convida explicações)</code></pre>

            <h3>3. Guardrails de Fidelidade</h3>
            <pre style="background: #1a1a2e; color: #eee; padding: 1rem; border-radius: 8px; font-size: 0.9rem;"><code>**Guardrails obrigatórios:**
- USE APENAS IDs existentes no documento fornecido
- **NUNCA INVENTE IDs!** Se não constar: "ID [NÃO CONSTA]"
- Em caso de dúvida, NÃO invente — use "não consta dos autos"
- Transcrições literais sempre entre aspas duplas</code></pre>

            <div class="callout callout-warning">
                <div class="callout-title">Cuidado: Alucinação em Escrita</div>
                <p>Prompts de escrita têm <strong>alto risco de alucinação</strong> se não tiverem guardrails. O modelo pode inventar IDs de documentos, datas, valores e até nomes de partes. Sempre inclua instruções explícitas para usar apenas dados dos documentos fornecidos.</p>
            </div>
        `,
        exercise: {
            title: "Gerando um Prompt de Escrita Customizado",
            icon: "✍️",
            description: "Use o Metaprompt de Escrita para criar um prompt para um tipo de documento que você redige frequentemente.",
            steps: [
                { title: "Identifique o Documento", items: ["Escolha um tipo de documento que você escreve com frequência", "Ex: contestação, sentença, parecer, contrato", "Defina a estrutura típica deste documento"] },
                { title: "Use o Metaprompt", items: ["Copie o Metaprompt de Escrita Jurídica", "Cole no Claude e responda às perguntas", "Descreva o documento com detalhes: estilo, estrutura, público"] },
                { title: "Avalie o Prompt Gerado", items: ["Os placeholders estão claros e úteis?", "O prefill está adequado?", "Os guardrails de fidelidade estão presentes?"] },
                { title: "Teste com Caso Real", items: ["Aplique o prompt a um caso real", "Forneça os documentos-fonte necessários", "Verifique se o output segue a estrutura esperada", "Confira se não há dados inventados"] }
            ],
            checklist: [
                "Entendo a diferença entre prompt de análise e prompt de escrita",
                "Sei construir placeholders eficazes",
                "Entendo a técnica de prefill",
                "Sei incluir guardrails de fidelidade documental",
                "Gerei pelo menos um prompt de escrita customizado"
            ]
        },
        tip: "Para documentos longos como sentenças, use o <strong>Modo Incremental</strong>: gere o relatório primeiro, depois a fundamentação, depois o dispositivo. Isso dá mais controle sobre cada parte.",
        warning: "<strong>\"O prompt de escrita gera documentos prontos para uso.\"</strong><br>NUNCA! Todo documento gerado por IA deve ser <em>revisado integralmente</em> antes do uso. Verifique especialmente: IDs, datas, valores, nomes e citações de jurisprudência."
    },

    "3.5": {
        number: "3.5",
        module: "Módulo 3 — Técnicas Avançadas",
        title: "Erros Comuns e Boas Práticas",
        objective: "Consolidar o aprendizado identificando armadilhas frequentes e estabelecendo checklist de qualidade para prompts jurídicos.",
        content: `
            <h2>Os 10 Erros Mais Comuns</h2>

            <div style="display: grid; gap: 1rem; margin: 1.5rem 0;">
                <div style="background: #fef2f2; padding: 1.25rem; border-radius: 8px; border-left: 4px solid #dc2626;">
                    <h4 style="color: #dc2626; margin-bottom: 0.5rem;">1. Não saber de onde veio a resposta</h4>
                    <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>O erro:</strong> Aceitar informações sem verificar a fonte.</p>
                    <p style="font-size: 0.9rem; color: var(--text-muted);"><strong>Solução:</strong> Sempre pergunte a fonte. Se o modelo não citou, desconfie. Para uso profissional, exija referências verificáveis.</p>
                </div>

                <div style="background: #fef2f2; padding: 1.25rem; border-radius: 8px; border-left: 4px solid #dc2626;">
                    <h4 style="color: #dc2626; margin-bottom: 0.5rem;">2. Confiar em prompts emocionais com modelos robustos</h4>
                    <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>O erro:</strong> Usar "dou R$1000 se você acertar" esperando melhora.</p>
                    <p style="font-size: 0.9rem; color: var(--text-muted);"><strong>Solução:</strong> Modelos como Claude e GPT-4 são menos sensíveis a truques emocionais. Foque em instruções claras e estruturadas.</p>
                </div>

                <div style="background: #fef2f2; padding: 1.25rem; border-radius: 8px; border-left: 4px solid #dc2626;">
                    <h4 style="color: #dc2626; margin-bottom: 0.5rem;">3. Customizar configurações globais</h4>
                    <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>O erro:</strong> Configurar "Custom Instructions" genéricas que afetam todas as conversas.</p>
                    <p style="font-size: 0.9rem; color: var(--text-muted);"><strong>Solução:</strong> Use Projects para contextos específicos. Mantenha configurações globais mínimas.</p>
                </div>

                <div style="background: #fef2f2; padding: 1.25rem; border-radius: 8px; border-left: 4px solid #dc2626;">
                    <h4 style="color: #dc2626; margin-bottom: 0.5rem;">4. Excesso de instruções em prompts de análise</h4>
                    <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>O erro:</strong> Prompt de 10 páginas para analisar documento de 100 páginas.</p>
                    <p style="font-size: 0.9rem; color: var(--text-muted);"><strong>Solução:</strong> Deixe o máximo de contexto para o documento. Prompts de análise devem ser concisos mas completos.</p>
                </div>

                <div style="background: #fef2f2; padding: 1.25rem; border-radius: 8px; border-left: 4px solid #dc2626;">
                    <h4 style="color: #dc2626; margin-bottom: 0.5rem;">5. Perguntar "você tem certeza?"</h4>
                    <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>O erro:</strong> Pressionar o modelo a confirmar, o que frequentemente faz ele mudar a resposta.</p>
                    <p style="font-size: 0.9rem; color: var(--text-muted);"><strong>Solução:</strong> Se desconfia, reformule a pergunta ou peça fundamentação. Não pressione por confirmação.</p>
                </div>

                <div style="background: #fef2f2; padding: 1.25rem; border-radius: 8px; border-left: 4px solid #dc2626;">
                    <h4 style="color: #dc2626; margin-bottom: 0.5rem;">6. Achar que está "treinando" o modelo</h4>
                    <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>O erro:</strong> Acreditar que o modelo "aprende" com suas conversas.</p>
                    <p style="font-size: 0.9rem; color: var(--text-muted);"><strong>Solução:</strong> O modelo já está treinado. Você ensina pelo contexto da conversa (temporário) ou por Projects (persistente).</p>
                </div>

                <div style="background: #fef2f2; padding: 1.25rem; border-radius: 8px; border-left: 4px solid #dc2626;">
                    <h4 style="color: #dc2626; margin-bottom: 0.5rem;">7. Ignorar o efeito borboleta dos prompts</h4>
                    <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>O erro:</strong> Não perceber que pequenas mudanças no prompt causam grandes diferenças no output.</p>
                    <p style="font-size: 0.9rem; color: var(--text-muted);"><strong>Solução:</strong> Use isso a seu favor: ajuste palavras-chave, ordem das instruções, exemplos. Teste variações.</p>
                </div>

                <div style="background: #fef2f2; padding: 1.25rem; border-radius: 8px; border-left: 4px solid #dc2626;">
                    <h4 style="color: #dc2626; margin-bottom: 0.5rem;">8. Sacrificar qualidade por formato rígido</h4>
                    <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>O erro:</strong> Exigir formato muito específico que reduz a qualidade do conteúdo.</p>
                    <p style="font-size: 0.9rem; color: var(--text-muted);"><strong>Solução:</strong> Balance estrutura e flexibilidade. Para tarefas criativas, seja menos rígido no formato.</p>
                </div>

                <div style="background: #fef2f2; padding: 1.25rem; border-radius: 8px; border-left: 4px solid #dc2626;">
                    <h4 style="color: #dc2626; margin-bottom: 0.5rem;">9. Não usar Few-Shot quando precisa de formato específico</h4>
                    <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>O erro:</strong> Descrever o formato desejado em vez de mostrar exemplos.</p>
                    <p style="font-size: 0.9rem; color: var(--text-muted);"><strong>Solução:</strong> Para formatos específicos (ementas, despachos), sempre inclua 2-3 exemplos.</p>
                </div>

                <div style="background: #fef2f2; padding: 1.25rem; border-radius: 8px; border-left: 4px solid #dc2626;">
                    <h4 style="color: #dc2626; margin-bottom: 0.5rem;">10. Esquecer os guardrails anti-alucinação</h4>
                    <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>O erro:</strong> Criar prompts sem instruções explícitas sobre fidelidade documental.</p>
                    <p style="font-size: 0.9rem; color: var(--text-muted);"><strong>Solução:</strong> SEMPRE inclua: "Use apenas informações do documento", "Nunca invente", "Se não constar, indique".</p>
                </div>
            </div>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Boas Práticas por Tipo de Prompt</h2>

            <h3>Para Prompts de Análise</h3>
            <ul style="margin:12px 0 12px 24px;color:var(--text-secondary);">
                <li>Foco na <strong>qualidade do conhecimento</strong></li>
                <li>Prompt máximo de 2-3 páginas (economize contexto para o documento)</li>
                <li>Sem firulas de estilo — clareza acima de tudo</li>
                <li>Perguntas diretrizes estruturadas</li>
                <li>Guardrails anti-alucinação obrigatórios</li>
            </ul>

            <h3>Para Prompts de Escrita</h3>
            <ul style="margin:12px 0 12px 24px;color:var(--text-secondary);">
                <li>Foco no <strong>estilo e formato</strong></li>
                <li>Use prompts pré-estruturados com placeholders</li>
                <li>Few-shot com exemplos (cuidado com contaminação de estilo)</li>
                <li>Controle de estilo via prefill</li>
                <li>Guardrails de fidelidade documental obrigatórios</li>
            </ul>

            <h3>Para Prompts de Pesquisa</h3>
            <ul style="margin:12px 0 12px 24px;color:var(--text-secondary);">
                <li>Defina <strong>escopo claramente</strong></li>
                <li>Estabeleça perguntas-chave a responder</li>
                <li>Delimite fontes confiáveis</li>
                <li>Especifique formato do relatório</li>
                <li>Inclua restrições temporais/temáticas</li>
            </ul>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Checklist Final de Qualidade</h2>

            <div style="background: var(--bg-light); padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0;">
                <h4 style="color: var(--primary); margin-bottom: 1rem;">Antes de usar qualquer prompt, verifique:</h4>

                <div style="display: grid; gap: 0.5rem;">
                    <label style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 1.2rem;">☐</span>
                        <span><strong>Objetivo claro e específico</strong> — O prompt diz exatamente o que deve ser feito?</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 1.2rem;">☐</span>
                        <span><strong>Formato de saída definido</strong> — O prompt especifica como o output deve ser estruturado?</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 1.2rem;">☐</span>
                        <span><strong>Guardrails anti-alucinação</strong> — Há instruções para usar apenas dados do documento?</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 1.2rem;">☐</span>
                        <span><strong>Fontes verificáveis</strong> — O prompt pede citação de fontes quando aplicável?</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-size: 1.2rem;">☐</span>
                        <span><strong>Revisão humana prevista</strong> — Você vai revisar o output antes de usar?</span>
                    </label>
                </div>
            </div>

            <hr style="margin: 2rem 0; border: none; border-top: 2px solid var(--gold);">

            <h2>Hierarquia de Aprendizado</h2>

            <p>Para continuar evoluindo em engenharia de prompt, siga esta hierarquia:</p>

            <div style="display: grid; gap: 1rem; margin: 1.5rem 0;">
                <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px; display: flex; align-items: center; gap: 1rem;">
                    <span style="font-size: 2rem; font-weight: bold; color: var(--primary);">1</span>
                    <div>
                        <h4 style="margin-bottom: 0.25rem;">Prática</h4>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">Experimentar muito, testar variações, aprender com erros.</p>
                    </div>
                </div>
                <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px; display: flex; align-items: center; gap: 1rem;">
                    <span style="font-size: 2rem; font-weight: bold; color: var(--gold);">2</span>
                    <div>
                        <h4 style="margin-bottom: 0.25rem;">Guias Oficiais</h4>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">Documentação da Anthropic, OpenAI, Google — fontes primárias.</p>
                    </div>
                </div>
                <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px; display: flex; align-items: center; gap: 1rem;">
                    <span style="font-size: 2rem; font-weight: bold; color: #10b981;">3</span>
                    <div>
                        <h4 style="margin-bottom: 0.25rem;">Análise de Prompts</h4>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">Estudar prompts de outros, entender por que funcionam.</p>
                    </div>
                </div>
                <div style="background: var(--bg-light); padding: 1.25rem; border-radius: 8px; display: flex; align-items: center; gap: 1rem;">
                    <span style="font-size: 2rem; font-weight: bold; color: #8b5cf6;">4</span>
                    <div>
                        <h4 style="margin-bottom: 0.25rem;">Papers e Preprints</h4>
                        <p style="font-size: 0.9rem; color: var(--text-muted); margin: 0;">Pesquisa acadêmica (arXiv, ACL) — para aprofundamento técnico.</p>
                    </div>
                </div>
            </div>

            <div class="callout callout-tip">
                <div class="callout-title">Citação Final</div>
                <p style="font-size:1.1em;font-style:italic;margin:12px 0;">"Input nobre gera output nobre. A qualidade da entrada determina a qualidade da saída. O esforço cognitivo aumenta com uso de IA, não diminui."</p>
                <p style="text-align:right;font-size:0.9em;">— George Marmelstein</p>
            </div>
        `,
        exercise: {
            title: "Auditoria de Prompt",
            icon: "🔍",
            description: "Revise um prompt que você já usa (ou criou neste curso) aplicando o checklist de qualidade.",
            steps: [
                { title: "Selecione um Prompt", items: ["Escolha um prompt que você usa no dia a dia", "Ou use um dos prompts que criou nas aulas anteriores", "Cole em um documento para análise"] },
                { title: "Aplique o Checklist", items: ["O objetivo está claro e específico?", "O formato de saída está definido?", "Há guardrails anti-alucinação?", "Pede citação de fontes quando aplicável?", "Prevê revisão humana?"] },
                { title: "Identifique Melhorias", items: ["Quais itens do checklist falharam?", "O prompt comete algum dos 10 erros comuns?", "Liste 2-3 melhorias específicas"] },
                { title: "Implemente e Teste", items: ["Aplique as melhorias identificadas", "Teste o prompt revisado com um documento real", "Compare: o resultado melhorou?"] }
            ],
            checklist: [
                "Conheço os 10 erros mais comuns e sei como evitá-los",
                "Sei aplicar boas práticas específicas por tipo de prompt",
                "Consigo usar o checklist de qualidade para avaliar prompts",
                "Entendo a hierarquia de aprendizado para continuar evoluindo",
                "Revisei pelo menos um prompt usando as técnicas aprendidas"
            ]
        },
        tip: "Crie o hábito de <strong>revisar seus prompts periodicamente</strong>. O que funcionava há 6 meses pode não ser mais a melhor abordagem. Os modelos evoluem, e seus prompts devem evoluir junto.",
        warning: "<strong>\"Agora sei tudo sobre engenharia de prompt.\"</strong><br>A área evolui rapidamente. Continue praticando, lendo guias oficiais e experimentando. O que você aprendeu é uma base sólida, não um conhecimento estático."
    }
};

// Exportar para uso no caderno
if (typeof module !== 'undefined' && module.exports) {
    module.exports = modulo3Lessons;
}
