import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import './App.css';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/useAuth';

function App() {

  const { user, login, logout, setUser } = useAuth();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>       
    </AuthContext.Provider>
  );
}

export default App;
