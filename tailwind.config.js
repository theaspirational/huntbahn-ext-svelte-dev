module.exports = {
  content: ["./src/popup/**/*.{html,js,svelte,ts}"],
  darkMode: 'class', // or 'media' or 'class'
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark"],
  },
  theme: {
    extend: {},
  },
  variants: {},
};

