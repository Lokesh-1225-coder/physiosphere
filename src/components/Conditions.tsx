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
  ArrowRight
} from "lucide-react";
import { CONDITIONS_TREATED, ConditionItem } from "@/data/physiosphereData";

interface ConditionsProps {
  onSelectCondition: (conditionName: string) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
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
    <section id="conditions" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
            Clinical Conditions
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Common Conditions Treated at Home
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Targeted home rehabilitation for acute pain, chronic musculoskeletal conditions, and surgical recovery.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition cursor-pointer ${
                activeFilter === cat
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 16 Conditions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredConditions.map((item: ConditionItem) => {
            const Icon = iconMap[item.iconName] || Activity;
            return (
              <div
                key={item.id}
                className="bg-white rounded-lg p-4 sm:p-5 border border-slate-200 hover:border-blue-400 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-md bg-slate-100 text-blue-600 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4" />
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => onSelectCondition(item.name)}
                    className="w-full inline-flex items-center justify-between text-xs font-semibold text-blue-600 hover:text-blue-800 transition cursor-pointer py-1"
                  >
                    <span>Book for {item.name.split(" ")[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Medical Phrasing Note */}
        <div className="mt-8 p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-600 max-w-3xl leading-relaxed">
          <strong className="text-slate-800">Clinical Note:</strong> Recovery timelines vary depending on diagnosis, age, and individual compliance. Personalized milestones are established during your initial assessment.
        </div>

      </div>
    </section>
  );
}
