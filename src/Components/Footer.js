import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer-separator"></div>
            <footer className="footer-container">
                <div className="footer-nav">
                    <div className="footer-links-container">
                        <a href="#">Home</a>
                        <a href="#">Donation</a>
                        <a href="#">About</a>
                        <a href="#">Blog</a>
                    </div>
                    <div className="donate-button-container">
                        <button className="donate-button">Donate</button>
                    </div>
                </div>
                <div className="footer-section">
                    <h2>Explore Links</h2>
                    <p>About Company</p>
                    <p>Latest Projects</p>
                    <p>Latest Blog</p>
                    <p>Our Testimonials</p>
                    <p>Our Mission</p>
                </div>
                <div className="footer-section">
                    <h2>Get Support</h2>
                    <p>About</p>
                    <p>How it Works</p>
                    <p>Knowledge Hub</p>
                    <p>Success Stories</p>
                    <p>Contact</p>
                </div>
                <div className="footer-section">
                    <h2>Contact</h2>
                    <p>donation@gmail.com</p>
                    <p>(+88) 111-222-333</p>
                    <p>Tropical Cyclone, Volcano</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
