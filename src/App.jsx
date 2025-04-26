import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ErrorBoundary from "./components/ErrorBoundary";
import Courses from "./components/Courses.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import LogoutButton from "./components/LogoutButton.jsx";
import Register from "./components/Register.jsx";
import Profile from "./pages/user/Profile.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import ReviewCarousel from "./components/ReviewCarrousel.jsx";
import PingTest from "./components/pingTest.jsx";
import AuthRedirect from "./components/AuthRedirect.jsx";
import PoliticaPrivacidad from "./components/PoliticaPrivacidad";
import AvisoLegal from "./components/AvisoLegal";
import CookiesPolicy from "./components/CookiesPolicy";
import CondicionesDeCompra from "./components/CondicionesDeCompra";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

export function App() {
  return (
    <Router>
      <div className="app-container">
        <PingTest />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HeroSection />
                <AboutSection />
                <Courses />
                <ContactSection />
                <section id="opiniones">
                  <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
                    Opiniones de nuestros alumnos
                  </h2>
                  <ErrorBoundary>
                    <ReviewCarousel />
                  </ErrorBoundary>
                </section>
              </>
            }
          />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/cookies" element={<CookiesPolicy />} />
          <Route path="/condiciones-de-compra" element={<CondicionesDeCompra />} />
          <Route path="/callback" element={<AuthRedirect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute requiredRole="admin">
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/perfil"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
        <LogoutButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
