/**
 * components.js - Componentes Interativos
 * Escrita Jurídica com IA - Caderno de Exercícios
 */

const Components = (function() {
  'use strict';

  /**
   * Renderiza o conteúdo de um exercício
   */
  function renderExercise(exercise, module) {
    const container = document.getElementById('mainContent');
    if (!container) return;

    // Limpa conteúdo
    container.innerHTML = '';

    // Renderiza cada seção
    container.appendChild(renderHeader(exercise, module));

    if (exercise.objective) {
      container.appendChild(renderObjective(exercise.objective));
    }

    if (exercise.context) {
      container.appendChild(renderContext(exercise.context));
    }

    if (exercise.concept) {
      container.appendChild(renderConcept(exercise.concept));
    }

    if (exercise.prompt) {
      container.appendChild(renderPrompt(exercise.prompt));
    }

    if (exercise.examples && exercise.examples.length > 0) {
      container.appendChild(renderExamples(exercise.examples));
    }

    if (exercise.tips) {
      container.appendChild(renderTips(exercise.tips));
    }

    if (exercise.checklist && exercise.checklist.length > 0) {
      container.appendChild(renderChecklist(exercise.id, exercise.checklist));
    }

    container.appendChild(renderNavigation(exercise.id));
  }

  /**
   * Renderiza cabeçalho do exercício
   */
  function renderHeader(exercise, module) {
    const template = document.getElementById('templateExerciseHeader');
    const el = template.content.cloneNode(true);

    // Badge do módulo
    const badge = el.querySelector('.exercise-badge');
    badge.textContent = `Módulo ${module.id.split('-')[1]} · ${module.title}`;

    // Título
    el.querySelector('.exercise-title').textContent = exercise.title;

    // Tempo de leitura estimado
    const readingTime = estimateReadingTime(exercise);
    el.querySelector('.exercise-reading-time').textContent = `${readingTime} ${I18n.t('ui.minutes')}`;

    // Status
    const progress = Progress.getExercise(exercise.id);
    const statusEl = el.querySelector('.exercise-status');
    statusEl.classList.remove('not-started');
    statusEl.classList.add(progress.status.replace('_', '-'));

    const statusTexts = {
      'not_started': I18n.t('ui.not_started'),
      'in_progress': I18n.t('ui.in_progress'),
      'completed': I18n.t('ui.completed')
    };
    el.querySelector('.exercise-status-text').textContent = statusTexts[progress.status] || I18n.t('ui.not_started');

    return el;
  }

  /**
   * Estima tempo de leitura
   */
  function estimateReadingTime(exercise) {
    let wordCount = 0;

    // Conta palavras do conteúdo
    if (exercise.context) wordCount += countWords(exercise.context);
    if (exercise.concept) wordCount += countWords(exercise.concept);
    if (exercise.prompt?.content) wordCount += countWords(exercise.prompt.content);

    // 200 palavras por minuto
    const minutes = Math.max(1, Math.ceil(wordCount / 200));
    return minutes;
  }

  /**
   * Conta palavras em uma string
   */
  function countWords(text) {
    if (!text) return 0;
    return text.trim().split(/\s+/).length;
  }

  /**
   * Renderiza card de objetivo
   */
  function renderObjective(objective) {
    const template = document.getElementById('templateObjective');
    const el = template.content.cloneNode(true);

    // Intro
    if (objective.intro) {
      el.querySelector('.card-subtitle').textContent = objective.intro;
    }

    // Lista de itens
    const list = el.querySelector('.objective-list');
    (objective.items || []).forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });

    return el;
  }

  /**
   * Renderiza card de contexto
   */
  function renderContext(context) {
    const template = document.getElementById('templateContext');
    const el = template.content.cloneNode(true);

    el.querySelector('.context-text').innerHTML = parseMarkdown(context);

    return el;
  }

  /**
   * Renderiza seção de conceito com cards estruturados
   */
  function renderConcept(concept) {
    const container = document.createElement('section');
    container.className = 'concept-container';

    // Divide o conteúdo em seções por ### headers
    const sections = splitBySections(concept);

    sections.forEach((section, index) => {
      const sectionEl = createConceptSection(section, index);
      container.appendChild(sectionEl);
    });

    return container;
  }

  /**
   * Divide o texto em seções baseado em ### headers
   */
  function splitBySections(text) {
    if (!text) return [];

    // Regex para capturar ### headers e seu conteúdo
    const sectionRegex = /^### (.+)$/gm;
    const sections = [];
    let lastIndex = 0;
    let match;

    // Primeiro, captura conteúdo antes do primeiro header (se houver)
    const firstHeaderMatch = text.match(/^### /m);
    if (firstHeaderMatch && firstHeaderMatch.index > 0) {
      const introContent = text.substring(0, firstHeaderMatch.index).trim();
      if (introContent) {
        sections.push({ title: null, content: introContent, type: 'intro' });
      }
    }

    // Encontra todos os headers e seus conteúdos
    const headerMatches = [...text.matchAll(sectionRegex)];

    headerMatches.forEach((match, i) => {
      const title = match[1];
      const startIndex = match.index + match[0].length;
      const endIndex = headerMatches[i + 1] ? headerMatches[i + 1].index : text.length;
      const content = text.substring(startIndex, endIndex).trim();

      // Detecta tipo de seção baseado no título
      const type = detectSectionType(title, content);

      sections.push({ title, content, type });
    });

    return sections;
  }

  /**
   * Detecta o tipo de seção para estilização apropriada
   */
  function detectSectionType(title, content) {
    const titleLower = title.toLowerCase();
    const contentLower = content.toLowerCase();

    // Alertas e proibições
    if (titleLower.includes('atenção') || titleLower.includes('importante') ||
        titleLower.includes('paradoxo') || titleLower.includes('cuidado')) {
      return 'warning';
    }

    // Proibições explícitas
    if (titleLower.includes('não podem') || titleLower.includes('proibido') ||
        contentLower.includes('nunca') || contentLower.includes('não pode')) {
      return 'danger';
    }

    // Dicas e como fazer
    if (titleLower.includes('como') || titleLower.includes('técnica') ||
        titleLower.includes('dica') || titleLower.includes('configurar')) {
      return 'tip';
    }

    // Distinções e comparações
    if (titleLower.includes('distinção') || titleLower.includes('vs.') ||
        titleLower.includes('diferença') || titleLower.includes('comparativo')) {
      return 'compare';
    }

    // Normas e referências legais
    if (titleLower.includes('normativo') || titleLower.includes('resolução') ||
        titleLower.includes('lei') || titleLower.includes('art.')) {
      return 'legal';
    }

    return 'default';
  }

  /**
   * Cria elemento de seção conceitual
   */
  function createConceptSection(section, index) {
    const wrapper = document.createElement('div');
    wrapper.className = `concept-card concept-card--${section.type}`;
    wrapper.dataset.sectionIndex = index;

    // Header da seção (se houver título)
    if (section.title) {
      const header = document.createElement('div');
      header.className = 'concept-card__header';

      // Ícone baseado no tipo
      const icon = document.createElement('span');
      icon.className = 'concept-card__icon';
      icon.innerHTML = getSectionIcon(section.type);
      header.appendChild(icon);

      // Título
      const title = document.createElement('h3');
      title.className = 'concept-card__title';
      title.textContent = section.title;
      header.appendChild(title);

      wrapper.appendChild(header);
    }

    // Conteúdo
    const content = document.createElement('div');
    content.className = 'concept-card__content';
    content.innerHTML = parseConceptContent(section.content);
    wrapper.appendChild(content);

    return wrapper;
  }

  /**
   * Retorna ícone SVG baseado no tipo de seção
   */
  function getSectionIcon(type) {
    const icons = {
      'legal': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
      'warning': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
      'danger': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
      'tip': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="4"/></svg>',
      'compare': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="9"/><path d="M10 18H3v3h7zM21 18h-7v3h7z"/></svg>',
      'default': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>'
    };
    return icons[type] || icons['default'];
  }

  /**
   * Parse especial para conteúdo de seção conceitual
   */
  function parseConceptContent(text) {
    if (!text) return '';

    let html = escapeHtml(text);

    // Sub-headers (#### -> mini-headers)
    html = html.replace(/^#### (.+)$/gm, '<h5 class="concept-subheader">$1</h5>');

    // Bold com destaque especial para termos-chave
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="concept-term">$1</strong>');

    // Italic
    html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

    // Code inline
    html = html.replace(/`([^`]+)`/g, '<code class="concept-code">$1</code>');

    // Images
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<figure class="concept-image"><img src="$2" alt="$1" loading="lazy"><figcaption>$1</figcaption></figure>');

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" class="concept-link">$1</a>');

    // Listas com bullets elegantes
    html = html.replace(/^- (.+)$/gm, '<li class="concept-list-item">$1</li>');
    html = html.replace(/(<li class="concept-list-item">[\s\S]*?<\/li>)/g, function(match) {
      if (!match.includes('<ul')) {
        return '<ul class="concept-list">' + match + '</ul>';
      }
      return match;
    });
    // Corrige múltiplos uls consecutivos
    html = html.replace(/<\/ul>\s*<ul class="concept-list">/g, '');

    // Listas numeradas
    html = html.replace(/^(\d+)\. (.+)$/gm, '<li class="concept-numbered-item" data-number="$1">$2</li>');
    html = html.replace(/(<li class="concept-numbered-item"[\s\S]*?<\/li>)/g, function(match) {
      if (!match.includes('<ol')) {
        return '<ol class="concept-numbered-list">' + match + '</ol>';
      }
      return match;
    });
    html = html.replace(/<\/ol>\s*<ol class="concept-numbered-list">/g, '');

    // Parágrafos
    html = html.replace(/\n\n+/g, '</p><p class="concept-para">');
    html = '<p class="concept-para">' + html + '</p>';

    // Limpa parágrafos vazios e mal formados
    html = html.replace(/<p class="concept-para"><\/p>/g, '');
    html = html.replace(/<p class="concept-para">(<[huo])/g, '$1');
    html = html.replace(/(<\/[huo][l5]?>)<\/p>/g, '$1');
    html = html.replace(/<p class="concept-para">(<figure)/g, '$1');
    html = html.replace(/(<\/figure>)<\/p>/g, '$1');

    return html;
  }

  /**
   * Renderiza bloco de prompt
   */
  function renderPrompt(prompt) {
    const template = document.getElementById('templateCodeBlock');
    const el = template.content.cloneNode(true);

    // Label
    el.querySelector('.code-label').textContent = prompt.label || 'Prompt Completo';

    // Conteúdo
    const codeEl = el.querySelector('code');
    codeEl.innerHTML = highlightPrompt(prompt.content);

    // Botão de copiar
    const copyBtn = el.querySelector('.code-copy-btn');
    copyBtn.addEventListener('click', () => copyToClipboard(prompt.content, copyBtn));

    return el;
  }

  /**
   * Destaca sintaxe do prompt
   */
  function highlightPrompt(content) {
    if (!content) return '';

    let highlighted = escapeHtml(content);

    // Tags XML
    highlighted = highlighted.replace(
      /(&lt;\/?[\w-]+&gt;)/g,
      '<span class="token-tag">$1</span>'
    );

    // Placeholders {{...}}
    highlighted = highlighted.replace(
      /(\{\{[^}]+\}\})/g,
      '<span class="token-placeholder">$1</span>'
    );

    // Placeholders [...]
    highlighted = highlighted.replace(
      /(\[[A-ZÁÉÍÓÚÂÊÎÔÛÃÕÀÈÌÒÙÇ\s]+\])/g,
      '<span class="token-placeholder">$1</span>'
    );

    // Palavras-chave em maiúsculas
    highlighted = highlighted.replace(
      /\b(TAREFA|ESTRUTURA|OBJETIVO|PERSONA|ESTILO|MÉTODO|ADICIONAIS|IMPORTANTE|NUNCA|SEMPRE|EXEMPLO|REGRAS)\b/g,
      '<span class="token-keyword">$1</span>'
    );

    // Headers markdown (## ou mais)
    highlighted = highlighted.replace(
      /^(#{1,6}\s.*)$/gm,
      '<span class="token-header">$1</span>'
    );

    // Checkboxes markdown
    highlighted = highlighted.replace(
      /(\[[ x]\])/gi,
      '<span class="token-checkbox">$1</span>'
    );

    // Tabelas markdown (linhas com |)
    highlighted = highlighted.replace(
      /^(\|.+\|)$/gm,
      '<span class="token-table">$1</span>'
    );

    return highlighted;
  }

  /**
   * Renderiza exemplos práticos
   */
  function renderExamples(examples) {
    if (examples.length === 1 && examples[0].before && examples[0].after) {
      // Formato antes/depois
      return renderBeforeAfter(examples[0]);
    }

    // Múltiplos exemplos com tabs
    const container = document.createElement('div');
    container.className = 'tabs';

    const header = document.createElement('div');
    header.className = 'tabs-header';

    examples.forEach((example, index) => {
      const btn = document.createElement('button');
      btn.className = `tab-button ${index === 0 ? 'active' : ''}`;
      btn.textContent = example.title || `Exemplo ${index + 1}`;
      btn.addEventListener('click', (e) => switchTab(e, `example-${index}`));
      header.appendChild(btn);
    });

    container.appendChild(header);

    examples.forEach((example, index) => {
      const content = document.createElement('div');
      content.className = `tab-content ${index === 0 ? 'active' : ''}`;
      content.id = `example-${index}`;

      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = parseMarkdown(example.content || example.description || '');
      content.appendChild(card);

      container.appendChild(content);
    });

    return container;
  }

  /**
   * Renderiza comparação antes/depois
   */
  function renderBeforeAfter(example) {
    const container = document.createElement('div');
    container.className = 'example-comparison';

    // Antes
    const beforeSide = document.createElement('div');
    beforeSide.className = 'example-side before';
    beforeSide.innerHTML = `
      <div class="example-side-header">Antes</div>
      <div class="example-side-content">${parseMarkdown(example.before)}</div>
    `;
    container.appendChild(beforeSide);

    // Depois
    const afterSide = document.createElement('div');
    afterSide.className = 'example-side after';
    afterSide.innerHTML = `
      <div class="example-side-header">Depois</div>
      <div class="example-side-content">${parseMarkdown(example.after)}</div>
    `;
    container.appendChild(afterSide);

    return container;
  }

  /**
   * Renderiza dicas (do/don't)
   */
  function renderTips(tips) {
    const template = document.getElementById('templateTips');
    const el = template.content.cloneNode(true);

    // Faça
    const doList = el.querySelector('.tips-do');
    (tips.do || []).forEach(item => {
      const div = document.createElement('div');
      div.className = 'tips-item';
      div.innerHTML = `<span class="tips-icon">✓</span> ${escapeHtml(item)}`;
      doList.appendChild(div);
    });

    // Evite
    const dontList = el.querySelector('.tips-dont');
    (tips.dont || []).forEach(item => {
      const div = document.createElement('div');
      div.className = 'tips-item';
      div.innerHTML = `<span class="tips-icon">✗</span> ${escapeHtml(item)}`;
      dontList.appendChild(div);
    });

    return el;
  }

  /**
   * Renderiza checklist
   */
  function renderChecklist(exerciseId, items) {
    const template = document.getElementById('templateChecklist');
    const el = template.content.cloneNode(true);
    const itemTemplate = document.getElementById('templateChecklistItem');

    // Container dos itens
    const container = el.querySelector('.checklist-items');

    // Obtém progresso salvo
    const progress = Progress.getExercise(exerciseId);
    const savedChecks = progress.checklist || [];

    // Progresso
    const progressEl = el.querySelector('.checklist-progress');
    const updateProgress = () => {
      const checked = container.querySelectorAll('.checklist-item.checked').length;
      progressEl.textContent = `${checked}/${items.length}`;
    };

    // Renderiza itens
    items.forEach((item, index) => {
      const itemEl = itemTemplate.content.cloneNode(true);
      const itemContainer = itemEl.querySelector('.checklist-item');

      itemContainer.dataset.index = index;
      itemEl.querySelector('.checklist-text').textContent = item;

      // Restaura estado salvo
      if (savedChecks[index]) {
        itemContainer.classList.add('checked');
      }

      // Toggle ao clicar
      itemContainer.addEventListener('click', () => {
        const isChecked = itemContainer.classList.toggle('checked');
        Progress.toggleChecklistItem(exerciseId, index, isChecked);
        updateProgress();
        Navigation.updateExerciseStatus(exerciseId);
        updateGlobalProgress();
        updateExerciseHeaderStatus(exerciseId);
      });

      container.appendChild(itemEl);
    });

    // Atualiza progresso inicial
    setTimeout(updateProgress, 0);

    return el;
  }

  /**
   * Renderiza navegação inferior
   */
  function renderNavigation(currentId) {
    const template = document.getElementById('templateNavigation');
    const el = template.content.cloneNode(true);

    const prev = I18n.getPrevExercise(currentId);
    const next = I18n.getNextExercise(currentId);

    // Anterior
    const prevBtn = el.querySelector('.exercise-nav-button.prev');
    if (prev) {
      prevBtn.querySelector('.exercise-nav-title').textContent = prev.exercise.title;
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        Navigation.navigateToPrev();
      });
    } else {
      prevBtn.classList.add('disabled');
    }

    // Próximo
    const nextBtn = el.querySelector('.exercise-nav-button.next');
    if (next) {
      nextBtn.querySelector('.exercise-nav-title').textContent = next.exercise.title;
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        Navigation.navigateToNext();
      });
    } else {
      nextBtn.classList.add('disabled');
    }

    return el;
  }

  /**
   * Atualiza status no header do exercício
   */
  function updateExerciseHeaderStatus(exerciseId) {
    const progress = Progress.getExercise(exerciseId);
    const statusEl = document.querySelector('.exercise-header .exercise-status');
    if (!statusEl) return;

    statusEl.classList.remove('not-started', 'in-progress', 'completed');
    statusEl.classList.add(progress.status.replace('_', '-'));

    const statusTexts = {
      'not_started': I18n.t('ui.not_started'),
      'in_progress': I18n.t('ui.in_progress'),
      'completed': I18n.t('ui.completed')
    };
    const textEl = statusEl.querySelector('.exercise-status-text');
    if (textEl) {
      textEl.textContent = statusTexts[progress.status] || I18n.t('ui.not_started');
    }
  }

  /**
   * Atualiza progresso global no header
   */
  function updateGlobalProgress() {
    const progress = Progress.getGlobalProgress();
    const fill = document.getElementById('progressFill');
    const value = document.getElementById('progressValue');

    if (fill) {
      fill.style.width = `${progress.percentage}%`;
    }
    if (value) {
      value.textContent = `${progress.percentage}%`;
    }
  }

  /**
   * Troca de tab
   */
  function switchTab(e, tabId) {
    const container = e.target.closest('.tabs');
    if (!container) return;

    // Remove active de todos os botões
    container.querySelectorAll('.tab-button').forEach(btn => {
      btn.classList.remove('active');
    });

    // Remove active de todos os conteúdos
    container.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });

    // Ativa o botão clicado
    e.target.classList.add('active');

    // Ativa o conteúdo correspondente
    const tabContent = container.querySelector(`#${tabId}`);
    if (tabContent) {
      tabContent.classList.add('active');
    }
  }

  /**
   * Copia texto para área de transferência
   */
  async function copyToClipboard(text, button) {
    try {
      await navigator.clipboard.writeText(text);

      // Feedback visual
      const originalText = button.querySelector('.copy-text').textContent;
      button.classList.add('copied');
      button.querySelector('.copy-text').textContent = I18n.t('ui.copied') || 'Copiado!';

      setTimeout(() => {
        button.classList.remove('copied');
        button.querySelector('.copy-text').textContent = originalText;
      }, 2000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
      alert('Não foi possível copiar. Selecione o texto manualmente.');
    }
  }

  /**
   * Parse básico de Markdown para HTML
   */
  function parseMarkdown(text) {
    if (!text) return '';

    let html = escapeHtml(text);

    // Headers
    html = html.replace(/^### (.+)$/gm, '<h4>$1</h4>');
    html = html.replace(/^## (.+)$/gm, '<h3>$1</h3>');
    html = html.replace(/^# (.+)$/gm, '<h2>$1</h2>');

    // Bold
    html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Italic
    html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

    // Code inline
    html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

    // Images (must come before links)
    html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<figure class="content-image"><img src="$2" alt="$1" loading="lazy"><figcaption>$1</figcaption></figure>');

    // Links
    html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');

    // Listas não ordenadas
    html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
    html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

    // Parágrafos
    html = html.replace(/\n\n/g, '</p><p>');
    html = '<p>' + html + '</p>';

    // Limpa parágrafos vazios
    html = html.replace(/<p><\/p>/g, '');
    html = html.replace(/<p>(<[hul])/g, '$1');
    html = html.replace(/(<\/[hul]\w*>)<\/p>/g, '$1');

    return html;
  }

  /**
   * Escapa HTML para prevenir XSS
   */
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  // API pública
  return {
    renderExercise,
    updateGlobalProgress,
    switchTab,
    copyToClipboard,
    parseMarkdown
  };
})();

// Exporta para uso global
window.Components = Components;
