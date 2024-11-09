import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* First Section: Logo and Newsletter */}
        <div className="footer-section">
          <img
            src="/public/images/logoA.png"
            alt="Logo"
            className="footer-logo"
          />
          <h4>Subscribe to our Newsletter</h4>
          <div className="newsletter-container">
            <p className="promotional-text">
              We will send you sample promotional content here.
            </p>
            <div className="newsletter">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="subscribe-button">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Second Section: Services */}
        <div className="footer-section">
          <h4>Services</h4>
          <ul className="footer-links">
            <li>
              <a href="#email">Email Management</a>
            </li>
            <li>
              <a href="#appointment">Appointment Scheduling</a>
            </li>
            <li>
              <a href="#socialmedia">Social Media Management</a>
            </li>
            <li>
              <a href="#data">Data Entry</a>
            </li>
            <li>
              <a href="#customersupport">Customer Support</a>
            </li>
            <li>
              <a href="#travel">Travel Arrangements</a>
            </li>
          </ul>
        </div>

        {/* Third Section: Company */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul className="footer-links">
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#team">Our Team</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
          </ul>
        </div>

        {/* Fourth Section: Contact Us */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Feel free to reach out!</p>
          <p>Phone: (123) 456-7890</p>
          <div className="social-icons">
            <div className="social-icon">
              <FaFacebookF />
            </div>
            <div className="social-icon">
              <FaInstagram />
            </div>
            <div className="social-icon">
              <FaTwitter />
            </div>
            <div className="social-icon">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <hr className="ash-line" />
        <p>© 2024 Powered by Virtual Branch. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
