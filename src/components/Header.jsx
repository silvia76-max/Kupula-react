import React from 'react';
import taniaImage from '../assets/img/tania7.jpg'; // Ajusta la ruta según tu estructura
import logo from '../assets/img/logo.jpeg';

const Header = () => {
  return (
    <header className="grid grid-cols-[auto_1fr_auto] items-center p-4 gap-4 bg-secundario shadow-md">
      {/* Logo principal */}
      <img 
        src={taniaImage} 
        alt="Imagen de encabezado" 
        className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-xl shadow-gold object-cover"
      />
      
      {/* Título central */}
      <div className="flex items-center justify-center gap-2 flex-col md:flex-row">
        <h2 className="text-2xl md:text-3xl font-bold text-primario text-center">
          <strong>Akademia</strong> la Kupula
        </h2>
        <img 
          src={logo} 
          alt="Logo" 
          className="w-10 h-10 md:w-12 md:h-12 rounded-full"
        />
      </div>

      {/* Iconos */}
      <div className="flex gap-4 text-xl md:text-2xl text-primario">
        <i className="fab fa-whatsapp hover:text-primarioClaro cursor-pointer transition-colors"></i>
        <i className="fas fa-user hover:text-primarioClaro cursor-pointer transition-colors"></i>
        <i className="fas fa-shopping-cart hover:text-primarioClaro cursor-pointer transition-colors"></i>
      </div>
    </header>
  );
};

export default Header;