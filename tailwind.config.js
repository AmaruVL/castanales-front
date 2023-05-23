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
    },
    extend: {
      backgroundImage: {
        landingImage: "url('/src/assets/images/tambopata.jpg')",
      },
    },
  },
  plugins: [],
};
