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
      </div>
    </section>
  );
};

export default Features;
