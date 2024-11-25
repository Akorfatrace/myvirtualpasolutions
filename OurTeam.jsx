import React from "react";
import "./OurTeam.css"; // Import styles for this component
import { FaInstagram, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

const OurTeam = () => {
  return (
    <section className="our-team-section">
      {/* Frame 1: Horizontal Cards */}
      <div className="ash-frame frame-one">
        <div className="frame-one-heading">Our Team</div>
        <div className="frame-one-subheading">
          Meet the people who make the magic happen!
        </div>
        <div className="card-container">
          <div className="white-card">
            <div className="worker-name">Alex Johnson</div>
            <div className="worker-role">Virtual Assistant</div>
            <div className="worker-description">
              A passionate assistant who loves solving problems and managing
              tasks efficiently. Enjoys hiking and coffee breaks!
            </div>
            <div className="social-icons">
              <a href="#instagram">
                <FaInstagram />
              </a>
              <a href="#twitter">
                <FaTwitter />
              </a>
              <a href="#linkedin">
                <FaLinkedin />
              </a>
              <a href="#email">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="white-card">
            <div className="worker-name">Emma Brown</div>
            <div className="worker-role">Project Coordinator</div>
            <div className="worker-description">
              Detail-oriented and thrives under pressure. A book lover with a
              penchant for photography.
            </div>
            <div className="social-icons">
              <a href="#instagram">
                <FaInstagram />
              </a>
              <a href="#twitter">
                <FaTwitter />
              </a>
              <a href="#linkedin">
                <FaLinkedin />
              </a>
              <a href="#email">
                <FaEnvelope />
              </a>
            </div>
          </div>
          <div className="white-card">
            <div className="worker-name">Michael Lee</div>
            <div className="worker-role">Customer Support Lead</div>
            <div className="worker-description">
              Always ready to lend a hand and loves brainstorming creative
              solutions. In his free time, he explores tech gadgets.
            </div>
            <div className="social-icons">
              <a href="#instagram">
                <FaInstagram />
              </a>
              <a href="#twitter">
                <FaTwitter />
              </a>
              <a href="#linkedin">
                <FaLinkedin />
              </a>
              <a href="#email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Frame 2: Vertical Cards */}
      <div className="ash-frame frame-two">
        <div className="frame-two-heading">Our Team</div>
        <div className="frame-two-subheading">
          Meet Our CEO and Lead Assistant
        </div>
        <div className="white-card">
          <div className="worker-name">Myma Mantey</div>
          <div className="worker-role">Lead Virtual Assistant</div>
          <div className="worker-description">
            Expert at crafting engaging stories. Finds joy in traveling and
            trying new cuisines.
          </div>
          <div className="social-icons">
            <a href="#instagram">
              <FaInstagram />
            </a>
            <a href="#twitter">
              <FaTwitter />
            </a>
            <a href="#linkedin">
              <FaLinkedin />
            </a>
            <a href="#email">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="white-card card-frame-two decorative-card">
          {/* This card is empty for decor */}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
