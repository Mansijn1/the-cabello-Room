import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Clean Glassmorphic Header */}
      <header className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'py-4 shadow-2xl bg-[#0F0E0D]/90 backdrop-blur-md border-b border-[#C5A059]/20' 
          : 'py-6 bg-[#0F0E0D]/60 backdrop-blur-sm border-b border-[#C5A059]/10'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          
          {/* Official Brand Logo */}
          <a href="#" className="focus:outline-none">
            <Logo variant="horizontal" size="md" />
          </a>

          {/* Simple Clean Navigation Links */}
          <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.2em] text-[#D5CFC5] font-medium">
            <a 
              href="#" 
              className="hover:text-[#C5A059] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </a>
            <a 
              href="#specialties" 
              className="hover:text-[#C5A059] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
            >
              Services
            </a>
            <a 
              href="#team" 
              className="hover:text-[#C5A059] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
            >
              Stylists
            </a>
            <a 
              href="#location" 
              className="hover:text-[#C5A059] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
            >
              Contact
            </a>
          </nav>

          {/* Clean "Book Appointment" CTA Button */}
          <div className="hidden md:flex items-center">
            <button 
              onClick={() => onOpenBooking()}
              className="btn-gold px-7 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] flex items-center gap-2 shadow-lg shadow-[#C5A059]/20 hover:scale-105 active:scale-95 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 md:hidden">
            <button 
              onClick={() => onOpenBooking()}
              className="btn-gold px-4 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider"
            >
              Book
            </button>
            <button 
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="w-10 h-10 rounded-full border border-[#C5A059]/30 flex items-center justify-center text-[#F9F6F0] hover:text-[#C5A059] focus:outline-none"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Slide-out Menu Backdrop */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity"
        />
      )}

      {/* Mobile Slide-out Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[80%] max-w-xs bg-[#0F0E0D] border-l border-[#C5A059]/30 z-50 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-in-out shadow-2xl ${
        mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#C5A059]/20">
            <Logo variant="horizontal" size="sm" />
            <button 
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Menu"
              className="w-8 h-8 rounded-full border border-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav className="mt-8 flex flex-col gap-5 text-sm uppercase tracking-[0.2em]">
            <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-[#EDE8DF] hover:text-[#C5A059] py-1 border-b border-zinc-900">Home</a>
            <a href="#specialties" onClick={() => setMobileMenuOpen(false)} className="text-[#EDE8DF] hover:text-[#C5A059] py-1 border-b border-zinc-900">Services</a>
            <a href="#team" onClick={() => setMobileMenuOpen(false)} className="text-[#EDE8DF] hover:text-[#C5A059] py-1 border-b border-zinc-900">Stylists</a>
            <a href="#location" onClick={() => setMobileMenuOpen(false)} className="text-[#EDE8DF] hover:text-[#C5A059] py-1">Contact</a>
          </nav>
        </div>

        <div className="pt-6 border-t border-[#C5A059]/20">
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
            className="w-full btn-gold py-3 rounded-full text-xs font-semibold uppercase tracking-[0.16em] text-center shadow-lg"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </>
  );
}
