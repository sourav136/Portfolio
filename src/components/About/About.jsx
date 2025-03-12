import React from 'react';
import "./About.css"

const About = () => {
    return (
        <div>
            <div className="about">
                <div className="container">
                    <div className="about-container animated-about mx-auto">
                        <h2 className='about-h2 animated-about'>About Me</h2>
                        <p className='about-p animated-about'>"Hey, I’m Sourav Barua, a passionate <span>frontend developer</span> with a strong foundation in <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>, and <span>React</span>. I love crafting <span>clean</span>, <span>responsive</span>, and <span>user-friendly</span> web applications. My goal is to continuously improve my skills and build impactful digital experiences.

                        I am currently working on deepening my expertise in modern frontend development, focusing on writing scalable, maintainable code and enhancing performance optimization techniques. I also enjoy exploring UI/UX best practices to create intuitive and engaging user experiences.

                        I’m <span>actively looking for remote frontend roles</span> where I can contribute, learn, and grow in a collaborative environment. If you’re looking for a <span>dedicated developer</span> to bring your ideas to life, let’s connect!"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;