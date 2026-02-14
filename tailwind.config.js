/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./modules/**/*.{html,js}",
    "./shared/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        'ksu-blue': '#0066B3',
        'ksu-gold': '#C69214',
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'Cairo', 'system-ui', 'sans-serif'],
        'arabic': ['Cairo', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}