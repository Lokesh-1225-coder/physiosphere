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
    { name: "What is Physio", href: "#what-is-physiotherapy", id: "what-is-physiotherapy" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Conditions", href: "#conditions", id: "conditions" },
    { name: "Physiotherapists", href: "#physiotherapists", id: "physiotherapists" },
    { name: "Locations", href: "#locations", id: "locations" },
    { name: "FAQ", href: "#faq", id: "faq" },
    { name: "Contact", href: "#contact", id: "contact" }
  ];

  // Scrollspy to automatically highlight active section when scrolled or hovered
  useEffect(() => {
    const sectionIds = ["hero", ...navLinks.map((l) => l.id)];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
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
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-blue-100/80 shadow-xs">
      {/* Top Clinical Strip - Desktop Only */}
      <div className="hidden lg:block bg-[#0a2540] text-slate-200 text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-white font-medium tracking-wide">
              Expert Home Physiotherapy Across Hyderabad
            </span>
            <span className="text-blue-300/40">|</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Team of 8 Licensed Physiotherapists
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${BRAND_INFO.phonePrimary}`}
              className="hover:text-white transition-colors flex items-center gap-1.5 font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{BRAND_INFO.phoneFormattedPrimary}</span>
            </a>
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1.5 font-semibold"
            >
              <WhatsAppIcon className="w-4 h-4 fill-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        aria-label="Main Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
      >
        {/* Brand Logo & Name - Increased Logo Size */}
        <Link
          href="#hero"
          className="flex items-center gap-3 sm:gap-3.5 flex-shrink-0 group"
          onClick={handleLinkClick}
        >
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-blue-200 shadow-sm flex-shrink-0 group-hover:border-blue-500 transition-colors">
            <Image
              src="/images/logo.jpeg"
              alt="PhysioSphere Logo"
              fill
              sizes="(max-width: 640px) 48px, 56px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0a2540] leading-tight">
              Physio<span className="text-emerald-600">Sphere</span>
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-slate-500 tracking-wide">
              Home Physiotherapy • Hyderabad
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links - Font size 15-16px + Active Section Cursor Highlighting */}
        <div className="hidden xl:flex items-center gap-1.5 text-[15.5px] font-semibold text-slate-700">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-2 rounded-lg transition-all duration-150 cursor-pointer ${
                  isActive
                    ? "bg-blue-50 text-blue-700 font-bold border border-blue-200/80 shadow-xs"
                    : "hover:bg-blue-50/80 hover:text-blue-700 text-slate-700"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Desktop Action CTAs - Increased Appointment Button Size */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${BRAND_INFO.phonePrimary}`}
            className="hidden 2xl:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-blue-700 hover:bg-blue-50/60 rounded-lg transition"
          >
            <Phone className="w-4 h-4 text-blue-600" />
            <span>{BRAND_INFO.phoneFormattedPrimary}</span>
          </a>

          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-[15px] sm:text-base font-bold transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          >
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Book Appointment</span>
          </button>
        </div>

        {/* Mobile Header Buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-4 py-2 text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm cursor-pointer"
          >
            Book Now
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#0a2540] rounded-lg transition cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-1 text-base font-medium text-slate-800">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`py-2.5 px-3.5 rounded-lg text-[15px] transition-colors ${
                    isActive
                      ? "bg-blue-50 text-blue-700 font-bold border border-blue-200"
                      : "hover:bg-slate-50 text-slate-800"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 space-y-2.5">
            <button
              type="button"
              onClick={() => {
                handleLinkClick();
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-md cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
            </button>

            <div className="grid grid-cols-2 gap-2 text-xs font-bold">
              <a
                href={`tel:${BRAND_INFO.phonePrimary}`}
                className="flex items-center justify-center gap-1.5 py-3 rounded-lg border border-slate-200 text-slate-800 text-center hover:bg-slate-50"
              >
                <Phone className="w-4 h-4 text-blue-600" />
                <span>Call {BRAND_INFO.phonePrimary}</span>
              </a>
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-3 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-800 text-center hover:bg-emerald-100"
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