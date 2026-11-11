import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES_LIST } from '../data/strongholdData.ts';
import { Phone, Mail, MapPin, Instagram, CheckCircle2, Send, ShieldCheck } from 'lucide-react';

interface ContactPageProps {
  initialService?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    suburb: '',
    serviceType: initialService || SERVICES_LIST[0].title,
    description: '',
    preferredContact: 'Phone Call',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionReceipt, setSubmissionReceipt] = useState<{
    referenceNumber: string;
    timestamp: string;
    data: typeof formData;
  } | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please provide your contact phone number.';
    } else if (!/^(\+?61|0)[0-9\s]{8,12}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid Australian phone number (e.g. 0418 165 006).';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.suburb.trim()) {
      errs.suburb = 'Please provide your Melbourne suburb or property address.';
    }

    if (!formData.description.trim() || formData.description.trim().length < 10) {
      errs.description = 'Please describe the plumbing maintenance required (at least 10 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate network submission and persist locally
    setTimeout(() => {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const ref = `SHP-MELB-${randomSuffix}`;
      const receipt = {
        referenceNumber: ref,
        timestamp: new Date().toLocaleTimeString('en-AU', {
          hour: '2-digit',
          minute: '2-digit',
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
        data: { ...formData },
      };

      try {
        const existing = JSON.parse(localStorage.getItem('stronghold_service_requests') || '[]');
        existing.push(receipt);
        localStorage.setItem('stronghold_service_requests', JSON.stringify(existing));
      } catch (e) {
        console.error('Storage error', e);
      }

      setIsSubmitting(false);
      setSubmissionReceipt(receipt);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }, 600);
  };

  return (
    <div className="w-full bg-[#FFFDF7]">
      {/* Header Banner - Full Bleed Cinematic */}
      <section className="relative min-h-[48vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/hero_stronghold_plumbing_1794393975554.jpg"
            alt="Contact Stronghold Plumbing Co Melbourne"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-36 pb-16 w-full">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-[0.25em] text-[#18BDB5] uppercase font-['Inter']">
              Direct Trade Line
            </span>
            <h1 className="mt-2 text-4xl sm:text-6xl font-extrabold text-white font-['Barlow'] tracking-tight uppercase">
              CONTACT & SERVICE REQUEST
            </h1>
            <p className="mt-4 text-base sm:text-lg text-white/90 font-['Inter'] max-w-2xl leading-relaxed">
              Servicing residential clients, landlords, and property managers throughout Melbourne. Enquire below or call directly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Split Open Contact Grid (Zero Box / Zero Card Styling) */}
      <section className="py-24 bg-[#FFFDF7]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Direct Business Contact Information */}
            <div className="lg:col-span-5 space-y-10 gsap-fade-up">
              <div>
                <span className="text-xs font-bold tracking-[0.2em] text-[#2864DC] uppercase font-['Inter']">
                  Direct Inquiries
                </span>
                <h2 className="mt-2 text-3xl font-extrabold text-[#26343D] font-['Barlow'] tracking-tight">
                  Speak directly with Stronghold Plumbing Co.
                </h2>
                <p className="mt-3 text-sm text-[#26343D]/80 font-['Inter'] leading-relaxed">
                  Have an active maintenance enquiry, water hammer issue, or upcoming scheduled inspection? Reach out via phone or email for prompt, professional service.
                </p>
              </div>

              {/* Contact Channels - Minimal Clean Underline / Hairline Styling */}
              <div className="space-y-6 border-t border-[#26343D]/10 pt-6">
                <div>
                  <span className="text-[11px] font-bold text-[#18BDB5] uppercase tracking-wider block font-['Inter']">
                    Telephone (Direct)
                  </span>
                  <a
                    href={COMPANY_INFO.phoneHref}
                    className="mt-1 inline-flex items-center gap-3 text-xl sm:text-2xl font-extrabold text-[#26343D] hover:text-[#2864DC] transition-colors font-['Barlow']"
                  >
                    <Phone className="w-5 h-5 text-[#2864DC]" />
                    <span>{COMPANY_INFO.phoneFormatted}</span>
                  </a>
                  <p className="text-xs text-[#26343D]/60 mt-1 font-['Inter']">
                    Click to call directly from your device
                  </p>
                </div>

                <div className="border-t border-[#26343D]/10 pt-6">
                  <span className="text-[11px] font-bold text-[#18BDB5] uppercase tracking-wider block font-['Inter']">
                    Electronic Mail
                  </span>
                  <a
                    href={COMPANY_INFO.emailHref}
                    className="mt-1 inline-flex items-center gap-3 text-lg font-bold text-[#26343D] hover:text-[#2864DC] transition-colors font-['Inter']"
                  >
                    <Mail className="w-5 h-5 text-[#2864DC]" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                  <p className="text-xs text-[#26343D]/60 mt-1 font-['Inter']">
                    For job scopes, plans, and property management work orders
                  </p>
                </div>

                <div className="border-t border-[#26343D]/10 pt-6">
                  <span className="text-[11px] font-bold text-[#18BDB5] uppercase tracking-wider block font-['Inter']">
                    Service Region
                  </span>
                  <div className="mt-1 flex items-start gap-3 text-sm font-semibold text-[#26343D] font-['Inter']">
                    <MapPin className="w-5 h-5 text-[#2864DC] shrink-0 mt-0.5" />
                    <div>
                      <span>Melbourne, Victoria, Australia</span>
                      <p className="text-xs font-normal text-[#26343D]/70 mt-0.5">
                        Inner City, Eastern Suburbs, Bayside, South-East & Northern Suburbs
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#26343D]/10 pt-6">
                  <span className="text-[11px] font-bold text-[#18BDB5] uppercase tracking-wider block font-['Inter']">
                    Social Verification
                  </span>
                  <a
                    href={COMPANY_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[#2864DC] hover:text-[#18BDB5] transition-colors font-['Inter']"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Follow @stronghold_plumbingco on Instagram</span>
                  </a>
                </div>
              </div>

              {/* Quality & Respect Guarantee Notes */}
              <div className="border-t-2 border-[#18BDB5] pt-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#26343D] font-['Barlow'] uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#18BDB5]" />
                  <span>Melbourne Maintenance Standards</span>
                </div>
                <p className="text-xs text-[#26343D]/75 font-['Inter'] leading-relaxed">
                  No hidden callout surprises or high-pressure upselling. We quote honestly, turn up when promised, and treat your property with surgical cleanliness.
                </p>
              </div>
            </div>

            {/* Right Column: Clean Underline-Style Request Form (ZERO RECTANGULAR BOXES) */}
            <div className="lg:col-span-7 gsap-fade-up">
              {submissionReceipt ? (
                /* Submission Confirmation Receipt - Open Clean Layout */
                <div className="border-t-4 border-[#18BDB5] pt-8 space-y-6 animate-in fade-in duration-300">
                  <div className="flex items-center gap-3 text-[#13A99A]">
                    <CheckCircle2 className="w-8 h-8" />
                    <div>
                      <h3 className="text-2xl font-extrabold font-['Barlow'] text-[#26343D]">
                        Service Request Logged Successfully
                      </h3>
                      <p className="text-xs font-semibold text-[#18BDB5] font-['Inter']">
                        Ref #{submissionReceipt.referenceNumber} · {submissionReceipt.timestamp}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-[#26343D]/85 font-['Inter'] leading-relaxed">
                    Thank you, <strong className="text-[#26343D]">{submissionReceipt.data.name}</strong>. Your plumbing maintenance request has been recorded for <strong className="text-[#2864DC]">{submissionReceipt.data.suburb}</strong>. We will review your job description and get in touch via <strong className="text-[#26343D]">{submissionReceipt.data.preferredContact}</strong>.
                  </p>

                  <div className="border-y border-[#26343D]/10 py-4 space-y-2 text-xs font-['Inter'] text-[#26343D]/80">
                    <div>
                      <strong className="text-[#26343D]">Service Type:</strong> {submissionReceipt.data.serviceType}
                    </div>
                    <div>
                      <strong className="text-[#26343D]">Contact Phone:</strong> {submissionReceipt.data.phone}
                    </div>
                    <div>
                      <strong className="text-[#26343D]">Contact Email:</strong> {submissionReceipt.data.email}
                    </div>
                    <div>
                      <strong className="text-[#26343D]">Job Notes:</strong> {submissionReceipt.data.description}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button
                      onClick={() => setSubmissionReceipt(null)}
                      className="px-6 py-3 border border-[#2864DC] text-[#2864DC] hover:bg-[#2864DC] hover:text-white font-bold text-xs tracking-wider transition-colors font-['Inter']"
                    >
                      LOG ANOTHER REQUEST
                    </button>
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="px-6 py-3 bg-[#2864DC] text-white hover:bg-[#18BDB5] font-bold text-xs tracking-wider transition-colors font-['Inter'] flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      <span>URGENT? CALL 0418 165 006</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <span className="text-xs font-bold tracking-[0.2em] text-[#18BDB5] uppercase font-['Inter']">
                      Book An Inspection Or Maintenance Job
                    </span>
                    <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#26343D] font-['Barlow'] tracking-tight">
                      Service Request Form
                    </h2>
                    <p className="mt-1 text-xs text-[#26343D]/70 font-['Inter']">
                      Fill out the details below. Our team reviews every maintenance scope carefully.
                    </p>
                  </div>

                  {/* Clean Underline Inputs - NO BOXES */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#26343D] font-['Inter'] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Lachlan Smith"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        className="editorial-input"
                      />
                      {errors.name && <p className="text-[11px] text-red-600 mt-1 font-['Inter']">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#26343D] font-['Inter'] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 0418 165 006"
                        value={formData.phone}
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }}
                        className="editorial-input"
                      />
                      {errors.phone && <p className="text-[11px] text-red-600 mt-1 font-['Inter']">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#26343D] font-['Inter'] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. name@domain.com.au"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        className="editorial-input"
                      />
                      {errors.email && <p className="text-[11px] text-red-600 mt-1 font-['Inter']">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#26343D] font-['Inter'] mb-1">
                        Melbourne Suburb / Address *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Hawthorn VIC 3122"
                        value={formData.suburb}
                        onChange={(e) => {
                          setFormData({ ...formData, suburb: e.target.value });
                          if (errors.suburb) setErrors({ ...errors, suburb: '' });
                        }}
                        className="editorial-input"
                      />
                      {errors.suburb && <p className="text-[11px] text-red-600 mt-1 font-['Inter']">{errors.suburb}</p>}
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#26343D] font-['Inter'] mb-1">
                      Maintenance Category *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="editorial-input cursor-pointer bg-transparent"
                    >
                      {SERVICES_LIST.map((srv) => (
                        <option key={srv.id} value={srv.title} className="bg-[#FFFDF7] text-[#26343D]">
                          {srv.title}
                        </option>
                      ))}
                      <option value="General Inspection & Diagnostic" className="bg-[#FFFDF7] text-[#26343D]">
                        General Plumbing Inspection & Diagnostic
                      </option>
                    </select>
                  </div>

                  {/* Plumbing Description */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#26343D] font-['Inter'] mb-1">
                      Plumbing Issue or Maintenance Scope *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please describe symptoms: e.g. vibrating water hammer behind bathroom wall, dripping mixer tap, or scheduled periodic maintenance..."
                      value={formData.description}
                      onChange={(e) => {
                        setFormData({ ...formData, description: e.target.value });
                        if (errors.description) setErrors({ ...errors, description: '' });
                      }}
                      className="editorial-input resize-y"
                    />
                    {errors.description && (
                      <p className="text-[11px] text-red-600 mt-1 font-['Inter']">{errors.description}</p>
                    )}
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#26343D] font-['Inter'] mb-3">
                      Preferred Response Method
                    </label>
                    <div className="flex flex-wrap gap-6 text-xs font-['Inter'] text-[#26343D]">
                      {['Phone Call', 'Email', 'SMS Text'].map((method) => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer font-medium">
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method}
                            checked={formData.preferredContact === method}
                            onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                            className="accent-[#2864DC] w-4 h-4 cursor-pointer"
                          />
                          <span>{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 bg-[#2864DC] hover:bg-[#18BDB5] text-white text-xs font-bold tracking-wider font-['Inter'] transition-colors flex items-center gap-2 shadow-md disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>TRANSMITTING SERVICE REQUEST...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>TRANSMIT SERVICE REQUEST</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-[#26343D]/60 mt-3 font-['Inter']">
                      We respect your privacy. Inquiries are handled strictly by Stronghold Plumbing Co personnel.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
