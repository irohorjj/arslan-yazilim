import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Arslan Yazılım'a Hoş Geldiniz!
        </p>
        <p>
          <code>src/App.tsx</code> dosyasını düzenleyerek başlayın.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React'i Öğrenin
        </a>
      </header>
    </div>
  );
}

export default App;
