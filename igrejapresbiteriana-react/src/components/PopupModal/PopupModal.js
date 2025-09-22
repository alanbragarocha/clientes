import React, { useEffect, useState } from "react";
import "./PopupModal.css";

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Abre o modal automaticamente após 2 segundos que o componente é montado
    // para dar tempo de carregar a página primeiro
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 2000);

    // Verifica se o popup já foi mostrado nesta sessão
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    if (hasSeenPopup) {
      // Se já viu o popup nesta sessão, não mostrar novamente
      clearTimeout(timer);
    }

    // Adiciona um listener para a tecla ESC fechar o popup
    const handleEscKey = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        sessionStorage.setItem("hasSeenPopup", "true");
      }
    };

    document.addEventListener("keydown", handleEscKey);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    // Guarda na sessão que o usuário já viu o popup
    sessionStorage.setItem("hasSeenPopup", "true");
  };

  const handleSaibaMaisClick = () => {
    // Abre o link em uma nova aba
    window.open("https://www.instagram.com/p/DOeUKpxgVqn/?igsh=MWU0YW1wbHAxaXlhbA%3D%3D&img_index=1", "_blank");
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className={`popup-overlay ${isOpen ? "active" : ""}`} onClick={closeModal}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={closeModal}>×</button>
        <div className="popup-image-container">
          <img
            src="/assets/imagens/noticia.png"
            alt="Evento Especial"
            className="popup-image"
          />
          <button className="popup-button" onClick={handleSaibaMaisClick}>
            Saiba Mais
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
