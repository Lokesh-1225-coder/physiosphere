"use client";

import React from "react";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Calendar,
  Clock,
  ShieldCheck
} from "lucide-react";
import { BRAND_INFO } from "@/data/physiosphereData";

interface ContactProps {
  onOpenBooking: () => void;
}

export default function Contact({ onOpenBooking }: ContactProps) {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            Direct Communication
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Connect with PhysioSphere
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We are here to assist with home appointments, consultation inquiries, and therapist coordination across Hyderabad.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full" />
        </div>

        {/* 3 Prominent Contact Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          
          {/* Action 1: WhatsApp Us */}
          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">WhatsApp Us</h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                Fastest way to get details, send prescriptions, or share location landmarks.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between font-bold text-sm">
              <span>Chat at +91 7675069960</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>

          {/* Action 2: Call Now */}
          <a
            href={`tel:${BRAND_INFO.phonePrimary}`}
            className="group bg-gradient-to-br from-[#003b73] to-[#0284c7] text-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Direct</h3>
              <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
                Speak directly with clinical coordination regarding therapist visits and schedules.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20 flex items-center justify-between font-bold text-sm">
              <span>{BRAND_INFO.phoneFormattedPrimary}</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </a>

          {/* Action 3: Book Appointment Modal */}
          <button
            type="button"
            onClick={onOpenBooking}
            className="group bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex flex-col justify-between text-left cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold mb-2">Book Appointment</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Fill our 1-minute doorstep consultation form with your condition and preferred timings.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-bold text-sm text-emerald-400">
              <span>Open Booking Request</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </button>

        </div>

        {/* Detailed Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80">
          
          {/* Phone Numbers */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              <Phone className="w-4 h-4 text-[#0284c7]" /> Contact Numbers
            </div>
            <div className="text-sm font-bold text-slate-900">
              <a href={`tel:${BRAND_INFO.phonePrimary}`} className="hover:text-blue-600 block">
                {BRAND_INFO.phoneFormattedPrimary}
              </a>
              <a href={`tel:${BRAND_INFO.phoneSecondary}`} className="hover:text-blue-600 block mt-1">
                {BRAND_INFO.phoneFormattedSecondary}
              </a>
            </div>
            <div className="text-xs text-slate-500 pt-1">Primary & Secondary Lines</div>
          </div>

          {/* WhatsApp */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              <MessageSquare className="w-4 h-4 text-emerald-600" /> WhatsApp Support
            </div>
            <div className="text-sm font-bold text-slate-900">
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-600"
              >
                +91 {BRAND_INFO.whatsapp}
              </a>
            </div>
            <div className="text-xs text-slate-500 pt-1">Instant messaging & report reviews</div>
          </div>

          {/* Emails */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              <Mail className="w-4 h-4 text-indigo-600" /> Official Email
            </div>
            <div className="text-xs sm:text-sm font-semibold text-slate-900 break-words">
              <a href={`mailto:${BRAND_INFO.emailPrimary}`} className="hover:text-blue-600 block truncate">
                {BRAND_INFO.emailPrimary}
              </a>
              <a href={`mailto:${BRAND_INFO.emailDoctor}`} className="hover:text-blue-600 block mt-1 truncate">
                {BRAND_INFO.emailDoctor}
              </a>
            </div>
            <div className="text-xs text-slate-500 pt-1">Official & Doctor inquiries</div>
          </div>

          {/* Operating Coverage */}
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              <MapPin className="w-4 h-4 text-rose-600" /> Service Location
            </div>
            <div className="text-sm font-bold text-slate-900">
              Hyderabad, Telangana
            </div>
            <div className="text-xs text-slate-500 pt-1">
              Doorstep visits across all 5 zones with our team of 8 therapists
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
