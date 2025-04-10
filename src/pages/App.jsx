import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Home from './Home.jsx'

function App() {
  return (
    <Router>
       <div className="App p-10 bg-blue-500 text-white">
         <h1 className="text-3xl">¡Hola, Tailwind y React!</h1>
        <Header />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Agrega más rutas aquí luego */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App