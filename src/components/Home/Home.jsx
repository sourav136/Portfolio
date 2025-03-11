import React from 'react';
import "./Home.css"
import Logo from '../../assets/Images/Logo.png'
import HomeIllustration from '../../assets/Images/Website Creator-bro.svg'
import About from '../About/About';
import Works from '../Works/Works';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="container home-container">
                    <div className="row">
                        <div className="col-12 col-md-6 home-text-container">
                            <h1 className='home-h1'>Hi, I'm<span> Sourav Barua</span>.</h1>
                            <h2 className='home-h2'>Passionate <p className='home-p'>Frontend Developer</p> crafting modern, responsive, and user-friendly web applications with <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, and <span>React</span>.</h2>
                            <div className="buttons">
                                <a className='contact-button' href="">Contact Me</a>
                                <a className='resume-button' href="">Download Resume</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 home-image-container">
                            <img src={HomeIllustration} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <About/>
            <Works/>
            <Skills/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;