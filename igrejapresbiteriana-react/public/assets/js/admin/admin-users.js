/**
 * Gerenciamento de Usuários - Funções específicas para a seção de Usuários
 * Este arquivo complementa as funções em admin-data.js e admin-ui.js
 */

const AdminUsers = {
  /**
   * Carregar usuários do sistema
   * @returns {Promise} - Promessa que resolve com a lista de usuários
   */
  loadUsers: function () {
    return fetch("../admin/api/users-api.php", {
      method: "GET",
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          return data.users || [];
        } else {
          throw new Error(data.error || "Erro ao carregar usuários");
        }
      });
  },

  /**
   * Salvar um usuário (novo ou existente)
   * @param {Object} userData - Dados do usuário a ser salvo
   * @returns {Promise} - Promessa que resolve quando o usuário for salvo
   */
  saveUser: function (userData) {
    return fetch("../admin/api/users-api.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          return data;
        } else {
          throw new Error(data.error || "Erro ao salvar usuário");
        }
      });
  },

  /**
   * Excluir um usuário
   * @param {string} username - Nome de usuário a ser excluído
   * @returns {Promise} - Promessa que resolve quando o usuário for excluído
   */
  deleteUser: function (username) {
    return fetch("../admin/api/users-api.php", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
      credentials: "same-origin",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          return data;
        } else {
          throw new Error(data.error || "Erro ao excluir usuário");
        }
      });
  },

  /**
   * Renderizar tabela de usuários
   */
  renderUsersTable: function () {
    const tableBody = document.querySelector("#usuarios-table tbody");
    if (!tableBody) return;

    // Limpar tabela
    tableBody.innerHTML =
      '<tr><td colspan="5" class="loading-message"><i class="fas fa-circle-notch fa-spin"></i> Carregando usuários...</td></tr>';

    // Carregar usuários
    this.loadUsers()
      .then((users) => {
        if (users.length === 0) {
          tableBody.innerHTML =
            '<tr><td colspan="5" class="empty-message">Nenhum usuário encontrado</td></tr>';
          return;
        }

        // Limpar tabela
        tableBody.innerHTML = "";

        // Adicionar cada usuário à tabela
        users.forEach((user) => {
          const row = document.createElement("tr");

          // Formatar data de criação
          let createdDate = "N/A";
          if (user.created) {
            const date = new Date(user.created);
            createdDate = date.toLocaleString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            });
          }

          row.innerHTML = `
                        <td>${user.username}</td>
                        <td>${user.name}</td>
                        <td>${this.translateRole(user.role)}</td>
                        <td>${createdDate}</td>
                        <td class="table-actions">
                            <button class="btn-icon edit-user-btn" data-username="${
                              user.username
                            }" title="Editar usuário">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn-icon delete-user-btn" data-username="${
                              user.username
                            }" title="Excluir usuário">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    `;

          tableBody.appendChild(row);
        });

        // Configurar botões de ação
        this.setupUserActionButtons();
      })
      .catch((error) => {
        console.error("Erro ao carregar usuários:", error);
        tableBody.innerHTML = `<tr><td colspan="5" class="error-message"><i class="fas fa-exclamation-circle"></i> ${error.message}</td></tr>`;
      });
  },

  /**
   * Traduzir papel do usuário para português
   * @param {string} role - Papel do usuário (admin, editor, viewer)
   * @returns {string} - Tradução em português
   */
  translateRole: function (role) {
    const translations = {
      admin: "Administrador",
      editor: "Editor",
      viewer: "Visualizador",
    };

    return translations[role] || role;
  },

  /**
   * Configurar botões de ação para usuários
   */
  setupUserActionButtons: function () {
    // Botões de edição
    const editButtons = document.querySelectorAll(".edit-user-btn");
    editButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const username = button.getAttribute("data-username");
        this.openUserModal(username);
      });
    });

    // Botões de exclusão
    const deleteButtons = document.querySelectorAll(".delete-user-btn");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const username = button.getAttribute("data-username");
        this.confirmDeleteUser(username);
      });
    });
  },

  /**
   * Abrir modal para adicionar/editar usuário
   * @param {string} username - Nome de usuário a ser editado (opcional)
   */
  openUserModal: function (username = null) {
    // Verificar se o modal já existe
    let modal = document.getElementById("modal-usuario");

    // Se não existir, criar o modal
    if (!modal) {
      modal = document.createElement("div");
      modal.className = "admin-modal";
      modal.id = "modal-usuario";

      modal.innerHTML = `
                <div class="admin-modal-content">
                    <div class="admin-modal-header">
                        <h3>${
                          username ? "Editar Usuário" : "Adicionar Usuário"
                        }</h3>
                        <button class="admin-modal-close">&times;</button>
                    </div>
                    <div class="admin-modal-body">
                        <div class="form-group">
                            <label for="usuario-username">Nome de usuário</label>
                            <input type="text" id="usuario-username" name="usuario-username" required ${
                              username ? "readonly" : ""
                            }>
                            ${
                              username
                                ? '<p class="input-info">O nome de usuário não pode ser alterado.</p>'
                                : ""
                            }
                        </div>
                        <div class="form-group">
                            <label for="usuario-name">Nome completo</label>
                            <input type="text" id="usuario-name" name="usuario-name" required>
                        </div>
                        <div class="form-group">
                            <label for="usuario-password">Senha ${
                              username
                                ? "(deixe em branco para manter a atual)"
                                : ""
                            }</label>
                            <div class="input-icon-wrapper">
                                <input type="password" id="usuario-password" name="usuario-password" ${
                                  username ? "" : "required"
                                }>
                                <button type="button" class="toggle-password" aria-label="Mostrar senha">
                                    <i class="far fa-eye"></i>
                                </button>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="usuario-role">Função</label>
                            <select id="usuario-role" name="usuario-role" required>
                                <option value="admin">Administrador</option>
                                <option value="editor">Editor</option>
                                <option value="viewer">Visualizador</option>
                            </select>
                        </div>
                    </div>
                    <div class="admin-modal-footer">
                        <button class="btn-secondary admin-modal-cancel">Cancelar</button>
                        <button class="btn-primary" id="usuario-save">Salvar</button>
                    </div>
                </div>
            `;

      document.body.appendChild(modal);

      // Configurar botão de fechar
      const closeButtons = modal.querySelectorAll(
        ".admin-modal-close, .admin-modal-cancel"
      );
      closeButtons.forEach((button) => {
        button.addEventListener("click", () => {
          modal.classList.remove("open");
        });
      });

      // Configurar botão de alternar visibilidade da senha
      const togglePassword = modal.querySelector(".toggle-password");
      const passwordInput = modal.querySelector("#usuario-password");

      if (togglePassword && passwordInput) {
        togglePassword.addEventListener("click", function () {
          const type =
            passwordInput.getAttribute("type") === "password"
              ? "text"
              : "password";
          passwordInput.setAttribute("type", type);

          // Alternar ícone
          const icon = this.querySelector("i");
          icon.classList.toggle("fa-eye");
          icon.classList.toggle("fa-eye-slash");
        });
      }

      // Configurar botão de salvar
      const saveButton = modal.querySelector("#usuario-save");
      saveButton.addEventListener("click", () => {
        this.saveUserFromModal();
      });
    }

    // Abrir o modal
    modal.classList.add("open");

    // Se for edição, carregar dados do usuário
    if (username) {
      this.loadUsers()
        .then((users) => {
          const user = users.find((u) => u.username === username);
          if (user) {
            // Preencher o formulário com os dados do usuário
            document.querySelector("#usuario-username").value = user.username;
            document.querySelector("#usuario-name").value = user.name;
            document.querySelector("#usuario-role").value = user.role;
          }
        })
        .catch((error) =>
          console.error("Erro ao carregar dados do usuário:", error)
        );
    } else {
      // Limpar o formulário para novo usuário
      document.querySelector("#usuario-username").value = "";
      document.querySelector("#usuario-name").value = "";
      document.querySelector("#usuario-password").value = "";
      document.querySelector("#usuario-role").value = "editor"; // Valor padrão
    }
  },

  /**
   * Salvar usuário a partir do modal
   */
  saveUserFromModal: function () {
    // Obter dados do formulário
    const username = document.querySelector("#usuario-username").value;
    const name = document.querySelector("#usuario-name").value;
    const password = document.querySelector("#usuario-password").value;
    const role = document.querySelector("#usuario-role").value;

    // Validar dados
    if (!username || !name || !role) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    // Preparar dados
    const userData = {
      username: username,
      name: name,
      role: role,
    };

    // Incluir senha apenas se fornecida
    if (password) {
      userData.password = password;
    }

    // Exibir indicador de carregamento
    const saveButton = document.querySelector("#usuario-save");
    const originalText = saveButton.textContent;
    saveButton.innerHTML =
      '<i class="fas fa-circle-notch fa-spin"></i> Salvando...';
    saveButton.disabled = true;

    // Salvar usuário
    this.saveUser(userData)
      .then((result) => {
        // Fechar modal
        document.querySelector("#modal-usuario").classList.remove("open");

        // Exibir mensagem de sucesso
        showSuccessMessage(result.message);

        // Atualizar tabela
        this.renderUsersTable();
      })
      .catch((error) => {
        console.error("Erro ao salvar usuário:", error);
        alert(`Erro ao salvar usuário: ${error.message}`);
      })
      .finally(() => {
        // Restaurar botão
        saveButton.innerHTML = originalText;
        saveButton.disabled = false;
      });
  },

  /**
   * Confirmar exclusão de usuário
   * @param {string} username - Nome de usuário a ser excluído
   */
  confirmDeleteUser: function (username) {
    if (
      !confirm(
        `Tem certeza que deseja excluir o usuário "${username}"? Esta ação não pode ser desfeita.`
      )
    ) {
      return;
    }

    // Exibir indicador de carregamento na linha da tabela
    const row = document
      .querySelector(`[data-username="${username}"]`)
      .closest("tr");
    const originalContent = row.innerHTML;
    row.innerHTML = `<td colspan="5" class="loading-message"><i class="fas fa-circle-notch fa-spin"></i> Excluindo usuário...</td>`;

    // Excluir usuário
    this.deleteUser(username)
      .then((result) => {
        // Exibir mensagem de sucesso
        showSuccessMessage(result.message);

        // Atualizar tabela
        this.renderUsersTable();
      })
      .catch((error) => {
        console.error("Erro ao excluir usuário:", error);
        alert(`Erro ao excluir usuário: ${error.message}`);

        // Restaurar linha
        row.innerHTML = originalContent;
      });
  },

  /**
   * Inicializar o módulo
   */
  init: function () {
    // Botão para adicionar usuário
    const addButton = document.getElementById("add-usuario-btn");
    if (addButton) {
      addButton.addEventListener("click", () => {
        this.openUserModal();
      });
    }

    // Botão para salvar alterações (atualização em lote)
    const saveButton = document.getElementById("save-usuarios-btn");
    if (saveButton) {
      saveButton.addEventListener("click", () => {
        alert("Esta funcionalidade ainda não está disponível.");
      });
    }

    // Carregar tabela de usuários
    this.renderUsersTable();
  },
};

// Inicializar após o DOM estar pronto
document.addEventListener("DOMContentLoaded", function () {
  // Verificar se estamos na página de administração
  if (document.querySelector(".admin-body")) {
    // Inicializar após o AdminUI
    const adminUILoaded = setInterval(() => {
      if (typeof AdminUI !== "undefined" && AdminUI.currentSection) {
        clearInterval(adminUILoaded);
        AdminUsers.init();
      }
    }, 100);
  }
});
