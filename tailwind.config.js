/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        'rubik': "'rubik',sans serif"
      },
      screens: {
        '2xl': '1536px',
        // Add more custom breakpoints if necessary
      },
    },
  },
  plugins: [],
}

