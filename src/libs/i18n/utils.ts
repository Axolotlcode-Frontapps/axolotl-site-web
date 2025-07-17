import { ui, defaultLang, showDefaultLang } from './ui';

type NestedObject = {
  [K: string]: string | NestedObject;
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  return lang in ui ? lang : defaultLang;
}

export function useTranslations(lang: string) {
  return function t(key: string) {
    const keys = key.split('.');
    let current = ui[lang as keyof typeof ui] as unknown as NestedObject;

    for (const k of keys) {
      if (current?.[k] === undefined) {
        current = ui[defaultLang] as unknown as NestedObject;
        for (const fallbackKey of keys) {
          current = current?.[fallbackKey] as NestedObject;
        }
        break;
      }
      current = current[k] as NestedObject;
    }

    return (current as unknown as string)?.toString() || key;
  };
}

export function useTranslatedPath(lang: string) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}
