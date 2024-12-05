import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <h1>Arslan Yazılım</h1>
          <p>Profesyonel Yazılım Çözümleri</p>
        </div>
      </header>

      <main>
        <section className="services">
          <div className="container">
            <h2>Hizmetlerimiz</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Web Geliştirme</h3>
                <p>Modern ve responsive web uygulamaları geliştiriyoruz.</p>
              </div>
              <div className="service-card">
                <h3>Mobil Uygulama</h3>
                <p>iOS ve Android için native mobil uygulamalar.</p>
              </div>
              <div className="service-card">
                <h3>Yazılım Danışmanlığı</h3>
                <p>Profesyonel yazılım danışmanlığı hizmetleri.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <h2>İletişim</h2>
            <div className="contact-info">
              <p>Email: info@arslanyazilim.com</p>
              <p>Telefon: +90 555 123 4567</p>
              <p>Adres: İstanbul, Türkiye</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Arslan Yazılım. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
