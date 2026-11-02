"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, Menu, X, Calendar, MapPin } from "lucide-react";
import { BRAND_INFO } from "@/data/physiosphereData";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "What is Physio?", href: "#what-is-physiotherapy" },
    { name: "Our Services", href: "#services" },
    { name: "Conditions We Treat", href: "#conditions" },
    { name: "Our Physiotherapists", href: "#physiotherapists" },
    { name: "Locations", href: "#locations" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact Us", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Clinical Utility Strip */}
      <div className="bg-[#002f5c] text-white text-xs py-2 px-4 sm:px-8 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-blue-200">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>Doorstep Physiotherapy Across Hyderabad</span>
            </span>
            <span className="hidden md:inline text-blue-300">•</span>
            <span className="hidden md:inline text-emerald-300 font-medium">
              Verified Team of 8 Licensed Physiotherapists
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${BRAND_INFO.phonePrimary}`}
              className="flex items-center gap-1.5 text-white hover:text-emerald-300 transition"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{BRAND_INFO.phoneFormattedPrimary}</span>
            </a>
            <span className="text-blue-300">/</span>
            <a
              href={`tel:${BRAND_INFO.phoneSecondary}`}
              className="text-white hover:text-emerald-300 transition"
            >
              <span>{BRAND_INFO.phoneFormattedSecondary}</span>
            </a>
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 px-2.5 py-1 rounded text-white font-medium transition"
            >
              <MessageSquare className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        aria-label="Main Navigation"
        className={`w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-100"
            : "bg-white py-3.5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Title */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-emerald-500/30 shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
              <Image
                src="/images/logo.jpeg"
                alt="PhysioSphere Advanced Physiotherapy Logo"
                fill
                sizes="(max-width: 768px) 48px, 56px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#003b73] leading-none">
                Physio<span className="text-emerald-600">Sphere</span>
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-slate-500 mt-0.5">
                Advanced Home Physiotherapy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-6 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#0284c7] transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${BRAND_INFO.phonePrimary}`}
              className="hidden xl:flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
            >
              <Phone className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>Call Us</span>
            </a>

            <button
              type="button"
              onClick={onOpenBooking}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#003b73] to-[#0284c7] hover:from-[#002e5a] hover:to-[#0369a1] text-white text-sm font-bold shadow-md shadow-blue-900/20 hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-emerald-300" />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              type="button"
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 text-xs font-bold bg-[#003b73] text-white rounded-lg"
            >
              Book Now
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg hover:bg-slate-50 hover:text-blue-600 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 mt-3 space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#003b73] to-[#0284c7] text-white font-bold text-sm shadow cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span>Book Home Appointment</span>
              </button>

              <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                <a
                  href={`tel:${BRAND_INFO.phonePrimary}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 text-slate-800"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>Call 7675069960</span>
                </a>
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-50 text-emerald-700"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
