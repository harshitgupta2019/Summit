import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Sustainable Ag Summit</a>
        </div>
        <div className={`navbar-toggle ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`navbar-links ${isNavOpen ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/speakers">Speakers</a></li>
          <li><a href="/schedule">Schedule</a></li>
          <li><a href="/register">Register</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
