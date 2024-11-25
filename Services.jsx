import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const services = [
    {
      title: "Inbox Management",
      description:
        "Keep your inbox organized and focus on what matters most with tailored email management.",
      hoverText:
        "We understand how busy entrepreneurs and small business owners can be. Our inbox management services help you stay on top of your emails by prioritizing important messages, organizing your inbox with folders and filters, and clearing out clutter. With our support, you can manage your communication without the stress of unanswered emails or a chaotic inbox.",
    },
    {
      title: "Calendar Management",
      description:
        "Organize your schedule effortlessly with meeting planning and personalized reminders.",
      hoverText:
        "We work closely with you to schedule meetings and ensure you never miss an appointment. Balancing the many facets of your business can be overwhelming, making it easy to forget important commitments. Our service includes morning check-ins, tailored reminders, and a structured calendar to keep you on track. With our help, your day runs smoothly, and you’re always prepared for what’s ahead.",
    },
    {
      title: "Social Media Management",
      description:
        "Manage your social presence effortlessly with content creation, scheduling, and active engagement.",
      hoverText:
        "We help you take control of your social media pages by offering a range of services tailored to your needs. Whether it's designing and posting at optimal times or creating fresh content based on your guidelines, we've got it covered. From customer service to keeping your pages active and responsive, we ensure your social media remains engaging and well-managed, leaving you with more time to focus on your business.",
    },
    {
      title: "Customer Service Care",
      description:
        "Streamline customer interactions with prompt responses and personalized support across multiple channels.",
      hoverText:
        "In today’s business world, customer communication happens everywhere—email, phone, and social media. We work closely with you to develop email templates and ensure all inquiries are handled swiftly. Whether it's responding to client requests or managing customer service from start to finish, we’re here to help. From answering calls to replying online, we ensure your customers feel attended to and valued.",
    },
    {
      title: "Scheduling and Workflow Management",
      description:
        "Optimize your time and workflows with efficient scheduling and task management.",
      hoverText:
        "Managing schedules and workflows can be overwhelming, but we’re here to help. We work with you to organize your tasks and appointments, ensuring everything runs smoothly. From creating structured schedules to streamlining workflows, we help you stay on track and maximize productivity. With our support, you can focus on what matters most while we handle the details of your day-to-day operations.",
    },
    {
      title: "Automation and System Review",
      description:
        "Boost efficiency by minimizing repetitive tasks with tailored templates and optimized workflows.",
      hoverText:
        "Do you find yourself repeating the same tasks daily? We’re here to help simplify your work processes. By collaborating with you, we focus on reducing redundancy and increasing productivity. Through custom templates, optimized workflows, and refining administrative processes, we save you time and help you work more efficiently. Let us enhance your operations so you can focus on what truly matters.",
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
    <div className="services-container" id="services">
      <div className="services-intro">
        <h1>Our Services</h1>
        <p>Simplifying Business, Amplifying Impact.</p>
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
