import React from 'react';
import './CalvinoPage.css';

const CalvinoPage = () => {
  return (
    <main>
      {/* Banner da Página Sobre Calvino */}
      <section className="hero-banner sobre-banner">
        <div className="container">
          <h1>João Calvino</h1>
          <p className="subtitle">
            Principal teólogo sistematizador da Reforma Protestante e fundador
            das igrejas reformadas
          </p>
        </div>
      </section>

      {/* Seção História */}
      <section className="content-section sobre-historia" id="historia">
        <div className="container">
          <div className="content-grid">
            <div className="content-image">
              <img
                src="./assets/imagens/João Calvino.svg"
                alt="Retrato de João Calvino"
                loading="lazy"
                width="500"
                height="auto"
              />
            </div>
            <div className="content-text">
              <h2>O Sistematizador da Teologia Protestante</h2>
              <p>
                João Calvino nasceu em 10 de julho de 1509, em Noyon, França.
                Filho de um secretário episcopal, Calvino recebeu uma educação
                privilegiada desde cedo. Inicialmente destinado à carreira
                eclesiástica, estudou em Paris, onde recebeu uma sólida formação
                humanista, mas posteriormente seu pai o direcionou para o estudo
                do direito.
              </p>

              <p>
                Calvino obteve seu diploma em direito em 1532, mas após uma
                "conversão súbita" por volta de 1533, abandonou o catolicismo
                romano e aderiu às ideias da Reforma que já se espalhavam pela
                Europa. Devido à perseguição religiosa na França, foi forçado a
                fugir de Paris, buscando refúgio em Basileia, Suíça, onde
                publicou a primeira edição de sua obra-prima, "As Institutas da
                Religião Cristã", em 1536.
              </p>

              <p>
                Em 1536, durante uma viagem para Estrasburgo, foi persuadido por
                Guilherme Farel a permanecer em Genebra para ajudar na reforma
                local. Após um breve exílio em Estrasburgo (1538-1541), retornou
                a Genebra, onde liderou a transformação da cidade em um centro
                influente do protestantismo europeu, estabelecendo um modelo de
                governo eclesiástico e civil que seria adotado por muitas
                igrejas reformadas ao redor do mundo.
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
                <i className="fas fa-book"></i>
              </div>
              <div className="timeline-content">
                <h3>As Institutas da Religião Cristã</h3>
                <p className="timeline-date">1536-1559</p>
                <p>
                  Publicou e expandiu ao longo da vida sua obra-prima teológica,
                  uma sistematização completa da doutrina reformada que se
                  tornou um dos textos mais influentes do protestantismo.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-church"></i>
              </div>
              <div className="timeline-content">
                <h3>Reforma em Genebra</h3>
                <p className="timeline-date">1541-1564</p>
                <p>
                  Implementou uma reforma abrangente em Genebra, estabelecendo
                  um modelo de igreja com sistema presbiteriano de governo
                  eclesiástico, que seria posteriormente adotado por muitas
                  igrejas ao redor do mundo.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-university"></i>
              </div>
              <div className="timeline-content">
                <h3>Academia de Genebra</h3>
                <p className="timeline-date">1559</p>
                <p>
                  Fundou a Academia de Genebra (hoje Universidade de Genebra),
                  uma instituição de ensino que formou pastores e líderes
                  protestantes de toda a Europa, expandindo a influência do
                  calvinismo.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-scroll"></i>
              </div>
              <div className="timeline-content">
                <h3>Comentários Bíblicos</h3>
                <p className="timeline-date">1540-1564</p>
                <p>
                  Escreveu extensos comentários sobre quase todos os livros da
                  Bíblia, estabelecendo um modelo de exegese que combinava rigor
                  filológico, clareza teológica e aplicação prática.
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
                <i className="fas fa-globe"></i>
              </div>
              <div className="timeline-content">
                <h3>Expansão do Calvinismo</h3>
                <p className="timeline-date">1550-1700</p>
                <p>
                  Seu pensamento teológico se espalhou pela Europa e
                  posteriormente pelo mundo, originando as igrejas reformadas,
                  presbiterianas, congregacionais e batistas reformadas em
                  diversos países.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-balance-scale"></i>
              </div>
              <div className="timeline-content">
                <h3>Influência Política e Social</h3>
                <p className="timeline-date">1550-1800</p>
                <p>
                  Suas ideias sobre governo, resistência à tirania e ética
                  social influenciaram movimentos políticos na Escócia, Holanda,
                  Inglaterra e, posteriormente, nos Estados Unidos, contribuindo
                  para o desenvolvimento do constitucionalismo moderno.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="timeline-content">
                <h3>Educação e Cultura</h3>
                <p className="timeline-date">1560-1700</p>
                <p>
                  Seu modelo educacional e ênfase na alfabetização para leitura
                  das Escrituras influenciaram o desenvolvimento de sistemas
                  educacionais em países protestantes, promovendo altos níveis
                  de alfabetização.
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
                <i className="fas fa-book"></i>
              </div>
              <div className="card-content">
                <h3>As Institutas da Religião Cristã</h3>
                <p className="card-date">1536-1559</p>
                <p>
                  Sua obra-prima teológica, expandida em várias edições ao longo
                  da vida, oferece uma sistematização completa da teologia
                  reformada, abordando doutrina, eclesiologia e ética cristã.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <i className="fas fa-bible"></i>
              </div>
              <div className="card-content">
                <h3>Comentários Bíblicos</h3>
                <p className="card-date">1540-1564</p>
                <p>
                  Produziu comentários eruditos sobre quase todos os livros da
                  Bíblia, combinando análise textual cuidadosa com aplicação
                  teológica e pastoral.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <i className="fas fa-scroll"></i>
              </div>
              <div className="card-content">
                <h3>Tratados Teológicos</h3>
                <p className="card-date">1537-1561</p>
                <p>
                  Escreveu numerosos tratados sobre temas específicos, incluindo
                  a Ceia do Senhor, predestinação, reforma da igreja e polêmicas
                  contra o catolicismo romano e outras heresias.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <i className="fas fa-pray"></i>
              </div>
              <div className="card-content">
                <h3>Ordenanças Eclesiásticas e Catecismo</h3>
                <p className="card-date">1541-1545</p>
                <p>
                  Desenvolveu ordenanças para o governo da igreja e um catecismo
                  para instrução religiosa, estabelecendo modelos de disciplina
                  eclesiástica e educação que seriam amplamente adotados.
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
                Em 1540, Calvino casou-se com Idelette de Bure, uma viúva
                anabatista convertida à Reforma. O casamento foi descrito como
                harmonioso, embora marcado por tragédias pessoais. O casal teve
                um filho que morreu na infância, e Calvino também adotou os
                filhos de Idelette de seu primeiro casamento. Ela faleceu em
                1549, deixando Calvino profundamente abalado, e ele nunca mais
                se casou.
              </p>

              <p>
                Conhecido por sua disciplina rigorosa e ética de trabalho
                incansável, Calvino mantinha uma rotina extenuante de pregações,
                aulas, aconselhamento pastoral e escrita. Desde jovem, sofria
                com diversas enfermidades, incluindo problemas pulmonares, gota,
                enxaquecas e cálculos renais, que se agravaram nos seus últimos
                anos.
              </p>

              <p>
                Apesar de sua saúde debilitada, continuou suas atividades até
                poucas semanas antes de sua morte. Faleceu em 27 de maio de
                1564, aos 54 anos, em Genebra. Seguindo seu próprio pedido, foi
                enterrado em uma sepultura sem identificação no cemitério de
                Plainpalais, refletindo sua aversão ao culto a personalidades e
                sua ênfase em que toda glória deveria ser dada somente a Deus.
                Hoje, o local exato de sua sepultura é desconhecido,
                simbolizando sua convicção de que a mensagem deve ser maior que
                o mensageiro.
              </p>

              <div className="valores-container">
                <div className="valor-badge">
                  <i className="fas fa-check-circle"></i>
                  <span>Soberania de Deus</span>
                </div>
                <div className="valor-badge">
                  <i className="fas fa-check-circle"></i>
                  <span>Disciplina eclesiástica</span>
                </div>
                <div className="valor-badge">
                  <i className="fas fa-check-circle"></i>
                  <span>Rigor intelectual</span>
                </div>
                <div className="valor-badge">
                  <i className="fas fa-check-circle"></i>
                  <span>Vida cristã integral</span>
                </div>
                <div className="valor-badge">
                  <i className="fas fa-check-circle"></i>
                  <span>Ética do trabalho</span>
                </div>
                <div className="valor-badge">
                  <i className="fas fa-check-circle"></i>
                  <span>Soli Deo Gloria</span>
                </div>
              </div>

              <a href="https://pt.wikipedia.org/wiki/Calvinismo" className="btn">
                Saiba mais sobre o Calvinismo
              </a>
            </div>
            <div className="content-image">
              <img
                src="./assets/imagens/Genebra.jpg"
                alt="Vista histórica de Genebra, cidade de Calvino"
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

export default CalvinoPage;
