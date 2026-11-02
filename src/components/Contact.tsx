"use client";

import React from "react";
import { Phone, MessageSquare, Mail, MapPin, Calendar } from "lucide-react";
import { BRAND_INFO } from "@/data/physiosphereData";

interface ContactProps {
  onOpenBooking: () => void;
}

export default function Contact({ onOpenBooking }: ContactProps) {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
            Get in Touch
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Contact PhysioSphere
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Reach out directly for home physiotherapy bookings, scheduling inquiries, and consultations.
          </p>
        </div>

        {/* 3 Prominent Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          
          {/* Action 1: WhatsApp */}
          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-lg border border-emerald-300 bg-emerald-50/50 hover:bg-emerald-50 transition flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-md bg-emerald-600 text-white flex items-center justify-center mb-3">
                <MessageSquare className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">WhatsApp Us</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fastest way to send inquiries, medical reports, or address landmarks.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-200 text-xs font-bold text-emerald-800">
              Message +91 {BRAND_INFO.whatsapp} →
            </div>
          </a>

          {/* Action 2: Call Now */}
          <a
            href={`tel:${BRAND_INFO.phonePrimary}`}
            className="p-5 rounded-lg border border-blue-300 bg-blue-50/50 hover:bg-blue-50 transition flex flex-col justify-between"
          >
            <div>
              <div className="w-9 h-9 rounded-md bg-blue-600 text-white flex items-center justify-center mb-3">
                <Phone className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Call Us Directly</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Speak directly with clinical coordination regarding appointment slots.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-200 text-xs font-bold text-blue-800">
              Call {BRAND_INFO.phoneFormattedPrimary} →
            </div>
          </a>

          {/* Action 3: Book Consultation */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="p-5 rounded-lg border border-slate-300 bg-slate-900 text-white hover:bg-slate-800 transition flex flex-col justify-between text-left cursor-pointer"
          >
            <div>
              <div className="w-9 h-9 rounded-md bg-white/20 text-white flex items-center justify-center mb-3">
                <Calendar className="w-4 h-4" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Book Online</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Submit your contact details and condition to request a home visit.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/20 text-xs font-bold text-emerald-400">
              Open Booking Form →
            </div>
          </button>

        </div>

        {/* Contact Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
          <div>
            <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1.5">
              <Phone className="w-3.5 h-3.5 text-blue-600" /> Phone Numbers
            </div>
            <div className="space-y-0.5 text-slate-600">
              <div>Primary: <a href={`tel:${BRAND_INFO.phonePrimary}`} className="text-slate-900 font-semibold">{BRAND_INFO.phoneFormattedPrimary}</a></div>
              <div>Secondary: <a href={`tel:${BRAND_INFO.phoneSecondary}`} className="text-slate-900 font-semibold">{BRAND_INFO.phoneFormattedSecondary}</a></div>
            </div>
          </div>

          <div>
            <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp
            </div>
            <div className="text-slate-600">
              <a href={BRAND_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-semibold">
                +91 {BRAND_INFO.whatsapp}
              </a>
            </div>
          </div>

          <div>
            <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1.5">
              <Mail className="w-3.5 h-3.5 text-blue-600" /> Email Addresses
            </div>
            <div className="space-y-0.5 text-slate-600 truncate">
              <div><a href={`mailto:${BRAND_INFO.emailPrimary}`} className="hover:underline">{BRAND_INFO.emailPrimary}</a></div>
              <div><a href={`mailto:${BRAND_INFO.emailDoctor}`} className="hover:underline">{BRAND_INFO.emailDoctor}</a></div>
            </div>
          </div>

          <div>
            <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1.5">
              <MapPin className="w-3.5 h-3.5 text-blue-600" /> Operating City
            </div>
            <div className="text-slate-600">
              Hyderabad, Telangana, India
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
