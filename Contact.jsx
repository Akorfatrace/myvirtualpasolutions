import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="background-wrapper">
        <div className="navbar-wrapper">
          <Navbar />
        </div>
        <div className="content">
          <div className="form-card">
            <div className="card-wrapper">
              <div className="info-card">
                <div className="info-heading">
                  <h3>Ready to Start Your Project?</h3>
                </div>
                <div className="info-description">
                  <p>
                    Let's make your vision a reality. Contact us today and let's
                    discuss how we can help you innovate and grow.
                  </p>
                </div>
                <div className="info-contact">
                  <p>Contact info</p>
                  <p>myvirtualpasolutions@gmail.com</p>
                  <p>+233 000 000</p>
                  <p>Accra, Ghana</p>
                </div>
              </div>
              <div className="small-card">
                <h3>Contact Details</h3>
                <p>Email: support@example.com</p>
                <p>Phone: +123 456 7890</p>
                <p>Address: 123 Main St, City, Country</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
