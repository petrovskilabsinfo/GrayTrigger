import React from 'react';
import { MousePointer, Eye, Palette, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: MousePointer,
      title: t('how.step1'),
      description: t('how.step1.desc')
    },
    {
      icon: Eye,
      title: t('how.step2'),
      description: t('how.step2.desc')
    },
    {
      icon: Palette,
      title: t('how.step3'),
      description: t('how.step3.desc')
    },
    {
      icon: ArrowLeft,
      title: t('how.step4'),
      description: t('how.step4.desc')
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {t('how.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="animate-on-scroll card-hover">
              <div className="bg-gray-50 rounded-2xl p-6 text-center relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                  <step.icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 text-center animate-on-scroll">
          <div className="mb-8">
            <div className="bg-gray-900 rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-all duration-500 max-w-2xl mx-auto">
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/HS1VI42IFEM?autoplay=0&mute=0&controls=1&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
                  title="GrayTrigger How It Works"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div className="mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg inline-flex items-center">
              <Eye className="mr-2" size={16} />
              {t('how.video')}
            </div>
          </div>
          <p className="text-lg text-gray-700 mb-2">
            <strong>{t('how.platforms')}</strong> {t('how.platforms.desc')}
          </p>
          <p className="text-gray-600">
            {t('how.mobile')}
          </p>
        </div>
      </div>
    </section>
  );
};