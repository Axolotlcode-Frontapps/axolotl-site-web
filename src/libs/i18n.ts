import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const i18nInstance = i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next);

let initialized = false;

export const initI18n = async (initialLang: string) => {
  if (!initialized) {
    await i18nInstance.init({
      backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
      lng: initialLang,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
    });
    initialized = true;
  } else {
    await i18nInstance.changeLanguage(initialLang);
  }
  return i18nInstance;
};

export default i18n;
