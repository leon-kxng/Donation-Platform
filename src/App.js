import React from 'react';
import './App.css';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import About from './Components/About';
import Charity from './Components/Charity';

function App() {
  return (
    <div>
      <Navbar />
      <About/>
      <Charity/>
      <Footer />
    </div>
  );
}

export default App;
