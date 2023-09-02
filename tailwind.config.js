/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html", "./*.js"],
  theme: {
    extend: {
      fontFamily: {
        Commissioner: ['Commissioner', 'sans-serif']
      },
      colors: {
        Primary: {
          Moderatecyan: 'hsl(176, 50%, 47%)',
          Darkcyan: 'hsl(176, 72%, 28%)'
        },
        Neutral: {
          Black: 'hsl(0, 0%, 0%)',
          Darkgray: 'hsl(0, 0%, 48%)'
        },
      },
      spacing: {
        '10/13': '89%'
      },
    },
  },
  plugins: [],
}

