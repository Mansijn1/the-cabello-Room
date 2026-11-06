import React, { useEffect, useState } from 'react';
import {
  Calendar,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Maximize2,
  Navigation,
  Phone,
  X,
} from 'lucide-react';

const openingHours = [
  ['Tuesday & Wednesday', '9:00 AM – 5:30 PM'],
  ['Thursday', '9:00 AM – 8:30 PM'],
  ['Friday', '9:00 AM – 6:00 PM'],
  ['Saturday', '8:30 AM – 4:00 PM'],
  ['Sunday & Monday', 'Closed'],
];

const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26532.559981880464!2d150.67285646197148!3d-33.75084968875578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12859b7dfb8f2d%3A0x5017d681632bb80!2sPenrith%20NSW%202750%2C%20Australia!5e0!3m2!1sen!2sus!4v1714000000000!5m2!1sen!2sus';

export default function LocationSection({ onOpenBooking }) {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [expandedPanel, setExpandedPanel] = useState(null);

  useEffect(() => {
    if (!expandedPanel) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setExpandedPanel(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedPanel]);

  const handleVipSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    setEmailSubmitted(true);
    setEmail('');
  };

  const openPanel = (panel) => setExpandedPanel(panel);

  const cardBase = 'relative rounded-3xl border shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-95';
  const expandButton = 'inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[#8b765f]/20 bg-white/70 text-[#80684c] transition-colors hover:border-[#C5A059]/60 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]';

  return (
    <section id="location" className="relative isolate overflow-hidden bg-[#FAF8F5] py-20 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[30rem] w-[30rem] rounded-full bg-[#d8b46c]/15 blur-[120px]" />
        <div className="absolute -right-36 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#d78f9c]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-10 text-center">
          <h2 className="font-serif text-4xl font-medium leading-tight text-[#1E1D1B] sm:text-5xl">
            Visit The Cabello Room
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          <article className={`${cardBase} border-[#E8D9C5] bg-[#FDF8F2] p-6 sm:p-8`}>
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#92734c]">Find us in Penrith</p>
                <h3 className="mt-2 font-serif text-2xl text-[#1E1D1B] sm:text-3xl">Address &amp; Contact</h3>
              </div>
              <button
                type="button"
                aria-label="Expand address and contact details"
                onClick={() => openPanel('contact')}
                className={expandButton}
              >
                <Maximize2 className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#dfcda8] bg-white/70 text-[#967442]">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#897865]">Salon Address</p>
                  <p className="mt-1 text-sm font-medium text-[#302821]">Penrith, Sydney NSW 2750, Australia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#dfcda8] bg-white/70 text-[#967442]">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#897865]">Call the salon</p>
                  <a href="tel:+61247310000" className="mt-1 inline-block text-sm font-medium text-[#302821] transition-colors hover:text-[#9b6c43]">
                    (02) 4731 0000
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#dfcda8] bg-white/70 text-[#967442]">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#897865]">Email</p>
                  <a href="mailto:hello@thecabelloroom.com" className="mt-1 inline-block text-sm font-medium text-[#302821] transition-colors hover:text-[#9b6c43]">
                    hello@thecabelloroom.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => onOpenBooking()}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C5A059] px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-[#a98440] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#967442]"
              >
                <Calendar className="h-4 w-4" />
                Book Your Visit
              </button>
              <a
                href="https://maps.google.com/?q=The+Cabello+Room+Penrith+NSW"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C5A059]/45 bg-white/70 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#765b31] transition-colors hover:bg-white"
              >
                <Navigation className="h-4 w-4" />
                Directions
              </a>
            </div>
          </article>

          <article className={`${cardBase} overflow-hidden border-[#D5E3DA] bg-[#F2F7F4] p-3`}>
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-[1.35rem] border border-[#C5A059]/30 bg-[#e8eee8] shadow-lg">
              <iframe
                src={mapUrl}
                title="Interactive map showing Penrith NSW"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <button
                type="button"
                aria-label="Expand interactive map"
                onClick={() => openPanel('map')}
                className={`${expandButton} absolute right-4 top-4 z-10 shadow-md`}
              >
                <Maximize2 className="h-4 w-4" />
              </button>
              <div className="pointer-events-none absolute bottom-4 left-4 rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-md">
                <p className="text-xs font-semibold text-[#302821]">The Cabello Room</p>
                <p className="mt-0.5 text-[11px] text-[#75685d]">Penrith, NSW 2750</p>
              </div>
            </div>
          </article>

          <article className={`${cardBase} border-[#D5E3DA] bg-[#F2F7F4] p-6 sm:p-8`}>
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#64806d]">Plan your visit</p>
                <h3 className="mt-2 font-serif text-2xl text-[#1E1D1B] sm:text-3xl">Operating Hours</h3>
              </div>
              <button
                type="button"
                aria-label="Expand operating hours"
                onClick={() => openPanel('hours')}
                className={expandButton}
              >
                <Maximize2 className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-0">
              {openingHours.map(([day, hours], index) => (
                <div
                  key={day}
                  className={`flex items-center justify-between gap-4 py-3 text-sm ${index < openingHours.length - 1 ? 'border-b border-[#748c7b]/15' : ''}`}
                >
                  <span className="text-[#51483f]">{day}</span>
                  <span className={`text-right font-medium ${hours === 'Closed' ? 'text-[#8b8077]' : 'text-[#302821]'}`}>
                    {hours}
                  </span>
                </div>
              ))}
            </div>
          </article>

          <article className={`${cardBase} border-[#F3DCDC] bg-[#FAF3F3] p-6 sm:p-8`}>
            <div className="mb-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9a6370]">The Cabello Circle</p>
              <h3 className="mt-2 font-serif text-2xl text-[#1E1D1B] sm:text-3xl">VIP Waitlist</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#75685d]">
                Get first access to appointment openings and Styling Nights.
              </p>
            </div>

            {emailSubmitted ? (
              <div role="status" className="flex items-center gap-3 rounded-2xl border border-[#d6e5d9] bg-white/75 p-4 text-sm text-[#405d4b]">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-[#5e8a6c]" />
                <span>Thanks for joining the VIP waitlist.</span>
              </div>
            ) : (
              <form onSubmit={handleVipSubmit} className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="vip-waitlist-email" className="sr-only">Email address</label>
                <input
                  id="vip-waitlist-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Your email address"
                  className="min-w-0 flex-1 rounded-full border border-[#d8c8c0] bg-white/80 px-5 py-3 text-sm text-[#302821] placeholder:text-[#9a8f86] focus:border-[#c77f8b] focus:outline-none focus:ring-2 focus:ring-[#d78f9c]/20"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full border border-[#d78f9c] bg-[#d78f9c] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:border-[#bd7180] hover:bg-[#bd7180] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a95e6e]"
                >
                  Join Waitlist
                </button>
              </form>
            )}
          </article>
        </div>
      </div>

      {expandedPanel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setExpandedPanel(null);
          }}
        >
          <div className="absolute inset-0 bg-[#211b17]/55 backdrop-blur-sm" />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="location-panel-title"
            className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-auto rounded-3xl border border-[#C5A059]/30 bg-[#FAF8F5] p-6 shadow-2xl animate-[fadeSlide_.25s_ease-out] sm:p-8"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <h3 id="location-panel-title" className="font-serif text-3xl text-[#1E1D1B]">
                {expandedPanel === 'contact' && 'Address & Contact'}
                {expandedPanel === 'hours' && 'Operating Hours'}
                {expandedPanel === 'map' && 'Find The Cabello Room'}
              </h3>
              <button
                type="button"
                aria-label="Close expanded details"
                onClick={() => setExpandedPanel(null)}
                className={expandButton}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {expandedPanel === 'contact' && (
              <div className="space-y-4 text-sm text-[#51483f]">
                <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#967442]" />Penrith, Sydney NSW 2750, Australia</p>
                <a href="tel:+61247310000" className="flex items-center gap-3 hover:text-[#9b6c43]"><Phone className="h-4 w-4 text-[#967442]" />(02) 4731 0000</a>
                <a href="mailto:hello@thecabelloroom.com" className="flex items-center gap-3 hover:text-[#9b6c43]"><Mail className="h-4 w-4 text-[#967442]" />hello@thecabelloroom.com</a>
              </div>
            )}
            {expandedPanel === 'hours' && (
              <div className="divide-y divide-[#c5a059]/15">
                {openingHours.map(([day, hours]) => (
                  <div key={day} className="flex justify-between gap-4 py-3 text-sm text-[#51483f]">
                    <span>{day}</span><span className="font-medium text-[#302821]">{hours}</span>
                  </div>
                ))}
              </div>
            )}
            {expandedPanel === 'map' && (
              <div className="h-[65vh] min-h-[320px] overflow-hidden rounded-2xl border border-[#C5A059]/30">
                <iframe
                  src={mapUrl}
                  title="Expanded interactive map showing Penrith NSW"
                  className="h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
