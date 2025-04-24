// src/components/Login.jsx
import React, { useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import "../styles/Register.css";

const Home = () => {
  const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      console.log("Usuario autenticado:", user);
    }
  }, [isAuthenticated, user]);

  return (
    <div>
      {!isAuthenticated ? (
        <button onClick={() => loginWithRedirect()}>Login</button>
      ) : (
        <div>
          <h2>Bienvenido, {user.name}</h2>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;