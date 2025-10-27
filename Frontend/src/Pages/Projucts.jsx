import React from "react";
import ProjuctCard from "../Components/ProjuctCard";
import movie_app from "../assets/movie-app.png";
import nike_landing from "../assets/nike-landing.png";
import real_estate from "../assets/rel-estate.png";
import { motion } from "framer-motion";

const Projucts = () => {
  const projects = [
    {
      id: 1,
      title: "Nike Landing Page",
      description:
        "A modern and responsive Nike landing page showcasing products with smooth animations and clean design using React and Tailwind CSS.",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      image: nike_landing,
    },
    {
      id: 2,
      title: "Movie Fetching Web App",
      description:
        "A movie search and discovery app that fetches data from a public movie API, allowing users to explore trending films and detailed info.",
      techStack: ["React", "API Integration", "Tailwindcss"],
      image: movie_app,
    },
    {
      id: 3,
      title: "Real Estate Web Application",
      description:
        "A real estate web platform displaying property listings with filtering and responsive design, built using React and Tailwind CSS.",
      techStack: ["React", "Tailwind CSS", "JavaScript"],
      image: real_estate,
    },
  ];

  // Define motion variants for scroll animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  // 🔹 Individual card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  return (
    <section className="min-h-screen dark:bg-slate-950 bg-white flex items-center justify-center overflow-x-hidden px-6 py-20">
      <div className="w-full max-w-7xl flex flex-col items-center gap-20">
        <motion.div
          className="w-full max-w-6xl flex justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, amount: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="w-fit relative text-4xl xl:text-5xl dark:text-white font-bold
           text-slate-950 text-center before:absolute before:h-1 before:w-full 
           before:content-[''] dark:before:bg-white before:bg-slate-950 before:left-0 before:top-[115%]
           after:absolute after:w-5 after:h-5 after:bg-red-600 after:content-[''] 
           after:left-[50%] after:-translate-x-[50%] after:rounded-full after:top-[115%] after:-translate-y-[50%]"
          >
            My<span className="text-red-600 ">Works</span>
          </h1>
        </motion.div>

        <motion.div
          className="w-full grid xl:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <ProjuctCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              image={project.image}
              variants={cardVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projucts;
