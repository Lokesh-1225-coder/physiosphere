"use client";

import React from "react";
import { Calendar, Phone } from "lucide-react";
import { BRAND_INFO } from "@/data/physiosphereData";
import WhatsAppIcon from "@/components/WhatsAppIcon";

interface FloatingBookNowProps {
  onOpenBooking: () => void;
}

export default function FloatingBookNow({ onOpenBooking }: FloatingBookNowProps) {
  return (
    <>
      {/* Desktop Floating Action Button (Enlarged, High Visibility) */}
      <aside aria-label="Quick appointment button" className="hidden md:block fixed bottom-8 right-8 z-30">
        <button
          type="button"
          onClick={onOpenBooking}
          className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer border border-blue-400 group"
          aria-label="Book Home Physiotherapist Appointment"
        >
          <Calendar className="w-5 h-5 group-hover:rotate-6 transition-transform" />
          <span>Book Home Visit</span>
        </button>
      </aside>

      {/* Mobile Sticky Bottom Bar (High Conversion, Mobile-First) */}
      <nav
        aria-label="Mobile booking action bar"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-blue-100 shadow-2xl px-3 pt-2.5 pb-3 safe-bottom flex items-center justify-between gap-2.5"
      >
        <a
          href={`tel:${BRAND_INFO.phonePrimary}`}
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl border border-slate-200 text-slate-800 active:bg-slate-100 text-xs font-bold transition-colors"
        >
          <Phone className="w-4 h-4 text-blue-600 mb-0.5" />
          <span>Call</span>
        </a>

        <a
          href={BRAND_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 active:bg-emerald-100 text-xs font-bold transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4 fill-emerald-600 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-[2] flex items-center justify-center gap-2 py-3 px-3.5 rounded-xl bg-blue-600 active:bg-blue-700 text-white font-bold text-xs sm:text-sm cursor-pointer shadow-md"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Now</span>
        </button>
      </nav>
    </>
  );
}