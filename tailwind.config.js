/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', //dark mode
  content: ["./src/**/*.{html,js}"], //reconnaissance des fichiers html et js
  theme: {
    extend: {
      fontFamily: {
        fredoka: ["Fredoka One", "regular"], //declration du font family
      },
    },
  },
  plugins: [],
};
