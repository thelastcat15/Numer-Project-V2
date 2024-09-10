/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pattaya: ['Pattaya', 'sans-serif'],
        protestStrike: ['Protest Strike', 'sans-serif']
      },
      colors: {
        myBlue: "#D0E1F9",
        myBlueBorder: "#7DA4EF"
      }
    },
  },
  plugins: [],
}

