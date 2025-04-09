import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // Estilos globales

// Font Awesome (opción 1 - si instalaste el paquete)
import '@fortawesome/fontawesome-free/css/all.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)