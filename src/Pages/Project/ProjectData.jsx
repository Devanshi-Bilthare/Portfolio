import cara from '../../project-assets/cara.png'
import weather from '../../project-assets/weather.png'
import myPortfolio from '../../project-assets/myPortfolio.png'
import rejouice from '../../project-assets/Rejouice.png'
import brainspace from '../../project-assets/brainspace.png'
import hello from '../../project-assets/wethinkelastic.png'
import smoothie from '../../project-assets/landing_pages_images/best-smoothie.png'
import webAgency from '../../project-assets/landing_pages_images/web-design.png'
import codeInk from '../../project-assets/landing_pages_images/code-ink.png'
import beVideo from '../../project-assets/landing_pages_images/be-video.png'
import comingSoon from '../../project-assets/landing_pages_images/coming-soon.png'
import unlimited from '../../project-assets/landing_pages_images/digital-design.png'
import deathNote from '../../project-assets/landing_pages_images/death-note.png'
import lacoste from '../../project-assets/landing_pages_images/lacoste.png'
import phuket from '../../project-assets/landing_pages_images/phuket-trip.png'
import lifeAndDeath from '../../project-assets/landing_pages_images/life-&-death.png'
import questFamily from '../../project-assets/landing_pages_images/quest_family(1).png'
import F3 from '../../project-assets/landing_pages_images/F3(1).png'
import marlboro from '../../project-assets/landing_pages_images/Marlbora.png'
import fashionBook from '../../project-assets/landing_pages_images/fashion_book.jpeg'
import calculator from '../../project-assets/calculator.png'
import prettyBloom from '../../project-assets/prettyBloom.png'
import docs from '../../project-assets/Docs.png'
import vsCode from '../../project-assets/Vs-code.png'
import urlShortner from '../../project-assets/url-shortner.png'



const projectData = [
    {
      projName:"BrainSpace",
      img: brainspace,
      live: "https://devanshi-bilthare.github.io/brain_space/",
      github: "https://github.com/Devanshi-Bilthare/brain_space",
      skilused: ["HTML", "CSS", "JavaScript", "GSAP"],
      disc: "Brain Space: Developed with a focus on creating captivating animations and a visually appealing user interface. Utilized skills in animation design, UI/UX design, and front-end development to craft an engaging user experience.",
      type:"animated"
    },
    {
      projName:"PrettyBloom",
      img: prettyBloom,
      live: "https://devanshi-bilthare.github.io/pretty-bloom/",
      github: "https://github.com/Devanshi-Bilthare/pretty-bloom",
      skilused: ["JavaScript", "GSAP"],
      disc: "“Pretty Bloom” is a captivating web project where creativity meets technology. Using GSAP animations, I brought elements to life, seamlessly blending smooth transitions and dynamic effects. The minimalist design showcases my work effectively.",
      type:"animated"
    },
    {
      projName:"We Think Elastic",
      img:hello,
      live: "https://devanshi-bilthare.github.io/we-think-elastic/",
      github: "https://github.com/Devanshi-Bilthare/we-think-elastic",
      skilused: ["HTML", "CSS", "JavaScript", "GSAP"],
      disc: "We Think Elastic is a website where I've poured all my creativity and considerable thought. It incorporates GSAP animations and numerous scroll trigger effects. This creative website is designed purely for user satisfaction and showcases my mastery of animations",
      type:"animated" 
    },
    {
      projName:"Cara E-Commerce",
      img: cara,
      live: "https://cara-ecom-store.netlify.app/",
      github: "https://cara-ecom-store.netlify.app/",
      skilused: ["React","JavaScript","HTML","CSS"],
      disc: "Cara is an E-Commerce platform featuring advanced search filters, secure login, individual product pages, and a convenient cart for a personalized and secure shopping experience, ensuring ease of navigation and efficient purchasing.",
      type:"frontend"
    },
    {
      projName:"Docs Drag",
      img: docs,
      live: "https://docs-drag.netlify.app/",
      github: "https://github.com/Devanshi-Bilthare/Docs-Project",
      skilused: ["React","Tailwind CSS","Framer Motion"],
      disc: "Docs Drag is a dynamic web application designed to streamline document management. Developed using React, Tailwind CSS, and Framer Motion, it offers seamless drag-and-drop functionality for organizing files efficiently. The minimalist interface prioritizes usability, with each card dynamically presenting file details and download options.",
      type:"frontend"
    },
    {
      projName:"My Portfolio",
      img: myPortfolio,
      live: "https://devanshibilthare.netlify.app/",
      github: "",
      skilused: ["React","JavaScript","HTML","CSS"],
      disc: "I've crafted my portfolio to exhibit diverse projects and skills, offering insight into my capabilities. Learn more about me through this platform, complete with links to my socials. Explore my journey and discover how I bring creativity and expertise to each endeavor.",
      type:"frontend"
    },
    {
      projName:"Weather App",
      img: weather,
      live: "https://devanshi-bilthare.github.io/weather-app/",
      github: "https://github.com/Devanshi-Bilthare/weather-app",
      skilused: ["JavaScript","HTML","CSS","API Integration"],
      disc: "This is a weather app where you can search for the temperature, humidity, wind speed, min/max temperature, and current weather conditions for any city, state, or country. It's also responsive! I utilized a weather API for data retrieval.",
      type:"frontend"
    },{
      img:smoothie,
      type:'landing'
    }
    ,{
      img:webAgency,
      type:'landing'
    },{
      img:codeInk,
      type:'landing'
    },{
      img:beVideo,
      type:'landing'
    },{
      img:comingSoon,
      type:'landing'
    },{
      img:unlimited,
      type:'landing'
    },{
      img:deathNote,
      type:'landing'
    },{
      img:lacoste,
      type:'landing'
    },{
      img:phuket,
      type:'landing'
    },{
      img:lifeAndDeath,
      type:'landing'
    },{
      img:questFamily,
      type:'landing'
    },{
      img:F3,
      type:'landing'
    },{
      img:marlboro,
      type:'landing'
    },{
      img:fashionBook,
      type:'landing'
    },
    {
      projName:"ReJouice",
      img: rejouice,
      live: "https://devanshi-bilthare.github.io/Rejouice/",
      github: "https://github.com/Devanshi-Bilthare/Rejouice",
      skilused: ["HTML", "CSS", "JavaScript", "GSAP"],
      disc: "Rejoice is an animated website where I have used Locomotive.js for smooth scrolling, Swiper.js for automatic carousel effects, and GSAP for creative animations.",
      type:"animated"
    },
    {
      projName:"Url Shortner",
      img: urlShortner,
      live: "",
      github: "https://github.com/Devanshi-Bilthare/url-shortner",
      skilused: ["Node Js","JavaScript", "CSS", "Express","Ejs"],
      disc: "In this URL shortener project, users can input long URLs to generate shortened versions. If they attempt to submit without entering anything, a warning message is displayed.",
      type:"backend"
    },
    {
      projName:"Vs-Code Clone",
      img: vsCode,
      live: "",
      github: "https://github.com/Devanshi-Bilthare/VScode-clone",
      skilused: ["Node Js","JavaScript", "CSS", "Express","Ejs","File System"],
      disc: "In this VS Code app, users can create files, read their contents, view a list of files on the left side, update file data, and delete files.",
      type:"backend"
    },
  ];

  export default projectData;