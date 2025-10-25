import React from "react";
import { useTheme } from "../Context/ThemeContext.jsx";
import { motion } from "framer-motion";
const ThemeToggle = () => {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full font-bold"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "Light" : "Dark"}
    </motion.button>
  );
};
export default ThemeToggle;
