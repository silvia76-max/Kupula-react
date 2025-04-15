import React, { useState } from 'react';
import logo from '../assets/images/logo.png'; // Asegúrate de tener la imagen del logo
import taniaImage from '../assets/images/fundadora.jpg'; // Imagen de Tania
import { FaBars, FaUser } from 'react-icons/fa'; // Importamos los íconos de hamburguesa y login

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para el menú hamburguesa

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo de Akademia La Kúpula" className="header-logo" />
      </div>

      <div className="header-center">
        <h1>Akademia La Kúpula</h1>
      </div>

      <div className="header-right">
        <img src={taniaImage} alt="Tania Calvo" className="header-image" />
      </div>

      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <a href="/login" className="nav-item">
          <FaUser /> Login
        </a>
        <a href="https://wa.me/tu-numero" className="nav-item">
          WhatsApp
        </a>
        <a href="https://www.facebook.com/tu-pagina" className="nav-item">
          Facebook
        </a>
        <a href="https://www.instagram.com/tu-pagina" className="nav-item">
          Instagram
        </a>
      </nav>

      <div className="menu-icon" onClick={toggleMenu}>
        <FaBars />
      </div>
    </header>
  );
};

export default Header;
