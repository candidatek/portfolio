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
    screens : {
      //WIDTH_UP_TO - @media(max-width: ${max}px)
      "sm": { max: '500px' },
      "max-md": { max: '720px' },
      "max-lg": { max: '960px' },
      "max-xl": { max: '1280px' },
    
      //WIDTH_FROM - @media(min-width: ${min-}px)
      'min-sm': '501px',
      'min-md': '721px',
      'min-lg': '961px',
      'min-xl': '1281px',
      'min-2xl': '2561px',
      'sm-lg': { min: '501px', max: '768px' },
      'md-xl': { min: '769px' }
    }
  },
  plugins: [],
}

