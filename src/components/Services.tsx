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
    <section id="services" className="py-14 sm:py-20 bg-[#f0f7fd] border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Clinical Disciplines
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0a2540] tracking-tight leading-tight">
            Our Core Physiotherapy Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Specialized home rehabilitation delivered by qualified physiotherapists across Hyderabad.
          </p>
        </div>

        {/* Desktop & Mobile Tabbed Card Layout with Cursor Highlighting */}
        <div className="bg-white rounded-2xl border border-blue-100/90 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 highlight-card">
          
          {/* Left Column: List of Disciplines */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-blue-100 p-4 sm:p-5 bg-[#f8fbfe]">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 px-2">
              Select Discipline
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5">
              {SERVICE_CATEGORIES.map((s) => {
                const isSelected = s.id === selectedId;
                const Icon = iconMap[s.iconName] || Activity;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedId(s.id)}
                    className={`w-full text-left p-3 rounded-xl flex items-center gap-3 transition-all cursor-pointer text-xs sm:text-sm font-bold ${
                      isSelected
                        ? "bg-blue-600 text-white shadow-xs"
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
          <div className="lg:col-span-7 p-6 sm:p-9 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0a2540]">
                    {active.title}
                  </h3>
                  <span className="text-xs font-semibold text-slate-500">
                    Doorstep Sessions Across Hyderabad
                  </span>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                {active.detailedDesc}
              </p>

              <div className="space-y-3">
                <div className="text-xs font-bold text-[#0a2540] uppercase tracking-wider">
                  Scope of Care Includes:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {active.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enlarged CTA button */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <span className="text-xs text-slate-500">
                Administered by licensed physiotherapists
              </span>
              <button
                type="button"
                onClick={() => onSelectService(active.title)}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book {active.title}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}