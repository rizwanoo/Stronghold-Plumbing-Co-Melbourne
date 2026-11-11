import React from 'react';
import { COMPANY_INFO, WORK_PROJECTS } from '../data/strongholdData.ts';
import { ArrowUpRight, Instagram, MapPin } from 'lucide-react';

interface AboutWorkPageProps {
  onNavigate: (page: string, anchorId?: string) => void;
}

export const AboutWorkPage: React.FC<AboutWorkPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-[#FFFDF7]">
      {/* 1. Cinematic Header Banner */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/melbourne_architectural_home_1794393979567.jpg"
            alt="Melbourne architectural residence serviced by Stronghold Plumbing Co"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-36 pb-16 w-full">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#18BDB5] uppercase font-['Inter']">
              Brand Story & Workmanship
            </span>
            <h1 className="mt-2 text-4xl sm:text-6xl font-extrabold text-white font-['Barlow'] tracking-tight uppercase">
              ABOUT & OUR WORK
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90 font-['Inter'] max-w-2xl leading-relaxed">
              Plumbing Maintenance Specialists servicing Melbourne. Built on genuine trade standards, copper craftsmanship, and dependable property care.
            </p>
          </div>
        </div>
      </section>

      {/* 2. The Stronghold Story & Melbourne Grounding (Editorial Split - Zero Box with GSAP Fade-Up) */}
      <section className="py-24 bg-[#FFFDF7] border-b border-[#26343D]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-6 gsap-fade-up">
              <span className="text-xs font-bold tracking-[0.2em] text-[#2864DC] uppercase font-['Inter']">
                Trade Identity
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#26343D] font-['Barlow'] tracking-tight leading-tight">
                Specialized in what keeps properties running quietly.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#26343D]/80 font-['Inter'] leading-relaxed">
                <p>
                  Most plumbing contractors prioritize high-turnover new builds or fast emergency callouts. <strong className="text-[#26343D]">Stronghold Plumbing Co.</strong> was established to fill the critical gap in Melbourne's property sector: <strong className="text-[#2864DC]">meticulous, scheduled, and preventative plumbing maintenance</strong>.
                </p>
                <p>
                  Whether servicing a heritage Victorian terrace in Carlton, a contemporary family home in Hawthorn, or a boutique commercial facility, we bring surgical diagnostic attention to every valve, pipe joint, and tapware fitting.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={COMPANY_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#18BDB5] hover:text-[#2864DC] tracking-wider uppercase font-['Inter']"
                >
                  <Instagram className="w-4 h-4" />
                  <span>View authentic worksite updates on Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 gsap-fade-up">
              <div className="border-t-2 border-[#2864DC] pt-8 space-y-6">
                <h3 className="text-xl font-bold font-['Barlow'] text-[#26343D]">
                  Our Working Code of Conduct
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm font-['Inter']">
                  <div className="space-y-2">
                    <span className="font-bold text-[#2864DC] block font-['Barlow'] text-base">
                      01 · Respect for Premises
                    </span>
                    <p className="text-xs text-[#26343D]/75 leading-relaxed">
                      Every project starts with surface protection. We treat residential interiors and finished joinery with absolute care.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="font-bold text-[#18BDB5] block font-['Barlow'] text-base">
                      02 · Australian Standard Copper
                    </span>
                    <p className="text-xs text-[#26343D]/75 leading-relaxed">
                      We utilize high-grade Australian-certified copper and brass fittings engineered to withstand thermal expansion and pressure cycling.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="font-bold text-[#2864DC] block font-['Barlow'] text-base">
                      03 · Transparent Assessment
                    </span>
                    <p className="text-xs text-[#26343D]/75 leading-relaxed">
                      Clear verbal explanations of what failed, why it failed, and what preventive action prevents it from recurring.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="font-bold text-[#18BDB5] block font-['Barlow'] text-base">
                      04 · Thorough Verification
                    </span>
                    <p className="text-xs text-[#26343D]/75 leading-relaxed">
                      No tool gets packed away until the repaired line undergoes static pressure hold and flow rate testing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. VERIFIED PROJECTS & TRADE PHOTOGRAPHY SHOWCASE (Strict Zero Card Rule: Open Asymmetric Layout) */}
      <section className="py-24 bg-[#E5F2FF]/30 border-b border-[#26343D]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#26343D]/10 gsap-fade-up">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#2864DC] uppercase font-['Inter']">
                Authentic Portfolio
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#26343D] font-['Barlow'] tracking-tight">
                Verified Work & Worksite Documentation
              </h2>
            </div>
            <p className="text-xs text-[#26343D]/70 font-['Inter'] max-w-sm">
              Documentary photography demonstrating precision copper joints, manifold alignments, and residential bathroom installations across Melbourne.
            </p>
          </div>

          {/* Project Showcase Rows - ZERO CARDS, pure editorial storytelling */}
          <div className="space-y-20 pt-12">
            {WORK_PROJECTS.map((project, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={project.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Photo Column */}
                  <div className={`relative gsap-reveal-img ${isEven ? 'lg:col-span-7' : 'lg:col-span-7 lg:order-2'}`}>
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.suburb}`}
                      className="w-full h-[420px] sm:h-[480px] object-cover object-center shadow-lg"
                      referrerPolicy="no-referrer"
                    />
                    <div className="mt-3 flex items-center justify-between text-xs text-[#26343D]/70 font-['Inter']">
                      <span className="font-semibold text-[#2864DC] flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{project.suburb}</span>
                      </span>
                      <span>Verified Melbourne Installation</span>
                    </div>
                  </div>

                  {/* Narrative Column */}
                  <div className={`space-y-4 gsap-fade-up ${isEven ? 'lg:col-span-5' : 'lg:col-span-5 lg:order-1'}`}>
                    <span className="text-xs font-bold tracking-widest text-[#18BDB5] uppercase font-['Inter']">
                      Project #{idx + 1}
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#26343D] font-['Barlow'] leading-tight">
                      {project.title}
                    </h3>

                    <div className="border-l-2 border-[#2864DC] pl-4 py-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#2864DC] block font-['Inter']">
                        Scope of Work
                      </span>
                      <p className="text-xs text-[#26343D]/80 font-['Inter'] mt-0.5">
                        {project.scope}
                      </p>
                    </div>

                    <p className="text-sm text-[#26343D]/85 font-['Inter'] leading-relaxed pt-2">
                      {project.summary}
                    </p>

                    <div className="pt-4">
                      <button
                        onClick={() => onNavigate('contact')}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2864DC] hover:text-[#18BDB5] tracking-wider uppercase font-['Inter'] transition-colors"
                      >
                        <span>Request Similar Maintenance</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Instagram Proof Section (Authentic connection) */}
      <section className="py-20 bg-[#26343D] text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center max-w-3xl gsap-fade-up">
          <Instagram className="w-8 h-8 text-[#18BDB5] mx-auto mb-4" />
          <span className="text-xs uppercase font-bold tracking-[0.25em] text-[#18BDB5] font-['Inter']">
            Follow Our Worksites
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold font-['Barlow'] tracking-tight">
            Documenting Melbourne plumbing maintenance.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#E5F2FF]/80 font-['Inter'] leading-relaxed">
            Follow <strong className="text-white">@stronghold_plumbingco</strong> for regular updates, behind-the-scenes tradecraft, copper manifolds, and project completions.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={COMPANY_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#18BDB5] hover:bg-[#2864DC] text-white font-bold text-xs tracking-wider font-['Inter'] transition-colors inline-flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>VISIT @STRONGHOLD_PLUMBINGCO</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 border border-white/30 hover:border-white text-white font-bold text-xs tracking-wider font-['Inter'] transition-colors"
            >
              <span>DISCUSS YOUR PROJECT</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
