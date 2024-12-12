import React, { useEffect, useState } from "react";
import "./Partnership.css";

const servicesData = [
  {
    id: 1,
    title: "Consulting",
    description: "Expert advice tailored to your needs.",
  },
  {
    id: 2,
    title: "Training",
    description: "Workshops and hands-on learning experiences.",
  },
  {
    id: 3,
    title: "Project Management",
    description: "End-to-end support for impactful projects.",
  },
  {
    id: 4,
    title: "Technology Solutions",
    description: "Custom tools for efficiency and scalability.",
  },
  {
    id: 5,
    title: "Research",
    description: "Data-driven insights to inform decision-making.",
  },
  {
    id: 6,
    title: "Outreach",
    description: "Engaging campaigns to connect with communities.",
  },
];

const Partnership = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % servicesData.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="partnership-section">
      <div className="text-container">
        <h2>Our Partnerships</h2>
        <p>
          We collaborate with clients to deliver innovative and impactful
          services. Explore the highlights of what we offer in partnership with
          our clients.
        </p>
      </div>
      <div className="carousel">
        <div className="cards-wrapper">
          {servicesData.slice(currentIndex, currentIndex + 2).map((service) => (
            <div key={service.id} className="card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partnership;
