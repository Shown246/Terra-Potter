import daisyui from "daisyui";
const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  darkMode: 'selector',
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skin: "#E4C59E",
        lbr: "#AF8260",
        dbr: "#803D3B",
        bdr: "#322C2B",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light"],
  },
});
