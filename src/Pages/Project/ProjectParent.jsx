import React from 'react'
import AnimatedProject from './AnimatedProject'
import FrontendProject from './FrontendProject'
import LandingPages from './LandingPages'
import Footer from '../../Components/Footer/Footer'
import BackendProject from './BackendProject'




const ProjectParent = () => {

  return (
    <div>
        <FrontendProject/>
        <AnimatedProject/>
        <BackendProject/>
        <LandingPages/>
       <Footer/>
    </div>
    

  )
}

export default ProjectParent