import "../styles/ContactSection.css";

const ContactForm = () => {
  return (
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
  );
};

export default ContactForm;