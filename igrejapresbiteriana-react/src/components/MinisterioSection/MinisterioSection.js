import React from 'react';
import './MinisterioSection.css';

const MinisterioSection = () => {
  const areasAtuacao = [
    {
      icon: 'fas fa-pray',
      title: 'Aconselhamento',
      description: 'Aqui na Quarta buscamos viver e praticar o que o Apóstolo Paulo nos ensina em Colossenses 3:16: "instruí-vos e aconselhai-vos mutuamente…", cultivando relacionamentos significativos e um clima que nos permita pedir ajuda e compartilhar nossas fraquezas e necessidades.',
      details: [
        'Tentamos ajudar uns aos outros a superar os obstáculos, atravessar as dificuldades da vida e crescer na caminhada cristã.',
        'Entretanto, compreendemos e valorizamos necessidade do aconselhamento pastoral, por isso qualquer pessoa - mesmo que não seja membro da igreja - pode agendar um horário para aconselhamento com o pastor ou com os presbíteros, pelo nosso WhatsApp (22)99782-1855.'
      ]
    },
    {
      icon: 'fas fa-book-open',
      title: 'Ensino Bíblico',
      description: 'O ensino bíblico em nossa igreja acontece em três ocasiões:',
      details: [
        '1. Na Escola Bíblica Dominical, que acontece todos os domingos, às 9h30min. Esta é a ocasião em que estudamos temas diversos que dizem respeito à nossa fé. Apesar de utilizarmos outros materiais, a Bíblia sempre é o centro e a fonte de nossos estudos.',
        '2. Nos Grupos de Comunhão, que acontecem durante a semana nos lares. Nesta ocasião procuramos comentar e aprofundar a aula ministrada no domingo. Então, nosso estudo sempre está conectado com a EBD.',
        '3. Nos cultos vespertinos. Como nossa igreja é uma Igreja Reformada, nossos cultos são cristocêntricos e bibliocêntricos, ou seja, a Bíblia sempre é a fonte de nossas mensagens.'
      ]
    },
    {
      icon: 'fas fa-hands-helping',
      title: 'Ação Social',
      description: 'Projetos e iniciativas voltadas ao serviço comunitário e apoio aos mais vulneráveis, colocando em prática os valores de amor e solidariedade cristã.'
    },
    {
      icon: 'fas fa-users',
      title: 'Formação de Líderes',
      description: 'Mentoria e capacitação para o desenvolvimento de novos líderes, preparando-os para multiplicar o impacto positivo na comunidade de fé e na sociedade.'
    }
  ];

  return (
    <section className="ministerio" id="ministerio">
      <div className="container">
        <h2 className="section-title">Nossos Ministérios</h2>
        <p className="section-subtitle">
          Conheça nossa visão ministerial e as principais áreas de atuação que orientam
          nosso trabalho e serviço à comunidade de fé.
        </p>

        <div className="ministerio-container">
          {/* Visão e Missão */}
          <div className="ministerio-visao">
            <div className="ministerio-header">
              <div className="ministerio-icon">
                <i className="fas fa-church" aria-hidden="true"></i>
              </div>
              <h3>Visão e Missão</h3>
            </div>
            <p>
              A Quarta Igreja Presbiteriana de Macaé é uma igreja com propósitos. Entendemos
              que nem nós, nem nossa igreja, estamos aqui por acaso. Deus nos criou e
              estabeleceu com propósitos bem definidos, e desejamos cumprir a expectativa do Senhor no
              tempo que temos aqui, até que Ele volte. Foi para isso que ele nos chamou.
            </p>
            <p>
              Para isso precisamos saber e entender claramente que propósitos são esses, para
              que possamos obedecê-los e sermos encontrados fiéis. Por isso, baseados na
              Bíblia, elaboramos uma Declaração de Propósitos, para servir de direcionador de
              nossas ações e nos ajudar em nossa caminhada.
            </p>
            <p>
              Declaração de Propósitos da Quarta IPM:
            </p>
            <ol>
              <li>Desejamos, de todo coração, honrar e exaltar a Deus em nossos encontros, formais e informais. (Adoração)</li>
              <li>Queremos conhecer os novos irmãos na fé, acolhê-los, batizá-los e integrá-los, bem como suas famílias, à nossa família espiritual. (Comunhão)</li>
              <li>Pela oração, o estudo e a prática das Escrituras; e pela operação do Espírito Santo em nós, desejamos nos tornar mais e mais parecidos com o Senhor Jesus Cristo, em nosso caráter, para a glória de Deus. (Discipulado)</li>
              <li>Como Igreja, desejamos servir uns aos outros, para alívio das cargas e das necessidades espirituais, emocionais, físicas e materiais. (Serviço ou Ministério)</li>
              <li>Nos comprometemos a investir nossos dons, talentos e recursos financeiros na promoção e proclamação do evangelho, na igreja e fora dela, através de nosso testemunho, palavras e ações; em Macaé ou em qualquer outro lugar em que Deus nos der oportunidade. (Evangelização e Missões)</li>
            </ol>
          </div>

          {/* Áreas de Atuação */}
          <div className="ministerio-atuacao">
            <div className="ministerio-areas">
              {areasAtuacao.map((area, index) => (
                <article key={index} className="area-item">
                  <div className="area-icon">
                    <i className={area.icon} aria-hidden="true"></i>
                  </div>
                  <h4>{area.title}</h4>
                  <div className="area-content">
                    <p>{area.description}</p>
                    {area.details && (
                      <ul className="area-details">
                        {area.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinisterioSection;
