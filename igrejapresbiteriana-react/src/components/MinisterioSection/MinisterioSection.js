import React, { useState } from 'react';
import './MinisterioSection.css';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MinisterioSection = () => {
  const [expanded, setExpanded] = useState('panel0');  // Começamos com o primeiro item aberto (índice 0)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const areasAtuacao = [

    {
      icon: 'fas fa-globe-americas',
      title: 'Nossa Visão Missionária',
      defaultOpen: true,
      description: 'A Quarta IPM é uma pequena igreja, mas sempre pretendeu, desde seu início, ser uma igreja missionária. Este valor está expresso em nossa Declaração de Propósitos.',
      details: [
        'Com a graça de Deus, temos feito missões durante quase vinte anos através de parcerias, apoiando aqueles que se dispõe a ir aonde nós não conseguimos.',
        'Nossa história de parcerias missionárias é longa: já apoiamos a família de Mazinho e Ana (Atibaia-SP), com seus 45 filhos adotivos; construímos salas de EBD em uma Igreja Batista (Itatiaia-RJ); ajudamos o projeto ATINI, que resgata crianças indígenas que correm risco de vida (Brasília-DF).',
        'Apoiamos o casam missionário Jeferson e Fabiana do Ministério Palavra da Vida no Vale do Jequitinhonha (MG); por mais de 15 anos apoiamos a implantação do Ministério Palavra da Vida em Moçambique, através dos missionários Eneas e Bibiana; participamos da parceria, junto ao Presbitério de Macaé, na implantação da IPB Barramares.',
        'Recentemente firmamos parceria com o Projeto Revitaliza França, com Rev. Renato Prates e Juliana, para a revitalização da Igreja Reformada em Marseille, na França.',
        'Nossas parcerias mais recentes são o apoio ao seminarista Cleison Daut, que tem atuado como importante auxílio na Quarta IPM, bem como a jurisdição assumida sobre a Congregação de Conceição e Macabu, num trabalho conjunto para a revitalização e o fortalecimento daquela igreja.'
      ]
    },

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

  ];

  return (
    <section className="ministerio" id="ministerio">
      <div className="container">
        <h2 className="section-title">Parcerias Missionárias</h2>
        <p className="section-subtitle"></p>

        <div className="ministerio-container">


          {/* Áreas de Atuação */}
          {areasAtuacao.map((area, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}` || (area.defaultOpen && expanded === false)}
              onChange={handleChange(`panel${index}`)}
              className="mui-accordion"
              defaultExpanded={area.defaultOpen}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
                className="mui-accordion-summary"
              >
                <div className="area-icon">
                  <i className={area.icon} style={{color: 'white'}} aria-hidden="true"></i>
                </div>
                <Typography component="h4" className="accordion-title">
                  {area.title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <div className="area-content">
                  <Typography component="p" className="area-description">
                    {area.description}
                  </Typography>
                  {area.details && (
                    <ul className="area-details">
                      {area.details.map((detail, idx) => (
                        <li key={idx}>
                          <Typography component="span">{detail}</Typography>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
          {/* Accordion Parcerias Missionárias */}
          <Accordion
            expanded={expanded === 'panel-parcerias'}
            onChange={handleChange('panel-parcerias')}
            className="mui-accordion"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel-parcerias-content"
              id="panel-parcerias-header"
              className="mui-accordion-summary"
            >
              <div className="area-icon">
                <i className="fas fa-hands-helping" style={{color: 'white'}} aria-hidden="true"></i>
              </div>
              <Typography component="h4" className="accordion-title">
                Parcerias Missionárias
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="area-content">
                <Typography component="p" className="area-description">
                  A Quarta IPM é uma pequena igreja, mas sempre pretendeu, desde seu início, ser uma igreja missionária. Este valor está expresso em nossa Declaração de Propósitos:
                </Typography>
                <blockquote style={{margin: '1em 0', fontStyle: 'italic', color: '#228B22'}}>
                  "Nos comprometemos a investir nossos dons, talentos e recursos financeiros na promoção e proclamação do evangelho, na igreja e fora dela, através de nosso testemunho, palavras e ações; em Macaé ou em qualquer outro lugar em que Deus nos der oportunidade. (Evangelização e Missões)".
                </blockquote>
                <Typography component="p" className="area-description">
                  Com a graça de Deus, temos feito isso durante quase vinte anos. Fazemos missões através de parcerias, apoiando aqueles que se dispõe a ir aonde nós não conseguimos.<br/><br/>
                  Nossa história de parcerias missionárias é longa e extremamente profícua: já apoiamos a família de Mazinho e Ana (Atibaia-SP), com seus 45 filhos adotivos; construímos salas de EBD em uma Igreja Batista (Itatiaia-RJ); ajudamos o projeto ATINI, que resgata crianças indígenas que correm risco de vida (Brasília-DF); apoiamos o casam missionário Jeferson e Fabiana do Ministério Palavra da Vida no Vale do Jequitinhonha (MG); por mais de 15 anos apoiamos a implantação do Ministério Palavra da Vida em Moçambique, através dos missionários Eneas e Bibiana; participamos da parceria, junto ao Presbitério de Macaé, na implantação da IPB Barramares.<br/><br/>
                  Recentemente firmamos parceria com o Projeto Revitaliza França, com Rev. Renato Prates e Juliana, para a revitalização da Igreja Reformada em Marseille, na França.<br/><br/>
                  Nossas parcerias mais recentes são o apoio ao seminarista Cleison Daut, que tem atuado como importante auxílio na Quarta IPM, bem como a jurisdição assumida sobre a Congregação de Conceição e Macabu, num trabalho conjunto para a revitalização e o fortalecimento daquela igreja.
                </Typography>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default MinisterioSection;
