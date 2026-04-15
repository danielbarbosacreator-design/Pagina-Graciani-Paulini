import React, { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RaioXSection from './components/RaioXSection';
import FinanceSection from './components/FinanceSection';
import TransformaMenteSection from './components/TransformaMenteSection';
import MMPSection from './components/MMPSection';
import TestimonialsSection from './components/TestimonialsSection';
import MentoraSection from './components/MentoraSection';
import ScheduleSection from './components/ScheduleSection';
import MainFooter from './components/MainFooter';

const App: React.FC = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <div className="bg-brand-black text-white min-h-screen font-sans selection:bg-brand-red selection:text-white overflow-x-hidden">
        {/* Visual Overlays */}
        <div className="grain-overlay" />

        <Navbar />

        <main>
          {/* 1. Hero / Entry Positioning */}
          <div className="reveal">
            <HeroSection />
          </div>

          {/* 2. Raio X - Analysis Product */}
          <div className="reveal">
            <RaioXSection />
          </div>

          {/* 3. Finance Product */}
          <div className="reveal">
            <FinanceSection />
          </div>

          {/* 4. TransformaMente - Deep Transformation Journey */}
          <div className="reveal">
            <TransformaMenteSection />
          </div>

          {/* 5. MMP - The Low-Ticket Entry Point (R$ 47) */}
          <div className="reveal">
            <MMPSection />
          </div>

          {/* 6. Social Proof / SocialStats relocated to Testimonials */}
          <div className="reveal">
            <TestimonialsSection />
          </div>

          {/* 7. Authority / Bio */}
          <div className="reveal">
            <MentoraSection />
          </div>

          {/* 8. Call to Action / Upcoming Events */}
          <div className="reveal">
            <ScheduleSection />
          </div>
        </main>

        <MainFooter />
      </div>
    </ThemeProvider>
  );
};

export default App;