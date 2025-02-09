import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import AstroPlugin from 'eslint-plugin-astro';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['src/**/*.{ts,tsx,astro,md,mdx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...AstroPlugin.configs.recommended,
  {
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
    ignores: ['./.astro', './.cache', './dist', './node_modules'],
  },
];
