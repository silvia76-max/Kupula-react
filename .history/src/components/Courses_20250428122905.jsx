import React from "react";
import CourseCard from "./CourseCard";
import "../styles/Courses.css";

import maquillajeImg from '../assets/images/unas-kupula3.jpg';
import unasImg from '../assets/images/unas-kupula5.jpg';
import esteticaImg from '../assets/images/unasdeco001.jpg';
import manicuraImg from '../assets/images/unas-kupula2.jpg';
import socialImg from '../assets/images/unas-kupula26.jpg';
import extensionImg from '../assets/images/unas-kupula27.jpg';

const Courses = () => {
  return (
    <section id= "cursos" className="course-section">
      <h2 className="section-title">Nuestros Cursos</h2>
      <div className="course-list">
        <CourseCard
          id="1"
          title="Curso de Maquillaje Profesional"
          description="Aprende técnicas de maquillaje artistico."
          image={maquillajeImg}
          price="50€"
        />
        <CourseCard
        id="2"
          title="Curso de Uñas Esculpidas"
          description="Domina el arte de las uñas acrílicas y gel."
          image={unasImg}
           price="50€"
        />
        <CourseCard
          id="3"
          title="Estética Integral"
          description="Formación completa en tratamientos faciales y corporales."
          image={esteticaImg}
           price="50€"
        />
        <CourseCard
          id="4"
          title="Curso de Manicura y Pedicura"
          description="Domina el arte y el cuidado de manos y pies"
          image={manicuraImg}
           price="50€"
        />
        <CourseCard
          id="5"
          title="Curso de Maquillaje social"
          description="Descubre técnicas de maquillaje social."
          image={socialImg}
           price="50€"
        />
        <CourseCard
          id="6"
          title="Curso de extensión de Pestañas"
          description="Extensiones de pestañas de cero a cien"
          image={extensionImg}
           price="50€"
        />
      </div>
    </section>
  );
};

export default Courses;
