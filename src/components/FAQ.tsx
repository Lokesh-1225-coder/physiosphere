"use client";

import React, { useState } from "react";
import { ChevronDown, Phone, MessageSquare } from "lucide-react";
import { FAQ_ITEMS, BRAND_INFO } from "@/data/physiosphereData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
            Questions & Answers
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Clear information about booking, home visits, and physiotherapy care in Hyderabad.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-lg border border-slate-200 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 text-xs sm:text-sm leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 flex-shrink-0 transition-transform ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Strip */}
        <div className="mt-8 p-4 rounded-lg bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-slate-600 text-center sm:text-left">
            Have questions about your specific condition? Contact our clinical team:
          </span>
          <div className="flex items-center gap-2">
            <a
              href={`tel:${BRAND_INFO.phonePrimary}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 font-semibold text-slate-800 hover:bg-slate-50 transition"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Call {BRAND_INFO.phonePrimary}</span>
            </a>
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-emerald-300 bg-emerald-50 font-semibold text-emerald-800 hover:bg-emerald-100 transition"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
