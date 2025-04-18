import "../styles/ContactSection.css";
import tiendaImg from "../assets/images/entrada-kupula.jpg";

const ContactSection = () => {
  return (
    <section id="contacto" className="contact-section">
      <h2>Contacto</h2>
      <p>
        ¿Tienes dudas o quieres apuntarte a uno de nuestros cursos?
        ¡Escríbenos sin compromiso!
      </p>
      <div className="contact-wrapper">
      <div className="contact-container">
        {/* Izquierda: Formulario con tus clases actuales */}
        <div className="form-card1">
          <div className="form-card2">
            <form className="formu">
              <div className="form-field">
                <input className="input-field" type="text" placeholder="Tu nombre" required />
              </div>
              <div className="form-field">
                <input className="input-field" type="email" placeholder="Tu email" required />
              </div>
              <div className="form-field">
                <textarea className="input-field" placeholder="Tu mensaje" rows="5" required />
              </div>
              <button type="submit" className="sendMessage-btn">Enviar mensaje</button>
            </form>
          </div>
        </div>

        {/* Derecha: Imagen, comentario y mapa */}
        <div className="info-extra">
          <div className="store-image">
          <img src={tiendaImg} alt="Nuestra tienda" />
          <p>Nos encontrarás en el corazón de Santutxu, ¡a menos de 100m del metro!</p>
          </div>
          <div className="map-container">
            <iframe
              title="Ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5811.948268604861!2d-2.9105716000000283!3d43.251963900000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4e4c0c4decc1%3A0x32a07f372db1faa6!2sLa%20Kupula!5e0!3m2!1ses!2ses!4v1744870036913!5m2!1ses!2ses" 
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>

      {/* Redes sociales */}
      <div className="social-icons">
        <a href="https://wa.me/tu-numero" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="mailto:tuemail@correo.com">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://facebook.com/tu-pagina" target="_blank" rel="noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com/tu-perfil" target="_blank" rel="noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      </div>
    </section>
  );
};

export default ContactSection;
