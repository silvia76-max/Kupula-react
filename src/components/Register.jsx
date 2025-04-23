
import "../styles/Register.css";
import { useAuth0 } from "@auth0/auth0-react";  // Importamos useAuth0 para trabajar con Auth0

  
  const Register = () => {
    const { loginWithRedirect } = useAuth0();
  
    const handleRegister = () => {
      loginWithRedirect({
        authorizationParams: {
          screen_hint: "signup", // Fuerza mostrar el formulario de registro
        },
      });
    };
  
    return (
      <div className="login-register-container">
        <h2>Registro</h2>
        <button onClick={handleRegister} className="golden-button">
          Registrarse con Auth0
        </button>
      </div>
    );
  };

export default Register;
