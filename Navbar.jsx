// src/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="public/images/logoa.PNG" alt="Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={activeLink === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="#Services"
            className={activeLink === "#Services" ? "active" : ""}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="#aboutus"
            className={activeLink === "#aboutus" ? "active" : ""}
          >
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
