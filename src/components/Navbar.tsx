import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo.tsx';
import { COMPANY_INFO, SERVICES_LIST } from '../data/strongholdData.ts';
import { Phone, ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, anchorId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dropdown hover management with safety buffer
  const handleMouseEnterServices = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeaveServices = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const navLinks = [
    { id: 'home', label: 'HOME' },
    { id: 'services', label: 'SERVICES', hasDropdown: true },
    { id: 'about', label: 'ABOUT' },
    { id: 'work', label: 'OUR WORK' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleLinkClick = (pageId: string, anchorId?: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    onNavigate(pageId, anchorId);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFDF7]/95 backdrop-blur-md border-b border-[#26343D]/10 py-3.5 shadow-sm text-[#26343D]'
            : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark & Official Stronghold Logo */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2864DC] rounded-sm transition-opacity hover:opacity-95"
            aria-label="Stronghold Plumbing Co Home"
          >
            <Logo variant={isScrolled ? 'dark' : 'light'} />
          </button>

          {/* Zone 2: Navigation Links (single-line, clean typography, Inter SemiBold 600) */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-semibold tracking-wider font-['Inter']">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;

              if (link.hasDropdown) {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={handleMouseEnterServices}
                    onMouseLeave={handleMouseLeaveServices}
                  >
                    <button
                      onClick={() => handleLinkClick('services')}
                      className={`flex items-center gap-1.5 py-2 transition-colors whitespace-nowrap shrink-0 relative ${
                        isActive
                          ? isScrolled
                            ? 'text-[#2864DC]'
                            : 'text-[#18BDB5]'
                          : isScrolled
                          ? 'hover:text-[#2864DC]'
                          : 'hover:text-[#18BDB5]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesDropdownOpen ? 'rotate-180' : ''
                        }`}
                      />
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2864DC]" />
                      )}
                    </button>

                    {/* Dropdown Menu - zero card styling, clean minimal surface */}
                    {servicesDropdownOpen && (
                      <div
                        className="absolute top-full left-0 w-72 pt-2 z-50"
                        onMouseEnter={handleMouseEnterServices}
                        onMouseLeave={handleMouseLeaveServices}
                      >
                        <div className="bg-[#FFFDF7] text-[#26343D] border border-[#26343D]/10 py-2 shadow-xl">
                          <div className="px-4 py-2 border-b border-[#26343D]/10">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-[#2864DC]">
                              Plumbing Maintenance
                            </span>
                          </div>
                          {SERVICES_LIST.map((srv) => (
                            <button
                              key={srv.id}
                              onClick={() => handleLinkClick('services', srv.id)}
                              className="w-full text-left px-4 py-2.5 hover:bg-[#E5F2FF] hover:text-[#2864DC] transition-colors flex items-center justify-between group"
                            >
                              <span className="text-xs font-medium font-['Inter']">
                                {srv.title}
                              </span>
                              <span className="text-[10px] font-bold text-[#18BDB5] group-hover:translate-x-0.5 transition-transform">
                                →
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`py-2 transition-colors whitespace-nowrap shrink-0 relative ${
                    isActive
                      ? isScrolled
                        ? 'text-[#2864DC]'
                        : 'text-[#18BDB5]'
                      : isScrolled
                      ? 'hover:text-[#2864DC]'
                      : 'hover:text-[#18BDB5]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2864DC]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action (Single-line, clear, conversion-driven) */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={COMPANY_INFO.phoneHref}
              className={`flex items-center gap-2 text-xs font-bold font-['Inter'] transition-colors tracking-wide ${
                isScrolled ? 'text-[#26343D] hover:text-[#2864DC]' : 'text-white hover:text-[#18BDB5]'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#18BDB5]" />
              <span>0418 165 006</span>
            </a>

            <button
              onClick={() => handleLinkClick('contact')}
              className="px-5 py-2.5 text-xs font-bold font-['Inter'] text-white bg-[#2864DC] hover:bg-[#18BDB5] transition-colors duration-200 tracking-wider flex items-center gap-1.5 whitespace-nowrap shrink-0"
            >
              <span>REQUEST A SERVICE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={COMPANY_INFO.phoneHref}
              className="p-2 text-[#18BDB5] hover:text-[#2864DC] transition-colors"
              aria-label="Call Stronghold Plumbing"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-7 h-7 text-[#26343D]" />
              ) : (
                <Menu className={`w-7 h-7 ${isScrolled ? 'text-[#26343D]' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (No card boxes, full bleed editorial styling) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FFFDF7] text-[#26343D] flex flex-col pt-24 px-6 pb-8 lg:hidden animate-in fade-in duration-200">
          <div className="border-b border-[#26343D]/10 pb-6 mb-6">
            <Logo variant="dark" />
            <p className="mt-2 text-xs text-[#26343D]/70 font-['Inter']">
              Plumbing Maintenance Specialists. Servicing Melbourne.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-base font-bold font-['Barlow'] tracking-wide">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left py-2 border-b border-[#26343D]/5 flex items-center justify-between ${
                  currentPage === link.id ? 'text-[#2864DC]' : 'hover:text-[#2864DC]'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#18BDB5]">→</span>
              </button>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-[#26343D]/10 flex flex-col gap-3">
            <a
              href={COMPANY_INFO.phoneHref}
              className="w-full py-3 px-4 bg-[#E5F2FF] text-[#2864DC] font-bold text-sm font-['Inter'] flex items-center justify-center gap-2 hover:bg-[#2864DC] hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>CALL 0418 165 006</span>
            </a>
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full py-3 px-4 bg-[#2864DC] text-white font-bold text-sm font-['Inter'] flex items-center justify-center gap-2 hover:bg-[#18BDB5] transition-colors"
            >
              <span>REQUEST A SERVICE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-[#26343D]/60 mt-2">
              Melbourne, Victoria · info@strongholdplumbing.net
            </p>
          </div>
        </div>
      )}
    </>
  );
};
