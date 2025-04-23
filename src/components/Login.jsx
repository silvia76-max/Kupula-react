// src/components/Login.jsx
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/Register.css";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-register-container">
      <h2>Inicia sesión</h2>
      <button className="golden-button" onClick={() => loginWithRedirect()}>
        Continuar con Auth0
      </button>
    </div>
  );
};

export default Login;
