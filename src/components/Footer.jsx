import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <a href="#"><img src="/img/logo.jpeg" alt="Logo" width="130px" /></a>
        </div>
        <div className="footer-contacto">
          <h5>Contacto</h5>
          <ul>
            <li>Tfno: +34 620 57 66 46</li>
            <li>C/ Iturriaga n 58</li>
            <li>Santutxu, Bilbao</li>
          </ul>
        </div>
        {/* Resto del footer... */}
      </div>
    </footer>
  );
};

export default Footer;