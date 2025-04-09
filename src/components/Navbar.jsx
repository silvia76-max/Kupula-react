import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <button className="hamburger" onClick={toggleMenu}>☰</button>
      
      <ul className={`menu ${menuOpen ? 'active' : ''}`}>
        <li><a href="/">Inicio</a></li>
        <li><a href="/akademia">Akademia</a></li>
        <li><a href="/cursos">Cursos</a></li>
        <li><a href="/campus-virtual">Campus virtual</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </div>
  );
};

export default Navbar;