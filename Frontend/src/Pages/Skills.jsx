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
        <h1 className="text-4xl xl:text-6xl font-bold text-center text-slate-900 dark:text-white relative">
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
