/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#77bc1f',
        secondary: '#51857f',
        dark: '#333333',
        light: '#f5f5f5',
        border: '#e5e5e5',
        accent: '#f4cf80',
        'text-light': '#666666',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
