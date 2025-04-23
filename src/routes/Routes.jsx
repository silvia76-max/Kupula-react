// src/App.jsx o src/routes.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import { Auth0Provider } from '@auth0/auth0-react';
import PrivateRoute from "./routes/PrivateRoute";
import Profile from "./pages/user/Profile";
import Register from "./components/Register";
import Login from "./components/Login";
import LogoutButton from "./components/LogoutButton";

function App() {
  return (
    <Auth0Provider>
      <AuthRedirect />
      <Router>
        <Routes>
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <LogoutButton />
          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute requiredRole="admin">
                <Dashboard />
              </PrivateRoute>
            }
          />
           <Route
             path="/perfil"
              element={
             <PrivateRoute>
               <Profile />
            </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </Auth0Provider>
  );
}

export default App;
