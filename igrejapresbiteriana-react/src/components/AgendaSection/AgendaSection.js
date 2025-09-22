import React from 'react';
import { dadosIgreja } from '../../data/churchData';
import './AgendaSection.css';

const AgendaSection = () => {
  // Usar apenas os eventos locais fixos
  const eventosParaMostrar = dadosIgreja.agendaEventos;

  return (
    <section className="agenda-section" id="agenda">
      <div className="container">
        <h2 className="section-title">Nossa Agenda</h2>
        <p className="section-description">
          Confira os principais eventos e atividades da nossa igreja.
          Participe e cresça em comunhão!
        </p>

        <div className="eventos-container">
          {eventosParaMostrar.map((evento, index) => (
            <div key={index} className="evento-card">
              <div className="evento-dia">
                <div className="dia-semana">{evento.diaSemana}</div>
                <div className="horario">{evento.horario}</div>
              </div>
              <div className="evento-info">
                <h3 className="evento-titulo">{evento.titulo}</h3>
                <p className="evento-descricao">{evento.descricao}</p>
                <div className="evento-local">
                  <i className={evento.icone}></i>
                  <span>{evento.local}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="calendario-btn">
          <a
            href="https://sipresb.com.br/quartaipb/eventos/escala.php"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Ver Calendário Completo <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AgendaSection;
