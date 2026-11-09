import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0E0D]">
      <div className="absolute inset-0 z-0">
        <video
          src="/herovideo.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-12 left-0 right-0 z-10 px-6 text-center flex flex-col items-center">
        <p className="mb-5 text-[10px] uppercase tracking-[0.25em] font-bold text-[#C5A059] drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
          The Cabello Room
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight text-white max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Where Luxury Meets Artistry
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xs md:text-sm text-gray-200 font-light leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
          Discover a thoughtful approach to hair, where expert artistry and a
          personal touch make every visit your own.
        </p>
        <a
          href="#specialties"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#C5A059] px-6 py-3 text-xs tracking-widest text-black transition-all duration-300"
        >
          Explore Signature Services
        </a>
      </div>
    </section>
  );
}
