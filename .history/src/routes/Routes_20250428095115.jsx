import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Profile from "./pages/user/Profile";
import Register from "./components/Register";
import Login from "./components/Login";
import PoliticaPrivacidad from "./components/PoliticaPrivacidad";
import AvisoLegal from "./components/AvisoLegal";
import CookiesPolicy from "./components/CookiesPolicy";
import CondicionesDeCompra from "./components/CondicionesDeCompra";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
        <ScrollToTop />
      <Routes>
        
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/cookies" element={<CookiesPolicy />} />
        <Route path="/condiciones-de-compra" element={<CondicionesDeCompra />} />
     
        <Route path="/admin/dashboard" element={<PrivateRoute requiredRole="admin"><Dashboard /></PrivateRoute>} />
        <Route path="/perfil" element={<PrivateRoute><Profile /></PrivateRoute>} />

        {/* Rutas públicas */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
