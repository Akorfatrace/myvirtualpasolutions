import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollToTop from "./ScrollToTop"; // Corrected path
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Homepage from "../Homepage";
import Contact from "../Contact";
import AboutUs from "../AboutUs";
import Services from "../Services";
import NewsletterPopup from "../NewsletterPopup";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <NewsletterPopup />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;
