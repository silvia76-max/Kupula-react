import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Register = () => {
  const { loginWithRedirect } = useAuth0();

  const handleRegister = () => {
    loginWithRedirect({
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <div className="auth-container">
      <h2>Registro</h2>
      <button onClick={handleRegister} className="auth-button golden-button">
        Registrarse con Auth0
      </button>
    </div>
  );
};

export default Register;