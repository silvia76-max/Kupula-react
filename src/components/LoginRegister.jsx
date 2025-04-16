import React, { useState } from "react";
import "../styles/LoginRegister.css"; 

const LoginRegister = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabSwitch = (tab) => setActiveTab(tab);

  return (
    <div className="login-register-container">
      <div className="tabs">
        <button
          className={activeTab === "login" ? "active" : ""}
          onClick={() => handleTabSwitch("login")}
        >
          Iniciar Sesión
        </button>
        <button
          className={activeTab === "register" ? "active" : ""}
          onClick={() => handleTabSwitch("register")}
        >
          Registrarse
        </button>
      </div>

      {activeTab === "login" ? (
        <form className="form">
          <h2>Inicia Sesión</h2>
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit" className="golden-button">Entrar</button>
        </form>
      ) : (
        <form className="form">
          <h2>Regístrate</h2>
          <input type="text" placeholder="Nombre completo" required />
          <input type="email" placeholder="Correo electrónico" required />
          <input type="password" placeholder="Contraseña" required />
          <button type="submit" className="golden-button">Crear cuenta</button>
        </form>
      )}
    </div>
  );
};

export default LoginRegister;
 