import React from 'react'
import projectData from './ProjectData';

const LandingPages = () => {
    return (
        <div id="projects">
                <h1>Landing Pages</h1>
            <div className="projects_container projects_container_landing">
            {projectData.map((project, index) => (
                project.type === 'landing' ? (
                   <img className='landing-img' src={project.img} alt="" />
                ) : null 
            ))}
            </div>
        </div>
      );
}

export default LandingPages