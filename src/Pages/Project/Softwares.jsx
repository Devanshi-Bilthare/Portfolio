import React from 'react'
import projectData from './ProjectData';

function Softwares() {
  return (
    <div id="projects">
    <h1>MERN Projects</h1>
<div className="projects_container">
{projectData.map((project, index) => (
    project.type === 'software' ? (
        
        <div className="proj" key={index}>
            <img src={project.img} alt="" />
            {project.status === 'inprogress' ? <div className="progress">Coming Soon</div>:''}
            <h2>{project.projName}</h2>
            <div className="project_links">
                <a href={project.live}>Live</a>
                <a href={project.github}>User Guide</a>
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
  )
}

export default Softwares
