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
          <a href="#product">Product</a>
        </li>
        <li>
          <a href="#pricing">Pricing</a>
        </li>
        <li>
          <a href="#docs">Docs</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <button className="login-button">Log in</button>
        </li>
        <li>
          <button className="signup-button">Sign up</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
