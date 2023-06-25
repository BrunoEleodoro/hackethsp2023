/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
const colors = require('tailwindcss/colors');

module.exports = withMT({
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    '../../node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    textColor: {
      contrastText: 'var(--text-contrastText)',
      primary: 'var(--color-primary)',
      ...colors,
    },
    backgroundColor: {
      primary: 'var(--color-primary)',
      ...colors,
    },
    extend: {
      colors: {
        'current': 'var(--color-primary)', // Replace #ff0000 with your desired color value
      },
    },
  },
});
