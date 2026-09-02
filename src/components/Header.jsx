import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header glassmorphism">
      <div className="header-container">
        <div className="logo">LogoSistema</div>
        
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#inicio">Início</a>
          <a href="#recursos">Recursos</a>
          <a href="#simulador">Simulador</a>
          <a href="#contato">Contato</a>
        </nav>
        
        <div className="cta-container desktop-cta">
          <button className="btn-primary">Simular Orçamento</button>
        </div>

        {/* Mobile Hamburger Button */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Abrir Menu">
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <div className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          <a href="#inicio" onClick={toggleMenu}>Início</a>
          <a href="#recursos" onClick={toggleMenu}>Recursos</a>
          <a href="#simulador" onClick={toggleMenu}>Simulador</a>
          <a href="#contato" onClick={toggleMenu}>Contato</a>
          <button className="btn-primary">Simular Orçamento</button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
