import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/ContactSection.css";

const ContactSection = () => {
  return (
    <section id="contacto" className="contact-section">
      <h2>Contacto</h2>
      <p>
        ¿Tienes dudas o quieres apuntarte a uno de nuestros cursos?
        ¡Escríbenos sin compromiso!
      </p>

      <form>
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu email" required />
        <textarea placeholder="Tu mensaje" rows="5" required></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>

      <div className="icon-group">
        <FontAwesomeIcon icon={faUser} /> Usuario
        &nbsp;&nbsp;
        <FontAwesomeIcon icon={faEnvelope} /> Contacto
      </div>
    </section>
  );
};

export default ContactSection;
