/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        amazon: {
          background: '#EAEDED',
          yellow: '#febd69',
        },
      },
      screens: {
        xs: '340px',
      },
    },
  },
  plugins: [],
};
