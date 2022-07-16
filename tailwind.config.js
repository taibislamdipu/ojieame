/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        lightGray: "#999",
        darkGray: "#1a1919",
        dateGray: "#676767",
        blue: "#689af8",
        black: "#000",
      },
    },
  },
  plugins: [],
};
