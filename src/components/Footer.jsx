import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-[#0B0A09] border-t border-[#C5A059]/20 pt-16 pb-24 md:pb-12 text-[#D5CFC5] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-zinc-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" />

            <p className="text-xs text-zinc-400 font-light leading-relaxed max-w-sm">
              Penrith’s premier sanctuary for bespoke hair colour, lived-in blondes, seamless extensions, and holistic Japanese head spa rituals.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://instagram.com/thecabelloroom" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#C5A059]/30 flex items-center justify-center text-[#D8B46C] hover:bg-[#C5A059] hover:text-[#0F0E0D] transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-[#C5A059]/30 flex items-center justify-center text-[#D8B46C] hover:bg-[#C5A059] hover:text-[#0F0E0D] transition-all"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-semibold tracking-widest text-[#D8B46C]">Client Journey</h4>
            <ul className="text-xs space-y-2 text-zinc-400">
              <li><a href="#mission" className="hover:text-white transition-colors">01. Our Mission</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">02. Specialties Menu</a></li>
              <li><a href="#transformations" className="hover:text-white transition-colors">Before & After Slider</a></li>
              <li><a href="#insta-goals" className="hover:text-white transition-colors">03. Goal Pics</a></li>
              <li><a href="#team" className="hover:text-white transition-colors">04. Meet The Team</a></li>
              <li><a href="#headspa" className="hover:text-white transition-colors">Japanese Head Spa</a></li>
            </ul>
          </div>

          {/* Specialties */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-semibold tracking-widest text-[#D8B46C]">Specialties</h4>
            <ul className="text-xs space-y-2 text-zinc-400">
              <li><a href="#specialties" className="hover:text-white transition-colors">Lived-In Blondes</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">Russian Tape Extensions</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">Dimensional Balayage</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">Aura Organic Keratin</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">K18 Bond Treatment</a></li>
              <li><a href="#specialties" className="hover:text-white transition-colors">Precision Dry Cutting</a></li>
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-semibold tracking-widest text-[#D8B46C]">Penrith Salon</h4>
            <div className="text-xs space-y-2 text-zinc-400 font-light">
              <p>Penrith, Sydney NSW 2750</p>
              <p>(02) 4731 0000</p>
              <p>hello@thecabelloroom.com</p>
              <p className="text-[#D8B46C] font-medium pt-1">Tue – Sat: Open (Thu late night)</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <div>
            &copy; {new Date().getFullYear()} The Cabello Room. All Rights Reserved. Directed by Salon Owner Celeste.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Cancellation Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Salon Etiquette</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
