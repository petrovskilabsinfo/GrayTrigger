import { useState, useEffect, createContext, useContext } from 'react';

export type Language = 'en' | 'es' | 'zh' | 'hi' | 'ar' | 'pt' | 'bn' | 'ru' | 'ja' | 'pa' | 'de' | 'jv' | 'ko' | 'fr' | 'te' | 'tr' | 'vi' | 'it' | 'th' | 'uk' | 'my' | 'id' | 'nl' | 'sv' | 'pl' | 'ro' | 'hu' | 'cs' | 'el' | 'he';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const useLanguageState = () => {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
      document.documentElement.lang = savedLanguage;
      // Keep layout LTR, only text will be RTL for Arabic/Hebrew
      document.documentElement.dir = 'ltr';
      if (savedLanguage === 'ar' || savedLanguage === 'he') {
        document.documentElement.classList.add('rtl-text');
      } else {
        document.documentElement.classList.remove('rtl-text');
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    // Keep layout LTR, only text will be RTL for Arabic/Hebrew
    document.documentElement.dir = 'ltr';
    // Add class for RTL text direction
    if (lang === 'ar' || lang === 'he') {
      document.documentElement.classList.add('rtl-text');
    } else {
      document.documentElement.classList.remove('rtl-text');
    }
  };

  return { language, setLanguage };
};