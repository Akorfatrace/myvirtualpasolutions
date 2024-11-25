import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Homepage.css";
import Services from "./Services";
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

  // Image transition every 10 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (heroRef.current) {
        const opacity = 1 - scrollY / 500;
        heroRef.current.style.opacity = opacity;
        heroRef.current.style.transform = `translateY(${scrollY * -0.2}px)`;

        // Ensure the hero text is hidden after passing the hero section
        if (scrollY > 300) {
          heroRef.current.classList.add("hidden");
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
      <Services />
      <AlternatingText />
      <IntroSection />
      <VirtualAssistant />
      <Footer />
    </>
  );
};

export default Homepage;
