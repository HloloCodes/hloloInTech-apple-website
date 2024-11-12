// src/App.jsx
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Highlights from './Highlights';
import Model from './Model';
import Features from './Features';
import HowItWorks from './HowItWorks';
import Footer from './Footer';
import ErrorBoundary from './ErrorBoundary'; // Import the ErrorBoundary component
import { gsap } from 'gsap';

const App = () => {
  useEffect(() => {
    // Example animation for testing
    gsap.fromTo(".bg-black", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <ErrorBoundary>
        <Model />
      </ErrorBoundary>
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default App;
