const addBase = require('./tailwindcss/plugins/add-base.cjs');

/** @type import('@types/tailwindcss/tailwind-config').TailwindConfig */
const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,svelte,ts}'],
  theme: {
    extend: {},
  },
  plugins: [addBase],
};

module.exports = config;
