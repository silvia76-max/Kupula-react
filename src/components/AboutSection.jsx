import '../styles/AboutSection.css';
 

const AboutSection = () => {
  return (
    <section className="about-section" id="sobre">
      <div className="about-content">
        <h2 className="about-title">Sobre Akademia La Kúpula</h2>
        <p className="about-text">
          En <span className="about-highlight">La Kúpula</span> formamos a futuras profesionales del sector
          estético con una visión moderna, creativa y enfocada en la excelencia.
          Contamos con años de experiencia impartiendo formación presencial
          y ahora también online, para que puedas formarte desde cualquier lugar.
        </p>
        <p className="about-text">
          Nuestra misión es empoderar a mujeres emprendedoras a través de la belleza, el arte y la técnica.
          Cada curso está diseñado con cariño, profesionalidad y atención al detalle.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
