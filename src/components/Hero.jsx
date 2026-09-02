import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="inicio" className="hero-section">
      <div className="hero-bg-glow"></div>
      <div className="hero-content">
        <span className="hero-badge">Tecnologia & Conversão de Elite</span>
        <h1 className="hero-title">O Sistema Definitivo para Escalar suas Vendas</h1>
        <p className="hero-subtitle">
          Uma plataforma moderna, interativa e feita para conversão. Monte seu pacote ideal e descubra o valor em tempo real.
        </p>
        <div className="hero-buttons">
          <a href="#simulador" className="btn-primary">Simular Orçamento</a>
          <a href="#recursos" className="btn-outline">Ver Funcionalidades</a>
        </div>

        {/* Product Showcase Mockup */}
        <div className="hero-showcase glassmorphism">
          <div className="showcase-topbar">
            <span className="topbar-dot"></span>
            <span className="topbar-dot"></span>
            <span className="topbar-dot"></span>
            <span className="showcase-title-tag">painel.seusistema.com.br — Visão Geral</span>
          </div>
          <div className="showcase-media">
            <img
              src="/images/dashboard-preview.jpg"
              alt="Prévia do Painel Administrativo em Dark Mode"
              className="showcase-img"
            />
          </div>
          <div className="floating-stat-badge glassmorphism">
            <span className="stat-pulse"></span>
            <span>Painel em Tempo Real</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
