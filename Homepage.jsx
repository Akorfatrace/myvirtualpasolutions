import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer"; // Import the Footer component
import "./Homepage.css"; // Ensure this file contains the right styles
import ServicesSection from "./Servicessection";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <header className="hero">
        <div className="left-half">
          <h2>
            <span className="great-product">Great product</span> is built by
            great teams.
          </h2>
          <p>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </p>
        </div>
        <div className="right-half">
          <img src="/Images/imagex.jpg" alt="Great product" />
        </div>
      </header>
      <ServicesSection />
      <Footer /> {/* Add the Footer component here */}
    </div>
  );
};

export default Homepage;
