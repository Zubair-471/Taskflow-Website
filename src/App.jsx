import React, { useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const observerRef = useRef();

  useEffect(() => {
    // Intersection Observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !entry.target.classList.contains('animate-fade-in-up')) {
            // Add animation class only if not already animated
            entry.target.classList.add('animate-fade-in-up');
            // Once animation is triggered, stop observing
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    // Setup animations after DOM is ready
    const setupAnimations = () => {
      const animatedElements = document.querySelectorAll('.scroll-animate:not(.animate-fade-in-up)');
      animatedElements.forEach((el) => {
        if (observerRef.current) {
          observerRef.current.observe(el);
        }
      });
    };

    // Setup animations with proper timing
    setTimeout(setupAnimations, 200);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
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
