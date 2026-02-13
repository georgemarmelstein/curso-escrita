/**
 * progress.js - Sistema de Progresso e Persistência
 * Escrita Jurídica com IA - Caderno de Exercícios
 */

const Progress = (function() {
  'use strict';

  // Constantes
  const STORAGE_KEY = 'curso-escrita-progress';
  const VERSION = 1;

  // Estado
  let data = null;
  const listeners = [];

  /**
   * Estrutura padrão do progresso
   */
  function getDefaultData() {
    return {
      version: VERSION,
      lastAccess: new Date().toISOString(),
      lastExercise: null,
      exercises: {}
    };
  }

  /**
   * Inicializa o sistema de progresso
   */
  function init() {
    load();
    return data;
  }

  /**
   * Carrega dados do localStorage
   */
  function load() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);

        // Verifica versão
        if (parsed.version === VERSION) {
          data = parsed;
        } else {
          // Migração de versão (se necessário no futuro)
          console.log('Migrando dados de progresso...');
          data = migrateData(parsed);
        }
      } else {
        data = getDefaultData();
      }
    } catch (error) {
      console.error('Erro ao carregar progresso:', error);
      data = getDefaultData();
    }

    return data;
  }

  /**
   * Salva dados no localStorage
   */
  function save() {
    try {
      data.lastAccess = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      notifyListeners();
      return true;
    } catch (error) {
      console.error('Erro ao salvar progresso:', error);
      return false;
    }
  }

  /**
   * Migra dados de versão antiga
   */
  function migrateData(oldData) {
    // Por enquanto, apenas reseta
    // No futuro, implementar lógica de migração
    return getDefaultData();
  }

  /**
   * Obtém progresso de um exercício
   */
  function getExercise(exerciseId) {
    if (!data || !data.exercises[exerciseId]) {
      return {
        status: 'not_started',
        checklist: [],
        completedAt: null
      };
    }
    return data.exercises[exerciseId];
  }

  /**
   * Define progresso de um exercício
   */
  function setExercise(exerciseId, progress) {
    if (!data) {
      data = getDefaultData();
    }

    data.exercises[exerciseId] = {
      ...data.exercises[exerciseId],
      ...progress
    };

    // Atualiza status baseado no checklist
    updateStatus(exerciseId);

    save();
  }

  /**
   * Atualiza um item do checklist
   */
  function toggleChecklistItem(exerciseId, index, checked) {
    const exercise = getExercise(exerciseId);
    const checklist = [...(exercise.checklist || [])];

    // Garante que o array tem tamanho suficiente
    while (checklist.length <= index) {
      checklist.push(false);
    }

    checklist[index] = checked;

    setExercise(exerciseId, { checklist });
  }

  /**
   * Atualiza status do exercício baseado no checklist
   */
  function updateStatus(exerciseId) {
    const exercise = data.exercises[exerciseId];
    if (!exercise) return;

    const checklist = exercise.checklist || [];
    const checked = checklist.filter(Boolean).length;
    const total = checklist.length;

    let status;
    if (total === 0 || checked === 0) {
      status = 'not_started';
    } else if (checked === total) {
      status = 'completed';
      if (!exercise.completedAt) {
        exercise.completedAt = new Date().toISOString();
      }
    } else {
      status = 'in_progress';
    }

    exercise.status = status;
  }

  /**
   * Define o último exercício visitado
   */
  function setLastExercise(exerciseId) {
    if (!data) {
      data = getDefaultData();
    }
    data.lastExercise = exerciseId;
    save();
  }

  /**
   * Obtém o último exercício visitado
   */
  function getLastExercise() {
    return data?.lastExercise || null;
  }

  /**
   * Calcula progresso de um módulo
   */
  function getModuleProgress(moduleExercises) {
    if (!moduleExercises || moduleExercises.length === 0) {
      return { completed: 0, total: 0, percentage: 0 };
    }

    const completed = moduleExercises.filter(ex => {
      const progress = getExercise(ex.id);
      return progress.status === 'completed';
    }).length;

    const total = moduleExercises.length;
    const percentage = Math.round((completed / total) * 100);

    return { completed, total, percentage };
  }

  /**
   * Calcula progresso global
   */
  function getGlobalProgress() {
    const modules = I18n.getModules();
    let totalCompleted = 0;
    let totalExercises = 0;

    for (const module of modules) {
      const exercises = module.exercises || [];
      totalExercises += exercises.length;

      for (const ex of exercises) {
        if (getExercise(ex.id).status === 'completed') {
          totalCompleted++;
        }
      }
    }

    const percentage = totalExercises > 0
      ? Math.round((totalCompleted / totalExercises) * 100)
      : 0;

    return {
      completed: totalCompleted,
      total: totalExercises,
      percentage
    };
  }

  /**
   * Reseta todo o progresso
   */
  function reset() {
    if (confirm('Tem certeza que deseja resetar todo o progresso? Esta ação não pode ser desfeita.')) {
      data = getDefaultData();
      save();
      notifyListeners();
      return true;
    }
    return false;
  }

  /**
   * Exporta dados de progresso
   */
  function exportData() {
    return JSON.stringify(data, null, 2);
  }

  /**
   * Importa dados de progresso
   */
  function importData(jsonString) {
    try {
      const imported = JSON.parse(jsonString);
      if (imported.version !== VERSION) {
        throw new Error('Versão incompatível');
      }
      data = imported;
      save();
      notifyListeners();
      return true;
    } catch (error) {
      console.error('Erro ao importar progresso:', error);
      return false;
    }
  }

  /**
   * Adiciona listener para mudanças
   */
  function onChange(callback) {
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
  function notifyListeners() {
    const globalProgress = getGlobalProgress();
    listeners.forEach(callback => {
      try {
        callback(data, globalProgress);
      } catch (error) {
        console.error('Erro em listener de progresso:', error);
      }
    });
  }

  // API pública
  return {
    init,
    load,
    save,
    getExercise,
    setExercise,
    toggleChecklistItem,
    setLastExercise,
    getLastExercise,
    getModuleProgress,
    getGlobalProgress,
    reset,
    exportData,
    importData,
    onChange
  };
})();

// Exporta para uso global
window.Progress = Progress;
