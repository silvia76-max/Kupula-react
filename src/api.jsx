// src/api.js
export const registerUser = async (formData) => {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
  
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Error en el registro");
    }
  
    return res.json();
  };
  
  export const loginUser = async (formData) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(formData)
    });
  
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.message || "Credenciales incorrectas");
    }
  
    return res.json();
  };
  