import "../styles/CoursesSection.css";

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
    <section id="cursos" className="courses-section">
      <div className="container">
        <h2>Nuestros Cursos</h2>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <a href="#contacto">Más info</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
