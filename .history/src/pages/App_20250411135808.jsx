import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Home from '../pages/Home.jsx'
import Courses from '../pages/Courses.jsx';

function App() {
  return (
    <Router>
      <div className="App bg-secundario text-primario">
        <Header />
        <Navbar />
        
        <main className="border-t-2 border-gold">
          <Routes>
            <Route path="/" element={<Home />} />  {/* Página de inicio */}
            <Route path="/academy" element={<Academy />} />  {/*Página Academia */}
            <Route path="/courses" element={<Courses />} />  {/* Página Cursos */}
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  )
}

export default App