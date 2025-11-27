import React, { useState } from 'react';
import { Coffee, Zap, Star, Gift, Building2, TrendingUp } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface DonationBlockProps {
  isDark: boolean;
}

export const DonationBlock: React.FC<DonationBlockProps> = ({ isDark }) => {
  const { t } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  
  const predefinedAmounts = [
    { amount: 3, icon: Coffee, label: t('donate.amounts.coffee'), color: 'from-amber-500 to-orange-500' },
    { amount: 10, icon: TrendingUp, label: t('donate.amounts.development'), color: 'from-blue-500 to-cyan-500' },
    { amount: 25, icon: Building2, label: t('donate.amounts.premium'), color: 'from-indigo-500 to-purple-500' },
    { amount: 0, icon: Gift, label: t('donate.amounts.custom'), color: 'from-green-500 to-emerald-500' }
  ];

  const themeClasses = {
    background: isDark ? 'bg-slate-800/30' : 'bg-white/70',
    border: isDark ? 'border-purple-500/30' : 'border-purple-300/40',
    text: isDark ? 'text-white' : 'text-gray-900',
    textSecondary: isDark ? 'text-gray-300' : 'text-gray-600',
    textMuted: isDark ? 'text-gray-400' : 'text-gray-500',
    cardBg: isDark ? 'bg-slate-700/50' : 'bg-white/80',
    cardHover: isDark ? 'hover:bg-slate-600/50' : 'hover:bg-purple-50/80',
    inputBg: isDark ? 'bg-slate-700/50' : 'bg-white/90',
    inputBorder: isDark ? 'border-slate-600' : 'border-purple-200'
  };

  const handleDonate = (amount: number) => {
    const finalAmount = amount === 0 ? parseFloat(customAmount) || 5 : amount;
    
    // PayPal donation URL using email address
    const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=${encodeURIComponent('hoper_Jay@i.ua')}&amount=${finalAmount}&currency_code=USD&item_name=${encodeURIComponent('GrayTrigger Development Support')}&no_note=0&cn=${encodeURIComponent('Message for developer (optional)')}&no_shipping=1&return=${encodeURIComponent(window.location.origin)}&cancel_return=${encodeURIComponent(window.location.origin)}`;
    
    // Show thank you message and open PayPal
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
    
    // Open PayPal donation page
    window.open(paypalUrl, '_blank');
  };

  if (showThankYou) {
    return (
      <div className={`relative p-8 rounded-2xl ${themeClasses.background} border ${themeClasses.border} backdrop-blur-sm text-center animate-fade-in`}>
        <div className="mb-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
        </div>
        <h3 className={`text-2xl font-bold ${themeClasses.text} mb-2`}>
          {t('donate.thankYou').replace('💜', '')}
        </h3>
        <p className={themeClasses.textSecondary}>
          {t('donate.thankYouMessage').replace('💜', '')}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative p-8 sm:p-10 rounded-2xl ${themeClasses.background} border ${themeClasses.border} backdrop-blur-sm overflow-hidden`}>
      {/* Decorative background */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-blue-500/5 to-cyan-500/5' : 'bg-gradient-to-br from-blue-100/50 to-cyan-100/50'}`}></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4 shadow-lg">
              <Building2 className="w-7 h-7 text-white" />
            </div>
            <h3 className={`text-2xl sm:text-3xl font-bold ${themeClasses.text} rtl-keep-ltr text-center break-words`}>
              {t('donate.title')}
            </h3>
          </div>
          <p className={`text-lg sm:text-xl ${themeClasses.textSecondary} mb-6 break-words px-2`}>
            {t('donate.subtitle')}
          </p>
        </div>

        {/* Donation amounts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {predefinedAmounts.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedAmount(item.amount);
                if (item.amount > 0) handleDonate(item.amount);
              }}
              className={`group relative p-4 sm:p-6 rounded-xl ${themeClasses.cardBg} border ${
                selectedAmount === item.amount ? 'border-blue-500' : themeClasses.border
              } ${themeClasses.cardHover} transition-all duration-300 hover:opacity-90 hover:shadow-lg overflow-hidden animate-fade-in-up`}
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} p-3 mb-4 mx-auto group-hover:opacity-90 transition-opacity duration-300`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-center min-h-[60px] flex flex-col justify-center">
                {item.amount > 0 && (
                  <div className={`text-xl sm:text-2xl font-bold ${themeClasses.text} mb-2`}>
                    ${item.amount}
                  </div>
                )}
                <div className={`text-xs sm:text-sm font-medium ${themeClasses.textSecondary} break-words px-1 line-clamp-2`}>
                  {item.label}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Custom amount input */}
        {selectedAmount === 0 && (
          <div className="mb-8 animate-fade-in-up">
            <div className="flex items-center justify-center space-x-4">
              <div className="relative">
                <span className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${themeClasses.textMuted}`}>$</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder={t('donate.enterAmount')}
                  className={`pl-8 pr-4 py-3 rounded-xl ${themeClasses.inputBg} border ${themeClasses.inputBorder} ${themeClasses.text} focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                  min="1"
                  step="0.01"
                />
              </div>
              <button
                onClick={() => handleDonate(0)}
                disabled={!customAmount || parseFloat(customAmount) <= 0}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-all duration-300 whitespace-nowrap"
              >
                {t('donate.button')}
              </button>
            </div>
          </div>
        )}

        {/* PayPal branding */}
        <div className="text-center">
          <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${isDark ? 'bg-slate-700/50' : 'bg-gray-100/80'} ${themeClasses.textMuted} text-sm`}>
            <Zap className="w-4 h-4" />
            <span>{t('donate.poweredBy')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
