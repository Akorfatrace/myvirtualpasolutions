import React, { useState } from "react";
import "./ServicesSection.css"; // Corrected the filename casing

const ServicesSection = () => {
  const services = [
    {
      title: "Easy Integration",
      description: "Integrate with just a few lines of code.",
    },
    {
      title: "Fast Payments",
      description: "Accept payments instantly from customers worldwide.",
    },
    {
      title: "Customizable Solutions",
      description: "Build a solution that fits your needs.",
    },
    {
      title: "24/7 Support",
      description: "Get assistance any time, day or night.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < services.length ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : services.length - 1
    );
  };

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services
          .slice(currentIndex, currentIndex + 3)
          .map((service, index) => (
            <div key={index} className="service">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
      </div>
      <div className="slider-controls">
        <button className="slider-button" onClick={handlePrev}>
          &lt;
        </button>
        <button className="slider-button" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
