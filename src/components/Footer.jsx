import React, { useState, useEffect } from 'react';
import './Footer.css';
import { getRandomPhone, formatPhoneNumber, createWhatsAppUrl } from '../utils/contact';

const Footer = () => {
  const [activePhone, setActivePhone] = useState('5598987481998');

  useEffect(() => {
    setActivePhone(getRandomPhone());
  }, []);

  const handleContactClick = (e) => {
    e.preventDefault();
    const url = createWhatsAppUrl('Olá! Gostaria de mais informações sobre os sistemas.');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer id="contato" className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>LogoSistema</h3>
          <p>Potencialize as vendas do seu sistema com a nossa plataforma moderna e interativa.</p>
          <div className="contact-info">
            <p>Email: contato@logosistema.com.br</p>
            <p>
              WhatsApp / Comercial:{' '}
              <a
                href="#"
                onClick={handleContactClick}
                className="footer-phone-link"
                title="Clique para conversar no WhatsApp"
              >
                {formatPhoneNumber(activePhone)}
              </a>
            </p>
            <div className="contact-numbers-badge">
              <span>Plantão Comercial Ativo: (98) 98748-1998 | (98) 98610-1224 | (98) 98127-9111</span>
            </div>
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
