import React from 'react';
import "./Home.css"
import HomeIllustration from '../../assets/Images/Website Creator-bro.svg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="container home-container">
                    <div className="row home-row">
                        <div className="col-12 col-md-6 home-text-container d-flex align-items-center justify-content-center flex-column">
                            <h1 className='home-h1'>Hi, I'm<span> Sourav Barua</span>.</h1>
                            <h2 className='home-h2'>Passionate <p className='home-p'>Frontend Developer</p> crafting modern, responsive, and user-friendly web applications with <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, and <span>React</span>.</h2>
                            <div className="buttons">
                                <Link className='contact-button' to="/contact">Contact Me</Link>
                                <a className='resume-button' href="https://drive.google.com/uc?export=download&id=1jXlUejp6iv-4KvhG2qmnsWb06EKE5Y76">Download Resume</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 home-image-container">
                            <img src={HomeIllustration} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;