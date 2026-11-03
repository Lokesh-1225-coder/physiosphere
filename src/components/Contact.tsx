"use client";

import React from "react";
import { Phone, Mail, MapPin, Calendar, ArrowRight } from "lucide-react";
import { BRAND_INFO } from "@/data/physiosphereData";
import WhatsAppIcon from "@/components/WhatsAppIcon";

interface ContactProps {
  onOpenBooking: () => void;
}

export default function Contact({ onOpenBooking }: ContactProps) {
  return (
    <section id="contact" className="py-14 sm:py-20 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Get in Touch
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0a2540] tracking-tight leading-tight">
            Contact PhysioSphere
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Reach out directly for home physiotherapy bookings, scheduling inquiries, and consultations.
          </p>
        </div>

        {/* 3 Prominent Actions with Cursor Highlighting */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Action 1: WhatsApp */}
          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 sm:p-7 rounded-2xl border border-emerald-300 bg-emerald-50/50 hover:bg-emerald-50 shadow-xs highlight-card transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                <WhatsAppIcon className="w-6 h-6 fill-white" />
              </div>
              <h3 className="text-lg font-bold text-[#0a2540] mb-1.5">WhatsApp Us</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Fastest way to send inquiries, doctor discharge summaries, or address landmarks.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-200 text-sm font-bold text-emerald-800 flex items-center gap-1.5">
              <span>Message +91 {BRAND_INFO.whatsapp}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

          {/* Action 2: Call Now */}
          <a
            href={`tel:${BRAND_INFO.phonePrimary}`}
            className="p-6 sm:p-7 rounded-2xl border border-blue-200 bg-blue-50/50 hover:bg-blue-50 shadow-xs highlight-card transition-all flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0a2540] mb-1.5">Call Us Directly</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Speak directly with clinical coordination regarding appointment slots and therapists.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-blue-200 text-sm font-bold text-blue-800 flex items-center gap-1.5">
              <span>Call {BRAND_INFO.phoneFormattedPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

          {/* Action 3: Book Online - Increased Size */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="p-6 sm:p-7 rounded-2xl border border-[#0a2540] bg-[#0a2540] text-white hover:bg-[#0c2f52] shadow-md highlight-card transition-all flex flex-col justify-between text-left cursor-pointer group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1.5">Book Appointment Online</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Submit your contact details and condition to schedule a verified home session.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20 text-sm font-bold text-emerald-400 flex items-center gap-1.5">
              <span>Open Interactive Booking Form</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>

        </div>

        {/* Contact Details Grid with Light Blue Section Styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-6 sm:p-7 rounded-2xl bg-[#f0f7fd] border border-blue-100 shadow-2xs text-xs sm:text-sm highlight-card">
          <div>
            <div className="font-bold text-[#0a2540] text-base flex items-center gap-2 mb-2">
              <Phone className="w-4 h-4 text-blue-600" /> Phone Numbers
            </div>
            <div className="space-y-1 text-slate-600">
              <div>Primary: <a href={`tel:${BRAND_INFO.phonePrimary}`} className="text-slate-900 font-bold hover:text-blue-600">{BRAND_INFO.phoneFormattedPrimary}</a></div>
              <div>Secondary: <a href={`tel:${BRAND_INFO.phoneSecondary}`} className="text-slate-900 font-bold hover:text-blue-600">{BRAND_INFO.phoneFormattedSecondary}</a></div>
            </div>
          </div>

          <div>
            <div className="font-bold text-[#0a2540] text-base flex items-center gap-2 mb-2">
              <WhatsAppIcon className="w-4 h-4 fill-emerald-600" /> WhatsApp Direct
            </div>
            <div className="text-slate-600">
              <a href={BRAND_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                +91 {BRAND_INFO.whatsapp}
              </a>
              <div className="text-xs text-slate-500 mt-0.5">Quick inquiries & reports</div>
            </div>
          </div>

          <div>
            <div className="font-bold text-[#0a2540] text-base flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4 text-blue-600" /> Email Addresses
            </div>
            <div className="space-y-1 text-slate-600 truncate">
              <div><a href={`mailto:${BRAND_INFO.emailPrimary}`} className="hover:underline font-semibold text-slate-800">{BRAND_INFO.emailPrimary}</a></div>
              <div><a href={`mailto:${BRAND_INFO.emailDoctor}`} className="hover:underline font-semibold text-slate-800">{BRAND_INFO.emailDoctor}</a></div>
            </div>
          </div>

          <div>
            <div className="font-bold text-[#0a2540] text-base flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-blue-600" /> Operating City
            </div>
            <div className="text-slate-700 font-medium leading-relaxed">
              Hyderabad, Telangana, India
              <div className="text-xs text-slate-500">Zonal doorstep home coverage</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}