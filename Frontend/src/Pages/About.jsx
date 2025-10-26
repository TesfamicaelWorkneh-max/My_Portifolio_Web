import React from "react";
import { motion } from "framer-motion";
import profileimg from "../assets/ProfileImage8.jpg";
const About = () => {
  const skillsTree = [
    {
      date: "Nov 2021",
      name: "Starting at Arba Minch University 🎓",
      description:
        "The journey began — filled with curiosity and excitement to explore the world of Computer Science. I knew little, but my heart was full of dreams.",
    },
    {
      date: "Feb 2022",
      name: "HTML & CSS",
      description:
        "My first step into web development — learning how the web is built, styled, and displayed. I started creating simple pages and fell in love with it.",
    },
    {
      date: "May 2022",
      name: "C Programming",
      description:
        "Learning logic, loops, and algorithms. This was the phase where I understood what real programming means.",
    },
    {
      date: "Aug 2022",
      name: "Java & Data Structures",
      description:
        "The excitement of solving problems and writing clean logic grew strong. Java became my solid base for algorithms and thinking like a developer.",
    },
    {
      date: "Nov 2022",
      name: "JavaScript",
      description:
        "I started to make my web pages dynamic — DOM, events, and interactive features became my playground.",
    },
    {
      date: "Feb 2023",
      name: "React & Tailwind",
      description:
        "A turning point — I built my first component-based app, and Tailwind made my designs faster and cleaner. This is when I felt like a real frontend developer.",
    },
    {
      date: "May 2023",
      name: "Node.js & Express",
      description:
        "Stepping into backend development — I learned how to build APIs and connect frontend to server logic. It gave me the full-stack taste.",
    },
    {
      date: "Aug 2023",
      name: "MongoDB & REST APIs",
      description:
        "Learning to handle real-world data. I created small CRUD projects that connected all I had learned — it felt magical.",
    },
    {
      date: "Nov 2023",
      name: "Version Control & GitHub",
      description: "Understanding teamwork, collaboration, and versioning.",
    },
    {
      date: "Feb 2024",
      name: "Problem Solving & DSA",
      description:
        "Practicing algorithms daily boosted my logic and speed. I participated in coding challenges with joy.",
    },
    {
      date: "May 2024",
      name: "Mini Projects & Teamwork",
      description:
        "Collaborated with friends on academic and personal projects. Learned how to manage time, code quality, and teamwork.",
    },
    {
      date: "Aug 2024",
      name: "Portfolio & Design Skills",
      description:
        "Started creating personal designs and portfolio drafts. UI/UX became an area of deep interest.",
    },
    {
      date: "Nov 2024",
      name: "MERN Stack Development",
      description:
        "I merged everything — React, Node, MongoDB — and created full-stack apps. It was challenging but deeply satisfying.",
    },
    {
      date: "Feb 2025",
      name: "AI & Cloud Curiosity",
      description:
        "Began exploring AI integrations and deploying apps online. My passion grew stronger than ever.",
    },
    {
      date: "May 2025",
      name: "Final Year Projects 🎯",
      description:
        "Built impactful academic projects showcasing all I learned — from clean UI to database integration.",
    },
    {
      date: "Aug 2025",
      name: "Graduation & Beyond 🎓✨",
      description:
        "Graduated from Arba Minch University! Looking back, the sleepless nights, code errors, and endless debugging were worth it — now, I’m ready to create and inspire.",
    },
  ];

  const cardVariantsleft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "linear" },
    },
  };
  const cardVariantsright = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "linear" },
    },
  };

  return (
    <section className="min-h-screen bg-white dark:bg-slate-950 px-6 flex items-center justify-center py-20 max-sm:py-20 overflow-x-hidden">
      <div className="max-w-6xl w-full flex-col items-center gap-12 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          viewport={{ once: true, amount: 0.7 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1
            className="w-fit relative text-3xl xl:text-4xl dark:text-white font-bold mb-8
           text-slate-950 text-center before:absolute before:h-1 before:w-full 
           before:content-[''] dark:before:bg-white before:bg-slate-950 before:left-0 before:top-[110%]
           after:absolute after:w-5 after:h-5 after:bg-red-600 after:content-[''] 
           after:left-[50%] after:-translate-x-[50%] after:rounded-full after:top-[110%] after:-translate-y-[50%]"
          >
            About <span className="text-red-600">Me</span>
          </h1>
        </motion.div>

        <div className="relative w-full max-sm:w-full max-sm:pt-20">
          <div className="absolute left-[50%] w-2 h-full dark:bg-white bg-slate-950 rounded-md max-sm:z-0 top-0 -translate-x-[50%]"></div>

          <div className="relative flex flex-col gap-20">
            {skillsTree.map(({ name, description, date }, index) => {
              const isLeft = index % 2;

              return (
                <motion.div
                  key={index}
                  variants={isLeft ? cardVariantsleft : cardVariantsright}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  className={`transition-all max-md:w-full self-start relative dark:bg-white shadow-md bg-slate-950 p-6 mb-20 max-sm:py-12 rounded-md w-[40%] ${isLeft ? "self-start " : "self-end "}`}
                >
                  <div
                    className={`w-14 h-14 flex items-center rounded-full justify-center dark:bg-blue-400 bg-red-600 overflow-hidden absolute ${isLeft ? "md:left-[125%]" : "md:-left-[25%]"} max-sm:left-[50%] -translate-x-[50%] z-10 -top-[10%] max-sm:top-[-40%]`}
                  >
                    <img src={profileimg} className="w-full rounded-full"></img>
                  </div>

                  <h2 className="md:text-2xl text-xl dark:text-red-600 text-red-400 font-extrabold my-2">
                    {name}
                  </h2>
                  <p className="text-lg dark:text-slate-950 text-white">
                    {description}
                  </p>

                  <div
                    className={`max-sm:top-0 max-sm:left-0 px-12 max-lg:border-none flex items-center justify-center absolute top-[50%] -translate-y-[50%] w-[25%] bg-white dark:bg-slate-950 max-sm:w-full ${
                      isLeft
                        ? "left-[100%] border-r-slate-900  dark:border-r-white border-r-4"
                        : "right-[100%] border-l-slate-900  dark:border-l-white border-l-4"
                    } p-2`}
                  >
                    <p className="text-2xl lg:text-3xl dark:text-white text-slate-950 font-bold">
                      {date}
                    </p>
                  </div>
                  <div className="absolute left-0 h-full rounded-md w-2 bg-gradient-to-b from-red-400 to-blue-500 top-0"></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
