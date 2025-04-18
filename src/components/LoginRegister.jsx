import React, { useState } from "react";
import "../styles/LoginRegister.css";
import GoldenButton from "./GoldenButton";
import { useNavigate } from "react-router-dom";

const LoginRegister = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: ""
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setErrorMessage("");
    setSuccessMessage("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        }),
        credentials: 'include' // Importante para cookies/sesiones
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Credenciales incorrectas");
      }

      const data = await response.json();
      localStorage.setItem("token", data.access_token);
      navigate("/profile");
    } catch (error) {
      setErrorMessage(error.message || "Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en el registro");
      }

      setSuccessMessage("¡Registro exitoso! Por favor inicia sesión.");
      setActiveTab("login");
      setFormData({
        email: "",
        password: "",
        username: ""
      });
    } catch (error) {
      setErrorMessage(error.message || "Error al registrar usuario");
    } finally {
      setIsLoading(false);
    }
  };

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

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      {activeTab === "login" ? (
        <form className="form" onSubmit={handleLoginSubmit}>
          <h2>Inicia Sesión</h2>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            required
            value={formData.password}
            onChange={handleInputChange}
          />
          <GoldenButton 
            type="submit" 
            disabled={isLoading}
          >
            {isLoading ? "Cargando..." : "Entrar"}
          </GoldenButton>
        </form>
      ) : (
        <form className="form" onSubmit={handleRegisterSubmit}>
          <h2>Regístrate</h2>
          <input
            type="text"
            name="username"
            placeholder="Nombre completo"
            required
            value={formData.username}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            required
            value={formData.password}
            onChange={handleInputChange}
          />
          <GoldenButton 
            type="submit" 
            disabled={isLoading}
          >
            {isLoading ? "Cargando..." : "Crear cuenta"}
          </GoldenButton>
        </form>
      )}
    </div>
  );
};

export default LoginRegister;