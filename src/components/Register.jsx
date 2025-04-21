import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoldenButton from "./GoldenButton";
import "../styles/LoginRegister.css";

const Register = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error en el registro");
      }
      navigate("/login"); // Redirigir a login tras registro exitoso
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Regístrate</h2>
      {error && <p className="error-message">{error}</p>}
      <input name="username" placeholder="Nombre completo" onChange={handleChange} value={formData.username} required />
      <input name="email" placeholder="Correo electrónico" type="email" onChange={handleChange} value={formData.email} required />
      <input name="password" placeholder="Contraseña" type="password" onChange={handleChange} value={formData.password} required />
      <GoldenButton type="submit" disabled={loading}>{loading ? "Cargando..." : "Crear cuenta"}</GoldenButton>
    </form>
  );
};

export default Register;
