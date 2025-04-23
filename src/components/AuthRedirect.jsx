// src/components/AuthRedirect.jsx
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const AuthRedirect = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/perfil"); // Redirige al perfil si está logueado
    }
  }, [isAuthenticated, navigate]);

  return <div>Redirigiendo...</div>;
};

export default AuthRedirect;
