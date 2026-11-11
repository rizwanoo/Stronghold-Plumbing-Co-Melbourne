import React, { useEffect } from 'react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/strongholdData.ts';
import { Phone, ArrowUpRight, CheckCircle2, Droplets, Wrench, Gauge } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string, anchorId?: string, prefilledService?: string) => void;
  anchorId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, anchorId }) => {
  useEffect(() => {
    if (anchorId) {
      const element = document.getElementById(anchorId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [anchorId]);

  return (
    <div className="w-full bg-[#FFFDF7]">
      {/* Services Header Banner - Full Bleed Cinematic */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/residential_plumbing_maintenance_1794393978637.jpg"
            alt="Stronghold Plumbing Co maintenance craftsmanship"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-36 pb-16 w-full">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#18BDB5] uppercase font-['Inter']">
              Maintenance Specialisation
            </span>
            <h1 className="mt-2 text-4xl sm:text-6xl font-extrabold text-white font-['Barlow'] tracking-tight uppercase">
              PLUMBING SERVICES
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90 font-['Inter'] max-w-2xl">
              Stronghold Plumbing Co delivers specialized maintenance and diagnostic plumbing for residential properties, period homes, and commercial premises across Melbourne.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Jump Bar - Clean unboxed text links */}
      <div className="sticky top-[69px] z-30 bg-[#FFFDF7]/95 backdrop-blur-md border-b border-[#26343D]/10 py-3.5 px-5 sm:px-8 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-6 text-xs font-semibold font-['Inter'] tracking-wider text-[#26343D] whitespace-nowrap">
          <span className="text-[#2864DC] font-bold uppercase text-[10px] tracking-widest shrink-0">
            JUMP TO:
          </span>
          {SERVICES_LIST.map((srv) => (
            <a
              key={srv.id}
              href={`#${srv.id}`}
              className="hover:text-[#2864DC] transition-colors py-1 shrink-0"
            >
              {srv.number}. {srv.title}
            </a>
          ))}
        </div>
      </div>

      {/* Editorial Service Sections - ZERO CARDS, alternating full-width splits with GSAP Fade-Up */}
      <div className="divide-y divide-[#26343D]/10">
        {SERVICES_LIST.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-24 ${isEven ? 'bg-[#FFFDF7]' : 'bg-[#E5F2FF]/30'}`}
            >
              <div className="max-w-7xl mx-auto px-5 sm:px-8">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Text Column */}
                  <div className={`space-y-6 gsap-fade-up ${isEven ? 'lg:col-span-6' : 'lg:col-span-6 lg:order-2'}`}>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-extrabold text-[#2864DC] font-['Barlow']">
                        {service.number}
                      </span>
                      <div className="h-0.5 w-12 bg-[#18BDB5]" />
                      <span className="text-xs font-bold text-[#13A99A] uppercase tracking-widest font-['Inter']">
                        Specialist Discipline
                      </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#26343D] font-['Barlow'] tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-sm font-semibold text-[#2864DC] font-['Inter']">
                      {service.tagline}
                    </p>

                    <p className="text-sm sm:text-base text-[#26343D]/80 font-['Inter'] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key Capabilities List */}
                    <div className="pt-2 space-y-2.5 font-['Inter'] text-sm">
                      {service.points.map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-[#18BDB5] shrink-0 mt-0.5" />
                          <span className="text-[#26343D]/85">{point}</span>
                        </div>
                      ))}
                    </div>

                    {/* Service Enquiry Actions */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => onNavigate('contact', undefined, service.title)}
                        className="px-6 py-3.5 bg-[#2864DC] hover:bg-[#18BDB5] text-white font-bold text-xs tracking-wider font-['Inter'] transition-colors flex items-center gap-2"
                      >
                        <span>BOOK {service.title.toUpperCase()}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>

                      <a
                        href={COMPANY_INFO.phoneHref}
                        className="px-5 py-3.5 border border-[#26343D]/25 hover:border-[#2864DC] text-[#26343D] font-bold text-xs tracking-wider font-['Inter'] transition-colors flex items-center gap-2"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#2864DC]" />
                        <span>0418 165 006</span>
                      </a>
                    </div>
                  </div>

                  {/* Visual Media Column */}
                  <div className={`relative gsap-reveal-img ${isEven ? 'lg:col-span-6' : 'lg:col-span-6 lg:order-1'}`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={`${service.title} - Stronghold Plumbing Co Melbourne`}
                        className="w-full h-[400px] sm:h-[480px] object-cover object-center shadow-md transition-transform duration-500 hover:scale-[1.02]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white text-xs font-['Inter'] flex justify-between items-center">
                        <span className="font-semibold">{service.title}</span>
                        <span className="text-[#18BDB5]">Melbourne, VIC</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Maintenance Standards Section - Open Editorial Text */}
      <section className="py-24 bg-[#1f2a31] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-3xl gsap-fade-up">
            <span className="text-xs font-bold tracking-[0.2em] text-[#18BDB5] uppercase font-['Inter']">
              Maintenance Principles
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold font-['Barlow'] tracking-tight">
              Why maintenance matters more than replacement.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-white/80 font-['Inter'] leading-relaxed">
              In Melbourne's diverse residential landscape — spanning century-old Victorian terraces through to modern multi-level builds — plumbing problems rarely announce themselves until significant structural water damage has occurred. Systematic maintenance identifies wear on valves, pressure surges, and slow joint weeping long before catastrophic failure.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-white/10 pt-10">
            <div className="space-y-3 gsap-fade-up">
              <Gauge className="w-6 h-6 text-[#18BDB5]" />
              <h3 className="text-lg font-bold font-['Barlow'] text-white">Water Pressure Stabilization</h3>
              <p className="text-xs text-white/70 font-['Inter'] leading-relaxed">
                Excessive municipal water pressure stresses internal tap cartridges and flexible connector hoses. We measure, test, and calibrate pressure-reducing valves.
              </p>
            </div>

            <div className="space-y-3 gsap-fade-up">
              <Droplets className="w-6 h-6 text-[#18BDB5]" />
              <h3 className="text-lg font-bold font-['Barlow'] text-white">Burst Hose Prevention</h3>
              <p className="text-xs text-white/70 font-['Inter'] leading-relaxed">
                Braided flexible hoses beneath sinks and basins account for a massive percentage of domestic flood claims. We inspect and replace degraded hoses with certified stainless connections.
              </p>
            </div>

            <div className="space-y-3 gsap-fade-up">
              <Wrench className="w-6 h-6 text-[#18BDB5]" />
              <h3 className="text-lg font-bold font-['Barlow'] text-white">Vibration & Hammer Arrest</h3>
              <p className="text-xs text-white/70 font-['Inter'] leading-relaxed">
                Banging pipes indicate hydraulic shock waves traveling through copper risers. We install mechanical arrestors and tighten line brackets to eliminate destructive hammer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Service Request Action */}
      <section className="py-16 bg-[#2864DC] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6 gsap-fade-up">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Barlow'] uppercase">
              Need a qualified maintenance assessment in Melbourne?
            </h3>
            <p className="text-xs sm:text-sm text-[#E5F2FF]/85 font-['Inter'] mt-1">
              Speak directly with Stronghold Plumbing Co on 0418 165 006 or send through your job requirements.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 bg-white text-[#2864DC] hover:bg-[#E5F2FF] font-bold text-xs tracking-wider font-['Inter'] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>SUBMIT SERVICE REQUEST</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
