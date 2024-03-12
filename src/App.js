import React, { useState } from 'react';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Signup from './Components/Signup'; 
import './App.css';
import About from './Components/About';
import Charity from './Components/Charity';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };
  return (
    <div>
      <Navbar />
      <div className="app-container">
        {showLogin ? <Login /> : <Signup />}
        <p>
          {showLogin
            ? "Don't have an account? "
            : 'Already have an account? '}
          <span onClick={toggleForm}>
            {showLogin ? 'Register here' : 'Login here'}
          </span>
        </p>
      </div>
      <About/>
      <Charity/>
      <Footer />
    </div>
  );
}

export default App;