import React from 'react'
import AnimatedProject from './AnimatedProject'
import FrontendProject from './FrontendProject'
import LandingPages from './LandingPages'



const ProjectParent = () => {

  return (
    <div>
        <FrontendProject/>
        <AnimatedProject/>
        <LandingPages/>
       
    </div>
    

  )
}

export default ProjectParent