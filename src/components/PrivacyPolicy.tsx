import React from 'react';
import { Shield, Lock, Database, Eye } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const PrivacyPolicy: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Database,
      title: t('privacy.no_collection.title'),
      description: t('privacy.no_collection.desc')
    },
    {
      icon: Lock,
      title: t('privacy.local_storage.title'),
      description: t('privacy.local_storage.desc')
    },
    {
      icon: Eye,
      title: t('privacy.no_tracking.title'),
      description: t('privacy.no_tracking.desc')
    }
  ];

  return (
    <section id="privacy" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <div className="flex items-center justify-center mb-8">
            <Shield className="text-blue-500 mr-3" size={40} />
            <h2 className="text-4xl font-bold text-gray-800">{t('privacy.title')}</h2>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg animate-on-scroll">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-xl p-6 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('privacy.statement')}
            </p>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-2">{t('privacy.developed_by')}</p>
            <p className="text-blue-600 font-semibold text-lg">PetrovskiLabs</p>
          </div>
        </div>
      </div>
    </section>
  );
};