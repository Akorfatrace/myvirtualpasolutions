import React from "react";
import "./Meet.css"; // Add a separate CSS file for styling

const Meet = () => {
  return (
    <section className="meet-section">
      <div className="dash"></div> {/* Reusing the dash styling */}
      <div className="text-wrapper">
        <h3 className="meet-line-one">Meet the People</h3>
        <h3 className="meet-line-two">We Are Working With</h3>
      </div>
    </section>
  );
};

export default Meet;
