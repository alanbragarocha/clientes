// Exemplo de como utilizar a API para gerenciar a seção de agenda dinamicamente
// Este arquivo é apenas um exemplo e pode ser removido depois

// Esperando o DOM estar pronto e a API estar disponível
document.addEventListener("DOMContentLoaded", function () {
  // Verificar se a API está disponível
  if (window.SiteAPI) {
    console.log("API da Igreja encontrada!");

    // EXEMPLO 1: Como adicionar um novo evento à agenda
    /*
        window.SiteAPI.adicionarEventoAgenda({
            diaSemana: "TER",
            horario: "19:00",
            titulo: "Grupo de Estudo Bíblico",
            descricao: "Estudo aprofundado da palavra com foco em livros específicos da Bíblia.",
            local: "Casa da Família Silva",
            icone: "fas fa-map-marker-alt"
        });
        */

    // EXEMPLO 2: Como atualizar um evento existente
    // Atualiza o primeiro evento da lista (índice 0)
    /*
        window.SiteAPI.atualizarEventoAgenda(0, {
            titulo: "Escola Dominical Renovada",
            descricao: "Novo formato com classes interativas e material atualizado!"
        });
        */

    // EXEMPLO 3: Como remover um evento existente
    // Remove o último evento da agenda
    /*
        const ultimoIndice = window.SiteAPI.dados.agendaEventos.length - 1;
        if (ultimoIndice >= 0) {
            window.SiteAPI.removerEventoAgenda(ultimoIndice);
        }
        */

    // EXEMPLO 4: Como substituir toda a lista de eventos
    /*
        window.SiteAPI.atualizarDados({
            agendaEventos: [
                {
                    diaSemana: "SEG",
                    horario: "19:00",
                    titulo: "Reunião de Liderança",
                    descricao: "Planejamento e oração com líderes dos ministérios.",
                    local: "Sala de Reuniões",
                    icone: "fas fa-users"
                },
                {
                    diaSemana: "QUA",
                    horario: "20:00",
                    titulo: "Culto Midweek",
                    descricao: "Momento de louvor e ensino no meio da semana.",
                    local: "Templo Principal",
                    icone: "fas fa-church"
                },
                {
                    diaSemana: "DOM",
                    horario: "10:00",
                    titulo: "Culto da Família",
                    descricao: "Momento especial de adoração com todas as gerações juntas.",
                    local: "Templo Principal",
                    icone: "fas fa-heart"
                }
            ]
        });
        */
  } else {
    console.error("API da Igreja não encontrada!");
  }
});
