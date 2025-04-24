import React, { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("Usuario autenticado:", user);
      // Aquí podrías enviar los datos a tu backend si es necesario
    }
  }, [isAuthenticated, user]);

  return (
    <div className="auth-container">
      {!isAuthenticated ? (
        <button 
          onClick={() => loginWithRedirect({ authorizationParams: { prompt: "login" } })}
          className="auth-button"
        >
          Login
        </button>
      ) : (
        <div className="welcome-container">
          <h2>Bienvenido, {user?.name || user?.email}</h2>
          <button 
            onClick={() => logout({ returnTo: window.location.origin })}
            className="auth-button"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;