import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,astro}'],
  theme: {
    extend: {
      screens: {
        xs: '425px',
      },
      colors: {
        primary: {
          50: '#feecf0',
          100: '#fbc3d2',
          200: '#f9a6bc',
          300: '#f67d9d',
          400: '#f5648a',
          500: '#f23d6d',
          600: '#dc3863',
          700: '#ac2b4d',
          800: '#85223c',
          900: '#661a2e',
        },
        secondary: {
          50: '#eefafa',
          100: '#cbefef',
          200: '#b1e7e8',
          300: '#8edbdd',
          400: '#78d5d6',
          500: '#56cacc',
          600: '#4eb8ba',
          700: '#3d8f91',
          800: '#2f6f70',
          900: '#245556',
        },
        'dark-color': '#DADADA',
        'light-color': '#212529',
        'body-color': '#212529',
        foreground: '#F6F6F6',
        black: '#212529',
      },
    },
  },
  plugins: [],
} satisfies Config;
