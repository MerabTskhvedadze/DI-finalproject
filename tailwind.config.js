/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        amazon: {
          background: '#EAEDED',
          yellow: '#febd69',
          light_blue: '#232F3A',
          DEFAULT: '#131921',
        },
      },
      screens: {
        xs: '340px',
        m: '770px',
      },
    },
  },
  plugins: [],
};
