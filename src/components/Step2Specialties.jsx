import React, { useEffect, useMemo, useRef, useState } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

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
    <section
      id="specialties"
      ref={sectionRef}
      className={`specialties-section relative isolate overflow-hidden py-20 sm:py-24 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="specialties-atmosphere pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="specialties-content relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="specialties-heading mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.3em] text-[#927650] sm:text-[11px]">
            Thoughtfully tailored, beautifully finished
          </span>
          <h2 className="font-serif text-4xl font-light leading-tight tracking-[-0.025em] text-[#302a25] sm:text-5xl md:text-[3.6rem]">
            Browse Our <span className="font-normal italic text-[#806b55]">Specialties & Pricing</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-sm font-light leading-[1.8] text-[#716a61] sm:text-[15px]">
            Transparent pricing with zero hidden salon add-ons. Every service includes a thoughtful consultation and our signature finish.
          </p>
        </div>

        <div className="specialties-toolbar mb-9 flex flex-col gap-4 rounded-[1.4rem] p-3 sm:p-4 lg:flex-row lg:items-center lg:gap-5">
          <div className="specialties-categories flex min-w-0 flex-1 gap-2 overflow-x-auto pb-1 lg:pb-0" role="group" aria-label="Filter services by category">
            {categories.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category.id)}
                  className={`specialties-filter whitespace-nowrap rounded-full border px-4 py-2.5 text-[11px] font-medium transition-all duration-300 sm:px-4 lg:px-3 xl:px-4 ${
                    isActive
                      ? 'is-active'
                      : ''
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className="specialties-search w-full flex-shrink-0 lg:w-[290px] xl:w-[320px]">
            <label htmlFor="cabello-specialty-search" className="sr-only">Search services and treatments</label>
            <div className="flex min-w-0 items-center gap-3 rounded-full border px-4">
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
          <div
            key={`${activeCategory}-${searchQuery.trim().toLowerCase()}`}
            className="specialties-grid grid grid-cols-1 auto-rows-fr items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4"
            data-count={filteredServices.length}
          >
            {filteredServices.map((service) => (
              <article
                key={service.id}
                className="specialties-card group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.25rem]"
              >
                <div className="specialties-card-image relative h-56 w-full flex-shrink-0 overflow-hidden sm:h-60">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="specialties-image-shade absolute inset-0" />
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] shadow-sm ${service.tagStyle}`}>
                    {service.tag}
                  </span>
                  <span className="specialties-duration absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs">
                    <Clock className="h-3.5 w-3.5 text-[#f3e7d4]" />
                    {service.duration}
                  </span>
                </div>

                <div className="specialties-card-body flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
                    <h3 className="min-w-0 flex-1 font-serif text-[1.65rem] font-medium leading-[1.08] text-[#332d27] sm:text-[1.8rem]">
                      {service.title}
                    </h3>
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
                    className="specialties-book-button mt-auto flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8f7757] sm:text-[11px]"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="specialties-empty mx-auto flex max-w-xl flex-col items-center rounded-2xl px-6 py-12 text-center">
            <Sparkles className="mb-4 h-7 w-7 text-[#947b59]" />
            <h3 className="font-serif text-2xl text-[#332d27]">No matching services</h3>
            <p className="mt-2 text-sm text-[#716a61]">Try another search or browse all specialties.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="specialties-empty-button mt-5 rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all"
            >
              Show All Services
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
