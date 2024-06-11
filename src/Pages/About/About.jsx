import React from 'react'
// import Button from '../../Components/Button/Button'
import "./About.css"
import htmlIcon from '../../project-assets/icons8-html-50.png'
import cssIcon from '../../project-assets/icons8-css-32.png'
import javaScript from '../../project-assets/icons8-javascript-50.png'
import reactIcon from '../../project-assets/icons8-react-24.png'
import reduxIcon from '../../project-assets/icons8-redux-50.png'
import nodeIcon from '../../project-assets/icons8-nodejs-32.png'
import expressIcon from '../../project-assets/icons8-express-js-50.png'
import bootstrapIcon from '../../project-assets/icons8-bootstrap-50.png'
import tailwindIcon from '../../project-assets/icons8-tailwind-css-24.png'
import postmanIcon from '../../project-assets/icons8-postman-api-64.png'
import gitIcon from '../../project-assets/icons8-git-logo-50.png'
import mongodbIcon from '../../project-assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-24.png'
import vscodeIcon from '../../project-assets/icons8-vs-code-50.png'
import javaIcon from '../../project-assets/icons8-java-50.png'
import Footer from '../../Components/Footer/Footer'
const About = () => {
  
  return (
    <div id="about">
          <p>I'm Devanshi Bilthare, a final year BCA student and MERN Stack developer passionate about creating visually compelling digital solutions. With problem-solving skills and a love for art and functionality, I weave intricate code structures for seamless user experiences. Excited for new opportunities, I'm ready to collaborate on innovative projects.</p>
            <div className="skills">
                <h2>Development Skills : </h2>
                <div className="skill_btns">
                    <button><img src={htmlIcon} alt="" />HTML</button>
                    <button><img src={cssIcon} alt="" />CSS</button>
                    <button><img src={javaScript} alt="" />JavaScript</button>
                    <button><img src={reactIcon} alt="" />React</button>
                    <button><img src={reduxIcon} alt="" />Redux</button>
                    <button><img src={nodeIcon} alt="" />Node</button>
                    <button><img src={expressIcon} alt="" />Express</button>
                    <button><img src={bootstrapIcon} alt="" />BootStrap</button>
                    <button><img src={tailwindIcon} alt="" />Tailwind</button>
                    
                    
                    
                </div>
                <h2>Tools and Technologies:</h2>
                <div className='skill_btns'>
                    <button><img src={postmanIcon} alt="" />Postman</button>
                    <button><img src={mongodbIcon} alt="" />Mongo DB</button>
                    <button><img src={vscodeIcon} alt="" />vscode</button>
                    <button><img src={gitIcon} alt="" />Git</button>
                    {/* <button><img src={vscodeIcon} alt="" /></button> */}
                    
                </div>
                <h2>Languages and Other skills</h2>
                <div className="skill_btns">
                <button><img src={javaIcon} alt="" />Java</button>
                <button><img src={javaScript} alt="" />JavaScript</button>
                <button>Problem solving</button>
                <button>DSA</button>
                </div>
                <h2>LeetCode Stats</h2>
           <img className='leetcode' src="https://leetcard.jacoblin.cool/Devanshi_Bilthare?theme=light&ext=heatmap" alt="LeetCode stats card" />
            </div>
            
           
            
            <Footer/>
        </div>
  )
}

export default About