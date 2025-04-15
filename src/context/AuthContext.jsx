// src/context/AuthContext.jsx

import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // { name, role }
  const login = (email, password) => {
 
    if (email === "admin@kupula.com" && password === "admin123") {
      setUser({ name: "Tania Calvo", role: "admin" });
    } else {
      setUser({ name: "Luna Pérez", role: "user" });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
