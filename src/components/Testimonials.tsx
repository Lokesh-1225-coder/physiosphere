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
    <section id="testimonials" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
            Patient Feedback
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Patient Experiences with Home Physiotherapy
          </h2>
        </div>

        {/* Development Disclosure Notice */}
        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-md p-3 flex items-start gap-2.5 text-xs text-blue-900 max-w-2xl">
          <Info className="w-4 h-4 flex-shrink-0 text-blue-600 mt-0.5" />
          <span>Note: The following entries are development sample placeholders to demonstrate the review layout. Actual verified patient feedback will replace these placeholders.</span>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl bg-white rounded-xl border border-slate-200 p-6 sm:p-8">
          <Quote className="w-6 h-6 text-slate-300 mb-4" />

          <p className="text-sm sm:text-base text-slate-800 leading-relaxed italic mb-6">
            &ldquo;{current.quote}&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-slate-100">
            <div>
              <div className="font-bold text-slate-900 text-sm">
                {current.name}
              </div>
              <div className="text-xs text-slate-500">
                {current.location} • <span className="text-blue-600 font-medium">{current.condition}</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
            <div className="flex gap-1.5">
              {TESTIMONIALS_SAMPLE.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? "w-6 bg-blue-600" : "w-1.5 bg-slate-200"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevSlide}
                className="p-1.5 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700 transition cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="p-1.5 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700 transition cursor-pointer"
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
