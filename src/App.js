import React, { useState, useEffect } from "react";
import './App.css';

import About from './components/about/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualification/Qualification';
import Scrollup from './components/scrollup/Scrollup';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out after 2 seconds
    const timer = setTimeout(() => setFadeOut(true), 2000);

    // Remove welcome screen after fade-out
    const removeTimer = setTimeout(() => setShowWelcome(false), 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (showWelcome) {
    return (
      <div className={`welcome-screen ${fadeOut ? 'fade-out' : ''}`}>
        <div className="welcome-text">
          Welcome to the Adeel Ahmad Portfolio...
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
