/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Quicksand', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        // Alternative comparison fonts:
        // heading: ['Montserrat', 'sans-serif'],
        // body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
