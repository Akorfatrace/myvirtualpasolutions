import React from "react";
import Navbar from "./Navbar"; // Import the Navbar component
import OurTeam from "./OurTeam"; // Import the OurTeam component
import Footer from "./Footer";
import Logos from "./Logos";
import Meet from "./Meet";
import AboutIntro from "./AboutIntro";
import Feedback from "./Feedback";
import "./AboutUs.css"; // Import the CSS for About Us

const AboutUs = () => {
  return (
    <div>
      <div className="about-us-page">
        <Navbar /> {/* Render the Navbar */}
        <AboutIntro />
        <Meet />
        <Logos /> {/* Render the Logos component here */}
        {/* Third Section: Our Team */}
        <Feedback />
        <OurTeam /> {/* Render the OurTeam component here */}
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
