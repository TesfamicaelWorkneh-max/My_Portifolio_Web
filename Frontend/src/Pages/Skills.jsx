import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "HTML", Icon: SiHtml5 },
  { name: "CSS", Icon: SiCss3 },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "React", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "MongoDB", Icon: SiMongodb },
];

const Skills = () => {
  return (
    <section className="py-12 bg-slate-100 dark:bg-slate-950 overflow-hidden">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 dark:text-white">
        My Skills
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {skills.concat(skills).map((skill, idx) => {
            const Icon = skill.Icon;
            return (
              <div
                key={idx}
                className="inline-flex flex-col items-center justify-center min-w-[150px] mx-4 bg-white dark:bg-slate-800 p-4 rounded-lg shadow-lg"
              >
                <Icon className="w-16 h-16 text-red-500 mb-2" />
                <p className="text-lg font-semibold text-center text-slate-900 dark:text-white">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
