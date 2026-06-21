/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2d5a27', // Deep Green
          light: '#3d7a36',
          dark: '#1a3617',
        },
        secondary: {
          DEFAULT: '#8ba888', // Sage Green
          light: '#a3c2a0',
          dark: '#6e8c6b',
        },
        accent: {
          DEFAULT: '#c6a87c', // Earthy Gold/Sand
          light: '#d8c19d',
          dark: '#b08d5b',
        },
        background: {
          DEFAULT: '#fcfbf8', // Cream
          alt: '#f4f1ea', // Beige/Off-white
        },
        text: {
          DEFAULT: '#2d3748', // Dark Slate
          light: '#4a5568',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
