import React from 'react';
import './ContactPage.css'
import Footer from '../../components/Footer/Footer';

const ContactPage = () => {
    return (
        <div>
            <div className="contactpage">
                <div className="container contactpage-container">
                    <h2 className='contact-form-head'>Send a message</h2>
                    <form action="https://formsubmit.co/souravbarua789bd@gmail.com" method="POST">
                        <input className='contact-input' type="text" name="name" placeholder="Name" required/>
                        <input className='contact-input' type="email" name="email" placeholder="Email Address" required/>
                        <input className='contact-input' type="text" name="subject" placeholder="Subject" required/>
                        <textarea className='contact-textarea' name="message" placeholder="Your message" required></textarea>
                        <button className='submit-button' type="submit">Send Message</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ContactPage;