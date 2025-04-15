// src/pages/admin/Dashboard.jsx
import { useAuth } from "../../context/AuthContext"; 
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();

  if (!user || user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Panel de administrador</h1>
      <p>Bienvenida, {user?.name} (rol: {user?.role})</p>

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

export default Dashboard;
