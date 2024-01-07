import React from 'react'
import Project from './Project'
import Project1Video from '../../Project_assets/caraVideo.mp4'
import Project2Video from '../../Project_assets/ImdbApp.mp4'


const ProjectParent = () => {
    const projectData1 = {
        title:'Cara E-Commerce Website',
        description:'I crafted an advanced e-commerce site using React, seamlessly implementing Auth0 for secure authentication. Dynamic sorting enhances user experience, facilitating efficient product navigation. Leveraged APIs fetch and display comprehensive product details. Employed cutting-edge front-end technologies, adhering to industry best practices, ensuring a high-quality, responsive user interface. A showcase of technical prowess delivering a secure, intuitive, and visually appealing e-commerce platform',
        videoSource:Project1Video,
        websiteLink:'https://cara-ecom-store.netlify.app/',
        sourceCode:'https://github.com/Devanshi-Bilthare/imdb_app'
    }

    const projectData2 = {
        title:'IMDB App',
        description:'I created a compelling frontend with React.js, delivering an immersive user interface. Utilizing Firebase, I ensured secure user access and efficient data management for authentication and database functionalities. Developed a robust IMDB app that effortlessly retrieves and displays ratings for Upcoming, Top Rated, and Popular movies and web series. A fully functional website that seamlessly integrates advanced frontend design, secure authentication, and real-time IMDB data.',
        videoSource:Project2Video,
        websiteLink:'https://imdb-app1.netlify.app/',
        sourceCode:'https://github.com/Devanshi-Bilthare/imdb_app'
    }
  return (
    <div>
        <Project projectData={projectData1}/>
        <Project projectData={projectData2}/>
    </div>
    

  )
}

export default ProjectParent