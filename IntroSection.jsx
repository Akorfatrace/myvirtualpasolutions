import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./IntroSection.css";

const IntroSection = () => {
  const introRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = introRef.current?.getBoundingClientRect();
      if (rect && rect.top < window.innerHeight - 100 && rect.bottom >= 0) {
        introRef.current.classList.add("visible");
      } else {
        introRef.current.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="intro-section" ref={introRef}>
      <div className="text-wrapper">
        <div className="text">
          <div className="dash"></div>
          <h3>Achieve More with Professional Support You Can Trust</h3>
          <p>
            We provide reliable, streamlined solutions that empower busy
            entrepreneurs and executives to focus on growth, leaving the details
            to us.
          </p>
          <Link to="/Services" className="learn-more">
            Learn More
            <span className="arrow-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                width="16"
                height="16"
              >
                <path d="M10 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
        </div>
        <img
          src="/images/dottedImage.png"
          alt="Decorative"
          className="dotted-image"
        />
      </div>
      <img
        src="/images/virtual5.jpg"
        alt="Intro Image"
        className="intro-image"
      />
    </section>
  );
};

export default IntroSection;
