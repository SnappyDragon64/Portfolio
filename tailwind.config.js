/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'lg-h': { 'raw': '(min-height: 660px)' },
        'xl-h': { 'raw': '(min-height: 875px)' },
        'xs': { 'raw': '(min-width: 450px)' },
        '2xl': { 'raw': '(min-width: 1920px)' }
      },
      fontFamily: {
        rem: ['REM', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

