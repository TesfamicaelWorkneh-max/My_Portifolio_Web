/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode with .dark class on root element
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", // all JS/TS/HTML files in src
    "./public/index.html", // your public HTML file
    "./*.html", // any other HTML files in root
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
