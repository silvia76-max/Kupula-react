import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import ErrorBoundary from "./components/ErrorBoundary";
import Courses from "./components/Courses.jsx";
import ContactSection from "./components/ContactSection.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Profile from "./pages/user/Profile.jsx";
import Dashboard from "./pages/admin/Dashboard.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import ReviewCarousel from "./components/ReviewCarrousel.jsx";
import PingTest from "./components/pingTest.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

export function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <PingTest />
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
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
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
