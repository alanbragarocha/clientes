import React from 'react';
import { Link } from 'react-router-dom';
import { dadosIgreja } from '../../data/churchData';
import './PastorSection.css';

const PastorSection = () => {
  return (
    <section className="pastor-section" id="pastor">
      <div className="container">
        <div className="pastor-container">
          <div className="pastor-imagem">
            <div className="pastor-foto-oval">
              <img
                src={dadosIgreja.pastor.foto}
                alt={dadosIgreja.pastor.nome}
                width="400"
                height="400"
              />
            </div>
          </div>

          <div className="pastor-conteudo">
            <div className="pastor-info">
              <h3>{dadosIgreja.pastor.nome}</h3>
              <p className="pastor-bio">
                {dadosIgreja.pastor.biografia}
              </p>
              <p className="pastor-bio">
                {dadosIgreja.pastor.formacao}
              </p>
              <div className="pastor-acoes">
                <Link to="/pastor" className="btn-primary">
                  Conheça Minha Trajetória
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastorSection;
