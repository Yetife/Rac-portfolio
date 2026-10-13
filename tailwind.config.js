/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#f7f3ed',
          soft: '#fbf9f5',
          deep: '#e9e1d6',
        },
        ink: '#1c1917',
        accent: {
          DEFAULT: '#c2410c',
          dark: '#9a3412',
        },
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(.2,.7,.2,1)',
      },
      keyframes: {
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(194,65,12,.45)' },
          '70%': { boxShadow: '0 0 0 8px rgba(194,65,12,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(194,65,12,0)' },
        },
      },
      animation: {
        'pulse-ring': 'pulseRing 2s infinite',
      },
    },
  },
  plugins: [],
}
