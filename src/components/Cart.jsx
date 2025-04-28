// src/components/Cart.js
import React, { useState } from "react";
import { Courses } from "./components/courses";

const Cart = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (course) => {
    setCart((prevCart) => [...prevCart, course]);
  };

  const handleRemoveFromCart = (courseId) => {
    setCart((prevCart) => prevCart.filter((course) => course.id !== courseId));
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <div>
        {cart.map((course) => (
          <div key={course.id}>
            <h3>{course.title}</h3>
            <button onClick={() => handleRemoveFromCart(course.id)}>
              Eliminar del carrito
            </button>
          </div>
        ))}
      </div>
      <h2>Cursos Disponibles</h2>
      {Courses.map((course) => (
        <div key={course.id}>
          <h3>{course.title}</h3>
          <button onClick={() => handleAddToCart(course)}>Añadir al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
