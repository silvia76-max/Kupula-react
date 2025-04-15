function CourseCard({ title, description }) {
    return (
      <div className="course-card">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    );
  }