/** @type import('eslint').Linter.BaseConfig */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-airbnb-base',
    'plugin:jest/recommended',
    'prettier',
  ],
  ignorePatterns: ['*.cjs', '*.js'],
  env: {
    browser: true,
    es2017: true,
    node: true,
    'jest/globals': true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
  },
  plugins: ['svelte3'],
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
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/no-mutable-exports': 'off',
      },
    },
    {
      files: ['*.stories.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.test.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
