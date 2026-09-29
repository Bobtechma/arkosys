import React from 'react';
import './Features.css';

const featureData = [
  {
    title: 'Design Premium',
    desc: 'Surpreenda seus clientes com uma interface moderna, clean e 100% focada em conversão.',
    icon: '✨'
  },
  {
    title: 'Simulador em Tempo Real',
    desc: 'Dê autonomia para o cliente montar seu próprio orçamento instantaneamente, eliminando atritos.',
    icon: '⚡'
  },
  {
    title: 'Totalmente Responsivo',
    desc: 'Experiência perfeita e fluida em qualquer dispositivo, seja desktop, tablet ou smartphone.',
    icon: '📱'
  },
  {
    title: 'Alta Conversão',
    desc: 'Estratégias de UX e UI aplicadas para transformar mais visitantes em clientes pagantes.',
    icon: '🚀'
  }
];

const FeatureCard = ({ title, desc, icon }) => (
  <div className="feature-card glassmorphism">
    <div className="card-icon">{icon}</div>
    <h3 className="card-title">{title}</h3>
    <p className="card-desc">{desc}</p>
  </div>
);

const Features = () => {
  return (
    <section id="recursos" className="features-section">
      <div className="features-container">
        <h2 className="section-title">Por que escolher nosso sistema?</h2>
        <div className="features-grid">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Spotlight Showcase: Mobile & Realtime Integration */}
        <div className="features-spotlight glassmorphism">
          <div className="spotlight-content">
            <span className="spotlight-tag">Módulo Mobile Disponível</span>
            <h3 className="spotlight-title">Gestão Completa na Palma da sua Mão</h3>
            <p className="spotlight-desc">
              Além do painel web corporativo, tenha seu próprio aplicativo nativo para Android e iOS.
              Acompanhe pedidos, receba alertas de novos leads e controle o fluxo financeiro em tempo real onde estiver.
            </p>
            <ul className="spotlight-list">
              <li>
                <span className="spotlight-bullet">✓</span> Notificações instantâneas de vendas e agendamentos
              </li>
              <li>
                <span className="spotlight-bullet">✓</span> Sincronização automática em nuvem sem delay
              </li>
              <li>
                <span className="spotlight-bullet">✓</span> Acesso seguro com criptografia ponta a ponta
              </li>
            </ul>
            <div className="spotlight-action">
              <a href="#simulador" className="btn-primary">
                Incluir App no Orçamento
              </a>
            </div>
          </div>
          <div className="spotlight-media">
            <img
              src="/images/mobile-preview.jpg"
              alt="Aplicativo Mobile do sistema Arkosys rodando em smartphone mostrando gestão completa na palma da mão"
              className="spotlight-img"
              width="380"
              height="600"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
