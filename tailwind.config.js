/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        royal: "#0f2a44",
        fcPurple: "#5b2cff",
        fcMagenta: "#c026d3",
        fcOrange: "#f97316",
      },
      backgroundImage: {
        "for-christ": "linear-gradient(90deg, #5b2cff, #c026d3, #f97316)",
      },
    },
  },
  plugins: [],
};
