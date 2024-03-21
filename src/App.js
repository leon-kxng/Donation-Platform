import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import About from './Components/About';
import CharityPage from './Components/CharityPage'
import DonationPages from './Components/DonationPages'
import BlogPage from './Components/BlogPage';
import ContactUs from './Components/ContactUs'


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/charityPage" element={<CharityPage />} />
          <Route path='/Donation' element={<DonationPages />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/ContactUs' element={<ContactUs />} />


         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
