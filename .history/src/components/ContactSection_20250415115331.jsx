import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons"; 

const ContactSection = () => {
  return (
    <section id="contacto" className="bg-negro px-6 py-16 md:px-20 text-center">
      <h2 className="text-dorado text-4xl font-bold mb-6">Contacto</h2>
      <p className="mb-6 text-lg">
        ¿Tienes dudas o quieres apuntarte a uno de nuestros cursos?  
        ¡Escríbenos sin compromiso!
      </p>

      <form className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          placeholder="Tu nombre"
          className="w-full px-4 py-3 rounded bg-gray-900 text-white border border-dorado focus:outline-none"
          required
        />
        <input
          type="email"
          placeholder="Tu email"
          className="w-full px-4 py-3 rounded bg-gray-900 text-white border border-dorado focus:outline-none"
          required
        />
        <textarea
          placeholder="Tu mensaje"
          rows="5"
          className="w-full px-4 py-3 rounded bg-gray-900 text-white border border-dorado focus:outline-none"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-dorado text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Enviar mensaje
        </button>
      </form>
      <div>
      <FontAwesomeIcon icon={faUser} /> Usuario
      <FontAwesomeIcon icon={faEnvelope} /> Contacto
    </div>
    </section>
  );
};

export default ContactSection;
