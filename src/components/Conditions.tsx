"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  ArrowRight,
  Calendar
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
    <section id="conditions" className="py-14 sm:py-20 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 text-center sm:text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-2">
            Clinical Conditions
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black text-[#0a2540] tracking-tight leading-tight">
            Common Conditions Treated at Home
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Targeted home rehabilitation for acute pain, chronic musculoskeletal conditions, and surgical recovery.
          </p>
        </div>

        {/* Filter Pills with active cursor highlighting */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === cat
                  ? "bg-[#0a2540] text-white shadow-sm"
                  : "bg-[#f0f7fd] text-slate-700 hover:bg-blue-100/80 hover:text-blue-800 border border-blue-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 16 Conditions Grid with High-Quality Realistic Photographs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredConditions.map((item: ConditionItem) => {
            const Icon = iconMap[item.iconName] || Activity;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs highlight-card flex flex-col justify-between group"
              >
                <div>
                  {/* High Quality Realistic Photograph */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={item.image}
                      alt={`${item.name} physiotherapy treatment at home`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/80 via-transparent to-transparent opacity-80" />
                    
                    {/* Category Tag on Photo */}
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[#0a2540] shadow-xs">
                        {item.category}
                      </span>
                    </div>

                    {/* Small Icon Badge */}
                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-5">
                    <h3 className="text-base sm:text-lg font-bold text-[#0a2540] mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                      {item.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="p-5 pt-0">
                  <button
                    type="button"
                    onClick={() => onSelectCondition(item.name)}
                    className="w-full inline-flex items-center justify-between py-2.5 px-3.5 rounded-lg bg-[#f0f7fd] hover:bg-blue-600 text-blue-700 hover:text-white text-xs sm:text-sm font-bold transition-all cursor-pointer border border-blue-200/80 hover:border-blue-600 shadow-2xs"
                  >
                    <span>Book for {item.name.split(" ")[0]}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Note with Consultation CTA */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-[#f0f7fd] border border-blue-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-slate-700 leading-relaxed text-center sm:text-left">
            <strong className="text-[#0a2540] font-bold block sm:inline">Clinical Note: </strong>
            Recovery timelines vary depending on diagnosis, age, and individual compliance. Personalized recovery milestones are established during your initial home assessment.
          </div>
          <button
            type="button"
            onClick={() => onSelectCondition("General Physiotherapy Consultation")}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all hover:scale-[1.02] cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Consult Our Team</span>
          </button>
        </div>

      </div>
    </section>
  );
}