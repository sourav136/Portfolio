import React from 'react';
import './Footer.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="social-container m-auto">
                        <div className="social-icon-container">
                            <a href="https://www.linkedin.com/in/sourav-barua-991284338/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='social-icon'/></a>
                        </div>
                        <div className="social-icon-container">
                            <a href="https://www.facebook.com/sourav.barua.669911/" target="_blank" rel="noopener noreferrer"><FaFacebookF  className='social-icon'/></a>
                        </div>
                        <div className="social-icon-container">
                            <a href="https://github.com/sourav136/" target="_blank" rel="noopener noreferrer"><FaGithub   className='social-icon'/></a>
                        </div>
                        <div className="social-icon-container">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=souravbarua789bd@gmail.com&su=Let's%20Connect&body=Hi%20Sourav,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!" target="_blank" rel="noopener noreferrer">
                                <BiLogoGmail className='social-icon'/>
                            </a>

                        </div>
                    </div>
                </div>
                        <p className='copyright'>© 2025 Sourav Barua. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;