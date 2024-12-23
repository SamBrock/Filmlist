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
  plugins: [
    '@trivago/prettier-plugin-sort-imports',
    /**
     * **NOTE** tailwind plugin must come last!
     * @see https://github.com/tailwindlabs/prettier-plugin-tailwindcss#compatibility-with-other-prettier-plugins
     */
    'prettier-plugin-tailwindcss',
  ],
};
