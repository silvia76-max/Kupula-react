// src/pages/Courses.jsx
import React from 'react';
import CourseCard from '../components/CourseCard';

const Courses = () => {
  const courses = [
    {
      image: 'img/uñas-kupula27.jpg',
      title: 'Cursos online uñas',
      description: 'Aprende las mejores técnicas de uñas con nuestros cursos online.',
      link: '#',
    },
    {
      image: 'img/uñas-kupula12.jpg',
      title: 'Cursos online uñas',
      description: 'Domina las últimas tendencias en diseño de uñas.',
      link: '#',
    },
    {
      image: 'img/uñas-kupula29.jpg',
      title: 'Cursos online uñas',
      description: 'Fórmate con instructores expertos y material exclusivo.',
      link: '#',
    },
    {
      image: 'img/uñas-kupula3.jpg',
      title: 'Cursos online uñas',
      description: 'Accede a clases grabadas y tutorías en vivo.',
      link: '#',
    },
    {
      image: 'img/uñas-kupula26.jpg',
      title: 'Cursos online uñas',
      description: 'Obtén tu certificación y mejora tu perfil profesional.',
      link: '#',
    },
  ];

  return (
    <main className="contenedor">
      <div className="titulo-cursos">
        <h2>Nuestros Cursos</h2>
      </div>
      <section className="cards-container-alumnos">
        {courses.map((course, index) => (
          <CourseCard
            key={index}
            image={course.image}
            title={course.title}
            description={course.description}
            link={course.link}
          />
        ))}
      </section>
    </main>
  );
};

export default Courses;
