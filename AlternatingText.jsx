import React, { useState, useEffect } from "react";
import "./AlternatingText.css";

const AlternatingText = () => {
  const taglines = [
    "Our services start from as little as $100 per month.",
    "Sign up for our newsletter and be part of our growing community.",
    "Our solutions are designed to empower your growth and streamline operations.",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % taglines.length);
        setIsFading(false);
      }, 1700); // Fade-out time
    }, 8000); // Change the tagline every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="alternating-text">
      <p className={`tagline ${isFading ? "fade-out" : "fade-in"}`}>
        {taglines[currentIndex]}
      </p>
    </div>
  );
};

export default AlternatingText;
