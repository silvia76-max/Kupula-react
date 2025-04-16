import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import logo from "../assets/images/img-logo.svg";  
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Akademia La Kúpula" className="footer-logo-img" />
      </div>
      <p>&copy; {new Date().getFullYear()} Akademia La Kúpula. Todos los derechos reservados.</p>
      <div className="footer-links">
        <a href="#" aria-label="Facebook">
          <FaFacebook />
        </a>
        <a href="#" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="#" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="mailto:info@akademialakúpula.com" aria-label="Email">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
