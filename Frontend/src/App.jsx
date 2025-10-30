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

      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projucts />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
};

export default App;
