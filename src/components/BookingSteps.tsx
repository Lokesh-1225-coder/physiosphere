"use client";

import React from "react";
import {
  Calendar,
  PhoneCall,
  UserCheck,
  Home,
  ArrowRight,
  ShieldCheck
} from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/data/physiosphereData";

interface BookingStepsProps {
  onOpenBooking: () => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Calendar,
  PhoneCall,
  UserCog: UserCheck,
  Home
};

export default function BookingSteps({ onOpenBooking }: BookingStepsProps) {
  return (
    <section id="how-to-book" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            Simple 4-Step Process
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            How to Book Physiotherapy at Home
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Experience hassle-free scheduling in just a few minutes without upfront digital payment hurdles.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full" />
        </div>

        {/* 4 Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {HOW_IT_WORKS_STEPS.map((step, idx) => {
            const Icon = iconMap[step.iconName] || Calendar;
            return (
              <div
                key={step.step}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#003b73] group-hover:text-[#0284c7] transition-colors">
                      {step.step}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#0284c7] shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Step Connector Indicator for larger screens */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA & Note */}
        <div className="mt-12 text-center space-y-4">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#003b73] to-[#0284c7] hover:from-[#002b54] hover:to-[#0369a1] text-white font-bold text-sm shadow-md hover:shadow-xl transition cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-emerald-300" />
            <span>Book Your Home Session Now</span>
          </button>
          
          <p className="text-xs text-slate-500 max-w-lg mx-auto flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Zero pre-payment required. Availability is directly confirmed by our clinical coordination team.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
