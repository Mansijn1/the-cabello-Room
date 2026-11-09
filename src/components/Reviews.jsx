import React from 'react';
import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "Sarah Mitchell",
      service: "Lived-In Blonde & K18 Therapy",
      date: "2 weeks ago",
      initials: "SM",
      card: "bg-[#FAF6F0] border-[#E5DACE]",
      avatar: "bg-[#EDE2D2] border-[#D8C6AE]",
      quote: "“Celeste and her team are absolute magicians. I came in with terribly brassy banding from a previous salon, and Celeste carefully planned out my hair health recovery. My hair is softer than ever and the blonde looks luminous!”"
    },
    {
      name: "Jessica Lawson",
      service: "Japanese Head Spa Ritual",
      date: "1 month ago",
      initials: "JL",
      card: "bg-[#FAF2F3] border-[#F0D6D9]",
      avatar: "bg-[#F1DFE2] border-[#E6C7CD]",
      quote: "“The Japanese Head Spa is pure heaven. The rhythmic warm waterfall, essential oils, and scalp massage melted away a week of tension. You feel like you’re in a 5-star Tokyo retreat right here in Penrith.”"
    },
    {
      name: "Rachel Davies",
      service: "Seamless Russian Tape Extensions",
      date: "3 weeks ago",
      initials: "RD",
      card: "bg-[#F0F5F2] border-[#D2E2D7]",
      avatar: "bg-[#DDEBE2] border-[#C5D8CC]",
      quote: "“Caer installed my Russian tape extensions and they are completely undetectable. No pulling, no headache, and the color blend with my natural caramel highlights is 10/10 perfection. I get compliments everywhere!”"
    }
  ];

  return (
    <section id="reviews" className="relative isolate overflow-hidden bg-[#0F0E0D] py-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-[min(90vw,56rem)] -translate-x-1/2 rounded-full bg-[#C5A059]/10 blur-[100px]" />
        <div className="absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#D9B6B9]/[0.06] blur-[100px]" />
        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-[#B7CDBD]/[0.06] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-light leading-tight text-[#FDFBF7] sm:text-4xl md:text-5xl">
            Client Words & <span className="font-normal italic text-[#D8B46C]">Experiences</span>
          </h2>
          <p className="mt-4 font-sans text-xs font-light text-[#B8B1A8] sm:text-sm">
            Over 450 verified 5-star reviews from our Sydney clients who trust us with their hair journeys.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((rev) => (
            <article
              key={rev.name}
              className={`flex cursor-pointer flex-col justify-between rounded-2xl border p-7 text-[#1E1D1B] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] active:scale-95 motion-reduce:transition-none ${rev.card}`}
            >
              <div>
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex text-[#B58A3A]" role="img" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, index) => (
                      <Star key={index} aria-hidden="true" className="h-4 w-4 fill-current drop-shadow-[0_0_3px_rgba(197,160,89,0.4)]" />
                    ))}
                  </div>
                  <span className="rounded-full bg-black/[0.04] px-2.5 py-1 text-[10px] font-semibold tracking-wide text-[#746D65]">
                    {rev.date}
                  </span>
                </div>

                <blockquote className="mb-7 font-serif text-base font-light italic leading-relaxed text-[#1E1D1B]">
                  {rev.quote}
                </blockquote>
              </div>

              <div className="flex items-center gap-3 border-t border-black/10 pt-4">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-serif text-sm font-bold text-[#51483E] ${rev.avatar}`}>
                  {rev.initials}
                </div>
                <div className="min-w-0">
                  <h3 className="text-xs font-semibold text-[#1E1D1B]">{rev.name}</h3>
                  <p className="mt-0.5 text-[10px] font-medium leading-snug text-[#746D65]">{rev.service}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
