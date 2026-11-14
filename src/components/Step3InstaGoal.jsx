import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Heart, MessageCircle, Play } from 'lucide-react';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const intervalId = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % goalPics.length);
    }, 4500);

    return () => window.clearInterval(intervalId);
  }, [isPaused]);

  const showPost = (index) => {
    setActiveIndex((index + goalPics.length) % goalPics.length);
  };

  const renderPost = (pic, index) => {
    const distance = Math.min(
      (index - activeIndex + goalPics.length) % goalPics.length,
      (activeIndex - index + goalPics.length) % goalPics.length
    );
    const scale = index === activeIndex ? 1.04 : 1 - distance * 0.08;

    return (
    <article
      key={pic.id}
      aria-label={`${pic.title}, ${index + 1} of ${goalPics.length}`}
      className="group absolute left-1/2 top-1/2 aspect-[4/5] w-[min(66vw,230px)] overflow-hidden rounded-2xl border border-[#D4AF37]/60 bg-[#17130F] shadow-[0_0_25px_rgba(212,175,55,0.18)] transition-[transform,border-color,box-shadow] duration-700 ease-in-out hover:border-[#F3E5AB] hover:shadow-[0_0_32px_rgba(212,175,55,0.3)] [backface-visibility:hidden]"
      style={{
        transform: `translate(-50%, -50%) rotateY(${index * 60}deg) translateZ(var(--carousel-radius)) scale(${scale})`,
        zIndex: index === activeIndex ? 10 : 4 - distance,
        backfaceVisibility: 'hidden',
      }}
    >
      <img
        src={pic.img}
        alt={pic.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${pic.tint} opacity-45 transition-opacity duration-300 group-hover:opacity-80`} />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-full top-0 z-10 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-[#F3E5AB]/30 to-transparent transition-[left] duration-700 ease-out group-hover:left-[140%]"
      />
      <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/70 bg-[#0F0E0D]/75 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#F3E5AB] shadow-[0_0_15px_rgba(212,175,55,0.18)] backdrop-blur-sm">
        <Play aria-hidden="true" className="h-3 w-3 fill-current" />
        Reel
      </span>

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
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#e7c77f] via-[#d7ad5c] to-[#c79542] px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#20170d] shadow-[0_0_22px_rgba(197,160,89,0.3)] transition-all hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3E5AB]"
          >
            Book This Look <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
    );
  };

  return (
    <section
      id="insta-goals"
      className="relative isolate overflow-hidden bg-[url('/service-backgroundimage.avif')] bg-cover bg-center bg-fixed py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-[#0F0E0D]/80 backdrop-blur-sm" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(212,175,55,0.12),transparent_58%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-12 flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl font-light leading-tight text-[#FDFBF7] sm:text-4xl md:text-5xl">
              Choose A Goal Pic <span className="italic font-normal gold-gradient-text">From Our Insta</span>
            </h2>
            <p className="mt-3 font-sans text-sm font-light text-zinc-400">
              Find a look you love and bring it to your next appointment.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 rounded-2xl border border-[#D4AF37]/35 bg-[#0F0E0D]/70 p-4 shadow-[0_12px_40px_rgba(212,175,55,0.12)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between md:w-auto md:min-w-[460px]">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#F3E5AB] via-[#D4AF37] to-[#9b733b] p-[2px] shadow-[0_0_22px_rgba(212,175,55,0.25)]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#181512] text-[#F3E5AB]">
                  <InstagramIcon className="h-5 w-5" />
                </div>
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold tracking-wide text-white">@thecabelloroom</p>
                <span className="mt-1 inline-flex rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/10 px-2.5 py-1 text-[10px] font-medium text-[#F3E5AB] shadow-[0_0_16px_rgba(212,175,55,0.12)]">
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

        <div
          className="mx-auto max-w-5xl"
          onPointerEnter={() => setIsPaused(true)}
          onPointerLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
          }}
        >
          <div className="relative mx-auto h-[400px] w-full overflow-hidden [perspective:1200px] sm:h-[450px]">
            <div
              aria-label="Instagram inspiration carousel"
              aria-roledescription="carousel"
              className="absolute inset-0 [transform-style:preserve-3d] [--carousel-radius:165px] transition-transform duration-700 ease-in-out sm:[--carousel-radius:210px] lg:[--carousel-radius:270px]"
              style={{ transform: `rotateY(${-activeIndex * 60}deg)` }}
            >
              {goalPics.map(renderPost)}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-5">
            <button
              type="button"
              aria-label="Previous Instagram inspiration"
              onClick={() => showPost(activeIndex - 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#0F0E0D]/60 text-[#F3E5AB] shadow-[0_0_16px_rgba(212,175,55,0.12)] transition-colors hover:border-[#F3E5AB] hover:bg-[#D4AF37]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3E5AB]"
            >
              <ChevronLeft aria-hidden="true" className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2" role="group" aria-label="Choose an Instagram inspiration">
              {goalPics.map((pic, index) => (
                <button
                  key={pic.id}
                  type="button"
                  aria-label={`Show ${pic.title}`}
                  aria-pressed={activeIndex === index}
                  onClick={() => showPost(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3E5AB] ${
                    activeIndex === index
                      ? 'w-7 bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.45)]'
                      : 'w-2.5 bg-[#F3E5AB]/45 hover:bg-[#F3E5AB]/80'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next Instagram inspiration"
              onClick={() => showPost(activeIndex + 1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D4AF37]/50 bg-[#0F0E0D]/60 text-[#F3E5AB] shadow-[0_0_16px_rgba(212,175,55,0.12)] transition-colors hover:border-[#F3E5AB] hover:bg-[#D4AF37]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F3E5AB]"
            >
              <ChevronRight aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
