import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo1.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Track menu state
  const navRef = useRef(null);

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // Close the menu when clicking a nav item
  const handleNavItemClick = () => {
    if (isOpen) {
      setIsOpen(false); // Close the menu when a nav item is clicked
    }
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false); // Close the menu if clicked outside the navbar
      }
    };

    // Attach event listener to document
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container">
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" style={{ width: "150px", height: "80px" }} />
        </div>
        <nav ref={navRef} className={`nav-links ${isOpen ? "active" : ""}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleNavItemClick} // Close the menu when clicked
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleNavItemClick}
          >
            Services
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleNavItemClick}
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleNavItemClick}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={handleNavItemClick}
          >
            Contact
          </NavLink>
          <button className="hire-me">
            <a
              style={{ color: "black" }}
              href="https://wa.me/6204180519"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire me
            </a>
          </button>
        </nav>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isOpen ? "is-active" : ""}`}></div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
