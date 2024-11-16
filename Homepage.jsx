import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Homepage.css";
import { Link } from "react-router-dom";
import Services from "./Services";
import VirtualAssistant from "./VirtualAssistant";

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

      if (introRef.current) {
        const rect = introRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          introRef.current.classList.add("visible");
        } else {
          introRef.current.classList.remove("visible");
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
      <Services />

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

          {/* Dotted Image placed under text, aligned left */}
          <img
            src="/images/dottedImage.png"
            alt="Decorative"
            className="dotted-image"
          />
        </div>

        <img
          src="/images/virtual1.jpg" // Path to your image
          alt="Card Image"
          className="intro-image" // Ensure class name is set
        />
      </section>
      <VirtualAssistant />

      <Footer />
    </>
  );
};

export default Homepage;
