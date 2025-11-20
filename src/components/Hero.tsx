import React from 'react';
import { Play, Heart, Code } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-on-scroll">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-2xl lg:text-3xl text-gray-600 mb-4 font-light">
              {t('hero.subtitle')}
            </p>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl leading-relaxed">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center">
                <Heart className="mr-2" size={20} />
                {t('hero.btn.support')}
              </button>
              <button className="btn-secondary text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center">
                <Code className="mr-2" size={20} />
                {t('hero.btn.developer')}
              </button>
              <button className="btn-outline px-8 py-4 rounded-xl font-semibold flex items-center justify-center">
                <Play className="mr-2" size={20} />
                {t('hero.btn.demo')}
              </button>
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl p-4 shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="relative rounded-lg overflow-hidden aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/HS1VI42IFEM?autoplay=0&mute=0&controls=1&playsinline=1&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&enablejsapi=1"
                    title="GrayTrigger Demo"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg flex items-center">
                <Play className="mr-2" size={16} />
                {t('hero.demo')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};