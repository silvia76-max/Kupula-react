// src/pages/admin/Dashboard.jsx
import { useAuth } from "../../context/AuthContext"; 
import { Navigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();

  if (!user || user.role !== "admin") {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Panel de administrator</h1>
      <p>Bienvenida, {user?.name} (rol: {user?.role})</p>

      <div>
        <button
          onClick={logout}
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
