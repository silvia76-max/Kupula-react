import React from 'react';
import './Header.css'; // Archivo de estilos específico

const Header = () => {
  return (
    <header className="header">
      <img src="/img/tania7.jpg" alt="Imagen de encabezado" className="imagen" />
      <h2 className="titulo">
        <strong>Akademia</strong> la Kupula
        <img src="/img/logo.jpeg" alt="Logo" className="titulo-logo" />
      </h2>

      <div className="iconos">
        <i className="fab fa-whatsapp"></i>
        <i className="fas fa-user"></i>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </header>
  );
};

export default Header;