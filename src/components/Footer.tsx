import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface FooterProps {
  isDarkTheme: boolean;
  themeClasses: any;
}

export const Footer: React.FC<FooterProps> = ({ isDarkTheme, themeClasses }) => {
  const { t } = useLanguage();

  return (
    <footer className={`py-16 px-6 border-t ${themeClasses.footerBorder} relative z-10`}>
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r ${isDarkTheme ? 'from-purple-400 to-cyan-400' : 'from-purple-600 to-cyan-600'} bg-clip-text text-transparent rtl-keep-ltr text-center`}>
            {t('hero.title')}
          </h3>
          <p className={`${themeClasses.textMuted} max-w-2xl mx-auto text-lg`}>
            {t('footer.slogan')}
          </p>
        </div>
        
        <div className={`border-t ${isDarkTheme ? 'border-slate-700' : 'border-purple-200'} pt-8`}>
          <p className={`${isDarkTheme ? 'text-gray-500' : 'text-gray-600'}`}>
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};
