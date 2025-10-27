import React from "react";
import { useState, useEffect } from "react";
import Navigation from "./Pages/Navigation";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projucts from "./Pages/Projucts";
import { Routes, Route } from "react-router-dom";
import Footer from "./Pages/Footer";
import Skills from "./Pages/Skills";
const App = () => {
  return (
    <>
      <Navigation />;
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projucts />} />
        <Route path = "/skills" element={<Skills/>}
      </Routes>
      <Footer />
    </>
  );
};
export default App;
