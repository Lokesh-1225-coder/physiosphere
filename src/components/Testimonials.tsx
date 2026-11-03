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
    <section id="testimonials" className="py-8 sm:py-14 bg-[#f0f7fd] border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-5 sm:mb-7 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            Patient Feedback
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight leading-tight">
            Patient Experiences
          </h2>
        </div>

        {/* Development Disclosure Notice */}
        <div className="mb-5 bg-blue-50/80 border border-blue-200 rounded-xl p-3 flex items-start gap-2 text-xs text-blue-900 max-w-2xl shadow-2xs">
          <Info className="w-3.5 h-3.5 flex-shrink-0 text-blue-600 mt-0.5" />
          <span>Development sample placeholders demonstrating feedback layout.</span>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl bg-white rounded-xl border border-blue-100 p-4 sm:p-7 shadow-2xs highlight-card">
          <Quote className="w-6 h-6 text-blue-300 mb-2 sm:mb-3" />

          <p className="text-sm sm:text-base text-slate-800 leading-relaxed italic mb-4 sm:mb-6">
            &ldquo;{current.quote}&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-3 border-t border-slate-100">
            <div>
              <div className="font-bold text-[#0a2540] text-sm sm:text-base">
                {current.name}
              </div>
              <div className="text-xs text-slate-500 font-medium">
                {current.location} • <span className="text-blue-600 font-semibold">{current.condition}</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          {/* Controls with accessible touch targets (44px) */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100">
            <div className="flex gap-1.5">
              {TESTIMONIALS_SAMPLE.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? "w-6 bg-blue-600" : "w-2 bg-slate-200"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 hover:bg-blue-50 text-slate-700 transition active:bg-blue-100 cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-slate-200 hover:bg-blue-50 text-slate-700 transition active:bg-blue-100 cursor-pointer"
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