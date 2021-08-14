module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        honeydew: "rgb(240, 255, 240)",
      },
      overflowY: ["hover"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
