// Navbar.js
import React from 'react';
import { BiUser } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { IoMenu } from "react-icons/io5";
import './NavBar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#"><img src="/logo.png" alt="Onation.png"/></a>
        
        
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <a className="nav-link" href="/">Home <span className="arrow">&darr;</span></a>
            <a className="nav-link" href="/about">About <span className="arrow">&darr;</span></a>
            <a className="nav-link" href="/donation">Donation <span className="arrow">&darr;</span></a>
            <a className="nav-link" href="#">Blog <span className="arrow">&darr;</span></a>
            <a className="nav-link" href="#">Pages <span className="arrow">&darr;</span></a>
            <a className="nav-link" href="/contactUs">Contact Us <span className="arrow">&darr;</span></a>
          </ul>
        </div>
        
        {/* Buttons for large screens */}
        <div className="d-flex justify-content-end align-items-center navbar-buttons">
          {/* <button className="btn btn-success"><BsSearch /></button> */}
          <button className="btn btn-primary">Login</button>
          {/* <BiUser className="user-profile-icon" /> */}
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
