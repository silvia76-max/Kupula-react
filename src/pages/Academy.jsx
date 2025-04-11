import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-carrusel relative h-[25vh] w-full bg-black mb-10 border-t-2 border-gold">
        <img src="img/salonkupula.jpg" className="w-full h-[300px] object-cover" alt="Imagen de salón" />
      </section>

      <main className="main-akademia flex flex-col gap-8 w-full max-w-screen-lg mx-auto p-4 box-border">
        {/* Fila 1 */}
        <section className="fila flex items-center justify-between gap-8 flex-wrap">
          <div className="imagen">
            <img src="img/tania12.jpg" alt="Tania Calvo" className="w-full max-w-[300px] h-auto rounded-xl shadow-md" />
          </div>
          <div className="texto text-gold">
            <h2 className="text-2xl text-goldenrod mb-4">Sobre la <strong>Akademia</strong><br />La Kupula</h2>
            <p className="text-base leading-6">
              En <strong>Akademia</strong> La Kúpula, transformamos la pasión por la <strong>estética</strong> en una profesión de éxito.
              Ubicados en el bilbaíno barrio de Santutxu, a menos de 100 metros del metro, ofrecemos una formación de alta calidad
              adaptada a las necesidades de nuestros estudiantes. Con nuestros cursos presenciales y online, brindamos la flexibilidad
              y excelencia necesarias para formar a los mejores profesionales en <strong>imagen</strong> personal. Nuestro enfoque práctico e
              innovador está diseñado para acompañarte en cada paso de tu desarrollo profesional.
            </p>
          </div>
        </section>

        {/* Fila 2 */}
        <section className="fila flex items-center justify-between gap-8 flex-wrap-reverse">
          <div className="texto text-gold">
            <h2 className="text-2xl text-goldenrod mb-4">Sobre nuestra directora<br />Tania Calvo</h2>
            <p className="text-base leading-6">
              Tania Calvo, directora de <strong>Akademia</strong> La Kúpula, es una apasionada de la <strong>imagen</strong> personal
              y la <strong>belleza</strong>. Con una trayectoria destacada en el sector, Tania combina su experiencia profesional con
              una profunda vocación por la enseñanza. Su entusiasmo y compromiso han inspirado a cientos de estudiantes a alcanzar
              sus metas, y su enfoque en la formación personalizada asegura que cada alumno desarrolle su máximo potencial.
            </p>
          </div>
          <div className="imagen">
            <img src="img/tania10.jpg" alt="Tania mostrando técnicas de belleza" className="w-full max-w-[300px] h-auto rounded-xl shadow-md" />
          </div>
        </section>

        {/* Fila 3 */}
        <section className="fila flex items-center justify-between gap-8 flex-wrap">
          <div className="imagen">
            <img src="img/uñas-kupula39.jpg" alt="Uñas decoradas" className="w-full max-w-[300px] h-auto rounded-xl shadow-md" />
          </div>
          <div className="texto text-gold">
            <h2 className="text-2xl text-goldenrod mb-4">Sobre nuestros cursos</h2>
            <p className="text-base leading-6">
              En <strong>Akademia</strong> La Kúpula, te ofrecemos dos formas de acceder a nuestra formación:<br />
              <strong>Compra individual de cursos:</strong> Adquiere los cursos que prefieras de forma independiente y descarga todo el material
              incluido para aprender a tu ritmo.<br />
              <strong>Registro en nuestra academia online:</strong> Únete a nuestro campus virtual interactivo y accede a una amplia gama de recursos,
              lecciones, y herramientas diseñadas para potenciar tu aprendizaje. Tú eliges la opción que mejor se adapte a tus necesidades y objetivos
              profesionales.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
