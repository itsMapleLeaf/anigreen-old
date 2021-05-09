module.exports = {
  mode: "jit",
  purge: [`./{app,public}/**/*.{js,jsx,ts,tsx}`],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      DEFAULT: "0px 3px 8px rgba(0, 0, 0, 0.3)",
      inset: "0 0 8px inset rgba(0, 0, 0, 0.3)",
    },
    extend: {
      fontFamily: {
        sans: `"Fira Sans", sans-serif`,
        condensed: `"Fira Sans Condensed", sans-serif`,
      },
      transitionDuration: {
        DEFAULT: "0.2s",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
