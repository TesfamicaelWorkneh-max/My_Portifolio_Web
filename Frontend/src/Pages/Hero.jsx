import React from "react";
import { motion } from "framer-motion";
import ProfileImage from "../assets/nasa2.png";
import { FaInstagram, FaLinkedin, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const icons = [
    { Icon: FaInstagram, delay: 0 },
    { Icon: FaLinkedin, delay: 0.2 },
    { Icon: FaTiktok, delay: 0.4 },
    { Icon: FaYoutube, delay: 0.6 },
  ];

  return (
    <section className="min-h-[100vh] dark:bg-slate-950 bg-white text-slate-50 flex items-center justify-center px-6 py-12 overflow-hidden max-sm:py-24">
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-12 md:px-4 py-4 max-lg:flex-col-reverse"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1, ease: "linear" }}
      >
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col justify-center text-center lg:text-left w-full gap-6"
        >
          <h1 className="dark:text-white text-slate-950 text-4xl md:text-6xl w-full font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-500 underline underline-offset-8">
              Tesfamicael
            </span>
          </h1>
          <p className="dark:text-slate-100 text-slate-950 text-xl md:text-2xl leading-relaxed">
            A passionate Frontend Developer who enjoys crafting beautiful,
            modern, and responsive web interfaces using React and Tailwind CSS.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center lg:justify-start mt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-slate-50 px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition-all duration-300"
            >
              <Link to="/projects">View My Work</Link>
            </motion.button>
          </motion.div>
          <div className="flex w-full gap-10 max-lg:justify-center mt-4">
            {icons.map(({ Icon, delay }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{
                  duration: 0.3,
                  delay,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 300,
                }}
              >
                <Icon
                  size={35}
                  className="text-red-600 font-bold dark:hover:text-white hover:text-slate-950 transition-all duration-300 cursor-pointer"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center w-full lg:w-1/2"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex justify-center z-10 items-center before:rounded-full before:absolute before:bg-gradient-to-r from-blue-600 to-red-500 before:w-[260px] before:z-[-1] before:h-[260px] before:sm:w-[330px] before:sm:h-[330px] before:contents-[''] relative w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] rounded-full shadow-[0_0_40px_-10px_rgba(100,100,100,1)] hover:shadow-[0_0_70px_-10px_rgba(34,197,94,0.8)] dark:shadow-[0_0_40px_-10px_rgba(34,100,94,0.6)] transition-shadow duration-500"
          >
            {" "}
            <img
              src={ProfileImage}
              alt="Tesfamicael"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
