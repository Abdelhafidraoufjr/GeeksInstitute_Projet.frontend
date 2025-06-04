import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/LoginPage";
import Layout from "./Layout/Layout";
import AjouterBlog from "./pages/AddBlog";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  const handleLoginSuccess = () => {
    localStorage.setItem("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Layout isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
        >
          <Route index element={<Home />} />
          <Route
            path="/ajouter-blog"
            element={
              isLoggedIn ? <AjouterBlog /> : <Navigate to="/login" replace />
            }
          />
        </Route>

        <Route
          path="/login"
          element={
            isLoggedIn ? (
              <Navigate to="/" replace />
            ) : (
              <Login onLoginSuccess={handleLoginSuccess} />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}