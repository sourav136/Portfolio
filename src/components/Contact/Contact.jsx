import React from 'react';
import "./Contact.css"
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <div className="contact">
                <div className="container d-flex align-items-center justify-content-center flex-column">
                    <p className='contact-p mb-4'>"Let's Build Engaging & Scalable Web Experiences"</p>
                    <Link className='contact-now' to="/contact">Connect Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Contact;