import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

import logo from "../assets/images/vinilo-logo.png";
import taniaImage from "../assets/images/fundadora.jpg";
import GoldenButton from "./GoldenButton";
import Login from "./Login"; 
import Register from "./Register";  
import "../styles/Modal.css";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const [showLogin, setShowLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);  // Estado para alternar entre Login y Register

  const handleSwitchToRegister = () => setIsRegister(true);
  const handleSwitchToLogin = () => setIsRegister(false);

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

            {/* Aquí cambiamos entre Login y Register */}
            {isRegister ? (
              <>
                <Register />
                <p>¿Ya tienes una cuenta? <button onClick={handleSwitchToLogin}>Inicia sesión</button></p>
              </>
            ) : (
              <>
                <Login />
                <p>¿No tienes cuenta? <button onClick={handleSwitchToRegister}>Regístrate</button></p>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
