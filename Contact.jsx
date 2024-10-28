import React from "react";
import Navbar from "./Navbar"; // Adjust path as needed
import Footer from "./Footer";
import "./Contact.css"; // Styles for the Contact page

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="background-wrapper">
        {" "}
        {/* Parent div for background */}
        <div className="navbar-wrapper">
          <Navbar /> {/* Navbar remains unchanged */}
        </div>
        <div className="content">
          <div className="form-card">
            <h2>Contact Us</h2>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
