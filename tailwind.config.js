const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.vue"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "pink-primary": "#ff337b",
        "brownish-gray": "#747474",
        "kado-gray": "#e5e9ec",
      },
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        heading: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: ".625rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
