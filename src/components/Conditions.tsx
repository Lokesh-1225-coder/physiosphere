"use client";

import React, { useState } from "react";
import {
  Activity,
  ShieldAlert,
  HeartPulse,
  RotateCcw,
  Layers,
  Zap,
  Sparkles,
  Trophy,
  Stethoscope,
  BrainCircuit,
  Bone,
  Users,
  Compass,
  Footprints,
  Dumbbell,
  Calendar,
  CheckCircle2,
  Filter
} from "lucide-react";
import { CONDITIONS_TREATED, ConditionItem } from "@/data/physiosphereData";

interface ConditionsProps {
  onSelectCondition: (conditionName: string) => void;
}

const iconComponentMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Activity,
  ShieldAlert,
  HeartPulse,
  RotateCcw,
  Layers,
  Zap,
  Sparkles,
  Trophy,
  Stethoscope,
  BrainCircuit,
  Bone,
  Users,
  Compass,
  Footprints,
  Dumbbell
};

export default function Conditions({ onSelectCondition }: ConditionsProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = [
    "All",
    "Orthopaedic",
    "Spine Care",
    "Post-Operative",
    "Neurological",
    "Geriatric"
  ];

  const filteredConditions =
    activeFilter === "All"
      ? CONDITIONS_TREATED
      : CONDITIONS_TREATED.filter((item) =>
          item.category.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <section id="conditions" className="py-16 lg:py-24 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
            Clinical Scope
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Common Conditions Treated by Physiotherapists at Home
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Experienced home rehabilitation for acute injuries, spinal pain, surgical recovery, and chronic musculoskeletal conditions across Hyderabad.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full" />
        </div>

        {/* Filter Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 hidden sm:inline-flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter by:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition cursor-pointer ${
                activeFilter === cat
                  ? "bg-[#003b73] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 16 Conditions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredConditions.map((item: ConditionItem) => {
            const Icon = iconComponentMap[item.iconName] || Activity;
            return (
              <div
                key={item.id}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-blue-300 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Visual / Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-[#003b73] group-hover:bg-[#003b73] group-hover:text-white transition-colors flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6 text-[#0284c7] group-hover:text-emerald-300 transition-colors" />
                    </div>
                    <span className="text-[11px] font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-100">
                      {item.badge}
                    </span>
                  </div>

                  {/* Condition Name */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#003b73] transition-colors leading-snug">
                    {item.name}
                  </h3>

                  {/* Short Patient-Friendly Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {item.shortDesc}
                  </p>
                </div>

                {/* Card Footer: Book Now CTA */}
                <div className="pt-4 border-t border-slate-200/60 mt-2">
                  <button
                    type="button"
                    onClick={() => onSelectCondition(item.name)}
                    className="w-full py-2.5 px-4 rounded-xl font-bold text-xs bg-white group-hover:bg-[#003b73] text-slate-800 group-hover:text-white border border-slate-300 group-hover:border-[#003b73] shadow-2xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-blue-600 group-hover:text-emerald-300" />
                    <span>Book for {item.name.split(" ")[0]}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsible Medical Note */}
        <div className="mt-12 bg-blue-50/70 border border-blue-100 rounded-2xl p-4 sm:p-6 text-center max-w-3xl mx-auto text-xs sm:text-sm text-slate-600 leading-relaxed">
          <p>
            <strong className="text-blue-900 font-bold">Responsible Care Note:</strong> Each individual’s recovery journey varies based on diagnosis, age, general health, and clinical compliance. Our therapists establish transparent, realistic recovery milestones during the initial assessment.
          </p>
        </div>

      </div>
    </section>
  );
}
