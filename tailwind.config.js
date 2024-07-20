/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Open Sans", "sans-serif"],
        poppins:  ["Poppins"],
        allura: ["Allura"], 
        caveat: ["Caveat"]

      },
      colors:{
        customGray: '#626262',
        footer: '#922232'
      }

      ,textColor:{
        footertext: '#D0C2B3'
      }
    },
  },
  plugins: [],
}