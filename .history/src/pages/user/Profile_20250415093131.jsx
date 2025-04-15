// src/pages/Profile.jsx

import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();

  // Si no está logueado, redirige
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Mi Perfil</h1>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Rol:</strong> {user.role}</p>

      {/* Aquí podrías añadir más info del usuario, como cursos inscritos */}

      <div className="mt-4">
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;
