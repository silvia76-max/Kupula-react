import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import CoursesSection from "./components/CoursesSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";

import Login from "./pages/user/Login.jsx"; 
import Profile from "./pages/user/profile.jsx"; 
import Dashboard from "./pages/admin/Dashboard.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="bg-negro min-h-screen">
          <Header />
          <HeroSection />
          <AboutSection />
          <CoursesSection />
          <ContactSection />
          <Footer />

          <main className="p-8">
            <h2 className="text-dorado text-3xl font-semibold mb-4">
              Bienvenida a Akademia La Kúpula
            </h2>
            <p>
              Formación estética presencial y online con elegancia y
              profesionalidad.
            </p>
          </main>

          <Routes>
            <Route path="/login" element={<Login />} />
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
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
