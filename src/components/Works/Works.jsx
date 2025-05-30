import React from 'react';
import './Works.css'
import {projectList} from './projectsList'

const Works = () => {
    return (
        <div>
            <div className="works">
                <div className="container work-container">
                    <h2 className='project-head'>My Projects</h2>
                    <div className="project-card-container row">
                        {
                            projectList.map((project) => (
                                <div className="col-12 col-md-5" key={project.id}>
                                    <div className="project-card w-100">
                                        <img src={project.img} className='project-image d-block w-100' alt="" />
                                        <div className="project-contents">
                                            <p className='project-p'>{project.description}</p>
                                            <div className="project-buttons-container">
                                                <a className='project-link live-demo-button' href={project.liveLink} target='_blank' rel="noopener noreferrer">Live Demo</a>
                                                <a className='project-link git-repo-button' href={project.githubLink} target='_blank' rel="noopener noreferrer">Github Repo</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;