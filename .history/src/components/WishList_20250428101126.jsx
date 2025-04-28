// src/components/WishList.js
import React, { useState } from "react";

const WishList = ({ courses }) => {
  const [wishList, setWishList] = useState([]);

  const handleAddToWishList = (course) => {
    setWishList((prevWishList) => [...prevWishList, course]);
  };

  const handleRemoveFromWishList = (courseId) => {
    setWishList((prevWishList) => prevWishList.filter((c) => c.id !== courseId));
  };

  return (
    <div>
      <h2>Lista de Deseos</h2>
      <div>
        {wishList.map((course) => (
          <div key={course.id}>
            <h3>{course.title}</h3>
            <button onClick={() => handleRemoveFromWishList(course.id)}>
              Eliminar de la lista
            </button>
          </div>
        ))}
      </div>
      <h2>Cursos Disponibles</h2>
      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.title}</h3>
          <button onClick={() => handleAddToWishList(course)}>Añadir a la lista</button>
        </div>
      ))}
    </div>
  );
};

export default WishList;
