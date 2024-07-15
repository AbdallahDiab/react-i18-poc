// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files
import commonEN from "../public/locales/en/authEn.json";
import authEN from "../public/locales/en/authEn.json";
import commonFR from "../public/locales/fr/commonFr.json";
import authFR from "../public/locales/fr/authFr.json";

const resources = {
  en: {
    common: commonEN,
    auth: authEN,
  },
  fr: {
    common: commonFR,
    auth: authFR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    ns: ["common", "auth", "lockupEn"], // namespaces used in application
    defaultNS: "common",
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
