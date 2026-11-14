import React, { useEffect, useRef, useState } from 'react';
import { Droplets, ArrowRight } from 'lucide-react';

export default function HeadSpaSpotlight({ onOpenBooking }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.16 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="headspa"
      ref={sectionRef}
      className={`headspa-section relative overflow-hidden py-20 sm:py-24 ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Visual Image Composition */}
          <div className="headspa-reveal headspa-image-column lg:col-span-6 relative">
            <div className="headspa-image-frame relative rounded-[1.35rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80" 
                alt="Japanese Head Spa Treatment" 
                className="headspa-image w-full h-[420px] sm:h-[500px] lg:h-[570px] object-cover object-[52%_center]"
              />
              <div className="headspa-image-shade absolute inset-0"></div>

              {/* Floating Insight Pill */}
              <div className="headspa-image-caption absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#C5A059]/15 border border-[#D8B46C]/35 flex items-center justify-center text-[#806b4e] flex-shrink-0">
                  <Droplets className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-serif text-lg text-[#332820] font-normal leading-tight">Holistic Scalp & Follicle Renewal</div>
                  <div className="text-[11px] text-[#6f655a] mt-1">Warm therapeutic water ring + cedarwood essential oils</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="headspa-reveal headspa-copy lg:col-span-6">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.24em] text-[#806b4e] block mb-4">
              Penrith's Signature Sanctuary
            </span>
            <h2 className="font-serif text-[2.55rem] sm:text-5xl lg:text-[3.55rem] font-light text-[#332820] leading-[1.04] tracking-[-0.025em] mb-6">
              The Japanese Head Spa <span className="italic font-normal text-[#9b6c43]">Ritual</span>
            </h2>
            
            <p className="font-sans text-sm sm:text-[15px] text-[#62584e] font-light leading-[1.85] mb-7 max-w-xl">
              Healthy hair begins with a revitalized scalp. Our custom head spa suite combines Japanese waterfall therapy with high-magnification trichological scalp analysis, removing buildup that normal washing cannot reach.
            </p>

            <div className="headspa-steps mb-8">
              <div className="headspa-step flex items-start gap-4 py-4 first:pt-0">
                <span className="headspa-step-number w-8 h-8 rounded-full text-[#806b4e] text-xs flex items-center justify-center font-serif flex-shrink-0 mt-0.5">1</span>
                <div className="pt-0.5">
                  <h4 className="text-sm sm:text-[15px] font-medium text-[#38302a] tracking-wide">Digital Micro-Camera Analysis</h4>
                  <p className="text-[13px] text-[#756b61] font-light leading-relaxed mt-1">We examine your follicular health and moisture balance before customizing organic scrubs.</p>
                </div>
              </div>

              <div className="headspa-step flex items-start gap-4 py-4">
                <span className="headspa-step-number w-8 h-8 rounded-full text-[#806b4e] text-xs flex items-center justify-center font-serif flex-shrink-0 mt-0.5">2</span>
                <div className="pt-0.5">
                  <h4 className="text-sm sm:text-[15px] font-medium text-[#38302a] tracking-wide">Warm Waterfall Halo Cascade</h4>
                  <p className="text-[13px] text-[#756b61] font-light leading-relaxed mt-1">Warm rhythmic rainfall stimulates micro-circulation while botanical steam opens hair cuticles.</p>
                </div>
              </div>

              <div className="headspa-step flex items-start gap-4 py-4 last:pb-0">
                <span className="headspa-step-number w-8 h-8 rounded-full text-[#806b4e] text-xs flex items-center justify-center font-serif flex-shrink-0 mt-0.5">3</span>
                <div className="pt-0.5">
                  <h4 className="text-sm sm:text-[15px] font-medium text-[#38302a] tracking-wide">Neck & Cervical Fascia Acupressure</h4>
                  <p className="text-[13px] text-[#756b61] font-light leading-relaxed mt-1">25-minute extended tension-melting massage that relieves headaches, neck tightness, and stress.</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => onOpenBooking('japanese-head-spa')}
              className="headspa-cta px-7 sm:px-8 py-3.5 rounded-full text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] inline-flex items-center gap-3"
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
