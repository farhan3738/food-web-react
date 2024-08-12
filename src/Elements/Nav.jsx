import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <div className="custom-navbar-container">
      <nav className="custom-nav-bar">
        <div className="custom-logo">
          <img src="src\assets\360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" alt="Logo" />
        </div>
        <div className="custom-nav-elements">
          <a href="#"><li>Home</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Food</li></a>
          <a href="#"><li>Contact</li></a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
