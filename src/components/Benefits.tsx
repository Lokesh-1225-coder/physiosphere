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
  CheckCircle2
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
    <section id="benefits" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
            Why Home Care
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Benefits of Physiotherapy at Home
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Why hundreds of families in Hyderabad choose doorstep physiotherapy over traditional clinic visits.
          </p>
        </div>

        {/* 8 Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {BENEFITS_OF_HOME_PHYSIO.map((benefit) => {
            const Icon = iconMap[benefit.iconName] || Home;
            return (
              <div
                key={benefit.title}
                className="bg-white rounded-lg p-5 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-md bg-slate-100 flex items-center justify-center text-blue-600">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-400">
                      {benefit.number}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Concise Action Strip */}
        <div className="mt-8 text-center sm:text-left">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm transition cursor-pointer"
          >
            Book a Home Physiotherapist
          </button>
        </div>

      </div>
    </section>
  );
}
