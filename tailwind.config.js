const materialPalette = require("./materialPalette.js");

module.exports = {
  purge: {
    content: [
      "./src/components/*.svelte",
      "./src/css/*.svelte",
      "./src/routes/*.svelte",
      "./src/template.html",
    ],
  },
  theme: {
    boxShadow: {
      default: "0px 4px 8px 0px rgba(0,0,0,0.10)",
    },
    colors: materialPalette,
    extend: {
      height: {
        "min-content": "min-content",
      },
      width: {
        "max-content": "max-content",
      },
      transitionProperty: {
        width: "width",
        "text-color": "color",
        "bg-color": "background-color",
        filter: "filter",
      },
    },
  },
  variants: {},
  plugins: [],
};
