// src/App.jsx
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Model from './components/Model';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';
// import ErrorBoundary from './components/ErrorBoundary'; // Import the ErrorBoundary component
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
