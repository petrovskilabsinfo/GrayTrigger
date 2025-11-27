import React from 'react';
import { Target } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const WhatIsIt: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="what" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
        <div className="flex items-center justify-center mb-8">
          <Target className="text-blue-500 mr-3" size={40} />
          <h2 className="text-4xl font-bold text-gray-800">{t('what.title')}</h2>
        </div>
        
        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <p className="text-xl text-gray-700 leading-relaxed">
            {t('what.description')}
          </p>
          <div className="mt-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
            <p className="text-lg text-gray-700">
              {t('what.note')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};