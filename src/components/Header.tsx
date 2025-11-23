import React, { useState } from 'react';
import { Menu, X, Shield } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../hooks/useLanguage';

interface HeaderProps {
  isDarkTheme: boolean;
  setIsDarkTheme: (isDark: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkTheme, setIsDarkTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const themeClasses = {
    navBg: isDarkTheme ? 'bg-slate-900/80' : 'bg-white/80',
    navBorder: isDarkTheme ? 'border-purple-500/20' : 'border-purple-300/30',
    textSecondary: isDarkTheme ? 'text-gray-300' : 'text-gray-600',
    textMuted: isDarkTheme ? 'text-gray-400' : 'text-gray-500',
  };

  return (
    <nav className={`fixed top-0 w-full ${themeClasses.navBg} backdrop-blur-xl border-b ${themeClasses.navBorder} z-40 transition-all duration-700`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-purple-600 to-cyan-500 bg-clip-text text-transparent truncate rtl-keep-ltr">
            {t('hero.title')}
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
            <ThemeToggle isDark={isDarkTheme} onToggle={() => setIsDarkTheme(!isDarkTheme)} />
            <LanguageSelector 
              currentLanguage={language}
              onLanguageChange={setLanguage}
              isDark={isDarkTheme}
            />
            <button 
              onClick={() => scrollToSection('privacy')}
              className={`${themeClasses.textSecondary} hover:text-purple-500 transition-all duration-300 font-medium relative group text-xs sm:text-sm md:text-base hidden sm:block whitespace-nowrap`}
            >
              {t('nav.privacy')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('privacy')}
              className={`${themeClasses.textSecondary} hover:text-purple-500 transition-all duration-300 sm:hidden p-2`}
              title={t('nav.privacy')}
            >
              <Shield className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
            >
              {isMenuOpen ? <X size={24} className={themeClasses.textSecondary} /> : <Menu size={24} className={themeClasses.textSecondary} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden border-t ${themeClasses.navBorder} mt-2 pt-4`}>
            <div className="space-y-2">
              <button onClick={() => scrollToSection('features')} className={`block w-full text-left px-4 py-2 ${themeClasses.textSecondary} hover:text-purple-500 hover:bg-slate-800/50 rounded-lg transition-colors`}>
                {t('nav.features')}
              </button>
              <button onClick={() => scrollToSection('privacy')} className={`block w-full text-left px-4 py-2 ${themeClasses.textSecondary} hover:text-purple-500 hover:bg-slate-800/50 rounded-lg transition-colors`}>
                {t('nav.privacy')}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
