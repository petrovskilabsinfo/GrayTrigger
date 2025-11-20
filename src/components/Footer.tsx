import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold gradient-text mb-6">
            {t('hero.title')}
          </div>
          
          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            <p className="text-lg text-gray-300 mb-4">
              {t('footer.disclaimer')}
            </p>
            <p className="text-gray-400">
              {t('footer.transparency')}
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
              <p>{t('footer.copyright')}</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">{t('footer.privacy')}</a>
                <a href="#" className="hover:text-white transition-colors">{t('footer.terms')}</a>
                <a href="#" className="hover:text-white transition-colors">{t('footer.contact')}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};