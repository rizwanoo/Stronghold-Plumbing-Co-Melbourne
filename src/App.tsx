import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { AboutWorkPage } from './pages/AboutWorkPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';
import { initScrollReveals } from './utils/gsapSetup.ts';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [anchorId, setAnchorId] = useState<string | undefined>(undefined);
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

  // Sync browser title with current view for SEO & UX
  useEffect(() => {
    switch (currentPage) {
      case 'services':
        document.title = 'Plumbing Services | Stronghold Plumbing Co Melbourne';
        break;
      case 'about':
      case 'work':
        document.title = 'About & Our Work | Stronghold Plumbing Co Melbourne';
        break;
      case 'contact':
        document.title = 'Contact & Service Request | Stronghold Plumbing Co';
        break;
      default:
        document.title = 'Stronghold Plumbing Co — Melbourne Plumbing Maintenance Specialists';
        break;
    }

    // Initialize GSAP ScrollTrigger fade-up reveal animations on each page transition
    const timer = setTimeout(() => {
      initScrollReveals();
    }, 50);

    return () => clearTimeout(timer);
  }, [currentPage]);

  const handleNavigate = (page: string, targetAnchorId?: string, servicePrefill?: string) => {
    setCurrentPage(page);
    setAnchorId(targetAnchorId);
    if (servicePrefill) {
      setPrefilledService(servicePrefill);
    }

    if (!targetAnchorId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF7] text-[#26343D] selection:bg-[#2864DC] selection:text-white font-['Inter']">
      {/* Cinematic Transparent Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content with smooth fade */}
      <main className="flex-1 w-full animate-in fade-in duration-300">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && (
          <ServicesPage onNavigate={handleNavigate} anchorId={anchorId} />
        )}
        {(currentPage === 'about' || currentPage === 'work') && (
          <AboutWorkPage onNavigate={handleNavigate} />
        )}
        {currentPage === 'contact' && (
          <ContactPage initialService={prefilledService} />
        )}
      </main>

      {/* Branded Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
