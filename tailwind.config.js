/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        test: "#FF0000",
        white: "#ffffff",
        lightGray: "#999",
        blue: "#689af8",
      },
    },
    
  },
  plugins: [],
};
