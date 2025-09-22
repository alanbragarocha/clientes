import React from 'react';
import Card from '../Card/Card';
import { dadosIgreja } from '../../data/churchData';
import './ReformaSection.css';

const ReformaSection = () => {
  return (
    <section className="reforma-section" id="reforma">
      <div className="container">
        <h2 className="section-title">Figuras Históricas</h2>
        <p className="section-description">
          Conheça algumas das figuras históricas mais importantes para a
          teologia reformada e a Igreja Presbiteriana.
        </p>

        <div className="card-grid">
          {dadosIgreja.figurasHistoricas.map((figura, index) => {
            // Mapear nomes para URLs das páginas
            const pageMap = {
              'João Calvino': '/calvino',
              'Martinho Lutero': '/lutero',
              'Ashbel Green Simonton': '/ashbel'
            };

            return (
              <Card
                key={index}
                image={{
                  src: figura.imagem,
                  alt: figura.nome
                }}
                title={figura.nome}
                description={`${figura.periodo} - ${figura.descricao}`}
                buttonLink={pageMap[figura.nome]}
                buttonText="Saiba mais"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReformaSection;
