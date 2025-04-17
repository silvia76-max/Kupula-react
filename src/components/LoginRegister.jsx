import React, { useState } from "react";
import "../styles/LoginRegister.css";
import GoldenButton from "./GoldenButton";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

const LoginRegister = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");  // Para el registro
  const [errorMessage, setErrorMessage] = useState("");  // Mensaje de error
  const [isLoading, setIsLoading] = useState(false); // Para indicar si está cargando
  const navigate = useNavigate(); // Hook para la redirección

  const handleTabSwitch = (tab) => setActiveTab(tab);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      // Aquí puedes almacenar el token en localStorage o en un state global
      localStorage.setItem("token", data.access_token);  // Guardar el token en localStorage

      // Obtener el perfil del usuario usando el token
      const profileResponse = await fetch("http://localhost:5000/api/auth/profile", {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${data.access_token}`, // Incluir el token en los headers
        },
      });

      const profileData = await profileResponse.json();
      if (profileResponse.ok) {
        console.log("Perfil del usuario:", profileData);
        // Redirigir al perfil después de obtener los datos
        navigate("/profile");
      } else {
        setErrorMessage(profileData.message || "Error al obtener el perfil");
      }
    } else {
      setErrorMessage(data.message || "Error desconocido");
    }

    setIsLoading(false);
  };
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");  // Resetear cualquier error previo
  
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });
  
    const data = await response.json();
    setIsLoading(false);  // Desactivar el loading independientemente del resultado
  
    if (response.ok) {
      console.log("Registration success:", data);
      localStorage.setItem("token", data.access_token);
      navigate("/login");  // Redirige al login después del registro
    } else {
      setErrorMessage(data.message || "Error desconocido");
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

      {activeTab === "login" ? (
        <form className="form" onSubmit={handleLoginSubmit}>
          <h2>Inicia Sesión</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <input
            type="email"
            placeholder="Correo electrónico"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="golden-button" disabled={isLoading}>
            {isLoading ? "Cargando..." : "Entrar"}
          </button>
        </form>
      ) : (
        <form className="form" onSubmit={handleRegisterSubmit}>
          <h2>Regístrate</h2>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <input
            type="text"
            placeholder="Nombre completo"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="golden-button" disabled={isLoading}>
            {isLoading ? "Cargando..." : "Crear cuenta"}
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginRegister;
