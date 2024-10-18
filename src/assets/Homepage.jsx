import React from "react";
import Navbar from "./Navbar";
import "./Homepage.css";

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
      <section className="features" id="product">
        <h2>Build better products</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>Easy integration</h3>
            <p>Integrate Stripe with just a few lines of code.</p>
          </div>
          <div className="feature">
            <h3>Fast payments</h3>
            <p>Accept payments instantly from customers worldwide.</p>
          </div>
          <div className="feature">
            <h3>Customizable</h3>
            <p>Build a payment solution that fits your needs.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
