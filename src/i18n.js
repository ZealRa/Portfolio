// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./translations";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: translations.fr },
      en: { translation: translations.en },
    },
    lng: "fr", // langue par défaut
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
