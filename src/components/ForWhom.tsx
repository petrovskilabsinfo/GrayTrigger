import React from 'react';
import { Users, Building, User } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const ForWhom: React.FC = () => {
  const { t } = useLanguage();

  const audiences = [
    {
      icon: Users,
      title: t('forwhom.parents'),
      description: t('forwhom.parents.desc')
    },
    {
      icon: Building,
      title: t('forwhom.companies'),
      description: t('forwhom.companies.desc')
    },
    {
      icon: User,
      title: t('forwhom.everyone'),
      description: t('forwhom.everyone.desc')
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t('forwhom.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="animate-on-scroll card-hover">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <audience.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {audience.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {audience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};