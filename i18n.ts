// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import HttpBackend from 'i18next-http-backend';

// i18n
//   .use(HttpBackend)
//   .use(initReactI18next)
//   .init({
//     backend: {
//       loadPath: './src/locales/{{ns}}/{{lng}}.json',
//     },
//     lng: 'en',
//     ns: ['/locales/*'],
//     fallbackLng: 'en',
//     supportedLngs: ['en', 'ka'],
//     interpolation: {
//       escapeValue: false,
//     },
//   });

// export default i18n;

import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ka'],
    fallbackLng: 'en',
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/locales/{{ns}}/{{lng}}.json',
    },
    ns: ['locales/*'],
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
  });

export default i18n;
