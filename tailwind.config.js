/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./Js/**/*.{js}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main-bg": "url('../img/bg.jpg')",
      },
      colors: {
        "first-Color": "#fa5c58",
        "second-Color": "#333",
        "third-Color" : "#808080",
        "fourty-Color": "#fbfbfb",
        "fifty-Color": "#f1f4f7",
      },
      width: {
        "300": "300px",
        "400": "400px",
      },
      zIndex: {
        "60": "100",
      },
      transitionProperty: {
        "right": "right",
      },
      transitionDuration: {
        "1/10": "0.1s",
        "2/10": "0.2s",
        "3/10": "0.3s",
        "4/10": "0.4s",
        "5/10": "0.5s",
        "6/10": "0.6s",
        "7/10": "0.7s",
        "8/10": "0.8s",
        "9/10": "0.9s",
        "1": "1s",
      },
      gridTemplateColumns: {
        "fit": "repeat(auto-fit, minmax(230px, 1fr))",
        "big-low": "400px 200px",
        "fill-3": "repeat(auto-fit, minmax(310px, 340px))",
      }
    },
  },
  plugins: [],
}

