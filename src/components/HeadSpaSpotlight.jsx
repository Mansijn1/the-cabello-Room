import React from 'react';
import { Droplets, Sparkles, Wind, ArrowRight, ShieldCheck } from 'lucide-react';

export default function HeadSpaSpotlight({ onOpenBooking }) {
  return (
    <section id="headspa" className="py-24 bg-[#0F0E0D] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#C5A059]/30 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80" 
                alt="Japanese Head Spa Treatment" 
                className="w-full h-[460px] object-cover object-center filter brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A09] via-transparent to-transparent"></div>

              {/* Floating Insight Pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-panel border border-[#C5A059]/25 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#D8B46C]">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-serif text-lg text-white font-normal">Holistic Scalp & Follicle Renewal</div>
                  <div className="text-[11px] text-zinc-400">Warm therapeutic water ring + cedarwood essential oils</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D8B46C] block mb-2">
              Penrith's Signature Sanctuary
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FDFBF7] leading-tight mb-6">
              The Japanese Head Spa <span className="italic font-normal gold-gradient-text">Ritual</span>
            </h2>
            
            <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6">
              Healthy hair begins with a revitalized scalp. Our custom head spa suite combines Japanese waterfall therapy with high-magnification trichological scalp analysis, removing buildup that normal washing cannot reach.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-[#161513] border border-[#C5A059]/40 text-[#D8B46C] text-xs flex items-center justify-center font-serif font-bold flex-shrink-0 mt-0.5">1</span>
                <div>
                  <h4 className="text-sm font-semibold text-[#FDFBF7]">Digital Micro-Camera Analysis</h4>
                  <p className="text-xs text-zinc-400 font-light mt-0.5">We examine your follicular health and moisture balance before customizing organic scrubs.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-[#161513] border border-[#C5A059]/40 text-[#D8B46C] text-xs flex items-center justify-center font-serif font-bold flex-shrink-0 mt-0.5">2</span>
                <div>
                  <h4 className="text-sm font-semibold text-[#FDFBF7]">Warm Waterfall Halo Cascade</h4>
                  <p className="text-xs text-zinc-400 font-light mt-0.5">Warm rhythmic rainfall stimulates micro-circulation while botanical steam opens hair cuticles.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-full bg-[#161513] border border-[#C5A059]/40 text-[#D8B46C] text-xs flex items-center justify-center font-serif font-bold flex-shrink-0 mt-0.5">3</span>
                <div>
                  <h4 className="text-sm font-semibold text-[#FDFBF7]">Neck & Cervical Fascia Acupressure</h4>
                  <p className="text-xs text-zinc-400 font-light mt-0.5">25-minute extended tension-melting massage that relieves headaches, neck tightness, and stress.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => onOpenBooking('japanese-head-spa')}
              className="btn-gold px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] inline-flex items-center gap-2 shadow-xl"
            >
              <span>Reserve A Head Spa Ritual</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
