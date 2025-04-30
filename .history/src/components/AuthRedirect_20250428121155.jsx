import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const AuthRedirect = () => {
  const { isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) return; 

    if (isAuthenticated) {
      navigate("/perfil"); 
    } else {
      navigate("/login"); 
    }
  }, [isAuthenticated, isLoading, navigate]);

  return <div>Redirigiendo...</div>;
};

export default AuthRedirect;
