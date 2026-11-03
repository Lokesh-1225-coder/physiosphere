"use client";

import React from "react";
import {
  Calendar,
  PhoneCall,
  UserCheck,
  Home
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
    <section id="how-to-book" className="py-8 sm:py-14 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-8 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            Easy Booking
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight leading-tight">
            How to Book Physiotherapy at Home
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1">
            A simple 4-step process to get professional care started at your doorstep.
          </p>
        </div>

        {/* 4 Steps Grid: 2-col on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-6 sm:mb-8">
          {HOW_IT_WORKS_STEPS.map((step) => {
            const Icon = iconMap[step.iconName] || Calendar;
            return (
              <div
                key={step.step}
                className="bg-[#f0f7fd] rounded-xl p-3 sm:p-5 border border-blue-100 shadow-2xs highlight-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <span className="text-sm sm:text-base font-black text-blue-600">
                      Step {step.step}
                    </span>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white border border-blue-200 flex items-center justify-center text-blue-600">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-[#0a2540] mb-1 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button & Note */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-100">
          <span className="text-xs text-slate-500 text-center sm:text-left">
            Appointment availability confirmed immediately by our coordination team.
          </span>
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs sm:text-sm shadow-2xs transition cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Home Appointment</span>
          </button>
        </div>

      </div>
    </section>
  );
}