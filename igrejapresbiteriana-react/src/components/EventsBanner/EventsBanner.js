import React from 'react';
import { dadosIgreja } from '../../data/churchData';
import './EventsBanner.css';

const EventsBanner = () => {
  return (
    <div className="proximos-eventos">
      <div className="container">
        <div className="eventos-slider">
          {dadosIgreja.eventosDestacados.map((evento, index) => (
            <div key={index} className="evento-item">
              <div className="evento-icone">
                <i className={evento.icone}></i>
              </div>
              <span>{evento.nome}: {evento.horario}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsBanner;
