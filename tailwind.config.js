/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        amazon: {
          background: '#EAEDED',
          light_blue: '#232F3A',
          yellow: '#febd69',
          DEFAULT: '#131921',
        },
      },
      screens: {
        xs: '340px',
      },
    },
  },
  plugins: [],
};
