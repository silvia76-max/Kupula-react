import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../../components/LogoutButton";

const Perfil = () => {
  const { user } = useAuth0();

  return (
    <div className="login-register-container">
      <h2>Bienvenido, {user.name || user.email}</h2>
      <img src={user.picture} alt="Perfil" style={{ borderRadius: "50%", width: 100 }} />
      <p>Email: {user.email}</p>
      <LogoutButton />
    </div>
  );
};

export default Perfil;
