import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  

  return (
    <nav className="navbar">
        <div className="navbar-logo">
          <a href="/">Agro Summit</a>
        </div>
      <div className="navbar-container">
        <input type='checkbox' class="toggle-menu"/>
        <div className="hamburger"></div>
        <ul className="navbar-links">
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
