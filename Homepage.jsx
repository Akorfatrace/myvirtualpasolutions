import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  const images = [
    "/images/virtual0.png",
    "/images/virtual1.png",
    "/images/virtual2.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const heroRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (heroRef.current) {
        heroRef.current.style.opacity = 1 - scrollY / 500;
        heroRef.current.style.transform = `translateY(${scrollY * -0.2}px)`;
      }

      // Check visibility of the intro section
      if (introRef.current) {
        const rect = introRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          introRef.current.classList.add("visible"); // Add class to trigger animation
        } else {
          introRef.current.classList.remove("visible"); // Remove class if not in view
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className="parallax-background"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <Navbar />
        <div className="hero-overlay" ref={heroRef}>
          <h1 className="hero-title">Delegate to Elevate</h1>
          <p className="hero-subtitle">Your Success • Our Priority</p>
        </div>
      </div>
      <section className="intro-section" ref={introRef}>
        <div className="text-wrapper">
          <div className="text">
            <div className="dash"></div> {/* Short horizontal line (dash) */}
            <h3>Achieve More with Professional Support You Can Trust</h3>
            <p>
              We provide reliable, streamlined solutions that empower busy
              entrepreneurs and executives to focus on growth, leaving the
              details to us.
            </p>
            <Link to="/Contact" className="learn-more">
              Get in Touch with Us
              <span className="arrow-right">→</span>
            </Link>
          </div>
        </div>

        <img src="public/images/virtual3.jpg" alt="Card Image" />
      </section>

      {/* Placeholder content section to see scrolling effect */}
      <section className="content-section">
        <h3>Our Approach</h3>
        <p>
          At our company, we believe in providing personalized support to help
          you achieve your goals. Our team works closely with clients,
          understanding their unique needs to deliver efficient solutions.
        </p>
        <p>
          From strategic planning to hands-on support, we offer a full range of
          services designed to make your work life easier and more productive.
          With our expertise, you can focus on growing your business with
          confidence.
        </p>
        <h3>Why Choose Us</h3>
        <p>
          We are committed to excellence, delivering results that drive success
          for our clients. Our reputation for quality support speaks for itself,
          and we are here to ensure you achieve remarkable outcomes.
        </p>
      </section>

      <Footer />
    </>
  );
};

export default Homepage;
