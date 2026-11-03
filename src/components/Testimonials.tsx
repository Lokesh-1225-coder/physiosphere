"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Info } from "lucide-react";
import { TESTIMONIALS_SAMPLE } from "@/data/physiosphereData";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_SAMPLE.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_SAMPLE.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS_SAMPLE[currentIndex];

  return (
    <section id="testimonials" className="py-14 sm:py-20 bg-[#f0f7fd] border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Patient Feedback
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0a2540] tracking-tight leading-tight">
            Patient Experiences with Home Physiotherapy
          </h2>
        </div>

        {/* Development Disclosure Notice */}
        <div className="mb-8 bg-blue-50/80 border border-blue-200 rounded-xl p-3.5 flex items-start gap-2.5 text-xs text-blue-900 max-w-2xl shadow-2xs">
          <Info className="w-4 h-4 flex-shrink-0 text-blue-600 mt-0.5" />
          <span>Note: The following entries are development sample placeholders to demonstrate the review layout. Actual verified patient feedback will replace these placeholders.</span>
        </div>

        {/* Carousel Container with Cursor Highlighting */}
        <div className="max-w-3xl bg-white rounded-2xl border border-blue-100/90 p-7 sm:p-9 shadow-xs highlight-card">
          <Quote className="w-8 h-8 text-blue-300 mb-4" />

          <p className="text-base sm:text-lg text-slate-800 leading-relaxed italic mb-8">
            &ldquo;{current.quote}&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-5 border-t border-slate-100">
            <div>
              <div className="font-bold text-[#0a2540] text-base">
                {current.name}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-medium">
                {current.location} • <span className="text-blue-600 font-semibold">{current.condition}</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-100">
            <div className="flex gap-2">
              {TESTIMONIALS_SAMPLE.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? "w-8 bg-blue-600" : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="p-2 rounded-xl border border-slate-200 hover:bg-blue-50 hover:border-blue-300 text-slate-700 transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="p-2 rounded-xl border border-slate-200 hover:bg-blue-50 hover:border-blue-300 text-slate-700 transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}