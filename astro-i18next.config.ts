export default {
  defaultLocale: 'es',
  locales: ['en', 'es'],
  ns: ['translation'],
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
};
