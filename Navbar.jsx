import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // Import react-scroll
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage hamburger menu toggle

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="public/images/mvpa.png" alt="Logo" className="logo" />
      </div>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${isMenuOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" className={activeLink === "/" ? "active" : ""}>
            Home
          </Link>
        </li>

        {/* Services (Scroll only if on homepage) */}
        <li>
          {location.pathname === "/" ? (
            <ScrollLink
              to="services"
              smooth={true}
              duration={500}
              className={activeLink === "#services" ? "active" : ""}
            >
              Services
            </ScrollLink>
          ) : (
            <Link to="/" className={activeLink === "#services" ? "active" : ""}>
              Services
            </Link>
          )}
        </li>

        {/* About Us (Navigate to the AboutUs page) */}
        <li>
          <Link to="/about" className={activeLink === "/about" ? "active" : ""}>
            About Us
          </Link>
        </li>

        {/* Contact */}
        <li>
          <Link
            to="/contact"
            className={activeLink === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
