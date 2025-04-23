import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../../components/LogoutButton";

const Perfil = () => {
  const { user, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <div>
        <h2>{user.name}</h2>
        <img src={user.picture} alt="Profile" />
      </div>
    );
  }
};

export default Perfil;
