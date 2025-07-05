/** @type {import('tailwindcss').Config} */
const colors = require('./src/tailwind/color');
const spacing = require('./src/tailwind/spacing');


module.exports = {
  content: [
      "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors:colors
    },
  },
 darkMode: 'class',
  plugins: [],
}

