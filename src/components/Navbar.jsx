import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      <header className={`fixed inset-x-0 top-0 z-40 h-16 border-b transition-all duration-300 ${
        isScrolled
          ? 'bg-[#141311]/85 shadow-lg backdrop-blur-md border-[#C5A059]/20'
          : 'bg-[#141311]/75 backdrop-blur-md border-[#C5A059]/10'
      }`}>
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-5 px-6 lg:px-12">
          
          {/* Official Brand Logo */}
          <Link to="/" className="shrink-0 focus:outline-none">
            <Logo variant="horizontal" size="sm" />
          </Link>

          {/* Simple Clean Navigation Links */}
          <nav className="hidden flex-1 items-center justify-center gap-8 text-xs font-medium uppercase tracking-[0.2em] text-[#D5CFC5] xl:gap-10 lg:flex">
            <Link
              to="/"
              className="hover:text-[#C5A059] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-[#C5A059] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
            >
              About
            </Link>
            <Link
              to="/services"
              className="hover:text-[#C5A059] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
            >
              Services
            </Link>
            <Link 
              to="/team" 
              className="hover:text-[#C5A059] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
            >
              Stylists
            </Link>
          </nav>

          {/* Clean "Book Appointment" CTA Button */}
          <div className="hidden shrink-0 items-center lg:flex">
            <button 
              onClick={() => onOpenBooking()}
              className="btn-gold flex items-center gap-2 rounded-full px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.12em] shadow-md shadow-[#C5A059]/20 transition-all hover:scale-[1.03] active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-3 lg:hidden">
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
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-[#EDE8DF] hover:text-[#C5A059] py-1 border-b border-zinc-900">Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-[#EDE8DF] hover:text-[#C5A059] py-1 border-b border-zinc-900">About</Link>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-[#EDE8DF] hover:text-[#C5A059] py-1 border-b border-zinc-900">Services</Link>
            <Link to="/team" onClick={() => setMobileMenuOpen(false)} className="text-[#EDE8DF] hover:text-[#C5A059] py-1 border-b border-zinc-900">Stylists</Link>
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
