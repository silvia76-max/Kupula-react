import React from 'react'
import '../styles/index.css'


const Home = () => {
  return (
    <main>
      <div className="image-grid">
        <img loading="lazy" src="/src/assets/img/uñas-kupula39.jpg" alt="Diseño de uñas azul" />
        <img loading="lazy" src="/src/assets/img/uñas-kupula35.jpg" alt="Decoracion para uñas dorado y plateado" />
        <img loading="lazy" src="/src/assets/img/uñas-kupula29.jpg" alt="utensilios para uñas" />
        <img loading="lazy" src="/src/assets/img/uñas-kupula27.jpg" alt="Diseño de uñas en verde" />
        <img loading="lazy" src="/src/assets/img/uñas-kupula26.jpg" alt="Decoraciones de uñas" />
        <img loading="lazy" src="/src/assets/img/uñas-kupula15.jpg" alt="Decoracion de uñas en blanco" />
        <img loading="lazy" src="/src/assets/img/uñas-kupula7.jpg" alt="Diseño de uñas en amarillo" />
        <img loading="lazy" src="/src/assets/img/uñas-kupula5.jpg" alt="Diseño de uñas rosa con sandias" />
        <img loading="lazy" src="/src/assets/img/uñas-kupula2.jpg" alt="Diseño de uñas azul" />
      </div>
      
      <div className="container">
        <a href="/akademia">
          <button className="shadow__btn">Saber más</button>
          <button style={{
            padding: "10px 20px",
            backgroundColor: "#ff69b4",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold"
          }}>Saber más</button>

        </a>
      </div>
    </main>
  )
}

export default Home