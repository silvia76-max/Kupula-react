import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/images/vinilo-logo.png";
import taniaImage from "../assets/images/fundadora.jpg";
import GoldenButton from "./GoldenButton";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const { loginWithRedirect } = useAuth0();

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
          {/* Botón que redirige directamente al signup de Auth0 */}
          <GoldenButton onClick={() => loginWithRedirect({ authorizationParams: { screen_hint: 'signup' } })}>
            Regístrate
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
    </header>
  );
};

export default Header;
