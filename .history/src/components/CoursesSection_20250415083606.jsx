
const courses = [
  {
    title: "Curso de Uñas Esculpidas",
    description: "Aprende técnicas profesionales de esculpido, gel y acrílico.",
  },
  {
    title: "Curso de Diseño de Cejas",
    description: "Domina el arte del visagismo, depilación y diseño natural.",
  },
  {
    title: "Curso de Extensiones de Pestañas",
    description: "Técnica clásica, volumen ruso y mantenimiento profesional.",
  },
  {
    title: "Cosmética Natural",
    description: "Crea tus propios productos con ingredientes naturales.",
  },
];

const CoursesSection = () => {
  return (
    <section id="cursos" className="bg-negro py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-dorado text-4xl font-bold mb-12">Nuestros Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-dorado rounded-xl p-6 shadow-lg hover:scale-105 transition transform duration-300"
            >
              <h3 className="text-dorado text-xl font-semibold mb-2">
                {course.title}
              </h3>
              <p className="text-gris mb-4">{course.description}</p>
              <a
                href="#contacto"
                className="inline-block bg-dorado text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-400 transition"
              >
                Más info
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
