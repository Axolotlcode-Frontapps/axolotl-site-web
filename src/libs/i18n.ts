import i18n from 'i18next';
import translationEN from '../../public/locales/en/translation.json';
import translationES from '../../public/locales/es/translation.json';
i18n.init({
  resources: {
    en: { translation: translationEN },
    es: { translation: translationES },
  },
  lng: 'es',
  fallbackLng: 'es',
  supportedLngs: ['es', 'en'],
  interpolation: { escapeValue: false },
});
export default i18n;
