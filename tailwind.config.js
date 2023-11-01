/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'manrope': ['Manrope', 'sans-serif'],
      'openSans': ['Open Sans', 'sans-serif']
    },
    colors: {
      'white': '#ffffff',
      'dark-blue': '#0A2640',
    },
    extend: {},
  },
  plugins: [],
}

