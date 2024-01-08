import React from 'react';
import "./Navbar.css"
import Button from '../Button/Button'
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
        <a href="https://drive.google.com/file/d/1a_o3lK87exe28rCHBWoBMZH1XK57iH1Z/view?usp=sharing"><Button>Resume</Button></a>
    </div>
</nav>
  )
}

export default Navbar