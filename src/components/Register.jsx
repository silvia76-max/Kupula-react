// src/components/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";
import GoldenButton from "./GoldenButton.jsx";  

const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

 
const handleSubmit = async (e) => {
  e.preventDefault();
  setSuccess("");
  setError("");

  try {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const contentType = res.headers.get("content-type");
    let data = {};
    
    if (contentType && contentType.includes("application/json")) {
      data = await res.json();
    }

    if (res.ok) {
      // Mensaje de éxito
      setSuccess("¡Registro exitoso! Redirigiendo al login...");
      
      // Redirigir después de un breve retraso
      setTimeout(() => {
        // Usamos navigate para redirigir al login
        navigate(data.redirect_url || "/login");
      }, 1500);
    } else {
      // Mostrar error si no es ok
      setError(data.message || "Ocurrió un error al registrar.");
    }
  } catch (error) {
    setError("Error en la solicitud, intente nuevamente.");
    console.error("Error al registrar:", error);
  }
};
  return (
    <div className="login-register-container">
      <h2 style={{ textAlign: "center" }}>Registro</h2>
      {success && <p className="success-message">{success}</p>}
      {error && <p className="success-message" style={{ color: "red" }}>{error}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Nombre de usuario"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Correo electrónico"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          onChange={handleChange}
          required
        />
        <button type="submit" className="golden-button">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
