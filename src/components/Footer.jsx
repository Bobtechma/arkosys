import React from 'react';
import './Footer.css';
import { CONTACT_NUMBERS, formatPhoneNumber, createWhatsAppUrl } from '../utils/contact';

const Footer = () => {
  const handleWhatsAppGeneralClick = (e) => {
    e.preventDefault();
    const url = createWhatsAppUrl('Olá! Gostaria de mais informações sobre o desenvolvimento de sistemas.');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleSpecificNumberClick = (phone, e) => {
    e.preventDefault();
    const message = encodeURIComponent('Olá! Gostaria de conversar com a equipe de atendimento sobre os sistemas.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer id="contato" className="footer">
      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img
              src="/images/logo.png"
              alt="Arkosys Tech Solutions - Desenvolvimento de Sistemas & Soluções Digitais"
              className="footer-logo-img"
              width="230"
              height="50"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="footer-tagline">
            Desenvolvimento e venda de sistemas modernos de alta conversão. Estruturas robustas, seguras e prontas para escalar o seu negócio.
          </p>
          <div className="footer-status-pill">
            <span className="status-indicator"></span>
            <span>Plantão de Atendimento Online</span>
          </div>
        </div>

        {/* Quick Navigation Column */}
        <div className="footer-col">
          <h4 className="footer-heading">Navegação</h4>
          <ul className="footer-nav-list">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#recursos">Funcionalidades & App</a></li>
            <li><a href="#simulador">Simulador de Orçamento</a></li>
          </ul>
        </div>

        {/* Direct Contact Column */}
        <div className="footer-col footer-contact-col">
          <h4 className="footer-heading">Canais Oficiais</h4>
          
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <div className="contact-meta">
              <span className="contact-label">E-mail Comercial</span>
              <a href="mailto:bobtechma@gmail.com" className="contact-value-link">
                bobtechma@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span className="contact-icon">💬</span>
            <div className="contact-meta">
              <span className="contact-label">Atendimento WhatsApp</span>
              <div className="phone-numbers-list">
                {CONTACT_NUMBERS.map((phone) => (
                  <button
                    key={phone}
                    type="button"
                    onClick={(e) => handleSpecificNumberClick(phone, e)}
                    className="phone-chip"
                    title={`Conversar com ${formatPhoneNumber(phone)}`}
                  >
                    <span>{formatPhoneNumber(phone)}</span>
                    <span className="chip-arrow">↗</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} Arkosys — Desenvolvimento de Sistemas. Todos os direitos reservados.</p>
          <div className="footer-guarantee-note">
            <span>🔒 Segurança com Criptografia SSL e Dados em Nuvem</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
