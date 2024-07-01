import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { atom, useAtom } from 'jotai';
import Cookies from 'js-cookie';

import { usePersistCallback } from './usePersistCallback';
import { languageDetector, Locale } from '@/i18n';

export type Lang = `${Locale}` | '';

export function detectLanguage() {
  const cookieLang = Cookies.get('lang');
  if (cookieLang) {
    return cookieLang as Lang;
  }
  const languages = languageDetector.detect() ?? Locale.enUS;
  const lang = Array.isArray(languages) ? languages[0] : languages;
  return lang as Lang;
}

const langAtom = atom<Lang>('');
const wrappedLangAtom = atom(
  get => {
    const lng = get(langAtom);
    if (lng === '') {
      return detectLanguage();
    }

    return lng;
  },
  (get, set, lang: Lang) => {
    const currentLang = get(langAtom);
    if (currentLang !== lang) {
      Cookies.set('lang', lang);
    }

    set(langAtom, lang);
  },
);

export function useLanguage() {
  const [lang, setLang] = useAtom(wrappedLangAtom);
  const navigate = useNavigate();

  const changeLanguage = usePersistCallback((lng: Lang) => {
    setLang(lng);
    navigate(0);
  });

  return [lang, changeLanguage] as const;
}

// a hooks: when the route is changed, use i18n.changeLanguage to change the language
export function useLanguageChangeOnRouteChange() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = detectLanguage();
    i18n.changeLanguage(lang);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
