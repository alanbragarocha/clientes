/**
 * Admin Sync - Sistema de sincronização entre o painel administrativo e o atualizador-conteudo-dinamico.js
 * Este script garante que todas as alterações feitas no painel sejam refletidas no site
 */

const AdminSync = {
  /**
   * Inicializar o sistema de sincronização
   */
  init: function () {
    console.log("Sistema de sincronização inicializado");

    // Validar estrutura de dados
    if (AdminData && AdminData.data) {
      // Validar e corrigir estrutura de dados
      const validatedData = this.validateFullStructure(AdminData.data);

      // Atualizar dados
      AdminData.data = validatedData;

      // Atualizar SiteAPI se disponível
      if (window.SiteAPI && window.SiteAPI.atualizarDados) {
        window.SiteAPI.atualizarDados(validatedData);
      }
    }

    // Configurar evento de salvamento automático
    this.setupAutoSync();

    // Verificar existência da API SiteAPI
    this.checkSiteAPI();
  },

  /**
   * Configurar sincronização automática
   */
  setupAutoSync: function () {
    // Sincronizar dados a cada 5 minutos (se houver alterações)
    setInterval(() => {
      if (this.hasChanges()) {
        console.log("Sincronizando alterações automaticamente...");
        this.syncChanges();
      }
    }, 5 * 60 * 1000);
  },

  /**
   * Verificar se há alterações pendentes
   * @returns {boolean} - Verdadeiro se houver alterações
   */
  hasChanges: function () {
    // Verificar se há diferenças entre os dados atuais e os dados do SiteAPI
    if (!window.SiteAPI || !window.SiteAPI.dados || !AdminData.data) {
      return false;
    }

    // Comparação simples (pode ser melhorado para comparação profunda)
    return (
      JSON.stringify(AdminData.data) !== JSON.stringify(window.SiteAPI.dados)
    );
  },

  /**
   * Sincronizar alterações pendentes
   * @returns {Promise} - Promessa que resolve quando a sincronização for concluída
   */
  syncChanges: function () {
    return new Promise((resolve, reject) => {
      // Verificar se a API do site está disponível
      if (!window.SiteAPI) {
        reject(new Error("API do site não está disponível"));
        return;
      }

      try {
        // Atualizar os dados da API com os dados do painel
        window.SiteAPI.atualizarDados(AdminData.data);

        // Executar a função de atualização da página
        if (typeof window.SiteAPI.atualizar === "function") {
          window.SiteAPI.atualizar();
        }

        // Salvar no servidor
        AdminStorage.save("dadosIgreja", AdminData.data)
          .then(() => {
            // Salvar no servidor via API
            return fetch("../admin/api/data.php", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(AdminData.data),
              credentials: "same-origin",
            });
          })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              console.log("Sincronização concluída com sucesso");
              resolve(true);
            } else {
              console.error("Erro ao salvar dados no servidor:", data.message);
              reject(new Error(data.message));
            }
          })
          .catch((error) => {
            console.error("Erro na sincronização:", error);
            reject(error);
          });
      } catch (error) {
        console.error("Erro ao sincronizar dados:", error);
        reject(error);
      }
    });
  },

  /**
   * Verificar existência da API SiteAPI
   */
  checkSiteAPI: function () {
    if (!window.SiteAPI) {
      console.warn("SiteAPI não está disponível");
      return false;
    }

    // Verificar se todas as funções necessárias existem
    if (!window.SiteAPI.atualizarDados || !window.SiteAPI.atualizar) {
      console.warn("SiteAPI não possui todas as funções necessárias");
      return false;
    }

    return true;
  },

  /**
   * Exportar todos os dados para um arquivo JSON
   * @returns {string} - URL do arquivo JSON para download
   */
  exportData: function () {
    const jsonData = JSON.stringify(AdminData.data, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    return URL.createObjectURL(blob);
  },

  /**
   * Importar dados de um arquivo JSON
   * @param {File} file - Arquivo JSON para importar
   * @returns {Promise} - Promessa que resolve com os dados importados
   */
  importData: function (file) {
    return new Promise((resolve, reject) => {
      if (!file) {
        reject(new Error("Nenhum arquivo selecionado"));
        return;
      }

      const reader = new FileReader();

      reader.onload = function (e) {
        try {
          const importedData = JSON.parse(e.target.result);
          resolve(importedData);
        } catch (error) {
          reject(new Error("Arquivo JSON inválido"));
        }
      };

      reader.onerror = function () {
        reject(new Error("Erro ao ler o arquivo"));
      };

      reader.readAsText(file);
    });
  },

  /**
   * Validar estrutura completa dos dados do site
   * Garante que todos os campos do atualizador-conteudo-dinamico.js existam
   * @param {Object} data - Dados a serem validados
   * @returns {Object} - Dados validados e corrigidos
   */
  validateFullStructure: function (data) {
    // Crie uma cópia dos dados para não modificar o objeto original
    const validatedData = JSON.parse(JSON.stringify(data || {}));

    // === INFORMAÇÕES BÁSICAS ===
    if (!validatedData.nome)
      validatedData.nome = "Igreja Presbiteriana de Macaé";

    if (!validatedData.descricao) {
      validatedData.descricao =
        "Uma comunidade de fé comprometida com a Palavra de Deus, adoração verdadeira e crescimento espiritual, fundamentada nos princípios da Reforma Protestante.";
    }

    // === VERSÍCULO ===
    if (!validatedData.versiculo) {
      validatedData.versiculo = {
        texto: "Tudo para a glória de Deus",
        referencia: "1 Coríntios 10:31",
      };
    } else {
      if (!validatedData.versiculo.texto)
        validatedData.versiculo.texto = "Tudo para a glória de Deus";
      if (!validatedData.versiculo.referencia)
        validatedData.versiculo.referencia = "1 Coríntios 10:31";
    }

    // === EVENTOS DESTACADOS ===
    if (
      !validatedData.eventosDestacados ||
      !Array.isArray(validatedData.eventosDestacados)
    ) {
      validatedData.eventosDestacados = [
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
      ];
    }

    // === AGENDA DE EVENTOS ===
    if (
      !validatedData.agendaEventos ||
      !Array.isArray(validatedData.agendaEventos)
    ) {
      validatedData.agendaEventos = [
        {
          diaSemana: "DOM",
          horario: "09:00",
          titulo: "Escola Dominical",
          descricao:
            "Participe dos estudos bíblicos para todas as idades, com classes específicas para crianças, jovens e adultos.",
          local: "Templo Principal",
          icone: "fas fa-map-marker-alt",
        },
      ];
    }

    // === ESCALAS ===
    if (!validatedData.escalas) {
      validatedData.escalas = {
        louvor: [],
        recepcao: [],
        escolaDominical: [],
        sonoplastia: [],
      };
    } else {
      if (!validatedData.escalas.louvor) validatedData.escalas.louvor = [];
      if (!validatedData.escalas.recepcao) validatedData.escalas.recepcao = [];
      if (!validatedData.escalas.escolaDominical)
        validatedData.escalas.escolaDominical = [];
      if (!validatedData.escalas.sonoplastia)
        validatedData.escalas.sonoplastia = [];
    }

    // === ANO ATUAL ===
    validatedData.anoAtual = new Date().getFullYear();

    // === CULTOS ===
    if (!validatedData.cultos || !Array.isArray(validatedData.cultos)) {
      validatedData.cultos = [
        { nome: "Escola Dominical", horario: "Domingo às 9h" },
        { nome: "Culto Dominical", horario: "Domingo às 18h" },
        { nome: "Estudo Bíblico", horario: "Quarta às 19:30h" },
      ];
    }

    // === INFORMAÇÕES DE CONTATO ===
    if (!validatedData.contato) {
      validatedData.contato = {
        endereco:
          "R. Pref. Eduardo Serrano, 93 - Imbetiba, Macaé - RJ, 27915-170",
        telefone: "(22)20203678",
        email: "4igrejapresbiterianademacae@gmail.com",
      };
    } else {
      if (!validatedData.contato.endereco) {
        validatedData.contato.endereco =
          "R. Pref. Eduardo Serrano, 93 - Imbetiba, Macaé - RJ, 27915-170";
      }
      if (!validatedData.contato.telefone)
        validatedData.contato.telefone = "(22)20203678";
      if (!validatedData.contato.email)
        validatedData.contato.email = "4igrejapresbiterianademacae@gmail.com";
    }

    // === REDES SOCIAIS ===
    if (
      !validatedData.redesSociais ||
      !Array.isArray(validatedData.redesSociais)
    ) {
      validatedData.redesSociais = [
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
      ];
    }

    // === CONFIGURAÇÕES DE LAYOUT ===
    if (!validatedData.colunas) {
      validatedData.colunas = {
        quantidadeColunas: 3,
        coluna1Visivel: true,
        coluna2Visivel: true,
        coluna3Visivel: true,
      };
    } else {
      if (!validatedData.colunas.quantidadeColunas)
        validatedData.colunas.quantidadeColunas = 3;
      if (validatedData.colunas.coluna1Visivel === undefined)
        validatedData.colunas.coluna1Visivel = true;
      if (validatedData.colunas.coluna2Visivel === undefined)
        validatedData.colunas.coluna2Visivel = true;
      if (validatedData.colunas.coluna3Visivel === undefined)
        validatedData.colunas.coluna3Visivel = true;
    }

    return validatedData;
  },
};

// Inicializar o módulo de sincronização quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", function () {
  AdminSync.init();
});
