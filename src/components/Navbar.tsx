"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, Calendar } from "lucide-react";
import { BRAND_INFO } from "@/data/physiosphereData";
import WhatsAppIcon from "@/components/WhatsAppIcon";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Conditions", href: "#conditions", id: "conditions" },
    { name: "Our Team", href: "#our-team", id: "our-team" },
    { name: "Benefits", href: "#benefits", id: "benefits" },
    { name: "Locations", href: "#locations", id: "locations" },
    { name: "FAQ", href: "#faq", id: "faq" },
    { name: "Contact", href: "#contact", id: "contact" }
  ];

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Scrollspy to track active section
  useEffect(() => {
    const sectionIds = ["hero", ...navLinks.map((l) => l.id)];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-blue-100 shadow-2xs">
      {/* Top Clinical Strip - Desktop Only */}
      <div className="hidden lg:block bg-[#0a2540] text-slate-200 text-xs py-2 px-6 border-b border-blue-900/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-white font-medium">Home Physiotherapy Across Hyderabad</span>
            <span className="text-blue-300/40">|</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Team of 30+ Licensed Physiotherapists
            </span>
            <span className="text-blue-300/40">|</span>
            <span className="text-blue-200">Hours: Mon-Sun: 9:00am - 9:00pm</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${BRAND_INFO.phonePrimary}`}
              className="hover:text-white transition flex items-center gap-1.5 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{BRAND_INFO.phoneFormattedPrimary}</span>
            </a>
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition flex items-center gap-1.5 font-semibold"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar: Responsive height (15 on mobile, 18-20 on desktop) */}
      <nav
        aria-label="Main Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between"
      >
        {/* Brand Logo & Name (Slightly larger logo per instructions) */}
        <Link
          href="#hero"
          className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0 group"
          onClick={handleLinkClick}
        >
          <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden border-2 border-blue-200 shadow-2xs flex-shrink-0 group-hover:border-blue-400 transition-colors">
            <Image
              src="/images/logo.jpeg"
              alt="PhysioSphere Logo"
              fill
              sizes="52px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0a2540] leading-tight">
              Physio<span className="text-emerald-600">Sphere</span>
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-slate-500 leading-none">
              Home Physiotherapy • Hyderabad
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (15-16px font with active & hover cursor highlight) */}
        <div className="hidden xl:flex items-center gap-1.5 text-[15px] sm:text-[16px] font-semibold text-slate-700">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-xl transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0a2540] text-white font-bold shadow-2xs"
                    : "hover:bg-blue-100/70 hover:text-[#0a2540] text-slate-700"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Desktop Action CTAs (Enlarged Appointment Booking Button) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${BRAND_INFO.phonePrimary}`}
            className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 hover:text-blue-700 rounded-lg transition"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600" />
            <span>{BRAND_INFO.phoneFormattedPrimary}</span>
          </a>

          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-[15px] font-bold shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Header Quick Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-3 py-1.5 text-xs font-bold bg-blue-600 text-white rounded-lg shadow-2xs active:bg-blue-700"
          >
            Book Now
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-slate-700 hover:text-[#0a2540] rounded-lg transition active:bg-slate-100"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu - Clean, Full Screen Overlay Prevention, Fast & Tap-Friendly */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-15 sm:top-18 bottom-0 bg-white z-50 overflow-y-auto px-4 py-5 flex flex-col justify-between border-t border-slate-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`min-h-[44px] flex items-center px-4 rounded-xl text-base font-semibold transition ${
                    isActive
                      ? "bg-blue-50 text-blue-700 font-bold border border-blue-200"
                      : "text-slate-800 hover:bg-slate-50 active:bg-slate-100"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-200 space-y-3 pb-8">
            <button
              type="button"
              onClick={() => {
                handleLinkClick();
                onOpenBooking();
              }}
              className="w-full min-h-[48px] flex items-center justify-center gap-2 rounded-xl bg-blue-600 active:bg-blue-700 text-white font-bold text-base shadow-sm cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Home Visit</span>
            </button>

            <div className="grid grid-cols-2 gap-2 text-xs font-bold">
              <a
                href={`tel:${BRAND_INFO.phonePrimary}`}
                className="min-h-[44px] flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 text-slate-800 active:bg-slate-100"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call Us</span>
              </a>
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] flex items-center justify-center gap-1.5 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 active:bg-emerald-100"
              >
                <WhatsAppIcon className="w-4 h-4 fill-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}