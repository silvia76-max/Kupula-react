import React from 'react';
import GoldenButton from './GoldenButton'; 
import "../styles/CourseCard.css";

const CourseCard = ({ id, title, description, image, price }) => {
  return (
    <div className="course-card">
      <div className="card-header">
        <img src={image} alt={title} className="course-image" />
      </div>
      <div className="card-body">
        <h3 className="course-title">{title}</h3>
        <p className="course-description">{description}</p>
        {/* Opcional: Puedes mostrar el precio si lo deseas */}
        <p className="course-price">Precio: ${price}</p>
      </div>
      <div className="card-footer">
        {/* Aquí pasa el id correctamente a la ruta */}
        <GoldenButton text="Ver más" link={`/course/${id}`} />
      </div>
    </div>
  );
};

export default CourseCard;

