/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: '#16a34a',
          'green-dark': '#15803d',
          'green-light': '#22c55e',
          blue: '#2563eb',
          'blue-dark': '#1d4ed8',
          'blue-light': '#3b82f6',
        },
        accent: {
          red: '#dc2626',
          'red-dark': '#b91c1c',
          yellow: '#eab308',
          'yellow-dark': '#ca8a04',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'oswald': ['var(--font-oswald)', 'sans-serif'],
      },
      keyframes: {
        'slow-zoom': {
          '0%, 100%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(1.08)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'slow-zoom': 'slow-zoom 20s ease-in-out infinite',
        marquee: 'marquee 140s linear infinite',
      },
    },
  },
  plugins: [],
}
