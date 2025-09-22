import React from 'react';
import './LuteroPage.css';

const LuteroPage = () => {
  return (
    <main>
      {/* Banner da Página Sobre Lutero */}
      <section className="hero-banner sobre-banner">
        <div className="container">
          <h1>Martinho Lutero</h1>
          <p className="subtitle">
            Pai da Reforma Protestante e um dos mais influentes teólogos da
            história do cristianismo
          </p>
        </div>
      </section>

      {/* Seção História */}
      <section className="content-section sobre-historia" id="historia">
        <div className="container">
          <div className="content-grid">
            <div className="content-image">
              <img
                src="./assets/imagens/martinho lutero.svg"
                alt="Retrato de Martinho Lutero"
                loading="lazy"
                width="500"
                height="auto"
              />
            </div>
            <div className="content-text">
              <h2>O Início de uma Revolução Teológica</h2>
              <p>
                Martinho Lutero nasceu em 10 de novembro de 1483, em Eisleben,
                Alemanha. Filho de uma família de camponeses e mineiros, Lutero
                teve uma educação rigorosa e, contra a vontade de seu pai, que
                desejava que ele se tornasse advogado, entrou para a ordem dos
                agostinianos em 1505, após uma experiência traumática durante
                uma tempestade.
              </p>

              <p>
                Ordenado sacerdote em 1507, Lutero recebeu seu doutorado em
                teologia em 1512 e começou a lecionar Teologia Bíblica na
                Universidade de Wittenberg. Durante seus estudos aprofundados da
                Bíblia, especialmente das cartas de Paulo aos Romanos,
                desenvolveu uma crescente insatisfação com práticas da Igreja
                Católica da época, particularmente a venda de indulgências.
              </p>

              <p>
                Em 31 de outubro de 1517, Lutero afixou suas famosas 95 teses na
                porta da Igreja do Castelo de Wittenberg, desafiando abertamente
                a autoridade papal e várias práticas eclesiásticas, dando início
                ao que viria a ser conhecido como a Reforma Protestante. Este
                ato, inicialmente destinado a promover um debate acadêmico,
                acendeu uma faísca que se transformaria em uma revolução
                religiosa em toda a Europa.
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
                <i className="fas fa-scroll"></i>
              </div>
              <div className="timeline-content">
                <h3>As 95 Teses</h3>
                <p className="timeline-date">31 de outubro de 1517</p>
                <p>
                  Publicou suas 95 teses contra as indulgências, criticando
                  práticas da Igreja Católica e propondo uma reforma baseada nas
                  Escrituras, marcando o início simbólico da Reforma
                  Protestante.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-book-bible"></i>
              </div>
              <div className="timeline-content">
                <h3>Tradução da Bíblia para o Alemão</h3>
                <p className="timeline-date">1522-1534</p>
                <p>
                  Traduziu o Novo Testamento em apenas 11 semanas enquanto
                  estava escondido no Castelo de Wartburg e posteriormente
                  completou a tradução de toda a Bíblia para o alemão,
                  tornando-a acessível ao povo comum.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-landmark"></i>
              </div>
              <div className="timeline-content">
                <h3>Dieta de Worms</h3>
                <p className="timeline-date">1521</p>
                <p>
                  Defendeu suas ideias perante o Imperador Carlos V e outras
                  autoridades eclesiásticas e seculares, recusando-se a
                  retratar-se e proferindo a famosa frase: "Aqui estou, não
                  posso fazer de outra maneira".
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-church"></i>
              </div>
              <div className="timeline-content">
                <h3>Catecismos e Reforma Litúrgica</h3>
                <p className="timeline-date">1529</p>
                <p>
                  Publicou o Catecismo Maior e o Catecismo Menor, obras
                  fundamentais para a educação religiosa protestante, e
                  reformulou a liturgia, introduzindo o uso do vernáculo nas
                  cerimônias religiosas.
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
                <h3>Surgimento do Protestantismo</h3>
                <p className="timeline-date">1517-1546</p>
                <p>
                  Seu pensamento e ações levaram ao nascimento do
                  protestantismo, uma divisão fundamental na história do
                  cristianismo que gerou diversas denominações e tradições
                  eclesiásticas.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-book"></i>
              </div>
              <div className="timeline-content">
                <h3>Contribuição para a Língua Alemã</h3>
                <p className="timeline-date">1522-1546</p>
                <p>
                  Sua tradução da Bíblia foi decisiva para a padronização e
                  desenvolvimento do alemão moderno, tornando-se uma obra
                  literária fundamental e influenciando profundamente a cultura
                  germânica.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="timeline-content">
                <h3>Educação Universal</h3>
                <p className="timeline-date">1524-1530</p>
                <p>
                  Defendeu a educação para todos, inclusive mulheres, e o ensino
                  nas línguas vernáculas, influenciando o desenvolvimento de
                  sistemas educacionais públicos e a alfabetização em massa na
                  Europa.
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
                <i className="fas fa-landmark"></i>
              </div>
              <div className="card-content">
                <h3>As 95 Teses</h3>
                <p className="card-date">1517</p>
                <p>
                  Documento inicial da Reforma, criticava a venda de
                  indulgências e questionava a autoridade papal, tornando-se um
                  símbolo do movimento reformador.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <i className="fas fa-book"></i>
              </div>
              <div className="card-content">
                <h3>Da Liberdade Cristã</h3>
                <p className="card-date">1520</p>
                <p>
                  Um de seus tratados mais importantes, articula a doutrina da
                  justificação pela fé e a liberdade do cristão, central para a
                  teologia protestante.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <i className="fas fa-university"></i>
              </div>
              <div className="card-content">
                <h3>Da Autoridade Secular</h3>
                <p className="card-date">1523</p>
                <p>
                  Tratado que estabeleceu as bases para a doutrina dos "dois
                  reinos", definindo as relações entre Igreja e Estado no
                  pensamento protestante.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <i className="fas fa-music"></i>
              </div>
              <div className="card-content">
                <h3>Hinários e Composições</h3>
                <p className="card-date">1523-1546</p>
                <p>
                  Compôs inúmeros hinos, incluindo "Castelo Forte", e
                  estabeleceu a tradição da hinódia congregacional no culto
                  protestante, valorizando a participação dos fiéis.
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
                Em 1525, Lutero surpreendeu muitos ao se casar com Katharina von
                Bora, uma ex-freira que havia fugido de seu convento
                influenciada pelas ideias da Reforma. O casamento, além de
                reforçar sua ruptura com o celibato clerical, tornou-se um
                modelo de vida familiar protestante. O casal teve seis filhos e
                sua casa era um centro de atividade intelectual, recebendo
                estudantes e teólogos para discussões que posteriormente foram
                compiladas nas famosas "Conversas à Mesa".
              </p>

              <p>
                Nos últimos anos de sua vida, Lutero sofreu com diversos
                problemas de saúde, incluindo cálculos renais, gota e angina.
                Apesar disso, manteve-se ativo em seus escritos e pregações. Em
                janeiro de 1546, viajou para sua cidade natal, Eisleben, para
                arbitrar uma disputa familiar. Lá, após pregar pela última vez,
                faleceu em 18 de fevereiro de 1546, aos 62 anos.
              </p>

              <p>
                Seu corpo foi levado de volta a Wittenberg, onde foi sepultado
                na Igreja do Castelo, o mesmo local onde havia pregado suas 95
                teses quase três décadas antes. Sua morte foi lamentada por
                seguidores em toda a Europa, e seu legado continuou a crescer,
                influenciando não apenas o cristianismo, mas também a cultura,
                política e sociedade ocidentais nos séculos seguintes.
              </p>

              <div className="valores-container">
                <div className="valor-badge">
                  <i className="fas fa-check-circle"></i>
                  <span>Fidelidade às Escrituras</span>
                </div>
                <div className="valor-badge">
                  <i className="fas fa-check-circle"></i>
                  <span>Coragem intelectual</span>
                </div>
                <div className="valor-badge">
                  <i className="fas fa-check-circle"></i>
                  <span>Valorização da educação</span>
                </div>
                <div className="valor-badge">
                  <i className="fas fa-check-circle"></i>
                  <span>Defesa da língua vernácula</span>
                </div>
                <div className="valor-badge">
                  <i className="fas fa-check-circle"></i>
                  <span>Liberdade de consciência</span>
                </div>
                <div className="valor-badge">
                  <i className="fas fa-check-circle"></i>
                  <span>Sacerdócio universal dos crentes</span>
                </div>
              </div>

              <a
                href="https://pt.wikipedia.org/wiki/Reforma_Protestante"
                className="btn"
              >
                Saiba mais sobre a Reforma
              </a>
            </div>
            <div className="content-image">
              <img
                src="./assets/imagens/Castelo de Wartburg .jpg"
                alt="Castelo de Wartburg onde Lutero traduziu a Bíblia"
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

export default LuteroPage;
