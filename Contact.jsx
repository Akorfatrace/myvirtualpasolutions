import React from "react";
import Navbar from "./Navbar"; // Adjust the path based on your folder structure
import Footer from "./Footer"; // Adjust the path based on your folder structure
import "./Contact.css"; // Optional: styles for the Contact page

const Contact = () => {
  return (
    <div className="contact-page">
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
      <Footer /> {/* Call the Footer at the bottom */}
    </div>
  );
};

export default Contact;
