import React from 'react';
import { dadosIgreja } from '../../data/churchData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Seção 1: Sobre a Igreja */}
          <div className="footer-section">
            <h4>{dadosIgreja.nome}</h4>
            <p>{dadosIgreja.descricao}</p>
            <p><em>"{dadosIgreja.versiculo.texto}" - {dadosIgreja.versiculo.referencia}</em></p>
          </div>

          {/* Seção 2: Horários dos Cultos */}
          <div className="footer-section">
            <h4>Nossos Cultos</h4>
            <div className="footer-horarios">
              <p><strong>Escola Dominical:</strong> Domingo às 9h30</p>
              <p><strong>Culto Dominical:</strong> Domingo às 18h</p>
              <p><strong>Culto Dominical em Conceição de Macabu:</strong> Domingo às 9h30</p>
              <p><strong>Grupo de Comunhão nos Lares:</strong> Quarta às 19h30</p>
              <p><strong>Estudo Bíblico em Conceição de Macabu:</strong> Quinta às 19h30</p>
            </div>
          </div>

          {/* Seção 3: Contato e Redes Sociais */}
          <div className="footer-section">
            <div className="footer-contact">
              <h4>Contato</h4>
              <p><strong>Macaé:</strong> {dadosIgreja.contato.enderecoMacae}</p>
              <p><strong>Conceição de Macabu:</strong> {dadosIgreja.contato.enderecoMacabu}</p>
            </div>

            <div className="footer-social">
              <h4>Redes Sociais</h4>
              <div className="social-icons">
                <a
                  href={dadosIgreja.redesSociais.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href={dadosIgreja.redesSociais.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href={dadosIgreja.redesSociais.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <div className="container">
            <p>
              &copy; {dadosIgreja.anoAtual} {dadosIgreja.nome}. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
