import React, { useMemo, useState } from 'react';
import { ArrowRight, Check, Clock, Search, Sparkles, X } from 'lucide-react';

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
    id: 'lived-in-blonde',
    title: 'Signature Lived-In Blonde',
    category: 'blondes',
    tag: 'Most Popular',
    tagStyle: 'bg-[#f4e4bc] text-[#76551e]',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=85',
    price: 'From $295',
    duration: '180 Mins',
    desc: 'Seamless, sun-drenched lightness with a soft root and effortless grow-out.',
    included: ['Dimensional micro-foils', 'Zonal root smudge & dual gloss', 'K18 molecular bond therapy', 'Signature blowout & wave finish'],
  },
  {
    id: 'bright-blondes',
    title: 'Bright Vanilla Blonde',
    category: 'blondes',
    tag: 'Maximum Lift',
    tagStyle: 'bg-[#f8e4d7] text-[#894d33]',
    image: 'https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=1000&q=85',
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
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1000&q=85',
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
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=85',
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
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=85',
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
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=85',
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
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=85',
    price: 'From $135',
    duration: '60 Mins',
    desc: 'Bespoke shaping designed for your face structure, hair density, and daily routine.',
    included: ['Detailed shape consultation', 'Invigorating scalp massage', 'Hot-towel infusion', 'Volumizing round-brush blowout'],
  },
];

export default function Step2Specialties({ onOpenBooking }) {
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
    <section id="specialties" className="relative isolate overflow-hidden bg-[#0F0E0D] py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-48 top-24 h-[32rem] w-[32rem] rounded-full bg-[#a76d37]/10 blur-[120px]" />
        <div className="absolute -right-40 top-[28rem] h-[30rem] w-[30rem] rounded-full bg-[#7c4660]/10 blur-[130px]" />
        <div className="absolute left-1/3 bottom-[-14rem] h-[28rem] w-[36rem] rounded-full bg-[#587867]/[0.08] blur-[130px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-light leading-tight text-[#FDFBF7] sm:text-4xl md:text-5xl">
            Browse Our <span className="font-normal italic text-[#FDFBF7]">Specialties & Pricing</span>
          </h2>
          <p className="mt-4 font-sans text-xs font-light leading-relaxed text-gray-300 sm:text-sm">
            Transparent pricing with zero hidden salon add-ons. Every service includes a thoughtful consultation and our signature finish.
          </p>
        </div>

        <div className="mb-10 flex flex-col items-center gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="flex w-full flex-1 flex-wrap justify-center gap-2 lg:justify-start">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full border px-4 py-2.5 text-xs font-medium transition-all duration-200 sm:px-5 ${
                    isActive
                      ? 'border-[#C5A059] bg-[#C5A059] text-[#17130d] shadow-[0_0_20px_rgba(197,160,89,0.28)]'
                      : 'border-[#C5A059]/25 bg-white/[0.04] text-zinc-200 backdrop-blur-md hover:border-[#C5A059]/70 hover:bg-[#C5A059]/10 hover:text-white'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className="w-full max-w-md flex-shrink-0 lg:w-[340px]">
            <label htmlFor="cabello-specialty-search" className="sr-only">Search services and treatments</label>
            <div className="flex min-w-0 items-center gap-3 rounded-full border border-[#C5A059]/35 bg-[#161513]/90 px-4 py-1 shadow-[0_0_30px_rgba(197,160,89,0.07)] transition-all hover:border-[#C5A059]/55 focus-within:border-[#D8B46C] focus-within:ring-2 focus-within:ring-[#C5A059]/20 focus-within:shadow-[0_0_24px_rgba(197,160,89,0.12)]">
              <Search aria-hidden="true" className="h-4 w-4 flex-shrink-0 text-[#C5A059]" />
              <input
                id="cabello-specialty-search"
                type="text"
                autoComplete="off"
                placeholder="Search service or treatment..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="min-w-0 flex-1 border-0 bg-transparent py-3.5 text-sm text-[#F9F6F0] outline-none placeholder:text-zinc-500 focus:ring-0"
              />
              {searchQuery && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearchQuery('')}
                  className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 auto-rows-fr items-stretch md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                className="group flex h-full min-w-0 flex-col justify-between overflow-hidden rounded-2xl border border-[#C5A059]/30 bg-[#181614] shadow-[0_16px_40px_rgba(0,0,0,0.22)] transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[0.98] hover:border-[#C5A059]/55 hover:shadow-[0_20px_40px_rgba(197,160,89,0.2)]"
              >
                <div className="relative h-52 w-full flex-shrink-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161513]/75 via-transparent to-black/10" />
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] shadow-sm ${service.tagStyle}`}>
                    {service.tag}
                  </span>
                  <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#161513]/80 px-3 py-1.5 text-xs text-white backdrop-blur-md">
                    <Clock className="h-3.5 w-3.5 text-[#D8B46C]" />
                    {service.duration}
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                    <h3 className="min-w-0 flex-1 font-serif text-2xl font-medium leading-tight text-[#FDFBF7] sm:text-[1.7rem]">
                      {service.title}
                    </h3>
                    <span className="whitespace-nowrap font-serif text-xl font-semibold text-[#D8B46C]">
                      {service.price}
                    </span>
                  </div>
                  <p className="mb-5 text-sm font-light leading-relaxed text-gray-300">
                    {service.desc}
                  </p>

                  <ul className="mb-6 space-y-2.5">
                    {service.included.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs leading-relaxed text-zinc-300">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C5A059]" strokeWidth={2.5} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    onClick={() => onOpenBooking(service.id)}
                    className="mt-auto flex w-full items-center justify-center gap-2 rounded-full border border-[#C5A059]/55 px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#D8B46C] transition-all duration-200 hover:border-[#C5A059] hover:bg-[#C5A059] hover:text-[#17130d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C5A059]"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-[#C5A059]/20 bg-[#161513] px-6 py-12 text-center">
            <Sparkles className="mb-4 h-7 w-7 text-[#C5A059]" />
            <h3 className="font-serif text-2xl text-[#FDFBF7]">No matching services</h3>
            <p className="mt-2 text-sm text-gray-300">Try another search or browse all specialties.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-5 rounded-full border border-[#C5A059]/50 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#D8B46C] transition-colors hover:bg-[#C5A059] hover:text-[#17130d]"
            >
              Show All Services
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
