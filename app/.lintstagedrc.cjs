module.exports = {
  '*.{ts,svelte}': [
    'eslint --max-warnings=0 --fix --resolve-plugins-relative-to',
    'prettier -cw',
    'jest --passWithNoTests --findRelatedTests',
  ],
  '*.{js,cjs,mdx,html}': ['prettier -cw'],
};
