/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'eslint-config-airbnb-base', 'prettier'],
  ignorePatterns: ['*.cjs', '*.js'],
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
  },
  plugins: ['svelte3'],
  overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
  settings: {
    'svelte3/typescript': require('typescript'),
  },
  rules: {
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'max-lines': 'error',
    'max-depth': 'error',
    'max-lines-per-function': 'error',
    'import/extensions': [
      'error',
      {
        ts: 'off',
      },
    ],
  },
};
