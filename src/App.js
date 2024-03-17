import React from 'react';
import './App.css';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import About from './Components/About';
import Charity from './Components/Charity';
import Form1 from './Components/Form1';
import Money from './Components/Money';

function App() {
  return (
    <div>
      <Navbar />
      <About/>
      <Charity/>
      <Form1/>
      <Money/>
      <Footer />
    </div>
  );
}

export default App;
