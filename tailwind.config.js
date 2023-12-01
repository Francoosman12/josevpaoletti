/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'lg': '0px 0px 5px #fff'
      }
    },
  },
  plugins: [],
}

