import React from 'react';
import './Skills.css'
import Skill1 from '../../assets/Images/html.png'
import Skill2 from '../../assets/Images/css.png'
import Skill3 from '../../assets/Images/Bootstrap.png'
import Skill4 from '../../assets/Images/javascript.png'
import Skill5 from '../../assets/Images/react.png'
import Skill6 from '../../assets/Images/git.png'
import Skill7 from '../../assets/Images/github.png'

const Skills = () => {
    return (
        <div>
            <div className="skills">
                <div className="container skills-container">
                    <h2 className='skills-head'>Tech Stack</h2>
                    <div className="skills-display mt-5">
                        <div className="skill">
                            <div className="skill-image">
                                <img className='s-image' loading="lazy" src={Skill1} alt="" />
                            </div>
                            <div className="skill-text mt-3">
                                <p className='skill-name'>HTML</p>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-image">
                                <img className='s-image' loading="lazy" src={Skill2} alt="" />
                            </div>
                            <div className="skill-text mt-3">
                                <p className='skill-name'>CSS</p>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-image">
                                <img className='s-image' loading="lazy" src={Skill3} alt="" />
                            </div>
                            <div className="skill-text mt-3">
                                <p className='skill-name'>Bootstrap</p>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-image">
                                <img className='s-image' loading="lazy" src={Skill4} alt="" />
                            </div>
                            <div className="skill-text mt-3">
                                <p className='skill-name'>Javascript</p>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-image">
                                <img className='s-image' loading="lazy" src={Skill5} alt="" />
                            </div>
                            <div className="skill-text mt-3">
                                <p className='skill-name'>React</p>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-image">
                                <img className='s-image' loading="lazy" src={Skill6} alt="" />
                            </div>
                            <div className="skill-text mt-3">
                                <p className='skill-name'>Git</p>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-image">
                                <img className='s-image' loading="lazy" src={Skill7} alt="" />
                            </div>
                            <div className="skill-text mt-3">
                                <p className='skill-name'>Github</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;