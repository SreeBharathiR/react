import React from "react";
import "./App.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logoTitle">
        <img src="logo.jpeg" alt="logo"></img>
        <p>Tiny Threads</p>
      </div>
      <nav className="navigation">
        <ul>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
