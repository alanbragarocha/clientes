import React from 'react';
import EscalaIframe from '../components/EscalaIframe/EscalaIframe';
import './EscalasPage.css';

const EscalasPage = () => {
  return (
    <div className="escalas-page">
      {/* Hero Section */}
      <section className="escalas-hero">
        <div className="container">
          <h1>Escalas de Serviço</h1>
          <p className="subtitle">
            Conheça a programação dos ministérios e serviços da nossa igreja
          </p>
        </div>
      </section>

      {/* Escalas Section */}
      <section className="escalas-content">
        <div className="container">
          <EscalaIframe />
        </div>
      </section>
    </div>
  );
};

export default EscalasPage;
