/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  jsxSingleQuote: false,
  trailingComma: 'es5',
  semi: true,
  printWidth: 110,
  arrowParens: 'always',
  endOfLine: 'auto',
  importOrder: ['<THIRD_PARTY_MODULES>', '^@(filmlist|)/(.*)$', '^@(lib|components)/(.*)$', '^[./]'],
  importOrderSeparation: true,
  plugins: ['@trivago/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
};
