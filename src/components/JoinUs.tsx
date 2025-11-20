import React, { useState } from 'react';
import { Heart, Users, Mail, Share2 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const JoinUs: React.FC = () => {
  const [email, setEmail] = useState('');
  const { t } = useLanguage();

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email subscription
    console.log('Email submitted:', email);
    setEmail('');
    alert(t('common.thanks'));
  };

  return (
    <section id="join" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">
            {t('join.title')}
          </h2>
          <p className="text-xl opacity-90">
            {t('join.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">{t('join.support.title')}</h3>
              <div className="space-y-4">
                <button className="w-full bg-white text-blue-600 py-4 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  <Heart className="mr-2" size={20} />
                  {t('join.support.kickstarter')}
                </button>
                <button className="w-full border-2 border-white text-white py-4 px-6 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
                  <Users className="mr-2" size={20} />
                  {t('join.support.team')}
                </button>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6">{t('join.contact.title')}</h3>
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('join.contact.email')}
                    className="flex-1 px-4 py-3 rounded-l-xl text-gray-800 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white text-blue-600 px-6 py-3 rounded-r-xl font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <Mail size={20} />
                  </button>
                </div>
                <button className="w-full border-2 border-white text-white py-4 px-6 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center">
                  <Share2 className="mr-2" size={20} />
                  {t('join.contact.share')}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="text-center animate-on-scroll">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <p className="text-lg opacity-90 mb-4">
              {t('join.message')}
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm opacity-75">
              <span>#GrayTrigger</span>
              <span>#TimeForRealLife</span>
              <span>#DigitalWellbeing</span>
              <span>#HealthyTech</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};