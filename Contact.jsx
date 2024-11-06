import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    socialHandle: "",
    platform: "",
    email: "",
    interest: "",
  });
  const [handleError, setHandleError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example validation: Ensure social handle is provided for the selected platform
    if (!formData.socialHandle) {
      setHandleError("Please enter your social media handle");
    } else {
      setHandleError("");
      // Handle form submission
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="contact-page">
      <div className="background-wrapper">
        <div className="navbar-wrapper">
          <Navbar />
        </div>
        <div className="content">
          <div className="form-card">
            <div className="card-wrapper">
              <div className="info-card">
                <div className="info-heading">
                  <h3>Ready to Delegate?</h3>
                  <h3>Let's Connect!</h3>
                </div>
                <div className="info-description">
                  <p>
                    Book a consultation today and discover how our services can
                    make a difference in your business.
                  </p>
                </div>
              </div>

              {/* Modified Form Field */}
              <div className="small-card">
                <h3>Become a Partner</h3>
                <h4>Break the ice! Let us help you out</h4>
                <form onSubmit={handleSubmit}>
                  <label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name*"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <label>
                    <select
                      name="platform"
                      value={formData.platform}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Platform*</option>
                      <option value="instagram">Instagram</option>
                      <option value="twitter">Twitter</option>
                      <option value="linkedin">LinkedIn</option>
                      <option value="facebook">Facebook</option>
                    </select>
                  </label>
                  <label>
                    <input
                      type="text"
                      name="socialHandle"
                      className="social-media"
                      placeholder="Enter your social media handle*"
                      value={formData.socialHandle}
                      onChange={handleInputChange}
                      required
                    />
                    {handleError && (
                      <span className="error">{handleError}</span>
                    )}
                  </label>
                  <label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email*"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    <input
                      type="text"
                      name="interest"
                      placeholder="Describe your interest*"
                      value={formData.interest}
                      onChange={handleInputChange}
                    />
                  </label>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
