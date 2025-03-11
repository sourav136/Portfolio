import React from 'react';
import './Works.css'
import Project1 from '../../assets/Images/E-commerce.png'
import Project2 from '../../assets/Images/portfolio-demo.png'

const Works = () => {
    return (
        <div>
            <div className="works">
                <div className="container work-container">
                    <h2 className='project-head'>My Projects</h2>
                    <div className="project-card-container">
                        <div className="project-card col-12 col-md-5">
                            <div className="project-image project-1">
                                <img src={Project1} className='p-image' alt="" />
                            </div>
                            <div className="project-text">
                                <h3 className='project-card-h3'>Aytor</h3>
                                <p className='project-card-p'>A responsive e-commerce platform with product listings, a shopping cart, and a wishlist feature, built using React and Bootstrap</p>
                                <div className="project-buttons-container">
                                    <a className='live-demo-button' target="_blank" rel="noopener noreferrer" href="https://aytor-ecommerce-website.netlify.app/">Live Demo</a>
                                    <a className='git-repo-button' target="_blank" rel="noopener noreferrer" href="https://github.com/sourav136/Aytor_E-Commerce.git">Github Repo</a>
                                </div>
                            </div>
                        </div>
                        <div className="project-card col-12 col-md-5">
                            <div className="project-image project-2">
                                <img src={Project2} className='p-image' alt="" />
                            </div>
                            <div className="project-text">
                                <h3 className='project-card-h3'> Portfolio Website Clone</h3>
                                <p className='project-card-p'> A meticulously crafted replica of a modern portfolio website, showcasing clean UI design, responsive layouts, and smooth animations.</p>
                                <div className="project-buttons-container">
                                    <a className='live-demo-button' target="_blank" rel="noopener noreferrer" href="https://souravbaruaportfolioclone.netlify.app/">Live Demo</a>
                                    <a className='git-repo-button' target="_blank" rel="noopener noreferrer" href="https://github.com/sourav136/Portfolio-Clone.git">Github Repo</a>
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