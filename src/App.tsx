import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Arslan Yazılım</h1>
        <p className="tagline">
          Profesyonel Yazılım Çözümleri
        </p>
      </header>
      
      <main className="App-main">
        <section className="services">
          <h2>Hizmetlerimiz</h2>
          <div className="service-grid">
            <div className="service-item">
              <h3>Web Geliştirme</h3>
              <p>Modern ve responsive web uygulamaları</p>
            </div>
            <div className="service-item">
              <h3>Mobil Uygulama</h3>
              <p>iOS ve Android için native uygulamalar</p>
            </div>
            <div className="service-item">
              <h3>Yazılım Danışmanlığı</h3>
              <p>Profesyonel yazılım danışmanlık hizmetleri</p>
            </div>
          </div>
        </section>

        <section className="contact">
          <h2>İletişim</h2>
          <p>Projeleriniz için bizimle iletişime geçin</p>
          <div className="contact-info">
            <p>Email: info@arslanyazilim.com</p>
            <p>Tel: +90 (555) 123 4567</p>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; 2024 Arslan Yazılım. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;
