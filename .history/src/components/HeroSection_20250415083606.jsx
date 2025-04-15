
const HeroSection = () => {
  return (
    <section
      className="h-[90vh] flex items-center justify-center bg-negro text-center relative overflow-hidden"
      id="inicio"
    >
      {/* Fondo opcional con imagen difuminada */}
      {/* <img src="/path/to/bg.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-10" /> */}

      <div className="z-10 px-6">
        <h1 className="text-dorado text-5xl md:text-6xl font-bold mb-6">
          Formación en Estética Profesional
        </h1>
        <p className="text-gris text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Aprende de expertas en el sector. Cursos presenciales y online con estilo y calidad.
        </p>
        <a
          href="#cursos"
          className="bg-dorado text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
        >
          Ver Cursos
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
