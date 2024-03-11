module.exports = {
  extends: [
    'plugin:astro/recommended',
    'plugin:sonarjs/recommended',
    'plugin:compat/recommended',
    'plugin:promise/recommended',
    'plugin:astro/jsx-a11y-strict',
    'prettier',
  ],
  overrides: [
    {
      files: ['*.astro'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {},
    },
  ],
};
