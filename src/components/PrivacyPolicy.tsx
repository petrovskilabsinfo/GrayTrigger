import React from 'react';
import { Shield, Globe, Heart, Zap, Eye, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface PrivacyPolicyProps {
  isDarkTheme: boolean;
  themeClasses: any;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isDarkTheme, themeClasses }) => {
  const { t } = useLanguage();

  return (
    <section id="privacy" className={`py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative z-10`}>
      <div className="max-w-5xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r ${isDarkTheme ? 'from-purple-400 to-cyan-400' : 'from-purple-600 to-cyan-600'} bg-clip-text text-transparent mb-8 sm:mb-12 md:mb-16 px-4`}>
          {t('privacy.title')}
        </h2>
        
        <div className={`relative p-6 sm:p-8 md:p-10 rounded-3xl ${themeClasses.cardBg} border ${isDarkTheme ? 'border-purple-500/20' : 'border-purple-300/30'} backdrop-blur-sm mb-8`}>
          <div className={`absolute inset-0 rounded-3xl ${isDarkTheme ? 'bg-gradient-to-br from-purple-500/5 to-cyan-500/5' : 'bg-gradient-to-br from-purple-100/50 to-cyan-100/50'}`}></div>
          <div className="relative z-10 space-y-8">
            {[
              { icon: Shield, title: t('privacy.noData.title'), desc: t('privacy.noData.description'), color: isDarkTheme ? 'text-purple-400' : 'text-purple-600' },
              { icon: Globe, title: t('privacy.local.title'), desc: t('privacy.local.description'), color: isDarkTheme ? 'text-blue-400' : 'text-blue-600' },
              { icon: Heart, title: t('privacy.noSharing.title'), desc: t('privacy.noSharing.description'), color: isDarkTheme ? 'text-cyan-400' : 'text-cyan-600' },
              { icon: Zap, title: t('privacy.minimal.title'), desc: t('privacy.minimal.description'), color: isDarkTheme ? 'text-green-400' : 'text-green-600' },
              { icon: Eye, title: t('privacy.control.title'), desc: t('privacy.control.description'), color: isDarkTheme ? 'text-yellow-400' : 'text-yellow-600' }
            ].map((item, index) => (
              <div key={index} className={`group flex items-start space-x-6 p-6 rounded-2xl hover:${isDarkTheme ? 'bg-slate-700/30' : 'bg-purple-50/50'} transition-all duration-300`}>
                <div className={`w-12 h-12 rounded-xl ${isDarkTheme ? 'bg-slate-700/50' : 'bg-white/80'} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <div>
                  <h3 className={`font-bold text-xl ${themeClasses.text} mb-3 group-hover:${isDarkTheme ? 'text-purple-300' : 'text-purple-600'} transition-colors duration-300`}>
                    {item.title}
                  </h3>
                  <p className={`${themeClasses.textSecondary} leading-relaxed group-hover:${isDarkTheme ? 'text-gray-200' : 'text-gray-700'} transition-colors duration-300`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
