import React, { useState } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showHiddenNav, setShowHiddenNav] = useState(false);

  const toggleHiddenNav = () => {
    setShowHiddenNav(!showHiddenNav);
  };

  const handleNavItemClick = () => {
    setShowHiddenNav(false);
  };

  return (
    <nav>
      <div className="left_nav">
        <Link to='/'><h3>DB</h3></Link>
      </div>

      <div className="right_nav">
        <Link to='/'><p>Home</p></Link>
        <Link to='/about'><p>About</p></Link>
        <Link to='/project'><p>Projects</p></Link>
        <Link to="https://drive.google.com/file/d/1N1CzUANxyf6T8zKCDdnSGcx6nC-K0oEB/view?usp=sharing">
          <button>Resume</button>
        </Link>
      </div>

      <div className="btn" onClick={toggleHiddenNav}>
        {showHiddenNav ? (
          <i className="ri-close-large-fill"></i>
        ) : (
          <i className="ri-menu-3-line"></i>
        )}
      </div>

      <div className={`hidden_nav ${showHiddenNav ? "show" : "hide"}`}>
        <Link to='/' onClick={handleNavItemClick}><p>Home</p></Link>
        <Link to='/about' onClick={handleNavItemClick}><p>About</p></Link>
        <Link to='/project' onClick={handleNavItemClick}><p>Projects</p></Link>
        <Link to="https://drive.google.com/file/d/1N1CzUANxyf6T8zKCDdnSGcx6nC-K0oEB/view?usp=sharing" onClick={handleNavItemClick}>
          <button>Resume</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
