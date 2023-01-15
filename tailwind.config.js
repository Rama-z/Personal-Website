/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: [],
      Poppins: ["Poppins", "sans-serif"],
      Libre: ["Libre Baskerville", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
