/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  theme: {
    colors: {
      primary: '#477961',
      white: '#fff',
      white2: '#f8fcf6',
      red: '#f67273',
      'dark-gray': '#3f3d56',
      'light-gray': '#707070',
    },
    extend: {
      backgroundImage: {
        landing:
          "linear-gradient(to top, #477961ff, #47796189), url('/src/assets/images/tambopata.jpg')",
      },
    },
  },
  plugins: [],
};
