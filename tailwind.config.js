/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo','Inter', 'sans-serif'], // Assuming you want to use Inter as the main font
      },
      colors: {
        'primary': '#000000', // Black for primary text and buttons
        'secondary': '#6B7280', // A medium gray for secondary text
        'accent': '#3B82F6', // Blue for accents (adjust if needed)
      },
      spacing: {
        '128': '32rem', // For larger spacings if needed
      },
      borderRadius: {
        'full': '9999px', // For fully rounded buttons
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enables dark mode if you want to add it later
}

