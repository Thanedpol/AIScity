/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'carousel': 'carousel 25s linear infinite',
      },
      keyframes: {
        carousel: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-blue-600',
    'bg-green-600',
    'bg-purple-600',
    'bg-pink-600',
    'bg-amber-600',
    'bg-red-600',
  ],
  darkMode: 'class',
};