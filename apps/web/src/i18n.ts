import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { detectLanguage } from './hooks/useLanguage';

export enum Locale {
  enUS = 'en',
  zhCN = 'zh-CN',
  zhTC = 'zh-TC',
  Pt = 'Pt',
  PtBR = 'PtBR',
  IT = 'IT',
  FR = 'FR',
}

export const supportedLngs = [
  Locale.enUS,
  Locale.zhCN,
  Locale.zhTC,
  Locale.Pt,
  Locale.PtBR,
  Locale.IT,
  Locale.FR,
];

export const languageDetector = new LanguageDetector(null, {
  order: ['cookie', 'navigator'],
  lookupCookie: 'lang',
  caches: ['cookie'],
});

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: Locale.enUS,
    supportedLngs,
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });

export { i18n };

export async function loadNamespaces(
  namespaces: string[] | string,
  lng?: string,
) {
  let currentLng: string | undefined = lng;
  if (currentLng === undefined) {
    const languages = detectLanguage() ?? Locale.enUS;
    currentLng = Array.isArray(languages) ? languages[0] : languages;
  }

  const namespacesArray = Array.isArray(namespaces) ? namespaces : [namespaces];
  await Promise.allSettled(
    namespacesArray
      .filter(ns => {
        return !i18n.hasResourceBundle(currentLng!, ns);
      })
      .map(ns =>
        fetch(`/locales/${currentLng!}/${ns}.json`).then(async res => {
          if (res.ok) {
            const resource = await res.json();
            i18n.addResourceBundle(currentLng!, ns, resource);
            return true;
          }
        }),
      ),
  );
}
