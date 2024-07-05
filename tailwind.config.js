/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "site-primary": "rrgb(248, 249, 251)",
        "site-secondary": "rgb(255, 227, 0)",
        "site-tertiary": "rgb(0, 182, 250)",
        "site-error": "#D73A49",
      }
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
      Inter: ["Inter, sans-serif"]
    },
    container:{
      padding: "2rem",
      center: true
    }
  },
  plugins: [],
}