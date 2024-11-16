import React from "react";
import "./virtualassistant.css"; // External CSS file

const VirtualAssistant = () => {
  return (
    <section className="virtual-assistant-section">
      <h2 className="section-heading">Why Hire a Virtual Assistant?</h2>
      <div className="reasons-container">
        {/* Card 1 */}
        <div className="reason-card left">
          <div className="reason-image-container">
            <img
              className="reason-image"
              src="/images/pexelstime.jpg" // Make sure this path is correct
              alt="Image description"
            />
          </div>
          <div className="reason-text-container">
            <h4>Time Efficiency</h4>
            <p>
              As your responsibilities grow, you may find yourself overwhelmed
              with tasks that can be time-consuming but are necessary for your
              personal or professional life. A virtual assistant can take care
              of routine administrative tasks, freeing up your time to focus on
              more strategic and important activities.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="reason-card right">
          <div className="reason-image-container">
            <img
              className="reason-image"
              src="/images/pexelsexpertise.jpg" // Correct path to image
              alt="Image description"
            />
          </div>
          <div className="reason-text-container">
            <h4>Expertise and Specialization</h4>
            <p>
              Virtual assistants often specialize in various areas such as
              social media management, bookkeeping, content creation, or
              customer support. By outsourcing tasks to a virtual assistant with
              specific expertise, you can ensure that tasks are completed
              efficiently and professionally, even if you lack the skills or
              time to do so yourself.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="reason-card left">
          <div className="reason-image-container">
            <img
              className="reason-image"
              src="/images/pexelsremote.jpg" // Ensure path is correct
              alt="Image description"
            />
          </div>
          <div className="reason-text-container">
            <h4>Flexibility & Remote Support</h4>
            <p>
              Virtual assistants work remotely, meaning you can tap into a
              global talent pool without being limited by geographical
              constraints. This also offers the flexibility of support across
              different time zones, enabling tasks to be completed outside of
              your regular working hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VirtualAssistant;
