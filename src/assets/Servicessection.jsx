import React, { useState } from "react";
import "./ServicesSection.css";

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

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

  return (
    <section className="services" id="services">
      <h2>Our Services</h2>
      <div className="service-list">
        {services
          .slice(0, showAll ? services.length : 2)
          .map((service, index) => (
            <div
              key={index}
              className={`service ${selectedCard === index ? "selected" : ""}`}
              onClick={() => setSelectedCard(index)}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
      </div>
      <button className="toggle-button" onClick={() => setShowAll(!showAll)}>
        {showAll ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};

export default ServicesSection;
