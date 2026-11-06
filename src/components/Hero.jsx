import React from 'react';
import { Calendar } from 'lucide-react';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0E0D]">
      
      {/* Crisp Editorial Background Photography with Dark Luxury Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=2400&q=85" 
          alt="The Cabello Room Luxury Salon Atmosphere"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-105 scale-105"
        />
        {/* Dark Luxury Gradient Overlays for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0D] via-[#0F0E0D]/50 to-[#0B0A09]/80"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0F0E0D]/40 to-[#0B0A09]/90"></div>
      </div>

      {/* Spacious, Breathable, High-End Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20 pb-12 flex flex-col items-center justify-center">
        
        {/* Main Heading: Refined, Sophisticated Serif Typography */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-normal leading-[1.08] tracking-tight text-[#FDFBF7] max-w-5xl mx-auto mb-12 select-none">
          Start Your Hair Journey <span className="italic font-light gold-gradient-text block sm:inline">With The Cabello Room</span>
        </h1>

        {/* Primary CTA: Single Clean Premium Gold Button */}
        <div>
          <button 
            onClick={() => onOpenBooking()}
            className="btn-gold px-10 sm:px-12 py-4 sm:py-4.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-2xl shadow-[#C5A059]/30 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Calendar className="w-4 h-4 text-[#0F0E0D]" />
            <span>Book Your Appointment</span>
          </button>
        </div>

      </div>

      {/* Subtle Bottom Ambient Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0F0E0D] to-transparent pointer-events-none"></div>

    </section>
  );
}
