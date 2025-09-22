// Dados da Quarta Igreja Presbiteriana de Macaé
export const dadosIgreja = {
  nome: "Quarta Igreja Presbiteriana de Macaé",
  descricao: "Uma comunidade de fé comprometida com a Palavra de Deus, adoração verdadeira e crescimento espiritual, fundamentada nos princípios da Reforma Protestante.",
  versiculo: {
    texto: "Tudo para a glória de Deus",
    referencia: "1 Coríntios 10:31"
  },

  // Informações de contato
  contato: {
    enderecoMacae: "R. Pref. Eduardo Serrano, 93 - Imbetiba, Macaé - RJ",
    enderecoMacabu: "Rua Melchíades Picanço, nº 195, Centro - Conceição de Macabu - RJ",
    site: "https://www.4ipbmacae.com.br",
    localizacaoMacae: {
      latitude: "-22.3706",
      longitude: "-41.7871"
    },
    localizacaoMacabu: {
      latitude: "-22.0831",
      longitude: "-41.8665"
    }
  },

  // Redes sociais
  redesSociais: {
    whatsapp: "https://wa.me/5522997821855",
    instagram: "https://www.instagram.com/4ipbmacae/",
    youtube: "https://www.youtube.com/@quartaigrejapresbiterianad9679"
  },

  // Eventos destacados na barra superior
  eventosDestacados: [
    {
      nome: "Escola Dominical",
      horario: "Domingo às 9h30",
      icone: "fas fa-users"
    },
    {
      nome: "Culto",
      horario: "Domingo às 18h",
      icone: "fas fa-bible"
    }
  ],

  // Agenda de eventos semanais
  agendaEventos: [
    {
      diaSemana: "Dom",
      horario: "09:30",
      titulo: "Escola Dominical",
      descricao: "Participe dos estudos bíblicos para todas as idades, com classes específicas para crianças, jovens e adultos.",
      local: "Templo Principal",
      icone: "fas fa-map-marker-alt"
    },
    {
      diaSemana: "Dom",
      horario: "18:00",
      titulo: "Culto",
      descricao: "Momento de adoração, louvor e pregação da Palavra de Deus para toda a família.",
      local: "Templo Principal",
      icone: "fas fa-map-marker-alt"
    },
    {
      diaSemana: "QUA",
      horario: "19:30",
      titulo: "Grupo de Comunhão nas Casas",
      descricao: "Encontro de comunhão e estudo da Palavra nas casas dos irmãos.",
      local: "Casas dos Membros",
      icone: "fas fa-map-marker-alt"
    },
    {
      diaSemana: "QUI",
      horario: "19:30",
      titulo: "Grupo de Comunhão",
      descricao: "Encontro de comunhão e estudo da Palavra em Conceição de Macabu.",
      local: "Conceição de Macabu",
      icone: "fas fa-map-marker-alt"
    }
  ],

  // Escalas de serviço
  escalas: {
    louvor: [
      {
        data: "07/04/2025 - Domingo Manhã",
        equipe: "Marcos (Líder), João, Ana, Pedro"
      },
      {
        data: "07/04/2025 - Domingo Noite",
        equipe: "Rebeca (Líder), Lucas, Mateus, Raquel"
      },
      {
        data: "14/04/2025 - Domingo Manhã",
        equipe: "Daniel (Líder), Paulo, Marta, Ester"
      },
      {
        data: "14/04/2025 - Domingo Noite",
        equipe: "Samuel (Líder), Davi, Sara, Isabel"
      }
    ],
    recepcao: [
      { data: "07/04/2025 - Domingo", equipe: "José e Maria" },
      { data: "14/04/2025 - Domingo", equipe: "Carlos e Beatriz" },
      { data: "21/04/2025 - Domingo", equipe: "André e Juliana" },
      { data: "28/04/2025 - Domingo", equipe: "Roberto e Cristina" }
    ],
    escolaDominical: [
      { data: "07/04/2025 - Classe Infantil", equipe: "Patrícia e Renata" },
      { data: "07/04/2025 - Classe Adolescentes", equipe: "Fernando" },
      { data: "14/04/2025 - Classe Infantil", equipe: "Luciana e Carla" },
      { data: "14/04/2025 - Classe Adolescentes", equipe: "Gabriel" }
    ],
    sonoplastia: [
      { data: "07/04/2025 - Domingo", equipe: "Rodrigo" },
      { data: "14/04/2025 - Domingo", equipe: "Felipe" },
      { data: "21/04/2025 - Domingo", equipe: "Leonardo" },
      { data: "28/04/2025 - Domingo", equipe: "Thiago" }
    ]
  },

  // Horários dos cultos para o footer
  cultos: [
    { nome: "Escola Dominical", horario: "Domingo às 9h30" },
    { nome: "Culto Dominical", horario: "Domingo às 18h" },
    { nome: "Grupo de Comunhão nas Casas", horario: "Quarta às 19h30" }
  ],

  // Figuras históricas da Reforma
  figurasHistoricas: [
    {
      nome: "João Calvino",
      periodo: "(1509-1564)",
      descricao: "Reformador francês e teólogo sistematizador da doutrina reformada.",
      imagem: "/assets/imagens/João Calvino.svg",
      detalhes: "João Calvino foi um dos principais reformadores protestantes..."
    },
    {
      nome: "Martinho Lutero",
      periodo: "(1483-1546)",
      descricao: "Monge alemão que iniciou a Reforma Protestante em 1517.",
      imagem: "/assets/imagens/martinho lutero.svg",
      detalhes: "Martinho Lutero foi um teólogo alemão..."
    },
    {
      nome: "Ashbel Green Simonton",
      periodo: "(1833-1867)",
      descricao: "Missionário americano que fundou a Igreja Presbiteriana no Brasil.",
      imagem: "/assets/imagens/Ashbel Green Simonton.svg",
      detalhes: "Ashbel Green Simonton chegou ao Brasil em 1859..."
    }
  ],

  // Informações do pastor
  pastor: {
    nome: "Rev. Marcelo Carnaval",
    foto: "/assets/imagens/Pastor Marcelo.png",
    biografia: "Nascido em 1962, é mineiro, criado no Rio de Janeiro e mora em Macaé desde 1996. É casado com Martha Morett, que é médica psiquiatra infantil. Eles têm quatro filhos: Ana Clara, Ana Luíza, Ana Alícia e Davi.",
    formacao: "O pastor Marcelo é Bacharel em teologia pelo Seminário Teológico Betel, no Rio de Janeiro. Pastoreou a Segunda Igreja Presbiteriana de Macaé por onze anos, antes de plantar a Quarta IPM, há 14 anos."
  },

  // Dados bancários para dízimos e ofertas
  dadosBancarios: {
    banco: 'Banco CORA',
    conta: '37880206',
    titular: 'Quarta Igreja Presbiteriana de Macaé',
    cnpj: '16.701.498/0001-50'
  },

  // Dados PIX
  pix: {
    chave: '4igrejapresbiterianademacae@gmail.com',
    tipo: 'E-mail',
    qrCodeImage: '/assets/imagens/Qr-Macae.jpg'
  },

  // Dados da Congregação de Conceição de Macabu
  congregacaoMacabu: {
    nome: 'Congregação de Conceição de Macabu',
    dadosBancarios: {
      banco: 'Banco Itaú',
      agencia: '0941',
      conta: '19643-8',
      titular: 'Quarta Igreja Presbiteriana de Macaé',
      cnpj: '16.701.498/0001-50'
    },
    pix: {
      chave: 'oferta4ipmacae@gmail.com',
      tipo: 'E-mail',
      qrCodeImage: '/assets/imagens/Qr-Macabu.jpg'
    }
  },

  // Ano atual para copyright
  anoAtual: new Date().getFullYear()
};

export default dadosIgreja;
