import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-glow"></div>
      <div className="hero-content">
        <h1 className="hero-title">O Sistema Definitivo para Escalar suas Vendas</h1>
        <p className="hero-subtitle">
          Uma plataforma moderna, interativa e feita para conversão. Monte seu pacote ideal e descubra o valor em tempo real.
        </p>
        <div className="hero-buttons">
          <a href="#simulador" className="btn-primary">Simular Orçamento</a>
          <a href="#recursos" className="btn-outline">Ver Funcionalidades</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
