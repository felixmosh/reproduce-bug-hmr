/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      qs: { max: "479px" },
      sm: { min: "480px" },
      md: { min: "768px" },
      lg: { min: "976px" },
      xl: { min: "1440px" },
    },
    extend: {},
  },
  plugins: [],
};
