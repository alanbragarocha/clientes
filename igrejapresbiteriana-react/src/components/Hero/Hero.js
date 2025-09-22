import React from 'react';
import { dadosIgreja } from '../../data/churchData';
import './Hero.css';

const Hero = () => {
  const scrollToAgenda = (e) => {
    e.preventDefault();
    const agendaElement = document.getElementById('agenda');
    if (agendaElement) {
      agendaElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>Bem-vindo à {dadosIgreja.nome}</h1>
          <p>{dadosIgreja.descricao}</p>
          <a href="#agenda" className="btn-primary" onClick={scrollToAgenda}>
            Nossos Cultos e Eventos
          </a>
        </div>
        <div className="hero-image">
          <img
            src="/assets/imagens/capa igreja.jpg"
            alt={`Interior da ${dadosIgreja.nome}`}
            width="600"
            height="400"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
