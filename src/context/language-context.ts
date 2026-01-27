import { createContext } from "react";
import { Locale } from "@/i18n/config";

export interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  isLoaded: boolean;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
