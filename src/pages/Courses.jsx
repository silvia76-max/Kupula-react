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
    <main className="bg-black text-[goldenrod] min-h-screen p-6">
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold">Nuestros Cursos</h2>
    </div>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </section>
  </main>
  );
};

export default Courses;
