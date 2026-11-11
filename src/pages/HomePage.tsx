import React from 'react';
import { COMPANY_INFO, SERVICES_LIST, MELBOURNE_REGIONS } from '../data/strongholdData.ts';
import { Phone, ArrowUpRight, CheckCircle2, Shield, Wrench, MapPin } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string, anchorId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#FFFDF7]">
      {/* 1. CINEMATIC FULL-SCREEN HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Background Image extending behind entire Navbar and Hero */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero_stronghold_plumbing_1794393975554.jpg"
            alt="Stronghold Plumbing Co maintenance workmanship at contemporary Melbourne residence"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Subtle localized cinematic contrast scrim preserving natural photograph colors */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#26343D] via-transparent to-transparent opacity-60" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-20 w-full">
          <div className="max-w-3xl">
            {/* Editorial Kicker - Clean unboxed metadata */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#18BDB5] uppercase mb-4 font-['Inter']">
              <span>Plumbing Maintenance Specialists</span>
              <span aria-hidden="true">·</span>
              <span>Melbourne, Victoria</span>
            </div>

            {/* Main Headline in Barlow 800 */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white font-['Barlow'] tracking-tight leading-[1.05] uppercase">
              STRONG FOUNDATIONS.
              <br />
              <span className="text-[#18BDB5]">RELIABLE PLUMBING.</span>
            </h1>

            {/* Supporting Text in Inter 400/500 */}
            <p className="mt-6 text-lg sm:text-xl text-white/90 font-['Inter'] font-normal leading-relaxed max-w-2xl">
              Professional plumbing maintenance across Melbourne. Quality workmanship, dependable service and attention to every detail.
            </p>

            {/* Dual Conversion Actions */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-[#2864DC] hover:bg-[#18BDB5] text-white text-sm font-bold font-['Inter'] tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-cyan-500/20"
              >
                <span>REQUEST A SERVICE</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.phoneHref}
                className="px-7 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/25 text-sm font-bold font-['Inter'] tracking-wider transition-colors duration-200 flex items-center gap-2.5"
              >
                <Phone className="w-4 h-4 text-[#18BDB5]" />
                <span>CALL 0418 165 006</span>
              </a>
            </div>

            {/* Melbourne Quick Trust Anchor - Clean Unboxed Text */}
            <div className="mt-14 pt-8 border-t border-white/20 flex flex-wrap items-center gap-6 text-xs text-white/75 font-['Inter']">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#18BDB5]" />
                <span className="font-semibold text-white">Servicing Greater Melbourne</span>
              </div>
              <span aria-hidden="true" className="opacity-40">·</span>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#18BDB5]" />
                <span>Maintenance Focused Tradecraft</span>
              </div>
              <span aria-hidden="true" className="opacity-40">·</span>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#18BDB5]" />
                <span>Residential & Small Commercial</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STRONGHOLD BRAND INTRODUCTION & PHILOSOPHY (Full-width editorial split with GSAP Fade-Up) */}
      <section className="py-24 bg-[#FFFDF7] border-b border-[#26343D]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 gsap-fade-up">
              <span className="text-xs font-bold tracking-[0.2em] text-[#2864DC] uppercase font-['Inter']">
                About The Practice
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#26343D] font-['Barlow'] tracking-tight leading-tight">
                Plumbing maintenance executed with clinical standards.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-[#26343D]/85 font-['Inter'] leading-relaxed text-base sm:text-lg gsap-fade-up">
              <p>
                At <strong className="text-[#26343D] font-semibold">Stronghold Plumbing Co.</strong>, we focus entirely on the discipline where most trade businesses cut corners: <strong className="text-[#2864DC]">preventive maintenance, structural precision, and enduring repair work</strong>.
              </p>
              <p>
                Servicing homeowners, landlords, and property managers throughout Melbourne, our approach is built on respect for your property, transparent assessments, and clean, architectural pipework that lasts.
              </p>
              <div className="pt-4 flex flex-wrap gap-8 text-sm font-semibold text-[#26343D]">
                <div>
                  <span className="block text-2xl font-extrabold font-['Barlow'] text-[#2864DC]">Melbourne</span>
                  <span className="text-xs font-normal text-[#26343D]/70 font-['Inter']">Local Victorian Coverage</span>
                </div>
                <div className="w-px h-10 bg-[#26343D]/15" />
                <div>
                  <span className="block text-2xl font-extrabold font-['Barlow'] text-[#18BDB5]">Dedicated</span>
                  <span className="text-xs font-normal text-[#26343D]/70 font-['Inter']">Maintenance Focus</span>
                </div>
                <div className="w-px h-10 bg-[#26343D]/15" />
                <div>
                  <span className="block text-2xl font-extrabold font-['Barlow'] text-[#26343D]">Direct Line</span>
                  <span className="text-xs font-normal text-[#26343D]/70 font-['Inter']">0418 165 006</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PLUMBING MAINTENANCE EXPERTISE & CAPABILITIES (Asymmetrical Editorial Service List - ZERO CARDS) */}
      <section className="py-24 bg-[#E5F2FF]/40 border-b border-[#26343D]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#26343D]/10 gsap-fade-up">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#2864DC] uppercase font-['Inter']">
                Core Specialisation
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#26343D] font-['Barlow'] tracking-tight">
                Verified Plumbing Maintenance Services
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="text-xs font-bold text-[#2864DC] hover:text-[#18BDB5] transition-colors flex items-center gap-1.5 font-['Inter'] tracking-wider shrink-0"
            >
              <span>VIEW DETAILED SERVICE BREAKDOWN</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Numbered Editorial Rows (Strict Zero Card Rule: Clean full-width list items) */}
          <div className="divide-y divide-[#26343D]/10">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.id}
                className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group hover:bg-white/60 transition-colors px-4 -mx-4 gsap-fade-up"
              >
                <div className="lg:col-span-1">
                  <span className="font-['Barlow'] text-2xl font-bold text-[#2864DC]/50 group-hover:text-[#2864DC] transition-colors">
                    {service.number}
                  </span>
                </div>

                <div className="lg:col-span-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#26343D] font-['Barlow'] group-hover:text-[#2864DC] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs font-medium text-[#13A99A] font-['Inter']">
                    {service.tagline}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <p className="text-sm text-[#26343D]/80 font-['Inter'] leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-[#26343D]/70 font-['Inter']">
                    {service.points.slice(0, 2).map((pt, i) => (
                      <span key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-[#18BDB5] rounded-none shrink-0" />
                        <span>{pt}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2 flex lg:justify-end items-center">
                  <button
                    onClick={() => onNavigate('services', service.id)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#2864DC] hover:text-[#18BDB5] transition-colors font-['Inter']"
                  >
                    <span>Read Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LARGE-FORMAT AUTHENTIC TRADE PHOTOGRAPHY BREAK (Cinematic Full-Bleed Viewport) */}
      <section className="relative py-28 bg-[#26343D] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 gsap-fade-up">
              <span className="text-xs font-bold tracking-[0.2em] text-[#18BDB5] uppercase font-['Inter']">
                Precision Tradecraft
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold font-['Barlow'] tracking-tight leading-tight">
                No shortcuts in concealed walls.
              </h2>
              <p className="text-base text-[#E5F2FF]/85 font-['Inter'] leading-relaxed">
                Plumbing maintenance requires acute diagnostic discipline. We inspect every joint, check manifold pressures, verify isolation valves, and ensure lines are clamped securely against vibration and water hammer.
              </p>
              <div className="space-y-3 pt-2 font-['Inter'] text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#18BDB5] shrink-0 mt-0.5" />
                  <span>Surgical silver brazing and copper alignment without messy flux residue.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#18BDB5] shrink-0 mt-0.5" />
                  <span>Clean site protection: drop cloths on hardwood and protective boot covers.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#18BDB5] shrink-0 mt-0.5" />
                  <span>Detailed verbal and written maintenance summaries upon project completion.</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('work')}
                  className="px-6 py-3.5 bg-[#18BDB5] hover:bg-[#2864DC] text-white font-bold text-xs tracking-wider font-['Inter'] transition-colors duration-200 inline-flex items-center gap-2"
                >
                  <span>EXPLORE OUR WORK & PROJECTS</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 gsap-reveal-img">
              <div className="relative">
                <img
                  src="/assets/images/plumbing_workmanship_craft_1794393976562.jpg"
                  alt="Stronghold Plumbing Co copper manifold maintenance and precision valve adjustment"
                  className="w-full h-[460px] object-cover object-center shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="mt-3 text-[11px] text-white/60 font-['Inter'] flex items-center justify-between">
                  <span>Authentic Worksite Photography</span>
                  <span className="text-[#18BDB5]">Copper Manifold & Pressure Regulation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHY HOMEOWNERS & MANAGERS CHOOSE STRONGHOLD (Split Editorial Rhythm) */}
      <section className="py-24 bg-[#FFFDF7] border-b border-[#26343D]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="max-w-2xl mb-16 gsap-fade-up">
            <span className="text-xs font-bold tracking-[0.2em] text-[#2864DC] uppercase font-['Inter']">
              Service Pillars
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#26343D] font-['Barlow'] tracking-tight">
              Designed around accountability and communication.
            </h2>
          </div>

          {/* Open Editorial Columns - ZERO BOXES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div className="space-y-4 border-t-2 border-[#2864DC] pt-6 gsap-fade-up">
              <span className="text-xs font-bold text-[#2864DC] font-['Barlow'] uppercase tracking-wider">
                01 · Direct Communication
              </span>
              <h3 className="text-xl font-bold text-[#26343D] font-['Barlow']">
                Speak directly with the specialist.
              </h3>
              <p className="text-sm text-[#26343D]/80 font-['Inter'] leading-relaxed">
                No offshore call centres or detached dispatchers. Call 0418 165 006 to describe your maintenance requirements directly to a knowledgeable Melbourne plumber.
              </p>
            </div>

            <div className="space-y-4 border-t-2 border-[#18BDB5] pt-6 gsap-fade-up">
              <span className="text-xs font-bold text-[#18BDB5] font-['Barlow'] uppercase tracking-wider">
                02 · Diagnostic Thoroughness
              </span>
              <h3 className="text-xl font-bold text-[#26343D] font-['Barlow']">
                Treating root causes, not quick patches.
              </h3>
              <p className="text-sm text-[#26343D]/80 font-['Inter'] leading-relaxed">
                Rather than repeatedly replacing cheap washers, we investigate upstream pressure fluctuations, line water hammer, and galvanic corrosion to stop recurring issues.
              </p>
            </div>

            <div className="space-y-4 border-t-2 border-[#2864DC] pt-6 gsap-fade-up">
              <span className="text-xs font-bold text-[#2864DC] font-['Barlow'] uppercase tracking-wider">
                03 · Property Respect
              </span>
              <h3 className="text-xl font-bold text-[#26343D] font-['Barlow']">
                Pristine workspaces upon departure.
              </h3>
              <p className="text-sm text-[#26343D]/80 font-['Inter'] leading-relaxed">
                We safeguard flooring, wipe down polished brass and nickel fittings, vacuum work debris, and leave residential bathrooms and kitchens immaculate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MELBOURNE SERVICE REGIONS PRESENTATION (Open layout, verified coverage) */}
      <section className="py-24 bg-[#E5F6EF]/40 border-b border-[#26343D]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6 gsap-fade-up">
              <span className="text-xs font-bold tracking-[0.2em] text-[#13A99A] uppercase font-['Inter']">
                Local Presence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#26343D] font-['Barlow'] tracking-tight">
                Servicing Melbourne properties with dedicated local focus.
              </h2>
              <p className="text-sm sm:text-base text-[#26343D]/80 font-['Inter'] leading-relaxed">
                Stronghold Plumbing Co is based in Melbourne and services private residences, period homes, townhouses, and boutique commercial premises throughout inner and suburban Melbourne.
              </p>
              <div className="pt-2">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#2864DC] hover:text-[#18BDB5] tracking-wider font-['Inter'] uppercase"
                >
                  <Phone className="w-4 h-4 text-[#18BDB5]" />
                  <span>Call to discuss your suburb coverage · 0418 165 006</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 gsap-fade-up">
              <div className="divide-y divide-[#26343D]/10 border-y border-[#26343D]/10">
                {MELBOURNE_REGIONS.map((region, idx) => (
                  <div key={idx} className="py-5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <span className="font-bold text-base text-[#26343D] font-['Barlow'] w-52 shrink-0">
                      {region.name}
                    </span>
                    <span className="text-xs text-[#26343D]/75 font-['Inter']">
                      {region.suburbs}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONVERSION CALL TO ACTION SECTION (Bold, vibrant, zero popup) */}
      <section className="py-20 bg-gradient-to-r from-[#2864DC] via-[#1a55c9] to-[#18BDB5] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center max-w-4xl gsap-fade-up">
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#E5F2FF] font-['Inter']">
            Plumbing Maintenance Specialists
          </span>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold font-['Barlow'] tracking-tight uppercase">
            Ready to secure your property's plumbing infrastructure?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/90 font-['Inter'] max-w-2xl mx-auto">
            Contact Stronghold Plumbing Co for scheduled maintenance, residential overhauls, or leak investigations in Melbourne.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-white text-[#2864DC] hover:bg-[#E5F2FF] text-xs font-bold tracking-wider font-['Inter'] transition-colors flex items-center gap-2 shadow-md"
            >
              <span>REQUEST A SERVICE TODAY</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href={COMPANY_INFO.phoneHref}
              className="px-8 py-4 bg-black/25 hover:bg-black/35 text-white border border-white/30 text-xs font-bold tracking-wider font-['Inter'] transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#18BDB5]" />
              <span>DIRECT CALL: 0418 165 006</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
