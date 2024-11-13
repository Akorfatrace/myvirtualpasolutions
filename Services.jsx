import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const services = [
    { title: "Inbox Management", description: "Description for Service 1" },
    {
      title: "Calendar Management",
      description: "Description for Service 2",
    },
    {
      title: "Social Media Management",
      description: "Description for Service 3",
    },
    {
      title: "Customer Service Care",
      description: "Description for Service 4",
    },
    {
      title: "Scheduling and Workflow Management",
      description: "Description for Service 5",
    },
    {
      title: "Automation and System Review",
      description: "Description for Service 6",
    },
    {
      title: "Training and Research",
      description: "Description for Service 7",
    },
    { title: "Service 8", description: "Description for Service 8" },
    { title: "Service 9", description: "Description for Service 9" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Get the current set of three cards to display
  const visibleCards = services.slice(currentIndex, currentIndex + 3);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= services.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 < 0 ? services.length - 3 : prevIndex - 3
    );
  };

  const goToSet = (setIndex) => {
    setCurrentIndex(setIndex * 3);
  };

  return (
    <div className="services-container">
      <div className="services-intro">
        <h5>Our Services</h5>
        <h6>Simplifying Business, Amplifying Impact</h6>
        <p>
          From managing emails to crafting presentations, we handle the tasks
          that keep you productive. Our solutions are designed to empower your
          growth and streamline operations.
        </p>
      </div>
      <div className="services-carousel">
        <button className="carousel-button left" onClick={prevSlide}>
          ←
        </button>
        <div className="carousel-cards">
          {visibleCards.map((service, index) => (
            <div className="carousel-card" key={index}>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <button className="carousel-button right" onClick={nextSlide}>
          →
        </button>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {[0, 1, 2].map((setIndex) => (
            <span
              key={setIndex}
              className={`indicator ${
                currentIndex === setIndex * 3 ? "active" : ""
              }`}
              onClick={() => goToSet(setIndex)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
