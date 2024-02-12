import React from 'react'
import Project from './Project'
import Project1Video from '../../Project_assets/W-think-elastic.mp4'
import Project2Video from '../../Project_assets/caraVideo.mp4'
import Project3Video from '../../Project_assets/ImdbApp.mp4'
import Project4Video from '../../Project_assets/weatherApp.mp4'


const ProjectParent = () => {
  const projectData1 = {
    title:'We Think Elastic',
    description:"'We Think Elastic,' is a showcase of my skills in web development and design. Utilizing GSAP animations and scroll triggers, the site offers a visually stunning and interactive experience. From captivating transitions to seamless navigation, every aspect of the website is crafted to engage visitors.",
    videoSource:Project1Video,
    websiteLink:'https://devanshi-bilthare.github.io/we-think-elastic/',
    sourceCode:'https://github.com/Devanshi-Bilthare/we-think-elastic'
}

    const projectData2 = {
        title:'Cara E-Commerce Website',
        description:'I crafted an advanced e-commerce site using React, seamlessly implementing Auth0 for secure authentication. Dynamic sorting enhances user experience, facilitating efficient product navigation. Leveraged APIs fetch and display comprehensive product details. Employed cutting-edge front-end technologies, adhering to industry best practices, ensuring a high-quality, responsive user interface. A showcase of technical prowess delivering a secure, intuitive, and visually appealing e-commerce platform',
        videoSource:Project2Video,
        websiteLink:'https://cara-ecom-store.netlify.app/',
        sourceCode:'https://github.com/Devanshi-Bilthare/imdb_app'
    }

    const projectData3 = {
        title:'IMDB App',
        description:'I created a compelling frontend with React.js, delivering an immersive user interface. Utilizing Firebase, I ensured secure user access and efficient data management for authentication and database functionalities. Developed a robust IMDB app that effortlessly retrieves and displays ratings for Upcoming, Top Rated, and Popular movies and web series. A fully functional website that seamlessly integrates advanced frontend design, secure authentication, and real-time IMDB data.',
        videoSource:Project3Video,
        websiteLink:'https://imdb-app1.netlify.app/',
        sourceCode:'https://github.com/Devanshi-Bilthare/imdb_app'
    }

    const projectData4 = {
      title:'Weather App',
      description:"Created a weather app using HTML, CSS, and JavaScript! you can search for the temperature humidity, wind speed, min/max temp, and current weather conditions for any city, state, or country. It's responsive too! Used a weather API for data retrieval.",
      videoSource:Project4Video,
      websiteLink:' https://devanshi-bilthare.github.io/weather-app/',
      sourceCode:'https://github.com/Devanshi-Bilthare/weather-app'
  }
  return (
    <div>
        <Project projectData={projectData1}/>
        <Project projectData={projectData2}/>
        <Project projectData={projectData3}/>
        <Project projectData={projectData4}/>
    </div>
    

  )
}

export default ProjectParent