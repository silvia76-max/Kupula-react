import React from 'react';
import logo from '../assets/img/logo.jpeg'; // Asegúrate de que la ruta sea correcta

const Footer = () => {
  return (
    <footer className="bg-secundario text-primario py-8 border-t-2 border-primario">
      <div className="container mx-auto px-4">
        {/* Contenido principal del footer */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <a href="#">
              <img 
                src={logo} 
                alt="Logo" 
                className="w-32 h-auto rounded-full shadow-gold" 
              />
            </a>
          </div>
          
          {/* Contacto */}
          <div className="text-center md:text-left">
            <h5 className="text-xl font-bold mb-4 text-primarioClaro">Contacto</h5>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <i className="fas fa-phone"></i>
                <span>Tfno: +34 620 57 66 46</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <i className="fas fa-map-marker-alt"></i>
                <span>C/ Iturriaga n 58</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <i className="fas fa-city"></i>
                <span>Santutxu, Bilbao</span>
              </li>
            </ul>
          </div>
          
          {/* Redes Sociales (opcional) */}
          <div className="text-center md:text-left">
            <h5 className="text-xl font-bold mb-4 text-primarioClaro">Síguenos</h5>
            <div className="flex justify-center md:justify-start gap-4 text-2xl">
              <a href="#" className="hover:text-primarioClaro transition-colors">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="hover:text-primarioClaro transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-primarioClaro transition-colors">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-primarioTrans text-center">
          <p>&copy; {new Date().getFullYear()} Akademia la Kupula. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;