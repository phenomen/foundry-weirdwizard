const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./templates/**/*.hbs"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        cursive: ["Forum", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        ww: {
          orchid: "#dbd3dc",
          purple: "#49244f",
          silver: "#bcbec0",
        },
      },
    },
  },
  plugins: [],
};
