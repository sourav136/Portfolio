import React from 'react';
import './Nav.css'
import { Link, useLocation } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { FaFolderOpen } from "react-icons/fa";
import Logo from '../../assets/Images/Logo.png'

const Nav = () => {
    const location= useLocation();
    return (
        <div>
            <div className="navbar-container">
                <div className="nav">
                    <div className="nav-container">
                        <Link alt='Go to Home section' to="/" className="navbar-link"><FaHome className={`nav-icon ${location.pathname === '/' ? 'active' : ''}`}/></Link>
                        <Link alt='Learn more about me' to="/about" className='navbar-link'><FaUser className={`nav-icon ${location.pathname === '/about' ? 'active' : ''}`}/></Link>
                        <img src={Logo} className='logo-main' alt="" />
                        <Link alt='Contact me' to="/contact" className='navbar-link'><GrContact  className={`nav-icon ${location.pathname === '/contact' ? 'active' : ''}`}/></Link>
                        <Link alt='View my projects' to="/works" className='navbar-link'><FaFolderOpen className={`nav-icon ${location.pathname === '/works' ? 'active' : ''}`}/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;