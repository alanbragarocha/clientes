import React from 'react';
import './SobrePage.css';

const SobrePage = () => {
  return (
    <div className="sobre-page">
      {/* História da Igreja */}
      <section className="sobre-historia" id="historia">
        <div className="container">
          <div className="hero-content">
            <h1>Nossa História</h1>
            <p>Conheça a jornada de fé da Quarta Igreja Presbiteriana de Macaé</p>
          </div>
          <div className="sobre-content">
            <div className="sobre-image">
              <img src="/assets/imagens/capa igreja.jpg" alt="Igreja Presbiteriana" />
            </div>
            <div className="sobre-text">
              <h2>Nossa Fundação</h2>
              <p>
                A Quarta Igreja Presbiteriana de Macaé teve início em julho de 2007,
                quando três famílias de Macaé foram ao Presbitério de Campos dos
                Goytacazes solicitar uma nova obra presbiteriana em nossa cidade.
              </p>
              <p>
                Foram essas famílias: José Antônio Rangel Mazzei e Noêmia de Paula
                Mazzei; Carlos Alberto Morett e Alice Carnaval Morett; e Ricardo de
                Souza Silva e Soraia Carvalho Silva.
              </p>
              <p>
                A solicitação foi aprovada e o Presbitério de Campos nomeou o
                Rev. Marcelo Carnaval Morett como pastor organizador desta nova obra.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="timeline-section">
            <h2 className="section-title text-center">Marcos de Nossa História</h2>

            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-date">Julho 2007</div>
                <div className="timeline-content">
                  <h4>Início da Obra</h4>
                  <p>
                    Três famílias se reuniram para solicitar ao Presbitério de Campos
                    dos Goytacazes uma nova obra presbiteriana em Macaé.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">Agosto 2007</div>
                <div className="timeline-content">
                  <h4>Primeiros Encontros</h4>
                  <p>
                    Início dos cultos domésticos nas residências das famílias,
                    com estudos bíblicos e momentos de oração.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">Setembro 2007</div>
                <div className="timeline-content">
                  <h4>Primeiro Culto Público</h4>
                  <p>
                    Realização do primeiro culto público, marcando oficialmente
                    o nascimento da comunidade.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">Dezembro 2007</div>
                <div className="timeline-content">
                  <h4>Crescimento da Congregação</h4>
                  <p>
                    A congregação cresceu para 15 membros, incluindo crianças
                    e jovens, fortalecendo os laços de comunhão.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">Março 2008</div>
                <div className="timeline-content">
                  <h4>Primeiro Templo</h4>
                  <p>
                    Inauguração do primeiro templo próprio, permitindo maior
                    estabilidade para as atividades da igreja.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-date">Junho 2008</div>
                <div className="timeline-content">
                  <h4>Organização Oficial</h4>
                  <p>
                    A igreja foi oficialmente organizada pelo Presbitério,
                    tornando-se uma igreja local independente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Os Cinco Solas */}
      <section className="servicos" id="cinco-solas">
        <div className="container">
          <h2 className="section-title text-center">Os Cinco Solas da Reforma</h2>
          <p className="section-description text-center">
            Os pilares fundamentais de nossa fé reformada
          </p>

          <div className="servicos-container">
            <article className="servico-item">
              <div className="servico-icon">
                <i className="fas fa-book"></i>
              </div>
              <h3>Sola Scriptura</h3>
              <p>
                Somente a Escritura. A Bíblia é a única autoridade infalível
                para a fé e prática cristã. Ela é suficiente, clara e suprema
                sobre tradições, experiências e autoridades humanas.
              </p>
            </article>

            <article className="servico-item">
              <div className="servico-icon">
                <i className="fas fa-cross"></i>
              </div>
              <h3>Solus Christus</h3>
              <p>
                Somente Cristo. Jesus Cristo é o único mediador entre Deus e
                os homens. A salvação vem exclusivamente através de Sua obra
                redentora, não através dos santos, da igreja ou de obras meritórias.
              </p>
            </article>

            <article className="servico-item">
              <div className="servico-icon">
                <i className="fas fa-hands-praying"></i>
              </div>
              <h3>Sola Gratia</h3>
              <p>
                Somente a Graça. A salvação é um dom gratuito de Deus, não
                merecido pelos pecadores. O homem não contribui para sua
                salvação através de boas obras ou mérito pessoal, mas é
                completamente dependente da graça divina.
              </p>
            </article>

            <article className="servico-item">
              <div className="servico-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Sola Fide</h3>
              <p>
                Somente a Fé. A justificação diante de Deus vem exclusivamente
                pela fé em Jesus Cristo. Não somos declarados justos por nossas
                obras, mas pela fé no sacrifício de Cristo que nos é creditado
                como justiça.
              </p>
            </article>

            <article className="servico-item">
              <div className="servico-icon">
                <i className="fas fa-crown"></i>
              </div>
              <h3>Soli Deo Gloria</h3>
              <p>
                Somente a Deus a Glória. O propósito último de todas as coisas
                é a glória de Deus. Toda a criação, redenção e a vida cristã
                visam glorificar a Deus e desfrutar de Sua presença eternamente.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Visão e Propósito */}
      <section className="especialidades" id="visao">
        <div className="container">
          <h2 className="section-title text-center">Nossa Visão e Propósito</h2>
          <p className="section-description text-center">
            O que nos caracteriza como comunidade de fé
          </p>

          <div className="especialidades-container">
            <div className="coluna-especialidade">
              <h3>Nossa Identidade</h3>
              <ul>
                <li>
                  <strong>Comunidade</strong> - Enfatizamos e destacamos a
                  importância de nossos relacionamentos
                </li>
                <li>
                  <strong>Cristã</strong> - Destacamos a natureza de nossa fé,
                  firmada em Cristo Jesus, nosso único Salvador e Senhor
                </li>
                <li>
                  <strong>Presbiteriana</strong> - Enfatizamos nossa doutrina
                  e herança teológica reformada
                </li>
                <li>Um ambiente acolhedor, alegre e terapêutico para todos</li>
                <li>
                  Mensagem do amor e do cuidado de Deus aplicada à vida
                  cotidiana
                </li>
                <li>
                  Valorização das famílias e formação de discípulos de Cristo
                </li>
              </ul>
            </div>
            <div className="coluna-especialidade">
              <h3>Nossa Missão</h3>
              <ul>
                <li>
                  Alcançar muitas vidas e famílias com o Evangelho de Cristo
                </li>
                <li>
                  Acolher pessoas feridas e marcadas pelas vicissitudes da vida
                </li>
                <li>
                  Oferecer o bálsamo do Evangelho e o calor dos relacionamentos
                  profundos
                </li>
                <li>Conduzir as pessoas ao Reino do Filho do amor de Deus</li>
                <li>
                  Comunicar a Palavra de Deus em linguagem simples e aplicada
                </li>
                <li>
                  Promover a adoração genuína e a comunhão entre os irmãos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Liderança */}
      <section className="diferenciais" id="lideranca">
        <div className="container">
          <h2 className="section-title text-center">Nossa Liderança</h2>
          <p className="section-description text-center">
            Conheça os servos que Deus levantou para conduzir nossa igreja
          </p>

          <div className="container-diferenciais">
            <article className="coluna-diferencial">
              <h3>Pastoreio</h3>
              <p>
                O Rev. Marcelo Carnaval Morett foi o Primeiro Pastor da Quarta
                Igreja Presbiteriana de Macaé, usado por Deus para iniciar este
                ministério. Hoje, nossa igreja é conduzida por líderes
                comprometidos com a Palavra de Deus e o serviço ao Senhor.
              </p>
            </article>
            <article className="coluna-diferencial">
              <h3>Presbíteros</h3>
              <p>
                Nossa igreja é governada por um Conselho formado por
                presbíteros, homens eleitos pela congregação para supervisionar
                a obra e cuidar do rebanho do Senhor, juntamente com o pastor.
              </p>
            </article>
            <article className="coluna-diferencial">
              <h3>Diáconos</h3>
              <p>
                O ministério de misericórdia é realizado pelos diáconos, que
                cuidam das necessidades materiais da congregação e da
                organização da igreja, permitindo que o Evangelho seja vivido
                de forma prática.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Gratidão */}
      <section className="sobre-historia" id="gratidao">
        <div className="container">
          <div className="sobre-content">
            <div className="sobre-text" style={{ flex: '1 1 100%', textAlign: 'center' }}>
              <h2 className="text-center">Nossa Gratidão</h2>
              <p>
                Nosso sentimento é de profunda gratidão a Deus e nossa oração é
                para que este seja o início de uma nova Igreja Presbiteriana,
                que alcance muitas vidas e muitas famílias, que acolha pessoas
                feridas e marcadas pelas vicissitudes da vida, oferecendo a elas
                o bálsamo do Evangelho, o calor dos relacionamentos profundos,
                conduzindo-as ao Reino do Filho do amor de Deus.
              </p>

              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>
                A Ele toda a honra e toda a glória. Aleluia!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SobrePage;
