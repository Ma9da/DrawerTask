import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
import { useState, useEffect } from "react";

// Import translations
import en from "./translations/en.json";
import ar from "./translations/ar.json";

// Create i18n instance
const i18n = new I18n({
en,
ar,
});

// Set the locale once at the beginning of your app.
i18n.locale = Localization.locale;

// When a value is missing from a language, it'll fallback to another language with the key present.
i18n.enableFallback = true;
i18n.defaultLocale = "en";

// Function to update the locale
export const setLocale = (locale: any) => {
i18n.locale = locale;
};

// Custom hook to use translations
export const useTranslation = () => {
const [locale, setLocale] = useState(i18n.locale);

const changeLocale = (newLocale: any) => {
    i18n.locale = newLocale;
    setLocale(newLocale);
};

return {
    t: (scope: any, options: any) => i18n.t(scope, options),
    locale,
    changeLocale,
    locales: Object.keys(i18n.translations),
};
};

export default i18n;
