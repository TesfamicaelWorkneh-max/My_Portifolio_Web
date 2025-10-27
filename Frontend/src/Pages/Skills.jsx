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
import { once } from "lodash";
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
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },

  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Skills = () => {
  return (
    <section className="py-12 bg-white dark:bg-slate-950  min-h-[100vh] flex items-center justify-center">
      <motion.div className="max-w-6xl flex flex-col items-center py-10 gap-20 vari">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ onece: false, amount: 0.5 }}
          transition={{ duration: 2, ease: "linear" }}
          className="w-fit relative text-4xl xl:text-6xl dark:text-white font-bold
                  text-slate-950 text-center before:absolute before:h-1 before:w-full 
                  before:content-[''] dark:before:bg-white before:bg-slate-950 before:left-0 before:top-[115%]
                  after:absolute after:w-5 after:h-5 after:bg-red-600 after:content-[''] 
                  after:left-[50%] after:-translate-x-[50%] after:rounded-full after:top-[115%] after:-translate-y-[50%]"
        >
          My<span className="text-red-600 ">skills</span>
        </motion.h1>

        <motion.div className="relative w-full overflow-hidden">
          <motion.div
            className="flex animate-marquee whitespace-nowrap"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[...skills, ...skills].concat(skills).map((skill, idx) => {
              const Icon = skill.Icon;
              return (
                <motion.div
                  variants={cardVariants}
                  custom={idx}
                  key={idx}
                  className="inline-flex flex-col items-center justify-center min-w-[150px] mx-4 bg-white dark:bg-slate-950 p-4 rounded-lg shadow-lg"
                >
                  <Icon className="w-20 h-20 dark:text-red-500 text-slate-950 mb-2" />
                  <p className="text-lg font-semibold text-center text-slate-900 dark:text-white">
                    {skill.name}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
