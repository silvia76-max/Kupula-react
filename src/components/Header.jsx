import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

import logo from "../assets/images/vinilo-logo.png";
import taniaImage from "../assets/images/fundadora.jpg";
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
          <Link to="/login">
            <button className="golden-button">
              <span className="golden-text">Iniciar sesión</span>
            </button>
          </Link>
        </div>

        <div className="header-right">
          <button className="menu-toggle" onClick={toggleMenu}>
            <FaBars />
          </button>
          <img src={taniaImage} alt="Tania Calvo" className="header-tania" />
        </div>
      </div>

      {isMenuOpen && (
        <nav className="nav-menu">
          <a href="#inicio">Inicio</a>
          <a href="#cursos">Cursos</a>
          <a href="#contacto">Contacto</a>
        </nav>
      )}
    </header>
  );
};

export default Header;


