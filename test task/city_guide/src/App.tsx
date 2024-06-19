import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
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
        </Routes>
      </Router>       
    </AuthContext.Provider>
  );
}

export default App;
