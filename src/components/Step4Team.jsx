import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Step4Team({ onOpenBooking }) {
  const stylists = [
    {
      name: "Celeste",
      role: "Salon Owner & Senior Stylist",
      specialties: ["Lived-In Blondes", "Bespoke Transformations", "Salon Visionary"],
      bio: "With over a decade of mastery, Celeste founded The Cabello Room to champion hair health and customized blonding.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      cardBg: "bg-[#FDF8F2]",
      accent: "border-[#E8D9C5] hover:border-[#C5A059]/75",
      chip: "bg-[#f7f0e2] text-[#765b31] border-[#dfcda8]"
    },
    {
      name: "Analise",
      role: "Salon Operations Manager & Senior Stylist",
      specialties: ["Balayage", "Dimensional Brunettes", "Guest Experience"],
      bio: "Ensuring every client journey is seamless, Analise creates rich caramel tones and buttery melted blends.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
      cardBg: "bg-[#FAF3F3]",
      accent: "border-[#F3DCDC] hover:border-[#d78f9c]/75",
      chip: "bg-[#f8e9eb] text-[#87525d] border-[#e7c4ca]"
    },
    {
      name: "Caer",
      role: "Senior Stylist & Extensionist",
      specialties: ["Russian Remy Tapes", "Precision Layering", "Color Corrections"],
      bio: "The extension perfectionist. Specializes in undetectable placement, seamless razor blending, and density restoration.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      cardBg: "bg-[#F2F7F4]",
      accent: "border-[#D5E3DA] hover:border-[#83a590]/80",
      chip: "bg-[#f8eee3] text-[#805a37] border-[#e4c9aa]"
    },
    {
      name: "Summer",
      role: "Emerging Stylist",
      specialties: ["Bright Foiling", "Gloss Glazing", "Signature Waves"],
      bio: "Passionate about modern trending blondes, sunlit baby-lights, and bouncy voluminous blowouts.",
      img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
      cardBg: "bg-[#F7F5FA]",
      accent: "border-[#E1D9EC] hover:border-[#aa91c4]/75",
      chip: "bg-[#f7f0e2] text-[#765b31] border-[#dfcda8]"
    },
    {
      name: "Georgia",
      role: "Emerging Stylist",
      specialties: ["Japanese Head Spa", "Aura Keratin", "Texture Styling"],
      bio: "Expert in restorative scalp therapies, calming waterfall rituals, and glass-hair keratin smoothing.",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      cardBg: "bg-[#F8F3F4]",
      accent: "border-[#EBD9DD] hover:border-[#d78f9c]/75",
      chip: "bg-[#f8e9eb] text-[#87525d] border-[#e7c4ca]"
    },
    {
      name: "Natasha",
      role: "Junior Stylist & Basin Lead",
      specialties: ["Acupressure Massage", "K18 Bond Therapy", "Styling Prep"],
      bio: "Master of relaxing shampoo rituals, hot towel infusions, and preparing the perfect canvas for your color.",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
      cardBg: "bg-[#F7F5EF]",
      accent: "border-[#E8E0CC] hover:border-[#c5a059]/75",
      chip: "bg-[#f8eee3] text-[#805a37] border-[#e4c9aa]"
    }
  ];

  return (
    <section id="team" className="relative isolate overflow-hidden bg-[#FAF8F5] py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-12 h-[30rem] w-[30rem] rounded-full bg-[#d8b46c]/15 blur-[120px]" />
        <div className="absolute -right-36 top-1/3 h-[28rem] w-[28rem] rounded-full bg-[#d78f9c]/10 blur-[120px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-[#302821] leading-tight">
            Meet Your Hair's <span className="italic font-normal text-[#9b6c43]">New Bestie</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#75685d] mt-4 font-light leading-relaxed">
            Led by Salon Owner Celeste, our artists continuously train in the world's most progressive blonding, extension, and scalp techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {stylists.map((stylist) => (
            <div 
              key={stylist.name}
              className={`group relative flex flex-col overflow-hidden rounded-3xl border ${stylist.accent} ${stylist.cardBg} p-5 shadow-lg backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <div>
                <div className="animate-shine pointer-events-none absolute -left-1/2 top-0 z-20 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/75 to-transparent opacity-0" />
                <div className={`relative mx-auto mb-6 h-72 w-full max-w-[290px] overflow-hidden rounded-t-full border-[3px] bg-gradient-to-b from-white to-[#f4ece2] p-1 shadow-md ${stylist.accent}`}>
                  <img 
                    src={stylist.img} 
                    alt={stylist.name} 
                    loading="lazy"
                    className="h-full w-full rounded-t-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="text-center">
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#302821] mb-1">
                    {stylist.name}
                  </h3>
                  <div className="text-[11px] text-[#936b48] uppercase tracking-[0.12em] font-semibold mb-3">
                    {stylist.role}
                  </div>
                  <p className="font-sans text-sm text-[#75685d] font-light leading-relaxed mb-5">
                    {stylist.bio}
                  </p>

                  <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                    {stylist.specialties.map((s, i) => (
                      <span key={i} className={`text-[10px] px-2.5 py-1 rounded-full border ${stylist.chip}`}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-2">
                <button 
                  type="button"
                  onClick={() => onOpenBooking(null, stylist.name)}
                  className="w-full rounded-full border border-[#C5A059]/45 bg-[#fffdf9] py-3 text-xs font-semibold uppercase tracking-wider text-[#765b31] transition-all duration-300 hover:border-[#C5A059] hover:bg-[#C5A059] hover:text-white flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book With {stylist.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
