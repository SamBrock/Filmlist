import js from '@eslint/js';
import onlyWarn from 'eslint-plugin-only-warn';
import turboPlugin from 'eslint-plugin-turbo';

export const config = [
  js.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ['dist/**'],
  },
];
