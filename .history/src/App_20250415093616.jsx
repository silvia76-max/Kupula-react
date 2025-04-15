import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Importar el proveedor de contexto

import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import CoursesSection from './components/CoursesSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import Login from './pages/Login.jsx'; // Importar el Login
import Profile from './pages/Profile.jsx'; // Importar el perfil de usuario
import Dashboard from './pages/admin/Dashboard.jsx'; // Importar el dashboard del admin
import PrivateRoute from './routes/PrivateRoute.jsx'; // Proteger rutas privadas

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="bg-negro min-h-screen">
          {/* Componente Header y las secciones */}
          <Header />
          <HeroSection />
          <AboutSection />
          <CoursesSection />
          <ContactSection />
          <Footer />

          {/* Aquí va el contenido principal */}
          <main className="p-8">
            <h2 className="text-dorado text-3xl font-semibold mb-4">
              Bienvenida a Akademia La Kúpula
            </h2>
            <p>Formación estética presencial y online con elegancia y profesionalidad.</p>
          </main>

          {/* Definimos las rutas */}
          <Routes>
            {/* Ruta para login */}
            <Route path="/login" element={<Login />} />

            {/* Ruta para el dashboard del administrador (protege la ruta con PrivateRoute) */}
            <Route
              path="/admin/dashboard"
              element={
                <PrivateRoute requiredRole="admin">
                  <Dashboard />
                </PrivateRoute>
              }
            />

            {/* Ruta para el perfil del usuario (también protegido, pero solo requiere login) */}
            <Route
              path="/perfil"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
