import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="app">
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