import React, { useEffect } from 'react';
import { LanguageProvider } from './components/LanguageProvider';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatIsIt } from './components/WhatIsIt';
import { ForWhom } from './components/ForWhom';
import { HowItWorks } from './components/HowItWorks';
import { Features } from './components/Features';
import { Funding } from './components/Funding';
import { PayPalDonation } from './components/PayPalDonation';
import { JoinUs } from './components/JoinUs';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        <Header />
        <Hero />
        <WhatIsIt />
        <ForWhom />
        <HowItWorks />
        <Features />
        <Funding />
        <PayPalDonation />
        <JoinUs />
        <PrivacyPolicy />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;