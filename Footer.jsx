import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>This is some sample text about our organization.</p>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#aboutus">About Us</a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Feel free to reach out!</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section social-icons">
          <div className="icon-cards">
            <div className="icon-card">
              <FaFacebook color="#284b64" />
            </div>
            <div className="icon-card">
              <FaInstagram color="#284b64" />
            </div>
            <div className="icon-card">
              <FaTwitter color="#284b64" />
            </div>
            <div className="icon-card">
              <FaLinkedin color="#284b64" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <hr className="ash-line" />
        <p>© 2024 Powered by Virtual Branch. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
