// src/components/CourseCard.jsx
import React from 'react';

const CourseCard = ({ image, title, description, link }) => {
  return (
    <div className="card-alumnos">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="button">Más información</a>
    </div>
  );
};

export default CourseCard;
