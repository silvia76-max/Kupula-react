export const registerUser = async (formData) => {
  try {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
      credentials: 'include'
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error en el registro");
    }

    return data;
  } catch (error) {
    console.error('Error en registerUser:', error);
    throw error;
  }
};
  
  export const loginUser = async (formData) => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
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
  