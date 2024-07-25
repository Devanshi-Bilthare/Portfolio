import React from 'react'
import projectData from './ProjectData';

const FrontendProject = () => {
    return (
        <div id="projects">
                <h1>Frontend Projects</h1>
            <div className="projects_container">
            {projectData.map((project, index) => (
                project.type === 'frontend' ? (
                    
                    <div className="proj" key={index}>
                        <img src={project.img} alt="" />
                        <h2>{project.projName}</h2>
                        <div className="project_links">
                            <a href={project.live}>Live</a>
                            <a href={project.github}>GitHub</a>
                        </div>
                        <div className="btns">
                           
                            {project.skilused.map((skill, index) => (
                                <button key={index}>{skill}</button>
                            ))}
                        </div>
                        <p>{project.disc.slice(0,250)}...</p>
                    </div>
                ) : null 
            ))}
            </div>
        </div>
      );
}

export default FrontendProject