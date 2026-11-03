"use client";

import React, { useState } from "react";
import {
  Activity,
  BrainCircuit,
  Trophy,
  ShieldAlert,
  HeartPulse,
  Sparkles,
  Zap,
  Footprints,
  CheckCircle2,
  Calendar
} from "lucide-react";
import { SERVICE_CATEGORIES } from "@/data/physiosphereData";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity,
  BrainCircuit,
  Trophy,
  ShieldAlert,
  HeartPulse,
  Sparkles,
  Zap,
  Footprints
};

export default function Services({ onSelectService }: ServicesProps) {
  const [selectedId, setSelectedId] = useState(SERVICE_CATEGORIES[0].id);

  const active = SERVICE_CATEGORIES.find((s) => s.id === selectedId) || SERVICE_CATEGORIES[0];
  const ActiveIcon = iconMap[active.iconName] || Activity;

  return (
    <section id="services" className="py-8 sm:py-14 bg-[#f0f7fd] border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-5 sm:mb-7 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
            Clinical Disciplines
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0a2540] tracking-tight leading-tight">
            Our Core Physiotherapy Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-1">
            Specialized home rehabilitation delivered by qualified physiotherapists across Hyderabad.
          </p>
        </div>

        {/* Mobile-Friendly Discipline Pills (Horizontally scrollable on mobile, compact list on desktop) */}
        <div className="lg:hidden flex items-center gap-1.5 overflow-x-auto pb-2 mb-4 -mx-4 px-4">
          {SERVICE_CATEGORIES.map((s) => {
            const isSelected = s.id === selectedId;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setSelectedId(s.id)}
                className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition cursor-pointer flex-shrink-0 ${
                  isSelected
                    ? "bg-blue-600 text-white shadow-2xs"
                    : "bg-white text-slate-700 border border-blue-100"
                }`}
              >
                {s.title}
              </button>
            );
          })}
        </div>

        {/* Desktop & Mobile Card Layout */}
        <div className="bg-white rounded-xl border border-blue-100 shadow-2xs overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: List of Disciplines (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 border-r border-blue-100 p-3 sm:p-4 bg-[#f8fbfe]">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 px-2">
              Select Discipline
            </div>
            <div className="space-y-1">
              {SERVICE_CATEGORIES.map((s) => {
                const isSelected = s.id === selectedId;
                const Icon = iconMap[s.iconName] || Activity;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedId(s.id)}
                    className={`w-full text-left p-2.5 rounded-lg flex items-center gap-2.5 transition cursor-pointer text-xs sm:text-sm font-bold ${
                      isSelected
                        ? "bg-blue-600 text-white shadow-2xs"
                        : "text-slate-700 hover:bg-blue-50/80 hover:text-blue-700"
                    }`}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{s.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Active Discipline Scope */}
          <div className="lg:col-span-7 p-4 sm:p-7 flex flex-col justify-between space-y-4 sm:space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-[#0a2540]">
                    {active.title}
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-500">
                    Doorstep Sessions Across Hyderabad
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {active.detailedDesc}
              </p>

              <div className="space-y-2">
                <div className="text-xs font-bold text-[#0a2540] uppercase tracking-wider">
                  Scope of Care Includes:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {active.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Accessible CTA button */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Administered by licensed physiotherapists
              </span>
              <button
                type="button"
                onClick={() => onSelectService(active.title)}
                className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs sm:text-sm font-bold shadow-2xs transition cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book {active.title.split(" ")[0]}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}