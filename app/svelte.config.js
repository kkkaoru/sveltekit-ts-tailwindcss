import module from 'module';
const require = module.createRequire(import.meta.url);
const preprocess = require('./svelte-config/preprocess.cjs');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess,
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
  },
};

export default config;
