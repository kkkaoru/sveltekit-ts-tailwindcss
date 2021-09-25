const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ addBase, config }) {
  addBase({
    '*': {
      fontFamily: config('theme.fontFamily.mono'),
      color: config('theme.colors.gray.800'),
      fontSize: config('theme.fontSize.base'),
      letterSpacing: config('theme.letterSpacing.wide'),
    },
    body: {
      backgroundColor: config('theme.colors.gray.50'),
      minHeight: '100vh',
    },
  });
});
