import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiGit,
} from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "React", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Git", Icon: SiGit },
];

const Skills = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 min-h-[100vh] flex items-center justify-center">
      <div className="max-w-6xl flex flex-col items-center gap-16">
        <h1
          className="w-fit relative text-3xl xl:text-4xl dark:text-white font-bold mb-8
           text-slate-950 text-center before:absolute before:h-1 before:w-full 
           before:content-[''] dark:before:bg-white before:bg-slate-950 before:left-0 before:top-[110%]
           after:absolute after:w-5 after:h-5 after:bg-red-600 after:content-[''] 
           after:left-[50%] after:-translate-x-[50%] after:rounded-full after:top-[110%] after:-translate-y-[50%]"
        >
          My <span className="text-red-600">Skills</span>
        </h1>

        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-8 whitespace-nowrap"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
          >
            {[...skills, ...skills].map((skill, idx) => {
              const Icon = skill.Icon;
              return (
                <div
                  key={idx}
                  className="inline-flex flex-col items-center justify-center min-w-[150px] p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg"
                >
                  <Icon className="text-red-600 w-16 h-16 mb-2" />
                  <p className="text-lg font-semibold text-slate-800 dark:text-white">
                    {skill.name}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
