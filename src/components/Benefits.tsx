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
  Sparkles
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
    <section id="benefits" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Patient Advantages
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Key Benefits of Physiotherapy at Home
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Discover why hundreds of families across Hyderabad choose personalized home physiotherapy over clinic visits.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* 8 Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS_OF_HOME_PHYSIO.map((benefit) => {
            const Icon = iconMap[benefit.iconName] || Home;
            return (
              <div
                key={benefit.title}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#003b73] group-hover:bg-[#003b73] group-hover:text-white transition-colors flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black text-slate-300 group-hover:text-blue-500 transition-colors">
                      {benefit.number}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
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

        {/* Action strip */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#003b73] to-[#0284c7] hover:from-[#00284f] hover:to-[#0369a1] text-white font-bold text-sm shadow-md hover:shadow-xl transition cursor-pointer"
          >
            Experience Home Care – Book an Appointment
          </button>
        </div>

      </div>
    </section>
  );
}
