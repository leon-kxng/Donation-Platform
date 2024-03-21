// Navbar.js
import React, { useState } from 'react';
import { FaAirbnb, FaHome, FaBell, FaBook, FaUser } from 'react-icons/fa';
import { MdDashboard } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { IoMenu } from "react-icons/io5";
import '../css/NavBar.css';

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLinkClick = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
  };
  

  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <a className="navbar-brand" href="#"><img src="/logo.png" alt="Onation.png"/></a>        
        
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <a className="nav-link" href="/">Home <span className="arrow">&darr;</span></a>
            <a className="nav-link" href="/about">About <span className="arrow">&darr;</span></a>
            <a className="nav-link" href="/donation">Donation <span className="arrow">&darr;</span></a>

            <a className="nav-link" href="/blog">Blog <span className="arrow">&darr;</span></a>
            {/* <a className="nav-link" href="#">Pages <span className="arrow">&darr;</span></a>      */}

             {/* <a className="nav-link" href="/blog">Blog <span className="arrow">&darr;</span></a> */}
             {/* <a className="nav-link" href="/blog">Blog <span className="arrow">&darr;</span></a> */}

             <a className="nav-link" href="/ContactUs">Contact Us<span className="arrow">&darr;</span></a>
          </ul>
        </div>
        
        <div className="navbar-right d-flex justify-content-end align-items-center navbar-buttons">
          <Link to='/login'><button className='btn btn-primary login-btn'>Login</button></Link> <span className='separator'> / </span>
          <Link to='/signup'><button className='btn btn-primary login-btn'>Sign Up</button></Link>
          <div className="user-profile" onClick={toggleDropdown}>
            <FiMenu className='menu-icon' />
            <CgProfile className="profile-icon" />

            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/" onClick={() => handleLinkClick('')}><FaHome /> Home</Link>
                <Link to="/dashboard" onClick={() => handleLinkClick('Please sign in or login to get access to the dashboard.')}><MdDashboard /> Dashboard</Link>
                <Link to="/notifications" onClick={() => handleLinkClick('Please sign in or login to view notifications.')}><FaBell /> Notifications</Link>
                <Link to="/booking/:id" onClick={() => handleLinkClick('Please sign in or login to view bookings.')}><FaBook /> Charities</Link>
                <Link to="/Account" onClick={() => handleLinkClick('Please sign in or login to view account details.')}><FaUser /> Account</Link>
                <Link to="/adminPage" onClick={() => handleLinkClick('')}><CiLogout className='log-out-icon' /> Logout</Link>
                <Link to="/logout" onClick={() => handleLinkClick('')}><CiLogout className='log-out-icon' /> Logout</Link>
              </div>
            )}
          </div>             
        </div>
        {/* Toggler button for small screens */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><IoMenu/></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

