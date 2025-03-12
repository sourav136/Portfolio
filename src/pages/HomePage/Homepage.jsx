import React from 'react';
import './Homepage.css'
import About from '../../components/About/About';
import Works from './../../components/Works/Works';
import Skills from './../../components/Skills/Skills';
import Contact from './../../components/Contact/Contact';
import Footer from './../../components/Footer/Footer';
import Home from '../../components/Home/Home';

const Homepage = () => {
    return (
        <div>
            <div className="homepage">
                <Home/>
                <About/>
                <Works/>
                <Skills/>
                <Contact/>
                <Footer/>
            </div>
        </div>
    );
};

export default Homepage;