import React, { useState, useEffect } from "react";
import "./NewsletterPopup.css"; // Import the CSS file

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show the pop-up after a delay (e.g., 8 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // 10000ms = 8 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          <h2>Subscribe to our Newsletter</h2>
        </div>
        <div className="popup-description">
          <p>
            Get the latest updates, news, and special offers straight to your
            inbox!
          </p>
        </div>
        <div className="popup-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="popup-input"
          />
          <button className="popup-button">Subscribe</button>
        </div>
        <button onClick={handleClose} className="popup-close-button">
          &times;
        </button>
      </div>
    </div>
  );
};

export default NewsletterPopup;
