/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        primary: {
          DEFAULT: '#202123',
          5:'#AD49E1'
        }
      },
      fontFamily: {
        amsterdam: ["New Amsterdam", 'sans-serif']
      }
    },
  },
  plugins: [],
}