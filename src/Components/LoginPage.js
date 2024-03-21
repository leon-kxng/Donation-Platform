import React, { useState } from 'react';
import '../css/LoginPage.css'; // Import CSS file for styling
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform input validation
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
  
    // If there are no validation errors, attempt login
    if (Object.keys(newErrors).length === 0) {
      try {
        // Call the login function from useAuth
        await login(formData);
        // Redirect to home page after successful login
        navigate('/');
      } catch (error) {
        console.error('Login error:', error);
        // Handle login errors here
        setErrors({ message: 'Invalid email or password' });
      }
    }
  };
  return (
    <>
      <div className="mini-header">
        {/* <img src="https://c7.alamy.com/comp/C041G1/thoughtful-young-poor-lower-caste-indian-street-girls-sisters-black-C041G1.jpg" alt="background-images"/> */}
        <button>Home</button><button>SignUp</button>   
        <p>Login</p>     
      </div>
    <div className="login-container">
      <div className="card">
        <img src="https://shorturl.at/yILN9" alt="Logo" className="logo" />
        <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {errors.email && <p className="error-message">{errors.email}</p>}
            <div className="input-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {errors.password && <p className="error-message">{errors.password}</p>}
            <button type="submit" className="login-button">Login</button>
            {errors.message && <p className="error-message">{errors.message}</p>}
          </form>
        <div className="signup-text">
          Don't have an account? <a href="/signup">Signup</a>
        </div>        
        <button className="google-login-button"> <FcGoogle className="goolge-icon"/> Login with Google</button>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
