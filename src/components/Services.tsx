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
  CheckCircle,
  Calendar,
  ChevronRight
} from "lucide-react";
import { SERVICE_CATEGORIES, ServiceCategory } from "@/data/physiosphereData";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

const serviceIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
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
  const [selectedTab, setSelectedTab] = useState<string>(SERVICE_CATEGORIES[0].id);

  const activeCategory = SERVICE_CATEGORIES.find((s) => s.id === selectedTab) || SERVICE_CATEGORIES[0];
  const ActiveIcon = serviceIconMap[activeCategory.iconName] || Activity;

  return (
    <section id="services" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider">
            Comprehensive Specialties
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Core Physiotherapy Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Specialized physical rehabilitation disciplines delivered directly to your residence across Hyderabad by licensed practitioners.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Desktop / Tablet Service Tabbed Showcase */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12 mb-12">
          
          {/* Left Column: Service Selector List */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-100 p-4 sm:p-6 bg-slate-50/50">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-3">
              Select a Discipline
            </div>
            <div className="space-y-1.5">
              {SERVICE_CATEGORIES.map((cat) => {
                const Icon = serviceIconMap[cat.iconName] || Activity;
                const isSelected = cat.id === selectedTab;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedTab(cat.id)}
                    className={`w-full text-left p-3.5 rounded-2xl flex items-center justify-between transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#003b73] text-white shadow-md"
                        : "hover:bg-white text-slate-700 hover:text-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                          isSelected ? "bg-white/15 text-emerald-300" : "bg-slate-200/60 text-blue-700"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-sm">{cat.title}</span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-emerald-300 translate-x-1" : "text-slate-400"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Discipline View */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#003b73] flex items-center justify-center border border-blue-100">
                  <ActiveIcon className="w-6 h-6 text-[#0284c7]" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {activeCategory.title}
                  </h3>
                  <p className="text-xs text-emerald-600 font-semibold">
                    Home Visits Available Across Hyderabad
                  </p>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                {activeCategory.detailedDesc}
              </p>

              {/* Scope of Treatment Benefits */}
              <div className="space-y-3 mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Key Rehabilitation Focus:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeCategory.benefits.map((benefit, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs sm:text-sm text-slate-700 font-medium"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Bar */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 text-center sm:text-left">
                Assessed & supervised by experienced physiotherapists
              </span>
              <button
                type="button"
                onClick={() => onSelectService(activeCategory.title)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#003b73] to-[#0284c7] hover:from-[#002f5c] hover:to-[#0369a1] text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-emerald-300" />
                <span>Book {activeCategory.title}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
