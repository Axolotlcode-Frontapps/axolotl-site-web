export default {
  defaultLanguage: 'es',
  supportedLanguages: ['es', 'en'],
  i18next: {
    debug: true, // Opcional
    initImmediate: false,
    backend: {
      loadPath: './public/locales/{{lng}}/{{ns}}.json',
    },
  },
  i18nextPlugins: { fsBackend: 'i18next-fs-backend' },
};
