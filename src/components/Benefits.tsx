"use client";

import React from "react";
import {
  Home,
  UserCheck,
  Car,
  Clock,
  Smile,
  Eye,
  HeartHandshake,
  CheckCircle2,
  Calendar
} from "lucide-react";
import { BENEFITS_OF_HOME_PHYSIO } from "@/data/physiosphereData";

interface BenefitsProps {
  onOpenBooking: () => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home,
  UserCheck,
  Car,
  Clock,
  Smile,
  Eye,
  HeartHandshake,
  CheckCircle2
};

export default function Benefits({ onOpenBooking }: BenefitsProps) {
  return (
    <section id="benefits" className="py-8 sm:py-14 bg-[#f0f7fd] border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 sm:mb-8 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            Why Home Care
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight leading-tight">
            Benefits of Physiotherapy at Home
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1">
            Why families across Hyderabad prefer doorstep physiotherapy over crowded clinical visits.
          </p>
        </div>

        {/* 8 Benefits Grid - 2-col on mobile, 4-col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {BENEFITS_OF_HOME_PHYSIO.map((benefit) => {
            const Icon = iconMap[benefit.iconName] || Home;
            return (
              <div
                key={benefit.title}
                className="bg-white rounded-xl p-4 sm:p-5 border border-blue-100 shadow-2xs highlight-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {benefit.number}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#0a2540] mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Action CTA */}
        <div className="text-center sm:text-left">
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs sm:text-sm shadow-2xs transition cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Home Physiotherapist</span>
          </button>
        </div>

      </div>
    </section>
  );
}