import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import OurTeam from "./OurTeam"; // Import the OurTeam component
import Footer from "./Footer";
import Logos from "./Logos";
import "./AboutUs.css"; // Import the CSS for About Us

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <Navbar /> {/* Render the Navbar */}
      {/* First Section: Why Us? */}
      <section className="why-us-section">
        <h1>Why Us?</h1>
        <p>
          We provide exceptional services, tailored solutions, and unmatched
          expertise to help you achieve your goals.
        </p>
      </section>
      <Logos /> {/* Render the Logos component here */}
      {/* Third Section: Our Team */}
      <OurTeam /> {/* Render the OurTeam component here */}
      <Footer />
    </div>
  );
};

export default AboutUs;
