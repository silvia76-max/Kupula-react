import "../HeroSection.css"; // Asegúrate de importar el archivo CSS

const HeroSection = () => {
  return (
    <section className="hero" id="inicio">
      <img src="assets/entrada-kupula.jpg" alt="" />

      <div className="content">
        <h1>Formación en Estética Profesional</h1>
        <p>
          Aprende de expertas en el sector. Cursos presenciales y online con estilo y calidad.
        </p>
        <a href="#cursos" className="cta-button">
          Ver Cursos
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
