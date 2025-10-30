import React from "react";
import Navigation from "./Pages/Navigation";
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projucts from "./Pages/Projucts";
import Skills from "./Pages/Skills";
import Footer from "./Pages/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Contact />
      <Projucts />
      <Skills />
      {/* <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projucts />} />
        <Route path="/skills" element={<Skills />} />
      </Routes> */}
      <Footer />
    </>
  );
};

export default App;
