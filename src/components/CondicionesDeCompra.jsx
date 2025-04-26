import React from 'react';
import "../styles/AvisoLegal.css";


const Legal = () => {
  return (
    <div className="legal-container">
      <div className="legal-content">
        <h1>Términos y Condiciones</h1>
        
        <h2>Introducción</h2>
        <p>
          Bienvenido a nuestro sitio web. Al acceder y utilizar este sitio, aceptas cumplir con los términos y condiciones establecidos.
        </p>
        
        <h2>Uso del sitio</h2>
        <p>
          El uso de nuestro sitio web debe cumplir con las leyes aplicables y no debe infringir los derechos de terceros.
        </p>
        
        <h3>Responsabilidad</h3>
        <p>
          Nos esforzamos por garantizar que la información en nuestro sitio sea precisa y actualizada, pero no nos hacemos responsables de errores u omisiones.
        </p>
        
        <h2>Política de privacidad</h2>
        <p>
          Valoramos tu privacidad. Consulta nuestra política de privacidad para entender cómo recopilamos y usamos tu información personal.
        </p>
        
        <h3>Cookies</h3>
        <p>
          Usamos cookies para mejorar la experiencia del usuario. Al continuar utilizando nuestro sitio, aceptas el uso de cookies.
        </p>
        
        <h2>Enlaces externos</h2>
        <p>
          Nuestro sitio puede contener enlaces a otros sitios web. No nos hacemos responsables de las prácticas de privacidad o el contenido de esos sitios.
        </p>

        <address>
          <p>Contacto:</p>
          <p>Dirección: Calle Ejemplo 123, Ciudad, País</p>
          <p>Correo: contacto@ejemplo.com</p>
          <p>Teléfono: +123 456 789</p>
        </address>

        <div className="website">
          <p>Visita nuestro sitio web para más información.</p>
        </div>

        <div className="generator-info">
          <p>Generado por Akademia La Kúpula</p>
        </div>

        <h2>Sección adicional 1</h2>
        <ul>
          <li>Item 1 de la sección adicional.</li>
          <li>Item 2 de la sección adicional.</li>
        </ul>

        <h2>Sección adicional 2</h2>
        <p>
          Algunos detalles adicionales sobre el uso del sitio o la política de privacidad.
        </p>

      </div>
    </div>
  );
}

export default Legal;
