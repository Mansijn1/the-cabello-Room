import React from 'react';
import { Phone, Calendar } from 'lucide-react';

export default function FloatingQuickBar({ onOpenBooking }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0B0A09]/95 backdrop-blur-lg border-t border-[#C5A059]/25 p-3 flex md:hidden items-center gap-3">
      <a 
        href="tel:+61247310000" 
        className="flex-1 py-3 rounded-full border border-[#C5A059]/40 text-[#D8B46C] text-xs font-semibold uppercase tracking-wider text-center flex items-center justify-center gap-2"
      >
        <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
        <span>Call Salon</span>
      </a>
      <button 
        onClick={() => onOpenBooking()}
        className="flex-1 btn-gold py-3 rounded-full text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Now</span>
      </button>
    </div>
  );
}
