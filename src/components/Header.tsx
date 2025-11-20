import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../hooks/useLanguage';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold gradient-text">
            GrayTrigger
          </div>

          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('what')} className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.what')}
            </button>
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.features')}
            </button>
            <button onClick={() => scrollToSection('funding')} className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.funding')}
            </button>
            <button onClick={() => scrollToSection('donate')} className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('donate.title')}
            </button>
            <button onClick={() => scrollToSection('join')} className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.join')}
            </button>
            <button onClick={() => scrollToSection('privacy')} className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.privacy')}
            </button>
          </nav>

          <div className="hidden md:block">
            <LanguageSelector />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="py-4 space-y-2">
              <button onClick={() => scrollToSection('what')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50">
                {t('nav.what')}
              </button>
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50">
                {t('nav.features')}
              </button>
              <button onClick={() => scrollToSection('funding')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50">
                {t('nav.funding')}
              </button>
              <button onClick={() => scrollToSection('donate')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50">
                {t('donate.title')}
              </button>
              <button onClick={() => scrollToSection('join')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50">
                {t('nav.join')}
              </button>
              <button onClick={() => scrollToSection('privacy')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-50">
                {t('nav.privacy')}
              </button>
              <div className="px-4 py-2 border-t border-gray-200">
                <LanguageSelector />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};