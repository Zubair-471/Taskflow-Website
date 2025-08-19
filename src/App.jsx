import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Simple scroll animation trigger
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible && !el.classList.contains('animate-fade-in-up')) {
          el.classList.add('animate-fade-in-up');
        }
      });
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Trigger on initial load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Reviews />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
