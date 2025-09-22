import React from 'react';
import './AshbelPage.css';

const AshbelPage = () => {
  return (
    <main>
      {/* Banner da Página Sobre Simonton */}
      <section className="hero-banner sobre-banner">
        <div className="container">
          <h1>Ashbel Green Simonton</h1>
          <p className="subtitle">
            Pioneiro da Igreja Presbiteriana no Brasil e um dos mais importantes
            missionários protestantes do século XIX
          </p>
        </div>
      </section>

      {/* Seção História */}
      <section className="content-section sobre-historia" id="historia">
        <div className="container">
          <div className="content-grid">
            <div className="content-image">
              <img
                src="./assets/imagens/Ashbel Green Simonton.svg"
                alt="Retrato de Ashbel Green Simonton"
                loading="lazy"
                width="500"
                height="auto"
              />
            </div>
            <div className="content-text">
              <h2>O Início de uma Missão</h2>
              <p>
                Ashbel Green Simonton nasceu em 20 de janeiro de 1833, em West
                Hanover, Pensilvânia, Estados Unidos. Descendente de uma família
                presbiteriana escocesa-irlandesa, Simonton formou-se no College
                of New Jersey (atual Universidade de Princeton) em 1852 e
                ingressou no Seminário Teológico de Princeton em 1855, após uma
                profunda experiência de conversão.
              </p>

              <p>
                Embora inicialmente considerasse trabalhar como missionário na
                China, Simonton sentiu-se chamado para o Brasil, um país
                predominantemente católico que começava a se abrir para a
                imigração e influências estrangeiras. Ele foi ordenado pastor em
                14 de abril de 1859 e embarcou para o Brasil em 18 de junho do
                mesmo ano.
              </p>

              <p>
                Em 12 de agosto de 1859, Simonton chegou ao Rio de Janeiro,
                marcando o início da obra presbiteriana oficialmente reconhecida
                no Brasil. Seu desembarque deu-se em um contexto histórico
                específico, quando o Império do Brasil, sob Dom Pedro II,
                começava a se abrir para novas ideias e a liberdade religiosa
                gradualmente ganhava espaço.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Realizações */}
      <section className="content-section timeline-section" id="realizacoes">
        <div className="container">
          <h2 className="section-title">Principais Realizações</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-church"></i>
              </div>
              <div className="timeline-content">
                <h3>Primeiro Culto Presbiteriano</h3>
                <p className="timeline-date">12 de maio de 1861</p>
                <p>
                  Após aprender português e fazer contatos iniciais, Simonton
                  realizou o primeiro culto protestante presbiteriano oficial no
                  Brasil, em uma sala alugada no Rio de Janeiro.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-book-bible"></i>
              </div>
              <div className="timeline-content">
                <h3>Fundação da Primeira Igreja</h3>
                <p className="timeline-date">12 de janeiro de 1862</p>
                <p>
                  Organizou a Primeira Igreja Presbiteriana do Rio de Janeiro, a
                  primeira igreja presbiteriana do Brasil, com um pequeno grupo
                  inicial de convertidos.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-newspaper"></i>
              </div>
              <div className="timeline-content">
                <h3>Imprensa Protestante</h3>
                <p className="timeline-date">1864</p>
                <p>
                  Fundou o jornal "Imprensa Evangélica", primeiro periódico
                  protestante do Brasil, importante instrumento para a
                  divulgação da fé reformada e para a alfabetização.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-school"></i>
              </div>
              <div className="timeline-content">
                <h3>Seminário Teológico</h3>
                <p className="timeline-date">1867</p>
                <p>
                  Estabeleceu o primeiro seminário teológico protestante do
                  Brasil, formando os primeiros pastores brasileiros, incluindo
                  José Manoel da Conceição, primeiro pastor presbiteriano
                  brasileiro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Legado */}
      <section className="content-section timeline-section alt-bg" id="legado">
        <div className="container">
          <h2 className="section-title">Legado e Influência</h2>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-users"></i>
              </div>
              <div className="timeline-content">
                <h3>Fortalecimento do Presbiterianismo</h3>
                <p className="timeline-date">1860-1867</p>
                <p>
                  Durante seus oito anos de ministério no Brasil, Simonton
                  estabeleceu as bases do presbiterianismo brasileiro, que se
                  tornaria uma das principais denominações protestantes do país.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-book"></i>
              </div>
              <div className="timeline-content">
                <h3>Contribuição para a Educação</h3>
                <p className="timeline-date">1860-1867</p>
                <p>
                  Simonton e os missionários que o seguiram enfatizaram a
                  educação como ferramenta de evangelização, estabelecendo
                  escolas que mais tarde se tornariam importantes instituições
                  educacionais no Brasil.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-seedling"></i>
              </div>
              <div className="timeline-content">
                <h3>Formação do Presbitério</h3>
                <p className="timeline-date">Dezembro de 1865</p>
                <p>
                  Organizou o primeiro Presbitério do Brasil, unindo as igrejas
                  presbiterianas então existentes e estabelecendo as bases para
                  a futura Igreja Presbiteriana do Brasil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Escritos */}
      <section className="content-section cards-section" id="escritos">
        <div className="container">
          <h2 className="section-title">Escritos e Publicações</h2>

          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">
                <i className="fas fa-journal-whills"></i>
              </div>
              <div className="card-content">
                <h3>Diário Pessoal</h3>
                <p className="card-date">1859-1867</p>
                <p>
                  Seu diário pessoal, publicado após sua morte, oferece uma
                  visão íntima de suas experiências, desafios e reflexões
                  durante seu trabalho missionário no Brasil.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <i className="fas fa-newspaper"></i>
              </div>
              <div className="card-content">
                <h3>Artigos na Imprensa Evangélica</h3>
                <p className="card-date">1864-1867</p>
                <p>
                  Publicou numerosos artigos explicando a fé reformada,
                  rebatendo críticas e incentivando o estudo bíblico entre os
                  brasileiros.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <i className="fas fa-book"></i>
              </div>
              <div className="card-content">
                <h3>Sermões e Exposições Bíblicas</h3>
                <p className="card-date">1861-1867</p>
                <p>
                  Seus sermões, alguns dos quais preservados, demonstram sua
                  habilidade de comunicar conceitos teológicos complexos de
                  maneira acessível à cultura brasileira.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <i className="fas fa-scroll"></i>
              </div>
              <div className="card-content">
                <h3>Correspondências Missionárias</h3>
                <p className="card-date">1859-1867</p>
                <p>
                  Suas cartas para a Junta de Missões nos EUA constituem
                  importante fonte histórica sobre o Brasil imperial e os
                  primórdios do protestantismo no país.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Vida Pessoal e Falecimento */}
      <section
        className="content-section biografia-section alt-bg"
        id="vida-pessoal"
      >
        <div className="container">
          <div className="content-grid reverse">
            <div className="content-text">
              <h2>Vida Pessoal e Falecimento</h2>
              <p>
                Em 1863, Simonton retornou brevemente aos Estados Unidos, onde
                se casou com Helen Murdoch. O casal voltou ao Brasil, mas
                tragicamente, Helen faleceu em 1864 durante o parto de sua
                filha, chamada Helen. Este foi um golpe devastador para
                Simonton, que continuou seu trabalho enquanto enfrentava o luto.
              </p>

              <p>
                Apesar das dificuldades pessoais, Simonton dedicou-se
                incansavelmente à sua missão. No entanto, sua saúde foi
                severamente afetada pelas condições tropicais e pelo trabalho
                exaustivo. Em dezembro de 1867, aos 34 anos, Simonton contraiu
                febre amarela e faleceu em São Paulo, onde foi sepultado.
              </p>

              <p>
                Sua vida breve, mas extraordinariamente produtiva, deixou marcas
                profundas na história religiosa do Brasil. Sua filha Helen foi
                criada pelos tios nos Estados Unidos e nunca retornou ao Brasil,
                mas o legado de seu pai continua vivo nas inúmeras igrejas
                presbiterianas espalhadas pelo território brasileiro.
              </p>

              <div className="valores-container">
                <div className="valor-badge">
                  <i className="fas fa-check-circle"></i>
                  <span>Dedicação à missão</span>
                </div>
                <div className="valor-badge">
                  <i className="fas fa-check-circle"></i>
                  <span>Compromisso com a educação</span>
                </div>
                <div className="valor-badge">
                  <i className="fas fa-check-circle"></i>
                  <span>Perseverança</span>
                </div>
                <div className="valor-badge">
                  <i className="fas fa-check-circle"></i>
                  <span>Adaptação cultural</span>
                </div>
                <div className="valor-badge">
                  <i className="fas fa-check-circle"></i>
                  <span>Visão estratégica</span>
                </div>
                <div className="valor-badge">
                  <i className="fas fa-check-circle"></i>
                  <span>Formação de lideranças locais</span>
                </div>
              </div>

              <a
                href="https://pt.wikipedia.org/wiki/Ashbel_Green_Simonton"
                className="btn"
              >
                Saiba mais sobre nossa história
              </a>
            </div>
            <div className="content-image">
              <img
                src="./assets/imagens/catedral.jpg"
                alt="Primeira Igreja Presbiteriana do Rio de Janeiro fundada por Simonton"
                loading="lazy"
                width="500"
                height="auto"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AshbelPage;
