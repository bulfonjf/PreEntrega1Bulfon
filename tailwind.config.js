/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins: [require("daisyui")],

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-muted": "oklch(var(--secondary-muted) / <alpha-value>)",
      }
    },
  },

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "--secondary-muted": "338 83% 66%",
        },
      },
    ],
  },
};