import React from 'react';
import { LanguageContext, useLanguageState, useLanguage as useLanguageHook } from '../hooks/useLanguage';
import { translations } from '../translations';

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { language, setLanguage } = useLanguageState();

  const t = React.useCallback((key: string): string => {
    const langTranslations = translations[language];
    if (langTranslations && key in langTranslations) {
      return langTranslations[key as keyof typeof langTranslations];
    }
    const enTranslations = translations['en'];
    if (enTranslations && key in enTranslations) {
      return enTranslations[key as keyof typeof enTranslations];
    }
    return key;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = useLanguageHook;