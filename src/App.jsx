// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./ScrollToTop";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Homepage from "../Homepage"; // Ensure the path is correct
import Contact from "../Contact"; // Import the new Contact component
import AboutUs from "../AboutUs";

const App = () => {
  return (
    <Router>
      {/* Add ScrollToTop inside Router */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />{" "}
        {/* Add the new route */}
      </Routes>
    </Router>
  );
};

export default App;
