import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Step1Mission from './components/Step1Mission';
import Step2Specialties from './components/Step2Specialties';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import Step3InstaGoal from './components/Step3InstaGoal';
import Step4Team from './components/Step4Team';
import HeadSpaSpotlight from './components/HeadSpaSpotlight';
import StylingNights from './components/StylingNights';
import Reviews from './components/Reviews';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import FloatingQuickBar from './components/FloatingQuickBar';
import BookingModal from './components/BookingModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState('lived-in-blonde');
  const [modalStylist, setModalStylist] = useState('any');

  const handleOpenBooking = (service = null, stylist = null) => {
    if (service) setModalService(service);
    if (stylist) setModalStylist(stylist);
    setIsModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0F0E0D] text-[#F9F6F0] relative overflow-x-hidden">
      {/* Ambient Top Lighting Glow */}
      <div className="ambient-glow-top"></div>

      {/* 1. Header Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* 2. Hero Section */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* 3. Step 01: Be A Part Of Our Mission (Atmosphere & Hospitality) */}
      <Step1Mission onOpenBooking={handleOpenBooking} />

      {/* 4. Step 02: Browse Our Specialties & Pricing Menu */}
      <Step2Specialties onOpenBooking={handleOpenBooking} />

      {/* 5. Interactive Before & After Transformation Slider */}
      <BeforeAfterSlider onOpenBooking={handleOpenBooking} />

      {/* 6. Step 03: Choose A Goal Pic From Our Insta (@thecabelloroom) */}
      <Step3InstaGoal onOpenBooking={handleOpenBooking} />

      {/* 7. Step 04: Select Your Hair's New Bestie (The Stylist Team) */}
      <Step4Team onOpenBooking={handleOpenBooking} />

      {/* 8. Spotlight: Japanese Head Spa Ritual */}
      <HeadSpaSpotlight onOpenBooking={handleOpenBooking} />

      {/* 9. Exclusive Events: In-Salon Styling Nights */}
      <StylingNights onOpenBooking={handleOpenBooking} />

      {/* 10. Verified 5.0 Star Google Reviews */}
      <Reviews />

      {/* 11. Boutique Location & Operating Hours */}
      <LocationSection onOpenBooking={handleOpenBooking} />

      {/* 12. Footer */}
      <Footer />

      {/* 13. Mobile Floating Conversion Bar */}
      <FloatingQuickBar onOpenBooking={handleOpenBooking} />

      {/* 14. Interactive Dynamic Booking Pop-up Modal */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={handleCloseBooking}
        initialService={modalService}
        initialStylist={modalStylist}
      />
    </div>
  );
}
