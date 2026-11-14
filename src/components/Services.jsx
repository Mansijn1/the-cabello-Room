import React, { useMemo, useState } from 'react';
import { ArrowRight, Check, Clock, Search, Sparkles, X } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';

const categories = [
  { id: 'all', label: 'All Specialties' },
  { id: 'blondes', label: 'Bright Blondes' },
  { id: 'livedin', label: 'Lived-In Colour' },
  { id: 'extensions', label: 'Tape Extensions' },
  { id: 'spa', label: 'Japanese Head Spa' },
  { id: 'cuts', label: 'Precision Cuts' },
];

const services = [
  {
    id: 'bright-blondes',
    title: 'Bright Vanilla Blonde',
    category: 'blondes',
    tag: 'Maximum Lift',
    tagStyle: 'bg-[#f8e4d7] text-[#894d33]',
    image: '/service-brightvanilla.avif',
    price: 'From $320',
    duration: '195 Mins',
    desc: 'High-impact blonde lifting for creamy vanilla, pearl, or beige tones.',
    included: ['Full-head precision foiling', 'Customized pH-balancing toner', 'Intense hydration hair bath', 'Signature bouncy wave finish'],
  },
  {
    id: 'custom-balayage',
    title: 'Dimensional Lived-In Colour',
    category: 'livedin',
    tag: 'Custom Contour',
    tagStyle: 'bg-[#f4dce4] text-[#85455a]',
    image: '/service-coustomcontor.avif',
    price: 'From $265',
    duration: '165 Mins',
    desc: 'Freehand balayage and lowlights, tailored to your features and lifestyle.',
    included: ['Face-framing brightness ribbons', 'Acidic gloss glazing', 'Hot-towel aromatic treatment', 'Luxury styling & heat shield'],
  },
  {
    id: 'luxury-extensions',
    title: 'Seamless Russian Tape Extensions',
    category: 'extensions',
    tag: '100% Remy Hair',
    tagStyle: 'bg-[#e3def3] text-[#55447d]',
    image: '/service-tapeextension.avif',
    price: 'From $650',
    duration: '180 Mins',
    desc: 'Feather-light, ultra-flat Russian Remy tapes, custom matched for natural movement.',
    included: ['Custom colour-blend match', 'Gentle tape installation', 'Precision razor blending cut', 'Complimentary 2-week checkup'],
  },
  {
    id: 'japanese-head-spa',
    title: 'Japanese Scalp Spa & Water Halo',
    category: 'spa',
    tag: 'Viral Experience',
    tagStyle: 'bg-[#dcefe4] text-[#326648]',
    image: '/services-japananieshairspa.avif',
    price: 'From $195',
    duration: '90 Mins',
    desc: 'A restorative waterfall halo ritual with scalp care and tension-release massage.',
    included: ['Scalp camera consultation', 'Organic botanical scrub', 'Warm rainfall halo cascade', '25-minute neck & shoulder massage'],
  },
  {
    id: 'aura-keratin',
    title: 'Aura Organic Keratin Smoothing',
    category: 'spa',
    tag: 'Frizz Free',
    tagStyle: 'bg-[#d9eeee] text-[#316c6b]',
    image: '/services-kertainsmothing.avif',
    price: 'From $350',
    duration: '180 Mins',
    desc: 'Formaldehyde-free vegan smoothing for softer, shinier, more manageable hair.',
    included: ['Hyaluronic organic complex', 'Thermal fibre alignment', 'Same-day wash welcome', 'Glass-like mirror finish'],
  },
  {
    id: 'precision-cut',
    title: 'The Cabello Precision Cut',
    category: 'cuts',
    tag: 'Architectural',
    tagStyle: 'bg-[#e5e9f2] text-[#4c5a77]',
    image: '/service-presioncut.avif',
    price: 'From $135',
    duration: '60 Mins',
    desc: 'Bespoke shaping designed for your face structure, hair density, and daily routine.',
    included: ['Detailed shape consultation', 'Invigorating scalp massage', 'Hot-towel infusion', 'Volumizing round-brush blowout'],
  },
];

export default function Services({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return services.filter((service) => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const searchableContent = [
        service.title,
        service.desc,
        service.tag,
        service.category,
        ...service.included,
      ].join(' ').toLowerCase();
      return matchesCategory && (!query || searchableContent.includes(query));
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="relative isolate overflow-hidden bg-[url('/service-backgroundimage.avif')] bg-cover bg-center bg-fixed px-6 pb-20 pt-32 text-[#302821] sm:pb-24 sm:pt-36">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-[#E8D7C8]/45 backdrop-blur-[2px]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(ellipse_at_50%_0%,rgba(197,160,89,0.12),transparent_65%)]"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#927650] sm:text-[11px]">
            Thoughtfully tailored, beautifully finished
          </p>
          <h1 className="font-serif text-4xl font-light leading-tight tracking-[-0.025em] text-[#302a25] sm:text-5xl md:text-[3.6rem]">
            Browse Our <span className="font-normal italic text-[#806b55]">Specialties & Pricing</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-[1.8] text-[#716a61] sm:text-[15px]">
            Transparent pricing with zero hidden salon add-ons. Every service includes a thoughtful consultation and our signature finish.
          </p>
        </header>

        <div className="mb-9 flex flex-col gap-4 rounded-[1.4rem] border border-[#d8cbb8]/70 bg-white/70 p-3 shadow-sm sm:p-4 lg:flex-row lg:items-center lg:gap-5">
          <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1 lg:pb-0" role="group" aria-label="Filter services by category">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category.id)}
                  className={`whitespace-nowrap rounded-full border px-4 py-2.5 text-[11px] font-medium transition-all duration-300 ${
                    isActive
                      ? 'border-[#75644f] bg-[#75644f] text-[#fffaf1] shadow-[0_5px_13px_rgba(91,72,49,0.16)]'
                      : 'border-[#c9baa5]/50 bg-[#fffdf9]/80 text-[#655b4f] hover:border-[#896f4d]/50 hover:bg-white hover:text-[#372f27]'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className="w-full flex-shrink-0 rounded-full border border-[#c9baa5]/50 bg-[#fffdf9]/90 shadow-sm transition focus-within:border-[#9c8058] focus-within:ring-2 focus-within:ring-[#9c8058]/15 lg:w-[290px] xl:w-[320px]">
            <label htmlFor="cabello-specialty-search" className="sr-only">Search services and treatments</label>
            <div className="flex min-w-0 items-center gap-3 px-4">
              <Search aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-[#947b59]" />
              <input
                id="cabello-specialty-search"
                type="text"
                autoComplete="off"
                placeholder="Search service or treatment..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="min-w-0 flex-1 border-0 bg-transparent py-3.5 text-sm text-[#37312b] outline-none placeholder:text-[#9b9388] focus:ring-0"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearchQuery('')}
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-[#82796f] transition-colors hover:bg-[#e9e0d4] hover:text-[#352f29]"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-amber-200/70 bg-[#FAF8F5] shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="relative h-56 w-full flex-shrink-0 overflow-hidden bg-[#ebe5db] sm:h-60">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] shadow-sm ${service.tagStyle}`}>
                    {service.tag}
                  </span>
                  <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-[#302821]/70 px-3 py-1.5 text-xs text-white shadow-sm backdrop-blur">
                    <Clock className="h-3.5 w-3.5 text-[#f3e7d4]" />
                    {service.duration}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
                    <h2 className="min-w-0 flex-1 font-serif text-[1.65rem] font-medium leading-[1.08] text-[#332d27] sm:text-[1.8rem]">
                      {service.title}
                    </h2>
                    <span className="whitespace-nowrap pt-1 font-serif text-lg font-semibold text-[#806b4e] sm:text-xl">
                      {service.price}
                    </span>
                  </div>
                  <p className="mb-5 min-h-[3.25rem] text-[13px] font-light leading-[1.7] text-[#756d63] sm:text-sm">
                    {service.desc}
                  </p>

                  <ul className="mb-6 space-y-2.5 border-t border-[#78664f]/15 pt-5">
                    {service.included.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs leading-relaxed text-[#625b52]">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#9a805c]" strokeWidth={2} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(service.id)}
                    className="mt-auto flex w-full items-center justify-center gap-2 rounded-full border border-[#806b4e]/40 bg-white/70 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#69563e] transition-all hover:border-[#75644f] hover:bg-[#75644f] hover:text-[#fffaf1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8f7757] sm:text-[11px]"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-[#d8cbb8]/70 bg-white/75 px-6 py-12 text-center shadow-sm">
            <Sparkles className="mb-4 h-7 w-7 text-[#947b59]" />
            <h2 className="font-serif text-2xl text-[#332d27]">No matching services</h2>
            <p className="mt-2 text-sm text-[#716a61]">Try another search or browse all specialties.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-5 rounded-full border border-[#806b4e]/40 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#69563e] transition-all hover:bg-[#75644f] hover:text-[#fffaf1]"
            >
              Show All Services
            </button>
          </div>
        )}

        <BeforeAfterSlider />

        <aside className="mt-14 rounded-2xl border border-[#D4BF99]/30 bg-gradient-to-br from-[#D8C6A7] via-[#CBBB9E] to-[#B7A487] p-7 text-[#282116] shadow-xl sm:mt-20 sm:p-10">
          <div className="mx-auto max-w-5xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#786342]">A little more to know</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">PLEASE NOTE</h2>
            <p className="mt-4 max-w-4xl text-sm leading-7 text-[#403628] sm:text-base">
              Our service guide is designed to help you understand the services we offer and what may be best suited to your hair goals. For an indication of pricing and appointment availability, please visit our online booking system. Some services may require a complimentary consultation prior to booking.
            </p>

            <div className="mt-7 flex flex-col gap-4 border-t border-[#66563E]/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="w-fit rounded-full border border-[#6C5735]/30 bg-[#F7F1E6]/45 px-4 py-2 text-xs font-semibold leading-5 text-[#59472D]">
                20% off Junior Stylist Discount is applied in salon of selected services
              </p>
              <p className="font-serif text-sm font-bold tracking-[0.12em] text-[#40311D]">
                AFTERPAY IS AVAILABLE FOR ALL SERVICES
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
