import React from 'react';
import { ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';

const goalPics = [
  {
    id: 1,
    title: 'Clean Biscuit Blonde Balayage',
    formula: 'Soft root shadow & gloss',
    likes: '1,240',
    comments: '48',
    tint: 'from-[#a47b3d]/35 via-transparent to-[#271d12]/65',
    img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=700&q=80',
    serviceId: 'lived-in-blonde',
  },
  {
    id: 2,
    title: 'Melted Caramel Brunette',
    formula: 'Warm amber gloss glaze',
    likes: '980',
    comments: '32',
    tint: 'from-[#a24e55]/35 via-transparent to-[#261417]/70',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=80',
    serviceId: 'custom-balayage',
  },
  {
    id: 3,
    title: 'Seamless 22" Tape Extensions',
    formula: 'Custom-blended Remy tapes',
    likes: '1,850',
    comments: '74',
    tint: 'from-[#76549a]/40 via-transparent to-[#1d1727]/70',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80',
    serviceId: 'luxury-extensions',
  },
  {
    id: 4,
    title: 'Sensory Waterfall Head Spa',
    formula: 'Botanical scalp reset ritual',
    likes: '2,410',
    comments: '112',
    tint: 'from-[#397d70]/35 via-transparent to-[#14221f]/70',
    img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=700&q=80',
    serviceId: 'japanese-head-spa',
  },
  {
    id: 5,
    title: 'Lived-In Dimensional Honey',
    formula: 'Face-frame brightness & toner',
    likes: '890',
    comments: '29',
    tint: 'from-[#bd8742]/35 via-transparent to-[#2c2114]/70',
    img: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=700&q=80',
    serviceId: 'lived-in-blonde',
  },
  {
    id: 6,
    title: 'Aura Keratin Liquid Glass Shine',
    formula: 'Organic smoothing finish',
    likes: '1,420',
    comments: '53',
    tint: 'from-[#546d9b]/40 via-transparent to-[#151b29]/70',
    img: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=700&q=80',
    serviceId: 'aura-keratin',
  },
];

export default function Step3InstaGoal({ onOpenBooking }) {
  const renderPost = (pic) => (
    <article
      key={pic.id}
      className={`group relative aspect-[4/5] w-[min(72vw,260px)] flex-shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${pic.tint} shadow-[0_12px_35px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:scale-105 focus-within:scale-105`}
    >
      <img
        src={pic.img}
        alt={pic.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${pic.tint} opacity-45 transition-opacity duration-300 group-hover:opacity-80`} />

      <div className="absolute inset-0 flex flex-col justify-between bg-[#100c13]/60 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
        <div className="flex items-center justify-between text-xs font-medium text-white">
          <span className="flex items-center gap-1.5">
            <Heart aria-hidden="true" className="h-4 w-4 fill-[#f4a7b9] text-[#f4a7b9]" />
            {pic.likes}
          </span>
          <span className="flex items-center gap-1.5">
            <MessageCircle aria-hidden="true" className="h-4 w-4 text-white" />
            {pic.comments}
          </span>
        </div>

        <div>
          <h3 className="font-serif text-xl leading-tight text-white">{pic.title}</h3>
          <p className="mt-1 text-xs text-white/75">{pic.formula}</p>
          <button
            type="button"
            onClick={() => onOpenBooking(pic.serviceId)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e7c77f] via-[#d7ad5c] to-[#c79542] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#20170d] shadow-[0_0_22px_rgba(197,160,89,0.3)] transition-all hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Book This Look <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );

  return (
    <section id="insta-goals" className="relative overflow-hidden bg-[#0F0E0D] py-24">
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-fuchsia-900/10 blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-amber-700/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-light leading-tight text-[#FDFBF7] sm:text-4xl md:text-5xl">
              Choose A Goal Pic <span className="italic font-normal gold-gradient-text">From Our Insta</span>
            </h2>
            <p className="mt-3 font-sans text-sm font-light text-zinc-400">
              Find a look you love and bring it to your next appointment.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 rounded-2xl border border-pink-400/30 bg-gradient-to-r from-fuchsia-950/40 via-purple-900/30 to-amber-900/20 p-4 shadow-[0_12px_40px_rgba(94,35,83,0.18)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between md:w-auto md:min-w-[460px]">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-fuchsia-600 p-[2px] shadow-[0_0_22px_rgba(225,91,142,0.25)]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#18121c] text-white">
                  <InstagramIcon className="h-5 w-5" />
                </div>
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold tracking-wide text-white">@thecabelloroom</p>
                <span className="mt-1 inline-flex rounded-full border border-pink-200/20 bg-pink-300/10 px-2.5 py-1 text-[10px] font-medium text-pink-100 shadow-[0_0_16px_rgba(236,72,153,0.2)]">
                  20k+ followers
                </span>
              </div>
            </div>
            <a
              href="https://instagram.com/thecabelloroom"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e8cc8d] via-[#d7ad5c] to-[#c79542] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.1em] text-[#20170d] shadow-[0_0_26px_rgba(197,160,89,0.34)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(224,178,91,0.52)]"
            >
              Follow on Instagram
              <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
          <div
            aria-label="Instagram inspiration posts"
            className="flex w-max animate-insta-marquee motion-reduce:animate-none hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
          >
            <div className="flex flex-shrink-0 gap-5 pr-5">
              {goalPics.map(renderPost)}
            </div>
            <div aria-hidden="true" inert className="flex flex-shrink-0 gap-5 pr-5">
              {goalPics.map((pic) => renderPost({ ...pic, id: `duplicate-${pic.id}` }))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
