import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa"; // Importing React Icons for the stars
import "./Feedback.css"; // Assuming your CSS file is Feedback.css

const Feedback = () => {
  // Testimonial data
  const testimonials = [
    {
      text: "The service we received was outstanding! We felt like the team truly cared about our success. Their approach was personalized and professional every step of the way.",
      name: "John Doe",
      role: "CEO, CompanyName",
      rating: 5,
    },
    {
      text: "Fantastic experience! The team went above and beyond to understand our needs. Their expertise made a huge difference in our business growth.",
      name: "Jane Smith",
      role: "Founder, BusinessName",
      rating: 4,
    },
    {
      text: "Professional, efficient, and always available for any questions we had. We couldn't have asked for a better partnership.",
      name: "Mark Johnson",
      role: "Director, AnotherCompany",
      rating: 5,
    },
  ];

  // State for the current testimonial index
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [animationKey, setAnimationKey] = useState(0); // To trigger re-animation

  // Function to cycle through testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey((prevKey) => prevKey + 1); // Trigger re-animation
      setCurrentTestimonial(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 8000); // Change every 8 seconds (slower transition time)

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const { text, name, role, rating } = testimonials[currentTestimonial];

  return (
    <section className="feedback-section">
      <div className="line"></div>
      <h2 className="heading">Why Customers Love Working With Us</h2>

      {/* Testimonial */}
      <div className="testimonial" key={animationKey}>
        {" "}
        {/* Use key to trigger re-animation */}
        <div className="quote">
          <span className="quote-icon-left">❝</span>
          <p className="feedback-text">{text}</p>
          <span className="quote-icon-right">❞</span>
        </div>
        {/* Person's Info */}
        <div className="testimonial-info">
          {/* Rating (5 stars) */}
          <div className="rating">
            {[...Array(rating)].map((_, index) => (
              <FaStar key={index} className="star" />
            ))}
          </div>

          {/* Name and Role */}
          <div className="person-info">
            <p className="name">{name}</p>
            <p className="role">{role}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
