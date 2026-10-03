/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#14171C',
        gold: '#F2B705',
        brick: '#A8482A',
        mist: '#ECEDEF',
        slate2: '#2A2F37'
      },
      fontFamily: {
        display: ['"Dela Gothic One"', 'cursive', 'sans-serif'],
        body: ['"Work Sans"', 'sans-serif']
      }
    },
  },
  plugins: [],
}
