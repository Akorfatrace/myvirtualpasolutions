import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai"; // Inbox Management
import { FaCalendarAlt, FaTwitter, FaHeadset, FaTasks } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5"; // Automation and System Review
import "./Services.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Partnership from "./Partnership";
import AlternatingText from "./AlternatingText";

const Services = () => {
  const services = [
    {
      title: "Inbox Management",
      icon: <AiOutlineMail />,
      description:
        "Keep your inbox organized and focus on what matters most with tailored email management.",
      hoverText:
        "We understand how busy entrepreneurs and small business owners can be. Our inbox management services help you stay on top of your emails by prioritizing important messages, organizing your inbox with folders and filters, and clearing out clutter. With our support, you can manage your communication without the stress of unanswered emails or a chaotic inbox.",
    },
    {
      title: "Calendar Management",
      icon: <FaCalendarAlt />,
      description:
        "Organize your schedule effortlessly with meeting planning and personalized reminders.",
      hoverText:
        "We work closely with you to schedule meetings and ensure you never miss an appointment. Balancing the many facets of your business can be overwhelming, making it easy to forget important commitments. Our service includes morning check-ins, tailored reminders, and a structured calendar to keep you on track. With our help, your day runs smoothly, and you’re always prepared for what’s ahead.",
    },
    {
      title: "Social Media Management",
      icon: <FaTwitter />,
      description:
        "Manage your social presence effortlessly with content creation, scheduling, and active engagement.",
      hoverText:
        "We help you take control of your social media pages by offering a range of services tailored to your needs. Whether it's designing and posting at optimal times or creating fresh content based on your guidelines, we've got it covered. From customer service to keeping your pages active and responsive, we ensure your social media remains engaging and well-managed, leaving you with more time to focus on your business.",
    },
    {
      title: "Customer Service Care",
      icon: <FaHeadset />,
      description:
        "Streamline customer interactions with prompt responses and personalized support across multiple channels.",
      hoverText:
        "In today’s business world, customer communication happens everywhere—email, phone, and social media. We work closely with you to develop email templates and ensure all inquiries are handled swiftly. Whether it's responding to client requests or managing customer service from start to finish, we’re here to help. From answering calls to replying online, we ensure your customers feel attended to and valued.",
    },
    {
      title: "Scheduling and Workflow Management",
      icon: <FaTasks />,
      description:
        "Optimize your time and workflows with efficient scheduling and task management.",
      hoverText:
        "Managing schedules and workflows can be overwhelming, but we’re here to help. We work with you to organize your tasks and appointments, ensuring everything runs smoothly. From creating structured schedules to streamlining workflows, we help you stay on track and maximize productivity. With our support, you can focus on what matters most while we handle the details of your day-to-day operations.",
    },
    {
      title: "Automation and System Review",
      icon: <IoSettingsOutline />,
      description:
        "Boost efficiency by minimizing repetitive tasks with tailored templates and optimized workflows.",
      hoverText:
        "Do you find yourself repeating the same tasks daily? We’re here to help simplify your work processes. By collaborating with you, we focus on reducing redundancy and increasing productivity. Through custom templates, optimized workflows, and refining administrative processes, we save you time and help you work more efficiently. Let us enhance your operations so you can focus on what truly matters.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);

  const changeSlide = (direction) => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + direction + services.length) % services.length
    );
    setNextIndex(
      (prevIndex) => (prevIndex + direction + services.length) % services.length
    );
  };

  return (
    <>
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <div className="services-container" id="services">
        <div className="services-intro">
          <h1>Our Services</h1>
          <p>
            From managing emails to crafting presentations, we handle the tasks
            that keep you productive. Our solutions are designed to empower your
            growth and streamline operations.
          </p>
        </div>

        <div className="services-carousel">
          <div className="carousel-left-design"></div>

          <div className="carousel-cards">
            <div className="carousel-card" key={currentIndex}>
              <h4>{services[currentIndex].title}</h4>
              <div className="service-icon">{services[currentIndex].icon}</div>
              <p>{services[currentIndex].description}</p>
              <div className="hover-content">
                <p>{services[currentIndex].hoverText}</p>
              </div>
            </div>
            <div className="carousel-card" key={nextIndex}>
              <h4>{services[nextIndex].title}</h4>
              <div className="service-icon">{services[nextIndex].icon}</div>
              <p>{services[nextIndex].description}</p>
              <div className="hover-content">
                <p>{services[nextIndex].hoverText}</p>
              </div>
            </div>
          </div>

          <div className="carousel-indicators">
            {services.map((_, index) => (
              <span
                key={index}
                className={`indicator ${
                  currentIndex === index ? "active" : ""
                }`}
                onClick={() => {
                  setCurrentIndex(index);
                  setNextIndex((index + 1) % services.length);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <AlternatingText />
      <Partnership />
      <Footer />
    </>
  );
};

export default Services;
