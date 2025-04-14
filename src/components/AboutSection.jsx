
const AboutSection = () => {
  return (
    <section
      className="bg-negro text-gris px-6 py-16 md:px-20"
      id="sobre"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-dorado text-4xl font-bold mb-6">
          Sobre Akademia La Kúpula
        </h2>
        <p className="text-lg leading-relaxed">
          En <span className="text-dorado font-semibold">La Kúpula</span> formamos a futuras profesionales del sector
          estético con una visión moderna, creativa y enfocada en la excelencia.
          Contamos con años de experiencia impartiendo formación presencial
          y ahora también online, para que puedas formarte desde cualquier lugar.
        </p>
        <p className="mt-6 text-lg">
          Nuestra misión es empoderar a mujeres emprendedoras a través de la belleza, el arte y la técnica.
          Cada curso está diseñado con cariño, profesionalidad y atención al detalle.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
