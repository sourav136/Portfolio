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
                        <label htmlFor="name" className="visually-hidden">Name</label>
                        <input className='contact-input' type="text" id="name" name="name" placeholder="Name" required autoComplete='name' />

                        <label htmlFor="email" className="visually-hidden">Email</label>
                        <input className='contact-input' type="email" id="email" name="email" placeholder="Email Address" required autoComplete='email' />

                        <label htmlFor="subject" className="visually-hidden">Subject</label>
                        <input className='contact-input' type="text" id="subject" name="subject" placeholder="Subject" required autoComplete='off' />

                        <label htmlFor="message" className="visually-hidden">Message</label>
                        <textarea className='contact-textarea' id="message" name="message" placeholder="Your message" required autoComplete='off'></textarea>

                        <button className='submit-button' type="submit">Send Message</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ContactPage;