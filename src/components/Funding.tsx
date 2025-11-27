import React from 'react';
import { Rocket, CheckCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const Funding: React.FC = () => {
  const { t } = useLanguage();

  const goals = [
    t('funding.goal1'),
    t('funding.goal2'),
    t('funding.goal3'),
    t('funding.goal4'),
    t('funding.goal5')
  ];

  return (
    <section id="funding" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center mb-8">
            <Rocket className="text-blue-500 mr-3" size={40} />
            <h2 className="text-4xl font-bold text-gray-800">{t('funding.title')}</h2>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 lg:p-12 animate-on-scroll">
          <div className="space-y-6">
            {goals.map((goal, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="text-blue-500 mr-4 mt-1 flex-shrink-0" size={24} />
                <p className="text-lg text-gray-700">{goal}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg inline-block">
              <p className="text-2xl font-bold text-gray-800 mb-2">{t('funding.target')}</p>
              <div className="w-64 bg-gray-200 rounded-full h-4 mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-4 rounded-full" style={{width: '23%'}}></div>
              </div>
              <p className="text-gray-600">{t('funding.raised')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};