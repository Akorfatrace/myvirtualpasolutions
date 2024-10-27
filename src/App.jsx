// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar"; // Import the Navbar component
import Homepage from "../Homepage"; // Ensure the path is correct
import Contact from "../Contact"; // Import the new Contact component

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Place Navbar here to make it visible on all pages */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />{" "}
        {/* Add the new route */}
      </Routes>
    </Router>
  );
};

export default App;
