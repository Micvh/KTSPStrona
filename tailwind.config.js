module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        notusPurple: '#7F00FF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
