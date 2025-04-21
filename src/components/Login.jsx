import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoldenButton from "./GoldenButton";
import { loginUser } from "../api"; // 👈 Importa desde api.jsx
import "../styles/LoginRegister.css";

const Login = () => {
  const [formData, setFormData] = useState({username: "",email: "", password: "" });
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
      const data = await loginUser(formData);
      localStorage.setItem("token", data.access_token);
      navigate("/profile");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Inicia sesión</h2>
      {error && <p className="error-message">{error}</p>}
      <input name="name" placeholder="Nombre completo" type="name" onChange={handleChange} value={formData.name} required />
      <input name="email" placeholder="Correo electrónico" type="email" onChange={handleChange} value={formData.email} required />
      <input name="password" placeholder="Contraseña" type="password" onChange={handleChange} value={formData.password} required />
      <GoldenButton type="submit" disabled={loading || !formData.email || !formData.password}>
        {loading ? "Cargando..." : "Entrar"}
      </GoldenButton>
    </form>
  );
};

export default Login;
