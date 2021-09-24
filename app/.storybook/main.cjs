/** @type import('@storybook/core-common').StorybookConfig */
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
  core: {
    builder: 'storybook-builder-vite',
  },
  svelteOptions: {
    preprocess: require('../svelte.config.cjs').preprocess,
  },
};
