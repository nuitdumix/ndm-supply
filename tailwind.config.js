/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
  'ndm-dark': '#dbff00',
  'ndm-primary': '#000f8b',
  'ndm-secondary': '#F84B76',
  'ndm-accent': '#20014B',
  'ndm-text': '#20014B',
  'ndm-muted': '#030b54ff',
      },
      fontFamily: {
        'dubtronic': ['Dubtronic-Solid', 'Courier New', 'monospace'],
        'dubtronic-inline': ['Dubtronic-Inline', 'Courier New', 'monospace'],
        '1533': ['1533', 'Courier New', 'monospace'],
        'mono': ['Courier New', 'monospace'],
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backgroundImage: {
        // Noise removed for cleaner aesthetic
      },
    },
  },
  plugins: [],
}
