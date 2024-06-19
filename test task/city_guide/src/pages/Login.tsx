import React from "react";
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    login({
      id: '1',
      email: 'john.doe@email.com',
      password: '191919'
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;