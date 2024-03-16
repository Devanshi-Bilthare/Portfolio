import React from 'react'
import AnimatedProject from './AnimatedProject'
import FrontendProject from './FrontendProject'
import LandingPages from './LandingPages'
import Footer from '../../Components/Footer/Footer'



const ProjectParent = () => {

  return (
    <div>
        <FrontendProject/>
        <AnimatedProject/>
        <LandingPages/>
       <Footer/>
    </div>
    

  )
}

export default ProjectParent