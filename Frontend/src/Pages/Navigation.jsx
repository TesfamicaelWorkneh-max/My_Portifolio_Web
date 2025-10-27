import React, { useState } from "react";
import ProfileImage from "../assets/ProfileImage8.jpg";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "../Components/ThemeToggle";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "About", "Projects", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full dark:bg-slate-950 backdrop-blur-md z-[9999]  bg-white/20 px-3">
      <nav className="flex items-center justify-around px-6 md:px-20 py-3 text-slate-50 overflow-x-hidden">
        <div className="flex items-center justify-center gap-3 relative">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={ProfileImage}
              alt="Profile"
              className="w-10 h-10 max-sm:w-8 max-sm:h-8 rounded-full object-cover dark:border-red-600 border-slate-950 border-2"
            />
            <span className="absolute bg-red-600 w-2 h-2 rounded-full bottom-0 right-1  border border-white"></span>
          </motion.div>
          <h1 className="text-2xl max-sm:text-xl font-semibold tracking-wide dark:text-white text-slate-950">
            Tesfa
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-500 font-bold">
              Dev
            </span>
          </h1>
        </div>

        <ul className="hidden md:flex gap-10 font-semibold dark:text-slate-50 text-white dark:bg-green-900/10 backdrop-blur-lg p-3 rounded-3xl bg-slate-900/95 ">
          {links.map((link, index) => (
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2, ease: "linear" }}
              key={index}
              className="full duration-300 cursor-pointer hover:text-red-500 transition-colors"
            >
              <NavLink
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive && "text-red-500 dark:text-purple-500"
                }
              >
                {link}
              </NavLink>
            </motion.li>
          ))}
        </ul>
        <ThemeToggle />
        <div
          className="md:hidden cursor-pointer dark:text-slate-50 text-slate-950"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              key="mobile-menu"
              initial={{ opacity: 0, y: "-100%", x: 200 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: "-100%" }}
              transition={{ duration: 0.5 }}
              className="absolute rounded-md top-full left-[25%]  w-[50%] bg-slate-900/95 backdrop-blur-lg flex flex-col  items-center gap-20  py-8 text-lg font-semibold text-slate-300 md:hidden shadow-lg"
            >
              <div className="absolute top-[calc(100%-8px)] w-1/2  h-2 rounded-md bg-gradient-to-r from-red-400 to-blue-500 "></div>
              <div className="absolute top-0 w-1/2  h-2  rounded-md  bg-gradient-to-r from-red-400 to-blue-500 "></div>

              {links.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                  className="relative hover:text-red-400 transition-colors duration-300 cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  <NavLink
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    // className={({ isActive }) =>
                    //   isActive && "text-red-500 dark:text-purple-500"
                    // }
                  >
                    {link}
                  </NavLink>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navigation;
