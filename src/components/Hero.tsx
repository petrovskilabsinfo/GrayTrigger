import React from 'react';
import { ChevronDown, Download } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface HeroProps {
  isDarkTheme: boolean;
  isVisible: boolean;
}

export const Hero: React.FC<HeroProps> = ({ isDarkTheme, isVisible }) => {
  const { t } = useLanguage();

  const themeClasses = {
    text: isDarkTheme ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkTheme ? 'text-gray-300' : 'text-gray-600',
    textMuted: isDarkTheme ? 'text-gray-400' : 'text-gray-500',
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className={`min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 relative z-10`}>
      <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold ${themeClasses.text} mb-6 sm:mb-8 leading-tight px-4 rtl-keep-ltr text-center`}>
          {t('hero.title')}{' '}
          <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
            {t('hero.subtitle')}
          </span>
        </h1>
        
        <p className={`text-base sm:text-lg mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 ${themeClasses.textSecondary}`}>
          {t('hero.description')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
          <a 
            href="https://chromewebstore.google.com/detail/graytrigger/jgmjkhadhfclpekcojcihnkaoooepgeb"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative px-10 py-5 bg-gradient-to-r ${isDarkTheme ? 'from-purple-600 to-blue-600' : 'from-purple-500 to-blue-500'} rounded-2xl font-semibold text-xl text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 overflow-hidden inline-block`}
          >
            <span className="relative z-10 flex items-center justify-center">
              <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              {t('hero.btn.support')}
            </span>
            <div className={`absolute inset-0 bg-gradient-to-r ${isDarkTheme ? 'from-purple-700 to-blue-700' : 'from-purple-600 to-blue-600'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
          </a>
        </div>
        
        <button 
          onClick={() => scrollToSection('features')}
          className={`group ${themeClasses.textMuted} hover:text-purple-500 transition-all duration-300 flex items-center justify-center mx-auto animate-bounce`}
        >
          <span className="mr-2">{t('hero.learnMore')}</span>
          <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};
