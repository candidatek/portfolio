/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,less}', './index.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#EEEEEE',
        'secondary': '#f3f3f3',
      },
      fontFamily: {
        display: ['Nunito Sans', 'Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
        primary: ['Inter', 'cursive'],
        logo: ['Aladin', 'cursive'],  
          }
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 0.75turn at 50% 50%, var(--tw-gradient-stops))',
      'primary-gradient': 'linear-gradient(263.94deg, #FC4D35 3.59%, #E02871 102.5%);',
    },
  },
  plugins: [],
}

