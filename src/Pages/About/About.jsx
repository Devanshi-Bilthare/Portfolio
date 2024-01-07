import React from 'react'
import Button from '../../Components/Button/Button'
import "./About.css"

const About = () => {
  return (
    <div id="about">
            {/* <h2>About Me</h2> */}
            <p>Welcome to my digital space! I'm Devanshi Bilthare, a final year BCA student and passionate <span>frontend developer</span>. My fascination with creating visually compelling and user-centric digital solutions propels me into the ever-evolving realm of <span>web development</span>.</p>
            <p>In my pursuit of excellence, I've cultivated a strong <span>problem-solving</span> mindset, tackling various challenges that come my way. Beyond the technicalities, my passion lies in the delicate balance of art and functionality. I take pride in weaving together intricate code structures to craft seamless and delightful user experiences.</p>
            <p>As I navigate my final year of BCA, I find joy in translating my theoretical knowledge into practical, real-world applications. Every project becomes an opportunity to learn, grow, and contribute to the vast landscape of technology.</p>
            <p>I'm currently <span>open for new opportunities</span> and excited to collaborate on innovative projects. Join me on this exciting journey as I combine creativity, precision, and a love for coding to shape the digital future. Let's build something amazing together!</p>
            <div className="skills">
                <h2>Skills</h2>
                <div className="skill_btns">
                    <Button>HTML5</Button>
                    <Button>CSS3</Button>
                    <Button>React.Js</Button>
                    <Button>Redux.Js</Button>
                    <Button>Node.Js</Button>
                    <Button>Express.Js</Button>
                    <Button>Responsive Design</Button>
                    <Button>JavaScript(ES6+)</Button>
                    <Button>Core Java</Button>
                    <Button>Data structures</Button>
                    <Button>Algorithms</Button>
                    <Button>GIT</Button>
                    <Button>GitHub</Button>
                </div>
            </div>
        </div>
  )
}

export default About