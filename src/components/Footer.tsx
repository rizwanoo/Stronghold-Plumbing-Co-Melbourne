import React from 'react';
import { Logo } from './Logo.tsx';
import { COMPANY_INFO, SERVICES_LIST } from '../data/strongholdData.ts';
import { Phone, Mail, MapPin, Instagram, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string, anchorId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#1f2a31] text-white pt-16 pb-12 border-t-4 border-[#2864DC]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top Row: Brand & Positioning Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="light" />
            <p className="text-sm text-[#E5F2FF]/80 font-['Inter'] leading-relaxed max-w-md pt-2">
              Plumbing Maintenance Specialists servicing residential properties, landlords, and commercial spaces across Melbourne. Precision tradecraft and dependable maintenance.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#18BDB5] hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Follow {COMPANY_INFO.instagramHandle}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#18BDB5] font-['Barlow']">
              Direct Contact
            </h4>
            <div className="space-y-2 text-sm font-['Inter']">
              <div>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="flex items-center gap-2.5 text-white hover:text-[#18BDB5] transition-colors font-semibold"
                >
                  <Phone className="w-4 h-4 text-[#2864DC]" />
                  <span>{COMPANY_INFO.phoneFormatted}</span>
                </a>
              </div>
              <div>
                <a
                  href={COMPANY_INFO.emailHref}
                  className="flex items-center gap-2.5 text-white/90 hover:text-[#18BDB5] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#2864DC]" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-white/70 pt-1">
                <MapPin className="w-4 h-4 text-[#2864DC] shrink-0" />
                <span>Melbourne, Victoria, Australia</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#18BDB5] font-['Barlow']">
              Maintenance Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-['Inter'] text-white/80">
              {SERVICES_LIST.map((srv) => (
                <button
                  key={srv.id}
                  onClick={() => onNavigate('services', srv.id)}
                  className="text-left py-1 hover:text-[#18BDB5] transition-colors flex items-center gap-1 group"
                >
                  <span className="opacity-40 group-hover:opacity-100 transition-opacity">›</span>
                  <span className="truncate">{srv.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Row: Quick Navigation & Service Request Callout */}
        <div className="py-8 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <nav className="flex flex-wrap items-center gap-6 text-xs font-semibold tracking-wider font-['Inter'] text-white/80">
            <button onClick={() => onNavigate('home')} className="hover:text-[#18BDB5] transition-colors">
              HOME
            </button>
            <button onClick={() => onNavigate('services')} className="hover:text-[#18BDB5] transition-colors">
              SERVICES
            </button>
            <button onClick={() => onNavigate('about')} className="hover:text-[#18BDB5] transition-colors">
              ABOUT
            </button>
            <button onClick={() => onNavigate('work')} className="hover:text-[#18BDB5] transition-colors">
              OUR WORK
            </button>
            <button onClick={() => onNavigate('contact')} className="hover:text-[#18BDB5] transition-colors">
              CONTACT
            </button>
          </nav>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-2.5 bg-[#2864DC] hover:bg-[#18BDB5] text-white text-xs font-bold tracking-wider transition-colors font-['Inter'] flex items-center gap-2"
          >
            <span>REQUEST A SERVICE</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Legal & Australian Standards */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-['Inter']">
          <p>© {new Date().getFullYear()} Stronghold Plumbing Co. All rights reserved. Servicing Melbourne, Victoria.</p>
          <p className="text-[11px] text-white/40">
            Australian trade standards · Plumbing Maintenance Specialists
          </p>
        </div>
      </div>
    </footer>
  );
};
