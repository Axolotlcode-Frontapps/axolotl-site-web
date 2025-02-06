import i18n from 'i18next';
import translationEN from '../../public/locales/en/translation.json';
import translationES from '../../public/locales/es/translation.json';

i18n.init({
  resources: {
    en: { translation: translationEN },
    es: { translation: translationES },
  },
});

export default i18n;
