import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

import logo from "../assets/images/vinilo-logo.png";
import taniaImage from "../assets/images/fundadora.jpg";
import "../styles/Header.css";
import GoldenButton from "./GoldenButton";
import LoginRegister from "./LoginRegister";
import "../styles/Modal.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [showLogin, setShowLogin] = useState(false);
  
  return (
    <header className="header">
     <div className="header-top">
      <div className="header-left">
        <img src={logo} alt="Logo de Akademia" className="header-logo" />
         <button className="menu-toggle" onClick={toggleMenu}>
          <RxHamburgerMenu />
        </button>
      </div>

      <div className="header-title">
        <h1>Akademia La Kúpula</h1>
        <GoldenButton onClick={() => setShowLogin(true)}>
            Iniciar sesión
          </GoldenButton>

      </div>

      <div className="header-right">
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

       {showLogin && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setShowLogin(false)}>✖</button>
            <LoginRegister />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;


