import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // Asegúrate de que el componente ScrollToTop esté en la carpeta correcta
import CourseCard from "./components/CourseCard";
import CourseDetail from "./components/CourseDetail";
import WishList from "./components/WishList";
import Cart from "./components/Cart";
import PoliticaPrivacidad from "./components/PoliticaPrivacidad";
import AvisoLegal from "./components/AvisoLegal";
import CookiesPolicy from "./components/CookiesPolicy";
import CondicionesDeCompra from "./components/CondicionesDeCompra";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute"; // Asegúrate de tener un componente PrivateRoute
import { Courses } from "./data/courses"; // Asegúrate de que el archivo de datos de los cursos esté correctamente importado

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Ruta principal con las cards */}
        <Route
          path="/"
          element={
            <div className="course-list">
              {Courses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          }
        />
        {/* Ruta para la página de detalle del curso */}
        <Route path="/course/:id" element={<CourseDetail />} />
        {/* Ruta para la lista de deseos */}
        <Route path="/wishlist" element={<WishList courses={Courses} />} />
        {/* Ruta para el carrito */}
        <Route path="/cart" element={<Cart />} />
        {/* Rutas legales */}
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
        <Route path="/condiciones-de-compra" element={<CondicionesDeCompra />} />

        {/* Rutas protegidas para usuarios autenticados */}
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute requiredRole="admin">
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        {/* Rutas públicas */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
