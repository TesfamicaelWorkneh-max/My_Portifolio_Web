import React from "react";
import { useState, useEffect } from "react";
import Navigation from "./Pages/Navigation";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projucts from "./Pages/Projucts";
import { Routes, Route } from "react-router-dom";
import Footer from "./Pages/Footer";
const App = () => {
  return (
    <>
      <Navigation />;
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projucts />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
