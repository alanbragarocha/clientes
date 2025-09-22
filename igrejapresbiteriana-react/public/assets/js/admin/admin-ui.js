/**
 * Admin UI - Gerencia a interface do usuário do painel administrativo
 * Este script lida com a navegação, modais, abas e interações do painel
 */

const AdminUI = {
  // Estado atual do painel
  currentSection: "dashboard",
  currentTab: {},
  modalCurrentId: null,
  modalCurrentType: null,
  modalEditMode: false,

  /**
   * Inicializar a interface do usuário
   */
  init: function () {
    this.setupNavigation();
    this.setupTabs();
    this.setupModals();
    this.setupFileUploads();
    this.setupActionButtons();
  },

  /**
   * Configurar navegação do menu lateral
   */
  setupNavigation: function () {
    const menuItems = document.querySelectorAll(".admin-menu-item");

    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Remover classe ativa de todos os itens
        menuItems.forEach((i) => i.classList.remove("active"));

        // Adicionar classe ativa ao item clicado
        item.classList.add("active");

        // Obter ID da seção a ser exibida
        const target = item.getAttribute("data-target");
        this.showSection(target);
      });
    });
  },

  /**
   * Configurar abas dentro das seções
   */
  setupTabs: function () {
    const tabButtons = document.querySelectorAll(".admin-tab");

    tabButtons.forEach((tab) => {
      tab.addEventListener("click", () => {
        // Encontrar o conjunto de abas pai
        const tabsContainer = tab.parentElement;

        // Remover classe ativa de todas as abas do mesmo conjunto
        tabsContainer
          .querySelectorAll(".admin-tab")
          .forEach((t) => t.classList.remove("active"));

        // Adicionar classe ativa à aba clicada
        tab.classList.add("active");

        // Obter ID do conteúdo a ser exibido
        const target = tab.getAttribute("data-target");

        // Esconder todos os conteúdos de abas relacionados
        const allContents =
          document.querySelectorAll(`#${target}`).length > 0
            ? document.querySelectorAll(`#${target}`)[0].parentElement.children
            : [];

        Array.from(allContents).forEach((content) =>
          content.classList.remove("active")
        );

        // Exibir o conteúdo da aba clicada
        const targetContent = document.getElementById(target);
        if (targetContent) {
          targetContent.classList.add("active");

          // Armazenar a aba atual para esta seção
          this.currentTab[this.currentSection] = target;
        }
      });
    });
  },

  /**
   * Configurar modais
   */
  setupModals: function () {
    // Configurar todos os botões que abrem modais
    const modalTriggers = document.querySelectorAll('[id$="-btn"]');
    modalTriggers.forEach((trigger) => {
      // Procurar por padrões de ID que possam abrir modais
      const patterns = [
        { prefix: "add-", target: "modal" },
        { prefix: "edit-", target: "modal" },
      ];

      patterns.forEach((pattern) => {
        if (trigger.id.startsWith(pattern.prefix)) {
          const entityType = trigger.id
            .replace(pattern.prefix, "")
            .replace("-btn", "");
          const modalId = `modal-${entityType}`;
          const modal = document.getElementById(modalId);

          if (modal) {
            trigger.addEventListener("click", (e) => {
              e.preventDefault();

              // Configurar modo (adição ou edição)
              this.modalEditMode = trigger.id.startsWith("edit-");

              // Obter ID do item a ser editado (se aplicável)
              this.modalCurrentId = trigger.getAttribute("data-id");
              this.modalCurrentType = entityType;

              // Preencher o modal se estiver editando um item existente
              if (this.modalEditMode) {
                AdminData.fillModalForEditing(entityType, this.modalCurrentId);
              } else {
                // Limpar campos para adição de novo item
                this.clearModalFields(modal);
              }

              // Atualizar título do modal
              const modalTitle = modal.querySelector(".admin-modal-header h3");
              if (modalTitle) {
                modalTitle.textContent = this.modalEditMode
                  ? `Editar ${this.getEntityName(entityType)}`
                  : `Adicionar ${this.getEntityName(entityType)}`;
              }

              // Exibir o modal
              this.openModal(modalId);
            });
          }
        }
      });
    });

    // Configurar botões para fechar modais
    const closeButtons = document.querySelectorAll(
      ".admin-modal-close, .admin-modal-cancel"
    );
    closeButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const modal = button.closest(".admin-modal");
        if (modal) {
          this.closeModal(modal.id);
        }
      });
    });

    // Fechar modal ao clicar fora do conteúdo
    const modals = document.querySelectorAll(".admin-modal");
    modals.forEach((modal) => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          this.closeModal(modal.id);
        }
      });
    });

    // Configurar botões de salvar nos modais
    const saveButtons = document.querySelectorAll('[id$="-save"]');
    saveButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const entityType = button.id.replace("-save", "");
        this.saveModalData(entityType);
      });
    });
  },

  /**
   * Configurar campos de upload de arquivos
   */
  setupFileUploads: function () {
    const fileInputs = document.querySelectorAll('input[type="file"]');

    fileInputs.forEach((input) => {
      input.addEventListener("change", () => {
        // Obter nome do arquivo
        const fileName =
          input.files.length > 0
            ? input.files[0].name
            : "Nenhum arquivo selecionado";

        // Exibir nome do arquivo
        const fileNameSpan = input.parentElement.querySelector(".file-name");
        if (fileNameSpan) {
          fileNameSpan.textContent = fileName;
        }

        // Se for uma imagem, exibir pré-visualização
        if (
          input.files.length > 0 &&
          input.files[0].type.startsWith("image/")
        ) {
          const previewDiv =
            document.getElementById(`${input.id}-preview`) ||
            input.parentElement.parentElement.querySelector(".image-preview");
          if (previewDiv) {
            const reader = new FileReader();
            reader.onload = function (e) {
              previewDiv.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            };
            reader.readAsDataURL(input.files[0]);
          }
        }
      });
    });
  },

  /**
   * Configurar botões de ação
   */
  setupActionButtons: function () {
    // Botão para fazer backup
    const backupBtn = document.getElementById("backup-btn");
    if (backupBtn) {
      backupBtn.addEventListener("click", () => {
        this.createBackupFile();
      });
    }

    // Botão para restaurar backup
    const restoreBtn = document.getElementById("restore-btn");
    const restoreFile = document.getElementById("restore-file");
    if (restoreBtn && restoreFile) {
      restoreBtn.addEventListener("click", () => {
        restoreFile.click();
      });

      restoreFile.addEventListener("change", (e) => {
        if (e.target.files.length > 0) {
          this.loadBackupFile(e.target.files[0]);
        }
      });
    }

    // Botões para visualizar site
    const viewSiteBtn = document.getElementById("btn-view-site");
    if (viewSiteBtn) {
      viewSiteBtn.addEventListener("click", () => {
        window.open("../index.html", "_blank");
      });
    }

    // Botões para ações rápidas
    const addEventoBtn = document.getElementById("btn-add-evento");
    if (addEventoBtn) {
      addEventoBtn.addEventListener("click", () => {
        document
          .querySelector('.admin-menu-item[data-target="eventos"]')
          .click();
        setTimeout(() => {
          document.getElementById("add-evento-btn").click();
        }, 300);
      });
    }

    const updateEscalasBtn = document.getElementById("btn-update-escalas");
    if (updateEscalasBtn) {
      updateEscalasBtn.addEventListener("click", () => {
        document
          .querySelector('.admin-menu-item[data-target="escalas"]')
          .click();
      });
    }

    // Configurar botões de backup e restauração
    this.setupBackupButtons();
  },

  /**
   * Configurar botões para backup e restauração
   */
  setupBackupButtons: function () {
    // Botão para criar backup
    const backupBtn = document.getElementById("backup-btn");
    if (backupBtn) {
      backupBtn.addEventListener("click", () => {
        // Desabilitar o botão para evitar múltiplos cliques
        backupBtn.disabled = true;
        const originalText = backupBtn.innerHTML;
        backupBtn.innerHTML =
          '<i class="fas fa-circle-notch fa-spin"></i> Criando backup...';

        // Criar backup
        AdminStorage.createBackup().finally(() => {
          // Reabilitar o botão
          backupBtn.disabled = false;
          backupBtn.innerHTML = originalText;
        });
      });
    }

    // Botão para abrir modal de restauração
    const restoreBtn = document.getElementById("restore-btn");
    if (restoreBtn) {
      restoreBtn.addEventListener("click", () => {
        this.openBackupModal();
      });
    }
  },

  /**
   * Abrir modal de restauração de backup
   */
  openBackupModal: function () {
    const modal = document.getElementById("modal-backup");
    if (!modal) return;

    // Exibir o modal
    modal.classList.add("open");

    // Carregar lista de backups
    this.loadBackupsList();
  },

  /**
   * Carregar a lista de backups disponíveis
   */
  loadBackupsList: function () {
    const backupsList = document.querySelector(".admin-backups-list");
    if (!backupsList) return;

    // Mostrar loader
    backupsList.innerHTML =
      '<div class="admin-loading"><i class="fas fa-circle-notch fa-spin"></i> Carregando backups...</div>';

    // Buscar backups
    AdminStorage.listBackups()
      .then((backups) => {
        if (backups.length === 0) {
          backupsList.innerHTML =
            '<div class="admin-loading">Nenhum backup encontrado</div>';
          return;
        }

        // Limpar lista
        backupsList.innerHTML = "";

        // Adicionar cada backup à lista
        backups.forEach((backup) => {
          const backupItem = document.createElement("div");
          backupItem.className = "admin-backup-item";

          // Formatar data
          const date = new Date(backup.date * 1000);
          const formattedDate = date.toLocaleString("pt-BR", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          });

          // Formatar tamanho
          const formattedSize = this.formatFileSize(backup.size);

          backupItem.innerHTML = `
                        <div class="admin-backup-info">
                            <div class="admin-backup-filename">${backup.filename}</div>
                            <div class="admin-backup-date">${formattedDate}<span class="admin-backup-size">${formattedSize}</span></div>
                        </div>
                        <div class="admin-backup-actions">
                            <button class="btn-primary admin-backup-restore" data-filename="${backup.filename}">
                                <i class="fas fa-undo-alt"></i> Restaurar
                            </button>
                        </div>
                    `;

          backupsList.appendChild(backupItem);
        });

        // Adicionar event listeners para botões de restauração
        const restoreButtons = backupsList.querySelectorAll(
          ".admin-backup-restore"
        );
        restoreButtons.forEach((button) => {
          button.addEventListener("click", (e) => {
            const filename = e.currentTarget.getAttribute("data-filename");
            if (filename) {
              AdminStorage.restoreBackup(filename);
            }
          });
        });
      })
      .catch((error) => {
        console.error("Erro ao carregar backups:", error);
        backupsList.innerHTML =
          '<div class="admin-loading">Erro ao carregar backups</div>';
      });
  },

  /**
   * Formatar tamanho de arquivo
   * @param {number} bytes - Tamanho em bytes
   * @returns {string} - Tamanho formatado
   */
  formatFileSize: function (bytes) {
    if (bytes < 1024) return bytes + " B";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / 1048576).toFixed(1) + " MB";
  },

  /**
   * Exibir uma seção específica do painel
   * @param {string} sectionId - ID da seção a ser exibida
   */
  showSection: function (sectionId) {
    // Esconder todas as seções
    document.querySelectorAll(".admin-section").forEach((section) => {
      section.classList.remove("active");
    });

    // Exibir a seção solicitada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add("active");
      this.currentSection = sectionId;

      // Se houver uma aba selecionada anteriormente para esta seção, selecioná-la
      if (this.currentTab[sectionId]) {
        const tab = targetSection.querySelector(
          `.admin-tab[data-target="${this.currentTab[sectionId]}"]`
        );
        if (tab) {
          tab.click();
        }
      }
    }
  },

  /**
   * Abrir um modal específico
   * @param {string} modalId - ID do modal a ser aberto
   */
  openModal: function (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("active");
      document.body.classList.add("modal-open");
    }
  },

  /**
   * Fechar um modal específico
   * @param {string} modalId - ID do modal a ser fechado
   */
  closeModal: function (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove("active");
      document.body.classList.remove("modal-open");

      // Limpar o estado atual do modal
      this.modalCurrentId = null;
      this.modalCurrentType = null;
      this.modalEditMode = false;
    }
  },

  /**
   * Limpar todos os campos de um modal
   * @param {HTMLElement} modal - Elemento modal a ser limpo
   */
  clearModalFields: function (modal) {
    const inputs = modal.querySelectorAll(
      'input:not([type="file"]), select, textarea'
    );
    inputs.forEach((input) => {
      if (input.type === "checkbox" || input.type === "radio") {
        input.checked = false;
      } else {
        input.value = "";
      }
    });

    // Limpar pré-visualizações de imagens
    const imagePreviews = modal.querySelectorAll(".image-preview");
    imagePreviews.forEach((preview) => {
      preview.innerHTML = "";
    });
  },

  /**
   * Salvar dados do modal
   * @param {string} entityType - Tipo de entidade (evento, culto, etc.)
   */
  saveModalData: function (entityType) {
    // Obter dados do formulário
    const modal = document.getElementById(`modal-${entityType}`);
    if (!modal) return;

    const formData = this.getFormData(modal);

    // Validar dados
    if (!this.validateFormData(entityType, formData)) {
      return; // Parar se a validação falhar
    }

    // Salvar dados (adição ou edição)
    if (this.modalEditMode) {
      AdminData.updateData(entityType, this.modalCurrentId, formData);
    } else {
      AdminData.addData(entityType, formData);
    }

    // Fechar modal
    this.closeModal(`modal-${entityType}`);

    // Exibir mensagem de sucesso
    this.showSuccessMessage(
      `${this.getEntityName(entityType)} ${
        this.modalEditMode ? "atualizado" : "adicionado"
      } com sucesso!`
    );

    // Recarregar dados na interface
    AdminData.refreshDataView(entityType);
  },

  /**
   * Obter dados de um formulário
   * @param {HTMLElement} formContainer - Contêiner do formulário
   * @returns {Object} Objeto com os dados do formulário
   */
  getFormData: function (formContainer) {
    const data = {};
    const inputs = formContainer.querySelectorAll(
      'input:not([type="file"]), select, textarea'
    );

    inputs.forEach((input) => {
      const name = input.name.replace(/-/g, "_"); // Converter nomes HTML para formato JavaScript

      if (input.type === "checkbox") {
        data[name] = input.checked;
      } else if (input.type === "radio") {
        if (input.checked) {
          data[name] = input.value;
        }
      } else {
        data[name] = input.value;
      }
    });

    return data;
  },

  /**
   * Validar dados de formulário
   * @param {string} entityType - Tipo de entidade
   * @param {Object} data - Dados do formulário
   * @returns {boolean} - Verdadeiro se os dados são válidos
   */
  validateFormData: function (entityType, data) {
    // Regras de validação por tipo de entidade
    const validationRules = {
      evento: ["nome", "horario"],
      agenda: ["titulo", "horario", "dia"],
      culto: ["nome", "horario"],
      escala: ["data", "equipe"],
      "rede-social": ["nome", "url"],
    };

    // Obter regras para o tipo atual
    const rules = validationRules[entityType];
    if (!rules) return true;

    // Verificar se todos os campos obrigatórios estão preenchidos
    const missingFields = rules.filter((field) => !data[field]);

    if (missingFields.length > 0) {
      // Exibir mensagem de erro
      this.showErrorMessage(
        `Preencha todos os campos obrigatórios: ${missingFields.join(", ")}`
      );
      return false;
    }

    return true;
  },

  /**
   * Exibir mensagem de erro
   * @param {string} message - Mensagem a ser exibida
   */
  showErrorMessage: function (message) {
    this.showMessage(message, "error");
  },

  /**
   * Exibir mensagem de sucesso
   * @param {string} message - Mensagem a ser exibida
   */
  showSuccessMessage: function (message) {
    this.showMessage(message, "success");
  },

  /**
   * Exibir mensagem temporária
   * @param {string} message - Mensagem a ser exibida
   * @param {string} type - Tipo de mensagem ('error', 'success', 'warning')
   */
  showMessage: function (message, type = "info") {
    // Criar elemento de mensagem
    const messageDiv = document.createElement("div");
    messageDiv.className = `admin-message admin-${type}-message`;

    // Ícone baseado no tipo
    let icon;
    switch (type) {
      case "error":
        icon = "exclamation-circle";
        break;
      case "success":
        icon = "check-circle";
        break;
      case "warning":
        icon = "exclamation-triangle";
        break;
      default:
        icon = "info-circle";
    }

    // Adicionar conteúdo
    messageDiv.innerHTML = `<i class="fas fa-${icon}"></i> ${message}`;

    // Adicionar ao DOM
    document.querySelector(".admin-content").prepend(messageDiv);

    // Remover após alguns segundos
    setTimeout(() => {
      messageDiv.classList.add("fade-out");
      setTimeout(() => messageDiv.remove(), 500);
    }, 3000);
  },

  /**
   * Obter nome amigável para uma entidade
   * @param {string} entityType - Tipo de entidade
   * @returns {string} Nome amigável
   */
  getEntityName: function (entityType) {
    const names = {
      evento: "Evento",
      agenda: "Evento na Agenda",
      culto: "Culto",
      "escala-louvor": "Escala de Louvor",
      "escala-recepcao": "Escala de Recepção",
      "escala-escola-dominical": "Escala de Escola Dominical",
      "escala-sonoplastia": "Escala de Sonoplastia",
      escala: "Escala",
      "rede-social": "Rede Social",
    };

    return names[entityType] || entityType;
  },

  /**
   * Criar arquivo de backup para download
   */
  createBackupFile: function () {
    // Obter dados do backup
    const backupData = AdminStorage.createBackup();

    // Converter para JSON
    const jsonString = JSON.stringify(backupData, null, 2);

    // Criar blob e link para download
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    // Criar link de download
    const a = document.createElement("a");
    a.href = url;
    a.download = `igreja-presbiteriana-backup-${new Date()
      .toISOString()
      .slice(0, 10)}.json`;
    a.click();

    // Liberar URL
    URL.revokeObjectURL(url);

    // Exibir mensagem de sucesso
    this.showSuccessMessage("Backup criado com sucesso!");
  },

  /**
   * Carregar arquivo de backup
   * @param {File} file - Arquivo de backup
   */
  loadBackupFile: function (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        // Tentar fazer parse do JSON
        const backupData = JSON.parse(e.target.result);

        // Confirmar restauração
        if (
          confirm(
            "Tem certeza que deseja restaurar este backup? Todos os dados atuais serão substituídos."
          )
        ) {
          // Restaurar dados
          AdminStorage.restoreBackup(backupData);

          // Recarregar todos os dados na interface
          AdminData.loadAllData();

          // Exibir mensagem de sucesso
          this.showSuccessMessage(
            "Backup restaurado com sucesso! A página será recarregada."
          );

          // Recarregar a página após alguns segundos
          setTimeout(() => window.location.reload(), 2000);
        }
      } catch (error) {
        console.error("Erro ao carregar arquivo de backup:", error);
        this.showErrorMessage("Arquivo de backup inválido!");
      }
    };

    reader.onerror = () => {
      this.showErrorMessage("Erro ao ler o arquivo!");
    };

    reader.readAsText(file);
  },
};
