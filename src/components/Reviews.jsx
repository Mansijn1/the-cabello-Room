import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "Sarah Mitchell",
      service: "Lived-In Blonde & K18 Therapy",
      date: "2 Weeks Ago",
      initials: "SM",
      quote: "“Celeste and her team are absolute magicians. I came in with terribly brassy banding from a previous salon, and Celeste carefully planned out my hair health recovery. My hair is softer than ever and the blonde looks luminous!”"
    },
    {
      name: "Jessica Lawson",
      service: "Japanese Head Spa Ritual",
      date: "1 Month Ago",
      initials: "JL",
      quote: "“The Japanese Head Spa is pure heaven. The rhythmic warm waterfall, essential oils, and scalp massage melted away a week of tension. You feel like you’re in a 5-star Tokyo retreat right here in Penrith.”"
    },
    {
      name: "Rachel Davies",
      service: "Seamless Russian Tape Extensions",
      date: "3 Weeks Ago",
      initials: "RD",
      quote: "“Caer installed my Russian tape extensions and they are completely undetectable. No pulling, no headache, and the color blend with my natural caramel highlights is 10/10 perfection. I get compliments everywhere!”"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-[#0F0E0D] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-xs font-semibold uppercase tracking-wider text-[#D8B46C] mb-3">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Google Verified 5.0 Star Feedback</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FDFBF7] leading-tight">
            Client Words & <span className="italic font-normal gold-gradient-text">Experiences</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 mt-4 font-light">
            Over 450 verified 5-star reviews from our Sydney clients who trust us with their hair journeys.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, index) => (
            <div 
              key={index}
              className="luxury-card glass-panel rounded-2xl p-7 flex flex-col justify-between border border-[#C5A059]/20"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#D8B46C]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D8B46C]" />
                    ))}
                  </div>
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-semibold">{rev.date}</span>
                </div>

                <p className="font-serif text-base italic text-[#EDE8DF] leading-relaxed font-light mb-6">
                  {rev.quote}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center font-serif text-[#D8B46C] font-bold text-sm">
                  {rev.initials}
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">{rev.name}</h4>
                  <p className="text-[10px] text-[#C5A059]">{rev.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
