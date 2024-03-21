import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (formData) => {
    try {
      const response = await axios.post('/signup', formData);
      const { access_token } = response.data;
      setUser(access_token);
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
    
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post('/login', { email, password });
      const { access_token } = response.data;
      setUser(access_token);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem('accessToken'); // Assuming the token is stored as 'accessToken' in session storage
  };

  const refresh = async () => {
    try {
      const response = await axios.post('/refresh');
      const { access_token } = response.data;
      setUser(access_token);
    } catch (error) {
      console.error('Refresh token error:', error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signup, login, logout, refresh }}>
      {children}
    </AuthContext.Provider>
  );
};
