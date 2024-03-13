import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = () => {
   
    console.log('Signing up with:', username, email, password, confirmPassword);
  };

  return (
    <div>
      <h2 id="signup">Signup</h2>
      <form>
        <div className="horizontal-form">
          <div className="form-group">
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>

        <div className="horizontal-form">
          <div className="form-group">
            <label>Password:</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Confirm Password:</label>
            <div className="password-input">
              <input
                type={showPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </span>
            </div>
          </div>
        </div>

        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;


<<<<<<< HEAD
=======

>>>>>>> main
