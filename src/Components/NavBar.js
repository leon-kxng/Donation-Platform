import React from 'react';
import './NavBar.css';

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <div className="navbar-links">
                <a href="#">Home</a>
                <a href="#">Donation</a>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
            </div>
            <div className="navbar-actions">
                <div className="navbar-search">
                    <input type="text" placeholder="Search..." />
                    <button>Search</button>
                </div>
                <button className="login-button">Login</button>
            </div>
        </nav>
    );
}

export default Navbar;
