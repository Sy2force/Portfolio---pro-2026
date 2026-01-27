
import { useState, useEffect, useCallback } from "react";
import { Locale, defaultLocale, locales } from "@/i18n/config";
import frMessages from "@/i18n/messages/fr.json";
import enMessages from "@/i18n/messages/en.json";

const messages = {
  fr: frMessages,
  en: enMessages,
};

export function useLanguage() {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale") as Locale | null;
    if (savedLocale && locales.includes(savedLocale)) {
      setLocaleState(savedLocale);
    } else {
      const browserLocale = navigator.language.split("-")[0] as Locale;
      if (locales.includes(browserLocale)) {
        setLocaleState(browserLocale);
      }
    }
    setIsLoaded(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("locale", newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  const t = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      const keys = key.split(".");
      let value: unknown = messages[locale];

      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          return key;
        }
      }

      if (typeof value !== "string") {
        return key;
      }

      if (params) {
        return Object.entries(params).reduce(
          (acc, [paramKey, paramValue]) =>
            acc.replace(new RegExp(`{${paramKey}}`, "g"), String(paramValue)),
          value
        );
      }

      return value;
    },
    [locale]
  );

  return {
    locale,
    setLocale,
    t,
    isLoaded,
    messages: messages[locale],
  };
}
