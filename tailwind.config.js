/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "Mt": ['Montserrat', 'sans-serif'],
        "Rb": ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}