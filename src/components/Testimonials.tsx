"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Info } from "lucide-react";
import { TESTIMONIALS_SAMPLE, TestimonialItem } from "@/data/physiosphereData";

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
    <section id="testimonials" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            Patient Stories
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Patient Experiences with Home Physiotherapy
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            See how home-based rehabilitation helps patients regain comfort and independence.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Development Disclosure Notice */}
        <div className="max-w-2xl mx-auto mb-8 bg-amber-50 border border-amber-200 rounded-xl p-3 flex items-center justify-center gap-2 text-xs text-amber-800">
          <Info className="w-4 h-4 flex-shrink-0 text-amber-600" />
          <span>Notice: The following testimonials are sample development placeholders. Actual patient reviews will be updated upon clinical verification.</span>
        </div>

        {/* Carousel Container */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm relative">
          
          {/* Quote Icon */}
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
            <Quote className="w-6 h-6" />
          </div>

          {/* Testimonial Quote */}
          <blockquote className="text-base sm:text-lg text-slate-700 italic leading-relaxed mb-6">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Author Details & Rating */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
            <div>
              <div className="font-bold text-slate-900 text-base">
                {current.name}
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {current.location} • <span className="text-[#0284c7] font-semibold">{current.condition}</span>
              </div>
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between mt-8 pt-4">
            <div className="flex gap-2">
              {TESTIMONIALS_SAMPLE.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx ? "w-8 bg-[#003b73]" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prevSlide}
                className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
