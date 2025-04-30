import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { courses } from "../data/coursesData"; // Asegúrate de usar la ruta correcta

const CourseDetail = () => {
  const { id } = useParams(); // Obtiene el parámetro "id" de la URL
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const foundCourse = courses.find((course) => course.id === parseInt(id));
    setCourse(foundCourse);
  }, [id]);

  if (!course) return <p>Curso no encontrado.</p>; // Si no se encuentra el curso

  return (
    <div className="course-detail">
      <h2>{course.title}</h2>
      <img src={course.image} alt={course.title} />
      <p>{course.description}</p>
      <p>Precio: ${course.price}</p>
      <button>Comprar Curso</button> {/* Aquí puedes añadir la funcionalidad para comprar */}
      <button>Añadir a Lista de Deseos</button> {/* Funcionalidad para añadir a la lista de deseos */}
    </div>
  );
};

export default CourseDetail;
