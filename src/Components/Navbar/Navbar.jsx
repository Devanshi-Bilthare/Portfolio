import React from 'react';
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    <div className="left_nav">
       <Link to='/'><h3>DB</h3></Link>
    </div>
    <div className="right_nav">
        <Link to='/'><p>Home</p></Link>
        <Link to='/about'><p>About</p></Link>
        <Link to='/project'><p>Projects</p></Link>
        <Link to="https://drive.google.com/file/d/1a_o3lK87exe28rCHBWoBMZH1XK57iH1Z/view?usp=sharing"><button>Resume</button></Link>
    </div>
    <div className="btn"><i class="ri-menu-3-line"></i></div>
</nav>
  )
}

export default Navbar