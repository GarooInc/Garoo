/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'garoo-blue': '#03254c',
        'garoo-sky': '#29abe2',
        'garoo-skylight': '#b8cfd9',
      },
    }
  },
  plugins: [],
}