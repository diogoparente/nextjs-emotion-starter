const colors = require("tailwindcss/colors");
const { breakpoints, light, dark } = require("./theme");

delete colors["lightBlue"];
delete colors["warmGray"];
delete colors["trueGray"];
delete colors["coolGray"];
delete colors["blueGray"];

/**@type {import('tailwindcss').Config}*/
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  important: true,
  theme: {
    extend: {
      screens: {
        "sm-max": { max: breakpoints.sm },
        "md-max": { max: breakpoints.m },
        "lg-max": { max: breakpoints.lg },
        "sm-min": { min: breakpoints.sm },
        "md-min": { min: breakpoints.m },
        "lg-min": { min: breakpoints.lg },
      },
      colors: {
        ...colors,
        c1: "var(c1)",
        c2: "var(c2)",
        c3: "var(c3)",
        c4: "var(c4)",
        "c1-d": "var(c1-d)",
        "c2-d": "var(c2-d)",
        "c3-d": "var(c3-d)",
        "c4-d": "var(c4-d)",
        "c1-l": "var(c1-l)",
        "c2-l": "var(c2-l)",
        "c3-l": "var(c3-l)",
        "c4-l": "var(c4-l)",
      },
      variables: {
        DEFAULT: {
          colors: light,
          breakpoints,
        },
      },
      darkVariables: {
        DEFAULT: {
          colors: dark,
        },
      },
    },
  },
  // xwind options
  xwind: {
    mode: "objectstyles",
  },
  plugins: [
    require("tailwindcss-filters"),
    require("@mertasan/tailwindcss-variables"),
    require("tailwind-scrollbar-hide"),
  ],
};
