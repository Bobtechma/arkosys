import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>LogoSistema</h3>
          <p>Potencialize as vendas do seu sistema com a nossa plataforma moderna e interativa.</p>
          <div className="contact-info">
            <p>Email: contato@logosistema.com.br</p>
            <p>Telefone: (11) 99999-9999</p>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Links Úteis</h4>
          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#recursos">Recursos</a></li>
            <li><a href="#simulador">Simulador de Orçamento</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
        
        <div className="footer-legal">
          <h4>Legal</h4>
          <ul>
            <li><a href="#termos">Termos de Uso</a></li>
            <li><a href="#privacidade">Política de Privacidade</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LogoSistema. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
