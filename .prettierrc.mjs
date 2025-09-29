/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: ['*.astro'],
      options: {
        parser: 'astro',
      },
    },
    {
      files: ['*.mdx'],
      options: {
        parser: 'mdx',
      },
    },
  ],
  printWidth: 80,
  tabWidth: 2,
  trailingComma: 'es5',
  semi: true,
  singleQuote: true,
};
