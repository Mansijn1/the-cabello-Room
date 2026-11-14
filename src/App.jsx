import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Step1Mission from './components/Step1Mission';
import Step3InstaGoal from './components/Step3InstaGoal';
import HeadSpaSpotlight from './components/HeadSpaSpotlight';
import Reviews from './components/Reviews';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import FloatingQuickBar from './components/FloatingQuickBar';
import BookingModal from './components/BookingModal';
import About from './components/About';
import Services from './components/Services';
import Team from './components/Team';

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
    <BrowserRouter>
      <div className="min-h-screen bg-[#0F0E0D] text-[#F9F6F0] relative overflow-x-hidden">
        {/* Ambient Top Lighting Glow */}
        <div className="ambient-glow-top"></div>

        {/* 1. Header Navigation */}
        <Navbar onOpenBooking={handleOpenBooking} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* 2. Hero Section */}
                <Hero onOpenBooking={handleOpenBooking} />

                {/* 3. Step 01: Be A Part Of Our Mission (Atmosphere & Hospitality) */}
                <Step1Mission onOpenBooking={handleOpenBooking} />

                {/* 6. Step 03: Choose A Goal Pic From Our Insta (@thecabelloroom) */}
                <Step3InstaGoal onOpenBooking={handleOpenBooking} />

                {/* 8. Spotlight: Japanese Head Spa Ritual */}
                <HeadSpaSpotlight onOpenBooking={handleOpenBooking} />

                {/* 10. Verified 5.0 Star Google Reviews */}
                <Reviews />

                {/* 11. Boutique Location & Operating Hours */}
                <LocationSection onOpenBooking={handleOpenBooking} />

                {/* 13. Mobile Floating Conversion Bar */}
                <FloatingQuickBar onOpenBooking={handleOpenBooking} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services onOpenBooking={handleOpenBooking} />} />
          <Route path="/team" element={<Team onOpenBooking={handleOpenBooking} />} />
        </Routes>

        <Footer />

        {/* 14. Interactive Dynamic Booking Pop-up Modal */}
        <BookingModal
          isOpen={isModalOpen}
          onClose={handleCloseBooking}
          initialService={modalService}
          initialStylist={modalStylist}
        />
      </div>
    </BrowserRouter>
  );
}
