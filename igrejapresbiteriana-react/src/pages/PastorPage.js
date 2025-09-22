import React, { useState } from 'react';
import './PastorPage.css';

const PastorPage = () => {
  const [modalImage, setModalImage] = useState(null);

  const familyImages = [
    { src: "/assets/imagens/familia-pastor/01.jpeg", alt: "Família Pastor - Momento 1" },
    { src: "/assets/imagens/familia-pastor/02.jpeg", alt: "Família Pastor - Momento 2" },
    { src: "/assets/imagens/familia-pastor/03.jpeg", alt: "Família Pastor - Momento 3" },
    { src: "/assets/imagens/familia-pastor/4.jpeg", alt: "Família Pastor - Momento 4" },
    { src: "/assets/imagens/familia-pastor/05.jpeg", alt: "Família Pastor - Momento 5" },
    { src: "/assets/imagens/familia-pastor/06.jpeg", alt: "Família Pastor - Momento 6" },
    { src: "/assets/imagens/familia-pastor/07.jpeg", alt: "Família Pastor - Momento 7" }
  ];

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };
  return (
    <div className="pastor-page">
      {/* Hero Section */}
      <section className="pastor-hero">
        <div className="container">
          <div className="pastor-hero-content">
            <div className="pastor-image">
              <img
                src="/assets/imagens/Pastor Marcelo.png"
                alt="Rev. Marcelo Carnaval"
              />
            </div>
            <div className="pastor-info">
              <h1>Rev. Marcelo Carnaval</h1>
              <p className="pastor-periodo">Pastor da Quarta Igreja Presbiteriana de Macaé</p>
              <p className="pastor-resumo">
                Uma jornada de fé, ministério e serviço dedicada ao Reino de Deus e à comunidade cristã em Macaé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Biografia Section */}
      <section className="pastor-biografia">
        <div className="container">
          <h2 className="section-title text-center">Trajetória de Vida</h2>
          <div className="biografia-content">
            <h3>Dados Pessoais</h3>
            <p>
              Nascido em 1962, o Rev. Marcelo Carnaval Morett é mineiro, criado no Rio de Janeiro.
              Casado com Martha Morett desde 1988, o casal tem quatro filhos: Ana Clara, Ana Luíza,
              Ana Alícia e Davi.
            </p>

            <h3>Início da Caminhada Cristã</h3>
            <p>
              Sua jornada cristã começou na Igreja Presbiteriana da Ilha do Governador, onde se converteu,
              foi batizado e se casou. Foi o primeiro presbítero eleito na Igreja Presbiteriana Betel,
              que ajudou a plantar na Ilha do Governador.
            </p>

            <h3>Formação Pastoral</h3>
            <p>
              Graduou-se como Bacharel em Teologia pelo Seminário Teológico Betel, no Rio de Janeiro.
              Foi ordenado pelo Presbitério Rio-Norte em 28 de dezembro de 1995, sendo imediatamente
              transferido para o Presbitério de Macaé (PRMC).
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Ministerial */}
      <section className="pastor-timeline">
        <div className="container">
          <h2 className="section-title text-center">Trajetória Ministerial</h2>
          <p className="section-description text-center">
            Os marcos importantes no caminho pastoral do Rev. Marcelo
          </p>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-church"></i>
              </div>
              <div className="timeline-content">
                <h3>Início do Ministério em Macaé</h3>
                <p className="timeline-date">Fevereiro de 1996</p>
                <p>
                  Chegou a Macaé para pastorear a Igreja Presbiteriana de Aroeira, localizada no
                  Morro de São Jorge. Foi eleito por 4 vezes consecutivas, liderando a igreja por 11 anos.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-building"></i>
              </div>
              <div className="timeline-content">
                <h3>Expansão da Igreja</h3>
                <p className="timeline-date">1996-2007</p>
                <p>
                  Durante seu ministério, a igreja cresceu significativamente, mudando-se para um novo
                  templo no Jardim Santo Antônio e sendo renomeada para Segunda Igreja Presbiteriana de Macaé.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-users"></i>
              </div>
              <div className="timeline-content">
                <h3>Fundação da CCP</h3>
                <p className="timeline-date">2007</p>
                <p>
                  Iniciou um pequeno grupo de comunhão em sua casa, com o objetivo de alcançar pessoas
                  que nunca haviam frequentado igrejas. Este grupo cresceu e se transformou na Comunidade
                  Cristã Presbiteriana (CCP).
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-hotel"></i>
              </div>
              <div className="timeline-content">
                <h3>Primeira Igreja em Hotel</h3>
                <p className="timeline-date">2008</p>
                <p>
                  A congregação foi organizada oficialmente, tornando-se a 4ª Igreja Presbiteriana de
                  Macaé - CCP, sendo a primeira igreja do PRMC a funcionar em um salão de hotel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carreiras Section */}
      <section className="pastor-carreiras">
        <div className="container">
          <h2 className="section-title text-center">Carreira Profissional e Política</h2>
          <p className="section-description text-center">
            Além do ministério pastoral, o Rev. Marcelo desenvolveu trajetórias significativas em outras áreas
          </p>

          <div className="carreiras-grid">
            <div className="carreira-item">
              <div className="carreira-icon">
                <i className="fas fa-industry"></i>
              </div>
              <h4>Carreira Profissional</h4>
              <ul>
                <li>Trabalhou na PETROBRAS desde 1982</li>
                <li>Em 1998, deixou a empresa para dedicar-se ao ministério pastoral</li>
                <li>Retornou à PETROBRAS em 2006</li>
                <li>Trabalhou em diversas áreas, especialmente na coordenação de projetos de investimento</li>
                <li>Permaneceu na empresa até 2020</li>
              </ul>
            </div>

            <div className="carreira-item">
              <div className="carreira-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h4>Atuação Política</h4>
              <ul>
                <li>Candidato a Deputado Estadual pelo Partido NOVO em 2018</li>
                <li>Candidato a Vereador de Macaé pelo Partido PRTB em 2020</li>
                <li>Dedicou dois anos à atividade político-partidária</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Publicações Section */}
      <section className="pastor-publicacoes">
        <div className="container">
          <h2 className="section-title text-center">Publicações</h2>
          <p className="section-description text-center">
            Obras escritas pelo Rev. Marcelo que têm abençoado muitas vidas
          </p>

          <div className="publicacoes-grid">
            <div className="publicacao-item">
              <div className="publicacao-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h4>Namoro Cristão</h4>
              <p>
                Livro voltado para jovens e adolescentes solteiros, oferecendo orientações baseadas
                em princípios cristãos sobre relacionamentos.
              </p>
            </div>

            <div className="publicacao-item">
              <div className="publicacao-icon">
                <i className="fas fa-exclamation-triangle"></i>
              </div>
              <h4>5 Enganos que Algumas Igrejas Ensinam</h4>
              <p>
                Uma análise crítica sobre falsas doutrinas, mostrando como algumas interpretações
                bíblicas podem ser deturpadas, mesmo quando aparentemente baseadas em versículos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Atuação Presbiterial */}
      <section className="pastor-presbiterio">
        <div className="container">
          <h2 className="section-title text-center">Atuação no Presbitério</h2>
          <p className="section-description text-center">
            Contribuições para o desenvolvimento do presbiterianismo na região
          </p>

          <div className="presbiterio-content">
            <div className="presbiterio-icon">
              <i className="fas fa-church"></i>
            </div>
            <div className="presbiterio-text">
              <h4>Presbitério de Macaé</h4>
              <ul>
                <li>Sempre esteve ligado ao Presbitério de Macaé (PRMC)</li>
                <li>Eleito Presidente do Presbitério por 4 vezes</li>
                <li>Ocupou diversas funções importantes no PRMC</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Legado Section */}
      <section className="pastor-legado">
        <div className="container">
          <div className="legado-content">
            <h2 className="section-title text-center">Legado Ministerial</h2>
            <p>
              Ao longo de sua trajetória, o Rev. Marcelo Carnaval tem deixado um legado significativo
              para a Igreja Presbiteriana em Macaé, através do seu compromisso com a Palavra de Deus,
              seu coração pastoral e sua visão para alcançar pessoas com o Evangelho de Cristo.
            </p>
            <blockquote>
              "O justo viverá pela fé"<cite>Romanos 1:17</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Galeria da Família */}
      <section className="familia-galeria">
        <div className="container">
          <h2 className="section-title text-center">Família Pastoral</h2>
          <p className="section-description text-center">
            Momentos especiais da família do Rev. Marcelo Carnaval e Martha Morett
          </p>

          <div className="galeria-grid">
            {familyImages.map((image, index) => (
              <div key={index} className="galeria-item">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="galeria-imagem"
                  onClick={() => openModal(image)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal para visualização ampliada */}
      {modalImage && (
        <div className="galeria-modal active" onClick={closeModal}>
          <div className="galeria-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="galeria-modal-close" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <img
              src={modalImage.src}
              alt={modalImage.alt}
              className="galeria-modal-imagem"
            />
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="pastor-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Venha Conhecer Nossa Igreja</h2>
            <p className="cta-description">
              Faça parte desta família de fé e cresça espiritualmente
            </p>
            <div className="cta-actions">
              <a href="/#contato" className="btn btn-secondary btn-lg">
                <i className="fas fa-map-marker-alt"></i>
                Nossa Localização
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PastorPage;
