// src/pages/Login.jsx

import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    login("Tania Calvo", role);
    navigate(role === "admin" ? "/admin/dashboard" : "/");
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Iniciar sesión</h2>
      <button
        onClick={() => handleLogin("admin")}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-2 w-full"
      >
        Entrar como admin
      </button>
      <button
        onClick={() => handleLogin("user")}
        className="bg-gray-600 text-white px-4 py-2 rounded w-full"
      >
        Entrar como usuario
      </button>
    </div>
  );
};

export default Login;
