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
  const skills = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: javaScript },
    { name: "React", icon: reactIcon },
    { name: "Redux", icon: reduxIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "Express", icon: expressIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "Tailwind", icon: tailwindIcon },
    { name: "Postman", icon: postmanIcon },
    { name: "Mongo DB", icon: mongodbIcon },
    { name: "VS Code", icon: vscodeIcon },
    { name: "Git", icon: gitIcon },
    { name: "Java", icon: javaIcon },
    { name: "Problem Solving" },
    { name: "DSA" },
  ];

  return (
    <div id="about">
      {/* Intro Section */}
      <section className="intro">
        <p>
          Hi, I'm <strong>Devanshi Bilthare</strong>, a passionate software
          developer and a first-year Master's in Computer Applications (MCA)
          student. With a strong foundation in both frontend and backend
          development, I enjoy building intuitive, responsive, and real-time web
          applications that solve real-world problems.
          <br/>
          I thrive on challenges, embodying a <em>never-give-up attitude</em> and
          a consistent learning mindset. My journey has been shaped by hands-on
          experiences, collaborations, and a drive to constantly improve my
          skills in software development, particularly with the MERN stack.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skill-btns">
          {skills.map((skill, index) => (
            <button key={index}>
              {skill.icon && <img src={skill.icon} alt={skill.name} />}
              {skill.name}
            </button>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience">
        <h2>Experience</h2>

        <div>
          <h3>Frontend Developer Intern (3 months)</h3>
          <ul>
            <li>
              Worked on a product using <strong>React.js</strong> and{" "}
              <strong>Redux</strong>, focusing on debugging errors,
              responsiveness, and delivering seamless user experiences.
            </li>
          </ul>
        </div>

        <div>
          <h3>Backend Developer (4 months)</h3>
          <ul>
            <li>
              Developed and implemented APIs using <strong>Node.js</strong> and{" "}
              <strong>MongoDB</strong>.
            </li>
            <li>
              Integrated these APIs into the frontend using{" "}
              <strong>React.js</strong> and <strong>Redux</strong>.
            </li>
            <li>
              Enhanced the responsiveness and performance of the frontend.
            </li>
            <li>
              Collaborated with clients to understand their needs and delivered
              solutions for real-time, web-based software projects.
            </li>
          </ul>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements">
        <h2>Achievements</h2>
        <ul>
          <li>
            Completed <strong>100 Days of Code</strong> challenge on Twitter,
            showcasing consistency in learning and problem-solving.
          </li>
          <li>
            Achieved a <strong>220-day streak</strong> on LeetCode,
            demonstrating dedication to improving coding skills.
          </li>
          <li>
            Earned the <strong>200 Days Badge (2024)</strong> on LeetCode with a{" "}
            <strong>1665 rating</strong>, highlighting expertise in data
            structures and algorithms.
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default About;
