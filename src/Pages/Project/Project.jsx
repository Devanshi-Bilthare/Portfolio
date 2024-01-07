import React from 'react'
import "./Project.css"
import Button from '../../Components/Button/Button'

const Project = ({projectData}) => {
    const { title, description, videoSource, websiteLink, sourceCode } = projectData;
  return (
    <div id="projects">
    <div className="project_content">
        <div className="project_video">
            <video loop controls muted src={videoSource}></video>
        </div>
        <div className="project_des">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project_links">
                <a href={websiteLink}><Button>Visit Website</Button></a>
                <a href={sourceCode}><Button>Source Code</Button></a>
            </div>
        </div>
    </div>
    
</div>
  )
}

export default Project