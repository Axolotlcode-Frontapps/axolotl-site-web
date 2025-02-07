import { I18nextProvider } from 'react-i18next';
import i18n, { initI18n } from '@/libs/i18n';
import { useEffect } from 'react';

export const I18nProvider: React.FC<{
  children: React.ReactNode;
  initialLang: string;
}> = ({ children, initialLang }) => {
  useEffect(() => {
    initI18n(initialLang);
  }, [initialLang]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
