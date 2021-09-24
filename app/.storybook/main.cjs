/** @type import('@storybook/core-common').StorybookConfig */
module.exports = {
  // Ignore example-stories. if you want to include them, just add the directory into stories
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(svelte)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
  core: {
    builder: 'storybook-builder-vite',
  },
  svelteOptions: {
    preprocess: require('../svelte.config.cjs').preprocess,
  },
};
