import React, { useState } from 'react';
import { Heart, DollarSign, Coffee, Gift, Star, CheckCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export const PayPalDonation: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  const { t } = useLanguage();

  const predefinedAmounts = [5, 10, 25, 50, 100];

  const handleDonation = (amount: number) => {
    const paypalUrl = `https://www.paypal.com/donate/?business=hoper_Jay@i.ua&amount=${amount}&currency_code=USD&item_name=GrayTrigger%20Project%20Support`;
    window.open(paypalUrl, '_blank');
    
    // Show thank you message
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

  const getAmountToUse = () => {
    if (selectedAmount) return selectedAmount;
    if (customAmount) return parseFloat(customAmount);
    return 10; // default
  };

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-blue-700 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-on-scroll">
          <div className="flex items-center justify-center mb-6">
            <Heart className="text-pink-300 mr-3 animate-pulse" size={48} />
            <h2 className="text-4xl lg:text-5xl font-bold">
              {t('donate.title')}
            </h2>
          </div>
          <p className="text-xl lg:text-2xl opacity-90 mb-4">
            {t('donate.subtitle')}
          </p>
          <p className="text-lg opacity-75 max-w-2xl mx-auto">
            {t('donate.description')}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 shadow-2xl animate-on-scroll">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Donation amounts */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <DollarSign className="mr-2" size={28} />
                {t('donate.select_amount')}
              </h3>
              
              <div className="grid grid-cols-3 gap-3 mb-6">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`p-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      selectedAmount === amount
                        ? 'bg-white text-purple-600 shadow-lg'
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  {t('donate.custom_amount')}
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    placeholder="25"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
              </div>

              <button
                onClick={() => handleDonation(getAmountToUse())}
                className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center"
              >
                <Heart className="mr-2" size={24} />
                {t('donate.support_paypal')}
              </button>
            </div>

            {/* Right side - Benefits */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Gift className="mr-2" size={28} />
                {t('donate.benefits_title')}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Star className="text-yellow-300 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">{t('donate.early_access')}</h4>
                    <p className="text-sm opacity-80">{t('donate.early_access_desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Coffee className="text-yellow-300 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">{t('donate.team_thanks')}</h4>
                    <p className="text-sm opacity-80">{t('donate.team_thanks_desc')}</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="text-green-300 mr-3 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-semibold">{t('donate.development_impact')}</h4>
                    <p className="text-sm opacity-80">{t('donate.development_impact_desc')}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-xl">
                <p className="text-sm opacity-90">
                  <strong>{t('donate.transparency')}</strong>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thank you message */}
        {showThankYou && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-md mx-4 text-center animate-bounce">
              <Heart className="text-red-500 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{t('donate.thank_you')}</h3>
              <p className="text-gray-600">
                {t('donate.thank_you_message')}
              </p>
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-on-scroll">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">$11,500</div>
            <div className="text-sm opacity-75">{t('donate.stats.raised')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">230+</div>
            <div className="text-sm opacity-75">{t('donate.stats.supporters')}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">23%</div>
            <div className="text-sm opacity-75">{t('donate.stats.goal')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};