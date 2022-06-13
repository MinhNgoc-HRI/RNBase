module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      colors: {
        '#1B1A1C': '#1B1A1C',
        '#000000': '#000000',
        '#FAFAFA': '#FAFAFA',
        red: 'red',
        blue: 'blue',
        black: 'black',
        backdrop: 'rgba(0,0,0,0.5)',
      },
      spacing: {
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        40: '40px',
        200: '200px',
      },
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};
