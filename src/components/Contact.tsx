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
    <section id="contact" className="py-8 sm:py-14 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-8 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            Get in Touch
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight leading-tight">
            Contact PhysioSphere
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1">
            Direct coordination for home physiotherapy bookings and questions.
          </p>
        </div>

        {/* 3 Prominent Mobile-First Action Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5 mb-8">
          
          {/* Action 1: WhatsApp */}
          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 sm:p-5 rounded-xl border border-emerald-300 bg-emerald-50/50 hover:bg-emerald-50 active:bg-emerald-100 shadow-2xs highlight-card transition flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-3">
                <WhatsAppIcon className="w-5 h-5 fill-white" />
              </div>
              <h3 className="text-base font-bold text-[#0a2540] mb-1">WhatsApp Us</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fastest way to send reports, prescription photos, or address landmarks.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-200 text-xs sm:text-sm font-bold text-emerald-800 flex items-center justify-between">
              <span>Message +91 {BRAND_INFO.whatsapp}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

          {/* Action 2: Call Now */}
          <a
            href={`tel:${BRAND_INFO.phonePrimary}`}
            className="p-4 sm:p-5 rounded-xl border border-blue-200 bg-blue-50/50 hover:bg-blue-50 active:bg-blue-100 shadow-2xs highlight-card transition flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-3">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0a2540] mb-1">Call Directly</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Speak directly with clinical coordination regarding slot availability.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-200 text-xs sm:text-sm font-bold text-blue-800 flex items-center justify-between">
              <span>Call {BRAND_INFO.phoneFormattedPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>

          {/* Action 3: Book Online */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="p-4 sm:p-5 rounded-xl border border-[#0a2540] bg-[#0a2540] text-white hover:bg-[#0c2f52] active:bg-slate-900 shadow-2xs highlight-card transition flex flex-col justify-between text-left cursor-pointer"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-white/20 text-white flex items-center justify-center mb-3">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Book Online</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Submit patient details to schedule a home assessment.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/20 text-xs sm:text-sm font-bold text-emerald-400 flex items-center justify-between">
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>

        </div>

        {/* Minimal Details Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-4 sm:p-5 rounded-xl bg-[#f0f7fd] border border-blue-100 shadow-2xs text-xs">
          <div>
            <div className="font-bold text-[#0a2540] flex items-center gap-1.5 mb-1">
              <Phone className="w-3.5 h-3.5 text-blue-600" /> Phones
            </div>
            <div className="space-y-0.5 text-slate-600">
              <div><a href={`tel:${BRAND_INFO.phonePrimary}`} className="text-slate-900 font-bold">{BRAND_INFO.phoneFormattedPrimary}</a></div>
              <div><a href={`tel:${BRAND_INFO.phoneSecondary}`} className="text-slate-900 font-bold">{BRAND_INFO.phoneFormattedSecondary}</a></div>
            </div>
          </div>

          <div>
            <div className="font-bold text-[#0a2540] flex items-center gap-1.5 mb-1">
              <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600" /> WhatsApp
            </div>
            <div className="text-slate-600">
              <a href={BRAND_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold hover:underline">
                +91 {BRAND_INFO.whatsapp}
              </a>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <div className="font-bold text-[#0a2540] flex items-center gap-1.5 mb-1">
              <Mail className="w-3.5 h-3.5 text-blue-600" /> Email
            </div>
            <div className="text-slate-600 truncate">
              <a href={`mailto:${BRAND_INFO.emailPrimary}`} className="hover:underline">{BRAND_INFO.emailPrimary}</a>
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <div className="font-bold text-[#0a2540] flex items-center gap-1.5 mb-1">
              <MapPin className="w-3.5 h-3.5 text-blue-600" /> City & Hours
            </div>
            <div className="text-slate-700 font-medium">
              <div>Hyderabad, Telangana</div>
              <div className="text-[11px] text-emerald-700 font-bold mt-0.5">Mon-Sun: 9:00am - 9:00pm</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}