"use client";

import React, { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { FAQ_ITEMS, BRAND_INFO } from "@/data/physiosphereData";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 sm:py-20 bg-[#f0f7fd] border-b border-blue-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Questions & Answers
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0a2540] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Clear information about booking, home visits, and physiotherapy care in Hyderabad.
          </p>
        </div>

        {/* Accordion with Cursor Highlighting */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-blue-100/90 shadow-2xs overflow-hidden highlight-card"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer hover:bg-blue-50/40 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-[#0a2540] text-sm sm:text-base leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-blue-50">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Strip with True WhatsApp Symbol */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-blue-100 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <span className="text-slate-700 font-medium text-center sm:text-left">
            Have questions about your specific condition? Contact our clinical team:
          </span>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BRAND_INFO.phonePrimary}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 font-bold text-slate-800 hover:bg-slate-50 transition shadow-2xs"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Call {BRAND_INFO.phonePrimary}</span>
            </a>
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-300 bg-emerald-50 font-bold text-emerald-800 hover:bg-emerald-100 transition shadow-2xs"
            >
              <WhatsAppIcon className="w-4 h-4 fill-emerald-600" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}