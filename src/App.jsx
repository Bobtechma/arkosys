import React from 'react';
import TechBackground from './components/TechBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Simulator from './components/Simulator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <TechBackground />
      <Header />
      <main>
        <Hero />
        <Features />
        <Simulator />
      </main>
      <Footer />
    </div>
  );
}

export default App;
