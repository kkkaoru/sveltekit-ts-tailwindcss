module.exports = {
  '*.{ts,svelte}': [
    'eslint --max-warnings=0 --fix --resolve-plugins-relative-to',
    'prettier -cw',
    // FIXME: Enabled when setup is complete of jest
    // 'jest --passWithNoTests --findRelatedTests',
  ],
  '*.{js,cjs}': ['prettier -cw'],
};
