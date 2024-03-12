// src/components/Login.js
import React, { useState } from 'react';
import './Login.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Replace this with actual login logic
    console.log('Logging in with:', email, password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form className="horizontal-form">
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <div className="password-input">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </span>
          </div>
        </div>

        <button type="button" onClick={handleLogin} tabIndex="3">
          Login
        </button>
      </form>
      <p>Don't have an account? <a href="#signup">Register here</a></p>
    </div>
  );
};

export default Login;



