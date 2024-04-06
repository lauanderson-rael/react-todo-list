import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Conteudo a ser renderizado no index.html com id="root"
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
