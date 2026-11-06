/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#0B0A09',
          900: '#0F0E0D',
          850: '#161513',
          800: '#1E1C1A',
          700: '#2A2724',
          600: '#3D3935'
        },
        champagne: {
          100: '#FBF7EE',
          200: '#F5EACF',
          300: '#E8D3A3',
          400: '#D8B46C',
          500: '#C5A059',
          600: '#A98440',
          700: '#8A692C'
        },
        cream: {
          50: '#FDFBF7',
          100: '#F9F6F0',
          200: '#EDE8DF',
          300: '#D5CFC5'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif']
      }
    },
  },
  plugins: [],
}
