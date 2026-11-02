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
    <section id="how-to-book" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
            Simple Booking
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            How to Book Physiotherapy at Home
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            A straightforward 4-step process to get professional care started at your doorstep.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {HOW_IT_WORKS_STEPS.map((step) => {
            const Icon = iconMap[step.iconName] || Calendar;
            return (
              <div
                key={step.step}
                className="bg-slate-50 rounded-lg p-5 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-blue-600">
                      Step {step.step}
                    </span>
                    <div className="w-8 h-8 rounded-md bg-white border border-slate-200 flex items-center justify-center text-slate-700">
                      <Icon className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button & Note */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
          <span className="text-xs text-slate-500 text-center sm:text-left">
            Appointment availability is confirmed directly by our clinical coordination team.
          </span>
          <button
            type="button"
            onClick={onOpenBooking}
            className="px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition cursor-pointer"
          >
            Book Home Appointment
          </button>
        </div>

      </div>
    </section>
  );
}
