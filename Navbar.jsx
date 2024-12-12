import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/images/mvpa.png" alt="Logo" className="logo" />
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

        <li>
          <Link
            to="/services"
            className={activeLink === "/services" ? "active" : ""}
          >
            Services
          </Link>
        </li>

        <li>
          <Link to="/about" className={activeLink === "/about" ? "active" : ""}>
            About Us
          </Link>
        </li>

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
