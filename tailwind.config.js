const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      // gray
      blueGray: colors.blueGray,
      coolGray: colors.coolGray,
      gray: colors.gray,
      trueGray: colors.trueGray,
      warmGray: colors.warmGray,
      // red
      red: colors.red,
      orange: colors.orange,
      // yellow
      yellow: colors.amber,
      amber: colors.amber,
      // green
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      // blue
      cyan: colors.cyan,
      lightBlue: colors.lightBlue,
      blue: colors.lightBlue,
      // purple
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      // pink
      fuchsia: colors.fuchsia,
      pink: colors.pink,
      rose: colors.rose,
      // white
      white: colors.white,
      // black
      black: colors.black,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
