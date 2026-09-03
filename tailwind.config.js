/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf3f4',
          100: '#fbe6e8',
          200: '#f5cdd2',
          300: '#eba4ad',
          400: '#dc6f7f',
          500: '#c9475b',
          600: '#a52d44',
          700: '#7a1c2e',
          800: '#5e1623',
          900: '#4a101c',
          950: '#2e0a11',
        },
        champagne: {
          50: '#fdfbf3',
          100: '#faf5dc',
          200: '#f4eab5',
          300: '#ecdb7e',
          400: '#e3c94c',
          500: '#d4af37',
          600: '#bf942c',
          700: '#9c7024',
          800: '#7f5a22',
          900: '#6a4a20',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f2',
          200: '#faf3e6',
          300: '#f4e8d2',
          400: '#ead4b0',
        },
        charcoal: {
          700: '#3a3a3a',
          800: '#2a2a2a',
          900: '#1a1a1a',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
