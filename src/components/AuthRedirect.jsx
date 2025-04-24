import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const AuthRedirect = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) return; // No hacer nada si se está cargando

    if (isAuthenticated) {
      navigate("/perfil"); // Redirige al perfil si está logueado
    } else {
      navigate("/login"); // Redirige al login si no está logueado
    }
  }, [isAuthenticated, isLoading, navigate]);

  return <div>Redirigiendo...</div>;
};

export default AuthRedirect;
