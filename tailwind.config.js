/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#475569',
        secondary: '#9ca3af',
        neutral: '#e5e5e5',
        base: '#e5e5e5',
      }
    },
  },
  plugins: [require("daisyui")],
};