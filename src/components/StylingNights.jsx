import React from 'react';
import { ArrowRight, Gift, Sparkles, Wine } from 'lucide-react';

const highlights = [
  {
    title: 'Prosecco & Grazing',
    detail: 'A little sparkle and something delicious.',
    icon: Wine,
    style: 'border-[#ead9c5] bg-[#FDF6EE] text-[#90643f]',
  },
  {
    title: 'Live Tool Coaching',
    detail: 'Learn curls and waves, hands-on.',
    icon: Sparkles,
    style: 'border-[#d4e4d9] bg-[#F1F7F2] text-[#557963]',
  },
  {
    title: 'VIP Gift Bag',
    detail: 'A take-home treat worth over $120.',
    icon: Gift,
    style: 'border-[#efd6db] bg-[#FBF1F3] text-[#995d6a]',
  },
];

export default function StylingNights({ onOpenBooking }) {
  return (
    <section id="events" className="relative isolate overflow-hidden bg-[#FAF8F5] py-20 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[#dfc18d]/20 blur-[120px]" />
        <div className="absolute -right-36 bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#e7b6bf]/15 blur-[130px]" />
        <div className="absolute left-1/3 top-1/3 h-[20rem] w-[28rem] rounded-full bg-[#dce9df]/30 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl font-medium leading-tight text-[#1E1D1B] sm:text-5xl">
              The Cabello Room
              <span className="block font-normal italic text-[#9b6c43]">Styling Nights</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#685e55] sm:text-base">
              An after-hours styling night to sip, learn, and leave with your best-ever waves.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {highlights.map(({ title, detail, icon: Icon, style }) => (
                <article
                  key={title}
                  className={`group rounded-2xl border p-4 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${style}`}
                >
                  <Icon aria-hidden="true" className="mb-4 h-5 w-5" strokeWidth={1.8} />
                  <h3 className="font-serif text-lg font-semibold text-[#302821]">{title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#75685d]">{detail}</p>
                </article>
              ))}
            </div>

            <button
              type="button"
              onClick={() => onOpenBooking('consultation', 'Celeste')}
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#b38a50] bg-[#C5A059] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-white shadow-[0_8px_22px_rgba(153,112,45,0.18)] transition-all duration-300 hover:border-[#9b733b] hover:bg-[#a98440] hover:shadow-[0_12px_28px_rgba(153,112,45,0.28)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b733b]"
            >
              <span>Ask About The Next Date</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          <div className="lg:col-span-5">
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/70 p-2 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=85"
                alt="Friends enjoying a styling session at The Cabello Room"
                loading="lazy"
                className="h-[360px] w-full rounded-[1.5rem] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] sm:h-[440px]"
              />
              <div className="pointer-events-none absolute inset-x-2 bottom-2 h-32 rounded-b-[1.5rem] bg-gradient-to-t from-[#1E1D1B]/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
