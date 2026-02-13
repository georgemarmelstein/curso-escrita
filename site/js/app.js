/**
 * app.js - Aplicação Principal
 * Escrita Jurídica com IA - Caderno de Exercícios
 */

const App = (function() {
  'use strict';

  /**
   * Inicializa a aplicação
   */
  async function init() {
    console.log('Iniciando Escrita Jurídica com IA...');

    try {
      // 1. Inicializa sistema de internacionalização
      await I18n.init();
      console.log('i18n carregado:', I18n.getLanguage());

      // 2. Inicializa sistema de progresso
      Progress.init();
      console.log('Progresso carregado');

      // 3. Configura seletor de idioma
      setupLanguageSelector();

      // 4. Registra listeners ANTES da navegação
      setupListeners();

      // 5. Inicializa navegação (renderiza sidebar e carrega exercício)
      Navigation.init();
      console.log('Navegação inicializada');

      // 6. Atualiza progresso global
      Components.updateGlobalProgress();

      console.log('Aplicação inicializada com sucesso!');
    } catch (error) {
      console.error('Erro ao inicializar aplicação:', error);
      showError('Erro ao carregar o curso. Por favor, recarregue a página.');
    }
  }

  /**
   * Configura seletor de idioma
   */
  function setupLanguageSelector() {
    const selector = document.getElementById('langSelector');
    if (!selector) return;

    const buttons = selector.querySelectorAll('.lang-option');
    const currentLang = I18n.getLanguage();

    // Marca botão ativo
    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);

      btn.addEventListener('click', async () => {
        const lang = btn.dataset.lang;
        if (lang === I18n.getLanguage()) return;

        // Atualiza visual
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Muda idioma
        await I18n.setLanguage(lang);
      });
    });
  }

  /**
   * Configura listeners globais
   */
  function setupListeners() {
    // Listener para mudança de idioma
    I18n.onLanguageChange((lang, translations) => {
      console.log('Idioma alterado para:', lang);

      // Re-renderiza sidebar
      Navigation.render();

      // Re-renderiza exercício atual
      const currentId = Navigation.getCurrentExerciseId();
      if (currentId) {
        const result = I18n.getExercise(currentId);
        if (result) {
          Components.renderExercise(result.exercise, result.module);
        }
      }
    });

    // Listener para navegação
    Navigation.onNavigate((exercise, module) => {
      Components.renderExercise(exercise, module);
    });

    // Listener para mudança de progresso
    Progress.onChange((data, globalProgress) => {
      Components.updateGlobalProgress();
    });

    // Previne perda de progresso não salvo
    window.addEventListener('beforeunload', (e) => {
      Progress.save();
    });
  }

  /**
   * Exibe mensagem de erro
   */
  function showError(message) {
    const container = document.getElementById('mainContent');
    if (container) {
      container.innerHTML = `
        <div class="card" style="border-color: var(--color-error);">
          <div class="card-header">
            <div class="card-icon" style="background-color: var(--color-error-light); color: var(--color-error);">⚠️</div>
            <div>
              <h3 class="card-title">Erro</h3>
              <p class="card-subtitle">${message}</p>
            </div>
          </div>
          <div class="card-content">
            <button class="btn btn-primary" onclick="location.reload()">
              Recarregar página
            </button>
          </div>
        </div>
      `;
    }
  }

  // Inicializa quando o DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // API pública
  return {
    init,
    showError
  };
})();

// Exporta para uso global
window.App = App;
