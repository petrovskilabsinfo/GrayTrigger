import { useState, useEffect, useCallback } from 'react';
import type { FC } from 'react';
import { Heart, Coffee, Zap, Star, Gift, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface DonationBlockProps {
  isDark: boolean;
  onClose?: () => void;
}

export const DonationBlock: FC<DonationBlockProps> = ({ isDark, onClose }) => {
  const { t } = useLanguage();
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    onClose?.();
  }, [onClose]);

  // Auto-hide after 8 seconds
  useEffect(() => {
    if (!isVisible) {
      return;
    }

    const timer = setTimeout(handleClose, 8000);

    return () => clearTimeout(timer);
  }, [handleClose, isVisible]);

  if (!isVisible) {
    return null;
  }
  
  const predefinedAmounts = [
    { amount: 3, icon: Coffee, label: t('donate.amounts.coffee'), color: 'from-amber-500 to-orange-500' },
    { amount: 10, icon: Heart, label: t('donate.amounts.development'), color: 'from-pink-500 to-red-500' },
    { amount: 25, icon: Star, label: t('donate.amounts.premium'), color: 'from-purple-500 to-indigo-500' },
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
      <div className={`relative p-8 rounded-3xl ${themeClasses.background} border ${themeClasses.border} backdrop-blur-sm text-center`}>
        <div className="animate-bounce mb-4">
          <Heart className="w-16 h-16 mx-auto text-pink-500" />
        </div>
        <h3 className={`text-2xl font-bold ${themeClasses.text} mb-2`}>
          {t('donate.thankYou')}
        </h3>
        <p className={themeClasses.textSecondary}>
          {t('donate.thankYouMessage')}
        </p>
      </div>
    );
  }

  return (
    <div className={`relative p-8 rounded-3xl ${themeClasses.background} border ${themeClasses.border} backdrop-blur-sm overflow-hidden`}>
      {/* Close button */}
      <button
        onClick={handleClose}
        className={`absolute top-4 right-4 z-20 p-2 rounded-full ${isDark ? 'bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 hover:text-white' : 'bg-white/70 hover:bg-white/90 text-gray-600 hover:text-gray-900'} transition-all duration-300`}
        aria-label="Close"
      >
        <X className="w-5 h-5" />
      </button>
      
      {/* Decorative background */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-purple-500/5 to-pink-500/5' : 'bg-gradient-to-br from-purple-100/50 to-pink-100/50'}`}></div>
      
      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute w-4 h-4 text-pink-400/30 animate-pulse`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 2) * 70}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + i * 0.3}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center mr-3">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${isDark ? 'from-pink-400 to-purple-400' : 'from-pink-600 to-purple-600'} bg-clip-text text-transparent rtl-keep-ltr text-center break-words`}>
              {t('donate.title')}
            </h3>
          </div>
          <p className={`text-lg sm:text-xl ${themeClasses.textSecondary} mb-4 break-words px-2`}>
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
              className={`group relative p-4 sm:p-6 rounded-2xl ${themeClasses.cardBg} border ${
                selectedAmount === item.amount ? 'border-purple-500' : themeClasses.border
              } ${themeClasses.cardHover} transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg overflow-hidden`}
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} p-3 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-center min-h-[60px] flex flex-col justify-center">
                {item.amount > 0 && (
                  <div className={`text-xl sm:text-2xl font-bold ${themeClasses.text} mb-1`}>
                    ${item.amount}
                  </div>
                )}
                <div className={`text-xs sm:text-sm ${themeClasses.textSecondary} break-words px-1 line-clamp-2`}>
                  {item.label}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Custom amount input */}
        {selectedAmount === 0 && (
          <div className="mb-8 animate-in slide-in-from-top-2 duration-300">
            <div className="flex items-center justify-center space-x-4">
              <div className="relative">
                <span className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${themeClasses.textMuted}`}>$</span>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder={t('donate.enterAmount')}
                  className={`pl-8 pr-4 py-3 rounded-xl ${themeClasses.inputBg} border ${themeClasses.inputBorder} ${themeClasses.text} focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300`}
                  min="1"
                  step="0.01"
                />
              </div>
              <button
                onClick={() => handleDonate(0)}
                disabled={!customAmount || parseFloat(customAmount) <= 0}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
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

