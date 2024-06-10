/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,css}", // Adjust the paths according to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        'league-spartan': ['League Spartan','sans-serif'],
      },
    },
  },
  plugins: [],
}
