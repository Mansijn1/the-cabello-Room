import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import StylingNights from './StylingNights';

const stylists = [
  {
    name: 'Celeste',
    role: 'Salon Owner & Senior Stylist',
    specialties: ['Lived-In Blondes', 'Bespoke Transformations', 'Salon Visionary'],
    bio: 'With over a decade of mastery, Celeste founded The Cabello Room to champion hair health and customized blonding.',
    image: '/Besties-celeste.avif'
  },
  {
    name: 'Analise',
    role: 'Salon Operations Manager & Senior Stylist',
    specialties: ['Balayage', 'Dimensional Brunettes', 'Guest Experience'],
    bio: 'Ensuring every client journey is seamless, Analise creates rich caramel tones and buttery melted blends.',
    image: '/besties-analise.avif'
  },
  {
    name: 'Caer',
    role: 'Senior Stylist & Extensionist',
    specialties: ['Russian Remy Tapes', 'Precision Layering', 'Color Corrections'],
    bio: 'The extension perfectionist. Specializes in undetectable placement, seamless razor blending, and density restoration.',
    image: '/besties-caer.avif'
  },
  {
    name: 'Georgia',
    role: 'Emerging Stylist',
    specialties: ['Japanese Head Spa', 'Aura Keratin', 'Texture Styling'],
    bio: 'Expert in restorative scalp therapies, calming waterfall rituals, and glass-hair keratin smoothing.',
    image: '/besties-georgia.avif'
  },
  {
    name: 'Summer',
    role: 'Emerging Stylist',
    specialties: ['Bright Foiling', 'Gloss Glazing', 'Signature Waves'],
    bio: 'Passionate about modern trending blondes, sunlit baby-lights, and bouncy voluminous blowouts.',
    image: '/besties-summer.avif'
  }
];

export default function Team({ onOpenBooking }) {
  return (
    <main id="team" className="text-[#302821]">
      <section className="relative isolate overflow-hidden bg-white px-6 pb-20 pt-32 sm:pb-24 sm:pt-36">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-40 top-12 h-[30rem] w-[30rem] rounded-full bg-[#d8b46c]/10 blur-[120px]" />
          <div className="absolute -right-36 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#d78f9c]/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <header className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8B704D]">
              The artists behind your look
            </p>
            <h1 className="font-serif text-4xl font-medium leading-tight text-[#302821] sm:text-5xl md:text-6xl">
              Meet Your Hair&apos;s <span className="font-normal italic text-[#9b6c43]">New Bestie</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm font-light leading-7 text-[#75685d] sm:text-base">
              Led by Salon Owner Celeste, our artists continuously train in the world&apos;s most progressive blonding, extension, and scalp techniques.
            </p>
          </header>

          <section aria-label="Meet the stylists" className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {stylists.map((stylist) => (
              <article
                key={stylist.name}
                className="group flex flex-col rounded-3xl border border-amber-200/70 bg-[#FAF8F5] p-6 shadow-[0_14px_38px_rgba(74,54,31,0.09)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(74,54,31,0.14)] sm:p-7"
              >
                <div className="mx-auto mb-6 h-60 w-60 max-w-full rounded-full border border-amber-200/60 bg-white/70 p-2 shadow-[0_8px_24px_rgba(74,54,31,0.08)] sm:h-64 sm:w-64">
                  <img
                    src={stylist.image}
                    alt={`${stylist.name}, ${stylist.role}`}
                    loading="lazy"
                    className="h-full w-full rounded-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col text-center">
                  <h2 className="font-serif text-2xl font-medium text-[#302821] sm:text-3xl">
                    {stylist.name}
                  </h2>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#936b48]">
                    {stylist.role}
                  </p>
                  <p className="mt-4 text-sm font-light leading-relaxed text-[#75685d]">
                    {stylist.bio}
                  </p>

                  <ul className="mt-5 flex flex-wrap justify-center gap-2">
                    {stylist.specialties.map((specialty) => (
                      <li
                        key={specialty}
                        className="rounded-full border border-[#dfcda8] bg-[#f7f0e2] px-2.5 py-1 text-[10px] text-[#765b31]"
                      >
                        {specialty}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenBooking(null, stylist.name)}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#C5A059]/45 bg-white/80 py-3 text-xs font-semibold uppercase tracking-wider text-[#765b31] transition-all duration-300 hover:border-[#C5A059] hover:bg-[#C5A059] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8f7757]"
                >
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Book With {stylist.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </button>
              </article>
            ))}
          </section>
        </div>
      </section>

      <StylingNights onOpenBooking={onOpenBooking} />
    </main>
  );
}
