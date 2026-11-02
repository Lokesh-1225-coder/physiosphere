"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageSquare, Mail, MapPin } from "lucide-react";
import { BRAND_INFO, SERVICE_CATEGORIES, CONDITIONS_TREATED } from "@/data/physiosphereData";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand & Description */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-700 flex-shrink-0">
                <Image
                  src="/images/logo.jpeg"
                  alt="PhysioSphere Logo"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Physio<span className="text-emerald-400">Sphere</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              PhysioSphere provides professional home physiotherapy services across Hyderabad. Led by Dr. Venu (B.P.T) with a coordinated team of 8 licensed physiotherapists, we make personalized rehabilitation accessible directly at your doorstep.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <a href={`tel:${BRAND_INFO.phonePrimary}`} className="text-white hover:underline">{BRAND_INFO.phoneFormattedPrimary}</a>
                <span>/</span>
                <a href={`tel:${BRAND_INFO.phoneSecondary}`} className="text-white hover:underline">{BRAND_INFO.phoneFormattedSecondary}</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <a href={BRAND_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                  WhatsApp: +91 {BRAND_INFO.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href={`mailto:${BRAND_INFO.emailPrimary}`} className="hover:underline">{BRAND_INFO.emailPrimary}</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li><a href="#hero" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#what-is-physiotherapy" className="hover:text-white transition">What is Physiotherapy?</a></li>
              <li><a href="#home-physiotherapy" className="hover:text-white transition">Treatment at Home</a></li>
              <li><a href="#benefits" className="hover:text-white transition">Benefits</a></li>
              <li><a href="#physiotherapists" className="hover:text-white transition">Our Physiotherapists</a></li>
              <li><a href="#locations" className="hover:text-white transition">Locations in Hyderabad</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQs</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 4: Services */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {SERVICE_CATEGORIES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition">{s.title}</a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="text-blue-400 hover:text-blue-300 font-semibold cursor-pointer"
                >
                  Book a Consultation →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Conditions */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Conditions
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              {CONDITIONS_TREATED.slice(0, 7).map((c) => (
                <li key={c.id}>
                  <a href="#conditions" className="hover:text-white transition">{c.name}</a>
                </li>
              ))}
              <li>
                <a href="#conditions" className="text-blue-400 hover:text-blue-300 font-semibold">
                  View All 16 Conditions →
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="py-5 text-xs text-slate-400 leading-relaxed border-b border-slate-800">
          <strong className="text-slate-300">Medical Disclaimer:</strong> Information on this website is for educational and appointment coordination purposes only. It should not replace professional medical evaluation or clinical advice. PhysioSphere provides home physiotherapy visits across designated neighborhoods in Hyderabad; individual outcomes vary according to patient condition and compliance.
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div>
            © {currentYear} PhysioSphere. All rights reserved.
          </div>
          <div>
            Doorstep Home Physiotherapy Across Hyderabad, Telangana
          </div>
        </div>

      </div>
    </footer>
  );
}
