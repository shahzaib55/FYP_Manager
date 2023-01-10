/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        open: ["Open Sans", "sans-serif"],
        // 'lora': ["'Lora', 'serif'"]
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("autoprefixer"), require('tailwind-scrollbar'),],
};
