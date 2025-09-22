import React from 'react';
import { dadosIgreja } from '../../data/churchData';
import './MapSection.css';

const MapSection = () => {
  return (
    <section className="map-section" id="localizacao">
      <div className="container">
        <h2 className="section-title">Como Chegar</h2>
        <p className="section-description">
          Veja nossas localizações no mapa e venha nos visitar!
        </p>

        <div className="maps-container">
          <div className="map-card">
            <div className="map-info">
              <h3>Macaé</h3>
              <p>{dadosIgreja.contato.enderecoMacae}</p>
            </div>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.6742924957!2d-41.78912!3d-22.37063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9631dd4cc4f2f1%3A0x123!2sR.%20Pref.%20Eduardo%20Serrano%2C%2093%20-%20Imbetiba%2C%20Maca%C3%A9%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1695000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Quarta Igreja Presbiteriana de Macaé"
                className="map-iframe"
              ></iframe>
            </div>
          </div>

          <div className="map-card">
            <div className="map-info">
              <h3>Conceição de Macabu</h3>
              <p>{dadosIgreja.contato.enderecoMacabu}</p>
            </div>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.475761424711!2d-41.866614!3d-22.083171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9634b0964eee8f%3A0x123!2sR.%20Melch%C3%ADades%20Pican%C3%A7o%2C%20195%20-%20Centro%2C%20Concei%C3%A7%C3%A3o%20de%20Macabu%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1695000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Congregação em Conceição de Macabu"
                className="map-iframe"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
