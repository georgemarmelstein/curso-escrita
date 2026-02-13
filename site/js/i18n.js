/**
 * i18n.js - Sistema de Internacionalização
 * Escrita Jurídica com IA - Caderno de Exercícios
 */

const I18n = (function() {
  'use strict';

  // Estado
  let currentLang = 'pt';
  let translations = {};
  let isLoaded = false;
  const listeners = [];

  // Idiomas suportados
  const SUPPORTED_LANGS = ['pt', 'es', 'en'];
  const DEFAULT_LANG = 'pt';

  // Mapeamento de código do navegador para código do arquivo
  const LANG_MAP = {
    'pt': 'pt',
    'pt-BR': 'pt',
    'pt-PT': 'pt',
    'es': 'es',
    'es-ES': 'es',
    'es-AR': 'es',
    'es-MX': 'es',
    'en': 'en',
    'en-US': 'en',
    'en-GB': 'en'
  };

  /**
   * Inicializa o sistema de i18n
   */
  async function init() {
    // Detecta idioma preferido
    currentLang = detectLanguage();

    // Carrega traduções
    await loadTranslations(currentLang);

    // Marca como carregado
    isLoaded = true;

    // Notifica listeners
    notifyListeners();

    return translations;
  }

  /**
   * Normaliza código de idioma para código suportado
   */
  function normalizeLang(lang) {
    if (!lang) return null;
    // Verifica mapeamento direto
    if (LANG_MAP[lang]) return LANG_MAP[lang];
    // Verifica prefixo (pt-XX -> pt)
    const prefix = lang.split('-')[0];
    if (SUPPORTED_LANGS.includes(prefix)) return prefix;
    return null;
  }

  /**
   * Detecta o idioma preferido do usuário
   */
  function detectLanguage() {
    // 1. Verifica localStorage
    const saved = localStorage.getItem('curso-escrita-lang');
    const normalizedSaved = normalizeLang(saved);
    if (normalizedSaved) {
      return normalizedSaved;
    }

    // 2. Verifica parâmetro da URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    const normalizedUrl = normalizeLang(urlLang);
    if (normalizedUrl) {
      return normalizedUrl;
    }

    // 3. Verifica idioma do navegador
    const browserLang = navigator.language || navigator.userLanguage;
    const normalizedBrowser = normalizeLang(browserLang);
    if (normalizedBrowser) {
      return normalizedBrowser;
    }

    // 4. Fallback para português
    return DEFAULT_LANG;
  }

  /**
   * Carrega arquivo de traduções
   */
  // Versão para cache-busting
  const VERSION = '6';

  async function loadTranslations(lang) {
    try {
      const response = await fetch(`i18n/${lang}.json?v=${VERSION}`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      translations = await response.json();

      // Se o idioma carregado não tem módulos, faz fallback para português
      if (!translations.modules || translations.modules.length === 0) {
        if (lang !== DEFAULT_LANG) {
          console.log(`${lang}.json não tem módulos, carregando português...`);
          currentLang = DEFAULT_LANG;
          return loadTranslations(DEFAULT_LANG);
        }
      }

      return translations;
    } catch (error) {
      console.warn(`Falha ao carregar ${lang}.json:`, error);

      // Se não for o idioma padrão, tenta carregar português
      if (lang !== DEFAULT_LANG) {
        console.log('Carregando idioma padrão (pt)...');
        currentLang = DEFAULT_LANG;
        return loadTranslations(DEFAULT_LANG);
      }

      // Se nem português carregar, retorna objeto vazio
      translations = {};
      return translations;
    }
  }

  /**
   * Muda o idioma atual
   */
  async function setLanguage(lang) {
    const normalizedLang = normalizeLang(lang);
    if (!normalizedLang) {
      console.error(`Idioma não suportado: ${lang}`);
      return false;
    }

    if (normalizedLang === currentLang) {
      return true;
    }

    // Salva preferência (normalizada)
    localStorage.setItem('curso-escrita-lang', normalizedLang);

    // Atualiza idioma atual
    currentLang = normalizedLang;

    // Carrega novas traduções
    await loadTranslations(normalizedLang);

    // Atualiza atributo lang do HTML
    document.documentElement.lang = normalizedLang;

    // Notifica listeners
    notifyListeners();

    return true;
  }

  /**
   * Obtém tradução por chave (suporta notação de ponto)
   * Exemplo: t('ui.copy') retorna translations.ui.copy
   */
  function t(key, params = {}) {
    const keys = key.split('.');
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Chave não encontrada
        console.warn(`Tradução não encontrada: ${key}`);
        return key;
      }
    }

    // Se não for string, retorna a chave
    if (typeof value !== 'string') {
      return key;
    }

    // Substitui parâmetros {{param}}
    return value.replace(/\{\{(\w+)\}\}/g, (match, param) => {
      return params[param] !== undefined ? params[param] : match;
    });
  }

  /**
   * Obtém um objeto/array de traduções
   */
  function getSection(key) {
    const keys = key.split('.');
    let value = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return null;
      }
    }

    return value;
  }

  /**
   * Retorna todos os módulos
   */
  function getModules() {
    return translations.modules || [];
  }

  /**
   * Retorna um módulo específico
   */
  function getModule(moduleId) {
    const modules = getModules();
    return modules.find(m => m.id === moduleId) || null;
  }

  /**
   * Retorna um exercício específico
   */
  function getExercise(exerciseId) {
    const modules = getModules();
    for (const module of modules) {
      const exercise = module.exercises?.find(e => e.id === exerciseId);
      if (exercise) {
        return { module, exercise };
      }
    }
    return null;
  }

  /**
   * Retorna o exercício anterior
   */
  function getPrevExercise(currentId) {
    const modules = getModules();
    let prevExercise = null;
    let prevModule = null;

    for (const module of modules) {
      for (const exercise of module.exercises || []) {
        if (exercise.id === currentId) {
          return prevExercise ? { module: prevModule, exercise: prevExercise } : null;
        }
        prevExercise = exercise;
        prevModule = module;
      }
    }
    return null;
  }

  /**
   * Retorna o próximo exercício
   */
  function getNextExercise(currentId) {
    const modules = getModules();
    let found = false;

    for (const module of modules) {
      for (const exercise of module.exercises || []) {
        if (found) {
          return { module, exercise };
        }
        if (exercise.id === currentId) {
          found = true;
        }
      }
    }
    return null;
  }

  /**
   * Conta total de exercícios
   */
  function getTotalExercises() {
    const modules = getModules();
    return modules.reduce((total, m) => total + (m.exercises?.length || 0), 0);
  }

  /**
   * Adiciona listener para mudança de idioma
   */
  function onLanguageChange(callback) {
    listeners.push(callback);
    return () => {
      const index = listeners.indexOf(callback);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }

  /**
   * Notifica todos os listeners
   */
  function notifyListeners() {
    listeners.forEach(callback => {
      try {
        callback(currentLang, translations);
      } catch (error) {
        console.error('Erro em listener de i18n:', error);
      }
    });
  }

  /**
   * Retorna idioma atual
   */
  function getLanguage() {
    return currentLang;
  }

  /**
   * Verifica se está carregado
   */
  function isReady() {
    return isLoaded;
  }

  // API pública
  return {
    init,
    setLanguage,
    getLanguage,
    t,
    getSection,
    getModules,
    getModule,
    getExercise,
    getPrevExercise,
    getNextExercise,
    getTotalExercises,
    onLanguageChange,
    isReady,
    SUPPORTED_LANGS
  };
})();

// Exporta para uso global
window.I18n = I18n;
