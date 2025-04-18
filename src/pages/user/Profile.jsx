// src/pages/Profile.jsx

import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "../../styles/Profile.css"; // Asegúrate de tener el archivo CSS correspondiente

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token"); // Obtener token desde localStorage
      if (!token) {
        setError("No se encontró el token de autenticación.");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("/api/auth/profile", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`, // Incluir el token en los headers
          },
        });

        const data = await response.json();
        if (response.ok) {
          setUser(data); // Guardar la información del perfil en el estado
        } else {
          setError(data.message || "Error al obtener el perfil");
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Extrae el mensaje del error si es un Error
        } else {
          setError("Hubo un error al cargar el perfil.");
       }
      } finally {
        setLoading(false); // Finaliza el estado de carga
      }
    };

    fetchProfile(); // Llamar a la función de fetch
  }, []); // El efecto solo se ejecuta una vez al cargar el componente

  if (loading) {
    return (
      <div className="profile-container">
        <p>Cargando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-container">
        <p className="error-message">{error}</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" />; 
  }

  return (
    <div className="profile-container">
      <h1 className="profile-title">Mi Perfil</h1>
      <div className="profile-info">
        <p><strong>Nombre:</strong> {user.name}</p>
        <p><strong>Correo:</strong> {user.email}</p>
        <p><strong>Rol:</strong> {user.role}</p>
      </div>

      <div className="logout-container">
        <button
          onClick={() => {
            localStorage.removeItem("token"); // Eliminar el token de localStorage al cerrar sesión
            window.location.href = "/"; // Redirigir al inicio
          }}
          className="logout-button"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;
