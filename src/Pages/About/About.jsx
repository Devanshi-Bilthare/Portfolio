import React from 'react'
// import Button from '../../Components/Button/Button'
import "./About.css"
import reduxIcon from '../../project-assets/icons8-redux-50.png'
import nodeIcon from '../../project-assets/icons8-nodejs-32.png'
import expressIcon from '../../project-assets/icons8-express-js-50.png'
import gitIcon from '../../project-assets/icons8-git-logo-50.png'
import mongodbIcon from '../../project-assets/icons8-mongodb-a-cross-platform-document-oriented-database-program-24.png'
import vscodeIcon from '../../project-assets/icons8-vs-code-50.png'

const About = () => {
  // const skills = ["ri-java-fill","ri-javascript-fill","ri-nodejs-fill","ri-reactjs-fill","ri-html5-line","ri-css3-line","Responsive Design","JavaScript(ES6+)","Core Java","Data structures","Algorithms","GIT","GitHub","Postman"]
  return (
    <div id="about">
          <p>I'm Devanshi Bilthare, a final year BCA student and frontend developer passionate about creating visually compelling digital solutions. With problem-solving skills and a love for art and functionality, I weave intricate code structures for seamless user experiences. Excited for new opportunities, I'm ready to collaborate on innovative projects.</p>
            <div className="skills">
                <h2>Skills</h2>
                <div className="skill_btns">
                    {/* {
                      skills.map((btn)=>(
                        // <button>{btn}</button>
                        <button><i className={btn}></i></button>
                      ))
                    } */}

                    <button><i class="ri-java-fill"></i></button>
                    <button><i class="ri-javascript-fill"></i></button>
                    <button><i class="ri-reactjs-fill"></i></button>
                    <button><img src={reduxIcon} alt="" /></button>
                    <button><img src={nodeIcon} alt="" /></button>
                    <button><img src={expressIcon} alt="" /></button>
                    <button><i class="ri-html5-fill"></i></button>
                    <button><i class="ri-css3-fill"></i></button>
                    <button><img src={gitIcon} alt="" /></button>
                    <button><img src={mongodbIcon} alt="" /></button>
                    {/* <button><img src={vscodeIcon} alt="" /></button> */}
                </div>
            </div>
        </div>
  )
}

export default About