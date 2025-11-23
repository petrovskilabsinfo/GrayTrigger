import React from 'react';
import { Lock, Monitor, Brain } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface FeaturesProps {
  isDarkTheme: boolean;
}

export const Features: React.FC<FeaturesProps> = ({ isDarkTheme }) => {
  const { t } = useLanguage();

  const themeClasses = {
    text: isDarkTheme ? 'text-white' : 'text-gray-900',
    textSecondary: isDarkTheme ? 'text-gray-300' : 'text-gray-600',
    cardBg: isDarkTheme ? 'bg-slate-800/30' : 'bg-white/70',
    cardBorder: isDarkTheme ? 'border-slate-700/50' : 'border-purple-200/50',
    cardHover: isDarkTheme ? 'hover:bg-slate-800/50 hover:border-purple-500/30' : 'hover:bg-white/90 hover:border-purple-400/60',
  };

  const features = [
    {
      icon: Lock,
      title: t('features.password'),
      description: t('features.password.desc'),
      color: isDarkTheme ? 'from-blue-500 to-cyan-500' : 'from-blue-600 to-cyan-600'
    },
    {
      icon: Brain,
      title: t('features.psychology'),
      description: t('features.psychology.desc'),
      color: isDarkTheme ? 'from-yellow-500 to-red-500' : 'from-yellow-600 to-red-600'
    },
    {
      icon: Monitor,
      title: t('features.cross'),
      description: t('features.cross.desc'),
      color: isDarkTheme ? 'from-green-500 to-yellow-500' : 'from-green-600 to-yellow-600'
    }
  ];

  return (
    <section id="features" className={`py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative z-10`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20 animate-on-scroll">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${themeClasses.text} mb-4 sm:mb-6 md:mb-8 px-4`}>
            {t('features.title')}
          </h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className={`group relative p-6 sm:p-8 rounded-3xl ${themeClasses.cardBg} border ${themeClasses.cardBorder} backdrop-blur-sm ${themeClasses.cardHover} transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/10 animate-on-scroll`}>
              <div className={`absolute inset-0 rounded-3xl ${isDarkTheme ? 'bg-gradient-to-br from-purple-500/5 to-cyan-500/5' : 'bg-gradient-to-br from-purple-100/50 to-cyan-100/50'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative z-10">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-3 sm:p-4 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold ${themeClasses.text} mb-3 sm:mb-4 group-hover:${isDarkTheme ? 'text-purple-300' : 'text-purple-600'} transition-colors duration-300`}>
                  {feature.title}
                </h3>
                <p className={`text-sm sm:text-base ${themeClasses.textSecondary} leading-relaxed group-hover:${isDarkTheme ? 'text-gray-200' : 'text-gray-700'} transition-colors duration-300`}>
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
