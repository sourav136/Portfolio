import React from 'react';
import './AboutPage.css'
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';

const AboutPage = () => {
    return (
        <div>
            <div className="aboutpage">
                <About/>
                <Footer/>
            </div>
        </div>
    );
};

export default AboutPage;