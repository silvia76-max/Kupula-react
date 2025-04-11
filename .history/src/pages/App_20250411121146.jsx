import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Home from './Home.jsx'

function App() {
  return (
    <Router>
      <div className="App bg-secundario text-primario">
        <Header />
        <Navbar />
        
        <main className="border-t-2 border-gold">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Agrega más rutas aquí luego */}
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App