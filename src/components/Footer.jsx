import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Akademia La Kúpula. Todos los derechos reservados.</p>
      <div className="footer-links">
        <a href="#">Instagram</a>
        <a href="#">WhatsApp</a>
        <a href="#">Email</a>
      </div>
    </footer>
  );
};

export default Footer;
