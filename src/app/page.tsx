"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PhysiotherapyInfo from "@/components/PhysiotherapyInfo";
import HomePhysiotherapy from "@/components/HomePhysiotherapy";
import Benefits from "@/components/Benefits";
import Conditions from "@/components/Conditions";
import Services from "@/components/Services";
import Physiotherapist from "@/components/Physiotherapist";
import WhyChooseUs from "@/components/WhyChooseUs";
import BookingSteps from "@/components/BookingSteps";
import Testimonials from "@/components/Testimonials";
import Locations from "@/components/Locations";
import FAQ from "@/components/FAQ";
import ClinicMap from "@/components/ClinicMap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import FloatingBookNow from "@/components/FloatingBookNow";

export default function HomePage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState("");

  const handleOpenBooking = (service?: string) => {
    setPrefilledService(service || "General Physiotherapy Consultation");
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white pb-24 md:pb-0 overflow-x-hidden">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* 2. Hero Section */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* 3. About PhysioSphere */}
      <About onOpenBooking={() => handleOpenBooking()} />

      {/* 4. What is Physiotherapy? (Educational) */}
      <PhysiotherapyInfo />

      {/* 5. Physiotherapy Treatment at Home */}
      <HomePhysiotherapy onOpenBooking={() => handleOpenBooking()} />

      {/* 6. Benefits of Physiotherapy at Home */}
      <Benefits onOpenBooking={() => handleOpenBooking()} />

      {/* 7. Common Conditions Treated (16 conditions) */}
      <Conditions onSelectCondition={(condition) => handleOpenBooking(condition)} />

      {/* 8. Our Core Services (8 categories) */}
      <Services onSelectService={(service) => handleOpenBooking(service)} />

      {/* 9. Meet Our Physiotherapist (Dr. Venu & 8 therapists team) */}
      <Physiotherapist onOpenBooking={() => handleOpenBooking()} />

      {/* 10. Why Choose PhysioSphere? */}
      <WhyChooseUs onOpenBooking={() => handleOpenBooking()} />

      {/* 11. How to Book (4 simple visual steps) */}
      <BookingSteps onOpenBooking={() => handleOpenBooking()} />

      {/* 12. Patient Testimonials (Interactive Slider) */}
      <Testimonials />

      {/* 13. Service Locations Across Hyderabad (Searchable) */}
      <Locations onOpenBooking={() => handleOpenBooking()} />

      {/* 14. Frequently Asked Questions (Interactive Accordion) */}
      <FAQ />

      {/* 15. Central Clinic & Google Map Location */}
      <ClinicMap />

      {/* 16. Contact Section */}
      <Contact onOpenBooking={() => handleOpenBooking()} />

      {/* 17. Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* High-Priority Persistent Booking Elements */}
      <FloatingBookNow onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Modal with Nodemailer Submission */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={prefilledService}
      />
    </main>
  );
}
