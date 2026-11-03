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
    <section id="benefits" className="py-14 sm:py-20 bg-[#f0f7fd] border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Why Home Care
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0a2540] tracking-tight leading-tight">
            Benefits of Physiotherapy at Home
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Why hundreds of families in Hyderabad choose doorstep physiotherapy over traditional clinic visits.
          </p>
        </div>

        {/* 8 Benefits Grid with Cursor Highlighting */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS_OF_HOME_PHYSIO.map((benefit) => {
            const Icon = iconMap[benefit.iconName] || Home;
            return (
              <div
                key={benefit.title}
                className="bg-white rounded-xl p-5 sm:p-6 border border-blue-100/90 shadow-xs highlight-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold text-blue-500 bg-blue-50 px-2 py-0.5 rounded">
                      {benefit.number}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#0a2540] mb-2">
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

        {/* Increased Size Action Strip */}
        <div className="mt-10 text-center sm:text-left">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base sm:text-lg shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
          >
            <Calendar className="w-5 h-5" />
            <span>Book a Home Physiotherapist</span>
          </button>
        </div>

      </div>
    </section>
  );
}