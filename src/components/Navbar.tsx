"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, Menu, X, Calendar } from "lucide-react";
import { BRAND_INFO } from "@/data/physiosphereData";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "What is Physio", href: "#what-is-physiotherapy" },
    { name: "Services", href: "#services" },
    { name: "Conditions", href: "#conditions" },
    { name: "Physiotherapists", href: "#physiotherapists" },
    { name: "Locations", href: "#locations" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" }
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200">
      {/* Top Clinical Strip - Desktop Only */}
      <div className="hidden lg:block bg-slate-900 text-slate-300 text-xs py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-slate-200 font-medium">Home Physiotherapy Across Hyderabad</span>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 font-medium">Team of 8 Licensed Physiotherapists</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:${BRAND_INFO.phonePrimary}`} className="hover:text-white transition flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{BRAND_INFO.phoneFormattedPrimary}</span>
            </a>
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition flex items-center gap-1"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav aria-label="Main Navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="#hero" className="flex items-center gap-2.5 flex-shrink-0" onClick={handleLinkClick}>
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-slate-200 flex-shrink-0">
            <Image
              src="/images/logo.jpeg"
              alt="PhysioSphere Logo"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 leading-tight">
              Physio<span className="text-emerald-600">Sphere</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-none">
              Home Physiotherapy • Hyderabad
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-blue-600 transition-colors py-1"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Action CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${BRAND_INFO.phonePrimary}`}
            className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 transition"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600" />
            <span>{BRAND_INFO.phoneFormattedPrimary}</span>
          </a>

          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition cursor-pointer shadow-xs"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Now</span>
          </button>
        </div>

        {/* Mobile Header Buttons */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-3 py-1.5 text-xs font-semibold bg-blue-600 text-white rounded-lg cursor-pointer"
          >
            Book Now
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg transition cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-1 text-sm font-medium text-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="py-2.5 px-3 rounded-md hover:bg-slate-50 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <button
              type="button"
              onClick={() => {
                handleLinkClick();
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 text-white font-semibold text-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <a
                href={`tel:${BRAND_INFO.phonePrimary}`}
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-slate-200 text-slate-800 text-center"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Call {BRAND_INFO.phonePrimary}</span>
              </a>
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-800 text-center"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
