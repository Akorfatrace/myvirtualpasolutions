// src/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="public/images/logoa.PNG"
          alt="Your Logo"
          style={{ height: "80px" }}
        />
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link> {/* Update this to use Link */}
        </li>
        <li>
          <Link to="#Services">Services</Link>
        </li>
        <li>
          <Link to="#aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>{" "}
          {/* Update to link to Contact page */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
