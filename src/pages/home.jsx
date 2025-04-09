import React from 'react'
import '../styles/Home.css'

const Home = () => {
  return (
    <main>
      <div className="image-grid">
        {/* Usa import para imágenes o desde /assets */}
        <img src="/src/assets/img/uñas-kupula12.jpg" alt="Imagen 1" />
        {/* ... resto de imágenes ... */}
      </div>
      
      <div className="container">
        <a href="/akademia">
          <button className="shadow__btn">Saber más</button>
        </a>
      </div>
    </main>
  )
}

export default Home