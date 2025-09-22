import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Toggle body class for overlay
    document.body.classList.toggle('menu-open', !isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.classList.remove('menu-open');
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navigationItems = [
    { path: '/', label: 'Início' },
    { path: '/pastor', label: 'Pastor' },
    { path: '/#reforma', label: 'Reforma' },
    { path: '/#agenda', label: 'Agenda' },
    { path: '/#localizacao', label: 'Localização' },
    { path: '/#contato', label: 'Contato' },
    { path: '/#ministerio', label: 'Ministérios' },
    { path: '/escalas', label: 'Escalas' }
  ];

  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          <Link to="/" onClick={closeMobileMenu}>
            <img
              src="/assets/imagens/logo.png"
              alt="Quarta Igreja Presbiteriana de Macaé"
              className="logo-image"
            />
          </Link>
        </div>

        <nav className="main-nav">
          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={toggleMobileMenu}
            title={isMobileMenuOpen ? "Fechar menu" : "Menu"}
          >
            <span></span>
            <span></span>
            <span></span>
            <span className="menu-text">{isMobileMenuOpen ? "Fechar" : "Menu"}</span>
          </button>

          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            {navigationItems.map((item, index) => (
              <li key={index}>
                {item.path.startsWith('/#') ? (
                  <a
                    href={item.path}
                    className={isActive('/') && item.path === '/#' ? 'active' : ''}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={isActive(item.path) ? 'active' : ''}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
