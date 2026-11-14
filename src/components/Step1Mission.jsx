import React, { useEffect, useState } from 'react';
import { 
  Sparkles, 
  Droplets, 
  Coffee, 
  Wine, 
  X, 
  Clock, 
  ArrowRight, 
  Check, 
  Maximize2 
} from 'lucide-react';

export default function Step1Mission({ onOpenBooking }) {
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    if (!selectedExperience) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedExperience(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedExperience]);

  const experiences = [
    {
      id: "balayage-studio",
      title: "Balayage & Foiling Studio",
      shortDesc: "Micro-feathered foils creating seamless sunlit dimension and zero harsh lines.",
      fullDesc: "Our dedicated blonding and balayage stations are equipped with custom daylight-balanced lighting. Every foil is feathered with micro-precision to ensure flawless diffusion, natural lived-in regrowth, and long-lasting radiance.",
      img: "/misson-studio.avif",
      badge: "Sunlit Artistry",
      badgeColor: "bg-[#f5e5c4] text-[#76551e] border-[#d6b56f]",
      duration: "180 - 210 Mins",
      price: "From $295",
      icon: Sparkles,
      iconColor: "text-amber-400",
      perks: [
        "Daylight-balanced color evaluation",
        "Micro-feathered foil placement",
        "Bespoke root melt & dual glazes",
        "Includes K18 bond protection & styling"
      ]
    },
    {
      id: "head-spa-suite",
      title: "Japanese Head Spa Suite",
      shortDesc: "Penrith's signature warm waterfall halo cascade and botanical scalp scrubs.",
      fullDesc: "An immersive, dimly lit sensory retreat featuring an authentic circular water halo fountain. Clarifies stubborn scalp sebum, improves micro-circulation, and melts tension through extended cervical acupressure massage.",
      img: "/services-japananieshairspa.avif",
      badge: "Sensory Halo",
      badgeColor: "bg-[#dcefe1] text-[#286344] border-[#8cb99b]",
      duration: "90 Mins",
      price: "From $195",
      icon: Droplets,
      iconColor: "text-emerald-400",
      perks: [
        "200x microscopic trichology camera check",
        "Organic rosemary scalp clarifying scrub",
        "Continuous warm waterfall rainfall cascade",
        "25-minute neck, shoulder & fascia massage"
      ]
    },
    {
      id: "hospitality-lounge",
      title: "VIP Hospitality Suite",
      shortDesc: "Complimentary artisan barista coffee, chilled prosecco, and gourmet grazing.",
      fullDesc: "Your salon visit is a relaxing escape. Sink into comfortable seating while enjoying freshly pulled espresso, organic herbal infusions, artisan teas, or chilled sparkling wine alongside sweet grazing treats.",
      img: "/mission-viphospiliaty.avif",
      badge: "Curated Bar",
      badgeColor: "bg-[#f5dfe6] text-[#88445b] border-[#d59bad]",
      duration: "All Sessions",
      price: "Complimentary",
      icon: Coffee,
      iconColor: "text-rose-400",
      perks: [
        "Freshly brewed barista espresso & lattes",
        "Chilled sparkling prosecco flutes",
        "Organic herbal teas & sparkling mineral water",
        "Gourmet snacks & charging stations"
      ]
    },
    {
      id: "styling-masterclasses",
      title: "Styling Nights & Masterclasses",
      shortDesc: "After-hours hands-on curling coaching, grazing boards, and VIP gift bags.",
      fullDesc: "Join salon owner Celeste and our senior artists for fun after-hours masterclasses. Learn how to curl, wave, and volume-style your own hair with professional heat tools while enjoying sparkling wine.",
      img: "/misson -masterclass.avif",
      badge: "VIP Masterclasses",
      badgeColor: "bg-[#f8edc8] text-[#785d1b] border-[#cfb45e]",
      duration: "2 Hours (Evenings)",
      price: "$95 (Includes $120 Gift Bag)",
      icon: Wine,
      iconColor: "text-yellow-400",
      perks: [
        "1-on-1 hands-on hot tool curling coaching",
        "Free-flowing chilled sparkling prosecco",
        "Artisan cheeses & gourmet grazing board",
        "Luxury take-home VIP gift bag ($120+ value)"
      ]
    }
  ];

  return (
    <section id="mission" className="py-24 bg-[#f7f0e6] relative overflow-hidden">
      
      {/* Warm Ambient Backdrop Blooms */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-amber-400/20 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-rose-400/20 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Clean, Vibrant Section Header (No Step badge, No divider lines) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#39271f] leading-tight">
            Be A Part Of <span className="italic font-light text-[#a75f42]">Our Mission</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#705c50] mt-4 font-light leading-relaxed">
            Every corner of The Cabello Room is thoughtfully curated. Explore our 4 signature salon suites below—click any card to preview the full sensory experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          {experiences.map((item) => {
            const IconComponent = item.icon;

            return (
              <div 
                key={item.id}
                onClick={() => setSelectedExperience(item)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedExperience(item);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Preview ${item.title}`}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-amber-200/70 bg-[#FAF6F0] p-5 shadow-[0_12px_30px_rgba(74,54,31,0.10)] transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8f5b38]"
              >
                <div>
                  <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl bg-[#eee8df] shadow-sm">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                    
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#291d18]/55 via-transparent to-transparent"></div>

                    {/* Distinct Colorful Pill Tag */}
                    <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider border backdrop-blur-md ${item.badgeColor}`}>
                      {item.badge}
                    </span>

                    {/* Click preview indicator */}
                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex items-center gap-2 mb-2">
                    <IconComponent className={`w-4 h-4 ${item.iconColor}`} />
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#806d60]">
                      {item.duration}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-[#39271f] group-hover:text-[#8c4d34] transition-colors mb-2 leading-tight">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs text-[#665247] leading-relaxed font-light mb-4">
                    {item.shortDesc}
                  </p>
                </div>

                {/* Bottom Card Action (Clean, No divider line) */}
                <div className="pt-2 flex items-center justify-between text-xs">
                  <span className="font-serif text-sm font-semibold text-[#563b2c]">
                    {item.price}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#945b39] group-hover:text-[#4f3023] transition-colors uppercase tracking-wider">
                    <span>Explore Suite</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean VIP Bottom Banner */}
        <div className="rounded-3xl p-6 sm:p-8 bg-[#fffaf2] border border-[#e5d6c3] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#f4e3c9] border border-[#dec59f] flex items-center justify-center text-[#895a32] text-xl flex-shrink-0">
              <Coffee className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-xl sm:text-2xl text-[#39271f] font-medium">Ready To Visit The Salon?</h4>
              <p className="font-sans text-xs sm:text-sm text-[#705c50] font-light mt-0.5">Complimentary barista coffee, K18 bond protection, and tailored 1-on-1 consultations with Celeste and our team.</p>
            </div>
          </div>
          <button 
            onClick={() => onOpenBooking('consultation')}
            className="btn-gold px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap shadow-xl flex items-center gap-2 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* ========================================================
          INTERACTIVE EXPERIENCE LIGHTBOX / MODAL PREVIEW
          ======================================================== */}
      {selectedExperience && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
          {/* Backdrop */}
          <div 
            onClick={() => setSelectedExperience(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
          />

          {/* Modal Card */}
          <div role="dialog" aria-modal="true" aria-labelledby="experience-title" className="relative w-full max-w-2xl bg-[#211b18] border border-white/15 rounded-3xl shadow-2xl overflow-hidden z-10 animate-slide-up my-8 max-h-[92vh] flex flex-col">
            
            {/* Modal Header Visual Image */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden flex-shrink-0">
              <img 
                src={selectedExperience.img} 
                alt={selectedExperience.title} 
                className="w-full h-full object-cover filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161210] via-black/40 to-transparent"></div>

              {/* Close Button */}
              <button 
                onClick={() => setSelectedExperience(null)}
                aria-label="Close modal"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 border border-white/20 text-white hover:bg-white hover:text-black flex items-center justify-center transition-all"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Badge Pill on Image */}
              <div className="absolute bottom-4 left-6">
                <span className={`px-3 py-1 rounded-full text-xs uppercase font-bold tracking-wider border backdrop-blur-md ${selectedExperience.badgeColor}`}>
                  {selectedExperience.badge}
                </span>
                <h3 id="experience-title" className="font-serif text-3xl sm:text-4xl text-white font-normal mt-2 drop-shadow-md">
                  {selectedExperience.title}
                </h3>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* Duration & Price Bar */}
              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-zinc-300">
                  <Clock className="w-4 h-4 text-[#D8B46C]" />
                  <span>Session Length: <strong className="text-white font-medium">{selectedExperience.duration}</strong></span>
                </div>
                <div className="font-serif text-lg font-semibold text-[#D8B46C]">
                  {selectedExperience.price}
                </div>
              </div>

              {/* Full Narrative */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#D8B46C] font-semibold mb-2">
                  The Experience
                </h4>
                <p className="font-sans text-sm text-zinc-200 font-light leading-relaxed">
                  {selectedExperience.fullDesc}
                </p>
              </div>

              {/* Included Perks Checklist */}
              <div>
                <h4 className="text-xs uppercase tracking-wider text-[#D8B46C] font-semibold mb-3">
                  What's Included in This Experience
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedExperience.perks.map((perk, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-tight">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Booking CTA */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => {
                    const suiteMap = {
                      'balayage-studio': 'lived-in-blonde',
                      'head-spa-suite': 'japanese-head-spa',
                      'hospitality-lounge': 'consultation',
                      'styling-masterclasses': 'consultation'
                    };
                    const serviceKey = suiteMap[selectedExperience.id] || 'lived-in-blonde';
                    setSelectedExperience(null);
                    onOpenBooking(serviceKey);
                  }}
                  className="btn-gold flex-1 py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] flex items-center justify-center gap-2 shadow-xl"
                >
                  <span>Book This Experience</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => setSelectedExperience(null)}
                  className="px-6 py-3.5 rounded-full border border-white/20 text-xs font-medium uppercase tracking-wider text-zinc-300 hover:text-white hover:border-white/40 transition-colors"
                >
                  Close Preview
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
