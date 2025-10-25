import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
const ProjectCard = ({ title, description, techStack, image, variants }) => {
  const [show, setShow] = useState(false);
  const reference = useRef(null);

  useEffect(() => {
    if (reference.current) {
      reference.current.style.transition = "top 0.4s ease-in-out";
      reference.current.style.top = show ? "0" : "-100%";
    }
  }, [show]);

  return (
    <motion.div
      className="relative rounded-md cursor-pointer group  max-sm:w-full"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      variants={variants}
      initial={variants.hidden}
      whileInView={variants.visible}
      viewport={{ once: true, amount: 0.5 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-1/2 rounded-md group-hover:scale-105 transition-transform duration-300 "
      />

      <div className="w-full h-1/2 rounded-md dark:bg-slate-950 bg-white flex flex-col justify-center gap-2 items-center  p-4">
        <h2 className="max-sm:text-lg text-xl text-center font-bold text-slate-950 dark:text-gray-50 w-full">
          {title}
        </h2>
        <p className="text-sm text-gray-800 text-center mb-4 dark:text-gray-300">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-red-400 dark:bg-green-400/20 p-2 rounded-md text-gray-50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
