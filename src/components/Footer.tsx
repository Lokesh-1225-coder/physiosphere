"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, Mail, MapPin, Heart, Shield } from "lucide-react";
import { BRAND_INFO, SERVICE_CATEGORIES, CONDITIONS_TREATED } from "@/data/physiosphereData";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-24 md:pb-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-500 shadow-sm flex-shrink-0">
                <Image
                  src="/images/logo.jpeg"
                  alt="PhysioSphere Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tight leading-none">
                  Physio<span className="text-emerald-400">Sphere</span>
                </span>
                <span className="text-xs uppercase font-semibold text-slate-400 tracking-wider mt-0.5">
                  Advanced Home Physiotherapy
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              PhysioSphere brings specialized, evidence-based home physiotherapy to patients across Hyderabad. With a dedicated team of 8 physiotherapists led by Dr. Venu, we make recovery convenient, dignified, and comfortable right at your doorstep.
            </p>

            {/* Direct Contact Badges */}
            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <a href={`tel:${BRAND_INFO.phonePrimary}`} className="text-white hover:text-blue-300 transition font-semibold">
                  {BRAND_INFO.phoneFormattedPrimary}
                </a>
                <span className="text-slate-600">|</span>
                <a href={`tel:${BRAND_INFO.phoneSecondary}`} className="text-white hover:text-blue-300 transition font-semibold">
                  {BRAND_INFO.phoneFormattedSecondary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition font-semibold"
                >
                  WhatsApp: +91 {BRAND_INFO.whatsapp}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <a href={`mailto:${BRAND_INFO.emailPrimary}`} className="hover:text-white transition">
                  {BRAND_INFO.emailPrimary}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>Primary Coverage: Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#hero" className="hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">About Us</a>
              </li>
              <li>
                <a href="#what-is-physiotherapy" className="hover:text-white transition">What is Physiotherapy?</a>
              </li>
              <li>
                <a href="#home-physiotherapy" className="hover:text-white transition">Home Care Experience</a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition">Benefits of Home Care</a>
              </li>
              <li>
                <a href="#physiotherapists" className="hover:text-white transition">Meet Our Physiotherapists</a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition">Hyderabad Locations</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">Frequently Asked Questions</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialties */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICE_CATEGORIES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition">
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer pt-1"
                >
                  + Book a Specialty Visit
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Conditions We Treat */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Conditions We Treat
            </h4>
            <ul className="space-y-2 text-xs">
              {CONDITIONS_TREATED.slice(0, 7).map((c) => (
                <li key={c.id}>
                  <a href="#conditions" className="hover:text-white transition">
                    {c.name}
                  </a>
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

        {/* Disclaimer & Transparency Note */}
        <div className="py-6 text-xs text-slate-500 leading-relaxed border-b border-slate-800">
          <p>
            <strong>Medical Disclaimer:</strong> The information provided on this website is for educational and appointment coordination purposes only and should not be used as a substitute for professional medical diagnosis or clinical advice. PhysioSphere does not make guarantees of specific clinical recovery times, as physical healing depends on individual patient compliance, underlying pathology, and physician recommendations. PhysioSphere operates as a doorstep home-service provider across designated areas in Hyderabad.
          </p>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {currentYear} PhysioSphere. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Primary Contact: +91 7675069960</span>
            <span>•</span>
            <a href={`mailto:${BRAND_INFO.emailPrimary}`} className="hover:text-white transition">
              {BRAND_INFO.emailPrimary}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
