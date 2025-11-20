import React from 'react';
import { Clock, Lock, BarChart3, Monitor, Brain, Settings } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Clock,
      title: t('features.time'),
      description: t('features.time.desc'),
      premium: true
    },
    {
      icon: Lock,
      title: t('features.password'),
      description: t('features.password.desc')
    },
    {
      icon: BarChart3,
      title: t('features.stats'),
      description: t('features.stats.desc')
    },
    {
      icon: Monitor,
      title: t('features.cross'),
      description: t('features.cross.desc')
    },
    {
      icon: Brain,
      title: t('features.psychology'),
      description: t('features.psychology.desc')
    },
    {
      icon: Settings,
      title: t('features.company'),
      description: t('features.company.desc')
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t('features.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="animate-on-scroll card-hover">
              <div className="bg-white rounded-2xl p-8 shadow-lg relative">
                {feature.premium && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {t('common.premium')}
                  </div>
                )}
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <feature.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};