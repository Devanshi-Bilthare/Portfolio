import React, { useState } from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [showHiddenNav, setShowHiddenNav] = useState(false);

  const toggleHiddenNav = () => {
    console.log('clicked')
    setShowHiddenNav(!showHiddenNav);
  }


  return (
    <nav>
    <div className="left_nav">
       <Link to='/'><h3>DB</h3></Link>
    </div>
    <div className="right_nav">
        <Link to='/'><p>Home</p></Link>
        <Link to='/about'><p>About</p></Link>
        <Link to='/project'><p>Projects</p></Link>
        <Link to="https://drive.google.com/file/d/1bn1V7-ylfhq9YehY0-eJlZeXBhCpPEMx/view?usp=sharing"><button>Resume</button></Link>
    </div>
    <div className="btn" onClick={toggleHiddenNav}>{showHiddenNav ?<i class="ri-close-large-fill"></i> : <i class="ri-menu-3-line"></i>}</div>
        <div className={`hidden_nav ${showHiddenNav ? "show" : "hide"}`}>
            <Link to='/'><p>Home</p></Link>
            <Link to='/about'><p>About</p></Link>
            <Link to='/project'><p>Projects</p></Link>
            <Link to="https://drive.google.com/file/d/1N2-BdpL0Cizu-Om3PZ5eRf43cYEQRM9G/view?usp=sharing"><button>Resume</button></Link>
        </div>
      
</nav>
  )
}

export default Navbar