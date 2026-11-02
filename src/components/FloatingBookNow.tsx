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
      {/* Desktop Floating Action Button (Clean, Non-Intrusive) */}
      <aside aria-label="Quick appointment button" className="hidden md:block fixed bottom-6 right-6 z-30">
        <button
          type="button"
          onClick={onOpenBooking}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md transition-colors cursor-pointer border border-blue-500"
          aria-label="Book Home Physiotherapist Appointment"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Home Visit</span>
        </button>
      </aside>

      {/* Mobile Sticky Bottom Bar (High Conversion, Mobile-First) */}
      <nav
        aria-label="Mobile booking action bar"
        className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 shadow-lg px-3 pt-2 pb-2.5 safe-bottom flex items-center justify-between gap-2"
      >
        <a
          href={`tel:${BRAND_INFO.phonePrimary}`}
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-md border border-slate-200 text-slate-700 active:bg-slate-100 text-xs font-semibold"
        >
          <Phone className="w-4 h-4 text-blue-600 mb-0.5" />
          <span>Call</span>
        </a>

        <a
          href={BRAND_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 rounded-md border border-emerald-300 bg-emerald-50 text-emerald-800 active:bg-emerald-100 text-xs font-semibold"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={onOpenBooking}
          className="flex-[2] flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-md bg-blue-600 active:bg-blue-700 text-white font-semibold text-xs cursor-pointer shadow-xs"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </button>
      </nav>
    </>
  );
}
