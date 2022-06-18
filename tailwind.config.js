module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      colors: {
        '#1B1A1C': '#1B1A1C',
        '#000000': '#000000',
        '#FAFAFA': '#FAFAFA',
        '#5669FF': '#5669FF',
        '#FFFFFF': '#FFFFFF',
        '#FFFFFF80': '#FFFFFF80',
        '#9D9898': '#9D9898',
        '#3D56F0': '#3D56F0',
        '#747688': '#747688',
        '#120D26': '#120D26',
        '##37364A': '#37364A',
        backdrop: 'rgba(0,0,0,0.5)',
      },
      spacing: (() => {
        return Array.from(Array(600).keys()).map((e, index) => {
          return `${index + 1}px`;
        });
      })(),
      borderRadius: (() => {
        return Array.from(Array(9999).keys()).map((e, index) => {
          return `${index + 1}px`;
        });
      })(),
      fontSize: (() => {
        return Array.from(Array(200).keys()).map((e, index) => {
          return `${index + 1}px`;
        });
      })(),
      minHeight: (() => {
        return Array.from(Array(1000).keys()).map((e, index) => {
          return `${index + 1}px`;
        });
      })(),
      minWidth: (() => {
        return Array.from(Array(1000).keys()).map((e, index) => {
          return `${index + 1}px`;
        });
      })(),
      translate: {
        '4/7': '57.1428571%',
      },
      lineHeight: {
        48: '48px',
      },
    },
  },
  plugins: [],
  corePlugins: require('tailwind-rn/unsupported-core-plugins'),
};
