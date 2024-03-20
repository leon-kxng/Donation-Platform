import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import { useAuth } from '../AuthContext'; // Import your authentication context
import '../css/SignUp.css'; // Import CSS file for styling
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',    
  });

  const [errors, setErrors] = useState({});
  const [isKenyan, setIsKenyan] = useState(false); // Separate state for isKenyan

  // Get the signup function from the authentication context
  const { signup } = useAuth();
  const navigate = useNavigate(); // Get the navigate function for redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }  

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation
    const newErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
  
    // Submit the form if there are no errors
    if (Object.keys(newErrors).length === 0) {
      try {
        // Call the signup function from the authentication context
        await signup(formData);
        // Redirect to a different route upon successful signup
        navigate('/'); // Redirect to the home page
      } catch (error) {
        console.error('Signup error:', error);
        // Handle signup errors here
        if (error.response && error.response.data && error.response.data.message === 'User already exists') {
          setErrors({ userExists: 'User already exists' });
        } else {
          setErrors({ message: 'Failed to sign up' });
        }
      }
    }
  };
  
  

  return (
    <>
      <div className="mini-header">
        {/* <img src="https://c7.alamy.com/comp/C041G1/thoughtful-young-poor-lower-caste-indian-street-girls-sisters-black-C041G1.jpg" alt="background-images"/> */}
        <button>Home</button><button>Login</button>   
        <p>SignUp</p>     
      </div>
    <div className="login-container">
      <div className="card">
        <img src="https://shorturl.at/yILN9" alt="Logo" className="logo" />
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">UserName:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your UserName"
              value={formData.username}
              onChange={handleChange}
              />
            {errors.username && <p className="error-message">{errors.username}</p>}
          </div>
          <div className="input-group">
              <label htmlFor="isKenyan">Are you Kenyan?</label>
              <div className="kenyan-buttons">
                <button
                  className={isKenyan ? "kenyan-button active" : "kenyan-button"}
                  onClick={() => setIsKenyan(true)}
                >
                  Yes
                </button>
                <button
                  className={!isKenyan ? "kenyan-button active" : "kenyan-button"}
                  onClick={() => setIsKenyan(false)}
                >
                  No
                </button>
              </div>
              {isKenyan && (
                <motion.div
                  className="phone-input"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter phone number"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                  />
                </motion.div>
              )}
            </div>
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
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
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
            {errors.password && <p className="error-message">{errors.password}</p>}
          </div>
          <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              />
            {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
          </div>

          <button type="submit" className="login-button">SignUp</button>
        {errors.userExists && <p className="error-message">{errors.userExists}</p>}
        </form>
        <div className="signup-text">
          Don't have an account? <a href="/login">Login</a>
        </div>        
        <button className="google-login-button"> <FcGoogle className="goolge-icon"/> SignUp with Google</button>
      </div>
    </div>
    </>
  );
};

export default SignUp;
