import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoldenButton from "./GoldenButton";
import { registerUser } from "../api";
import "../styles/LoginRegister.css";

const Register = () => {
  const [formData, setFormData] = useState({ 
    username: "", 
    email: "", 
    password: "", 
    role: "user" 
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
  
    try {
      console.log("Enviando datos:", formData);
      const response = await registerUser(formData);
      
      if (response && response.message) {
        console.log("Registro exitoso:", response.message);
        navigate("/login");
      }
    } catch (err) {
      console.error("Error en registro:", err);
      setError(err.message || "Error al registrar el usuario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit} noValidate>
      <h2>Regístrate</h2>
      {error && <p className="error-message">{error}</p>}
      
      <input 
        name="username" 
        placeholder="Nombre completo" 
        type="text" 
        onChange={handleChange} 
        value={formData.username} 
        required 
      />
      
      <input 
        name="email" 
        placeholder="Correo electrónico" 
        type="email" 
        onChange={handleChange} 
        value={formData.email} 
        required 
      />
      
      <input 
        name="password" 
        placeholder="Contraseña" 
        type="password" 
        onChange={handleChange} 
        value={formData.password} 
        required 
        minLength="8"
      />
      
      <GoldenButton 
        type="submit" 
        disabled={loading || !formData.username || !formData.email || !formData.password}
      >
        {loading ? "Cargando..." : "Crear cuenta"}
      </GoldenButton>
    </form>
  );
};

export default Register;