/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        pertama : "poppins",
        kedua: "Taprom"
      },
      colors:{
        orange: "#ff4900",
        orange2: "#ff5e1d",
        hitam: "#242424",
        hitam2: "#7c7c7c",
        putih: "#f0f0f0"
      }
    },
  },
  plugins: [],
}

