import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
const footerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Footer = () => {
  return (
    <footer className="sticky top-[100%] bg-gray-900 backdrop-blur-md text-gray-50 py-6 px-8 w-full shadow-lg z-50 overflow-hidden">
      <div className="max-w-6xl mx-auto p-2">
        <motion.div
          className="flex flex-col md:flex-row justify-around items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            custom={0}
            variants={footerVariants}
            className="text-xl font-semibold mb-3 md:mb-0"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-500 underline underline-offset-8">
              Tesfamicael
            </span>
            | Portfolio
          </motion.h2>

          <motion.ul
            custom={1}
            variants={footerVariants}
            className="flex gap-6 max-sm:flex-col mb-3"
          >
            <li>
              <Link
                to="/"
                className="hover:text-red-600 cursor-pointer transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-red-600 cursor-pointer transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-red-600 cursor-pointer transition"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-red-600 cursor-pointer transition"
              >
                Contact
              </Link>
            </li>
          </motion.ul>

          <motion.div
            custom={2}
            variants={footerVariants}
            className="flex space-x-4 text-xl"
          >
            <a href="#" className="hover:text-red-600 transition">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-red-600 transition">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-red-600 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-red-600 transition">
              <FaInstagram />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row  items-start justify-center space-y-2 md:space-y-0 md:space-x-6 mt-4 text-sm"
        >
          <motion.a
            custom={3}
            variants={footerVariants}
            href="mailto:worknehtesfamicael707@gmail.com"
            className="flex items-center space-x-2 hover:text-red-600 transition"
          >
            <MdEmail className="text-2xl" />
            <span className="max-sm:text-sm sm:text-xl">
              worknehtesfamicael707@gmail.com
            </span>
          </motion.a>

          <motion.a
            custom={4}
            variants={footerVariants}
            href="tel:+251964623413"
            className="flex items-center space-x-2 hover:text-red-600 transition"
          >
            <FiPhoneCall className="text-xl" />
            <span className="max-sm:text-sm sm:text-xl">+251 96 462 3413</span>
          </motion.a>
        </motion.div>

        {/* Bottom Text */}
        <motion.p
          custom={5}
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center text-xl text-red-500 mt-4"
        >
          © {new Date().getFullYear()} Tesfamicael. All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
