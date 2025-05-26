import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Example translations
const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      login: "Login",
      logout: "Logout",
      // ...add more keys
    },
  },
  hi: {
    translation: {
      welcome: "स्वागत है",
      login: "लॉग इन करें",
      logout: "लॉग आउट",
      // ...add more keys
    },
  },
  // Add more languages here
};

const languageDetector = {
  type: "languageDetector",
  async: true,
  detect: (callback: (lang: string) => void) => {
    // Always fallback to English in Expo Go
    callback("en");
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector as any)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
