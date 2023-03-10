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
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        rollup: {
          "0%": { transform: "translateX(0)" },
          "30%": { transform: "translateY(-25%)" },
          "45%": { transform: "translateY(0%)" },
          "60%": { transform: "translateY(-10%)" },
          "70%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        rotateButton: {
          "0%": { transform: "rotateY(180deg" },
          "100%": { transform: "rotateY(360deg" },
        },
      },
      animation: {
        wiggles: "wiggle 2s linear 1",
        rollup: "rollup 1.5s linear 1",
        rotateButton: "rotateButton 1s linear infinite",
      },
    },
  },
  plugins: [],
};
