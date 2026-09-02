import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main style={{ minHeight: '80vh', paddingTop: '80px', padding: '24px' }}>
        <h2>Conteúdo Principal (Em breve)</h2>
      </main>
      <Footer />
    </div>
  );
}

export default App;
