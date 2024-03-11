/** @type {import("prettier").Config} */
const config = {
  arrowParens: 'always',
  semi: true,
  tabWidth: 2,
  printWidth: 140,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSpacing: true,
  endOfLine: 'crlf',
  plugins: ['prettier-plugin-astro', '@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@config$',
    '^@assets/(.*)$',
    '^@components/(.*)$',
    '^@content/(.*)$',
    '^@layouts/(.*)$',
    '^@pages/(.*)$',
    '^@data/(.*)$',
    '^@styles/(.*)$',
    '^@utils/(.*)$',
    '^@/(.*)$',
    '^.[./].*',
    '',
  ],
  overrides: [
    {
      files: ['*.json', '*.md', '*.toml', '*.yml'],
      options: {
        useTabs: false,
      },
    },
    {
      files: ['*.astro'],
      options: {
        parser: 'astro',
      },
    },
  ],
};

export default config;
