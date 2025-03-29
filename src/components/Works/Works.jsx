import React from 'react';
import './Works.css'
import Project1 from '../../assets/Images/Aytor-01.png'
import Project2 from '../../assets/Images/Space-tourism-01.png'
import Project3 from '../../assets/Images/IP-Address-Tracker-01.png'
import Project4 from '../../assets/Images/Portfolio-clone-01.png'

const Works = () => {
    return (
        <div>
            <div className="works">
                <div className="container work-container">
                    <h2 className='project-head'>My Projects</h2>
                    <div className="project-card-container row">
                        <div className="col-12 col-md-5">
                            <div className="project-card w-100">
                                <img src={Project1} className='project-image d-block w-100' alt="" />
                                <div className="project-contents">
                                    <p className='project-p'>A feature-rich, responsive e-commerce platform with seamless navigation, product browsing, cart, and wishlist.</p>
                                    <div className="project-buttons-container">
                                        <a className='project-link live-demo-button' href="https://aytor-ecommerce-website.netlify.app/" target='_blank'>Live Demo</a>
                                        <a className='project-link git-repo-button' href="https://github.com/sourav136/Aytor_E-Commerce.git" target='_blank'>Github Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="project-card w-100">
                                <img src={Project2} className='project-image d-block w-100' alt="" />
                                <div className="project-contents">
                                    <p className='project-p'>An interactive, fully responsive space exploration site with a dynamic planet slider and engaging UI.</p>
                                    <div className="project-buttons-container">
                                        <a className='project-link live-demo-button' href="https://space-tourism-website-sourav136.netlify.app/" target='_blank'>Live Demo</a>
                                        <a className='project-link git-repo-button' href="https://github.com/sourav136/Space_Tourism_Website.git" target='_blank'>Github Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="project-card w-100">
                                <img src={Project3} className='project-image d-block w-100' alt="" />
                                <div className="project-contents">
                                    <p className='project-p'>A real-time, responsive IP tracker fetching geolocation data and displaying it on a live interactive map.</p>
                                    <div className="project-buttons-container">
                                        <a className='project-link live-demo-button' href="https://ip-address-tracker-sourav136.netlify.app/" target='_blank'>Live Demo</a>
                                        <a className='project-link git-repo-button' href="https://github.com/sourav136/IP_Address_Tracker.git" target='_blank'>Github Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5">
                            <div className="project-card w-100">
                                <img src={Project4} className='project-image d-block w-100' alt="" />
                                <div className="project-contents">
                                    <p className='project-p'>A modern, responsive portfolio replica with smooth animations and a user-friendly UI.</p>
                                    <div className="project-buttons-container">
                                        <a className='project-link live-demo-button' href="https://souravbaruaportfolioclone.netlify.app/" target='_blank'>Live Demo</a>
                                        <a className='project-link git-repo-button' href="https://github.com/sourav136/Portfolio-Clone.git" target='_blank'>Github Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;