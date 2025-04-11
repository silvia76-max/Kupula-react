import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className="bg-black min-h-screen p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src="/src/assets/img/uñas-kupula39.jpg" alt="Imagen 1" className="rounded-lg shadow-md" />
        <img src="/src/assets/img/uñas-kupula35.jpg" alt="Imagen 2" className="rounded-lg shadow-md" />
        <img src="/src/assets/img/uñas-kupula29.jpg" alt="Imagen 3" className="rounded-lg shadow-md" />
        <img src="/src/assets/img/uñas-kupula27.jpg" alt="Imagen 4" className="rounded-lg shadow-md" />
        <img src="/src/assets/img/uñas-kupula26.jpg" alt="Imagen 5" className="rounded-lg shadow-md" />
        <img src="/src/assets/img/uñas-kupula15.jpg" alt="Imagen 6" className="rounded-lg shadow-md" />
        <img src="/src/assets/img/uñas-kupula7.jpg" alt="Imagen 7" className="rounded-lg shadow-md" />
        <img src="/src/assets/img/uñas-kupula5.jpg" alt="Imagen 8" className="rounded-lg shadow-md" />
        <img src="/src/assets/img/uñas-kupula2.jpg" alt="Imagen 9" className="rounded-lg shadow-md" />
      </div>

      <div className="flex justify-center mt-8">
        <Link to="/akademia">
          <button className="bg-[goldenrod] hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300">
            Saber más
          </button>
        </Link>
      </div>
    </main>
  )
}

export default Home

