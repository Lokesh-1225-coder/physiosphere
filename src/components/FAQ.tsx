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
    <section id="faq" className="py-8 sm:py-14 bg-[#f0f7fd] border-b border-blue-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-5 sm:mb-7 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            Questions & Answers
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1">
            Information about home visits, booking, and treatment across Hyderabad.
          </p>
        </div>

        {/* Accordion with Touch-Friendly Items */}
        <div className="space-y-2.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-blue-100 shadow-2xs overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full min-h-[48px] text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 cursor-pointer hover:bg-blue-50/40 active:bg-blue-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-[#0a2540] text-xs sm:text-sm leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-3.5 pb-3.5 sm:px-4 sm:pb-4 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-blue-50">
                    <p className="pt-2">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Minimal Support Strip with WhatsApp and Phone */}
        <div className="mt-6 p-4 rounded-xl bg-white border border-blue-100 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
          <span className="text-slate-700 font-medium text-center sm:text-left">
            Have questions about your condition? Contact us:
          </span>
          <div className="grid grid-cols-2 gap-2 w-full sm:w-auto">
            <a
              href={`tel:${BRAND_INFO.phonePrimary}`}
              className="min-h-[40px] inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-slate-200 font-bold text-slate-800 hover:bg-slate-50 active:bg-slate-100 transition text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Call Us</span>
            </a>
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[40px] inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-emerald-300 bg-emerald-50 font-bold text-emerald-800 hover:bg-emerald-100 active:bg-emerald-200 transition text-xs"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 fill-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}