import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="#" className="logo">A . J</a>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
