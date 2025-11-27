import { useEffect, useState } from 'react';
import { LanguageProvider, useLanguage } from './components/LanguageProvider';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { DonationBlock } from './components/DonationBlock';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Footer } from './components/Footer';
import { ArrowRight } from 'lucide-react';

function AppContent() {
  const { t, language, setLanguage } = useLanguage();
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Smooth scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const themeClasses = {
    background: isDarkTheme 
      ? 'bg-[#141414]' 
      : 'bg-gradient-to-br from-gray-50 via-purple-50 to-gray-50',
    text: isDarkTheme ? 'text-white' : 'text-gray-900',
    cardBg: isDarkTheme ? 'bg-slate-800/30' : 'bg-white/70',
    cardBorder: isDarkTheme ? 'border-slate-700/50' : 'border-purple-200/50',
    cardHover: isDarkTheme ? 'hover:bg-slate-800/50 hover:border-purple-500/30' : 'hover:bg-white/90 hover:border-purple-400/60',
    navBg: isDarkTheme ? 'bg-slate-900/80' : 'bg-white/80',
    navBorder: isDarkTheme ? 'border-purple-500/20' : 'border-purple-300/30',
    textSecondary: isDarkTheme ? 'text-gray-300' : 'text-gray-600',
    textMuted: isDarkTheme ? 'text-gray-400' : 'text-gray-500',
    orbColor1: isDarkTheme ? 'bg-purple-500/20' : 'bg-purple-400/30',
    orbColor2: isDarkTheme ? 'bg-cyan-500/20' : 'bg-cyan-400/30',
    orbColor3: isDarkTheme ? 'bg-blue-500/20' : 'bg-blue-400/30',
    gridPattern: isDarkTheme ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.4)',
    particleColor: isDarkTheme ? 'bg-cyan-400' : 'bg-purple-500',
    footerBorder: isDarkTheme ? 'border-purple-500/20' : 'border-purple-300/30'
  };

  return (
    <div className={`min-h-screen ${themeClasses.background} ${themeClasses.text} relative overflow-hidden transition-all duration-700`}>
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {/* Floating Orbs */}
          <div className={`absolute top-20 left-10 w-72 h-72 ${themeClasses.orbColor1} rounded-full blur-3xl animate-pulse`}></div>
          <div className={`absolute top-40 right-20 w-96 h-96 ${themeClasses.orbColor2} rounded-full blur-3xl animate-pulse delay-1000`} style={{ animationDelay: '1s' }}></div>
          <div className={`absolute bottom-20 left-1/3 w-80 h-80 ${themeClasses.orbColor3} rounded-full blur-3xl animate-pulse delay-2000`} style={{ animationDelay: '2s' }}></div>
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, ${themeClasses.gridPattern} 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}
          ></div>
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 ${themeClasses.particleColor} rounded-full animate-ping`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>

        <Header isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
        <Hero isDarkTheme={isDarkTheme} isVisible={isVisible} />
        <Features isDarkTheme={isDarkTheme} />
        
        {/* ColorAdapt Promotion Section */}
        <section className={`py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative z-10`}>
          <div className="max-w-6xl mx-auto">
            <div className={`relative mt-8 p-6 sm:p-8 md:p-10 rounded-3xl ${isDarkTheme ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-purple-500/30' : 'bg-gradient-to-br from-white/80 to-purple-50/80 border-purple-300/40'} border backdrop-blur-sm group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500`}>
              <div className={`absolute inset-0 rounded-3xl ${isDarkTheme ? 'bg-gradient-to-br from-purple-500/10 to-cyan-500/10' : 'bg-gradient-to-br from-purple-100/60 to-cyan-100/60'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <div className="relative z-10 text-center px-4">
                <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${isDarkTheme ? 'from-purple-400 to-cyan-400' : 'from-purple-600 to-cyan-600'} bg-clip-text text-transparent mb-3 sm:mb-4 rtl-keep-ltr text-center`}>
                  {t('coloradapt.title')}
                </h2>
                <p className={`text-base sm:text-lg md:text-xl ${themeClasses.textSecondary} mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed`}>
                  {t('coloradapt.description')}
                </p>
                <a 
                  href="https://chromewebstore.google.com/detail/coloradapt/mdhhbgaeadiphmhbjkfmjcfahcahcbkg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    isDarkTheme 
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:from-purple-500 hover:to-cyan-400' 
                      : 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white hover:from-purple-700 hover:to-cyan-700'
                  }`}
                >
                  {t('coloradapt.button')}
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <PrivacyPolicy isDarkTheme={isDarkTheme} themeClasses={themeClasses} />
        {/* Donation Section - Hidden */}
        {/* <section className={`py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative z-10`}>
          <div className="max-w-4xl mx-auto">
            <DonationBlock isDark={isDarkTheme} />
          </div>
        </section> */}
        <Footer isDarkTheme={isDarkTheme} themeClasses={themeClasses} />
      </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;