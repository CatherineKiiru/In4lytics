/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'oliveGreen': "#3D4631",
        'lightYellow': "#FAFF7E",
        'lightGreen': "#D1E2C0"
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'montserrat': ['Montserrat Alternates', 'sans-serif'],
      },
    },
  },
  plugins: [],
}