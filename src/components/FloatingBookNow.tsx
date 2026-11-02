"use client";

import React from "react";
import { Calendar, Phone, MessageSquare } from "lucide-react";
import { BRAND_INFO } from "@/data/physiosphereData";

interface FloatingBookNowProps {
  onOpenBooking: () => void;
}

export default function FloatingBookNow({ onOpenBooking }: FloatingBookNowProps) {
  return (
    <>
      {/* Desktop Floating Action Widget (bottom-right) */}
      <aside aria-label="Quick appointment and contact options" className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5">
        {/* Quick WhatsApp pill */}
        <a
          href={BRAND_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-white text-emerald-600 shadow-md hover:shadow-lg border border-emerald-100 hover:border-emerald-200 transition-all transform hover:-translate-y-0.5 group text-xs font-semibold"
          aria-label="WhatsApp PhysioSphere"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
          <MessageSquare className="w-4 h-4 fill-emerald-500 text-white" />
          <span>Chat on WhatsApp</span>
        </a>

        {/* Main Floating Book Now Button */}
        <button
          type="button"
          onClick={onOpenBooking}
          className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-[#003b73] to-[#0284c7] hover:from-[#002b54] hover:to-[#0369a1] text-white shadow-xl shadow-blue-900/30 hover:shadow-blue-900/40 border border-blue-400/30 transition-all transform hover:scale-105 cursor-pointer font-bold tracking-wide group"
          aria-label="Book Home Physiotherapist Appointment"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <Calendar className="w-5 h-5 text-emerald-300 group-hover:rotate-12 transition-transform" />
          <span>Book Home Visit</span>
        </button>
      </aside>

      {/* Mobile Sticky Bottom Bar */}
      <nav aria-label="Mobile booking action bar" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl px-3 py-2.5 flex items-center justify-between gap-2 safe-bottom">
        <a
          href={`tel:${BRAND_INFO.phonePrimary}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 active:bg-slate-100 text-xs font-medium"
        >
          <Phone className="w-4 h-4 text-blue-600 mb-0.5" />
          <span>Call</span>
        </a>

        <a
          href={BRAND_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 active:bg-emerald-100 text-xs font-medium"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-[2] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#003b73] to-[#0284c7] text-white font-bold text-xs shadow-md shadow-blue-900/20 active:opacity-95"
        >
          <Calendar className="w-4 h-4 text-emerald-300" />
          <span>Book Now</span>
        </button>
      </nav>
    </>
  );
}
