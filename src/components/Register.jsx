import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";
import { useAuth0 } from "@auth0/auth0-react";  // Importamos useAuth0 para trabajar con Auth0

const Register = () => {
  const { loginWithRedirect } = useAuth0();  // Desestructuramos loginWithRedirect de useAuth0
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // La función handleSubmit ya no es necesaria para crear el usuario manualmente,
  // ya que Auth0 se encargará de la autenticación.

  const handleRegister = async (e) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    try {
      // Llamamos a Auth0 para hacer el registro o el login
      await loginWithRedirect();  // Auth0 manejará la autenticación

      // Si el registro o login es exitoso, el usuario será redirigido a la página correspondiente
      setSuccess("¡Registro exitoso! Redirigiendo al login...");
      
      // Redirigir después de un breve retraso
      setTimeout(() => {
        // Usamos navigate para redirigir al login
        navigate("/login");
      }, 1500);

    } catch (error) {
      setError("Ocurrió un error al registrar.");
      console.error("Error al registrar:", error);
    }
  };

  return (
    <div className="login-register-container">
      <h2 style={{ textAlign: "center" }}>Registro</h2>
      {success && <p className="success-message">{success}</p>}
      {error && <p className="success-message" style={{ color: "red" }}>{error}</p>}
      <form className="form" onSubmit={handleRegister}>
        <input
          name="username"
          type="text"
          placeholder="Nombre de usuario"
          disabled  // Ya no se necesita el nombre de usuario manual, se usa el de Auth0
        />
        <input
          name="email"
          type="email"
          placeholder="Correo electrónico"
          disabled  // El correo lo gestiona Auth0
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          disabled  // La contraseña la gestiona Auth0
        />
        <button type="submit" className="golden-button">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
