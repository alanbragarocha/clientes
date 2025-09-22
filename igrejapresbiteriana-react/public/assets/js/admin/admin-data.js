/**
 * Admin Data - Gerencia os dados do painel administrativo
 * Este script interage com o SiteAPI para gerenciar os dados do site
 */

const AdminData = {
  // Cache dos dados carregados
  data: {}
  /**
   * Carregar todos os dados para o painel
   */,
  loadAllData: function () {
    // Verificar primeiro se AdminStorage está disponível
    if (typeof AdminStorage === "undefined") {
      console.error("AdminStorage não está disponível");
      showErrorMessage("Erro ao carregar o sistema de armazenamento");
      return;
    }

    // Debugar estado da SiteAPI
    console.log("Estado da SiteAPI:", window.SiteAPI);

    // Capturar dados do atualizador-conteudo-dinamico.js se estiver disponível
    let dadosDoAtualizador = null;

    // Verificar se temos acesso à variável global dadosIgreja
    if (typeof dadosIgreja !== "undefined") {
      console.log("Variável dadosIgreja encontrada globalmente");
      dadosDoAtualizador = dadosIgreja;
    }
    // Ou verificar se temos acesso através da SiteAPI
    else if (typeof window.SiteAPI !== "undefined" && window.SiteAPI.dados) {
      console.log("Dados encontrados via SiteAPI");
      dadosDoAtualizador = window.SiteAPI.dados;
    }

    console.log("Dados do atualizador:", dadosDoAtualizador);

    // Tentar carregar do servidor primeiramente
    AdminStorage.get("dadosIgreja")
      .then((dadosCarregados) => {
        if (dadosCarregados) {
          // Se temos dados do servidor ou cache, usá-los
          this.data = dadosCarregados;
          console.log("Usando dados do servidor/cache:", this.data);
        }
        // Se temos dados do atualizador, usá-los
        else if (
          dadosDoAtualizador &&
          Object.keys(dadosDoAtualizador).length > 0
        ) {
          console.log("Usando dados do atualizador-conteudo-dinamico.js");
          this.data = JSON.parse(JSON.stringify(dadosDoAtualizador)); // Clone profundo
        }
        // Caso contrário, criar estrutura básica
        else {
          console.warn(
            "Nenhuma fonte de dados encontrada. Criando estrutura básica."
          );
          this.data = this.createBasicDataStructure();
        }

        // Garantir que todos os dados existam e sejam editáveis
        this.ensureAllDataEditability();

        // Atualizar o SiteAPI com os dados completos
        if (window.SiteAPI && window.SiteAPI.atualizarDados) {
          window.SiteAPI.atualizarDados(this.data);
        }

        // Salvar dados completos no servidor
        AdminStorage.save("dadosIgreja", this.data);

        // Preencher todas as visualizações de dados
        this.refreshAllDataViews();

        console.log("Dados carregados com sucesso:", this.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar dados:", error);

        // Em caso de erro, usar os dados padrão do SiteAPI
        this.data = window.SiteAPI.dados;
        this.refreshAllDataViews();

        // Mostrar mensagem de erro
        showErrorMessage(
          "Erro ao carregar dados do servidor. Usando dados locais."
        );
      });
  },

  /**
   * Atualizar todas as visualizações de dados
   */
  refreshAllDataViews: function () {
    // Atualizar Cards do Dashboard
    this.updateDashboardCards();

    // Carregar dados dos eventos destacados
    this.renderEventosDestacados();

    // Carregar dados da agenda
    this.renderAgendaEventos();

    // Carregar horários de cultos
    this.renderCultos();

    // Carregar escalas
    this.renderEscalas("louvor");
    this.renderEscalas("recepcao");
    this.renderEscalas("escolaDominical");
    this.renderEscalas("sonoplastia");

    // Carregar dados de dízimos e ofertas (se houver)
    this.loadDizimosData();

    // Carregar dados de contato
    this.loadContatoData();

    // Carregar redes sociais
    this.renderRedesSociais();

    // Carregar configurações
    this.loadConfigData();
  },

  /**
   * Atualizar uma visualização específica de dados
   * @param {string} entityType - Tipo de dados a atualizar (evento, culto, etc.)
   */
  refreshDataView: function (entityType) {
    switch (entityType) {
      case "evento":
        this.renderEventosDestacados();
        break;
      case "agenda":
        this.renderAgendaEventos();
        break;
      case "culto":
        this.renderCultos();
        break;
      case "escala-louvor":
        this.renderEscalas("louvor");
        break;
      case "escala-recepcao":
        this.renderEscalas("recepcao");
        break;
      case "escala-escola-dominical":
        this.renderEscalas("escolaDominical");
        break;
      case "escala-sonoplastia":
        this.renderEscalas("sonoplastia");
        break;
      case "rede-social":
        this.renderRedesSociais();
        break;
    }

    // Atualizar cards do dashboard após qualquer mudança
    this.updateDashboardCards();

    // Após qualquer alteração, atualizar a cópia de trabalho
    AdminStorage.save("dadosIgreja", this.data);

    // Aplicar as alterações no site se possível
    this.applyChangesToSite();
  },

  /**
   * Aplicar alterações ao site
   * @returns {boolean} - Verdadeiro se os dados foram aplicados com sucesso
   */
  applyChangesToSite: function () {
    try {
      if (
        typeof window.SiteAPI !== "undefined" &&
        window.SiteAPI.atualizarDados
      ) {
        window.SiteAPI.atualizarDados(this.data);
        console.log("Dados atualizados no site");
        return true;
      } else {
        console.warn("SiteAPI não está disponível para atualizar dados");
        return false;
      }
    } catch (error) {
      console.error("Erro ao aplicar alterações ao site:", error);
      return false;
    }
  },

  /**
   * Atualizar os cards do dashboard
   */
  updateDashboardCards: function () {
    // Card de eventos
    const eventosCard = document.querySelector(
      ".admin-card-number:nth-of-type(1)"
    );
    if (eventosCard) {
      const numEventos = this.data.agendaEventos
        ? this.data.agendaEventos.length
        : 0;
      eventosCard.textContent = numEventos;
    }

    // Card de escalas
    const escalasCard = document.querySelector(
      ".admin-card-number:nth-of-type(2)"
    );
    if (escalasCard) {
      const numEscalas = this.data.escalas
        ? Object.keys(this.data.escalas).length
        : 0;
      escalasCard.textContent = numEscalas;
    }

    // Card de cultos
    const cultosCard = document.querySelector(
      ".admin-card-number:nth-of-type(3)"
    );
    if (cultosCard) {
      const numCultos = this.data.cultos ? this.data.cultos.length : 0;
      cultosCard.textContent = numCultos;
    }
  },

  /**
   * Carregar dados para o formulário de dízimos
   */
  loadDizimosData: function () {
    // Implementação simples nesta versão
    // Na versão completa, seria necessário ter estes dados no objeto dadosIgreja
    // Por enquanto, apenas simulamos os valores

    document.getElementById("banco-nome").value = "Banco do Brasil";
    document.getElementById("banco-agencia").value = "1234-5";
    document.getElementById("banco-conta").value = "12345-6";
    document.getElementById("banco-titular").value =
      "Igreja Presbiteriana de Macaé";
    document.getElementById("banco-cnpj").value = "12.345.678/0001-90";

    document.getElementById("pix-tipo").value = "CNPJ";
    document.getElementById("pix-key").value = "12.345.678/0001-90";
  },

  /**
   * Carregar dados de contato
   */
  loadContatoData: function () {
    if (this.data.contato) {
      document.getElementById("endereco").value =
        this.data.contato.endereco || "";
      document.getElementById("telefone").value =
        this.data.contato.telefone || "";
      document.getElementById("email").value = this.data.contato.email || "";
    }
  },

  /**
   * Carregar configurações gerais
   */
  loadConfigData: function () {
    // Nome da igreja e descrição
    document.getElementById("nome-igreja").value = this.data.nome || "";
    document.getElementById("descricao-igreja").value =
      this.data.descricao || "";

    // Versículo
    if (this.data.versiculo) {
      document.getElementById("versiculo-texto").value =
        this.data.versiculo.texto || "";
      document.getElementById("versiculo-referencia").value =
        this.data.versiculo.referencia || "";
    }

    // Layout do rodapé
    if (this.data.colunas) {
      document.getElementById("rodape-colunas").value =
        this.data.colunas.quantidadeColunas || 3;
      document.getElementById("coluna1-visivel").checked =
        this.data.colunas.coluna1Visivel !== false;
      document.getElementById("coluna2-visivel").checked =
        this.data.colunas.coluna2Visivel !== false;
      document.getElementById("coluna3-visivel").checked =
        this.data.colunas.coluna3Visivel !== false;
    }
  },

  /**
   * Renderizar lista de eventos destacados
   */
  renderEventosDestacados: function () {
    const tableBody = document.querySelector("#eventos-destacados-table tbody");
    if (!tableBody) return;

    tableBody.innerHTML = "";

    if (this.data.eventosDestacados && this.data.eventosDestacados.length > 0) {
      this.data.eventosDestacados.forEach((evento, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
                    <td>${evento.nome}</td>
                    <td>${evento.horario}</td>
                    <td><i class="${evento.icone}"></i> ${this.getIconName(
          evento.icone
        )}</td>
                    <td class="actions">
                        <button class="btn-icon edit" data-id="${index}" id="edit-evento-btn-${index}" data-type="evento">
                            <i class="fas fa-pencil-alt"></i>
                        </button>
                        <button class="btn-icon delete" data-id="${index}" data-type="evento">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                `;

        tableBody.appendChild(row);
      });

      // Adicionar os event listeners para os botões
      this.setupTableActions(tableBody, "evento");
    } else {
      tableBody.innerHTML =
        '<tr><td colspan="4" class="no-data">Nenhum evento destacado cadastrado</td></tr>';
    }
  },

  /**
   * Renderizar lista de eventos da agenda
   */
  renderAgendaEventos: function () {
    const tableBody = document.querySelector("#agenda-eventos-table tbody");
    if (!tableBody) return;

    tableBody.innerHTML = "";

    if (this.data.agendaEventos && this.data.agendaEventos.length > 0) {
      this.data.agendaEventos.forEach((evento, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
                    <td>${evento.diaSemana}</td>
                    <td>${evento.horario}</td>
                    <td>${evento.titulo}</td>
                    <td>${evento.descricao.substring(0, 50)}${
          evento.descricao.length > 50 ? "..." : ""
        }</td>
                    <td>${evento.local}</td>
                    <td class="actions">
                        <button class="btn-icon edit" data-id="${index}" id="edit-agenda-btn-${index}" data-type="agenda">
                            <i class="fas fa-pencil-alt"></i>
                        </button>
                        <button class="btn-icon delete" data-id="${index}" data-type="agenda">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                `;

        tableBody.appendChild(row);
      });

      // Adicionar os event listeners para os botões
      this.setupTableActions(tableBody, "agenda");
    } else {
      tableBody.innerHTML =
        '<tr><td colspan="6" class="no-data">Nenhum evento da agenda cadastrado</td></tr>';
    }
  },

  /**
   * Renderizar lista de cultos
   */
  renderCultos: function () {
    const tableBody = document.querySelector("#cultos-table tbody");
    if (!tableBody) return;

    tableBody.innerHTML = "";

    if (this.data.cultos && this.data.cultos.length > 0) {
      this.data.cultos.forEach((culto, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
                    <td>${culto.nome}</td>
                    <td>${culto.horario}</td>
                    <td class="actions">
                        <button class="btn-icon edit" data-id="${index}" id="edit-culto-btn-${index}" data-type="culto">
                            <i class="fas fa-pencil-alt"></i>
                        </button>
                        <button class="btn-icon delete" data-id="${index}" data-type="culto">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                `;

        tableBody.appendChild(row);
      });

      // Adicionar os event listeners para os botões
      this.setupTableActions(tableBody, "culto");
    } else {
      tableBody.innerHTML =
        '<tr><td colspan="3" class="no-data">Nenhum culto cadastrado</td></tr>';
    }
  },

  /**
   * Renderizar escalas
   * @param {string} tipo - Tipo de escala (louvor, recepcao, etc.)
   */
  renderEscalas: function (tipo) {
    const tableId =
      tipo === "escolaDominical" ? "escala-escola-dominical" : `escala-${tipo}`;
    const tableBody = document.querySelector(`#${tableId}-table tbody`);
    if (!tableBody) return;

    tableBody.innerHTML = "";

    if (
      this.data.escalas &&
      this.data.escalas[tipo] &&
      this.data.escalas[tipo].length > 0
    ) {
      this.data.escalas[tipo].forEach((escala, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
                    <td>${escala.data}</td>
                    <td>${escala.equipe}</td>
                    <td class="actions">
                        <button class="btn-icon edit" data-id="${index}" id="edit-${tableId}-btn-${index}" data-type="${tableId}">
                            <i class="fas fa-pencil-alt"></i>
                        </button>
                        <button class="btn-icon delete" data-id="${index}" data-type="${tableId}" data-categoria="${tipo}">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                `;

        tableBody.appendChild(row);
      });

      // Adicionar os event listeners para os botões
      this.setupTableActions(tableBody, tableId, tipo);
    } else {
      tableBody.innerHTML = `<tr><td colspan="3" class="no-data">Nenhuma ${this.getEscalaName(
        tipo
      )} cadastrada</td></tr>`;
    }
  },

  /**
   * Renderizar redes sociais
   */
  renderRedesSociais: function () {
    const tableBody = document.querySelector("#redes-sociais-table tbody");
    if (!tableBody) return;

    tableBody.innerHTML = "";

    if (this.data.redesSociais && this.data.redesSociais.length > 0) {
      this.data.redesSociais.forEach((rede, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
                    <td>${rede.nome}</td>
                    <td><a href="${rede.url}" target="_blank">${
          rede.url
        }</a></td>
                    <td><i class="${rede.icone}"></i> ${this.getIconName(
          rede.icone
        )}</td>
                    <td class="actions">
                        <button class="btn-icon edit" data-id="${index}" id="edit-rede-social-btn-${index}" data-type="rede-social">
                            <i class="fas fa-pencil-alt"></i>
                        </button>
                        <button class="btn-icon delete" data-id="${index}" data-type="rede-social">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </td>
                `;

        tableBody.appendChild(row);
      });

      // Adicionar os event listeners para os botões
      this.setupTableActions(tableBody, "rede-social");
    } else {
      tableBody.innerHTML =
        '<tr><td colspan="4" class="no-data">Nenhuma rede social cadastrada</td></tr>';
    }
  },

  /**
   * Configurar ações de edição e exclusão nas tabelas
   * @param {HTMLElement} tableBody - Corpo da tabela
   * @param {string} entityType - Tipo de entidade (evento, culto, etc.)
   * @param {string} categoria - Categoria (para escalas)
   */
  setupTableActions: function (tableBody, entityType, categoria = null) {
    // Configurar botões de edição
    const editButtons = tableBody.querySelectorAll(".btn-icon.edit");
    editButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.getAttribute("data-id");

        // Configurar o botão para abrir o modal de edição
        button.setAttribute("data-target", `modal-${entityType}`);

        // Armazenar temporariamente a categoria (para escalas)
        if (categoria) {
          button.setAttribute("data-categoria", categoria);
        }

        // Preencher o modal para edição
        this.fillModalForEditing(entityType, id, categoria);

        // Abrir o modal de edição
        AdminUI.modalEditMode = true;
        AdminUI.modalCurrentId = id;
        AdminUI.modalCurrentType = entityType;

        const modalId = `modal-${entityType}`;
        // Atualizar título do modal
        const modal = document.getElementById(modalId);
        if (modal) {
          const modalTitle = modal.querySelector(".admin-modal-header h3");
          if (modalTitle) {
            modalTitle.textContent = `Editar ${AdminUI.getEntityName(
              entityType
            )}`;
          }
        }

        AdminUI.openModal(modalId);
      });
    });

    // Configurar botões de exclusão
    const deleteButtons = tableBody.querySelectorAll(".btn-icon.delete");
    deleteButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const id = button.getAttribute("data-id");
        const tipo = button.getAttribute("data-type");
        const cat = button.getAttribute("data-categoria");

        // Confirmar exclusão
        if (confirm(`Tem certeza que deseja excluir este item?`)) {
          // Excluir o item
          this.deleteData(tipo, id, cat);

          // Atualizar a visualização
          this.refreshDataView(tipo);
        }
      });
    });
  },

  /**
   * Preencher modal para edição
   * @param {string} entityType - Tipo de entidade
   * @param {string} id - ID do item
   * @param {string} categoria - Categoria (para escalas)
   */
  fillModalForEditing: function (entityType, id, categoria = null) {
    // Obter dados do item
    let item;

    // Para escalas, precisamos tratar de forma especial
    if (entityType.startsWith("escala-")) {
      const tipoEscala = categoria || entityType.replace("escala-", "");
      if (this.data.escalas && this.data.escalas[tipoEscala]) {
        item = this.data.escalas[tipoEscala][id];
      }
    } else {
      // Para outros tipos de entidades
      switch (entityType) {
        case "evento":
          item = this.data.eventosDestacados[id];
          break;
        case "agenda":
          item = this.data.agendaEventos[id];
          break;
        case "culto":
          item = this.data.cultos[id];
          break;
        case "rede-social":
          item = this.data.redesSociais[id];
          break;
      }
    }

    if (!item) {
      console.error(`Item não encontrado: ${entityType} #${id}`);
      return;
    }

    // Obter o modal
    const modal = document.getElementById(`modal-${entityType}`);
    if (!modal) return;

    // Preencher os campos do modal com os dados do item
    switch (entityType) {
      case "evento":
        modal.querySelector("#evento-nome").value = item.nome || "";
        modal.querySelector("#evento-horario").value = item.horario || "";
        modal.querySelector("#evento-icone").value = item.icone || "";
        break;

      case "agenda":
        modal.querySelector("#agenda-dia").value = item.diaSemana || "";
        modal.querySelector("#agenda-horario").value = item.horario || "";
        modal.querySelector("#agenda-titulo").value = item.titulo || "";
        modal.querySelector("#agenda-descricao").value = item.descricao || "";
        modal.querySelector("#agenda-local").value = item.local || "";
        modal.querySelector("#agenda-icone").value = item.icone || "";
        break;

      case "culto":
        modal.querySelector("#culto-nome").value = item.nome || "";
        modal.querySelector("#culto-horario").value = item.horario || "";
        break;

      case "escala-louvor":
      case "escala-recepcao":
      case "escala-escola-dominical":
      case "escala-sonoplastia":
        modal.querySelector("#escala-data").value = item.data || "";
        modal.querySelector("#escala-equipe").value = item.equipe || "";
        break;

      case "rede-social":
        modal.querySelector("#rede-nome").value = item.nome || "";
        modal.querySelector("#rede-url").value = item.url || "";
        modal.querySelector("#rede-icone").value = item.icone || "";
        break;
    }
  },

  /**
   * Adicionar novos dados
   * @param {string} entityType - Tipo de entidade
   * @param {Object} formData - Dados do formulário
   */
  addData: function (entityType, formData) {
    // Converter formato formData para formato do objeto de dados
    const item = this.convertFormDataToEntity(entityType, formData);

    // Adicionar o item ao array correto
    switch (entityType) {
      case "evento":
        if (!this.data.eventosDestacados) this.data.eventosDestacados = [];
        this.data.eventosDestacados.push(item);
        break;

      case "agenda":
        if (!this.data.agendaEventos) this.data.agendaEventos = [];
        this.data.agendaEventos.push(item);
        break;

      case "culto":
        if (!this.data.cultos) this.data.cultos = [];
        this.data.cultos.push(item);
        break;

      case "escala":
      case "escala-louvor":
      case "escala-recepcao":
      case "escala-escola-dominical":
      case "escala-sonoplastia":
        const tipoEscala = this.getEscalaTipo(entityType);
        if (!this.data.escalas) this.data.escalas = {};
        if (!this.data.escalas[tipoEscala]) this.data.escalas[tipoEscala] = [];
        this.data.escalas[tipoEscala].push(item);
        break;

      case "rede-social":
        if (!this.data.redesSociais) this.data.redesSociais = [];
        this.data.redesSociais.push(item);
        break;
    }
  },

  /**
   * Atualizar dados existentes
   * @param {string} entityType - Tipo de entidade
   * @param {string} id - ID do item
   * @param {Object} formData - Novos dados
   */
  updateData: function (entityType, id, formData) {
    // Converter formato formData para formato do objeto de dados
    const item = this.convertFormDataToEntity(entityType, formData);

    // Atualizar o item no array correto
    switch (entityType) {
      case "evento":
        this.data.eventosDestacados[id] = item;
        break;

      case "agenda":
        this.data.agendaEventos[id] = item;
        break;

      case "culto":
        this.data.cultos[id] = item;
        break;

      case "escala":
      case "escala-louvor":
      case "escala-recepcao":
      case "escala-escola-dominical":
      case "escala-sonoplastia":
        const tipoEscala = this.getEscalaTipo(entityType);
        this.data.escalas[tipoEscala][id] = item;
        break;

      case "rede-social":
        this.data.redesSociais[id] = item;
        break;
    }
  },

  /**
   * Excluir dados
   * @param {string} entityType - Tipo de entidade
   * @param {string} id - ID do item
   * @param {string} categoria - Categoria (para escalas)
   */
  deleteData: function (entityType, id, categoria = null) {
    // Para escalas, precisamos tratar de forma especial
    if (entityType.startsWith("escala-")) {
      const tipoEscala = categoria || this.getEscalaTipo(entityType);
      if (this.data.escalas && this.data.escalas[tipoEscala]) {
        this.data.escalas[tipoEscala].splice(id, 1);
      }
    } else {
      // Para outros tipos de entidades
      switch (entityType) {
        case "evento":
          this.data.eventosDestacados.splice(id, 1);
          break;
        case "agenda":
          this.data.agendaEventos.splice(id, 1);
          break;
        case "culto":
          this.data.cultos.splice(id, 1);
          break;
        case "rede-social":
          this.data.redesSociais.splice(id, 1);
          break;
      }
    }
  },

  /**
   * Converter dados de formulário para o formato da entidade
   * @param {string} entityType - Tipo de entidade
   * @param {Object} formData - Dados do formulário
   * @returns {Object} - Entidade formatada
   */
  convertFormDataToEntity: function (entityType, formData) {
    switch (entityType) {
      case "evento":
        return {
          nome: formData.evento_nome,
          horario: formData.evento_horario,
          icone: formData.evento_icone,
        };

      case "agenda":
        return {
          diaSemana: formData.agenda_dia,
          horario: formData.agenda_horario,
          titulo: formData.agenda_titulo,
          descricao: formData.agenda_descricao || "",
          local: formData.agenda_local || "Templo Principal",
          icone: formData.agenda_icone || "fas fa-map-marker-alt",
        };

      case "culto":
        return {
          nome: formData.culto_nome,
          horario: formData.culto_horario,
        };

      case "escala":
      case "escala-louvor":
      case "escala-recepcao":
      case "escala-escola-dominical":
      case "escala-sonoplastia":
        return {
          data: formData.escala_data,
          equipe: formData.escala_equipe,
        };

      case "rede-social":
        return {
          nome: formData.rede_nome,
          url: formData.rede_url,
          icone: formData.rede_icone,
        };

      default:
        console.error(`Tipo de entidade desconhecido: ${entityType}`);
        return {};
    }
  },

  /**
   * Obter o tipo de escala a partir do ID da tab
   * @param {string} entityType - Tipo de entidade (escala-louvor, etc.)
   * @returns {string} - Tipo de escala (louvor, etc.)
   */
  getEscalaTipo: function (entityType) {
    switch (entityType) {
      case "escala-louvor":
        return "louvor";
      case "escala-recepcao":
        return "recepcao";
      case "escala-escola-dominical":
        return "escolaDominical";
      case "escala-sonoplastia":
        return "sonoplastia";
      default:
        return entityType.replace("escala-", "");
    }
  },

  /**
   * Obter nome amigável para uma escala
   * @param {string} tipo - Tipo de escala
   * @returns {string} - Nome amigável
   */
  getEscalaName: function (tipo) {
    switch (tipo) {
      case "louvor":
        return "escala de louvor";
      case "recepcao":
        return "escala de recepção";
      case "escolaDominical":
        return "escala da escola dominical";
      case "sonoplastia":
        return "escala de sonoplastia";
      default:
        return "escala";
    }
  },

  /**
   * Obter nome amigável para um ícone
   * @param {string} iconClass - Classe do ícone
   * @returns {string} - Nome amigável
   */
  getIconName: function (iconClass) {
    if (!iconClass) return "";

    const iconMap = {
      "fas fa-bible": "Bíblia",
      "fas fa-users": "Pessoas",
      "fas fa-church": "Igreja",
      "fas fa-praying-hands": "Oração",
      "fas fa-music": "Música",
      "fas fa-cross": "Cruz",
      "fas fa-map-marker-alt": "Localização",
      "fas fa-home": "Casa",
      "fas fa-building": "Prédio",
      "fab fa-facebook-f": "Facebook",
      "fab fa-instagram": "Instagram",
      "fab fa-youtube": "YouTube",
      "fab fa-whatsapp": "WhatsApp",
      "fab fa-spotify": "Spotify",
      "fab fa-twitter": "Twitter",
    };

    return iconMap[iconClass] || iconClass;
  },

  /**
   * Verifica se todos os dados estão acessíveis no painel administrativo
   */
  ensureAllDataEditability: function () {
    // Verificar e adicionar propriedades faltantes
    if (!this.data.nome) this.data.nome = "Igreja Presbiteriana de Macaé";
    if (!this.data.descricao)
      this.data.descricao =
        "Uma comunidade de fé comprometida com a Palavra de Deus, adoração verdadeira e crescimento espiritual, fundamentada nos princípios da Reforma Protestante.";

    // Verificar versículo
    if (!this.data.versiculo) {
      this.data.versiculo = {
        texto: "Tudo para a glória de Deus",
        referencia: "1 Coríntios 10:31",
      };
    }

    // Verificar eventos destacados
    if (!this.data.eventosDestacados) {
      this.data.eventosDestacados = [];
    }

    // Verificar agenda de eventos
    if (!this.data.agendaEventos) {
      this.data.agendaEventos = [];
    }

    // Verificar escalas
    if (!this.data.escalas) {
      this.data.escalas = {
        louvor: [],
        recepcao: [],
        escolaDominical: [],
        sonoplastia: [],
      };
    } else {
      // Garantir que todas as categorias de escala existam
      if (!this.data.escalas.louvor) this.data.escalas.louvor = [];
      if (!this.data.escalas.recepcao) this.data.escalas.recepcao = [];
      if (!this.data.escalas.escolaDominical)
        this.data.escalas.escolaDominical = [];
      if (!this.data.escalas.sonoplastia) this.data.escalas.sonoplastia = [];
    }

    // Verificar cultos
    if (!this.data.cultos) {
      this.data.cultos = [];
    }

    // Verificar informações de contato
    if (!this.data.contato) {
      this.data.contato = {
        endereco: "",
        telefone: "",
        email: "",
      };
    }

    // Verificar redes sociais
    if (!this.data.redesSociais) {
      this.data.redesSociais = [];
    }

    // Verificar configurações de layout
    if (!this.data.colunas) {
      this.data.colunas = {
        quantidadeColunas: 3,
        coluna1Visivel: true,
        coluna2Visivel: true,
        coluna3Visivel: true,
      };
    }

    // Define o ano atual para o copyright
    this.data.anoAtual = new Date().getFullYear();
  },

  /**
   * Salvar todas as configurações gerais do site
   */
  saveAllConfigurations: function () {
    // Salvar dados básicos
    this.saveInfoGerais();

    // Salvar cada seção dos dados
    this.saveEventosDestacados();
    this.saveAgendaEventos();
    this.saveCultos();
    this.saveContato();
    this.saveRedesSociais();
    this.saveLayoutConfig();

    // Salvar todas as escalas
    this.saveEscalas("louvor");
    this.saveEscalas("recepcao");
    this.saveEscalas("escolaDominical");
    this.saveEscalas("sonoplastia");

    // Enviar dados ao servidor
    this.saveToServer();
  },

  /**
   * Salvar informações gerais da igreja
   */
  saveInfoGerais: function () {
    const nomeIgreja = document.getElementById("nome-igreja").value;
    const descricaoIgreja = document.getElementById("descricao-igreja").value;
    const versiculoTexto = document.getElementById("versiculo-texto").value;
    const versiculoReferencia = document.getElementById(
      "versiculo-referencia"
    ).value;

    // Atualizar os dados
    this.data.nome = nomeIgreja;
    this.data.descricao = descricaoIgreja;
    this.data.versiculo = {
      texto: versiculoTexto,
      referencia: versiculoReferencia,
    };

    // Atualizar o ano atual
    this.data.anoAtual = new Date().getFullYear();
  },

  /**
   * Salvar configurações de layout
   */
  saveLayoutConfig: function () {
    const quantidadeColunas = parseInt(
      document.getElementById("rodape-colunas").value
    );
    const coluna1Visivel = document.getElementById("coluna1-visivel").checked;
    const coluna2Visivel = document.getElementById("coluna2-visivel").checked;
    const coluna3Visivel = document.getElementById("coluna3-visivel").checked;

    // Atualizar configurações
    this.data.colunas = {
      quantidadeColunas: quantidadeColunas,
      coluna1Visivel: coluna1Visivel,
      coluna2Visivel: coluna2Visivel,
      coluna3Visivel: coluna3Visivel,
    };
  },

  /**
   * Salvar eventos destacados
   */
  saveEventosDestacados: function () {
    const eventos = [];
    const rows = document.querySelectorAll(
      "#eventos-destacados-table tbody tr"
    );

    // Se não há linhas com dados, significa que não há eventos
    if (
      rows.length === 0 ||
      (rows.length === 1 && rows[0].querySelector(".no-data"))
    ) {
      this.data.eventosDestacados = eventos;
      return;
    }

    // Iterar sobre as linhas da tabela
    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");

      // Verificar se tem células suficientes
      if (cells.length >= 3) {
        const nome = cells[0].textContent;
        const horario = cells[1].textContent;

        // Extrair o ícone
        const iconElement = cells[2].querySelector("i");
        const icone = iconElement ? iconElement.className : "fas fa-calendar";

        eventos.push({
          nome: nome,
          horario: horario,
          icone: icone,
        });
      }
    });

    // Atualizar os dados
    this.data.eventosDestacados = eventos;
  },

  /**
   * Salvar agenda de eventos
   */
  saveAgendaEventos: function () {
    const eventos = [];
    const rows = document.querySelectorAll("#agenda-eventos-table tbody tr");

    // Se não há linhas com dados, significa que não há eventos
    if (
      rows.length === 0 ||
      (rows.length === 1 && rows[0].querySelector(".no-data"))
    ) {
      this.data.agendaEventos = eventos;
      return;
    }

    // Iterar sobre as linhas da tabela
    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");

      // Verificar se tem células suficientes
      if (cells.length >= 5) {
        const diaSemana = cells[0].textContent;
        const horario = cells[1].textContent;
        const titulo = cells[2].textContent;
        const descricao = cells[3].textContent;
        const local = cells[4].textContent;

        eventos.push({
          diaSemana: diaSemana,
          horario: horario,
          titulo: titulo,
          descricao: descricao,
          local: local,
          icone: "fas fa-map-marker-alt", // Ícone padrão
        });
      }
    });

    // Atualizar os dados
    this.data.agendaEventos = eventos;
  },

  /**
   * Salvar cultos
   */
  saveCultos: function () {
    const cultos = [];
    const rows = document.querySelectorAll("#cultos-table tbody tr");

    // Se não há linhas com dados, significa que não há cultos
    if (
      rows.length === 0 ||
      (rows.length === 1 && rows[0].querySelector(".no-data"))
    ) {
      this.data.cultos = cultos;
      return;
    }

    // Iterar sobre as linhas da tabela
    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");

      // Verificar se tem células suficientes
      if (cells.length >= 2) {
        const nome = cells[0].textContent;
        const horario = cells[1].textContent;

        cultos.push({
          nome: nome,
          horario: horario,
        });
      }
    });

    // Atualizar os dados
    this.data.cultos = cultos;
  },

  /**
   * Salvar escalas
   * @param {string} tipo - Tipo de escala (louvor, recepcao, etc.)
   */
  saveEscalas: function (tipo) {
    const escalas = [];
    const tableId = `escala-${tipo}-table`;
    const rows = document.querySelectorAll(`#${tableId} tbody tr`);

    // Se não há linhas com dados, significa que não há escalas
    if (
      rows.length === 0 ||
      (rows.length === 1 && rows[0].querySelector(".no-data"))
    ) {
      this.data.escalas[tipo] = escalas;
      return;
    }

    // Iterar sobre as linhas da tabela
    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");

      // Verificar se tem células suficientes
      if (cells.length >= 2) {
        const data = cells[0].textContent;
        const equipe = cells[1].textContent;

        escalas.push({
          data: data,
          equipe: equipe,
        });
      }
    });

    // Atualizar os dados
    this.data.escalas[tipo] = escalas;
  },

  /**
   * Salvar informações de contato
   */
  saveContato: function () {
    const endereco = document.getElementById("endereco").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;

    // Atualizar os dados
    this.data.contato = {
      endereco: endereco,
      telefone: telefone,
      email: email,
    };
  },

  /**
   * Salvar informações de dízimos e ofertas
   */
  saveDizimosData: function () {
    // Esta função é um esboço, pois esses dados não estavam presentes
    // no atualizador-conteudo-dinamico.js original
    const banco = document.getElementById("banco-nome").value;
    const agencia = document.getElementById("banco-agencia").value;
    const conta = document.getElementById("banco-conta").value;
    const titular = document.getElementById("banco-titular").value;
    const cnpj = document.getElementById("banco-cnpj").value;
    const pixTipo = document.getElementById("pix-tipo").value;
    const pixKey = document.getElementById("pix-key").value;

    // Criar estrutura se não existir
    if (!this.data.financeiro) {
      this.data.financeiro = {};
    }

    // Atualizar os dados
    this.data.financeiro = {
      banco: {
        nome: banco,
        agencia: agencia,
        conta: conta,
        titular: titular,
        cnpj: cnpj,
      },
      pix: {
        tipo: pixTipo,
        chave: pixKey,
      },
    };
  },

  /**
   * Salvar redes sociais
   */
  saveRedesSociais: function () {
    const redesSociais = [];
    const rows = document.querySelectorAll("#redes-sociais-table tbody tr");

    // Se não há linhas com dados, significa que não há redes sociais
    if (
      rows.length === 0 ||
      (rows.length === 1 && rows[0].querySelector(".no-data"))
    ) {
      this.data.redesSociais = redesSociais;
      return;
    }

    // Iterar sobre as linhas da tabela
    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");

      // Verificar se tem células suficientes
      if (cells.length >= 3) {
        const nome = cells[0].textContent;

        // Extrair URL
        const urlElement = cells[1].querySelector("a");
        const url = urlElement
          ? urlElement.getAttribute("href")
          : cells[1].textContent;

        // Extrair o ícone
        const iconElement = cells[2].querySelector("i");
        const icone = iconElement ? iconElement.className : "fas fa-link";

        redesSociais.push({
          nome: nome,
          url: url,
          icone: icone,
        });
      }
    });

    // Atualizar os dados
    this.data.redesSociais = redesSociais;
  },

  /**
   * Salvar dados ao servidor
   */
  saveToServer: function () {
    // Mostrar spinner durante o salvamento
    const saveButton = document.querySelector(".btn-success:not([disabled])");
    if (saveButton) {
      const originalText = saveButton.innerHTML;
      saveButton.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Salvando...';
      saveButton.disabled = true;

      // Salvar no armazenamento local
      AdminStorage.save("dadosIgreja", this.data)
        .then(() => {
          // Tentar salvar no servidor
          fetch("../admin/api/data.php", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.data),
            credentials: "same-origin",
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.success) {
                // Exibir mensagem de sucesso
                showSuccessMessage("Dados salvos com sucesso!");

                // Aplicar as alterações no site
                this.applyChangesToSite();
              } else {
                // Exibir mensagem de erro
                showErrorMessage("Erro ao salvar dados: " + data.message);
              }
            })
            .catch((error) => {
              console.error("Erro ao salvar dados no servidor:", error);
              showErrorMessage(
                "Erro ao salvar dados no servidor. Dados foram salvos localmente."
              );
            })
            .finally(() => {
              // Restaurar o botão
              saveButton.innerHTML = originalText;
              saveButton.disabled = false;
            });
        })
        .catch((error) => {
          console.error("Erro ao salvar dados localmente:", error);
          showErrorMessage("Erro ao salvar dados localmente: " + error.message);

          // Restaurar o botão
          saveButton.innerHTML = originalText;
          saveButton.disabled = false;
        });
    }
  },

  /**
   * Sincronizar todos os dados com o atualizador-conteudo-dinamico.js
   */
  syncWithSiteAPI: function () {
    // Verificar se a API do site está disponível
    if (typeof window.SiteAPI === "undefined") {
      console.error("SiteAPI não está disponível");
      showErrorMessage("API do site não está disponível para sincronização");
      return false;
    }

    try {
      // Aplicar os dados atualizados à API do site
      window.SiteAPI.atualizarDados(this.data);

      // Executar a função de atualização da página
      if (typeof window.SiteAPI.atualizar === "function") {
        window.SiteAPI.atualizar();
      }

      console.log("Dados sincronizados com sucesso!");
      return true;
    } catch (error) {
      console.error("Erro ao sincronizar dados com a API do site:", error);
      showErrorMessage("Erro ao sincronizar dados com o site");
      return false;
    }
  },

  /**
   * Criar estrutura básica de dados quando SiteAPI não estiver disponível
   * @returns {Object} - Estrutura básica de dados
   */
  createBasicDataStructure: function () {
    return {
      nome: "Igreja Presbiteriana de Macaé",
      descricao:
        "Uma comunidade de fé comprometida com a Palavra de Deus, adoração verdadeira e crescimento espiritual, fundamentada nos princípios da Reforma Protestante.",
      versiculo: {
        texto: "Tudo para a glória de Deus",
        referencia: "1 Coríntios 10:31",
      },
      eventosDestacados: [
        {
          nome: "Escola Dominical",
          horario: "Domingo às 9h",
          icone: "fas fa-users",
        },
        {
          nome: "Culto",
          horario: "Domingo às 18h",
          icone: "fas fa-bible",
        },
      ],
      agendaEventos: [
        {
          diaSemana: "DOM",
          horario: "09:00",
          titulo: "Escola Dominical",
          descricao:
            "Participe dos estudos bíblicos para todas as idades, com classes específicas para crianças, jovens e adultos.",
          local: "Templo Principal",
          icone: "fas fa-map-marker-alt",
        },
        {
          diaSemana: "DOM",
          horario: "18:00",
          titulo: "Culto de Adoração",
          descricao:
            "Momento de adoração, louvor e pregação da Palavra de Deus para toda a família.",
          local: "Templo Principal",
          icone: "fas fa-map-marker-alt",
        },
        {
          diaSemana: "QUA",
          horario: "19:30",
          titulo: "Estudo Bíblico",
          descricao: "Aprofundamento no estudo das Escrituras.",
          local: "Sala de Estudos",
          icone: "fas fa-map-marker-alt",
        },
      ],
      escalas: {
        louvor: [
          {
            data: "07/06/2025 - Domingo Manhã",
            equipe: "Equipe de Louvor 1",
          },
          {
            data: "07/06/2025 - Domingo Noite",
            equipe: "Equipe de Louvor 2",
          },
        ],
        recepcao: [
          { data: "07/06/2025 - Domingo", equipe: "José e Maria" },
          { data: "14/06/2025 - Domingo", equipe: "Carlos e Beatriz" },
        ],
        escolaDominical: [
          { data: "07/06/2025 - Classe Infantil", equipe: "Professores 1" },
          { data: "07/06/2025 - Classe Adolescentes", equipe: "Professores 2" },
        ],
        sonoplastia: [
          { data: "07/06/2025 - Domingo", equipe: "Operador 1" },
          { data: "14/06/2025 - Domingo", equipe: "Operador 2" },
        ],
      },
      anoAtual: new Date().getFullYear(),
      cultos: [
        { nome: "Escola Dominical", horario: "Domingo às 9h" },
        { nome: "Culto Dominical", horario: "Domingo às 18h" },
        { nome: "Estudo Bíblico", horario: "Quarta às 19:30h" },
      ],
      contato: {
        endereco:
          "R. Pref. Eduardo Serrano, 93 - Imbetiba, Macaé - RJ, 27915-170",
        telefone: "(22)20203678",
        email: "4igrejapresbiterianademacae@gmail.com",
      },
      redesSociais: [
        {
          nome: "Facebook",
          url: "https://facebook.com/ipmacae",
          icone: "fab fa-facebook-f",
        },
        {
          nome: "Instagram",
          url: "https://instagram.com/ipmacae",
          icone: "fab fa-instagram",
        },
      ],
      colunas: {
        quantidadeColunas: 3,
        coluna1Visivel: true,
        coluna2Visivel: true,
        coluna3Visivel: true,
      },
    };
  },
};
