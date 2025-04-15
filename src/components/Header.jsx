// Header.jsx
import React, { useState } from "react";
import logo from "../assets/images/vinilo-logo.png";
import taniaImage from "../assets/images/fundadora.jpg";
import { FaBars, FaUser, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="header-top">
        <img src={logo} alt="Logo de Akademia" className="header-logo" />
        <div className="header-title">
          <h1>Akademia La Kúpula</h1>
          <div className="header-icons">
            <FaUser className="icon" title="Login" />
            <FaWhatsapp className="icon" title="WhatsApp" />
            <FaFacebook className="icon" title="Facebook" />
            <FaInstagram className="icon" title="Instagram" />
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
          <FaBars />
        </button>
        {isMenuOpen && (
          <nav className="nav-menu">
            <a href="#inicio">Inicio</a>
            <a href="#cursos">Cursos</a>
            <a href="#contacto">Contacto</a>
          </nav>
        )}
        </div>
        <img src={taniaImage} alt="Tania Calvo" className="header-tania" />
      </div>
    </header>
  );
};

export default Header;
