/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        'dubtronic': ['Dubtronic-Solid', 'sans-serif'],
        '1533': ['1533', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        white: '#FFFFFF',
      },
      spacing: {
        '1px': '1px',
      }
    },
  },
  plugins: [],
}
