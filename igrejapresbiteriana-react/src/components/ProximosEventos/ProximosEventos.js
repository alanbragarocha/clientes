import React from 'react';
import './ProximosEventos.css';

const ProximosEventos = () => {
  return (
    <div className="proximos-eventos">
      <div className="container">
        <div className="eventos-slider">
          <div className="evento-item">
            <div className="evento-icone">
              <i className="fas fa-users"></i>
            </div>
            <span>Escola Dominical: Domingo às 9h30</span>
          </div>
          <div className="evento-item">
            <div className="evento-icone">
              <i className="fas fa-bible"></i>
            </div>
            <span>Culto: Domingo às 18h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProximosEventos;
