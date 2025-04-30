import React, { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      console.log("Usuario autenticado:", user);
    
      const saveUserToBackend = async () => {
        try {
          const response = await fetch('http://localhost:5000/save_user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              auth0_id: user.sub,  // ID único de Auth0
              email: user.email,
              name: user.name || user.nickname || "", // Lo que tengas disponible
            }),
          });

          const data = await response.json();
          console.log('Usuario guardado en la base de datos:', data);
        } catch (error) {
          console.error('Error guardando usuario en backend:', error);
        }
      };

      saveUserToBackend(); 
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
