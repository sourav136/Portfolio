import React from 'react';
import './AboutPage.css'
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Skills from './../../components/Skills/Skills';

const AboutPage = () => {
    return (
        <div>
            <div className="aboutpage">
                <About/>
                <Skills/>
                <Footer/>
            </div>
        </div>
    );
};

export default AboutPage;