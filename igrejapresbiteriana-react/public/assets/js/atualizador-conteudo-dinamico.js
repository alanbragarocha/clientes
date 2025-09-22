// Script aprimorado para modificar o footer e a barra de eventos da Igreja Presbiteriana de Macaé

// Definir dadosIgreja fora do escopo do evento para permitir acesso global
let dadosIgreja = {};

// Definir a SiteAPI globalmente
window.SiteAPI = {
  dados: {},
  atualizar: function () {},
  atualizarDados: function () {},
};

document.addEventListener("DOMContentLoaded", function () {
  // =========================================================
  // CONFIGURAÇÕES GERAIS DA PÁGINA - EDITE CONFORME NECESSÁRIO
  // =========================================================
  dadosIgreja = {
    nome: "Igreja Presbiteriana de Macaé",
    descricao:
      "Uma comunidade de fé comprometida com a Palavra de Deus, adoração verdadeira e crescimento espiritual, fundamentada nos princípios da Reforma Protestante.",
    versiculo: {
      texto: "Tudo para a glória de Deus",
      referencia: "1 Coríntios 10:31",
    },

    // =========================================================
    // CONFIGURAÇÃO DA BARRA DE EVENTOS NO TOPO DA PÁGINA
    // =========================================================
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
      //{
      //    nome: "Reunião de Oração",
      //     horario: "Quinta às 6h",
      //     icone: "fas fa-praying-hands"
      // },
    ],

    // =========================================================
    // CONFIGURAÇÃO DA SEÇÃO DE AGENDA
    // =========================================================
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
        descricao:
          "Aprofundamento no estudo das Escrituras com o Rev. Marcelo Carnaval.",
        local: "Sala de Estudos",
        icone: "fas fa-map-marker-alt",
      },
      {
        diaSemana: "SEX",
        horario: "19:00",
        titulo: "Culto de Oração",
        descricao:
          "Momento dedicado à intercessão e comunhão com Deus através da oração.",
        local: "Sala de Oração",
        icone: "fas fa-map-marker-alt",
      },
      {
        diaSemana: "SÁB",
        horario: "19:00",
        titulo: "Reunião de Jovens",
        descricao:
          "Encontro semanal da juventude com louvor, dinâmicas, comunhão e estudo da Palavra.",
        local: "Salão Social",
        icone: "fas fa-map-marker-alt",
      },
    ],

    // =========================================================
    // ESCALAS DE SERVIÇO PARA A PÁGINA escalas.html
    // =========================================================
    escalas: {
      louvor: [
        {
          data: "07/04/2025 - Domingo Manhã",
          equipe: "Marcos (Líder), João, Ana, Pedro",
        },
        {
          data: "07/04/2025 - Domingo Noite",
          equipe: "Rebeca (Líder), Lucas, Mateus, Raquel",
        },
        {
          data: "14/04/2025 - Domingo Manhã",
          equipe: "Daniel (Líder), Paulo, Marta, Ester",
        },
        {
          data: "14/04/2025 - Domingo Noite",
          equipe: "Samuel (Líder), Davi, Sara, Isabel",
        },
      ],
      recepcao: [
        { data: "07/04/2025 - Domingo", equipe: "José e Maria" },
        { data: "14/04/2025 - Domingo", equipe: "Carlos e Beatriz" },
        { data: "21/04/2025 - Domingo", equipe: "André e Juliana" },
        { data: "28/04/2025 - Domingo", equipe: "Roberto e Cristina" },
      ],
      escolaDominical: [
        { data: "07/04/2025 - Classe Infantil", equipe: "Patrícia e Renata" },
        { data: "07/04/2025 - Classe Adolescentes", equipe: "Fernando" },
        { data: "14/04/2025 - Classe Infantil", equipe: "Luciana e Carla" },
        { data: "14/04/2025 - Classe Adolescentes", equipe: "Gabriel" },
      ],
      sonoplastia: [
        { data: "07/04/2025 - Domingo", equipe: "Rodrigo" },
        { data: "14/04/2025 - Domingo", equipe: "Felipe" },
        { data: "21/04/2025 - Domingo", equipe: "Leonardo" },
        { data: "28/04/2025 - Domingo", equipe: "Thiago" },
      ],
    },

    // Ano atual para o copyright
    anoAtual: new Date().getFullYear(),

    // =========================================================
    // CONFIGURAÇÃO DOS HORÁRIOS EXIBIDOS NO FOOTER
    // =========================================================
    cultos: [
      { nome: "Escola Dominical", horario: "Domingo às 9h" },
      { nome: "Culto Dominical", horario: "Domingo às 18h" },
      { nome: "Estudo Bíblico", horario: "Quarta às 19:30h" },
      { nome: "Culto de Oração", horario: "Quinta às 6h" },
      { nome: "Reunião de Jovens", horario: "Segunda às 19h" },
    ],

    // =========================================================
    // INFORMAÇÕES DE CONTATO PARA O FOOTER
    // =========================================================
    contato: {
      endereco:
        "R. Pref. Eduardo Serrano, 93 - Imbetiba, Macaé - RJ, 27915-170",
      telefone: "(22)20203678",
      email: "4igrejapresbiterianademacae@gmail.com",
    },

    // =========================================================
    // REDES SOCIAIS DA IGREJA PARA O FOOTER
    // =========================================================
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
      {
        nome: "YouTube",
        url: "https://youtube.com/ipmacae",
        icone: "fab fa-youtube",
      },
      {
        nome: "WhatsApp",
        url: "https://wa.me/5522XXXXXXXX",
        icone: "fab fa-whatsapp",
      },
      {
        nome: "Spotify",
        url: "https://open.spotify.com/show/XXXXXX",
        icone: "fab fa-spotify",
      },
    ],

    // =========================================================
    // CONFIGURAÇÃO DO LAYOUT DO FOOTER
    // =========================================================
    colunas: {
      quantidadeColunas: 3, // Possibilidade de alterar o layout para 2, 3 ou 4 colunas
      coluna1Visivel: true,
      coluna2Visivel: true,
      coluna3Visivel: true,
    },
  };

  // =========================================================
  // FUNÇÕES PARA ATUALIZAR ELEMENTOS DA PÁGINA - NÃO MODIFICAR
  // =========================================================
  const PageUpdater = {
    // Nova função para atualizar a barra de próximos eventos
    atualizarBarraEventos: function () {
      const eventosSlider = document.querySelector(".eventos-slider");
      if (eventosSlider) {
        // Limpar conteúdo atual
        eventosSlider.innerHTML = "";

        // Adicionar cada evento destacado
        dadosIgreja.eventosDestacados.forEach((evento) => {
          const eventoDiv = document.createElement("div");
          eventoDiv.className = "evento-item";

          const iconeDiv = document.createElement("div");
          iconeDiv.className = "evento-icone";

          const iconeElement = document.createElement("i");
          iconeElement.className = evento.icone;

          const textoSpan = document.createElement("span");
          textoSpan.textContent = `${evento.nome}: ${evento.horario}`;

          iconeDiv.appendChild(iconeElement);
          eventoDiv.appendChild(iconeDiv);
          eventoDiv.appendChild(textoSpan);

          eventosSlider.appendChild(eventoDiv);
        });
      }
    },

    // Nova função para atualizar a seção de agenda
    atualizarAgenda: function () {
      const eventosContainer = document.querySelector(".eventos-container");
      if (eventosContainer) {
        // Limpar conteúdo atual
        eventosContainer.innerHTML = "";

        // Adicionar cada evento da agenda
        dadosIgreja.agendaEventos.forEach((evento) => {
          // Criar o elemento de evento
          const eventoDiv = document.createElement("div");
          eventoDiv.className = "evento";

          // Criar a seção de data
          const dataDiv = document.createElement("div");
          dataDiv.className = "evento-data";

          const diaDiv = document.createElement("div");
          diaDiv.className = "dia";
          diaDiv.textContent = evento.diaSemana;

          const horarioDiv = document.createElement("div");
          horarioDiv.className = "horario";
          horarioDiv.textContent = evento.horario;

          dataDiv.appendChild(diaDiv);
          dataDiv.appendChild(horarioDiv);

          // Criar a seção de informação
          const infoDiv = document.createElement("div");
          infoDiv.className = "evento-info";

          const titulo = document.createElement("h4");
          titulo.textContent = evento.titulo;

          const descricao = document.createElement("p");
          descricao.textContent = evento.descricao;

          const localDiv = document.createElement("div");
          localDiv.className = "evento-local";

          const icone = document.createElement("i");
          icone.className = evento.icone;

          const local = document.createElement("span");
          local.textContent = evento.local;

          localDiv.appendChild(icone);
          localDiv.appendChild(local);

          infoDiv.appendChild(titulo);
          infoDiv.appendChild(descricao);
          infoDiv.appendChild(localDiv);

          // Montar o evento completo
          eventoDiv.appendChild(dataDiv);
          eventoDiv.appendChild(infoDiv);

          // Adicionar ao container
          eventosContainer.appendChild(eventoDiv);
        });
      }
    },

    // Atualizar logo e informações da primeira coluna
    atualizarInfoIgreja: function () {
      const logoElement = document.querySelector(".footer-logo h3");
      if (logoElement) {
        logoElement.innerHTML = dadosIgreja.nome.replace(" de ", "<br>de ");
      }

      const descricaoElements = document.querySelectorAll(".footer-section p");
      if (descricaoElements.length >= 2) {
        descricaoElements[0].textContent = dadosIgreja.descricao;
        descricaoElements[1].innerHTML = `<em>"${dadosIgreja.versiculo.texto}" - ${dadosIgreja.versiculo.referencia}</em>`;
      }
    },

    // Atualizar horários dos cultos
    atualizarHorarios: function () {
      const horariosContainer = document.querySelector(".footer-horarios");
      if (horariosContainer) {
        horariosContainer.innerHTML = "";
        dadosIgreja.cultos.forEach((culto) => {
          const paragrafo = document.createElement("p");
          paragrafo.innerHTML = `<strong>${culto.nome}:</strong> ${culto.horario}`;
          horariosContainer.appendChild(paragrafo);
        });
      }
    },

    // Atualizar informações de contato
    atualizarContato: function () {
      const contatoElements = document.querySelectorAll(".footer-contact p");
      if (contatoElements.length >= 3) {
        contatoElements[0].innerHTML = `<strong>Endereço:</strong> ${dadosIgreja.contato.endereco}`;
        contatoElements[1].innerHTML = `<strong>Telefone:</strong> ${dadosIgreja.contato.telefone}`;
        contatoElements[2].innerHTML = `<strong>Email:</strong> <a href="mailto:${dadosIgreja.contato.email}">${dadosIgreja.contato.email}</a>`;
      }
    },

    // Atualizar redes sociais
    atualizarRedesSociais: function () {
      const socialIconsContainer = document.querySelector(".social-icons");
      if (socialIconsContainer) {
        socialIconsContainer.innerHTML = "";
        dadosIgreja.redesSociais.forEach((rede) => {
          const link = document.createElement("a");
          link.href = rede.url;
          link.setAttribute("aria-label", rede.nome);
          link.setAttribute("target", "_blank");
          link.setAttribute("rel", "noopener noreferrer");

          const icone = document.createElement("i");
          icone.className = rede.icone;

          link.appendChild(icone);
          socialIconsContainer.appendChild(link);
        });
      }
    },

    // =========================================================
    // FUNÇÃO PARA PREENCHER AUTOMATICAMENTE A PÁGINA DE ESCALAS
    // =========================================================
    atualizarEscalas: function () {
      const categorias = {
        louvor: "fa-music",
        recepcao: "fa-handshake",
        escolaDominical: "fa-book-open",
        sonoplastia: "fa-sliders-h",
      };

      const container = document.querySelector(".escalas-grid");
      if (!container) return; // sair se não estiver na página de escalas

      container.innerHTML = ""; // limpa escalas existentes (caso esteja reaplicando)

      for (const tipo in dadosIgreja.escalas) {
        const dados = dadosIgreja.escalas[tipo];
        const icone = categorias[tipo] || "fa-calendar";

        const card = document.createElement("div");
        card.className = "escala-card";

        card.innerHTML = `
                    <div class="escala-header">
                        <h3 class="escala-title">
                            <span class="escala-icon"><i class="fas ${icone}"></i></span>
                            Escala de ${
                              tipo.charAt(0).toUpperCase() + tipo.slice(1)
                            }
                        </h3>
                    </div>
                    <div class="escala-content">
                        <ul class="escala-lista">
                            ${dados
                              .map(
                                (item) => `
                                <li class="escala-item">
                                    <span class="escala-data">${item.data}</span>
                                    <span class="escala-pessoa">Equipe: ${item.equipe}</span>
                                </li>
                            `
                              )
                              .join("")}
                        </ul>
                    </div>
                `;
        container.appendChild(card);
      }
    },

    // Atualizar copyright
    atualizarCopyright: function () {
      const copyrightElement = document.querySelector(".copyright p");
      if (copyrightElement) {
        copyrightElement.textContent = `© ${dadosIgreja.anoAtual} ${dadosIgreja.nome}. Todos os direitos reservados.`;
      }
    },

    // Aplicar configurações de layout (número de colunas visíveis)
    aplicarLayoutFooter: function () {
      const footerContainer = document.querySelector(".footer-container");
      if (footerContainer) {
        // Atualizar classe baseada no número de colunas
        footerContainer.className = `container footer-container colunas-${dadosIgreja.colunas.quantidadeColunas}`;

        // Obter todas as colunas
        const colunas = footerContainer.querySelectorAll(".footer-section");

        // Definir visibilidade das colunas
        if (colunas.length >= 1)
          colunas[0].style.display = dadosIgreja.colunas.coluna1Visivel
            ? "block"
            : "none";
        if (colunas.length >= 2)
          colunas[1].style.display = dadosIgreja.colunas.coluna2Visivel
            ? "block"
            : "none";
        if (colunas.length >= 3)
          colunas[2].style.display = dadosIgreja.colunas.coluna3Visivel
            ? "block"
            : "none";
      }
    },

    // Adicionar mapa do Google (opcional)
    adicionarMapa: function () {
      const contatoSection = document.querySelector(".footer-contact");
      if (contatoSection) {
        const mapaExistente = contatoSection.querySelector(".footer-map");

        // Só adicionar o mapa se não existir ainda
        if (!mapaExistente) {
          const mapaDiv = document.createElement("div");
          mapaDiv.className = "footer-map";
          mapaDiv.innerHTML = `
                        <h4>Nossa Localização</h4>
                        <div class="map-small">
                            <a href="#localizacao" title="Ver mapa completo">
                                <img src="./assets/imagens/map-thumbnail.webp" alt="Mapa Miniatura" width="180" height="100">
                                <span>Clique para ver o mapa completo</span>
                            </a>
                        </div>
                    `;
          contatoSection.appendChild(mapaDiv);
        }
      }
    },
  };

  // =========================================================
  // FUNÇÃO PRINCIPAL QUE ATUALIZA TODOS OS ELEMENTOS
  // =========================================================
  function atualizarPaginaCompleta() {
    try {
      // Atualizar a barra de eventos
      PageUpdater.atualizarBarraEventos();

      // Atualizar a seção de agenda
      PageUpdater.atualizarAgenda();

      // Aplicar layout conforme configuração
      PageUpdater.aplicarLayoutFooter();

      // Atualizar cada seção individualmente
      PageUpdater.atualizarEscalas();
      PageUpdater.atualizarInfoIgreja();
      PageUpdater.atualizarHorarios();
      PageUpdater.atualizarContato();
      PageUpdater.atualizarRedesSociais();
      PageUpdater.atualizarCopyright();

      // Recursos opcionais
      // PageUpdater.adicionarMapa();

      console.log("Página atualizada com sucesso!");
    } catch (erro) {
      console.error("Erro ao atualizar a página:", erro);
    }
  }

  // Adicionar listener para atualizar quando dados mudam
  function definirObservadores() {
    // Esta função pode ser expandida para reagir a mudanças em tempo real
    // Por exemplo, mudanças de tema claro/escuro ou atualizações de API
  }

  // Inicialização
  atualizarPaginaCompleta();
  definirObservadores();

  // =========================================================
  // API PARA MODIFICAÇÕES EXTERNAS (PARA PAINEL ADMINISTRATIVO)
  // =========================================================
  // Atualizar a API global
  window.SiteAPI = {
    atualizar: atualizarPaginaCompleta,
    dados: dadosIgreja,
    atualizarDados: function (novosDados) {
      // Função para permitir atualização dos dados via painel admin
      Object.assign(dadosIgreja, novosDados);
      // Também atualizar referência global
      window.SiteAPI.dados = dadosIgreja;
      atualizarPaginaCompleta();
    },

    // Função específica para adicionar eventos à agenda
    adicionarEventoAgenda: function (evento) {
      // Validar dados mínimos do evento
      if (!evento.diaSemana || !evento.horario || !evento.titulo) {
        console.error(
          "Evento inválido. Os campos diaSemana, horario e titulo são obrigatórios."
        );
        return false;
      }

      // Definir valores padrão para campos opcionais
      evento.icone = evento.icone || "fas fa-map-marker-alt";
      evento.local = evento.local || "Igreja";
      evento.descricao = evento.descricao || "";

      // Adicionar o evento à agenda
      dadosIgreja.agendaEventos.push(evento);

      // Atualizar a seção de agenda
      PageUpdater.atualizarAgenda();

      return true;
    },

    // Função específica para remover eventos da agenda
    removerEventoAgenda: function (indice) {
      // Verificar se o índice é válido
      if (indice < 0 || indice >= dadosIgreja.agendaEventos.length) {
        console.error("Índice inválido para remoção de evento.");
        return false;
      }

      // Remover o evento
      dadosIgreja.agendaEventos.splice(indice, 1);

      // Atualizar a seção de agenda
      PageUpdater.atualizarAgenda();

      return true;
    },

    // Função para atualizar um evento específico da agenda
    atualizarEventoAgenda: function (indice, novosDados) {
      // Verificar se o índice é válido
      if (indice < 0 || indice >= dadosIgreja.agendaEventos.length) {
        console.error("Índice inválido para atualização de evento.");
        return false;
      }

      // Atualizar os dados do evento
      Object.assign(dadosIgreja.agendaEventos[indice], novosDados);

      // Atualizar a seção de agenda
      PageUpdater.atualizarAgenda();

      return true;
    },
  };
});
