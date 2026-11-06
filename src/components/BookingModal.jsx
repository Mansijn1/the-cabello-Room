import React, { useState, useEffect } from 'react';
import { X, Clock, CheckCircle2, Calendar, Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import Logo from './Logo';

export default function BookingModal({ isOpen, onClose, initialService, initialStylist }) {
  const [appointmentType, setAppointmentType] = useState('full');
  const [selectedService, setSelectedService] = useState('lived-in-blonde');
  const [selectedStylist, setSelectedStylist] = useState('any');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('morning');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const serviceMap = {
    'lived-in-blonde': { name: 'Signature Lived-In Blonde Package', price: 'From $295', duration: '180 mins' },
    'bright-blondes': { name: 'Bright Vanilla Blonde Package', price: 'From $320', duration: '195 mins' },
    'custom-balayage': { name: 'Dimensional Lived-In Colour', price: 'From $265', duration: '165 mins' },
    'luxury-extensions': { name: 'Seamless Russian Tape Extensions', price: 'From $650', duration: '180 mins' },
    'japanese-head-spa': { name: 'Japanese Scalp Spa & Water Halo', price: 'From $195', duration: '90 mins' },
    'aura-keratin': { name: 'Aura Organic Keratin Smoothing', price: 'From $350', duration: '180 mins' },
    'precision-cut': { name: 'The Cabello Precision Cut & Finish', price: 'From $135', duration: '60 mins' },
    'consultation': { name: 'Complimentary In-Salon Hair Consultation', price: 'Complimentary ($0)', duration: '20 mins' }
  };

  useEffect(() => {
    if (initialService) {
      if (initialService === 'consultation') {
        setAppointmentType('consult');
        setSelectedService('consultation');
      } else if (serviceMap[initialService]) {
        setAppointmentType('full');
        setSelectedService(initialService);
      }
    }
    if (initialStylist) {
      setSelectedStylist(initialStylist.toLowerCase());
    }
    // Set default tomorrow date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    setDate(`${yyyy}-${mm}-${dd}`);
    setIsConfirmed(false);
  }, [isOpen, initialService, initialStylist]);

  if (!isOpen) return null;

  const currentInfo = serviceMap[selectedService] || serviceMap['lived-in-blonde'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsConfirmed(true);
    }, 1200);
  };

  const handleResetAndClose = () => {
    setIsConfirmed(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#161513] border border-[#C5A059]/40 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 my-8 max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#C5A059]/50 flex items-center justify-center transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {!isConfirmed ? (
          <div>
            {/* Modal Header */}
            <div className="text-center max-w-md mx-auto mb-6">
              <div className="flex justify-center mb-2">
                <Logo variant="icon" size="sm" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#FDFBF7] font-normal">Reserve Your Salon Experience</h3>
              <p className="text-xs text-zinc-400 mt-1 font-light">Direct reservation into The Cabello Room calendar.</p>
            </div>

            {/* Tab Selector */}
            <div className="grid grid-cols-2 gap-2 bg-[#0F0E0D] p-1.5 rounded-full border border-zinc-800 mb-6">
              <button 
                type="button"
                onClick={() => {
                  setAppointmentType('full');
                  if (selectedService === 'consultation') setSelectedService('lived-in-blonde');
                }}
                className={`py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                  appointmentType === 'full' 
                    ? 'bg-[#C5A059] text-[#0F0E0D]' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Full Service Booking
              </button>
              <button 
                type="button"
                onClick={() => {
                  setAppointmentType('consult');
                  setSelectedService('consultation');
                }}
                className={`py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                  appointmentType === 'consult' 
                    ? 'bg-[#C5A059] text-[#0F0E0D]' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Free 15-Min Consultation
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Service Selection */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D8B46C] font-semibold mb-1.5">
                    Service Selection *
                  </label>
                  <select 
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-[#0F0E0D] border border-[#C5A059]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="lived-in-blonde">Signature Lived-In Blonde Package</option>
                    <option value="bright-blondes">Bright Vanilla Blonde Package</option>
                    <option value="custom-balayage">Dimensional Lived-In Colour</option>
                    <option value="luxury-extensions">Seamless Russian Tape Extensions</option>
                    <option value="japanese-head-spa">Japanese Scalp Spa & Water Halo</option>
                    <option value="aura-keratin">Aura Organic Keratin Smoothing</option>
                    <option value="precision-cut">The Cabello Precision Cut & Finish</option>
                    <option value="consultation">Complimentary In-Salon Consultation</option>
                  </select>
                </div>

                {/* Stylist Selection */}
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D8B46C] font-semibold mb-1.5">
                    Preferred Artist
                  </label>
                  <select 
                    value={selectedStylist}
                    onChange={(e) => setSelectedStylist(e.target.value)}
                    className="w-full bg-[#0F0E0D] border border-[#C5A059]/30 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="any">First Available Master Stylist</option>
                    <option value="celeste">Celeste (Salon Owner & Senior Stylist)</option>
                    <option value="analise">Analise (Operations Manager & Senior Stylist)</option>
                    <option value="caer">Caer (Senior Stylist & Extensionist)</option>
                    <option value="summer">Summer (Emerging Stylist)</option>
                    <option value="georgia">Georgia (Head Spa Lead)</option>
                    <option value="natasha">Natasha (Basin & Bond Lead)</option>
                  </select>
                </div>

              </div>

              {/* Dynamic Price & Duration Indicator */}
              <div className="p-3 rounded-xl bg-[#0F0E0D]/90 border border-[#C5A059]/20 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-zinc-300">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Duration: <strong className="text-white font-medium">{currentInfo.duration}</strong></span>
                </div>
                <div className="text-[#D8B46C] font-serif text-sm">
                  Estimated: <strong className="font-semibold text-[#D8B46C]">{currentInfo.price}</strong>
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D8B46C] font-semibold mb-1.5">
                    Preferred Date *
                  </label>
                  <input 
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#0F0E0D] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D8B46C] font-semibold mb-1.5">
                    Preferred Window
                  </label>
                  <select 
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full bg-[#0F0E0D] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                  >
                    <option value="morning">Morning (9:30 AM – 12:00 PM)</option>
                    <option value="afternoon">Afternoon (12:30 PM – 3:30 PM)</option>
                    <option value="evening">Evening / Late Night (4:00 PM – 7:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D8B46C] font-semibold mb-1.5">
                    Your Full Name *
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Jessica Williams"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#0F0E0D] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#D8B46C] font-semibold mb-1.5">
                    Mobile Number (for SMS) *
                  </label>
                  <input 
                    type="tel"
                    required
                    placeholder="0400 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#0F0E0D] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#D8B46C] font-semibold mb-1.5">
                  Email Address *
                </label>
                <input 
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#0F0E0D] border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#D8B46C] font-semibold mb-1.5">
                  Hair Goals or Previous Dye History (Optional)
                </label>
                <textarea 
                  rows="2"
                  placeholder="Tell us about your current hair color, previous box dye, or extension length goals..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#0F0E0D] border border-zinc-700 rounded-xl px-3.5 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="btn-gold w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] flex items-center justify-center gap-2 shadow-xl shadow-[#C5A059]/20"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Syncing with Salon Calendar...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Booking Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation Receipt View */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#C5A059]/20 border-2 border-[#C5A059] text-[#D8B46C] flex items-center justify-center text-2xl mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-[#D8B46C]" />
            </div>

            <h3 className="font-serif text-3xl text-[#FDFBF7] font-normal mb-2">Reservation Request Received</h3>
            <p className="text-xs text-zinc-300 max-w-md mx-auto mb-6">
              Thank you, <strong className="text-[#D8B46C]">{name || 'Valued Guest'}</strong>! Our salon coordinator has received your reservation request and will send an SMS confirmation shortly.
            </p>

            <div className="max-w-md mx-auto bg-[#0F0E0D] border border-[#C5A059]/30 rounded-2xl p-5 text-left text-xs space-y-2.5 mb-6">
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Service:</span>
                <span className="text-white font-semibold">{currentInfo.name}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Date & Window:</span>
                <span className="text-white font-semibold">{date} · {timeSlot.toUpperCase()}</span>
              </div>
              <div className="flex justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400">Contact Mobile:</span>
                <span className="text-white font-semibold">{phone}</span>
              </div>
              <div className="flex justify-between pt-1 text-[11px] text-[#D8B46C]">
                <span>Status:</span>
                <span className="font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> SMS Confirmation Queued
                </span>
              </div>
            </div>

            <button 
              onClick={handleResetAndClose}
              className="btn-gold px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider"
            >
              Done & Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
