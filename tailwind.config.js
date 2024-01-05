/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html" , "./third.html"],
  theme: {
    extend: {
      fontFamily: {
        utama: ['Montserrat', 'sans-serif']
      },
      colors: {
        putih: ["#F2F2F2"],
        hitam: ["#252525"],
        primary: ["#2b63eb"]
      }
    },
  },
  plugins: [],
}

