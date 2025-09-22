/**
 * Admin Core - Funcionalidades principais do painel administrativo
 * Este script gerencia a integração com o sistema de dados dinâmicos
 */

// Garantir que o script só é executado após o carregamento do DOM
document.addEventListener("DOMContentLoaded", function () {
  // Verificar se o usuário está autenticado através da API
  fetch("../admin/api/auth.php", {
    method: "GET",
    credentials: "same-origin",
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.authenticated) {
        // Usuário está autenticado, inicializar o painel
        const usernameElement = document.querySelector(".admin-username");
        if (usernameElement) {
          usernameElement.textContent = `Olá, ${data.username}`;
        }

        // Inicializar o painel administrativo
        initAdminPanel();
      } else {
        // Usuário não está autenticado, redirecionar para login
        window.location.href = "../login.html";
      }
    })
    .catch((error) => {
      console.error("Erro ao verificar autenticação:", error);
      window.location.href = "../login.html";
    });
});

/**
 * Inicializar o painel administrativo e suas funcionalidades
 */
function initAdminPanel() {
  // Verificar se o script de atualização dinâmica está disponível
  if (typeof window.SiteAPI === "undefined") {
    // Se não estiver no contexto do site principal, carregar o script
    loadSiteAPI()
      .then(() => {
        console.log("API do site carregada com sucesso!");
        AdminData.loadAllData();

        // Configurar os botões de salvamento após carregar os dados
        setupSaveButtons();
      })
      .catch((error) => {
        console.error("Erro ao carregar a API do site:", error);
        showWarningMessage(
          "A API do site não pôde ser carregada. Usando dados de backup."
        );

        // Mesmo com falha na API, ainda tentamos carregar dados do armazenamento
        AdminData.loadAllData();

        // Configurar os botões de salvamento
        setupSaveButtons();
      });
  } else {
    // Se já estiver carregado, apenas carregar os dados
    AdminData.loadAllData();

    // Configurar os botões de salvamento após carregar os dados
    setupSaveButtons();
  }

  // Inicializar a interface do usuário
  AdminUI.init();
}

/**
 * Carregar o script de atualização dinâmica
 * @returns {Promise} - Promessa que resolve quando o script é carregado
 */
function loadSiteAPI() {
  return new Promise((resolve, reject) => {
    // Verificar se o script já está carregado
    if (typeof window.SiteAPI !== "undefined" && window.SiteAPI.dados) {
      console.log("SiteAPI já está carregada, usando dados existentes");
      resolve();
      return;
    }

    // Caso contrário, carregar o script
    const script = document.createElement("script");
    script.src = "../assets/js/atualizador-conteudo-dinamico.js";
    script.onload = () => {
      // Verificar se a SiteAPI foi carregada corretamente
      if (typeof window.SiteAPI === "undefined" || !window.SiteAPI.dados) {
        console.warn(
          "SiteAPI foi carregada mas não está configurada corretamente"
        );

        // Criamos uma API básica se necessário
        window.SiteAPI = {
          dados: AdminData.createBasicDataStructure(),
          atualizar: function () {
            console.log("Atualização simulada");
          },
          atualizarDados: function (novosDados) {
            Object.assign(window.SiteAPI.dados, novosDados);
            console.log("Dados atualizados (modo offline)");
          },
        };
      }

      console.log("SiteAPI carregada com sucesso!");
      resolve();
    };
    script.onerror = () =>
      reject(new Error("Falha ao carregar o script de atualização dinâmica"));
    document.body.appendChild(script);
  });
}

/**
 * Exibir mensagem de sucesso
 * @param {string} message - Mensagem de sucesso a ser exibida
 */
function showSuccessMessage(message) {
  const successDiv = document.createElement("div");
  successDiv.className = "admin-success-message";
  successDiv.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;

  document.querySelector(".admin-content").prepend(successDiv);

  setTimeout(() => {
    successDiv.classList.add("fade-out");
    setTimeout(() => successDiv.remove(), 500);
  }, 5000);
}

/**
 * Exibir mensagem de erro
 * @param {string} message - Mensagem de erro a ser exibida
 */
function showErrorMessage(message) {
  const errorDiv = document.createElement("div");
  errorDiv.className = "admin-error-message";
  errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;

  document.querySelector(".admin-content").prepend(errorDiv);

  setTimeout(() => {
    errorDiv.classList.add("fade-out");
    setTimeout(() => errorDiv.remove(), 500);
  }, 5000);
}

/**
 * Exibir mensagem de aviso
 * @param {string} message - Mensagem de aviso a ser exibida
 */
function showWarningMessage(message) {
  const warningDiv = document.createElement("div");
  warningDiv.className = "admin-warning-message";
  warningDiv.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${message}`;

  document.querySelector(".admin-content").prepend(warningDiv);

  setTimeout(() => {
    warningDiv.classList.add("fade-out");
    setTimeout(() => warningDiv.remove(), 500);
  }, 8000);
}

/**
 * Configurar event listeners para salvar dados
 */
function setupSaveButtons() {
  // Botão de salvar configurações gerais
  const saveConfigBtn = document.getElementById("save-config-btn");
  if (saveConfigBtn) {
    saveConfigBtn.addEventListener("click", function () {
      AdminData.saveInfoGerais();
      AdminData.saveLayoutConfig();
      AdminData.saveToServer();
    });
  }

  // Botão de salvar eventos destacados
  const saveEventosDestacadosBtn = document.getElementById(
    "save-eventos-destacados-btn"
  );
  if (saveEventosDestacadosBtn) {
    saveEventosDestacadosBtn.addEventListener("click", function () {
      AdminData.saveEventosDestacados();
      AdminData.saveToServer();
    });
  }

  // Botão de salvar agenda de eventos
  const saveAgendaBtn = document.getElementById("save-agenda-btn");
  if (saveAgendaBtn) {
    saveAgendaBtn.addEventListener("click", function () {
      AdminData.saveAgendaEventos();
      AdminData.saveToServer();
    });
  }

  // Botão de salvar cultos
  const saveCultosBtn = document.getElementById("save-cultos-btn");
  if (saveCultosBtn) {
    saveCultosBtn.addEventListener("click", function () {
      AdminData.saveCultos();
      AdminData.saveToServer();
    });
  }

  // Botões de salvar escalas
  const saveEscalaLouvorBtn = document.getElementById("save-escala-louvor-btn");
  const saveEscalaRecepcaoBtn = document.getElementById(
    "save-escala-recepcao-btn"
  );
  const saveEscolaBtn = document.getElementById(
    "save-escala-escola-dominical-btn"
  );
  const saveSonoBtn = document.getElementById("save-escala-sonoplastia-btn");

  if (saveEscalaLouvorBtn) {
    saveEscalaLouvorBtn.addEventListener("click", function () {
      AdminData.saveEscalas("louvor");
      AdminData.saveToServer();
    });
  }

  if (saveEscalaRecepcaoBtn) {
    saveEscalaRecepcaoBtn.addEventListener("click", function () {
      AdminData.saveEscalas("recepcao");
      AdminData.saveToServer();
    });
  }

  if (saveEscolaBtn) {
    saveEscolaBtn.addEventListener("click", function () {
      AdminData.saveEscalas("escolaDominical");
      AdminData.saveToServer();
    });
  }

  if (saveSonoBtn) {
    saveSonoBtn.addEventListener("click", function () {
      AdminData.saveEscalas("sonoplastia");
      AdminData.saveToServer();
    });
  }

  // Botão de salvar dízimos
  const saveDizimosBtn = document.getElementById("save-dizimos-btn");
  if (saveDizimosBtn) {
    saveDizimosBtn.addEventListener("click", function () {
      AdminData.saveDizimosData();
      AdminData.saveToServer();
    });
  }

  // Botão de salvar contato
  const saveContatoBtn = document.getElementById("save-contato-btn");
  if (saveContatoBtn) {
    saveContatoBtn.addEventListener("click", function () {
      AdminData.saveContato();
      AdminData.saveToServer();
    });
  }

  // Botão de salvar redes sociais
  const saveRedesBtn = document.getElementById("save-redes-sociais-btn");
  if (saveRedesBtn) {
    saveRedesBtn.addEventListener("click", function () {
      AdminData.saveRedesSociais();
      AdminData.saveToServer();
    });
  }

  // Botão de backup
  const backupBtn = document.getElementById("btn-backup-agora");
  if (backupBtn) {
    backupBtn.addEventListener("click", function () {
      // Criar backup manual
      fetch("../admin/api/data.php", {
        method: "PUT",
        credentials: "same-origin",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            showSuccessMessage("Backup criado com sucesso!");
          } else {
            showErrorMessage("Erro ao criar backup: " + data.message);
          }
        })
        .catch((error) => {
          console.error("Erro ao criar backup:", error);
          showErrorMessage("Erro ao criar backup");
        });
    });
  }

  // Botão de salvar todas as alterações
  const saveAllBtn = document.getElementById("save-all-btn");
  if (saveAllBtn) {
    saveAllBtn.addEventListener("click", function () {
      // Mostrar mensagem de carregamento
      this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Salvando...';
      this.disabled = true;

      try {
        // Salvar todas as configurações
        AdminData.saveAllConfigurations();

        // Mensagem de sucesso
        setTimeout(() => {
          this.innerHTML = '<i class="fas fa-save"></i> Salvar Tudo';
          this.disabled = false;
          showSuccessMessage("Todas as alterações foram salvas com sucesso!");
        }, 1000);
      } catch (error) {
        console.error("Erro ao salvar todas as alterações:", error);
        showErrorMessage("Erro ao salvar todas as alterações");

        // Restaurar botão
        this.innerHTML = '<i class="fas fa-save"></i> Salvar Tudo';
        this.disabled = false;
      }
    });
  }

  // Botão para visualizar o site
  const viewSiteBtn = document.getElementById("btn-view-site");
  if (viewSiteBtn) {
    viewSiteBtn.addEventListener("click", function () {
      // Abrir a página inicial do site em uma nova aba
      window.open("../index.html", "_blank");
    });
  }

  // Botão para adicionar evento rápido
  const addEventoBtn = document.getElementById("btn-add-evento");
  if (addEventoBtn) {
    addEventoBtn.addEventListener("click", function () {
      // Mudar para a seção de eventos
      const eventosMenuItem = document.querySelector(
        '.admin-menu-item[data-target="eventos"]'
      );
      if (eventosMenuItem) {
        eventosMenuItem.click();

        // Após um pequeno delay, clicar no botão de adicionar evento
        setTimeout(() => {
          const addEventoRealBtn = document.getElementById("add-evento-btn");
          if (addEventoRealBtn) {
            addEventoRealBtn.click();
          }
        }, 300);
      }
    });
  }

  // Botão para atualizar escalas
  const updateEscalasBtn = document.getElementById("btn-update-escalas");
  if (updateEscalasBtn) {
    updateEscalasBtn.addEventListener("click", function () {
      // Mudar para a seção de escalas
      const escalasMenuItem = document.querySelector(
        '.admin-menu-item[data-target="escalas"]'
      );
      if (escalasMenuItem) {
        escalasMenuItem.click();
      }
    });
  }
}

/**
 * Sistema de armazenamento para os dados do site
 * Permite salvar e recuperar os dados no servidor e manter um cache local
 */
const AdminStorage = {
  /**
   * Salvar dados no localStorage e no servidor
   * @param {string} key - Chave para identificar os dados
   * @param {any} data - Dados a serem salvos
   * @returns {Promise} - Promessa que resolve quando os dados forem salvos
   */
  save: function (key, data) {
    try {
      // Salvar no localStorage como cache
      localStorage.setItem(`ipm_admin_${key}`, JSON.stringify(data));

      // Se for o objeto dadosIgreja, salvar no servidor
      if (key === "dadosIgreja") {
        return fetch("../admin/api/data.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials: "same-origin",
        }).then((response) => response.json());
      }

      return Promise.resolve({ success: true });
    } catch (error) {
      console.error("Erro ao salvar dados:", error);
      return Promise.reject(error);
    }
  },

  /**
   * Recuperar dados do servidor ou localStorage como fallback
   * @param {string} key - Chave dos dados
   * @returns {Promise<any>} - Promessa que resolve com os dados recuperados
   */
  get: function (key) {
    try {
      // Se for o objeto dadosIgreja, buscar do servidor
      if (key === "dadosIgreja") {
        return fetch("../admin/api/data.php", {
          method: "GET",
          credentials: "same-origin",
        })
          .then((response) => response.json())
          .then((response) => {
            if (response.success && response.data) {
              // Atualizar o cache local
              localStorage.setItem(
                `ipm_admin_${key}`,
                JSON.stringify(response.data)
              );
              return response.data;
            } else {
              // Se não houver dados no servidor, usar o cache local
              const localData = localStorage.getItem(`ipm_admin_${key}`);
              return localData ? JSON.parse(localData) : null;
            }
          })
          .catch((error) => {
            console.error("Erro ao obter dados do servidor:", error);
            // Em caso de erro, usar o cache local
            const localData = localStorage.getItem(`ipm_admin_${key}`);
            return localData ? JSON.parse(localData) : null;
          });
      }

      // Para outras chaves, usar o localStorage
      const localData = localStorage.getItem(`ipm_admin_${key}`);
      return Promise.resolve(localData ? JSON.parse(localData) : null);
    } catch (error) {
      console.error("Erro ao recuperar dados do localStorage:", error);
      return null;
    }
  },

  /**
   * Remover dados do localStorage
   * @param {string} key - Chave dos dados a serem removidos
   */
  remove: function (key) {
    try {
      localStorage.removeItem(`ipm_admin_${key}`);
    } catch (error) {
      console.error("Erro ao remover dados do localStorage:", error);
    }
  },

  /**
   * Limpar todos os dados do admin no localStorage
   */
  clear: function () {
    try {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("ipm_admin_")) {
          localStorage.removeItem(key);
        }
      });
    } catch (error) {
      console.error("Erro ao limpar dados do localStorage:", error);
    }
  },

  /**
   * Criar um backup dos dados atuais
   * @returns {Promise<object>} - Promessa que resolve com o resultado da operação
   */
  createBackup: function () {
    return fetch("../admin/api/backup.php", {
      method: "PUT",
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          showSuccessMessage(`Backup criado com sucesso: ${data.backupFile}`);
        } else {
          showErrorMessage(data.error || "Erro ao criar backup");
        }
        return data;
      })
      .catch((error) => {
        console.error("Erro ao criar backup:", error);
        showErrorMessage(
          "Erro ao criar backup. Verifique o console para mais detalhes."
        );
        return { success: false, error: error.message };
      });
  },

  /**
   * Listar backups disponíveis
   * @returns {Promise<Array>} - Promessa que resolve com a lista de backups
   */
  listBackups: function () {
    return fetch("../admin/api/backup.php", {
      method: "GET",
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => data.backups || []);
  },

  /**
   * Restaurar um backup
   * @param {string} filename - Nome do arquivo de backup
   * @returns {Promise<object>} - Promessa que resolve com o resultado da operação
   */
  restoreBackup: function (filename) {
    if (
      !confirm(
        `Tem certeza que deseja restaurar o backup ${filename}? Esta ação irá substituir todos os dados atuais.`
      )
    ) {
      return Promise.resolve({ success: false, canceled: true });
    }

    return fetch("../admin/api/backup.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filename }),
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          showSuccessMessage(
            "Backup restaurado com sucesso! A página será recarregada."
          );
          setTimeout(() => window.location.reload(), 1500);
        } else {
          showErrorMessage(data.error || "Erro ao restaurar backup");
        }
        return data;
      })
      .catch((error) => {
        console.error("Erro ao restaurar backup:", error);
        showErrorMessage(
          "Erro ao restaurar backup. Verifique o console para mais detalhes."
        );
        return { success: false, error: error.message };
      });
  },
};
