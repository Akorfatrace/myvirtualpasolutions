import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Homepage.css";

import VirtualAssistant from "./VirtualAssistant";
import AlternatingText from "./AlternatingText";
import IntroSection from "./IntroSection";

const Homepage = () => {
  const images = [
    "/images/virtual0.png",
    "/images/virtual1.png",
    "/images/virtual2.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const heroRef = useRef(null);

  // Change the hero image periodically
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  // Handle scroll effects for hero section
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const fadeOutThreshold = window.innerWidth <= 768 ? 200 : 500;

      if (heroRef.current) {
        // Calculate opacity and translation
        const opacity = 1 - scrollY / fadeOutThreshold;
        heroRef.current.style.opacity = opacity < 0 ? 0 : opacity;
        heroRef.current.style.transform = `translateY(${scrollY * -0.2}px)`;

        // Dynamically toggle the hidden class
        if (scrollY > fadeOutThreshold) {
          if (!heroRef.current.classList.contains("hidden")) {
            heroRef.current.classList.add("hidden");
          }
        } else {
          heroRef.current.classList.remove("hidden");
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

      <AlternatingText />
      <IntroSection />
      <VirtualAssistant />
      <Footer />
    </>
  );
};

export default Homepage;
