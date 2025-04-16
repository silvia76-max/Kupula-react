import React from 'react';
import GoldenButton from './GoldenButton'; 
import "../styles/CourseCard.css";

const CourseCard = ({ title, description, image }) => {
  return (
    <div className="course-card">
      <img src={image} alt={title} className="course-image" />
      <h3 className="course-title">{title}</h3>
      <p className="course-description">{description}</p>
      <GoldenButton text="Ver más" link={`/${title.toLowerCase().replace(/\s+/g, '-')}`} /> {/* Enlace dinámico basado en el título */}
    </div>
  );
};

export default CourseCard;
