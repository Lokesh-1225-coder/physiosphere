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
    <section id="how-to-book" className="py-14 sm:py-20 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Simple Booking
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0a2540] tracking-tight leading-tight">
            How to Book Physiotherapy at Home
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            A straightforward 4-step process to get professional care started at your doorstep.
          </p>
        </div>

        {/* 4 Steps Grid with Cursor Highlighting */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {HOW_IT_WORKS_STEPS.map((step) => {
            const Icon = iconMap[step.iconName] || Calendar;
            return (
              <div
                key={step.step}
                className="bg-[#f0f7fd] rounded-2xl p-6 border border-blue-100/90 shadow-xs highlight-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-black text-blue-600">
                      Step {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-blue-200 flex items-center justify-center text-blue-600 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#0a2540] mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button & Note - Enlarged Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-blue-100">
          <span className="text-xs sm:text-sm text-slate-600 text-center sm:text-left">
            Appointment availability is confirmed directly by our clinical coordination team.
          </span>
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Home Appointment</span>
          </button>
        </div>

      </div>
    </section>
  );
}