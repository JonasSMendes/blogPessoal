const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#202225',
        secondary:'#5865f2',
        gray: colors.trueGray,
        gray: {
        '50': "#fafafa",
        '100': "#f5f5f5",
        '200': "#e5e5e5",
        '300': "#d4d4d4",
        '400': "#a3a3a3",
        '500': "#737373",
        '600': "#525252",
        '700': "#404040",
        '800': "#262626",
        '900': "#171717",
    }
      }
    },
  },
  plugins: [],
}
