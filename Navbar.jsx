import React from "react";
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
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#Services">Services</a>
        </li>
        <li>
          <a href="#aboutus">About Us</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
