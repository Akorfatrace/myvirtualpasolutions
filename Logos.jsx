import React from "react";
import "./Logos.css"; // You can create a separate CSS file for Logos styling

const Logos = () => {
  return (
    <section className="logos-section">
      <div className="logos-container">
        {/* Replace with your actual logo images */}
        <img src="/images/logo1.png" alt="Partner 1" className="logo" />
        <img src="/images/logo2.png" alt="Partner 2" className="logo" />
        <img src="/images/logo3.png" alt="Partner 3" className="logo" />
        <img src="/images/logo4.png" alt="Partner 4" className="logo" />
        <img src="/images/logo5.png" alt="Partner 5" className="logo" />
        <img src="/images/logo6.png" alt="Partner 6" className="logo" />
        <img src="/images/logo7.png" alt="Partner 7" className="logo" />
      </div>
    </section>
  );
};

export default Logos;
