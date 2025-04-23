import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  if (!isAuthenticated) return null;

  return (
    <button
      onClick={() =>
        logout({
          logoutParams: {
            returnTo: window.location.origin,
          },
        })
      }
      className="golden-button"
    >
      Cerrar sesión
    </button>
  );
};

export default LogoutButton;
