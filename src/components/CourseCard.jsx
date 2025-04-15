import "../styles/CourseCards.css";

function CourseCard({ title, description }) {
  return (
    <div className="course-card">
      <h3 className="course-title">{title}</h3>
      <p className="course-description">{description}</p>
      <a href="#cursos" className="course-button">
        Ver más
      </a>
    </div>
  );
}

export default CourseCard;
