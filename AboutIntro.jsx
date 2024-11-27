import React from "react";
import "./AboutIntro.css";

const AboutIntro = () => {
  return (
    <section className="about-intro">
      {/* First Box */}
      <div className="intro-box elevated">
        <div className="text-content">
          <h5 className="small-title">Who We Are</h5>
          <h1 className="big-title gradient-text">Who We Are</h1>
          <p className="description">
            Your strategic Partner in Business Efficiency.
          </p>
        </div>
        <div className="image-box">
          <img src="/images/about.JPG" alt="Team collaborating" />
        </div>
      </div>

      {/* Second Box */}
      <div className="intro-box not-elevated">
        <div className="text-content">
          <h5 className="small-title">What We Do</h5>
          <h1 className="big-title gradient-text">What We Do</h1>
          <p className="description">
            Our expertise lies in making your day-to-day operations smoother and
            more productive. With custom templates, organized scheduling, and
            expert email management, we are here to optimize your workflow.
          </p>
        </div>
        <div className="image-box">
          <img src="/images/about1.JPG" alt="Business discussion" />
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
