/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main':'#318181',
        "buttonhover":'#2b8a8a',
        'second':'#F0B284'
      }
      
    },
  },
  plugins: [],
}

