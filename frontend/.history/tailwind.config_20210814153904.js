module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        honeydew: "rgb(240, 255, 240)",
        chat: "rgb(235,255,235)",
      },
      overflowY: ["hover"],
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(75px, 1fr))",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
