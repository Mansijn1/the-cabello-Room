import React, { useRef, useState } from 'react';
import { ArrowLeftRight, Clock, Star, UserRound } from 'lucide-react';

const transformations = {
  blonde: {
    title: 'Sunlit Lived-In Blonde',
    stylist: 'Celeste',
    duration: '3.5 Hours',
    technique: 'Soft, face-framing brightness with a seamless root melt for a natural, easy grow-out.',
    quote: '“It feels like the blonde I was born with—soft, bright, and so easy to wear.”',
    beforeImg: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1400&q=85',
    afterImg: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=85',
    imagePosition: 'center',
  },
  brunette: {
    title: 'Caramel Brunette Melt',
    stylist: 'Analise',
    duration: '2.5 Hours',
    technique: 'Hand-painted caramel ribbons melt into a rich brunette base for a glossy, dimensional finish.',
    quote: '“The colour looks rich and glossy, but still completely natural in the sunlight.”',
    beforeImg: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1400&q=85',
    afterImg: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1400&q=85',
    imagePosition: 'center',
  },
  extensions: {
    title: 'Seamless Tape Extensions',
    stylist: 'Caer',
    duration: '3 Hours',
    technique: 'Custom-matched tape extensions add soft length and fullness with a natural, blended finish.',
    quote: '“The blend is incredible. I have my length and confidence back, and it feels like my own hair.”',
    beforeImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85',
    afterImg: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=85',
    imagePosition: 'center',
  },
  correction: {
    title: 'Colour Correction Journey',
    stylist: 'Celeste',
    duration: '4.5 Hours',
    technique: 'A considered colour reset brings tone and shine back into balance while prioritising hair health.',
    quote: '“My hair looks beautifully even again—and it feels healthier than I expected.”',
    beforeImg: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=85',
    afterImg: 'https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=1400&q=85',
    imagePosition: 'center',
  },
};

const categories = [
  { id: 'blonde', label: 'Lived-In Blonde' },
  { id: 'brunette', label: 'Caramel Brunette' },
  { id: 'extensions', label: 'Tape Extensions' },
  { id: 'correction', label: 'Color Correction' },
];

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeTab, setActiveTab] = useState('blonde');
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const current = transformations[activeTab];

  const updatePosition = (clientX) => {
    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const percentage = ((clientX - bounds.left) / bounds.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, percentage)));
  };

  const handlePointerDown = (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    setIsDragging(true);
    updatePosition(event.clientX);
  };

  const handlePointerMove = (event) => {
    if (isDragging) updatePosition(event.clientX);
  };

  const handlePointerUp = () => setIsDragging(false);

  const handleSliderKeyDown = (event) => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      event.preventDefault();
      setSliderPos((position) => Math.max(0, position - 2));
    } else if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      event.preventDefault();
      setSliderPos((position) => Math.min(100, position + 2));
    } else if (event.key === 'Home') {
      event.preventDefault();
      setSliderPos(0);
    } else if (event.key === 'End') {
      event.preventDefault();
      setSliderPos(100);
    }
  };

  return (
    <section id="transformations" className="relative isolate overflow-hidden bg-[#FBF9F5] py-20 sm:py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-[#D8B46C]/15 blur-[120px]" />
        <div className="absolute -right-32 top-1/3 h-[26rem] w-[26rem] rounded-full bg-[#D98D9C]/10 blur-[120px]" />
        <div className="absolute bottom-[-18rem] left-1/3 h-[30rem] w-[36rem] rounded-full bg-[#E8D3A3]/20 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto mb-9 max-w-3xl text-center">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#98743d]">
            Real hair, real transformations
          </p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-[#28221e] sm:text-5xl md:text-6xl">
            Before &amp; After <span className="font-normal italic text-[#a46f42]">Hair Journeys</span>
          </h2>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((category) => {
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveTab(category.id)}
                className={`rounded-full border px-5 py-3 text-xs font-semibold tracking-wide transition-all duration-300 sm:text-sm ${
                  isActive
                    ? 'border-[#C5A059] bg-[#C5A059] text-white shadow-[0_8px_22px_rgba(153,112,45,0.22)]'
                    : 'border-[#4b4035]/15 bg-white/75 text-[#55493f] hover:border-[#C5A059]/60 hover:bg-white'
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <div key={activeTab} className="grid animate-[fadeSlide_.35s_ease-out] grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className={`relative h-[360px] w-full touch-pan-y select-none overflow-hidden rounded-3xl bg-[#e8dfd3] shadow-[0_22px_55px_rgba(53,39,26,0.18)] sm:h-[480px] ${isDragging ? 'cursor-ew-resize' : 'cursor-col-resize'}`}
            >
              <img
                src={current.afterImg}
                alt={`After: ${current.title}`}
                draggable="false"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: current.imagePosition }}
              />
              <img
                src={current.beforeImg}
                alt={`Before: ${current.title}`}
                draggable="false"
                className="absolute inset-0 h-full w-full object-cover"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)`, objectPosition: current.imagePosition }}
              />

              <span className="absolute bottom-4 left-4 z-10 rounded-full border border-white/60 bg-white/90 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#42372e] shadow-sm backdrop-blur">
                Before
              </span>
              <span className="absolute bottom-4 right-4 z-10 rounded-full border border-white/50 bg-[#211b17]/75 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white shadow-sm backdrop-blur">
                After
              </span>

              <div
                className="absolute bottom-0 top-0 z-20 w-0.5 bg-[#D8B46C] shadow-[0_0_14px_rgba(197,160,89,0.7)]"
                style={{ left: `${sliderPos}%` }}
              />
              <button
                type="button"
                role="slider"
                aria-label="Before and after image comparison"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(sliderPos)}
                onKeyDown={handleSliderKeyDown}
                className="absolute top-1/2 z-30 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#D8B46C] bg-white text-[#9a7138] shadow-[0_5px_20px_rgba(39,29,18,0.28)] transition-transform duration-200 hover:scale-110 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C5A059]"
                style={{ left: `${sliderPos}%` }}
              >
                <ArrowLeftRight className="h-5 w-5" />
              </button>
              <p className="pointer-events-none absolute left-1/2 top-4 z-10 -translate-x-1/2 rounded-full bg-[#211b17]/65 px-3.5 py-1.5 text-[10px] font-medium tracking-wide text-white backdrop-blur-sm">
                Drag to compare
              </p>
            </div>
          </div>

          <article className="flex flex-col justify-center rounded-3xl border border-[#e9e1d7] bg-white p-6 shadow-xl sm:p-8 lg:col-span-5 lg:p-10">
            <div className="mb-5 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f7f1e7] px-3.5 py-2 text-xs font-medium text-[#514437]">
                <Clock className="h-4 w-4 text-[#a8793e]" />
                {current.duration}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#f7f1e7] px-3.5 py-2 text-xs font-medium text-[#514437]">
                <UserRound className="h-4 w-4 text-[#a8793e]" />
                Stylist: {current.stylist}
              </span>
            </div>

            <h3 className="font-serif text-3xl font-medium leading-tight text-[#2d2621] sm:text-4xl">
              {current.title}
            </h3>
            <p className="mt-4 max-w-prose text-sm leading-7 text-[#685e55]">
              {current.technique}
            </p>

            <div className="mt-8 rounded-2xl bg-[#FBF9F5] p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-3">
                <span aria-label="5 out of 5 stars" className="tracking-[0.12em] text-[#C08D35]">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} aria-hidden="true" className="inline-block h-4 w-4 fill-current" />
                  ))}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#89745b]">Client highlight</span>
              </div>
              <blockquote className="font-serif text-lg italic leading-relaxed text-[#473c33]">
                {current.quote}
              </blockquote>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
