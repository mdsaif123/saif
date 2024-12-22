

import React, { useState } from "react";
import "./Navbar.css";

import logo from "../../assets/images/logo1.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container">
    <header className="navbar ">
      {/* <div className="logo">Md Saif<span>.</span></div> */}
      <div className="logo">   <img style={{width:"150px",height:"80px"}} src={logo} alt="" /><span>.</span></div>
      <nav className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#resume">Resume</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
        <button className="hire-me">Hire me</button>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className={`hamburger ${isOpen ? "is-active" : ""}`}></div>
      </div>
    </header>
    </div>
  );
};

export default Navbar;
