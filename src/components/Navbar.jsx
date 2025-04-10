import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-secundario border-b-2 border-primario shadow-gold">
      {/* Contenedor principal */}
      <div className="container mx-auto px-4 py-3">
        {/* Versión móvil */}
        <div className="md:hidden flex justify-between items-center">
          <button 
            onClick={toggleMenu}
            className="text-primario text-2xl focus:outline-none"
            aria-label="Menú"
          >
            ☰
          </button>
        </div>

        {/* Menú para desktop/mobile */}
        <ul className={`${menuOpen ? 'block' : 'hidden'} md:flex flex-col md:flex-row gap-6 pt-4 md:pt-0`}>
          <NavItem to="/" text="Inicio" />
          <NavItem to="/akademia" text="Akademia" />
          <NavItem to="/cursos" text="Cursos" />
          <NavItem to="/campus-virtual" text="Campus virtual" />
          <NavItem to="/contacto" text="Contacto" />
        </ul>
      </div>
    </nav>
  );
};

// Componente auxiliar para items del menú
const NavItem = ({ to, text }) => (
  <li>
    <Link 
      to={to} 
      className="block py-2 px-3 text-primario hover:text-primarioClaro hover:bg-primarioTrans rounded transition-colors duration-300 text-lg font-medium"
    >
      {text}
    </Link>
  </li>
);

export default Navbar;