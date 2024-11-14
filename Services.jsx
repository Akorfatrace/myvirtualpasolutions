import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Inbox Management",
      description: "Organizing your inbox efficiently.",
      hoverText: "Efficient email management for increased productivity.",
    },
    {
      title: "Calendar Management",
      description: "Scheduling appointments and reminders.",
      hoverText: "Keep your appointments on track and never miss a meeting.",
    },
    {
      title: "Social Media Management",
      description: "Handling posts and engagement.",
      hoverText: "Grow your online presence with strategic content.",
    },
    {
      title: "Customer Service Care",
      description: "Responding to customer inquiries.",
      hoverText: "Providing timely responses and great customer service.",
    },
    {
      title: "Scheduling and Workflow Management",
      description: "Optimizing task flows.",
      hoverText: "Streamline your workflow for better efficiency.",
    },
    {
      title: "Automation and System Review",
      description: "Streamlining repetitive tasks.",
      hoverText: "Automate tasks and boost your productivity.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    setNextIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
    setNextIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length
    );
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
          <div className="carousel-card" key={currentIndex}>
            <h4>{services[currentIndex].title}</h4>
            <p>{services[currentIndex].description}</p>
            <div className="hover-content">
              <p>{services[currentIndex].hoverText}</p>
            </div>
          </div>
          <div className="carousel-card" key={nextIndex}>
            <h4>{services[nextIndex].title}</h4>
            <p>{services[nextIndex].description}</p>
            <div className="hover-content">
              <p>{services[nextIndex].hoverText}</p>
            </div>
          </div>
        </div>
        <button className="carousel-button right" onClick={nextSlide}>
          →
        </button>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {services.map((_, index) => (
            <span
              key={index}
              className={`indicator ${currentIndex === index ? "active" : ""}`}
              onClick={() => {
                setCurrentIndex(index);
                setNextIndex((index + 1) % services.length);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
