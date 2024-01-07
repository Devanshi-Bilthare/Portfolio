import React from 'react';
import "./Navbar.css"
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
    <div className="left_nav">
        <h3>DB</h3>
    </div>
    <div className="right_nav">
        <Link to='/'><p>Home</p></Link>
        <Link to='/about'><p>About</p></Link>
        <Link to='/project'><p>Projects</p></Link>
        <a href="https://drive.google.com/file/d/1HD9lFme4_NFskpeAsFb3b0HlgJ2UK6z7/view?usp=sharing"><Button>Resume</Button></a>
    </div>
</nav>
  )
}

export default Navbar