const defaultTheme = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");

const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customPurple: "#634bbe",
        customGreen:"#A5E065",
        customDarkGreen:"#94c95b"

      },
      backgroundImage: {
        'custom-gradient': "linear-gradient(to left, #634bbe, #634BBE)",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add Poppins as a default sans-serif font
      },
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities({
        "bg-grid": (value) => ({
          backgroundImage: `url("${svgToDataUri(
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="120" height="120" fill="none" stroke="${value}">
            <path d="M0 .5H31.5V32" stroke-width="0.1"/></svg>`
          )}")`,
        })
      }, { values: flattenColorPalette(theme("backgroundColor")), type: "color" });
    },
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}
