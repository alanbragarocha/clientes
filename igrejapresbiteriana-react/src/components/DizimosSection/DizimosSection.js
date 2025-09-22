
import React from 'react';
import { dadosIgreja } from '../../data/churchData';
import './DizimosSection.css';

const DizimosSection = () => {
  const copyPixKey = async (chave) => {
    try {
      await navigator.clipboard.writeText(chave);
      alert('Chave PIX copiada para a área de transferência!');
    } catch (err) {
      console.error('Erro ao copiar chave PIX:', err);
      alert('Erro ao copiar. Tente novamente.');
    }
  };

  return (
    <section className="dizimos-ofertas" id="dizimos-ofertas">
      <div className="container">
        <h2 className="section-title">Dízimos e Ofertas</h2>
        <p className="section-description">
          Contribua para nossa obra através dos canais abaixo
        </p>

        <div className="dizimos-container">
          {/* Igreja Principal de Macaé */}
          <div className="congregacao-section">
            <h2 className="congregacao-title">Igreja Principal - Macaé</h2>

            <div className="dizimos-grid">
              <div className="dizimo-metodo">
                <h3>Transferência Bancária</h3>
                <div className="dados-bancarios">
                  <p>
                    <strong>Banco:</strong>
                    <span>{dadosIgreja.dadosBancarios.banco}</span>
                  </p>
                  <p>
                    <strong>Conta:</strong>
                    <span>{dadosIgreja.dadosBancarios.conta}</span>
                  </p>
                  <p>
                    <strong>Titular:</strong>
                    <span>{dadosIgreja.dadosBancarios.titular}</span>
                  </p>
                  <p>
                    <strong>CNPJ:</strong>
                    <span>{dadosIgreja.dadosBancarios.cnpj}</span>
                  </p>
                </div>
              </div>

              <div className="dizimo-metodo pix-container">
                <h3>PIX</h3>
                <div className="qrcode-container">
                  <div className="qrcode">
                    <img
                      src={dadosIgreja.pix.qrCodeImage}
                      alt="QR Code PIX"
                      className="qr-image"
                    />
                  </div>
                </div>
                <div className="pix-info">
                  <p>
                    <strong>Chave PIX:</strong>
                    <span>{dadosIgreja.pix.chave}</span>
                  </p>
                  <p>
                    <strong>Tipo:</strong>
                    <span>{dadosIgreja.pix.tipo}</span>
                  </p>
                  <button
                    className="btn-primary copy-button"
                    onClick={() => copyPixKey(dadosIgreja.pix.chave)}
                  >
                    Copiar Chave PIX
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Congregação de Conceição de Macabu */}
          <div className="congregacao-section">
            <h2 className="congregacao-title">{dadosIgreja.congregacaoMacabu.nome}</h2>

            <div className="dizimos-grid">
              <div className="dizimo-metodo">
                <h3>Transferência Bancária</h3>
                <div className="dados-bancarios">
                  <p>
                    <strong>Banco:</strong>
                    <span>{dadosIgreja.congregacaoMacabu.dadosBancarios.banco}</span>
                  </p>
                  <p>
                    <strong>Agência:</strong>
                    <span>{dadosIgreja.congregacaoMacabu.dadosBancarios.agencia}</span>
                  </p>
                  <p>
                    <strong>Conta Corrente:</strong>
                    <span>{dadosIgreja.congregacaoMacabu.dadosBancarios.conta}</span>
                  </p>
                  <p>
                    <strong>Titular:</strong>
                    <span>{dadosIgreja.congregacaoMacabu.dadosBancarios.titular}</span>
                  </p>
                  <p>
                    <strong>CNPJ:</strong>
                    <span>{dadosIgreja.congregacaoMacabu.dadosBancarios.cnpj}</span>
                  </p>
                </div>
              </div>

              <div className="dizimo-metodo pix-container">
                <h3>PIX</h3>
                <div className="qrcode-container">
                  <div className="qrcode">
                    <img
                      src={dadosIgreja.congregacaoMacabu.pix.qrCodeImage}
                      alt="QR Code PIX Congregação"
                      className="qr-image"
                    />
                  </div>
                </div>
                <div className="pix-info">
                  <p>
                    <strong>Chave PIX:</strong>
                    <span>{dadosIgreja.congregacaoMacabu.pix.chave}</span>
                  </p>
                  <p>
                    <strong>Tipo:</strong>
                    <span>{dadosIgreja.congregacaoMacabu.pix.tipo}</span>
                  </p>
                  <button
                    className="btn-primary copy-button"
                    onClick={() => copyPixKey(dadosIgreja.congregacaoMacabu.pix.chave)}
                  >
                    Copiar Chave PIX
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DizimosSection;
