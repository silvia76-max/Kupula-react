import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import logo from "../assets/images/vinilo-logo.png";
import taniaImage from "../assets/images/fundadora.jpg";
import GoldenButton from "./GoldenButton";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleAuthAction = () => {
    if (isAuthenticated) {
      // Redirige al perfil o cierra sesión
      // Opción 1: Redirigir a página de perfil
      // window.location.href = '/perfil';
      
      // Opción 2: Cerrar sesión
      logout({ returnTo: window.location.origin });
    } else {
      // Redirige al registro
      loginWithRedirect({
        authorizationParams: {
          screen_hint: 'signup'
        }
      });
    }
  };

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
          <GoldenButton onClick={handleAuthAction}>
            {isAuthenticated ? (
              <>
                {/* Opción 1: Mostrar nombre y "Mi Perfil" */}
                {/* `Hola, ${user?.given_name || user?.nickname || 'Usuario'}` */}
                
                {/* Opción 2: Simplemente "Mi Perfil" */}
                'Mi Perfil'
                
                {/* Opción 3: "Cerrar Sesión" */}
                {/* 'Cerrar Sesión' */}
              </>
            ) : (
              'Regístrate'
            )}
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
          {isAuthenticated && (
            <a href="#perfil">Mi Perfil</a>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;