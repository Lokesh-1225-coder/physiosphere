"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageSquare } from "lucide-react";
import { FAQ_ITEMS, BRAND_INFO } from "@/data/physiosphereData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            Clear Answers
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Everything you need to know about booking and receiving professional physiotherapy at your home in Hyderabad.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Interactive Accordion List */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base pr-2 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "bg-[#003b73] text-white rotate-180" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 mt-1 animate-in fade-in duration-200">
                    <p className="pt-3">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more clarification strip */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 text-center space-y-3">
          <h4 className="text-sm font-bold text-slate-900">
            Have a question specific to your medical condition?
          </h4>
          <p className="text-xs text-slate-500">
            Our team is happy to discuss your symptoms and help you decide the right care plan.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <a
              href={`tel:${BRAND_INFO.phonePrimary}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>Call: {BRAND_INFO.phoneFormattedPrimary}</span>
            </a>
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
