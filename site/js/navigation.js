/**
 * navigation.js - Sistema de Navegação
 * Escrita Jurídica com IA - Caderno de Exercícios
 */

const Navigation = (function() {
  'use strict';

  // Estado
  let currentExerciseId = null;
  let expandedModules = new Set();
  const listeners = [];

  // Elementos DOM
  let sidebar = null;
  let sidebarContent = null;
  let sidebarOverlay = null;
  let menuToggle = null;

  /**
   * Inicializa a navegação
   */
  function init() {
    // Captura elementos DOM
    sidebar = document.getElementById('sidebar');
    sidebarContent = document.getElementById('sidebarContent');
    sidebarOverlay = document.getElementById('sidebarOverlay');
    menuToggle = document.getElementById('menuToggle');

    // Configura eventos
    setupEvents();

    // Renderiza sidebar
    render();

    // Restaura último exercício ou carrega primeiro
    const lastExercise = Progress.getLastExercise();
    if (lastExercise) {
      navigateTo(lastExercise);
    } else {
      navigateToFirst();
    }
  }

  /**
   * Configura eventos de interação
   */
  function setupEvents() {
    // Toggle menu mobile
    if (menuToggle) {
      menuToggle.addEventListener('click', toggleSidebar);
    }

    // Fechar sidebar ao clicar no overlay
    if (sidebarOverlay) {
      sidebarOverlay.addEventListener('click', closeSidebar);
    }

    // Fechar sidebar com ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar?.classList.contains('open')) {
        closeSidebar();
      }
    });

    // Navegação por teclado
    document.addEventListener('keydown', handleKeyNavigation);
  }

  /**
   * Renderiza a sidebar com módulos e exercícios
   */
  function render() {
    if (!sidebarContent) return;

    const modules = I18n.getModules();

    if (!modules || modules.length === 0) {
      sidebarContent.innerHTML = `
        <div class="loading">
          <div class="loading-spinner"></div>
        </div>
      `;
      return;
    }

    // Template de módulo
    const moduleTemplate = document.getElementById('templateModule');
    const exerciseTemplate = document.getElementById('templateExercise');

    // Limpa conteúdo
    sidebarContent.innerHTML = '';

    // Renderiza cada módulo
    modules.forEach((module, moduleIndex) => {
      const moduleEl = moduleTemplate.content.cloneNode(true);
      const moduleContainer = moduleEl.querySelector('.sidebar-module');

      // Configura módulo
      moduleContainer.dataset.moduleId = module.id;

      // Número e nome
      moduleEl.querySelector('.sidebar-module-number').textContent = moduleIndex;
      moduleEl.querySelector('.sidebar-module-name').textContent = module.title;

      // Progresso do módulo
      const progress = Progress.getModuleProgress(module.exercises);
      moduleEl.querySelector('.sidebar-module-progress-fill').style.width = `${progress.percentage}%`;

      // Header clicável
      const header = moduleEl.querySelector('.sidebar-module-header');
      header.addEventListener('click', () => toggleModule(module.id));

      // Lista de exercícios
      const exercisesContainer = moduleEl.querySelector('.sidebar-exercises');

      (module.exercises || []).forEach(exercise => {
        const exerciseEl = exerciseTemplate.content.cloneNode(true);
        const exerciseContainer = exerciseEl.querySelector('.sidebar-exercise');

        // Configura exercício
        exerciseContainer.dataset.exerciseId = exercise.id;
        exerciseEl.querySelector('.sidebar-exercise-title').textContent = exercise.title;

        // Status do exercício
        const exerciseProgress = Progress.getExercise(exercise.id);
        const statusEl = exerciseEl.querySelector('.sidebar-exercise-status');
        statusEl.classList.remove('not-started');
        statusEl.classList.add(exerciseProgress.status.replace('_', '-'));

        // Clique para navegar
        exerciseContainer.addEventListener('click', () => {
          navigateTo(exercise.id);
          closeSidebar(); // Fecha sidebar em mobile
        });

        exercisesContainer.appendChild(exerciseEl);
      });

      // Expande módulo se estava expandido ou contém exercício atual
      if (expandedModules.has(module.id) || moduleContainsExercise(module, currentExerciseId)) {
        moduleContainer.classList.add('expanded');
        expandedModules.add(module.id);
      }

      sidebarContent.appendChild(moduleEl);
    });

    // Marca exercício ativo
    updateActiveExercise();
  }

  /**
   * Verifica se módulo contém exercício
   */
  function moduleContainsExercise(module, exerciseId) {
    return module.exercises?.some(e => e.id === exerciseId) || false;
  }

  /**
   * Toggle de expansão do módulo
   */
  function toggleModule(moduleId) {
    if (expandedModules.has(moduleId)) {
      expandedModules.delete(moduleId);
    } else {
      expandedModules.add(moduleId);
    }

    // Atualiza classe no DOM
    const moduleEl = document.querySelector(`[data-module-id="${moduleId}"]`);
    if (moduleEl) {
      moduleEl.classList.toggle('expanded', expandedModules.has(moduleId));
    }
  }

  /**
   * Abre/fecha a sidebar (mobile)
   */
  function toggleSidebar() {
    sidebar?.classList.toggle('open');
    sidebarOverlay?.classList.toggle('visible');
    document.body.style.overflow = sidebar?.classList.contains('open') ? 'hidden' : '';
  }

  /**
   * Fecha a sidebar
   */
  function closeSidebar() {
    sidebar?.classList.remove('open');
    sidebarOverlay?.classList.remove('visible');
    document.body.style.overflow = '';
  }

  /**
   * Navega para um exercício
   */
  function navigateTo(exerciseId) {
    const result = I18n.getExercise(exerciseId);
    if (!result) {
      console.error(`Exercício não encontrado: ${exerciseId}`);
      return false;
    }

    const { module, exercise } = result;

    // Atualiza estado
    currentExerciseId = exerciseId;

    // Salva último exercício
    Progress.setLastExercise(exerciseId);

    // Expande módulo do exercício
    expandedModules.add(module.id);

    // Atualiza sidebar
    render();

    // Notifica listeners
    notifyListeners(exercise, module);

    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return true;
  }

  /**
   * Navega para o primeiro exercício
   */
  function navigateToFirst() {
    const modules = I18n.getModules();
    if (modules.length > 0 && modules[0].exercises?.length > 0) {
      navigateTo(modules[0].exercises[0].id);
    }
  }

  /**
   * Navega para o exercício anterior
   */
  function navigateToPrev() {
    if (!currentExerciseId) return false;

    const prev = I18n.getPrevExercise(currentExerciseId);
    if (prev) {
      navigateTo(prev.exercise.id);
      return true;
    }
    return false;
  }

  /**
   * Navega para o próximo exercício
   */
  function navigateToNext() {
    if (!currentExerciseId) return false;

    const next = I18n.getNextExercise(currentExerciseId);
    if (next) {
      navigateTo(next.exercise.id);
      return true;
    }
    return false;
  }

  /**
   * Atualiza marcação do exercício ativo
   */
  function updateActiveExercise() {
    // Remove active de todos
    document.querySelectorAll('.sidebar-exercise').forEach(el => {
      el.classList.remove('active');
    });

    // Marca o atual
    if (currentExerciseId) {
      const activeEl = document.querySelector(`[data-exercise-id="${currentExerciseId}"]`);
      if (activeEl) {
        activeEl.classList.add('active');

        // Scroll para visibilidade
        activeEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }

  /**
   * Atualiza status de um exercício na sidebar
   */
  function updateExerciseStatus(exerciseId) {
    const exerciseEl = document.querySelector(`[data-exercise-id="${exerciseId}"]`);
    if (!exerciseEl) return;

    const progress = Progress.getExercise(exerciseId);
    const statusEl = exerciseEl.querySelector('.sidebar-exercise-status');

    if (statusEl) {
      statusEl.classList.remove('not-started', 'in-progress', 'completed');
      statusEl.classList.add(progress.status.replace('_', '-'));
    }

    // Atualiza progresso do módulo
    updateModuleProgress(exerciseId);
  }

  /**
   * Atualiza progresso do módulo na sidebar
   */
  function updateModuleProgress(exerciseId) {
    const result = I18n.getExercise(exerciseId);
    if (!result) return;

    const { module } = result;
    const moduleEl = document.querySelector(`[data-module-id="${module.id}"]`);
    if (!moduleEl) return;

    const progress = Progress.getModuleProgress(module.exercises);
    const progressFill = moduleEl.querySelector('.sidebar-module-progress-fill');
    if (progressFill) {
      progressFill.style.width = `${progress.percentage}%`;
    }
  }

  /**
   * Navegação por teclado
   */
  function handleKeyNavigation(e) {
    // Ignora se estiver digitando em input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return;
    }

    // Setas + Alt para navegação
    if (e.altKey) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        navigateToPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        navigateToNext();
      }
    }
  }

  /**
   * Obtém exercício atual
   */
  function getCurrentExerciseId() {
    return currentExerciseId;
  }

  /**
   * Adiciona listener para mudança de exercício
   */
  function onNavigate(callback) {
    listeners.push(callback);
    return () => {
      const index = listeners.indexOf(callback);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }

  /**
   * Notifica listeners
   */
  function notifyListeners(exercise, module) {
    listeners.forEach(callback => {
      try {
        callback(exercise, module);
      } catch (error) {
        console.error('Erro em listener de navegação:', error);
      }
    });
  }

  // API pública
  return {
    init,
    render,
    navigateTo,
    navigateToFirst,
    navigateToPrev,
    navigateToNext,
    getCurrentExerciseId,
    updateExerciseStatus,
    toggleSidebar,
    closeSidebar,
    onNavigate
  };
})();

// Exporta para uso global
window.Navigation = Navigation;
