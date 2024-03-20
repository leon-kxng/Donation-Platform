import React from 'react';
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaMapMarkerAlt, FaFacebookSquare, FaYoutube, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import '../css/Footer.css';

function Footer() {
  return (
    <div>
    <div className="image-list-container">
        <img src="https://i.pinimg.com/564x/65/d3/22/65d322377a7abedf08b15d54b42def66.jpg" alt="ge 1" className="image" />
        <img src="https://i.pinimg.com/564x/9e/59/56/9e59561b2b922a619b69ad8d5ffe045b.jpg" alt="ge 3" className="image" />
        <img src="https://i.pinimg.com/564x/cb/ce/00/cbce0046349364f322dcbc6fabb948f0.jpg" alt="ge 3" className="image" />
        <img src="https://i.pinimg.com/564x/19/3e/72/193e72396dfb018d334001fc2d280cb7.jpg" alt="ge 2" className="image" />
        <img src="https://i.pinimg.com/564x/24/6d/cd/246dcdb8de1ca79a461af792961cb7cc.jpg" alt="ge 3" className="image" />
        <img src="https://i.pinimg.com/236x/11/17/ce/1117cef05038260db4d3328f62fd1b8b.jpg" alt="ge 3" className="image" />
        <img src="https://i.pinimg.com/564x/e6/73/5f/e6735f272d196a0d1a0c5cf02d90d2b6.jpg" alt="ge 3" className="image" />
        {/* Add more images as needed */}
    </div>
    <div className="footer">
        <div className="main-footer">
            <div className="footer-header">
                <div className="logo-container">
                    <img src="https://shorturl.at/yILN9" alt="Onation.jpg"/>
                </div>

                <div className="footer-navlinks">
                    <ul>
                        <a className="foot-link" href="#">Home</a>
                        <a className="foot-link" href="#">About</a>
                        <a className="foot-link" href="#">Donation</a>
                        <a className="foot-link" href="#">Blog</a>
                        <a className="foot-link" href="#">Pages</a>
                        <a className="foot-link" href="#">Contact</a>
                    </ul>
                </div>

                <div className="footer-donate">
                    <button>Donate</button>
                </div>
            </div>


            <div className="footer-body">
                <div className="column-1">
                <h5 className="column-head">Explore Links</h5> 
                <div className="foot-links">
                        <a className="foot-link" href="#">About Company</a>
                        <a className="foot-link" href="#">Latest Projects</a>
                        <a className="foot-link" href="#">Latest Blog</a>
                        <a className="foot-link" href="#">Our stories</a>
                        <a className="foot-link" href="#">Our Mission</a>               
                    </div>
                </div>

                <div className="column-1">
                <h5 className="column-head">Get Support</h5> 
                <div className="foot-links">
                        <a className="foot-link" href="#">About</a>
                        <a className="foot-link" href="#">How it works</a>
                        <a className="foot-link" href="#">Knowledge Hub</a>
                        <a className="foot-link" href="#">Success Stories</a>
                        <a className="foot-link" href="#">Contact</a>                 
                    </div>
                </div>

                <div className="column-1">
                <h5 className="column-head">Contact Details</h5> 
                <div className="foot-links">
                        <a className="foot-link" href="#"><IoIosMail /> onation@gmail.com</a>
                        <a className="foot-link" href="#"><FaPhone /> (+88) 111-222-333</a>
                        <a className="foot-link" href="#"><FaMapMarkerAlt/> Tropical Cyclone, Volcano</a>                 
                    </div>
                </div>

                <div className="column-1">
                <h5 className="column-head">Projects</h5>
                <div className="projects-container">
                        <div className="projects-item">
                            <div className="projects-image">
                                <img src="https://shorturl.at/ioUV3" alt="projects" />
                            </div>
                            <div className="projects-details">
                                <p style={{color: 'orange'}}>12.Oct.2024</p>
                                <p >18 Best Charity Marketing Champions</p>
                            </div>
                        </div>

                        <div className="projects-item">
                            <div className="projects-image">
                                <img src="https://shorturl.at/ioUV3" alt="projects-image" />
                            </div>
                            <div className="projects-details">
                                <p style={{color: 'orange'}}>20.Oct.2024</p>
                                <p>Charity starts from home. You Can't Even Help</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-row">
                <p className="copyright-text">
                    Copyright © 2024 initTheme. All rights reserved.
                </p>
                <div className="footer-handles">
                    <FaFacebookSquare />
                    <FaYoutube />
                    <FaInstagramSquare />
                    <FaLinkedin />
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Footer;
