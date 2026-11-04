"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { BRAND_INFO, SERVICE_CATEGORIES, CONDITIONS_TREATED } from "@/data/physiosphereData";
import WhatsAppIcon from "@/components/WhatsAppIcon";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const currentYear = 2026;

  return (
    <footer className="bg-[#0a192f] text-slate-300 pt-10 pb-24 md:pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 pb-8 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-blue-400/40 flex-shrink-0 shadow-md">
                <Image
                  src="/images/logo.jpeg"
                  alt="PhysioSphere Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Physio<span className="text-emerald-400">Sphere</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Doorstep home physiotherapy across Hyderabad. Team of 30+ licensed physiotherapists delivering personalized rehabilitation for pain relief, surgery recovery, and elderly mobility.
            </p>

            <div className="space-y-1.5 text-xs text-slate-300 pt-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
                <a href={`tel:${BRAND_INFO.phonePrimary}`} className="text-white hover:underline font-semibold">{BRAND_INFO.phoneFormattedPrimary}</a>
              </div>
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-400 flex-shrink-0" />
                <a href={BRAND_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline font-semibold">
                  WhatsApp: +91 {BRAND_INFO.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                <a href={`mailto:${BRAND_INFO.emailPrimary}`} className="hover:underline">{BRAND_INFO.emailPrimary}</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="pt-1 text-[11px] font-semibold text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>Opening Hours: Mon-Sun: 9:00am - 9:00pm</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#hero" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#conditions" className="hover:text-blue-400 transition-colors">Conditions Treated</a></li>
              <li><a href="#our-team" className="hover:text-blue-400 transition-colors">Our Team</a></li>
              <li><a href="#locations" className="hover:text-blue-400 transition-colors">Hyderabad Locations</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Disciplines
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {SERVICE_CATEGORIES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-blue-400 transition-colors">{s.title}</a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="text-emerald-400 hover:text-emerald-300 font-bold cursor-pointer"
                >
                  Book Consultation →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Conditions */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Conditions
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {CONDITIONS_TREATED.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <a href="#conditions" className="hover:text-blue-400 transition-colors">{c.name}</a>
                </li>
              ))}
              <li>
                <a href="#conditions" className="text-blue-400 hover:text-blue-300 font-bold">
                  View All Conditions →
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer & Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2 text-center sm:text-left">
          <div>
            © {currentYear} PhysioSphere. All rights reserved.
          </div>
          <div>
            Doorstep Home Physiotherapy Across Hyderabad
          </div>
        </div>

      </div>
    </footer>
  );
}