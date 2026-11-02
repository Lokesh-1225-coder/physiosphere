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
    <section id="services" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
            Clinical Disciplines
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Our Physiotherapy Services
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Specialized home rehabilitation delivered by qualified physiotherapists across Hyderabad.
          </p>
        </div>

        {/* Desktop & Mobile Tabbed Card Layout */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: List of Disciplines */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-200 p-3 sm:p-4 bg-slate-50">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2 px-2">
              Select Discipline
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1">
              {SERVICE_CATEGORIES.map((s) => {
                const isSelected = s.id === selectedId;
                const Icon = iconMap[s.iconName] || Activity;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedId(s.id)}
                    className={`w-full text-left p-2.5 rounded-md flex items-center gap-2.5 transition cursor-pointer text-xs sm:text-sm font-semibold ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "text-slate-700 hover:bg-white"
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
          <div className="lg:col-span-7 p-5 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {active.title}
                  </h3>
                  <span className="text-xs text-slate-500">
                    Doorstep Sessions Across Hyderabad
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                {active.detailedDesc}
              </p>

              <div className="space-y-2">
                <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
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

            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                Administered by licensed physiotherapists
              </span>
              <button
                type="button"
                onClick={() => onSelectService(active.title)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book {active.title}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
